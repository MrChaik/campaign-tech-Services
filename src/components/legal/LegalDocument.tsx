import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

export type LegalSection = {
  id: string;
  title: string;
  body: ReactNode;
};

type LegalDocumentProps = {
  title: string;
  lastUpdated?: string;
  intro?: ReactNode;
  sections: LegalSection[];
  footer?: ReactNode;
  className?: string;
};

export default function LegalDocument({
  title,
  lastUpdated,
  intro,
  sections,
  footer,
  className,
}: LegalDocumentProps) {
  return (
    <article className={cn("max-w-4xl", className)}>
      <header>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {lastUpdated ? (
          <p className="font-body mt-4 text-sm text-white/50">Last updated: {lastUpdated}</p>
        ) : null}
      </header>

      {intro ? (
        <div className="font-body legal-prose mt-8 text-base leading-relaxed text-white/70 md:mt-10 md:text-lg">
          {intro}
        </div>
      ) : null}

      <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-32">
            <h2 className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
              {section.title}
            </h2>
            <div className="font-body legal-prose mt-4 text-base leading-relaxed text-white/70 md:text-lg">
              {section.body}
            </div>
          </section>
        ))}
      </div>

      {footer ? (
        <footer className="font-body legal-prose mt-14 border-t border-white/10 pt-8 text-sm text-white/50 md:mt-16">
          {footer}
        </footer>
      ) : null}
    </article>
  );
}