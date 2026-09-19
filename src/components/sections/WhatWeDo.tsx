import {
  ArrowRight,
  Cpu,
  Database,
  Headphones,
  LayoutDashboard,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../../lib/utils";
import CTAButton from "../ui/CTAButton";
import SectionHeader from "../ui/SectionHeader";

const FEATURES: {
  title: string;
  description: string;
  icon: LucideIcon;
  wrap: string;
  iconClass: string;
}[] = [
  {
    title: "Communication Tools",
    description: "Reach & engage your audience",
    icon: MessageCircle,
    wrap: "bg-cyan/20",
    iconClass: "text-cyan",
  },
  {
    title: "Data & Intelligence",
    description: "Turn data into actionable insights",
    icon: Database,
    wrap: "bg-electric/20",
    iconClass: "text-electric",
  },
  {
    title: "Digital Platforms",
    description: "Websites, apps & custom solutions",
    icon: LayoutDashboard,
    wrap: "bg-electric/20",
    iconClass: "text-electric",
  },
  {
    title: "Automation",
    description: "Save time, increase efficiency",
    icon: Cpu,
    wrap: "bg-violet/20",
    iconClass: "text-violet",
  },
  {
    title: "Support & Enablement",
    description: "Dedicated team and ongoing support",
    icon: Headphones,
    wrap: "bg-violet/20",
    iconClass: "text-violet",
  },
];

function FeatureCard({
  title,
  description,
  icon: Icon,
  wrap,
  iconClass,
}: (typeof FEATURES)[number]) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.04] p-5",
        "shadow-[0_8px_32px_-16px_rgba(62,123,250,0.4)] backdrop-blur-md",
        "transition-[transform,box-shadow,border-color,background-color] duration-200",
        "hover:-translate-y-1 hover:border-electric/50 hover:bg-white/[0.07]",
        "hover:shadow-[0_16px_40px_-14px_rgba(62,123,250,0.55),0_0_28px_-8px_rgba(139,107,240,0.4)]",
      )}
    >
      <div
        className={cn(
          "mb-4 flex size-11 items-center justify-center rounded-xl transition-colors duration-200",
          wrap,
          "group-hover:bg-electric/25",
        )}
      >
        <Icon
          size={20}
          strokeWidth={1.75}
          className={cn(
            "transition-colors duration-200 group-hover:text-cyan",
            iconClass,
          )}
          aria-hidden="true"
        />
      </div>
      <h3 className="font-display text-base font-semibold leading-snug text-white">{title}</h3>
      <p className="font-body mt-2 text-sm leading-relaxed text-white/50">{description}</p>
    </article>
  );
}

export default function WhatWeDo() {
  return (
    <section
      className="relative overflow-x-hidden bg-navy scroll-mt-[5.2rem]"
      aria-labelledby="what-we-do-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_18%,rgba(62,123,250,0.2),transparent_52%),radial-gradient(ellipse_at_8%_88%,rgba(139,107,240,0.16),transparent_48%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-0 top-1/3 h-64 w-64 rounded-full bg-electric/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:py-28">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          <div className="lg:w-[38%] lg:shrink-0">
            <SectionHeader
              tone="dark"
              align="left"
              titleId="what-we-do-heading"
              eyebrow="What We Do"
              title="More than just services — we build the technology behind your campaign."
              accentWords={4}
              sub="From communication tools to intelligent automation, we provide the digital infrastructure political organizations need to run successful campaigns."
            />
            <div className="mt-8">
              <CTAButton href="#services">
                Explore Our Services
                <ArrowRight size={16} />
              </CTAButton>
            </div>
          </div>

          <div className="grid min-w-0 flex-1 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
