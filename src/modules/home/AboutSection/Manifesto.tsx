// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// /* -------------------------
//    LINK SYSTEM (single source of truth)
// --------------------------*/
// export const aboutLinks = {
//   meditation: {
//     label: "Meditation & Journaling",
//     url: "/meditation",
//   },
//   dsa: {
//     label: "Codeforces / CodeChef / LeetCode",
//     url: "/dsa",
//   },
//   ai: {
//     label: "Machine Learning",
//     url: "/ai-learning",
//   },
//   communication: {
//     label: "Communication Growth",
//     url: "/communication",
//   },
//   collaboration: {
//     label: "Collaboration Mindset",
//     url: "/collaboration",
//   },
//   space: {
//     label: "Space & Large Systems Thinking",
//     url: "/space",
//   },
// };

// /* -------------------------
//    HIGHLIGHT COMPONENT
// --------------------------*/
// const Highlight = ({
//   id,
//   children,
// }: {
//   id: keyof typeof aboutLinks;
//   children?: React.ReactNode;
// }) => {
//   const item = aboutLinks[id];

//   return (
//     <Link
//       href={item.url}
//       className="
//         font-medium text-primary
//         underline decoration-muted-foreground/40
//         hover:decoration-primary
//         cursor-pointer
//         transition

//       "
//     >
//       {children || item.label}
//     </Link>
//   );
// };

// /* -------------------------
//    MAIN COMPONENT
// --------------------------*/
// export const Manifesto = () => {
//   return (
//     <div className="flex flex-col gap-8">
//       {/* Header */}
//       <motion.span
//         initial={{ opacity: 0, x: -10 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.5 }}
//         className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2"
//       >
//         <span
//           className="h-px w-8"
//           style={{ background: "hsl(var(--accent-primary))" }}
//         />
//         01 — Who I Am
//       </motion.span>

//       {/* Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         className="font-display text-4xl md:text-6xl font-semibold leading-loose tracking-tight"
//       >
//         My top <br />{" "}
//         <span style={{ color: "hsl(var(--accent-primary))" }}>
//           3 qualifications
//         </span>{" "}
//         includes :
//       </motion.h2>

//       {/* Content */}
//       <div className="flex flex-col gap-6 max-w-[58ch] text-muted-foreground text-[17px] md:text-[19px] leading-relaxed">
//         <motion.p
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.55, delay: 0.15 }}
//         >
//           <Highlight id="meditation"> Communication & Collaboration</Highlight>{" "}
//           : Communicated with <span className="text-[#cbcbcb]">1,000+</span> individuals across global platforms
//           (Clubhouse, HelloTalk, Duolingo),
//        Worked across 3 companies, SCIC team, Client projects and active developer networks

//         </motion.p>
//         <motion.p
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.55, delay: 0.15 }}
//         >

//              <Highlight id="meditation"> Planning & Execution</Highlight>: I think
//           on paper and documents. I strongly believe clarity is the key
//         </motion.p>
//         <motion.p
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.55, delay: 0.15 }}
//         >
//              <Highlight id="meditation">Technology:</Highlight> Competence on tech
//           help build secure and reliable backend systems.
//         </motion.p>
//         _____________________________________________________
//         <motion.p
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.55, delay: 0.15 }}
//         >
//           I use <Highlight id="meditation">meditation and journaling</Highlight>{" "}
//           to stay focused and maintain clarity while learning and solving
//           problems.
//         </motion.p>
//         <motion.p
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.55, delay: 0.25 }}
//         >
//           I solve problems on <Highlight id="dsa" />. I wonder how same problems
//           have variety of solutions.
//         </motion.p>
//         <motion.p
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.55, delay: 0.35 }}
//         >
//           Currently AI is in my mind. I’m in a Next level AI bootcamp and
//           studying Antrophic academic course and, on Phitron, 3rd semsester{" "}
//           <Highlight id="ai" /> mastering the tools to 10x my productivity
//         </motion.p>
//         <motion.p
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.55, delay: 0.45 }}
//         >
//           I’ve improved communication by speaking with{" "}
//           <span className="font-medium text-foreground">
//             thousands of people on Clubhouse
//           </span>
//           , which helped me explain ideas more clearly.
//         </motion.p>
//         <motion.p
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.55, delay: 0.55 }}
//         >
//           I value <Highlight id="collaboration" />, think in systems, and keep
//           learning through books, structured practice, and consistent growth.
//         </motion.p>
//       </div>
//     </div>
//   );
// };

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { content } from "@/config/content";

const NumberBadge = ({ num }: { num: number }) => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    <div className="absolute inset-0 rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-primary via-[#cdcdcd] to-primary animate-spin-slow" />
    <div className="relative w-9 h-9 rounded-full bg-background flex items-center justify-center text-sm font-semibold">
      {num}
    </div>
  </div>
);

const Item = ({
  num,
  children,
  delay,
}: {
  num: number;
  children: React.ReactNode;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex items-start gap-4"
  >
    <NumberBadge num={num} />
    <div className="text-muted-foreground leading-8 text-[17px] md:text-[19px] max-w-[52ch]">
      {children}
    </div>
  </motion.div>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="font-medium text-primary underline decoration-muted-foreground/40 hover:decoration-primary transition">
    {children}
  </span>
);

const Linker = (props: { url: string; children: React.ReactNode }) => (
  <Link
    className="text-primary opacity-80 underline-offset-8 underline"
    href={props.url}
    target="_blank"
    rel="noreferrer"
  >
    {props.children}
  </Link>
);

export const Manifesto = () => {
  const t = content.about;

  return (
    <div className="flex flex-col gap-10">
      <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
        <span className="h-px w-8 bg-primary" />
        {t.eyebrow}
      </span>

      <h2 className="font-display text-4xl md:text-6xl font-semibold leading-loose tracking-tight">
        {t.title} <br />
        <span className="text-primary">{t.titleAccent}</span> {t.titleSuffix}
      </h2>

      <div className="flex flex-col gap-8">
        <Item num={1} delay={0.1}>
          <Label>{t.qualificationOneLabel}</Label> : {t.qualificationOne}
        </Item>

        <Item num={2} delay={0.2}>
          <Label>{t.qualificationTwoLabel}</Label>: {t.qualificationTwo}
        </Item>

        <Item num={3} delay={0.3}>
          <div className="flex flex-col gap-4">
            <Label>{t.qualificationThreeLabel}</Label>
            <p>{t.qualificationThree}</p>
            {/* Line 1: only "Phitron Machine Learning" is linked, rest is plain text */}
            <p className="leading-loose">
              <Linker url="https://phitron.io/">Phitron Machine Learning</Linker>
              {" (3rd semester, after completing Data Structures, Algorithms & Problem Solving Club)"}
            </p>
            {/* Line 2: "Next-Level AI-driven Software Engineering Bootcamp" is linked, "and" is plain, "Anthropic academic courses" is linked */}
            <p className="leading-loose">
              <Linker url="https://next.programming-hero.com/">
                Next-Level AI-driven Software Engineering Bootcamp
              </Linker>
              {" and "}
              <Linker url="https://www.anthropic.com/education">
                Anthropic academic courses
              </Linker>
              {" for deeper LLM understanding"}
            </p>
            {/* Line 3: whole line plain, only "Fahim Abdullah" is linked */}
            <p className="leading-loose">
              {"Deep focus study sessions by "}
              <Linker url="https://www.youtube.com/@fahimabdullah">Fahim Abdullah</Linker>
              {" to learn complex things faster."}
            </p>
          </div>
        </Item>
      </div>
    </div>
  );
};
