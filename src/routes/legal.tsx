import { createFileRoute } from "@tanstack/react-router";
import { Shield, FileText, Cookie, Mail } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/legal")({
  component: LegalPage,
  head: () => ({
    meta: [
      { title: "Legal — Privacy, Terms & Policies | TranZfort" },
      { name: "description", content: "Read TranZfort's privacy policy, terms of service, and data handling practices." },
      { property: "og:title", content: "TranZfort Legal & Privacy" },
      { property: "og:description", content: "How we handle your data, our terms of service, and policies." },
    ],
  }),
});

function LegalPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title={<>Privacy, terms, and <span className="text-gradient-brand">our promises</span>.</>}
        desc="The legal stuff, in plain English. We believe your trust is earned through clear, honest policies — not buried fine print."
      />

      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 space-y-12">
          <Section icon={Shield} title="Privacy Policy" updated="Updated April 2026">
            <p>
              We collect the minimum data needed to run TranZfort — your phone number, KYC documents, and the loads you post or accept.
              Your AI conversations and scanned documents stay <strong>on your device by default</strong>.
              Anything you choose to sync to your account is encrypted in transit and at rest.
            </p>
            <p>
              We <strong>never</strong> sell your data to third parties.
              We share only what's required by law or what you explicitly authorise (e.g. payment information with our payment processor).
            </p>
            <ul className="space-y-2 mt-4">
              <li>📱 On-device AI means voice and chat history doesn't leave your phone</li>
              <li>🔒 KYC documents are encrypted and accessible only to verified TranZfort staff for fraud review</li>
              <li>📍 Location is used only when you're actively on a trip, with your permission</li>
              <li>🗑️ You can delete your account and all associated data at any time, from Settings</li>
            </ul>
          </Section>

          <Section icon={FileText} title="Terms of Service" updated="Updated April 2026">
            <p>
              By using TranZfort, you agree to use the platform honestly — accurate KYC, accurate load info, real ratings.
              We reserve the right to suspend accounts that engage in fraud, harassment, or repeated cancellations.
            </p>
            <p>
              TranZfort is a marketplace. We facilitate connections between suppliers and truckers but are not a party to the freight contract.
              Payments, deliveries and disputes are between the contracting parties — though we provide tools and mediation to make resolution easy.
            </p>
            <p>
              The Driver and Supplier core plans are free and will remain so. Paid plans (Fleet Pro, Enterprise) are billed monthly or annually as agreed.
            </p>
          </Section>

          <Section icon={Cookie} title="Cookies & Tracking" updated="Updated April 2026">
            <p>
              Our website uses essential cookies to keep you signed in and remember your preferences.
              We use lightweight, privacy-respecting analytics (no third-party ad trackers) to understand which pages help our users.
            </p>
            <p>
              The mobile app uses local storage and an on-device database to enable offline mode. No third-party SDKs run in the background.
            </p>
          </Section>

          <Section icon={Mail} title="Reaching us about Legal Matters" updated="">
            <p>
              For DPA requests, copyright notices, or law-enforcement enquiries, write to <strong>legal@tranzfort.in</strong>.
              Mailing address: TranZfort Technologies Pvt. Ltd., Bengaluru, Karnataka, India.
            </p>
          </Section>
        </div>
      </section>
    </SiteLayout>
  );
}

function Section({
  icon: Icon, title, updated, children,
}: { icon: typeof Shield; title: string; updated: string; children: React.ReactNode }) {
  return (
    <section className="p-7 rounded-3xl bg-card border border-border shadow-soft">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-2xl bg-gradient-brand text-white flex items-center justify-center">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {updated && <div className="text-xs text-ink-soft">{updated}</div>}
        </div>
      </div>
      <div className="mt-5 space-y-4 text-ink-soft leading-relaxed [&_strong]:text-ink">
        {children}
      </div>
    </section>
  );
}
