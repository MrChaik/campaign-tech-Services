import { motion, useReducedMotion } from "framer-motion";
import CTAButton from "../ui/CTAButton";

export default function ServiceHero({ title, tagline }: { title: string; tagline: string }) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy pt-[5.2rem]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(62,123,250,0.22),transparent_50%),radial-gradient(ellipse_at_85%_80%,rgba(139,107,240,0.16),transparent_46%)]"
        aria-hidden="true"
      />
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-body text-[11px] font-bold uppercase tracking-[0.16em] text-electric">
          Services
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-balance text-white md:text-6xl">
          {title}
        </h1>
        <p className="font-body mt-5 max-w-2xl text-lg leading-relaxed text-white/65">{tagline}</p>
        <CTAButton href="#contact" className="mt-8">
          Talk to Our Team
        </CTAButton>
      </motion.div>
    </section>
  );
}
