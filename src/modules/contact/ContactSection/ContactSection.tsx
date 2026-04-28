import { Section } from "@/modules/shared/ui/Section";
import { SectionHeader } from "@/modules/shared/ui/SectionHeader";
import { ContactForm } from "./ContactForm";

export const ContactSection = () => {
  return (
    <Section id="contact">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <SectionHeader
          eyebrow="05 — Contact"
          title="Let's build something."
          subtitle="Open to freelance work and full-time roles. I read every message."
        />
        <div className="glass-card rounded-2xl p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};
