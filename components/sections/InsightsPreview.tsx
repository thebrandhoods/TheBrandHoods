import { ArticleCard } from "@/components/insights/ArticleCard";
import { TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { posts } from "@/lib/content/insights";

export function InsightsPreview() {
  const [lead, ...rest] = posts.slice(0, 3);

  return (
    <section className="grain relative bg-ink py-20 md:py-28">
      <div className="shell flex flex-col gap-14">
        <SectionHeading
          eyebrow="Insights"
          title={
            <>
              Ideas for people
              <br />
              building businesses.
            </>
          }
          intro="Practical writing about brand, search, paid media and the unglamorous parts of growing a company. No trend round-ups."
          aside={<TextLink href="/insights">All insights</TextLink>}
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-16">
          {lead ? (
            <Reveal mode="clip">
              <ArticleCard post={lead} variant="lead" />
            </Reveal>
          ) : null}

          <div className="flex flex-col gap-10">
            {rest.map((post, index) => (
              <Reveal key={post.slug} delay={index * 100}>
                <ArticleCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
