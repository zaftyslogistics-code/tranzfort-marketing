import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import footerLogo from "../../assets/footer.png";

// TODO: Update with real social media profiles when available
const socials: { label: string; href: string; svg: string }[] = [
  { label: "Twitter / X", href: "#",
    svg: "M18.244 2H21l-6.52 7.45L22 22h-6.84l-4.78-6.24L4.8 22H2l7.02-8.02L2 2h7.02l4.32 5.71L18.244 2zm-2.4 18h1.78L8.27 4H6.4l9.444 16z" },
  { label: "LinkedIn", href: "#",
    svg: "M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 17V10.4H6.16V17h2.18zM7.25 9.43a1.27 1.27 0 100-2.54 1.27 1.27 0 000 2.54zM18 17v-3.78c0-1.96-1.05-2.86-2.45-2.86-1.13 0-1.64.62-1.93 1.06v-.91h-2.18c.03.62 0 6.6 0 6.6h2.18v-3.69c0-.2.01-.4.07-.54.16-.4.52-.81 1.13-.81.8 0 1.12.61 1.12 1.5V17H18z" },
  { label: "Instagram", href: "#",
    svg: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.5.01-4.74.07-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.26.82-.38.38-.62.75-.82 1.26-.15.39-.33.97-.38 2.04-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.07.23 1.65.38 2.04.2.51.44.88.82 1.26.38.38.75.62 1.26.82.39.15.97.33 2.04.38 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.26-.82.38-.38.62-.75.82-1.26.15-.39.33-.97.38-2.04.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.07-.23-1.65-.38-2.04a3.39 3.39 0 00-.82-1.26 3.39 3.39 0 00-1.26-.82c-.39-.15-.97-.33-2.04-.38-1.24-.06-1.59-.07-4.74-.07zm0 2.76a5.46 5.46 0 110 10.92 5.46 5.46 0 010-10.92zm0 1.62a3.84 3.84 0 100 7.68 3.84 3.84 0 000-7.68zm5.65-1.79a1.27 1.27 0 110 2.55 1.27 1.27 0 010-2.55z" },
  { label: "YouTube", href: "#",
    svg: "M21.58 7.19a2.5 2.5 0 00-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.82.42a2.5 2.5 0 00-1.76 1.77A26.1 26.1 0 002 12a26.1 26.1 0 00.42 4.81 2.5 2.5 0 001.76 1.77C5.73 19 12 19 12 19s6.27 0 7.82-.42a2.5 2.5 0 001.76-1.77c.31-1.6.42-3.2.42-4.81 0-1.61-.11-3.21-.42-4.81zM10 15V9l5.2 3-5.2 3z" },
  { label: "Facebook", href: "#",
    svg: "M22 12a10 10 0 10-11.56 9.88V14.9H7.9V12h2.54V9.8c0-2.5 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.9h-2.33v6.98A10 10 0 0022 12z" },
];

function SocialIcon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d={d} />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-gradient-dark text-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.11 195 / 0.3), transparent 60%)" }} />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-10">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={footerLogo} alt="TranZfort Logo" className="h-10" />
              <div className="leading-tight">
                <div className="font-display font-bold text-lg tracking-tight text-white">
                  Tran<span className="text-gradient-brand">Zfort</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                  AI Logistics
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70 max-w-sm leading-relaxed">
              India's first offline-first, AI-powered logistics network.
              Built for drivers, suppliers, and fleets who keep the country moving.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="h-10 w-10 rounded-full bg-white/5 border border-white/10 hover:bg-gradient-brand hover:border-transparent flex items-center justify-center transition-all">
                  <SocialIcon d={s.svg} />
                </a>
              ))}
              <a href="mailto:hello@tranzfort.in" aria-label="Email"
                className="h-10 w-10 rounded-full bg-white/5 border border-white/10 hover:bg-gradient-brand hover:border-transparent flex items-center justify-center transition-all">
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
              🇮🇳 Made in India · हिंदी · English
            </div>
          </div>
          <FooterCol title="Product" links={[
            { to: "/features", label: "Features" },
            { to: "/ai-assistant", label: "AI Assistant" },
            { to: "/how-it-works", label: "How It Works" },
            { to: "/download", label: "Download App" },
          ]} />
          <FooterCol title="Solutions" links={[
            { to: "/for-suppliers", label: "For Suppliers" },
            { to: "/for-truckers", label: "For Truckers" },
            { to: "/pricing", label: "Pricing" },
            { to: "/help", label: "Help Center" },
          ]} />
          <FooterCol title="Company" links={[
            { to: "/about", label: "About Us" },
            { to: "/blog", label: "Blog" },
            { to: "/contact", label: "Contact" },
            { to: "/legal", label: "Privacy & Terms" },
          ]} />
        </div>
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} TranZfort Technologies Pvt. Ltd. All rights reserved.</div>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">{title}</div>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-sm text-white/85 hover:text-orange-glow transition-colors">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
