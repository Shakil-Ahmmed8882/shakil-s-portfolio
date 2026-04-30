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

      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect x="2" y="2" width="60" height="60" rx="14" fill="none" stroke="${fill}" stroke-opacity="0.45" stroke-width="2.5"/>
  <path d="M44 19c-3-3.5-7.5-5-13-5-7 0-12 4-12 10 0 5.5 4 8 11 9.5l4 1c5 1.2 7 2.4 7 5 0 2.8-3 4.5-8 4.5-5 0-9-1.8-12-5"
        fill="none" stroke="${fill}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
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
