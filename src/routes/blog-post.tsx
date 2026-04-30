import { useParams, Navigate } from "react-router-dom";
import { BlogSEO } from "../components/blog/BlogSEO";
import { BlogTag } from "../components/blog/BlogTag";
import { BlogMeta } from "../components/blog/BlogMeta";
import { MarkdownRenderer } from "../components/blog/MarkdownRenderer";
import { TableOfContents, type Heading } from "../components/blog/TableOfContents";
import { ShareBar } from "../components/blog/ShareBar";
import { AuthorBio } from "../components/blog/AuthorBio";
import { RelatedPosts } from "../components/blog/RelatedPosts";
import { getPostBySlug, loadPosts } from "../lib/blog-loader";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Extract headings from markdown for table of contents
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
    <div className="min-h-screen">
      <BlogSEO post={post} />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12">
        {/* Cover Image */}
        {post.coverImage && (
          <div className="aspect-video rounded-2xl overflow-hidden mb-8">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Post Header */}
        <div className="max-w-[760px] mx-auto mb-8">
          <BlogTag tag={post.tag} />
          <h1 className="text-3xl lg:text-4xl font-bold text-ink mt-4 mb-4 leading-tight">
            {post.title}
          </h1>
          <BlogMeta date={post.date} readingTime={post.readingTime} author={post.author} />
        </div>

        {/* Article Layout */}
        <div className="lg:grid lg:grid-cols-[72px_minmax(0,760px)_260px] lg:gap-10">
          {/* Left Share Rail */}
          <div className="hidden lg:flex flex-col gap-2 sticky top-28 items-center">
            <ShareBar title={post.title} url={`https://tranzfort.com/blog/${post.slug}`} />
          </div>

          {/* Article Body */}
          <div className="max-w-[760px]">
            <MarkdownRenderer content={post.content} />

            {/* Inline CTA */}
            <div className="my-12 p-6 bg-gradient-brand/10 rounded-2xl border border-teal/20">
              <h3 className="text-xl font-semibold text-ink mb-2">Ready to get started?</h3>
              <p className="text-ink-soft mb-4">
                Download TranZfort and start matching loads smarter today.
              </p>
              <a
                href="/download"
                className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-6 py-3 rounded-full hover:scale-[1.03] transition-transform"
              >
                Download App
              </a>
            </div>

            {/* Share Bar (Mobile) */}
            <div className="lg:hidden flex justify-center mb-8">
              <ShareBar title={post.title} url={`https://tranzfort.com/blog/${post.slug}`} />
            </div>

            {/* Author Bio */}
            <AuthorBio author={post.author} role={post.authorRole} />
          </div>

          {/* Right TOC */}
          <div className="hidden lg:block">
            <TableOfContents headings={headings} />
          </div>
        </div>

        {/* Related Posts */}
        <div className="max-w-[760px] mx-auto mt-16">
          <RelatedPosts currentSlug={post.slug} tag={post.tag} posts={loadPosts()} />
        </div>

        {/* Back to Blog */}
        <div className="max-w-[760px] mx-auto mt-8">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-ink-soft hover:text-ink transition-colors"
          >
            ← Back to blog
          </a>
        </div>

        {/* Newsletter CTA */}
        <div className="max-w-[760px] mx-auto mt-16 p-8 bg-card rounded-2xl border border-border/60">
          <h3 className="text-xl font-semibold text-ink mb-2">Enjoyed this article?</h3>
          <p className="text-ink-soft mb-4">
            Get the next one in your inbox. No spam, just logistics insights.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-6 py-3 rounded-full hover:scale-[1.03] transition-transform"
          >
            Subscribe to updates
          </a>
        </div>
      </div>
    </div>
  );
}
