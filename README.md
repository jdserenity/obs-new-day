# New Day (Obsidian)

Inserts a dated level-5 heading at the cursor, e.g. `##### — May 23rd, 2026`, for one-note “stacked” daily journals.

## Install (development)

1. Clone into your vault’s `.obsidian/plugins/obs-new-day/`.
2. Run `npm install` and `npm run build` (output: `dist/main.js`).
3. Enable **New Day** under Community plugins.

## Usage

- **Desktop:** `Cmd+Shift+H` (default) or command palette → **Insert new day heading**.
- Place the cursor at the top of your note, run the command, then write below the new heading.

## Mobile toolbar

Obsidian does not let plugins pin buttons to the mobile toolbar automatically. After enabling the plugin:

1. **Settings → Mobile → Manage toolbar options**
2. Scroll to **Add global command**
3. Choose **New Day: Insert new day heading**

The command uses a custom upward-stack icon.

## Deploy

From the repo root: `obs-deploy` (runs `npm run build`, copies `dist/main.js` → vault `main.js` plus `manifest.json` and `styles.css`).

## Tests

```bash
npm test
```
