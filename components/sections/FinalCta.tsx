import { Button } from "@/components/ui/Button";
import { site, whatsappHref } from "@/lib/content/site";
import { cn } from "@/lib/utils";

export function FinalCta({
  eyebrow = "Let's work together",
  title = (
    <>
      Have something
      <br />
      worth building?
    </>
  ),
  intro = "Tell us what you're trying to change. We'll work out the next step together — usually on a short call, with no deck required.",
  className = "",
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: string;
  className?: string;
}) {
  return (
    <section className={cn("grain relative bg-ink py-20 md:py-28", className)}>
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
        <div className="flex flex-col gap-7">
          <span className="eyebrow text-bone/60">{eyebrow}</span>
          <h2 className="display display-tight text-display-lg">{title}</h2>
        </div>

        <div className="flex flex-col gap-7">
          <p className="max-w-[42ch] text-sm leading-relaxed text-bone/60">{intro}</p>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact">Start the conversation</Button>
            <Button href={whatsappHref} variant="ghost">
              Chat on WhatsApp
            </Button>
          </div>
          <dl className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6 text-sm">
            <div className="flex flex-col gap-1">
              <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bone/40">
                Studio
              </dt>
              <dd className="text-bone/70">{site.contact.locality}</dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bone/40">
                Response time
              </dt>
              <dd className="text-bone/70">Within one working day</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
