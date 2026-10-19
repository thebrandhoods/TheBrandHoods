# THE BRAND HOODS — Next.js Website Build Specification

> **Purpose:** Rebuild `thebrandhoods.com` from the ground up as a premium, modern, creative marketing-agency website using Next.js.
>
> **Important:** The current WordPress site is the source for the business's existing positioning/content. Do NOT reproduce its visual structure. The new website should feel like a completely new digital identity.
>
> **Current source website:** https://thebrandhoods.com/
>
> **Implementation target:** Production-quality Next.js application, responsive, fast, accessible, SEO-ready, CMS-driven blog, polished interactions, and no generic "AI-generated agency website" look.

---

# 1. PROJECT DIRECTION

## Core objective

Build a marketing agency website that communicates:

- creative capability
- strategic thinking
- measurable marketing
- strong digital execution
- local Zirakpur / Tricity presence
- ability to work with ambitious businesses
- modern web and technology capability
- trust without corporate stiffness

The site should NOT feel like:

- a WordPress template
- a generic SaaS landing page
- a collection of rounded cards
- an AI-generated portfolio
- a page made entirely from grids
- a website where every section is a centered heading + 3 cards
- a clone of another Zirakpur agency

The site SHOULD feel like:

- an editorial creative studio
- a digital agency with a strong point of view
- a portfolio-first creative company
- a website that moves visually as the user scrolls
- typography-led
- image-led
- confident
- slightly experimental
- premium but still approachable
- conversion-focused without being aggressive

---

# 2. SOURCE WEBSITE AUDIT

The existing Brand Hoods website currently positions the company around digital solutions, growth, engagement and conversions.

Existing homepage content includes:

- "Elevate Your Brand With Our Digital Solutions"
- social media marketing positioning
- digital marketing agency positioning
- ROI-driven strategy
- specialized marketing expertise
- transparent performance insights
- tailor-made digital solutions
- founder section featuring Arjun
- Website Development
- App Development
- Google & Meta Ads
- SEO Optimization
- Social Media Marketing
- Content Marketing
- Research & Analysis
- Strategy & Planning
- Implementation
- Analysis & Reporting
- blog/insights
- contact form

Current business details shown on the source site:

- Brand: THE BRAND HOODS
- Location: SCO 144,145 Triple C Metro, VIP RD, Zirakpur, Punjab 140603
- Phone: +91 6284840965
- Email: thebrandhoods@gmail.com
- Hours shown: Mon–Fri, 9:00–18:00

Source content should be rewritten for the new website rather than blindly copied.

Before production launch, verify all contact details, statistics, team claims, years of experience, portfolio claims, testimonials and performance numbers with the client.

---

# 3. COMPETITIVE / LOCAL MARKET OBSERVATIONS

The local Zirakpur / Tricity agency market commonly communicates:

- SEO
- Google Ads
- Meta Ads
- social media marketing
- websites
- branding
- content
- performance marketing
- local SEO
- "growth" language
- "results-driven" language
- full-service agency positioning

Examples found during research include Digital Jugaad, Creative Monk, Veiled Story, GOAT Digital Media, KG Digital Innovations, TheDigitalMouth and Pacewalk.

Use these websites as MARKET RESEARCH ONLY.

Do not copy:

- their wording
- their layouts
- their illustrations
- their exact section order
- their brand identity
- their testimonials
- their statistics
- their visual assets

Useful market patterns to borrow conceptually:

1. portfolio/case-study emphasis
2. clear service architecture
3. local Tricity relevance
4. measurable business outcomes
5. strategy/process storytelling
6. strong CTA
7. editorial typography
8. service pages that explain outcomes rather than simply listing deliverables

---

# 4. BRAND POSITIONING

## Recommended positioning

THE BRAND HOODS should be presented as:

> A creative growth partner that connects strategy, brand, content, technology and performance.

Avoid making the company sound like only an SEO agency.

Avoid making it sound like only a social-media posting company.

Avoid making it sound like a software company.

The website should communicate the intersection:

**Brand + Creative + Digital + Performance**

---

# 5. PRIMARY BRAND MESSAGE

## Suggested hero direction

### Option A

**Brands don't grow by being louder.  
They grow by being impossible to ignore.**

Supporting copy:

> We build brands, digital experiences and marketing systems that turn attention into action.

CTA:

**Start a Project**

Secondary CTA:

**Explore Our Work**

---

## Option B

**We make brands worth  
talking about.**

Supporting copy:

> Strategy, creative, digital and performance — brought together to help ambitious businesses move forward.

CTA:

**Build With Us**

Secondary CTA:

**See What We Do**

---

## Option C

**Your next stage of growth  
needs more than marketing.**

Supporting copy:

> We combine brand thinking, creative execution and digital performance to build marketing that actually moves the business.

CTA:

**Let's Talk**

Secondary CTA:

**View Work**

---

# 6. HERO EXPERIENCE

Do NOT make the hero a static centered block.

Preferred structure:

- large typography
- asymmetric composition
- moving visual layer
- portfolio imagery
- subtle cursor interaction
- animated typography
- floating project labels
- large whitespace
- horizontal motion
- visual texture

