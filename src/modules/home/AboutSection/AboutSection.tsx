"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, MapPin } from "lucide-react";
import { ParallaxSection } from "@/modules/shared/ui/ParallaxSection";
import { SectionHeader } from "@/modules/shared/ui/SectionHeader";

const stats = [
  {
    icon: Briefcase,
    value: "4+",
    label: "Years Experience",
    detail: "Production-grade projects",
  },
  {
    icon: Building2,
    value: "3",
    label: "Companies",
    detail: "Cross-industry exposure",
  },
  {
    icon: MapPin,
    value: "GKC IT",
    label: "Current Role",
    detail: "Frontend Developer · 1 yr+",
  },
];

export const AboutSection = () => {
  return (
    <ParallaxSection id="about" variant="tinted">
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
        <SectionHeader
          eyebrow="01 — About"
          title="Building products that perform."
          subtitle="Frontend-focused full-stack engineer. Strong systems thinking, pixel-perfect execution."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.04, rotateY: 4 }}
              className="glass-card rounded-2xl p-5 flex flex-col gap-3 perspective preserve-3d"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{
                  background: "hsl(var(--accent-primary)/0.15)",
                  border: "1px solid hsl(var(--accent-primary)/0.25)",
                }}
              >
                <s.icon size={16} style={{ color: "hsl(var(--accent-primary))" }} />
              </span>
              <p
                className="font-display text-2xl font-bold tracking-tight"
                style={{ color: "hsl(var(--accent-primary))" }}
              >
                {s.value}
              </p>
              <div>
                <p className="text-sm font-medium text-foreground">{s.label}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{s.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
};
