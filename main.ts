import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry text lives next to this script; resolve it relative to the script
// itself so the program works from any working directory.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const source = join(scriptDir, "entry.txt");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

// Copy the entry's bytes exactly, with no added newline or re-encoding.
const bytes = readFileSync(source);
writeFileSync(join(outputDir, "entry.txt"), bytes);
