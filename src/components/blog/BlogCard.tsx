import { BlogTag } from "./BlogTag";
import { BlogMeta } from "./BlogMeta";
import type { BlogPost } from "../../lib/blog";
import { Link } from "react-router-dom";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block bg-card rounded-2xl border border-border/60 hover:border-teal/50 hover:shadow-lg transition-all duration-300"
    >
      {post.coverImage && (
        <div className="aspect-video w-full overflow-hidden rounded-t-2xl">
          <img loading="lazy"
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <BlogTag tag={post.tag} />
        </div>
        <h3 className="text-xl font-semibold text-ink mb-2 line-clamp-2 leading-snug group-hover:text-teal transition-colors">
          {post.title}
        </h3>
        <p className="text-ink-soft text-sm mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
        <BlogMeta date={post.date} readTime={post.readTime} author={post.author.name} />
      </div>
    </Link>
  );
};
