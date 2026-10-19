import Link from "next/link";

import { site } from "@/lib/content/site";
import { cn } from "@/lib/utils";

/**
 * The Brand Hoods wordmark, rebuilt typographically: "TB" in the surface
 * colour, "H" in the brand red, with the full name set beneath it.
 */
export function Wordmark({
  tone = "dark",
  size = "md",
  as = "link",
  className = "",
}: {
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  as?: "link" | "static";
  className?: string;
}) {
  const mark = (
    <span className={cn("flex flex-col leading-none", className)}>
      <span
        className={cn(
          "display tracking-[-0.04em]",
          size === "lg"
            ? "text-[2.4rem]"
            : size === "sm"
              ? "text-[1.15rem]"
              : "text-[1.5rem]",
          tone === "light" ? "text-ink" : "text-bone",
        )}
      >
        TB<span className="text-accent">H</span>
      </span>
      <span
        className={cn(
          "mt-[0.15em] font-semibold uppercase",
          size === "lg"
            ? "text-[0.62rem] tracking-[0.42em]"
            : size === "sm"
              ? "text-[0.42rem] tracking-[0.34em]"
              : "text-[0.5rem] tracking-[0.38em]",
          tone === "light" ? "text-ink/60" : "text-bone/55",
        )}
      >
        {site.wordmark.sub}
      </span>
    </span>
  );

  if (as === "static") return mark;

  return (
    <Link href="/" aria-label={`${site.name} — home`} className="inline-flex">
      {mark}
    </Link>
  );
}
