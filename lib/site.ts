export const SITE = {
  name: "AAA Zen Gardens & Home Services",
  shortName: "AAA Zen",
  wordmark: "AAA Zen Gardens",
  wordmarkSub: "& Home Services",
  tagline: "Designing and building your sanctuary, your zen.",
  phone: "647-782-8019",
  phoneHref: "tel:+16477828019",
  email: "aaazengardensandhomeservices@gmail.com",
  emailHref: "mailto:aaazengardensandhomeservices@gmail.com",
  instagram: "https://www.instagram.com/aaa_zengardensandhomeservices/",
  instagramHandle: "@aaa_zengardensandhomeservices",
  yearsInBusiness: 7,
  serviceArea: "GTA & Southern Ontario",
  hours: "Monday to Saturday, by appointment",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aaa-zen-gardens.netlify.app",
} as const;

export const NAV = [
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Service Area", href: "/#area" },
  { label: "Blog", href: "/blog" },
] as const;
