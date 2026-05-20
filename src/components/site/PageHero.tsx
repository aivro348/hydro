import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { ParticleField } from "./ParticleField";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumb,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-foreground">
      <ParticleField className="opacity-60" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      {/* Ambient glow */}
      <div className="absolute left-1/4 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full bg-accent/8 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
        {eyebrow && (
          <div className="reveal-section mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            {eyebrow}
          </div>
        )}
        <h1 className="reveal-section font-display text-4xl font-bold leading-tight md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="reveal-section mt-5 max-w-2xl text-base text-muted-foreground md:text-lg" data-delay="100">
            {subtitle}
          </p>
        )}
        <div className="reveal-section mt-7 flex items-center gap-2 text-sm text-muted-foreground" data-delay="200">
          <Link to="/" className="transition hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">{crumb}</span>
        </div>
      </div>
    </section>
  );
}
