import { BlogCard } from "./BlogCard";
import type { BlogPost } from "../../lib/blog";

interface RelatedPostsProps {
  currentSlug: string;
  tag: string;
  posts: BlogPost[];
  limit?: number;
}

export const RelatedPosts = ({ currentSlug, tag, posts, limit = 3 }: RelatedPostsProps) => {
  const relatedPosts = posts.filter((p) => p.slug !== currentSlug && p.tag === tag).slice(0, limit);

  if (relatedPosts.length === 0) return null;

  return (
    <div>
      <h3 className="text-xl font-semibold text-ink mb-6">Related posts</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};
