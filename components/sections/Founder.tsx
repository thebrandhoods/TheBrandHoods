import { Artwork } from "@/components/artwork/Artwork";
import { Quote } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { founder } from "@/lib/content/studio";

export function Founder() {
  return (
    <section className="grain relative bg-ink py-20 md:py-28">
      <div className="shell flex flex-col gap-12">
        <SectionHeading
          eyebrow="People behind the work"
          title={
            <>
              Meet Arjun.
              <br />
              The mind behind the studio.
            </>
          }
          intro="Founder-led by design: the person who scopes the work is the person accountable for it."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <Reveal mode="clip">
            <Artwork variant="founder" ratio="4 / 5" label="Founder portrait placeholder" />
          </Reveal>

          <div className="flex flex-col justify-between gap-10">
            <Reveal className="flex flex-col gap-6">
              <Quote className="h-8 w-8 text-accent" />
              <blockquote className="display text-display-sm leading-[1.02] text-bone">
                &ldquo;{founder.quote}&rdquo;
              </blockquote>
              <div className="flex flex-col gap-1">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-bone">
                  {founder.name}
                </span>
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bone/45">
                  {founder.role}
                </span>
              </div>
            </Reveal>

            <Reveal delay={120} className="flex flex-col gap-4 border-t border-white/10 pt-6">
              <span className="ph w-fit bg-ink/60">Bio pending</span>
              <p className="max-w-[56ch] text-sm leading-relaxed text-bone/60">
                {founder.bio}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
