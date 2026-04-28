export type TSkill = {
  name: string;
  category: "frontend" | "backend" | "database" | "language";
};

export const skills: TSkill[] = [
  { name: "Next.js", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "PostgreSQL", category: "database" },
  { name: "Prisma", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "C / C++", category: "language" },
];

export type TSkillGroup = {
  id: TSkill["category"];
  title: string;
  caption: string;
};

export const skillGroups: TSkillGroup[] = [
  { id: "frontend", title: "Frontend", caption: "Interfaces & motion" },
  { id: "backend", title: "Backend", caption: "APIs & runtime" },
  { id: "database", title: "Database", caption: "Persistence & ORM" },
  { id: "language", title: "Languages", caption: "Systems foundation" },
];
