"use client";

import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/modules/shared/ui/Button";

export const HeroCTA = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <a href="#projects" className="hero-cta">
        <Button size="lg">
          Explore Work
          <ArrowUpRight size={16} />
        </Button>
      </a>
      <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hero-cta">
        <Button size="lg" variant="outline">
          <Download size={14} />
          Download Resume
        </Button>
      </a>
    </div>
  );
};
