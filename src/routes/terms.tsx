import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { LegalContent } from "@/components/site/LegalContent";
import { termsSections } from "@/data/terms";

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

export default TermsPage;
