"use client";

import { Github, Linkedin, Facebook, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { socialLinks } from "@/modules/shared/data/socials";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  email: Mail,
};

export const SocialBar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="hidden lg:flex fixed left-6 bottom-0 z-30 flex-col items-center gap-5 pb-8"
      aria-label="Social links"
    >
      {socialLinks.map((s) => {
        const Icon = iconMap[s.id];
        return (
          <a
            key={s.id}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="text-muted-foreground/50 transition-all duration-300 hover:text-foreground hover:-translate-y-0.5"
          >
            <Icon size={16} strokeWidth={1.6} />
          </a>
        );
      })}
      <div className="mt-2 h-20 w-px bg-gradient-to-b from-border/60 to-transparent" />
    </motion.aside>
  );
};
