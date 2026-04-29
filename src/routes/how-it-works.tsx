import { createFileRoute } from "react-router-dom";
import { motion } from "framer-motion";
import { UserPlus, Bot, Truck, Star, ArrowRight, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorks,
  head: () => ({
    meta: [
      { title: "How TranZfort Works — AI at Every Step | TranZfort" },
      { name: "description", content: "From signup to rating, AI guides every step of the logistics journey on TranZfort. See exactly how it works." },
      { property: "og:title", content: "How TranZfort Works" },
      { property: "og:description", content: "Four steps. Infinite intelligence. From signup to delivery — AI guides the way." },
    ],
  }),
});

const steps = [
  {
    icon: UserPlus, t: "Sign Up in 60 seconds",
    d: "Download the app. Tell the AI whether you're a supplier or trucker. It guides you through KYC — Aadhaar, GST, RC, license — with voice if you prefer. Instant verification, no paperwork to courier.",
    detail: ["Aadhaar OTP verification", "RC + license OCR auto-fill", "Voice-guided onboarding in Hindi", "Live for matching in under 5 minutes"],
  },
  {
    icon: Bot, t: "AI Match in seconds",
    d: "Suppliers post a load — typed or by voice. Truckers ask the AI to find loads on their route. The matching engine considers lane, weight, commodity, ratings, distance and timing — and surfaces the perfect 3-5 matches.",
    detail: ["Smart match within 90 seconds", "Personalised by lane and commodity", "Verified counterparties only", "Push notifications you'll actually want"],
  },
  {
    icon: Truck, t: "Track Live, AI-Optimised",
    d: "Once booked, the AI monitors the trip in real time. Live ETA, route optimisation, fuel-stop suggestions, document handling. Suppliers see their cargo move. Drivers get help when they need it.",
    detail: ["Live ETA based on real driver patterns", "Auto-LR + digital POD", "Diesel-saving route nudges", "Voice updates while driving"],
  },
  {
    icon: Star, t: "Rate, Repeat, Improve",
    d: "After delivery, both sides rate each other in one tap. The AI learns your preferences — and the next match is even better. Over time, your TranZfort feed becomes hyper-personalised to how you actually work.",
    detail: ["One-tap rating system", "AI improves with every trip", "Build your trusted network", "Repeat-load shortcuts"],
  },
];

function HowItWorks() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="How it works"
        title={<>AI makes <span className="text-gradient-brand">every step smarter</span>.</>}
        desc="Four steps from signup to delivery. At every stage, AI is doing the heavy lifting — so you can focus on shipping, not searching."
      />

      {/* Steps */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 space-y-12">
          {steps.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-12 gap-8 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-5">
                <div className={`relative rounded-3xl p-10 h-72 flex items-center justify-center overflow-hidden border border-border ${i % 2 === 0 ? "bg-gradient-brand-soft" : "bg-orange/10"}`}>
                  <div className="grid-pattern absolute inset-0 opacity-30" />
                  <div className="relative">
                    <div className={`text-7xl font-bold font-display ${i % 2 === 0 ? "text-teal" : "text-orange"} opacity-40`}>0{i + 1}</div>
                    <s.icon className={`absolute -top-2 right-0 h-12 w-12 ${i % 2 === 0 ? "text-teal" : "text-orange"}`} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <div className={`h-9 w-9 rounded-full text-white text-sm font-bold flex items-center justify-center ${i % 2 === 0 ? "bg-gradient-brand" : "bg-orange"}`}>
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
      <section className="py-20 bg-muted/40">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold">All you need to start.</h2>
            <p className="mt-3 text-ink-soft">A phone, Aadhaar, and 5 minutes. Seriously, that's it.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              { t: "📱 A smartphone", d: "Android 9+ or iOS 15+. Works on entry-level phones too." },
              { t: "🆔 Aadhaar (for KYC)", d: "Verified instantly via OTP. No physical paperwork." },
              { t: "🚛 RC (for truckers)", d: "Snap a photo. AI extracts everything in 2 seconds." },
            ].map((x) => (
              <div key={x.t} className="p-7 rounded-3xl bg-card border border-border shadow-soft">
                <div className="text-2xl">{x.t.split(" ")[0]}</div>
                <div className="mt-2 font-bold text-lg">{x.t.split(" ").slice(1).join(" ")}</div>
                <p className="text-ink-soft text-sm mt-2">{x.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="/download" className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-7 py-3.5 rounded-full shadow-brand">
              Get Started Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
