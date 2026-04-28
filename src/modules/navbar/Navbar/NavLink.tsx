"use client";

import { cn } from "@/lib/utils";
import { useNavbarSelector } from "./NavbarContext";
import type { TSectionId } from "./useNavbarContextHelper";

type Props = {
  id: TSectionId;
  label: string;
};

export const NavLink = (props: Props) => {
  const { id, label } = props;
  const { active } = useNavbarSelector();
  const isActive = active === id;

  return (
    <a
      href={`#${id}`}
      className={cn(
        "relative px-3 py-1.5 text-sm transition-colors duration-200",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {label}
      {isActive ? (
        <span
          className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-1 w-1 rounded-full bg-[hsl(var(--accent-mint))]"
          style={{ boxShadow: "0 0 8px hsl(var(--accent-mint) / 0.8)" }}
        />
      ) : null}
    </a>
  );
};
