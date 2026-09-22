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

export type Theme = "dark" | "light";

interface LangContextValue {
  lang: Lang;
  t: Dict;
  toggle: () => void;
  theme: Theme;
  toggleTheme: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

const LANG_KEY = "portfolio-lang";
const THEME_KEY = "portfolio-theme";

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

function detectTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setLang(detectLang());
    setTheme(detectTheme());
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === "fr" ? "en" : "fr";
      window.localStorage.setItem(LANG_KEY, next);
      return next;
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      window.localStorage.setItem(THEME_KEY, next);
      return next;
    });
  }, []);

  return (
    <LangContext.Provider
      value={{ lang, t: dict[lang], toggle, theme, toggleTheme }}
    >
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
