"use client";

import { useMemo, useState } from "react";

import { ProjectCursor } from "@/components/work/ProjectCursor";
import { ProjectItem } from "@/components/work/ProjectItem";
import type { CaseStudy } from "@/lib/content/work";
import { cn } from "@/lib/utils";

/** Only filters that actually have work behind them get a button. */
export function WorkGrid({ studies }: { studies: CaseStudy[] }) {
  const filters = useMemo(
    () => ["All", ...Array.from(new Set(studies.map((study) => study.category)))],
    [studies],
  );
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? studies : studies.filter((study) => study.category === active);

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter work">
        {filters.map((filter) => {
          const selected = filter === active;
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300",
                selected
                  ? "border-accent bg-accent text-white"
                  : "border-white/15 text-bone/60 hover:border-white/40 hover:text-bone",
              )}
            >
              {filter}
            </button>
          );
        })}
        <span className="ml-auto hidden text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-bone/35 md:inline">
          {visible.length} project{visible.length === 1 ? "" : "s"}
        </span>
      </div>

      <ProjectCursor>
        <div className="grid gap-14 md:grid-cols-2 md:gap-x-8 md:gap-y-20">
          {visible.map((study, index) => (
            <div
              key={`${active}-${study.slug}`}
              data-animate="fade-up"
              style={{ animationDelay: `${Math.min(index, 4) * 60}ms` }}
              className={cn(
                "animate-[fade-up_0.65s_var(--ease-out-expo)_both]",
                index % 3 === 1 ? "md:pt-20" : "",
              )}
            >
              <ProjectItem study={study} ratio={index % 2 === 0 ? "4 / 3" : "4 / 5"} />
            </div>
          ))}
        </div>
      </ProjectCursor>
    </div>
  );
}
