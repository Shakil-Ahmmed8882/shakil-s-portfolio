"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["home", "about", "skills", "experience", "projects", "contact"] as const;
export type TSectionId = (typeof SECTIONS)[number];

export const useNavbarContextHelper = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<TSectionId>("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = SECTIONS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActive(visible.target.id as TSectionId);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return {
    scrolled,
    active,
    open,
    setOpen,
    sections: SECTIONS,
  };
};
