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
    label: "Codeforces / CodeChef / LeetCode",
    url: "/dsa",
  },
  ai: {
    label: "Machine Learning",
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
        className="font-display text-4xl md:text-6xl font-semibold leading-loose tracking-tight"
      >
        My top <br/> <span style={{ color: "hsl(var(--accent-primary))" }}>3 qualifications</span>  includes :
      </motion.h2>

      {/* Content */}
      <div className="flex flex-col gap-6 max-w-[58ch] text-muted-foreground text-[17px] md:text-[19px] leading-relaxed">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <Highlight id="meditation"> Communication</Highlight>{" "}

          
Fluent Communication in English experienced speaking with over 1000+ people & Seamless Collaboration with team

2
<Highlight id="meditation"> Planning & Execution</Highlight>: I think on paper and documents. I strongly believe clarity is the key

<Highlight id="meditation">Technology:</Highlight> Competence on tech help build secure and reliable backend systems.

        </motion.p>
        _____________________________________________________
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          I use <Highlight id="meditation">meditation and journaling</Highlight>{" "}
          to stay focused and maintain clarity while learning and solving
          problems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          I solve problems on <Highlight id="dsa" />. I wonder how same problems have variety of solutions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.35 }}
        >
          Currently AI is in my mind. I’m in a Next level AI bootcamp
          and studying Antrophic academic course and, on Phitron, 3rd semsester <Highlight id="ai" /> mastering the tools to 10x my productivity 
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.45 }}
        >
          I’ve improved communication by speaking with{" "}
          <span className="font-medium text-foreground">
            thousands of people on Clubhouse
          </span>
          , which helped me explain ideas more clearly.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.55 }}
        >
          I value <Highlight id="collaboration" />, think in systems, and keep
          learning through books, structured practice, and consistent growth.
        </motion.p>
      </div>
    </div>
  );
};
