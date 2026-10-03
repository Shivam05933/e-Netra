// src/pages/About/AboutPage.jsx
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import CTASection from '../../components/common/CTASection';
import { Cpu, Flame, HeartPulse, Award, ShieldCheck, ArrowRight } from 'lucide-react';

const VISION_CARDS = [
  {
    title: 'AI',
    subtitle: 'Intelligent Retinal Image Analysis',
    desc: 'Leverages computer vision models to detect microaneurysms, hemorrhages, and exudates, supporting rapid screening across high-volume population centers.',
    icon: Cpu,
    color: '#0E2F76',
    tag: 'Computer Vision',
  },
  {
    title: 'Explainability',
    subtitle: 'Visual Understanding of AI Predictions',
    desc: 'Generates intuitive Grad-CAM heatmaps that highlight significant retinal feature regions, ensuring model outputs remain interpretable for medical personnel.',
    icon: Flame,
    color: '#F59E0B',
    tag: 'Grad-CAM XAI',
  },
  {
    title: 'Healthcare',
    subtitle: 'Connecting Screening Insights With Workflows',
    desc: 'Bridges community screening camps with district health centers, enabling prioritized referral and triage for high-risk diabetic patients.',
    icon: HeartPulse,
    color: '#10B981',
    tag: 'Care Coordination',
  },
];

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: '#F5FEFF', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ padding: '4rem 0 3.5rem 0', textAlign: 'center' }}>
        <div className="drishti-container" style={{ maxWidth: '900px' }}>
          <span className="drishti-badge" style={{ marginBottom: '1rem' }}>
            Smart India Hackathon 2026 Project
          </span>
          <h1 className="hero-heading" style={{ marginBottom: '1.25rem' }}>
            Building a More Explainable Future for Eye Screening
          </h1>
          <p className="text-body-large" style={{ maxWidth: '760px', margin: '0 auto' }}>
            Drishti was conceived to address the challenge of early diabetic retinopathy screening in rural India by combining deep learning, visual explainability, and structured district-level triage.
          </p>
        </div>
      </section>

      {/* 3 Large Vision Cards Section */}
      <section style={{ padding: '3rem 0 6rem 0' }}>
        <div className="drishti-container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="drishti-badge" style={{ marginBottom: '0.5rem' }}>
              Core Core Pillars
            </span>
            <h2 className="section-heading" style={{ fontSize: '2.25rem' }}>
              Three Pillars of the Drishti Vision
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {VISION_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="drishti-card"
                  style={{
                    padding: '2.5rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          color: card.color,
                          backgroundColor: card.color + '15',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          border: `1px solid ${card.color}30`,
                        }}
                      >
                        {card.tag}
                      </span>

                      <div
                        style={{
                          width: '3.25rem',
                          height: '3.25rem',
                          borderRadius: '1rem',
                          backgroundColor: card.color + '15',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon style={{ width: '1.625rem', height: '1.625rem', color: card.color }} />
                      </div>
                    </div>

                    <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#0E2F76', marginBottom: '0.25rem', letterSpacing: '-0.02em' }}>
                      {card.title}
                    </h3>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#2563EB', marginBottom: '1rem' }}>
                      {card.subtitle}
                    </h4>

                    <p style={{ fontSize: '0.9375rem', color: '#64748B', lineHeight: 1.7, margin: 0 }}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hackathon Vision Overview Banner */}
      <section style={{ padding: '4rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="drishti-container" style={{ maxWidth: '960px' }}>
          <div
            style={{
              backgroundColor: '#F5FEFF',
              borderRadius: '2rem',
              padding: '2.5rem 2rem',
              border: '1px solid rgba(170, 192, 225, 0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                width: '4rem',
                height: '4rem',
                borderRadius: '1.25rem',
                backgroundColor: '#0E2F76',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Award style={{ width: '2.25rem', height: '2.25rem', color: '#38BDF8' }} />
            </div>

            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#0E2F76', margin: '0 0 0.5rem 0' }}>
                Smart India Hackathon 2026 Project Commitment
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#475569', margin: 0, lineHeight: 1.6 }}>
                Drishti is designed to demonstrate how artificial intelligence can be made transparent, scalable, and clinically aligned to assist healthcare professionals in high-need rural regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CTASection
        headline="Making AI-Assisted Screening More Understandable."
        subtext="Explore how Drishti brings retinal imaging, AI analysis, explainability, and healthcare workflows together."
        buttonText="Explore the Technology"
        buttonLink="/technology"
      />

      <Footer />
    </div>
  );
};

export default AboutPage;
