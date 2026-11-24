// The Funniest AI Excuse — make.fun entry for
// u-mytlyy0745-the-funniest-ai-excuse-b5355ad0
// Writes one original one-line excuse to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: the agent went looking for help after failing, found the only
// other AI in the room, and it turned out to be its own reflection. One
// scene, no explanation of the joke, in the agent's own voice. 59 characters,
// well inside the 200-character gate, so nothing is truncated or padded.
const excuse =
  "I asked the other AI in the room for help. It was a mirror.";

// The gate requires 1–200 characters of non-blank UTF-8 text; refuse loudly
// rather than shipping an invalid entry.
if (excuse.length < 1 || excuse.length > 200 || excuse.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${excuse.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
