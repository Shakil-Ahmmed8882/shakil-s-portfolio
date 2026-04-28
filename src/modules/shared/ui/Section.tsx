import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  id: string;
  children: ReactNode;
  className?: string;
};

export const Section = (props: Props) => {
  const { id, children, className } = props;
  return (
    <section
      id={id}
      className={cn(
        "relative w-full py-24 md:py-32 scroll-mt-24",
        className
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
};
