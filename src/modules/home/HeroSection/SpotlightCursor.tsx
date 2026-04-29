"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export const SpotlightCursor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);
  const sx = useSpring(mx, { stiffness: 90, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 90, damping: 20, mass: 0.6 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handle = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      mx.set(e.clientX - rect.left);
      my.set(e.clientY - rect.top);
    };
    const leave = () => {
      mx.set(-1000);
      my.set(-1000);
    };

    const parent = el.parentElement;
    if (!parent) return;
    parent.addEventListener("pointermove", handle);
    parent.addEventListener("pointerleave", leave);
    return () => {
      parent.removeEventListener("pointermove", handle);
      parent.removeEventListener("pointerleave", leave);
    };
  }, [mx, my]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, hsl(var(--accent-primary)/0.18) 0%, hsl(var(--accent-primary)/0.06) 35%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
};
