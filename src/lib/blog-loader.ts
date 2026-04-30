import type { BlogPost } from "./blog";

// Load all Markdown files at build time
const modules = import.meta.glob("/content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function parseFrontmatter(content: string): {
  data: Record<string, string | number | boolean>;
  content: string;
} {
  const lines = content.split("\n");
  let frontmatterEnd = -1;

  // Find the end of frontmatter (---)
  if (lines[0] === "---") {
    for (let i = 1; i < lines.length; i++) {
      if (lines[i] === "---") {
        frontmatterEnd = i;
        break;
      }
    }
  }

  if (frontmatterEnd === -1) {
    return { data: {}, content };
  }

  const frontmatterLines = lines.slice(1, frontmatterEnd);
  const bodyLines = lines.slice(frontmatterEnd + 1);
  const body = bodyLines.join("\n").trim();

  const data: Record<string, string | number | boolean> = {};
  for (const line of frontmatterLines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value: string | number | boolean = line.slice(colonIndex + 1).trim();

    // Handle quoted values
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    // Handle boolean values
    if (value === "true") value = true;
    if (value === "false") value = false;

    // Handle number values
    if (!isNaN(Number(value)) && value !== "") {
      value = Number(value);
    }

    data[key] = value;
  }

  return { data, content: body };
}

function slugify(path: string): string {
  const filename = path.split("/").pop() || "";
  return filename.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-/, "");
}

export function loadPosts(): BlogPost[] {
  return Object.entries(modules)
    .map(([path, raw]) => {
      const { data, content } = parseFrontmatter(raw as string);
      return {
        ...data,
        content,
        slug: data.slug || slugify(path),
      } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return loadPosts().find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, tag: string, limit = 3): BlogPost[] {
  return loadPosts()
    .filter((p) => p.slug !== currentSlug && p.tag === tag)
    .slice(0, limit);
}
