"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { TProject } from "../data/projects";

type Props = {
  project: TProject;
  index: number;
};

export const ProjectCard = (props: Props) => {
  const { project, index } = props;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group glass-card rounded-2xl p-6 h-full flex flex-col gap-5"
    >
      <div
        className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border/50"
        style={{
          background:
            "radial-gradient(ellipse at 30% 30%, hsl(var(--accent-mint) / 0.10), transparent 60%), linear-gradient(180deg, hsl(var(--card) / 0.6), hsl(var(--card) / 0.2))",
        }}
      >
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute left-3 top-3 flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/15" />
        </div>
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {String(index + 1).padStart(2, "0")} / case study
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-[hsl(var(--accent-mint))]">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="mt-auto flex flex-col gap-4">
        <ul className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border/60 bg-background/40 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 pt-1 border-t border-border/40">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs text-foreground hover:text-[hsl(var(--accent-mint))] transition-colors"
            >
              Live
              <ArrowUpRight size={12} />
            </a>
          ) : null}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors ml-auto"
            >
              <Github size={12} />
              Repo
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};
