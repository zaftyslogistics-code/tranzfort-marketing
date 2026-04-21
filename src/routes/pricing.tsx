import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — Free for Drivers & Suppliers | TranZfort" },
      { name: "description", content: "TranZfort is free for individual drivers and suppliers. Affordable plans for fleets and enterprises with custom AI workflows." },
      { property: "og:title", content: "TranZfort Pricing" },
      { property: "og:description", content: "Free for drivers and suppliers. Pro plans for fleets. Enterprise for custom AI." },
    ],
  }),
});

const plans = [
  {
    name: "Driver", price: "₹0", period: "Forever",
    desc: "Everything an owner-driver needs to find loads, save diesel and grow.",
    features: ["Unlimited load search", "AI route planner", "Hindi & English voice", "Offline mode", "Digital LR + POD", "Direct payments"],
    cta: "Download Free", to: "/download", featured: false,
  },
  {
    name: "Supplier", price: "₹0", period: "Forever — Core plan",
    desc: "Post loads, find verified truckers, and manage shipments — all free.",
    features: ["Unlimited load posts", "AI matching engine", "Live tracking & ETA", "Auto LR + GST records", "Spend analytics", "WhatsApp + email notifications"],
    cta: "Download Free", to: "/download", featured: true,
  },
  {
    name: "Fleet Pro", price: "₹999", period: "per truck / month",
    desc: "For small to mid-sized fleets that want dispatcher dashboards and analytics.",
    features: ["Everything in Driver", "Multi-driver dashboard", "Lane analytics & reports", "API access", "Priority support", "Custom branding"],
    cta: "Start 14-day Trial", to: "/contact", featured: false,
  },
  {
    name: "Enterprise", price: "Custom", period: "Talk to us",
    desc: "For large transporters and shippers with custom workflows and integrations.",
    features: ["Everything in Fleet Pro", "TMS & ERP integration", "Custom AI workflows", "Dedicated account manager", "On-site training", "SLA-backed support"],
    cta: "Talk to Sales", to: "/contact", featured: false,
  },
];

function PricingPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Pricing"
        title={<>Free for the people who <span className="text-gradient-brand">move India</span>.</>}
        desc="TranZfort is — and always will be — free for individual drivers and suppliers. We make money helping fleets and enterprises run smarter, never by taking commissions on loads."
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative p-7 rounded-3xl border shadow-soft flex flex-col ${
                p.featured
                  ? "bg-gradient-dark text-white border-transparent shadow-brand"
                  : "bg-card border-border"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-orange">
                  Most popular
                </div>
              )}
              <div className="font-bold text-lg">{p.name}</div>
              <div className="mt-3 flex items-end gap-1.5">
                <div className="text-4xl font-bold font-display">{p.price}</div>
                <div className={`text-xs pb-1.5 ${p.featured ? "text-white/70" : "text-ink-soft"}`}>{p.period}</div>
              </div>
              <p className={`mt-3 text-sm ${p.featured ? "text-white/80" : "text-ink-soft"}`}>{p.desc}</p>
              <ul className="mt-5 space-y-2 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "text-orange-glow" : "text-teal"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={p.to}
                className={`mt-7 inline-flex items-center justify-center gap-2 font-semibold px-4 py-2.5 rounded-full transition-transform hover:scale-[1.02] ${
                  p.featured
                    ? "bg-white text-ink"
                    : "bg-gradient-brand text-white shadow-brand"
                }`}
              >
                {p.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-teal font-semibold">FAQ</div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">Pricing questions, answered.</h2>
          </div>
          <div className="mt-10 space-y-3">
            {[
              { q: "Is the Driver plan really free forever?", a: "Yes. Our promise: TranZfort will always be free for individual drivers and suppliers using the core platform. We make our money on Fleet Pro and Enterprise plans." },
              { q: "Do you take any commission on loads?", a: "No. Zero commissions, zero hidden charges. The price the supplier posts is the price the trucker gets." },
              { q: "What's included in the 14-day Fleet Pro trial?", a: "Full access to the Pro dashboard for up to 5 trucks. No credit card required. After 14 days you choose whether to upgrade or stay on the free plan." },
              { q: "Can I switch plans later?", a: "Anytime. Upgrade, downgrade or cancel from your account settings. Pro-rated refunds on annual plans." },
              { q: "Is GST included in the prices?", a: "No, prices shown are exclusive of 18% GST. GST invoices are auto-generated for all paid plans." },
              { q: "What's the Enterprise pricing?", a: "It depends on fleet size, integrations, and AI customisation. Talk to our sales team — most enterprise deployments start at ₹2-5 lakh per year." },
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

      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <Sparkles className="h-8 w-8 text-orange mx-auto" />
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold">Still have questions?</h2>
          <p className="mt-3 text-ink-soft">Our team can help you pick the right plan for your fleet.</p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-6 py-3.5 rounded-full shadow-brand">
            Talk to Sales <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
