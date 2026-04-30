import { content } from "@/config/content";

const links = [
  ...content.navbar.links.filter((l) => l.id !== "home"),
  { id: "contact", label: content.navbar.ctaLabel },
];

export const FooterQuickLinks = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
        {content.footer.quickLinksLabel}
      </p>
      <nav className="flex flex-col gap-2">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className="text-sm text-muted-foreground w-fit transition-colors hover:text-[hsl(var(--accent-primary))]"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </div>
  );
};
