/**
 * Compress magi PNG artwork to WebP for the repo and production deploy.
 * Full-resolution PNGs should live in OneDrive / Google Drive backups only.
 */
import sharp from 'sharp';
import { readdirSync, unlinkSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dirs = [
  { path: join(root, 'public/images/posters'), quality: 82 },
  { path: join(root, 'public/images/backdrops'), quality: 78 },
];

let before = 0;
let after = 0;
let count = 0;

for (const { path: dir, quality } of dirs) {
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.png'))) {
    const input = join(dir, file);
    const output = join(dir, file.replace(/\.png$/i, '.webp'));
    before += statSync(input).size;
    await sharp(input)
      .webp({ quality, effort: 6, smartSubsample: true })
      .toFile(output);
    after += statSync(output).size;
    unlinkSync(input);
    count++;
  }
}

console.log(
  `Compressed ${count} images: ${(before / 1024 / 1024).toFixed(1)} MB PNG -> ${(after / 1024 / 1024).toFixed(1)} MB WebP (${Math.round((1 - after / before) * 100)}% smaller)`,
);
