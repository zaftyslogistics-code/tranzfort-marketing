import { Helmet } from "react-helmet-async";
import type { BlogPost } from "../../lib/blog";

interface BlogSEOProps {
  post: BlogPost;
}

export const BlogSEO = ({ post }: BlogSEOProps) => {
  const url = `https://tranzfort.com/blog/${post.slug}`;

  return (
    <Helmet>
      <title>{post.title} — TranZfort Blog</title>
      <meta name="description" content={post.excerpt} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      {post.coverImage && (
        <meta property="og:image" content={`https://tranzfort.com${post.coverImage}`} />
      )}
      <meta property="og:type" content="article" />
      <meta property="article:published_time" content={post.date} />
      <meta property="article:tag" content={post.tag} />
      <meta name="twitter:card" content="summary_large_image" />
      {post.coverImage && (
        <meta name="twitter:image" content={`https://tranzfort.com${post.coverImage}`} />
      )}

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://tranzfort.com/" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://tranzfort.com/blog",
              },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        }}
      />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.coverImage ? `https://tranzfort.com${post.coverImage}` : undefined,
            datePublished: post.date,
            author: { "@type": "Organization", name: post.author },
            publisher: {
              "@type": "Organization",
              name: "TranZfort Technologies Pvt. Ltd.",
              logo: "https://tranzfort.com/logo.png",
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          }),
        }}
      />
    </Helmet>
  );
};
