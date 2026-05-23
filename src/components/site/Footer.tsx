import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Instagram, ArrowUpRight } from "lucide-react";
import { RvsLogo } from "./RvsLogo";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-steel">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-brand opacity-30 blur-sm" />
              <RvsLogo className="relative h-11 w-11" />
            </div>
            <div>
              <div className="font-display text-lg font-bold tracking-wide text-foreground">
                RVS <span className="text-gradient-brand">HYDRAULICS</span>
              </div>
              <div className="text-xs text-muted-foreground">{SITE.tagline}</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Premium hydraulic parts sales & service for industrial customers
            across Shoolagiri, Hosur, Krishnagiri and Bangalore region.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="group flex items-center gap-1 text-muted-foreground transition hover:text-foreground"
                >
                  {n.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Contact
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-steel-foreground">
            <li className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gradient-brand">
                <Phone className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              <a href={`tel:${SITE.phoneIntl}`} className="hover:text-primary transition">
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gradient-accent">
                <Mail className="h-3.5 w-3.5 text-accent-foreground" />
              </div>
              <a
                href={`mailto:${SITE.email}`}
                className="break-all hover:text-accent transition"
              >
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-card">
                <MapPin className="h-3.5 w-3.5 text-primary" />
              </div>
              <span className="text-muted-foreground">{SITE.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Business
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>GST: {SITE.gst}</li>
            <li>Mon – Sat · 9:00 AM – 8:00 PM</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              aria-label="Facebook"
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 transition hover:border-primary/40 hover:shadow-glow-gold"
            >
              <Facebook className="h-4 w-4 text-muted-foreground" />
            </a>
            <a
              aria-label="Instagram"
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 transition hover:border-accent/40 hover:shadow-glow-teal"
            >
              <Instagram className="h-4 w-4 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-border/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground md:flex-row md:px-6">
          <div>
            © {new Date().getFullYear()} RVS Hydraulics. All rights reserved.
          </div>
          <div>
            Developed by{" "}
            <a
              href="https://www.reddycharan.me"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground/80 hover:text-primary transition-colors hover:underline"
            >
              {SITE.developer}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
