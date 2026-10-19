# The Brand Hoods — website

A production-quality rebuild of thebrandhoods.com as a creative-studio site:
Next.js App Router, TypeScript, Tailwind v4, no client-side animation libraries.

```bash
bun install
bun dev          # http://localhost:3000
bun run build    # production build
bun run lint
npx tsc --noEmit
```

---

## What is built

| Route | Notes |
| --- | --- |
| `/` | Hero, marquee, selected work, capabilities, point of view, featured case, process timeline, industries, proof, local presence, founder, insights, CTA |
| `/work`, `/work/[slug]` | Filterable index + six full case-study pages (problem → approach → outcome) |
| `/services`, `/services/[slug]` | Capability overview, FAQ, plus eight service pages (branding, website development, app development, SEO, Google Ads, Meta Ads, social, content) |
| `/insights`, `/insights/[slug]` | Featured article, editorial archive with category filter, article template |
| `/about` | Story, philosophy, process, differentiators, founder, local presence |
| `/contact` | Enquiry form with server-side validation, plus studio details |
| `/privacy`, `/terms` | Legal templates (clearly marked for legal review) |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | Generated |
| `not-found`, `error`, `loading` | Branded states |

Structured data: Organization, ProfessionalService (LocalBusiness), WebSite,
BreadcrumbList, Article, Service and CreativeWork schemas.

---

## Content lives in one place

All copy is data, not markup. Edit these files and the pages follow:

```
lib/content/site.ts        brand, contact details, navigation, service areas
lib/content/services.ts    capability groups + full service pages (incl. FAQs)
lib/content/work.ts        case studies
lib/content/insights.ts    articles, authors, categories
lib/content/studio.ts      process, principles, industries, founder, proof, FAQs
lib/validations/contact.ts contact form schema + option lists
```

### Before launch — replace these placeholders

Everything unverified is marked in the UI, not hidden:

- `[CLIENT NAME]`, `[YEAR]` and `[+XX%]` style metrics in `lib/content/work.ts`
- `[PROJECT COUNT]`, `[CLIENT COUNT]`, `[YEARS]`, `[TEAM SIZE]` in `lib/content/studio.ts`
- `[FOUNDER BIO]` and `[CLIENT TESTIMONIAL …]` in `lib/content/studio.ts`
- `[DATE]` and `[LEGAL REVIEW REQUIRED]` notes on `/privacy` and `/terms`
- Social profiles have no links yet — add `href` values in `lib/content/site.ts`
  and they become links automatically

Visuals are procedural placeholder compositions (`components/artwork/Artwork.tsx`)
tagged **PLACEHOLDER ART** on every frame. Dropping in real photography later
means replacing the `<Artwork />` usage with `next/image` in the same slots.

---

## Contact form

`app/api/contact/route.ts` validates with Zod, rate-limits by IP, uses a
honeypot field and never exposes secrets to the browser.

| Env var | Purpose |
| --- | --- |
| `CONTACT_WEBHOOK_URL` | Where enquiries are POSTed (CRM, automation platform, email service) |
| `CONTACT_WEBHOOK_TOKEN` | Optional bearer token for that endpoint |
| `NEXT_PUBLIC_SITE_URL` | Canonical host used in metadata, sitemap and JSON-LD |

Without a webhook the route validates and logs the enquiry, so nothing is lost
during development — it does **not** email anyone yet.

---

## Swapping the local content for Sanity

The insight bodies use a `Block` union in `lib/content/insights.ts` that mirrors
Portable Text (`h2`, `p`, `ul`, `quote`, `callout`). To move to Sanity:

1. Add `sanity`, `next-sanity`, `@portabletext/react` and env vars
   (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_TOKEN`).
2. Create the post schema from the `Post` type (title, slug, excerpt, coverImage,
   category, author, publishedAt, updatedAt, readTime, body, seo, featured).
3. Point the loaders (`getPost`, `posts`) at queries; keep `components/insights/*`
   unchanged — `ArticleBody` already renders the block shape.

---

## Accessibility & motion

- Semantic landmarks, heading hierarchy, skip link, visible focus styles
- Full-screen mobile menu closes on `Escape` and on navigation, locks scroll
- Interactive lists are keyboard-operable (hover, focus and click all update state)
- `prefers-reduced-motion: reduce` disables reveals, marquees and the cursor label
- Placeholder art is exposed as labelled `role="img"` rather than decorative divs
