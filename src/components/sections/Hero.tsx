import { ArrowRight } from "lucide-react";
import aiCalling from "../../assets/AI calling.png";
import bulkSms from "../../assets/Bulk SMS.png";
import campaignData from "../../assets/campaign data & analytics.png";
import customSolutions from "../../assets/Custom Innovative solutions.png";
import heroBackground from "../../assets/Hero.webp";
import heroBackgroundMobile from "../../assets/Hero-mobile.jpg";
import websitesApps from "../../assets/Websites & Apps.png";
import whatsappIrm from "../../assets/Whatsapp_IRM.png";
import AnimatedCounter from "../ui/AnimatedCounter";
import CTAButton from "../ui/CTAButton";
import HeroCarousel, { type HeroCarouselImage } from "../ui/HeroCarousel";
import Reveal from "../ui/Reveal";
import { TitleWithAccent } from "../ui/SectionHeader";

// Current service illustrations. Replace entries here when final hero photography is ready.
const HERO_SLIDES: readonly HeroCarouselImage[] = [
  { src: whatsappIrm, alt: "WhatsApp and IRM messaging", href: "/services/whatsapp-irm" },
  { src: bulkSms, alt: "Bulk SMS campaigns", href: "/services/bulk-sms" },
  { src: aiCalling, alt: "AI calling", href: "/services/ai-calling" },
  { src: websitesApps, alt: "Websites and apps", href: "/services/websites-apps" },
  { src: campaignData, alt: "Campaign data and analytics", href: "/services/campaign-data-platforms" },
  { src: customSolutions, alt: "Custom innovative solutions", href: "/services/websites-apps" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-[5.2rem]">
      <img
        src={heroBackgroundMobile}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover object-center sm:hidden"
      />
      <img
        src={heroBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 hidden size-full object-cover object-center sm:block"
      />
      <div
        className="absolute inset-0 bg-navy/80 sm:bg-navy/70"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 md:px-10 md:py-16 lg:min-h-[calc(100vh-5.2rem)] lg:grid-cols-2 lg:gap-16 lg:py-12">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-body inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan">
              Campaign Technology Infrastructure
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="font-display mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] text-balance">
              <TitleWithAccent
                text="Technology that powers modern political campaigns"
                accentWords={3}
              />
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
              <CTAButton href="#contact">
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

        <Reveal delay={0.6} className="mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <HeroCarousel images={HERO_SLIDES} />
        </Reveal>
      </div>
    </section>
  );
}
