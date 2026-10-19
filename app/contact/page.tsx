import type { Metadata } from "next";

import { Artwork } from "@/components/artwork/Artwork";
import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Mail, Phone, Pin, WhatsApp } from "@/components/ui/Icons";
import { TextLink } from "@/components/ui/Button";
import {
  address,
  mailHref,
  serviceAreas,
  site,
  socials,
  telHref,
  whatsappHref,
} from "@/lib/content/site";
import { breadcrumbSchema, buildMetadata, localBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Talk to The Brand Hoods in Zirakpur — phone, WhatsApp, email or a short enquiry form. We reply within one working day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <JsonLd data={localBusinessSchema()} />

      <section className="bg-ink pt-[8rem] md:pt-[10rem]">
        <div className="grain shell grid gap-12 pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-20 lg:pb-24">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <span className="eyebrow text-bone/60">Contact</span>
              <h1 className="display display-tight text-display-lg">
                Tell us what you&apos;re
                <br />
                trying to change.
              </h1>
              <p className="max-w-[54ch] text-base leading-relaxed text-bone/65">
                The more specific you are, the more useful our first reply will be. If you
                already have a brief, even better — but a paragraph about the business is
                enough to start.
              </p>
            </div>

            <ContactForm />
          </div>

          <aside className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
            <Artwork variant="location" ratio="16 / 11" label="Studio location" />

            <div className="flex flex-col gap-5 rounded-2xl border border-white/12 bg-white/5 p-6">
              <h2 className="display text-[1.2rem]">Studio details</h2>
              <ul className="flex flex-col gap-4 text-sm">
                <li className="flex gap-3">
                  <Pin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <address className="not-italic leading-relaxed text-bone/70">
                    {address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </li>
                <li>
                  <a
                    href={telHref}
                    className="flex items-center gap-3 text-bone/70 hover:text-accent"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-accent" />
                    {site.contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={mailHref}
                    className="flex items-center gap-3 text-bone/70 hover:text-accent"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-accent" />
                    {site.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-bone/70 hover:text-accent"
                  >
                    <WhatsApp className="h-4 w-4 shrink-0 text-accent" />
                    Chat on WhatsApp
                  </a>
                </li>
                <li className="text-bone/45">{site.contact.hours}</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bone/40">
                Where we work
              </span>
              <ul className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-white/12 px-3 py-1 text-[0.68rem] tracking-wide text-bone/55"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bone/40">
                Social
              </span>
              <ul className="flex flex-wrap gap-2">
                {socials.map((social) =>
                  social.href ? (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        className="rounded-full border border-white/15 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-bone/70 hover:border-white/40"
                      >
                        {social.label}
                      </a>
                    </li>
                  ) : (
                    <li key={social.label}>
                      <span
                        title="Profile link pending verification"
                        className="rounded-full border border-dashed border-white/20 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-bone/35"
                      >
                        {social.label} +
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <TextLink href="/services">Not sure what you need? Start with the services</TextLink>
          </aside>
        </div>
      </section>
    </>
  );
}
