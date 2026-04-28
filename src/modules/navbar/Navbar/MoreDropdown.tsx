"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Download, FileText, Mail } from "lucide-react";

export const MoreDropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="inline-flex items-center gap-1 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
          More
          <ChevronDown size={14} className="opacity-70" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={10}
          className="z-50 min-w-[200px] rounded-lg glass p-1.5 shadow-lg animate-in fade-in-0 slide-in-from-top-1 duration-200"
        >
          <DropdownMenu.Item asChild>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm outline-none transition-colors hover:bg-accent cursor-pointer"
            >
              <Download size={14} />
              Download Resume
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <a
              href="#projects"
              className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm outline-none transition-colors hover:bg-accent cursor-pointer"
            >
              <FileText size={14} />
              Case Studies
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item asChild>
            <a
              href="mailto:shakilahmmed8882@gmail.com"
              className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm outline-none transition-colors hover:bg-accent cursor-pointer"
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
