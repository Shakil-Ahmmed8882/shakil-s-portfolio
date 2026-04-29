"use client";

import { cn } from "@/lib/utils";
import { useNavbarSelector } from "./NavbarContext";
import { NavLink } from "./NavLink";
import { MoreDropdown } from "./MoreDropdown";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "@/modules/shared/components/ThemeToggle";

const links = [
  { id: "home",       label: "Home" },
  { id: "about",      label: "About" },
  { id: "skills",     label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects",   label: "Projects" },
  { id: "contact",    label: "Contact" },
] as const;

export const NavbarContent = () => {
  const { scrolled } = useNavbarSelector();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="xl:max-w-[1440px] mx-auto">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-4 md:px-5 transition-all duration-300",
            scrolled
              ? "h-12 glass shadow-[0_4px_32px_-8px_hsl(var(--accent-primary)/0.15)]"
              : "h-14 bg-transparent border border-transparent"
          )}
        >
          {/* logo */}
          <a
            href="#home"
            className="flex items-center gap-2 font-display text-base font-bold tracking-tight"
          >
            <span
              className="inline-flex h-6 w-6 items-center justify-center rounded-md"
              style={{
                background: "hsl(var(--accent-primary))",
                boxShadow: "0 0 12px hsl(var(--accent-primary)/0.6)",
              }}
            >
              <span className="text-[10px] font-black text-white">S</span>
            </span>
            Shakil
          </a>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <NavLink key={l.id} id={l.id} label={l.label} />
            ))}
            <MoreDropdown />
          </nav>

          {/* right controls */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-white transition-all hover:scale-105"
              style={{
                background: "hsl(var(--accent-primary))",
                boxShadow: "0 4px 16px -4px hsl(var(--accent-primary)/0.5)",
              }}
            >
              Hire me
            </a>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
