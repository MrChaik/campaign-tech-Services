import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  ArrowRight,
  Box,
  Brain,
  ChevronDown,
  ChevronRight,
  Code,
  Cog,
  Lightbulb,
  User,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import innovationBackground from "../../assets/innovation_section_bg.webp";
import CTAButton from "../ui/CTAButton";
import Reveal from "../ui/Reveal";

const TEAM: { label: string; icon: LucideIcon }[] = [
  { label: "Team", icon: User },
  { label: "Engineering", icon: Code },
  { label: "AI & Data", icon: Brain },
  { label: "Integrations", icon: Cog },
];

function FlowArrow({
  axis,
  progress,
  delay,
  visible,
  reduce,
}: {
  axis: "x" | "y";
  progress: MotionValue<number>;
  delay: number;
  visible: boolean;
  reduce: boolean;
}) {
  const along = useTransform(progress, (p) => 8 + Math.min(Math.max(p, 0), 1) * 36);
  const opacity = useTransform(progress, (p) => (p <= 0.05 || p >= 0.95 ? 0 : 1));
  const horizontal = axis === "x";

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "relative flex shrink-0 items-center justify-center",
        horizontal ? "h-10 w-14" : "h-14 w-10",
      )}
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.45, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          "rounded-full",
          horizontal
            ? "h-px w-10 bg-gradient-to-r from-electric/25 to-cyan/70"
            : "h-10 w-px bg-gradient-to-b from-electric/25 to-cyan/70",
        )}
      />
      {horizontal ? (
        <ChevronRight size={18} strokeWidth={2.2} className="absolute right-0 text-cyan" />
      ) : (
        <ChevronDown size={18} strokeWidth={2.2} className="absolute bottom-0 text-cyan" />
      )}
      {!reduce && (
        <motion.span
          className={cn(
            "absolute size-1.5 rounded-full bg-cyan",
            horizontal ? "top-1/2 left-0" : "top-0 left-1/2",
          )}
          style={{
            x: horizontal ? along : "-50%",
            y: horizontal ? "-50%" : along,
            opacity,
            boxShadow: "0 0 10px #22d3ee",
          }}
        />
      )}
    </motion.div>
  );
}

function IdeaPanel({ lit, delay, visible, reduce }: { lit: MotionValue<number>; delay: number; visible: boolean; reduce: boolean }) {
  const glow = useTransform(lit, (v) => `0 0 ${28 + v * 18}px -10px rgba(62,123,250,${0.35 + v * 0.25})`);

  return (
    <motion.div
      className="w-[10.5rem] shrink-0 rounded-2xl border border-electric/35 bg-navy/55 px-5 py-7 text-center backdrop-blur-sm sm:w-[11.5rem]"
      style={{ boxShadow: reduce ? "0 0 32px -10px rgba(62,123,250,0.4)" : glow }}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.55, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-cyan/25 bg-electric/10">
        <Lightbulb size={28} strokeWidth={1.6} className="text-cyan" aria-hidden="true" />
      </div>
      <p className="font-display mt-5 text-[15px] font-semibold leading-snug text-white">
        Your Idea or
        <br />
        Requirement
      </p>
    </motion.div>
  );
}

function TeamPanel({
  lit,
  delay,
  visible,
  reduce,
}: {
  lit: MotionValue<number>;
  delay: number;
  visible: boolean;
  reduce: boolean;
}) {
  const glow = useTransform(lit, (v) => `0 0 ${36 + v * 22}px -12px rgba(62,123,250,${0.28 + v * 0.32})`);
  const border = useTransform(lit, (v) => `rgba(62,123,250,${0.28 + v * 0.28})`);

  return (
    <motion.div
      className="w-full max-w-[34rem] rounded-2xl border bg-navy/55 px-6 py-7 backdrop-blur-sm sm:px-8 sm:py-8 lg:min-w-[26rem] lg:flex-1"
      style={{
        boxShadow: reduce ? "0 0 36px -12px rgba(62,123,250,0.38)" : glow,
        borderColor: reduce ? "rgba(62,123,250,0.32)" : border,
      }}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.55, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-display text-center text-lg font-semibold text-white sm:text-xl">
        Our Team + Technology
      </p>
      <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4 sm:gap-x-8">
        {TEAM.map(({ label, icon: Icon }) => (
          <div key={label} className="flex flex-col items-center text-center">
            <Icon size={30} strokeWidth={1.55} className="text-cyan" aria-hidden="true" />
            <p className="font-body mt-3 text-[13px] font-medium text-white/80 sm:text-sm">{label}</p>
          </div>
        ))}
      </div>
      <p className="font-body mt-8 text-center text-[12px] tracking-[0.12em] text-white/40 sm:text-[13px]">
        Tools • Data • Platforms
      </p>
    </motion.div>
  );
}

