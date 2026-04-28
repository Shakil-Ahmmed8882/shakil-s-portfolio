const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const FooterQuickLinks = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
        Quick Links
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
