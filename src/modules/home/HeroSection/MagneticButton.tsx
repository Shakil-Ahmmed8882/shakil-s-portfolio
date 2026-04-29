"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type PointerEvent, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  strength?: number;
  onClick?: () => void;
};

export const MagneticButton = ({
  children,
  href,
  target,
  rel,
  className = "",
  strength = 0.35,
  onClick,
}: Props) => {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.span
      style={{ x: sx, y: sy }}
      className="relative z-10 inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className={className}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={className}
      type="button"
    >
      {inner}
    </motion.button>
  );
};
