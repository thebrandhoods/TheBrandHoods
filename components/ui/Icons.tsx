import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v16" />
      <path d="m6 14 6 6 6-6" />
    </svg>
  );
}

export function Plus(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  );
}

export function Quote(props: IconProps) {
  return (
    <svg {...base} {...props} strokeWidth={0} fill="currentColor">
      <path d="M9.5 5.5C6.4 6.9 4.5 9.6 4.5 13v5.5h6.3V12H7.6c.2-2 1.4-3.5 3.5-4.4l-1.6-2.1Zm10 0c-3.1 1.4-5 4.1-5 7.5v5.5h6.3V12h-3.2c.2-2 1.4-3.5 3.5-4.4l-1.6-2.1Z" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 3.5h3.2l1.6 4-2 1.4a12 12 0 0 0 5.3 5.3l1.4-2 4 1.6V17a2.5 2.5 0 0 1-2.7 2.5A15.5 15.5 0 0 1 3.5 6.2 2.5 2.5 0 0 1 5 3.5Z" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.8 6.6 8.2 6 8.2-6" />
    </svg>
  );
}

export function Pin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function WhatsApp(props: IconProps) {
  return (
    <svg {...base} {...props} strokeWidth={0} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 0 1 0 16 8 8 0 0 1-4.1-1.1l-.4-.2-2.6.7.7-2.5-.2-.4A8 8 0 0 1 12 4Zm-3 4.2c-.2 0-.5.1-.7.3-.3.3-.8.8-.8 1.8s.7 2 .8 2.1c.1.2 1.4 2.2 3.5 3 1.7.7 2.1.6 2.5.6.5 0 1.4-.5 1.6-1.1.2-.6.2-1 .1-1.2 0-.1-.2-.2-.5-.3l-1.3-.6c-.2-.1-.4-.1-.5.1l-.6.8c-.1.2-.3.2-.5.1a6 6 0 0 1-1.8-1.1 7 7 0 0 1-1.2-1.6c-.1-.2 0-.3.1-.4l.4-.5c.1-.2.1-.3 0-.5l-.5-1.3c-.2-.4-.3-.4-.5-.4h-.1Z" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function Compass(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15 9-2 6-4 1 1-4 5-3Z" />
    </svg>
  );
}
