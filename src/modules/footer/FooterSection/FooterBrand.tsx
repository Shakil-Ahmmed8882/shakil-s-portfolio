export const FooterBrand = () => {
  return (
    <div className="flex flex-col gap-3 max-w-xs">
      <div className="flex items-center gap-2">
        <span
          className="inline-block h-2 w-2 rounded-full bg-[hsl(var(--accent-mint))]"
          style={{ boxShadow: "0 0 10px hsl(var(--accent-mint) / 0.7)" }}
        />
        <span className="font-display text-base font-semibold tracking-tight">
          Shakil Ahmmed
        </span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Web developer with 4+ years of experience crafting scalable, performant
        applications.
      </p>
    </div>
  );
};