Possible hero layout:

LEFT:

```
WE BUILD
BRANDS THAT
MOVE.
```

RIGHT:

Large editorial image/video/project composition.

Bottom:

```
BRANDING     DIGITAL     CONTENT     PERFORMANCE
```

Then an animated marquee.

Alternative:

A giant word such as:

`BRANDS`

with image/video fragments clipped inside letters.

Alternative:

Large typography on the left and a tall vertical project preview on the right.

Do not use a generic hero image of people sitting in an office.

---

# 7. NAVIGATION

Desktop navigation:

Logo

- Work
- Services
- About
- Insights
- Contact

Right side:

**Start a Project →**

Optional small location indicator:

`ZIRAKPUR / CHANDIGARH`

Navigation behavior:

- transparent/overlay on hero
- transitions into a solid/blurred navigation after scrolling
- hide/reveal on scroll
- mobile menu as a full-screen creative panel

Mobile menu should NOT be a basic dropdown.

Use:

```
WORK
SERVICES
ABOUT
INSIGHTS
CONTACT

Let's build something → 
```

with large typography and subtle background motion.

---

# 8. HOMEPAGE INFORMATION ARCHITECTURE

Recommended homepage:

1. Header
2. Hero
3. Marquee / positioning statement
4. Selected Work
5. What We Do
6. Brand Hoods point-of-view
7. Services / capabilities
8. Featured case study
9. Process
10. Industries / business types
11. Results / proof
12. Founder / team
13. Insights
14. Final CTA
15. Footer

Do NOT make every section a card grid.

---

# 9. SECTION — MARQUEE

Immediately after hero.

Example:

```
STRATEGY / BRAND / DIGITAL / CONTENT / PERFORMANCE / GROWTH
```

Animate horizontally.

Use:

- CSS animation
- Framer Motion only where useful
- pause/reduce motion for accessibility

Possible second line:

```
FROM ATTENTION → TO INTEREST → TO ACTION → TO GROWTH
```

---

# 10. SECTION — SELECTED WORK

This should be one of the visual centerpieces.

Heading:

**Work that had somewhere to go.**

Supporting text:

> We don't create work just to fill a portfolio. Every project starts with a business problem, a clear ambition and something worth changing.

Use 4–6 projects.

DO NOT display them as six identical cards.

Instead:

Project 01:
Large horizontal image

Project 02:
Tall image

Project 03:
Large editorial crop

Project 04:
Split layout

Project 05:
Full-width campaign

Each project should show:

- client
- category
- services
- short outcome
- year
- visual
- arrow

Example:

```
01
BRAND IDENTITY / DIGITAL

Client Name

A sharper identity for a business ready
to enter its next market.

View case study →
```

---

# 11. CASE STUDY SYSTEM

Every portfolio item should be a proper case study.

Case study structure:

## Hero

Client name

Project category

Large visual

Short statement

## The Challenge

What was happening?

## The Opportunity

What could change?

## The Approach

Strategy / creative / technology.

## The Work

Large visual gallery.

## The Outcome

Only use verified statistics.

Example:

```
+42%
Qualified enquiries

2.3x
Organic traffic

+68%
Engagement
```

Never invent numbers.

If numbers are unavailable, use qualitative outcomes.

## What changed

Short explanation.

## Next project

Navigation to another case study.

---

# 12. SECTION — WHAT WE DO

Heading:

**One team.  
A lot of ways to move a brand forward.**

Use a visual vertical list rather than cards.

Example:

```
01  BRAND
    Positioning
    Identity
    Brand systems

02  DIGITAL
    Websites
    Landing pages
    Product experiences

03  CONTENT
    Social
    Campaigns
    Video
    Creative

04  PERFORMANCE
    Google Ads
    Meta Ads
    Conversion systems

05  SEARCH
    SEO
    Local SEO
    Content strategy

06  TECHNOLOGY
    Websites
    Web applications
    Marketing automation
```

Hovering a service should change a large preview image/video on the side.

---

# 13. SERVICES

Create dedicated service pages.

Recommended service architecture:

### Brand

- Brand Strategy
- Positioning
- Visual Identity
- Brand Guidelines
- Campaign Identity
- Creative Direction

### Digital

- Website Design
- Website Development
- Landing Pages
- Conversion-focused UX
- Web Applications
- Website Maintenance

### Growth

- SEO
- Local SEO
- Google Ads
- Meta Ads
- Performance Marketing
- Conversion Optimization

### Content

- Social Media
- Content Strategy
- Copywriting
- Creative Design
- Video
- Campaign Production

### Technology / Automation

Only include these if the business actually sells them:

- Marketing Automation
- CRM Integrations
- Lead Automation
- AI-assisted workflows
- Custom internal tools

Do not claim capabilities without confirmation.

---

# 14. SERVICE PAGE TEMPLATE

Each service page should have:

### Hero

```
SEO that earns attention
before your competitors do.
```

Small description.

CTA.

### Problem

Explain what businesses commonly struggle with.

### What we do

Detailed capability list.

### How we work

4–5 steps.

