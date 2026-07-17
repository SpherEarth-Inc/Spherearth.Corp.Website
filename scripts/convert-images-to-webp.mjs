import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".avif"]);
/** Keep PNG for WhatsApp/Open Graph previews (broader crawler support). */
const SKIP_BASENAMES = new Set(["og-image.png", "service-card-shape.png"]);
const WEBP_QUALITY = 82;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (
      IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()) &&
      !SKIP_BASENAMES.has(entry.name.toLowerCase())
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

async function convertImage(sourcePath) {
  const targetPath = sourcePath.replace(/\.(png|jpe?g|avif)$/i, ".webp");
  const sourceStats = await stat(sourcePath);
  let targetStats = null;

  try {
    targetStats = await stat(targetPath);
  } catch {
    targetStats = null;
  }

  if (targetStats && targetStats.mtimeMs >= sourceStats.mtimeMs) {
    console.log(`skip  ${path.relative(PUBLIC_DIR, sourcePath)} (webp up to date)`);
    return { sourcePath, targetPath, skipped: true };
  }

  await sharp(sourcePath)
    .webp({ quality: WEBP_QUALITY, effort: 4 })
    .toFile(targetPath);

  const outputStats = await stat(targetPath);
  const savedPct = Math.round((1 - outputStats.size / sourceStats.size) * 100);

  console.log(
    `done  ${path.relative(PUBLIC_DIR, sourcePath)} -> ${path.relative(PUBLIC_DIR, targetPath)} (${savedPct}% smaller)`
  );

  await unlink(sourcePath);
  return { sourcePath, targetPath, skipped: false, savedPct };
}

const images = await walk(PUBLIC_DIR);
let converted = 0;

for (const imagePath of images) {
  const result = await convertImage(imagePath);
  if (!result.skipped) converted += 1;
}

console.log(`\nConverted ${converted} image(s) to WebP.`);
