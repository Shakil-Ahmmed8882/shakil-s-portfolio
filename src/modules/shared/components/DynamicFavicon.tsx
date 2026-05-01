"use client";

import { useEffect } from "react";

/**
 * Dynamically rebuilds the favicon as an inline SVG using the live
 * `--accent-primary` CSS variable, so the icon always matches the
 * current theme's primary color — even if you swap the hue at runtime.
 *
 * Watches:
 *   • `documentElement.classList` (light/dark switch)
 *   • `documentElement.style` (inline override of --p-h)
 */
export const DynamicFavicon = () => {
  useEffect(() => {
    const apply = () => {
      const styles = getComputedStyle(document.documentElement);
      const accent = styles.getPropertyValue("--accent-primary").trim() || "270 90% 60%";
      const glow = styles.getPropertyValue("--accent-glow").trim() || accent;
      const stroke = `hsl(${accent})`;
      const strokeGlow = `hsl(${glow})`;

      // Cursive "S" — mirrors Logo.tsx; flattened for favicon (no halo, thicker stroke).
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="10%" y1="0%" x2="90%" y2="100%">
      <stop offset="0%" stop-color="${strokeGlow}"/>
      <stop offset="100%" stop-color="${stroke}"/>
    </linearGradient>
  </defs>
  <path d="M 46 18 C 46 12, 38 9, 30 9 C 21 9, 16 14, 16 20 C 16 26, 22 28, 30 30 C 39 32, 46 34, 46 42 C 46 50, 39 55, 30 55 C 22 55, 16 51, 14 45"
        fill="none" stroke="url(#g)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 46 18 C 49 16, 52 16, 54 18" fill="none" stroke="${stroke}" stroke-width="4" stroke-linecap="round"/>
  <path d="M 14 45 C 11 47, 10 50, 12 53" fill="none" stroke="${stroke}" stroke-width="4" stroke-linecap="round"/>
  <circle cx="54.4" cy="17.6" r="2.4" fill="${stroke}"/>
</svg>`;

      const href = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

      let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.type = "image/svg+xml";
      link.href = href;
    };

    apply();

    const observer = new MutationObserver(apply);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    return () => observer.disconnect();
  }, []);

  return null;
};
