import { Artwork } from "@/components/artwork/Artwork";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { differentiators, proofPoints } from "@/lib/content/studio";

export function Proof() {
  return (
    <section className="grain relative border-y border-white/10 bg-ink py-20 md:py-28">
      <div className="shell flex flex-col gap-14">
        <SectionHeading
          eyebrow="Why us"
          title={
            <>
              Fewer claims.
              <br />
              More specifics.
            </>
          }
          intro="We publish numbers when they're verified and say so when they aren't. The four figures below stay empty until the studio confirms them."
          aside={<span className="ph w-fit bg-ink/60">Figures pending verification</span>}
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2">
            {proofPoints.map((point) => (
              <div
                key={point.label}
                className="flex flex-col gap-2 bg-ink p-6 md:p-8"
              >
                <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-bone/40">
                  {point.label}
                </dt>
                <dd className="display text-[1.6rem] text-bone/45 md:text-[2rem]">
                  {point.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-6">
            <ul className="flex flex-col">
              {differentiators.map((item) => (
                <li
                  key={item.number}
                  className="grid gap-2 border-t border-white/10 py-5 last:border-b md:grid-cols-[0.55fr_1fr] md:gap-6"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent">
                      {item.number}
                    </span>
                    <span className="display text-[1.1rem] md:text-[1.25rem]">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-bone/60">{item.body}</p>
                </li>
              ))}
            </ul>
            <Artwork variant="signal" ratio="16 / 9" label="Reporting view" />
          </div>
        </div>
      </div>
    </section>
  );
}
