"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { content } from "@/config/content";
import { ScrollHint } from "./ScrollHint";

export const HeroSection = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const curtainTopRef = useRef<HTMLDivElement>(null);
  const curtainBottomRef = useRef<HTMLDivElement>(null);
  const t = content.hero;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      /* ── curtain panels start covering full viewport ── */
      gsap.set(curtainTopRef.current, { yPercent: 0 });
      gsap.set(curtainBottomRef.current, { yPercent: 0 });

      gsap.set(".hero-eyebrow, .hero-name, .hero-meta, .hero-cta-row, .hero-stat", {
        opacity: 0,
        y: 18,
      });
      gsap.set(".hero-title-line", { yPercent: 110, skewY: 4 });
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      /* 1. curtains part — top slides up, bottom slides down */
      tl.to(curtainTopRef.current, { yPercent: -100, duration: 1.1, ease: "power4.inOut" })
        .to(curtainBottomRef.current, { yPercent: 100, duration: 1.1, ease: "power4.inOut" }, "<")
        /* 2. content entrance */
        .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
        .to(".hero-name", { opacity: 1, y: 0, duration: 0.6 }, "-=0.35")
        .to(
          ".hero-title-line",
          { yPercent: 0, skewY: 0, duration: 1, stagger: 0.08 },
          "-=0.3"
        )
        .to(".hero-meta", { opacity: 1, y: 0, duration: 0.55 }, "-=0.55")
        .to(".hero-cta-row", { opacity: 1, y: 0, duration: 0.55 }, "-=0.4")
        .to(
          ".hero-stat",
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 },
          "-=0.45"
        );
    }, el);

    return () => ctx.revert();
  }, []);

  /* split title once at the highlighted word so we can color it */
  const renderTitle = () => {
    const parts = t.title.split(t.titleAccent);
    return (
      <h1 className="font-display font-semibold leading-[0.95] tracking-tight text-[clamp(2.4rem,6.5vw,5.6rem)]">
        <span className="block overflow-hidden">
          <span className="hero-title-line block">
            {parts[0]}
            <span style={{ color: "hsl(var(--accent-primary))" }}>{t.titleAccent}</span>
            {parts[1]}
          </span>
        </span>
      </h1>
    );
  };

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative flex items-center pt-24 pb-12 md:pt-32 md:pb-20 scroll-mt-24 overflow-hidden"
    >
      {/* soft accent spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-64 h-[800px] w-[800px] rounded-full blur-[160px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--accent-primary)) 0%, transparent 70%)",
        }}
      />
      <ScrollHint heroRef={rootRef} />

      <div className="relative z-10 px-3 md:px-6 lg:container">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-16 items-end">
          {/* ── LEFT: identity + title + ctas ─────────────── */}
          <div className="flex flex-col gap-8">
            

            <div className="flex flex-col gap-3">
            
              {renderTitle()}
            </div>

            <p className="hero-meta max-w-[58ch] text-base md:text-[17px] leading-relaxed text-foreground/70">
              {t.description}
            </p>

            <div className="hero-cta-row flex flex-wrap gap-3 pt-1">
              <a
                href={t.primaryCtaHref}
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: "hsl(var(--accent-primary))",
                  boxShadow: "0 8px 30px -8px hsl(var(--accent-primary)/0.65)",
                }}
              >
                {t.primaryCtaLabel}
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href={t.secondaryCtaHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold glass text-foreground transition-all duration-300 hover:scale-[1.03] hover:border-[hsl(var(--accent-primary)/0.5)]"
              >
                <Download size={14} />
                {t.secondaryCtaLabel}
              </a>
            </div>
          </div>

          {/* ── RIGHT: editorial stat block ───────────────── */}
          <aside className="flex flex-col gap-5">
            <div className="hero-meta flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin size={12} style={{ color: "hsl(var(--accent-primary))" }} />
              {t.location}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <StatCard label={t.yearsLabel} value={t.yearsValue} />
              <StatCard label={t.projectsLabel} value={t.projectsValue} />
              <div className="hero-stat col-span-2 glass-card rounded-2xl p-4">
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                  {t.stackLabel}
                </p>
                <p className="mt-1.5 font-display text-base font-semibold tracking-tight text-foreground">
                  {t.stackValue}
                </p>
              </div>
            </div>

         
          </aside>
        </div>
      </div>
    </section>
  );
};

const StatCard = (props: { label: string; value: string }) => {
  const { label, value } = props;
  return (
    <div className="hero-stat glass-card rounded-2xl p-4">
      <p className="font-display text-3xl font-semibold tracking-tight text-foreground tabular-nums">
        {value}
      </p>
      <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
};

