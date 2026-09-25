import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ServiceBenefits from "../../components/service/ServiceBenefits";
import ServiceHero from "../../components/service/ServiceHero";
import ServiceOverview from "../../components/service/ServiceOverview";
import ContactForm from "../../components/sections/ContactForm";
import Reveal from "../../components/ui/Reveal";
import SectionHeader from "../../components/ui/SectionHeader";
import { getService } from "../../data/services";

const HOME_TITLE = "CampaignTech | Technology for modern political campaigns";
const HOME_DESCRIPTION =
  "CampaignTech builds communication infrastructure, AI calling, messaging and automation platforms so political organizations can run large-scale campaigns with precision.";

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

export default function ServicePage() {
  const { slug } = useParams();
  const service = getService(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!service) {
      document.title = "Service not found | CampaignTech";
      return;
    }

    document.title = service.seoTitle;
    setMeta('meta[name="description"]', service.seoDescription);
    setMeta('meta[property="og:title"]', service.seoTitle);
    setMeta('meta[property="og:description"]', service.seoDescription);
    setMeta('meta[name="twitter:title"]', service.seoTitle);
    setMeta('meta[name="twitter:description"]', service.seoDescription);

    return () => {
      document.title = HOME_TITLE;
      setMeta('meta[name="description"]', HOME_DESCRIPTION);
      setMeta('meta[property="og:title"]', HOME_TITLE);
      setMeta(
        'meta[property="og:description"]',
        "AI systems, communication tools and automation platforms for political organizations and campaigns.",
      );
      setMeta('meta[name="twitter:title"]', HOME_TITLE);
      setMeta(
        'meta[name="twitter:description"]',
        "AI systems, communication tools and automation platforms for political organizations and campaigns.",
      );
    };
  }, [service]);

  if (!service) {
    return (
      <main className="bg-navy px-6 pt-40 pb-24 text-center">
        <h1 className="font-display text-4xl font-semibold text-white">Service not found</h1>
        <Link to="/" className="font-body mt-6 inline-block text-electric">
          Back to home
        </Link>
      </main>
    );
  }

  return (
    <main>
      <ServiceHero title={service.title} tagline={service.tagline} />
      <ServiceOverview heading={service.overviewHeading} paragraphs={service.overview} />
      <ServiceBenefits paragraphs={service.benefits} />
      <section id="contact" className="scroll-mt-[5.2rem] bg-navy" aria-labelledby="contact-heading">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
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
      </section>
    </main>
  );
}
