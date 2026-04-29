export interface SEOConfig {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

export const seoConfig: Record<string, SEOConfig> = {
  "/": {
    title: "TranZfort — AI Logistics Network for India (Offline + Voice)",
    description:
      "India's first offline-first AI logistics platform. Voice in Hindi & English, smart routes, instant load matching. Free for truckers & suppliers.",
    canonical: "https://tranzfort.com/",
    ogImage: "/og-home.jpg",
  },
  "/about": {
    title: "About TranZfort — Built for Bharat's Truckers & Suppliers",
    description:
      "TranZfort is India's offline-first, voice-first AI logistics network. Built for drivers, suppliers & fleets who keep the country moving.",
    canonical: "https://tranzfort.com/about",
    ogImage: "/og-home.jpg",
  },
  "/pricing": {
    title: "TranZfort Pricing — Free for Drivers & Suppliers",
    description:
      "TranZfort is free for individual drivers and suppliers. Fleet Pro at ₹999/truck/month. Enterprise custom. Zero commissions, ever.",
    canonical: "https://tranzfort.com/pricing",
    ogImage: "/og-pricing.jpg",
  },
  "/contact": {
    title: "Contact TranZfort — Sales & Support (Hindi + English)",
    description:
      "Reach TranZfort sales, support or partnerships. We reply in under 24 hours in Hindi and English. Pune HQ, India-wide operations.",
    canonical: "https://tranzfort.com/contact",
    ogImage: "/og-home.jpg",
  },
  "/download": {
    title: "Download TranZfort App — Android, iOS & APK",
    description:
      "Get the TranZfort app on Android, iOS, or direct APK. Works offline from first launch. Built for entry-level smartphones. Free forever.",
    canonical: "https://tranzfort.com/download",
    ogImage: "/og-download.jpg",
  },
  "/for-truckers": {
    title: "TranZfort for Truckers — AI Load Matching & Smart Routes",
    description:
      "Never drive empty. AI finds return loads, optimises diesel-saving routes, and speaks Hindi. Works offline on Indian highways.",
    canonical: "https://tranzfort.com/for-truckers",
    ogImage: "/og-truckers.jpg",
  },
  "/for-suppliers": {
    title: "TranZfort for Suppliers — AI-Powered Load Posting & Matching",
    description:
      "Post a load once. AI matches you with verified truckers in under 90 seconds. Zero broker commission. Live tracking & digital LR.",
    canonical: "https://tranzfort.com/for-suppliers",
    ogImage: "/og-suppliers.jpg",
  },
  "/how-it-works": {
    title: "How TranZfort Works — 4 Steps from Signup to Delivery",
    description:
      "Sign up in 60 seconds, AI matches loads in 90 seconds, track live with route optimisation, rate & repeat. Works in Hindi & offline.",
    canonical: "https://tranzfort.com/how-it-works",
    ogImage: "/og-home.jpg",
  },
  "/help": {
    title: "TranZfort Help Center — FAQs, Guides & 24/7 Support",
    description:
      "Self-serve help for TranZfort drivers and suppliers. Installation, KYC, payments, AI voice commands, and offline mode explained.",
    canonical: "https://tranzfort.com/help",
    ogImage: "/og-home.jpg",
  },
  "/blog": {
    title: "TranZfort Blog — AI Logistics, Driver Stories & Product Updates",
    description:
      "Stories from the AI logistics frontier. Driver stories from across India, offline AI deep-dives, and TranZfort product updates.",
    canonical: "https://tranzfort.com/blog",
    ogImage: "/og-home.jpg",
  },
  "/ai-assistant": {
    title: "TranZfort AI Assistant — Offline Hindi-English Logistics AI",
    description:
      "The only logistics AI in India that works fully offline, in Hindi and English, with voice. On-device, private, sub-100ms responses.",
    canonical: "https://tranzfort.com/ai-assistant",
    ogImage: "/og-home.jpg",
  },
  "/features": {
    title: "TranZfort Features — Route AI, Load Matching, LR Scanner",
    description:
      "12+ AI capabilities: route planning, load matching, bilingual chat, smart LR scanner, price intelligence, demand forecast, document vault.",
    canonical: "https://tranzfort.com/features",
    ogImage: "/og-features.jpg",
  },
  "/privacy": {
    title: "Privacy Policy — TranZfort",
    description:
      "How TranZfort collects, uses, and protects your data. On-device by default, encrypted sync, no third-party ad trackers.",
    canonical: "https://tranzfort.com/privacy",
    ogImage: "/og-home.jpg",
  },
  "/terms": {
    title: "Terms of Service — TranZfort",
    description:
      "Rules that keep the TranZfort marketplace fair and safe. Accounts, responsibilities, prohibited activities, liability, and disputes.",
    canonical: "https://tranzfort.com/terms",
    ogImage: "/og-home.jpg",
  },
  "/legal": {
    title: "Legal — TranZfort",
    description:
      "Legal notices, disclaimers, and compliance information for TranZfort users and partners.",
    canonical: "https://tranzfort.com/legal",
    ogImage: "/og-home.jpg",
  },
};
