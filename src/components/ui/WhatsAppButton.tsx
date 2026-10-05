import whatsappIcon from "../../assets/whatsapp.svg";
import { CONTACT_MOBILE, whatsAppUrl } from "../../lib/siteContact";
import { cn } from "../../lib/utils";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
  imgClassName?: string;
  ping?: boolean;
}

const WhatsAppButton = ({
  phoneNumber = CONTACT_MOBILE,
  message = "Hi, I would like to know more about CampaignTech.",
  className,
  imgClassName,
  ping = true,
}: WhatsAppButtonProps) => {
  const whatsappUrl = whatsAppUrl(message, phoneNumber);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact our team on WhatsApp"
      className={cn(
        "fixed bottom-6 right-6 z-50 origin-bottom-right scale-70 sm:scale-100",
        "group flex items-center gap-3",
        "rounded-full border border-white/15",
        "bg-navy px-4 py-3 text-white",
        "shadow-[0_12px_40px_rgba(11,19,48,0.28)]",
        "backdrop-blur-xl",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(11,19,48,0.38)]",
        "focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2",
        className,
      )}
    >
      {ping ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 animate-ping scale-70 [animation-duration:2s] rounded-full bg-electric/50 motion-reduce:hidden"
        />
      ) : null}
      <span className="flex shrink-0 items-center justify-center rounded-full bg-electric transition-transform duration-300 group-hover:scale-105">
        <img src={whatsappIcon} alt="" className={cn("h-12 w-12", imgClassName)} />
      </span>
      <span className="pr-1 text-sm font-semibold tracking-wide">Contact Our Team</span>
    </a>
  );
};

export default WhatsAppButton;
