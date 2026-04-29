import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Bot, MapPin, ScanLine, TrendingUp, Sparkles, Zap, Mic, ShieldCheck,
  WifiOff, Languages, Clock, Bell, FileCheck, Route as RouteIcon, ArrowRight,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

const heroFeatures = [
  {
    icon: MapPin, title: "AI Route Planner", color: "teal",
    desc:
      "More than just turn-by-turn. TranZfort's Route Genius factors in current diesel prices, time-of-day traffic on Indian highways, toll costs, and even your truck's load profile to suggest the route that actually saves you money — not just minutes.",
    bullets: ["NH preferences with toll-cost awareness", "Diesel-saving stop suggestions", "Re-routes around live blockages", "Works fully offline once cached"],
  },
  {
    icon: Sparkles, title: "AI Load Matching", color: "orange",
    desc:
      "Stop scrolling through hundreds of irrelevant loads. Our matching engine learns the lanes you prefer, the commodities you handle best, the suppliers you trust, and the rates you typically accept — then surfaces the perfect 3-5 matches every time.",
    bullets: ["Lane & commodity preference learning", "Trust-score weighted suggestions", "Return-load aware (no empty trips)", "Push notifications you actually want"],
  },
  {
    icon: Bot, title: "Bilingual Chat Assistant", color: "teal",
    desc:
      "Ask anything: 'Find steel loads near Pune for tomorrow', 'मुंबई से दिल्ली का रेट क्या है', 'Scan this LR'. Switch between Hindi and English mid-sentence — the assistant understands you naturally and responds in the same language.",
    bullets: ["Hindi + English with code-switching", "Natural conversation memory", "Voice or text — your choice", "On-device, no cloud round-trips"],
  },
  {
    icon: ScanLine, title: "Smart LR Scanner", color: "orange",
    desc:
      "Point your camera at any Lorry Receipt — printed or hand-written, in any regional language. Our on-device OCR + AI extracts consignor, consignee, weight, GST numbers, charges and dates in under 2 seconds, ready for your records.",
    bullets: ["Hand-written + printed support", "Regional script recognition", "Auto-fills your trip records", "Works without internet"],
  },
];

const moreFeatures = [
  { icon: TrendingUp, title: "Price Intelligence", desc: "Live market rates by lane, season and commodity — with AI-suggested fair prices for every quote you give or receive." },
  { icon: Mic, title: "Voice TTS & STT", desc: "Native text-to-speech and speech-to-text in Hindi & English. Drive safer with hands-free voice commands and audio updates." },
  { icon: WifiOff, title: "Offline-First Sync", desc: "Every action — posting loads, updating status, scanning docs — works offline and syncs the moment signal returns." },
  { icon: Languages, title: "Bilingual Everything", desc: "Not just translated. The whole UI, voice, AI prompts, notifications and support are bilingual from the ground up." },
  { icon: Clock, title: "Live ETA & Tracking", desc: "AI predicts arrival times based on real driver patterns, not flat averages. Suppliers always know what's actually happening." },
  { icon: Bell, title: "Smart Notifications", desc: "Only the alerts that matter. Demand spikes on your lane, price drops, document expiry — never just noise." },
  { icon: FileCheck, title: "Document Vault", desc: "RC, license, insurance, PUC, permits — all stored, encrypted, and AI-watched for expiry. Renewal reminders included." },
  { icon: ShieldCheck, title: "Verified Network", desc: "Aadhaar + RC + GST verified. Driver & supplier ratings. Zero-tolerance fraud monitoring on every transaction." },
  { icon: Zap, title: "Demand Forecast", desc: "AI predicts which lanes will heat up next week so you can position trucks where the loads will be — not where they were." },
  { icon: RouteIcon, title: "Multi-Stop Planner", desc: "Pickup in Mumbai, drop in Surat, return load in Vadodara — TranZfort plans full circuits, not just one-way trips." },
];

function FeaturesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The AI Stack"
        title={<>Every feature, <span className="text-gradient-brand">powered by AI</span>.</>}
        desc="Twelve+ AI capabilities working together to make logistics in India faster, cheaper, and smarter. Online, offline, in Hindi or in English — TranZfort works the way drivers and suppliers actually work."
      >
        <Link to="/download" className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-6 py-3.5 rounded-full shadow-brand hover:scale-[1.03] transition-transform">
          Download the App <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Hero features — deep dive */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 space-y-16">
          {heroFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-5">
                <div className={`inline-flex h-14 w-14 rounded-2xl items-center justify-center text-white ${f.color === "teal" ? "bg-gradient-brand shadow-brand" : "bg-orange shadow-orange"}`}>
                  <f.icon className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-3xl lg:text-4xl font-bold leading-tight">{f.title}</h2>
                <p className="mt-4 text-lg text-ink-soft leading-relaxed">{f.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <div className={`h-5 w-5 rounded-full mt-0.5 flex items-center justify-center text-white text-[10px] shrink-0 ${f.color === "teal" ? "bg-teal" : "bg-orange"}`}>✓</div>
                      <span className="text-ink">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-7">
                <div className={`relative rounded-3xl p-10 h-72 flex items-center justify-center overflow-hidden border border-border ${f.color === "teal" ? "bg-gradient-brand-soft" : "bg-orange/10"}`}>
                  <div className="grid-pattern absolute inset-0 opacity-30" />
                  <f.icon className={`relative h-32 w-32 ${f.color === "teal" ? "text-teal" : "text-orange"} opacity-40`} strokeWidth={1.2} />
                  <div className="absolute bottom-5 left-5 px-3 py-1.5 rounded-full bg-white text-ink text-xs font-semibold shadow-soft">
                    {f.color === "teal" ? "AI · On-device" : "Voice + Vision"}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Grid of all other features */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-teal font-semibold">And so much more</div>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold">The complete toolkit.</h2>
            <p className="mt-4 text-lg text-ink-soft">From documents to demand forecasting — every operational headache, solved by AI.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {moreFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="p-5 rounded-2xl bg-card border border-border hover:border-teal/40 transition-colors"
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-brand text-white flex items-center justify-center">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-bold">{f.title}</h3>
                <p className="text-sm text-ink-soft mt-1.5 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to put AI to work?</h2>
          <p className="mt-3 text-lg text-ink-soft">Join thousands of drivers and suppliers already moving smarter with TranZfort.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/download" className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-6 py-3.5 rounded-full shadow-brand">Download App <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-ink font-semibold px-6 py-3.5 rounded-full">Talk to Sales</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default FeaturesPage;
