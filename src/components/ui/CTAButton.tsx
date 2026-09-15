import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function CTAButton({
  children,
  variant = "primary",
  className = "",
  ...rest
}: CTAButtonProps) {
  const base =
    "font-body inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200";

  if (variant === "primary") {
    return (
      <button
        className={cn(
          base,
          "bg-gradient-to-r from-electric to-violet text-white shadow-[0_0_25px_-5px_rgba(62,123,250,0.6)] hover:shadow-[0_0_35px_-5px_rgba(62,123,250,0.85)] hover:-translate-y-0.5",
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={cn(
        base,
        "border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}