import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className = "",
  tone = "dark",
}: {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "eyebrow",
        tone === "light" ? "text-muted-dark" : "text-bone/60",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  aside,
  tone = "dark",
  className = "",
  size = "lg",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
  size?: "lg" | "md";
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:items-end lg:gap-12">
        <h2
          className={cn(
            "display",
            size === "lg" ? "text-display-lg" : "text-display-md",
          )}
        >
          {title}
        </h2>
        {intro || aside ? (
          <div className="flex flex-col gap-4">
            {intro ? (
              <p
                className={cn(
                  "max-w-[46ch] text-[0.98rem] leading-relaxed text-pretty",
                  tone === "light" ? "text-ink/70" : "text-bone/65",
                )}
              >
                {intro}
              </p>
            ) : null}
            {aside}
          </div>
        ) : null}
      </div>
    </div>
  );
}
