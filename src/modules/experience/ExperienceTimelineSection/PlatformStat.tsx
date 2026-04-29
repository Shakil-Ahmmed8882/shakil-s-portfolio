"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { TPlatformStat } from "../data/experiences";

type Props = { stat: TPlatformStat; index: number };

export const PlatformStat = (props: Props) => {
  const { stat, index } = props;
  return (
    <motion.a
      href={stat.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ scale: 1.03, rotateY: 3 }}
      className="group glass-card rounded-xl p-4 flex flex-col gap-2 perspective"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="relative h-7 w-7 overflow-hidden rounded-md"
            style={{ background: "hsl(var(--background)/0.55)" }}
          >
            <Image
              src={stat.logo}
              alt={stat.name}
              fill
              sizes="28px"
              className="object-contain p-0.5"
            />
          </div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            {stat.name}
          </span>
        </div>
        <ArrowUpRight
          size={12}
          className="text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
      <span
        className="font-display text-2xl font-bold tracking-tight"
        style={{ color: "hsl(var(--accent-primary))" }}
      >
        {stat.value}
      </span>
      <span className="text-[11px] text-muted-foreground">{stat.caption}</span>
    </motion.a>
  );
};
