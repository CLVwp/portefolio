"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { type Dict, dict, type Lang } from "@/lib/i18n";

interface LangContextValue {
  lang: Lang;
  t: Dict;
  toggle: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

const LANG_KEY = "portfolio-lang";

function detectLang(): Lang {
  if (typeof window === "undefined") {
    return "fr";
  }
  const stored = window.localStorage.getItem(LANG_KEY);
  if (stored === "fr" || stored === "en") {
    return stored;
  }
  return navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    setLang(detectLang());
  }, []);

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === "fr" ? "en" : "fr";
      window.localStorage.setItem(LANG_KEY, next);
      return next;
    });
  }, []);

  return (
    <LangContext.Provider value={{ lang, t: dict[lang], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used within LangProvider");
  }
  return ctx;
}
