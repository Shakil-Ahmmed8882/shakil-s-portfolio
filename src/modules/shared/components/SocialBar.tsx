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
      className="hidden lg:flex xl:hidden fixed left-5 bottom-0 z-30 flex-col items-center gap-3 pb-8"
      aria-label="Social links"
    >
      {socialLinks.map((s, i) => {
        const Icon = iconMap[s.id];
        return (
          <motion.a
            key={s.id}
            href={s.href}
            target={s.id === "email" ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={s.label}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + i * 0.08, duration: 0.5 }}
            className="group flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-background/60 backdrop-blur text-foreground/80 transition-all duration-300 hover:text-[hsl(var(--accent-primary))] hover:-translate-y-0.5 hover:border-[hsl(var(--accent-primary)/0.6)]"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 18px hsl(var(--accent-primary)/0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
          >
            <Icon size={16} strokeWidth={1.8} />
          </motion.a>
        );
      })}
      <div
        className="mt-1 h-16 w-px"
        style={{
          background:
            "linear-gradient(to bottom, hsl(var(--accent-primary)/0.5), transparent)",
        }}
      />
    </motion.aside>
  );
};
