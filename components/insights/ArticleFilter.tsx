"use client";

import { useState } from "react";

import { ArticleCard } from "@/components/insights/ArticleCard";
import { posts } from "@/lib/content/insights";
import { cn } from "@/lib/utils";

/** Editorial listing with category filters — no sidebar, no pagination noise. */
export function ArticleFilter() {
  const available = ["All", ...Array.from(new Set(posts.map((post) => post.category)))];
  const [active, setActive] = useState("All");

  const visible = active === "All" ? posts : posts.filter((post) => post.category === active);

  return (
    <div className="flex flex-col gap-8">
      <div
        className="scroll-x flex items-center gap-2 overflow-x-auto pb-1"
        role="tablist"
        aria-label="Filter insights by category"
      >
        {available.map((category) => {
          const selected = category === active;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(category)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300",
                selected
                  ? "border-accent bg-accent text-white"
                  : "border-white/15 text-bone/60 hover:border-white/40 hover:text-bone",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <ul className="flex flex-col">
        {visible.map((post, index) => (
          <li
            key={`${active}-${post.slug}`}
            data-animate="fade-up"
            style={{ animationDelay: `${Math.min(index, 5) * 50}ms` }}
            className="animate-[fade-up_0.6s_var(--ease-out-expo)_both]"
          >
            <ArticleCard post={post} variant="row" />
          </li>
        ))}
      </ul>
    </div>
  );
}
