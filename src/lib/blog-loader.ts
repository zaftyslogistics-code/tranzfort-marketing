import type { BlogPost } from "./blog";

// Load all Markdown files at build time
const modules = import.meta.glob("/content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function parseFrontmatter(content: string): {
  data: Record<string, string | number | boolean | unknown>;
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
  const data: Record<string, unknown> = {};
  let currentKey = "";
  let inNested = false;

  frontmatterLines.forEach((line, idx) => {
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) return;

    // Check if this is a nested property (indented)
    if (trimmed.startsWith("  ")) {
      if (currentKey && inNested) {
        const nestedColon = trimmed.indexOf(":");
        if (nestedColon > -1) {
          const nestedKey = trimmed.slice(0, nestedColon).trim();
          const nestedValue = trimmed.slice(nestedColon + 1).trim();
          const currentObj = data[currentKey] as Record<string, string>;
          if (!currentObj) {
            (data[currentKey] as Record<string, string>) = {};
          }
          (data[currentKey] as Record<string, string>)[nestedKey] = nestedValue;
        }
      }
      return;
    }

    // Reset nested state for new top-level keys
    inNested = false;

    const colonIndex = trimmed.indexOf(":");
    if (colonIndex === -1) return;

    const key = trimmed.slice(0, colonIndex).trim();
    const value = trimmed.slice(colonIndex + 1).trim();

    // Handle nested objects (author)
    if (key === "author" && value === "") {
      currentKey = key;
      inNested = true;
      data[key] = {};
      return;
    }

    currentKey = key;

    // Handle booleans
    if (value === "true") {
      data[key] = true;
      return;
    }
    if (value === "false") {
      data[key] = false;
      return;
    }

    // Handle numbers
    if (!isNaN(Number(value)) && value !== "") {
      data[key] = Number(value);
      return;
    }

    // Handle arrays
    if (value.startsWith("[") && value.endsWith("]")) {
      try {
        data[key] = JSON.parse(value);
        return;
      } catch {
        // Fall through
      }
    }

    data[key] = value;
  });

  const contentBody = lines
    .slice(frontmatterEnd + 1)
    .join("\n")
    .trim();

  return { data, content: contentBody };
}

function slugify(path: string): string {
  const filename = path.split("/").pop() || "";
  return filename.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-/, "");
}

export function loadPosts(): BlogPost[] {
  return Object.entries(modules)
    .map(([path, raw]) => {
      const { data, content } = parseFrontmatter(raw as string);

      // If author is already an object (from nested YAML), use it
      // Otherwise, create it from flat author field
      let authorObj = data.author;
      if (!authorObj || typeof authorObj !== "object") {
        const initials = data.author
          ? String(data.author)
              .split(" ")
              .map((n: string) => n[0])
              .join("")
              .toUpperCase()
              .slice(0, 2)
          : "TT";

        authorObj = {
          name: data.author || "TranZfort Team",
          role: data.authorRole || "TranZfort Team",
          initials: initials,
        };
      }

      return {
        ...data,
        content,
        slug: data.slug || slugify(path),
        author: authorObj,
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
