import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Smartphone, Apple, Play, QrCode, ArrowRight, Check, WifiOff, Mic, Languages, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { PhoneFrame } from "@/components/site/PhoneFrame";
import screen from "@/assets/screen-chat.jpg";

export const Route = createFileRoute("/download")({
  component: DownloadPage,
  head: () => ({
    meta: [
      { title: "Download TranZfort — AI Logistics App for Android & iOS" },
      { name: "description", content: "Download TranZfort on Android or iOS. Free forever. Offline-ready AI logistics for suppliers and truckers across India." },
      { property: "og:title", content: "Download TranZfort" },
      { property: "og:description", content: "Free forever. Works offline. Hindi & English voice. Get the app now." },
    ],
  }),
});

function DownloadPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Download"
        title={<>Get TranZfort. <span className="text-gradient-brand">Free, forever.</span></>}
        desc="Available on Android and iOS. Works offline from the first launch. Built for entry-level smartphones — runs smoothly on any device from 2018 onwards."
      />

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Download options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <a href="#" className="w-full flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-teal/50 hover:shadow-brand transition-all">
              <Apple className="h-9 w-9" />
              <div className="text-left flex-1">
                <div className="text-xs text-ink-soft">Download on the</div>
                <div className="font-bold text-lg">App Store</div>
              </div>
              <ArrowRight className="h-5 w-5 text-ink-soft" />
            </a>
            <a href="#" className="w-full flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-teal/50 hover:shadow-brand transition-all">
              <Play className="h-9 w-9 fill-current" />
              <div className="text-left flex-1">
                <div className="text-xs text-ink-soft">Get it on</div>
                <div className="font-bold text-lg">Google Play</div>
              </div>
              <ArrowRight className="h-5 w-5 text-ink-soft" />
            </a>
            <a href="/app-release.apk" download className="w-full flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-teal/50 transition-all">
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
                <div className="text-sm text-ink-soft">Open your camera. Point at the QR. Get the app in seconds.</div>
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
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-10 rounded-[3rem] bg-gradient-brand-soft" />
            <div className="absolute w-48 h-48 rounded-full border-2 border-teal/30 animate-pulse-ring" />
            <PhoneFrame src={screen} alt="App preview" className="relative !w-[280px]" />
          </motion.div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-bold">System requirements</h2>
            <p className="mt-3 text-ink-soft">Designed to run on the phones drivers actually use.</p>
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
            <Link to="/help" className="text-teal font-semibold hover:underline">Need help installing? Visit our Help Center →</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
