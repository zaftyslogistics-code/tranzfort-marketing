import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Bot,
  ShieldCheck,
  BarChart3,
  Bell,
  FileCheck,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { PhoneFrame } from "@/components/site/PhoneFrame";
import screen from "@/assets/screen-supplier.jpg";

function SuppliersPage() {
  return (
    <SiteLayout>
      <Helmet>
        <title>For Suppliers — TranZfort</title>
        <meta
          name="description"
          content="TranZfort for suppliers: AI load matching, verified truckers, zero commissions, real-time tracking. Free core plan."
        />
        <link rel="canonical" href="https://tranzfort.com/for-suppliers" />
        <meta property="og:title" content="TranZfort for Suppliers" />
        <meta
          property="og:description"
          content="AI load matching, verified truckers, zero commissions, real-time tracking. Free core plan."
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
                  name: "Is the supplier app really free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The TranZfort Supplier App is free forever for the core plan. No setup fees, no commissions on loads. We make our money on premium features for fleets.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does AI load matching work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You post a load once with details (lane, weight, pickup/drop, rate). Our AI analyzes your requirements and matches you to verified truckers who fit your criteria. Usually under 90 seconds.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are the truckers verified?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Every trucker on TranZfort goes through a verification process including Aadhaar KYC, license check, and vehicle inspection. We track their delivery performance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I track my shipments?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Get real-time GPS tracking, automated delivery confirmations, and digital proof of delivery. All accessible from the app.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What about payment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "TranZfort handles payments securely. You can pay via UPI, bank transfer, or credit card. Funds are held in escrow and released upon delivery confirmation.",
                  },
                },
              ],
            }),
          }}
        />
      </Helmet>
      <PageHero
        eyebrow="For Suppliers"
        title={
          <>
            Post a load. <span className="text-gradient-brand">AI finds the trucker.</span>
          </>
        }
        desc="Stop calling 20 brokers for one shipment. With TranZfort, you post a load once and our AI matches you to the best verified trucker for your lane, weight, and timing — usually in under 90 seconds."
      >
        <Link
          to="/download"
          className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-6 py-3.5 rounded-full shadow-brand hover:scale-[1.03] transition-transform"
        >
          Get the Supplier App <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Pain → solution */}
      <section id="comparison" className="py-20 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div className="p-8 rounded-3xl bg-muted/60 border border-border">
            <div className="text-xs uppercase tracking-[0.22em] text-ink-soft font-semibold">
              The old way
            </div>
            <h3 className="mt-2 text-2xl font-bold">Phone tag, paper, prayer.</h3>
            <ul className="mt-5 space-y-3 text-ink-soft">
              <li>📞 Call 15-20 brokers per shipment</li>
              <li>💸 Hidden commissions of 8-15% per load</li>
              <li>❓ No visibility once truck leaves the gate</li>
              <li>📄 Hand-written LRs, lost paperwork, GST headaches</li>
              <li>🤷 No clue if the rate you paid was even fair</li>
            </ul>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-brand-soft border border-teal/30">
            <div className="text-xs uppercase tracking-[0.22em] text-teal font-semibold">
              The TranZfort way
            </div>
            <h3 className="mt-2 text-2xl font-bold">Post once. AI does the rest.</h3>
            <ul className="mt-5 space-y-3 text-ink">
              <li>✅ Post a load in 30 seconds (or use voice)</li>
              <li>✅ AI matches 3-5 verified truckers instantly</li>
              <li>✅ Live AI-suggested fair price for every lane</li>
              <li>✅ Real-time tracking + automatic LR digitisation</li>
              <li>✅ Zero broker commissions. Zero hidden charges.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Phone + features */}
      <section id="features" className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[560px] flex items-center justify-center"
          >
            <div className="absolute inset-8 rounded-[3rem] bg-gradient-brand-soft" />
            <PhoneFrame src={screen} alt="Supplier app" className="relative !w-[280px]" />
          </motion.div>
          <div className="space-y-4">
            {[
              {
                icon: Sparkles,
                t: "Smart Matching",
                d: "AI learns which truckers handle your goods best — and prioritises them on your lane.",
              },
              {
                icon: TrendingUp,
                t: "Fair Pricing AI",
                d: "Live suggestions based on diesel, season, demand and historical lane rates. Never overpay again.",
              },
              {
                icon: Bot,
                t: "AI Negotiation Assistant",
                d: "Let AI handle the back-and-forth. Wakes you up only when there's a final offer to accept.",
              },
              {
                icon: ShieldCheck,
                t: "100% Verified Truckers",
                d: "Aadhaar, RC, license, GST and insurance — every trucker is checked before they see your load.",
              },
              {
                icon: BarChart3,
                t: "Spend Analytics",
                d: "See your monthly spend by lane, commodity and trucker. Spot leaks. Renegotiate winners.",
              },
              {
                icon: FileCheck,
                t: "Auto LR & GST Records",
                d: "Every shipment auto-generates a digital LR with GST-ready paperwork. No more shoebox accounting.",
              },
            ].map((x, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-5 rounded-2xl bg-card border border-border shadow-soft flex gap-4"
              >
                <div className="h-11 w-11 rounded-2xl bg-gradient-brand text-white flex items-center justify-center shrink-0">
                  <x.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold">{x.t}</div>
                  <div className="text-ink-soft text-sm mt-1">{x.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Made for */}
      <section id="made-for" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold">Built for every kind of supplier.</h2>
            <p className="mt-3 text-ink-soft">
              Whether you ship one load a week or a hundred a day, TranZfort scales with you.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              {
                t: "Manufacturers",
                d: "Steel, cement, FMCG, auto parts — find verified fleet partners on every lane.",
              },
              {
                t: "Wholesalers & Traders",
                d: "Spot-market loads with transparent pricing and instant booking.",
              },
              {
                t: "Enterprise Shippers",
                d: "Multi-user accounts, custom reporting, API access and dedicated support.",
              },
            ].map((x) => (
              <div key={x.t} className="p-7 rounded-3xl bg-card border border-border shadow-soft">
                <Bell className="h-6 w-6 text-orange" />
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
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">Questions for suppliers</h2>
          </div>
          <div className="mt-10 space-y-3">
            {[
              {
                q: "Is the supplier app really free?",
                a: "Yes. The TranZfort Supplier App is free forever for the core plan. No setup fees, no commissions on loads. We make our money on premium features for fleets.",
              },
              {
                q: "How does AI load matching work?",
                a: "You post a load once with details (lane, weight, pickup/drop, rate). Our AI analyzes your requirements and matches you to verified truckers who fit your criteria. Usually under 90 seconds.",
              },
              {
                q: "Are the truckers verified?",
                a: "Yes. Every trucker on TranZfort goes through a verification process including Aadhaar KYC, license check, and vehicle inspection. We track their delivery performance.",
              },
              {
                q: "Can I track my shipments?",
                a: "Yes. Get real-time GPS tracking, automated delivery confirmations, and digital proof of delivery. All accessible from the app.",
              },
              {
                q: "What about payment?",
                a: "TranZfort handles payments securely. You can pay via UPI, bank transfer, or credit card. Funds are held in escrow and released upon delivery confirmation.",
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

      <section id="cta" className="py-20 bg-gradient-dark text-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to move smarter?</h2>
          <p className="mt-3 text-white/75">
            Free to start. No setup fees. No commissions on what you ship.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/download"
              className="bg-gradient-brand text-white font-semibold px-6 py-3.5 rounded-full shadow-brand"
            >
              Download Supplier App
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 border border-white/15 text-white font-semibold px-6 py-3.5 rounded-full"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default SuppliersPage;
