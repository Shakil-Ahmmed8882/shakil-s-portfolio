"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Facebook, Mail, X, ExternalLink } from "lucide-react";
import { socialLinks } from "@/modules/shared/data/socials";
import { platformStats, totalProblemsSolved } from "@/modules/experience/data/experiences";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  email: Mail,
};

const boldPoints: { label: string; targetId?: string; isProblemSolver?: boolean }[] = [
  { label: "4+ years of experience", targetId: "experience" },
  { label: "1+ yr at GKC IT (Frontend)", targetId: "experience" },
  { label: "SCIC — highest mark, year-long course", targetId: "experience" },
  { label: "Advanced Full-Stack — 10+ technologies", targetId: "experience" },
  { label: "Data Structures & Algorithms certified", targetId: "experience" },
  { label: "Problem solver — 188+ solved", isProblemSolver: true },
];

export const ProfileSidebar = () => {
  const [solverOpen, setSolverOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
  <aside
  aria-label="Profile sidebar"
  className="hidden xl:flex sticky top-24 self-start w-[380px] flex-col gap-6 max-h-[calc(100vh-7rem)]"
>
  <div className="glass-card rounded-2xl p-6 flex flex-col gap-6 overflow-y-auto scrollbar-hidden">

    {/* ── Avatar Section ── */}
    <div className="flex flex-col items-center gap-4">

      <div className="relative h-44 w-44 flex items-center justify-center">

        {/* glow */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-full opacity-40 blur-2xl"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--accent-primary)/0.5) 0%, transparent 70%)",
          }}
        />

        {/* avatar */}
        <div
          className="relative h-full w-full overflow-hidden rounded-full border-2"
          style={{ borderColor: "hsl(var(--accent-primary)/0.5)" }}
        >
          <Image
            src="/inspiration/me.jpeg"
            alt="Shakil Ahmmed"
            fill
            sizes="176px"
            className="object-cover"
          />
        </div>

       
      </div>

      {/* name + role */}
      <div className="text-center">
        <p className="font-display text-lg font-bold leading-tight">
          Shakil Ahmmed
        </p>
        <p className="mt-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Web Developer
        </p>
      </div>
    </div>

    {/* ── Bold Points ── */}
    <ul className="flex flex-col gap-4">
      {boldPoints.map((pt) => (
        <li key={pt.label}>
          <button
            type="button"
            onClick={() => {
              if (pt.isProblemSolver) setSolverOpen(true);
              else if (pt.targetId) scrollTo(pt.targetId);
            }}
            className="group w-full text-left text-sm font-semibold leading-snug text-foreground/90 transition-colors hover:text-[hsl(var(--accent-primary))] flex items-start gap-3"
          >
            <span
              className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full transition-all group-hover:scale-150"
              style={{ background: "hsl(var(--accent-primary))" }}
            />
            <span>{pt.label}</span>
          </button>
        </li>
      ))}
    </ul>

    {/* ── Socials ── */}
    <div className="border-t border-border/40 pt-4">
      <p className="mb-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
        Connect
      </p>

      <div className="flex items-center gap-3">
        {socialLinks.map((s) => {
          const Icon = iconMap[s.id];
          return (
            <a
              key={s.id}
              href={s.href}
              target={s.id === "email" ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-background/40 text-foreground/70 transition-all hover:scale-110 hover:text-[hsl(var(--accent-primary))] hover:border-[hsl(var(--accent-primary)/0.6)]"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 16px hsl(var(--accent-primary)/0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              <Icon size={16} strokeWidth={1.8} />
            </a>
          );
        })}
      </div>
    </div>
  </div>
</aside>

      <AnimatePresence>
        {solverOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              className="absolute inset-0 backdrop-blur-md"
              style={{ background: "hsl(var(--background)/0.7)" }}
              onClick={() => setSolverOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-lg glass-card rounded-2xl p-7"
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setSolverOpen(false)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X size={16} />
              </button>

              <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
                Problem solver
              </p>
              <p
                className="mt-2 font-display text-[64px] font-black leading-none tracking-tight"
                style={{ color: "hsl(var(--accent-primary))" }}
              >
                {totalProblemsSolved}+
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Total problems solved across competitive platforms.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {platformStats.map((p) => (
                  <a
                    key={p.id}
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group glass-card rounded-xl p-3 flex flex-col gap-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="relative h-7 w-7 overflow-hidden rounded-md bg-background/40">
                        <Image
                          src={p.logo}
                          alt={p.name}
                          fill
                          sizes="28px"
                          className="object-contain p-0.5"
                        />
                      </div>
                      <ExternalLink
                        size={11}
                        className="text-muted-foreground group-hover:text-foreground transition-colors"
                      />
                    </div>
                    <span
                      className="font-display text-2xl font-bold tabular-nums"
                      style={{ color: "hsl(var(--accent-primary))" }}
                    >
                      {p.value}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                      {p.name}
                    </span>
                  </a>
                ))}
              </div>

              <p className="mt-5 text-[11px] text-muted-foreground">
                Click any platform to verify on the original profile.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
