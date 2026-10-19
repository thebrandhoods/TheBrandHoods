"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ArrowUpRight, Close, Menu } from "@/components/ui/Icons";
import { locationLabel, navigation, site, telHref, whatsappHref } from "@/lib/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 520 && y > last && !open);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-[0.18em] focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-500",
          scrolled
            ? "border-b border-white/10 bg-ink/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
          hidden ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div className="shell flex h-[4.5rem] items-center justify-between gap-6 md:h-[5.25rem]">
          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className="flex shrink-0 flex-col leading-none"
          >
            <span className="display text-[1.35rem] tracking-[-0.04em] text-bone">
              TB<span className="text-accent">H</span>
            </span>
            <span className="mt-[0.18em] text-[0.45rem] font-semibold uppercase tracking-[0.38em] text-bone/55">
              {site.wordmark.sub}
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navigation.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-colors",
                        active ? "text-bone" : "text-bone/60 hover:text-bone",
                      )}
                    >
                      {item.label}
                      {active ? (
                        <span className="absolute -bottom-2 left-0 h-px w-full bg-accent" />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <span className="hidden text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bone/45 xl:inline">
              {locationLabel}
            </span>
            <Link href="/contact" className="btn btn-primary group hidden sm:inline-flex">
              <span>Start a Project</span>
              <ArrowUpRight className="arrow-slide h-3.5 w-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-bone transition-colors hover:border-white/40 lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile panel — large type, no dropdown. */}
      <div
        className={cn(
          "fixed inset-0 z-[70] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div className="grain relative flex h-full flex-col">
          <div className="shell flex h-[4.5rem] items-center justify-between">
            <span className="display text-[1.35rem] tracking-[-0.04em]">
              TB<span className="text-accent">H</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15"
            >
              <Close className="h-4 w-4" />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className={cn(
              "shell flex flex-1 flex-col justify-center gap-2 pb-10 transition-transform duration-700",
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between border-b border-white/10 py-4"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <span className="display text-[2.4rem] leading-[0.95] text-bone group-hover:text-accent">
                  {item.label}
                </span>
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-bone/40">
                  0{index + 1}
                </span>
              </Link>
            ))}

            <div className="mt-8 flex flex-col gap-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full justify-center"
              >
                <span>Let&apos;s build something</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-bone/55">
                <a href={telHref}>{site.contact.phoneDisplay}</a>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
