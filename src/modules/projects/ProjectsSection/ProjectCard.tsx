"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { useRef } from "react";
import type { TProject } from "../data/projects";
import { content } from "@/config/content";

type Props = { project: TProject; index: number };

export const ProjectCard = (props: Props) => {
  const { project, index } = props;
  const cardRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 25 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 25 });
  const glowX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(my, [-0.5, 0.5], ["0%", "100%"]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="perspective h-full"
    >
      <motion.a
        ref={cardRef}
        href={project.live || "#"}
        target="_blank"
        rel="noreferrer"
        style={{ rotateX: rx, rotateY: ry }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="preserve-3d glass-card rounded-2xl p-6 h-full flex flex-col gap-5 cursor-pointer  no-underline transition-all hover:shadow-lg"
      >
        {/* moving spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${glowX} ${glowY}, hsl(var(--accent-primary)/0.12) 0%, transparent 60%)`,
          }}
        />

        {/* preview bar */}
        <div
          className="relative aspect-[16/9] rounded-xl overflow-hidden border border-border/40"
          style={{
            background: "linear-gradient(135deg, hsl(var(--card)/0.8), hsl(var(--background)/0.5))",
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 grid-pattern" />
          )}
          {/* accent glow in corner */}
          <div
            className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full blur-2xl opacity-40"
            style={{ background: "hsl(var(--accent-primary))" }}
          />
          <div className="absolute left-3 top-3 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
            <span className="h-2 w-2 rounded-full" style={{ background: "hsl(var(--accent-primary)/0.7)" }} />
          </div>
          <div className="absolute inset-x-3 bottom-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/90 drop-shadow">
              {String(index + 1).padStart(2, "0")} — {content.projects.caseStudyLabel}
            </span>
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-[hsl(var(--accent-primary))]">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
        </div>

        {/* tech tags */}
        <ul className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border/50 bg-background/30 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* links */}
        <div className="flex items-center gap-3 pt-1 border-t border-border/40">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium transition-colors hover:text-[hsl(var(--accent-primary))]"
            >
              <ExternalLink size={12} />
              {content.projects.liveLabel}
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={12} />
              {content.projects.repoLabel}
            </a>
          )}
          <ArrowUpRight
            size={14}
            className="ml-auto text-muted-foreground/40"
          />
        </div>
      </motion.a>
    </motion.div>
  );
};
