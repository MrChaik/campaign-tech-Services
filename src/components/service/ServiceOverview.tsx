import Reveal from "../ui/Reveal";

export default function ServiceOverview({
  heading,
  paragraphs,
}: {
  heading: string;
  paragraphs: string[];
}) {
  return (
    <section className="bg-light" aria-labelledby="service-overview-heading">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <Reveal>
          <h2
            id="service-overview-heading"
            className="font-display text-3xl font-semibold tracking-tight text-navy md:text-5xl"
          >
            {heading}
          </h2>
        </Reveal>
        <div className="mt-8 space-y-5">
          {paragraphs.map((paragraph) => (
            <Reveal key={paragraph}>
              <p className="font-body text-lg leading-relaxed text-navy/70">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
