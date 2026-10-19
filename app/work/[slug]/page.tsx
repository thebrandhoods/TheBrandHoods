import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Artwork } from "@/components/artwork/Artwork";
import { JsonLd } from "@/components/seo/JsonLd";
import { FinalCta } from "@/components/sections/FinalCta";
import { Button, TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies, getCaseStudy } from "@/lib/content/work";
import { buildMetadata, breadcrumbSchema, caseStudySchema } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return buildMetadata({
    title: study.seo.title,
    description: study.seo.description,
    path: `/work/${study.slug}`,
    type: "article",
  });
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((item) => item.slug === study.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: study.title, path: `/work/${study.slug}` },
        ])}
      />
      <JsonLd data={caseStudySchema(study)} />

      {/* Hero */}
      <section className="bg-ink pt-[7.5rem] md:pt-[9.5rem]">
        <div className="grain shell flex flex-col gap-10 pb-14">
          <nav aria-label="Breadcrumb" className="text-[0.62rem] uppercase tracking-[0.24em] text-bone/40">
            <ol className="flex flex-wrap items-center gap-3">
              <li>
                <Link href="/" className="hover:text-bone">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/work" className="hover:text-bone">
                  Work
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-bone/70">{study.number}</li>
            </ol>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <div className="flex flex-col gap-5">
              <span className="flex flex-wrap items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bone/45">
                <span className="text-accent">{study.category}</span>
                <span>{study.industry}</span>
              </span>
              <h1 className="display display-tight text-display-lg">{study.title}</h1>
            </div>

            <dl className="flex flex-col gap-4 text-sm">
              <div className="flex items-baseline justify-between gap-4 border-t border-white/10 pt-4">
                <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bone/40">
                  Client
                </dt>
                <dd className="ph">{study.client}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-t border-white/10 pt-4">
                <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bone/40">
                  Year
                </dt>
                <dd className="ph">{study.year}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-t border-white/10 pt-4">
                <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bone/40">
                  Services
                </dt>
                <dd className="max-w-[24ch] text-right text-bone/70">
                  {study.services.join(" · ")}
                </dd>
              </div>
            </dl>
          </div>

          <p className="max-w-[70ch] text-lg leading-relaxed text-bone/70">
            {study.statement}
          </p>
        </div>
      </section>

      <section className="bg-ink">
        <div className="shell">
          <Artwork
            variant={study.artwork}
            ratio="16 / 9"
            label={`${study.title} — hero visual`}
          />
        </div>
      </section>

      {/* Challenge + opportunity */}
      <section className="grain relative bg-ink py-20 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            <span className="eyebrow text-bone/60">The challenge</span>
            <h2 className="display text-display-sm">{study.challenge.split(".")[0]}.</h2>
            <p className="max-w-[54ch] text-base leading-relaxed text-bone/65">
              {study.challenge}
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-5">
            <span className="eyebrow text-bone/60">The opportunity</span>
            <h2 className="display text-display-sm">
              {study.opportunity.split(".")[0]}.
            </h2>
            <p className="max-w-[54ch] text-base leading-relaxed text-bone/65">
              {study.opportunity}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="grain relative border-y border-white/10 bg-ink py-20 md:py-24">
        <div className="shell flex flex-col gap-10">
          <span className="eyebrow text-bone/60">The approach</span>
          <ol className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-2">
            {study.approach.map((step, stepIndex) => (
              <li key={step.title} className="flex flex-col gap-3 bg-ink p-6 md:p-8">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent">
                  {String(stepIndex + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-[1.2rem] md:text-[1.35rem]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-bone/60">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery */}
      <section className="grain relative bg-ink py-20 md:py-24">
        <div className="shell flex flex-col gap-12">
          <span className="eyebrow text-bone/60">The work</span>
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            {study.gallery.map((item, galleryIndex) => (
              <Reveal
                key={item.caption}
                mode="clip"
                delay={galleryIndex * 90}
                className={
                  galleryIndex === 0
                    ? "md:col-span-12"
                    : galleryIndex === 1
                      ? "md:col-span-7"
                      : "md:col-span-5 md:pt-16"
                }
              >
                <figure className="flex flex-col gap-4">
                  <Artwork
                    variant={item.variant}
                    ratio={galleryIndex === 0 ? "16 / 9" : "4 / 3"}
                    label={item.caption}
                  />
                  <figcaption className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-bone/40">
                    {item.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="grain relative border-y border-white/10 bg-ink py-20 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="eyebrow text-bone/60">The outcome</span>
            <h2 className="display text-display-sm">What changed.</h2>
            <p className="max-w-[52ch] text-base leading-relaxed text-bone/65">
              {study.outcome}
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <dl className="grid grid-cols-3 gap-4 border-y border-white/10 py-6">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col gap-2">
                  <dd className="display text-[1.6rem] text-bone/45 md:text-[2rem]">
                    {metric.value}
                  </dd>
                  <dt className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-bone/40">
                    {metric.label}
                  </dt>
                </div>
              ))}
            </dl>
            <p className="text-xs leading-relaxed text-bone/40">
              Figures stay marked until the client approves publication. Qualitative
              outcomes are shown instead wherever numbers are unavailable.
            </p>

            <ul className="flex flex-col">
              {study.deliverables.map((deliverable) => (
                <li
                  key={deliverable}
                  className="border-t border-white/10 py-3 text-sm text-bone/70 last:border-b"
                >
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="grain relative bg-ink py-16 md:py-20">
        <div className="shell flex flex-col gap-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-bone/40">
                Next case study
              </span>
              <span className="display text-display-sm">{next.title}</span>
            </div>
            <Button href={`/work/${next.slug}`} variant="ghost">
              Read it
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-6">
            <TextLink href="/work">All case studies</TextLink>
            <TextLink href="/services">What we do</TextLink>
          </div>
        </div>
      </section>

      <FinalCta
        eyebrow="Similar problem?"
        title={
          <>
            Let&apos;s work backwards
            <br />
            from your constraint.
          </>
        }
        intro="Tell us what isn't working. We'll suggest the smallest piece of work that would change it."
      />
    </>
  );
}
