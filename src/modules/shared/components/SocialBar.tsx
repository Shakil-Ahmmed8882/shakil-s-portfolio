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
      transition={{ delay: 1.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="hidden lg:flex fixed left-5 bottom-0 z-30 flex-col items-center gap-4 pb-8"
      aria-label="Social links"
    >
      {socialLinks.map((s, i) => {
        const Icon = iconMap[s.id];
        return (
          <motion.a
            key={s.id}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + i * 0.08, duration: 0.5 }}
            className="group flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground/40 transition-all duration-300 hover:text-[hsl(var(--accent-primary))] hover:-translate-y-0.5"
            style={{}}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 16px hsl(var(--accent-primary)/0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
          >
            <Icon size={15} strokeWidth={1.6} />
          </motion.a>
        );
      })}
      <div
        className="mt-1 h-16 w-px"
        style={{
          background:
            "linear-gradient(to bottom, hsl(var(--accent-primary)/0.4), transparent)",
        }}
      />
    </motion.aside>
  );
};
