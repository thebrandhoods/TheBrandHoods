"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app] route error", error);
  }, [error]);

  return (
    <section className="grain relative flex min-h-[80svh] items-center bg-ink pt-[7rem]">
      <div className="shell flex flex-col gap-7 py-20">
        <span className="eyebrow text-bone/60">Something went wrong</span>
        <h1 className="display display-tight text-display-md">
          The page didn&apos;t load correctly.
        </h1>
        <p className="max-w-[48ch] text-base leading-relaxed text-bone/65">
          Try again — if it keeps happening, the issue is on our side and we&apos;d rather
          know about it.
        </p>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={reset} className="btn btn-primary group">
            <span>Try again</span>
          </button>
          <Button href="/" variant="ghost" withArrow={false}>
            Back to home
          </Button>
          <Button href="/contact" variant="ghost">
            Tell us about it
          </Button>
        </div>
        {error.digest ? (
          <p className="text-xs uppercase tracking-[0.2em] text-bone/35">
            Reference: {error.digest}
          </p>
        ) : null}
      </div>
    </section>
  );
}
