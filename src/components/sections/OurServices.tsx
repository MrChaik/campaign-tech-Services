import { motion, useAnimationControls, useInView, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import {
  ArrowRight,
  AudioLines,
  BarChart3,
  Bot,
  Brain,
  BrainCircuit,
  Check,
  ClipboardList,
  Database,
  LayoutDashboard,
  MessageSquare,
  MessagesSquare,
  Monitor,
  PhoneCall,
  Sparkles,
  Workflow,
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
    features: [
      "IVR campaigns",
      "Missed call service",
      "Call routing",
      "Response capture",
    ],
    icon: PhoneCall,
    wrap: "bg-electric/12",
    iconClass: "text-electric",
  },
  
  {
    title: "Websites & Apps",
    description: "Campaign websites, landing pages and mobile apps for better engagement.",
    features: [
      "Campaign websites",
      "Mobile apps",
      "Landing pages",
      "Digital forms",
    ],
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
  
  {
    title: "Campaign Command Centers",
    description: "Centralized dashboards for monitoring communication and campaign operations.",
    features: [
      "Live dashboards",
      "Activity monitoring",
      "Team management",
      "Real-time reporting",
    ],
    icon: LayoutDashboard,
    wrap: "bg-electric/12",
    iconClass: "text-electric",
  },
  
  {
    title: "Digital Forms & Surveys",
    description: "Digital tools for collecting structured feedback and field-level information.",
    features: [
      "Online surveys",
      "Custom forms",
      "Response collection",
      "Real-time submissions",
    ],
    icon: ClipboardList,
    wrap: "bg-cyan/15",
    iconClass: "text-cyan",
  },
  
  {
    title: "Campaign Data Platforms",
    description: "Centralized technology for organizing campaign data and operational information.",
    features: [
      "Data management",
      "User access controls",
      "Data dashboards",
      "System integrations",
    ],
    icon: Database,
    wrap: "bg-violet/12",
    iconClass: "text-violet",
  },
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
    title: "AI Chat & Assistants",
    description: "AI-powered assistants for answering questions and handling conversations.",
    features: [
      "24/7 AI conversations",
      "WhatsApp AI assistants",
      "FAQ automation",
      "Multi-language support",
    ],
    icon: Bot,
    wrap: "bg-cyan/15",
    iconClass: "text-cyan",
  },
  
  {
    title: "AI Content & Communication",
    description: "AI-assisted content workflows for high-volume campaign communication.",
    features: [
      "Message generation",
      "Content variations",
      "Language translation",
      "Content personalization",
    ],
    icon: Sparkles,
    wrap: "bg-violet/12",
    iconClass: "text-violet",
  },
  
  {
    title: "AI Sentiment & Feedback",
    description: "Turn large volumes of public feedback and responses into structured insights.",
    features: [
      "Sentiment analysis",
      "Feedback classification",
      "Topic detection",
      "Automated summaries",
    ],
    icon: Brain,
    wrap: "bg-electric/12",
    iconClass: "text-electric",
  },
  
  {
    title: "AI Data Intelligence",
    description: "AI-powered analysis of campaign data to surface patterns and actionable insights.",
    features: [
      "Data analysis",
      "Pattern detection",
      "Audience insights",
      "Automated reports",
    ],
    icon: BrainCircuit,
    wrap: "bg-cyan/15",
    iconClass: "text-cyan",
  },
  
  {
    title: "AI Workflow Automation",
    description: "Automate repetitive campaign operations with intelligent workflows.",
    features: [
      "Task automation",
      "Lead routing",
      "Response workflows",
      "Automated notifications",
    ],
    icon: Workflow,
    wrap: "bg-violet/12",
    iconClass: "text-violet",
  },
  
  {
    title: "AI Voice & IVR",
    description: "Intelligent voice systems that automate conversations, routing and responses.",
    features: [
      "AI voice menus",
      "Smart call routing",
      "Voice surveys",
      "Response analysis",
    ],
    icon: AudioLines,
    wrap: "bg-electric/12",
    iconClass: "text-electric",
  },
];

const MotionLink = motion.create(Link);

function serviceHref(title: string) {
  const service = services.find((item) => item.title === title);
  return service ? `/services/${service.slug}` : "/";
}

