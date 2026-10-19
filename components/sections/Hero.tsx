import { Artwork } from "@/components/artwork/Artwork";
import { Button, TextLink } from "@/components/ui/Button";
import { ArrowDown } from "@/components/ui/Icons";
import { locationLabel } from "@/lib/content/site";

const disciplines = ["Brand", "Digital", "Content", "Performance"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-[7.5rem] md:pt-[9.5rem]">
      {/* soft accent light, kept subtle — texture rather than decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[32rem] w-[32rem] rounded-full opacity-[0.18] blur-[120px]"
        style={{ background: "radial-gradient(circle, #da0e1c 0%, transparent 70%)" }}
      />
      <div className="grain relative">
        <div className="shell grid gap-12 pb-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] lg:gap-16 lg:pb-20">
          <div className="flex flex-col justify-between gap-10 pt-4">
            <div className="flex flex-col gap-7">
              <span className="eyebrow text-bone/60">
                Creative growth studio
                <span className="hidden text-bone/35 sm:inline">— {locationLabel}</span>
              </span>

              <h1 className="flex flex-col gap-4">
                <span className="display text-[clamp(1.1rem,1.8vw,1.6rem)] text-bone/40">
                  Brands don&apos;t grow by being{" "}
                  <span className="flourish lower-case">louder.</span>
                </span>
                <span className="display display-tight block text-display-xl">
                  <span className="block">They grow by</span>
                  <span className="block">
                    being <span className="text-accent">impossible</span>
                  </span>
                  <span className="block">to ignore.</span>
                </span>
              </h1>

              <p className="max-w-[52ch] text-base leading-relaxed text-bone/65 text-pretty">
                We build brands, digital experiences and marketing systems that turn
                attention into action — strategy, creative and performance working from
                the same brief.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap items-center gap-3">
                <Button href="/contact" variant="primary">
                  Start a Project
                </Button>
                <Button href="/work" variant="ghost" withArrow={false}>
                  Explore our work
                </Button>
                <TextLink href="/services" className="ml-1 hidden sm:inline-flex">
                  See how we work
                </TextLink>
              </div>

              <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6">
                {disciplines.map((item) => (
                  <li
                    key={item}
                    className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-bone/45"
                  >
                    {item}
                  </li>
                ))}
                <li className="ml-auto hidden items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-bone/40 md:flex">
                  <ArrowDown className="h-3.5 w-3.5 text-accent" />
                  Scroll
                </li>
              </ul>
            </div>
          </div>

          <div className="relative flex flex-col gap-5 lg:pt-6">
            <Artwork
              variant="browser"
              tone="dark"
              label="Website build — placeholder"
              ratio="4 / 5"
              className="shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
            />
            <div className="flex items-end justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-bone/45">
                  Latest build · 01
                </span>
                <span className="display text-display-sm">[CLIENT NAME]</span>
              </div>
              <span className="ph bg-ink/70">Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
