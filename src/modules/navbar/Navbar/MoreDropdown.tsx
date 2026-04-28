"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Download, Mail, BookOpen } from "lucide-react";

export const MoreDropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full outline-none">
          More
          <ChevronDown size={13} className="opacity-60" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={10}
          avoidCollisions
          className="z-50 min-w-[200px] glass rounded-2xl p-2 shadow-2xl outline-none animate-in fade-in-0 slide-in-from-top-1 duration-150"
          style={{ boxShadow: "0 16px 48px -12px hsl(var(--accent-primary)/0.15), 0 0 0 1px hsl(var(--border)/0.5)" }}
        >
          <DropdownMenu.Item asChild>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm outline-none cursor-pointer transition-colors hover:bg-[hsl(var(--accent-primary)/0.08)] hover:text-[hsl(var(--accent-primary))]"
            >
              <Download size={14} />
              Download Resume
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <a
              href="#projects"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm outline-none cursor-pointer transition-colors hover:bg-[hsl(var(--accent-primary)/0.08)] hover:text-[hsl(var(--accent-primary))]"
            >
              <BookOpen size={14} />
              Case Studies
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1.5 h-px bg-border/50" />
          <DropdownMenu.Item asChild>
            <a
              href="mailto:shakilahmmed8882@gmail.com"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm outline-none cursor-pointer transition-colors hover:bg-[hsl(var(--accent-primary)/0.08)] hover:text-[hsl(var(--accent-primary))]"
            >
              <Mail size={14} />
              Get in Touch
            </a>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
