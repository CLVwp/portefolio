"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useLang } from "@/components/lang-provider";
import { Nav } from "@/components/nav";
import { PixelMosaic } from "@/components/pixel-mosaic";
import { Reveal } from "@/components/reveal";
import { POSTS } from "@/lib/posts";

const EASE = [0.32, 0.72, 0, 1] as const;

const TAG_COLORS: Record<string, string> = {
  "Projet perso": "text-emerald-300 border-emerald-400/30",
  Analyse: "text-violet-300 border-violet-400/30",
  Notebook: "text-amber-300 border-amber-400/30",
};

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.25em] text-white/50 uppercase">
      {children}
    </span>
  );
}

export default function BlogPage() {
  const { t, lang } = useLang();

  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-black text-white">
      <Nav />

      <main>
        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center border-r border-white/10 p-8 md:p-16">
              <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 24, opacity: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <Eyebrow>{t.blog.eyebrow}</Eyebrow>
              </motion.div>
              <motion.h1
                animate={{ y: 0, opacity: 1 }}
                className="mt-8 text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl"
                initial={{ y: 48, opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.9, ease: EASE }}
              >
                {t.blog.title1}
                <br />
                <span className="text-white/40">{t.blog.title2}</span>
              </motion.h1>
              <motion.p
                animate={{ y: 0, opacity: 1 }}
                className="mt-8 max-w-md leading-relaxed text-white/50"
                initial={{ y: 24, opacity: 0 }}
                transition={{ delay: 0.25, duration: 0.8, ease: EASE }}
              >
                {t.blog.subtitle}
              </motion.p>
            </div>
            <div className="relative flex items-center justify-center overflow-hidden p-8 md:p-16">
              <PixelMosaic
                cell={28}
                cols={12}
                labels={[
                  { text: "NOTES", col: 1, row: 2 },
                  { text: "ANALYSIS", col: 6, row: 7 },
                ]}
                rows={10}
              />
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl p-8 md:p-16">
            <div className="border-t border-l border-white/10">
              {POSTS.map((post, i) => (
                <Reveal
                  className="border-r border-b border-white/10"
                  delay={i * 0.06}
                  key={post.slug}
                >
                  <Link
                    className="group block p-6 transition-colors duration-500 hover:bg-white/5 md:p-8"
                    href={`/blog/${post.slug}`}
                  >
                    <article>
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`border px-3 py-1 font-mono text-[10px] tracking-[0.15em] uppercase ${TAG_COLORS[post.tag]}`}
                        >
                          {t.blog.tags[post.tag] ?? post.tag}
                        </span>
                        <span className="font-mono text-xs text-white/40">
                          {new Date(post.date).toLocaleDateString(
                            lang === "fr" ? "fr-FR" : "en-US",
                            { day: "numeric", month: "long", year: "numeric" },
                          )}
                        </span>
                        <span className="font-mono text-xs text-white/30">
                          {post.readTime} {t.blog.readTime}
                        </span>
                      </div>
                      <h2 className="mt-4 text-2xl font-medium tracking-tight transition-colors group-hover:text-white md:text-3xl">
                        {post.title[lang]}
                      </h2>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/50">
                        {post.excerpt[lang]}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm text-white/70 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                        {t.blog.readMore}
                        <span className="border border-white/20 px-2 py-1 text-xs">
                          →
                        </span>
                      </span>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl p-8 md:p-16">
          <PixelMosaic
            cell={20}
            className="opacity-60"
            cols={24}
            labels={[{ text: "CLM — 2026", col: 1, row: 3 }]}
            rows={6}
          />
          <p className="mt-8 font-mono text-xs tracking-[0.2em] text-white/30 uppercase">
            {t.home.footer}
          </p>
        </div>
      </footer>
    </div>
  );
}
