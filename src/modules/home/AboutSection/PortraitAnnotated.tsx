"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const PortraitAnnotated = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const ctx = gsap.context(() => {
      const paths = svg.querySelectorAll<SVGPathElement>("path[data-scribble]");

      paths.forEach((p) => {
        const len = p.getTotalLength();
        p.style.strokeDasharray = `${len}`;
        p.style.strokeDashoffset = `${len}`;
      });

      gsap.to('[data-scribble]', {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: "power2.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: svg,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from('[data-tag]', {
        opacity: 0,
        y: 8,
        rotate: (i) => (i % 2 === 0 ? -3 : 3),
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.6,
        scrollTrigger: {
          trigger: svg,
          start: "top 75%",
          once: true,
        },
      });
    }, svg);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[440px] mx-auto"
    >
      {/* paper-ish frame with slight rotation for sketchbook feel */}
      <div className="relative -rotate-[1.2deg]">
        <div
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border"
          style={{
            // borderColor: "hsl(var(--accent-primary)/0.25)",
            boxShadow:
              "120px 100px 600px -20px hsl(var(--accent-primary)/0.1), 0 0 0 0.2px hsl(var(--foreground)/0.01)",
          }}
        >
          {/* portrait — desaturated for B&W cartoon vibe */}
          <Image
            src="/shakil-bw.png"
            alt="Shakil — portrait"
            fill
            sizes="(max-width: 768px) 80vw, 440px"
            priority
            className="object-cover"
            style={{
              filter: "grayscale(1) contrast(1.08) brightness(0.95)",
              mixBlendMode: "luminosity",
            }}
          />

          {/* halftone-ish overlay for cartoon feel */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(hsl(var(--foreground)/0.18) 1px, transparent 1px)",
              backgroundSize: "5px 5px",
              mixBlendMode: "overlay",
              opacity: 0.45,
            }}
          />

          {/* film grain edge vignette */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 55%, hsl(var(--background)/0.85) 100%)",
            }}
          />

          {/* SVG annotations layered on top */}
          <svg
            ref={svgRef}
            viewBox="0 0 400 500"
            className="pointer-events-none absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            aria-hidden
          >
          
           

            {/* tiny orbit dots */}
            <circle data-scribble cx="80" cy="240" r="3" fill="hsl(var(--accent-primary))" />
            <circle data-scribble cx="340" cy="120" r="2.5" fill="hsl(var(--accent-primary))" />
            <circle data-scribble cx="60" cy="320" r="2" fill="hsl(var(--foreground))" opacity="0.6" />
          </svg>
        </div>

        {/* sticker tags */}
        {/* <span
          data-tag
          className="absolute -top-3 -left-6 px-3 py-1 text-[11px] font-handwriting tracking-wide rounded-full bg-background border shadow-md -rotate-6"
          style={{
            borderColor: "hsl(var(--accent-primary)/0.35)",
            color: "hsl(var(--accent-primary))",
            fontFamily: 'ui-rounded, "Comic Sans MS", system-ui',
          }}
        >
          still asking why →
        </span>

        <span
          data-tag
          className="absolute top-[40%] -right-10 px-3 py-1 text-[11px] tracking-wide rounded-full bg-background border shadow-md rotate-3"
          style={{
            borderColor: "hsl(var(--foreground)/0.18)",
            fontFamily: 'ui-rounded, "Comic Sans MS", system-ui',
          }}
        >
          draws to think
        </span>

        <span
          data-tag
          className="absolute -bottom-3 left-6 px-3 py-1 text-[11px] tracking-wide rounded-full bg-background border shadow-md -rotate-2"
          style={{
            borderColor: "hsl(var(--foreground)/0.18)",
            fontFamily: 'ui-rounded, "Comic Sans MS", system-ui',
          }}
        >
          cycles · sings · journals
        </span> */}
      </div>
    </motion.div>
  );
};
