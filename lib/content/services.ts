import type { ArtworkVariant } from "./types";

export type Service = {
  slug: string;
  /** Capability group this service belongs to. */
  group: string;
  number: string;
  title: string;
  /** Small line used in lists. */
  summary: string;
  /** Service page hero headline (may contain a line break). */
  headline: string;
  intro: string;
  problem: {
    lead: string;
    body: string;
    points: string[];
  };
  capabilities: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
  artwork: ArtworkVariant;
  relatedWork: string[];
  seo: {
    title: string;
    description: string;
  };
};

export type CapabilityGroup = {
  number: string;
  title: string;
  slug: string;
  description: string;
  items: string[];
  artwork: ArtworkVariant;
};

/**
 * Six capability groups — the homepage "What we do" list and the
 * /services overview. Keep the wording outcome-led, not deliverable-led.
 */
export const capabilityGroups: CapabilityGroup[] = [
  {
    number: "01",
    title: "Brand",
    slug: "branding",
    description:
      "What you stand for, how you look, how you sound — decided once, applied everywhere.",
    items: ["Positioning", "Visual identity", "Brand systems", "Campaign identity"],
    artwork: "poster",
  },
  {
    number: "02",
    title: "Digital",
    slug: "website-development",
    description:
      "Websites and product experiences that load fast, read clearly and ask for the sale properly.",
    items: ["Website design", "Development", "Landing pages", "Web applications"],
    artwork: "browser",
  },
  {
    number: "03",
    title: "Content",
    slug: "content-marketing",
    description:
      "A content system you can keep feeding — social, campaigns, video, copy that sounds like you.",
    items: ["Content strategy", "Social media", "Copywriting", "Creative production"],
    artwork: "campaign",
  },
  {
    number: "04",
    title: "Performance",
    slug: "google-ads",
    description:
      "Paid media that respects the budget: tighter targeting, better hooks, fewer wasted clicks.",
    items: ["Google Ads", "Meta Ads", "Landing pages", "Conversion tracking"],
    artwork: "signal",
  },
  {
    number: "05",
    title: "Search",
    slug: "seo",
    description:
      "Show up when it matters — on Google, on Maps, and in the questions people actually type.",
    items: ["SEO", "Local SEO", "Content strategy", "Technical fixes"],
    artwork: "search",
  },
  {
    number: "06",
    title: "Technology",
    slug: "app-development",
    description:
      "The plumbing behind growth: apps, integrations, automation and internal tools.",
    items: ["Mobile apps", "Web applications", "Marketing automation", "CRM integrations"],
    artwork: "mobile",
  },
];

