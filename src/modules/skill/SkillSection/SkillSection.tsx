import { ParallaxSection } from "@/modules/shared/ui/ParallaxSection";
import { SkillCard } from "./SkillCard";
import { skills } from "../data/skills";
import { content } from "@/config/content";

export const SkillSection = () => {
  const t = content.skills;

  return (
    <ParallaxSection id="skills" ghostTitle={content.ghost.skills}>
      <h2 className="font-display text-4xl pb-4 md:text-6xl font-semibold leading-loose tracking-tight">
        {t.title}
        <span className="text-primary"> {t.titleAccent} </span>
      </h2>
      <p className="max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed opacity-80">
        {t.description}
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
};
