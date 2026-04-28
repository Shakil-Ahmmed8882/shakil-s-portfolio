"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import type { TExperience } from "../data/experiences";

type Props = {
  experience: TExperience;
  index: number;
  isLast: boolean;
};

export const TimelineItem = (props: Props) => {
  const { experience, index, isLast } = props;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      <span
        className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-[hsl(var(--accent-mint))]"
        style={{
          boxShadow: experience.isCurrent
            ? "0 0 0 4px hsl(var(--accent-mint) / 0.18), 0 0 12px hsl(var(--accent-mint) / 0.6)"
            : "0 0 8px hsl(var(--accent-mint) / 0.5)",
        }}
      />
      {!isLast ? (
        <span className="absolute left-[5px] top-5 bottom-0 w-px bg-gradient-to-b from-border to-transparent" />
      ) : null}

      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="font-display text-base md:text-lg font-semibold tracking-tight">
          {experience.role}
        </h3>
        <span className="text-sm text-muted-foreground">·</span>
        <span className="text-sm font-medium text-[hsl(var(--accent-mint))]">
          {experience.company}
        </span>
        {experience.isCurrent ? (
          <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-[hsl(var(--accent-mint)/0.12)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-[hsl(var(--accent-mint))]">
            <span className="h-1 w-1 rounded-full bg-[hsl(var(--accent-mint))]" />
            current
          </span>
        ) : null}
      </div>
      <p className="mt-1 text-xs font-mono text-muted-foreground uppercase tracking-widest">
        {experience.period}
      </p>
      <ul className="mt-3 flex flex-col gap-1">
        {experience.highlights.map((h) => (
          <li
            key={h}
            className="text-sm text-muted-foreground before:content-['—'] before:mr-2 before:text-foreground/30"
          >
            {h}
          </li>
        ))}
      </ul>
      {experience.document ? (
        <a
          href={experience.document.href}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/30 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground hover:border-[hsl(var(--accent-mint)/0.5)]"
        >
          <FileText size={12} className="text-[hsl(var(--accent-mint))]" />
          {experience.document.label}
          <ArrowUpRight size={12} className="opacity-60" />
        </a>
      ) : null}
    </motion.div>
  );
};
