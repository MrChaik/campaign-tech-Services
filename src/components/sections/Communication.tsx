import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  Bell,
  ChevronDown,
  ChevronRight,
  Mail,
  MessageSquare,
  MessagesSquare,
  Phone,
  User,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

const CHANNELS: {
  id: string;
  name: string;
  line: string;
  icon: LucideIcon;
  wrap: string;
  iconClass: string;
  fill: string;
}[] = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    line: "Message seen",
    icon: MessagesSquare,
    wrap: "bg-cyan/25",
    iconClass: "text-cyan",
    fill: "#22d3ee",
  },
  {
    id: "sms",
    name: "SMS",
    line: "Update received",
    icon: MessageSquare,
    wrap: "bg-electric/25",
    iconClass: "text-electric",
    fill: "#3e7bfa",
  },
  {
    id: "email",
    name: "Email",
    line: "Campaign info",
    icon: Mail,
    wrap: "bg-cyan/25",
    iconClass: "text-cyan",
    fill: "#22d3ee",
  },
  {
    id: "voice",
    name: "Voice / IVR",
    line: "Spoke",
    icon: Phone,
    wrap: "bg-violet/25",
    iconClass: "text-violet",
    fill: "#8b6bf0",
  },
  {
    id: "app",
    name: "App",
    line: "Notification",
    icon: Bell,
    wrap: "bg-electric/25",
    iconClass: "text-electric",
    fill: "#3e7bfa",
  },
];

const SEQ = {
  travel: 2.05,
  launch: 0.5,
  pulse: 0.42,
  chevron: 0.3,
  fill: 0.72,
  hold: 1.35,
} as const;
const CHEVRON_COUNT = 3;
const CYCLE =
  SEQ.travel + SEQ.pulse + SEQ.chevron * CHEVRON_COUNT + SEQ.fill + SEQ.hold;

const DESKTOP_NODE_ANGLES = [60, 120, 180, 240, 300] as const;
const MOBILE_NODE_ANGLES = [150, 210, 90, 330, 30] as const;
type NodeAngles = typeof DESKTOP_NODE_ANGLES | typeof MOBILE_NODE_ANGLES;

type Pt = { x: number; y: number };

function nodeAngle(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

function useIsCompact() {
  const query = "(max-width: 1023px)";
  const [compact, setCompact] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = () => setCompact(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    window.addEventListener("resize", onChange);
    return () => {
      media.removeEventListener("change", onChange);
      window.removeEventListener("resize", onChange);
    };
  }, []);

  return compact;
}

function cssPx(value: string): number {
  const raw = value.trim();
  const n = parseFloat(raw);
  if (!Number.isFinite(n)) return 0;
  if (raw.endsWith("rem")) {
    return n * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }
  return n;
}

function spoke(from: Pt, to: Pt): string {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.hypot(dx, dy) || 1;
  const mx = from.x + dx * 0.5;
  const my = from.y + dy * 0.5;
  const bow = len * 0.08;
  const qx = mx - (dy / len) * bow;
  const qy = my + (dx / len) * bow;
  return `M ${from.x.toFixed(1)} ${from.y.toFixed(1)} Q ${qx.toFixed(1)} ${qy.toFixed(1)} ${to.x.toFixed(1)} ${to.y.toFixed(1)}`;
}

function radialSpoke(
  cx: number,
  cy: number,
  radius: number,
  angleDeg: number,
  iconR: number,
  userR: number,
): string {
  const rad = (angleDeg * Math.PI) / 180;
  const ox = Math.cos(rad);
  const oy = Math.sin(rad);
  const nx = cx + ox * radius;
  const ny = cy - oy * radius;
  return spoke(
    { x: nx - ox * iconR, y: ny + oy * iconR },
    { x: cx + ox * userR, y: cy - oy * userR },
  );
}

function FlowParticle({
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
  const opacity = useTransform(progress, (p) => (p <= 0.02 || p >= 0.98 ? 0 : 1));

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
        boxShadow: `0 0 10px ${fill}`,
        offsetDistance: reduce ? "100%" : dist,
        opacity: reduce ? 1 : opacity,
      }}
    />
  );
}

