import sharp from "sharp";
import { readdir, stat, rename, unlink, mkdir, copyFile, writeFile, readFile } from "fs/promises";
import { join, dirname, relative } from "path";
import { fileURLToPath } from "url";
import { existsSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = join(__dirname, "../src/assets");
const BACKUP_DIR = join(ASSETS_DIR, ".backup");
const PUBLIC_DIR = join(__dirname, "../public");
const SRC_DIR = join(__dirname, "../src");

// Responsive breakpoints
const BREAKPOINTS = [375, 768, 1200, 1536];

// Compression settings
const PNG_QUALITY = 80;
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 80;

// Phone screen images (only WebP, no responsive)
const PHONE_IMAGES = [
  "screen-chat.jpg",
  "screen-route.jpg",
  "screen-scanner.jpg",
  "screen-supplier.jpg",
];

// Logo/Footer (responsive + WebP)
const RESPONSIVE_IMAGES = ["logo.png", "footer.png"];

// CLI flags
const DRY_RUN = process.argv.includes("--dry-run");
const ROLLBACK = process.argv.includes("--rollback");

// Image manifest
const imageManifest = {};

async function main() {
  console.log("🖼️  Image Optimization Script");
  console.log("=============================\n");
  console.log(`Mode: ${DRY_RUN ? "DRY RUN (no changes)" : "LIVE"}`);
  console.log(`Breakpoints: ${BREAKPOINTS.join(", ")}px\n`);

  if (ROLLBACK) {
    await rollback();
    return;
  }

  // 1. Backup originals
  await backupOriginals();

  // 2. Optimize phone screen images (WebP only)
  await optimizePhoneImages();

  // 3. Optimize responsive images (WebP + responsive sizes)
  await optimizeResponsiveImages();

  // 4. Generate image manifest
  await generateImageManifest();

  // 5. Update PhoneFrame component
  await updatePhoneFrameComponent();

  // 6. Scan and add lazy loading
  await addLazyLoadingToImages();

  console.log("\n✨ Image optimization complete!");
  console.log(`📋 Manifest saved to: ${join(__dirname, "../image-manifest.json")}`);
  console.log(`💾 Backups saved to: ${BACKUP_DIR}`);
  console.log(`🔄 Rollback: npm run optimize-images -- --rollback`);
}

async function backupOriginals() {
  console.log("💾 Backing up original images...");

  if (!existsSync(BACKUP_DIR)) {
    await mkdir(BACKUP_DIR, { recursive: true });
  }

  const images = await getImages(ASSETS_DIR);
  for (const imagePath of images) {
    const filename = imagePath.split("\\").pop();
    const backupPath = join(BACKUP_DIR, filename);

    if (!existsSync(backupPath)) {
      await copyFile(imagePath, backupPath);
      console.log(`  ✅ ${filename}`);
    }
  }
}

async function optimizePhoneImages() {
  console.log("\n📱 Optimizing phone screen images (WebP only):");

  for (const filename of PHONE_IMAGES) {
    const inputPath = join(ASSETS_DIR, filename);
    if (!existsSync(inputPath)) {
      console.log(`  ⏭️  ${filename} (not found)`);
      continue;
    }

    const webpPath = inputPath.replace(/\.(jpg|png)$/, ".webp");

    if (existsSync(webpPath)) {
      console.log(`  ⏭️  ${filename} → WebP (already exists)`);
      continue;
    }

    if (!DRY_RUN) {
      await sharp(inputPath).webp({ quality: WEBP_QUALITY }).toFile(webpPath);
    }

    console.log(`  ✅ ${filename} → ${filename.replace(/\.(jpg|png)$/, ".webp")}`);

    imageManifest[filename] = {
      original: filename,
      webp: filename.replace(/\.(jpg|png)$/, ".webp"),
      type: "phone-screen",
    };
  }
}

async function optimizeResponsiveImages() {
  console.log("\n🖥️  Optimizing responsive images (WebP + breakpoints):");

  for (const filename of RESPONSIVE_IMAGES) {
    const inputPath = join(ASSETS_DIR, filename);
    if (!existsSync(inputPath)) {
      console.log(`  ⏭️  ${filename} (not found)`);
      continue;
    }

    const baseName = filename.replace(/\.(jpg|png)$/, "");
    const variants = [];

    // Generate WebP + responsive sizes
    for (const width of BREAKPOINTS) {
      const webpPath = join(ASSETS_DIR, `${baseName}-${width}.webp`);

      if (!existsSync(webpPath)) {
        if (!DRY_RUN) {
          await sharp(inputPath)
            .resize(width, null, { fit: "inside", withoutEnlargement: true })
            .webp({ quality: WEBP_QUALITY })
            .toFile(webpPath);
        }
      }

      variants.push({ width, path: `${baseName}-${width}.webp` });
    }

    console.log(`  ✅ ${filename} → ${BREAKPOINTS.length} responsive variants`);

    imageManifest[filename] = {
      original: filename,
      webp: `${baseName}.webp`,
      variants,
      type: "responsive",
      srcset: variants.map((v) => `${v.path} ${v.width}w`).join(", "),
    };
  }
}

async function generateImageManifest() {
  const manifestPath = join(__dirname, "../image-manifest.json");
  if (!DRY_RUN) {
    await writeFile(manifestPath, JSON.stringify(imageManifest, null, 2));
  }
}

async function updatePhoneFrameComponent() {
  console.log("\n🔧 Updating PhoneFrame component:");

  const phoneFramePath = join(SRC_DIR, "components/site/PhoneFrame.tsx");
  const content = await readFile(phoneFramePath, "utf-8");

  // Check if already updated
  if (content.includes("<picture>")) {
    console.log("  ⏭️  PhoneFrame already uses <picture>");
    return;
  }

  // Generate new PhoneFrame code
  const newContent = content.replace(
    /<img[\s\S]*?\/>/,
    `<picture>
      <source srcSet={src.replace(/\.(jpg|png)$/, ".webp")} type="image/webp" />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={512}
        height={1024}
        fetchPriority={fetchPriority}
        className="w-full h-full object-cover rounded-4xl"
      />
    </picture>`
  );

  if (!DRY_RUN) {
    await writeFile(phoneFramePath, newContent);
  }

  console.log("  ✅ PhoneFrame updated to use <picture>");
}

async function addLazyLoadingToImages() {
  console.log("\n🔍 Scanning for lazy loading opportunities:");

  const tsxFiles = await getTsxFiles(SRC_DIR);
  let updatedCount = 0;

  for (const filePath of tsxFiles) {
    const content = await readFile(filePath, "utf-8");

    // Find <img> tags without loading attribute
    const imgRegex = /<img(?![^>]*\bloading=)[^>]*>/g;
    const matches = content.match(imgRegex);

    if (matches) {
      console.log(`  📄 ${relative(SRC_DIR, filePath)}: ${matches.length} images`);
      updatedCount += matches.length;

      if (!DRY_RUN) {
        // Add loading="lazy" to all <img> tags
        const updated = content.replace(
          /<img(?![^>]*\bloading=)([^>]*)>/g,
          '<img loading="lazy"$1>'
        );
        await writeFile(filePath, updated);
      }
    }
  }

  console.log(`  ✅ Added lazy loading to ${updatedCount} images`);
}

async function rollback() {
  console.log("🔄 Rolling back to originals...\n");

  const backupFiles = await getImages(BACKUP_DIR);

  for (const backupPath of backupFiles) {
    const filename = backupPath.split("\\").pop();
    const originalPath = join(ASSETS_DIR, filename);

    await copyFile(backupPath, originalPath);
    console.log(`  ✅ Restored: ${filename}`);
  }

  // Delete generated WebP files
  const assetsFiles = await getImages(ASSETS_DIR);
  for (const filePath of assetsFiles) {
    if (
      filePath.endsWith(".webp") ||
      filePath.includes("-375.") ||
      filePath.includes("-768.") ||
      filePath.includes("-1200.") ||
      filePath.includes("-1536.")
    ) {
      await unlink(filePath);
      console.log(`  🗑️  Deleted: ${filePath.split("\\").pop()}`);
    }
  }

  // Restore PhoneFrame component
  const phoneFramePath = join(SRC_DIR, "components/site/PhoneFrame.tsx");
  const backupPhoneFrame = join(BACKUP_DIR, "PhoneFrame.tsx");
  if (existsSync(backupPhoneFrame)) {
    await copyFile(backupPhoneFrame, phoneFramePath);
    console.log(`  ✅ Restored: PhoneFrame.tsx`);
  }

  console.log("\n✨ Rollback complete!");
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

async function getImages(dir) {
  const files = await readdir(dir);
  const images = [];
  const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp"];

  for (const file of files) {
    const ext = file.toLowerCase().slice(file.lastIndexOf("."));
    if (IMAGE_EXTENSIONS.includes(ext)) {
      images.push(join(dir, file));
    }
  }

  return images;
}

async function getTsxFiles(dir) {
  const files = await readdir(dir, { recursive: true });
  const tsxFiles = [];

  for (const file of files) {
    if (file.endsWith(".tsx")) {
      tsxFiles.push(join(dir, file));
    }
  }

  return tsxFiles;
}

main().catch(console.error);
