export type TSkill = {
  name: string;
  icon: string;
  darkIcon?: string;
};

export const skills: TSkill[] = [
  { name: "Next.js",     icon: "/skill-icons/nextJs.png" },
  { name: "React",       icon: "/skill-icons/react.png" },
  { name: "Redux",       icon: "/skill-icons/redux.png" },
  { name: "TypeScript",  icon: "/skill-icons/typescript.png" },
  { name: "Tailwind CSS", icon: "/skill-icons/tailwind.png" },
  { name: "Node.js",     icon: "/skill-icons/node.png" },
  { name: "Express.js",  icon: "/skill-icons/expressJs.png", darkIcon: "/skill-icons/expressjsWhite.png" },
  { name: "PostgreSQL",  icon: "/skill-icons/postgreSQL.png" },
  { name: "Prisma",      icon: "/skill-icons/prismaorm.png" },
  { name: "MongoDB",     icon: "/skill-icons/mongodb.png" },
  { name: "Mongoose",    icon: "/skill-icons/mongoose.png" },
  { name: "C / C++",     icon: "/skill-icons/c-c++.png" },
];
