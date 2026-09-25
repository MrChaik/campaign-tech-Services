import Reveal from "../ui/Reveal";

export default function ServiceBenefits({ paragraphs }: { paragraphs: string[] }) {
  return (
    <section className="bg-white" aria-labelledby="service-benefits-heading">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <Reveal>
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.16em] text-electric">
            Campaign impact
          </p>
          <h2
            id="service-benefits-heading"
            className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-navy md:text-5xl"
          >
            How it helps your campaign
          </h2>
        </Reveal>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {paragraphs.map((paragraph, index) => (
            <li key={paragraph} className="h-full">
              <Reveal delay={index * 0.08} className="h-full">
                <div className="h-full rounded-2xl border border-navy/10 bg-light p-6">
                  <span className="font-display text-sm font-semibold text-electric">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body mt-4 text-base leading-relaxed text-navy/75">{paragraph}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
