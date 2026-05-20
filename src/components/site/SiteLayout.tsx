import { Outlet, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { usePageReveal } from "@/hooks/useScrollReveal";

export function SiteLayout() {
  const location = useLocation();

  // Re-initialize scroll reveals on route change
  usePageReveal();

  // Reset scroll position on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
