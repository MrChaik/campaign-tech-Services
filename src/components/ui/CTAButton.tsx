import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

type CTAButtonBase = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

type CTAButtonAsButton = CTAButtonBase &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type CTAButtonAsLink = CTAButtonBase &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type CTAButtonProps = CTAButtonAsButton | CTAButtonAsLink;

export default function CTAButton({
  children,
  variant = "primary",
  className = "",
  href,
  ...rest
}: CTAButtonProps) {
  const classes = cn(
    "font-body inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200",
    variant === "primary"
      ? "bg-gradient-to-r from-electric to-violet text-white shadow-[0_0_25px_-5px_rgba(62,123,250,0.6)] hover:shadow-[0_0_35px_-5px_rgba(62,123,250,0.85)] hover:-translate-y-0.5"
      : "border border-navy/20 text-navy hover:border-navy/40 hover:bg-navy/5",
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
