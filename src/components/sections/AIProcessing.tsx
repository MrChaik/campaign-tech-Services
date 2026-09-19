import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  AlignLeft,
  Brain,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  FileText,
  ListOrdered,
  Mail,
  MessageSquare,
  Phone,
  Search,
  Share2,
  Tag,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

const INPUTS: { label: string; icon: LucideIcon }[] = [
  { label: "Calls & Transcripts", icon: Phone },
  { label: "Messages", icon: MessageSquare },
  { label: "Emails", icon: Mail },
  { label: "Social Media", icon: Share2 },
  { label: "Documents", icon: FileText },
  { label: "Forms & Data", icon: ClipboardList },
];

const STEPS: { label: string; icon: LucideIcon }[] = [
  { label: "Categorize", icon: Tag },
  { label: "Detect", icon: Search },
  { label: "Prioritize", icon: ListOrdered },
  { label: "Summarize", icon: AlignLeft },
];

const OUTPUTS = ["Key Topics", "Sentiment", "Priority Leads", "Action Items"] as const;

const CORE_SIZE = 100;
const TIMING = {
  inputs: 1.8,
  pulse: 0.45,
  chips: 1.35,
  output: 1.15,
  hold: 0.35,
} as const;
const CYCLE = TIMING.inputs + TIMING.pulse + TIMING.chips + TIMING.output + TIMING.hold;

type Pt = { x: number; y: number };
type Phase = keyof typeof TIMING;

function curve(from: Pt, to: Pt): string {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const c1x = from.x + dx * 0.45;
  const c2x = from.x + dx * 0.55;
  const c1y = from.y + dy * 0.05;
  const c2y = to.y - dy * 0.05;
  return `M ${from.x.toFixed(1)} ${from.y.toFixed(1)} C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${to.x.toFixed(1)} ${to.y.toFixed(1)}`;
}

function midY(el: HTMLElement, wrap: DOMRect): number {
  const r = el.getBoundingClientRect();
  return r.top + r.height / 2 - wrap.top;
}

function PipelineParticle({
  d,
  progress,
  fill,
  reduce,
}: {
  d: string;
  progress: MotionValue<number>;
  fill: string;
  reduce: boolean;
}) {
  const dist = useTransform(progress, (p) => `${Math.min(Math.max(p, 0), 1) * 100}%`);
  const opacity = useTransform(progress, (p) => (p <= 0.001 ? 0 : 1));

  return (
    <motion.span
      aria-hidden="true"
      className="pointer-events-none absolute top-0 left-0 z-[1] size-1.5 rounded-full"
      style={{
        backgroundColor: fill,
        offsetPath: `path("${d}")`,
        offsetPosition: "0px 0px",
        offsetAnchor: "center",
        offsetRotate: "0deg",
        boxShadow: `0 0 8px ${fill}`,
        offsetDistance: reduce ? "42%" : dist,
        opacity: reduce ? 1 : opacity,
      }}
    />
  );
}

