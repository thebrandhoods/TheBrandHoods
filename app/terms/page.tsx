import type { Metadata } from "next";

import { LegalLayout } from "@/components/legal/LegalLayout";
import { mailHref, site } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms",
  description:
    "Terms for using The Brand Hoods website, and how we handle estimates, scope and intellectual property.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms"
      updated="Last reviewed: [DATE]"
      intro="These terms cover use of this website. Project work is delivered under a separate written agreement that takes precedence over anything published here."
      sections={[
        {
          id: "website-use",
          heading: "Using this website",
          body: (
            <p>
              The content here is provided for information. You&apos;re welcome to read,
              reference and link to it. Copying it wholesale into your own marketing, or
              presenting our work as yours, is not permitted.
            </p>
          ),
        },
        {
          id: "estimates",
          heading: "Estimates and proposals",
          body: (
            <p>
              Any figures shown on this site, including budget ranges, are indicative.
              Nothing on this website constitutes a quotation, and no engagement exists
              until both sides have signed a written scope.
            </p>
          ),
        },
        {
          id: "scope",
          heading: "Scope and change",
          body: (
            <p>
              Project scope is agreed in writing before work starts. Where the scope
              changes, we quote the change before doing the work. We don&apos;t invoice for
              surprises and we don&apos;t work for free.
            </p>
          ),
        },
        {
          id: "ip",
          heading: "Intellectual property",
          body: (
            <p>
              On full payment, final deliverables prepared specifically for a client become
              that client&apos;s property. Working files, internal frameworks, unused
              concepts and pre-existing tools remain ours. We may show completed work in our
              portfolio unless agreed otherwise in writing.
            </p>
          ),
        },
        {
          id: "results",
          heading: "Results",
          body: (
            <p>
              Marketing outcomes depend on factors outside any agency&apos;s control —
              offer, pricing, market, timing and sales process among them. We commit to the
              work, the reporting and the honesty about what we see; we don&apos;t guarantee
              specific rankings, lead volumes or revenue.
            </p>
          ),
        },
        {
          id: "law",
          heading: "Governing law",
          body: (
            <p>
              These terms are governed by the laws of India, with jurisdiction in Punjab.
              Questions about them can go to{" "}
              <a href={mailHref} className="text-bone underline underline-offset-4">
                {site.contact.email}
              </a>
              .
            </p>
          ),
        },
      ]}
    >
      <p className="rounded-2xl border border-white/12 bg-white/5 p-6 text-xs leading-relaxed text-bone/50">
        [LEGAL REVIEW REQUIRED] — confirm jurisdiction, payment terms and portfolio usage
        rights with the studio before launch.
      </p>
    </LegalLayout>
  );
}