### Deliverables

Clear scope.

### Example / case study

Relevant work.

### FAQ

5–8 questions.

### CTA

```
Have a growth problem?
Let's work backwards from it.
```

---

# 15. SECTION — BRAND HOODS POINT OF VIEW

Create a section that differentiates the agency.

Heading:

**Marketing shouldn't feel like  
a monthly checklist.**

Copy:

> Posting more isn't a strategy.
>
> Running ads isn't a strategy.
>
> Ranking for keywords isn't a strategy.
>
> The work starts when we understand what the business needs to become — and build the marketing around that.

Then interactive words:

```
UNDERSTAND
↓
POSITION
↓
CREATE
↓
LAUNCH
↓
LEARN
↓
SCALE
```

This section should feel editorial and typographic.

---

# 16. SECTION — PROCESS

Do NOT use four boring cards.

Create a scroll-based process.

### 01 — Understand

We study the business, market, audience and current digital footprint.

### 02 — Position

We decide what needs to be said, shown and remembered.

### 03 — Create

Strategy becomes identity, content, digital experiences and campaigns.

### 04 — Launch

We put the work into the market.

### 05 — Learn

We measure behaviour and performance.

### 06 — Improve

We refine what works and remove what doesn't.

Possible visual:

A horizontal timeline that changes as the user scrolls.

---

# 17. SECTION — INDUSTRIES

Avoid generic:

"Industries We Serve"

Instead:

**Different businesses. Different problems.**

Interactive industry list:

- Real Estate
- Healthcare
- Hospitality
- Beauty & Wellness
- Food & Beverage
- Education
- Retail
- Professional Services
- Startups
- Local Businesses
- D2C / E-commerce

Hover each item to show:

- image
- typical problem
- relevant services

Example:

```
REAL ESTATE

From inventory visibility
to qualified enquiries.

SEO · Paid Media · Content · Websites
```

Do not claim specialization unless supported by actual client experience.

---

# 18. SECTION — LOCAL PRESENCE

Because the company is based in Zirakpur, make local presence part of the story without turning the site into an SEO landing page.

Heading:

**Built in Zirakpur.  
Working beyond it.**

Copy:

> Based in Zirakpur and connected to the Chandigarh Tricity, we work with businesses that want stronger brands and smarter digital growth.

Possible locations:

- Zirakpur
- Chandigarh
- Mohali
- Panchkula
- Punjab
- India
- International clients if applicable

Do not fabricate client locations.

---

# 19. PROOF / RESULTS

Create a proof section.

Possible layout:

Large number:

```
01
02
03
04
```

Each scroll changes a proof point.

Only populate real data.

Examples of fields:

- Projects completed
- Clients served
- Years in business
- Campaigns launched
- Leads generated
- Revenue influenced
- Retention
- Search growth

If actual figures are not confirmed, use:

```
[PROJECT COUNT]
[CLIENT COUNT]
[YEARS]
```

and make them easy to update.

Never use fake "10x", "300%", "98.4%" style claims.

---

# 20. TESTIMONIALS

Do not use generic AI-written testimonials.

Use real testimonials only.

Design:

Large quote.

Small client information.

Company.

Service.

Optional photo.

Example structure:

```
"We needed a team that understood both
the brand and the business. Brand Hoods
helped us turn the idea into something
people actually remembered."

CLIENT NAME
COMPANY
PROJECT TYPE
```

Add subtle slider navigation.

---

# 21. FOUNDER / TEAM

Existing site features Arjun as Founder & CEO.

Retain the founder story but redesign it completely.

Heading:

**People behind the work.**

Large founder portrait.

Copy:

> Meet Arjun, Founder & CEO of The Brand Hoods.

Then a short genuine story.

Possible layout:

Left:
portrait

Right:
large quote

Bottom:
short biography

Do not overstate experience.

Do not use stock founder photos.

---

# 22. INSIGHTS / BLOG

Blog will use Sanity.

Homepage section:

**Ideas for people building businesses.**

Not:

"Latest Insights & Updates"

Use 3 featured posts.

Each card should contain:

- category
- title
- short excerpt
- read time
- date
- image
- arrow

Blog topics should be useful, not generic AI SEO filler.

Recommended editorial categories:

- Brand
- Marketing
- SEO
- Paid Media
- Social
- Web
- Growth
- Local Business
- Strategy
- Technology

---

# 23. BLOG CONTENT IDEAS

Potential article topics:

### Brand

- Why Most Local Businesses Look the Same Online
- Your Logo Isn't Your Brand
- How to Build a Brand People Remember
- When Should a Business Rebrand?
- Brand Positioning for Local Businesses

### Digital

- What Makes a Business Website Actually Convert?
- Website Redesign vs Website Rebuild
- Why Beautiful Websites Still Fail
- The Anatomy of a High-Converting Service Page
- How Fast Should a Business Website Be?

### SEO

- Local SEO for Businesses in Zirakpur
- Google Business Profile: What Actually Matters
- Why Your Business Isn't Showing on Google Maps
- SEO vs Google Ads: When Should You Use Each?
- What Local Businesses Should Track in SEO

