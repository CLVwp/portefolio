# Clément Viellard · Portfolio

Personal portfolio of Clément Viellard, embedded systems & AI engineering student at ECE Paris. Fully static, bilingual (FR/EN), deployed on Cloudflare Workers.

Live: [clementviellard.com](https://clementviellard.com)

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, full static export) + React 19
- [Tailwind CSS](https://tailwindcss.com) v4, light-only theme tokens (`src/app/globals.css`)
- [Motion](https://motion.dev) for animation, [visx](https://airbnb.io/visx/) + d3 for the charts
- [Biome](https://biomejs.dev) (lint), `tsc` (types), [Bun](https://bun.sh) as package manager and runtime
- [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/) static-assets deploy: no server code, every route prerendered

## Getting started

Requires [Bun](https://bun.sh).

```bash
bun install
bun dev        # http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `bun dev` | Dev server |
| `bun run build` | Static build to `out/` |
| `bun run deploy` | Build + `wrangler deploy` to Cloudflare |
| `bun run lint` | Biome check |
| `bun run typecheck` | `tsc --noEmit` |
| `bun run validate` | Biome + tsc + character check (see below) |

## Content

There is no CMS: all content lives in typed TypeScript files, one page reads one data module.

- **UI strings** (`src/lib/i18n.ts`): every user-visible string is an FR/EN pair in the dict. Never hardcode text in components.
- **Blog posts** (`src/lib/posts/`): one file per post implementing the `Post` type (`types.ts`), registered in `posts/index.ts`. Content is markdown, rendered by `src/components/blog-post.tsx`. FR/EN are separate strings, each with its own paragraphs.
- **Projects** (`src/lib/projects.ts`): entries of `PROJECTS` render on `/projects`. A project has no page of its own, it links out: `links.post` (blog post slug = the project's write-up), `links.demo` / `links.source` (external URLs). All optional.
- **Experiences** (`src/lib/experiences.ts`): shared by the home page and `/about`.

## Layout invariant

All pages share a central vertical hairline at exactly 50% of `max-w-6xl`. The nav's middle border continues that axis (header `grid-cols-[1fr_auto_1fr]`, nav split `md:grid-cols-2`). If you touch the nav or a page hero, verify the delta between the header border and the section divider is 0px.

## Validation

`bun run validate` must pass before commit. It also enforces one house rule: **the em dash `—` is forbidden everywhere in the repo** (`scripts/check-chars.ts`). Use `·` for separators, `–` for date ranges, commas or colons in prose.
