export type TExperience = {
  id: string;
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
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
    highlights: [
      "Architecting scalable Next.js applications",
      "Driving performance & DX initiatives",
    ],
    document: {
      label: "Contract Letter",
      href: "https://drive.google.com/file/d/1JNev6H-oxd4XH_4-jBEhMqp-oLIe0nYg/view",
    },
  },
  {
    id: "prev-2",
    role: "Frontend Developer",
    company: "Previous Co.",
    period: "2023 — 2024",
    highlights: [
      "Shipped customer-facing dashboards",
      "Owned the design system",
    ],
  },
  {
    id: "prev-1",
    role: "Web Developer",
    company: "First Co.",
    period: "2022 — 2023",
    highlights: [
      "Built MVPs across React + Node",
      "Foundation in production engineering",
    ],
  },
];

export type TCertificate = {
  id: string;
  title: string;
  detail: string;
  href: string;
};

export const certificates: TCertificate[] = [
  {
    id: "course",
    title: "Web Development — 90%+ Average",
    detail:
      "Year-long course with hands-on projects on React, Next.js, Docker, Express.",
    href: "https://drive.google.com/file/d/1JNev6H-oxd4XH_4-jBEhMqp-oLIe0nYg/view",
  },
  {
    id: "fullstack",
    title: "Advanced Full-Stack Developer",
    detail:
      "Proficient in 10+ technologies. Project work covering API design and documentation.",
    href: "https://drive.google.com/file/d/1_OxsqKyjaLEWYio8MzAOW24KcEaFlWlC/view",
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    detail: "Completed full course with certificate.",
    href: "https://drive.google.com/file/d/1JNev6H-oxd4XH_4-jBEhMqp-oLIe0nYg/view",
  },
];

export type TPlatformStat = {
  id: string;
  name: string;
  value: string;
  caption: string;
  href: string;
};

export const platformStats: TPlatformStat[] = [
  {
    id: "codeforces",
    name: "Codeforces",
    value: "114",
    caption: "Problems solved",
    href: "https://codeforces.com/profile/shakilahmmed8882",
  },
  {
    id: "codechef",
    name: "CodeChef",
    value: "2★ · 39",
    caption: "Rating · Problems",
    href: "https://www.codechef.com/users/shakil_8882",
  },
  {
    id: "leetcode",
    name: "LeetCode",
    value: "35",
    caption: "Problems solved",
    href: "https://leetcode.com/u/shakilahmmed8882/",
  },
];

export const totalProblemsSolved = 150;
