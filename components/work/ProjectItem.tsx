import Link from "next/link";

import { Artwork } from "@/components/artwork/Artwork";
import type { ArtworkTone } from "@/lib/content/types";
import type { CaseStudy } from "@/lib/content/work";
import { cn } from "@/lib/utils";

type Props = {
  study: CaseStudy;
  ratio?: string;
  tone?: ArtworkTone;
  size?: "lg" | "md" | "sm";
  className?: string;
  /** Compact hides the summary paragraph (used in dense grids). */
  compact?: boolean;
};

export function ProjectItem({
  study,
  ratio = "16 / 9",
  tone = "dark",
  size = "lg",
  className = "",
  compact = false,
}: Props) {
  return (
    <article className={cn("group relative", className)}>
      <Link
        href={`/work/${study.slug}`}
        data-cursor="project"
        className="flex flex-col gap-5 focus-visible:outline-offset-8"
      >
        <Artwork
          variant={study.artwork}
          tone={tone}
          ratio={ratio}
          label={`${study.title} — case study visual`}
        />

        <div className="flex flex-col gap-3">
          <span className="flex flex-wrap items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-bone/45">
            <span className="text-accent">{study.number}</span>
            <span>
              {study.category} · {study.industry}
            </span>
          </span>

          <h3
            className={cn(
              "max-w-[30ch] transition-colors duration-500 group-hover:text-accent",
              size === "lg"
                ? "display text-display-md"
                : size === "md"
                  ? "display text-display-sm"
                  : "display text-[1.35rem]",
            )}
          >
            {study.title}
          </h3>

          {!compact ? (
            <p className="max-w-[54ch] text-sm leading-relaxed text-bone/60">
              {study.summary}
            </p>
          ) : null}

          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-white/10 pt-4">
            <span className="ph bg-ink/60">{study.year}</span>
            <span className="ph bg-ink/60">{study.client}</span>
            <span className="ml-auto flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-bone/70">
              View case study
              <span
                aria-hidden="true"
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
