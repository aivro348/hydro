import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Building,
  User,
  AtSign,
  FileText,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
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
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const whatsappMessage = `🛠️ *RVS HYDRAULICS - ENQUIRY* 🛠️\n---------------------------------\n👤 Name: ${name}\n📧 Email: ${email || "Not Provided"}\n🏭 Company: ${company || "Not Provided"}\n📞 Phone: ${phone}\n\n📝 *Message*:\n${message}\n---------------------------------\n_Submitted via website_`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodedMessage}`, "_blank");
    setSent(true);
  }

  return (
    <>
      <section className="pt-32 pb-24 md:pt-36 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-5">
          {/* Sidebar Contact Cards */}
          <aside className="reveal-left flex flex-col gap-5 lg:col-span-2">
            <div className="mb-4">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Get In Touch
              </div>
              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-wide md:text-4xl">
                Ready to serve <span className="text-gradient-brand">your systems</span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base pr-4">
                Visit our workshop, send an email, or complete our contact form for a fast technical quote.
              </p>
            </div>

            <ContactCard
              icon={Phone}
              title="Call us"
              value={SITE.phone}
              href={`tel:${SITE.phoneIntl}`}
            />
            <ContactCard
              icon={WhatsAppIcon}
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
            <div className="mt-4 overflow-hidden rounded-2xl border border-border shadow-industrial">
              <iframe
                title="RVS Hydraulics location"
                src={`https://www.google.com/maps?q=${SITE.mapsQuery}&output=embed`}
                className="h-64 w-full border-0"
                loading="lazy"
              />
            </div>
          </aside>

          {/* Professional Form Container */}
          <div className="reveal-right lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card md:p-10">
              <div className="mb-8 border-b border-border/50 pb-6">
                <h2 className="font-display text-3xl font-extrabold text-foreground">
                  Send a <span className="text-gradient-brand">Message</span>
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form below and our team will get back to you with a professional quote or assistance shortly.
                </p>
              </div>

              {sent ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] mb-6">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Message Ready to Send!</h3>
                  <p className="mt-3 text-sm text-muted-foreground max-w-md">
                    We've opened WhatsApp with your prepared message. If it didn't launch automatically, please click below or call us directly.
                  </p>
                  <div className="mt-8 flex gap-4">
                    <button
                      onClick={() => setSent(false)}
                      className="rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition"
                    >
                      Send Another
                    </button>
                    <a
                      href={`tel:${SITE.phoneIntl}`}
                      className="rounded-xl bg-gradient-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-industrial transition hover:shadow-glow-gold"
                    >
                      Call Support
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground flex items-center gap-2">
                        <User className="h-4 w-4 text-primary" /> Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" /> Phone Number <span className="text-destructive">*</span>
                      </label>
                      <input
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground flex items-center gap-2">
                        <AtSign className="h-4 w-4 text-primary" /> Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground flex items-center gap-2">
                        <Building className="h-4 w-4 text-primary" /> Company Name
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Industrial Corp"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" /> How can we help you? <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      placeholder="Describe your hydraulic requirement, repair need, or part request..."
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={!name || !phone || !message}
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-4 text-sm font-bold text-primary-foreground shadow-industrial transition-all hover:shadow-glow-gold disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <Send className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      Submit Enquiry
                    </button>
                    <p className="mt-4 text-center text-xs text-muted-foreground">
                      By submitting, your message will be forwarded securely to our technical team via WhatsApp.
                    </p>
                  </div>
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
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:border-primary/30 hover:shadow-glow-gold">
      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-lg">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </div>
        <div className="mt-1 text-sm font-medium leading-relaxed text-foreground">{value}</div>
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
