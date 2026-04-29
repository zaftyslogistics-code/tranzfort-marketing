import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const IndexPage = lazy(() => import("./routes/index"));
const AboutPage = lazy(() => import("./routes/about"));
const PricingPage = lazy(() => import("./routes/pricing"));
const ContactPage = lazy(() => import("./routes/contact"));
const LegalPage = lazy(() => import("./routes/legal"));
const PrivacyPage = lazy(() => import("./routes/privacy"));
const TermsPage = lazy(() => import("./routes/terms"));
const DownloadPage = lazy(() => import("./routes/download"));
const ForTruckersPage = lazy(() => import("./routes/for-truckers"));
const ForSuppliersPage = lazy(() => import("./routes/for-suppliers"));
const HowItWorksPage = lazy(() => import("./routes/how-it-works"));
const HelpPage = lazy(() => import("./routes/help"));
const BlogPage = lazy(() => import("./routes/blog"));
const AiAssistantPage = lazy(() => import("./routes/ai-assistant"));
const FeaturesPage = lazy(() => import("./routes/features"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-ink">TranZfort</h1>
            <p className="mt-2 text-ink-soft">Loading...</p>
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/for-truckers" element={<ForTruckersPage />} />
        <Route path="/for-suppliers" element={<ForSuppliersPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/ai-assistant" element={<AiAssistantPage />} />
        <Route path="/features" element={<FeaturesPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
