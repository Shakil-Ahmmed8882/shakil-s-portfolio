"use client";

import { ArrowUpRight, Download } from "lucide-react";

export const HeroCTA = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href="#projects"
        className="hero-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_-6px_hsl(var(--accent-primary)/0.6)]"
        style={{
          background: "hsl(var(--accent-primary))",
          boxShadow: "0 4px 20px -4px hsl(var(--accent-primary)/0.5)",
        }}
      >
        Explore Work
        <ArrowUpRight size={16} />
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="hero-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold glass text-foreground transition-all duration-300 hover:scale-105 hover:border-[hsl(var(--accent-primary)/0.5)]"
      >
        <Download size={14} />
        Resume
      </a>
    </div>
  );
};
