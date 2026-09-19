import { motion, useReducedMotion } from "framer-motion";
import {
  Cpu,
  Headphones,
  Landmark,
  Server,
  ShieldCheck,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../../lib/utils";
import ContactForm from "./ContactForm";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

const REASONS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Technology Expertise",
    description: "Modern, scalable solutions",
    icon: Cpu,
  },
  {
    title: "Political Domain",
    description: "Real-world experience in campaign operations",
    icon: Landmark,
  },
  {
    title: "Reliable Infrastructure",
    description: "Always on, always secure",
    icon: Server,
  },
  {
    title: "Expert Support",
    description: "Dedicated team, whenever you need us",
    icon: Headphones,
  },
  {
    title: "Proven Results",
    description: "Measurable impact across campaigns",
    icon: Trophy,
  },
  {
    title: "Security & Reliability",
    description: "Your data and operations are protected",
    icon: ShieldCheck,
  },
];

function ReasonCard({ title, description, icon: Icon }: (typeof REASONS)[number]) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className={cn(
        "flex h-full min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:gap-3.5 sm:p-4 lg:p-5",
        "shadow-[0_10px_28px_-18px_rgba(62,123,250,0.35)]",
        "transition-[border-color,box-shadow] duration-200",
        "hover:border-electric/40 hover:shadow-[0_16px_32px_-16px_rgba(62,123,250,0.45)]",
      )}
      whileHover={reduce ? undefined : { y: -3 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-electric/15 sm:size-10">
        <Icon
          size={18}
          strokeWidth={1.7}
          className="size-4 text-cyan sm:size-5"
          aria-hidden="true"
        />
      </div>
      <div className="min-w-0">
        <h3 className="font-display text-sm font-semibold leading-snug tracking-tight text-white sm:text-base">
          {title}
        </h3>
        <p className="font-body mt-0.5 text-xs leading-snug text-white/50 sm:text-sm lg:text-white/60">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

export default function ClosingSection() {
  return (
    <section
      id="about"
      className="relative overflow-x-hidden bg-navy scroll-mt-[5.2rem]"
      aria-labelledby="why-choose-us-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(62,123,250,0.08),transparent_48%),radial-gradient(ellipse_at_80%_100%,rgba(34,211,238,0.05),transparent_42%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-24 lg:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Innovative. Reliable. Scalable."
            accentWords={1}
            sub="The right mix of technology, experience and support to help you build stronger connections and bigger impact."
            titleId="why-choose-us-heading"
            align="left"
            tone="dark"
          />
        </Reveal>

        <Reveal delay={0.12} className="mt-10 md:mt-12 lg:mt-14">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {REASONS.map((reason) => (
              <ReasonCard key={reason.title} {...reason} />
            ))}
          </div>
        </Reveal>

        <div className="mt-16 h-px bg-white/10 md:mt-20" aria-hidden="true" />

        <div id="contact" className="mt-16 scroll-mt-[5.2rem] md:mt-20">
          <Reveal>
            <SectionHeader
              eyebrow="Talk to Our Team"
              title="Tell us about your campaign."
              accentWords={2}
              sub="Share a few details and we will follow up with the right people for your race, region and channels."
              titleId="contact-heading"
              align="left"
              tone="dark"
            />
          </Reveal>
          <Reveal delay={0.12} className="mt-8 md:mt-10">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
