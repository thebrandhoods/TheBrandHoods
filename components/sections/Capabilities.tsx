import { CapabilityList } from "@/components/services/CapabilityList";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Capabilities() {
  return (
    <section id="capabilities" className="grain relative bg-ink py-20 md:py-28">
      <div className="shell flex flex-col gap-12">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              One team.
              <br />
              A lot of ways to move
              <br />
              a brand forward.
            </>
          }
          intro="From the first positioning decision to the campaign that reaches the market. Hover a discipline to see the kind of work it produces."
        />
        <CapabilityList />
      </div>
    </section>
  );
}
