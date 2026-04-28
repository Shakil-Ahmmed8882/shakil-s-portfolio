"use client";

import { motion } from "framer-motion";

type Props = {
  value: string;
  label: string;
  index: number;
};

export const AboutStat = (props: Props) => {
  const { value, label, index } = props;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card rounded-2xl p-6 flex flex-col gap-1.5"
    >
      <span className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
        {value}
        <span
          className="ml-1 text-[hsl(var(--accent-mint))]"
          aria-hidden
        >
          ·
        </span>
      </span>
      <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </motion.div>
  );
};