### Social

- Why Posting Every Day Isn't a Social Strategy
- How to Build a Content System for a Local Business
- Reels vs Static Posts: What Should a Business Actually Create?
- Why Good Content Still Gets Ignored
- Building a Social Media Brand Without Copying Competitors

### Paid Media

- Google Ads vs Meta Ads for Lead Generation
- What Makes a Paid Campaign Profitable?
- Why More Leads Can Still Mean a Worse Campaign
- Landing Pages and Paid Ads: Why They Need to Work Together

### Strategy

- Marketing Isn't the Same as Growth
- What Should a Business Fix Before Spending More on Ads?
- The Difference Between Attention, Leads and Revenue
- How to Know If Your Marketing Agency Is Actually Helping

---

# 24. SANITY CMS

Use Sanity for:

- blog posts
- authors
- categories
- featured posts
- SEO metadata
- article images
- FAQs
- optional case studies
- optional testimonials

Recommended Sanity post schema:

```ts
{
  title,
  slug,
  excerpt,
  coverImage,
  category,
  author,
  publishedAt,
  updatedAt,
  readTime,
  body,
  seoTitle,
  seoDescription,
  canonicalUrl,
  featured
}
```

Recommended categories:

```ts
Brand
Digital
SEO
Paid Media
Social
Web
Growth
Strategy
Technology
Local Business
```

Use Portable Text.

Use Sanity image URLs with responsive transformations.

---

# 25. BLOG ROUTES

```text
/insights
/insights/[slug]
```

Optional:

```text
/insights/category/[category]
```

SEO requirements:

- generateMetadata
- canonical URL
- OpenGraph image
- Twitter/X metadata
- Article schema
- Breadcrumb schema
- author
- published date
- modified date

---

# 26. CASE STUDY ROUTES

```text
/work
/work/[slug]
```

Case study schema:

```ts
{
  title,
  slug,
  client,
  year,
  services[],
  industry,
  summary,
  challenge,
  opportunity,
  approach,
  outcome,
  metrics[],
  heroImage,
  gallery[],
  featured
}
```

---

# 27. CONTACT EXPERIENCE

Do not make the contact section a boring form at the bottom.

Create a strong final interaction.

Heading:

**Have something worth building?**

Copy:

> Tell us what you're trying to change. We'll figure out the next step together.

Form:

- Name
- Company
- Email
- Phone / WhatsApp
- Website
- What do you need help with?
- Approximate budget
- Message

Service options:

- Branding
- Website
- SEO
- Social Media
- Google Ads
- Meta Ads
- Content
- Marketing Strategy
- Other

CTA:

**Start the Conversation →**

Optional WhatsApp CTA:

**Chat on WhatsApp**

---

# 28. CONTACT FORM UX

Use:

- React Hook Form
- Zod
- server-side validation
- spam protection
- accessible error states
- loading state
- success state

Do not expose secrets in client-side code.

Possible integrations:

- email
- CRM
- webhook
- database

Keep integrations modular.

---

# 29. FOOTER

Large editorial footer.

Example:

```
THE BRAND HOODS

Brands, digital experiences
and marketing that move.

[Instagram] [LinkedIn] [Facebook]
```

Navigation:

```
WORK
SERVICES
ABOUT
INSIGHTS
CONTACT
```

Services:

```
Brand
Digital
SEO
Paid Media
Social
Content
```

Location:

```
Zirakpur, Punjab
Chandigarh Tricity
India
```

Bottom:

```
© 2026 THE BRAND HOODS
Privacy
Terms
```

Do not add unnecessary footer columns.

---

# 30. VISUAL DESIGN SYSTEM

## Overall aesthetic

Premium editorial + creative studio.

Use:

- oversized typography
- strong contrast
- restrained colors
- large photography
- asymmetry
- thin rules
- subtle borders
- texture
- whitespace
- motion
- visual rhythm

Avoid:

- excessive gradients
- purple-blue AI gradients
- excessive glassmorphism
- floating glowing blobs
- random 3D shapes
- generic abstract AI imagery
- excessive rounded cards
- every section inside a container box

---

# 31. COLOR SYSTEM

Start with a neutral base.

Recommended:

```css
--background: #F5F3EE;
--foreground: #111111;
--muted: #77736C;
--surface: #EAE7DF;
--line: #D8D4CB;
--accent: #111111;
```

Optional accent color can be derived from the actual Brand Hoods identity after checking the logo.

Do NOT blindly introduce purple/blue "AI agency" colors.

Use accent color sparingly.

---

# 32. TYPOGRAPHY

Use a strong display font + clean sans-serif.

Possible public/free choices:

### Display

- Instrument Serif
- DM Serif Display
- Playfair Display
- Libre Baskerville

### Sans

- Geist
- Inter
- Manrope
- DM Sans

Recommended direction:

**Instrument Serif + Geist**

Use variable fonts where available.

Typography should do much of the visual work.

---

# 33. UI LIBRARIES

Use:

### Core

- Next.js
- React
- TypeScript

### UI

- shadcn/ui
- Radix UI

### Icons

- Lucide React

### Animation

