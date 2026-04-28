"use client";

import { motion } from "framer-motion";
import type { TSkill } from "../data/skills";

type Props = { skill: TSkill; index: number };

const categoryLabel: Record<TSkill["category"], string> = {
  frontend: "Frontend",
  backend:  "Backend",
  database: "Database",
  language: "Language",
};

export const SkillRow = (props: Props) => {
  const { skill, index } = props;
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
      className="group flex items-center gap-4 border-b border-border/40 py-4 transition-colors hover:border-[hsl(var(--accent-primary)/0.5)]"
    >
      {/* icon */}
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-base transition-transform duration-300 group-hover:scale-110"
        style={{
          background: "hsl(var(--accent-primary)/0.10)",
          border: "1px solid hsl(var(--accent-primary)/0.2)",
        }}
      >
        {skill.icon}
      </span>

      {/* index */}
      <span className="w-7 shrink-0 font-mono text-[11px] text-muted-foreground/60 tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* name */}
      <span className="flex-1 font-display text-lg md:text-xl font-medium tracking-tight transition-colors group-hover:text-[hsl(var(--accent-primary))]">
        {skill.name}
      </span>

      {/* category pill */}
      <span className="hidden sm:inline-flex items-center rounded-full border border-border/60 bg-background/30 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
        {categoryLabel[skill.category]}
      </span>

      {/* hover arrow */}
      <span className="opacity-0 transition-opacity group-hover:opacity-100 text-[hsl(var(--accent-primary))] text-sm">
        →
      </span>
    </motion.div>
  );
};
