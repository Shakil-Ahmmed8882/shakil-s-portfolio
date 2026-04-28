"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export const HeroPortrait = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rx = useSpring(useTransform(my, [-50, 50], [6, -6]), { stiffness: 60, damping: 20 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-6, 6]), { stiffness: 60, damping: 20 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const cx = window.innerWidth * 0.75;
      const cy = window.innerHeight * 0.5;
      mx.set(((e.clientX - cx) / window.innerWidth) * 100);
      my.set(((e.clientY - cy) / window.innerHeight) * 100);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: 1.0,
        },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className="perspective">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ rotateX: rx, rotateY: ry }}
        className="preserve-3d relative mx-auto w-full max-w-[380px]"
      >
        {/* outer glow */}
        <div
          aria-hidden
          className="absolute -inset-8 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse, hsl(var(--accent-primary)/0.35) 0%, transparent 70%)",
          }}
        />

        {/* ring decorations */}
        <div
          className="absolute -inset-4 rounded-full border border-[hsl(var(--accent-primary)/0.18)] animate-[spin_18s_linear_infinite]"
          style={{ borderStyle: "dashed" }}
        />
        <div
          className="absolute -inset-8 rounded-full border border-[hsl(var(--accent-primary)/0.10)] animate-[spin_28s_linear_infinite_reverse]"
          style={{ borderStyle: "dashed" }}
        />

        {/* photo circle */}
        <div className="relative aspect-square rounded-full overflow-hidden glass-card border-2 border-[hsl(var(--accent-primary)/0.4)]">
          <Image
            src="/shakil.png"
            alt="Shakil Ahmmed"
            fill
            className="object-cover object-center"
            priority
          />
          {/* overlay tint for depth */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(160deg, hsl(var(--accent-primary)/0.06) 0%, transparent 45%, hsl(var(--background)/0.25) 100%)",
            }}
          />
        </div>

        {/* status badge */}
        <div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-mono uppercase tracking-widest whitespace-nowrap"
          style={{ boxShadow: "0 4px 24px -4px hsl(var(--accent-primary)/0.3)" }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-primary))]"
            style={{ boxShadow: "0 0 8px hsl(var(--accent-primary)/1)" }}
          />
          Available for work
        </div>

        {/* floating stat chips */}
        <div
          className="absolute -left-6 top-1/4 glass rounded-xl px-3 py-2 text-center"
          style={{ boxShadow: "0 8px 24px -8px hsl(var(--accent-primary)/0.25)" }}
        >
          <p className="font-display text-xl font-bold text-[hsl(var(--accent-primary))]">4+</p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Years</p>
        </div>

        <div
          className="absolute -right-6 top-1/3 glass rounded-xl px-3 py-2 text-center"
          style={{ boxShadow: "0 8px 24px -8px hsl(var(--accent-primary)/0.25)" }}
        >
          <p className="font-display text-xl font-bold text-[hsl(var(--accent-primary))]">3</p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Co's</p>
        </div>
      </motion.div>
    </div>
  );
};
