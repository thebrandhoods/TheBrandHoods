import { Artwork } from "@/components/artwork/Artwork";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { localStory } from "@/lib/content/studio";
import { address, serviceAreas, site, telHref } from "@/lib/content/site";

export function LocalPresence() {
  return (
    <section className="grain relative bg-ink py-20 md:py-28">
      <div className="shell grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Local presence"
            title={
              <>
                Built in Zirakpur.
                <br />
                Working beyond it.
              </>
            }
            intro={localStory.body}
          />

          <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-bone/40">
                Studio
              </span>
              <address className="not-italic text-sm leading-relaxed text-bone/70">
                {address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={telHref}
                className="text-sm text-bone/70 underline-offset-4 hover:text-accent hover:underline"
              >
                {site.contact.phoneDisplay}
              </a>
              <span className="text-sm text-bone/45">{site.contact.hours}</span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-bone/40">
                Where clients are
              </span>
              <ul className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-white/12 px-3 py-1 text-[0.68rem] tracking-wide text-bone/60"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Button href="/contact" variant="ghost">
            Book a studio visit
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <Artwork variant="location" ratio="16 / 11" label="Studio location" />
          <p className="text-xs leading-relaxed text-bone/45">
            Map, studio photography and team imagery go here once supplied. The layout is
            built to hold a real photograph without changing the page.
          </p>
        </div>
      </div>
    </section>
  );
}
