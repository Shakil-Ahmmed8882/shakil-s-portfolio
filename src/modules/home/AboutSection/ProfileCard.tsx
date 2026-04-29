"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";
import { socialLinks } from "@/modules/shared/data/socials";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  email: Mail,
};

const skills = [
  "4+ years of experience",
  "1+ yr at GKC IT — Frontend",
  "SCIC — highest mark, year-long course",
  "Advanced Full-Stack — 10+ technologies",
  "Data Structures & Algorithms certified",
  "Problem solver — 188+ solved",
];

export const ProfileCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from('[data-skill]', {
        opacity: 0,
        x: -14,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[420px] mx-auto"
    >
      {/* Outer neon glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[36px] opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, hsl(var(--accent-primary)/0.18), transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div
        className="relative rounded-[28px] overflow-hidden p-7 md:p-8 flex flex-col gap-7"
        style={{
          background:
            "linear-gradient(160deg, hsl(var(--bg-h) var(--bg-s) calc(var(--bg-l) + 6%) / 0.85), hsl(var(--bg-h) var(--bg-s) calc(var(--bg-l) + 2%) / 0.7))",
          border: "1px solid hsl(var(--accent-primary) / 0.18)",
          boxShadow:
            "0 0 0 1px hsl(var(--foreground)/0.02) inset, 0 30px 80px -30px hsl(var(--accent-primary)/0.25)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* corner ticks */}
        <span
          aria-hidden
          className="absolute top-3 left-3 h-3 w-3 border-t border-l"
          style={{ borderColor: "hsl(var(--accent-primary)/0.55)" }}
        />
        <span
          aria-hidden
          className="absolute top-3 right-3 h-3 w-3 border-t border-r"
          style={{ borderColor: "hsl(var(--accent-primary)/0.55)" }}
        />
        <span
          aria-hidden
          className="absolute bottom-3 left-3 h-3 w-3 border-b border-l"
          style={{ borderColor: "hsl(var(--accent-primary)/0.55)" }}
        />
        <span
          aria-hidden
          className="absolute bottom-3 right-3 h-3 w-3 border-b border-r"
          style={{ borderColor: "hsl(var(--accent-primary)/0.55)" }}
        />

        {/* Headshot */}
        <div className="relative flex flex-col items-center gap-4">
          <div className="relative">
            {/* pulsing ring */}
            <span
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow:
                  "0 0 0 1px hsl(var(--accent-primary)/0.5), 0 0 30px hsl(var(--accent-primary)/0.45)",
                animation: "pulse-ring-soft 3.4s ease-in-out infinite",
              }}
            />
            <div
              className="relative h-28 w-28 rounded-full overflow-hidden"
              style={{
                border: "1px solid hsl(var(--accent-primary)/0.5)",
                boxShadow:
                  "inset 0 0 24px hsl(var(--accent-primary)/0.18), 0 0 32px hsl(var(--accent-primary)/0.25)",
              }}
            >
              <Image
                src="/inspiration/me.jpeg"
                alt="Shakil Ahmmed"
                fill
                sizes="112px"
                priority
                className="object-cover"
                style={{
                  filter:
                    "grayscale(0.4) contrast(1.05) brightness(0.95) saturate(1.1)",
                }}
              />
              {/* teal tint overlay */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, hsl(var(--accent-primary)/0.18), transparent 60%)",
                  mixBlendMode: "screen",
                }}
              />
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-1">
            <h3 className="font-display text-xl font-semibold tracking-tight">
              Shakil Ahmmed
            </h3>
            <span
              className="text-[11px] uppercase tracking-[0.32em]"
              style={{ color: "hsl(var(--accent-primary))" }}
            >
              Web Developer
            </span>
          </div>
        </div>

        {/* divider */}
        <div
          aria-hidden
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(var(--accent-primary)/0.35), transparent)",
          }}
        />

        {/* Skills */}
        <ul className="flex flex-col gap-3">
          {skills.map((s) => (
            <li
              key={s}
              data-skill
              className="flex items-start gap-3 text-[15px] md:text-base text-foreground/85"
            >
              <span
                aria-hidden
                className="mt-[7px] h-1.5 w-1.5 rounded-full shrink-0"
                style={{
                  background: "hsl(var(--accent-primary))",
                  boxShadow: "0 0 8px hsl(var(--accent-primary)/0.7)",
                }}
              />
              <span className="leading-snug">{s}</span>
            </li>
          ))}
        </ul>

        {/* Connect */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
            Connect
          </span>
          <div className="flex items-center gap-2.5">
            {socialLinks.map((s, i) => {
              const Icon = iconMap[s.id];
              return (
                <motion.a
                  key={s.id}
                  href={s.href}
                  target={s.id === "email" ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={s.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                  className="relative group flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{
                    background: "hsl(var(--bg-h) var(--bg-s) calc(var(--bg-l) + 8%) / 0.6)",
                    border: "1px solid hsl(var(--accent-primary)/0.25)",
                  }}
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      boxShadow: "0 0 18px hsl(var(--accent-primary)/0.55)",
                    }}
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-lg"
                    style={{
                      animation: `pulse-ring-soft 3s ease-in-out ${i * 0.4}s infinite`,
                      boxShadow: "0 0 0 1px hsl(var(--accent-primary)/0.18)",
                    }}
                  />
                  <Icon
                    size={15}
                    strokeWidth={1.8}
                    className="relative text-foreground/85 group-hover:text-[hsl(var(--accent-primary))] transition-colors"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-ring-soft {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50%      { opacity: 0.85; transform: scale(1.025); }
        }
      `}</style>
    </motion.div>
  );
};
