import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const GradientBorder = (props: Props) => {
  const { children, className } = props;
  return <div className={cn("relative", className)}>{children}</div>;
};
