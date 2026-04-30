"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export const ScrollHint = ({ heroRef }: { heroRef: React.RefObject<HTMLElement | null> }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const bobTweenRef = useRef<gsap.core.Tween | null>(null);
  const dotTweenRef = useRef<gsap.core.Tween | null>(null);
  const hasEnteredRef = useRef(false);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const el = wrapRef.current;
    const dot = dotRef.current;
    if (!el || !dot) return;

    gsap.set(el, { opacity: 0, y: 10, x: 0 });
    gsap.set(dot, { y: 0 });

    const startDotLoop = () => {
      dotTweenRef.current = gsap.to(dot, {
        y: 23,
        duration: 1.05,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    };

    const startBob = () => {
      bobTweenRef.current = gsap.to(el, {
        y: "-=5",
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    };

    const show = (fromRight = false) => {
      isVisibleRef.current = true;
      gsap.killTweensOf(el, "x,opacity");
      gsap.fromTo(
        el,
        { x: fromRight ? 56 : 0, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power2.out",
          onComplete: () => {
            if (isVisibleRef.current) {
              bobTweenRef.current?.resume();
              dotTweenRef.current?.resume();
            }
          },
        }
      );
    };

    const hide = () => {
      isVisibleRef.current = false;
      bobTweenRef.current?.pause();
      dotTweenRef.current?.pause();
      gsap.killTweensOf(el, "x,opacity");
      gsap.to(el, { x: 56, opacity: 0, duration: 0.45, ease: "power2.in" });
    };

    /* initial entrance after curtain settles */
    const entranceTimer = setTimeout(() => {
      hasEnteredRef.current = true;
      isVisibleRef.current = true;
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power2.out",
        onComplete: () => {
          startDotLoop();
          startBob();
        },
      });
    }, 1850);

    /* scroll-based: disappear when next section is 1/3 in view,
       reappear when hero is back */
    const hero = heroRef.current;
    const nextSection = hero?.nextElementSibling as HTMLElement | null;

    let heroIO: IntersectionObserver | null = null;
    let nextIO: IntersectionObserver | null = null;

    if (hero) {
      heroIO = new IntersectionObserver(
        ([entry]) => {
          if (!hasEnteredRef.current) return;
          if (entry.isIntersecting && !isVisibleRef.current) {
            show(true);
          }
        },
        { threshold: 0.3 }
      );
      heroIO.observe(hero);
    }

    if (nextSection) {
      nextIO = new IntersectionObserver(
        ([entry]) => {
          if (!hasEnteredRef.current) return;
          if (entry.isIntersecting && isVisibleRef.current) {
            hide();
          }
        },
        /* fires when 1/3 of next section enters viewport */
        { threshold: 0.33 }
      );
      nextIO.observe(nextSection);
    }

    return () => {
      clearTimeout(entranceTimer);
      bobTweenRef.current?.kill();
      dotTweenRef.current?.kill();
      heroIO?.disconnect();
      nextIO?.disconnect();
    };
  }, [heroRef]);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-[6px] select-none z-20"
    >
      {/* capsule border */}
      <div
        className="relative flex items-start justify-center rounded-full"
        style={{
          width: 26,
          height: 44,
          border: "1.5px solid hsl(var(--foreground)/0.25)",
          padding: "5px 0",
        }}
      >
        {/* filled dot travelling inside */}
        <div
          ref={dotRef}
          className="rounded-full"
          style={{
            width: 8,
            height: 8,
            background: "hsl(var(--foreground)/0.7)",
            flexShrink: 0,
          }}
        />
      </div>
      <span
        className="font-mono text-[8px] uppercase tracking-[0.22em]"
        style={{ color: "hsl(var(--foreground)/0.3)" }}
      >
        scroll
      </span>
    </div>
  );
};
