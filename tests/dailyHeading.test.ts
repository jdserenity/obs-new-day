import { describe, expect, it } from "vitest";
import {
  buildDailyHeadingBlock,
  formatDailyHeading,
  formatDailyHeadingDate,
  ordinalSuffix,
} from "../src/dailyHeading";

function d(y: number, m: number, day: number): Date {
  return new Date(y, m - 1, day);
}

describe("ordinalSuffix", () => {
  it("uses st/nd/rd for 1–3 except teens", () => {
    expect(ordinalSuffix(1)).toBe("st");
    expect(ordinalSuffix(2)).toBe("nd");
    expect(ordinalSuffix(3)).toBe("rd");
    expect(ordinalSuffix(21)).toBe("st");
    expect(ordinalSuffix(22)).toBe("nd");
    expect(ordinalSuffix(23)).toBe("rd");
  });
  it("uses th for 11–13 and default", () => {
    expect(ordinalSuffix(11)).toBe("th");
    expect(ordinalSuffix(12)).toBe("th");
    expect(ordinalSuffix(13)).toBe("th");
    expect(ordinalSuffix(4)).toBe("th");
  });
});

describe("formatDailyHeadingDate", () => {
  it("formats examples from the spec", () => {
    expect(formatDailyHeadingDate(d(2026, 5, 23))).toBe("May 23rd, 2026");
    expect(formatDailyHeadingDate(d(2026, 5, 22))).toBe("May 22nd, 2026");
    expect(formatDailyHeadingDate(d(2026, 5, 21))).toBe("May 21st, 2026");
  });
});

describe("formatDailyHeading", () => {
  it("prefixes with h5 and em dash", () => {
    expect(formatDailyHeading(d(2026, 5, 23))).toBe("##### — May 23rd, 2026");
  });
});

describe("buildDailyHeadingBlock", () => {
  it("wraps heading with blank lines above and below", () => {
    expect(buildDailyHeadingBlock(d(2026, 5, 23))).toBe(
      "\n##### — May 23rd, 2026\n\n\n",
    );
  });
});