function ChannelNode({
  name,
  line,
  icon: Icon,
  wrap,
  iconClass,
  fill,
  iconRef,
  hot,
  hovered,
  reduce,
  onHover,
  style,
  outwardLabel,
}: (typeof CHANNELS)[number] & {
  iconRef: (el: HTMLDivElement | null) => void;
  hot: boolean;
  hovered: boolean;
  reduce: boolean;
  onHover: (active: boolean) => void;
  style?: React.CSSProperties;
  outwardLabel?: boolean;
}) {
  const active = hot || hovered;

  return (
    <motion.div
      className="absolute z-10"
      style={style}
      onHoverStart={() => onHover(true)}
      onHoverEnd={() => onHover(false)}
    >
      <motion.div
        className="relative"
        animate={reduce ? undefined : { y: hovered ? -3 : 0 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          aria-hidden="true"
          className="absolute inset-[-30%] rounded-full blur-2xl"
          style={{ backgroundColor: fill }}
          animate={{ opacity: active ? 0.5 : 0.16 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        />
        <motion.div
          ref={iconRef}
          className={cn(
            "relative flex items-center justify-center rounded-full border bg-deep",
            "size-12 sm:size-16 lg:size-[4.5rem]",
            wrap,
          )}
          animate={{
            borderColor: active ? `${fill}99` : "rgba(11,19,48,0.1)",
            boxShadow: active ? `0 0 28px -2px ${fill}` : "0 10px 24px -16px rgba(11,19,48,0.25)",
          }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <Icon
            size={22}
            strokeWidth={1.7}
            className={cn("size-4 sm:size-5 lg:size-6", iconClass)}
            aria-hidden="true"
          />
        </motion.div>
        <div
          className={cn(
            "absolute w-max text-center",
            outwardLabel ? "left-1/2 top-1/2" : "bottom-full left-1/2 mb-2.5 -translate-x-1/2 sm:mb-3.5",
          )}
          style={
            outwardLabel
              ? {
                  transform:
                    "translate(calc(-50% + (var(--ox) * 3.15rem)), calc(-50% - (var(--oy) * 3.15rem)))",
                }
              : undefined
          }
        >
          <p className="font-display text-[11px] font-semibold leading-snug text-navy sm:text-sm">
            {name}
          </p>
          <p className="font-body mt-0.5 max-w-[7.5rem] text-[10px] leading-snug text-navy/50 sm:max-w-[9.5rem] sm:text-[12px]">
            {line}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function UserNode({
  nodeRef,
  pulsing,
  reduce,
}: {
  nodeRef: (el: HTMLDivElement | null) => void;
  pulsing: boolean;
  reduce: boolean;
}) {
  return (
    <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
      <div className="relative">
        <motion.div
          aria-hidden="true"
          className="absolute inset-[-38%] rounded-full bg-electric/25 blur-2xl"
          animate={
            reduce
              ? undefined
              : { opacity: pulsing ? 0.7 : 0.28, scale: pulsing ? 1.18 : 1 }
          }
          transition={{ duration: 0.28, ease: "easeOut" }}
        />
        <motion.div
          ref={nodeRef}
          className="relative flex size-16 items-center justify-center rounded-full border-2 border-electric/55 bg-navy sm:size-20 lg:size-[5.5rem]"
          animate={
            reduce
              ? undefined
              : {
                  scale: pulsing ? 1.05 : 1,
                  boxShadow: pulsing
                    ? "0 0 36px -2px rgba(62,123,250,0.75)"
                    : "0 12px 32px -12px rgba(11,19,48,0.45)",
                }
          }
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <User
            size={28}
            strokeWidth={1.7}
            className="size-6 text-cyan sm:size-7 lg:size-8"
            aria-hidden="true"
          />
        </motion.div>
        <p className="font-display absolute top-full left-1/2 mt-2 w-max -translate-x-1/2 text-[11px] font-semibold tracking-[0.14em] text-navy sm:mt-3 sm:text-sm">
          USER
        </p>
      </div>
    </div>
  );
}

function ChevronRelay({
  lit,
  reduce,
  direction,
}: {
  lit: number;
  reduce: boolean;
  direction: "right" | "down";
}) {
  const Icon = direction === "down" ? ChevronDown : ChevronRight;
  const count = direction === "down" ? 1 : CHEVRON_COUNT;

  return (
    <div
      className={cn(
        "shrink-0 items-center gap-2",
        direction === "down"
          ? "flex flex-col -mt-[calc(1.5rem*0.9)] lg:hidden"
          : "hidden lg:-ml-20 lg:flex lg:gap-2.5",
      )}
      aria-hidden="true"
    >
      {Array.from({ length: count }, (_, i) => {
        const on = reduce || i <= lit;
        return (
          <motion.span
            key={i}
            className="flex size-8 items-center justify-center rounded-full border lg:size-9"
            animate={{
              borderColor: on ? "rgba(62,123,250,0.55)" : "rgba(148,163,184,0.2)",
              backgroundColor: on ? "rgba(62,123,250,0.12)" : "rgba(255,255,255,0.65)",
              color: on ? "#3e7bfa" : "rgba(148,163,184,0.3)",
              boxShadow: on ? "0 0 16px -2px rgba(34,211,238,0.65)" : "0 0 0 0 rgba(0,0,0,0)",
              scale: on ? 1.08 : 1,
            }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <Icon size={16} strokeWidth={2.4} />
          </motion.span>
        );
      })}
    </div>
  );
}

function AwarenessCard({ fill, reduce }: { fill: number; reduce: boolean }) {
  const width = `${(reduce ? 1 : fill) * 90}%`;
  const pct = Math.round((reduce ? 1 : fill) * 90);

  return (
    <div className="w-[16.5rem] shrink-0 sm:w-[23rem] lg:w-[25.5rem]">
      <div className="rounded-2xl border border-navy/10 bg-deep p-3 shadow-[0_12px_32px_-18px_rgba(11,19,48,0.28)] sm:p-5">
        <p className="font-body text-[11px] font-bold uppercase tracking-[0.16em] text-electric">
          Awareness
        </p>
        <div className="mt-3 flex items-center gap-2.5 sm:gap-3">
          <div className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-navy/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-electric to-cyan"
              style={{ width }}
            />
          </div>
          <span className="font-display w-[2.4rem] shrink-0 text-right text-sm font-semibold tabular-nums text-navy">
            {pct}%
          </span>
        </div>
        <p className="font-body mt-2 text-[11px] text-navy/50 sm:text-xs">Party Recognition</p>
      </div>
    </div>
  );
}

function ChannelOrbit({
  reduce,
  travelProgress,
  pulsing,
  launching,
  angles,
  outwardLabels,
}: {
  reduce: boolean;
  travelProgress: MotionValue<number>;
  pulsing: boolean;
  launching: boolean;
  angles: NodeAngles;
  outwardLabels: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement | null>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [paths, setPaths] = useState<string[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [hovered, setHovered] = useState(-1);

  const angleKey = angles.join(",");

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const update = () => {
      const wr = wrap.getBoundingClientRect();
      if (wr.width < 8 || wr.height < 8) return;
      const user = userRef.current;
      const icons = CHANNELS.map((_, i) => iconRefs.current[i]);
      if (!user || icons.some((el) => !el)) return;

      const radius = cssPx(getComputedStyle(wrap).getPropertyValue("--r"));
      const userR = user.getBoundingClientRect().width / 2;
      const cx = wr.width / 2;
      const cy = wr.height / 2;

      setPaths(
        angles.map((deg, i) => {
          const iconR = icons[i]!.getBoundingClientRect().width / 2;
          return radialSpoke(cx, cy, radius, deg, iconR, userR);
        }),
      );
      setSize({ w: wr.width, h: wr.height });
    };

    update();
    const raf = requestAnimationFrame(update);
    const ro = new ResizeObserver(update);
    ro.observe(wrap);
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [angleKey]);

  return (
    <div
      ref={wrapRef}
      className="relative h-[22rem] w-[20rem] shrink-0 [--r:6.75rem] sm:h-[28rem] sm:w-[26rem] sm:[--r:8.75rem] lg:h-[34rem] lg:w-[32rem] lg:[--r:11.5rem]"
    >
      <svg
        className="pointer-events-none absolute inset-0 z-0 size-full overflow-visible"
        viewBox={`0 0 ${Math.max(size.w, 1)} ${Math.max(size.h, 1)}`}
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="comm-orbit-pipe" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3e7bfa" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        {paths.map((d, i) => {
          const lit = hovered === i || launching;
          return (
            <motion.path
              key={CHANNELS[i].id}
              d={d}
              stroke="url(#comm-orbit-pipe)"
              strokeWidth={1.45}
              strokeLinecap="round"
              animate={{ opacity: hovered < 0 ? (lit ? 0.95 : 0.42) : lit ? 0.95 : 0.14 }}
              transition={{ duration: 0.2 }}
            />
          );
        })}
      </svg>

      {paths.map((d, i) => (
        <FlowParticle
          key={`${CHANNELS[i].id}-dot`}
          d={d}
          progress={travelProgress}
          fill={CHANNELS[i].fill}
          reduce={reduce}
        />
      ))}

      {CHANNELS.map((channel, i) => {
        const rad = nodeAngle(angles[i]);
        return (
          <ChannelNode
            key={channel.id}
            {...channel}
            hot={launching}
            hovered={hovered === i}
            reduce={reduce}
            iconRef={(el) => {
              iconRefs.current[i] = el;
            }}
            onHover={(active) => setHovered(active ? i : -1)}
            outwardLabel={outwardLabels}
            style={
              {
                "--ox": `${Math.cos(rad)}`,
                "--oy": `${Math.sin(rad)}`,
                left: "calc(50% + (var(--ox) * var(--r)))",
                top: "calc(50% - (var(--oy) * var(--r)))",
                transform: "translate(-50%, -50%)",
              } as React.CSSProperties
            }
          />
        );
      })}
      <UserNode
        pulsing={pulsing}
        reduce={reduce}
        nodeRef={(el) => {
          userRef.current = el;
        }}
      />
    </div>
  );
}

function CommunicationFlow({ reduce }: { reduce: boolean }) {
  const compact = useIsCompact();
  const angles = compact ? MOBILE_NODE_ANGLES : DESKTOP_NODE_ANGLES;
  const wrapRef = useRef(null);
  const inView = useInView(wrapRef, { margin: "-80px" });
  const travelProgress = useMotionValue(reduce ? 1 : 0);

  const [pulsing, setPulsing] = useState(false);
  const [launching, setLaunching] = useState(false);
  const [chevron, setChevron] = useState(reduce ? CHEVRON_COUNT - 1 : -1);
  const [fill, setFill] = useState(reduce ? 1 : 0);

  useEffect(() => {
    if (reduce) {
      travelProgress.set(1);
      return;
    }
    if (!inView) return;

    let raf = 0;
    const origin = performance.now();
    const tick = (now: number) => {
      const t = ((now - origin) / 1000) % CYCLE;
      let nextPulse = false;
      let nextLaunch = false;
      let nextChevron = -1;
      let nextFill = 0;
      let nextTravel: number;

      if (t < SEQ.travel) {
        nextTravel = t / SEQ.travel;
        nextLaunch = t < SEQ.launch;
      } else if (t < SEQ.travel + SEQ.pulse) {
        nextTravel = 1;
        nextPulse = true;
      } else if (t < SEQ.travel + SEQ.pulse + SEQ.chevron * CHEVRON_COUNT) {
        nextTravel = 1;
        const local = t - SEQ.travel - SEQ.pulse;
        nextChevron = Math.min(CHEVRON_COUNT - 1, Math.floor(local / SEQ.chevron));
      } else if (t < SEQ.travel + SEQ.pulse + SEQ.chevron * CHEVRON_COUNT + SEQ.fill) {
        nextTravel = 1;
        nextChevron = CHEVRON_COUNT - 1;
        const local = t - SEQ.travel - SEQ.pulse - SEQ.chevron * CHEVRON_COUNT;
        const u = Math.min(1, local / SEQ.fill);
        nextFill = 1 - (1 - u) * (1 - u);
      } else {
        nextTravel = 1;
        nextChevron = CHEVRON_COUNT - 1;
        nextFill = 1;
      }

      travelProgress.set(nextTravel);
      setPulsing((prev) => (prev === nextPulse ? prev : nextPulse));
      setLaunching((prev) => (prev === nextLaunch ? prev : nextLaunch));
      setChevron((prev) => (prev === nextChevron ? prev : nextChevron));
      setFill((prev) => (Math.abs(prev - nextFill) < 0.008 ? prev : nextFill));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce, inView, travelProgress]);

  return (
    <div ref={wrapRef} className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-3">
      <ChannelOrbit
        reduce={reduce}
        travelProgress={travelProgress}
        pulsing={pulsing}
        launching={launching}
        angles={angles}
        outwardLabels={compact}
      />
      <ChevronRelay lit={chevron} reduce={reduce} direction="down" />
      <ChevronRelay lit={chevron} reduce={reduce} direction="right" />
      <AwarenessCard fill={fill} reduce={reduce} />
    </div>
  );
}

export default function Communication() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      id="communication"
      className="relative overflow-x-hidden bg-light scroll-mt-[5.2rem]"
      aria-labelledby="communication-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_88%_18%,rgba(62,123,250,0.08),transparent_48%),radial-gradient(ellipse_at_8%_88%,rgba(139,107,240,0.07),transparent_46%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:py-28">
        <div className="flex flex-col gap-14 xl:flex-row xl:items-center xl:gap-16">
          <div className="xl:w-[32%] xl:shrink-0">
            <Reveal>
              <SectionHeader
                tone="light"
                align="left"
                titleId="communication-heading"
                eyebrow="Communication"
                title="Reach People Across Every Channel"
                accentWords={2}
                sub="Meet your audience where they are — across multiple channels, in real time."
              />
            </Reveal>
          
          </div>

          <Reveal delay={0.2} className="min-w-0 flex-1">
            <CommunicationFlow reduce={reduce} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
