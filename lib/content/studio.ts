import type { ArtworkVariant } from "./types";

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    body: "We study the business, the market, the audience and what your current digital footprint is actually saying.",
    detail: "Interviews, competitor review, analytics, sales conversations.",
  },
  {
    number: "02",
    title: "Position",
    body: "We decide what needs to be said, shown and remembered — and what should be dropped entirely.",
    detail: "Messaging, audience, offer, channel fit.",
  },
  {
    number: "03",
    title: "Create",
    body: "Strategy becomes identity, content, digital experiences and campaigns that look like one company.",
    detail: "Identity, web, content production, campaign creative.",
  },
  {
    number: "04",
    title: "Launch",
    body: "We put the work in front of the market properly — tracked, measured and ready to learn from.",
    detail: "Campaign setup, tracking, launch sequence.",
  },
  {
    number: "05",
    title: "Learn",
    body: "We watch behaviour and performance. What did people do when the work met the market?",
    detail: "Conversion data, creative performance, search behaviour.",
  },
  {
    number: "06",
    title: "Improve",
    body: "We refine what works, remove what doesn't, and decide what to build next.",
    detail: "Iteration, budget shifts, next-quarter plan.",
  },
] as const;

export const principles = [
  {
    number: "01",
    title: "Posting more isn't a strategy.",
    body: "A calendar full of posts that nobody remembers is cost, not marketing. First decide what you want to be known for.",
  },
  {
    number: "02",
    title: "Running ads isn't a strategy.",
    body: "Media buying amplifies what already exists. If the offer or the page is weak, spend just makes the weakness expensive.",
  },
  {
    number: "03",
    title: "Ranking isn't a strategy.",
    body: "Traffic you can't convert is a vanity metric. We care about the searches that end in a conversation.",
  },
  {
    number: "04",
    title: "The work starts with what the business needs to become.",
    body: "Then the brand, website and campaigns are built backwards from that — in that order, deliberately.",
  },
] as const;

export const industries: {
  name: string;
  problem: string;
  services: string[];
  artwork: ArtworkVariant;
}[] = [
  {
    name: "Real Estate",
    problem: "Inventory is visible; qualified enquiries are not.",
    services: ["Paid media", "Landing pages", "Local SEO", "Content"],
    artwork: "signal",
  },
  {
    name: "Healthcare & Clinics",
    problem: "Strong reputation offline, invisible in local search.",
    services: ["Local SEO", "Service pages", "Content", "Reputation"],
    artwork: "search",
  },
  {
    name: "Hospitality",
    problem: "Discovery depends on platforms you don't control.",
    services: ["Brand", "Websites", "Content", "Direct booking"],
    artwork: "editorial",
  },
  {
    name: "Beauty & Wellness",
    problem: "Appointments driven by discounts instead of desirability.",
    services: ["Brand", "Social media", "Paid media", "Booking flow"],
    artwork: "campaign",
  },
  {
    name: "Food & Beverage",
    problem: "Footfall relies on passing traffic and luck.",
    services: ["Brand identity", "Social media", "Content", "Local SEO"],
    artwork: "packaging",
  },
  {
    name: "Education",
    problem: "Long decision cycles and parents comparing three shortlisted options.",
    services: ["Website", "Performance", "Content", "Admissions pages"],
    artwork: "browser",
  },
  {
    name: "Retail",
    problem: "Competing with marketplaces on price alone.",
    services: ["Brand", "E-commerce", "Paid media", "Content"],
    artwork: "signal",
  },
  {
    name: "Professional Services",
    problem: "Expertise that never makes it out of the meeting room.",
    services: ["Positioning", "Website", "SEO", "Content"],
    artwork: "editorial",
  },
  {
    name: "Startups",
    problem: "Needing a brand and a product launch with a startup budget.",
    services: ["Brand", "Digital", "App development", "Launch campaign"],
    artwork: "mobile",
  },
  {
    name: "D2C & E-commerce",
    problem: "Rising acquisition costs and no repeat purchase habit.",
    services: ["Brand", "Creative", "Performance", "Retention"],
    artwork: "packaging",
  },
  {
    name: "Local Businesses",
    problem: "Great service, invisible online, outranked by directories.",
    services: ["Local SEO", "Website", "Social", "Google Business"],
    artwork: "location",
  },
];