function InputRows({
  rowRefs,
  compact,
}: {
  rowRefs?: React.MutableRefObject<(HTMLLIElement | null)[]>;
  compact?: boolean;
}) {
  return (
    <ul className={cn("flex flex-col", compact ? "mt-3 gap-2" : "mt-4 gap-2.5")}>
      {INPUTS.map((item, i) => {
        const Icon = item.icon;
        return (
          <li
            key={item.label}
            ref={(el) => {
              if (rowRefs) rowRefs.current[i] = el;
            }}
            className="flex items-center gap-2"
          >
            <span
              className={cn(
                "flex shrink-0 items-center justify-center rounded-md bg-white/5",
                compact ? "size-7" : "size-8",
              )}
            >
              <Icon size={compact ? 13 : 14} className="text-cyan" aria-hidden="true" />
            </span>
            <span
              className={cn(
                "font-body text-white/75",
                compact ? "text-xs whitespace-nowrap" : "text-sm whitespace-nowrap",
              )}
            >
              {item.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function StepChips({
  chipRefs,
  hotIndex,
  reduce,
}: {
  chipRefs?: React.MutableRefObject<(HTMLDivElement | null)[]>;
  hotIndex?: number;
  reduce?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      {STEPS.map((step, i) => {
        const Icon = step.icon;
        const hot = !reduce && hotIndex === i;
        return (
          <motion.div
            key={step.label}
            ref={(el) => {
              if (chipRefs) chipRefs.current[i] = el;
            }}
            className="flex items-center gap-2.5 rounded-xl border bg-white/5 px-3 py-2"
            animate={
              reduce
                ? undefined
                : {
                    borderColor: hot ? "rgba(34,211,238,0.7)" : "rgba(255,255,255,0.1)",
                  }
            }
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-white/5">
              <Icon size={13} className="text-electric" aria-hidden="true" />
            </span>
            <span className="font-body text-sm whitespace-nowrap text-white/80">{step.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

function OutputCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "shrink-0 rounded-2xl border border-white/10 bg-white/5 p-3",
        className ?? "w-[11.75rem]",
      )}
    >
      <p className="font-display text-sm text-white">Actionable Output</p>
      <ul className="mt-3 flex flex-col gap-2">
        {OUTPUTS.map((label) => (
          <li key={label} className="flex items-center gap-2">
            <CheckCircle2 size={14} className="shrink-0 text-cyan" aria-hidden="true" />
            <span className="font-body text-xs text-white/75">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OutputArrow({ active, reduce }: { active: boolean; reduce: boolean }) {
  return (
    <motion.span
      aria-hidden="true"
      className="relative z-10 flex shrink-0 text-cyan"
      animate={
        reduce
          ? undefined
          : {
              opacity: active ? 1 : 0.5,
              scale: active ? 1.12 : 1,
              filter: active
                ? "drop-shadow(0 0 10px rgba(34,211,238,0.95))"
                : "drop-shadow(0 0 5px rgba(34,211,238,0.4))",
            }
      }
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <ChevronRight size={32} strokeWidth={2.25} />
    </motion.span>
  );
}

function DesktopPipeline({ reduce }: { reduce: boolean }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputCardRef = useRef<HTMLDivElement>(null);
  const inputRefs = useRef<(HTMLLIElement | null)[]>([]);
  const coreRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLDivElement | null)[]>([]);
  const coreTopRef = useRef(0);
  const rightTopRef = useRef(0);
  const phaseRef = useRef<Phase>("inputs");
  const hotChipRef = useRef(-1);

  const [coreTop, setCoreTop] = useState(0);
  const [rightTop, setRightTop] = useState(0);
  const [phase, setPhase] = useState<Phase>("inputs");
  const [hotChip, setHotChip] = useState(-1);
  const [paths, setPaths] = useState<{
    inputs: string[];
    chips: string[];
    w: number;
    h: number;
  }>({ inputs: [], chips: [], w: 0, h: 0 });

  const inputProgress = useMotionValue(0);
  const chipProgress = useMotionValue(0);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const update = () => {
      const wr = wrap.getBoundingClientRect();
      if (wr.width < 8 || wr.height < 8) return;

      const inputCard = inputCardRef.current;
      const core = coreRef.current;
      const rows = INPUTS.map((_, i) => inputRefs.current[i]);
      const chips = STEPS.map((_, i) => chipRefs.current[i]);
      if (!inputCard || !core || rows.some((el) => !el) || chips.some((el) => !el)) return;

      const rowEls = rows as HTMLLIElement[];
      const chipEls = chips as HTMLDivElement[];
      const rowYs = rowEls.map((el) => midY(el, wr));
      const chipYs = chipEls.map((el) => midY(el, wr));
      const stackMid = (rowYs[0] + rowYs[rowYs.length - 1]) / 2;
      const chipMid = (chipYs[0] + chipYs[chipYs.length - 1]) / 2;

      const nextCoreTop = Math.max(0, stackMid - CORE_SIZE / 2);
      const nextRightTop = Math.max(0, stackMid - (chipMid - rightTopRef.current));

      if (
        Math.abs(nextCoreTop - coreTopRef.current) > 0.5 ||
        Math.abs(nextRightTop - rightTopRef.current) > 0.5
      ) {
        coreTopRef.current = nextCoreTop;
        rightTopRef.current = nextRightTop;
        setCoreTop(nextCoreTop);
        setRightTop(nextRightTop);
        return;
      }

      const coreBox = core.getBoundingClientRect();
      const inputBox = inputCard.getBoundingClientRect();
      const coreY = coreBox.top + CORE_SIZE / 2 - wr.top;
      const coreLeft = coreBox.left - wr.left;
      const coreRight = coreBox.right - wr.left;
      const startX = inputBox.right - wr.left;

      const inputPaths = rowYs.map((y) => curve({ x: startX, y }, { x: coreLeft, y: coreY }));
      const chipPaths = chipEls.map((el, i) => {
        const box = el.getBoundingClientRect();
        return curve({ x: coreRight, y: coreY }, { x: box.left - wr.left, y: chipYs[i] });
      });

      setPaths({
        inputs: inputPaths,
        chips: chipPaths,
        w: wr.width,
        h: wr.height,
      });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(wrap);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [coreTop, rightTop]);

  useEffect(() => {
    if (reduce) {
      inputProgress.set(0.42);
      chipProgress.set(0.42);
      return;
    }

    let raf = 0;
    const origin = performance.now();
    const tick = (now: number) => {
      const t = ((now - origin) / 1000) % CYCLE;
      let cursor = 0;
      let next: Phase = "hold";
      let local = t;
      for (const name of Object.keys(TIMING) as Phase[]) {
        const dur = TIMING[name];
        if (t < cursor + dur) {
          next = name;
          local = t - cursor;
          break;
        }
        cursor += dur;
      }

      inputProgress.set(next === "inputs" ? local / TIMING.inputs : next === "pulse" ? 1 : 0);
      chipProgress.set(next === "chips" ? local / TIMING.chips : 0);

      const nextHot =
        next === "chips" ? Math.min(STEPS.length - 1, Math.floor((local / TIMING.chips) * STEPS.length)) : -1;

      if (phaseRef.current !== next) {
        phaseRef.current = next;
        setPhase(next);
      }
      if (hotChipRef.current !== nextHot) {
        hotChipRef.current = nextHot;
        setHotChip(nextHot);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce, inputProgress, chipProgress]);

  const pulsing = !reduce && phase === "pulse";
  const arrowHot = !reduce && (phase === "chips" || phase === "output");

  return (
    <div ref={wrapRef} className="relative flex items-start justify-center gap-5 lg:gap-8">
      <svg
        className="pointer-events-none absolute inset-0 z-0 size-full overflow-visible"
        viewBox={`0 0 ${Math.max(paths.w, 1)} ${Math.max(paths.h, 1)}`}
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ai-pipe-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3e7bfa" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.45" />
          </linearGradient>
        </defs>
        {paths.inputs.map((d, i) => (
          <path key={`in-${i}`} d={d} stroke="url(#ai-pipe-grad)" strokeWidth="1.4" />
        ))}
        {paths.chips.map((d, i) => (
          <path key={`chip-${i}`} d={d} stroke="url(#ai-pipe-grad)" strokeWidth="1.4" />
        ))}
      </svg>

      {paths.inputs.map((d, i) => (
        <PipelineParticle
          key={`in-dot-${i}`}
          d={d}
          progress={inputProgress}
          fill={i % 2 === 0 ? "#22d3ee" : "#3e7bfa"}
          reduce={reduce}
        />
      ))}
      {paths.chips.map((d, i) => (
        <PipelineParticle
          key={`chip-dot-${i}`}
          d={d}
          progress={chipProgress}
          fill={i % 2 === 0 ? "#22d3ee" : "#3e7bfa"}
          reduce={reduce}
        />
      ))}

      <div
        ref={inputCardRef}
        className="relative z-10 w-[12.75rem] shrink-0 rounded-2xl border border-white/10 bg-white/5 p-3 lg:w-[13.5rem] lg:p-4"
      >
        <p className="font-display text-sm text-white">Thousands of Inputs</p>
        <InputRows rowRefs={inputRefs} compact />
      </div>

      <div
        className="relative z-10 flex w-[8.75rem] shrink-0 flex-col items-center gap-5"
        style={{ marginTop: coreTop }}
      >
        <div ref={coreRef} className="relative size-[100px]">
          <motion.div
            aria-hidden="true"
            className="absolute inset-[-28%] rounded-full bg-cyan/20 blur-2xl"
            animate={
              reduce
                ? undefined
                : {
                    opacity: pulsing ? 0.8 : 0.4,
                    scale: pulsing ? 1.12 : 1,
                  }
            }
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
          <motion.div
            className="relative flex size-[100px] items-center justify-center rounded-2xl border-2 border-cyan/60 bg-navy"
            animate={
              reduce
                ? undefined
                : {
                    scale: pulsing ? 1.05 : 1,
                    boxShadow: pulsing
                      ? "0 0 32px -2px rgba(62,123,250,0.8)"
                      : "0 0 18px -4px rgba(34,211,238,0.4)",
                  }
            }
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Brain size={36} className="text-cyan" aria-hidden="true" />
          </motion.div>
        </div>
        <p className="font-display whitespace-nowrap text-center text-sm text-white/55">
          AI Processing
        </p>
      </div>

      <div
        className="relative z-10 flex shrink-0 items-center gap-3 lg:gap-4"
        style={{ marginTop: rightTop }}
      >
        <StepChips chipRefs={chipRefs} hotIndex={hotChip} reduce={reduce} />
        <OutputArrow active={arrowHot} reduce={reduce} />
        <OutputCard />
      </div>
    </div>
  );
}

function MobilePipeline() {
  return (
    <div className="flex flex-col items-stretch gap-5">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <p className="font-display text-sm text-white">Thousands of Inputs</p>
        <InputRows compact />
      </div>

      <ChevronDown size={20} className="mx-auto text-cyan/70" aria-hidden="true" />

      <div className="flex flex-col items-center">
        <div className="relative flex size-[88px] items-center justify-center rounded-2xl border-2 border-cyan/60 bg-navy shadow-[0_0_28px_-6px_rgba(34,211,238,0.55)]">
          <div className="absolute inset-[-24%] rounded-full bg-cyan/20 blur-2xl" aria-hidden="true" />
          <Brain size={32} className="relative text-cyan" aria-hidden="true" />
        </div>
        <p className="font-display mt-3 text-sm text-white/55">AI Processing</p>
      </div>

      <ChevronDown size={20} className="mx-auto text-cyan/70" aria-hidden="true" />

      <StepChips reduce />

      <ChevronDown size={20} className="mx-auto text-cyan/70" aria-hidden="true" />

      <OutputCard className="w-full" />
    </div>
  );
}

export default function AIProcessing() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      id="ai-automation"
      className="relative overflow-x-hidden bg-navy scroll-mt-[5.2rem]"
      aria-labelledby="ai-processing-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(34,211,238,0.08),transparent_55%),radial-gradient(ellipse_at_90%_80%,rgba(62,123,250,0.1),transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:py-28">
        <Reveal>
          <SectionHeader
            tone="dark"
            align="left"
            titleId="ai-processing-heading"
            eyebrow="AI & Automation"
            title="Intelligence That Works Behind the Scenes"
            accentWords={3}
            sub="AI-powered systems that automate repetitive work, process information and help teams make faster decisions."
          />
        </Reveal>

        <Reveal delay={0.16} className="mt-14">
          <div className="hidden lg:block">
            <DesktopPipeline reduce={reduce} />
          </div>
          <div className="lg:hidden">
            <MobilePipeline />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
