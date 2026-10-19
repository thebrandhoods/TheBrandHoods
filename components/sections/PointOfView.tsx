import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content/studio";

const beliefs = [
  "Posting more isn't a strategy.",
  "Running ads isn't a strategy.",
  "Ranking for keywords isn't a strategy.",
];

export function PointOfView() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-ink py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-[28rem] w-[28rem] rounded-full opacity-[0.12] blur-[130px]"
        style={{ background: "radial-gradient(circle, #da0e1c 0%, transparent 70%)" }}
      />
      <div className="grain relative shell flex flex-col gap-14">
        <SectionHeading
          eyebrow="Point of view"
          title={
            <>
              Marketing shouldn&apos;t feel
              <br />
              like a monthly checklist.
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div className="flex flex-col gap-6">
            {beliefs.map((belief, index) => (
              <Reveal key={belief} mode="line" delay={index * 90}>
                <p className="display text-display-sm text-bone/35">{belief}</p>
              </Reveal>
            ))}
            <Reveal mode="line" delay={280}>
              <p className="display text-display-md text-accent">
                The work starts when we understand what the business needs to become.
              </p>
            </Reveal>
            <p className="max-w-[52ch] text-sm leading-relaxed text-bone/60">
              Only then do we decide what to say, what to build and where to spend. That
              order is the difference between marketing that accumulates and marketing
              that resets every month.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:pt-4">
            <ol className="flex flex-col gap-1">
              {processSteps.map((step, index) => (
                <li key={step.number} className="flex flex-col gap-1">
                  <Reveal mode="line" delay={index * 80}>
                    <span className="display flex items-baseline gap-4 text-[2rem] text-bone md:text-[2.6rem]">
                      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-bone/35">
                        {step.number}
                      </span>
                      {step.title}
                    </span>
                  </Reveal>
                  {index < processSteps.length - 1 ? (
                    <span aria-hidden="true" className="pl-[2.4rem] text-accent">
                      ↓
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
            <p className="max-w-[44ch] text-sm leading-relaxed text-bone/55">
              The same six words every engagement — only the depth changes. See how they
              work in practice on the process page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
