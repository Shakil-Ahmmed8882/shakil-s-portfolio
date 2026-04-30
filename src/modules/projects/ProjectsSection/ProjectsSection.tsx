import { ParallaxSection } from "@/modules/shared/ui/ParallaxSection";
import { SectionHeader } from "@/modules/shared/ui/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";
import { content } from "@/config/content";

export const ProjectsSection = () => {
  const t = content.projects;
  return (
    <ParallaxSection id="projects" variant="accent" ghostTitle={content.ghost.projects}>
      <SectionHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </ParallaxSection>
  );
};
