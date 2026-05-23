import type { Editor } from "obsidian";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function ordinalSuffix(day: number): string {
  const mod100 = day % 100;
  if (mod100 >= 11 && mod100 <= 13) return "th";
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

export function formatDailyHeadingDate(d: Date): string {
  const month = MONTHS[d.getMonth()];
  const day = d.getDate();
  return `${month} ${day}${ordinalSuffix(day)}, ${d.getFullYear()}`;
}

/** Full markdown line, e.g. `##### — May 23rd, 2026` */
export function formatDailyHeading(d: Date = new Date()): string {
  return `##### — ${formatDailyHeadingDate(d)}`;
}

/** Blank line, heading, blank line — cursor goes on the first blank line. */
export function buildDailyHeadingBlock(d: Date = new Date()): string {
  return `\n${formatDailyHeading(d)}\n\n\n`;
}

export function insertDailyHeading(editor: Editor, d: Date = new Date()): void {
  const cursor = editor.getCursor();
  const writeLine = cursor.line;
  editor.replaceRange(buildDailyHeadingBlock(d), cursor);
  editor.setCursor({ line: writeLine, ch: 0 });
}
