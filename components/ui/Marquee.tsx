import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  reverse?: boolean;
  duration?: number;
  className?: string;
  /** Small marker rendered at the end of each repetition. */
  marker?: ReactNode;
};

/**
 * Pure CSS marquee: the track holds two identical groups and animates
 * -50%, so it loops seamlessly with no JavaScript and pauses nicely for
 * `prefers-reduced-motion` (globals.css).
 */
export function Marquee({
  children,
  reverse = false,
  duration = 38,
  className = "",
  marker = null,
}: Props) {
  return (
    <div className={`marquee-mask ${className}`} aria-hidden="true">
      <div
        className="marquee-track"
        data-reverse={reverse ? "true" : "false"}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center">
          {children}
          {marker}
        </div>
      </div>
    </div>
  );
}
