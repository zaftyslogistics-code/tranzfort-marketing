import type { BlogPost } from "./blog";
import { loadPosts } from "./blog-loader";

// Tag color mapping from old design
export const tagColor: Record<string, string> = {
  AI: "bg-teal/10 text-teal border-teal/20",
  "Driver Story": "bg-orange/10 text-orange border-orange/20",
  Product: "bg-teal/10 text-teal border-teal/20",
  Industry: "bg-orange/10 text-orange border-orange/20",
  Engineering: "bg-teal/10 text-teal border-teal/20",
};

// Shared utility to generate consistent heading IDs from markdown text
export function generateHeadingId(text: string): string {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

// Extract text from React children for ID generation
export function extractTextFromChildren(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join("");
  }
  if (children && typeof children === "object" && "props" in children) {
    return extractTextFromChildren(
      (children as { props?: { children?: React.ReactNode } }).props?.children || "",
    );
  }
  return "";
}

// Get adjacent posts (prev/next) for navigation
export function getAdjacent(slug: string) {
  const posts = loadPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? posts[index - 1] : null,
    next: index < posts.length - 1 ? posts[index + 1] : null,
  };
}

// Get related posts by tag
export function getRelated(slug: string, limit = 3) {
  const posts = loadPosts();
  const current = posts.find((p) => p.slug === slug);
  if (!current) return [];
  return posts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => (a.tag === current.tag ? -1 : 1) - (b.tag === current.tag ? -1 : 1))
    .slice(0, limit);
}
