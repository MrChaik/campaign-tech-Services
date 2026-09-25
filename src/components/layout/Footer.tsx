import { Link } from "react-router-dom";
import { services } from "../../data/services";

const company = [
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const coreServices = services.filter((service) => !service.title.startsWith("AI "));
const aiServices = services.filter((service) => service.title.startsWith("AI "));

function ServiceList({
  items,
  className,
}: {
  items: typeof services;
  className?: string;
}) {
  return (
    <ul className={className}>
      {items.map((service) => (
        <li key={service.slug}>
          <Link
            to={`/services/${service.slug}`}
            className="font-body text-sm text-slate-500 transition-colors hover:text-slate-300"
          >
            {service.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050910] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-electric to-violet" />
              <span className="font-display font-semibold text-white">CampaignTech</span>
            </div>
            <p className="font-body max-w-xs text-sm text-slate-500">
              Technology infrastructure for political organizations and campaigns.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="font-display mb-4 text-sm text-white">Company</p>
            <ul className="space-y-2">
              {company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-slate-500 transition-colors hover:text-slate-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="font-display mb-4 text-sm text-white">Services</p>
            <ServiceList items={coreServices} className="grid grid-cols-2 gap-x-6 gap-y-2" />
          </div>

          <div className="lg:col-span-3">
            <p className="font-display mb-4 text-sm text-white">AI Services</p>
            <ServiceList items={aiServices} className="space-y-2" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="font-body text-xs text-slate-600">
            © {new Date().getFullYear()} CampaignTech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="font-body text-xs text-slate-600 transition-colors hover:text-slate-400"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="font-body text-xs text-slate-600 transition-colors hover:text-slate-400"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
