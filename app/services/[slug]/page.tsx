import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Artwork } from "@/components/artwork/Artwork";
import { JsonLd } from "@/components/seo/JsonLd";
import { FinalCta } from "@/components/sections/FinalCta";
import { Button, TextLink } from "@/components/ui/Button";
import { Check } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/content/studio";
import { getService, services } from "@/lib/content/services";
import { breadcrumbSchema, buildMetadata, serviceSchema } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd data={serviceSchema(service)} />

      {/* Hero */}
      <section className="bg-ink pt-[7.5rem] md:pt-[9.5rem]">
        <div className="grain shell grid gap-12 pb-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16 lg:pb-20">
          <div className="flex flex-col gap-6">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-3 text-[0.62rem] uppercase tracking-[0.24em] text-bone/40"
            >
              <Link href="/services" className="hover:text-bone">
                Services
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-bone/70">{service.group}</span>
            </nav>
            <h1 className="display display-tight text-display-lg">
              {service.headline.split("\n").map((line, index) => (
                <span key={line} className={index === 0 ? "block" : "block text-accent"}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="max-w-[56ch] text-base leading-relaxed text-bone/65">
              {service.intro}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/contact">Start a project</Button>
              <Button href="/work" variant="ghost" withArrow={false}>
                See the work
              </Button>
            </div>
          </div>

          <Artwork
            variant={service.artwork}
            ratio="4 / 5"
            label={`${service.title} — preview`}
          />
        </div>
      </section>

      {/* Problem */}
      <section className="grain relative border-y border-white/10 bg-ink py-20 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="eyebrow text-bone/60">The problem</span>
            <h2 className="display text-display-sm">{service.problem.lead}</h2>
            <p className="max-w-[52ch] text-base leading-relaxed text-bone/65">
              {service.problem.body}
            </p>
          </div>
          <ul className="flex flex-col gap-4 self-center">
            {service.problem.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-bone/70"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Capabilities */}
      <section className="grain relative bg-ink py-20 md:py-24">
        <div className="shell flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <span className="eyebrow text-bone/60">What we do</span>
            <h2 className="display text-display-md">The work inside {service.title}.</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((capability, index) => (
              <Reveal
                key={capability.title}
                delay={index * 60}
                className="flex flex-col gap-3 bg-ink p-6 md:p-7"
              >
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-[1.1rem]">{capability.title}</h3>
                <p className="text-sm leading-relaxed text-bone/60">{capability.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process + deliverables */}
      <section className="grain relative border-y border-white/10 bg-ink py-20 md:py-24">
        <div className="shell grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)] lg:gap-20">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="eyebrow text-bone/60">How we work</span>
              <h2 className="display text-display-md">
                {processSteps.length} steps, run the same way.
              </h2>
            </div>
            <ol className="flex flex-col">
              {service.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid gap-2 border-t border-white/10 py-5 last:border-b md:grid-cols-[0.1fr_0.45fr_1fr] md:items-baseline md:gap-6"
                >
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-bone/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-[1.1rem]">{step.title}</span>
                  <span className="text-sm leading-relaxed text-bone/60">{step.body}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow text-bone/60">Deliverables</span>
            <ul className="flex flex-col gap-3">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-start gap-3 text-sm text-bone/70">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {deliverable}
                </li>
              ))}
            </ul>
            <p className="border-t border-white/10 pt-5 text-xs leading-relaxed text-bone/45">
              Exact scope is agreed in writing before work starts. If something outside the
              list is needed, you&apos;ll get a clear quote before we pick it up.
            </p>
          </div>
        </div>
      </section>

      {/* Related work */}
      <section className="grain relative bg-ink py-20 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <Artwork
            variant={service.artwork}
            tone="light"
            ratio="16 / 10"
            label={`${service.title} — example engagement`}
          />
          <div className="flex flex-col gap-6">
            <span className="eyebrow text-bone/60">Example</span>
            <h2 className="display text-display-md">
              We keep case studies honest.
            </h2>
            <p className="max-w-[50ch] text-sm leading-relaxed text-bone/60">
              Client work for this service is being prepared for release. Until it is
              approved, we&apos;d rather show the structure of an engagement than invent a
              result — the case study pages are already built to hold the real thing.
            </p>
            <div className="flex flex-wrap gap-6">
              <TextLink href="/work">Browse case studies</TextLink>
              <TextLink href="/contact">Ask us directly</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="grain relative border-t border-white/10 bg-ink py-20 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] lg:gap-20">
          <div className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow text-bone/60">FAQ</span>
            <h2 className="display text-display-md">
              {service.title}
              <br />
              questions.
            </h2>
          </div>
          <div className="flex flex-col">
            {service.faqs.map((faq) => (
              <details key={faq.q} className="group border-t border-white/10 py-5 last:border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base text-bone [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span
                    aria-hidden="true"
                    className="text-accent transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-[64ch] text-sm leading-relaxed text-bone/60">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        eyebrow="Start here"
        title={
          <>
            Have a growth problem?
            <br />
            Let&apos;s work backwards from it.
          </>
        }
        intro={`Tell us where ${service.title.toLowerCase()} fits in the business and what isn't working yet.`}
      />
    </>
  );
}
