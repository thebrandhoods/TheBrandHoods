import type { ArtworkTone, ArtworkVariant } from "@/lib/content/types";

/**
 * Placeholder art system.
 *
 * No client work assets exist yet, so every visual on the site is a
 * composition built from type, rules and colour instead of borrowed
 * stock photography. Each frame is labelled `[ PLACEHOLDER ART ]` so
 * nobody mistakes it for real portfolio work (spec §39/§50).
 */

type Props = {
  variant: ArtworkVariant;
  tone?: ArtworkTone;
  label?: string;
  /** Hide the placeholder tag for purely decorative uses. */
  tagged?: boolean;
  className?: string;
  ratio?: string;
};

const toneStyles: Record<ArtworkTone, { surface: string; text: string; line: string }> = {
  dark: {
    surface: "bg-ink-2",
    text: "text-bone",
    line: "rgba(255,255,255,0.16)",
  },
  light: {
    surface: "bg-bone-2",
    text: "text-ink",
    line: "rgba(10,10,11,0.16)",
  },
  accent: {
    surface: "bg-accent",
    text: "text-white",
    line: "rgba(255,255,255,0.28)",
  },
};

export function Artwork({
  variant,
  tone = "dark",
  label,
  tagged = true,
  className = "",
  ratio = "4 / 3",
}: Props) {
  const t = toneStyles[tone];
  const content = renderers[variant](t);
  const isLight = tone === "light";

  return (
    <div
      className={`media-frame grain relative isolate flex w-full items-center justify-center overflow-hidden ${t.surface} ${t.text} ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label ? `${label} — placeholder artwork` : "Placeholder artwork"}
      data-placeholder="true"
    >
      {/* Stage keeps every composition at a sensible scale inside very
          wide or very tall frames so nothing stretches out of proportion. */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Bottom inset clears the placeholder tag; the max sizes stop a
            composition stretching to fill very wide or very tall frames. */}
        <div className="h-full max-h-[32rem] w-full max-w-[44rem] pb-8">{content}</div>
      </div>
      {tagged ? (
        <span
          className={`ph absolute bottom-3 left-3 z-10 ${
            isLight ? "ph-light bg-bone/70" : "bg-ink/60"
          }`}
        >
          Placeholder art
        </span>
      ) : null}
      {label ? (
        <span className="sr-only">{label}</span>
      ) : null}
    </div>
  );
}

type Tone = (typeof toneStyles)[ArtworkTone];

const renderers: Record<ArtworkVariant, (tone: Tone) => React.ReactNode> = {
  poster: () => (
    <div className="flex h-full flex-col p-[6%]">
      <div className="flex items-start justify-between">
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] opacity-60">
          Identity
        </span>
        <span className="h-3 w-3 rounded-full bg-accent" />
      </div>
      <div className="display flex flex-1 items-center text-[clamp(1.4rem,8.5cqw,3rem)] leading-[0.84]">
        <span>
          <span className="block">Make it</span>
          <span className="flourish block text-accent">worth</span>
          <span className="block">remembering</span>
        </span>
      </div>
      <div className="flex items-end justify-between gap-4">
        <div className="h-px flex-1 bg-current opacity-25" />
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] opacity-60">
          System / 01
        </span>
      </div>
    </div>
  ),

  browser: (t) => (
    <div
      className="flex h-full flex-col overflow-hidden"
      style={{
        border: `1px solid ${t.line}`,
        borderRadius: "0.9rem",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <div
        className="flex items-center gap-2 px-[4%] py-[3%]"
        style={{ borderBottom: `1px solid ${t.line}` }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-25" />
        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-25" />
        <span className="ml-3 h-2 w-[34%] rounded-full bg-current opacity-10" />
        <span className="ml-auto h-2 w-[12%] rounded-full bg-accent/70" />
      </div>

      <div className="flex flex-1 flex-col gap-[5%] p-[5%]">
        <div className="display text-[clamp(0.95rem,4.6cqw,1.5rem)] leading-[0.92]">
          <span className="block">Clear pages.</span>
          <span className="block text-accent">Fewer clicks.</span>
        </div>

        <div className="flex flex-col gap-[3%]">
          <span className="block h-1.5 w-[88%] rounded-full bg-current opacity-15" />
          <span className="block h-1.5 w-[64%] rounded-full bg-current opacity-15" />
        </div>

        <div className="flex gap-[4%]">
          <span className="flex h-7 flex-1 items-center justify-center rounded-md bg-accent text-[0.45rem] font-semibold uppercase tracking-[0.2em] text-white">
            Enquire
          </span>
          <span
            className="h-7 flex-1 rounded-md"
            style={{ background: t.line }}
          />
        </div>

        <div className="grid flex-1 grid-cols-3 gap-[4%]">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex flex-col justify-end gap-2 rounded-md p-[8%]"
              style={{ background: i === 1 ? "var(--color-accent)" : t.line }}
            >
              <span className="block h-1.5 w-[70%] rounded-full bg-current opacity-45" />
              <span className="block h-1.5 w-[45%] rounded-full bg-current opacity-25" />
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-between rounded-md px-[4%] py-[3%]"
          style={{ border: `1px solid ${t.line}` }}
        >
          <span className="h-2 w-[28%] rounded-full bg-current opacity-15" />
          <span className="h-2 w-[16%] rounded-full bg-current opacity-10" />
        </div>
      </div>
    </div>
  ),

  mobile: () => (
    <div className="relative flex h-full items-center justify-center gap-[4%]">
      <div className="h-[74%] w-[26%] rotate-[-6deg] rounded-[1.1rem] border border-current/20 bg-ink p-[3%] opacity-90">
        <span className="block h-1 w-[42%] rounded-full bg-current opacity-30" />
        <span className="mt-[8%] block h-8 w-full rounded-md bg-accent/80" />
        <span className="mt-[6%] block h-1.5 w-[80%] rounded-full bg-current opacity-20" />
        <span className="mt-[3%] block h-1.5 w-[62%] rounded-full bg-current opacity-20" />
      </div>
      <div className="h-[84%] w-[30%] rounded-[1.3rem] border border-current/25 bg-ink p-[3.5%] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
        <span className="mx-auto block h-1 w-[30%] rounded-full bg-current opacity-35" />
        <span className="mt-[7%] block h-[18%] w-full rounded-md bg-current opacity-10" />
        <div className="mt-[7%] grid grid-cols-2 gap-[6%]">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`block h-6 rounded-md ${i === 0 ? "bg-accent" : "bg-current/10"}`}
            />
          ))}
        </div>
        <span className="mt-[8%] block h-1.5 w-[74%] rounded-full bg-current opacity-20" />
        <span className="mt-[4%] block h-1.5 w-[50%] rounded-full bg-current opacity-20" />
      </div>
      <div className="h-[70%] w-[24%] rotate-[7deg] rounded-[1.1rem] border border-current/20 bg-ink p-[3%] opacity-80">
        <span className="block h-1 w-[52%] rounded-full bg-current opacity-30" />
        <span className="mt-[10%] block h-1.5 w-[86%] rounded-full bg-current opacity-20" />
        <span className="mt-[4%] block h-1.5 w-[64%] rounded-full bg-current opacity-20" />
      </div>
    </div>
  ),

  campaign: () => (
    <div className="grid h-full grid-cols-2 grid-rows-2 gap-[3%] p-[4%]">
      {[
        { bg: "bg-accent", text: "Launch" },
        { bg: "", text: "Offer" },
        { bg: "", text: "Story" },
        { bg: "bg-accent", text: "Proof" },
      ].map((tile, i) => (
        <div
          key={tile.text}
          className={`relative flex flex-col justify-between rounded-lg p-[5%] ${tile.bg} ${
            tile.bg ? "text-white" : "border border-current/15"
          } ${i === 1 ? "bg-current/5" : ""}`}
        >
          <span className="text-[0.55rem] font-semibold uppercase tracking-[0.24em] opacity-70">
            0{i + 1}
          </span>
          <span className="display text-[clamp(0.8rem,3.8cqw,1.2rem)]">{tile.text}</span>
        </div>
      ))}
    </div>
  ),

  editorial: () => (
    <div className="flex h-full flex-col justify-between p-[7%]">
      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] opacity-55">
        Editorial
      </span>
      <p className="flourish max-w-[22ch] text-[clamp(1.05rem,5.6cqw,1.9rem)] leading-[1.05]">
        &ldquo;Say something only this business could say.&rdquo;
      </p>
      <div className="space-y-2">
        <span className="block h-1.5 w-[92%] rounded-full bg-current opacity-15" />
        <span className="block h-1.5 w-[78%] rounded-full bg-current opacity-15" />
        <span className="block h-1.5 w-[64%] rounded-full bg-current opacity-15" />
        <span className="mt-4 block h-px w-[30%] bg-accent" />
      </div>
    </div>
  ),

  packaging: () => (
    <div className="relative flex h-full items-center justify-center">
      <div className="relative w-[46%] rotate-[-8deg]">
        <div className="aspect-[3/4] rounded-lg border border-current/25 bg-ink-3 p-[10%] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
          <span className="block h-1.5 w-[40%] rounded-full bg-accent" />
          <span className="mt-[18%] block h-2 w-[72%] rounded-full bg-current opacity-25" />
          <span className="mt-[6%] block h-2 w-[54%] rounded-full bg-current opacity-25" />
          <div className="absolute bottom-[10%] left-[10%] right-[10%] flex items-end justify-between">
            <span className="text-[0.5rem] font-semibold uppercase tracking-[0.24em] opacity-60">
              Est. Zirakpur
            </span>
            <span className="h-6 w-6 rounded-full border border-accent" />
          </div>
        </div>
      </div>
      <div className="absolute right-[8%] bottom-[8%] w-[34%] rotate-[6deg] rounded-lg border border-current/20 bg-current/5 p-[6%]">
        <span className="block h-1.5 w-[60%] rounded-full bg-current opacity-20" />
        <span className="mt-[8%] block h-1.5 w-[80%] rounded-full bg-current opacity-20" />
      </div>
    </div>
  ),

  search: () => (
    <div className="flex h-full flex-col gap-[4%] p-[5%]">
      <div className="flex items-center gap-3 rounded-full border border-current/20 px-[4%] py-[2.5%]">
        <span className="h-3 w-3 rounded-full border-2 border-accent" />
        <span className="h-1.5 w-[46%] rounded-full bg-current opacity-20" />
        <span className="ml-auto text-[0.5rem] font-semibold uppercase tracking-[0.2em] opacity-50">
          Local
        </span>
      </div>
      <div className="grid flex-1 grid-cols-[1.1fr_1fr] gap-[4%]">
        <div className="flex flex-col gap-[6%]">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`flex items-center gap-[6%] rounded-md p-[6%] ${
                i === 0 ? "bg-accent text-white" : "border border-current/12 bg-current/5"
              }`}
            >
              <span className="text-[0.55rem] font-semibold tabular-nums opacity-70">
                0{i + 1}
              </span>
              <span className="flex-1 space-y-2">
                <span className="block h-1.5 w-[70%] rounded-full bg-current opacity-25" />
                <span className="block h-1.5 w-[44%] rounded-full bg-current opacity-15" />
              </span>
            </div>
          ))}
        </div>
        <div className="hatch relative rounded-md border border-current/15">
          <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-sm bg-accent" />
          <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/60" />
        </div>
      </div>
    </div>
  ),

  signal: () => (
    <div className="flex h-full flex-col justify-between p-[5%]">
      <div className="flex items-start justify-between">
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] opacity-55">
          Campaign
        </span>
        <span className="rounded-full border border-accent px-2 py-1 text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-accent">
          Live
        </span>
      </div>
      <div className="flex h-[52%] items-end gap-[4%]">
        {[22, 34, 28, 46, 58, 72, 88].map((h, i) => (
          <span
            key={h}
            className={`flex-1 rounded-t-sm ${i > 3 ? "bg-accent" : "bg-current/25"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="flex items-end justify-between">
        <span className="display text-[clamp(0.9rem,4cqw,1.35rem)]">Attention → Action</span>
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] opacity-55">
          Measured
        </span>
      </div>
    </div>
  ),

  founder: () => (
    <div className="relative flex h-full items-end">
      <div className="hatch absolute inset-0" />
      <div className="absolute left-[8%] top-[10%] h-[70%] w-[62%] rounded-[999px_999px_24px_24px] bg-current/10" />
      <div className="absolute left-[26%] top-[22%] h-[38%] w-[26%] rounded-full bg-accent/85" />
      <div className="absolute left-[18%] bottom-[14%] h-[32%] w-[42%] rounded-t-[3rem] bg-current/15" />
      <div className="relative z-10 p-[6%]">
        <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.28em] opacity-60">
          Portrait
        </span>
        <span className="display mt-2 block text-[clamp(0.95rem,4.2cqw,1.4rem)]">
          Founder / CEO
        </span>
      </div>
    </div>
  ),

  location: () => (
    <div className="relative flex h-full items-center justify-center">
      <div className="hatch-light absolute inset-0 opacity-60" />
      <div className="hatch absolute inset-0" />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
          <span className="h-3 w-3 rounded-full bg-white" />
        </span>
        <span className="display text-[clamp(0.95rem,4.4cqw,1.4rem)]">Zirakpur</span>
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] opacity-60">
          30.64° N / 76.81° E
        </span>
      </div>
      <span className="absolute bottom-4 left-4 text-[0.55rem] font-semibold uppercase tracking-[0.24em] opacity-45">
        Tricity
      </span>
      <span className="absolute top-4 right-4 text-[0.55rem] font-semibold uppercase tracking-[0.24em] opacity-45">
        Punjab
      </span>
    </div>
  ),
};
