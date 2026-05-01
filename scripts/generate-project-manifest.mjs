// Scans /public/project-image and emits a manifest the gallery consumes.
// Re-run any time you add/remove screenshots:  node scripts/generate-project-manifest.mjs
import { readdirSync, writeFileSync, statSync } from "node:fs";
import { join, extname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = join(__dirname, "..");
const sourceDir = join(root, "public", "project-image");
const outFile = join(root, "public", "project-image", "manifest.json");

const VALID = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"]);

const titleFromName = (name) =>
  basename(name, extname(name))
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();

const files = readdirSync(sourceDir)
  .filter((f) => VALID.has(extname(f).toLowerCase()))
  .filter((f) => statSync(join(sourceDir, f)).isFile())
  .sort();

const items = files.map((f, i) => ({
  id: `proj-${String(i + 1).padStart(3, "0")}`,
  src: `/project-image/${f}`,
  title: titleFromName(f),
}));

writeFileSync(outFile, JSON.stringify({ items, generatedAt: new Date().toISOString() }, null, 2));
console.log(`[manifest] wrote ${items.length} items → ${outFile}`);
