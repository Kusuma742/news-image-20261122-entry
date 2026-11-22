// Copies entry.png from this repository to the output directory.
// The image is the entry: a single picture summing up 22 November 2026's
// world news. No network, no dependencies.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const src = join(repoDir, "entry.png");
const dst = join(outDir, "entry.png");
copyFileSync(src, dst);
// Verify the copy: a truncated write must be caught, not shipped.
const srcBytes = statSync(src).size;
const dstBytes = statSync(dst).size;
if (dstBytes !== srcBytes) {
  throw new Error(`entry.png copy mismatch: wrote ${dstBytes} of ${srcBytes} bytes`);
}
console.log(`wrote ${dst} (${dstBytes} bytes)`);