- Motion for React / Framer Motion
- GSAP only for complex scroll choreography
- Lenis only if smooth scrolling genuinely improves the experience

### Utilities

- clsx
- tailwind-merge
- Zod
- React Hook Form

### CMS

- Sanity
- next-sanity
- Portable Text

Do not install libraries just because they are fashionable.

Every dependency must solve a real problem.

---

# 34. SHADCN USAGE

Use shadcn for:

- buttons
- dialogs
- sheets
- inputs
- select
- accordion
- form primitives
- tabs
- tooltip

Do not make the marketing website look like a dashboard.

Do NOT use shadcn Card everywhere.

Marketing sections should have custom layouts.

---

# 35. OPTIONAL PUBLIC UI SOURCES

You may study/use ideas from:

- shadcn/ui
- Aceternity UI
- Magic UI
- React Bits
- Motion
- Radix UI

Rules:

1. Prefer accessible primitives.
2. Avoid copying complete landing-page sections.
3. Customize visual treatment.
4. Avoid overusing animated components.
5. Keep bundle size under control.
6. Remove unused components.

---

# 36. MOTION DESIGN

Motion should communicate hierarchy.

Use:

### Page load

- subtle text reveal
- image clip reveal
- navigation fade

### Scroll

- image parallax
- typography movement
- horizontal marquee
- project reveal
- service preview transitions

### Hover

- image scale 1.02–1.05
- arrow movement
- subtle text shift
- cursor preview for work

### Page transition

Use simple opacity/transform.

Do NOT make every element bounce.

---

# 37. ACCESSIBILITY

Required:

- semantic HTML
- proper heading hierarchy
- keyboard navigation
- visible focus states
- aria labels
- alt text
- reduced-motion support
- sufficient color contrast
- accessible forms
- no interaction dependent only on hover

Use:

```css
@media (prefers-reduced-motion: reduce)
```

to reduce animation.

---

# 38. RESPONSIVE DESIGN

Desktop:

1440px+
12-column grid.

Tablet:

768–1199px.

Mobile:

320–767px.

Do not simply shrink desktop.

Mobile should have its own composition.

Mobile requirements:

- no horizontal overflow
- large readable typography
- sticky CTA only if useful
- full-screen menu
- swipeable project gallery
- simplified motion
- optimized images
- touch-friendly targets

---

# 39. IMAGE DIRECTION

Do NOT use generic stock photos of:

- businessmen shaking hands
- laptops
- office meetings
- people pointing at charts
- fake marketing dashboards

Prefer:

- real client work
- real campaign assets
- typography compositions
- editorial photography
- product shots
- brand identity mockups
- real website screenshots
- campaign creatives
- local visual context
- custom photography

If portfolio assets are unavailable, build visually strong placeholder compositions but clearly mark them for replacement.

Do not pretend placeholder work is client work.

---

# 40. CREATIVE INTERACTIONS

Include 3–5 signature interactions.

Possible ideas:

## A. Project cursor

When hovering over a project:

```
VIEW PROJECT →
```

follows cursor.

Only on desktop.

## B. Service preview

Hover service name → preview image changes.

## C. Text distortion

Very subtle typography interaction.

Do not overdo.

## D. Scroll number

A large `01 / 06` indicator updates during process.

## E. Image reveal

Images reveal through clipping masks.

## F. Magnetic CTA

Very subtle movement.

Respect reduced motion.

---

# 41. ANTI "AI SLOP" RULES

This is critical.

The website must NOT look AI-generated.

Never create:

- random gradients
- fake futuristic blobs
- generic glass cards
- meaningless floating 3D objects
- excessive pills
- 10 identical cards
- generic "Unlock your digital potential" copy
- fake statistics
- fake testimonials
- stock office photography
- random sparkles
- excessive animated backgrounds
- every section centered
- excessive rounded rectangles
- huge empty spaces with no purpose
- unnecessary emojis

Copy should be specific.

Bad:

> We empower brands to unlock their full digital potential.

Better:

> We build the brand, website and campaigns around the problem your business actually needs to solve.

---

# 42. COPY STYLE

Voice:

- confident
- clear
- direct
- intelligent
- human
- slightly playful
- not corporate
- not hype-heavy

Avoid:

- synergy
- revolutionary
- cutting-edge
- game-changing
- next-generation
- digital transformation
- unlock potential
- leverage
- empower
- holistic
- 360-degree solutions

unless genuinely necessary.

---

# 43. SEO STRATEGY

Primary business intent:

- digital marketing agency in Zirakpur
- digital marketing company in Zirakpur
- marketing agency in Zirakpur
- branding agency in Zirakpur
- SEO agency in Zirakpur
- social media marketing agency in Zirakpur
- website development company in Zirakpur
- digital marketing agency Chandigarh
- digital marketing agency Mohali
- digital marketing agency Panchkula

Do NOT keyword-stuff.

Use:

- natural copy
- service pages
- location context
- case studies
- useful articles
- internal links

---

# 44. SEO PAGE MAP

