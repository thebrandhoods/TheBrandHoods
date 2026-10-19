import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { navigation } from "@/lib/content/site";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[80svh] items-center bg-ink pt-[7rem]">
      <div className="shell grid w-full gap-12 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] lg:items-center">
        <div className="flex flex-col gap-7">
          <span className="eyebrow text-bone/60">Error 404</span>
          <h1 className="display display-tight text-display-lg">
            Looks like this page
            <br />
            took a wrong turn.
          </h1>
          <p className="max-w-[48ch] text-base leading-relaxed text-bone/65">
            The link is broken, the page moved, or it never existed. Either way, nothing
            useful is down here.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/">Back to home</Button>
            <Button href="/work" variant="ghost" withArrow={false}>
              See the work
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span
            aria-hidden="true"
            className="display text-[clamp(6rem,18vw,12rem)] leading-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(218, 14, 28, 0.8)",
            }}
          >
            404
          </span>
          <nav aria-label="Site" className="flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-bone/55 transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
