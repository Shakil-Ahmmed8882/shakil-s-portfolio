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
 * never snaps, never hangs. Rotation is tied to scroll direction:
 * - Scrolling DOWN past hero: rotates RIGHT (positive rotateY) & disappears
 * - Scrolling UP back to hero: rotates LEFT (back to default) & reappears
 *
 * Strategy:
 *   • One source of truth: scrollYProgress within the hero element only.
 *   • Raw value pushed through critically-damped spring filters wheel jitter.
 *   • Every output (rotateX, rotateY, translateY, opacity, scale) is a
 *     pure function of smoothed progress → reversing scroll glides smoothly back.
 *   • Opacity driven over FULL scroll range (0→1) for graceful fade.
 *   • Gallery completely invisible outside hero bounds (opacity: 0).
 *
 *  scrollYProgress mapping:
 *      0   → hero top visible      (rest: rotateY -14, opacity 1)
 *      0.5 → hero mid-scrolled     (rotateY -8, opacity 0.5)
 *      1   → hero fully scrolled   (rotateY 8, opacity 0, far away)
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
  const rotateX = useTransform(smooth, [0, 1], [8, 42]);

  // Rotation tied to scroll direction:
  // - At rest (0): -14 (left-to-right 3D perspective)
  // - Scrolling down (0.5): -8 (neutral, rotating toward camera)
  // - Fully scrolled (1): 8 (rotated RIGHT, completely folded away)
  const rotateY = useTransform(smooth, [0, 1], [-30, 8]);

  // Lift the gallery as it folds — feels like it's drifting up & away.
  const translateY = useTransform(smooth, [0, 1], [0, -240]);

  // Smooth opacity fade: completely invisible when scrolled past.
  // 0    → fully visible (opacity 1)
  // 0.3  → still strong (0.9)
  // 0.6  → fading (0.4)
  // 1    → invisible (opacity 0)
  const opacity = useTransform(
    smooth,
    [0, 0.3, 0.6, 1],
    [1, 0.9, 0.4, 0]
  );

  const scale = useTransform(smooth, [0, 1], [1, 0.88]);

  return { rotateX, rotateY, translateY, opacity, scale };
};
