import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  ShieldCheck,
  Truck,
  Wrench,
  BadgeCheck,
  Clock,
  IndianRupee,
  MapPin,
  Star,
  Zap,
  ChevronRight,
  Compass,
  Layers,
  Settings,
  Cpu,
} from "lucide-react";
import heroPremium from "@/assets/hero-premium.png";
import galleryService from "@/assets/gallery-service.jpg";
import { CATALOG } from "@/lib/catalog";
import { SITE, waLink } from "@/lib/site";
import { ParticleField } from "@/components/site/ParticleField";
import { usePageReveal } from "@/hooks/useScrollReveal";

const TITLE =
  "RVS Hydraulics | Premium Hydraulic Pump & Cylinder Service in Shoolagiri";
const DESC =
  "Trusted hydraulic pump repair, cylinder service, hose pipes, fittings, seal kits, power packs & accessories in Shoolagiri, Hosur and Krishnagiri.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "hydraulic pump repair, hydraulic cylinder service, hydraulic hose pipes, hydraulic fittings, seal kits, power packs, Shoolagiri, Hosur, Krishnagiri, Bangalore, RVS Hydraulics" },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "RVS Hydraulics" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rvshydraulics.com/" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: "/hero-premium.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "/hero-premium.png" },
    ],
    links: [
      { rel: "canonical", href: "https://rvshydraulics.com/" }
    ]
  }),
  component: HomePage,
});

