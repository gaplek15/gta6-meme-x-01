// Entry program for gta6-meme-x-01 (Node 22, standard library only).
// The judged entry is the X post named in POST.json; this program's only
// job is to hand that file to the grader by copying it into /output.
// POST.json holds a placeholder address until the meme is posted from
// @johncawet on X; the parent replaces it with the real post URL before
// submitting. Run it locally with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

const source = join(repoDir, 'POST.json');
const target = join(outDir, 'POST.json');
try {
  copyFileSync(source, target);
  console.log(`POST.json copied to ${target}`);
} catch (err) {
  console.error(`could not copy POST.json from ${repoDir}: ${(err as Error).message}`);
  process.exit(1);
}
