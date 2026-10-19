"use client";

import { useState } from "react";

import { Artwork } from "@/components/artwork/Artwork";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/content/studio";
import { cn } from "@/lib/utils";

export function Industries() {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <section className="grain relative border-y border-white/10 bg-ink py-20 md:py-28">
      <div className="shell flex flex-col gap-12">
        <SectionHeading
          eyebrow="Who we work with"
          title={
            <>
              Different businesses.
              <br />
              Different problems.
            </>
          }
          intro="The category matters less than the constraint. Pick the closest match to see where we'd start."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
          <ul className="flex flex-col">
            {industries.map((industry, index) => {
              const isActive = index === active;
              return (
                <li key={industry.name} className="border-t border-white/10 last:border-b">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    aria-pressed={isActive}
                    className="flex w-full items-center justify-between gap-6 py-4 text-left"
                  >
                    <span
                      className={cn(
                        "display text-[1.5rem] transition-colors duration-500 md:text-[1.9rem]",
                        isActive ? "text-accent" : "text-bone/70",
                      )}
                    >
                      {industry.name}
                    </span>
                    <span className="hidden text-right text-xs leading-relaxed text-bone/45 md:block md:max-w-[34ch]">
                      {isActive ? industry.problem : ""}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <Artwork
              variant={current.artwork}
              ratio="4 / 3"
              label={`${current.name} — sector preview`}
            />
            <div className="mt-5 flex flex-col gap-4">
              <h3 className="display text-display-sm">{current.name}</h3>
              <p className="max-w-[46ch] text-sm leading-relaxed text-bone/65">
                {current.problem}
              </p>
              <ul className="flex flex-wrap gap-2">
                {current.services.map((service) => (
                  <li
                    key={service}
                    className="rounded-full border border-white/12 px-3 py-1 text-[0.65rem] font-medium tracking-wide text-bone/60"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
