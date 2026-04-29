"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Code2 } from "lucide-react";

export const HeroHeading = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.set(".hero-line", { yPercent: 110, skewY: 4 });
      gsap.set(".hero-eyebrow", { opacity: 0, y: 16 });
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.6 }).to(
        ".hero-line",
        { yPercent: 0, skewY: 0, duration: 1.1, stagger: 0.1 },
        "-=0.3"
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-5">
      <span className="hero-eyebrow inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
        <span
          className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-primary))]"
          style={{ boxShadow: "0 0 8px hsl(var(--accent-primary)/1)" }}
        />
        <Code2 size={12} className="opacity-60" />
        Scalable Web Solutions
      </span>

      <h1 className="font-display font-bold leading-[0.86] tracking-tighter">
        <span className="block overflow-hidden text-[clamp(3.2rem,9vw,8.5rem)]">
          <span className="hero-line block text-[hsl(var(--accent-primary))]">
            WEB
          </span>
        </span>
        <span className="block overflow-hidden text-[clamp(3.2rem,9vw,8.5rem)] md:pl-[14%]">
          <span className="hero-line block text-muted-foreground">
            DEVELOPER
          </span>
        </span>
      </h1>
    </div>
  );
};
