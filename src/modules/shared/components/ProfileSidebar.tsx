
"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Github, Linkedin, Facebook, Mail, X, ExternalLink, Code2, Zap, Award } from "lucide-react";
import { socialLinks } from "@/modules/shared/data/socials";
import { platformStats, totalProblemsSolved } from "@/modules/experience/data/experiences";


const iconMap = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  email: Mail,
};

const navButtons = [
  { label: "About", id: "about", icon: Code2 },
  { label: "Skills", id: "skills", icon: Zap },
  { label: "Experience", id: "experience", icon: Award },
];

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

  return (
    <>
      <aside
        aria-label="Profile sidebar"
        className="hidden xl:flex sticky top-24 self-start w-[380px] flex-col gap-6 max-h-[calc(100vh-7rem)]"
      >
        <div className="glass-card rounded-2xl p-6 flex flex-col gap-6 overflow-y-auto scrollbar-hidden relative">
          {/* Sidebar Blinkers */}
          <div aria-hidden className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            {[
              { top: "15%", left: "10%", size: 2, delay: "0s", duration: "4.6s", hue: 190 },
              { top: "70%", left: "85%", size: 2, delay: "1.2s", duration: "5.8s", hue: 220 },
              { top: "40%", left: "90%", size: 1.5, delay: "2.4s", duration: "6.4s", hue: 270 },
            ].map((b, i) => (
              <span
                key={i}
                className="ambient-blink absolute rounded-full"
                style={{
                  top: b.top,
                  left: b.left,
                  width: `${b.size}px`,
                  height: `${b.size}px`,
                  background: `hsl(${b.hue} 90% 65%)`,
                  boxShadow: `0 0 8px hsl(${b.hue} 90% 65% / 0.9), 0 0 18px hsl(${b.hue} 90% 65% / 0.5)`,
                  animationDelay: b.delay,
                  animationDuration: b.duration,
                  willChange: "opacity, transform",
                }}
              />
            ))}
          </div>

          {/* ── Avatar Section ── */}
          <div className="relative z-10 flex flex-col items-center gap-4">
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

            {/* name + bio */}
            <div className="text-center">
              <p className="font-display text-2xl font-bold leading-tight">
                Shakil Ahmmed
              </p>
              <p className="mt-3 text-foreground/70 text-[15px] leading-7">
                Problem solver. 1+ year production experience at GKC IT. Currently focusing on AI agents. RAG systems, and LLM context engineering.
              </p>

              {/* Navigation Buttons */}
              <div className="mt-6 flex gap-2">
                {navButtons.map((btn) => {
                  const Icon = btn.icon;
                  const btnRef = useRef<HTMLAnchorElement>(null);

                  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                    if (!btnRef.current) return;

                    const rect = btnRef.current.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const ripple = document.createElement("div");
                    ripple.style.position = "absolute";
                    ripple.style.borderRadius = "50%";
                    ripple.style.background = "hsl(var(--accent-primary)/0.6)";
                    ripple.style.pointerEvents = "none";
                    ripple.style.width = "1px";
                    ripple.style.height = "1px";
                    ripple.style.left = `${x}px`;
                    ripple.style.top = `${y}px`;

                    btnRef.current.style.position = "relative";
                    btnRef.current.style.overflow = "hidden";
                    btnRef.current.appendChild(ripple);

                    gsap.to(ripple, {
                      width: "200px",
                      height: "200px",
                      left: x - 100,
                      top: y - 100,
                      opacity: 0,
                      duration: 0.6,
                      ease: "power2.out",
                      onComplete: () => ripple.remove(),
                    });
                  };

                  return (
                    <motion.a
                      ref={btnRef}
                      key={btn.id}
                      href={`#${btn.id}`}
                      onClick={handleClick}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                      className="group  relative flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-primary opacity-80 transition-all duration-300 "
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.06) 100%)",
                        // backdropFilter: "blur(8px)",
                      }}
                      
                    >
                      <Icon size={14} className="shrink-0" />
                      <span>{btn.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Socials ── */}
          <div className="relative z-10 border-t border-border/40 pt-4">
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
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-background/40 text-foreground/70 transition-all hover:scale- hover:text-[hsl(var(--accent-primary))] hover:border-[hsl(var(--accent-primary)/0.6)]"
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
