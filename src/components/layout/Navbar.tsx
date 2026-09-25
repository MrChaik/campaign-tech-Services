import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import { cn } from "../../lib/utils";
import CTAButton from "../ui/CTAButton";

const coreServices = services.filter((service) => !service.title.startsWith("AI "));
const aiServices = services.filter((service) => service.title.startsWith("AI "));

const pageLinks = [
  { label: "Communication", href: "/#communication" },
  { label: "Innovative Solutions", href: "/#innovative-solutions" },
  { label: "About", href: "/#about" },
];

type MenuId = "services" | "ai";

function ServiceLinks({
  items,
  onNavigate,
  className,
}: {
  items: typeof services;
  onNavigate: () => void;
  className?: string;
}) {
  return (
    <ul className={className}>
      {items.map((service) => (
        <li key={service.slug}>
          <Link
            to={`/services/${service.slug}`}
            onClick={onNavigate}
            className="font-body block rounded-lg px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            {service.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function DesktopMenu({
  id,
  label,
  items,
  openMenu,
  setOpenMenu,
}: {
  id: MenuId;
  label: string;
  items: typeof services;
  openMenu: MenuId | null;
  setOpenMenu: (id: MenuId | null) => void;
}) {
  const open = openMenu === id;

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenMenu(id)}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <button
        type="button"
        className="font-body inline-flex items-center gap-1 whitespace-nowrap text-sm text-white/80 transition-colors hover:text-white"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpenMenu(open ? null : id)}
      >
        {label}
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={cn("transition-transform duration-200 motion-reduce:transition-none", open && "rotate-180")}
        />
      </button>
      {open ? (
        <div className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3">
          <ServiceLinks
            items={items}
            onNavigate={() => setOpenMenu(null)}
            className="w-72 rounded-xl border border-white/10 bg-navy p-2 shadow-[0_18px_40px_-16px_rgba(11,19,48,0.8)]"
          />
        </div>
      ) : null}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<MenuId | null>(null);
  const [mobileMenu, setMobileMenu] = useState<MenuId | null>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDesktopMenu(null);
        setMobileMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMobile = () => {
    setOpen(false);
    setMobileMenu(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/40 backdrop-blur-xl backdrop-saturate-150">
      <div className="relative flex h-[5.2rem] w-full items-center justify-between px-4 md:px-6 lg:px-8">
        <a href="/" className="flex shrink-0 items-center gap-2.5">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-electric to-violet" />
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            CampaignTech
          </span>
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex xl:gap-8">
          <Link
            to="/"
            className="font-body text-sm whitespace-nowrap text-white/80 transition-colors hover:text-white"
          >
            Home
          </Link>
          <DesktopMenu
            id="services"
            label="Services"
            items={coreServices}
            openMenu={desktopMenu}
            setOpenMenu={setDesktopMenu}
          />
          <DesktopMenu
            id="ai"
            label="AI & Automation"
            items={aiServices}
            openMenu={desktopMenu}
            setOpenMenu={setDesktopMenu}
          />
          {pageLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm whitespace-nowrap text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <CTAButton href="/#contact" className="px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm">
            Talk to Our Team
          </CTAButton>
          <button
            className="text-white lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="flex flex-col gap-1 px-4 pb-6 md:px-6 lg:hidden">
          <Link
            to="/"
            className="font-body py-2 text-sm text-white/80"
            onClick={closeMobile}
          >
            Home
          </Link>
          {(
            [
              ["services", "Services", coreServices],
              ["ai", "AI & Automation", aiServices],
            ] as const
          ).map(([id, label, items]) => (
            <div key={id}>
              <button
                type="button"
                className="font-body flex w-full items-center justify-between py-2 text-sm text-white/80"
                aria-expanded={mobileMenu === id}
                onClick={() => setMobileMenu(mobileMenu === id ? null : id)}
              >
                {label}
                <ChevronDown
                  size={16}
                  aria-hidden="true"
                  className={cn("transition-transform duration-200", mobileMenu === id && "rotate-180")}
                />
              </button>
              {mobileMenu === id ? (
                <ServiceLinks items={items} onNavigate={closeMobile} className="pb-2 pl-2" />
              ) : null}
            </div>
          ))}
          {pageLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body py-2 text-sm text-white/80"
              onClick={closeMobile}
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
