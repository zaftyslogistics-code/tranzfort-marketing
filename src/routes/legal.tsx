import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, FileText, Cookie, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/legal")({
  component: LegalPage,
  head: () => ({
    meta: [
      { title: "Legal — Privacy, Terms & Policies | TranZfort" },
      {
        name: "description",
        content: "Read TranZfort's privacy policy, terms of service, and data handling practices.",
      },
      { property: "og:title", content: "TranZfort Legal & Privacy" },
      {
        property: "og:description",
        content: "How we handle your data, our terms of service, and policies.",
      },
    ],
  }),
});

function LegalPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title={<>Legal information and <span className="text-gradient-brand">policies</span>.</>}
        desc="The legal stuff, in plain English. We believe your trust is earned through clear, honest policies — not buried fine print."
      />

      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/privacy"
              className="group flex items-center gap-5 p-7 rounded-3xl bg-card border border-border shadow-soft hover:border-teal/50 hover:shadow-brand transition-all"
            >
              <div className="h-12 w-12 rounded-2xl bg-gradient-brand text-white flex items-center justify-center shrink-0">
                <Shield className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold">Privacy Policy</h2>
                <p className="mt-1 text-ink-soft text-sm leading-relaxed">
                  How we collect, use, and protect your data. Covers data types, sharing, security, retention, and your rights.
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-ink-soft group-hover:text-teal transition-colors" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link
              to="/terms"
              className="group flex items-center gap-5 p-7 rounded-3xl bg-card border border-border shadow-soft hover:border-teal/50 hover:shadow-brand transition-all"
            >
              <div className="h-12 w-12 rounded-2xl bg-gradient-brand text-white flex items-center justify-center shrink-0">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold">Terms of Service</h2>
                <p className="mt-1 text-ink-soft text-sm leading-relaxed">
                  The rules that keep our marketplace fair and safe. Covers accounts, responsibilities, prohibited activities, liability, and disputes.
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-ink-soft group-hover:text-teal transition-colors" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-7 rounded-3xl bg-card border border-border shadow-soft">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-gradient-brand text-white flex items-center justify-center">
                  <Cookie className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Cookies & Tracking</h2>
                  <div className="text-xs text-ink-soft">Updated April 2026</div>
                </div>
              </div>
              <div className="mt-5 space-y-4 text-ink-soft leading-relaxed [&_strong]:text-ink">
                <p>
                  Our website uses essential cookies to keep you signed in and remember your preferences.
                  We use lightweight, privacy-respecting analytics (no third-party ad trackers) to understand which pages help our users.
                </p>
                <p>
                  The mobile app uses local storage and an on-device database to enable offline mode. No third-party SDKs run in the background.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="p-7 rounded-3xl bg-card border border-border shadow-soft">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-gradient-brand text-white flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Reaching us about Legal Matters</h2>
                </div>
              </div>
              <div className="mt-5 space-y-4 text-ink-soft leading-relaxed [&_strong]:text-ink">
                <p>
                  For DPA requests, copyright notices, or law-enforcement enquiries, write to{" "}
                  <strong>legal@tranzfort.com</strong>.
                </p>
                <p>
                  Mailing address: TranZfort Logistics Technologies Pvt. Ltd., Mumbai, Maharashtra, India.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