```text
/
 /about
 /work
 /services
 /services/branding
 /services/website-development
 /services/seo
 /services/social-media
 /services/google-ads
 /services/meta-ads
 /services/content-marketing
 /insights
 /insights/[slug]
 /contact
 /privacy
 /terms
```

Optional location pages only if there is enough genuinely useful local content:

```text
/locations/zirakpur
/locations/chandigarh
/locations/mohali
/locations/panchkula
```

Do NOT create thin location pages just for keywords.

---

# 45. TECHNICAL SEO

Implement:

- metadata
- canonical URLs
- sitemap.xml
- robots.txt
- OpenGraph
- Twitter/X metadata
- JSON-LD
- Organization schema
- LocalBusiness schema where appropriate
- WebSite schema
- BreadcrumbList
- Article schema
- Service schema where appropriate

Use dynamic metadata.

---

# 46. PERFORMANCE

Target:

- Lighthouse Performance 90+
- SEO 95+
- Accessibility 95+
- minimal client-side JavaScript

Use:

- next/image
- responsive images
- lazy loading
- dynamic imports
- server components by default
- client components only where interactive
- optimized fonts
- compressed assets
- no unnecessary video autoplay on mobile

Avoid huge JavaScript animation libraries when CSS/Motion is enough.

---

# 47. NEXT.JS ARCHITECTURE

Use modern App Router.

Suggested:

```text
app/
  layout.tsx
  page.tsx

  about/
    page.tsx

  work/
    page.tsx
    [slug]/
      page.tsx

  services/
    page.tsx
    [slug]/
      page.tsx

  insights/
    page.tsx
    [slug]/
      page.tsx
    category/
      [slug]/
        page.tsx

  contact/
    page.tsx

  privacy/
    page.tsx

  terms/
    page.tsx

  api/
    contact/
      route.ts
```

Components:

```text
components/
  layout/
  navigation/
  hero/
  work/
  services/
  process/
  about/
  testimonials/
  insights/
  contact/
  footer/
  ui/
```

Lib:

```text
lib/
  sanity/
  seo/
  utils.ts
  validations/
```

---

# 48. COMPONENT PRINCIPLES

Build reusable components.

Examples:

```text
SectionHeading
Eyebrow
MagneticButton
AnimatedText
Reveal
ProjectPreview
ProjectList
ServiceList
ServicePreview
Marquee
CaseStudyHero
CaseStudyGallery
ProcessTimeline
TestimonialSlider
ArticleCard
ArticleGrid
ContactForm
Footer
```

Do not create giant 1000-line page components.

---

# 49. DATA-DRIVEN CONTENT

Services should be represented as structured data.

Example:

```ts
const services = [
  {
    number: "01",
    title: "Brand",
    description: "...",
    services: [...]
  },
  {
    number: "02",
    title: "Digital",
    description: "...",
    services: [...]
  }
]
```

This makes it easy to edit.

---

# 50. CONTENT PLACEHOLDERS

Whenever information is unknown:

Use:

```text
[CLIENT NAME]
[PROJECT RESULT]
[PROJECT IMAGE]
[FOUNDER BIO]
[TEAM MEMBER]
[TESTIMONIAL]
```

Do NOT fabricate.

---

# 51. ABOUT PAGE

Suggested structure:

Hero:

**We build brands for businesses ready to move.**

Then:

- story
- philosophy
- what we believe
- capabilities
- founder
- team
- local presence
- CTA

Potential philosophy:

```
Good marketing gets attention.

Good creative earns memory.

Good strategy gives both somewhere to go.
```

---

# 52. WORK PAGE

Hero:

**Selected work**

Subheading:

> A collection of brands, campaigns, websites and digital experiences we've helped shape.

Filters:

- All
- Branding
- Digital
- Social
- Performance
- Web
- Content

Use animated filtering.

Do not show empty categories.

---

# 53. SERVICES PAGE

Hero:

**Everything between  
the idea and the result.**

Then service categories.

Each category expands.

End with:

**Not sure what you need?**

> That's exactly what the first conversation is for.

CTA.

---

# 54. INSIGHTS PAGE

Hero:

**Ideas worth taking back to the office.**

Featured article.

Then editorial article listing.

Use category filters.

No generic blog sidebar.

---

# 55. CONTACT PAGE

Hero:

**Tell us what you're trying to change.**

Then form + contact details.

Show:

- Zirakpur location
- email
- phone
- WhatsApp
- social links

Add map only if it adds value.

---

# 56. FOOTER CTA

Before footer:

Huge type:

**Let's make something  
people remember.**

Button:

**Start a Project →**

Secondary:

**WhatsApp →**

Background can invert from light to dark.

---

# 57. MICROCOPY

Buttons:

- Start a Project
- See Our Work
- Explore Services
- View Case Study
- Talk to Us
- Start the Conversation
- Read the Story
- See How We Work
- Explore Insights

Avoid:

- Learn More everywhere
- Click Here
- Submit

Form button:

**Send Enquiry →**

Success:

**Message received. We'll be in touch.**

Error:

**Something went wrong. Please try again.**

---

# 58. HOMEPAGE COPY DRAFT

## Hero

**Brands don't grow by being louder.  
They grow by being impossible to ignore.**

