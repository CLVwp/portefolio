"use client";

import { CompanyLogo } from "@/components/company-logo";
import { useLang } from "@/components/lang-provider";

export interface Experience {
  name: string;
  role: { fr: string; en: string };
  period: string;
  duration?: { fr: string; en: string };
  desc: { fr: string; en: string };
  details: { fr: string; en: string };
  logo: "accenture" | "cea" | "microsoft" | "jeece" | "ece";
  span: string;
}

/**
 * Shared experience card: brand logo + period, role, short description,
 * and a details zone that expands on hover (grid-rows 0fr → 1fr).
 * Used on both the homepage and the about page.
 */
export function ExperienceCard({ exp }: { exp: Experience }) {
  const { lang } = useLang();

  return (
    <div className="group flex h-full flex-col p-6 transition-colors duration-500 hover:bg-hover md:p-8">
      <div className="flex items-center justify-between">
        <CompanyLogo
          company={exp.logo}
          className="text-fg/80 transition-colors group-hover:text-fg"
        />
        <span className="font-mono text-[10px] tracking-[0.2em] text-fg/40">
          {exp.period}
          {exp.duration ? ` · ${exp.duration[lang]}` : ""}
        </span>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-medium tracking-tight md:text-2xl">
          {exp.name}
        </h3>
        <p className="mt-1 font-mono text-xs text-violet-600/90">
          {exp.role[lang]}
        </p>
        <p className="mt-3 text-sm text-fg-muted">{exp.desc[lang]}</p>
      </div>
      {/* Hover-expand zone */}
      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <p className="mt-4 whitespace-pre-line border-t border-hairline pt-4 text-sm leading-relaxed text-fg/60">
            {exp.details[lang]}
          </p>
        </div>
      </div>
    </div>
  );
}
