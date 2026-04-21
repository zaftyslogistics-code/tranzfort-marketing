import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { LegalContent } from "@/components/site/LegalContent";
import { termsSections } from "@/data/terms";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service | TranZfort" },
      {
        name: "description",
        content:
          "The rules that keep our marketplace fair and safe. Read TranZfort's Terms of Service.",
      },
      { property: "og:title", content: "Terms of Service | TranZfort" },
      { property: "og:description", content: "The rules that keep our marketplace fair and safe." },
    ],
  }),
});

function TermsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title={<>Terms of Service</>}
        desc="The rules that keep our marketplace fair and safe."
      />
      <LegalContent sections={termsSections} lastUpdated="April 20, 2026" />
    </SiteLayout>
  );
}
