import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Target, Users, Wrench, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import shop from "@/assets/gallery-shop.jpg";
import service from "@/assets/gallery-service.jpg";
import { usePageReveal } from "@/hooks/useScrollReveal";

const TITLE = "About RVS Hydraulics | Industrial Hydraulic Specialists";
const DESC =
  "Learn about RVS Hydraulics — a trusted hydraulic sales and service company in Shoolagiri serving industries across Hosur, Krishnagiri & Bangalore.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "about RVS Hydraulics, hydraulic spare parts supplier, hydraulic service engineers Shoolagiri, pump rebuilders India, factory support Hosur, Krishnagiri, Bangalore" },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "RVS Hydraulics" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rvshydraulics.com/about" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: "/hero-premium.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "/hero-premium.png" },
    ],
    links: [
      { rel: "canonical", href: "https://rvshydraulics.com/about" }
    ]
  }),
  component: About,
});

function About() {
  usePageReveal();

  return (
    <>
      <section className="pt-32 pb-24 md:pt-36 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 md:grid-cols-2 md:px-6">
          <div className="reveal-left relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-brand opacity-10 blur-2xl" />
            <img
              src={shop}
              alt="RVS Hydraulics shop"
              width={1024}
              height={768}
              loading="lazy"
              className="relative w-full rounded-2xl border border-border/30 object-cover shadow-industrial"
            />
          </div>
          <div className="reveal-right">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Story
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
              Built on <span className="text-gradient-brand">industrial trust</span>
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              RVS Hydraulics started with a simple mission — make genuine
              hydraulic parts and quality service accessible to every industry
              around Shoolagiri. Today we work with manufacturing plants,
              workshops, contractors and equipment owners across Tamil Nadu and
              Karnataka.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              From a single hose assembly to a full custom power pack, our team
              brings the same engineering discipline and honest pricing to every
              job.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border/50 pt-8">
              <Stat k="8+" v="Product lines" />
              <Stat k="500+" v="Clients served" />
              <Stat k="24h" v="Quote turnaround" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                i: Target,
                t: "Our Mission",
                d: "Deliver dependable hydraulic parts and service that keep industrial operations running.",
              },
              {
                i: BadgeCheck,
                t: "Our Promise",
                d: "Genuine products, transparent pricing and warranted workmanship — every time.",
              },
              {
                i: Users,
                t: "Our Team",
                d: "Trained engineers and technicians with deep industrial hydraulic experience.",
              },
            ].map(({ i: Icon, t, d }, idx) => (
              <div
                key={t}
                className="reveal-card tilt-3d group rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:border-primary/30 hover:shadow-glow-gold"
                data-delay={idx * 120}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24 md:py-28 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-accent/5 blur-[100px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 md:grid-cols-2 md:px-6">
          <div className="reveal-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              <Wrench className="h-3.5 w-3.5" /> Expertise
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
              From sourcing to servicing —{" "}
              <span className="text-gradient-accent">we cover it all</span>
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Our technicians work on hydraulic pumps, cylinders, valves, power
              packs, hoses and accessories from leading global and Indian brands.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-industrial transition-all hover:shadow-glow-gold"
            >
              Talk to our team{" "}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="reveal-right relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-accent opacity-8 blur-2xl" />
            <img
              src={service}
              alt="Hydraulic service"
              width={1024}
              height={768}
              loading="lazy"
              className="relative w-full rounded-2xl border border-border/30 object-cover shadow-industrial"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-4xl font-extrabold text-primary">{k}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
        {v}
      </div>
    </div>
  );
}
