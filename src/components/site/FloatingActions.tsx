import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SITE } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Action */}
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-[#25D366]/30"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30" />
        <WhatsAppIcon className="h-7 w-7" />
        <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-card border border-border px-3 py-1.5 text-xs font-medium text-foreground shadow-card group-hover:block">
          WhatsApp
        </span>
      </a>
      <a
        href={`tel:${SITE.phoneIntl}`}
        aria-label="Call RVS Hydraulics"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-industrial transition-all hover:scale-110 md:hidden"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