function HomePage() {
  usePageReveal();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [advisorCategory, setAdvisorCategory] = useState<"pump" | "cylinder" | "hose" | "powerpack">("pump");

  const faqs = [
    {
      q: "What is the typical turnaround time for a hydraulic pump repair?",
      a: "Most standard hydraulic pump and motor repairs are completed within 2 to 4 business days. Emergency rebuild services are available for critical factory breakdowns to minimize downtime."
    },
    {
      q: "Do you supply genuine OEM seal kits?",
      a: "Yes, we supply only genuine, high-grade OEM seal kits (including Parker, Hallite, and Trelleborg seals) to guarantee high temperature and pressure tolerance for long-lasting operation."
    },
    {
      q: "Do you offer on-site hydraulic cylinder inspection and hose crimping in Hosur and Krishnagiri?",
      a: "Yes! Our mobile service engineers offer on-site diagnostics, high-pressure hose crimping, oil filtration support, and cylinder extraction across industrial corridors in Shoolagiri, Hosur, Krishnagiri, and Bangalore."
    },
    {
      q: "Do you provide a warranty on your rebuild services?",
      a: "Absolutely. All our hydraulic repairs, pump rebuilds, and power pack installations are pressure-tested in our workshop and come with a comprehensive warranty covering craftsmanship and replacement parts."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const advisoryData = {
    pump: {
      title: "Hydraulic Pump Diagnostics",
      symptom: "Losing pressure, overheating, or making loud whining noises.",
      procedure: "We run pressure calibrations, check internal tolerances, and replace internal wear parts (pistons, vanes, swashplates) using genuine OEM components.",
      features: ["Vane, Piston & Gear Pump capability", "Dynamic flow-rate pressure testing", "OEM sealing & calibration check"],
      ctaText: "Inquire About Pump Repair",
      waMessage: "Hi RVS Hydraulics, my hydraulic pump is losing pressure/making noise. I'd like a quote for inspection and repair."
    },
    cylinder: {
      title: "Cylinder Honing & Resealing",
      symptom: "External fluid leaks, drift in lifting arms, or reduced load capacity.",
      procedure: "Cylinder extraction, internal rod inspection, micro-honing of bore cylinders, chrome-repolishing, and replacement with premium multi-lip seal kits (Parker/Hallite).",
      features: ["Single & double acting cylinder capability", "Heavy-duty poly-urethane seal kit fittings", "Fast turnaround to minimize downtime"],
      ctaText: "Inquire About Cylinder Service",
      waMessage: "Hi RVS Hydraulics, I have a leaking hydraulic cylinder. I'd like to ask about seal replacement or repair services."
    },
    hose: {
      title: "High-Pressure Hose Assembly",
      symptom: "Burst hoses, cracked outer shells, or leaking end-couplings.",
      procedure: "Precision crimping using multi-spiral steel wire reinforced hoses (up to 400+ bar) tailored to your exact length and connection requirements.",
      features: ["Same-day emergency hose crimping", "High-tensile steel & brass fittings", "Double-braided high-durability hoses"],
      ctaText: "Inquire About Hose Fitting",
      waMessage: "Hi RVS Hydraulics, I need a high-pressure hose assembly crimped. Can I get details on available sizes and fittings?"
    },
    powerpack: {
      title: "Custom Power Pack Engineering",
      symptom: "Need an independent, compact, or high-tonnage hydraulic force system.",
      procedure: "Design and assembly of custom AC/DC hydraulic power units with highly reliable motor-pump integrations, custom manifolds, and solenoid valve banks.",
      features: ["Tailored reservoir capacity & flow rate", "Complete engineering & wiring design", "Standard warranty and on-site setup support"],
      ctaText: "Inquire About Power Units",
      waMessage: "Hi RVS Hydraulics, I am looking to procure or service a custom hydraulic power pack. Let's discuss requirements."
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-[92vh] overflow-hidden bg-gradient-hero text-foreground flex items-center">
        {/* Subtle grid background */}
        <div className="absolute inset-0 grid-pattern opacity-10" />

        {/* Ambient glow orbs */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[130px] animate-pulse-glow" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-accent/8 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-6 md:py-24 lg:grid-cols-12 lg:py-0">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="reveal-section mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm">
              <Zap className="h-3.5 w-3.5 text-primary" /> Premier Hydraulic Engineering
            </div>

            <h1 className="reveal-section font-display text-5xl font-extrabold leading-[1.05] md:text-7xl lg:text-8xl text-foreground" data-delay="100">
              High-Precision <br />
              <span className="text-gradient-brand">Hydraulic Solutions</span>
              <br />
              <span className="text-foreground/90 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Sales & Service Specialist</span>
            </h1>

            <p className="reveal-section mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg" data-delay="200">
              Your trusted partner for premium hydraulic pumps, high-pressure hose pipes, cylinders, genuine seal kits, and custom engineered power packs. Serving industrial corridors in Shoolagiri, Hosur, Krishnagiri, and Bangalore.
            </p>

            {/* CTAs */}
            <div className="reveal-section mt-9 flex flex-wrap gap-4" data-delay="300">
              <a
                href={`tel:${SITE.phoneIntl}`}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-brand px-7 py-4 text-sm font-bold text-primary-foreground shadow-industrial transition-all hover:shadow-glow-gold hover:scale-[1.02]"
              >
                <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
                Call {SITE.phone}
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#25D366] px-7 py-4 text-sm font-bold text-white shadow-industrial transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle className="h-4.5 w-4.5" /> WhatsApp Quote
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/65 px-7 py-4 text-sm font-semibold text-foreground hover:bg-card hover:border-primary/30 transition shadow-sm"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Industrial trust factors */}
            <div className="reveal-section mt-12 border-t border-border/60 pt-8" data-delay="400">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/80 mb-4">Quality & Reliability Standards</p>
              <div className="flex flex-wrap gap-6 text-sm text-foreground/80">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4.5 w-4.5 text-primary" /> Genuine OEM Parts Only</span>
                <span className="flex items-center gap-1.5"><BadgeCheck className="h-4.5 w-4.5 text-accent" /> Pressure-Tested Rebuilds</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4.5 w-4.5 text-primary" /> Quick Turnaround Service</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column (Interactive Visual Feature Card) */}
          <div className="hidden lg:col-span-5 lg:flex lg:items-center">
            <div className="reveal-right relative w-full" data-delay="300">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-10 blur-2xl" />
              
              {/* Complex Premium Card Frame */}
              <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card p-4 shadow-industrial backdrop-blur-md">
                <div className="relative aspect-square overflow-hidden rounded-xl border border-border/40">
                  <img
                    src={heroPremium}
                    alt="RVS Hydraulics Premium Rebuild Service"
                    width={800}
                    height={800}
                    priority="true"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Glowing Overlay Status Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-black/65 px-4 py-3 text-white backdrop-blur-md">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-primary font-bold">Workshop Status</div>
                      <div className="text-xs font-semibold">Diagnostics Active</div>
                    </div>
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
                    </span>
                  </div>
                </div>

                {/* Micro Stats inside Card */}
                <div className="mt-4 grid grid-cols-2 gap-4 border-t border-border/50 pt-4 text-center">
                  <div className="border-r border-border/50">
                    <div className="text-2xl font-extrabold text-primary">24 Hours</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Emergency Quote response</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-accent">100%</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Guaranteed Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Floating Small Performance Card */}
              <div className="absolute -top-6 -right-6 animate-float hidden xl:block rounded-2xl border border-border bg-card/90 p-4 shadow-industrial backdrop-blur-md max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground">Advanced Testing</div>
                    <div className="text-[10px] text-muted-foreground">Flow & pressure dynamic setup</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE SOLUTIONS ADVISOR (NEW HIGH-END UI FEATURE) ─── */}
      <section className="relative border-t border-border py-24 md:py-28 bg-steel/30">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="reveal-section mx-auto max-w-3xl text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Interactive Diagnostic Desk</div>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl text-foreground">
              Identify & Solve Your <span className="text-gradient-accent">Hydraulic Problems</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Select your hydraulic issue below to view our engineering diagnostics, professional troubleshooting steps, and standard service guidelines.
            </p>
          </div>

          {/* Interactive Advisor Frame */}
          <div className="reveal-section grid gap-8 lg:grid-cols-12" data-delay="100">
            {/* Left selector buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 justify-center">
              {[
                { id: "pump", label: "Pump Diagnostics", desc: "Pressure drops & whine noises", icon: Cpu },
                { id: "cylinder", label: "Cylinder Leaks", desc: "Fluid bypass & drift issues", icon: Layers },
                { id: "hose", label: "Hose Burst & Wear", desc: "High-pressure custom assemblies", icon: Settings },
                { id: "powerpack", label: "Custom Power Packs", desc: "AC/DC dynamic power units", icon: Compass }
              ].map((tab) => {
                const Icon = tab.icon;
                const isSelected = advisorCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setAdvisorCategory(tab.id as any)}
                    className={`group text-left p-5 rounded-2xl border transition-all duration-300 ${
                      isSelected
                        ? "bg-card border-primary/45 shadow-glow-gold scale-[1.02]"
                        : "bg-card/45 border-border hover:border-primary/20 hover:bg-card/80"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`rounded-xl p-3 transition-colors ${
                        isSelected ? "bg-gradient-brand text-primary-foreground" : "bg-primary/5 text-primary group-hover:bg-primary/10"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className={`font-display text-lg font-bold tracking-wide transition-colors ${
                          isSelected ? "text-primary" : "text-foreground"
                        }`}>{tab.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{tab.desc}</div>
                      </div>
                      <ChevronRight className={`ml-auto h-4 w-4 transition-transform ${
                        isSelected ? "text-primary translate-x-1" : "text-muted-foreground/50"
                      }`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Display Board */}
            <div className="lg:col-span-8 bg-card border border-border/80 rounded-3xl p-8 shadow-industrial flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-border/50 pb-5 mb-6">
                  <h3 className="font-display text-2xl font-extrabold tracking-wide text-foreground">
                    {advisoryData[advisorCategory].title}
                  </h3>
                  <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase">Standard Procedure</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Common Symptom</h4>
                    <p className="text-sm font-semibold text-foreground/90">{advisoryData[advisorCategory].symptom}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Engineering Fix</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{advisoryData[advisorCategory].procedure}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Service Capabilities</h4>
                    <ul className="grid gap-2.5 sm:grid-cols-2">
                      {advisoryData[advisorCategory].features.map((feat, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
                          <BadgeCheck className="h-4.5 w-4.5 text-[#25D366] shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-border/50 pt-6 mt-8 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-muted-foreground">Estimated diagnostic time: <strong className="text-foreground">Within 1-2 hours</strong></span>
                <a
                  href={waLink(advisoryData[advisorCategory].waMessage)}
                  target="_blank"
                  rel="noopener"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-sm transition hover:shadow-glow-gold hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4.5 w-4.5" />
                  {advisoryData[advisorCategory].ctaText}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KEY CAPABILITIES (COMPLETELY REDESIGNED PRODUCT GRID) ─── */}
      <section className="border-t border-border py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="reveal-section flex flex-wrap items-end justify-between gap-6 border-b border-border/50 pb-8 mb-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Hydraulic Catalog</div>
              <h2 className="mt-2 font-display text-4xl font-extrabold tracking-wide md:text-5xl text-foreground">
                Premier Parts & Repair <span className="text-gradient-brand">Capabilities</span>
              </h2>
              <p className="mt-2 text-muted-foreground max-w-2xl">
                Browse our comprehensive catalog of high-pressure components, custom design builds, and precision calibration services.
              </p>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-bold text-foreground hover:bg-muted/30 transition shadow-sm"
            >
              Explore Full Catalog
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Catalog Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CATALOG.slice(0, 8).map((c, i) => (
              <div
                key={c.slug}
                className="reveal-card group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-glow-gold"
                data-delay={i * 80}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Top-Glow overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-extrabold tracking-wide text-foreground group-hover:text-primary transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-xs text-primary font-semibold uppercase mt-0.5 tracking-wider">{c.short}</p>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                      {c.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
                    <a
                      href={waLink(`Hi RVS Hydraulics, I am interested in your "${c.title}" service / product. Could I get details and pricing?`)}
                      target="_blank"
                      rel="noopener"
                      className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-1.5 transition-all"
                    >
                      Instant Quote <ArrowRight className="h-3 w-3" />
                    </a>
                    <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded font-medium">OEM Kit</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORPORATE IDENTITY & QUALITY (ABOUT REDESIGN) ─── */}
      <section className="relative border-t border-border py-24 md:py-28 overflow-hidden bg-steel/20">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 md:grid-cols-12 md:px-6">
          {/* About Text Area */}
          <div className="reveal-left md:col-span-7 text-left">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Corporate Engineering Partner</div>
            <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl text-foreground leading-tight">
              Industrial Expertise, <br />
              <span className="text-gradient-brand">Uncompromised Reliability</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground md:text-base">
              Strategically centered in Shoolagiri, RVS Hydraulics operates as an elite-grade hydraulic supplier and engineering servicing hub. We deliver genuine replacement parts, high-durability seals, and custom AC/DC power packs designed to support the intense requirements of modern heavy factories, CNC machines, agricultural fleets, and transport operations.
            </p>

            {/* Checklist */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Genuine OEM Seal Assemblies", desc: "Parker, Hallite & Trelleborg specifications" },
                { title: "Advanced Workshop Diagnostics", desc: "Rigorous flow-rate pressure calibration" },
                { title: "On-Site Support Engineers", desc: "Coverage across Hosur, Krishnagiri & Bangalore" },
                { title: "24-Hour Emergency Response", desc: "Minimizing warehouse & factory downtime" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BadgeCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Link CTAs */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-industrial transition hover:shadow-glow-gold hover:scale-[1.02]"
              >
                Read Corporate Story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold hover:bg-muted/30 transition shadow-sm text-foreground"
              >
                Get Touch with Engineers
              </Link>
            </div>
          </div>

          {/* About Image Showcase (Premium Grid Layout) */}
          <div className="reveal-right md:col-span-5 relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card p-3 shadow-industrial">
              <img
                src={galleryService}
                alt="RVS Hydraulics Service Engineers"
                width={1024}
                height={768}
                loading="lazy"
                className="w-full rounded-xl object-cover shadow-sm transition hover:scale-102"
              />
              <div className="absolute bottom-6 left-6 rounded-xl bg-card border border-border p-4 shadow-lg max-w-[200px] text-left">
                <div className="text-2xl font-extrabold text-primary">ISO Grade</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mt-0.5">Workshop standards & calibration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US (HIGH PERFORMANCE METRIC TILES) ─── */}
      <section className="border-t border-border py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="reveal-section mx-auto max-w-2xl text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Core Value Proposition</div>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-foreground">
              Built for <span className="text-gradient-accent">Industrial Reliability</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Factories, heavy workshops, and fleet operators choose RVS Hydraulics because we build absolute structural security and high-fidelity calibration into every job.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {[
              {
                idx: "01",
                icon: ShieldCheck,
                title: "Quality Service",
                desc: "Every dynamic component is completely pressure-tested & warrantied before delivery.",
                color: "text-primary"
              },
              {
                idx: "02",
                icon: Clock,
                title: "Rapid Lead Times",
                desc: "Same-day quotation feedback & prioritized breakdown repairs to reduce downtime.",
                color: "text-accent"
              },
              {
                idx: "03",
                icon: BadgeCheck,
                title: "100% Genuine",
                desc: "All replacement seal-kits, brass fittings and accessories are certified OEM-grade.",
                color: "text-primary"
              },
              {
                idx: "04",
                icon: Wrench,
                title: "Engineering Expertise",
                desc: "Experienced technicians specializing in heavy industrial machinery circuits.",
                color: "text-accent"
              },
              {
                idx: "05",
                icon: IndianRupee,
                title: "Honest Pricing",
                desc: "Transparent bills of materials, cost efficiency suggestions and zero hidden fees.",
                color: "text-primary"
              }
            ].map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.idx}
                  className="reveal-card group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-glow-gold"
                  data-delay={parseInt(metric.idx) * 80}
                >
                  {/* Floating Number Overlay */}
                  <div className="absolute right-4 top-2 select-none font-display text-6xl font-extrabold text-foreground/5">{metric.idx}</div>
                  
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 ${metric.color} shadow-sm transition-transform duration-300 group-hover:scale-105`}>
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  
                  <h3 className="mt-5 font-display text-lg font-bold tracking-wide text-foreground">{metric.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{metric.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── QUICK CTA SECTION ─── */}
      <section className="relative overflow-hidden border-t border-border py-20 bg-gradient-hero">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px]" />

        <div className="reveal-section relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 md:flex-row md:items-center md:px-6">
          <div className="text-left">
            <h3 className="font-display text-3xl font-extrabold tracking-wide md:text-4xl text-foreground">
              Facing a Critical Hydraulic Breakdown <span className="text-gradient-brand">Today?</span>
            </h3>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Consult with our senior service engineer now. Get instant troubleshooting guidance and rapid procurement support.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${SITE.phoneIntl}`}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-industrial transition hover:shadow-glow-gold hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4" /> Call Hotline
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-industrial hover:scale-[1.02] transition"
            >
              <MessageCircle className="h-4 w-4" /> Instant Chat
            </a>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS / TESTIMONIALS (AIRY MODERN TILES) ─── */}
      <section className="border-t border-border py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="reveal-section text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Client Testimonials</div>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-foreground">
              Trusted by <span className="text-gradient-brand">Industrial Leaders</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Read how RVS Hydraulics helps factories maintain high performance and minimize operational bottlenecks.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                n: "Plant Operations Manager, Hosur",
                q: "Our entire production line was halted due to a high-pressure pump seal bypass. RVS diagnosed the internal wear, completed micro-resealing and dyno-tested it within 18 hours. Incredible service.",
                initial: "H"
              },
              {
                n: "Workshop Owner, Krishnagiri",
                q: "For four years, we've sourced all custom seal kits and high-pressure hose couplings from RVS. Their brass fittings hold up under continuous 350-bar duty without sweating a drop. Standard-setting quality.",
                initial: "K"
              },
              {
                n: "Maintenance Lead, Bangalore",
                q: "We commissioned a 7.5HP multi-station AC hydraulic power unit from RVS. The engineering was tidy, wiring was perfectly safe, and their on-site technician calibrated the pressure settings cleanly.",
                initial: "B"
              }
            ].map((t, idx) => (
              <figure
                key={t.n}
                className="reveal-card flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-card transition hover:border-primary/10 hover:shadow-glow-gold text-left"
                data-delay={idx * 120}
              >
                <div>
                  <div className="flex gap-1 text-primary mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed text-foreground/80 italic">
                    &ldquo;{t.q}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-6 pt-5 border-t border-border/40 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand font-display font-bold text-xs text-primary-foreground">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">{t.n}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">Verified Client</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DYNAMIC FAQ ACCORDION ─── */}
      <section className="border-t border-border py-24 md:py-28 bg-steel/20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="reveal-section text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Technical Knowledge Base</div>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-foreground">
              Frequently Asked <span className="text-gradient-brand">Insights</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Technical answers to common hydraulic pressure maintenance, valve assembly, and product procurement inquiries.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="reveal-card overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:border-primary/20"
                  data-delay={idx * 50}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left font-display text-base font-bold md:text-lg transition"
                  >
                    <span className={isOpen ? "text-primary transition-colors font-extrabold tracking-wide" : "text-foreground tracking-wide font-extrabold"}>
                      {faq.q}
                    </span>
                    <ChevronRight
                      className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-90 text-primary" : "text-muted-foreground/80"
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[200px] border-t border-border/50 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 py-5 text-sm leading-relaxed text-muted-foreground/90 bg-muted/20 text-left">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── MAP & LOCATION SECTION ─── */}
      <section className="border-t border-border py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-6 items-center">
          <div className="reveal-left text-left">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Headquarters & Workshop</div>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-foreground">
              Visit RVS Hydraulics in <span className="text-gradient-brand">Shoolagiri</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{SITE.address}</p>
            
            <ul className="mt-8 space-y-4">
              <li className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 border border-border">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Prime Location</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Conveniently situated Opposite Shoolagiri Bus Stand</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/5 border border-border">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Engage Directly</h4>
                  <a className="text-xs font-bold text-primary hover:underline" href={`tel:${SITE.phoneIntl}`}>
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 border border-border">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Regional Courier & Pickup</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Serving Shoolagiri, Hosur, Krishnagiri, and Bangalore industrial belts</p>
                </div>
              </li>
            </ul>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${SITE.mapsQuery}`}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-industrial transition hover:shadow-glow-gold hover:scale-[1.02]"
            >
              Open in Google Maps{" "}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Map Frame */}
          <div className="reveal-right overflow-hidden rounded-3xl border border-border/80 shadow-industrial relative">
            {/* Visual floating address flag */}
            <div className="absolute top-4 left-4 z-10 bg-card border border-border rounded-xl p-3 shadow-md hidden sm:block text-left">
              <div className="text-[10px] font-bold uppercase tracking-wider text-primary">RVS Workshop</div>
              <div className="text-xs font-semibold text-foreground mt-0.5">TK Nagar Service Road</div>
            </div>
            
            <iframe
              title="RVS Hydraulics location"
              src={`https://www.google.com/maps?q=${SITE.mapsQuery}&output=embed`}
              className="h-[380px] w-full md:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