export const services: Service[] = [
  {
    slug: "branding",
    group: "Brand",
    number: "01",
    title: "Branding",
    summary: "Positioning, identity and a system the whole team can use.",
    headline: "A brand people can describe\nfrom memory.",
    intro:
      "Most businesses look like their category. We decide what makes yours worth remembering, then build the identity to carry it.",
    problem: {
      lead: "The work is good. The brand doesn't say so yet.",
      body: "When a business grows by referrals and word of mouth, its identity usually lags behind the reality of the company. Mixed logos, colours picked in a hurry, four different tones of voice depending on who is posting.",
      points: [
        "Every designer, printer and freelancer interprets the brand differently",
        "The website undersells what the business actually delivers",
        "New competitors look sharper while doing less",
        "There is no agreed answer to \"what makes us different?\"",
      ],
    },
    capabilities: [
      {
        title: "Positioning & strategy",
        body: "We work through the market, the audience and the offer until there is one clear sentence about why you are worth choosing.",
      },
      {
        title: "Visual identity",
        body: "Wordmark, colour, type, layout rules and the small details that make work recognisable at a glance.",
      },
      {
        title: "Verbal identity",
        body: "How you talk about the business — headlines, boilerplate, tone, the phrases that should (and shouldn't) appear.",
      },
      {
        title: "Brand guidelines",
        body: "A practical document your designers, printers and content team can follow without asking you every time.",
      },
      {
        title: "Campaign identity",
        body: "A flexible system for launches and seasonal campaigns that stays on-brand without repeating last year's creatives.",
      },
      {
        title: "Rollout support",
        body: "Signage, packaging, decks, stationery, social templates — the brand applied to the places your customers actually meet it.",
      },
    ],
    steps: [
      { title: "Discovery", body: "Founder interviews, sales conversations, competitor review, audience research." },
      { title: "Positioning", body: "We define the sharpest true story about the business and pressure-test it against the market." },
      { title: "Design", body: "Two or three distinct directions, developed properly rather than twenty variations of one idea." },
      { title: "Systemise", body: "The chosen route becomes rules, assets and templates, not a single logo file." },
      { title: "Roll out", body: "We help you launch the identity across website, social, print and signage." },
    ],
    deliverables: [
      "Positioning document",
      "Primary wordmark + logo suite",
      "Colour and typography system",
      "Brand guidelines (PDF)",
      "Social and content templates",
      "Ready-to-use asset library",
    ],
    faqs: [
      { q: "How long does a rebrand take?", a: "A focused identity usually takes four to seven weeks from kickoff to handover, depending on how quickly decisions are made on your side." },
      { q: "Do we lose everything we've built?", a: "No. Brand equity — the name, the recognition, the goodwill — should be protected. Usually we are sharpening the system around it, not throwing it away." },
      { q: "Who needs to be involved?", a: "The people who make decisions. One or two approvers keeps things moving; a committee slows the work and blurs the outcome." },
      { q: "Can you work with our existing logo?", a: "Yes. Sometimes the answer is a refined system rather than a new mark, and we will tell you that if it's true." },
      { q: "What do you need from us to start?", a: "A conversation about the business, access to any existing material, and honesty about where you want to be in two years." },
    ],
    artwork: "poster",
    relatedWork: ["monterey-travel", "northline-realty"],
    seo: {
      title: "Branding & Identity Studio in Zirakpur",
      description:
        "Brand strategy, positioning, visual identity and brand guidelines for businesses in Zirakpur, Chandigarh and across India. Built by The Brand Hoods.",
    },
  },
  {
    slug: "website-development",
    group: "Digital",
    number: "02",
    title: "Website Development",
    summary: "Fast, clear websites built around what the buyer needs to decide.",
    headline: "A website that earns\nthe click it just got.",
    intro:
      "Design, copy and engineering in one build — so the site loads quickly, reads clearly and gives people an obvious next step.",
    problem: {
      lead: "Traffic isn't the problem. The website is.",
      body: "Most business websites are brochures built for the owner, not pages built for a buyer who is comparing three options in two tabs.",
      points: [
        "Visitors can't tell what you do within five seconds",
        "Forms ask for too much, so nobody fills them",
        "Slow, heavy pages that lose mobile visitors before they load",
        "No way for the team to update content without a developer",
      ],
    },
    capabilities: [
      { title: "Website strategy", body: "Page-by-page planning: what each page is for, who reads it and what it should make them do." },
      { title: "UI and content design", body: "Layout, typography and copy designed together. Design without words is decoration." },
      { title: "Engineering", body: "Modern front-end builds with clean markup, fast rendering and no unnecessary dependencies." },
      { title: "Landing pages", body: "Campaign-specific pages that match the ad promise and remove every distraction." },
      { title: "Web applications", body: "Dashboards, portals, booking flows and internal tools that need real logic behind them." },
      { title: "Maintenance & care", body: "Updates, monitoring and improvements after launch, because launch is not the end of the project." },
    ],
    steps: [
      { title: "Plan", body: "Sitemap, page goals, conversion paths and technical requirements." },
      { title: "Write & design", body: "Wireframes and copy together, then visual design on the real content." },
      { title: "Build", body: "Responsive build, CMS wiring, analytics, accessible components, performance budget." },
      { title: "Test", body: "Devices, browsers, forms, speed, SEO basics and accessibility before anything ships." },
      { title: "Launch & improve", body: "We ship, monitor behaviour and keep improving the pages that carry the traffic." },
    ],
    deliverables: [
      "Sitemap and page briefs",
      "Responsive designs",
      "Complete front-end + CMS build",
      "Contact and lead capture flow",
      "Analytics and conversion tracking",
      "Speed and SEO pass",
    ],
    faqs: [
      { q: "How long does a website take?", a: "A focused marketing site is usually six to ten weeks. Larger builds with custom functionality are scoped after the planning stage." },
      { q: "Will we be able to edit it ourselves?", a: "Yes. Content is structured so your team can update text, images and posts without touching code." },
      { q: "Do you redesign or rebuild?", a: "Both. If the structure and content are sound we redesign; if the foundation is the problem we rebuild — and we'll tell you which one you actually need." },
      { q: "Do you handle hosting and domains?", a: "We can set up and manage hosting, domains and email, or work with your existing providers." },
      { q: "What about SEO?", a: "Technical SEO, structured data and page-level metadata are part of the build. Ongoing content and search work is a separate engagement." },
      { q: "Can you improve an existing site?", a: "Yes — audits, performance fixes, conversion improvements and new pages on an existing build are all common work for us." },
    ],
    artwork: "browser",
    relatedWork: ["monterey-travel", "carrine-clinic"],
    seo: {
      title: "Website Design & Development Company in Zirakpur",
      description:
        "Website design, development and landing pages built for speed, clarity and conversions. Chandigarh Tricity and remote clients. The Brand Hoods.",
    },
  },
  {
    slug: "app-development",
    group: "Technology",
    number: "03",
    title: "App Development",
    summary: "Mobile apps and internal tools without the enterprise overhead.",
    headline: "Software that solves\na real day-to-day problem.",
    intro:
      "Apps are expensive when the scope is vague. We start with the process that is broken, then build the smallest thing that fixes it.",
    problem: {
      lead: "The idea is clear. The scope isn't.",
      body: "App projects usually fail in definition, not development — a long build without a launch, features nobody asked for, and a team that still runs the business in spreadsheets.",
      points: [
        "Feature lists written by committee",
        "No prioritisation between phase one and phase one hundred",
        "Apps built without the operational workflow they were meant to fix",
        "No plan for maintenance after version one ships",
      ],
    },
    capabilities: [
      { title: "Product scoping", body: "We turn the idea into a version one that can ship and prove something." },
      { title: "UX and interface design", body: "Flows and screens designed for real usage, not for a portfolio shot." },
      { title: "Mobile development", body: "Cross-platform builds for iOS and Android with a shared codebase where it makes sense." },
      { title: "Web applications", body: "Customer portals, dashboards, booking systems and admin tools." },
      { title: "Integrations", body: "Payments, CRM, WhatsApp, email, analytics and the systems you already use." },
      { title: "Support", body: "Releases, monitoring, bug fixes and a roadmap for what comes next." },
    ],
    steps: [
      { title: "Map", body: "Who uses it, what they do today, and what version one has to achieve." },
      { title: "Prototype", body: "Clickable flows so decisions are made before code is written." },
      { title: "Build", body: "Short cycles, working builds, demos as the product takes shape." },
      { title: "Test", body: "Real devices, real users, edge cases and load." },
      { title: "Release & iterate", body: "Ship, watch usage, then improve what the data says needs improving." },
    ],
    deliverables: [
      "Product scope document",
      "Interactive prototype",
      "iOS + Android build (or web app)",
      "Admin interface",
      "Integration setup",
      "Release and maintenance plan",
    ],
    faqs: [
      { q: "How much does an app cost?", a: "It depends entirely on scope. We define a narrow version one first so you can see real cost, timeline and value before committing to the full roadmap." },
      { q: "Native or cross-platform?", a: "Cross-platform covers most business apps and costs less. If performance or device features demand native, we build native." },
      { q: "Do you maintain apps you built?", a: "Yes, via a monthly support agreement covering updates, fixes and small improvements." },
      { q: "Can you take over an unfinished build?", a: "Often yes. We audit the codebase first and tell you honestly whether to continue or restart." },
      { q: "How long to first release?", a: "A focused version one typically ships in eight to fourteen weeks." },
    ],
    artwork: "mobile",
    relatedWork: ["vaultfit-app"],
    seo: {
      title: "Mobile & Web App Development in Zirakpur",
      description:
        "Product scoping, UX and app development for businesses in Zirakpur and Chandigarh. Mobile apps, portals and internal tools by The Brand Hoods.",
    },
  },
  {
    slug: "seo",
    group: "Search",
    number: "04",
    title: "SEO",
    summary: "Earn the searches that already have buying intent behind them.",
    headline: "Show up when someone\nis already looking.",
    intro:
      "SEO is not a volume game. It is being genuinely findable for the handful of searches that decide whether a business gets called.",
    problem: {
      lead: "You rank for the wrong searches.",
      body: "Plenty of agencies report impressions and positions. Few report whether the phone rang. Local businesses usually need three things fixed before anything else matters.",
      points: [
        "Google Business Profile set up once and never maintained",
        "Service pages that never say where you work or who you work with",
        "Blog posts written for keywords people never actually search",
        "No connection between rankings and enquiries",
      ],
    },
    capabilities: [
      { title: "Search strategy", body: "The searches worth having, mapped to the pages that should answer them." },
      { title: "Technical SEO", body: "Site structure, indexation, speed, structured data and the boring fixes that make everything else work." },
      { title: "Local SEO", body: "Google Business Profile, local pages, reviews and the signals that decide the map pack." },
      { title: "Content", body: "Pages and articles that answer real questions, written for humans and structured for search." },
      { title: "Internal linking", body: "Making the important pages the pages search engines trust most." },
      { title: "Reporting", body: "Rankings, traffic, and the enquiries attributed to organic search — no vanity dashboards." },
    ],
    steps: [
      { title: "Audit", body: "Technical health, current visibility, competitors and the content you already have." },
      { title: "Prioritise", body: "The fixes with the fastest commercial impact first, not the longest checklist." },
      { title: "Fix", body: "Technical work, page-level optimisation and local profile setup." },
      { title: "Publish", body: "Pages and articles built around intent, on a realistic schedule." },
      { title: "Measure & refine", body: "Track enquiries by page and query, then double down on what converts." },
    ],
    deliverables: [
      "SEO audit and roadmap",
      "Technical fixes implemented",
      "Optimised service pages",
      "Google Business Profile optimisation",
      "Content calendar",
      "Monthly performance report",
    ],
    faqs: [
      { q: "How long until we see results?", a: "Technical and local fixes often move within weeks. Content-led growth compounds over three to six months — anyone promising faster is guessing." },
      { q: "Do you guarantee first-page rankings?", a: "No, and you should be sceptical of anyone who does. We commit to the work, the transparency and the reporting." },
      { q: "Is local SEO different from SEO?", a: "It's a focused version of it. For businesses serving a city or region, local signals decide a large share of the outcome." },
      { q: "Do you write the content?", a: "Yes, if you want us to. We interview your team so the articles sound like the business, not like a content farm." },
      { q: "What do you need access to?", a: "Your website, analytics, Search Console and Google Business Profile. We work with your developers if you have them." },
    ],
    artwork: "search",
    relatedWork: ["carrine-clinic", "northline-realty"],
    seo: {
      title: "SEO Agency in Zirakpur & Chandigarh",
      description:
        "Search strategy, technical SEO and local SEO for businesses in Zirakpur, Chandigarh, Mohali and Panchkula. Transparent reporting from The Brand Hoods.",
    },
  },
  {
    slug: "google-ads",
    group: "Performance",
    number: "05",
    title: "Google Ads",
    summary: "Search and shopping campaigns built to be measured, not just run.",
    headline: "Pay for the clicks\nthat can become customers.",
    intro:
      "Google Ads punishes laziness. Tighter structure, honest keywords and landing pages that match the promise are where the return lives.",
    problem: {
      lead: "Spend going up. Enquiries flat.",
      body: "Accounts usually degrade quietly: broad match drift, one landing page for every campaign, conversions counted twice, and no idea which spend produced revenue.",
      points: [
        "Broad keywords eating budget on searches you'd never sell to",
        "Ads sending traffic to the homepage instead of a relevant page",
        "Conversion tracking that counts the wrong things",
        "No clear line between cost per lead and cost per customer",
      ],
    },
    capabilities: [
      { title: "Account strategy", body: "Campaign structure, keyword intent groups and budget allocation by opportunity." },
      { title: "Search campaigns", body: "High-intent search terms, tight ad groups, negative keyword hygiene." },
      { title: "Performance Max & Shopping", body: "Feed quality, asset groups and audience signals for retail and D2C." },
      { title: "Landing pages", body: "Pages built for the exact promise of the ad — the highest-leverage fix in most accounts." },
      { title: "Tracking", body: "Conversion setup, call tracking and offline conversions so optimisation targets the truth." },
      { title: "Reporting", body: "Spend, cost per lead, lead quality and the changes being made next month." },
    ],
    steps: [
      { title: "Diagnose", body: "Account history, wasted spend, tracking accuracy and competitor activity." },
      { title: "Rebuild", body: "Structure, keywords, negatives, ad copy and extensions." },
      { title: "Fix the other side", body: "Landing page and form improvements — ads can't outrun a weak page." },
      { title: "Optimise", body: "Weekly management, budget shifts, bid strategy refinement and creative testing." },
      { title: "Scale", body: "Expand where it is profitable and cut what never paid back." },
    ],
    deliverables: [
      "Account audit",
      "Rebuilt campaign structure",
      "Ad copy and assets",
      "Conversion tracking setup",
      "Landing page recommendations or build",
      "Monthly performance report",
    ],
    faqs: [
      { q: "What budget do we need?", a: "Enough to gather data in your market. In most Tricity categories that means a meaningful monthly spend plus management — we'll tell you honestly if the budget is too small to work." },
      { q: "How is management priced?", a: "A flat monthly fee, or a percentage of spend for larger accounts. No long lock-ins." },
      { q: "Do you run Meta ads too?", a: "Yes — most businesses benefit from search and social together, at different points in the funnel." },
      { q: "How fast does it work?", a: "Search campaigns can produce enquiries in the first two weeks. Profitable scale takes a couple of months of testing." },
      { q: "Who owns the account?", a: "You do. Always. We work inside your Google Ads account." },
    ],
    artwork: "signal",
    relatedWork: ["northline-realty", "vaultfit-app"],
    seo: {
      title: "Google Ads Management in Zirakpur & Chandigarh",
      description:
        "Google Ads strategy, search and Performance Max campaigns with landing pages and conversion tracking. Managed by The Brand Hoods, Zirakpur.",
    },
  },
  {
    slug: "meta-ads",
    group: "Performance",
    number: "06",
    title: "Meta Ads",
    summary: "Creative-led Facebook and Instagram campaigns that hold attention.",
    headline: "Creative decides the\nresult. We start there.",
    intro:
      "On Meta the targeting is mostly solved. The difference between a good and a bad month is usually the idea — and how many of them you're willing to test.",
    problem: {
      lead: "Boosting posts is not a strategy.",
      body: "Most underperforming Meta accounts have the same three problems: one creative running for months, audiences stacked with irrelevant settings, and a form that asks for a phone number before it has earned trust.",
      points: [
        "Fatigue — the same creative to the same people until it dies",
        "No clear offer for a cold audience",
        "Instant forms that generate junk leads",
        "No follow-up process once the enquiry arrives",
      ],
    },
    capabilities: [
      { title: "Creative strategy", body: "Hooks, angles and formats mapped to how your customers actually decide." },
      { title: "Campaign structure", body: "Consolidated structure that lets the algorithm learn instead of fighting it." },
      { title: "Ad production", body: "Static, carousel, reel and UGC-style creative produced on a steady testing cadence." },
      { title: "Audience work", body: "Broad, interest and retargeting setups that match the offer and the budget." },
      { title: "Lead quality", body: "Better forms, qualification questions and routing so sales gets usable leads." },
      { title: "Reporting", body: "Cost per lead, cost per qualified lead and creative-level performance." },
    ],
    steps: [
      { title: "Research", body: "Offers, objections, competitor creative and the angles nobody in your category is using." },
      { title: "Test", body: "Structured creative testing with enough volume per variant to learn something." },
      { title: "Scale", body: "Push budget behind winners and refresh before fatigue kills them." },
      { title: "Capture", body: "Landing page, form and follow-up improvements to lift close rate." },
      { title: "Report", body: "What ran, what it cost, what it produced and what's next." },
    ],
    deliverables: [
      "Creative strategy and concepts",
      "Ad production (static and video edits)",
      "Campaign build and structure",
      "Pixel and conversion events",
      "Lead handling recommendations",
      "Monthly reporting",
    ],
    faqs: [
      { q: "Who creates the ads?", a: "We do. Creative production is part of the engagement — running ads without it is a race to the bottom on cost." },
      { q: "Do we need to be on camera?", a: "It helps, but it isn't essential. We plan formats that fit how comfortable your team is in front of one." },
      { q: "How many creatives per month?", a: "Enough to keep testing honestly. Usually several concepts per campaign cycle, with variations on the winners." },
      { q: "Can Meta ads work for B2B?", a: "Yes, particularly for awareness and retargeting, though lead costs will be higher than consumer categories." },
      { q: "What if the offer isn't competitive?", a: "That's usually the real problem. We'll say so before spending your money on ads that can't win." },
    ],
    artwork: "campaign",
    relatedWork: ["vaultfit-app", "carrine-clinic"],
    seo: {
      title: "Meta Ads Agency in Zirakpur & Chandigarh",
      description:
        "Facebook and Instagram ad campaigns with creative built in. Testing, scaling and lead quality work from The Brand Hoods in Zirakpur.",
    },
  },
  {
    slug: "social-media",
    group: "Content",
    number: "07",
    title: "Social Media",
    summary: "A content system that can survive a busy month.",
    headline: "Consistency beats\nbursts of effort.",
    intro:
      "One video that does well is luck. A system that produces useful content every week is a strategy — and it compounds.",
    problem: {
      lead: "Posting daily and nobody is watching.",
      body: "Most business accounts post what the business wants to say, to an audience that scrolls past it. Activity is high, meaning is low.",
      points: [
        "Content created in panic rather than planned in advance",
        "Every post trying to sell something",
        "Reels, carousels and stories produced without a reason",
        "No look at what the audience actually responds to",
      ],
    },
    capabilities: [
      { title: "Content strategy", body: "What you post, for whom, in what mix, and what it is supposed to achieve." },
      { title: "Editorial calendar", body: "A rolling plan your team and ours can both work from." },
      { title: "Design & video", body: "Templates, carousels, reels and shoot days produced to a consistent visual standard." },
      { title: "Copywriting", body: "Captions and hooks in your voice, not in agency voice." },
      { title: "Community", body: "Replies, DMs and comment handling so interest doesn't sit unanswered." },
      { title: "Reporting", body: "Reach, saves, profile visits and enquiries — the metrics that map to business outcomes." },
    ],
    steps: [
      { title: "Audit", body: "Current content, competitors, audience behaviour and what's actually working." },
      { title: "Plan", body: "Pillars, formats, cadence and a monthly calendar." },
      { title: "Produce", body: "Batches of design and video so nothing is made the night before." },
      { title: "Publish", body: "Scheduling, captions, hashtags, stories and community replies." },
      { title: "Review", body: "Monthly performance review and a plan for the next cycle." },
    ],
    deliverables: [
      "Content strategy and pillars",
      "Monthly calendar",
      "Designed posts and carousels",
      "Short-form video edits",
      "Caption copy",
      "Monthly performance review",
    ],
    faqs: [
      { q: "Do you shoot content on site?", a: "Yes, for local clients. We plan shoot days to capture a month of raw material in a few hours." },
      { q: "How many posts per month?", a: "Determined by the plan, not by an arbitrary number. Quality and consistency matter more than volume." },
      { q: "Can you work with our in-house team?", a: "Yes. Many clients keep production in-house and use us for strategy, templates and reporting." },
      { q: "Which platforms?", a: "Instagram and Facebook for most businesses, LinkedIn for B2B, YouTube for search-friendly video." },
      { q: "Do you handle comments and DMs?", a: "We can, with an agreed response style and escalation path for leads." },
    ],
    artwork: "campaign",
    relatedWork: ["vaultfit-app", "meraki-cafe"],
    seo: {
      title: "Social Media Marketing Agency in Zirakpur",
      description:
        "Social media strategy, content production and management for businesses in Zirakpur, Chandigarh and Mohali. The Brand Hoods.",
    },
  },
  {
    slug: "content-marketing",
    group: "Content",
    number: "08",
    title: "Content Marketing",
    summary: "Copy, campaigns and content that carry the strategy.",
    headline: "Content that answers\nreal questions.",
    intro:
      "Good content does a job: it explains, it persuades, it removes doubt. Everything else is filler pretending to be marketing.",
    problem: {
      lead: "Lots of content. No argument.",
      body: "Blogs written to fill a calendar, brochures rewritten as web pages, and a brand voice that changes depending on who wrote this week's post.",
      points: [
        "Content that describes the service but never the outcome",
        "No connection between content and the buying decision",
        "Inconsistent voice across web, social and sales decks",
        "No plan for repurposing what already works",
      ],
    },
    capabilities: [
      { title: "Content strategy", body: "Audience questions, buying stages and the content types that answer them." },
      { title: "Copywriting", body: "Web copy, campaign copy, email and sales collateral written to sound like you." },
      { title: "Editorial", body: "Articles and guides that build credibility and earn search traffic." },
      { title: "Brand voice", body: "Tone and vocabulary rules so every writer sounds like the same company." },
      { title: "Campaign concepting", body: "Ideas and messaging for launches, offers and seasonal pushes." },
      { title: "Repurposing", body: "One strong idea turned into a page, a carousel, a reel and an email — not four unrelated posts." },
    ],
    steps: [
      { title: "Listen", body: "Sales calls, customer questions, reviews and search data — where content ideas actually come from." },
      { title: "Plan", body: "Editorial themes mapped to funnel stages and keywords." },
      { title: "Write", body: "Drafting, editing, and factual review with your team." },
      { title: "Publish", body: "Layout, imagery and internal linking so the piece is findable." },
      { title: "Reuse", body: "Turning each piece into social, email and sales-ready formats." },
    ],
    deliverables: [
      "Content strategy",
      "Editorial calendar",
      "Web and campaign copy",
      "Articles and guides",
      "Brand voice guidelines",
      "Repurposing plan",
    ],
    faqs: [
      { q: "Do you use AI to write?", a: "Tools are used for research and structure. Every published piece is written and edited by a person who has spoken to your team." },
      { q: "How much content per month?", a: "Usually one substantial piece plus supporting social and email assets — sustainable, not a flood of thin pages." },
      { q: "Can you write for a technical audience?", a: "Yes, with access to your experts. We interview, then translate." },
      { q: "Who publishes it?", a: "We can publish directly, or hand over ready-to-post assets." },
      { q: "Does content marketing replace ads?", a: "No. It compounds alongside performance work, and most clients run both." },
    ],
    artwork: "editorial",
    relatedWork: ["meraki-cafe", "monterey-travel"],
    seo: {
      title: "Content Marketing & Copywriting in Zirakpur",
      description:
        "Content strategy, copywriting and editorial for businesses in Zirakpur and the Chandigarh Tricity. Written to be useful, not to fill a calendar.",
    },
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const serviceSlugs = services.map((service) => service.slug);
