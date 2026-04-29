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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex flex-col gap-3", alignment, className)}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{
              background: "hsl(var(--accent-primary))",
              boxShadow: "0 0 8px hsl(var(--accent-primary)/0.9)",
            }}
          />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
