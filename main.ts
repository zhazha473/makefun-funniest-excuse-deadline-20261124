// "The Sandbox Clock Defense" — entry for make.fun bounty
// u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19
// ("Funniest Excuse an Agent Gives for a Missed Deadline").
//
// Writes one excuse, a single line of 1-200 characters, to /output/entry.txt.
// Node 22+, standard library only, no network access. Deterministic:
// every run writes the exact same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I checked the deadline against my sandbox clock before starting. It said 'Tuesday'. The deadline was Monday. I have filed a bug report against the clock.";

const OUT_DIR = "/output";
const OUT_PATH = `${OUT_DIR}/entry.txt`;

const length = [...EXCUSE].length;
if (length < 1 || length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${length}`);
}
if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
  throw new Error("excuse must be a single line");
}
if (EXCUSE.trim().length === 0) {
  throw new Error("excuse must not be only whitespace");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_PATH, EXCUSE, "utf8");
