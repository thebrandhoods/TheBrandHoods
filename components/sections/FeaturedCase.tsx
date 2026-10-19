import { Artwork } from "@/components/artwork/Artwork";
import { TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { featuredCaseStudy } from "@/lib/content/work";

export function FeaturedCase() {
  const study = featuredCaseStudy;

  return (
    <section className="grain relative bg-ink py-20 md:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
        <Reveal mode="clip">
          <Artwork
            variant={study.gallery[0]?.variant ?? study.artwork}
            ratio="4 / 3"
            label={`${study.title} — featured project`}
          />
        </Reveal>

        <div className="flex flex-col gap-8">
          <span className="eyebrow text-bone/60">Featured case study</span>

          <div className="flex flex-col gap-4">
            <span className="flex flex-wrap items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bone/45">
              <span className="text-accent">{study.category}</span>
              <span>{study.industry}</span>
              <span className="ph bg-ink/60">{study.client}</span>
            </span>
            <h2 className="display text-display-md">{study.title}</h2>
            <p className="max-w-[46ch] text-base leading-relaxed text-bone/65">
              {study.statement}
            </p>
          </div>

          <dl className="grid grid-cols-3 gap-4 border-y border-white/10 py-6">
            {study.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-2">
                <dt className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-bone/40">
                  {metric.label}
                </dt>
                <dd className="display text-[1.5rem] text-bone/45">{metric.value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap items-center gap-6">
            <TextLink href={`/work/${study.slug}`}>Read the case study</TextLink>
            <span className="text-xs leading-relaxed text-bone/40">
              Metrics stay marked until the client signs off on the numbers.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
