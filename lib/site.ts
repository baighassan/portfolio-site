// Everything personal lives here: change this file and the whole site updates.

export const site = {
  name: "Beyg's Studio",
  role: "Web designer and full-stack developer",
  email: "hassanbaigmirza26@gmail.com",
  contraUrl: "https://contra.com/mirza_baig_shag9ien",
  basedIn: "Pakistan, working with clients in the US and Japan",
  overlap: "Overlap with US mornings and Japan afternoons",
};

export type Work = {
  slug: string;
  name: string;
  kind: string;       // what was made
  label: string;      // "Concept" for self-initiated work
  summary: string;
  stack: string[];
  images: { src: string; alt: string; ratio: "wide" | "tall" }[];
  liveUrl?: string;
  bg: string;         // tile background
};

export const work: Work[] = [
  {
    slug: "juniper-dental",
    name: "Juniper Family Dental",
    kind: "Clinic website with online booking",
    label: "Concept",
    summary:
      "A family dental practice site built around booking: pick a visit, a day and a time in three taps. Self-pay fees are listed with standard procedure codes so patients see prices before they call.",
    stack: ["Next.js", "TypeScript", "CSS"],
    images: [
      { src: "/work/juniper-desktop.jpg", alt: "Juniper Family Dental homepage with the booking card open", ratio: "wide" },
      { src: "/work/juniper-mobile.jpg", alt: "Booking card on a phone", ratio: "tall" },
      { src: "/work/juniper-fees.jpg", alt: "Self-pay fee table with procedure codes", ratio: "wide" },
    ],
    bg: "#E4ECE7",
  },
];

// Concepts being built next. Shown as a short list until they are finished.
export const upcoming = [
  "Restaurant site with menu and table booking",
  "SaaS product landing page",
  "Real estate listings with search and filters",
  "Booking dashboard with login and database",
];

export type Service = {
  id: string;
  name: string;
  line: string;
  includes: string[];
};

export const services: Service[] = [
  {
    id: "websites",
    name: "Websites",
    line: "Company and business sites that load fast and turn visitors into customers.",
    includes: ["Design in Figma, built in Next.js", "Mobile-first layouts", "Contact and booking forms that send", "SEO basics and analytics"],
  },
  {
    id: "apps",
    name: "Web apps",
    line: "Dashboards, booking systems and internal tools with real accounts and data.",
    includes: ["Login and user roles", "Database and API", "Admin screens", "Deployed and documented"],
  },
  {
    id: "redesigns",
    name: "Redesigns",
    line: "Your current site, rebuilt cleaner and faster, keeping what already works.",
    includes: ["Audit of the current site", "New design, same content structure", "Redirects so search rankings hold", "Before-and-after speed report"],
  },
  {
    id: "care",
    name: "Care",
    line: "Small changes, updates and fixes after launch, without a new contract each time.",
    includes: ["Content and price updates", "Bug fixes within two working days", "Monthly backups and checks", "Cancel any month"],
  },
];

export const steps = [
  { name: "Brief", body: "Tell me what the site needs to do, by email or on Contra. You get a fixed quote within two days." },
  { name: "Design", body: "Homepage design first. Once you approve the direction, the remaining pages follow it." },
  { name: "Build", body: "Built in Next.js on a preview link you can open on any phone, updated as I go." },
  { name: "Launch", body: "Domain, hosting and forms set up. You get the code and a short guide to edit content." },
];

export const pricing = [
  {
    name: "Website",
    from: 500,
    note: "One page, or up to three short pages",
    points: ["Custom design", "Contact form", "Hosting setup", "Two rounds of changes"],
    cta: "Get a quote",
    featured: false,
  },
  {
    name: "Business site",
    from: 1200,
    note: "Up to eight pages, the most common project",
    points: ["Everything in Website", "Booking or quote form", "Basic SEO and analytics", "Content editing guide"],
    cta: "Get a quote",
    featured: true,
  },
  {
    name: "Web app",
    from: 2500,
    note: "Accounts, data and admin screens",
    points: ["Login and roles", "Database and API", "Admin dashboard", "Deployment and handover"],
    cta: "Get a quote",
    featured: false,
  },
];

export const faq = [
  {
    q: "How long does a website take?",
    a: "A one-page site takes about a week. A business site of five to eight pages takes three to four weeks, most of it waiting on content and feedback.",
  },
  {
    q: "Do you only build, or design too?",
    a: "Both. I design the pages first, you approve them, and then I build exactly what you approved.",
  },
  {
    q: "Can you work with my existing designer or brand?",
    a: "Yes. Send the Figma file or brand guide and I will build from it.",
  },
  {
    q: "How do payments work?",
    a: "Half at the start and half at launch, through Contra or bank transfer. Web apps are split into milestones.",
  },
  {
    q: "Do you build Japanese websites?",
    a: "Yes. I build sites in Japanese with proper Japanese typography and layout, and can add an English version.",
  },
];
