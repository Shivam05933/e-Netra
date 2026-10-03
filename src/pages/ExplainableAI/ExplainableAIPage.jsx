// src/pages/ExplainableAI/ExplainableAIPage.jsx
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import AIHeatmapCard from '../../components/common/AIHeatmapCard';
import CTASection from '../../components/common/CTASection';
import { Eye, Flame, ShieldCheck, CheckCircle2, Lock, Sparkles, AlertCircle } from 'lucide-react';

const WHY_EXPLAINABILITY_CARDS = [
  {
    title: 'Transparent',
    desc: 'Understand why the model generated a specific result rather than relying on an unexplainable black-box prediction.',
    icon: Eye,
    color: '#0E2F76',
  },
  {
    title: 'Interpretable',
    desc: 'Visual Grad-CAM heatmaps highlight relevant lesion regions, making AI outputs easier to review and verify.',
    icon: Flame,
    color: '#F59E0B',
  },
  {
    title: 'Trustworthy Workflow',
    desc: 'Supports healthcare workers and doctors during screening and triage by providing clear rationale for patient referral.',
    icon: ShieldCheck,
    color: '#10B981',
  },
];

const ExplainableAIPage = () => {
  return (
    <div style={{ backgroundColor: '#F5FEFF', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ padding: '4rem 0 3rem 0', textAlign: 'center' }}>
        <div className="drishti-container" style={{ maxWidth: '900px' }}>
          <span className="drishti-badge" style={{ marginBottom: '1rem' }}>
            Model Interpretability & Grad-CAM
          </span>
          <h1 className="hero-heading" style={{ marginBottom: '1.25rem' }}>
            Don't Just Predict.{' '}
            <span style={{ color: '#0E2F76', background: 'linear-gradient(135deg, #0E2F76 0%, #2563EB 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Explain.
            </span>
          </h1>
          <p className="text-body-large" style={{ maxWidth: '760px', margin: '0 auto' }}>
            Drishti is designed to make AI-assisted screening results easier to understand by showing where the model is focusing.
          </p>
        </div>
      </section>

      {/* Main Split-Screen Heatmap Interactive Comparison */}
      <section style={{ padding: '2rem 0 5rem 0' }}>
        <div className="drishti-container">
          <AIHeatmapCard />
        </div>
      </section>

      {/* Why Explainability Matters Section */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="drishti-container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="drishti-badge" style={{ marginBottom: '0.5rem' }}>
              Core Philosophy
            </span>
            <h2 className="section-heading" style={{ fontSize: '2.25rem' }}>
              Why Explainability Matters in Healthcare
            </h2>
            <p className="text-body-standard">
              In clinical decision-support systems, visual explanations build confidence and facilitate collaborative oversight between AI and healthcare personnel.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {WHY_EXPLAINABILITY_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="drishti-card">
                  <div
                    style={{
                      width: '3.25rem',
                      height: '3.25rem',
                      borderRadius: '1rem',
                      backgroundColor: card.color + '15',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <Icon style={{ width: '1.625rem', height: '1.625rem', color: card.color }} />
                  </div>
                  <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#0E2F76', marginBottom: '0.625rem' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Important Clinical Notice Box */}
          <div
            style={{
              marginTop: '3.5rem',
              backgroundColor: '#F5FEFF',
              borderRadius: '1.25rem',
              padding: '1.5rem 1.75rem',
              border: '1px solid rgba(170, 192, 225, 0.5)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
            }}
          >
            <AlertCircle style={{ width: '1.5rem', height: '1.5rem', color: '#0E2F76', flexShrink: 0, marginTop: '0.15rem' }} />
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0E2F76', margin: '0 0 0.25rem 0' }}>
                Important Technical Scope & Responsibility Notice
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#475569', margin: 0, lineHeight: 1.6 }}>
                Explainability heatmaps provide visual insight into model feature weights to assist human evaluation. Explainability does not guarantee absolute clinical accuracy, and all screening outputs should be reviewed in conjunction with expert medical judgment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Connecting Screening With Healthcare Decisions"
        subtext="See how explainable AI insights integrate seamlessly with district-level triage workflows."
        buttonText="Explore Impact & Workflows"
        buttonLink="/impact"
      />

      <Footer />
    </div>
  );
};

export default ExplainableAIPage;
