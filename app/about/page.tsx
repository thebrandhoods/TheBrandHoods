import type { Metadata } from "next";

import { Artwork } from "@/components/artwork/Artwork";
import { JsonLd } from "@/components/seo/JsonLd";
import { FinalCta } from "@/components/sections/FinalCta";
import { Founder } from "@/components/sections/Founder";
import { LocalPresence } from "@/components/sections/LocalPresence";
import { Button, TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutStory, differentiators, principles, processSteps } from "@/lib/content/studio";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About the studio",
  description:
    "The Brand Hoods is a founder-led creative growth studio in Zirakpur. How we think about brand, digital and performance — and how we work with clients.",
  path: "/about",
});

const beliefs = [
  "Good marketing gets attention.",
  "Good creative earns memory.",
  "Good strategy gives both somewhere to go.",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink pt-[8rem] md:pt-[10rem]">
        <div className="grain shell grid gap-12 pb-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16 lg:pb-24">
          <div className="flex flex-col gap-7">
            <span className="eyebrow text-bone/60">About the studio</span>
            <h1 className="display display-tight text-display-lg">
              We build brands for
              <br />
              businesses ready to move.
            </h1>
            <p className="max-w-[54ch] text-base leading-relaxed text-bone/65">
              The Brand Hoods is a small, founder-led studio. We take on fewer projects
              than we could, so the people who sell the work are the people who make it.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact">Start a project</Button>
              <TextLink href="/work">See the work</TextLink>
            </div>
          </div>
          <Artwork
            variant="editorial"
            tone="light"
            ratio="4 / 5"
            label="Studio — placeholder art"
          />
        </div>
      </section>

      {/* Story */}
      <section className="grain relative border-y border-white/10 bg-ink py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-20">
          <SectionHeading
            eyebrow="Our story"
            size="md"
            title={
              <>
                Started by
                <br />
                a frustration.
              </>
            }
            className="lg:sticky lg:top-28 lg:self-start"
          />
          <div className="flex flex-col gap-6">
            {aboutStory.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 80}>
                <p
                  className={
                    index === 0
                      ? "display text-display-sm text-bone"
                      : "max-w-[64ch] text-base leading-relaxed text-bone/65"
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <div className="mt-6 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              {[
                { label: "Founded in", value: "Zirakpur, Punjab" },
                { label: "Working across", value: "Tricity + remote" },
                { label: "Disciplines", value: "Brand · Digital · Growth" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-bone/40">
                    {item.label}
                  </span>
                  <span className="text-sm text-bone/75">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="grain relative bg-ink py-20 md:py-28">
        <div className="shell flex flex-col gap-12">
          <SectionHeading
            eyebrow="What we believe"
            title={
              <>
                Attention, memory,
                <br />
                and somewhere to go.
              </>
            }
            intro="Three lines we use to sanity-check every piece of work before it ships."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {beliefs.map((belief, index) => (
              <Reveal key={belief} delay={index * 100} className="flex flex-col gap-5">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent">
                  0{index + 1}
                </span>
                <p className="display text-[1.45rem] leading-[1.05] text-bone md:text-[1.7rem]">
                  {belief}
                </p>
                <p className="text-sm leading-relaxed text-bone/55">
                  {principles[index]?.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we work + differentiators */}
      <section className="grain relative border-y border-white/10 bg-ink py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="How we work"
              size="md"
              title={
                <>
                  Six steps.
                  <br />
                  Same order.
                  <br />
                  Every time.
                </>
              }
            />
            <ol className="flex flex-col">
              {processSteps.map((step) => (
                <li
                  key={step.number}
                  className="flex items-baseline justify-between gap-6 border-t border-white/10 py-3 last:border-b"
                >
                  <span className="text-sm text-bone/70">{step.title}</span>
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-bone/35">
                    {step.number}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="What makes us different"
              size="md"
              title={<>Four things we won&apos;t compromise on.</>}
            />
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2">
              {differentiators.map((item) => (
                <div key={item.number} className="flex flex-col gap-3 bg-ink p-6 md:p-7">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent">
                    {item.number}
                  </span>
                  <h3 className="display text-[1.15rem]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-bone/60">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Founder />
      <LocalPresence />
      <FinalCta
        eyebrow="Next step"
        title={
          <>
            If this sounds like
            <br />
            your kind of team.
          </>
        }
        intro="Send a short note about the business and what you're trying to change. We'll reply with an honest view of what we'd do first."
      />
    </>
  );
}
