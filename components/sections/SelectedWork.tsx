import { ProjectCursor } from "@/components/work/ProjectCursor";
import { ProjectItem } from "@/components/work/ProjectItem";
import { TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/lib/content/work";

/**
 * Deliberately irregular: one wide opener, an asymmetric pair, a low
 * offset study, a full-bleed campaign, then a half-width closer. No
 * six identical cards.
 */
export function SelectedWork() {
  const [first, second, third, fourth, fifth, sixth] = caseStudies;

  return (
    <section id="work" className="grain relative bg-ink py-20 md:py-28">
      <div className="shell flex flex-col gap-14">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Work that had
              <br />
              somewhere to go.
            </>
          }
          intro="We don't create work to fill a portfolio. Every project starts with a business problem, a clear ambition and something worth changing."
          aside={
            <div className="flex flex-col gap-3">
              <TextLink href="/work">All case studies</TextLink>
              <span className="ph w-fit bg-ink/60">Client names & figures pending</span>
            </div>
          }
        />

        <ProjectCursor>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-x-8 md:gap-y-24">
            {first ? (
              <Reveal className="md:col-span-12">
                <ProjectItem study={first} ratio="16 / 9" />
              </Reveal>
            ) : null}

            {second ? (
              <Reveal mode="clip" className="md:col-span-7">
                <ProjectItem study={second} ratio="4 / 5" />
              </Reveal>
            ) : null}

            {third ? (
              <Reveal mode="clip" delay={120} className="md:col-span-5 md:pt-24">
                <ProjectItem study={third} ratio="4 / 5" />
              </Reveal>
            ) : null}

            {fourth ? (
              <Reveal className="md:col-span-6">
                <ProjectItem study={fourth} ratio="4 / 3" />
              </Reveal>
            ) : null}

            {fifth ? (
              <Reveal mode="clip" delay={120} className="md:col-span-6 md:pt-24">
                <ProjectItem study={fifth} ratio="4 / 3" />
              </Reveal>
            ) : null}

            {sixth ? (
              <Reveal className="md:col-span-12">
                <ProjectItem study={sixth} ratio="16 / 9" />
              </Reveal>
            ) : null}
          </div>
        </ProjectCursor>
      </div>
    </section>
  );
}
