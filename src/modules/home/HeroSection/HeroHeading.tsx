"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export const HeroHeading = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.set(".hero-line", { yPercent: 105 });
      gsap.set(".hero-eyebrow, .hero-intro, .hero-cta", { opacity: 0, y: 14 });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.6 })
        .to(
          ".hero-line",
          { yPercent: 0, duration: 1.1, stagger: 0.08 },
          "-=0.2"
        )
        .to(".hero-intro", { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .to(
          ".hero-cta",
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.06 },
          "-=0.4"
        );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-6">
      <span className="hero-eyebrow inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
        <span
          className="inline-block h-1 w-1 rounded-full bg-[hsl(var(--accent-mint))]"
          style={{ boxShadow: "0 0 6px hsl(var(--accent-mint) / 0.9)" }}
        />
        Scalable Web Solutions
      </span>

      <h1 className="font-display text-[clamp(3rem,9vw,8rem)] font-semibold leading-[0.9] tracking-tighter">
        <span className="block overflow-hidden">
          <span className="hero-line block text-foreground">WEB</span>
        </span>
        <span className="block overflow-hidden">
          <span className="hero-line block text-muted-foreground/40">
            DEVELOPER
          </span>
        </span>
      </h1>

      <p className="hero-intro max-w-md text-sm md:text-base text-muted-foreground leading-relaxed">
        Full-stack developer with{" "}
        <span className="text-foreground font-medium">4+ years</span> building
        scalable, performant applications.
      </p>
    </div>
  );
};
