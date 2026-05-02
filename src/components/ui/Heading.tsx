import type { ReactNode } from "react";
import { joinClasses } from "@/lib/format";

type HeadingTag = "h1" | "h2" | "h3";

type HeadingProps = {
  as?: HeadingTag;
  children: ReactNode;
  className?: string;
};

export function Heading({ as = "h2", children, className }: HeadingProps) {
  const Component = as;

  return (
    <Component
      className={joinClasses(
        "font-display text-balance text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.12] text-brand-navy",
        className,
      )}
    >
      {children}
    </Component>
  );
}
