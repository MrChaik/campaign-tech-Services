import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Services", "AI & Automation", "Solutions", "Scale", "About"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-deep/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-electric to-violet" />
          <span className="font-display text-white font-semibold tracking-tight">
            CampaignTech
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href="#" className="font-body text-sm text-slate-300 hover:text-white transition-colors">
              {l}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          {/* <CTAButton variant="secondary" className="!py-2.5 !px-5">
            Talk to Our Team
          </CTAButton> */}
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 border-t border-white/10">
          {links.map((l) => (
            <a key={l} href="#" className="font-body text-sm text-slate-300">
              {l}
            </a>
          ))}
          {/* <CTAButton className="mt-2 justify-center">Talk to Our Team</CTAButton> */}
        </div>
      )}
    </header>
  );
}