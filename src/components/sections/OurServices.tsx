import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  MessageSquare,
  MessagesSquare,
  Monitor,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../../lib/utils";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

const SERVICES: {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  wrap: string;
  iconClass: string;
}[] = [
  {
    title: "AI Calling",
    description: "Automated voice conversations for high-volume outreach.",
    features: [
      "AI voice conversations",
      "Call campaigns",
      "Response collection",
      "Multi-language support",
    ],
    icon: PhoneCall,
    wrap: "bg-electric/12",
    iconClass: "text-electric",
  },
  {
    title: "WhatsApp / IRM",
    description: "Secure messaging, rich media and intelligent response management.",
    features: [
      "Campaign messaging",
      "Interactive messages",
      "Automated responses",
      "Audience segmentation",
    ],
    icon: MessagesSquare,
    wrap: "bg-cyan/15",
    iconClass: "text-cyan",
  },
  {
    title: "Bulk SMS",
    description: "Reach thousands instantly with reliable, high-delivery messaging.",
    features: [
      "High-volume delivery",
      "Personalized messages",
      "Scheduled campaigns",
      "Delivery tracking",
    ],
    icon: MessageSquare,
    wrap: "bg-violet/12",
    iconClass: "text-violet",
  },
  {
    title: "Voice / IVR",
    description: "Interactive voice systems for surveys, updates and support.",
    features: ["IVR campaigns", "Missed call service", "Call routing", "Response capture"],
    icon: PhoneCall,
    wrap: "bg-electric/12",
    iconClass: "text-electric",
  },
  {
    title: "Websites & Apps",
    description: "Campaign websites, landing pages and mobile apps for better engagement.",
    features: ["Campaign websites", "Mobile apps", "Landing pages", "Digital forms"],
    icon: Monitor,
    wrap: "bg-cyan/15",
    iconClass: "text-cyan",
  },
  {
    title: "Automation & Analytics",
    description: "Workflows, automation and real-time insights to drive better decisions.",
    features: [
      "Automated workflows",
      "Audience insights",
      "Real-time reporting",
      "Custom dashboards",
    ],
    icon: BarChart3,
    wrap: "bg-violet/12",
    iconClass: "text-violet",
  },
];

function ServiceCard({
  title,
  description,
  features,
  icon: Icon,
  wrap,
  iconClass,
}: (typeof SERVICES)[number]) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-white/10 bg-navy/90 p-5 xl:p-[1.15rem]",
        "shadow-[0_12px_36px_-16px_rgba(11,19,48,0.35)]",
        "transition-[border-color,box-shadow] duration-200",
        "hover:border-electric/40 hover:shadow-[0_18px_40px_-14px_rgba(62,123,250,0.4)]",
      )}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          "mb-4 flex size-11 items-center justify-center rounded-xl transition-[box-shadow,background-color] duration-200",
          wrap,
          "group-hover:shadow-[0_0_22px_-4px_rgba(62,123,250,0.45)]",
        )}
      >
        <Icon size={22} strokeWidth={1.75} className={iconClass} aria-hidden="true" />
      </div>
      <h3 className="font-display text-lg font-semibold tracking-tight text-white leading-snug">
        {title}
      </h3>
      <p className="font-body mt-2 text-sm leading-relaxed text-white/60">{description}</p>
      <ul className="mt-4 flex flex-col gap-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <Check
              size={16}
              strokeWidth={2.25}
              className="mt-0.5 shrink-0 text-electric"
              aria-hidden="true"
            />
            <span className="font-body text-sm leading-snug text-white/70">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="font-body mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-electric transition-colors duration-200 hover:text-cyan"
      >
        Learn More
        <ArrowRight
          size={15}
          className="transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </button>
    </motion.article>
  );
}

export default function OurServices() {
  return (
    <section
      id="services"
      className="relative overflow-x-hidden bg-light scroll-mt-[5.2rem]"
      aria-labelledby="our-services-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,rgba(62,123,250,0.08),transparent_48%),radial-gradient(ellipse_at_92%_80%,rgba(139,107,240,0.07),transparent_46%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <SectionHeader
              tone="light"
              align="left"
              titleId="our-services-heading"
              eyebrow="Our Services"
              title="One Place. Every Campaign Need."
              accentWords={3}
              sub="Powerful tools. Seamless communication. Greater impact."
            />
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-5 xl:grid-cols-6 xl:gap-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={0.24 + i * 0.15} className="h-full">
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
