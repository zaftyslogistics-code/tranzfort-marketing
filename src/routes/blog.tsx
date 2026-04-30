import { useState } from "react";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogPostHero } from "@/components/blog/BlogPostHero";
import { loadPosts } from "@/lib/blog-loader";
import type { BlogPost } from "@/lib/blog";

function BlogPage() {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const posts = loadPosts();
  const tags = ["All", ...Array.from(new Set(posts.map((p) => p.tag)))];

  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const regularPosts = posts.filter((p) => p.slug !== featuredPost?.slug);

  const filteredPosts = regularPosts.filter((post) => {
    const matchesTag = selectedTag === "All" || post.tag === selectedTag;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Stories from the <span className="text-gradient-brand">AI logistics frontier</span>.
          </>
        }
        desc="Driver stories from across India, deep-dives on offline AI, and product updates straight from the TranZfort team."
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Tag Filter Bar */}
          <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? "bg-teal text-white"
                    : "bg-muted text-ink-soft hover:bg-muted/80"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="mb-12">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-md px-4 py-3 rounded-full bg-card border border-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none"
            />
          </div>

          {/* Featured Post */}
          {featuredPost && <BlogPostHero post={featuredPost} />}

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-ink-soft">No posts match your search. Try another term.</p>
            </div>
          )}

          {/* Post Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.04, 0.2) }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Get our monthly digest.</h2>
          <p className="mt-2 text-ink-soft">
            One email per month. Driver stories, AI deep-dives, no spam.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="flex-1 h-12 px-4 rounded-full bg-card border border-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none"
            />
            <button className="h-12 px-6 rounded-full bg-gradient-brand text-white font-semibold shadow-brand">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

export default BlogPage;
