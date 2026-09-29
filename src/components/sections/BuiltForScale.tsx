import { Cloud, Gauge, Layers, ShieldCheck, type LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import scaleInfrastructure from "../../assets/scale-infrastructure.webp";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

const FEATURES: { title: string; icon: LucideIcon }[] = [
  { title: "Scalable Infrastructure", icon: Cloud },
  { title: "High Availability", icon: ShieldCheck },
  { title: "Reliable Performance", icon: Gauge },
  { title: "High-Volume Processing", icon: Layers },
];

function FeatureCard({ title, icon: Icon }: (typeof FEATURES)[number]) {
  return (
    <article
      className={cn(
        "flex items-center gap-3 rounded-2xl border border-navy/8 bg-deep px-4 py-4",
        "shadow-[0_8px_24px_-18px_rgba(62,123,250,0.4)]",
        "lg:flex-col lg:items-start lg:gap-3 lg:px-5 lg:py-5",
      )}
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-electric/10">
        <Icon size={20} strokeWidth={1.7} className="text-electric" aria-hidden="true" />
      </div>
      <p className="font-display text-sm font-semibold leading-snug text-navy lg:text-[15px]">{title}</p>
    </article>
  );
}

function ScaleVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[28rem] lg:max-w-none">
      <div
        className="pointer-events-none absolute inset-[8%] rounded-full bg-electric/25 blur-3xl"
        aria-hidden="true"
      />
      <img
        src={scaleInfrastructure}
        alt="Cloud infrastructure scaling from small server clusters to a large high-availability cluster"
        className="relative z-[1] w-full"
      />
    </div>
  );
}

export default function BuiltForScale() {
  return (
    <section
      className="relative overflow-x-hidden bg-light scroll-mt-[5.2rem]"
      aria-labelledby="scale-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_58%,rgba(62,123,250,0.08),transparent_52%),radial-gradient(ellipse_at_92%_12%,rgba(34,211,238,0.06),transparent_42%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:py-28">
        <div className="flex flex-col gap-10 md:gap-12 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-6 xl:gap-x-8">
          <div className="relative z-20 lg:col-span-4 lg:self-center">
            <Reveal>
              <SectionHeader
                eyebrow="Built for Scale"
                title="From Thousands to Millions of Interactions"
                accentWords={3}
                sub="Our cloud-native infrastructure is built for performance, reliability and scale — so your message always reaches your audience."
                titleId="scale-heading"
                align="left"
                tone="light"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:z-10 lg:-mx-8 xl:-mx-12">
            <Reveal delay={0.12}>
              <ScaleVisual />
            </Reveal>
          </div>

          <div className="relative z-20 lg:col-span-3 lg:self-center">
            <Reveal delay={0.18}>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {FEATURES.map((feature) => (
                  <FeatureCard key={feature.title} {...feature} />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