function ServiceCard({
  title,
  features,
  icon: Icon,
  wrap,
  iconClass,
}: (typeof SERVICES)[number]) {
  const reduce = useReducedMotion();
  const pointerStart = useRef<{ x: number; y: number } | null>(null);

  return (
    <MotionLink
      to={serviceHref(title)}
      aria-label={title}
      onPointerDown={(event) => {
        pointerStart.current = { x: event.clientX, y: event.clientY };
      }}
      onClick={(event) => {
        const start = pointerStart.current;
        if (!start) return;
        const moved =
          Math.abs(event.clientX - start.x) > 6 || Math.abs(event.clientY - start.y) > 6;
        if (moved) event.preventDefault();
      }}
      className={cn(
        "group flex h-full w-full cursor-pointer flex-col rounded-2xl border border-white/10 bg-navy/90 p-3.5 sm:p-4",
        "shadow-[0_12px_36px_-16px_rgba(11,19,48,0.35)]",
        "transition-[border-color,box-shadow] duration-200",
        "hover:border-electric/40 hover:shadow-[0_18px_40px_-14px_rgba(62,123,250,0.4)]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric",
      )}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-2.5">
        <div
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-xl transition-[box-shadow,background-color] duration-200 sm:size-10",
            wrap,
            "group-hover:shadow-[0_0_22px_-4px_rgba(62,123,250,0.45)]",
          )}
        >
          <Icon size={18} strokeWidth={1.75} className={iconClass} aria-hidden="true" />
        </div>
        <h3 className="font-display min-w-0 text-base font-semibold tracking-tight text-white leading-snug sm:text-lg">
          {title}
        </h3>
      </div>
      <ul className="mt-3 flex flex-col gap-1.5">
        {features.slice(0, 3).map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check
              size={14}
              strokeWidth={2.25}
              className="mt-0.5 shrink-0 text-electric"
              aria-hidden="true"
            />
            <span className="font-body text-sm leading-snug text-white/70">{feature}</span>
          </li>
        ))}
      </ul>
      <span className="font-body mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-medium text-electric transition-colors duration-200 group-hover:text-cyan">
        Get this Service
        <ArrowRight
          size={15}
          className="transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </MotionLink>
  );
}

function ServicesScroller() {
  const reduce = useReducedMotion() ?? false;
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimationControls();
  const inView = useInView(viewportRef, { once: true });
  const interrupted = useRef(false);
  const started = useRef(false);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [showFade, setShowFade] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const measure = () => {
      const overflow = Math.max(0, track.scrollWidth - viewport.clientWidth);
      const left = -overflow;
      setConstraints((current) =>
        current.left === left && current.right === 0 ? current : { left, right: 0 },
      );
      if (x.get() < left) {
        x.set(left);
        controls.set({ x: left });
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(track);
    return () => observer.disconnect();
  }, [x, controls]);

  useEffect(() => {
    const updateFade = (value: number) => {
      setShowFade(constraints.left < -8 && value > constraints.left + 8);
    };
    updateFade(x.get());
    return x.on("change", updateFade);
  }, [constraints.left, x]);

  useEffect(() => {
    if (!inView || reduce || interrupted.current || started.current) return;

    const frame = requestAnimationFrame(() => {
      if (interrupted.current || started.current) return;
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;

      const distance = Math.max(0, track.scrollWidth - viewport.clientWidth);
      if (distance < 8) {
        viewport.dataset.autoscroll = "short";
        return;
      }

      const card = track.firstElementChild;
      const cardWidth = card instanceof HTMLElement ? card.getBoundingClientRect().width : 0;
      const step = cardWidth + 16;
      const duration = step > 0 ? (distance / step) * 3 : 3;

      started.current = true;
      viewport.dataset.autoscroll = `start:${Math.round(distance)}:${duration.toFixed(1)}`;
      try {
        void controls.start({
          x: -distance,
          transition: { duration, ease: "linear" },
        });
      } catch (error) {
        viewport.dataset.autoscroll = error instanceof Error ? error.message : "error";
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, controls]);

  const stopAutoScroll = () => {
    interrupted.current = true;
    controls.stop();
  };

  return (
    <div ref={viewportRef} className="@container relative mt-10 overflow-hidden py-8">
      <motion.div
        ref={trackRef}
        className="flex w-max cursor-grab gap-4 active:cursor-grabbing"
        initial={{ x: 0 }}
        animate={controls}
        drag="x"
        dragConstraints={constraints}
        dragElastic={reduce ? 0 : 0.08}
        dragMomentum={!reduce}
        onUpdate={(latest) => {
          if (typeof latest.x === "number") x.set(latest.x);
        }}
        onDragStart={stopAutoScroll}
      >
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="flex w-[calc((100cqw-1rem)/2)] shrink-0 sm:w-[calc((100cqw-2rem)/3)] lg:w-[calc((100cqw-4rem)/5)]"
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </motion.div>
      {showFade && (
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-light to-transparent"
          aria-hidden="true"
        />
      )}
    </div>
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

        <ServicesScroller />
      </div>
    </section>
  );
}
