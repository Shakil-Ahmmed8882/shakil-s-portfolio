"use client";

import { type RefObject } from "react";
import {
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";

/**
 * Drives the scroll-based behavior of the hero gallery — totally smooth,
 * never snaps, never hangs.
 *
 * Strategy:
 *   • One source of truth: scrollYProgress against the hero element.
 *   • That raw value is pushed through a critically-damped spring so any
 *     wheel jitter is filtered out before it reaches the compositor.
 *   • Every output (rotateX, rotateY, translateY, opacity, scale) is a
 *     pure function of the smoothed progress — so when scroll reverses,
 *     the gallery glides back to its rest pose with the same easing.
 *   • Opacity is driven over the FULL scroll range (0→1), so leaving
 *     the hero is a graceful fade — never a sudden snap.
 *
 *  scrollYProgress mapping:
 *      0   → hero top is at viewport top         (rest pose, horizontal)
 *      0.5 → hero half-scrolled past             (mid tilt)
 *      1   → hero bottom is at viewport top      (fully folded away)
 */
export const useParallaxAnimation = (
  ref: RefObject<HTMLElement>
): {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  translateY: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
} => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Critically-damped spring → silky, no overshoot, no jitter.
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.4,
    restDelta: 0.0005,
  });

  // Rest pose: gentle horizontal plane (slight tilt for depth).
  // As you scroll DOWN: rotateX grows → plane stands up vertically.
  // rotateY stays constant (right-side-closer perspective is permanent).
  const rotateX = useTransform(smooth, [0, 1], [8, 42]);

  // rotateY negative = the right edge rotates toward the camera (closer),
  // the left edge rotates away (farther). User wants the right side
  // visibly closer than current.
  const rotateY = useTransform(smooth, [0, 1], [-14, -22]);

  // Lift the gallery as it folds — feels like it's drifting up & away.
  const translateY = useTransform(smooth, [0, 1], [0, -140]);

  // Smooth fade across the WHOLE scroll range. No threshold-based snap.
  // 0    → fully visible
  // 0.35 → still strong (0.85)
  // 0.7  → mostly gone (0.18)
  // 1    → invisible
  const opacity = useTransform(
    smooth,
    [0, 0.35, 0.7, 1],
    [1, 0.85, 0.18, 0]
  );

  const scale = useTransform(smooth, [0, 1], [1, 0.88]);

  return { rotateX, rotateY, translateY, opacity, scale };
};
