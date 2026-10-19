import type { Metadata } from "next";
import Link from "next/link";

import { Artwork } from "@/components/artwork/Artwork";
import { JsonLd } from "@/components/seo/JsonLd";
import { FinalCta } from "@/components/sections/FinalCta";
import { ArrowUpRight } from "@/components/ui/Icons";
import { TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { capabilityGroups, services } from "@/lib/content/services";
import { studioFaqs } from "@/lib/content/studio";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Brand, website development, SEO, paid media, social and content marketing from The Brand Hoods in Zirakpur — scope, process and deliverables for each.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <section className="bg-ink pt-[8rem] md:pt-[10rem]">
        <div className="grain shell flex flex-col gap-10 pb-16 md:pb-20">
          <span className="eyebrow text-bone/60">Capabilities</span>
          <h1 className="display display-tight max-w-[24ch] text-display-lg">
            Everything between the idea and the result.
          </h1>
          <p className="max-w-[60ch] text-base leading-relaxed text-bone/65">
            You can buy these as separate projects or as one joined-up engagement. Most
            clients start with the thing that&apos;s blocking growth and add from there.
          </p>
        </div>
      </section>

      {/* Capability groups */}
      <section className="grain relative border-y border-white/10 bg-ink py-16 md:py-20">
        <div className="shell grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {capabilityGroups.map((group, index) => (
            <Reveal key={group.slug} delay={index * 70} className="flex flex-col gap-4">
              <Artwork variant={group.artwork} ratio="4 / 3" label={`${group.title} preview`} />
              <div className="flex items-baseline gap-4">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-bone/40">
                  {group.number}
                </span>
                <h2 className="display text-display-sm">{group.title}</h2>
              </div>
              <p className="text-sm leading-relaxed text-bone/60">{group.description}</p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/12 px-3 py-1 text-[0.65rem] tracking-wide text-bone/55"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Service detail index */}
      <section className="grain relative bg-ink py-20 md:py-24">
        <div className="shell flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="eyebrow text-bone/60">In detail</span>
            <h2 className="display text-display-md">
              Pick the page that matches your problem.
            </h2>
          </div>

          <ul className="flex flex-col">
            {services.map((service) => (
              <li key={service.slug} className="border-t border-white/10 last:border-b">
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid gap-4 py-6 md:grid-cols-[0.12fr_0.5fr_1fr_auto] md:items-baseline md:gap-8"
                >
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-bone/40">
                    {service.number}
                  </span>
                  <span className="display text-[1.3rem] text-bone transition-colors duration-500 group-hover:text-accent md:text-[1.5rem]">
                    {service.title}
                  </span>
                  <span className="text-sm leading-relaxed text-bone/60">
                    {service.summary}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-bone/40 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="grain relative border-y border-white/10 bg-ink py-20 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)] lg:gap-20">
          <div className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow text-bone/60">Questions</span>
            <h2 className="display text-display-md">
              Not sure what
              <br />
              you need?
            </h2>
            <p className="max-w-[40ch] text-sm leading-relaxed text-bone/60">
              That&apos;s exactly what the first conversation is for. Bring the problem, not
              a brief.
            </p>
            <TextLink href="/contact">Start the conversation</TextLink>
          </div>

          <div className="flex flex-col">
            {studioFaqs.map((faq) => (
              <details
                key={faq.q}
                className="group border-t border-white/10 py-5 last:border-b"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base text-bone [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span
                    aria-hidden="true"
                    className="text-accent transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-bone/60">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        eyebrow="Next step"
        title={
          <>
            Tell us the problem.
            <br />
            We&apos;ll scope the work.
          </>
        }
      />
    </>
  );
}
