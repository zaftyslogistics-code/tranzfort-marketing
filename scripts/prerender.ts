import { chromium } from "playwright";
import { mkdir, writeFile, readFile } from "fs/promises";
import { existsSync, readdirSync } from "fs";
import path from "path";
import matter from "gray-matter";

// All static routes from src/App.tsx
const routes = [
  "/",
  "/about",
  "/pricing",
  "/contact",
  "/legal",
  "/privacy",
  "/terms",
  "/download",
  "/for-truckers",
  "/for-suppliers",
  "/how-it-works",
  "/help",
  "/blog",
  "/ai-assistant",
  "/features",
];

const PORT = 4173; // Vite preview port
const BASE_URL = `http://localhost:${PORT}`;

async function prerender() {
  console.log("🚀 Starting prerender...");

  // Start the browser
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Start the preview server (assumes `npm run build` has been run first)
  const { spawn } = await import("child_process");
  const previewProcess = spawn("npm", ["run", "preview"], {
    shell: true,
    stdio: "ignore",
  });

  // Wait for the server to start
  console.log(`⏳ Waiting for preview server on port ${PORT}...`);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  let successCount = 0;
  let failCount = 0;

  // Prerender static routes
  for (const route of routes) {
    const url = `${BASE_URL}${route}`;
    const outputPath = path.join(
      process.cwd(),
      "dist",
      route === "/" ? "index.html" : `${route.slice(1)}/index.html`,
    );

    try {
      console.log(`  Rendering: ${route}`);

      // Navigate to the route
      await page.goto(url, { waitUntil: "networkidle" });

      // Wait a bit more for React to fully render
      await page.waitForTimeout(2000);

      // Get the rendered HTML
      const html = await page.content();

      // Create output directory if needed
      const outputDir = path.dirname(outputPath);
      if (!existsSync(outputDir)) {
        await mkdir(outputDir, { recursive: true });
      }

      // Write the HTML
      await writeFile(outputPath, html, "utf-8");
      console.log(`  ✅ Saved: ${outputPath}`);
      successCount++;
    } catch (error) {
      console.error(`  ❌ Failed: ${route}`, error);
      failCount++;
    }
  }

  // Prerender dynamic blog routes
  console.log("  Rendering blog posts...");
  const blogDir = path.join(process.cwd(), "content/blog");
  if (existsSync(blogDir)) {
    const files = readdirSync(blogDir).filter((f: string) => f.endsWith(".md"));

    for (const file of files) {
      const filePath = path.join(blogDir, file);
      const fileContent = await readFile(filePath, "utf-8");
      const { data } = matter(fileContent);
      const slug = data.slug || file.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-/, "");

      const url = `${BASE_URL}/blog/${slug}`;
      const outputPath = path.join(process.cwd(), "dist", "blog", slug, "index.html");

      try {
        console.log(`  Rendering: /blog/${slug}`);

        await page.goto(url, { waitUntil: "networkidle" });
        await page.waitForTimeout(2000);
        const html = await page.content();

        const outputDir = path.dirname(outputPath);
        if (!existsSync(outputDir)) {
          await mkdir(outputDir, { recursive: true });
        }

        await writeFile(outputPath, html, "utf-8");
        console.log(`  ✅ Saved: ${outputPath}`);
        successCount++;
      } catch (error) {
        console.error(`  ❌ Failed: /blog/${slug}`, error);
        failCount++;
      }
    }
  }

  // Cleanup
  await context.close();
  await browser.close();
  previewProcess.kill();

  console.log(`\n✨ Prerender complete: ${successCount} succeeded, ${failCount} failed`);
}

prerender().catch((error) => {
  console.error("Prerender failed:", error);
  process.exit(1);
});
