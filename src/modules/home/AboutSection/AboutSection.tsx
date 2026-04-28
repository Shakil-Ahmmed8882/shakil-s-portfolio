"use client";

import { motion } from "framer-motion";
import { Section } from "@/modules/shared/ui/Section";
import { SectionHeader } from "@/modules/shared/ui/SectionHeader";
import { AboutStat } from "./AboutStat";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "3", label: "Companies" },
  { value: "GKC IT", label: "Currently Frontend Dev" },
];

export const AboutSection = () => {
  return (
    <Section id="about">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-end">
        <SectionHeader
          eyebrow="01 — About"
          title="Building products that perform."
          subtitle="Frontend-focused full-stack engineer. Strong systems thinking, ruthless pursuit of polish."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
        >
          {stats.map((s, i) => (
            <AboutStat key={s.label} value={s.value} label={s.label} index={i} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
