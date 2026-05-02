import type { AnchorHTMLAttributes, ReactNode } from "react";
import { joinClasses } from "@/lib/format";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-cream text-brand-navy shadow-sm hover:-translate-y-0.5 hover:bg-brand-gold focus-visible:ring-brand-cream",
  secondary:
    "border border-brand-cream/90 bg-brand-navy/35 text-brand-cream hover:-translate-y-0.5 hover:bg-brand-cream hover:text-brand-navy focus-visible:ring-brand-cream",
  ghost: "text-brand-cream underline-offset-4 hover:underline focus-visible:ring-brand-cream",
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={joinClasses(
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy sm:px-6 sm:py-3",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
