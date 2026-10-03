// src/pages/HowItWorks/HowItWorksPage.jsx
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import ProcessStep from '../../components/common/ProcessStep';
import PipelineDiagram from '../../components/common/PipelineDiagram';
import CTASection from '../../components/common/CTASection';
import { Camera, ShieldCheck, Cpu, Flame, ArrowRightLeft } from 'lucide-react';

const HowItWorksPage = () => {
  return (
    <div style={{ backgroundColor: '#F5FEFF', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ padding: '4rem 0 3rem 0', textAlign: 'center' }}>
        <div className="drishti-container" style={{ maxWidth: '900px' }}>
          <span className="drishti-badge" style={{ marginBottom: '1rem' }}>
            Screening & Triage Workflow
          </span>
          <h1 className="hero-heading" style={{ marginBottom: '1.25rem' }}>
            From Retinal Image to Actionable Screening Insight
          </h1>
          <p className="text-body-large" style={{ maxWidth: '740px', margin: '0 auto' }}>
            Drishti automates quality validation, deep feature extraction, and explainable heatmap generation to enable efficient district-level triage.
          </p>
        </div>
      </section>

      {/* 5-Step Process Visual Section */}
      <section style={{ padding: '3rem 0 5rem 0' }}>
        <div className="drishti-container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="drishti-badge" style={{ marginBottom: '0.5rem' }}>
              Step-by-Step Flow
            </span>
            <h2 className="section-heading" style={{ fontSize: '2.25rem' }}>
              The 5-Stage Screening Journey
            </h2>
          </div>

          <ProcessStep />
        </div>
      </section>

      {/* Technical Pipeline Diagram Section */}
      <section style={{ padding: '4rem 0 6rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="drishti-container">
          <PipelineDiagram />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Discover the AI Technology Behind Drishti"
        subtext="Learn how deep neural networks identify microaneurysms, hemorrhages, and exudates."
        buttonText="Explore the AI Technology"
        buttonLink="/technology"
      />

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
