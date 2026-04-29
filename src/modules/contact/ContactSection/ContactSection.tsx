import { ParallaxSection } from "@/modules/shared/ui/ParallaxSection";
import { SectionHeader } from "@/modules/shared/ui/SectionHeader";
import { ContactForm } from "./ContactForm";
import { Mail, MessageSquare } from "lucide-react";

export const ContactSection = () => {
  return (
    <ParallaxSection id="contact" variant="tinted" ghostTitle="Contact">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <div className="flex flex-col gap-8">
          <SectionHeader
            eyebrow="05 — Contact"
            title="Let's build something."
            subtitle="Open to freelance work and full-time roles. I read every message."
          />
          <div className="flex flex-col gap-3">
            <a
              href="mailto:shakilahmmed8882@gmail.com"
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
                <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-mono">Email</p>
                <p className="text-sm font-medium">shakilahmmed8882@gmail.com</p>
              </div>
            </a>
            <div className="group inline-flex items-center gap-3 glass-card rounded-xl px-4 py-3">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{
                  background: "hsl(var(--accent-primary)/0.12)",
                  border: "1px solid hsl(var(--accent-primary)/0.2)",
                }}
              >
                <MessageSquare size={14} style={{ color: "hsl(var(--accent-primary))" }} />
              </span>
              <div>
                <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-mono">Response time</p>
                <p className="text-sm font-medium">Usually within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </ParallaxSection>
  );
};
