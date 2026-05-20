import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Zap } from "lucide-react";
import { RvsLogo } from "./RvsLogo";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/40 bg-background/90 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-brand opacity-30 blur-sm transition group-hover:opacity-60" />
            <RvsLogo className="relative h-10 w-10" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold tracking-wide text-foreground">
              RVS <span className="text-gradient-brand">HYDRAULICS</span>
            </div>
            <div className="hidden text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:block">
              Sales · Service · Support
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative rounded-lg px-3.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{
                className:
                  "relative rounded-lg px-3.5 py-2 text-sm font-semibold text-primary",
              }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${SITE.phoneIntl}`}
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-industrial transition-all hover:shadow-glow-gold"
          >
            <Zap className="h-4 w-4 transition-transform group-hover:scale-110" />
            {SITE.phone}
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-t-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3.5 text-base font-medium text-foreground/80 transition hover:bg-card hover:text-foreground"
              activeProps={{
                className:
                  "rounded-lg px-4 py-3.5 text-base font-semibold text-primary bg-card",
              }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phoneIntl}`}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-brand px-4 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            <Phone className="h-4 w-4" /> Call {SITE.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
