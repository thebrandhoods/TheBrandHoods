"use client";

import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content/studio";
import { cn } from "@/lib/utils";

/**
 * Scroll-driven process: the sticky index on the left tracks which step
 * is currently in view, so the section reads as one continuous timeline
 * rather than six more cards.
 */
export function ProcessTimeline() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll("li");
    if (!items?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index ?? 0);
            setActive(index);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="grain relative bg-ink py-20 md:py-28">
      <div className="shell flex flex-col gap-14">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              Understand. Position.
              <br />
              Create. Launch. Learn. Improve.
            </>
          }
          intro="Six steps, in this order, every time. Clients usually recognise the point where previous agencies skipped ahead."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,1fr)] lg:gap-16">
          <div className="hidden lg:block">
            <div className="sticky top-28 flex flex-col gap-6">
              <span className="display text-[6rem] leading-none text-accent tabular-nums">
                {String(active + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-bone/40">
                  Step {String(active + 1).padStart(2, "0")} / 06
                </span>
                <span className="display text-display-sm">
                  {processSteps[active]?.title}
                </span>
              </div>
              <ol className="flex flex-col gap-2 border-t border-white/10 pt-4">
                {processSteps.map((step, index) => (
                  <li
                    key={step.number}
                    className={cn(
                      "flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] transition-colors",
                      index === active ? "text-bone" : "text-bone/35",
                    )}
                  >
                    <span
                      className={cn(
                        "h-px w-6 transition-all duration-500",
                        index === active ? "w-10 bg-accent" : "bg-bone/25",
                      )}
                    />
                    {step.title}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <ol ref={listRef} className="flex flex-col">
            {processSteps.map((step, index) => (
              <li
                key={step.number}
                data-index={index}
                className="border-t border-white/10 py-8 last:border-b md:py-10"
              >
                <Reveal className="grid gap-4 md:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] md:gap-10">
                  <div className="flex items-center gap-4 lg:hidden">
                    <span className="display text-[2rem] text-accent">{step.number}</span>
                    <span className="display text-[1.4rem]">{step.title}</span>
                  </div>
                  <div className="hidden flex-col gap-3 lg:flex">
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-bone/40">
                      Step {step.number}
                    </span>
                    <span className="display text-display-sm">{step.title}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="max-w-[58ch] text-base leading-relaxed text-bone/70">
                      {step.body}
                    </p>
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-bone/40">
                      {step.detail}
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
