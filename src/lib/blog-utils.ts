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
