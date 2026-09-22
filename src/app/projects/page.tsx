"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useLang } from "@/components/lang-provider";
import { Nav } from "@/components/nav";
import { PixelMosaic } from "@/components/pixel-mosaic";
import { Reveal } from "@/components/reveal";
import { PROJECTS } from "@/lib/projects";

const EASE = [0.32, 0.72, 0, 1] as const;

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.25em] text-fg-muted uppercase">
      {children}
    </span>
  );
}

export default function ProjectsPage() {
  const { t, lang } = useLang();

  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-bg text-fg">
      <Nav />

      <main>
        {/* ─── Hero ─── */}
        <section className="border-b border-hairline">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center border-r border-hairline p-8 md:p-16">
              <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 24, opacity: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <Eyebrow>{t.projects.eyebrow}</Eyebrow>
              </motion.div>
              <motion.h1
                animate={{ y: 0, opacity: 1 }}
                className="mt-8 text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl"
                initial={{ y: 48, opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.9, ease: EASE }}
              >
                {t.projects.title1}
                <br />
                <span className="text-fg/40">{t.projects.title2}</span>
              </motion.h1>
              <motion.p
                animate={{ y: 0, opacity: 1 }}
                className="mt-8 max-w-md leading-relaxed text-fg-muted"
                initial={{ y: 24, opacity: 0 }}
                transition={{ delay: 0.25, duration: 0.8, ease: EASE }}
              >
                {t.projects.subtitle}
              </motion.p>
            </div>
            <div className="relative flex items-center justify-center overflow-hidden p-8 md:p-16">
              <PixelMosaic
                cell={28}
                cols={12}
                words={[
                  { text: "BUILT", col: 1, row: 2 },
                  { text: "SHIPPED", col: 6, row: 7 },
                ]}
                rows={10}
              />
            </div>
          </div>
        </section>

        {/* ─── Projects grid ─── */}
        <section className="border-b border-hairline">
          <div className="mx-auto max-w-6xl p-8 md:p-16">
            <div className="grid grid-cols-1 border-t border-l border-hairline md:grid-cols-2">
              {PROJECTS.map((project, i) => (
                <Reveal
                  className="border-r border-b border-hairline"
                  delay={i * 0.06}
                  key={project.slug}
                >
                  <article className="group flex h-full flex-col p-6 transition-colors duration-500 hover:bg-hover md:p-8">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="mr-2 font-mono text-xs text-fg/40">
                        {project.year}
                      </span>
                      {project.stack?.map((tech) => (
                        <span
                          className="border border-fg/20 px-2 py-1 font-mono text-[10px] tracking-[0.15em] text-fg-muted uppercase"
                          key={tech}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h2 className="mt-4 text-2xl font-medium tracking-tight md:text-3xl">
                      {project.title[lang]}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg-muted">
                      {project.tagline[lang]}
                    </p>
                    {project.links ? (
                      <div className="mt-auto flex flex-wrap gap-5 pt-6">
                        {project.links.post ? (
                          <Link
                            className="inline-flex items-center gap-2 text-sm text-fg/70 transition-colors hover:text-fg"
                            href={`/blog/${project.links.post}`}
                          >
                            {t.projects.article}
                            <span className="border border-fg/20 px-2 py-1 text-xs transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                              →
                            </span>
                          </Link>
                        ) : null}
                        {project.links.demo ? (
                          <a
                            className="inline-flex items-center gap-2 text-sm text-fg/70 transition-colors hover:text-fg"
                            href={project.links.demo}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {t.projects.demo}
                            <span className="border border-fg/20 px-2 py-1 text-xs transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                              ↗
                            </span>
                          </a>
                        ) : null}
                        {project.links.source ? (
                          <a
                            className="inline-flex items-center gap-2 text-sm text-fg/70 transition-colors hover:text-fg"
                            href={project.links.source}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {t.projects.source}
                            <span className="border border-fg/20 px-2 py-1 text-xs transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                              ↗
                            </span>
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                    <PixelMosaic
                      cell={4}
                      className="mt-6 opacity-0 transition-opacity duration-500 group-hover:opacity-70"
                      cols={48}
                      motion="wave"
                      rows={2}
                    />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl p-8 md:p-16">
          <PixelMosaic
            cell={20}
            className="opacity-60"
            cols={24}
            words={[
              { text: "CLM", col: 1, row: 3 },
              { text: "2026", col: 5, row: 3 },
            ]}
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
