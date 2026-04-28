"use client";

import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavbarSelector } from "./NavbarContext";
import { ThemeToggle } from "@/modules/shared/components/ThemeToggle";

const links = [
  { id: "home",       label: "Home" },
  { id: "about",      label: "About" },
  { id: "skills",     label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects",   label: "Projects" },
  { id: "contact",    label: "Contact" },
];

export const MobileMenu = () => {
  const { open, setOpen, active } = useNavbarSelector();

  return (
    <div className="md:hidden flex items-center gap-1">
      <ThemeToggle />
      <button
        className="inline-flex h-9 w-9 items-center justify-center rounded-full glass text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={16} /> : <Menu size={16} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-4 right-4 top-[68px] glass rounded-2xl p-3 shadow-2xl"
          >
            <nav className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-colors"
                  style={
                    active === l.id
                      ? {
                          color: "hsl(var(--accent-primary))",
                          background: "hsl(var(--accent-primary)/0.08)",
                        }
                      : {}
                  }
                >
                  {active === l.id && (
                    <span
                      className="h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ background: "hsl(var(--accent-primary))" }}
                    />
                  )}
                  <span className={active === l.id ? "font-medium" : "text-muted-foreground"}>
                    {l.label}
                  </span>
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
