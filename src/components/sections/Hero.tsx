import { ArrowRight } from "lucide-react";
import heroBackground from "../../assets/Hero.webp";
import AnimatedCounter from "../ui/AnimatedCounter";
import CTAButton from "../ui/CTAButton";
import Reveal from "../ui/Reveal";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-[5.2rem] min-h-screen">
      <img
        src={heroBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-navy/20"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5.2rem)] max-w-7xl items-center px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-body inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan">
              Campaign Technology Infrastructure
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="font-display mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
              Technology that powers modern political campaigns
            </h1>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="font-body mt-6 text-lg text-white/75 max-w-lg leading-relaxed">
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
              <CTAButton
                href="#services"
                variant="secondary"
                className="border-white/30 text-white hover:border-white/60 hover:bg-white/10"
              >
                Explore Our Services
              </CTAButton>
            </div>
          </Reveal>

          <Reveal delay={0.48}>
            <div className="mt-8 ml-8 flex flex-wrap gap-6 md:gap-8">
              <div className="text-center">
                <AnimatedCounter value={8.4} suffix="M+" />
                <p className="font-body text-base text-white/70">Total Reach</p>
              </div>
              <div className="text-center">
                <AnimatedCounter value={1.2} suffix="M+" />
                <p className="font-body text-base text-white/70">Calls Made</p>
              </div>
              <div className="text-center">
                <AnimatedCounter value={99.9} suffix="%" />
                <p className="font-body text-base text-white/70">Uptime</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
