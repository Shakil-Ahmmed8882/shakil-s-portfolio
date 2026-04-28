"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Briefcase } from "lucide-react";
import type { TExperience } from "../data/experiences";

type Props = { experience: TExperience; index: number; isLast: boolean };

export const TimelineItem = (props: Props) => {
  const { experience, index, isLast } = props;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-10 pb-10 last:pb-0"
    >
      {/* dot */}
      <span
        className="absolute left-0 top-2 flex h-5 w-5 items-center justify-center rounded-full"
        style={{
          background: experience.isCurrent
            ? "hsl(var(--accent-primary))"
            : "hsl(var(--border))",
          boxShadow: experience.isCurrent
            ? "0 0 0 4px hsl(var(--accent-primary)/0.15), 0 0 14px hsl(var(--accent-primary)/0.5)"
            : "none",
        }}
      >
        <Briefcase size={10} className="text-white/80" />
      </span>

      {/* line */}
      {!isLast && (
        <span className="absolute left-[9px] top-7 bottom-0 w-px bg-gradient-to-b from-border/60 to-transparent" />
      )}

      {/* header */}
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <h3 className="font-display text-base font-semibold">{experience.role}</h3>
        <span className="text-muted-foreground">·</span>
        <span className="text-sm font-medium" style={{ color: "hsl(var(--accent-primary))" }}>
          {experience.company}
        </span>
        {experience.isCurrent && (
          <span
            className="ml-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest"
            style={{
              background: "hsl(var(--accent-primary)/0.12)",
              color: "hsl(var(--accent-primary))",
            }}
          >
            <span
              className="h-1 w-1 rounded-full animate-pulse"
              style={{ background: "hsl(var(--accent-primary))" }}
            />
            current
          </span>
        )}
      </div>
      <p className="mt-1 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
        {experience.period}
      </p>
      <ul className="mt-3 flex flex-col gap-1">
        {experience.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: "hsl(var(--accent-primary)/0.6)" }} />
            {h}
          </li>
        ))}
      </ul>
      {experience.document && (
        <a
          href={experience.document.href}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/30 px-3 py-1.5 text-xs text-muted-foreground transition-all hover:text-foreground hover:border-[hsl(var(--accent-primary)/0.5)]"
        >
          <FileText size={12} style={{ color: "hsl(var(--accent-primary))" }} />
          {experience.document.label}
          <ArrowUpRight size={12} className="opacity-60" />
        </a>
      )}
    </motion.div>
  );
};
