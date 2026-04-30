import { ParallaxSection } from "@/modules/shared/ui/ParallaxSection";
import { SectionHeader } from "@/modules/shared/ui/SectionHeader";
import { ContactForm } from "./ContactForm";
import { Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/modules/shared/data/socials";
import { content } from "@/config/content";

export const ContactSection = () => {
  const t = content.contact;

  return (
    <ParallaxSection id="contact" variant="tinted" ghostTitle={content.ghost.contact}>
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <div className="flex flex-col gap-8">
          <SectionHeader
            eyebrow={t.eyebrow}
            title={t.title}
            subtitle={t.subtitle}
          />
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center gap-3 glass-card rounded-xl px-4 py-3 transition-all hover:border-[hsl(var(--accent-primary)/0.5)]"
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{
                  background: "hsl(var(--accent-primary)/0.12)",
                  border: "1px solid hsl(var(--accent-primary)/0.2)",
                }}
              >
                <Mail size={14} style={{ color: "hsl(var(--accent-primary))" }} />
              </span>
              <div>
                <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-mono">
                  {t.emailLabel}
                </p>
                <p className="text-sm font-medium">{CONTACT_EMAIL}</p>
              </div>
            </a>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </ParallaxSection>
  );
};
