import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { seoConfig } from "@/lib/seo";

const breadcrumbItems: Record<string, Array<{ name: string; item: string }>> = {
  "/": [{ name: "Home", item: "https://tranzfort.com/" }],
  "/about": [
    { name: "Home", item: "https://tranzfort.com/" },
    { name: "About", item: "https://tranzfort.com/about" },
  ],
  "/pricing": [
    { name: "Home", item: "https://tranzfort.com/" },
    { name: "Pricing", item: "https://tranzfort.com/pricing" },
  ],
  "/contact": [
    { name: "Home", item: "https://tranzfort.com/" },
    { name: "Contact", item: "https://tranzfort.com/contact" },
  ],
  "/download": [
    { name: "Home", item: "https://tranzfort.com/" },
    { name: "Download", item: "https://tranzfort.com/download" },
  ],
  "/for-truckers": [
    { name: "Home", item: "https://tranzfort.com/" },
    { name: "For Truckers", item: "https://tranzfort.com/for-truckers" },
  ],
  "/for-suppliers": [
    { name: "Home", item: "https://tranzfort.com/" },
    { name: "For Suppliers", item: "https://tranzfort.com/for-suppliers" },
  ],
  "/how-it-works": [
    { name: "Home", item: "https://tranzfort.com/" },
    { name: "How It Works", item: "https://tranzfort.com/how-it-works" },
  ],
  "/help": [
    { name: "Home", item: "https://tranzfort.com/" },
    { name: "Help", item: "https://tranzfort.com/help" },
  ],
  "/blog": [
    { name: "Home", item: "https://tranzfort.com/" },
    { name: "Blog", item: "https://tranzfort.com/blog" },
  ],
  "/ai-assistant": [
    { name: "Home", item: "https://tranzfort.com/" },
    { name: "AI Assistant", item: "https://tranzfort.com/ai-assistant" },
  ],
  "/features": [
    { name: "Home", item: "https://tranzfort.com/" },
    { name: "Features", item: "https://tranzfort.com/features" },
  ],
};

function getRouteSchema(pathname: string) {
  const canonical = `https://tranzfort.com${pathname}`;

  // WebSite schema for homepage
  if (pathname === "/") {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: canonical,
      name: "TranZfort",
      description: "India's first offline-first AI logistics platform for truckers and suppliers",
      publisher: {
        "@type": "Organization",
        name: "TranZfort Technologies Pvt. Ltd.",
        logo: "https://tranzfort.com/logo.png",
      },
    };
  }

  // Service schema for truckers and suppliers
  if (pathname === "/for-truckers") {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "TranZfort for Truckers",
      description:
        "AI-powered load matching and route optimization for truckers. Never drive empty again.",
      provider: {
        "@type": "Organization",
        name: "TranZfort Technologies Pvt. Ltd.",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    };
  }

  if (pathname === "/for-suppliers") {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "TranZfort for Suppliers",
      description:
        "AI-powered load posting and truck matching for suppliers. Find verified truckers in under 90 seconds.",
      provider: {
        "@type": "Organization",
        name: "TranZfort Technologies Pvt. Ltd.",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    };
  }

  return null;
}

function getBreadcrumbSchema(pathname: string) {
  const items = breadcrumbItems[pathname];
  if (!items) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function SEO() {
  const location = useLocation();
  const config = seoConfig[location.pathname] || seoConfig["/"];

  const routeSchema = getRouteSchema(location.pathname);
  const breadcrumbSchema = getBreadcrumbSchema(location.pathname);

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

      {/* Organization Schema (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TranZfort Technologies Pvt. Ltd.",
              url: "https://tranzfort.com",
              logo: "https://tranzfort.com/logo.png",
              description:
                "India's first offline-first, AI-powered logistics network for truckers and suppliers.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressLocality: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-927-092-3581",
                contactType: "customer service",
                email: "support@tranzfort.com",
              },
              sameAs: [
                "https://twitter.com/tranzfort",
                "https://linkedin.com/company/tranzfort",
                "https://instagram.com/tranzfort",
              ],
            },
            null,
            2,
          ),
        }}
      />

      {/* Route-specific Schema */}
      {routeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(routeSchema, null, 2),
          }}
        />
      )}

      {/* BreadcrumbList Schema */}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema, null, 2),
          }}
        />
      )}
    </Helmet>
  );
}
