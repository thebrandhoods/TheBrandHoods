import Link from "next/link";
import type { ReactNode } from "react";

import { ArrowUpRight } from "./Icons";

type Variant = "primary" | "ghost" | "light" | "dark";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
  ariaLabel?: string;
};

const variants: Record<Variant, string> = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  light: "btn-light",
  dark: "btn-dark",
};

function isExternalHref(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = true,
  ariaLabel,
}: Props) {
  const classes = `btn group ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {withArrow ? <ArrowUpRight className="arrow-slide h-3.5 w-3.5" /> : null}
    </>
  );

  if (isExternalHref(href)) {
    const leavesSite = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={leavesSite ? "_blank" : undefined}
        rel={leavesSite ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const classes = `link-underline group text-xs font-semibold uppercase tracking-[0.18em] ${className}`;
  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight className="arrow-slide h-3.5 w-3.5" />
    </>
  );

  if (isExternalHref(href)) {
    const leavesSite = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        target={leavesSite ? "_blank" : undefined}
        rel={leavesSite ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
