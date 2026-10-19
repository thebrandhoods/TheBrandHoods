import { ArrowUpRight } from "@/components/ui/Icons";
import { whatsappHref } from "@/lib/content/site";

/** Desktop-only floating contact affordance (spec §73). */
export function FloatingCta() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-accent px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_40px_rgba(218,14,28,0.32)] transition-transform duration-500 hover:-translate-y-0.5 md:inline-flex"
    >
      Let&apos;s talk
      <ArrowUpRight className="arrow-slide h-3.5 w-3.5" />
    </a>
  );
}
