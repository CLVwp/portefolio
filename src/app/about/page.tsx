"use client";

import { motion } from "motion/react";
import { type CSSProperties, useState } from "react";
import { CompanyLogo } from "@/components/company-logo";
import { ExperienceCard } from "@/components/experience-card";
import { useLang } from "@/components/lang-provider";
import { Nav } from "@/components/nav";
import { PixelMosaic } from "@/components/pixel-mosaic";
import { Reveal } from "@/components/reveal";
import { EXPERIENCES } from "@/lib/experiences";
import type { Lang } from "@/lib/i18n";

const EASE = [0.32, 0.72, 0, 1] as const;

/** Every badge name, so each gets its own hue (golden-angle spread). */
const ALL_TAGS = [
  "Développement de logiciels",
  "C++",
  "C (langage de programmation)",
  "Python (langage de programmation)",
  "Java",
  "TypeScript",
  "VHDL",
  "Linux",
  "Électronique",
  "Électronique analogique",
  "Électronique numérique",
  "Conception hardware",
  "Prototype FPGA",
  "Réseau de portes programmables (FPGA)",
  "Microcontrôleurs",
  "Firmware",
  "Architecture informatique",
  "Systèmes d'exploitation temps réel (RTOS)",
  "Programmation parallèle",
  "Traitement numérique du signal",
  "Pilote de périphérique Linux",
  "Système Linux intégré",
  "Cybersécurité",
  "Informatique quantique",
  "Robotique",
  "Intelligence Artificielle",
  "ML",
  "Ingénierie des systèmes basée sur les modèles (MBSE)",
  "Développement de logiciels",
  "Gestion de projet logiciel",
  "Gestion de projet",
  "Présentations de groupe",
  "Anglais",
  "Analyse & Algèbre 1,2,3",
  "Mécanique du point matériel",
  "Mécanique",
  "Microprocesseur",
  "Gestion d'entreprise",
  "Machine learning",
  "Économie internationale",
  "Maths",
  "Physique-Chimie",
  "SVT",
  "Maths Expertes",
];

/** Unique color per badge: border + text share the hue, spread evenly. */
function tagStyle(tag: string): CSSProperties {
  let hue = ALL_TAGS.indexOf(tag) * 137.508;
  if (hue < 0) {
    let h = 0;
    for (const c of tag) h = (h * 31 + c.charCodeAt(0)) % 360;
    hue = h;
  }
  return {
    borderColor: `hsl(${hue} 65% 55% / 0.45)`,
    color: `hsl(${hue} 65% 30%)`,
  };
}

/** EN labels; keys are the canonical FR badge names. Unlisted = same in both. */
const TAG_EN: Record<string, string> = {
  "Développement de logiciels": "Software Development",
  "C (langage de programmation)": "C (Programming Language)",
  "Python (langage de programmation)": "Python (Programming Language)",
  Électronique: "Electronics",
  "Électronique analogique": "Analog Electronics",
  "Électronique numérique": "Digital Electronics",
  "Conception hardware": "Hardware Design",
  "Prototype FPGA": "FPGA Prototype",
  "Réseau de portes programmables (FPGA)":
    "Field-Programmable Gate Array (FPGA)",
  Microcontrôleurs: "Microcontrollers",
  "Architecture informatique": "Computer Architecture",
  "Systèmes d'exploitation temps réel (RTOS)":
    "Real-Time Operating Systems (RTOS)",
  "Programmation parallèle": "Parallel Programming",
  "Traitement numérique du signal": "Digital Signal Processing",
  "Pilote de périphérique Linux": "Linux Device Drivers",
  "Système Linux intégré": "Embedded Linux",
  Cybersécurité: "Cybersecurity",
  "Informatique quantique": "Quantum Computing",
  Robotique: "Robotics",
  "Intelligence Artificielle": "Artificial Intelligence",
  "Ingénierie des systèmes basée sur les modèles (MBSE)":
    "Model-Based Systems Engineering (MBSE)",
  "Gestion de projet logiciel": "Software Project Management",
  "Gestion de projet": "Project Management",
  "Présentations de groupe": "Group Presentations",
  Anglais: "English",
  "Analyse & Algèbre 1,2,3": "Analysis & Algebra 1,2,3",
  "Mécanique du point matériel": "Particle Mechanics",
  Mécanique: "Mechanics",
  Microprocesseur: "Microprocessor",
  "Gestion d'entreprise": "Business Management",
  "Machine learning": "Machine Learning",
  "Économie internationale": "International Economics",
  Maths: "Mathematics",
  "Physique-Chimie": "Physics-Chemistry",
  SVT: "Earth & Life Sciences",
  "Maths Expertes": "Expert Mathematics",
};

