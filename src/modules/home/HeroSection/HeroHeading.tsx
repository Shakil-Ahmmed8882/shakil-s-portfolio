"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Code2, Zap } from "lucide-react";

export const HeroHeading = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.set(".hero-line", { yPercent: 110, skewY: 4 });
      gsap.set(".hero-eyebrow, .hero-intro, .hero-cta, .hero-badge", {
        opacity: 0, y: 16,
      });
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.6 })
        .to(".hero-line",   { yPercent: 0, skewY: 0, duration: 1.1, stagger: 0.10 }, "-=0.3")
        .to(".hero-badge",  { opacity: 1, y: 0, duration: 0.5, stagger: 0.06 }, "-=0.5")
        .to(".hero-intro",  { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .to(".hero-cta",    { opacity: 1, y: 0, duration: 0.5, stagger: 0.07 }, "-=0.4");
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-6">
      {/* eyebrow */}
      <span className="hero-eyebrow inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
        <span
          className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-primary))]"
          style={{ boxShadow: "0 0 8px hsl(var(--accent-primary)/1)" }}
        />
        <Code2 size={12} className="opacity-60" />
        Scalable Web Solutions
      </span>

      {/* headline */}
      <h1 className="font-display text-[clamp(3.2rem,9vw,8.5rem)] font-bold leading-[0.88] tracking-tighter">
        
        <span className="block overflow-hidden">
          <span className="hero-line block text-[hsl(var(--accent-primary))]">
        WEB
          </span>
        </span>
        <span className="block overflow-hidden">
          <span className="hero-line block text-muted-foreground  ">
            DEVELOPER
          </span>
        </span>
      </h1>

      {/* tech badges */}
      <div className="flex flex-wrap gap-2">
        {["Next.js", "TypeScript", "Node.js"].map((t) => (
          <span
            key={t}
            className="hero-badge inline-flex items-center gap-1.5 glass rounded-full px-3 py-1 text-[11px] font-mono text-muted-foreground"
          >
            <Zap size={10} className="text-[hsl(var(--accent-primary))]" />
            {t}
          </span>
        ))}
      </div>

      {/* intro */}
      <p className="hero-intro max-w-sm text-sm md:text-base text-muted-foreground leading-relaxed">
        Full-stack developer with{" "}
        <span className="text-foreground font-semibold">4+ years</span> building
        scalable, performant applications.
      </p>
    </div>
  );
};
