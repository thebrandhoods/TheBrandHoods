import type { Metadata } from "next";

import { LegalLayout } from "@/components/legal/LegalLayout";
import { mailHref, site } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy",
  description:
    "What The Brand Hoods collects through this website, why, and how to have it removed.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy"
      updated="Last reviewed: [DATE]"
      intro="This page explains what we collect through the website, what we do with it and how to ask us to remove it. It covers the website only — client engagements are governed by their own agreements."
      sections={[
        {
          id: "what-we-collect",
          heading: "What we collect",
          body: (
            <>
              <p>
                When you submit the enquiry form we receive the details you type: your
                name, company, email, phone number, website, the services you select, an
                approximate budget and your message.
              </p>
              <p>
                We do not run advertising pixels on this site for the purpose of building
                profiles. If analytics are enabled in future, this page will name the
                provider and what it records.
              </p>
            </>
          ),
        },
        {
          id: "why",
          heading: "Why we collect it",
          body: (
            <p>
              To answer your enquiry, prepare a scope of work and keep a record of the
              conversation. Nothing else. We do not sell data, and we do not add you to a
              mailing list because you filled in a form.
            </p>
          ),
        },
        {
          id: "who-sees-it",
          heading: "Who sees it",
          body: (
            <p>
              Enquiries are delivered to the studio — currently by email or through the
              automation service configured for the contact form. Service providers who
              process that delivery are bound by their own terms and act only on our
              instructions.
            </p>
          ),
        },
        {
          id: "retention",
          heading: "How long we keep it",
          body: (
            <p>
              Enquiries that don&apos;t become projects are removed after twelve months.
              Records linked to a live or completed engagement are kept for as long as
              accounting and contractual obligations require.
            </p>
          ),
        },
        {
          id: "your-choices",
          heading: "Your choices",
          body: (
            <p>
              You can ask us what we hold about you, ask for a correction, or ask us to
              delete it. Email{" "}
              <a href={mailHref} className="text-bone underline underline-offset-4">
                {site.contact.email}
              </a>{" "}
              and we&apos;ll action it within a reasonable period.
            </p>
          ),
        },
        {
          id: "cookies",
          heading: "Cookies",
          body: (
            <p>
              The website itself does not set marketing cookies. Any future addition that
              does will be announced here and, where required, gated behind consent.
            </p>
          ),
        },
      ]}
    >
      <p className="rounded-2xl border border-white/12 bg-white/5 p-6 text-xs leading-relaxed text-bone/50">
        [LEGAL REVIEW REQUIRED] — have this page reviewed against applicable Indian data
        protection requirements before launch, and confirm the retention period and the
        processors named above.
      </p>
    </LegalLayout>
  );
}
