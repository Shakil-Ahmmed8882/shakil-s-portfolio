"use client";

import { useEffect, useRef } from "react";

export const BackgroundField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: -9999, y: -9999, active: false });
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let dots: Array<{ bx: number; by: number; phase: number }> = [];
    const SPACING = 44;

    const seed = () => {
      dots = [];
      const cols = Math.ceil(width / SPACING) + 2;
      const rows = Math.ceil(height / SPACING) + 2;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            bx: i * SPACING,
            by: j * SPACING,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const getColors = () => {
      const isDark = document.documentElement.classList.contains("dark");
      return {
        base: isDark ? "rgba(255,255,255," : "rgba(20,30,28,",
        accent: isDark ? "rgba(80,240,180," : "rgba(20,200,140,",
      };
    };

    const RADIUS = 160;
    const RADIUS2 = RADIUS * RADIUS;

    const render = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const { base, accent } = getColors();
      const px = pointer.current.x;
      const py = pointer.current.y;
      const active = pointer.current.active;
      const time = t * 0.0004;

      for (let k = 0; k < dots.length; k++) {
        const d = dots[k];
        const float = Math.sin(time + d.phase) * 0.6;

        let x = d.bx + float;
        let y = d.by + float;
        let alpha = 0.05;
        let radius = 0.9;
        let useAccent = false;

        if (active) {
          const dx = d.bx - px;
          const dy = d.by - py;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < RADIUS2) {
            const f = 1 - dist2 / RADIUS2;
            const force = f * 14;
            const dist = Math.sqrt(dist2) || 1;
            x += (dx / dist) * force;
            y += (dy / dist) * force;
            alpha = 0.05 + f * 0.18;
            radius = 0.9 + f * 0.6;
            if (f > 0.6) useAccent = true;
          }
        }

        ctx.beginPath();
        ctx.fillStyle = useAccent ? `${accent}${alpha})` : `${base}${alpha})`;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(render);
    };

    const onPointerMove = (e: PointerEvent) => {
      pointer.current.x = e.clientX;
      pointer.current.y = e.clientY;
      pointer.current.active = true;
    };

    const onPointerLeave = () => {
      pointer.current.active = false;
    };

    resize();
    rafRef.current = requestAnimationFrame(render);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, hsl(var(--accent-mint) / 0.06), transparent 60%), radial-gradient(ellipse 50% 40% at 90% 90%, hsl(var(--accent-mint) / 0.04), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-24"
        style={{
          background:
            "linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24"
        style={{
          background:
            "linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)",
        }}
      />
    </div>
  );
};
