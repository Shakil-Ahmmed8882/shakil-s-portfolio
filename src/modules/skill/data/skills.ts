export type TSkill = {
  name: string;
  category: "frontend" | "backend" | "database" | "language";
  icon: string; // emoji icon
};

export const skills: TSkill[] = [
  { name: "Next.js",     category: "frontend",  icon: "▲" },
  { name: "Redux",       category: "frontend",  icon: "🔄" },
  { name: "TypeScript",  category: "frontend",  icon: "⬡" },
  { name: "Tailwind CSS",category: "frontend",  icon: "🎨" },
  { name: "Node.js",     category: "backend",   icon: "⬢" },
  { name: "Express.js",  category: "backend",   icon: "⚡" },
  { name: "PostgreSQL",  category: "database",  icon: "🐘" },
  { name: "Prisma",      category: "database",  icon: "◈" },
  { name: "MongoDB",     category: "database",  icon: "🍃" },
  { name: "C / C++",     category: "language",  icon: "⚙" },
];

export type TSkillGroup = {
  id: TSkill["category"];
  title: string;
  caption: string;
};

export const skillGroups: TSkillGroup[] = [
  { id: "frontend", title: "Frontend",  caption: "Interfaces & motion" },
  { id: "backend",  title: "Backend",   caption: "APIs & runtime" },
  { id: "database", title: "Database",  caption: "Persistence & ORM" },
  { id: "language", title: "Languages", caption: "Systems foundation" },
];
