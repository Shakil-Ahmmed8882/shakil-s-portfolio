"use client";

import { cn } from "@/lib/utils";
import { useNavbarSelector } from "./NavbarContext";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "@/modules/shared/components/ThemeToggle";
import { Logo } from "@/modules/shared/components/Logo";
import { content } from "@/config/content";

export const NavbarContent = () => {
  const { scrolled } = useNavbarSelector();
  const { logoLabel, ctaLabel, ctaHref, links } = content.navbar;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[padding] duration-300",
        scrolled ? "py-0" : "py-4"
      )}
    >
      <div
        className={cn(
          "xl:max-w-[1440px] mx-auto px-4 md:px-6 transition-all duration-300"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled
              ? "h-12 rounded-none border-b border-border/40 bg-background/85 backdrop-blur-md"
              : "h-14 rounded-full bg-transparent border border-transparent"
          )}
        >
          {/* logo */}
          <a
            href="#home"
            className="flex items-center gap-2 font-display text-base font-bold tracking-tight"
          >
            <div className="inline-flex h-6 w-6 items-center justify-center">
              <Logo size={20} />
            </div>
            {logoLabel}
          </a>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <NavLink key={l.id} id={l.id} label={l.label} />
            ))}
          </nav>

          {/* right controls */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <a
              href={ctaHref}
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-white transition-all hover:scale-105"
              style={{
                background: "hsl(var(--accent-primary))",
                boxShadow: "0 4px 16px -4px hsl(var(--accent-primary)/0.5)",
              }}
            >
              {ctaLabel}
            </a>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
