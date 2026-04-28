"use client";

import { cn } from "@/lib/utils";
import { useNavbarSelector } from "./NavbarContext";
import { NavLink } from "./NavLink";
import { MoreDropdown } from "./MoreDropdown";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "@/modules/shared/components/ThemeToggle";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const NavbarContent = () => {
  const { scrolled } = useNavbarSelector();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "py-2"
          : "py-4"
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-4 md:px-5 transition-all duration-300",
            scrolled
              ? "h-12 glass shadow-[0_4px_24px_-12px_rgba(0,0,0,0.2)]"
              : "h-14 bg-transparent border border-transparent"
          )}
        >
          <a href="#home" className="flex items-center gap-2 font-display text-base font-semibold tracking-tight">
            <span
              className="inline-block h-2 w-2 rounded-full bg-[hsl(var(--accent-mint))]"
              style={{ boxShadow: "0 0 10px hsl(var(--accent-mint) / 0.8)" }}
            />
            Shakil
          </a>

          <nav className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <NavLink key={l.id} id={l.id} label={l.label} />
            ))}
            <MoreDropdown />
          </nav>

          <div className="hidden md:flex items-center gap-1.5">
            <ThemeToggle />
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
