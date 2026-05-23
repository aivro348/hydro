import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
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
  Play,
  Pause,
  ChevronLeft,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import galleryService from "@/assets/gallery-service.jpg";
import { CATALOG } from "@/lib/catalog";
import { SITE, waLink } from "@/lib/site";
import { ParticleField } from "@/components/site/ParticleField";
import { usePageReveal } from "@/hooks/useScrollReveal";

import slidePowerpack from "@/assets/slide-powerpack.png";
import slideCylinder from "@/assets/slide-cylinder.png";
import slidePump from "@/assets/slide-pump.png";
import slideHosepipes from "@/assets/slide-hosepipes.png";
import slideValves from "@/assets/slide-valves.png";
import slideSealkits from "@/assets/slide-sealkits.png";
import slideHandpump from "@/assets/slide-handpump.png";

const HERO_SLIDES = [
  {
    image: slidePowerpack,
    title: "Power pack",
    tag: "Design & Assembly",
    message: "AC/DC hydraulic power units engineered for heavy industrial force systems.",
    slug: "power-pack"
  },
  {
    image: slideSealkits,
    title: "Hydraulic Seal kit",
    tag: "High-Temperature Kits",
    message: "Polyurethane U-cups, O-rings and wipers to prevent fluid bypass.",
    slug: "seal-kits"
  },
  {
    image: slideHosepipes,
    title: "Hose",
    tag: "High-Pressure Assemblies",
    message: "Multi-spiral steel wire reinforced hoses crimped to exact specifications.",
    slug: "hose-pipes"
  },
  {
    image: slideCylinder,
    title: "Cylinder",
    tag: "Sales & Reconditioning",
    message: "Single & double acting cylinders with precision chrome bore plating.",
    slug: "cylinder"
  },
  {
    image: slidePump,
    title: "Hydraulic all pumps",
    tag: "Gear, Piston & Vane",
    message: "Robust flow-rate pump systems calibrated for factory-grade machinery.",
    slug: "hydraulic-pumps"
  },
  {
    image: slideValves,
    title: "Hydraulic DC WALL",
    tag: "Solenoid & Manual",
    message: "Precision multi-spool hydraulic directional blocks from global brands.",
    slug: "valves"
  },
  {
    image: slideHandpump,
    title: "Hand pump",
    tag: "Manual Power",
    message: "High-pressure manual hydraulic pumps for precision lifting and pressing.",
    slug: "hand-pump"
  }
];

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliderPlaying, setIsSliderPlaying] = useState(true);
  const navigate = useNavigate();

  const goToSlide = useCallback((idx: number) => {
    setCurrentSlide(idx);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isSliderPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isSliderPlaying]);

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

      {/* ─── FULL-SCREEN IMMERSIVE HERO SLIDESHOW ─── */}
      <section className="relative h-[70vh] min-h-[500px] md:h-screen md:min-h-0 w-full overflow-hidden bg-black">
        {/* Slide Images — full viewport, cross-fade with Ken Burns */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-[1.4s] ease-in-out ${
              currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`h-full w-full object-cover ${
                currentSlide === idx ? "slide-kenburns" : ""
              }`}
              key={`img-${idx}-${currentSlide === idx ? "active" : "idle"}`}
            />
          </div>
        ))}

        {/* Dark cinematic gradient overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/40 to-transparent" />

        {/* ─ Central Content Overlay ─ */}
        <div className="absolute inset-0 z-30 flex flex-col justify-end pb-24 sm:pb-28 md:justify-center md:pb-0">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 md:px-12">

            {/* Product name + description — each slide gets unique key to restart animation */}
            <div key={`text-${currentSlide}`} className="max-w-2xl">
              {/* Tag pill */}
              <span className="slide-text-enter mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                <Zap className="h-3 w-3" />
                {HERO_SLIDES[currentSlide].tag}
              </span>

              {/* Product Title */}
              <h1 className="slide-text-enter-delay font-display text-4xl font-extrabold leading-[1.08] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
                {HERO_SLIDES[currentSlide].title}
              </h1>

              {/* One-line description */}
              <p className="slide-text-enter-delay-2 mt-5 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
                {HERO_SLIDES[currentSlide].message}
              </p>

              {/* CTA: View Product */}
              <button
                onClick={() => navigate({ to: '/products', hash: HERO_SLIDES[currentSlide].slug })}
                className="slide-text-enter-delay-2 group mt-8 inline-flex cursor-pointer items-center gap-2.5 rounded-xl bg-gradient-brand px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all hover:scale-[1.03] hover:shadow-glow-gold"
              >
                View Product
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* ─── DIAGNOSTIC DESK (REDESIGNED TO MATCH PAGE FORMAT) ─── */}
      <section className="relative border-t border-border py-24 md:py-28 bg-steel/30">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="reveal-section mx-auto max-w-3xl text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Diagnostic Desk</div>
            <h2 className="mt-3 font-display text-3xl font-extrabold md:text-5xl text-foreground">
              Identify & Solve Your <span className="text-gradient-accent">Hydraulic Problems</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              View our engineering diagnostics, professional troubleshooting steps, and standard service guidelines for common issues.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { id: "pump", icon: Cpu, data: advisoryData.pump },
              { id: "cylinder", icon: Layers, data: advisoryData.cylinder },
              { id: "hose", icon: Settings, data: advisoryData.hose },
              { id: "powerpack", icon: Compass, data: advisoryData.powerpack }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="reveal-card group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:border-primary/30 hover:shadow-glow-gold p-8"
                  data-delay={idx * 100}
                >
                  <div>
                    <div className="flex items-center gap-4 border-b border-border/50 pb-5 mb-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-display text-2xl font-extrabold tracking-wide text-foreground">
                        {item.data.title}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Common Symptom</h4>
                        <p className="text-sm font-semibold leading-relaxed text-foreground/90">{item.data.symptom}</p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Engineering Fix</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.data.procedure}</p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Service Capabilities</h4>
                        <ul className="grid gap-2 sm:grid-cols-1">
                          {item.data.features.map((feat, index) => (
                            <li key={index} className="flex items-center gap-2.5 text-sm leading-relaxed text-foreground/80 font-medium">
                              <BadgeCheck className="h-4.5 w-4.5 text-[#25D366] shrink-0" />
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border/50 pt-6 mt-8 flex items-center justify-between">
                    <a
                      href={waLink(item.data.waMessage)}
                      target="_blank"
                      rel="noopener"
                      className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm transition hover:shadow-glow-gold hover:scale-[1.02]"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      {item.data.ctaText}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── KEY CAPABILITIES (COMPLETELY REDESIGNED PRODUCT GRID) ─── */}
      <section className="border-t border-border py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="reveal-section flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between border-b border-border/50 pb-8 mb-12">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Hydraulic Catalog</div>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-wide md:text-5xl text-foreground">
                Premier Parts & Repair <span className="text-gradient-brand">Capabilities</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Browse our comprehensive catalog of high-pressure components, custom design builds, and precision calibration services.
              </p>
            </div>
            <Link
              to="/products"
              className="group shrink-0 inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-bold text-foreground hover:bg-muted/30 transition shadow-sm"
            >
              Explore Full Catalog
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Catalog Continuous Scroll Marquee */}
          <div className="relative overflow-hidden group py-4 -mx-4 px-4 md:-mx-6 md:px-6">
            {/* Fade edges for smooth entry/exit */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-background to-transparent" />
            
            <div className="flex w-max animate-marquee gap-6 hover:![animation-play-state:paused]">
              {[...CATALOG, ...CATALOG].map((c, i) => (
                <div
                  key={`${c.slug}-${i}`}
                  className="w-[280px] md:w-[320px] shrink-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-glow-gold"
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
        </div>
      </section>

      {/* ─── CORPORATE IDENTITY & QUALITY (ABOUT REDESIGN) ─── */}
      <section className="relative border-t border-border py-24 md:py-32 overflow-hidden bg-steel/20">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-12 md:gap-16 md:px-6">
          {/* About Text Area */}
          <div className="reveal-left md:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Corporate Engineering Partner</div>
            <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl text-foreground leading-tight">
              Industrial Expertise, <br className="hidden sm:block" />
              <span className="text-gradient-brand">Uncompromised Reliability</span>
            </h2>
            <p className="mt-6 text-sm leading-[1.8] text-muted-foreground md:text-base">
              Strategically centered in Shoolagiri, RVS Hydraulics operates as an elite-grade hydraulic supplier and engineering servicing hub. We deliver genuine replacement parts, high-durability seals, and custom AC/DC power packs designed to support the intense requirements of modern heavy factories, CNC machines, agricultural fleets, and transport operations.
            </p>
            <p className="mt-3 text-sm leading-[1.8] text-muted-foreground md:text-base">
              All sales and services — Hydraulic fittings, pumps, cylinders, valves, hoses, and more.
            </p>

            {/* Checklist */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                { title: "Genuine OEM Seal Assemblies", desc: "Parker, Hallite & Trelleborg specifications" },
                { title: "Advanced Workshop Diagnostics", desc: "Rigorous flow-rate pressure calibration" },
                { title: "On-Site Support Engineers", desc: "Coverage across Hosur, Krishnagiri & Bangalore" },
                { title: "24-Hour Emergency Response", desc: "Minimizing warehouse & factory downtime" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                    <BadgeCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground leading-snug">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Link CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-industrial transition hover:shadow-glow-gold hover:scale-[1.02]"
              >
                Read Our Story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold hover:bg-muted/30 transition shadow-sm text-foreground"
              >
                Get in Touch
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
      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="reveal-section mx-auto max-w-2xl text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Core Value Proposition</div>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground md:text-5xl">
              Built for <span className="text-gradient-accent">Industrial Reliability</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Factories, heavy workshops, and fleet operators choose RVS Hydraulics because we build absolute structural security and high-fidelity calibration into every job.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
                  
                  <h3 className="mt-5 font-display text-base font-bold tracking-wide text-foreground md:text-lg">{metric.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">{metric.desc}</p>
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

        <div className="reveal-section relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 text-center md:flex-row md:items-center md:text-left md:px-6">
          <div>
            <h3 className="font-display text-3xl font-extrabold tracking-wide md:text-4xl text-foreground">
              Facing a Critical Hydraulic Breakdown <span className="text-gradient-brand">Today?</span>
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
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
              <WhatsAppIcon className="h-4 w-4" /> Instant Chat
            </a>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS / TESTIMONIALS (AIRY MODERN TILES) ─── */}
      <section className="border-t border-border py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="reveal-section text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Client Testimonials</div>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground md:text-5xl">
              Trusted by <span className="text-gradient-brand">Industrial Leaders</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-xl mx-auto md:text-base">
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
            <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground md:text-5xl">
              Frequently Asked <span className="text-gradient-brand">Insights</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm leading-relaxed text-muted-foreground md:text-base">
              Technical answers to common hydraulic pressure maintenance, valve assembly, and product procurement inquiries.
            </p>
          </div>

          <div className="space-y-4 text-left">
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
                    className="flex w-full items-center justify-between px-6 py-5 text-left font-display text-base font-bold md:text-lg transition cursor-pointer"
                  >
                    <span className={isOpen ? "text-primary transition-colors font-extrabold tracking-wide" : "text-foreground tracking-wide font-extrabold"}>
                      {faq.q}
                    </span>
                    <ChevronRight
                      className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-90" : "text-muted-foreground/80"
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[300px] border-t border-border/50 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 py-5 text-sm leading-relaxed text-muted-foreground/90 bg-muted/20">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


    </>
  );
}
