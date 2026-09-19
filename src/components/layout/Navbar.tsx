import { useState } from "react";
import { Menu, X } from "lucide-react";
import CTAButton from "../ui/CTAButton";

const links = [
  { label: "Services", href: "#services" },
  { label: "AI & Automation", href: "#ai-automation" },
  { label: "Communication", href: "#communication" },
  { label: "Innovative Solutions", href: "#innovative-solutions" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/40 backdrop-blur-xl backdrop-saturate-150">
      <div className="relative flex items-center justify-between w-full px-4 md:px-6 lg:px-8 h-[5.2rem]">
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-electric to-violet" />
          <span className="font-display text-white text-lg font-semibold tracking-tight">
            CampaignTech
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body whitespace-nowrap text-sm text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <CTAButton href="#contact" className="px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm">
            Talk to Our Team
          </CTAButton>
          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden px-4 md:px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-white/80"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
