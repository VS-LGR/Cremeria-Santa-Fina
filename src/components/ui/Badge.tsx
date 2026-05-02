import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-brand-gold/60 bg-brand-light px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy">
      {children}
    </span>
  );
}
