import { Section } from "@/modules/shared/ui/Section";
import { SectionHeader } from "@/modules/shared/ui/SectionHeader";
import { TimelineItem } from "./TimelineItem";
import { CertificateCard } from "./CertificateCard";
import { PlatformStat } from "./PlatformStat";
import {
  experiences,
  certificates,
  platformStats,
  totalProblemsSolved,
} from "../data/experiences";

export const ExperienceTimelineSection = () => {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="03 — Track Record"
        title="Experience & milestones."
        subtitle="Three companies. One year at GKC IT. Steady delivery."
      />

      <div className="mt-14 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20">
        <div>
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-8">
            Timeline
          </p>
          <div>
            {experiences.map((e, i) => (
              <TimelineItem
                key={e.id}
                experience={e}
                index={i}
                isLast={i === experiences.length - 1}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Certificates
            </p>
            <div className="flex flex-col gap-3">
              {certificates.map((c, i) => (
                <CertificateCard key={c.id} certificate={c} index={i} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-baseline justify-between mb-4">
              <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                Competitive Programming
              </p>
              <span className="text-xs text-muted-foreground">
                <span className="font-display text-base font-semibold text-foreground tabular-nums">
                  {totalProblemsSolved}+
                </span>{" "}
                solved
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {platformStats.map((s, i) => (
                <PlatformStat key={s.id} stat={s} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
