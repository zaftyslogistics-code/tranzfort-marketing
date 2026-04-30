import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogSEO } from "../components/blog/BlogSEO";
import { MarkdownRenderer } from "../components/blog/MarkdownRenderer";
import { ReadingProgress } from "../components/blog/ReadingProgress";
import { ShareButtons } from "../components/blog/ShareButtons";
import { TableOfContents, type Heading } from "../components/blog/TableOfContents";
import { SiteLayout } from "@/components/site/Layout";
import { getPostBySlug, loadPosts } from "../lib/blog-loader";
import { getAdjacent, getRelated, tagColor } from "../lib/blog-utils";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const { prev, next } = getAdjacent(slug || "");
  const related = getRelated(slug || "", 3);

  // Extract headings for TOC
  const headings: Heading[] = post.content
    .split("\n")
    .filter((line) => line.match(/^#{2,3}\s/))
    .map((line) => {
      const level = line.match(/^(#{2,3})/)?.[1].length || 2;
      const text = line.replace(/^#{2,3}\s/, "").trim();
      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");
      return { id, text, level };
    });

  return (
    <SiteLayout>
      <ReadingProgress />

      {/* Dark editorial header */}
      <header className="relative bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.55 0.11 195 / 0.35), transparent 65%)",
          }}
        />
        <div
          className="absolute -bottom-32 -right-20 w-[420px] h-[420px] rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{
            background: "radial-gradient(circle, oklch(0.72 0.18 55), transparent 70%)",
          }}
        />
        <div className="relative max-w-[720px] mx-auto px-5 pt-12 pb-12 lg:pt-16 lg:pb-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-orange-glow transition-colors group"
          >
            <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />{" "}
            All articles
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2.5 text-xs text-white/70">
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] rounded-full border border-white/20 bg-white/5 text-white">
              {post.tag}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3 w-3" /> {post.date}
            </span>
            <span className="text-white/30">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3 w-3" /> {post.readingTime} min read
            </span>
          </div>

          <h1 className="mt-5 font-display text-[2.25rem] md:text-[2.85rem] lg:text-[3.25rem] font-bold tracking-[-0.025em] leading-[1.08] text-white">
            {post.title}
          </h1>
          {post.subtitle && (
            <p className="mt-5 text-[1.15rem] md:text-[1.2rem] text-white/75 leading-[1.6] font-light">
              {post.subtitle}
            </p>
          )}

          <div className="mt-8 flex items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-brand grid place-items-center text-white text-sm font-bold shadow-brand">
                {post.authorInitials || "TT"}
              </div>
              <div>
                <div className="font-semibold text-sm text-white leading-tight">{post.author}</div>
                <div className="text-xs text-white/60">{post.authorRole || "TranZfort Team"}</div>
              </div>
            </div>
            <div className="hidden sm:block">
              <ShareButtons post={post} dark />
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <section className="bg-background relative">
        {/* Floating TOC */}
        <aside className="hidden xl:block absolute top-12 right-[max(2rem, calc(50%-560px))] w-[200px]">
          <div className="sticky top-24">
            <TableOfContents headings={headings} />
          </div>
        </aside>

        <article className="max-w-[720px] mx-auto px-5 py-12 lg:py-16">
          <MarkdownRenderer content={post.content} />

          {/* Footer of article */}
          <div className="mt-16 pt-8 border-t border-border space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <ShareButtons post={post} />
              <Link
                to="/blog"
                className="text-sm font-semibold text-teal inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back to blog
              </Link>
            </div>

            {/* Author card */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted/40 border border-border">
              <div className="h-12 w-12 rounded-full bg-gradient-brand grid place-items-center text-white font-bold shrink-0 shadow-brand">
                {post.authorInitials || "TT"}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                  Written by
                </div>
                <div className="font-display font-bold text-base text-ink mt-0.5">
                  {post.author}
                </div>
                <div className="text-xs text-ink-soft">{post.authorRole || "TranZfort Team"}</div>
                <p className="mt-2 text-sm text-ink/80 leading-relaxed">
                  Writing about AI, logistics, and the road from the TranZfort team.{" "}
                  <Link to="/contact" className="text-teal font-semibold hover:underline">
                    Get in touch
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Prev / Next */}
      {(prev || next) && (
        <section className="relative bg-gradient-dark text-white py-16 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 50%, oklch(0.72 0.18 55 / 0.18), transparent 70%)",
            }}
          />
          <div className="relative max-w-[720px] mx-auto px-5">
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/60 text-center mb-8">
              Continue reading
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {prev ? (
                <Link
                  to={`/blog/${prev.slug}`}
                  className="group p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-teal-glow/60 hover:bg-white/[0.07] transition-colors backdrop-blur"
                >
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/60 flex items-center gap-1.5">
                    <ArrowLeft className="h-3 w-3" /> Previous
                  </div>
                  <div className="mt-2 font-display font-bold text-[1rem] text-white group-hover:text-teal-glow transition-colors leading-snug">
                    {prev.title}
                  </div>
                  <div className="mt-1 text-xs text-white/50">
                    {prev.tag} · {prev.readingTime} min read
                  </div>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}
              {next ? (
                <Link
                  to={`/blog/${next.slug}`}
                  className="group p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-orange-glow/60 hover:bg-white/[0.07] transition-colors backdrop-blur text-right"
                >
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/60 flex items-center gap-1.5 justify-end">
                    Next <ArrowRight className="h-3 w-3" />
                  </div>
                  <div className="mt-2 font-display font-bold text-[1rem] text-white group-hover:text-orange-glow transition-colors leading-snug">
                    {next.title}
                  </div>
                  <div className="mt-1 text-xs text-white/50">
                    {next.tag} · {next.readingTime} min read
                  </div>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-background py-16 border-t border-border">
          <div className="max-w-6xl mx-auto px-5">
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                  More from the blog
                </div>
                <h2 className="mt-2 text-2xl lg:text-3xl font-bold">
                  Related <span className="text-gradient-brand">reads</span>
                </h2>
              </div>
              <Link
                to="/blog"
                className="text-sm font-semibold text-teal inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
              >
                All articles <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="block group rounded-2xl bg-card border border-border hover:border-teal/40 hover:-translate-y-0.5 transition-all h-full overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border ${
                          tagColor[p.tag] ?? "bg-muted text-ink-soft border-border"
                        }`}
                      >
                        {p.tag}
                      </span>
                      <span className="text-xs text-ink-soft">{p.readingTime} min read</span>
                    </div>
                    <h3 className="mt-4 font-display font-bold text-[1.05rem] leading-snug group-hover:text-teal transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed line-clamp-3">
                      {p.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
