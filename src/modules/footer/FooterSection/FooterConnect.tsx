"use client";

import { Github, Linkedin, Facebook, Mail } from "lucide-react";
import { socialLinks } from "@/modules/shared/data/socials";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  email: Mail,
} as const;

export const FooterConnect = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
        Connect with me
      </p>
      <div className="flex flex-wrap gap-2">
        {socialLinks.map((s) => {
          const Icon = iconMap[s.id];
          return (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="group inline-flex h-9 w-9 items-center justify-center rounded-xl glass transition-all hover:scale-110"
              style={{}}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "hsl(var(--accent-primary)/0.6)";
                (e.currentTarget as HTMLElement).style.color =
                  "hsl(var(--accent-primary))";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 14px hsl(var(--accent-primary)/0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "";
                (e.currentTarget as HTMLElement).style.color = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              <Icon size={14} strokeWidth={1.6} />
            </a>
          );
        })}
      </div>
      <a
        href="mailto:shakilahmmed8882@gmail.com"
        className="text-xs text-muted-foreground transition-colors hover:text-[hsl(var(--accent-primary))] w-fit"
      >
        shakilahmmed8882@gmail.com
      </a>
    </div>
  );
};
