"use client";

import Image from "next/image";
import { type RefObject, useMemo } from "react";
import { motion, useMotionTemplate } from "framer-motion";
import {
  gallerySlides,
  galleryRows,
  MIN_SLIDES_PER_ROW,
  type TGallerySlide,
} from "./galleryConfig";
import { useParallaxAnimation } from "./useParallaxAnimation";

type Props = {
  /** Ref to the hero <section> — drives the scroll-based fold-away. */
  heroRef: RefObject<HTMLElement>;
};

/**
 * Hero-only 3D parallax gallery — production-grade.
 *
 *  • position: fixed → bound to viewport, never affected by sidebar/page
 *    layout. zero layout cost as user scrolls.
 *  • Top is negative (-5vh): the gallery extends ABOVE the navbar so there
 *    is no visible gap between navbar and gallery.
 *  • Opacity, rotateX, rotateY, translateY, scale all animate as smooth
 *    functions of scroll progress (driven by a spring). No threshold-based
 *    "appear/disappear" anywhere — the gallery always glides in & out.
 *  • pointer-events: none everywhere → it cannot intercept the user.
 *  • Marquee tracks animate via CSS keyframes on transform only → fully
 *    off the main thread.
 *  • The right edge is closer (rotateY negative), left edge farther — and
 *    the left-to-right scrim is heaviest on the left, so the right side
 *    reads with high contrast and the left dissolves into the dark BG.
 */
export const ParallaxGalleryBackground = ({ heroRef }: Props) => {
  const { rotateX, rotateY, translateY, opacity, scale } =
    useParallaxAnimation(heroRef);

  const transform = useMotionTemplate`perspective(1300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${translateY}px) scale(${scale})`;

  const rowSlides = useMemo<TGallerySlide[][]>(() => {
    if (gallerySlides.length === 0) return galleryRows.map(() => []);
    return galleryRows.map((_, rowIdx) => {
      const out: TGallerySlide[] = [];
      const start = rowIdx * 2;
      const target = Math.max(MIN_SLIDES_PER_ROW, gallerySlides.length);
      for (let i = 0; i < target; i++) {
        out.push(gallerySlides[(start + i) % gallerySlides.length]);
      }
      return out;
    });
  }, []);

  if (gallerySlides.length === 0) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 select-none"
      style={{
        opacity,
        // Gallery starts 200px above navbar, hidden until you scroll down
        top: "-200px",
        height: "100vh",
        zIndex: 0,
        willChange: "opacity, transform",
        // `paint` ensures repaints stay inside this element, but does not
        // clip fixed children since the element itself is the fixed root.
        contain: "layout paint style",
      }}
    >
      {/* ── 3-D marquee layer (desktop) ── */}
      <motion.div
        className="absolute inset-0 hidden md:block"
        style={{
          transform,
          transformOrigin: "center 50%",
          willChange: "transform",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          {galleryRows.map((row, i) => (
            <GalleryRow key={i} row={row} slides={rowSlides[i]} rowIndex={i} />
          ))}
        </div>
      </motion.div>

      {/* Mobile fallback — single soft band, no perspective */}
      <div className="absolute inset-0 md:hidden flex items-center">
        <GalleryRow
          row={{ speedSec: 80, direction: "ltr", depth: 0, offsetY: 0, opacity: 0.4 }}
          slides={rowSlides[1] ?? rowSlides[0]}
          rowIndex={0}
          flat
        />
      </div>

      {/* ───────── Treatment overlays ───────── */}

      {/* 1. Left-heavy scrim — the LEFT half is solid background (kills
            gallery behind hero text); right half is fully transparent so
            the slides read with maximum contrast. Like two mountains
            meeting in the middle: dark on the left, clear on the right. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, hsl(var(--background)) 0%, hsl(var(--background)/0.98) 22%, hsl(var(--background)/0.82) 40%, hsl(var(--background)/0.42) 58%, hsl(var(--background)/0.08) 78%, transparent 100%)",
        }}
      />

      {/* 2. Top fade — keeps gallery from punching through navbar. */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: "calc(200px + 3.5rem + 40px)",
          background:
            "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--background)/0.85) 55%, hsl(var(--background)/0.35) 85%, transparent 100%)",
        }}
      />

      {/* 3. Bottom fade — graceful handoff to next section. */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "55%",
          background:
            "linear-gradient(180deg, transparent 0%, hsl(var(--background)/0.5) 45%, hsl(var(--background)/0.92) 80%, hsl(var(--background)) 100%)",
        }}
      />

      {/* 4. Subtle grain — premium texture */}
      <div className="gallery-grain absolute inset-0 opacity-[0.05]" />
    </motion.div>
  );
};

/* ───────────────────────── Row ───────────────────────── */

type RowProps = {
  row: {
    speedSec: number;
    direction: "ltr" | "rtl";
    depth: number;
    offsetY: number;
    opacity: number;
  };
  slides: TGallerySlide[];
  rowIndex: number;
  flat?: boolean;
};

const GalleryRow = ({ row, slides, rowIndex, flat = false }: RowProps) => {
  const animationName =
    row.direction === "ltr" ? "gallery-marquee-ltr" : "gallery-marquee-rtl";

  return (
    <div
      className="gallery-row absolute left-0 right-0 flex items-center"
      style={{
        top: `calc(50% + ${row.offsetY}px)`,
        transform: flat
          ? "translateY(-50%)"
          : `translateY(-50%) translateZ(${row.depth}px)`,
        opacity: row.opacity,
      }}
    >
      <div
        className="gallery-track gap-5 md:gap-7"
        style={{
          animationName,
          animationDuration: `${row.speedSec}s`,
        }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex gap-5 md:gap-7 shrink-0"
            aria-hidden={copy === 1}
          >
            {slides.map((slide, i) => (
              <Slide key={`${copy}-${rowIndex}-${i}-${slide.id}`} slide={slide} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ───────────────────────── Slide ───────────────────────── */

const Slide = ({ slide }: { slide: TGallerySlide }) => {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-xl border border-border/40"
      style={{
        width: "clamp(220px, 22vw, 360px)",
        height: "clamp(140px, 14vw, 220px)",
        boxShadow:
          "0 12px 36px -12px rgba(0,0,0,0.55), inset 0 0 0 1px hsl(var(--border)/0.25)",
        background: "hsl(var(--card)/0.4)",
      }}
    >
      <Image
        src={slide.src}
        alt=""
        fill
        sizes="(max-width: 768px) 240px, 360px"
        className="object-cover"
        // Keep colours close to source — the right side should read clearly.
        // Heavy desaturation/dimming was making screenshots feel washed out.
        style={{ filter: "saturate(0.95)" }}
        loading="lazy"
        draggable={false}
      />
    </div>
  );
};