function SolutionPanel({
  lit,
  delay,
  visible,
  reduce,
}: {
  lit: MotionValue<number>;
  delay: number;
  visible: boolean;
  reduce: boolean;
}) {
  const glow = useTransform(
    lit,
    (v) => `drop-shadow(0 0 ${18 + v * 22}px rgba(34,211,238,${0.35 + v * 0.45})) drop-shadow(0 0 ${10 + v * 12}px rgba(251,146,60,${0.15 + v * 0.2}))`,
  );

  return (
    <motion.div
      className="flex w-[10.5rem] shrink-0 flex-col items-center text-center sm:w-[12rem]"
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.55, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="flex size-[7.5rem] items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(62,123,250,0.22),transparent_68%)] sm:size-[8.5rem]"
        style={{ filter: reduce ? "drop-shadow(0 0 22px rgba(34,211,238,0.4))" : glow }}
      >
        <Box size={56} strokeWidth={1.5} className="text-cyan sm:size-16" aria-hidden="true" />
      </motion.div>
      <p className="font-display mt-3 text-[15px] font-semibold leading-snug text-white">
        Custom Technology
        <br />
        Solution
      </p>
    </motion.div>
  );
}

function SolutionFlow({ reduce }: { reduce: boolean }) {
  const wrapRef = useRef(null);
  const inView = useInView(wrapRef, { once: true, margin: "-80px" });
  const cycle = useMotionValue(0);

  const arrow1 = useTransform(cycle, [0, 0.32], [0, 1]);
  const arrow2 = useTransform(cycle, [0.46, 0.78], [0, 1]);
  const teamLit = useTransform(cycle, [0.28, 0.34, 0.44, 0.5], [0, 1, 1, 0]);
  const cubeLit = useTransform(cycle, [0.74, 0.8, 0.9, 0.97], [0, 1, 1, 0]);
  const ideaLit = useTransform(cycle, [0, 0.06, 0.14, 0.2], [0, 1, 1, 0]);

  useEffect(() => {
    if (reduce || !inView) {
      cycle.set(0);
      return;
    }
    const controls = animate(cycle, 1, {
      duration: 4.6,
      delay: 1.2,
      repeat: Infinity,
      ease: "linear",
    });
    return () => controls.stop();
  }, [reduce, inView, cycle]);

  return (
    <div ref={wrapRef} className="flex w-full min-w-0 flex-col items-center gap-1 lg:flex-row lg:justify-center lg:gap-1">
      <IdeaPanel lit={ideaLit} delay={0.15} visible={inView} reduce={reduce} />
      <div className="lg:hidden">
        <FlowArrow axis="y" progress={arrow1} delay={0.32} visible={inView} reduce={reduce} />
      </div>
      <div className="hidden lg:block">
        <FlowArrow axis="x" progress={arrow1} delay={0.32} visible={inView} reduce={reduce} />
      </div>
      <TeamPanel lit={teamLit} delay={0.48} visible={inView} reduce={reduce} />
      <div className="lg:hidden">
        <FlowArrow axis="y" progress={arrow2} delay={0.64} visible={inView} reduce={reduce} />
      </div>
      <div className="hidden lg:block">
        <FlowArrow axis="x" progress={arrow2} delay={0.64} visible={inView} reduce={reduce} />
      </div>
      <SolutionPanel lit={cubeLit} delay={0.8} visible={inView} reduce={reduce} />
    </div>
  );
}

export default function InnovationSolutions() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      id="innovative-solutions"
      className="relative overflow-x-hidden bg-navy scroll-mt-[5.2rem]"
      aria-labelledby="innovation-heading"
    >
      <img
        src={innovationBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover object-center"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:py-28">
        <div className="flex flex-col gap-16 xl:flex-row xl:items-center xl:gap-32">
          <div className="xl:w-[32%] xl:shrink-0">
            <Reveal>
              <p className="font-body text-[11px] font-bold uppercase tracking-[0.16em] text-electric">
                Innovation & Custom Solutions
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="innovation-heading"
                className="font-display mt-4 text-4xl font-semibold tracking-tight text-white leading-[1.12] text-balance md:text-5xl"
              >
                Turning Ideas into{" "}
                <span className="bg-gradient-to-r from-electric to-violet bg-clip-text text-transparent">
                  Technology
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="font-body mt-5 max-w-md text-lg leading-relaxed text-white/65">
                Custom tools, AI solutions, data-driven services and technology built around your needs.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-8">
                <CTAButton>
                  Build Your Solution
                  <ArrowRight size={16} aria-hidden="true" />
                </CTAButton>
              </div>
            </Reveal>
          </div>

          <div className="min-w-0 flex-1">
            <SolutionFlow reduce={reduce} />
          </div>
        </div>
      </div>
    </section>
  );
}
