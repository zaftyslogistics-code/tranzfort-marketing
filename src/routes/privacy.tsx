import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { LegalContent } from "@/components/site/LegalContent";
import { privacySections } from "@/data/privacy";

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

export default PrivacyPage;
