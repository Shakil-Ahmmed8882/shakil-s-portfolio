/**
 * Hero gallery config.
 * Source of truth for slide pool = /public/project-image/manifest.json
 */
import manifest from "../../../../public/project-image/manifest.json";

export type TGallerySlide = {
  id: string;
  src: string;
  title: string;
};

export const gallerySlides: TGallerySlide[] = manifest.items as TGallerySlide[];

export type TGalleryRow = {
  speedSec: number;
  direction: "ltr" | "rtl";
  /** translateZ in px — depth layering inside the perspective container. */
  depth: number;
  /** Vertical placement (px from vertical centre). */
  offsetY: number;
  /** Per-row opacity multiplier. */
  opacity: number;
};

/**
 * Three rows. `offsetY` values are spaced so rows never overlap — slide
 * height is clamp(140px, 14vw, 220px), so we leave > slide-height + gap
 * of vertical separation between consecutive rows.
 */
export const galleryRows: TGalleryRow[] = [
  { speedSec: 95, direction: "ltr", depth: -160, offsetY: -260, opacity: 0.7 },
  { speedSec: 70, direction: "rtl", depth:    0, offsetY:    0, opacity: 1.0 },
  { speedSec: 58, direction: "ltr", depth:  140, offsetY:  260, opacity: 0.85 },
];

export const MIN_SLIDES_PER_ROW = 8;
