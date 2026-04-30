import { ParallaxSection } from "@/modules/shared/ui/ParallaxSection";
import { SectionHeader } from "@/modules/shared/ui/SectionHeader";
import { SkillCard } from "./SkillCard";
import { skills } from "../data/skills";

export const SkillSection = () => (
  <ParallaxSection id="skills" ghostTitle="Skills">
    <h2 className="font-display text-4xl pb-4 md:text-6xl font-semibold leading-loose tracking-tight">
      Tech
      <span className="text-primary"> Stack </span>
    </h2>
    <p className="max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed opacity-80">
      The Technologies that I work with daily.
    </p>

    <div className="mt-11">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </div>
  </ParallaxSection>
);
