"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export const SectionHeader = (props: Props) => {
  const { eyebrow, title, subtitle, align = "left", className } = props;
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex flex-col gap-3", alignment, className)}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
          <span
            className="inline-block h-1 w-1 rounded-full bg-[hsl(var(--accent-mint))]"
            style={{ boxShadow: "0 0 6px hsl(var(--accent-mint) / 0.8)" }}
          />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-xl text-sm md:text-base text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
};
