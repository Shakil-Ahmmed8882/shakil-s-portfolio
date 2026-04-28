"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export const PageCurtain = () => {
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = curtainRef.current;
    if (!el) return;

    gsap.to(el, {
      scaleY: 0,
      transformOrigin: "top center",
      duration: 0.9,
      ease: "expo.inOut",
      delay: 0.1,
      onComplete: () => {
        el.style.display = "none";
      },
    });
  }, []);

  return (
    <div
      ref={curtainRef}
      id="page-curtain"
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{
        background: "hsl(var(--bg-h, 20) var(--bg-s, 12%) calc(var(--bg-l, 6%) - 1%))",
      }}
    />
  );
};
