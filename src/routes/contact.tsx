import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, MessageSquare, Clock, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "TranZfort Technologies Pvt. Ltd.",
              "description": "India's first offline-first, AI-powered logistics network for truckers and suppliers.",
              "url": "https://tranzfort.com",
              "telephone": "+91-927-092-3581",
              "email": "support@tranzfort.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "World Trade Center, Kharadi",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411014",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "18.5483",
                "longitude": "73.9340"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "19:00"
              },
              "priceRange": "₹₹"
            }, null, 2)
          }}
        />
      </Helmet>
      <PageHero
        eyebrow="Contact"
        title={<>Let's <span className="text-gradient-brand">talk logistics.</span></>}
        desc="Sales, partnerships, support, press — we're here in Hindi and English. Most enquiries get a reply within one business day."
      />

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <p className="text-ink-soft text-sm mt-1">We'll get back to you within 24 hours.</p>
            {sent ? (
              <div className="mt-8 p-6 rounded-2xl bg-gradient-brand-soft border border-teal/30 text-center">
                <div className="text-4xl">✅</div>
                <div className="mt-2 font-bold text-lg">Thanks! We've got your message.</div>
                <div className="text-sm text-ink-soft mt-1">Our team will reach out shortly.</div>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="mt-6 space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Name" id="name" placeholder="Rajesh Kumar" />
                  <Field label="Phone" id="phone" placeholder="+91 98000 00000" />
                </div>
                <Field label="Email" id="email" type="email" placeholder="you@company.com" />
                <div>
                  <label htmlFor="topic" className="text-sm font-medium block mb-1.5">I'd like to talk about</label>
                  <select id="topic" className="w-full h-11 px-3 rounded-xl bg-background border border-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none">
                    <option>Sales / Demo for my fleet</option>
                    <option>Partnership / Integration</option>
                    <option>Press & Media</option>
                    <option>Driver / Supplier Support</option>
                    <option>Investor enquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="msg" className="text-sm font-medium block mb-1.5">Message</label>
                  <textarea id="msg" rows={4} placeholder="Tell us a bit about what you need…"
                    className="w-full px-3 py-2.5 rounded-xl bg-background border border-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none" />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-6 py-3 rounded-full shadow-brand">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            {[
              { icon: Mail, t: "Email", d: "support@tranzfort.com", sub: "Reply within 24 hours", href: "mailto:support@tranzfort.com" },
              { icon: Phone, t: "Phone", d: "+91-927-092-3581", sub: "Mon-Sat · 9am-7pm IST", href: "tel:+91-927-092-3581" },
              { icon: MessageSquare, t: "WhatsApp Support", d: "+91-927-092-3581", sub: "Hindi & English · 24/7", href: "tel:+91-927-092-3581" },
              { icon: MapPin, t: "Headquarters", d: "World Trade Center, Kharadi", sub: "Pune, India - 411014", href: null },
              { icon: Clock, t: "Support Hours", d: "24/7 in-app support", sub: "Live chat in Hindi & English", href: null },
            ].map((x) => (
              <div key={x.t} className="p-5 rounded-2xl bg-card border border-border shadow-soft flex gap-4">
                <div className="h-11 w-11 rounded-2xl bg-gradient-brand text-white flex items-center justify-center shrink-0">
                  <x.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-ink-soft">{x.t}</div>
                  {x.href ? (
                    <a href={x.href} className="font-bold mt-0.5 hover:text-teal transition-colors">{x.d}</a>
                  ) : (
                    <div className="font-bold mt-0.5">{x.d}</div>
                  )}
                  <div className="text-sm text-ink-soft">{x.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, id, type = "text", placeholder }: { label: string; id: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium block mb-1.5">{label}</label>
      <input id={id} type={type} placeholder={placeholder}
        className="w-full h-11 px-3 rounded-xl bg-background border border-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none" />
    </div>
  );
}

export default ContactPage;
