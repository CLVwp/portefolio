"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useLang } from "@/components/lang-provider";
import { Nav } from "@/components/nav";
import { PixelMosaic } from "@/components/pixel-mosaic";
import { getPost, POSTS } from "@/lib/posts";

function renderMarkdown(content: string) {
  // Minimal renderer: ## headings, `code`, **bold**, paragraphs.
  const blocks = content.split("\n\n");
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return (
        <h2
          className="mt-12 mb-4 text-2xl font-medium tracking-tight"
          key={`h-${i}-${trimmed.slice(3, 20)}`}
        >
          {trimmed.slice(3)}
        </h2>
      );
    }
    const parts = trimmed.split(/(`[^`]+`)/g);
    return (
      <p
        className="mt-6 whitespace-pre-line leading-relaxed text-fg/60"
        key={`p-${i}-${trimmed.slice(0, 20)}`}
      >
        {parts.map((part, j) => {
          if (part.startsWith("`") && part.endsWith("`")) {
            return (
              <code
                className="bg-fg/10 px-1.5 py-0.5 font-mono text-[0.9em] text-fg/90"
                key={`c-${j}-${part.slice(1, 12)}`}
              >
                {part.slice(1, -1)}
              </code>
            );
          }
          // **bold** inline
          const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
          return boldParts.map((bp, k) =>
            bp.startsWith("**") && bp.endsWith("**") ? (
              <strong
                className="font-medium text-fg"
                key={`b-${j}-${k}-${bp.slice(2, 12)}`}
              >
                {bp.slice(2, -2)}
              </strong>
            ) : (
              bp
            ),
          );
        })}
      </p>
    );
  });
}

export function BlogPost({ slug }: { slug: string }) {
  const { t, lang } = useLang();
  const post = getPost(slug);
  if (!post) {
    notFound();
  }

  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-bg text-fg">
      <Nav />

      <main className="mx-auto w-full max-w-3xl px-4 py-12 md:px-8 md:py-16">
        <Link
          className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-fg-muted uppercase transition-colors hover:text-fg"
          href="/blog"
        >
          {t.blog.back}
        </Link>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <span className="border border-hairline px-3 py-1 font-mono text-[10px] tracking-[0.15em] text-fg/60 uppercase">
            {t.blog.tags[post.tag] ?? post.tag}
          </span>
          <span className="font-mono text-xs text-fg/40">
            {new Date(post.date).toLocaleDateString(
              lang === "fr" ? "fr-FR" : "en-US",
              { day: "numeric", month: "long", year: "numeric" },
            )}
          </span>
          <span className="font-mono text-xs text-fg/30">
            {post.readTime} {t.blog.readTime}
          </span>
        </div>

        <h1 className="mt-6 text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
          {post.title[lang]}
        </h1>

        <div className="mt-4 h-px w-full bg-gradient-to-r from-violet-600/50 to-transparent" />

        <article className="mt-12 text-base">
          {renderMarkdown(post.content[lang])}
        </article>

        <div className="mt-24 border-t border-hairline pt-12">
          <p className="font-mono text-[10px] tracking-[0.2em] text-fg/40 uppercase">
            {t.blog.next}
          </p>
          <div className="mt-6 border-t border-l border-hairline">
            {others.map((other) => (
              <Link
                className="group flex items-center justify-between gap-4 border-r border-b border-hairline p-5 transition-colors duration-500 hover:bg-hover"
                href={`/blog/${other.slug}`}
                key={other.slug}
              >
                <span className="font-medium tracking-tight text-fg/80 transition-colors group-hover:text-fg">
                  {other.title[lang]}
                </span>
                <span className="text-fg/40 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="relative overflow-hidden border-t border-hairline">
        <div className="mx-auto max-w-6xl p-8 md:p-16">
          <PixelMosaic
            cell={20}
            className="opacity-60"
            cols={24}
            labels={[{ text: "CLM · 2026", col: 1, row: 3 }]}
            rows={6}
          />
          <p className="mt-8 font-mono text-xs tracking-[0.2em] text-fg/30 uppercase">
            {t.home.footer}
          </p>
        </div>
      </footer>
    </div>
  );
}
