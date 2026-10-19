"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { ArrowUpRight } from "@/components/ui/Icons";

/**
 * Desktop-only cursor label for project links. Any descendant marked with
 * `data-cursor="project"` activates the pill; movement is written straight
 * to the node's transform inside a rAF so hovering never re-renders React.
 */
export function ProjectCursor({
  children,
  label = "View project",
}: {
  children: ReactNode;
  label?: string;
}) {
  const pillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pill = pillRef.current;
    if (!pill) return;

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      pill.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      const target = event.target as HTMLElement | null;
      const active = Boolean(target?.closest('[data-cursor="project"]'));
      pill.dataset.active = active ? "true" : "false";
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onLeave = () => {
      pill.dataset.active = "false";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {children}
      <div ref={pillRef} className="project-cursor" aria-hidden="true">
        <span>
          {label}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </>
  );
}
