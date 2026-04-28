"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-9 w-9" />;

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-9 items-center justify-center rounded-full glass text-muted-foreground transition-all duration-200 hover:text-foreground"
    >
      <Sun
        size={15}
        className="absolute transition-all duration-300 dark:rotate-90 dark:scale-0 scale-100 rotate-0"
      />
      <Moon
        size={15}
        className="absolute transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100"
      />
    </button>
  );
};
