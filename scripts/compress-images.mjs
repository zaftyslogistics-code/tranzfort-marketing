import sharp from "sharp";
import { readdir, stat, rename, unlink } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { tmpdir } from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = join(__dirname, "../src/assets");
const PUBLIC_DIR = join(__dirname, "../public");
const LOGO_PATH = join(ASSETS_DIR, "logo.png");

// Supported image formats
const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp"];

// Compression settings
const PNG_QUALITY = 80;
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 80;

// Favicon sizes
const FAVICON_SIZES = [16, 32, 48, 64];

async function compressImage(inputPath) {
  try {
    const stats = await stat(inputPath);
    const originalSize = stats.size;

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    let compressed;

    if (metadata.format === "png") {
      compressed = image.png({ quality: PNG_QUALITY, compressionLevel: 9 });
    } else if (metadata.format === "jpeg" || metadata.format === "jpg") {
      compressed = image.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
    } else if (metadata.format === "webp") {
      compressed = image.webp({ quality: WEBP_QUALITY });
    } else {
      console.log(`⏭️  Skipping ${inputPath.split("\\").pop()} (unsupported format: ${metadata.format})`);
      return;
    }

    // Write to temp file first
    const tempPath = join(tmpdir(), `temp-${Date.now()}-${inputPath.split("\\").pop()}`);
    await compressed.toFile(tempPath);
    
    const newStats = await stat(tempPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    // Replace original file
    await unlink(inputPath);
    await rename(tempPath, inputPath);

    console.log(`✅ ${inputPath.split("\\").pop()}`);
    console.log(`   ${formatBytes(originalSize)} → ${formatBytes(newSize)} (${savings}% reduction)`);
  } catch (error) {
    console.error(`❌ Error compressing ${inputPath}:`, error.message);
  }
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

  for (const file of files) {
    const ext = file.toLowerCase().slice(file.lastIndexOf("."));
    if (IMAGE_EXTENSIONS.includes(ext)) {
      images.push(join(dir, file));
    }
  }

  return images;
}

async function generateFavicons() {
  try {
    console.log("Generating favicon sizes from logo:");
    
    for (const size of FAVICON_SIZES) {
      const outputPath = join(PUBLIC_DIR, `favicon-${size}x${size}.png`);
      await sharp(LOGO_PATH)
        .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png({ quality: PNG_QUALITY })
        .toFile(outputPath);
      
      const stats = await stat(outputPath);
      console.log(`✅ favicon-${size}x${size}.png (${formatBytes(stats.size)})`);
    }
    
    // Also copy the compressed logo to public for use as favicon
    await sharp(LOGO_PATH).png({ quality: PNG_QUALITY }).toFile(join(PUBLIC_DIR, "logo.png"));
    console.log(`✅ logo.png copied to public folder`);
  } catch (error) {
    console.error("❌ Error generating favicons:", error.message);
  }
}

async function main() {
  console.log("🖼️  Image Compression Script");
  console.log("=============================\n");

  // Compress images in src/assets
  console.log("Compressing src/assets images:");
  const assetImages = await getImages(ASSETS_DIR);
  
  if (assetImages.length === 0) {
    console.log("No images found in src/assets");
  } else {
    for (const imagePath of assetImages) {
      await compressImage(imagePath);
    }
  }

  console.log("\n");

  // Generate favicons from logo
  await generateFavicons();

  console.log("\n");

  // Compress images in public
  console.log("Compressing public images:");
  const publicImages = await getImages(PUBLIC_DIR);
  
  if (publicImages.length === 0) {
    console.log("No images found in public");
  } else {
    for (const imagePath of publicImages) {
      await compressImage(imagePath);
    }
  }

  console.log("\n✨ Image compression complete!");
}

main().catch(console.error);
