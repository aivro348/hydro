import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CATALOG } from "@/lib/catalog";
import { waLink } from "@/lib/site";
import { usePageReveal } from "@/hooks/useScrollReveal";

const TITLE = "Hydraulic Products | Pumps, Valves, Cylinders & More";
const DESC =
  "Browse our full range of hydraulic products — pumps, valves, hose pipes, fittings, seal kits, accessories, power packs and cylinders.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "hydraulic pumps, hydraulic valves, hydraulic cylinders, hose pipes, fittings, seal kits, power packs, hydraulic accessories, Shoolagiri, Hosur, Krishnagiri, Bangalore" },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "RVS Hydraulics" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rvshydraulics.com/products" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: "/hero-premium.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "/hero-premium.png" },
    ],
    links: [
      { rel: "canonical", href: "https://rvshydraulics.com/products" }
    ]
  }),
  component: Products,
});

function Products() {
  usePageReveal();

  return (
    <>
      <section className="pt-32 pb-24 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Products
            </div>
            <h1 className="mt-3 font-display text-4xl font-bold md:text-6xl">
              Hydraulic <span className="text-gradient-brand">Products Catalog</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Industrial-grade hydraulic components and assemblies for every application.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATALOG.map((c, idx) => (
              <article
                key={c.slug}
                className="reveal-card tilt-3d group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:border-primary/30 hover:shadow-glow-gold"
                data-delay={idx * 80}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-card via-card/50 to-transparent p-5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {c.short}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                  <a
                    href={waLink(`Hi, I'd like details on ${c.title}.`)}
                    target="_blank"
                    rel="noopener"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2"
                  >
                    Enquire on WhatsApp{" "}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
