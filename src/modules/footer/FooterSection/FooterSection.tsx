import { FooterBrand } from "./FooterBrand";
import { FooterQuickLinks } from "./FooterQuickLinks";
import { FooterConnect } from "./FooterConnect";

export const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/40 mt-16">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <FooterBrand />
          <FooterQuickLinks />
          <FooterConnect />
        </div>
        <div className="mt-12 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {year} Shakil Ahmmed. All rights reserved.</span>
          <span className="font-mono uppercase tracking-widest">
            Built with intent.
          </span>
        </div>
      </div>
    </footer>
  );
};
