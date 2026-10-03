// pages/Landing/LandingPage.jsx
import TopBar from '../../components/landing/TopBar';
import HeroSection from '../../components/landing/HeroSection';
import ProblemSection from '../../components/landing/ProblemSection';
import HowItWorks from '../../components/landing/HowItWorks';
import FeaturesSection from '../../components/landing/FeaturesSection';
import ExplainableAISection from '../../components/landing/ExplainableAISection';
import SeverityScale from '../../components/landing/SeverityScale';
import RuralHealthcareSection from '../../components/landing/RuralHealthcareSection';
import UserTypesSection from '../../components/landing/UserTypesSection';
import CTASection from '../../components/landing/CTASection';
import Footer from '../../components/footer/Footer';

const LandingPage = () => (
  <>
    <TopBar />
    <main id="main-content">
      <HeroSection />
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <ExplainableAISection />
      <SeverityScale />
      <RuralHealthcareSection />
      <UserTypesSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default LandingPage;
