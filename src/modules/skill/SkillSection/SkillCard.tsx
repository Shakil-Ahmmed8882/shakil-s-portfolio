"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { TSkill } from "../data/skills";

type Props = { skill: TSkill; index: number };

export const SkillCard = ({ skill, index }: Props) => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const iconSrc = mounted && currentTheme === "dark" && skill.darkIcon ? skill.darkIcon : skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col items-center gap-3 rounded-2xl p-5 glass-card border border-border/30 hover:border-[hsl(var(--accent-primary)/0.45)] transition-all duration-300 hover:shadow-[0_0_28px_hsl(var(--accent-primary)/0.12)] cursor-default select-none"
    >
      <div className="relative h-11 w-11 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm">
        <Image
          src={iconSrc}
          alt={skill.name}
          fill
          sizes="44px"
          className="object-contain"
        />
      </div>
      <span className="text-[13px] font-medium text-foreground/70 group-hover:text-foreground transition-colors text-center leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
};
