import { useEffect, useRef, type RefObject } from "react";

/**
 * Intersection Observer hook that adds "revealed" class to elements
 * with reveal-* CSS classes when they enter the viewport.
 * Supports staggered children with data-delay attribute.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Find all revealable elements inside (or the element itself)
    const revealClasses = ["reveal-section", "reveal-card", "reveal-left", "reveal-right", "reveal-scale"];
    const targets: HTMLElement[] = [];

    revealClasses.forEach((cls) => {
      el.querySelectorAll<HTMLElement>(`.${cls}`).forEach((child) => targets.push(child));
      if (el.classList.contains(cls)) targets.push(el);
    });

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const delay = Number(target.dataset.delay || 0);
            setTimeout(() => {
              target.classList.add("revealed");
            }, delay);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Global page-level scroll reveal that observes the entire page.
 * Call once in the root layout.
 */
export function usePageReveal() {
  useEffect(() => {
    const revealClasses = ["reveal-section", "reveal-card", "reveal-left", "reveal-right", "reveal-scale"];
    const targets: HTMLElement[] = [];

    revealClasses.forEach((cls) => {
      document.querySelectorAll<HTMLElement>(`.${cls}`).forEach((child) => {
        if (!child.classList.contains("revealed")) {
          targets.push(child);
        }
      });
    });

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const delay = Number(target.dataset.delay || 0);
            setTimeout(() => {
              target.classList.add("revealed");
            }, delay);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);
}
