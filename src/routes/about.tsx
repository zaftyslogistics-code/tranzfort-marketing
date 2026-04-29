import { Link } from "react-router-dom";
import { Target, Heart, Globe2, Users, Zap, Shield, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About us"
        title={<>Built for the road. <span className="text-gradient-brand">Powered by AI.</span></>}
        desc="TranZfort exists because the people who keep India moving deserve better tools than a phone book and a stack of paper LRs."
      />

      {/* Story */}
      <section id="story" className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 space-y-6">
          <p className="text-lg text-ink-soft leading-relaxed">
            India moves <strong className="text-ink">4.6 billion tonnes</strong> of freight every year, mostly via road.
            Trucks contribute over 4% of GDP. Yet the people powering it — drivers, small fleet owners, suppliers in tier-2 and tier-3 cities — are stuck with phone calls, hand-written paperwork, and middlemen taking 10-15% off every load.
          </p>
          <p className="text-lg text-ink-soft leading-relaxed">
            We started TranZfort with a simple question: <em>What if logistics worked the way these drivers actually live?</em> What if the app spoke Hindi? What if it kept working when the highway lost signal? What if AI did the matching, the paperwork and the price discovery — for free?
          </p>
          <p className="text-lg text-ink-soft leading-relaxed">
            That's TranZfort. India's first <strong className="text-ink">offline-first, voice-first, AI-first</strong> logistics network. Built in India, for India, by people who've spent years sitting in cabs and warehouses to understand how this industry actually moves.
          </p>
        </div>
      </section>

      {/* Mission / vision / values */}
      <section id="mission" className="py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            <Card icon={Target} title="Mission" body="Put a world-class AI logistics platform in the hands of every supplier and driver in India — for free." />
            <Card icon={Heart} title="Vision" body="A logistics network where the smallest owner-driver competes on equal footing with the biggest fleet." />
            <Card icon={Globe2} title="Reach" body="Bharat-first. Built for highways, ghats, deserts, ports and the smallest mandis — not just metros." />
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold">What we believe.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { icon: Users, t: "Drivers come first", d: "Every product decision starts with: 'Does this make life easier for the person at the wheel?'" },
              { icon: Zap, t: "Local AI, not cloud lock-in", d: "Your data, your device. Intelligence shouldn't depend on a 4G signal or a US server." },
              { icon: Shield, t: "Honest pricing forever", d: "Free for truckers and suppliers to use the core platform. No hidden commissions, ever." },
            ].map((v) => (
              <div key={v.t} className="p-7 rounded-3xl bg-card border border-border shadow-soft">
                <div className="h-11 w-11 rounded-2xl bg-gradient-brand text-white flex items-center justify-center">
                  <v.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-bold text-lg">{v.t}</div>
                <p className="text-ink-soft text-sm mt-2 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section id="stats" className="py-20 bg-gradient-brand text-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: "4.6B", l: "Tonnes moved annually in India" },
            { v: "12K+", l: "Drivers on TranZfort" },
            { v: "200+", l: "Cities & towns served" },
            { v: "100%", l: "Offline-capable" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-5xl font-bold font-display">{s.v}</div>
              <div className="mt-2 text-sm text-white/85">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="cta" className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">Want to join us?</h2>
          <p className="mt-3 text-ink-soft">We're always looking for engineers, designers and operators who care about Bharat.</p>
          <div className="mt-7">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-6 py-3.5 rounded-full shadow-brand">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Card({ icon: Icon, title, body }: { icon: typeof Target; title: string; body: string }) {
  return (
    <div className="p-7 rounded-3xl bg-card border border-border shadow-soft">
      <div className="h-11 w-11 rounded-2xl bg-gradient-brand text-white flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-bold text-xl">{title}</h3>
      <p className="text-ink-soft mt-2 leading-relaxed">{body}</p>
    </div>
  );
}

export default AboutPage;
