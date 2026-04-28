"use client";

import { motion } from "framer-motion";
import type { TSkillGroup } from "../data/skills";

type Props = {
  group: TSkillGroup;
  count: number;
  index: number;
};

export const SkillGroupSummary = (props: Props) => {
  const { group, count, index } = props;
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex items-center justify-between gap-4 py-3 border-b border-border/40 last:border-0"
    >
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium text-foreground">{group.title}</span>
        <span className="text-[11px] text-muted-foreground">{group.caption}</span>
      </div>
      <span className="font-mono text-xs text-[hsl(var(--accent-mint))] tabular-nums">
        {String(count).padStart(2, "0")}
      </span>
    </motion.div>
  );
};