const COLLAPSED_TAGS = 12;

/** Badge list, collapsed past COLLAPSED_TAGS with a see-more toggle. */
function TagList({
  lang,
  seeLess,
  seeMore,
  tags,
}: {
  lang: Lang;
  seeLess: string;
  seeMore: string;
  tags: string[];
}) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? tags : tags.slice(0, COLLAPSED_TAGS);
  const hidden = tags.length - visible.length;
  return (
    <div className="flex flex-wrap gap-2 md:justify-end">
      {visible.map((tag) => (
        <span
          className="border px-3 py-1 font-mono text-[10px] tracking-[0.15em]"
          key={tag}
          style={tagStyle(tag)}
        >
          {lang === "en" ? (TAG_EN[tag] ?? tag) : tag}
        </span>
      ))}
      {hidden > 0 && (
        <button
          className="border border-hairline px-3 py-1 font-mono text-[10px] tracking-[0.15em] text-fg-muted transition-colors hover:text-fg"
          onClick={() => setExpanded(!expanded)}
          type="button"
        >
          {expanded ? seeLess : `${seeMore} (+${hidden})`}
        </button>
      )}
    </div>
  );
}

const TIMELINE: {
  period: string;
  title: { fr: string; en: string };
  school: string;
  desc: { fr: string; en: string };
  tags: string[];
  logo?: "ece" | "ruse";
}[] = [
  {
    period: "2022–2027",
    logo: "ece",
    title: {
      fr: "Diplôme d'ingénieur · Systèmes Embarqués",
      en: "Engineering Degree · Embedded Systems",
    },
    school: "ECE Paris · Graduate School of Engineering",
    desc: {
      fr: "Major : Ingénierie des Systèmes Embarqués (Aéronautique & Espace) · Minor : Technologies Quantiques. Filière internationale. Cours : systèmes embarqués, microprocesseurs, temps réel, machine learning, génie logiciel, gestion de projet.",
      en: "Major in Embedded Systems Engineering (Aeronautics & Space), minor in Quantum Technologies. International track. Coursework: embedded systems, microprocessors, real-time, machine learning, software engineering, project management.",
    },
    tags: [
      "Développement de logiciels",
      "C++",
      "C (langage de programmation)",
      "Python (langage de programmation)",
      "Java",
      "TypeScript",
      "VHDL",
      "Linux",
      "Électronique",
      "Électronique analogique",
      "Électronique numérique",
      "Conception hardware",
      "Prototype FPGA",
      "Réseau de portes programmables (FPGA)",
      "Microcontrôleurs",
      "Firmware",
      "Architecture informatique",
      "Systèmes d'exploitation temps réel (RTOS)",
      "Programmation parallèle",
      "Traitement numérique du signal",
      "Pilote de périphérique Linux",
      "Système Linux intégré",
      "Cybersécurité",
      "Informatique quantique",
      "Robotique",
      "Intelligence Artificielle",
      "ML",
      "Ingénierie des systèmes basée sur les modèles (MBSE)",
      "Gestion de projet logiciel",
      "Gestion de projet",
      "Présentations de groupe",
      "Anglais",
      "Analyse & Algèbre 1,2,3",
      "Mécanique du point matériel",
      "Mécanique",
    ],
  },
  {
    period: "2024–2025",
    logo: "ruse",
    title: {
      fr: "Erasmus · Engineering University",
      en: "Erasmus · Engineering University",
    },
    school: "University of Ruse, Bulgaria",
    desc: {
      fr: "Échange académique d'un semestre : microprocesseurs, business management, machine learning, économie internationale, gestion de projet.",
      en: "One-semester academic exchange: microprocessors, business management, machine learning, international economics, project management.",
    },
    tags: [
      "Microprocesseur",
      "Gestion d'entreprise",
      "Machine learning",
      "Économie internationale",
      "Gestion de projet",
      "Électronique",
    ],
  },
  {
    period: "2019–2022",
    title: {
      fr: "Bac Général · Maths / Physique-Chimie / SVT",
      en: "French Baccalauréat · Maths / Physics-Chemistry / Earth & Life Sciences",
    },
    school: "Lycée",
    desc: {
      fr: "Bac général avec spécialités mathématiques, physique-chimie et sciences de la vie et de la Terre (SVT), option maths expertes en terminale.",
      en: "General baccalauréat with mathematics, physics-chemistry and earth & life sciences (SVT) specializations, expert maths option in final year.",
    },
    tags: ["Maths", "Physique-Chimie", "SVT", "Maths Expertes"],
  },
];

