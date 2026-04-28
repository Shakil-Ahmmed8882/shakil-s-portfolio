"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Options = {
  selector?: string;
  y?: number;
  stagger?: number;
  duration?: number;
  start?: string;
};

export const useScrollReveal = (options: Options = {}) => {
  const ref = useRef<HTMLElement | null>(null);
  const {
    selector = "[data-reveal]",
    y = 24,
    stagger = 0.08,
    duration = 0.9,
    start = "top 85%",
  } = options;

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>(selector));
    if (targets.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y });
      ScrollTrigger.batch(targets, {
        start,
        onEnter: (els) =>
          gsap.to(els, {
            opacity: 1,
            y: 0,
            duration,
            stagger,
            ease: "expo.out",
            overwrite: true,
          }),
        once: true,
      });
    }, root);

    return () => ctx.revert();
  }, [selector, y, stagger, duration, start]);

  return ref;
};
