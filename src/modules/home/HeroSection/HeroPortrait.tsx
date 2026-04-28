"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const HeroPortrait = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-40, 40], [4, -4]), {
    stiffness: 70,
    damping: 22,
  });
  const ry = useSpring(useTransform(mx, [-40, 40], [-4, 4]), {
    stiffness: 70,
    damping: 22,
  });
  const tx = useSpring(useTransform(mx, [-40, 40], [-6, 6]), {
    stiffness: 60,
    damping: 18,
  });
  const ty = useSpring(useTransform(my, [-40, 40], [-6, 6]), {
    stiffness: 60,
    damping: 18,
  });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const cx = window.innerWidth * 0.75;
      const cy = window.innerHeight * 0.5;
      mx.set(((e.clientX - cx) / window.innerWidth) * 80);
      my.set(((e.clientY - cy) / window.innerHeight) * 80);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef}>
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ rotateX: rx, rotateY: ry, x: tx, y: ty }}
        className="relative mx-auto aspect-[4/5] w-full max-w-[420px]"
      >
        <div
          aria-hidden
          className="absolute -inset-10 rounded-[2rem] opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at 30% 30%, hsl(var(--accent-mint) / 0.25), transparent 60%), radial-gradient(ellipse at 80% 80%, hsl(var(--accent-mint) / 0.12), transparent 60%)",
          }}
        />

        <div className="relative h-full w-full overflow-hidden rounded-[2rem] glass-card">
          <div
            className="absolute inset-0 rounded-[inherit]"
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--card) / 0.5), hsl(var(--card) / 0.1))",
            }}
          />
          <div className="absolute inset-0 rounded-[inherit] dot-pattern opacity-30" />
          <svg
            viewBox="0 0 200 250"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <defs>
              <linearGradient id="silhouette" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--accent-mint))" stopOpacity="0.45" />
                <stop offset="100%" stopColor="hsl(var(--accent-mint))" stopOpacity="0.15" />
              </linearGradient>
              <radialGradient id="silGlow" cx="0.5" cy="0.4" r="0.5">
                <stop offset="0%" stopColor="hsl(var(--accent-mint))" stopOpacity="0.35" />
                <stop offset="100%" stopColor="hsl(var(--accent-mint))" stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse cx="100" cy="100" rx="55" ry="55" fill="url(#silGlow)" />
            <path
              d="M100 60 Q130 60 130 95 Q130 125 100 130 Q70 125 70 95 Q70 60 100 60 Z M40 245 Q40 175 100 165 Q160 175 160 245 Z"
              fill="url(#silhouette)"
            />
          </svg>

          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-card/80 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground backdrop-blur">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-mint))]"
              style={{ boxShadow: "0 0 8px hsl(var(--accent-mint) / 0.9)" }}
            />
            available
          </div>
          <div className="absolute bottom-4 right-4 rounded-full bg-card/80 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground backdrop-blur">
            v.04
          </div>
        </div>
      </motion.div>
    </div>
  );
};
