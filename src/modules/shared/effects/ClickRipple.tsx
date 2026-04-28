"use client";

import { useEffect } from "react";
import gsap from "gsap";

const SPARK_COUNT = 10;

const createSpark = (x: number, y: number) => {
  const container = document.createElement("div");
  container.style.cssText = `position:fixed;left:${x}px;top:${y}px;pointer-events:none;z-index:9998;transform:translate(-50%,-50%)`;
  document.body.appendChild(container);

  for (let i = 0; i < SPARK_COUNT; i++) {
    const spark = document.createElement("div");
    const angle = (i / SPARK_COUNT) * Math.PI * 2;
    const dist = 20 + Math.random() * 40;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;
    const size = 3 + Math.random() * 4;

    spark.style.cssText = `
      position:absolute;
      width:${size}px;
      height:${size}px;
      border-radius:50%;
      background:hsl(var(--accent-primary));
      box-shadow:0 0 ${size * 2}px hsl(var(--accent-primary) / 0.8);
      top:0;left:0;
      transform:translate(-50%,-50%);
    `;
    container.appendChild(spark);

    gsap.to(spark, {
      x: tx,
      y: ty,
      opacity: 0,
      scale: 0,
      duration: 0.55 + Math.random() * 0.3,
      ease: "expo.out",
      onComplete: () => spark.remove(),
    });
  }

  // ring ripple
  const ring = document.createElement("div");
  ring.style.cssText = `
    position:absolute;
    width:12px;height:12px;
    border-radius:50%;
    border:1.5px solid hsl(var(--accent-primary) / 0.7);
    top:0;left:0;
    transform:translate(-50%,-50%);
  `;
  container.appendChild(ring);
  gsap.to(ring, {
    scale: 4,
    opacity: 0,
    duration: 0.6,
    ease: "expo.out",
    onComplete: () => {
      ring.remove();
      container.remove();
    },
  });
};

export const ClickRipple = () => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // skip interactive elements
      if (target.closest("a, button, input, textarea, select")) return;
      createSpark(e.clientX, e.clientY);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return null;
};
