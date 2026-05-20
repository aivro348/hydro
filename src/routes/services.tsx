import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CATALOG } from "@/lib/catalog";
import { SITE, waLink } from "@/lib/site";
import { ParticleField } from "@/components/site/ParticleField";
import { usePageReveal } from "@/hooks/useScrollReveal";

const TITLE = "Hydraulic Services | RVS Hydraulics Shoolagiri";
const DESC =
  "Hydraulic pump repair, cylinder service, power packs, hose assemblies, seal kits, valves & fittings — sales and service in Shoolagiri, Hosur, Krishnagiri.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "hydraulic pump repair Shoolagiri, hydraulic cylinder service, power pack service, hose assembly, seal kit replacement, valve service Hosur Krishnagiri, Bangalore" },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "RVS Hydraulics" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rvshydraulics.com/services" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: "/hero-premium.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "/hero-premium.png" },
    ],
    links: [
      { rel: "canonical", href: "https://rvshydraulics.com/services" }
    ]
  }),
  component: Services,
});

function Services() {
  usePageReveal();

  return (
    <>
      <section className="pt-32 pb-24 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {CATALOG.map((c, idx) => (
              <article
                key={c.slug}
                className="reveal-card group grid gap-0 overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:border-primary/30 hover:shadow-glow-gold sm:grid-cols-5"
                data-delay={idx * 80}
              >
                <div className="aspect-[4/3] overflow-hidden sm:col-span-2 sm:aspect-auto">
                  <img
                    src={c.image}
                    alt={c.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-7 sm:col-span-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                    0{idx + 1}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                      Genuine OEM-grade parts
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                      Trained service technicians
                    </li>
                  </ul>
                  <div className="mt-5 flex gap-3">
                    <a
                      href={waLink(`Hi, I'd like a quote for ${c.title}.`)}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-brand px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-industrial transition-all hover:shadow-glow-gold"
                    >
                      Get Quote <ArrowRight className="h-3 w-3" />
                    </a>
                    <a
                      href={`tel:${SITE.phoneIntl}`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/50 px-4 py-2.5 text-xs font-semibold transition hover:bg-card"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA banner */}
          <div className="reveal-section mt-16 relative overflow-hidden rounded-2xl border border-border shadow-industrial">
            <div className="absolute inset-0 bg-gradient-hero" />
            <ParticleField className="opacity-30" />
            <div className="absolute inset-0 grid-pattern opacity-15" />
            <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[80px]" />
            <div className="relative grid items-center gap-8 p-10 md:grid-cols-[1fr_auto] md:p-14">
              <div>
                <h3 className="font-display text-2xl font-bold md:text-4xl">
                  Custom hydraulic{" "}
                  <span className="text-gradient-brand">requirement?</span>
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Send us your specifications — we'll engineer the right
                  solution for your application.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-industrial transition-all hover:shadow-glow-gold"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
