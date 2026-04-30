export type TProject = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  live?: string;
  repo?: string;
  accent: "purple" | "blue" | "pink";
};

export const projects: TProject[] = [
  {
    id: "rest-os",
    title: "RestOS — Restaurant OS",
    description:
      "A full restaurant management & customer engagement platform: ordering with filters, blogs with Gemini AI descriptions, recipes, comments, role-based admin, and live order tracking.",
    tech: [
      "React",
      "Vite",
      "Redux Toolkit",
      "React Query",
      "Firebase",
      "Tailwind",
      "Framer Motion",
      "Gemini AI",
    ],
    image: "/project-image/rest-os.png",
    live: "https://rest-os-client.vercel.app/",
    repo: "https://github.com/Shakil-Ahmmed8882/RestOS",
    accent: "purple",
  },
  {
    id: "help-tech",
    title: "HelpTech — Tech Insights Platform",
    description:
      "Community platform for tech tips and tutorials with rich-text posts, premium content via payments, upvotes, comments, following, and JWT-based auth.",
    tech: [
      "Next.js",
      "NextUI",
      "React Query",
      "React Hook Form",
      "Zod",
      "Tailwind",
      "JWT",
      "SSL Payment",
    ],
    image: "/project-image/help-tech.png",
    live: "https://help-tech-client.vercel.app/",
    repo: "https://github.com/Shakil-Ahmmed8882/HelpTech-frontend-",
    accent: "blue",
  },
  {
    id: "plan-pixel",
    title: "Plan Pixel — Team Workspace",
    description:
      "Realtime task and team collaboration app with Stripe billing, live updates over sockets, and a clean dashboard for planning and tracking work.",
    tech: [
      "Next.js",
      "React Query",
      "Ably",
      "Socket.IO",
      "Stripe",
      "Firebase",
      "Ant Design",
      "Tailwind",
    ],
    image: "/project-image/plan-pixel.jpeg",
    live: "https://plan-pixel.vercel.app/",
    repo: "https://github.com/Shakil-Ahmmed8882/Plan-pixel-client",
    accent: "pink",
  },
  {
    id: "acc",
    title: "ACC — Marketing & Booking Site",
    description:
      "A polished marketing site with smooth scroll, motion-rich sections, secure auth, transactional emails, and Cloudinary-backed media.",
    tech: [
      "Next.js",
      "MongoDB",
      "NextAuth",
      "Cloudinary",
      "Nodemailer",
      "Framer Motion",
      "Lenis",
      "Tailwind",
    ],
    image: "/project-image/acc.png",
    live: "https://acc1952.com/",
    repo: "https://github.com/Shakil-Ahmmed8882/acc-project",
    accent: "purple",
  },
];
