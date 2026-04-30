import { Code2 } from "lucide-react";
import { content } from "@/config/content";

export const FooterBrand = () => {
  const { tagline, yearsHighlight } = content.footer;
  const parts = tagline.split(yearsHighlight);

  return (
    <div className="flex flex-col gap-4 max-w-xs">
      <div className="flex items-center gap-2.5">
        <span
          className="flex h-7 w-7 items-center justify-center rounded-lg"
          style={{
            background: "hsl(var(--accent-primary))",
            boxShadow: "0 0 14px hsl(var(--accent-primary)/0.5)",
          }}
        >
          <Code2 size={14} className="text-white" />
        </span>
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
