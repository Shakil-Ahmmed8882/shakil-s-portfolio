"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Vec2 = { x: number; y: number };

type Dot = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  depth: number;
};

type SpatialGridProps = {
  children?: ReactNode;
  className?: string;
  spacing?: number;
  radius?: number;
  dotSize?: number;
  dotColor?: string;
  mode?: "repel" | "attract";
};

export const SpatialGrid = ({
  children,
  className = "",
  spacing = 38,
  radius = 150,
  dotSize = 1.25,
  dotColor = "rgba(255, 255, 255, 0.18)",
  mode = "repel",
}: SpatialGridProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let dots: Dot[] = [];

    // Mouse — track the *target* and a smoothed value for easing.
    const mouseTarget: Vec2 = { x: -9999, y: -9999 };
    const mouse: Vec2 = { x: -9999, y: -9999 };
    let mouseActive = false;

    const buildGrid = () => {
      dots = [];
      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;
      const offsetX = (width - (cols - 1) * spacing) / 2;
      const offsetY = (height - (rows - 1) * spacing) / 2;

      const maxDist = Math.hypot(width / 2, height / 2) || 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = offsetX + i * spacing;
          const y = offsetY + j * spacing;
          // depth: 0 at center, 1 at far corners — used for parallax.
          const dx = x - centerX;
          const dy = y - centerY;
          const depth = Math.min(1, Math.hypot(dx, dy) / maxDist);
          dots.push({ baseX: x, baseY: y, x, y, vx: 0, vy: 0, depth });
        }
      }
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      centerX = width / 2;
      centerY = height / 2;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      buildGrid();
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouseTarget.x = e.clientX - rect.left;
      mouseTarget.y = e.clientY - rect.top;
      mouseActive = true;
    };

    const onPointerLeave = () => {
      mouseActive = false;
      mouseTarget.x = -9999;
      mouseTarget.y = -9999;
    };

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);

    const radiusSq = radius * radius;
    const sign = mode === "repel" ? 1 : -1;

    let rafId = 0;

    const tick = () => {
      // Ease the mouse position toward its target for smooth interaction.
      if (mouseActive) {
        mouse.x += (mouseTarget.x - mouse.x) * 0.18;
        mouse.y += (mouseTarget.y - mouse.y) * 0.18;
      }

      ctx.clearRect(0, 0, width, height);

      // Vignette mask — sharper near cursor, fading toward edges.
      const focusX = mouseActive ? mouse.x : centerX;
      const focusY = mouseActive ? mouse.y : centerY;
      const vignetteRadius = Math.max(width, height) * 0.7;

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];

        // — Antigravity force —
        // Closer dots get stronger displacement; depth dampens dots far from
        // the screen center so they parallax slower.
        if (mouseActive) {
          const ddx = d.x - mouse.x;
          const ddy = d.y - mouse.y;
          const distSq = ddx * ddx + ddy * ddy;

          if (distSq < radiusSq && distSq > 0.01) {
            const dist = Math.sqrt(distSq);
            const falloff = 1 - dist / radius; // 0..1
            const force = sign * falloff * falloff * 28;
            const parallax = 1 - d.depth * 0.55;
            const nx = ddx / dist;
            const ny = ddy / dist;
            d.vx += nx * force * parallax * 0.06;
            d.vy += ny * force * parallax * 0.06;
          }
        }

        // Spring back toward base position with damping.
        const restoreX = (d.baseX - d.x) * 0.06;
        const restoreY = (d.baseY - d.y) * 0.06;
        d.vx = (d.vx + restoreX) * 0.82;
        d.vy = (d.vy + restoreY) * 0.82;
        d.x += d.vx;
        d.y += d.vy;

        // Vignette alpha: brighter near focus point, fading outward.
        const fdx = d.x - focusX;
        const fdy = d.y - focusY;
        const fdist = Math.hypot(fdx, fdy);
        const vignette = Math.max(
          0.15,
          1 - (fdist / vignetteRadius) * 1.1
        );

        ctx.globalAlpha = vignette;
        ctx.fillStyle = dotColor;
        ctx.beginPath();
        ctx.arc(d.x, d.y, dotSize, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [spacing, radius, dotSize, dotColor, mode]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
