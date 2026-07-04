export type ServiceKey =
  | "zen"
  | "design"
  | "maintenance"
  | "hardscaping"
  | "cleanup"
  | "home";

export const SERVICES: {
  key: ServiceKey;
  title: string;
  description: string;
  featured?: boolean;
}[] = [
  {
    key: "zen",
    title: "Zen & Japanese Gardens",
    description:
      "Raked gravel, stone, water features, and calm planting designed to last.",
    featured: true,
  },
  {
    key: "design",
    title: "Landscape Design & Build",
    description:
      "From a plan on paper to a finished yard. Beds, grading, and greenery.",
  },
  {
    key: "maintenance",
    title: "Garden & Lawn Maintenance",
    description:
      "Seasonal care that keeps everything healthy without the guesswork.",
  },
  {
    key: "hardscaping",
    title: "Hardscaping",
    description: "Patios, walkways, steps, and retaining walls built to hold up.",
  },
  {
    key: "cleanup",
    title: "Seasonal Cleanups",
    description:
      "Spring and fall cleanups, pruning, and prep so nothing gets away from you.",
  },
  {
    key: "home",
    title: "Home Services",
    description: "General property help beyond the garden. Ask what you need.",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Walkthrough",
    description:
      "We visit and walk your property together, so we're on the same page about the job and the outcome.",
  },
  {
    number: "02",
    title: "Detailed plan & quote",
    description:
      "You get a clear, organized plan and an upfront estimate. No vague numbers.",
  },
  {
    number: "03",
    title: "The build",
    description: "We do the work with care and keep the site clean as we go.",
  },
  {
    number: "04",
    title: "Ongoing care",
    description:
      "Want it kept up? We handle seasonal maintenance so it stays beautiful.",
  },
];

export const WHY_US = [
  {
    title: "On the same page",
    description:
      "We agree on scope before we start, so expectations match on both sides.",
  },
  {
    title: "Detailed & organized",
    description:
      "Organized walkthroughs and tidy, careful work, start to finish.",
  },
  {
    title: "One crew for the whole property",
    description:
      "Gardens, hardscape, cleanups, and home services in one call.",
  },
];

/*
 * PLACEHOLDER TESTIMONIALS.
 * Replace with real client reviews (and real first names) before running ads
 * or promoting the site. Do not leave these live long term.
 */
export const TESTIMONIALS = [
  {
    quote:
      "They walked the whole yard with me first. No surprises, and the result looks incredible.",
    name: "Homeowner, Mississauga",
    source: "via Google",
  },
  {
    quote:
      "The plan matched exactly what we agreed on during the visit, and the crew left the site spotless every day.",
    name: "Homeowner, Vaughan",
    source: "via Google",
  },
  {
    quote:
      "Our backyard finally feels like a place to slow down. Worth every dollar.",
    name: "Homeowner, Oakville",
    source: "via Google",
  },
];

/* Example coverage list. Edit to the towns actually served. */
export const TOWNS = [
  "Toronto",
  "Mississauga",
  "Brampton",
  "Caledon",
  "Vaughan",
  "Oakville",
  "Hamilton",
  "Simcoe",
];

export type GalleryCategory =
  | "Zen Gardens"
  | "Design & Build"
  | "Maintenance"
  | "Hardscaping";

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "Zen Gardens",
  "Design & Build",
  "Maintenance",
  "Hardscaping",
];

/*
 * All gallery imagery is placeholder stock until the client supplies real
 * project photos. Captions say "sample" on purpose. Swap src values only.
 */
export const GALLERY_ITEMS: {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  tall?: boolean;
}[] = [
  {
    src: "https://images.unsplash.com/photo-1526397751294-331021109fbd?w=1200&q=80&auto=format&fit=crop",
    alt: "Carefully pruned evergreen in a stone planter",
    caption: "Sculptural pruning, sample photo",
    category: "Zen Gardens",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=1200&q=80&auto=format&fit=crop",
    alt: "Moss and layered shade planting in a quiet garden corner",
    caption: "Moss and shade planting, sample photo",
    category: "Zen Gardens",
  },
  {
    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop",
    alt: "Home exterior at dusk with warm landscape lighting and planting",
    caption: "Evening lighting and planting, sample photo",
    category: "Design & Build",
  },
  {
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80&auto=format&fit=crop",
    alt: "Modern front entry with steps and a young Japanese maple",
    caption: "Front entry planting, sample photo",
    category: "Design & Build",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&q=80&auto=format&fit=crop",
    alt: "Fresh, dense lawn in the morning light",
    caption: "Lawn renovation, sample photo",
    category: "Maintenance",
  },
  {
    src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80&auto=format&fit=crop",
    alt: "Seedlings started in trays for seasonal planting",
    caption: "Seasonal planting, sample photo",
    category: "Maintenance",
  },
  {
    src: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?w=1200&q=80&auto=format&fit=crop",
    alt: "Jade plants in white planters on a grey paver terrace",
    caption: "Paver terrace and planters, sample photo",
    category: "Hardscaping",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=1200&q=80&auto=format&fit=crop",
    alt: "Gravel walk lined with mature trees",
    caption: "Gravel walk, sample photo",
    category: "Hardscaping",
  },
];

/* Placeholder before and after pair, labelled as samples in the UI. */
export const BEFORE_AFTER = {
  before: {
    src: "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=1600&q=80&auto=format&fit=crop",
    alt: "Plain front yard with basic lawn and shrubs, before landscaping",
  },
  after: {
    src: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=1600&q=80&auto=format&fit=crop",
    alt: "Finished modern front landscape with manicured lawn at dusk",
  },
};

export const HERO_IMAGE = {
  src: "/images/hero.jpg",
  alt: "Stone estate at dusk with a lit paver walkway winding through hydrangeas, hostas, and a deep green lawn",
};

export const SERVICE_OPTIONS = [
  "Zen / Japanese Garden",
  "Landscape Design & Build",
  "Garden / Lawn Maintenance",
  "Hardscaping",
  "Seasonal Cleanup",
  "Home Services",
  "Not sure yet",
];

export const BUDGET_OPTIONS = [
  "Under $5,000",
  "$5,000 to $15,000",
  "$15,000 to $40,000",
  "$40,000 and up",
  "Not sure yet",
];

export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1 to 3 months",
  "This season",
  "Just planning ahead",
];
