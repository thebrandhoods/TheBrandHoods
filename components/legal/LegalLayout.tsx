import Link from "next/link";
import type { ReactNode } from "react";

export function LegalLayout({
  eyebrow,
  title,
  updated,
  intro,
  sections,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: { id: string; heading: string; body: ReactNode }[];
  children?: ReactNode;
}) {
  return (
    <section className="bg-ink pt-[8rem] md:pt-[10rem]">
      <div className="grain shell grid gap-12 pb-20 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] lg:gap-20">
        <div className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow text-bone/60">{eyebrow}</span>
          <h1 className="display text-display-md">{title}</h1>
          <p className="text-xs uppercase tracking-[0.2em] text-bone/40">{updated}</p>
          <nav aria-label="On this page" className="flex flex-col gap-2 border-t border-white/10 pt-5">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-bone/55 transition-colors hover:text-accent"
              >
                {section.heading}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-10">
          <p className="max-w-[64ch] text-base leading-relaxed text-bone/70">{intro}</p>
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="flex scroll-mt-28 flex-col gap-4">
              <h2 className="display text-[1.3rem] md:text-[1.5rem]">{section.heading}</h2>
              <div className="flex flex-col gap-4 text-sm leading-relaxed text-bone/65">
                {section.body}
              </div>
            </section>
          ))}
          {children}
        </div>
      </div>
    </section>
  );
}
