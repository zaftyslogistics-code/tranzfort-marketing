import { createFileRoute } from "react-router-dom";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { LegalContent } from "@/components/site/LegalContent";
import { privacySections } from "@/data/privacy";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | TranZfort" },
      {
        name: "description",
        content:
          "How TranZfort collects, uses, and protects your data. Read our full privacy policy.",
      },
      { property: "og:title", content: "Privacy Policy | TranZfort" },
      { property: "og:description", content: "How we collect, use, and protect your data." },
    ],
  }),
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title={<>Privacy Policy</>}
        desc="How we collect, use, and protect your data."
      />
      <LegalContent sections={privacySections} lastUpdated="April 20, 2026" />
    </SiteLayout>
  );
}
