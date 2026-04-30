"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  id: string;
  children: ReactNode;
  className?: string;
  yOffset?: number;
  /* "plain" = transparent (hero-like), "tinted" = subtle surface bg, "accent" = accent-glow gradient */
  variant?: "plain" | "tinted" | "accent";
  /* large background watermark word — cinematic, ultra-low opacity */
  ghostTitle?: string;
};


export const ParallaxSection = (props: Props) => {
  const { id, children, className, yOffset = 40, ghostTitle } = props;
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const inner = innerRef.current;
    if (!section || !inner) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        { y: yOffset },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top 20%",
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        inner,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [yOffset]);

  return (<section
  ref={sectionRef}
  id={id}
  className={cn(
    "relative w-full py-24 z-[10] scroll-mt-24",
    className
  )}
>
      <span
  aria-hidden
  className="pointer-events-none select-none absolute inset-x-0 top-0 z-[20]
    font-display font-black uppercase whitespace-nowrap leading-none
    text-foreground/[0.04] dark:text-foreground/[0.05]"
  style={{
    fontSize: "clamp(8rem, 15vw, 15rem)",
    filter: "blur(2px)",
  }}
>
  {ghostTitle}
</span>
      <div ref={innerRef} className=" relative opacity-0">
        {children}
      </div>
    </section>
  );
};
