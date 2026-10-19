import Link from "next/link";

import { Artwork } from "@/components/artwork/Artwork";
import { getAuthor, type Post } from "@/lib/content/insights";
import { cn, formatDate } from "@/lib/utils";

export function ArticleCard({
  post,
  variant = "default",
  className = "",
}: {
  post: Post;
  variant?: "default" | "lead" | "row";
  className?: string;
}) {
  const author = getAuthor(post.author);

  if (variant === "row") {
    return (
      <Link
        href={`/insights/${post.slug}`}
        className={cn(
          "group flex flex-col gap-2 border-t border-white/10 py-6 last:border-b md:grid md:grid-cols-[0.28fr_1fr_auto] md:items-baseline md:gap-8",
          className,
        )}
      >
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent">
          {post.category}
        </span>
        <h3 className="display text-[1.35rem] text-bone transition-colors duration-500 group-hover:text-accent md:text-[1.6rem]">
          {post.title}
        </h3>
        <span className="text-[0.68rem] text-bone/45">
          {formatDate(post.publishedAt)} · {post.readTime}
        </span>
      </Link>
    );
  }

  const isLead = variant === "lead";

  return (
    <article className={cn("group", className)}>
      <Link href={`/insights/${post.slug}`} className="flex flex-col gap-5">
        <Artwork
          variant={post.artwork}
          tone={isLead ? "dark" : "light"}
          ratio={isLead ? "16 / 10" : "16 / 10"}
          label={post.title}
        />
        <div className="flex flex-wrap items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em]">
          <span className="text-accent">{post.category}</span>
          <span className="text-bone/40">
            {formatDate(post.publishedAt)} · {post.readTime}
          </span>
        </div>
        <h3
          className={cn(
            "display text-bone transition-colors duration-500 group-hover:text-accent",
            isLead ? "text-display-md" : "text-[1.6rem]",
          )}
        >
          {post.title}
        </h3>
        <p
          className={cn(
            "text-sm leading-relaxed text-bone/60",
            isLead ? "max-w-[56ch] text-base" : "max-w-[46ch]",
          )}
        >
          {post.excerpt}
        </p>
        <span className="flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-bone/70">
          {author?.name ?? "The Brand Hoods"}
          <span
            aria-hidden="true"
            className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            ↗
          </span>
        </span>
      </Link>
    </article>
  );
}
