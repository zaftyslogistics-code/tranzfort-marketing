import { BlogTag } from "./BlogTag";
import { BlogMeta } from "./BlogMeta";
import type { BlogPost } from "../../lib/blog";
import { Link } from "react-router-dom";

interface BlogPostHeroProps {
  post: BlogPost;
}

export const BlogPostHero = ({ post }: BlogPostHeroProps) => {
  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <div className="grid lg:grid-cols-2 gap-8 items-center bg-card rounded-2xl border border-border/60 overflow-hidden hover:shadow-lg transition-all duration-300">
        {post.coverImage && (
          <div className="aspect-video lg:aspect-auto lg:h-full overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-4">
            <BlogTag tag={post.tag} />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-ink mb-3 leading-tight group-hover:text-teal transition-colors">
            {post.title}
          </h2>
          <p className="text-ink-soft mb-6 line-clamp-2 leading-relaxed">{post.excerpt}</p>
          <BlogMeta date={post.date} readTime={post.readTime} author={post.author.name} />
        </div>
      </div>
    </Link>
  );
};
