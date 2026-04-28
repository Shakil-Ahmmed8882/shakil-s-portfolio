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
    <div className="flex flex-col gap-3">
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
              className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/30 text-muted-foreground transition-all hover:text-[hsl(var(--accent-mint))] hover:border-[hsl(var(--accent-mint)/0.5)]"
            >
              <Icon size={14} strokeWidth={1.6} />
            </a>
          );
        })}
      </div>
      <a
        href="mailto:shakilahmmed8882@gmail.com"
        className="text-xs text-muted-foreground hover:text-foreground transition-colors w-fit"
      >
        shakilahmmed8882@gmail.com
      </a>
    </div>
  );
};
