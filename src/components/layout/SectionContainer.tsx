import type { ReactNode } from "react";
import { joinClasses } from "@/lib/format";

type SectionContainerProps = {
  id?: string;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
};

export function SectionContainer({ id, className, contentClassName, children }: SectionContainerProps) {
  return (
    <section id={id} className={joinClasses("px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20", className)}>
      <div className={joinClasses("mx-auto w-full max-w-7xl", contentClassName)}>{children}</div>
    </section>
  );
}
