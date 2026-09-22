@AGENTS.md

## Tooling
- Always bun, never npm/npx: `bun install`, `bun run build`, `bun dev`, `bunx`.

## Styling
- Tailwind v4. Theme tokens in `src/app/globals.css` are exposed as utilities via `@theme inline`: `text-fg`, `text-fg-muted`, `bg-bg`, `border-hairline`, `bg-hover`. Never hardcode dark-scheme classes (`text-white`, `bg-black`) — the site is permanently light.
- Tailwind silently drops unknown classes from the build; verify new utilities exist in `.next/static/chunks/*.css` (selectors are backslash-escaped there, e.g. `hover\:bg-fg`).

## Layout
- Design invariant: all pages share a central vertical hairline at exactly 50% of `max-w-6xl` (hero/contact `grid-cols-2` dividers). The nav's middle border must continue that axis — header is `grid-cols-[1fr_auto_1fr]`, nav split `md:grid-cols-2`. After touching nav/layout, verify delta = 0px (header border x vs section divider x).

## Environment
- A dev server is usually already running on :3000 (user's). Check it before starting `bun dev` (fails with "Another next dev server is already running"). Kill via `taskkill /PID <pid> /F` if a restart is needed.
- Visual checks: Playwright MCP tools work well — `browser_take_screenshot` + `browser_evaluate` (getBoundingClientRect) to verify layout/alignment numerically instead of guessing.
