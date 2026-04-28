import { FooterBrand } from "./FooterBrand";
import { FooterQuickLinks } from "./FooterQuickLinks";
import { FooterConnect } from "./FooterConnect";

export const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/30 mt-20">
      {/* top accent line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--accent-primary)/0.5), transparent)",
        }}
      />
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <FooterBrand />
          <FooterQuickLinks />
          <FooterConnect />
        </div>
        <div className="mt-12 pt-6 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-muted-foreground">
            © {year} Shakil Ahmmed. All rights reserved.
          </span>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground/50">
            Built with intent ·{" "}
            <span style={{ color: "hsl(var(--accent-primary))" }}>Next.js</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
