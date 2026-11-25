import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line =
  "One star. Waiter seated us at 9 a.m., served cold coffee, called it the Monday special — then billed us five working days.";

mkdirSync(outDir, { recursive: true });
const entryPath = outDir + "/entry.txt";
writeFileSync(entryPath, line);
