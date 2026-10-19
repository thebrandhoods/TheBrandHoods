import Link from "next/link";

import { Wordmark } from "@/components/layout/Wordmark";
import { ArrowUpRight, Mail, Phone, Pin, WhatsApp } from "@/components/ui/Icons";
import { services } from "@/lib/content/services";
import {
  address,
  footerNavigation,
  mailHref,
  serviceAreas,
  site,
  socials,
  telHref,
  whatsappHref,
} from "@/lib/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-ink text-bone">
      <div className="shell grid gap-14 py-16 md:py-24 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-6">
          <Wordmark size="lg" />
          <p className="max-w-[30ch] text-sm leading-relaxed text-bone/60">
            {site.tagline} Based in Zirakpur, working with businesses across the
            Tricity and beyond.
          </p>
          <ul className="flex flex-wrap gap-3">
            {socials.map((social) =>
              social.href ? (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-white/15 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-bone/75 transition-colors hover:border-white/40 hover:text-bone"
                  >
                    {social.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
              ) : (
                <li key={social.label}>
                  <span
                    title="Profile link pending verification"
                    className="inline-flex items-center gap-2 rounded-full border border-dashed border-white/20 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-bone/40"
                  >
                    {social.label}
                    <span aria-hidden="true">+</span>
                  </span>
                </li>
              ),
            )}
          </ul>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-4">
          <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-bone/45">
            Navigate
          </h2>
          <ul className="flex flex-col gap-3">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-bone/70 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-4">
          <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-bone/45">
            Services
          </h2>
          <ul className="flex flex-col gap-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-bone/70 transition-colors hover:text-accent"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-bone/45">
            Studio
          </h2>
          <ul className="flex flex-col gap-4 text-sm text-bone/70">
            <li className="flex gap-3">
              <Pin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <address className="not-italic leading-relaxed">
                {address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
            <li>
              <a href={telHref} className="flex items-center gap-3 hover:text-accent">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={mailHref} className="flex items-center gap-3 hover:text-accent">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-accent"
              >
                <WhatsApp className="h-4 w-4 shrink-0 text-accent" />
                WhatsApp us
              </a>
            </li>
            <li className="text-bone/45">{site.contact.hours}</li>
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-white/10 py-6 text-[0.7rem] text-bone/45 md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {site.legalName}. All rights reserved.
        </p>
        <p className="order-3 md:order-2">
          Serving {serviceAreas.slice(0, 4).join(" · ")}
        </p>
        <div className="order-2 flex gap-6 md:order-3">
          <Link href="/privacy" className="hover:text-bone">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-bone">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
