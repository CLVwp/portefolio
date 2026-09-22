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
import { Nav } from "@/components/nav";
import { Reveal } from "@/components/reveal";

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
  { label: "TypeScript", value: 92, maxValue: 100 },
  { label: "React", value: 88, maxValue: 100 },
  { label: "Motion", value: 84, maxValue: 100 },
  { label: "Node", value: 76, maxValue: 100 },
];

const PROJECTS = [
  {
    name: "Aurora Analytics",
    desc: "Realtime dashboard with 60fps streaming charts",
    tag: "SaaS",
    span: "md:col-span-7",
  },
  {
    name: "Mono Studio",
    desc: "Editorial portfolio for a Paris design agency",
    tag: "Web",
    span: "md:col-span-5",
  },
  {
    name: "Pulse UI",
    desc: "Open-source motion primitives library",
    tag: "OSS",
    span: "md:col-span-5",
  },
  {
    name: "Ledger OS",
    desc: "Finance tracking with offline-first sync",
    tag: "Product",
    span: "md:col-span-7",
  },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-[0.2em] text-white/60 uppercase">
      {children}
    </span>
  );
}

function Cta({ label, href }: { label: string; href: string }) {
  return (
    <a
      className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pr-2 pl-6 text-sm font-medium text-black transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] active:scale-[0.98]"
      href={href}
    >
      {label}
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105">
        ↗
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-[#050505] text-white">
      {/* Ambient mesh orbs — fixed, GPU-safe */}
      <div
        aria-hidden
        className="pointer-events-none fixed top-[-20%] left-[-10%] h-[60vh] w-[60vw] rounded-full opacity-25 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed right-[-15%] bottom-[-25%] h-[55vh] w-[55vw] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #10b981 0%, transparent 70%)",
        }}
      />

      <Nav />

      <main className="relative mx-auto w-full max-w-6xl px-4 md:px-8">
        {/* ─── Hero ─── */}
        <section className="flex min-h-[100dvh] flex-col justify-center py-24">
          <motion.div
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <Eyebrow>Design Engineer — Paris</Eyebrow>
          </motion.div>
          <motion.h1
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            className="mt-8 max-w-4xl text-5xl leading-[1.05] font-medium tracking-tight sm:text-7xl md:text-8xl"
            initial={{ y: 64, opacity: 0, filter: "blur(12px)" }}
            transition={{ delay: 0.1, duration: 1, ease: EASE }}
          >
            Interfaces with
            <br />
            <span className="text-white/40">obsessive motion.</span>
          </motion.h1>
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            className="mt-8 max-w-md text-lg leading-relaxed text-white/50"
            initial={{ y: 32, opacity: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: EASE }}
          >
            I build products where every pixel has mass and every transition has
            physics. Currently freelancing, always shipping.
          </motion.p>
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            className="mt-12"
            initial={{ y: 24, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
          >
            <Cta href="#work" label="See the work" />
          </motion.div>
        </section>

        {/* ─── Bento: work ─── */}
        <section className="py-24 md:py-40" id="work">
          <Reveal>
            <Eyebrow>Selected work</Eyebrow>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
            {/* Traffic chart — double-bezel */}
            <Reveal className="md:col-span-8">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-1.5">
                <div className="rounded-[calc(2rem-0.375rem)] bg-[#0a0a0a] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] md:p-8">
                  <div className="mb-6 flex items-baseline justify-between">
                    <div>
                      <p className="text-sm text-white/50">
                        Site visits — last 90 days
                      </p>
                      <p className="mt-1 text-3xl font-semibold tracking-tight">
                        128,400
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                      +24%
                    </span>
                  </div>
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

            {/* Skills ring — double-bezel */}
            <Reveal className="md:col-span-4" delay={0.1}>
              <div className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/5 p-1.5">
                <div className="flex flex-1 flex-col items-center justify-center rounded-[calc(2rem-0.375rem)] bg-[#0a0a0a] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                  <RingChart
                    baseInnerRadius={52}
                    data={SKILLS}
                    strokeWidth={10}
                  >
                    {SKILLS.map((skill, i) => (
                      <Ring index={i} key={skill.label} />
                    ))}
                    <RingCenter defaultLabel="Avg. proficiency" />
                  </RingChart>
                </div>
              </div>
            </Reveal>

            {/* Project cards */}
            {PROJECTS.map((p, i) => (
              <Reveal className={p.span} delay={i * 0.06} key={p.name}>
                <div className="group h-full rounded-[2rem] border border-white/10 bg-white/5 p-1.5 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.01]">
                  <div className="flex h-full min-h-44 flex-col justify-between rounded-[calc(2rem-0.375rem)] bg-[#0a0a0a] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] md:p-8">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase">
                        {p.tag}
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px]">
                        ↗
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                        {p.name}
                      </h3>
                      <p className="mt-2 text-sm text-white/50">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─── Contact ─── */}
        <section
          className="flex flex-col items-start py-24 md:py-40"
          id="contact"
        >
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 max-w-3xl text-4xl leading-tight font-medium tracking-tight sm:text-6xl">
              Have something worth building?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12">
              <Cta href="mailto:hello@example.com" label="hello@example.com" />
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="relative border-t border-white/5 py-10">
        <p className="mx-auto max-w-6xl px-4 text-xs tracking-[0.2em] text-white/30 uppercase md:px-8">
          © 2026 — Built with Next.js, Motion & Bklit
        </p>
      </footer>
    </div>
  );
}
