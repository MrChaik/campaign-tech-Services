import { useEffect } from "react";

export default function LegalPage({ title }: { title: string }) {
  useEffect(() => {
    document.title = `${title} | CampaignTech`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <main className="bg-navy px-6 pt-40 pb-24">
      <h1 className="font-display mx-auto max-w-7xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h1>
    </main>
  );
}
