export const SITE = {
  name: "RVS Hydraulics",
  tagline: "All Kinds of Hydraulic Parts Sales & Service",
  phone: "9980848855",
  phoneIntl: "+919980848855",
  whatsapp: "919980848855",
  email: "rvshydraulicsalesservice@gmail.com",
  gst: "33JNIPS6881K1Z2",
  address:
    "First Floor, Shop No. 2 365 7 2, TK Nagar Service Road, OPP Shoolagiri Bus Stand, Shoolagiri-635117, Krishnagiri Dist, Tamil Nadu",
  city: "Shoolagiri",
  region: "Tamil Nadu",
  postal: "635117",
  country: "IN",
  mapsQuery:
    "RVS+Hydraulics+Shoolagiri+TK+Nagar+Service+Road+Krishnagiri",
  developer: "E Charan Kumar Reddy",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export const waLink = (text = "Hi RVS Hydraulics, I'd like a quote.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
