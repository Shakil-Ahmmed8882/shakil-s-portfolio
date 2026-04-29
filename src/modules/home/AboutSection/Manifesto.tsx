"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  PencilLine,
  Bike,
  Music2,
  BookOpen,
  Wind,
} from "lucide-react";

const lines = [
  {
    text: "I question the ",
    em: "why",
    after: " behind everything — time, consciousness, energy, the small things.",
  },
  {
    text: "I think in ",
    em: "shapes & symbols",
    after: ". Drawing is how I see the big picture.",
  },
  {
    text: "I believe in ",
    em: "cooperation over competition",
    after: " — and in giving people the right resources to dream big.",
  },
  {
    text: "I thrive around people with ",
    em: "unshakable excitement",
    after: " to learn, explore, evolve.",
  },
];

const rituals = [
  { icon: Wind, label: "meditate" },
  { icon: PencilLine, label: "journal" },
  { icon: BookOpen, label: "learn" },
  { icon: Bike, label: "cycle" },
  { icon: Music2, label: "sing" },
  { icon: Sparkles, label: "wonder" },
];

export const Manifesto = () => {
  return (
    <div className="flex flex-col gap-8">
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2"
      >
        <span
          className="h-px w-8"
          style={{ background: "hsl(var(--accent-primary))" }}
        />
        01 — Who I Am
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight"
      >
        Not just an engineer —
        <br />
        a <span style={{ color: "hsl(var(--accent-primary))" }}>curious mind</span>{" "}
        wired to wonder.
      </motion.h2>

      <div className="flex flex-col gap-4 max-w-[52ch]">
        {lines.map((l, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.55,
              delay: 0.15 + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-base md:text-[17px] leading-relaxed text-muted-foreground"
          >
            {l.text}
            <span
              className="font-medium italic"
              style={{ color: "hsl(var(--foreground))" }}
            >
              {l.em}
            </span>
            {l.after}
          </motion.p>
        ))}
      </div>

      {/* rituals row */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="pt-4 border-t"
        style={{ borderColor: "hsl(var(--foreground)/0.08)" }}
      >
        <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
          On a regular day
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-3">
          {rituals.map((r, i) => (
            <motion.li
              key={r.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.06 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 text-sm text-foreground/80"
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full"
                style={{
                  background: "hsl(var(--accent-primary)/0.12)",
                  border: "1px solid hsl(var(--accent-primary)/0.25)",
                }}
              >
                <r.icon
                  size={13}
                  style={{ color: "hsl(var(--accent-primary))" }}
                />
              </span>
              <span className="lowercase">{r.label}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
