@AGENTS.md

## Tooling
- Always bun, never npm/npx: `bun install`, `bun run build`, `bun dev`, `bunx`.
- `bun run lint` (biome), `bun run typecheck` (tsc); `bun run validate` runs biome + tsc + `scripts/check-chars.ts`.
- Deploy: `bun run deploy` = build + `bunx wrangler deploy` to Cloudflare Workers (config: `wrangler.jsonc`).
- Never write the em dash `—` (U+2014) anywhere in the repo. Enforced by `bun run validate` via `scripts/check-chars.ts`. In UI text use `·` for separators, `–` (U+2013) for date ranges, commas/colons for prose.

## Styling
- Tailwind v4. Theme tokens in `src/app/globals.css` are exposed as utilities via `@theme inline`: `text-fg`, `text-fg-muted`, `bg-bg`, `border-hairline`, `bg-hover`. Never hardcode dark-scheme classes (`text-white`, `bg-black`); the site is permanently light.
- Tailwind silently drops unknown classes from the build; verify new utilities exist in `.next/static/chunks/*.css` (selectors are backslash-escaped there, e.g. `hover\:bg-fg`).

## Layout
- Design invariant: all pages share a central vertical hairline at exactly 50% of `max-w-6xl` (hero/contact `grid-cols-2` dividers). The nav's middle border must continue that axis: header is `grid-cols-[1fr_auto_1fr]`, nav split `md:grid-cols-2`. After touching nav/layout, verify delta = 0px (header border x vs section divider x).

## Content
- All UI strings are FR + EN pairs in `src/lib/i18n.ts`; never hardcode user-visible text.
- Descriptions (`src/lib/experiences.ts`, `/about` timeline) render with `whitespace-pre-line`: `\n` = line break, `\n\n` = paragraph break; each string (`fr`/`en`) carries its own breaks.
- Blog posts: one file per post in `src/lib/posts/` implementing the `Post` type (`types.ts`); register it in `posts/index.ts`. Post content is markdown rendered by `blog-post.tsx`.

## Environment
- A dev server is usually already running on :3000 (user's). Check it before starting `bun dev` (fails with "Another next dev server is already running"). Kill via `taskkill /PID <pid> /F` if a restart is needed.
- Visual checks: for simple fixes, make the change and ask the user to eyeball it on :3000. Use Playwright MCP only for numeric invariants (e.g. the delta = 0px axis check) via `browser_evaluate` (getBoundingClientRect). Text inside collapsed zones (`grid-rows-[0fr]`) is invisible to `browser_find`: query it via `browser_evaluate`. Fresh browser defaults to EN.
