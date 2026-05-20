import { Phone, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 print:hidden">
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-industrial transition-all hover:scale-110 animate-pulse-glow"
        style={{
          animationDuration: "4s",
          boxShadow: "0 0 20px rgba(37, 211, 102, 0.3)",
        }}
      >
        <MessageCircle className="h-7 w-7" />
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
