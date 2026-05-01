/**
 * ─────────────────────────────────────────────────────────────
 *  CENTRAL CONTENT CONFIG
 *  All page text (titles, descriptions, eyebrows, labels, copy)
 *  lives here. One place to maintain. No icons or images here —
 *  those stay with the data files (skills.ts, experiences.ts,
 *  projects.ts, socials.ts) so refactors don't move binaries.
 *
 *  Shape: each section is exactly one level of nesting.
 *  Nested groups are allowed only one level deep
 *  (e.g. experience.timeline, experience.certificates).
 * ─────────────────────────────────────────────────────────────
 */

export const content = {
  /** Site-wide / metadata */
  site: {
    name: "Shakil Ahmmed",
    metaTitle: "Shakil Ahmmed — Web Developer",
    metaDescription:
      "Full-stack developer with 4+ years experience building scalable, performant web applications.",
  },

  /** Top navigation */
  navbar: {
    logoLabel: "",
    ctaLabel: "Contact",
    ctaHref: "#contact",
    links: [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
    ],
  },

  /** Hero (home) */
  hero: {
    
    
    title: "Building ",
    titleAccent: "web apps",
    description:
      "Full-stack developer with 4+ years building scalable Next.js & Node.js apps. I care about clean architecture, smooth interactions, and shipping work that actually feels good to use.",
    primaryCtaLabel: "See my work",
    primaryCtaHref: "#projects",
    secondaryCtaLabel: "Download Resume",
    secondaryCtaHref: "/resume.pdf",
    location: "Bangladesh · Remote-friendly",
    yearsLabel: "Years building",
    yearsValue: "4+",
    projectsLabel: "Projects shipped",
    projectsValue: "20+",
    stackLabel: "Core stack",
    stackValue: "Next.js · TS · Node",
  },

  /** About / manifesto */
  about: {
    eyebrow: "01 — Who I Am",
    title: "My top",
    titleAccent: "3 qualifications",
    titleSuffix: "includes :",
    qualificationOneLabel: "Communication & Collaboration",
    qualificationOne:
      "Communicated with 1,000+ individuals across global platforms (Clubhouse, HelloTalk, Duolingo). Worked across 3 companies, SCIC team, project clients and active developer networks.",
    qualificationTwoLabel: "Problem Breakdown",
    qualificationTwo:
      "I think on paper. I decompose large features into smaller pieces. I strongly believe clarity is the key.",
    qualificationThreeLabel: "Continuous Learning",
    qualificationThree:
      "My highest priority is investing in myself to produce high-quality output. Here's what's on my list now:",
    learningPhitron:
      "Phitron Machine Learning (3rd semester, after completing Data Structures, Algorithms & Problem Solving Club)",
    learningBootcamp:
      "Next-Level AI-driven Software Engineering Bootcamp and Anthropic academic courses for deeper LLM understanding",
    learningFocus:
      "Deep focus study sessions by Fahim Abdullah to learn complex things faster.",
  },

  /** Skills */
  skills: {
    title: "Tech",
    titleAccent: "Stack",
    description: "Languages, frameworks, and tools I work with daily.",
  },

  /** Experience */
  experience: {
    eyebrow: "03 — Professional Journey",
    title: "Experience & milestones.",
    subtitle: "Three companies. One year at GKC IT. Consistent delivery.",
    timeline: {
      label: "Timeline",
    },
    certificates: {
      label: "Certificates",
    },
    cp: {
      label: "Competitive Programming",
      solvedSuffix: "solved",
    },
  },

  /** Projects */
  projects: {
    eyebrow: "04 — Selected Work",
    title: "My projects.",
    subtitle: "A handful of things I've built, shipped, and shaped.",
    caseStudyLabel: "case study",
    liveLabel: "Live",
    repoLabel: "Repo",
  },

  /** Contact */
  contact: {
    eyebrow: "05 — Contact",
    title: "Say Hello",
    subtitle:
      "I'd love to hear about your next project. Drop a message and let's talk about how I can help bring your ideas to life.",
    emailLabel: "Email",
    formNameLabel: "Name",
    formEmailLabel: "Email",
    formMessageLabel: "Message",
    formNamePlaceholder: "Your name",
    formEmailPlaceholder: "you@domain.com",
    formMessagePlaceholder: "Tell me about your project, timeline, and goals…",
    formSubmitLabel: "Send message",
    formSendingLabel: "Sending…",
    formSuccess: "Thanks — I'll get back to you within a day or two.",
    formError: "Something went wrong. Please try again or email me directly.",
  },

  /** Footer */
  footer: {
    tagline:
      "Web developer with 4+ years of experience crafting scalable, performant applications across the full stack.",
    yearsHighlight: "4+ years",
    quickLinksLabel: "Quick Links",
    connectLabel: "Connect with me",
    rightsSuffix: "All rights reserved.",
  },

  /** Ghost watermark titles per section (cinematic background text) */
  ghost: {
    about: "Self",
    skills: "Skills",
    experience: "EX:",
    projects: "WORKs",
    contact: "Contact",
  },
} as const;

export type TContent = typeof content;
