import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { loadPosts } from "@/lib/blog-loader";
import { tagColor } from "@/lib/blog-utils";
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

          {/* Featured Post - Old Design */}
          {featuredPost && (
            <Link to={`/blog/${featuredPost.slug}`} className="block group">
              <div className="grid lg:grid-cols-2 gap-8 items-center p-6 lg:p-10 rounded-3xl bg-gradient-dark text-white overflow-hidden relative mb-12">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="relative">
                  <span className="inline-block px-3 py-1 rounded-full bg-orange text-white text-xs font-bold uppercase tracking-wider">
                    Featured
                  </span>
                  <h2 className="mt-4 text-3xl lg:text-4xl font-bold leading-tight group-hover:text-orange-glow transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-3 text-white/75">{featuredPost.excerpt}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {featuredPost.date}
                    </span>
                    <span>·</span>
                    <span>{featuredPost.tag}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {featuredPost.readTime}
                    </span>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-orange-glow font-semibold">
                    Read article{" "}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl bg-gradient-brand-soft border border-white/10 flex items-center justify-center">
                  <div className="text-7xl">{featuredPost.coverEmoji || "📝"}</div>
                </div>
              </div>
            </Link>
          )}

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-ink-soft">No posts match your search. Try another term.</p>
            </div>
          )}

          {/* Post Grid - Old Design */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={`/blog/${p.slug}`}
                  className="group block p-6 rounded-3xl bg-card border border-border shadow-soft hover:border-teal/40 transition-all h-full"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${
                        tagColor[p.tag] ?? "bg-muted text-ink-soft border-border"
                      }`}
                    >
                      {p.tag}
                    </span>
                    <span className="text-xs text-ink-soft flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" />
                      {p.date}
                    </span>
                  </div>
                  <div className="mt-4 h-32 rounded-2xl bg-gradient-brand-soft grid place-items-center text-5xl">
                    {p.coverEmoji || "📝"}
                  </div>
                  <h3 className="mt-4 font-bold text-lg leading-tight group-hover:text-teal transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed line-clamp-2">
                    {p.excerpt}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
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
