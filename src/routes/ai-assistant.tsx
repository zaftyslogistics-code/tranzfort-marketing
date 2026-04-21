import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Bot, Mic, WifiOff, Languages, Cpu, Lock, ArrowRight, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { PhoneFrame } from "@/components/site/PhoneFrame";
import screen from "@/assets/screen-chat.jpg";

export const Route = createFileRoute("/ai-assistant")({
  component: AIPage,
  head: () => ({
    meta: [
      { title: "TranZfort AI Assistant — Local. Offline. Bilingual." },
      { name: "description", content: "Meet your local AI co-driver. On-device, offline, with Hindi & English voice. No cloud, no lag, no roaming charges." },
      { property: "og:title", content: "The TranZfort AI Assistant" },
      { property: "og:description", content: "On-device AI for Indian logistics. Voice-first. Offline-first. Bilingual." },
    ],
  }),
});

const pillars = [
  { icon: Cpu, t: "Local On-Device AI", d: "Runs entirely on your phone using a tuned small-language-model. No round-trip to a server. Sub-100ms responses, every time." },
  { icon: WifiOff, t: "Truly Offline", d: "Tunnels, dead zones, rural India, the middle of a long ghat — the AI keeps thinking. Syncs results when signal returns." },
  { icon: Languages, t: "Hindi & English", d: "Native bilingual understanding. Switch mid-sentence. हम समझते हैं — and reply in whichever language you used." },
  { icon: Mic, t: "Voice-First (TTS · STT)", d: "Speak commands. Hear answers. Eyes on the road, hands on the wheel — designed for life behind the wheel." },
  { icon: Bot, t: "Domain-Tuned", d: "Fine-tuned on trucking, lanes, LRs, GST, fuel pricing, and Indian logistics workflows. Not a generic chatbot." },
  { icon: Lock, t: "Private by Design", d: "Sensitive load data never leaves your device unless you choose to sync. End-to-end encrypted when it does." },
];

const examples = [
  { q: "Find me steel loads near Pune for tomorrow", a: "Found 12 matches. Top 3: Pune→Mumbai (₹28K), Pune→Aurangabad (₹19K), Pune→Nashik (₹16K). Open all?" },
  { q: "मुंबई से दिल्ली का best रास्ता क्या है", a: "NH48 via Surat-Vadodara — 1,420 km, ETA 26h, ₹4,200 toll. 2 fuel stops suggested. नक्शा दिखाऊं?" },
  { q: "Scan this LR", a: "✓ Done. Consignor: ABC Steels. Consignee: Mumbai Port. Weight: 24T. GST: 27ABCDE1234F1Z5. Save to records?" },
  { q: "Mera RC kab expire hota hai", a: "आपका RC 14 March 2027 को expire होगा — अभी 11 महीने बाकी हैं। Renewal reminder set कर दूं?" },
];

function AIPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="AI Assistant"
        title={<>A local AI that <span className="text-gradient-brand">never sleeps</span>.</>}
        desc="The only logistics assistant in India that works fully offline, in Hindi and English, with voice — right on your phone. No data costs. No latency. No excuses."
      >
        <Link to="/download" className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-6 py-3.5 rounded-full shadow-brand hover:scale-[1.03] transition-transform">
          Try the AI Assistant <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Pillars + phone */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-5 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="lg:col-span-2 relative h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-6 rounded-[3rem] bg-gradient-brand-soft" />
            <div className="absolute w-48 h-48 rounded-full border-2 border-teal/40 animate-pulse-ring" />
            <div className="absolute w-48 h-48 rounded-full border-2 border-orange/40 animate-pulse-ring" style={{ animationDelay: "1s" }} />
            <PhoneFrame src={screen} alt="AI Assistant chat" className="relative !w-[260px]" />
          </motion.div>
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="p-5 rounded-2xl bg-card border border-border shadow-soft"
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-brand text-white flex items-center justify-center">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-bold">{p.t}</h3>
                <p className="text-sm text-ink-soft mt-1.5 leading-relaxed">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversation examples */}
      <section className="py-20 lg:py-28 bg-gradient-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-orange-glow font-semibold">Real conversations</div>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold">Just talk to it. Naturally.</h2>
            <p className="mt-4 text-lg text-white/70">Hindi, English, or both at once. The AI keeps up.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {examples.map((ex, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur"
              >
                <div className="flex justify-end">
                  <div className="bg-orange text-white text-sm px-4 py-2.5 rounded-2xl rounded-br-md max-w-[85%]">{ex.q}</div>
                </div>
                <div className="mt-3 flex justify-start">
                  <div className="bg-white/10 border border-white/10 text-white text-sm px-4 py-2.5 rounded-2xl rounded-bl-md max-w-[90%]">
                    <Sparkles className="inline h-3.5 w-3.5 text-teal-glow mr-1.5" />
                    {ex.a}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech FAQ */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold">How does it actually work?</h2>
            <p className="mt-3 text-ink-soft">The honest, no-jargon explanation.</p>
          </div>
          <div className="mt-10 space-y-3">
            {[
              { q: "Does it really run offline?", a: "Yes. We ship a quantised, domain-tuned small-language-model (~1B parameters) along with TTS and STT engines that run on your phone's CPU/NPU. No internet needed for chat, voice or scanning." },
              { q: "What languages does it understand?", a: "Hindi and Indian English natively, including Hinglish code-switching mid-sentence. Regional language support (Marathi, Tamil, Telugu, Punjabi) is rolling out in 2026." },
              { q: "Where does my data go?", a: "By default — nowhere. Voice, chat and scanned documents stay on your device. You can opt-in to sync conversations to your TranZfort account, end-to-end encrypted." },
              { q: "Will it slow down my phone?", a: "No. The model loads only when you invoke it and uses about 400 MB of RAM. Compatible with any phone running Android 9+ or iOS 15+." },
              { q: "Can my fleet build custom workflows?", a: "Yes. Enterprise plans include custom intents, integrations with your TMS, and access to our model fine-tuning sandbox." },
            ].map((x, i) => (
              <details key={i} className="group p-5 rounded-2xl bg-card border border-border open:border-teal/40 transition-colors">
                <summary className="cursor-pointer font-semibold flex items-center justify-between">
                  {x.q}
                  <span className="text-teal text-xl group-open:rotate-45 transition-transform">+</span>
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
