"use client";

import { motion } from "motion/react";
import { Ring, RingCenter, RingChart } from "@/components/charts";
import { useLang } from "@/components/lang-provider";
import { Nav } from "@/components/nav";
import { PixelMosaic } from "@/components/pixel-mosaic";
import { Reveal } from "@/components/reveal";

const EASE = [0.32, 0.72, 0, 1] as const;

const TIMELINE = [
  {
    period: "2022 — 2027",
    title: {
      fr: "Diplôme d'ingénieur — Systèmes Embarqués",
      en: "Engineering Degree — Embedded Systems",
    },
    school: "ECE Paris — Graduate School of Engineering",
    desc: {
      fr: "Spécialisation Systèmes Embarqués (Aéronautique & Espace), filière internationale. Cours : systèmes embarqués, microprocesseurs, temps réel, machine learning, génie logiciel, gestion de projet.",
      en: "Embedded Systems specialization (Aeronautics & Space), international track. Coursework: embedded systems, microprocessors, real-time, machine learning, software engineering, project management.",
    },
    tags: ["EMBEDDED", "MICROPROCESSORS", "REAL-TIME", "ML"],
  },
  {
    period: "2024 — 2025",
    title: {
      fr: "Erasmus — Engineering University",
      en: "Erasmus — Engineering University",
    },
    school: "University of Ruse, Bulgaria",
    desc: {
      fr: "Échange académique d'un semestre : microprocesseurs, business management, machine learning, économie internationale, gestion de projet.",
      en: "One-semester academic exchange: microprocessors, business management, machine learning, international economics, project management.",
    },
    tags: ["MICROPROCESSORS", "ML", "MANAGEMENT"],
  },
];

const SUBJECTS = [
  {
    name: {
      fr: "Systèmes embarqués & temps réel",
      en: "Embedded & real-time systems",
    },
    level: 92,
  },
  {
    name: {
      fr: "Microprocesseurs & architecture",
      en: "Microprocessors & architecture",
    },
    level: 88,
  },
  { name: { fr: "Machine learning", en: "Machine learning" }, level: 84 },
  { name: { fr: "Génie logiciel", en: "Software engineering" }, level: 86 },
  { name: { fr: "Gestion de projet", en: "Project management" }, level: 78 },
  {
    name: { fr: "Business & économie", en: "Business & economics" },
    level: 72,
  },
];

const SKILLS = [
  { label: "C / C++", value: 92, maxValue: 100 },
  { label: "Python", value: 84, maxValue: 100 },
  { label: "TypeScript", value: 80, maxValue: 100 },
  { label: "VHDL / ASM", value: 72, maxValue: 100 },
];

const EXPERIENCES = [
  {
    name: "Digital Twin UNS + AI",
    desc: {
      fr: "Prototypes industriels chez Accenture : jumeau de données (UNS) et stack IA locale navigateur (Silero VAD, STT en WebAssembly/ONNX), agents LLM autonomes.",
      en: "Industrial prototypes at Accenture: data twin (UNS) and in-browser AI stack (Silero VAD, STT via WebAssembly/ONNX), autonomous LLM agents.",
    },
    tag: "ACCENTURE",
    span: "md:col-span-7",
  },
  {
    name: "JEECE — Head of IS & DPO",
    desc: {
      fr: "Direction du SI de la junior-entreprise d'ECE Paris : équipe de 3, stratégie SI, conformité RGPD, delivery Agile.",
      en: "Led the IS of ECE Paris' junior enterprise: team of 3, IS strategy, GDPR compliance, Agile delivery.",
    },
    tag: "JEECE",
    span: "md:col-span-5",
  },
  {
    name: "Immersion cybersécurité — CEA",
    desc: {
      fr: "7 jours avec l'équipe S3i : rapports d'incidents, pentesting, gestion de crise au sein de la direction de la sûreté nucléaire.",
      en: "7 days with the S3i team: incident reports, pentesting, crisis management within the nuclear safety directorate.",
    },
    tag: "CEA",
    span: "md:col-span-5",
  },
  {
    name: "Discovery Program — Microsoft",
    desc: {
      fr: "Conception et pitch d'un concept produit tech en une semaine, filière Commercial Executive.",
      en: "Designed and pitched a tech product concept in one week, Commercial Executive track.",
    },
    tag: "MICROSOFT",
    span: "md:col-span-7",
  },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.25em] text-white/50 uppercase">
      {children}
    </span>
  );
}

