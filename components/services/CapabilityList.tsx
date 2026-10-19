"use client";

import Link from "next/link";
import { useState } from "react";

import { Artwork } from "@/components/artwork/Artwork";
import { ArrowUpRight } from "@/components/ui/Icons";
import { capabilityGroups } from "@/lib/content/services";
import { cn } from "@/lib/utils";

export function CapabilityList() {
  const [active, setActive] = useState(0);
  const current = capabilityGroups[active];

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
      <ul className="flex flex-col">
        {capabilityGroups.map((group, index) => {
          const isActive = index === active;
          return (
            <li key={group.slug} className="border-t border-white/10 last:border-b">
              <Link
                href={`/services/${group.slug}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className="group relative flex flex-col gap-3 py-6 md:py-7"
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute left-0 top-0 h-px w-full origin-left bg-accent transition-transform duration-700",
                    isActive ? "scale-x-100" : "scale-x-0",
                  )}
                />
                <div className="flex items-baseline gap-5">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-bone/40">
                    {group.number}
                  </span>
                  <span
                    className={cn(
                      "display text-display-sm transition-colors duration-500",
                      isActive ? "text-accent" : "text-bone",
                    )}
                  >
                    {group.title}
                  </span>
                  <ArrowUpRight
                    className={cn(
                      "ml-auto h-4 w-4 transition-all duration-500",
                      isActive
                        ? "translate-x-0 text-accent opacity-100"
                        : "-translate-x-2 opacity-0",
                    )}
                  />
                </div>

                <div className="grid gap-3 pl-0 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:gap-8 md:pl-[3.1rem]">
                  <p className="text-sm leading-relaxed text-bone/60">
                    {group.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/12 px-3 py-1 text-[0.65rem] font-medium tracking-wide text-bone/55"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobile: preview sits inside the active row instead of beside it. */}
                <div
                  className={cn(
                    "overflow-hidden transition-[max-height,opacity] duration-700 lg:hidden",
                    isActive ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <Artwork
                    variant={group.artwork}
                    ratio="16 / 10"
                    label={`${group.title} capability preview`}
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="relative hidden lg:block">
        <div className="sticky top-28">
          <div className="relative">
            {capabilityGroups.map((group, index) => (
              <div
                key={group.slug}
                aria-hidden={index !== active}
                className={cn(
                  "transition-opacity duration-700",
                  index === active
                    ? "opacity-100"
                    : "pointer-events-none absolute inset-0 opacity-0",
                )}
              >
                <Artwork
                  variant={group.artwork}
                  ratio="4 / 5"
                  label={`${group.title} capability preview`}
                />
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between gap-4">
            <p className="max-w-[30ch] text-sm text-bone/55">{current.description}</p>
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-bone/40">
              {current.number} / {String(capabilityGroups.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
