import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Bot, WifiOff, Mic, Languages, MapPin, ScanLine,
  TrendingUp, MessageSquare, ArrowRight, Sparkles,
  ShieldCheck, Zap, Star, Quote,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PhoneFrame } from "@/components/site/PhoneFrame";
import screenChat from "@/assets/screen-chat.jpg";
import screenRoute from "@/assets/screen-route.jpg";
import screenSupplier from "@/assets/screen-supplier.jpg";
import screenScanner from "@/assets/screen-scanner.jpg";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <OfflineAI />
      <FeaturesGrid />
      <DemoSection />
      <DualPersona />
      <Stats />
      <Testimonials />
      <CTASection />
    </SiteLayout>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-dark text-white">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.55 0.11 195 / 0.45), transparent 60%)" }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.18 55 / 0.35), transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-28 lg:pt-28 lg:pb-36">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-orange-glow opacity-75 animate-pulse-ring" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange" />
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/80">Live | On-device AI</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight"
            >
              SIMPLE VITE - <span className="text-gradient-brand">AI logistics</span> platform
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg text-white/75 max-w-xl"
            >
              AI suggests routes. AI finds loads. AI listens in Hindi & English. All running locally on your phone - no signal needed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                to="/download"
                className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-6 py-3.5 rounded-full shadow-brand hover:scale-[1.03] transition-transform"
              >
                Download App <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur text-white font-semibold px-6 py-3.5 rounded-full border border-white/15 transition-colors"
              >
                See how it works
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-10 flex items-center gap-6 text-sm text-white/60"
            >
              <div className="flex items-center gap-2"><WifiOff className="h-4 w-4 text-teal-glow" /> Offline-first</div>
              <div className="flex items-center gap-2"><Mic className="h-4 w-4 text-teal-glow" /> Voice TTS/STT</div>
              <div className="flex items-center gap-2"><Languages className="h-4 w-4 text-teal-glow" /> हिंदी | English</div>
            </motion.div>
          </div>

          {/* Phones cluster */}
          <div className="lg:col-span-5 relative h-[520px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-72 h-72 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
              <div className="absolute w-40 h-40 rounded-full bg-teal-glow/40 blur-2xl animate-pulse" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -8 }} animate={{ opacity: 1, y: 0, rotate: -8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute left-0 top-10 z-10"
            >
              <PhoneFrame src={screenSupplier} alt="Supplier app screen" className="!w-[200px] animate-float" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute left-1/2 -translate-x-1/2 top-0 z-20"
            >
              <PhoneFrame src={screenChat} alt="AI chat assistant" className="!w-[240px]" />
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-orange">
                AI Assistant
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 8 }} animate={{ opacity: 1, y: 0, rotate: 8 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute right-0 top-10 z-10"
            >
              <PhoneFrame src={screenRoute} alt="Route AI screen" className="!w-[200px] animate-float" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative border-t border-white/10 bg-black/20 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-white/40 text-sm uppercase tracking-[0.3em]">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12">
              <span>| On-device AI</span><span>| Hindi Voice</span><span>| English Voice</span>
              <span>| Smart Routes</span><span>| Load Matching</span><span>| LR Scanner</span>
              <span>| Offline-first</span><span>| Made in India</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── TRUST BAR ───────────────────────── */
function TrustBar() {
  const items = [
    { icon: Bot, label: "AI-Powered", sub: "On every step" },
    { icon: WifiOff, label: "Works Offline", sub: "Local AI on phone" },
    { icon: ShieldCheck, label: "Verified Users", sub: "100% KYC" },
    { icon: MessageSquare, label: "24/7 Support", sub: "Hindi & English" },
  ];
  return (
    <section className="py-14 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-center gap-3 p-4 rounded-2xl hover:bg-accent/40 transition-colors"
          >
            <div className="h-11 w-11 rounded-xl bg-gradient-brand-soft border border-border flex items-center justify-center">
              <it.icon className="h-5 w-5 text-teal" />
            </div>
            <div>
              <div className="font-semibold text-sm">{it.label}</div>
              <div className="text-xs text-ink-soft">{it.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── OFFLINE AI ───────────────────────── */
function OfflineAI() {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange/10 text-orange border border-orange/20 text-xs font-semibold uppercase tracking-wider">
            <Zap className="h-3.5 w-3.5" /> The Core Difference
          </div>
          <h2 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight">
            Local AI. <span className="text-gradient-brand">Zero signal.</span><br />
            Full intelligence.
          </h2>
          <p className="mt-5 text-lg text-ink-soft max-w-lg">
            Most "AI apps" die without internet. TranZfort's intelligence runs <strong>directly on your phone</strong> - chat,
            scan, route, translate - even on a remote highway with no bars.
          </p>

          <div className="mt-8 space-y-3">
            {[
              { icon: WifiOff, t: "Works in dead zones", d: "Highways, tunnels, rural India - AI keeps working." },
              { icon: Languages, t: "हिंदी & English voice", d: "Native TTS & STT. Speak naturally, type if you want." },
              { icon: ShieldCheck, t: "Your data stays on-device", d: "Sensitive load info never leaves your phone unless you sync." },
            ].map((x, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-card border border-border shadow-soft">
                <div className="h-10 w-10 rounded-xl bg-gradient-brand text-white flex items-center justify-center shrink-0">
                  <x.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{x.t}</div>
                  <div className="text-sm text-ink-soft">{x.d}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative h-[500px] flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-brand-soft rounded-[3rem]" />
          <div className="absolute inset-8 rounded-[2.5rem] bg-gradient-dark grid-pattern" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-64 h-64 rounded-full bg-teal/40 blur-3xl animate-pulse" />
            <div className="absolute w-40 h-40 rounded-full border-2 border-teal-glow/40 animate-pulse-ring" />
            <div className="absolute w-40 h-40 rounded-full border-2 border-orange/40 animate-pulse-ring" style={{ animationDelay: "1.2s" }} />
            <div className="relative h-32 w-32 rounded-full bg-gradient-brand glow-teal flex items-center justify-center">
              <Bot className="h-14 w-14 text-white" />
            </div>
          </div>
          <div className="absolute top-12 left-12 px-4 py-2 rounded-full bg-white text-ink text-xs font-semibold shadow-soft flex items-center gap-2">
            <WifiOff className="h-3.5 w-3.5 text-orange" /> No internet required
          </div>
          <div className="absolute bottom-16 right-10 px-4 py-2 rounded-full bg-white text-ink text-xs font-semibold shadow-soft flex items-center gap-2">
            <Mic className="h-3.5 w-3.5 text-teal" /> "रास्ता बताओ"
          </div>
          <div className="absolute bottom-32 left-8 px-4 py-2 rounded-full bg-orange text-white text-xs font-semibold shadow-orange">
            ⚡ &lt;100ms response
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────── FEATURES GRID ───────────────────────── */
const features = [
  { icon: MapPin, title: "Route Genius", desc: "AI suggests fastest routes with diesel-saving stops.", color: "teal" },
  { icon: Sparkles, title: "Load Finder", desc: "AI learns your preferences and finds perfect matches.", color: "orange" },
  { icon: Bot, title: "Chat Assistant", desc: "Ask anything in Hindi or English. Get answers instantly.", color: "teal" },
  { icon: ScanLine, title: "Scanner Pro", desc: "Point at any LR. AI auto-fills every field for you.", color: "orange" },
  { icon: TrendingUp, title: "Price Mind", desc: "AI suggests fair rates based on live market data.", color: "teal" },
  { icon: Zap, title: "Smart Forecast", desc: "Predict demand patterns before your competitors.", color: "orange" },
];

function FeaturesGrid() {
  return (
    <section className="py-24 lg:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-teal font-semibold">The AI Stack</div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold">Your AI co-driver.</h2>
          <p className="mt-4 text-lg text-ink-soft">Not just an app. An intelligent assistant that lives in your pocket.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative p-7 rounded-3xl bg-card border border-border hover:border-teal/40 hover:-translate-y-1 transition-all shadow-soft"
            >
              <div
                className={`h-12 w-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${
                  f.color === "teal" ? "bg-gradient-brand shadow-brand" : "bg-orange shadow-orange"
                }`}
              >
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-ink-soft text-sm leading-relaxed">{f.desc}</p>
              <ArrowRight className="absolute top-7 right-7 h-4 w-4 text-ink-soft opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── DEMO ───────────────────────── */
function DemoSection() {
  const messages = [
    { who: "user", text: "Find loads near Pune for tomorrow" },
    { who: "ai", text: "Found 12 matches. Top: Steel coils, Pune → Mumbai, ₹28,000. Route saves you 1.5 hrs via NH4." },
    { who: "user", text: "रास्ता दिखाओ" },
    { who: "ai", text: "✓ Showing optimal route with 2 fuel stops. Total: 148 km | ETA 3h 12m." },
  ];
  return (
    <section className="py-24 lg:py-32 bg-gradient-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-orange-glow font-semibold">Try the AI</div>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold">Don't just read about it.</h2>
          <p className="mt-4 text-lg text-white/70">Real conversations from real drivers using TranZfort AI.</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-2 w-2 rounded-full bg-orange animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] text-white/60">AI Chat | Live</span>
            </div>
            <div className="space-y-3">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  className={`flex ${m.who === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                    m.who === "user"
                      ? "bg-orange text-white rounded-br-md"
                      : "bg-white/10 text-white rounded-bl-md border border-white/10"
                  }`}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/10">
              <Mic className="h-5 w-5 text-teal-glow" />
              <div className="flex-1 text-sm text-white/40">Tap to speak in Hindi or English…</div>
              <button className="px-4 py-2 rounded-xl bg-gradient-brand text-white text-sm font-semibold">Send</button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <PhoneFrame src={screenChat} alt="AI chat live" className="!w-[260px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── DUAL PERSONA ───────────────────────── */
function DualPersona() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold">AI for <span className="text-gradient-brand">both sides</span>.</h2>
          <p className="mt-4 text-lg text-ink-soft">One platform. Two perspectives. Infinite efficiency.</p>
        </div>

        <PersonaBlock
          eyebrow="For Suppliers"
          title="Post a load. AI finds the trucker."
          desc="Smart pricing, AI matching, and live insights help you ship more - for less."
          bullets={["AI auto-suggests fair pricing", "Smart matching learns preferences", "Live price insights"]}
          screen={screenSupplier}
          reverse={false}
          accent="teal"
        />
        <PersonaBlock
          eyebrow="For Truckers"
          title="Ask AI. Get loads. Never drive empty."
          desc="Find return loads, optimize routes, and let AI handle paperwork on the go."
          bullets={["Route AI saves diesel & time", "Return load finder for empty trips", "Voice-first - drive safe"]}
          screen={screenRoute}
          reverse={true}
          accent="orange"
        />
      </div>
    </section>
  );
}

function PersonaBlock({
  eyebrow, title, desc, bullets, screen, reverse, accent,
}: {
  eyebrow: string; title: string; desc: string; bullets: string[];
  screen: string; reverse: boolean; accent: "teal" | "orange";
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        <div className={`text-xs uppercase tracking-[0.25em] font-semibold ${accent === "teal" ? "text-teal" : "text-orange"}`}>
          {eyebrow}
        </div>
        <h3 className="mt-3 text-3xl lg:text-4xl font-bold leading-tight">{title}</h3>
        <p className="mt-4 text-lg text-ink-soft">{desc}</p>
        <ul className="mt-7 space-y-3">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className={`h-6 w-6 rounded-full flex items-center justify-center text-white text-xs ${
                accent === "teal" ? "bg-teal" : "bg-orange"
              }`}>✓</div>
              <span className="text-ink">{b}</span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="relative h-[560px] flex items-center justify-center"
      >
        <div className={`absolute inset-10 rounded-[3rem] ${accent === "teal" ? "bg-gradient-brand-soft" : "bg-orange/10"}`} />
        <PhoneFrame src={screen} alt={title} className="relative !w-[280px]" />
      </motion.div>
    </div>
  );
}

/* ───────────────────────── STATS ───────────────────────── */
function Stats() {
  const stats = [
    { v: "40%", l: "More loads booked with AI matching" },
    { v: "60%", l: "Less planning time with Route AI" },
    { v: "₹2K+", l: "Average diesel saved per long trip" },
    { v: "100%", l: "Offline functionality on highways" },
  ];
  return (
    <section className="py-20 bg-gradient-brand text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-5xl lg:text-6xl font-bold font-display">{s.v}</div>
            <div className="mt-2 text-sm text-white/85">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── TESTIMONIALS ───────────────────────── */
function Testimonials() {
  const t = [
    { q: "I just asked 'Find me steel loads' and AI found 3 perfect matches instantly. Game-changer.", n: "Rajesh Kumar", r: "Fleet Owner, Jaipur" },
    { q: "The route AI suggested saved me ₹2,000 in diesel on my Mumbai trip. Pays for itself.", n: "Suresh Patel", r: "Trucker, Surat" },
    { q: "I speak in Hindi, app understands everything. Even works in tunnels with no signal.", n: "Manjeet Singh", r: "Driver, Punjab" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold">Real results. Real AI.</h2>
          <p className="mt-4 text-lg text-ink-soft">Drivers and suppliers across India are moving smarter.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {t.map((x, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-7 rounded-3xl bg-card border border-border shadow-soft relative"
            >
              <Quote className="h-8 w-8 text-teal/30" />
              <p className="mt-3 text-ink leading-relaxed">"{x.q}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-brand text-white font-bold flex items-center justify-center">
                  {x.n[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{x.n}</div>
                  <div className="text-xs text-ink-soft">{x.r}</div>
                </div>
              </div>
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-orange text-orange" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CTA ───────────────────────── */
function CTASection() {
  return (
    <section className="py-24 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-dark text-white p-10 lg:p-16">
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="absolute -top-32 -right-20 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, oklch(0.72 0.18 55 / 0.4), transparent 60%)" }} />
          <div className="absolute -bottom-32 -left-10 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, oklch(0.55 0.11 195 / 0.4), transparent 60%)" }} />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Ready to move <span className="text-gradient-brand">smarter</span>?
              </h2>
              <p className="mt-4 text-lg text-white/75 max-w-md">
                Download TranZfort. Start with AI-powered loads, smart routes, and offline voice - free forever.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Link to="/download" className="inline-flex items-center justify-center gap-2 bg-gradient-brand text-white font-semibold px-7 py-4 rounded-full shadow-brand hover:scale-[1.03] transition-transform">
                Download App <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur text-white font-semibold px-7 py-4 rounded-full border border-white/15">
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
