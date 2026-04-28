export type TProject = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  live?: string;
  repo?: string;
  accent: "purple" | "blue" | "pink";
};

export const projects: TProject[] = [
  {
    id: "platform",
    title: "Realtime Logistics Platform",
    description:
      "Multi-tenant dashboard with live tracking, role-based access and event-driven workflows.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    live: "https://example.com",
    repo: "https://github.com",
    accent: "purple",
  },
  {
    id: "commerce",
    title: "Headless Commerce",
    description:
      "Storefront with edge caching, server actions and incremental delivery — sub-second TTFB.",
    tech: ["Next.js", "Redux", "Tailwind", "MongoDB"],
    live: "https://example.com",
    repo: "https://github.com",
    accent: "blue",
  },
  {
    id: "design-system",
    title: "Design System",
    description:
      "Composable component library with motion primitives, theming, and zero-runtime styling.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    repo: "https://github.com",
    accent: "pink",
  },
  {
    id: "analytics",
    title: "Analytics Engine",
    description:
      "Streaming events pipeline with custom aggregations and a query DSL for product teams.",
    tech: ["Node.js", "Express", "PostgreSQL"],
    live: "https://example.com",
    accent: "purple",
  },
];
