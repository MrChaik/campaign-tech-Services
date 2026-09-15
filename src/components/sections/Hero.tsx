import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CTAButton from "../ui/CTAButton";
import Reveal from "../ui/Reveal";

const CX = 280;
const CY = 190;

// Nodes sorted in continuous clockwise order
const NODES = [
  { x: 280.1, y: 40 }, // 12 o'clock
  { x: 395, y: 65 },   // 1:30
  { x: 470, y: 140 },  // 3 o'clock
  { x: 440, y: 270 },  // 4:30
  { x: 330, y: 340 },  // 6 o'clock
  { x: 190, y: 330 },  // 7:30
  { x: 95,  y: 250 },  // 9 o'clock
  { x: 120, y: 100 },  // 10:30
] as const;

const TOTAL_NODES = NODES.length;
const LOOP_DURATION = 2.4;

/**
 * Generates an S-curve wave path string connecting an outer node to the central core.
 */
function getWavePath(nodeX: number, nodeY: number, coreX: number, coreY: number): string {
  const dx = coreX - nodeX;
  const dy = coreY - nodeY;

  // Midpoints along the straight trajectory
  const m1X = nodeX + dx * 0.33;
  const m1Y = nodeY + dy * 0.33;
  const m2X = nodeX + dx * 0.66;
  const m2Y = nodeY + dy * 0.66;

  // Perpendicular offset vectors to create wave crest and trough
  const waveAmplitude = 25;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;

  // Control points offset in opposite directions to form the wave
  const cp1X = m1X + nx * waveAmplitude;
  const cp1Y = m1Y + ny * waveAmplitude;
  const cp2X = m2X - nx * waveAmplitude;
  const cp2Y = m2Y - ny * waveAmplitude;

  return `M ${nodeX} ${nodeY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${coreX} ${coreY}`;
}

function NetworkVisual() {
  const reduce = useReducedMotion();

  // Pre-calculate wave paths for all nodes
  const wavePaths = NODES.map((node) => getWavePath(node.x, node.y, CX, CY));

  return (
    <svg
      viewBox="0 0 560 380"
      className="w-full h-auto"
      role="img"
      aria-label="Network of wave data streams converging into a central core"
    >
      <defs>
        <linearGradient id="hero-link-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3e7bfa" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8b6bf0" stopOpacity="0.6" />
        </linearGradient>
        <radialGradient id="hero-core-glow">
          <stop offset="0%" stopColor="#3e7bfa" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#3e7bfa" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#3e7bfa" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Static S-Wave connection paths */}
      {wavePaths.map((pathD, i) => (
        <path
          key={`wave-${i}`}
          d={pathD}
          fill="none"
          stroke="url(#hero-link-grad)"
          strokeWidth="1.5"
        />
      ))}

      {/* Central core glow */}
      <circle cx={CX} cy={CY} r="86" fill="url(#hero-core-glow)" />

      {/* Outer nodes pulsing sequentially */}
      {NODES.map((node, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={node.x}
          cy={node.y}
          r="6"
          fill="#22d3ee"
          stroke="#3e7bfa"
          strokeWidth="1.25"
          animate={reduce ? { opacity: 0.85 } : { opacity: [0.15, 1, 0.15] }}
          transition={
            reduce
              ? { duration: 0 }
              : {
                  duration: LOOP_DURATION,
                  delay: i * (LOOP_DURATION / TOTAL_NODES),
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}

      {/* Data pulses flowing along wave paths */}
      {!reduce &&
        wavePaths.map((pathD, i) => (
          <motion.path
            key={`particle-wave-${i}`}
            d={pathD}
            fill="none"
            stroke="#22d3ee"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0.08, pathOffset: 0, opacity: 0 }}
            animate={{
              pathOffset: [0, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.0,
              delay: i * (LOOP_DURATION / TOTAL_NODES),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* Pulsing core */}
      <motion.g
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        animate={reduce ? { scale: 1 } : { scale: [1, 1.12, 1] }}
        transition={
          reduce
            ? { duration: 0 }
            : { duration: 3.4, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <circle cx={CX} cy={CY} r="22" fill="#0b1330" stroke="#8b6bf0" strokeWidth="1.5" />
        <circle cx={CX} cy={CY} r="11" fill="#3e7bfa" />
        <circle cx={CX} cy={CY} r="4.5" fill="#f3f6fc" />
      </motion.g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="bg-deep pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)]">
        <div>
          <Reveal>
            <p className="font-body inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-cyan">
              Campaign Technology Infrastructure
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="font-display mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
              Technology that powers modern political campaigns
            </h1>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="font-body mt-6 text-lg text-slate-400 max-w-lg leading-relaxed">
              We build the communication infrastructure, AI systems and automation
              platforms that let organizations run large-scale campaigns with precision.
            </p>
          </Reveal>

          <Reveal delay={0.36}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CTAButton>
                Talk to Our Team
                <ArrowRight size={16} />
              </CTAButton>
              <CTAButton variant="secondary">Explore Our Services</CTAButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.5}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 md:p-6">
            <NetworkVisual />
          </div>
        </Reveal>
      </div>
    </section>
  );
}