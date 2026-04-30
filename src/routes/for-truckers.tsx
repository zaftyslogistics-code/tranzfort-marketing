import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  MapPin,
  Mic,
  RotateCw,
  ShieldCheck,
  Wallet,
  Smartphone,
  WifiOff,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { PhoneFrame } from "@/components/site/PhoneFrame";
import screen from "@/assets/screen-route.jpg";

function TruckersPage() {
  return (
    <SiteLayout>
      <Helmet>
        <title>For Truckers — TranZfort</title>
        <meta
          name="description"
          content="TranZfort for truckers: AI co-driver, Hindi & English voice, offline support, return load finder, route optimization. Free forever."
        />
        <link rel="canonical" href="https://tranzfort.com/for-truckers" />
        <meta property="og:title" content="TranZfort for Truckers" />
        <meta
          property="og:description"
          content="AI co-driver, Hindi & English voice, offline support, return load finder. Free forever."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
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
                  name: "Is the driver app really free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The TranZfort Driver App is free forever. No hidden charges, no commissions on loads. We make our money helping fleets and enterprises.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does it work without internet?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The AI assistant works fully offline. Voice commands, load search, and route planning all work without data. Syncs when you have signal.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What languages does it support?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Hindi and English natively, including Hinglish. Just speak naturally — you can switch languages mid-sentence.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does it help find return loads?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The AI analyzes your current location, destination, and preferences to find return loads nearby. It considers load type, weight, and your route.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Will it drain my battery?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The AI only activates when you invoke it and uses about 400 MB of RAM. Compatible with Android 9+ and iOS 15+.",
                  },
                },
              ],
            }),
          }}
        />
      </Helmet>
      <PageHero
        eyebrow="For Truckers"
        title={
          <>
            Ask AI. Get loads. <span className="text-gradient-brand">Never drive empty.</span>
          </>
        }
        desc="Built for Indian highways and the drivers who power them. Voice in Hindi & English, full offline support, and an AI co-driver that finds you return loads before you even reach your drop point."
      >
        <Link
          to="/download"
          className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-6 py-3.5 rounded-full shadow-brand hover:scale-[1.03] transition-transform"
        >
          Get the Driver App <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Story */}
      <section id="story" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">Your phone. Your AI co-driver.</h2>
          <p className="mt-4 text-lg text-ink-soft leading-relaxed">
            On every long-haul, an empty return is lost income. A wrong fuel stop is wasted money. A
            missed call is a missed load. TranZfort's AI rides shotgun — listening in Hindi,
            answering instantly, and working even when your phone has zero bars.
          </p>
        </div>
      </section>

      {/* Phone + features */}
      <section id="features" className="py-12 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-4 lg:order-1">
            {[
              {
                icon: MapPin,
                t: "Route AI",
                d: "'Via NH4 — saves ₹1,200 in diesel and 1.5 hours.' Real, calculated suggestions for every trip.",
              },
              {
                icon: RotateCw,
                t: "Return Load Finder",
                d: "Pickup in Mumbai after Delhi drop? AI plans your full circuit before you reach the unloading point.",
              },
              {
                icon: Mic,
                t: "Hindi Voice — Hands-free",
                d: "'रास्ता बताओ' · 'लोड ढूंढो' — speak naturally, drive safe. Eyes on the road, hands on the wheel.",
              },
              {
                icon: WifiOff,
                t: "Works in Dead Zones",
                d: "Tunnels, ghats, rural highways — TranZfort keeps working. Syncs the moment you're back online.",
              },
              {
                icon: Wallet,
                t: "Direct Payments",
                d: "Get paid faster. Digital LR, automatic POD, and instant payment release on delivery confirmation.",
              },
              {
                icon: ShieldCheck,
                t: "Verified Suppliers Only",
                d: "Every supplier is GST + KYC verified. No more chasing payments from unknown brokers.",
              },
            ].map((x, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-5 rounded-2xl bg-card border border-border shadow-soft flex gap-4"
              >
                <div className="h-11 w-11 rounded-2xl bg-orange text-white flex items-center justify-center shrink-0 shadow-orange">
                  <x.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold">{x.t}</div>
                  <div className="text-ink-soft text-sm mt-1">{x.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[560px] flex items-center justify-center lg:order-2"
          >
            <div className="absolute inset-8 rounded-[3rem] bg-orange/10" />
            <PhoneFrame src={screen} alt="Trucker route screen" className="relative !w-[280px]" />
          </motion.div>
        </div>
      </section>

      {/* Made for */}
      <section id="made-for" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold">Made for every Indian trucker.</h2>
            <p className="mt-3 text-ink-soft">
              Owner-drivers, small fleets, large transporters — TranZfort respects your time and
              your work.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              {
                t: "Owner-Drivers",
                d: "One truck, one app. Find loads, save diesel, get paid on time.",
              },
              {
                t: "Small Fleets (2-20)",
                d: "Manage drivers, dispatch trips, and grow your business — all from your phone.",
              },
              {
                t: "Large Transporters",
                d: "Multi-user dispatcher dashboard, lane analytics, and integration with your TMS.",
              },
            ].map((x) => (
              <div key={x.t} className="p-7 rounded-3xl bg-card border border-border shadow-soft">
                <Smartphone className="h-6 w-6 text-teal" />
                <div className="mt-4 font-bold text-lg">{x.t}</div>
                <p className="text-ink-soft text-sm mt-2">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-teal font-semibold">FAQ</div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">Questions for truckers</h2>
          </div>
          <div className="mt-10 space-y-3">
            {[
              {
                q: "Is the driver app really free?",
                a: "Yes. The TranZfort Driver App is free forever. No hidden charges, no commissions on loads. We make our money helping fleets and enterprises.",
              },
              {
                q: "Does it work without internet?",
                a: "Yes. The AI assistant works fully offline. Voice commands, load search, and route planning all work without data. Syncs when you have signal.",
              },
              {
                q: "What languages does it support?",
                a: "Hindi and English natively, including Hinglish. Just speak naturally — you can switch languages mid-sentence.",
              },
              {
                q: "How does it help find return loads?",
                a: "The AI analyzes your current location, destination, and preferences to find return loads nearby. It considers load type, weight, and your route.",
              },
              {
                q: "Will it drain my battery?",
                a: "No. The AI only activates when you invoke it and uses about 400 MB of RAM. Compatible with Android 9+ and iOS 15+.",
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

      <section id="cta" className="py-20 bg-gradient-brand text-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">Apna AI co-driver, aaj download karo.</h2>
          <p className="mt-3 text-white/85">
            Free forever. Hindi & English. Works offline. Made in India 🇮🇳
          </p>
          <div className="mt-7">
            <Link
              to="/download"
              className="inline-flex items-center gap-2 bg-white text-ink font-semibold px-6 py-3.5 rounded-full shadow-soft"
            >
              Download Driver App <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default TruckersPage;
