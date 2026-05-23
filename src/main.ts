import { addIcon, Editor, Plugin } from "obsidian";
import { insertDailyHeading } from "./dailyHeading";
import { NEW_DAY_ICON } from "./icon";

const ICON_ID = "obs-new-day";

export default class ObsNewDayPlugin extends Plugin {
  onload(): void {
    addIcon(ICON_ID, NEW_DAY_ICON);

    this.addCommand({
      id: "insert-daily-heading",
      name: "Insert new day heading",
      icon: ICON_ID,
      hotkeys: [{ modifiers: ["Mod", "Shift"], key: "h" }],
      editorCallback: (editor: Editor) => insertDailyHeading(editor),
    });
  }
}
