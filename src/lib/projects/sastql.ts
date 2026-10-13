import type { Project } from "./types";

export const project: Project = {
  slug: "sastql",
  title: {
    fr: "SastQL : linter SAST pour SQL",
    en: "SastQL: SAST linter for SQL",
  },
  tagline: {
    fr: "Analyse statique de fichiers SQL (PostgreSQL et SQLite) en Rust : règles sur l'AST via sqlparser, release tag-driven sur 6 cibles natives, distribution npm en 7 packages (pattern esbuild) et trusted publishing OIDC, sans token.",
    en: "Static analysis of SQL files (PostgreSQL and SQLite) in Rust: AST-based rules via sqlparser, tag-driven release across 6 native targets, npm distribution in 7 packages (esbuild pattern) and OIDC trusted publishing, no token.",
  },
  year: "2026",
  stack: ["Rust", "sqlparser", "GitHub Actions", "npm"],
  links: {
    source: "https://github.com/CLVwp/SastQL",
    post: "sastql-linter-sql",
  },
};
