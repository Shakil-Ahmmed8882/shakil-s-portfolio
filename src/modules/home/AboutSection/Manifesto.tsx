"use client";

import { motion } from "framer-motion";
import Link from "next/link";


/* -------------------------
   LINK SYSTEM (single source of truth)
--------------------------*/
export const aboutLinks = {
  meditation: {
    label: "Meditation & Journaling",
    url: "/meditation",
  },
  dsa: {
    label: "Problem Solving (Codeforces / CodeChef / LeetCode)",
    url: "/dsa",
  },
  ai: {
    label: "AI Learning & Models",
    url: "/ai-learning",
  },
  communication: {
    label: "Communication Growth",
    url: "/communication",
  },
  collaboration: {
    label: "Collaboration Mindset",
    url: "/collaboration",
  },
  space: {
    label: "Space & Large Systems Thinking",
    url: "/space",
  },
};

/* -------------------------
   HIGHLIGHT COMPONENT
--------------------------*/
const Highlight = ({
  id,
  children,
}: {
  id: keyof typeof aboutLinks;
  children?: React.ReactNode;
}) => {
  const item = aboutLinks[id];

  return (
    <Link
      href={item.url}
      className="
        font-medium text-primary 
        underline decoration-muted-foreground/40
        hover:decoration-primary
        cursor-pointer
        transition

      "
    >
      {children || item.label}
    </Link>
  );
};

/* -------------------------
   MAIN COMPONENT
--------------------------*/
export const Manifesto = () => {
  return (
    <div className="flex flex-col gap-8">
  {/* Header */}
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

  {/* Title */}
  <motion.h2
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="font-display text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight"
  >
    How I Think
  </motion.h2>

  {/* Content */}
  <div className="flex flex-col gap-5 max-w-[52ch] text-muted-foreground text-base md:text-[17px] leading-relaxed">

    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, delay: 0.15 }}
    >
      I use <Highlight id="meditation">meditation and journaling</Highlight> to stay focused and maintain clarity while learning and solving problems.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, delay: 0.25 }}
    >
      I solve problems on <Highlight id="dsa" /> and regularly explore different approaches using data structures and algorithms.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, delay: 0.35 }}
    >
      I’m currently focused on <Highlight id="ai" />. I’m in an AI bootcamp and studying model systems, Python, and machine learning.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, delay: 0.45 }}
    >
      I’ve improved communication by speaking with <span className="font-medium text-foreground">thousands of people on Clubhouse</span>, which helped me explain ideas more clearly.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, delay: 0.55 }}
    >
      I value <Highlight id="collaboration" />, think in systems, and keep learning through books, structured practice, and consistent growth.
    </motion.p>

  </div>
</div>
  );
};