import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

const posts = [
  { tag: "AI", date: "April 12, 2026", title: "How we shipped a 1B-parameter logistics model that runs offline", excerpt: "Inside the engineering journey of getting a tuned SLM to run on entry-level Android phones — without a single cloud round-trip." },
  { tag: "Driver Story", date: "April 5, 2026", title: "From 12 calls to 1 voice command: Rajesh's day, before and after", excerpt: "Meet Rajesh Kumar, a fleet owner from Jaipur, who replaced his broker rolodex with a single 'find loads' command." },
  { tag: "Product", date: "March 28, 2026", title: "Hindi voice goes GA: lessons from 3 months of beta", excerpt: "What we learned shipping native Hindi TTS and STT to thousands of drivers — the wins, the bugs, and the surprises." },
  { tag: "Industry", date: "March 19, 2026", title: "The economics of empty trucks (and what AI can do about it)", excerpt: "Empty return trips cost the Indian trucking industry an estimated ₹70,000 crore a year. Here's how matching AI is changing that." },
  { tag: "Engineering", date: "March 12, 2026", title: "Building offline-first apps that actually feel online", excerpt: "Our playbook for sync, conflict resolution, and UX patterns that make 'offline' feel invisible to users." },
  { tag: "Driver Story", date: "March 1, 2026", title: "Suresh saved ₹2,000 in diesel on one Mumbai trip. Here's how.", excerpt: "Route AI doesn't just shave minutes — it picks the cheapest path. Real numbers from a 3-day haul." },
];

const tagColor: Record<string, string> = {
  "AI": "bg-teal/10 text-teal border-teal/20",
  "Driver Story": "bg-orange/10 text-orange border-orange/20",
  "Product": "bg-teal/10 text-teal border-teal/20",
  "Industry": "bg-orange/10 text-orange border-orange/20",
  "Engineering": "bg-teal/10 text-teal border-teal/20",
};

function BlogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title={<>Stories from the <span className="text-gradient-brand">AI logistics frontier</span>.</>}
        desc="Driver stories from across India, deep-dives on offline AI, and product updates straight from the TranZfort team."
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Featured */}
          <Link to="/blog" className="block group">
            <div className="grid lg:grid-cols-2 gap-8 items-center p-6 lg:p-10 rounded-3xl bg-gradient-dark text-white overflow-hidden relative">
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="relative">
                <span className="inline-block px-3 py-1 rounded-full bg-orange text-white text-xs font-bold uppercase tracking-wider">Featured</span>
                <h2 className="mt-4 text-3xl lg:text-4xl font-bold leading-tight group-hover:text-orange-glow transition-colors">
                  {posts[0].title}
                </h2>
                <p className="mt-3 text-white/75">{posts[0].excerpt}</p>
                <div className="mt-5 flex items-center gap-4 text-sm text-white/60">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {posts[0].date}</span>
                  <span>·</span>
                  <span>{posts[0].tag}</span>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-orange-glow font-semibold">Read article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></div>
              </div>
              <div className="relative h-64 rounded-2xl bg-gradient-brand-soft border border-white/10 flex items-center justify-center">
                <div className="text-7xl">🤖</div>
              </div>
            </div>
          </Link>

          {/* Rest */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group p-6 rounded-3xl bg-card border border-border shadow-soft hover:border-teal/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${tagColor[p.tag] ?? "bg-muted text-ink-soft border-border"}`}>
                    {p.tag}
                  </span>
                  <span className="text-xs text-ink-soft flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />{p.date}
                  </span>
                </div>
                <h3 className="mt-4 font-bold text-lg leading-tight group-hover:text-teal transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{p.excerpt}</p>
                <Link to="/blog" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Get our monthly digest.</h2>
          <p className="mt-2 text-ink-soft">One email per month. Driver stories, AI deep-dives, no spam.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" required placeholder="you@email.com"
              className="flex-1 h-12 px-4 rounded-full bg-card border border-border focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none" />
            <button className="h-12 px-6 rounded-full bg-gradient-brand text-white font-semibold shadow-brand">Subscribe</button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

export default BlogPage;
