"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Generates a deterministic dot field roughly shaped like a head/bust silhouette.
 * Each dot is placed inside an ellipse (head) or trapezoid (shoulders).
 */
const useBustDots = (count = 220) =>
  useMemo(() => {
    const dots: { x: number; y: number; r: number; o: number }[] = [];
    let seed = 1;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    // Head: ellipse centered at (0.5, 0.38), rx=0.18, ry=0.22
    const headCount = Math.floor(count * 0.55);
    for (let i = 0; i < headCount; i++) {
      const a = rand() * Math.PI * 2;
      const r = Math.sqrt(rand());
      const x = 0.5 + Math.cos(a) * r * 0.18;
      const y = 0.38 + Math.sin(a) * r * 0.22;
      dots.push({ x, y, r: 0.5 + rand() * 1.2, o: 0.25 + rand() * 0.55 });
    }

    // Shoulders: trapezoid below head
    const shoulderCount = count - headCount;
    for (let i = 0; i < shoulderCount; i++) {
      const t = rand();
      const yT = 0.62 + t * 0.32;
      const widthAtY = 0.22 + t * 0.22;
      const x = 0.5 + (rand() - 0.5) * widthAtY * 2;
      dots.push({ x, y: yT, r: 0.5 + rand() * 1.1, o: 0.18 + rand() * 0.45 });
    }
    return dots;
  }, [count]);

export const AboutBackground = ({title}:{title: string}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const bustRef = useRef<SVGSVGElement>(null);
  const aboutTextRef = useRef<HTMLSpanElement>(null);

  const dots = useBustDots(240);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const ctx = gsap.context(() => {
      // Parallax: grid drifts up, bust drifts opposite, ABOUT text creeps right
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current,
          { yPercent: 12 },
          {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.4,
            },
          }
        );
      }

      if (bustRef.current) {
        gsap.fromTo(
          bustRef.current,
          { yPercent: -6, xPercent: 4 },
          {
            yPercent: 6,
            xPercent: -4,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.6,
            },
          }
        );
      }

      if (aboutTextRef.current) {
        gsap.fromTo(
          aboutTextRef.current,
          { xPercent: -3 },
          {
            xPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top bottom",
              end: "bottom top",
              scrub: 2,
            },
          }
        );
      }

      // Subtle dot twinkle via repeating yoyo on random dots
      const dotEls = wrap.querySelectorAll<SVGCircleElement>("[data-bust-dot]");
      dotEls.forEach((el, i) => {
        if (i % 5 !== 0) return;
        gsap.to(el, {
          opacity: 0.1,
          duration: 1.6 + (i % 4) * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: (i % 7) * 0.2,
        });
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Mega ABOUT text — deeper layer than the ParallaxSection ghostTitle */}
      <span
        ref={aboutTextRef}
        className="select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black uppercase whitespace-nowrap leading-none"
        style={{
          fontSize: "clamp(9rem, 22vw, 22rem)",
          color: "hsl(var(--accent-primary) / 0.045)",
          letterSpacing: "-0.04em",
          textShadow:
            "0 0 60px hsl(var(--accent-primary)/0.08), 0 0 120px hsl(var(--accent-primary)/0.04)",
          WebkitTextStroke: "1px hsl(var(--accent-primary) / 0.08)",
        }}
      >
        {title}
      </span>

      {/* Spatial wireframe grid — perspective floor at the bottom */}
      <div
        ref={gridRef}
        className="absolute left-1/2 -translate-x-1/2 bottom-[-10%] w-[160%] h-[70%]"
        style={{
          perspective: "900px",
          perspectiveOrigin: "50% 0%",
          maskImage:
            "linear-gradient(to top, black 25%, transparent 95%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 25%, transparent 95%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: "rotateX(62deg) translateZ(0)",
            transformOrigin: "50% 100%",
            backgroundImage: `
              linear-gradient(to right,
                hsl(265 80% 60% / 0.18) 1px,
                transparent 1px),
              linear-gradient(to bottom,
                hsl(220 90% 60% / 0.18) 1px,
                transparent 1px)
            `,
            backgroundSize: "70px 70px",
            filter: "blur(0.4px) drop-shadow(0 0 6px hsl(265 80% 60% / 0.25))",
          }}
        />
      </div>

      {/* Dot-matrix ghost bust on right-back */}
      <svg
        ref={bustRef}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        className="absolute right-[-6%] top-1/2 -translate-y-1/2 h-[120%] w-auto opacity-[0.55]"
        style={{
          filter:
            "drop-shadow(0 0 28px hsl(var(--accent-primary)/0.35)) blur(0.2px)",
        }}
      >
        {dots.map((d, i) => (
          <circle
            key={i}
            data-bust-dot
            cx={d.x * 100}
            cy={d.y * 100}
            r={d.r * 0.18}
            fill="hsl(var(--accent-primary))"
            opacity={d.o}
          />
        ))}
      </svg>

      {/* Subtle vignette so foreground stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, hsl(var(--background)/0.65) 100%)",
        }}
      />
    </div>
  );
};
