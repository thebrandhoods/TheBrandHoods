import type { ArtworkTone, ArtworkVariant } from "./types";

/**
 * PORTFOLIO PLACEHOLDERS.
 *
 * The Brand Hoods has not supplied released client work yet, so these
 * studies describe the *shape* of an engagement (problem → approach →
 * outcome) with client names, years and figures left as marked slots.
 * Replace client, year and metrics in this file before launch — the
 * pages, filters and schema all read from here.
 */

export type Metric = {
  value: string;
  label: string;
  verified: boolean;
};

export type CaseStudy = {
  slug: string;
  number: string;
  client: string;
  title: string;
  category: string;
  industry: string;
  year: string;
  services: string[];
  summary: string;
  statement: string;
  challenge: string;
  opportunity: string;
  approach: { title: string; body: string }[];
  outcome: string;
  metrics: Metric[];
  deliverables: string[];
  artwork: ArtworkVariant;
  gallery: { variant: ArtworkVariant; caption: string }[];
  tone: ArtworkTone;
  featured?: boolean;
  seo: { title: string; description: string };
};

const pending = (value: string, label: string): Metric => ({
  value,
  label,
  verified: false,
});

export const caseStudies: CaseStudy[] = [
  {
    slug: "travel-platform",
    number: "01",
    client: "[CLIENT NAME]",
    title: "Travel brand, rebuilt around the booking",
    category: "Digital",
    industry: "Travel & Hospitality",
    year: "[YEAR]",
    services: ["Website design", "Development", "SEO"],
    summary:
      "A travel operator with strong word of mouth and a website that could not handle the traffic it was earning.",
    statement:
      "The bookings were coming from referrals. The website was making them work for it.",
    challenge:
      "Enquiry volume was healthy but conversion was not. The site had grown page by page over years — no clear structure, slow on mobile, and a booking enquiry form buried after three scrolls of stock photography.",
    opportunity:
      "The audience already trusted the brand. If the website matched that trust — clear packages, honest pricing cues, a fast path to enquiry — the same traffic should produce more conversations without more ad spend.",
    approach: [
      {
        title: "Rebuilt the information architecture",
        body: "Packages, destinations and enquiry paths were restructured around what travellers actually compare before contacting an operator.",
      },
      {
        title: "Design and words together",
        body: "Every page was written and designed in the same pass, so headlines carried the selling and the layout stayed out of the way.",
      },
      {
        title: "Performance as a requirement",
        body: "The build was budgeted for speed from day one: compressed media, minimal client-side JavaScript, no carousel graveyard.",
      },
      {
        title: "Search groundwork",
        body: "Destination pages, structured data and internal linking were set up so organic search could compound instead of leaking.",
      },
    ],
    outcome:
      "A faster, clearer platform that gives every enquiry source a fair chance — and a content structure the team can extend with new packages without a developer.",
    metrics: [
      pending("[+XX%]", "Enquiry conversion rate"),
      pending("[X.Xs]", "Mobile load time"),
      pending("[+XX%]", "Organic sessions"),
    ],
    deliverables: [
      "Strategy and sitemap",
      "Responsive design system",
      "Custom build with content management",
      "Enquiry and follow-up flows",
      "Technical SEO foundation",
    ],
    artwork: "browser",
    gallery: [
      { variant: "browser", caption: "Homepage — rebuilt around the enquiry" },
      { variant: "editorial", caption: "Destination template" },
      { variant: "mobile", caption: "Mobile booking flow" },
    ],
    tone: "dark",
    featured: true,
    seo: {
      title: "Travel platform — website rebuild case study",
      description:
        "How a travel operator's website was rebuilt around the booking decision: structure, content, performance and search foundations.",
    },
  },
  {
    slug: "real-estate-leads",
    number: "02",
    client: "[CLIENT NAME]",
    title: "Real estate enquiries that reach the sales team",
    category: "Performance",
    industry: "Real Estate",
    year: "[YEAR]",
    services: ["Google Ads", "Meta Ads", "Landing pages"],
    summary:
      "Ad spend was producing leads. Sales was ignoring most of them — so the problem was never purely volume.",
    statement:
      "More leads was the request. Better leads was the answer.",
    challenge:
      "Two years of ad history, rising costs and a sales team that had stopped trusting the form fills. Campaigns pointed at a homepage that asked nothing specific, and conversions were counted on page views.",
    opportunity:
      "Project-level landing pages with real inventory detail and a qualification step would filter tyre-kickers before they reached the sales desk — improving cost per qualified lead without touching the total budget.",
    approach: [
      { title: "Audited the account honestly", body: "Wasted spend, match-type drift and duplicated conversion events were documented before anything was changed." },
      { title: "Separated intent", body: "Campaigns were rebuilt around buyer intent — project, locality and budget — instead of one broad catch-all." },
      { title: "Built pages for the ads", body: "Landing pages matched the promise of each ad, with floor plans, location context and a short qualification form." },
      { title: "Fixed the handover", body: "Leads were routed with source and qualification data so sales knew what they were calling about." },
    ],
    outcome:
      "A tighter account with fewer wasted clicks and a lead flow the sales team can act on — measured on qualified enquiries, not raw form fills.",
    metrics: [
      pending("[-XX%]", "Cost per qualified lead"),
      pending("[XX%]", "Lead-to-site-visit rate"),
      pending("[X.Xx]", "Return on ad spend"),
    ],
    deliverables: [
      "Account audit and restructure",
      "Conversion tracking rebuild",
      "Landing page system",
      "Lead routing setup",
      "Monthly performance reporting",
    ],
    artwork: "signal",
    gallery: [
      { variant: "signal", caption: "Campaign performance view" },
      { variant: "browser", caption: "Project landing page" },
      { variant: "poster", caption: "Creative testing set" },
    ],
    tone: "dark",
    featured: true,
    seo: {
      title: "Real estate lead generation — case study",
      description:
        "Rebuilding a real estate ad account around qualified enquiries: intent-led campaigns, landing pages and clean lead routing.",
    },
  },
  {
    slug: "clinic-local-search",
    number: "03",
    client: "[CLIENT NAME]",
    title: "A clinic that became findable in its own city",
    category: "Search",
    industry: "Healthcare",
    year: "[YEAR]",
    services: ["SEO", "Local SEO", "Content"],
    summary:
      "Excellent offline reputation, invisible on Google Maps, competing against directory listings for its own name.",
    statement: "The best-reviewed clinic in the area was not in the map pack.",
    challenge:
      "Treatment pages were written for the doctor rather than the patient, the Google Business Profile had not been touched in years, and reviews lived on a third-party directory instead of the clinic's own listing.",
    opportunity:
      "Local search rewards the specifics: service pages that name conditions, locations, timings and doctors, plus a maintained profile with fresh reviews and photos. The clinic already had the substance — it needed the structure.",
    approach: [
      { title: "Fixed the profile first", body: "Categories, services, hours, photos and review flow were corrected — the fastest commercial win available." },
      { title: "Rewrote treatment pages", body: "Pages were rewritten around patient questions: what it treats, what it costs, how long it takes, who performs it." },
      { title: "Structured the clinic data", body: "MedicalBusiness and FAQ schema were added so search engines could read the information properly." },
      { title: "Built a content rhythm", body: "A modest, sustainable publishing schedule answered the questions the front desk was hearing weekly." },
    ],
    outcome:
      "Consistent local visibility for the searches that decide appointments, with a profile and page structure the clinic can keep building on.",
    metrics: [
      pending("[XX]", "Map pack appearances"),
      pending("[+XX%]", "Direction requests"),
      pending("[+XX%]", "Appointment enquiries"),
    ],
    deliverables: [
      "Local SEO audit",
      "Google Business Profile optimisation",
      "Treatment page rewrites",
      "Structured data",
      "Review strategy",
      "Quarterly reporting",
    ],
    artwork: "search",
    gallery: [
      { variant: "search", caption: "Local visibility overview" },
      { variant: "editorial", caption: "Treatment page structure" },
      { variant: "mobile", caption: "Mobile search experience" },
    ],
    tone: "light",
    seo: {
      title: "Local SEO for a clinic — case study",
      description:
        "How a clinic moved into the local map pack: Google Business Profile, treatment pages, structured data and a content rhythm.",
    },
  },
  {
    slug: "d2c-brand-launch",
    number: "04",
    client: "[CLIENT NAME]",
    title: "A D2C brand launched with a spine, not a logo",
    category: "Brand",
    industry: "D2C & E-commerce",
    year: "[YEAR]",
    services: ["Brand strategy", "Identity", "Packaging", "Campaign"],
    summary:
      "A new product in a crowded category where every competitor used the same colours, claims and photography.",
    statement:
      "The category looked identical. That was the opening, not the obstacle.",
    challenge:
      "The founders had a product, a name and a launch date. What they didn't have was a reason for a stranger to choose them over a cheaper marketplace alternative — or a visual system that could survive packaging, ads and marketplace listings.",
    opportunity:
      "A stated point of view, an ownable visual language and packaging that reads at thumbnail size would let the brand compete on memory rather than on discount.",
    approach: [
      { title: "Positioned before designing", body: "Two weeks of market and customer work produced one sentence the whole brand could be organised around." },
      { title: "Built the visual system", body: "Colour, type and layout rules designed to work in the marketplace, on the shelf and in a paid social feed." },
      { title: "Made packaging part of the story", body: "Structural and print decisions were treated as brand decisions, not production details." },
      { title: "Launched with a campaign", body: "The first campaign introduced the point of view instead of discounting the product." },
    ],
    outcome:
      "A brand with a clear argument, a coherent identity across touchpoints, and creative templates the team can produce from without losing the look.",
    metrics: [
      pending("[X.Xx]", "Launch month ROAS"),
      pending("[XX%]", "Repeat purchase rate"),
      pending("[XX%]", "Branded search growth"),
    ],
    deliverables: [
      "Positioning and messaging",
      "Identity system",
      "Packaging design",
      "Launch campaign assets",
      "Social templates",
      "Brand guidelines",
    ],
    artwork: "packaging",
    gallery: [
      { variant: "packaging", caption: "Packaging system" },
      { variant: "poster", caption: "Identity poster" },
      { variant: "campaign", caption: "Launch campaign" },
    ],
    tone: "dark",
    seo: {
      title: "D2C brand launch — case study",
      description:
        "Positioning, identity, packaging and launch campaign for a D2C brand in a crowded category.",
    },
  },
  {
    slug: "fitness-app",
    number: "05",
    client: "[CLIENT NAME]",
    title: "One app, one promise, shipped in twelve weeks",
    category: "Web",
    industry: "Fitness & Wellness",
    year: "[YEAR]",
    services: ["Product scoping", "UX", "App development"],
    summary:
      "A gym chain with four spreadsheets, three WhatsApp groups and no single place where members and staff could see the same thing.",
    statement: "The software problem was really an operations problem.",
    challenge:
      "Bookings, memberships and trainer schedules were managed manually across locations. Every automation attempt had stalled at requirements stage because the scope kept expanding.",
    opportunity:
      "A narrow version one — booking, membership status and trainer schedule — would remove the daily friction and prove the value before investing in the full platform.",
    approach: [
      { title: "Scoped to one promise", body: "Version one had to do three things. Everything else was listed and deliberately postponed." },
      { title: "Prototyped the workflow", body: "Staff walked through clickable flows before any code was written, which removed two rounds of rework." },
      { title: "Built, tested weekly", body: "Short release cycles meant the team was using real builds within weeks, not at the end." },
      { title: "Planned the next phase", body: "Analytics and feedback shaped a roadmap for check-ins, payments and retention features." },
    ],
    outcome:
      "A working app in members' hands, one source of truth for staff, and an agreed roadmap for the phases that follow.",
    metrics: [
      pending("[XX]", "Weeks to first release"),
      pending("[+XX%]", "Session bookings in-app"),
      pending("[XX%]", "Member adoption"),
    ],
    deliverables: [
      "Product scope and roadmap",
      "UX flows and prototypes",
      "iOS and Android build",
      "Staff admin interface",
      "Analytics setup",
      "Support plan",
    ],
    artwork: "mobile",
    gallery: [
      { variant: "mobile", caption: "Member app" },
      { variant: "browser", caption: "Staff dashboard" },
      { variant: "editorial", caption: "Prototype flows" },
    ],
    tone: "dark",
    seo: {
      title: "Fitness app development — case study",
      description:
        "Scoping and shipping a first version of a gym booking and operations app in twelve weeks.",
    },
  },
  {
    slug: "cafe-brand",
    number: "06",
    client: "[CLIENT NAME]",
    title: "A café people could describe to a friend",
    category: "Content",
    industry: "Food & Beverage",
    year: "[YEAR]",
    services: ["Brand identity", "Social media", "Content"],
    summary:
      "A local café with a loyal regular crowd and an Instagram feed that made it look like every other coffee shop.",
    statement: "The room had character. The feed didn't.",
    challenge:
      "Content was shot on the fly, filtered differently each week, and captioned with generic promotions. New footfall depended on passing traffic and word of mouth that had no visual cue.",
    opportunity:
      "A consistent visual language, a shooting routine and a content mix built around the people and the ritual of the space would make the café memorable and shareable.",
    approach: [
      { title: "Found the story", body: "The most interesting thing about the café was not the coffee — it was the regulars. That became the content spine." },
      { title: "Set the visual rules", body: "One palette, one grid, one shooting style so the feed read as a single place." },
      { title: "Built a routine", body: "A monthly shoot day and a repeatable content mix removed the daily panic posting." },
      { title: "Made ordering easy", body: "Contactless menu, WhatsApp ordering and a simple map link removed friction between seeing and visiting." },
    ],
    outcome:
      "A feed that looks like the place it belongs to, and a content routine the team can run without an agency in the room.",
    metrics: [
      pending("[+XX%]", "Follower growth"),
      pending("[+XX%]", "Profile-to-visit rate"),
      pending("[XX]", "User-generated posts"),
    ],
    deliverables: [
      "Content strategy",
      "Visual guidelines",
      "Monthly shoot day",
      "Social templates",
      "Digital menu and ordering flow",
      "Performance review",
    ],
    artwork: "campaign",
    gallery: [
      { variant: "campaign", caption: "Social content set" },
      { variant: "poster", caption: "Menu identity" },
      { variant: "editorial", caption: "Interior photography direction" },
    ],
    tone: "light",
    seo: {
      title: "Café brand content — case study",
      description:
        "Content strategy, visual language and a sustainable social routine for an independent café.",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export const workFilters = [
  "All",
  "Brand",
  "Digital",
  "Search",
  "Performance",
  "Content",
  "Web",
] as const;

export const workSlugs = caseStudies.map((study) => study.slug);
export const featuredCaseStudy =
  caseStudies.find((study) => study.featured) ?? caseStudies[0];
