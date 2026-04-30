import { readdirSync } from "fs";
import { writeFile, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";

const SITE_URL = "https://tranzfort.com";

// Static routes
const staticRoutes = [
  "/",
  "/about",
  "/pricing",
  "/contact",
  "/download",
  "/for-truckers",
  "/for-suppliers",
  "/how-it-works",
  "/help",
  "/blog",
  "/ai-assistant",
  "/features",
  "/legal",
  "/privacy",
  "/terms",
];

async function generateSitemap() {
  console.log("🗺️  Generating sitemap.xml...");

  const urlEntries: Array<{
    loc: string;
    lastmod: string;
    changefreq: string;
    priority: number;
  }> = [];

  // Add static routes
  for (const route of staticRoutes) {
    urlEntries.push({
      loc: `${SITE_URL}${route}`,
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: route === "/" ? "daily" : "weekly",
      priority: route === "/" ? 1.0 : 0.8,
    });
  }

  // Add blog posts from Markdown files
  const blogDir = path.join(process.cwd(), "content/blog");
  try {
    const files = readdirSync(blogDir).filter((f) => f.endsWith(".md"));

    for (const file of files) {
      const filePath = path.join(blogDir, file);
      const fileContent = await readFile(filePath, "utf-8");

      // Extract date from frontmatter before parsing with matter
      const dateMatch = fileContent.match(/^date:\s*(.+)$/m);
      const date = dateMatch ? dateMatch[1].trim() : new Date().toISOString().split("T")[0];

      const { data } = matter(fileContent);
      const slug = data.slug || file.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-/, "");

      urlEntries.push({
        loc: `${SITE_URL}/blog/${slug}`,
        lastmod: date,
        changefreq: "weekly",
        priority: 0.7,
      });
    }
  } catch (error) {
    console.log("  No blog posts found, skipping blog routes");
  }

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  // Write to public/sitemap.xml
  const outputPath = path.join(process.cwd(), "public", "sitemap.xml");
  await writeFile(outputPath, xml, "utf-8");
  console.log(`  ✅ Saved: ${outputPath}`);
}

generateSitemap().catch((error) => {
  console.error("Sitemap generation failed:", error);
  process.exit(1);
});
