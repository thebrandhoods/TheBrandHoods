import type { Block } from "@/lib/content/insights";

/**
 * Renders the structured body blocks. The shape is intentionally close to
 * Portable Text, so pointing this at Sanity later means changing the data
 * loader, not this component.
 */
export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-8">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                className="display mt-4 text-[1.5rem] leading-[1.05] text-bone md:text-[1.9rem]"
              >
                {block.text}
              </h2>
            );
          case "ul":
            return (
              <ul key={index} className="flex flex-col gap-3">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-[1.02rem] leading-relaxed text-bone/70"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={index}
                className="display border-l-2 border-accent pl-6 text-[1.4rem] leading-[1.15] text-bone"
              >
                {block.text}
              </blockquote>
            );
          case "callout":
            return (
              <aside
                key={index}
                className="flex flex-col gap-2 rounded-2xl border border-white/12 bg-white/5 p-6"
              >
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent">
                  {block.title}
                </span>
                <p className="text-[1.02rem] leading-relaxed text-bone/75">{block.text}</p>
              </aside>
            );
          case "p":
          default:
            return (
              <p
                key={index}
                className="max-w-[68ch] text-[1.05rem] leading-[1.75] text-bone/70"
              >
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}
