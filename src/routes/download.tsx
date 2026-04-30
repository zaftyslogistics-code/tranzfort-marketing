import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Smartphone,
  Apple,
  Play,
  QrCode,
  ArrowRight,
  Check,
  WifiOff,
  Mic,
  Languages,
  ShieldCheck,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { PhoneFrame } from "@/components/site/PhoneFrame";
import screen from "@/assets/screen-chat.jpg";

function DownloadPage() {
  return (
    <SiteLayout>
      <Helmet>
        <title>Download — TranZfort</title>
        <meta
          name="description"
          content="Download TranZfort for Android and iOS. Free logistics app with AI assistant, offline support, Hindi & English voice."
        />
        <link rel="canonical" href="https://tranzfort.com/download" />
        <meta property="og:title" content="Download TranZfort" />
        <meta
          property="og:description"
          content="Free logistics app with AI assistant, offline support, Hindi & English voice."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "TranZfort",
                operatingSystem: "Android, iOS",
                applicationCategory: "BusinessApplication",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "INR",
                },
                description:
                  "India's first offline-first, AI-powered logistics network for truckers and suppliers.",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  ratingCount: "12500",
                },
                featureList: [
                  "Offline-first AI assistant",
                  "Voice commands in Hindi and English",
                  "AI-powered load matching",
                  "Real-time shipment tracking",
                  "Digital LR and POD",
                  "Secure payments",
                ],
              },
            ),
          }}
        />
        
        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the app really free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. TranZfort is free forever for individual drivers and suppliers. No subscriptions, no commissions, no hidden charges.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the system requirements?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Android 9.0+ with 2 GB RAM, or iOS 15+ on iPhone 8 or newer. The app is about 500 MB and works fully offline.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does it work without internet?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The AI assistant, load search, and route planning all work offline. Syncs when you have data. Perfect for tunnels and rural areas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I install the APK directly?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. For Android phones that can't access the Play Store, you can download the APK directly from our website and install it.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is my data safe?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Your data stays on your device by default. Voice, chat, and documents are processed locally. Sync is encrypted end-to-end.",
                  },
                },
              ],
            }),
          }}
        />
      </Helmet>
      <PageHero
        eyebrow="Download"
        title={
          <>
            Get TranZfort. <span className="text-gradient-brand">Free, forever.</span>
          </>
        }
        desc="Available on Android and iOS. Works offline from the first launch. Built for entry-level smartphones — runs smoothly on any device from 2018 onwards."
      />

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Download options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <a
              href="#"
              className="w-full flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-teal/50 hover:shadow-brand transition-all"
            >
              <Apple className="h-9 w-9" />
              <div className="text-left flex-1">
                <div className="text-xs text-ink-soft">Download on the</div>
                <div className="font-bold text-lg">App Store</div>
              </div>
              <ArrowRight className="h-5 w-5 text-ink-soft" />
            </a>
            <a
              href="#"
              className="w-full flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-teal/50 hover:shadow-brand transition-all"
            >
              <Play className="h-9 w-9 fill-current" />
              <div className="text-left flex-1">
                <div className="text-xs text-ink-soft">Get it on</div>
                <div className="font-bold text-lg">Google Play</div>
              </div>
              <ArrowRight className="h-5 w-5 text-ink-soft" />
            </a>
            <a
              href="/app-release.apk"
              download
              className="w-full flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-teal/50 transition-all"
            >
              <Smartphone className="h-9 w-9" />
              <div className="text-left flex-1">
                <div className="text-xs text-ink-soft">For older Android — direct</div>
                <div className="font-bold text-lg">Download APK</div>
              </div>
              <ArrowRight className="h-5 w-5 text-ink-soft" />
            </a>

            <div className="p-6 rounded-2xl bg-gradient-brand-soft border border-teal/30 flex items-center gap-5">
              <div className="h-20 w-20 rounded-xl bg-white flex items-center justify-center shadow-soft shrink-0">
                <QrCode className="h-12 w-12 text-ink" />
              </div>
              <div>
                <div className="font-bold">Scan to install</div>
                <div className="text-sm text-ink-soft">
                  Open your camera. Point at the QR. Get the app in seconds.
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: WifiOff, t: "Works offline" },
                { icon: Mic, t: "Voice-first" },
                { icon: Languages, t: "हिंदी + English" },
                { icon: ShieldCheck, t: "Free forever" },
              ].map((b) => (
                <div key={b.t} className="flex items-center gap-2 text-sm text-ink-soft">
                  <Check className="h-4 w-4 text-teal" />
                  {b.t}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-10 rounded-[3rem] bg-gradient-brand-soft" />
            <div className="absolute w-48 h-48 rounded-full border-2 border-teal/30 animate-pulse-ring" />
            <PhoneFrame src={screen} alt="App preview" className="relative !w-[280px]" />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-teal font-semibold">FAQ</div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">Download questions</h2>
          </div>
          <div className="mt-10 space-y-3">
            {[
              {
                q: "Is the app really free?",
                a: "Yes. TranZfort is free forever for individual drivers and suppliers. No subscriptions, no commissions, no hidden charges.",
              },
              {
                q: "What are the system requirements?",
                a: "Android 9.0+ with 2 GB RAM, or iOS 15+ on iPhone 8 or newer. The app is about 500 MB and works fully offline.",
              },
              {
                q: "Does it work without internet?",
                a: "Yes. The AI assistant, load search, and route planning all work offline. Syncs when you have data. Perfect for tunnels and rural areas.",
              },
              {
                q: "Can I install the APK directly?",
                a: "Yes. For Android phones that can't access the Play Store, you can download the APK directly from our website and install it.",
              },
              {
                q: "Is my data safe?",
                a: "Yes. Your data stays on your device by default. Voice, chat, and documents are processed locally. Sync is encrypted end-to-end.",
              },
            ].map((x, i) => (
              <details
                key={i}
                className="group p-5 rounded-2xl bg-card border border-border open:border-teal/40 transition-colors"
              >
                <summary className="cursor-pointer font-semibold flex items-center justify-between">
                  {x.q}
                  <span className="text-teal text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-ink-soft leading-relaxed">{x.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-bold">System requirements</h2>
            <p className="mt-3 text-ink-soft">
              Designed to run on the phones drivers actually use.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              { t: "Android", d: "9.0 (Pie) or newer · 2 GB RAM · 500 MB storage" },
              { t: "iOS", d: "iOS 15+ · iPhone 8 or newer · 500 MB storage" },
              { t: "Network", d: "Optional. Works fully offline. Syncs over 2G+." },
            ].map((x) => (
              <div key={x.t} className="p-7 rounded-3xl bg-card border border-border shadow-soft">
                <div className="font-bold text-lg">{x.t}</div>
                <div className="text-ink-soft text-sm mt-2">{x.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/help" className="text-teal font-semibold hover:underline">
              Need help installing? Visit our Help Center →
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default DownloadPage;