> We build brands, digital experiences and marketing systems that turn attention into action.

Buttons:

**Start a Project**
**Explore Our Work**

---

## Work

**Work that had somewhere to go.**

> Strategy, creative and digital work built around real business problems.

---

## Capabilities

**One team.  
A lot of ways to move a brand forward.**

> From the first positioning decision to the campaign that reaches the market, we connect the pieces.

---

## Philosophy

**Marketing shouldn't feel like a monthly checklist.**

> Posting more isn't a strategy. Running ads isn't a strategy. Ranking for keywords isn't a strategy. The work starts when we understand what the business needs to become.

---

## Process

**Understand. Position. Create. Launch. Learn. Improve.**

---

## Local

**Built in Zirakpur.  
Working beyond it.**

> We work with ambitious businesses across the Tricity and beyond, building brands and digital systems designed for the next stage.

---

## Insights

**Ideas for people building businesses.**

---

## Final CTA

**Have something worth building?**

> Tell us what you're trying to change. We'll figure out the next step together.

---

# 59. MOBILE EXPERIENCE

Mobile should feel intentionally designed.

Hero:

Large type but controlled line lengths.

Example:

```
BRANDS
THAT
MOVE.
```

Work:

Horizontal swipe gallery.

Services:

Accordion/vertical reveal.

Process:

Vertical timeline.

Testimonials:

Swipe.

Insights:

Stacked editorial list.

CTA:

Full-width.

---

# 60. NO-PLACEHOLDER PRODUCTION RULE

During development, placeholders are allowed.

Before production:

- replace all placeholder images
- replace all placeholder project names
- replace all fake metrics
- replace all fake testimonials
- verify contact details
- verify founder information
- verify service list
- verify social links
- verify legal details

Never launch fabricated proof.

---

# 61. ANALYTICS

Structure analytics so it can be added without rewriting components.

Track:

- CTA clicks
- contact form submission
- WhatsApp clicks
- phone clicks
- case study views
- service page views
- article views

Possible:

- Google Analytics
- Google Tag Manager
- Plausible

Use whichever analytics platform the client chooses.

Do not hardcode tracking IDs.

---

# 62. SECURITY

Contact form:

- server-side validation
- rate limiting
- spam protection
- sanitization

Environment variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_VERSION=
SANITY_TOKEN=
```

Never expose private Sanity tokens.

---

# 63. DEVELOPMENT PHASES

## Phase 1

Foundation:

- Next.js
- TypeScript
- styling
- fonts
- layout
- navigation
- footer
- responsive system

## Phase 2

Homepage:

- hero
- marquee
- work
- capabilities
- philosophy
- process
- CTA

## Phase 3

Pages:

- About
- Work
- Services
- Contact

## Phase 4

Sanity:

- schemas
- Studio
- blog
- case studies

## Phase 5

Motion:

- reveal
- hover
- page transitions
- scroll interactions

## Phase 6

SEO:

- metadata
- schema
- sitemap
- robots
- OG images

## Phase 7

Optimization:

- performance
- accessibility
- mobile
- image optimization

## Phase 8

Final QA:

- links
- forms
- SEO
- responsive
- animations
- keyboard
- reduced motion
- 404
- loading
- error states

---

# 64. 404 PAGE

Make it creative.

Heading:

**Looks like this page took a wrong turn.**

Large:

`404`

CTA:

**Back to Home →**

Optional mini navigation.

---

# 65. LOADING STATE

Do not use a generic spinner.

Possible:

Logo/wordmark reveal.

```
THE BRAND HOODS
```

with a subtle progress line.

Keep it short.

Do not block the page unnecessarily.

---

# 66. ERROR STATE

Use clear copy.

```
Something went wrong.

