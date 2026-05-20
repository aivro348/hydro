import pump from "@/assets/prod-pump.jpg";
import valves from "@/assets/prod-valves.jpg";
import hoses from "@/assets/prod-hoses.jpg";
import fittings from "@/assets/prod-fittings.jpg";
import seals from "@/assets/prod-seals.jpg";
import powerpack from "@/assets/prod-powerpack.jpg";
import cylinder from "@/assets/prod-cylinder.jpg";
import accessories from "@/assets/prod-accessories.jpg";

export type CatalogItem = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
};

export const CATALOG: CatalogItem[] = [
  { slug: "hydraulic-pumps", title: "Hydraulic Pumps", short: "Gear, piston & vane pumps", description: "Premium hydraulic pumps for industrial, mobile & agricultural applications. Repair & replacement available.", image: pump },
  { slug: "valves", title: "All Types Of Valves", short: "Directional, pressure & flow control", description: "Solenoid, manual and proportional valves from trusted brands for every hydraulic circuit.", image: valves },
  { slug: "hose-pipes", title: "Hose Pipes", short: "High-pressure hose assemblies", description: "Custom hose pipe assemblies with brass / steel fittings — crimped to spec on demand.", image: hoses },
  { slug: "fittings", title: "Fittings", short: "Adapters, elbows, unions", description: "Wide range of hydraulic fittings, adapters and connectors in brass and stainless steel.", image: fittings },
  { slug: "seal-kits", title: "Hydraulic Seal Kits", short: "O-rings, U-cups & wipers", description: "Genuine seal kits for pumps, cylinders and valves of all leading OEMs.", image: seals },
  { slug: "accessories", title: "Hydraulic Accessories", short: "Filters, gauges & manifolds", description: "Complete range of hydraulic accessories to keep your system running clean and reliable.", image: accessories },
  { slug: "power-pack", title: "Power Pack Sales & Service", short: "Custom hydraulic power packs", description: "Design, supply and servicing of custom hydraulic power packs for any tonnage and duty cycle.", image: powerpack },
  { slug: "cylinder", title: "Cylinder Sales & Service", short: "Single & double acting cylinders", description: "Manufacturing, repair and reconditioning of hydraulic cylinders of every bore and stroke.", image: cylinder },
];
