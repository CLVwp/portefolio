"use client";

import { motion } from "motion/react";
import { ExperienceCard } from "@/components/experience-card";
import { useLang } from "@/components/lang-provider";
import { Nav } from "@/components/nav";
import { PixelMosaic } from "@/components/pixel-mosaic";
import { Reveal } from "@/components/reveal";
import { EXPERIENCES } from "@/lib/experiences";

const EASE = [0.32, 0.72, 0, 1] as const;

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.25em] text-fg-muted uppercase">
      {children}
    </span>
  );
}

function Cta({ label, href }: { label: string; href: string }) {
  return (
    <a
      className="group inline-flex items-center gap-3 border border-fg/20 px-6 py-3 text-sm font-medium text-fg transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-fg hover:text-bg"
      href={href}
    >
      {label}
      <span className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

export default function Home() {
  const { t } = useLang();

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
                <Eyebrow>{t.home.eyebrow}</Eyebrow>
              </motion.div>
              <motion.h1
                animate={{ y: 0, opacity: 1 }}
                className="mt-8 text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl"
                initial={{ y: 48, opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.9, ease: EASE }}
              >
                {t.home.title1}
                <br />
                <span className="text-fg/40">{t.home.title2}</span>
              </motion.h1>
              <motion.p
                animate={{ y: 0, opacity: 1 }}
                className="mt-8 max-w-md leading-relaxed text-fg-muted"
                initial={{ y: 24, opacity: 0 }}
                transition={{ delay: 0.25, duration: 0.8, ease: EASE }}
              >
                {t.home.subtitle}
              </motion.p>
              <motion.div
                animate={{ y: 0, opacity: 1 }}
                className="mt-12"
                initial={{ y: 16, opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
              >
                <Cta href="/about" label={t.home.cta} />
              </motion.div>
            </div>
            <div className="relative flex items-center justify-center overflow-hidden p-8 md:p-16">
              <PixelMosaic
                cell={28}
                cols={12}
                words={[
                  { text: "EMBEDDED", col: 1, row: 2 },
                  { text: "AI / ML", col: 6, row: 5 },
                ]}
                rows={10}
              />
            </div>
          </div>
        </section>

        {/* ─── Expériences - grille partagée avec /about ─── */}
        <section className="border-b border-hairline">
          <div className="mx-auto max-w-6xl p-8 md:p-16">
            <Reveal>
              <Eyebrow>{t.home.workEyebrow}</Eyebrow>
              <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
                {t.home.workTitle}
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 border-t border-l border-hairline md:grid-cols-12">
              {EXPERIENCES.map((exp, i) => (
                <Reveal
                  className={`border-r border-b border-hairline ${exp.span}`}
                  delay={i * 0.06}
                  key={exp.name}
                >
                  <ExperienceCard exp={exp} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Contact ─── */}
        <section className="border-b border-hairline" id="contact">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-start justify-center border-r border-hairline p-8 md:p-16">
              <Reveal>
                <Eyebrow>{t.home.contactEyebrow}</Eyebrow>
                <h2 className="mt-4 max-w-md text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
                  {t.home.contactTitle}
                </h2>
                <div className="mt-12 flex flex-wrap gap-4">
                  <Cta
                    href="mailto:viellardclement@gmail.com"
                    label="viellardclement@gmail.com"
                  />
                  <a
                    className="group inline-flex items-center gap-3 border border-fg/20 px-6 py-3 text-sm font-medium text-fg transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-fg hover:text-bg"
                    href="https://www.linkedin.com/in/clement-viellard/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                    <span className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                  <a
                    className="group inline-flex items-center gap-3 border border-fg/20 px-6 py-3 text-sm font-medium text-fg transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-fg hover:text-bg"
                    href="https://github.com/CLVwp"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    GitHub
                    <span className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="relative flex items-center justify-center overflow-hidden p-8 md:p-16">
              <PixelMosaic
                cell={24}
                cols={12}
                words={[
                  { text: "GET IN TOUCH", col: 2, row: 4, style: "solid" },
                ]}
                rows={8}
              />
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
