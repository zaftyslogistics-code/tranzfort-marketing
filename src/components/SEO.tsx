import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { seoConfig } from "@/lib/seo";

export function SEO() {
  const location = useLocation();
  const config = seoConfig[location.pathname] || seoConfig["/"];

  return (
    <Helmet>
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <link rel="canonical" href={config.canonical} />

      {/* Open Graph tags */}
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:url" content={config.canonical} />
      <meta property="og:type" content="website" />
      {config.ogImage && (
        <>
          <meta property="og:image" content={`https://tranzfort.com${config.ogImage}`} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:image:alt"
            content="TranZfort AI logistics app for Indian truckers and suppliers"
          />
        </>
      )}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tranzfort" />
      <meta name="twitter:creator" content="@tranzfort" />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      {config.ogImage && (
        <meta name="twitter:image" content={`https://tranzfort.com${config.ogImage}`} />
      )}

      {/* Language targeting */}
      <link rel="alternate" hrefLang="en-in" href={config.canonical} />
      <link rel="alternate" hrefLang="x-default" href={config.canonical} />
    </Helmet>
  );
}