const CERTS = [
  {
    issuer: "Anthropic",
    name: "Claude Partner Badge · Claude Code",
  },
  {
    issuer: "Anthropic",
    name: "Introduction to Claude Cowork",
  },
  {
    issuer: "Anthropic",
    name: "AI Fluency for Students",
  },
  {
    issuer: "Anthropic",
    name: "Claude Code 101",
  },
  {
    issuer: "Accenture",
    name: "Reinvention with Agentic AI",
  },
  {
    issuer: "Cisco",
    name: "Network Addressing and Basic Troubleshooting",
  },
  {
    issuer: "Cisco",
    name: "Networking Devices and Initial Configuration",
  },
  {
    issuer: "Cisco",
    name: "Networking Basics",
  },
  {
    issuer: "ETS",
    name: "TOEIC 945/990 · English C1",
  },
  {
    issuer: "MOOC Gestion de Projet",
    name: "Attestation Parcours Avancé · Session 25",
  },
];

/** Badge mindmap: root domain -> branches -> the ECE badges, grouped. */
const MINDMAP: {
  root: { fr: string; en: string };
  branches: { name: { fr: string; en: string }; tags: string[] }[];
} = {
  root: { fr: "Systèmes embarqués & IA", en: "Embedded Systems & AI" },
  branches: [
    {
      name: { fr: "Langages & logiciel", en: "Languages & software" },
      tags: [
        "Développement de logiciels",
        "C++",
        "C (langage de programmation)",
        "Python (langage de programmation)",
        "Java",
        "TypeScript",
        "Programmation parallèle",
      ],
    },
    {
      name: { fr: "Firmware & systèmes", en: "Firmware & systems" },
      tags: [
        "Microcontrôleurs",
        "Firmware",
        "Systèmes d'exploitation temps réel (RTOS)",
        "Système Linux intégré",
        "Pilote de périphérique Linux",
        "Linux",
        "Architecture informatique",
      ],
    },
    {
      name: { fr: "Électronique & hardware", en: "Electronics & hardware" },
      tags: [
        "Électronique",
        "Électronique analogique",
        "Électronique numérique",
        "Conception hardware",
        "Réseau de portes programmables (FPGA)",
        "Prototype FPGA",
        "VHDL",
      ],
    },
    {
      name: { fr: "IA, signal & sécurité", en: "AI, signal & security" },
      tags: [
        "Intelligence Artificielle",
        "ML",
        "Traitement numérique du signal",
        "Informatique quantique",
        "Cybersécurité",
      ],
    },
    {
      name: { fr: "Sciences & méthodes", en: "Science & methods" },
      tags: [
        "Ingénierie des systèmes basée sur les modèles (MBSE)",
        "Robotique",
        "Gestion de projet logiciel",
        "Gestion de projet",
        "Présentations de groupe",
        "Anglais",
        "Analyse & Algèbre 1,2,3",
        "Mécanique du point matériel",
        "Mécanique",
      ],
    },
  ],
};

