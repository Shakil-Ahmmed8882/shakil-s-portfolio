"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { TPlatformStat } from "../data/experiences";

type Props = {
  stat: TPlatformStat;
  index: number;
};

export const PlatformStat = (props: Props) => {
  const { stat, index } = props;
  return (
    <motion.a
      href={stat.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group glass-card rounded-xl p-4 flex flex-col gap-2"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          {stat.name}
        </span>
        <ArrowUpRight
          size={12}
          className="text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
      <span className="font-display text-2xl font-semibold tracking-tight text-[hsl(var(--accent-mint))]">
        {stat.value}
      </span>
      <span className="text-[11px] text-muted-foreground">{stat.caption}</span>
    </motion.a>
  );
};
