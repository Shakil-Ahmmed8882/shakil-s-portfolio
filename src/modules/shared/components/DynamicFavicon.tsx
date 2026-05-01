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
      const fill = `hsl(${accent})`;

      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
  <path d="M 10 12 Q 10 8 14 8 Q 18 8 20 10 Q 22 12 22 14 Q 22 16 20 17 Q 18 18 14 18.5 Q 18 19 20 20 Q 22 21 22 23 Q 22 26 20 28 Q 18 30 14 30 Q 10 30 10 26 Q 10 24 12 23"
        fill="none" stroke="${fill}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
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
