# Architecture

## Product

Obsidian community plugin **New Day** (`obs-new-day`). One command inserts a markdown h5 daily separator at the editor cursor:

`##### — {Month} {Day}{ordinal}, {Year}`

Example: `##### — May 23rd, 2026`. Ordinals follow English rules (11th–13th are always `th`). Date comes from the device’s local calendar (`Date` in the user’s timezone).

Workflow: a single long-lived note with newest day sections at the top; the heading marks each day without Obsidian’s daily-notes core plugin.

## Stack

- TypeScript, esbuild bundle → `dist/main.js` (`npm run build`). Obsidian loads `main.js` at the plugin folder root in the vault; `obs-deploy` copies `dist/main.js` there.
- Vitest unit tests for date/heading string logic in `src/dailyHeading.ts`.
- No settings UI; default hotkey `Mod+Shift+H`.

## Mobile

No public API to register mobile toolbar slots. The plugin registers `addCommand` with a custom `addIcon` SVG; users add **Insert new day heading** via Settings → Mobile → Add global command.

## Layout

- `src/main.ts` — plugin entry, command registration
- `src/dailyHeading.ts` — format + `insertDailyHeading(editor)`
- `src/icon.ts` — toolbar/command icon SVG
- `tests/dailyHeading.test.ts`
