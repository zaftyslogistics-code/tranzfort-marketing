import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Truck, Clock, MapPin, ShieldCheck, Zap } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

interface CityPairLandingProps {
  origin: string;
  destination: string;
  distance: string;
  duration: string;
  commonGoods: string[];
  truckTypes: string[];
  routeOverview: string;
  problems: string[];
  solutions: string[];
  faqs: { q: string; a: string }[];
}

export default function CityPairLanding({
  origin,
  destination,
  distance,
  duration,
  commonGoods,
  truckTypes,
  routeOverview,
  problems,
  solutions,
  faqs,
}: CityPairLandingProps) {
  const routeSlug = `${origin.toLowerCase()}-${destination.toLowerCase()}`;

  return (
    <SiteLayout>
      <Helmet>
        <title>
          {origin} to {destination} Truck Transport — TranZfort
        </title>
        <meta
          name="description"
          content={`Reliable truck transport from ${origin} to ${destination}. ${distance} km, ${duration}. AI load matching, verified truckers, real-time tracking. Book now.`}
        />
        <link rel="canonical" href={`https://tranzfort.com/routes/${routeSlug}`} />
        <meta property="og:title" content={`${origin} to ${destination} Truck Transport`} />
        <meta
          property="og:description"
          content={`Reliable truck transport from ${origin} to ${destination}. ${distance} km, ${duration}. AI load matching, verified truckers.`}
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://tranzfort.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Routes",
                  item: "https://tranzfort.com/routes",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: `${origin} to ${destination}`,
                  item: `https://tranzfort.com/routes/${routeSlug}`,
                },
              ],
            }),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: `${origin} to ${destination} Truck Transport`,
              description: routeOverview,
              provider: {
                "@type": "Organization",
                name: "TranZfort",
                url: "https://tranzfort.com",
              },
              areaServed: [
                { "@type": "City", name: origin },
                { "@type": "City", name: destination },
              ],
            }),
          }}
        />

        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      </Helmet>

      <PageHero
        eyebrow={`${origin} → ${destination}`}
        title={
          <>
            Truck transport from{" "}
            <span className="text-gradient-brand">{origin}</span> to{" "}
            <span className="text-gradient-brand">{destination}</span>
          </>
        }
        desc={`${distance} km · ${duration} · AI-matched loads · Verified truckers`}
      >
        <Link
          to="/download"
          className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-6 py-3.5 rounded-full shadow-brand hover:scale-[1.03] transition-transform"
        >
          Book Load <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Route Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold">Route Overview</h2>
          <p className="mt-4 text-lg text-ink-soft leading-relaxed">
            {routeOverview}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-teal mx-auto" />
              <div className="mt-3 text-3xl font-bold">{distance}</div>
              <div className="text-ink-soft">Distance</div>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-orange mx-auto" />
              <div className="mt-3 text-3xl font-bold">{duration}</div>
              <div className="text-ink-soft">Typical Duration</div>
            </div>
            <div className="text-center">
              <Truck className="h-8 w-8 text-teal mx-auto" />
              <div className="mt-3 text-3xl font-bold">500+</div>
              <div className="text-ink-soft">Verified Truckers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Goods */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold">Common Goods Transported</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {commonGoods.map((good, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl bg-card border border-border"
              >
                <div className="font-semibold">{good}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Truck Types */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold">Available Truck Types</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {truckTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-card border border-border text-center"
              >
                <Truck className="h-6 w-6 text-teal mx-auto" />
                <div className="mt-3 font-semibold">{type}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold">Common Problems on This Route</h2>
          <div className="mt-8 space-y-4">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl bg-muted/60 border border-border"
              >
                <Zap className="h-6 w-6 text-orange shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">{problem}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How TranZfort Helps */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold">How TranZfort Solves These Problems</h2>
          <div className="mt-8 space-y-4">
            {solutions.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl bg-card border border-border"
              >
                <ShieldCheck className="h-6 w-6 text-teal shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">{solution}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-teal font-semibold">FAQ</div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">
              {origin} to {destination} Questions
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((x, i) => (
              <details
                key={i}
                className="group p-5 rounded-2xl bg-card border border-border open:border-teal/40 transition-colors"
              >
                <summary className="cursor-pointer font-semibold flex items-center justify-between">
                  {x.q}
                  <span className="text-teal text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-ink-soft leading-relaxed">{x.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-brand text-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to book your {origin} to {destination} load?
          </h2>
          <p className="mt-3 text-white/85">
            Join thousands of shippers using TranZfort for reliable truck transport.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/download"
              className="inline-flex items-center gap-2 bg-white text-ink font-semibold px-6 py-3.5 rounded-full shadow-soft"
            >
              Download App <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white font-semibold px-6 py-3.5 rounded-full"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
