import type { Post } from "./types";

export const post: Post = {
  slug: "sastql-linter-sql",
  title: {
    fr: "SastQL : un linter SAST pour SQL, de l'AST au npm",
    en: "SastQL: a SAST linter for SQL, from AST to npm",
  },
  excerpt: {
    fr: "Rétrospective d'un outil publié : des règles sur l'AST avec sqlparser, une branche main protégée contre moi-même, une release tag-driven sur six cibles, une distribution npm en 7 packages, et le passage du token d'accès au trusted publishing OIDC.",
    en: "A retrospective on a published tool: AST-based rules with sqlparser, a main branch protected against myself, a tag-driven release across six targets, npm distribution in 7 packages, and the jump from access token to OIDC trusted publishing.",
  },
  date: "2026-10-13",
  readTime: "8 min",
  tag: "Projet perso",
  content: {
    fr: `SastQL est un linter d'analyse statique (SAST) pour fichiers SQL, ciblant PostgreSQL et SQLite. L'idée de départ : les migrations SQL sont du code, mais rien ne les lint comme du code. Les analyseurs génériques voient des chaînes de caractères ; les vraies erreurs (une colonne nullable dans un NOT IN, un LIMIT manquant, un DELETE sans WHERE) partent en production.

## Le code : un AST, pas des regex

- **Rust, une seule crate.** Le parsing est délégué à sqlparser-rs : jamais de regex sur le SQL brut, jamais de parsing écrit à la main.
- **Une règle = un fichier = un test.** Chaque règle implémente un trait (id, sévérité, description, check) et traverse les statements de l'AST. La logique dialecte-spécifique vit dans la règle, le parser reste agnostique.
- **Fail loudly.** Erreur de parse : exit 2 avec le message. Violations : exit 1. Clean : exit 0. Un fichier n'est jamais sauté en silence.
- **Une limite assumée** : pas encore de numéros de ligne précis, chaque violation est auto-portante (id, sévérité, message, extrait SQL fautif). Dire honnêtement "règle X, fichier Y" vaut mieux qu'inventer une position fausse.

## L'hébergement : GitHub, protégé contre moi-même

Le repo est public, et main est protégée avec enforce_admins : même le propriétaire passe par une pull request, et une CI minimale mais stricte sert de porte (fmt, clippy en -D warnings, tests). La gouvernance est écrite : CONTRIBUTING, template de PR, CODEOWNERS, et une licence personnalisée source-available : pas d'usage commercial sans accord écrit explicite, tout arbitrage revient à l'auteur. Les PRs qui touchent la licence sont rejetées d'office.

## Le CI : une porte, une chaîne de release

Deux workflows GitHub Actions. ci.yml : fmt + clippy + tests sur chaque PR. release.yml : déclenché par un tag v*, il compile six cibles nativement (Windows x64, Linux x64 glibc et musl, Linux arm64, macOS arm64 et x64), embarque chaque binaire dans un package npm de plateforme, puis publie le lanceur. La version de référence vit dans Cargo.toml : un tag = un build = 7 packages npm.

## npm : le pattern esbuild

Le package principal ne contient pas de binaire. C'est un lanceur Node : il résout le package plateforme correspondant à os/cpu/libc et spawn le binaire. Six optionalDependencies, une par cible ; npm n'installe que la bonne. C'est exactement le pattern d'esbuild et de Biome.

Deux pièges rencontrés en chemin :

- Le filtre anti-typosquat de npm a rejeté le nom sastql (trop proche de fastq, un 403). Contournement : un scope, @clv.wp/sastql, la commande bin reste sastql.
- Le nouveau pipeline de publication est asynchrone : le publish rend la main avant que la version soit visible ("being processed, a few minutes"). Vérifier le registre trop tôt produit de fausses alertes.

## Du token d'accès au OIDC

Première release : EOTP partout. Les tokens classiques de npm ont disparu, et mon token granulaire exigeait un OTP qu'une CI ne peut pas fournir. Le contournement tenable : un token granulaire avec bypass 2FA... qui plafonne à 90 jours et cessera de publier vers janvier 2027. Pas soutenable.

La vraie solution : le trusted publishing (OIDC). Chaque package déclare sur npmjs.com son publisher de confiance (repo, workflow, environnement) ; le workflow demande id-token: write, npm vérifie le jeton OIDC émis par GitHub Actions, et plus aucun secret n'est impliqué. Bonus : --provenance attache à chaque package une attestation de build signée, traçable jusqu'au repo et au commit.

## Ce que le projet m'a appris

La partie la plus longue n'a pas été les règles, mais la distribution. L'analyseur représente peut-être un tiers du travail ; les deux autres tiers, c'est tout ce qui le rend utilisable et digne de confiance : licence, gouvernance, CI, supply chain, pipeline de publication. Un linter n'est pas un script, c'est un produit.`,
    en: `SastQL is a static analysis (SAST) linter for SQL files, targeting PostgreSQL and SQLite. The starting point: SQL migrations are code, but nothing lints them like code. Generic analyzers see strings; the real mistakes (a nullable column inside a NOT IN, a missing LIMIT, a DELETE without WHERE) ship to production.

## The code: an AST, not regex

- **Rust, a single crate.** Parsing is delegated to sqlparser-rs: never regex over raw SQL, never hand-written parsing.
- **One rule = one file = one test.** Each rule implements a trait (id, severity, description, check) and walks the AST statements. Dialect-specific logic lives in the rule, the parser stays agnostic.
- **Fail loudly.** Parse error: exit 2 with the message. Violations: exit 1. Clean: exit 0. A file is never skipped silently.
- **An accepted limitation**: no precise line numbers yet, every violation is self-contained (id, severity, message, offending SQL snippet). Saying honestly "rule X, file Y" beats inventing a wrong position.

## Hosting: GitHub, protected against myself

The repo is public, and main is protected with enforce_admins: even the owner goes through a pull request, and a minimal but strict CI is the gate (fmt, clippy with -D warnings, tests). Governance is written down: CONTRIBUTING, PR template, CODEOWNERS, and a custom source-available license: no commercial use without explicit written permission, all arbitration belongs to the author. License-touching PRs are rejected on sight.

## CI: a gate, a release chain

Two GitHub Actions workflows. ci.yml: fmt + clippy + tests on every PR. release.yml: triggered by a v* tag, it builds six targets natively (Windows x64, Linux x64 glibc and musl, Linux arm64, macOS arm64 and x64), packs each binary into a platform npm package, then publishes the launcher. The reference version lives in Cargo.toml: one tag = one build = 7 npm packages.

## npm: the esbuild pattern

The main package contains no binary. It is a Node launcher: it resolves the platform package matching os/cpu/libc and spawns the binary. Six optionalDependencies, one per target; npm installs only the right one. Exactly the esbuild and Biome pattern.

Two traps met along the way:

- npm's anti-typosquat filter rejected the name sastql (too close to fastq, a 403). Workaround: a scope, @clv.wp/sastql, the bin command stays sastql.
- The new publish pipeline is asynchronous: publish returns before the version is visible ("being processed, a few minutes"). Checking the registry too early produces false alarms.

## From access token to OIDC

First release: EOTP everywhere. npm's classic tokens are gone, and my granular token required an OTP a CI cannot provide. The tenable workaround: a granular token with 2FA bypass... capped at 90 days, and it stops publishing around January 2027. Not sustainable.

The real fix: trusted publishing (OIDC). Each package declares its trusted publisher on npmjs.com (repo, workflow, environment); the workflow asks for id-token: write, npm verifies the OIDC token minted by GitHub Actions, and no secret is involved anymore. Bonus: --provenance attaches a signed build attestation to every package, traceable back to the repo and the commit.

## What the project taught me

The longest part was not the rules, it was the distribution. The analyzer is maybe a third of the work; the other two thirds are everything that makes it usable and trustworthy: license, governance, CI, supply chain, publish pipeline. A linter is not a script, it is a product.`,
  },
};