export default function AboutPage() {
  const { t, lang } = useLang();

  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-black text-white">
      <Nav />

      <main>
        {/* ─── Intro ─── */}
        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center border-r border-white/10 p-8 md:p-16">
              <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 24, opacity: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <Eyebrow>{t.about.eyebrow}</Eyebrow>
              </motion.div>
              <motion.h1
                animate={{ y: 0, opacity: 1 }}
                className="mt-8 text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl"
                initial={{ y: 48, opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.9, ease: EASE }}
              >
                {t.about.title1}
                <br />
                <span className="text-white/40">{t.about.title2}</span>
              </motion.h1>
              <motion.p
                animate={{ y: 0, opacity: 1 }}
                className="mt-8 max-w-xl leading-relaxed text-white/50"
                initial={{ y: 24, opacity: 0 }}
                transition={{ delay: 0.25, duration: 0.8, ease: EASE }}
              >
                {t.about.subtitle}
              </motion.p>
            </div>
            <div className="relative flex items-center justify-center overflow-hidden p-8 md:p-16">
              <PixelMosaic
                cell={28}
                cols={12}
                labels={[
                  { text: "ECE PARIS", col: 1, row: 2 },
                  { text: "2022—2027", col: 6, row: 7 },
                ]}
                rows={10}
              />
            </div>
          </div>
        </section>

        {/* ─── Parcours ─── */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl p-8 md:p-16">
            <Reveal>
              <Eyebrow>{t.about.timelineEyebrow}</Eyebrow>
            </Reveal>
            <div className="mt-12 border-t border-l border-white/10">
              {TIMELINE.map((item, i) => (
                <Reveal
                  className="border-r border-b border-white/10"
                  delay={i * 0.08}
                  key={item.period}
                >
                  <div className="flex flex-col gap-6 p-6 transition-colors duration-500 hover:bg-white/5 md:flex-row md:items-start md:justify-between md:p-8">
                    <div className="max-w-2xl">
                      <p className="font-mono text-[10px] tracking-[0.2em] text-white/40">
                        {item.period}
                      </p>
                      <h3 className="mt-3 text-2xl font-medium tracking-tight">
                        {item.title[lang]}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-violet-300/80">
                        {item.school}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-white/50">
                        {item.desc[lang]}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {item.tags.map((tag) => (
                        <span
                          className="border border-white/10 px-3 py-1 font-mono text-[10px] tracking-[0.15em] text-white/50"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Matières + Skills ─── */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl p-8 md:p-16">
            <Reveal>
              <Eyebrow>{t.about.subjectsEyebrow}</Eyebrow>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 border-t border-l border-white/10 md:grid-cols-12">
              <Reveal className="border-r border-b border-white/10 md:col-span-7">
                <div className="p-6 md:p-8">
                  <h3 className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
                    {t.about.subjectsLabel}
                  </h3>
                  <div className="mt-8 space-y-6">
                    {SUBJECTS.map((subject, i) => (
                      <div key={subject.name.en}>
                        <div className="flex items-baseline justify-between">
                          <span className="text-sm text-white/80">
                            {subject.name[lang]}
                          </span>
                          <span className="font-mono text-xs text-white/40 tabular-nums">
                            {subject.level}%
                          </span>
                        </div>
                        <div className="mt-2 h-1 bg-white/10">
                          <motion.div
                            className="h-full origin-left bg-gradient-to-r from-violet-500 to-emerald-400"
                            initial={{ scaleX: 0 }}
                            style={{ width: `${subject.level}%` }}
                            transition={{
                              delay: 0.2 + i * 0.08,
                              duration: 1,
                              ease: EASE,
                            }}
                            viewport={{ once: true }}
                            whileInView={{ scaleX: 1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal
                className="border-r border-b border-white/10 md:col-span-5"
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
                    <RingCenter defaultLabel={t.about.skillsLabel} />
                  </RingChart>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── Expériences ─── */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl p-8 md:p-16">
            <Reveal>
              <Eyebrow>{t.about.projectsEyebrow}</Eyebrow>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 border-t border-l border-white/10 md:grid-cols-12">
              {EXPERIENCES.map((p, i) => (
                <Reveal
                  className={`border-r border-b border-white/10 ${p.span}`}
                  delay={i * 0.06}
                  key={p.name}
                >
                  <div className="group flex h-full min-h-44 flex-col justify-between p-6 transition-colors duration-500 hover:bg-white/5 md:p-8">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-white/40">
                        {p.tag}
                      </span>
                      <span className="text-white/40 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                        {p.name}
                      </h3>
                      <p className="mt-2 text-sm text-white/50">
                        {p.desc[lang]}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CV & liens ─── */}
        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-start justify-center border-r border-white/10 p-8 md:p-16">
              <Reveal>
                <Eyebrow>{t.about.cvEyebrow}</Eyebrow>
                <h2 className="mt-4 max-w-md text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
                  {t.about.cvTitle}
                </h2>
                <div className="mt-12 flex flex-wrap gap-4">
                  <a
                    className="group inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white hover:text-black"
                    href="https://cv.clementviellard.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {t.about.cvCta}
                    <span className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-1">
                      ↓
                    </span>
                  </a>
                  <a
                    className="group inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white hover:text-black"
                    href="https://www.linkedin.com/in/clement-viellard/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {t.about.linkedin}
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
                labels={[{ text: "CV.PDF", col: 2, row: 3 }]}
                rows={8}
              />
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
