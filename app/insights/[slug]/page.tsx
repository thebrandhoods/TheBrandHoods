import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Artwork } from "@/components/artwork/Artwork";
import { ArticleBody } from "@/components/insights/ArticleBody";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { FinalCta } from "@/components/sections/FinalCta";
import { TextLink } from "@/components/ui/Button";
import { getAuthor, getPost, posts } from "@/lib/content/insights";
import { articleSchema, breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/insights/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.seo.title,
    description: post.seo.description,
    path: `/insights/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    authors: [getAuthor(post.author)?.name ?? "The Brand Hoods"],
  });
}

export default async function ArticlePage(props: PageProps<"/insights/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const author = getAuthor(post.author);
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: post.title, path: `/insights/${post.slug}` },
        ])}
      />
      <JsonLd data={articleSchema(post, author?.name ?? "The Brand Hoods")} />

      <article>
        <header className="bg-ink pt-[7.5rem] md:pt-[9.5rem]">
          <div className="grain shell flex flex-col gap-8 pb-12">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-3 text-[0.62rem] uppercase tracking-[0.24em] text-bone/40"
            >
              <Link href="/insights" className="hover:text-bone">
                Insights
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-bone/70">{post.category}</span>
            </nav>

            <div className="flex flex-col gap-6 lg:max-w-[54rem]">
              <span className="eyebrow text-bone/60">{post.readTime}</span>
              <h1 className="display display-tight text-display-lg">{post.title}</h1>
              <p className="max-w-[62ch] text-base leading-relaxed text-bone/65">
                {post.excerpt}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-[0.68rem] uppercase tracking-[0.2em] text-bone/50">
              <span className="text-bone/80">{author?.name ?? "The Brand Hoods"}</span>
              <span>{author?.role}</span>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span>Updated {formatDate(post.updatedAt)}</span>
            </div>
          </div>
        </header>

        <div className="shell">
          <Artwork
            variant={post.artwork}
            ratio="16 / 9"
            label={post.title}
            tagged={false}
          />
        </div>

        <div className="grain shell grid gap-12 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.32fr)] lg:gap-16">
          <div className="lg:max-w-[46rem]">
            <ArticleBody blocks={post.body} />
          </div>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <div className="flex flex-col gap-3 rounded-2xl border border-white/12 bg-white/5 p-6">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bone/40">
                Written by
              </span>
              <span className="display text-[1.1rem]">
                {author?.name ?? "The Brand Hoods"}
              </span>
              <span className="text-xs text-bone/50">{author?.role}</span>
              <p className="mt-2 text-xs leading-relaxed text-bone/50">
                We write about the work we do for businesses around Zirakpur and the
                Chandigarh Tricity.
              </p>
              <TextLink href="/contact" className="mt-2">
                Ask a question
              </TextLink>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bone/40">
                Keep reading
              </span>
              <ul className="flex flex-col">
                {related.map((item) => (
                  <li key={item.slug} className="border-t border-white/10 last:border-b">
                    <Link
                      href={`/insights/${item.slug}`}
                      className="flex flex-col gap-1 py-4 text-sm text-bone/70 hover:text-accent"
                    >
                      <span className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-bone/35">
                        {item.category}
                      </span>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <section className="grain relative border-t border-white/10 bg-ink py-16 md:py-20">
          <div className="shell flex flex-col gap-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="display text-display-md">More from the studio.</h2>
              <TextLink href="/insights">All insights</TextLink>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={`card-${item.slug}`} post={item} />
              ))}
            </div>
          </div>
        </section>
      </article>

      <FinalCta
        eyebrow="Work with us"
        title={
          <>
            Reading is cheap.
            <br />
            Fixing it isn&apos;t.
          </>
        }
        intro="If something in this article describes your business, that's usually the moment to have a conversation."
      />
    </>
  );
}
