import { Marquee } from "@/components/ui/Marquee";
import { marqueeWords } from "@/lib/content/site";

const stages = ["Attention", "Interest", "Action", "Growth"];

export function MarqueeBand() {
  return (
    <section
      aria-label="What we work on"
      className="grain relative border-y border-white/10 bg-ink py-10 md:py-16"
    >
      <Marquee duration={44}>
        <div className="flex items-center">
          {marqueeWords.map((word) => (
            <span key={word} className="flex items-center">
              <span className="display px-6 text-[clamp(2rem,6vw,5rem)] text-bone md:px-10">
                {word}
              </span>
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </Marquee>

      <div className="shell mt-8 flex flex-col gap-4 md:mt-12">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-bone/45">
          {stages.map((stage, index) => (
            <span key={stage} className="flex items-center gap-3">
              {stage}
              {index < stages.length - 1 ? (
                <span aria-hidden="true" className="text-accent">
                  →
                </span>
              ) : null}
            </span>
          ))}
        </div>
        <p className="max-w-[68ch] text-sm leading-relaxed text-bone/55">
          Everything we do sits between those four words. Strategy decides which stage
          you&apos;re stuck at; creative decides whether anyone notices; performance
          decides whether it was worth the money.
        </p>
      </div>
    </section>
  );
}
