"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const BackgroundScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    camera.position.set(0, 0, 30);

    /* ── Ghost grid ──────────────────────────────────────────────
       Flat, uniform, very low contrast — "ghost view".
       No radial gradient, no bubbles.
       Colour is pure white at ~8% brightness so it reads as a
       barely-there structural line on dark bg.
    ────────────────────────────────────────────────────────────── */
    const GRID_W    = 32;
    const GRID_H    = 20;
    const SPACING   = 2.4;
    const GHOST_VAL = 0.08;   /* ← line brightness: 0.04 = nearly invisible, 0.14 = more visible */

    const gridPositions: number[] = [];
    const gridColors:    number[] = [];

    for (let i = 0; i <= GRID_W; i++) {
      for (let j = 0; j <= GRID_H; j++) {
        const x = (i - GRID_W / 2) * SPACING;
        const y = (j - GRID_H / 2) * SPACING;
        const z = -8 + Math.sin(i * 0.28) * 0.3 + Math.cos(j * 0.28) * 0.3;
        gridPositions.push(x, y, z);
        gridColors.push(GHOST_VAL, GHOST_VAL, GHOST_VAL);
      }
    }

    /* build line index pairs */
    const indices: number[] = [];
    for (let i = 0; i <= GRID_W; i++) {
      for (let j = 0; j < GRID_H; j++) {
        indices.push(i * (GRID_H + 1) + j, i * (GRID_H + 1) + j + 1);
      }
    }
    for (let j = 0; j <= GRID_H; j++) {
      for (let i = 0; i < GRID_W; i++) {
        indices.push(i * (GRID_H + 1) + j, (i + 1) * (GRID_H + 1) + j);
      }
    }

    const gridGeo = new THREE.BufferGeometry();
    const posAttr = new THREE.Float32BufferAttribute(gridPositions, 3);
    posAttr.setUsage(THREE.DynamicDrawUsage);
    gridGeo.setAttribute("position", posAttr);
    gridGeo.setAttribute("color", new THREE.Float32BufferAttribute(gridColors, 3));
    gridGeo.setIndex(indices);

    const gridMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 1,
    });

    const gridLines = new THREE.LineSegments(gridGeo, gridMat);
    scene.add(gridLines);

    /* ── Mouse ── */
    const mouse = { x: 0, y: 0, nx: 0, ny: 0 };
    const onPointerMove = (e: PointerEvent) => {
      mouse.nx = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.ny = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointerMove);

    /* ── Resize ── */
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    /* ── Animate ── */
    const basePositions = Float32Array.from(gridPositions);
    let rafId = 0;
    let t = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      t += 0.008;

      mouse.x = lerp(mouse.x, mouse.nx, 0.05);
      mouse.y = lerp(mouse.y, mouse.ny, 0.05);

      /* gentle camera parallax */
      camera.position.x = lerp(camera.position.x, mouse.x * 1.8, 0.025);
      camera.position.y = lerp(camera.position.y, mouse.y * 1.2, 0.025);
      camera.lookAt(0, 0, 0);

      /* slow wave — keeps the grid alive without being distracting */
      const pos  = gridGeo.getAttribute("position") as THREE.BufferAttribute;
      const cols = GRID_H + 1;
      for (let i = 0; i <= GRID_W; i++) {
        for (let j = 0; j <= GRID_H; j++) {
          const idx = i * cols + j;
          const bz  = basePositions[idx * 3 + 2];
          const wave = Math.sin(t * 0.5 + i * 0.2) * 0.18
                     + Math.cos(t * 0.4 + j * 0.2) * 0.18;
          pos.setZ(idx, bz + wave);
        }
      }
      pos.needsUpdate = true;

      /* subtle tilt following mouse */
      gridLines.rotation.x = lerp(gridLines.rotation.x, mouse.y * 0.04, 0.03);
      gridLines.rotation.y = lerp(gridLines.rotation.y, mouse.x * 0.04, 0.03);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
};
