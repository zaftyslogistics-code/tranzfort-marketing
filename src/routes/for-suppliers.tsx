import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Bot, ShieldCheck, BarChart3, Bell, FileCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { PhoneFrame } from "@/components/site/PhoneFrame";
import screen from "@/assets/screen-supplier.jpg";

function SuppliersPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="For Suppliers"
        title={<>Post a load. <span className="text-gradient-brand">AI finds the trucker.</span></>}
        desc="Stop calling 20 brokers for one shipment. With TranZfort, you post a load once and our AI matches you to the best verified trucker for your lane, weight, and timing — usually in under 90 seconds."
      >
        <Link to="/download" className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-6 py-3.5 rounded-full shadow-brand hover:scale-[1.03] transition-transform">
          Get the Supplier App <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Pain → solution */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div className="p-8 rounded-3xl bg-muted/60 border border-border">
            <div className="text-xs uppercase tracking-[0.22em] text-ink-soft font-semibold">The old way</div>
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
            <div className="text-xs uppercase tracking-[0.22em] text-teal font-semibold">The TranZfort way</div>
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
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative h-[560px] flex items-center justify-center"
          >
            <div className="absolute inset-8 rounded-[3rem] bg-gradient-brand-soft" />
            <PhoneFrame src={screen} alt="Supplier app" className="relative !w-[280px]" />
          </motion.div>
          <div className="space-y-4">
            {[
              { icon: Sparkles, t: "Smart Matching", d: "AI learns which truckers handle your goods best — and prioritises them on your lane." },
              { icon: TrendingUp, t: "Fair Pricing AI", d: "Live suggestions based on diesel, season, demand and historical lane rates. Never overpay again." },
              { icon: Bot, t: "AI Negotiation Assistant", d: "Let AI handle the back-and-forth. Wakes you up only when there's a final offer to accept." },
              { icon: ShieldCheck, t: "100% Verified Truckers", d: "Aadhaar, RC, license, GST and insurance — every trucker is checked before they see your load." },
              { icon: BarChart3, t: "Spend Analytics", d: "See your monthly spend by lane, commodity and trucker. Spot leaks. Renegotiate winners." },
              { icon: FileCheck, t: "Auto LR & GST Records", d: "Every shipment auto-generates a digital LR with GST-ready paperwork. No more shoebox accounting." },
            ].map((x, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
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
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold">Built for every kind of supplier.</h2>
            <p className="mt-3 text-ink-soft">Whether you ship one load a week or a hundred a day, TranZfort scales with you.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { t: "Manufacturers", d: "Steel, cement, FMCG, auto parts — find verified fleet partners on every lane." },
              { t: "Wholesalers & Traders", d: "Spot-market loads with transparent pricing and instant booking." },
              { t: "Enterprise Shippers", d: "Multi-user accounts, custom reporting, API access and dedicated support." },
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

      <section className="py-20 bg-gradient-dark text-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to move smarter?</h2>
          <p className="mt-3 text-white/75">Free to start. No setup fees. No commissions on what you ship.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/download" className="bg-gradient-brand text-white font-semibold px-6 py-3.5 rounded-full shadow-brand">Download Supplier App</Link>
            <Link to="/contact" className="bg-white/10 border border-white/15 text-white font-semibold px-6 py-3.5 rounded-full">Talk to Sales</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default SuppliersPage;
