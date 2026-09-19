import { cn } from "../../lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  sub?: string;
  titleId?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  sub,
  titleId,
  align = "center",
  tone = "dark",
  className,
}: SectionHeaderProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      <p className="font-body text-[11px] font-bold uppercase tracking-[0.16em] text-electric">
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className={cn(
          "font-display mt-4 text-4xl font-semibold tracking-tight leading-[1.12] md:text-5xl",
          dark ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {sub ? (
        <p
          className={cn(
            "font-body mt-5 text-lg leading-relaxed",
            dark ? "text-white/60" : "text-navy/60",
          )}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}
