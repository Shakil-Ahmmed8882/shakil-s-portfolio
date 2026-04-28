import { Section } from "@/modules/shared/ui/Section";
import { SectionHeader } from "@/modules/shared/ui/SectionHeader";
import { SkillRow } from "./SkillRow";
import { SkillGroupSummary } from "./SkillGroupSummary";
import { skills, skillGroups } from "../data/skills";

export const SkillSection = () => {
  const counts = skillGroups.reduce<Record<string, number>>((acc, g) => {
    acc[g.id] = skills.filter((s) => s.category === g.id).length;
    return acc;
  }, {});

  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="02 — Stack"
        title="Tools I reach for."
        subtitle="A focused set — modern, performant, production-tested."
      />

      <div className="mt-14 grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
        <aside className="lg:sticky lg:top-28 self-start">
          <div className="glass-card rounded-2xl p-5">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
              By category
            </p>
            <div className="flex flex-col">
              {skillGroups.map((g, i) => (
                <SkillGroupSummary
                  key={g.id}
                  group={g}
                  count={counts[g.id] ?? 0}
                  index={i}
                />
              ))}
            </div>
          </div>
        </aside>

        <div>
          {skills.map((s, i) => (
            <SkillRow key={s.name} skill={s} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
};
