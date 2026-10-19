import type { Metadata } from "next";

import { ArticleCard } from "@/components/insights/ArticleCard";
import { ArticleFilter } from "@/components/insights/ArticleFilter";
import { JsonLd } from "@/components/seo/JsonLd";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal } from "@/components/ui/Reveal";
import { featuredPost, postCategories, posts } from "@/lib/content/insights";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  description:
    "Practical writing on brand, search, paid media and growth from The Brand Hoods — for people who have to make marketing decisions at work.",
  path: "/insights",
});

export default function InsightsPage() {
  const secondary = posts.filter((post) => post.slug !== featuredPost.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ])}
      />

      <section className="bg-ink pt-[8rem] md:pt-[10rem]">
        <div className="grain shell flex flex-col gap-8 pb-14 md:pb-16">
          <span className="eyebrow text-bone/60">Insights</span>
          <h1 className="display display-tight max-w-[22ch] text-display-lg">
            Ideas worth taking back to the office.
          </h1>
          <p className="max-w-[58ch] text-base leading-relaxed text-bone/65">
            No trend round-ups, no listicles written for search engines. Just the things we
            end up explaining to clients again and again.
          </p>
          <ul className="flex flex-wrap gap-2 border-t border-white/10 pt-6">
            {postCategories.map((category) => (
              <li
                key={category}
                className="rounded-full border border-white/12 px-3 py-1 text-[0.65rem] font-medium tracking-wide text-bone/50"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured */}
      <section className="grain relative border-y border-white/10 bg-ink py-16 md:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <Reveal mode="clip">
            <ArticleCard post={featuredPost} variant="lead" />
          </Reveal>
          <div className="flex flex-col gap-10">
            {secondary.map((post, index) => (
              <Reveal key={post.slug} delay={index * 90}>
                <ArticleCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="grain relative bg-ink py-16 md:py-20">
        <div className="shell flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="eyebrow text-bone/60">Archive</span>
            <h2 className="display text-display-md">Everything we&apos;ve published.</h2>
          </div>
          <ArticleFilter />
        </div>
      </section>

      <FinalCta
        eyebrow="More useful than reading"
        title={
          <>
            Get a second
            <br />
            opinion instead.
          </>
        }
        intro="Send us the thing you're unsure about — a page, a campaign, a plan. We'll tell you what we'd change."
      />
    </>
  );
}
