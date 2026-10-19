import type { ArtworkVariant } from "./types";

/**
 * Insights content.
 *
 * This module is the single source of truth for the editorial section.
 * `Block` mirrors a Portable Text shape, so swapping this file for a
 * Sanity (or any CMS) query later is a data-layer change rather than a
 * component rewrite — see the README for the field mapping.
 */

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; title: string; text: string };

export type Author = {
  slug: string;
  name: string;
  role: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  body: Block[];
  featured?: boolean;
  artwork: ArtworkVariant;
  seo: { title: string; description: string };
};

export const authors: Author[] = [
  { slug: "arjun", name: "Arjun", role: "Founder & CEO" },
  { slug: "studio", name: "The Brand Hoods", role: "Studio" },
];

export const categories = [
  "Brand",
  "Digital",
  "SEO",
  "Paid Media",
  "Social",
  "Growth",
  "Strategy",
  "Local Business",
] as const;

export const posts: Post[] = [
  {
    slug: "why-local-businesses-look-the-same",
    title: "Why most local businesses look the same online",
    excerpt:
      "Template websites, borrowed colour palettes and the same three stock photographs. Here's the mechanism behind it — and the cheapest way out.",
    category: "Brand",
    author: "arjun",
    publishedAt: "2026-09-18",
    updatedAt: "2026-09-18",
    readTime: "5 min read",
    featured: true,
    artwork: "poster",
    body: [
      {
        type: "p",
        text: "Take six businesses in the same category within a ten kilometre radius, put their websites side by side and remove the logos. In most markets, nobody could tell them apart. Same hero image of a smiling team, same three services in the same three cards, same blue-and-white palette borrowed from a theme.",
      },
      { type: "h2", text: "It isn't laziness. It's incentives." },
      {
        type: "p",
        text: "Template platforms sell speed, and speed is what a business owner buying their first website actually needs. The problem is that the same template gets sold to every competitor in the same postcode, and the only differentiator left is the price in the header.",
      },
      {
        type: "ul",
        items: [
          "The theme decides the layout before anyone decides the message",
          "Copy is written to fill the sections the theme provides",
          "Photography is chosen from a stock library because a shoot feels expensive",
          "Distinctive decisions are treated as risks rather than advantages",
        ],
      },
      { type: "h2", text: "Differentiation is cheaper than it sounds" },
      {
        type: "p",
        text: "You do not need a rebrand to stop looking generic. Three changes carry most of the weight: a stated point of view, real photography of the actual place and people, and a consistent colour and type system applied everywhere — website, signage, invoices, Instagram.",
      },
      {
        type: "callout",
        title: "Test it in one line",
        text: "Write down what you do in one sentence. Then ask a customer to repeat it back. If they can't, the problem isn't the design.",
      },
      { type: "h2", text: "Start with what only you can say" },
      {
        type: "p",
        text: "The most useful branding exercise for a local business takes an afternoon: list the things that are true about you that are not true about the business two streets away. Opening hours nobody else keeps. A specialist on staff. A way of working customers mention in reviews. That list is your raw material — and none of it appears in a template.",
      },
      {
        type: "p",
        text: "Once you have it, the design work gets easier and cheaper, because you're no longer asking a designer to invent a personality. You're asking them to arrange facts.",
      },
    ],
    seo: {
      title: "Why most local businesses look the same online",
      description:
        "Template websites and borrowed palettes make every local competitor look identical. What causes it, and the cheapest way to stand out.",
    },
  },
  {
    slug: "what-makes-a-business-website-convert",
    title: "What makes a business website actually convert?",
    excerpt:
      "Conversion isn't a button colour. It's the sum of clarity, relevance and the removal of every unnecessary decision between the visitor and the enquiry.",
    category: "Digital",
    author: "studio",
    publishedAt: "2026-09-04",
    updatedAt: "2026-09-04",
    readTime: "6 min read",
    artwork: "browser",
    body: [
      {
        type: "p",
        text: "Most businesses measure their website by how it looks. Visitors measure it by whether they can figure out, in about five seconds, what you do, who it's for and what happens next. Those are different tests, and the second one is the one that pays.",
      },
      { type: "h2", text: "1. The five-second answer" },
      {
        type: "p",
        text: "A visitor should be able to say what you do, who you help and what to do next without scrolling or reading a paragraph about your values. If your headline is a slogan rather than a statement, the visitor is doing work that you should have done for them.",
      },
      { type: "h2", text: "2. Relevance beats persuasion" },
      {
        type: "p",
        text: "Specificity converts. \"Dental implants in Zirakpur, fixed in one visit\" outperforms \"world-class dental care\" every time, because it matches the thought the visitor arrived with. The job of the page is to confirm that they're in the right place before asking for anything.",
      },
      { type: "h2", text: "3. One obvious next step" },
      {
        type: "ul",
        items: [
          "One primary action per page — enquiry, booking, call, or WhatsApp",
          "Secondary options available but visually quieter",
          "A form that asks for the minimum, then follows up for detail",
          "Contact details visible without opening a menu",
        ],
      },
      {
        type: "callout",
        title: "Common failure",
        text: "Five equally loud calls to action. When everything is emphasised, nothing is, and visitors default to the back button.",
      },
      { type: "h2", text: "4. Speed is a conversion feature" },
      {
        type: "p",
        text: "On mobile connections, every extra second of load time costs you a share of visitors before they see anything. That's not a technical vanity metric — it's the difference between the page being read and the page being abandoned. Compress the images, reduce the scripts, drop the carousel.",
      },
      { type: "h2", text: "5. Proof where the doubt appears" },
      {
        type: "p",
        text: "Testimonials, project examples and numbers work best placed next to the moment of hesitation — usually just before the form. Proof scattered in a random section at the bottom rarely does anything.",
      },
      {
        type: "p",
        text: "None of this requires a redesign every year. It requires reading your own pages as a stranger, then fixing the three places where a stranger would get stuck.",
      },
    ],
    seo: {
      title: "What makes a business website actually convert?",
      description:
        "Five things that decide whether a business website converts: clarity, relevance, one next step, page speed and proof at the point of doubt.",
    },
  },
  {
    slug: "why-your-business-isnt-showing-on-google-maps",
    title: "Why your business isn't showing on Google Maps",
    excerpt:
      "The map pack is decided by a small set of signals that most businesses never set up properly. Here's the checklist we run first.",
    category: "SEO",
    author: "studio",
    publishedAt: "2026-08-21",
    updatedAt: "2026-08-21",
    readTime: "5 min read",
    artwork: "search",
    body: [
      {
        type: "p",
        text: "For a local business, the map pack is usually the highest-intent real estate on the internet. Someone searching \"dentist near me\" or \"hotel in Zirakpur\" is close to acting. If you're not in those three results, you're paying for attention that your competitor gets free.",
      },
      { type: "h2", text: "The four signals that decide it" },
      {
        type: "ul",
        items: [
          "Relevance — does your profile clearly describe the services you offer?",
          "Distance — how close you are to the searcher, which you can't change",
          "Prominence — reviews, mentions, links and overall online presence",
          "Completeness — hours, photos, attributes, posts, responses to reviews",
        ],
      },
      { type: "h2", text: "The checklist we run first" },
      {
        type: "ul",
        items: [
          "Primary category set correctly — this is the single biggest lever",
          "Services added individually rather than lumped into a description",
          "Real photos of the location and team, refreshed monthly",
          "Hours accurate, including holidays",
          "A review request habit — not a one-off campaign",
          "Every review answered, including the difficult ones",
          "Consistent name, address and phone number across your website and directories",
        ],
      },
      {
        type: "callout",
        title: "A note on reviews",
        text: "Reviews are not just social proof — review volume and recency are ranking signals. Ten recent reviews beat forty from three years ago.",
      },
      { type: "h2", text: "The website has to cooperate" },
      {
        type: "p",
        text: "Your profile is only half the picture. The pages it links to should name the city, the services and the questions customers ask — and carry structured data so search engines can read them without guessing. A page that never mentions where you work is a page that will not rank for local searches.",
      },
      {
        type: "p",
        text: "Fix the profile first. It's free, it's fast, and for most local businesses it produces the first visible movement in a matter of weeks.",
      },
    ],
    seo: {
      title: "Why your business isn't showing on Google Maps",
      description:
        "The signals that decide local map pack visibility, and the checklist most businesses skip: categories, services, photos, reviews and structured pages.",
    },
  },
  {
    slug: "why-posting-every-day-isnt-a-social-strategy",
    title: "Why posting every day isn't a social strategy",
    excerpt:
      "Volume without a point of view just trains people to scroll past you faster. What to decide before you decide your posting schedule.",
    category: "Social",
    author: "studio",
    publishedAt: "2026-08-07",
    updatedAt: "2026-08-07",
    readTime: "4 min read",
    artwork: "campaign",
    body: [
      {
        type: "p",
        text: "A business posts daily for three months, gains a few hundred followers, and sees no change in enquiries. The conclusion is usually \"social doesn't work for us\". More often, the content was simply interchangeable with everything else in the feed.",
      },
      { type: "h2", text: "Decide the point of view first" },
      {
        type: "p",
        text: "An account with a point of view is remembered. A café that celebrates its regulars, a clinic that explains procedures honestly, a builder that shows unfinished work — each of these is a clear editorial position that generates content almost automatically.",
      },
      { type: "h2", text: "Then pick three content types" },
      {
        type: "ul",
        items: [
          "Useful — something the audience can act on today",
          "Human — the people, the process, the place",
          "Commercial — the offer, the availability, the booking",
        ],
      },
      {
        type: "p",
        text: "Most business accounts are 90% commercial. A healthy mix is closer to half useful and human, half commercial — and the commercial posts convert better when they arrive in a feed that has already given something away.",
      },
      {
        type: "callout",
        title: "The batch fix",
        text: "One planned shoot day per month produces enough raw material for four weeks. Panic posting is a scheduling problem, not a creativity problem.",
      },
      { type: "h2", text: "Measure the right things" },
      {
        type: "p",
        text: "Likes are the least useful number on the dashboard. Saves, shares, profile visits and enquiries tell you whether the content did a job. Track those monthly and stop producing the formats that never do.",
      },
    ],
    seo: {
      title: "Why posting every day isn't a social strategy",
      description:
        "Volume alone doesn't build a social presence. How to define a point of view, mix content types and measure what matters.",
    },
  },
  {
    slug: "google-ads-vs-meta-ads-for-lead-generation",
    title: "Google Ads vs Meta Ads for lead generation",
    excerpt:
      "One captures demand, the other creates it. Most businesses need both — but in a specific order.",
    category: "Paid Media",
    author: "studio",
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
    readTime: "5 min read",
    artwork: "signal",
    body: [
      {
        type: "p",
        text: "The question comes up in almost every first meeting: Google or Meta? The honest answer is that they do different jobs, and choosing the wrong one wastes money before you learn anything.",
      },
      { type: "h2", text: "Google captures demand" },
      {
        type: "p",
        text: "Someone searches \"AC repair Zirakpur\" and clicks an ad. They already know what they want. Your job is to look trustworthy and be available. Intent is high, cost per click is high, and the campaign is usually profitable fastest.",
      },
      { type: "h2", text: "Meta creates demand" },
      {
        type: "p",
        text: "Nobody is searching for your new product. On Meta you interrupt a scroll with an idea, and the creative does almost all of the work. Cheaper reach, lower intent, more variance — and much better at building memory and retargeting people who already showed interest.",
      },
      { type: "h2", text: "The order that usually works" },
      {
        type: "ul",
        items: [
          "Start with high-intent search where the market exists",
          "Fix the landing page and the follow-up before increasing budget",
          "Add Meta for retargeting and offer-led campaigns once you know the message",
          "Use Meta creative learnings to improve search ad copy",
        ],
      },
      {
        type: "callout",
        title: "Watch the quality, not the volume",
        text: "A campaign that produces twenty enquiries a month and closes four is worse than one that produces eight and closes five. Count qualified leads, not form fills.",
      },
      {
        type: "p",
        text: "If the budget only covers one channel, start with search in a market where people are already looking, and make sure the traffic lands on a page that answers the query. That combination is the fastest route to a defensible cost per lead.",
      },
    ],
    seo: {
      title: "Google Ads vs Meta Ads for lead generation",
      description:
        "Capturing demand versus creating it: how to choose between Google and Meta ads, and the order that usually works for local businesses.",
    },
  },
  {
    slug: "marketing-isnt-the-same-as-growth",
    title: "Marketing isn't the same as growth",
    excerpt:
      "More traffic is easy to buy. Growth needs the rest of the business to hold: the offer, the sales process, the follow-up.",
    category: "Growth",
    author: "arjun",
    publishedAt: "2026-07-10",
    updatedAt: "2026-07-10",
    readTime: "5 min read",
    artwork: "editorial",
    body: [
      {
        type: "p",
        text: "We are usually called when a business wants more leads. Most of the time, leads are not the constraint. The constraint is somewhere behind the enquiry — a slow response, a confusing quote, a product that's hard to explain, or a price that hasn't been revisited in two years.",
      },
      { type: "h2", text: "Three questions before spending more" },
      {
        type: "ul",
        items: [
          "What happens in the first hour after an enquiry arrives?",
          "Out of the last twenty enquiries, how many got a clear next step?",
          "What do customers say when they choose a cheaper competitor?",
        ],
      },
      {
        type: "p",
        text: "If those answers are vague, more marketing will just make the leak bigger. Fix the follow-up and the offer first — it is usually cheaper than an ad budget increase.",
      },
      { type: "h2", text: "Attention, leads, revenue" },
      {
        type: "p",
        text: "Attention is what advertising buys. Leads are what a clear page and a good offer turn attention into. Revenue is what your sales process does with those leads. Every stage has a different owner, and blaming marketing for a sales-stage problem is how agencies and clients end up disappointed in each other.",
      },
      {
        type: "callout",
        title: "Simple test",
        text: "Double your enquiries for a month without changing anything else. If revenue doesn't move, the problem is downstream of marketing.",
      },
      { type: "h2", text: "What good growth work looks like" },
      {
        type: "p",
        text: "A growth engagement should touch the whole chain: what you say, where you say it, what happens when someone responds, and how quickly you know whether it worked. Marketing is one part of that system. Treating it as the whole system is why so many businesses spend more every year and stay the same size.",
      },
    ],
    seo: {
      title: "Marketing isn't the same as growth",
      description:
        "Why more leads rarely fixes a growth problem, and the three questions to answer before increasing spend.",
    },
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getAuthor(slug: string) {
  return authors.find((author) => author.slug === slug);
}

export const postSlugs = posts.map((post) => post.slug);
export const featuredPost = posts.find((post) => post.featured) ?? posts[0];
export const postCategories = Array.from(
  new Set(posts.map((post) => post.category)),
).sort();
