import { useEffect, type ReactNode } from "react";
import LegalDocument, { type LegalSection } from "../components/legal/LegalDocument";

type LegalPageProps = {
  title: string;
  lastUpdated?: string;
  intro?: ReactNode;
  sections?: LegalSection[];
};

export default function LegalPage({
  title,
  lastUpdated,
  intro,
  sections = [],
}: LegalPageProps) {
  useEffect(() => {
    document.title = `${title} | CampaignTech`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <main className="bg-navy pt-40 pb-20 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <LegalDocument
          title={title}
          lastUpdated={lastUpdated}
          intro={intro}
          sections={sections}
        />
      </div>
    </main>
  );
}
