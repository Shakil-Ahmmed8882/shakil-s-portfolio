import { ParallaxSection } from "@/modules/shared/ui/ParallaxSection";
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
import { Code2 } from "lucide-react";

export const ExperienceTimelineSection = () => {
  return (
    <ParallaxSection id="experience" variant="tinted" ghostTitle="Experience">
      <SectionHeader
        eyebrow="03 — Track Record"
        title="Experience & milestones."
        subtitle="Three companies. One year at GKC IT. Consistent delivery."
      />

      <div className="mt-14 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20">
        {/* timeline */}
        <div>
          <p className="mb-8 text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
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

        {/* right column */}
        <div className="flex flex-col gap-12">
          {/* certs */}
          <div>
            <p className="mb-4 text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
              Certificates
            </p>
            <div className="flex flex-col gap-3">
              {certificates.map((c, i) => (
                <CertificateCard key={c.id} certificate={c} index={i} />
              ))}
            </div>
          </div>

          {/* competitive */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <p className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                <Code2 size={12} style={{ color: "hsl(var(--accent-primary))" }} />
                Competitive Programming
              </p>
              <span className="text-xs text-muted-foreground">
                <span
                  className="font-display text-base font-bold tabular-nums"
                  style={{ color: "hsl(var(--accent-primary))" }}
                >
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
    </ParallaxSection>
  );
};
