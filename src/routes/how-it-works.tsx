import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { UserPlus, Bot, Truck, Star, ArrowRight, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

const steps = [
  {
    icon: UserPlus,
    t: "Sign Up in 60 seconds",
    d: "Download the app. Tell the AI whether you're a supplier or trucker. It guides you through KYC — Aadhaar, GST, RC, license — with voice if you prefer. Instant verification, no paperwork to courier.",
    detail: [
      "Aadhaar OTP verification",
      "RC + license OCR auto-fill",
      "Voice-guided onboarding in Hindi",
      "Live for matching in under 5 minutes",
    ],
  },
  {
    icon: Bot,
    t: "AI Match in seconds",
    d: "Suppliers post a load — typed or by voice. Truckers ask the AI to find loads on their route. The matching engine considers lane, weight, commodity, ratings, distance and timing — and surfaces the perfect 3-5 matches.",
    detail: [
      "Smart match within 90 seconds",
      "Personalised by lane and commodity",
      "Verified counterparties only",
      "Push notifications you'll actually want",
    ],
  },
  {
    icon: Truck,
    t: "Track Live, AI-Optimised",
    d: "Once booked, the AI monitors the trip in real time. Live ETA, route optimisation, fuel-stop suggestions, document handling. Suppliers see their cargo move. Drivers get help when they need it.",
    detail: [
      "Live ETA based on real driver patterns",
      "Auto-LR + digital POD",
      "Diesel-saving route nudges",
      "Voice updates while driving",
    ],
  },
  {
    icon: Star,
    t: "Rate, Repeat, Improve",
    d: "After delivery, both sides rate each other in one tap. The AI learns your preferences — and the next match is even better. Over time, your TranZfort feed becomes hyper-personalised to how you actually work.",
    detail: [
      "One-tap rating system",
      "AI improves with every trip",
      "Build your trusted network",
      "Repeat-load shortcuts",
    ],
  },
];

function HowItWorks() {
  return (
    <SiteLayout>
      <Helmet>
        <title>How It Works — TranZfort</title>
        <meta
          name="description"
          content="How TranZfort works: Sign up in 60 seconds, AI match in seconds, live tracking, rate and repeat. Free logistics platform for India."
        />
        <link rel="canonical" href="https://tranzfort.com/how-it-works" />
        <meta property="og:title" content="How TranZfort Works" />
        <meta
          property="og:description"
          content="Sign up in 60 seconds, AI match in seconds, live tracking, rate and repeat. Free logistics platform."
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
                  name: "How long does sign up take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sign up takes about 60 seconds. Download the app, tell the AI whether you're a supplier or trucker, and complete KYC with Aadhaar OTP verification. Voice-guided onboarding available in Hindi.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How fast does AI matching work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "AI matching typically happens within 90 seconds. The matching engine considers lane, weight, commodity, ratings, distance and timing to surface the perfect 3-5 matches.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What documents do I need for KYC?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "For truckers: Aadhaar, RC, driving license. For suppliers: Aadhaar, GST, PAN. All verified instantly via OTP or AI OCR — no physical paperwork.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does it work for first-time users?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The AI guides you through every step with voice instructions in Hindi and English. No prior tech experience needed. Designed for drivers who've never used a smartphone app.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does the rating system work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "After delivery, both parties rate each other in one tap. The AI learns from your ratings and preferences, so future matches get even better. Build your trusted network over time.",
                  },
                },
              ],
            }),
          }}
        />
      </Helmet>
      <PageHero
        eyebrow="How it works"
        title={
          <>
            AI makes <span className="text-gradient-brand">every step smarter</span>.
          </>
        }
        desc="Four steps from signup to delivery. At every stage, AI is doing the heavy lifting — so you can focus on shipping, not searching."
      />

      {/* Steps */}
      <section id="steps" className="py-20 lg:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 space-y-12">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-12 gap-8 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-5">
                <div
                  className={`relative rounded-3xl p-10 h-72 flex items-center justify-center overflow-hidden border border-border ${i % 2 === 0 ? "bg-gradient-brand-soft" : "bg-orange/10"}`}
                >
                  <div className="grid-pattern absolute inset-0 opacity-30" />
                  <div className="relative">
                    <div
                      className={`text-7xl font-bold font-display ${i % 2 === 0 ? "text-teal" : "text-orange"} opacity-40`}
                    >
                      0{i + 1}
                    </div>
                    <s.icon
                      className={`absolute -top-2 right-0 h-12 w-12 ${i % 2 === 0 ? "text-teal" : "text-orange"}`}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <div
                    className={`h-9 w-9 rounded-full text-white text-sm font-bold flex items-center justify-center ${i % 2 === 0 ? "bg-gradient-brand" : "bg-orange"}`}
                  >
                    {i + 1}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold">{s.t}</h2>
                </div>
                <p className="mt-4 text-lg text-ink-soft leading-relaxed">{s.d}</p>
                <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
                  {s.detail.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm">
                      <Sparkles className="h-4 w-4 text-teal mt-0.5 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What you need */}
      <section id="requirements" className="py-20 bg-muted/40">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold">All you need to start.</h2>
            <p className="mt-3 text-ink-soft">
              A phone, Aadhaar, and 5 minutes. Seriously, that's it.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              {
                t: "📱 A smartphone",
                d: "Android 9+ or iOS 15+. Works on entry-level phones too.",
              },
              {
                t: "🆔 Aadhaar (for KYC)",
                d: "Verified instantly via OTP. No physical paperwork.",
              },
              {
                t: "🚛 RC (for truckers)",
                d: "Snap a photo. AI extracts everything in 2 seconds.",
              },
            ].map((x) => (
              <div key={x.t} className="p-7 rounded-3xl bg-card border border-border shadow-soft">
                <div className="text-2xl">{x.t.split(" ")[0]}</div>
                <div className="mt-2 font-bold text-lg">{x.t.split(" ").slice(1).join(" ")}</div>
                <p className="text-ink-soft text-sm mt-2">{x.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="/download"
              className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-7 py-3.5 rounded-full shadow-brand"
            >
              Get Started Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-teal font-semibold">FAQ</div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">How it works questions</h2>
          </div>
          <div className="mt-10 space-y-3">
            {[
              {
                q: "How long does sign up take?",
                a: "Sign up takes about 60 seconds. Download the app, tell the AI whether you're a supplier or trucker, and complete KYC with Aadhaar OTP verification. Voice-guided onboarding available in Hindi.",
              },
              {
                q: "How fast does AI matching work?",
                a: "AI matching typically happens within 90 seconds. The matching engine considers lane, weight, commodity, ratings, distance and timing to surface the perfect 3-5 matches.",
              },
              {
                q: "What documents do I need for KYC?",
                a: "For truckers: Aadhaar, RC, driving license. For suppliers: Aadhaar, GST, PAN. All verified instantly via OTP or AI OCR — no physical paperwork.",
              },
              {
                q: "Does it work for first-time users?",
                a: "Yes. The AI guides you through every step with voice instructions in Hindi and English. No prior tech experience needed. Designed for drivers who've never used a smartphone app.",
              },
              {
                q: "How does the rating system work?",
                a: "After delivery, both parties rate each other in one tap. The AI learns from your ratings and preferences, so future matches get even better. Build your trusted network over time.",
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
    </SiteLayout>
  );
}

export default HowItWorks;
