import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import { FinalCta } from "@/components/sections/FinalCta";
import { WorkGrid } from "@/components/work/WorkGrid";
import { caseStudies } from "@/lib/content/work";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Selected work",
  description:
    "Brands, campaigns, websites and digital experiences from The Brand Hoods — case studies written around the business problem, not the deliverable list.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />

      <section className="bg-ink pt-[8rem] md:pt-[10rem]">
        <div className="grain shell flex flex-col gap-10 pb-16 md:pb-20">
          <div className="flex flex-col gap-6">
            <span className="eyebrow text-bone/60">Portfolio</span>
            <h1 className="display display-tight text-display-lg">
              Selected work
            </h1>
            <p className="max-w-[62ch] text-base leading-relaxed text-bone/65">
              A collection of brands, campaigns, websites and digital experiences we&apos;ve
              helped shape. Each one is written the same way: the problem first, the work
              second, the outcome last.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
            <span className="ph bg-ink/60">Client names pending release</span>
            <p className="max-w-[60ch] text-xs leading-relaxed text-bone/45">
              Names, years and figures are held as placeholders until the studio confirms
              what can be published. The structure, filters and case study pages are ready
              for the moment those arrive.
            </p>
          </div>
        </div>
      </section>

      <section className="grain relative border-t border-white/10 bg-ink py-16 md:py-20">
        <div className="shell">
          <WorkGrid studies={caseStudies} />
        </div>
      </section>

      <FinalCta
        eyebrow="Your project next"
        title={
          <>
            Bring us the problem
            <br />
            worth solving.
          </>
        }
        intro="We'll tell you honestly whether it's the kind of work we're good at — and what we'd do first."
      />
    </>
  );
}
