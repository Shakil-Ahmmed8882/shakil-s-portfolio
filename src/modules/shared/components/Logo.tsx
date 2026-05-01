"use client";

import { useId } from "react";

type LogoProps = {
  size?: number;
  /** Show the soft accent halo behind the glyph. Off in tight UI (favicon, footer). */
  glow?: boolean;
  className?: string;
};

/**
 * Premium cursive "S" — fully theme-driven.
 * Stroke uses --accent-primary → --accent-glow gradient.
 * Halo uses --accent-primary at low opacity.
 * No hardcoded colors — flip --p-h and the logo follows.
 */
export const Logo = ({ size = 24, glow = true, className }: LogoProps) => {
  // useId guarantees unique gradient ids when the logo renders multiple times on one page.
  const uid = useId().replace(/:/g, "");
  const gradId = `logo-grad-${uid}`;
  const haloId = `logo-halo-${uid}`;
  const glowId = `logo-glow-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color: "hsl(var(--accent-primary))", display: "block" }}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--accent-glow))" />
          <stop offset="55%" stopColor="hsl(var(--accent-primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent-primary))" stopOpacity="0.85" />
        </linearGradient>

        <radialGradient id={haloId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--accent-primary))" stopOpacity="0.35" />
          <stop offset="60%" stopColor="hsl(var(--accent-primary))" stopOpacity="0.08" />
          <stop offset="100%" stopColor="hsl(var(--accent-primary))" stopOpacity="0" />
        </radialGradient>

        <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="0.7" />
        </filter>
      </defs>

      {glow && <circle cx="32" cy="32" r="28" fill={`url(#${haloId})`} />}

      {/* Soft under-stroke = depth halo */}
      <path
        d="M 46 18
           C 46 12, 38 9, 30 9
           C 21 9, 16 14, 16 20
           C 16 26, 22 28, 30 30
           C 39 32, 46 34, 46 42
           C 46 50, 39 55, 30 55
           C 22 55, 16 51, 14 45"
        fill="none"
        stroke="hsl(var(--accent-primary))"
        strokeOpacity="0.25"
        strokeWidth="6"
        strokeLinecap="round"
        filter={`url(#${glowId})`}
      />

      {/* Main cursive stroke */}
      <path
        d="M 46 18
           C 46 12, 38 9, 30 9
           C 21 9, 16 14, 16 20
           C 16 26, 22 28, 30 30
           C 39 32, 46 34, 46 42
           C 46 50, 39 55, 30 55
           C 22 55, 16 51, 14 45"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top swash flourish */}
      <path
        d="M 46 18 C 49 16, 52 16, 54 18"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Bottom swash flourish */}
      <path
        d="M 14 45 C 11 47, 10 50, 12 53"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Terminal dot — premium serif touch */}
      <circle cx="54.4" cy="17.6" r="1.4" fill="hsl(var(--accent-primary))" />
    </svg>
  );
};
