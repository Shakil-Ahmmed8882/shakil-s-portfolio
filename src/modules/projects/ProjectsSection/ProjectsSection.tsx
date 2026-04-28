import { ParallaxSection } from "@/modules/shared/ui/ParallaxSection";
import { SectionHeader } from "@/modules/shared/ui/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";

export const ProjectsSection = () => {
  return (
    <ParallaxSection id="projects" variant="accent">
      <SectionHeader
        eyebrow="04 — Selected Work"
        title="Projects worth a look."
        subtitle="A handful of things I've built, shipped, and shaped."
      />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </ParallaxSection>
  );
};
