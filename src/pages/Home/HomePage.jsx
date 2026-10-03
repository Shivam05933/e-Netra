// src/pages/Home/HomePage.jsx
import { Link } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import ProductMockup from '../../components/home/ProductMockup';
import CTASection from '../../components/common/CTASection';
import { Eye, ShieldCheck, Flame, Cpu, ArrowRight, Activity, CheckCircle2, Layers, HeartPulse } from 'lucide-react';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: '#F5FEFF', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          padding: '4rem 0 5rem 0',
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(ellipse at top center, rgba(170, 192, 225, 0.25) 0%, rgba(245, 254, 255, 0) 70%)',
        }}
      >
        <div className="drishti-container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto 4.5rem auto' }}>
            {/* Small Badge */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="drishti-badge">
                <SparklesIcon /> Explainable AI • Retinal Screening • Rural Healthcare
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-heading" style={{ marginBottom: '1.5rem' }}>
              AI-Powered Eye Screening,{' '}
              <span style={{ color: '#0E2F76', background: 'linear-gradient(135deg, #0E2F76 0%, #2563EB 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Built to Make Early Detection Smarter.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-body-large" style={{ maxWidth: '760px', margin: '0 auto 2.5rem auto' }}>
              Drishti combines retinal image analysis, explainable AI, and healthcare workflows to support early diabetic retinopathy screening and district-level triage.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <Link to="/explainable-ai" className="drishti-btn-primary">
                <span>Explore Drishti</span>
                <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
              </Link>

              <Link to="/how-it-works" className="drishti-btn-secondary">
                <span>See How It Works</span>
              </Link>
            </div>
          </div>

          {/* Product Mockup Container */}
          <ProductMockup />
        </div>
      </section>

      {/* Value Pillars Section */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="drishti-container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="drishti-badge" style={{ marginBottom: '0.75rem' }}>
              Platform Pillars
            </span>
            <h2 className="section-heading" style={{ marginBottom: '1rem' }}>
              Engineered for Clinical & District Workflows
            </h2>
            <p className="text-body-large">
              Bridging the gap between advanced deep learning vision models and frontline rural healthcare screening.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Pillar 1 */}
            <div className="drishti-card">
              <div style={{ width: '3rem', height: '3rem', borderRadius: '1rem', backgroundColor: '#E0EBF8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Cpu style={{ width: '1.5rem', height: '1.5rem', color: '#0E2F76' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0E2F76', marginBottom: '0.5rem' }}>
                Deep Learning Vision
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Automated detection of microaneurysms, hemorrhages, and exudates trained on diverse fundus image datasets.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="drishti-card">
              <div style={{ width: '3rem', height: '3rem', borderRadius: '1rem', backgroundColor: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Flame style={{ width: '1.5rem', height: '1.5rem', color: '#F59E0B' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0E2F76', marginBottom: '0.5rem' }}>
                Explainable Heatmaps
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Grad-CAM activation maps highlight critical retinal regions so clinicians can verify model reasoning.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="drishti-card">
              <div style={{ width: '3rem', height: '3rem', borderRadius: '1rem', backgroundColor: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <HeartPulse style={{ width: '1.5rem', height: '1.5rem', color: '#10B981' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0E2F76', marginBottom: '0.5rem' }}>
                District-Level Triage
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Prioritizes high-risk patients for referral to tertiary eye hospitals, reducing preventable vision loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Ready to See How Drishti Works?"
        subtext="Explore the 5-step screening pipeline designed for rural healthcare centers and district triage."
        buttonText="View How It Works"
        buttonLink="/how-it-works"
      />

      <Footer />
    </div>
  );
};

const SparklesIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z" />
  </svg>
);

export default HomePage;
