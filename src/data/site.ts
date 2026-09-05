import sakura from "@/assets/project-sakura.jpg";
import astra from "@/assets/project-astra.jpg";
import celeste from "@/assets/project-celeste.jpg";
import wadi from "@/assets/project-wadi.jpg";
import skyhills2 from "@/assets/project-skyhills-2.jpg";
import skyhills1 from "@/assets/project-skyhills-1.jpg";
import newsHandover from "@/assets/news-handover.jpg";
import newsDelivery from "@/assets/news-delivery.jpg";
import newsEndowment from "@/assets/news-endowment.jpg";

export type NavItem = { label: string; to: string };

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Why Dubai", to: "/why-dubai" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
];

export type Project = {
  id: string;
  name: string;
  location: string;
  status: "Ready" | "Under Construction" | "Coming Soon";
  blurb: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    id: "sakura-gardens",
    name: "Sakura Gardens",
    location: "Falcon City – Dubai Land",
    status: "Under Construction",
    blurb:
      "A Japanese-inspired garden community where blossom courtyards, timber screens and still water set the rhythm of daily life.",
    image: sakura,
  },
  {
    id: "skyhills-astra",
    name: "SkyHills Astra",
    location: "Dubai Science Park",
    status: "Under Construction",
    blurb:
      "Sculpted bronze fins rise the full height of the tower, giving Dubai Science Park a residential landmark with a sharp silhouette.",
    image: astra,
  },
  {
    id: "celeste",
    name: "Celeste",
    location: "Al Jaddaf Waterfront – Dubai",
    status: "Under Construction",
    blurb:
      "Curved balconies wrap a creekside address where the water, the skyline and the light change the facade hour by hour.",
    image: celeste,
  },
  {
    id: "wadi-hills",
    name: "Wadi Hills",
    location: "Wadi Al Safa – Dubai Land",
    status: "Coming Soon",
    blurb:
      "Limestone and dark timber villas step down a landscaped slope, holding the desert horizon on one side and the city on the other.",
    image: wadi,
  },
];

export const LATEST_LAUNCH = {
  name: "Skyhills Residences 2",
  location: "Jumeirah Village Circle",
  status: "Coming Soon",
  headline: "JVC's next address is taking shape.",
  blurb:
    "Following the early handover of Skyhills Residences 1, the second chapter is now rising in JVC — the same standard of delivery, a sharper architectural language.",
  image: skyhills2,
};

export const PORTFOLIO: {
  name: string;
  location: string;
  status: Project["status"];
  image: string;
  year: string;
  typology: string;
}[] = [
  {
    name: "Skyhills Residences 1 By HRE",
    location: "Jumeirah Village Circle",
    status: "Ready",
    image: skyhills1,
    year: "2026",
    typology: "Residences",
  },
  {
    name: "SkyHills Astra",
    location: "Dubai Science Park",
    status: "Under Construction",
    image: astra,
    year: "2027",
    typology: "Tower",
  },
  {
    name: "Celeste",
    location: "Al Jaddaf Waterfront",
    status: "Under Construction",
    image: celeste,
    year: "2027",
    typology: "Waterfront",
  },
  {
    name: "Sakura Gardens",
    location: "Falcon City – Dubai Land",
    status: "Under Construction",
    image: sakura,
    year: "2028",
    typology: "Community",
  },
  {
    name: "Skyhills Residences 2",
    location: "Jumeirah Village Circle",
    status: "Coming Soon",
    image: skyhills2,
    year: "2029",
    typology: "Residences",
  },
  {
    name: "Wadi Hills",
    location: "Wadi Al Safa – Dubai Land",
    status: "Coming Soon",
    image: wadi,
    year: "2029",
    typology: "Villas",
  },
];

export const STATS = [
  { value: 30, suffix: "+", label: "Years of legacy" },
  { value: 340, suffix: "+", label: "Constructed projects" },
  { value: 12000, suffix: "+", label: "Families housed" },
  { value: 6, suffix: "", label: "Active developments" },
];

export type DubaiReason = {
  /** Numeric part for the count-up animation. */
  value: number;
  prefix?: string;
  suffix?: string;
  /** Small unit line under the figure. */
  unit: string;
  title: string;
  body: string;
};

export type DubaiPillar = {
  id: string;
  label: string;
  tagline: string;
  reasons: DubaiReason[];
};

export const DUBAI_PILLARS: DubaiPillar[] = [
  {
    id: "returns",
    label: "Returns",
    tagline: "Yields that still outperform the world's mature capitals.",
    reasons: [
      {
        value: 9,
        prefix: "5–",
        suffix: "%",
        unit: "gross rental yield",
        title: "Higher rental yields",
        body: "Dubai residential stock routinely returns 5% to 9% gross — well above London, Paris or Hong Kong.",
      },
      {
        value: 1450,
        prefix: "AED ",
        unit: "average per sq ft",
        title: "Prime at a fair price",
        body: "Prime square footage in Dubai costs a fraction of comparable addresses in other global cities, so entry pricing stays rational.",
      },
      {
        value: 0,
        suffix: "%",
        unit: "annual property tax",
        title: "No annual property tax",
        body: "Freehold ownership with no recurring tax burden after purchase — your yield stays your yield.",
      },
    ],
  },
  {
    id: "access",
    label: "Access",
    tagline: "A base you can actually live from, and stay in.",
    reasons: [
      {
        value: 8,
        suffix: "h",
        unit: "flight to two thirds of the world",
        title: "Reachable from everywhere",
        body: "Direct flights connect Dubai to Europe, Asia and Africa within a single working day.",
      },
      {
        value: 10,
        suffix: " yrs",
        unit: "renewable golden visa",
        title: "Residency through property",
        body: "Qualifying investors and their families secure long-term UAE residency through the Golden and Green Visa programmes.",
      },
      {
        value: 1,
        prefix: "#",
        unit: "safest city ranking",
        title: "Safety as a standard",
        body: "Consistently ranked among the safest cities in the world — a decisive factor for families relocating.",
      },
    ],
  },
  {
    id: "momentum",
    label: "Momentum",
    tagline: "Demand backed by policy, not by sentiment.",
    reasons: [
      {
        value: 200,
        suffix: "+",
        unit: "nationalities doing business",
        title: "A genuine business hub",
        body: "Free zones, logistics infrastructure and full foreign ownership keep drawing capital across every sector.",
      },
      {
        value: 18,
        suffix: "M+",
        unit: "annual visitors",
        title: "Global touristic pull",
        body: "World-class retail, hospitality and beachfront sustain both short-let performance and long-term demand.",
      },
      {
        value: 2050,
        unit: "national strategy horizon",
        title: "Planned decades ahead",
        body: "State-level investment in clean energy, healthcare, technology and education underwrites the next generation of value.",
      },
    ],
  },
];


export const NEWS = [
  {
    title:
      "HRE Development begins handover of Skyhills Residences 1 By HRE, six months ahead of schedule",
    date: "April 23, 2026",
    kicker: "Handover",
    image: newsHandover,
  },
  {
    title: "6 months ahead of schedule: Redefining delivery standards in Dubai's property market",
    date: "April 7, 2026",
    kicker: "Press",
    image: newsDelivery,
  },
  {
    title: "HRE Contributes AED 100 Million to the UAE's \u201cMother of the Nation Endowment for Orphans\u201d",
    date: "March 18, 2026",
    kicker: "Community",
    image: newsEndowment,
  },
];
