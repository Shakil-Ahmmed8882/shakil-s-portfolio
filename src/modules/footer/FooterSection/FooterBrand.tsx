import { content } from "@/config/content";
import { Logo } from "@/modules/shared/components/Logo";

export const FooterBrand = () => {
  const { tagline, yearsHighlight } = content.footer;
  const parts = tagline.split(yearsHighlight);

  return (
    <div className="flex flex-col gap-4 max-w-xs">
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center">
          <Logo size={32} glow />
        </div>
        <span className="font-display text-base font-bold tracking-tight">
          {content.site.name}
        </span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {parts[0]}
        <span style={{ color: "hsl(var(--accent-primary))" }} className="font-medium">
          {yearsHighlight}
        </span>
        {parts[1]}
      </p>
    </div>
  );
};