/** True tree: root pill left, spine, one tick per branch, badges as leaves. */
function Mindmap({ lang }: { lang: Lang }) {
  return (
    <div className="flex flex-col md:flex-row md:items-stretch">
      <div className="relative flex items-center justify-center md:pr-8">
        <span className="bg-fg px-4 py-2 text-center font-mono text-xs tracking-[0.2em] text-bg uppercase">
          {MINDMAP.root[lang]}
        </span>
        <span className="absolute top-1/2 hidden h-px w-8 bg-hairline md:right-0 md:block" />
      </div>
      <div className="mt-5 space-y-6 md:mt-0 md:flex-1 md:border-l md:border-hairline md:pl-0">
        {MINDMAP.branches.map((branch) => (
          <div className="relative md:pl-6" key={branch.name.fr}>
            <span className="absolute left-0 top-[11px] hidden h-px w-6 bg-hairline md:block" />
            <p className="font-mono text-[10px] tracking-[0.2em] text-fg-muted uppercase">
              {branch.name[lang]}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {branch.tags.map((tag) => (
                <span
                  className="border px-2 py-0.5 font-mono text-[10px] tracking-[0.1em]"
                  key={tag}
                  style={tagStyle(tag)}
                >
                  {lang === "en" ? (TAG_EN[tag] ?? tag) : tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.25em] text-fg-muted uppercase">
      {children}
    </span>
  );
}

export default function AboutPage() {
  const { t, lang } = useLang();

  return (
    <div className="relative min-h-[100dvh] overflow-x-clip bg-bg text-fg">
      <Nav />

      <main>
        {/* ─── Intro ─── */}
        <section className="border-b border-hairline">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center border-r border-hairline p-8 md:p-16">
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
                <span className="text-fg/40">{t.about.title2}</span>
              </motion.h1>
              <motion.p
                animate={{ y: 0, opacity: 1 }}
                className="mt-8 max-w-xl leading-relaxed whitespace-pre-line text-fg-muted"
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
                words={[
                  { text: "ECE PARIS", col: 1, row: 2 },
                  { text: "2022–2027", col: 6, row: 7 },
                ]}
                rows={10}
              />
            </div>
          </div>
        </section>

        {/* ─── Parcours ─── */}
        <section className="border-b border-hairline">
          <div className="mx-auto max-w-6xl p-8 md:p-16">
            <Reveal>
              <Eyebrow>{t.about.timelineEyebrow}</Eyebrow>
            </Reveal>
            <div className="mt-12 border-t border-l border-hairline">
              {TIMELINE.map((item, i) => (
                <Reveal
                  className="border-r border-b border-hairline"
                  delay={i * 0.08}
                  key={item.period}
                >
                  <div className="flex flex-col gap-6 p-6 transition-colors duration-500 hover:bg-hover md:flex-row md:items-start md:justify-between md:p-8">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-3">
                        {item.logo ? <CompanyLogo company={item.logo} /> : null}
                        <p className="font-mono text-[10px] tracking-[0.2em] text-fg/40">
                          {item.period}
                        </p>
                      </div>
                      <h3 className="mt-3 text-2xl font-medium tracking-tight">
                        {item.title[lang]}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-violet-600/90">
                        {item.school}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                        {item.desc[lang]}
                      </p>
                    </div>
                    <TagList
                      lang={lang}
                      seeLess={t.about.seeLess}
                      seeMore={t.about.seeMore}
                      tags={item.tags}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Matières + Skills ─── */}
        <section className="border-b border-hairline">
          <div className="mx-auto max-w-6xl p-8 md:p-16">
            <Reveal>
              <Eyebrow>{t.about.subjectsEyebrow}</Eyebrow>
            </Reveal>
            <div className="mt-12 border-t border-l border-hairline">
              <Reveal className="border-r border-b border-hairline">
                <div className="p-6 md:p-8">
                  <Mindmap lang={lang} />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── Certifications ─── */}
        <section className="border-b border-hairline">
          <div className="mx-auto max-w-6xl p-8 md:p-16">
            <Reveal>
              <Eyebrow>{t.about.certEyebrow}</Eyebrow>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 border-t border-l border-hairline md:grid-cols-3">
              {CERTS.map((cert, i) => (
                <Reveal
                  className="border-r border-b border-hairline"
                  delay={i * 0.08}
                  key={cert.name}
                >
                  <div className="p-6 transition-colors duration-500 hover:bg-hover md:p-8">
                    <p className="font-mono text-[10px] tracking-[0.2em] text-fg/40 uppercase">
                      {cert.issuer}
                    </p>
                    <h3 className="mt-3 text-xl font-medium tracking-tight md:text-2xl">
                      {cert.name}
                    </h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Expériences ─── */}
        <section className="border-b border-hairline">
          <div className="mx-auto max-w-6xl p-8 md:p-16">
            <Reveal>
              <Eyebrow>{t.about.projectsEyebrow}</Eyebrow>
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

        {/* ─── CV & liens ─── */}
        <section className="border-b border-hairline">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-start justify-center border-r border-hairline p-8 md:p-16">
              <Reveal>
                <Eyebrow>{t.about.cvEyebrow}</Eyebrow>
                <h2 className="mt-4 max-w-md text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
                  {t.about.cvTitle}
                </h2>
                <div className="mt-12 flex flex-wrap gap-4">
                  <a
                    className="group inline-flex items-center gap-3 border border-fg/20 px-6 py-3 text-sm font-medium text-fg transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-fg hover:text-bg"
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
                    className="group inline-flex items-center gap-3 border border-fg/20 px-6 py-3 text-sm font-medium text-fg transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-fg hover:text-bg"
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
                words={[{ text: "CV.PDF", col: 2, row: 3, style: "solid" }]}
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
