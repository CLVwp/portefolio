"use client";

import { motion } from "motion/react";
import {
  Area,
  AreaChart,
  ChartTooltip,
  Grid,
  Ring,
  RingCenter,
  RingChart,
  XAxis,
} from "@/components/charts";
import { ExperienceCard } from "@/components/experience-card";
import { useLang } from "@/components/lang-provider";
import { Nav } from "@/components/nav";
import { PixelMosaic } from "@/components/pixel-mosaic";
import { Reveal } from "@/components/reveal";
import { EXPERIENCES } from "@/lib/experiences";

const EASE = [0.32, 0.72, 0, 1] as const;

function buildTraffic() {
  let seed = 7;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const days: { date: Date; visits: number }[] = [];
  let base = 1200;
  for (let i = 0; i < 90; i++) {
    base += (rand() - 0.42) * 140;
    base = Math.max(600, base);
    days.push({
      date: new Date(2026, 5, 22 + i),
      visits: Math.round(base + Math.sin(i / 5) * 180),
    });
  }
  return days;
}

const TRAFFIC = buildTraffic();

const SKILLS = [
  { label: "C / C++", value: 92, maxValue: 100 },
  { label: "Python", value: 84, maxValue: 100 },
  { label: "TypeScript", value: 80, maxValue: 100 },
  { label: "VHDL / ASM", value: 72, maxValue: 100 },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.25em] text-white/50 uppercase">
      {children}
    </span>
  );
}

function Cta({ label, href }: { label: string; href: string }) {
  return (
    <a
      className="group inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white hover:text-black"
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
    <div className="relative min-h-[100dvh] overflow-x-clip bg-black text-white">
      <Nav />

      <main>
        {/* ─── Hero ─── */}
        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center border-r border-white/10 p-8 md:p-16">
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
                <span className="text-white/40">{t.home.title2}</span>
              </motion.h1>
              <motion.p
                animate={{ y: 0, opacity: 1 }}
                className="mt-8 max-w-md leading-relaxed text-white/50"
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
                labels={[
                  { text: "EMBEDDED", col: 1, row: 2 },
                  { text: "AI / ML", col: 6, row: 5 },
                ]}
                rows={10}
              />
            </div>
          </div>
        </section>

        {/* ─── Expériences — grille partagée avec /about ─── */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl p-8 md:p-16">
            <Reveal>
              <Eyebrow>{t.home.workEyebrow}</Eyebrow>
              <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
                {t.home.workTitle}
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 border-t border-l border-white/10 md:grid-cols-12">
              {EXPERIENCES.map((exp, i) => (
                <Reveal
                  className={`border-r border-b border-white/10 ${exp.span}`}
                  delay={i * 0.06}
                  key={exp.name}
                >
                  <ExperienceCard exp={exp} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Stats — charts ─── */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl p-8 md:p-16">
            <Reveal>
              <Eyebrow>{t.home.statsEyebrow}</Eyebrow>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 border-t border-l border-white/10 md:grid-cols-12">
              <Reveal className="border-r border-b border-white/10 md:col-span-8">
                <div className="p-6 md:p-8">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
                    {t.home.visitsLabel}
                  </p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight">
                    128,400
                  </p>
                  <div className="mt-6">
                    <AreaChart
                      animationDuration={1400}
                      aspectRatio="16 / 7"
                      data={TRAFFIC}
                      margin={{ top: 8, right: 8, bottom: 8, left: 8 }}
                    >
                      <Area
                        dataKey="visits"
                        fill="#7c3aed"
                        fillOpacity={0.25}
                        gradientToOpacity={0}
                        stroke="#a78bfa"
                        strokeWidth={2}
                      />
                      <Grid horizontal numTicksRows={4} strokeOpacity={0.4} />
                      <ChartTooltip showDatePill={false} />
                      <XAxis numTicks={4} />
                    </AreaChart>
                  </div>
                </div>
              </Reveal>
              <Reveal
                className="border-r border-b border-white/10 md:col-span-4"
                delay={0.1}
              >
                <div className="flex h-full flex-col items-center justify-center p-6 md:p-8">
                  <RingChart
                    baseInnerRadius={52}
                    data={SKILLS}
                    strokeWidth={10}
                  >
                    {SKILLS.map((skill, i) => (
                      <Ring index={i} key={skill.label} />
                    ))}
                    <RingCenter defaultLabel={t.home.skillsLabel} />
                  </RingChart>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── Contact ─── */}
        <section className="border-b border-white/10" id="contact">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-start justify-center border-r border-white/10 p-8 md:p-16">
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
                    className="group inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white hover:text-black"
                    href="https://www.linkedin.com/in/clement-viellard/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LinkedIn
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
                labels={[{ text: "GET IN TOUCH", col: 2, row: 4 }]}
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
