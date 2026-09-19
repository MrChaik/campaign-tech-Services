import { cn } from "../../lib/utils";

const ACCENT_CLASS =
  "bg-gradient-to-r from-electric to-cyan bg-clip-text text-transparent";

function accentWordCount(wordCount: number, override?: number) {
  if (override != null) return Math.min(Math.max(1, override), wordCount);
  if (wordCount <= 3) return 1;
  if (wordCount === 4) return 2;
  return 3;
}

export function TitleWithAccent({
  text,
  accentWords,
}: {
  text: string;
  accentWords?: number;
}) {
  const words = text.trim().split(/\s+/);
  const n = accentWordCount(words.length, accentWords);
  const head = words.slice(0, -n).join(" ");
  const tail = words.slice(-n).join(" ");

  return (
    <>
      {head ? `${head} ` : null}
      <span className={ACCENT_CLASS}>{tail}</span>
    </>
  );
}

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  sub?: string;
  titleId?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  accentWords?: number;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  sub,
  titleId,
  align = "center",
  tone = "dark",
  accentWords,
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
          "font-display mt-4 text-4xl font-semibold tracking-tight leading-[1.12] text-balance md:text-5xl",
          dark ? "text-white" : "text-navy",
        )}
      >
        <TitleWithAccent text={title} accentWords={accentWords} />
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
