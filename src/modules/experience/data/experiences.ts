export type TExperience = {
  id: string;
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  logo?: string;
  highlights: string[];
  document?: { label: string; href: string };
};

export const experiences: TExperience[] = [
  {
    id: "gkc",
    role: "Frontend Developer",
    company: "GKC IT",
    period: "2024 — Present · 1+ yr",
    isCurrent: true,
    logo: "/inspiration/gk.png",
    highlights: [
      "Architecting scalable Next.js applications",
      "Driving performance & DX initiatives",
    ],
    // document: {
    //   label: "Contract Letter",
    //   href: "https://drive.google.com/file/d/1JNev6H-oxd4XH_4-jBEhMqp-oLIe0nYg/view",
    // },
  },
  {
    id: "cloudgen",
    role: "Frontend Developer",
    company: "CloudGen",
    period: "2023 — 2024",
    highlights: [
      "Built dashboards and admin panels with React + TypeScript",
      "Owned UI primitives and shared component library",
    ],
  },
  {
    id: "radian",
    role: "Web Developer",
    company: "Radian IT",
    period: "2022 — 2023",
    highlights: [
      "Delivered marketing sites and client portals",
      "Hands-on with Next.js, Tailwind, and headless CMS",
    ],
  },
];

export type TCertificate = {
  id: string;
  title: string;
  detail: string;
  href: string;
  logo: string;
};

export const certificates: TCertificate[] = [
  {
    id: "scic",
    title: "Complete Web Development — SCIC",
    detail:
      "Highest mark joining SCIC team in a year-long course. Hands-on with React, Next.js, Docker, Express.",
    href: "https://drive.google.com/file/d/1JNev6H-oxd4XH_4-jBEhMqp-oLIe0nYg/view",
    logo: "/inspiration/webdev-l1.jpg",
  },
  {
    id: "next-level",
    title: "Next Level Web Development",
    detail:
      "Advanced full-stack — proficient in 10+ technologies, project work covering API design and documentation.",
    href: "https://drive.google.com/file/d/1_OxsqKyjaLEWYio8MzAOW24KcEaFlWlC/view",
    logo: "/inspiration/next-level.jpg",
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    detail: "Completed full DSA course at Phitron. Strong fundamentals in problem solving.",
    href: "https://drive.google.com/file/d/1JNev6H-oxd4XH_4-jBEhMqp-oLIe0nYg/view",
    logo: "/inspiration/phitron.png",
  },
];

export type TPlatformStat = {
  id: string;
  name: string;
  value: string;
  caption: string;
  href: string;
  logo: string;
};

export const platformStats: TPlatformStat[] = [
  {
    id: "codeforces",
    name: "Codeforces",
    value: "114",
    caption: "Problems solved",
    href: "https://codeforces.com/profile/shakilahmmed8882",
    logo: "/inspiration/codeforces.png",
  },
  {
    id: "codechef",
    name: "CodeChef",
    value: "39",
    caption: "2★ Rating · Solved",
    href: "https://www.codechef.com/users/shakil_8882",
    logo: "/inspiration/codechef.jpeg",
  },
  {
    id: "leetcode",
    name: "LeetCode",
    value: "35",
    caption: "Problems solved",
    href: "https://leetcode.com/u/shakilahmmed8882/",
    logo: "/inspiration/leetcode.png",
  },
];

export const totalProblemsSolved = 188;