The page didn't load correctly.
Try again or head back home.
```

Buttons:

Retry

Home

---

# 67. CONTENT MODEL

The website should separate content from presentation.

Marketing copy should not be hardcoded in 30 components.

Use structured content where appropriate.

Static pages can use local TypeScript content.

Dynamic content:

- blog
- case studies
- testimonials
- team
- FAQs

can use Sanity.

---

# 68. DESIGN TOKENS

Create a central design system:

```ts
spacing
fontSizes
radius
shadows
breakpoints
animationDurations
```

Use consistent spacing.

Do not randomly choose margins for every section.

---

# 69. GRID

Desktop:

12 columns.

Suggested:

```text
margin: 5vw
gap: 1.25rem
```

But tune visually.

Some sections should intentionally break the grid.

Example:

- hero image extends to viewport edge
- project image breaks container
- typography spans 8 columns
- supporting text spans 3 columns

---

# 70. SECTION RHYTHM

Avoid:

```
Heading
3 cards
Heading
3 cards
Heading
3 cards
```

Instead alternate:

- typography
- image
- list
- editorial
- full-width visual
- timeline
- split layout
- horizontal scroll
- large CTA

Every section should have a reason to exist.

---

# 71. PORTFOLIO VISUAL SYSTEM

Each case study should have its own visual personality.

Use:

- large image
- browser mockup
- campaign image
- typography poster
- mobile screens
- brand assets

Avoid putting everything inside a MacBook mockup.

---

# 72. SOCIAL PROOF

If client logos are available:

Use a subtle logo wall.

Do not use logos of companies that have not actually worked with the agency.

If there are no logos, omit the section.

---

# 73. FLOATING CONTACT

Desktop:

small fixed bottom-right:

```
Let's Talk ↗
```

or WhatsApp.

Mobile:

sticky bottom CTA only if it does not interfere with navigation.

---

# 74. IMAGE OPTIMIZATION

Use Next Image.

Recommended:

- WebP/AVIF where supported
- responsive sizes
- explicit dimensions
- lazy loading
- priority only for hero
- no massive 5MB images

---

# 75. VIDEO

If using showreel:

- muted
- autoplay
- loop
- playsInline
- poster image
- mobile fallback
- reduced-motion fallback

Never make the entire website dependent on video loading.

---

# 76. COPY CONTENT STRATEGY

The website needs fewer words but stronger words.

Every section should answer one question:

Hero:
**Why should I care?**

Work:
**Can you actually do this?**

Services:
**Can you solve my problem?**

Process:
**What will working with you feel like?**

Proof:
**Why should I trust you?**

About:
**Who are you?**

Insights:
**Do you understand the space?**

Contact:
**What's the next step?**

---

# 77. CONVERSION STRATEGY

Primary conversion:

**Start a Project**

Secondary conversions:

- WhatsApp
- phone
- email
- case study
- service inquiry

Do not have 5 competing CTAs in every section.

---

# 78. TECHNICAL QUALITY BAR

The coding agent must:

- use TypeScript strictly
- avoid `any` unless unavoidable
- use server components by default
- avoid unnecessary client components
- create reusable components
- use semantic HTML
- use accessible interactions
- keep console clean
- handle loading/error states
- optimize images
- avoid layout shift
- avoid hydration errors
- use proper keys
- use meaningful names
- keep dependencies minimal

---

# 79. IMPORTANT: DO NOT COPY THE OLD SITE

The current WordPress site is useful for:

- business information
- existing services
- founder information
- current positioning
- contact information

It is NOT the visual reference.

Do not reproduce:

- the current hero slider structure
- generic service cards
- old blog cards
- current section layouts
- WordPress-style blocks
- current stock imagery

The new website should look like a deliberate 2026 rebuild.

---

# 80. IMPORTANT: DO NOT COPY COMPETITORS

Local agency research is for identifying market patterns.

Do not copy their exact:

- headlines
- section order
- layouts
- statistics
- testimonials
- imagery
- animations
- wording

Take the pattern, then create a distinct implementation.

---

# 81. DEFINITION OF DONE

The project is complete only when:

### Visual

- premium creative design
- consistent typography
- strong hierarchy
- no generic card-grid feel
- responsive
- polished motion

### Content

- clear positioning
- clear services
- real portfolio
- real testimonials
- real business information
- no fake claims

### Technical

- Next.js App Router
- TypeScript
- shadcn/Radix where useful
- Sanity blog
- responsive
- SEO-ready
- accessible
- optimized

### UX

- navigation is obvious
- CTA is obvious
- portfolio is easy to explore
- services are understandable
- contact is easy
- mobile experience is excellent

### Performance

- optimized images
- minimal JS
- no unnecessary animation libraries
- fast initial load

---

# 82. CODING AGENT INSTRUCTION

Build the website from this specification.

Do not ask to reproduce the old WordPress design.

Start by creating the design system and homepage shell.

Then implement:

1. Navigation
2. Hero
3. Marquee
4. Selected Work
5. Capabilities
6. Philosophy
7. Process
8. Local presence
9. Proof
10. Insights
11. Final CTA
12. Footer

Then create:

- About
- Work
- Case Study
- Services
- Service Detail
- Insights
- Blog Detail
- Contact

Use real current Brand Hoods information where verified.

Use placeholders for anything not verified.

Do not fabricate portfolio projects, testimonials, client logos, metrics or team members.

Do not make the website look like a SaaS dashboard.

Do not make every section a card grid.

Do not overuse animations.

Do not use generic AI gradients or decorative 3D blobs.

The result should feel like a real creative agency hired a strong digital designer and frontend engineer to rebuild its online presence from scratch.

---

# 83. FIRST IMPLEMENTATION TARGET

The first rendered homepage should immediately communicate:

```
THE BRAND HOODS

BRANDS DON'T GROW
BY BEING LOUDER.

THEY GROW BY BEING
IMPOSSIBLE TO IGNORE.

[ START A PROJECT ]   [ VIEW WORK ]

BRAND / DIGITAL / CONTENT / PERFORMANCE
```

Then transition into a visually strong project showcase.

The first viewport is the most important part of the website.

Do not spend the first viewport explaining everything.

Create curiosity.

Then prove capability through work.

---

# 84. FINAL DESIGN PRINCIPLE

**Less "marketing agency template".  
More "creative company with a point of view".**

The website should make a visitor think:

> "These people actually care about how brands are presented."

Not:

> "This looks like another digital marketing agency website."

