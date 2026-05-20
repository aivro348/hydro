import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  Wrench,
  Package,
  ArrowLeft,
  ArrowRight,
  Building,
  User,
  Settings,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { usePageReveal } from "@/hooks/useScrollReveal";

const TITLE = "Contact RVS Hydraulics | Get a Quote in Shoolagiri";
const DESC =
  "Contact RVS Hydraulics for hydraulic pumps, cylinders, power packs and service. Call 9980848855 or visit our shop in Shoolagiri.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "contact RVS Hydraulics, hydraulic service quote, Shoolagiri hydraulic shop, hydraulic repair near me, Hosur, Krishnagiri, Bangalore" },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "RVS Hydraulics" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rvshydraulics.com/contact" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: "/hero-premium.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "/hero-premium.png" },
    ],
    links: [
      { rel: "canonical", href: "https://rvshydraulics.com/contact" }
    ]
  }),
  component: Contact,
});

function Contact() {
  usePageReveal();
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState<"repair" | "sourcing" | null>(null);
  
  // Form fields state
  const [componentType, setComponentType] = useState("Hydraulic Pump");
  const [brand, setBrand] = useState("");
  const [issue, setIssue] = useState("");
  
  const [productType, setProductType] = useState("Custom Power Pack");
  const [specs, setSpecs] = useState("");
  
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  function handleNext() {
    if (step === 1 && !category) return;
    setStep((prev) => prev + 1);
  }

  function handleBack() {
    setStep((prev) => prev - 1);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    // Compile clean industrial RFQ text block
    let requirementDetails = "";
    if (category === "repair") {
      requirementDetails = `📂 Category: Repair & Maintenance Service\n⚙️ Component: ${componentType}\n🏷️ Brand/Model: ${brand || "Not Specified"}\n📝 Issue Description: ${issue || "Not Specified"}`;
    } else {
      requirementDetails = `📂 Category: New Product Sourcing\n📦 Product: ${productType}\n📐 Specifications: ${specs || "Not Specified"}`;
    }

    const whatsappMessage = `🛠️ *RVS HYDRAULICS - SERVICE REQUEST* 🛠️\n---------------------------------\n${requirementDetails}\n\n🏢 *Contact & Factory Details*:\n👤 Name: ${name}\n🏭 Company: ${company || "Not Specified"}\n📍 Location: ${location || "Not Specified"}\n📞 Phone/WA: ${phone}\n---------------------------------\n_Submitted via RVS Hydraulics Portal_`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodedMessage}`, "_blank");
    setSent(true);
  }

  return (
    <>
      <section className="pt-32 pb-24 md:pt-36 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-5">
          {/* Sidebar Contact Cards */}
          <aside className="reveal-left space-y-4 lg:col-span-2">
            <div className="mb-2">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Get In Touch
              </div>
              <h1 className="mt-2 font-display text-3xl font-bold md:text-4xl">
                Ready to serve <span className="text-gradient-brand">your systems</span>
              </h1>
              <p className="mt-3 text-sm text-muted-foreground">
                Visit our workshop, send an email, or complete our visual service request wizard for a fast quote.
              </p>
            </div>

            <ContactCard
              icon={Phone}
              title="Call us"
              value={SITE.phone}
              href={`tel:${SITE.phoneIntl}`}
            />
            <ContactCard
              icon={MessageCircle}
              title="WhatsApp"
              value="+91 99808 48855"
              href={`https://wa.me/${SITE.whatsapp}`}
            />
            <ContactCard
              icon={Mail}
              title="Email"
              value={SITE.email}
              href={`mailto:${SITE.email}`}
            />
            <ContactCard icon={MapPin} title="Address" value={SITE.address} />
            <div className="overflow-hidden rounded-2xl border border-border shadow-industrial">
              <iframe
                title="RVS Hydraulics location"
                src={`https://www.google.com/maps?q=${SITE.mapsQuery}&output=embed`}
                className="h-64 w-full border-0"
                loading="lazy"
              />
            </div>
          </aside>

          {/* Form Wizard Container */}
          <div className="reveal-right lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-card md:p-10 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-muted">
                <div
                  className="h-full bg-gradient-brand transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <h2 className="font-display text-2xl font-bold">
                  Service Request <span className="text-gradient-brand">Wizard</span>
                </h2>
                <span className="text-xs font-mono bg-muted border border-border px-2.5 py-1 rounded-md text-muted-foreground">
                  Step {step} of 3
                </span>
              </div>

              {sent ? (
                <div className="flex flex-col items-center text-center py-10">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6 animate-bounce">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-xl font-bold">Enquiry Drafted Successfully!</h3>
                  <p className="mt-3 text-sm text-muted-foreground max-w-md">
                    We have successfully compiled your technical specifications and opened WhatsApp. 
                    If it didn't launch automatically, click the button below to complete submission or give us a direct call at <strong className="text-primary">{SITE.phone}</strong>.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full justify-center">
                    <a
                      href={`tel:${SITE.phoneIntl}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-bold text-foreground transition-all hover:bg-muted"
                    >
                      Call Support
                    </a>
                    <button
                      onClick={() => {
                        setStep(1);
                        setCategory(null);
                        setSent(false);
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-industrial hover:shadow-glow-gold transition-all"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  
                  {/* STEP 1: Select Category */}
                  {step === 1 && (
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                          Step 1: Choose Enquiry Type
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          Select whether you need component repair/testing or spare parts supply.
                        </p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        {/* Option 1: Repair */}
                        <div
                          onClick={() => setCategory("repair")}
                          className={`cursor-pointer rounded-xl border p-5 transition-all flex flex-col items-center text-center ${
                            category === "repair"
                              ? "border-primary bg-primary/5 shadow-glow-gold scale-[1.02]"
                              : "border-border bg-background hover:border-primary/40 hover:scale-[1.01]"
                          }`}
                        >
                          <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-4 ${
                            category === "repair" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          }`}>
                            <Wrench className="h-6 w-6" />
                          </div>
                          <h4 className="font-display font-bold text-base">Repair & Service</h4>
                          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                            Overhauls, testing, and servicing for pumps, cylinders, valves, and hose assemblies.
                          </p>
                        </div>

                        {/* Option 2: Sourcing */}
                        <div
                          onClick={() => setCategory("sourcing")}
                          className={`cursor-pointer rounded-xl border p-5 transition-all flex flex-col items-center text-center ${
                            category === "sourcing"
                              ? "border-accent bg-accent/5 shadow-glow-teal scale-[1.02]"
                              : "border-border bg-background hover:border-accent/40 hover:scale-[1.01]"
                          }`}
                        >
                          <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-4 ${
                            category === "sourcing" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                          }`}>
                            <Package className="h-6 w-6" />
                          </div>
                          <h4 className="font-display font-bold text-base">New Part Sourcing</h4>
                          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                            Custom power pack fabrication, genuine OEM seal kits, and premium spares supply.
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          disabled={!category}
                          onClick={handleNext}
                          className="group inline-flex items-center gap-1.5 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-industrial hover:shadow-glow-gold transition-all disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Next Step <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Parameters Form */}
                  {step === 2 && (
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                          Step 2: Technical Specifications
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          Provide dimensions, flow rates, pressure ratings, or model brands.
                        </p>
                      </div>

                      {category === "repair" ? (
                        <div className="grid gap-5">
                          <label className="block">
                            <span className="mb-2 block text-sm font-medium">Component for Repair</span>
                            <select
                              value={componentType}
                              onChange={(e) => setComponentType(e.target.value)}
                              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/20 focus:border-primary focus:ring-2"
                            >
                              <option value="Hydraulic Pump">Hydraulic Pump</option>
                              <option value="Hydraulic Cylinder">Hydraulic Cylinder</option>
                              <option value="Directional Control Valve">Directional Control Valve</option>
                              <option value="Hose Assembly">Hose Assembly</option>
                              <option value="Other Component">Other Component</option>
                            </select>
                          </label>

                          <label className="block">
                            <span className="mb-2 block text-sm font-medium">Brand / Manufacturer (Optional)</span>
                            <input
                              type="text"
                              value={brand}
                              onChange={(e) => setBrand(e.target.value)}
                              placeholder="e.g. Rexroth, Yuken, Vickers, Parker"
                              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/20 focus:border-primary focus:ring-2 placeholder:text-muted-foreground/60"
                            />
                          </label>

                          <label className="block">
                            <span className="mb-2 block text-sm font-medium">Describe Symptoms / Damages</span>
                            <textarea
                              value={issue}
                              onChange={(e) => setIssue(e.target.value)}
                              rows={4}
                              placeholder="e.g. external oil leak, drop in operating pressure, excessive operating noise, etc."
                              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/20 focus:border-primary focus:ring-2 placeholder:text-muted-foreground/60"
                            />
                          </label>
                        </div>
                      ) : (
                        <div className="grid gap-5">
                          <label className="block">
                            <span className="mb-2 block text-sm font-medium">Product Category</span>
                            <select
                              value={productType}
                              onChange={(e) => setProductType(e.target.value)}
                              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/20 focus:border-accent focus:ring-2"
                            >
                              <option value="Custom Power Pack">Custom Power Pack</option>
                              <option value="Genuine OEM Seal Kit">Genuine OEM Seal Kit</option>
                              <option value="High-Pressure Hydraulic Hose">High-Pressure Hydraulic Hose</option>
                              <option value="Hydraulic Pump / Motor">Hydraulic Pump / Motor</option>
                              <option value="Valves & Fittings">Valves & Fittings</option>
                            </select>
                          </label>

                          <label className="block">
                            <span className="mb-2 block text-sm font-medium">Technical Parameters / Part No.</span>
                            <textarea
                              value={specs}
                              onChange={(e) => setSpecs(e.target.value)}
                              rows={5}
                              placeholder={
                                productType === "Custom Power Pack"
                                  ? "Specify required LPM (flow rate), operating Bar (pressure), and electric motor HP if known."
                                  : productType === "Genuine OEM Seal Kit"
                                  ? "Specify manufacturer part number (e.g. Hallite / Parker) or rod & piston dimensions."
                                  : "Specify bore diameter, stroke length, thread specifications, or pressure ratings."
                              }
                              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/20 focus:border-accent focus:ring-2 placeholder:text-muted-foreground/60"
                            />
                          </label>
                        </div>
                      )}

                      <div className="pt-4 flex justify-between">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted"
                        >
                          <ArrowLeft className="h-4 w-4" /> Back
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="group inline-flex items-center gap-1.5 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-industrial hover:shadow-glow-gold transition-all"
                        >
                          Next Step <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Contact Details */}
                  {step === 3 && (
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                          Step 3: Contact & Company Profile
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          Provide your industrial details to complete the quote.
                        </p>
                      </div>

                      <div className="grid gap-5">
                        <label className="block">
                          <span className="mb-2 block text-sm font-medium flex items-center gap-1.5">
                            <User className="h-4 w-4 text-primary" /> Contact Person Name
                          </span>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full name"
                            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/20 focus:border-primary focus:ring-2 placeholder:text-muted-foreground/60"
                          />
                        </label>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <label className="block">
                            <span className="mb-2 block text-sm font-medium flex items-center gap-1.5">
                              <Building className="h-4 w-4 text-primary" /> Factory / Company Name
                            </span>
                            <input
                              type="text"
                              value={company}
                              onChange={(e) => setCompany(e.target.value)}
                              placeholder="e.g. Bangalore Forge Ltd"
                              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/20 focus:border-primary focus:ring-2 placeholder:text-muted-foreground/60"
                            />
                          </label>
                          <label className="block">
                            <span className="mb-2 block text-sm font-medium flex items-center gap-1.5">
                              <MapPin className="h-4 w-4 text-primary" /> Delivery / Site Location
                            </span>
                            <input
                              type="text"
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                              placeholder="e.g. Hosur, Krishnagiri, Bangalore"
                              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/20 focus:border-primary focus:ring-2 placeholder:text-muted-foreground/60"
                            />
                          </label>
                        </div>

                        <label className="block">
                          <span className="mb-2 block text-sm font-medium flex items-center gap-1.5">
                            <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp / Mobile Number
                          </span>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="10-digit mobile number"
                            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/20 focus:border-primary focus:ring-2 placeholder:text-muted-foreground/60"
                          />
                        </label>
                      </div>

                      <div className="pt-4 flex justify-between items-center">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted"
                        >
                          <ArrowLeft className="h-4 w-4" /> Back
                        </button>
                        <button
                          type="submit"
                          disabled={!name || !phone}
                          className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-industrial hover:shadow-glow-gold transition-all disabled:opacity-50 disabled:pointer-events-none"
                        >
                          <Send className="h-4 w-4 transition-transform group-hover:-rotate-12" /> Submit via WhatsApp
                        </button>
                      </div>
                      <p className="text-center text-[10px] text-muted-foreground">
                        Note: Clicking submit prepares a pre-structured industrial technical quote sheet and opens WhatsApp.
                      </p>
                    </div>
                  )}

                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: any;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:border-primary/30 hover:shadow-glow-gold">
      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-lg">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </div>
        <div className="mt-1 text-sm font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}
