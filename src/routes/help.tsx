import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Smartphone, CreditCard, ShieldCheck, Truck, Settings, MessageSquare, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/help")({
  component: HelpPage,
  head: () => ({
    meta: [
      { title: "Help Center — Get Support in Hindi or English | TranZfort" },
      { name: "description", content: "Find answers about getting started, accounts, payments, and using AI features. 24/7 support in Hindi and English." },
      { property: "og:title", content: "TranZfort Help Center" },
      { property: "og:description", content: "Self-serve answers and 24/7 support in Hindi & English." },
    ],
  }),
});

const categories = [
  { icon: Smartphone, t: "Getting Started", d: "Install, sign up, KYC and your first trip." },
  { icon: Truck, t: "Posting & Finding Loads", d: "How AI matching works, filters, and notifications." },
  { icon: CreditCard, t: "Payments & Billing", d: "Direct payments, GST invoices, refunds." },
  { icon: ShieldCheck, t: "Verification & Trust", d: "KYC, ratings, and how we keep the network safe." },
  { icon: Settings, t: "Account & Settings", d: "Profile, language, notifications, privacy." },
  { icon: MessageSquare, t: "Using the AI Assistant", d: "Voice commands, languages, offline mode." },
];

const faqs = [
  { q: "How do I install TranZfort?", a: "Download from the Play Store or App Store. For older Android phones, you can install our APK directly from the Download page. The app is around 80 MB." },
  { q: "What documents do I need to sign up?", a: "Just Aadhaar (with the linked phone number). Truckers also need RC, license and insurance — but you can snap photos and our AI fills in the rest in seconds." },
  { q: "Is my data safe?", a: "Yes. By default, AI conversations and scanned documents stay on your phone. Anything you sync to your account is end-to-end encrypted." },
  { q: "How do I use the Hindi voice assistant?", a: "Tap the microphone in the app and speak naturally — हिंदी, English, या Hinglish. Switch the assistant language in Settings → Voice." },
  { q: "What if my phone has no internet?", a: "Most features work offline — AI chat, route planning, scanning, document storage. New loads sync the moment you're back online." },
  { q: "How do payments work?", a: "Suppliers pay through TranZfort. On delivery confirmation, payment is released directly to the trucker's bank account or UPI — usually within 24 hours." },
  { q: "How do I report a problem with a counterparty?", a: "Tap the trip → Report. Our team reviews every report in 24 hours. Repeat offenders are removed from the network." },
  { q: "Can I cancel a load after posting?", a: "Yes, before a trucker accepts. After acceptance, cancellation requires both parties' agreement to keep things fair." },
];

function HelpPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Help Center"
        title={<>How can we <span className="text-gradient-brand">help you?</span></>}
        desc="Self-serve answers, video walkthroughs, and 24/7 in-app support — in Hindi and English."
      >
        <div className="w-full max-w-xl">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 rounded-full px-5 py-3">
            <Search className="h-5 w-5 text-white/70" />
            <input
              placeholder="Search help articles…"
              className="flex-1 bg-transparent outline-none text-white placeholder:text-white/50"
            />
          </div>
        </div>
      </PageHero>

      {/* Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-bold">Browse by topic</h2>
            <p className="mt-2 text-ink-soft">Pick a category to find detailed guides.</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c) => (
              <div key={c.t} className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:border-teal/40 transition-colors cursor-pointer group">
                <div className="h-11 w-11 rounded-2xl bg-gradient-brand text-white flex items-center justify-center">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-bold">{c.t}</div>
                <p className="text-sm text-ink-soft mt-1.5">{c.d}</p>
                <div className="mt-3 text-sm font-semibold text-teal flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Browse <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold">Common questions</h2>
            <p className="mt-2 text-ink-soft">Quick answers to what people ask most.</p>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group p-5 rounded-2xl bg-card border border-border open:border-teal/40 transition-colors">
                <summary className="cursor-pointer font-semibold flex items-center justify-between">
                  {f.q}
                  <span className="text-teal text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-ink-soft leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="rounded-3xl bg-gradient-brand text-white p-10 text-center">
            <h2 className="text-3xl font-bold">Still need help?</h2>
            <p className="mt-2 text-white/85">Our support team is online 24/7. Reply within 30 minutes guaranteed.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 bg-white text-ink font-semibold px-6 py-3.5 rounded-full">
              Contact Support <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