export const differentiators = [
  {
    number: "01",
    title: "Specific over impressive",
    body: "We would rather build one thing that moves a number than twelve things that look good in a deck.",
  },
  {
    number: "02",
    title: "Senior work, small team",
    body: "The people in the first meeting are the people doing the work. No silent handover to a junior bench.",
  },
  {
    number: "03",
    title: "Plain reporting",
    body: "What we did, what it cost, what it produced. If something isn't working, you'll hear it from us first.",
  },
  {
    number: "04",
    title: "No lock-in by design",
    body: "You keep your accounts, your site, your content. Retention should come from results, not contracts.",
  },
] as const;

/** Awaiting verified figures — replace values before launch. */
export const proofPoints: { value: string; label: string; verified: boolean }[] = [
  { value: "[PROJECT COUNT]", label: "Projects delivered", verified: false },
  { value: "[CLIENT COUNT]", label: "Businesses served", verified: false },
  { value: "[YEARS]", label: "Years in practice", verified: false },
  { value: "[TEAM SIZE]", label: "Team members", verified: false },
];

export const founder = {
  name: "Arjun",
  role: "Founder & CEO",
  quote:
    "We're not here to post more content. We're here to make businesses worth being talked about — and then make sure the right people find them.",
  bio: "[FOUNDER BIO] — a short, first-person story from Arjun: where he started, what he learned working with local businesses, and why The Brand Hoods exists. Keep it under 120 words and in his own words.",
  artwork: "founder" as ArtworkVariant,
};

export const testimonials: {
  quote: string;
  name: string;
  company: string;
  service: string;
  placeholder: boolean;
}[] = [
  {
    quote: "[CLIENT TESTIMONIAL 1]",
    name: "[CLIENT NAME]",
    company: "[COMPANY]",
    service: "[PROJECT TYPE]",
    placeholder: true,
  },
  {
    quote: "[CLIENT TESTIMONIAL 2]",
    name: "[CLIENT NAME]",
    company: "[COMPANY]",
    service: "[PROJECT TYPE]",
    placeholder: true,
  },
  {
    quote: "[CLIENT TESTIMONIAL 3]",
    name: "[CLIENT NAME]",
    company: "[COMPANY]",
    service: "[PROJECT TYPE]",
    placeholder: true,
  },
];

export const studioFaqs = [
  {
    q: "What kind of businesses do you work with?",
    a: "Mostly owner-led businesses that have outgrown word of mouth — clinics, real estate, hospitality, retail, education, D2C and professional services, in Zirakpur, Chandigarh and beyond.",
  },
  {
    q: "How do engagements start?",
    a: "With a conversation about the business, not a proposal. We ask what's actually blocking growth, then suggest the smallest useful piece of work.",
  },
  {
    q: "Do you work on retainers or projects?",
    a: "Both. Projects suit brand, website and launch work. Retainers suit search, social and paid media where the work is continuous.",
  },
  {
    q: "How much does it cost?",
    a: "Scope decides. A focused website and a full brand programme are different investments, and we'll give you a clear number after the scoping conversation rather than a range designed to be safe.",
  },
  {
    q: "Who owns the work?",
    a: "You do — accounts, files, code and content. Everything is handed over on completion.",
  },
  {
    q: "Do you work with businesses outside Tricity?",
    a: "Yes. A good share of the work happens remotely, with scheduled calls and shared documents in place of office visits.",
  },
] as const;

export const localStory = {
  heading: "Built in Zirakpur. Working beyond it.",
  body: "We're based on VIP Road, ten minutes from Chandigarh and Mohali. That matters for the businesses around us: you can sit in the room with the people doing the work. It matters less for everyone else, which is fine — the work travels.",
} as const;

export const aboutStory = [
  "The Brand Hoods started with a simple frustration: good local businesses were losing to worse competitors with better presentation.",
  "So we work the other way around. Before anyone touches a design tool, we spend time on the business — what it sells, who buys it, why they choose it, and what would have to be true for them to choose it more often. Then we build the brand, website and campaigns that make that answer visible.",
  "It isn't glamorous work. It is positioning, plain language, fast pages, honest reporting and the discipline to keep improving what already works. That's what actually moves a business.",
] as const;
