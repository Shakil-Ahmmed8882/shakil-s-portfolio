"use client";

import { motion } from "framer-motion";
import type { TSkill } from "../data/skills";

type Props = {
  skill: TSkill;
  index: number;
};

const labelMap: Record<TSkill["category"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  language: "Language",
};

export const SkillRow = (props: Props) => {
  const { skill, index } = props;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group flex items-center justify-between border-b border-border/50 py-5 transition-colors hover:border-[hsl(var(--accent-mint)/0.5)]"
    >
      <div className="flex items-center gap-5">
        <span className="font-mono text-xs text-muted-foreground/70 tabular-nums w-10">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-display text-xl md:text-2xl font-medium tracking-tight transition-colors group-hover:text-[hsl(var(--accent-mint))]">
          {skill.name}
        </span>
      </div>
      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground/70">
        {labelMap[skill.category]}
      </span>
    </motion.div>
  );
};
