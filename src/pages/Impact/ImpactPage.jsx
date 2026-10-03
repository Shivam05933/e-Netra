// src/pages/Impact/ImpactPage.jsx
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import HealthcareFlow from '../../components/common/HealthcareFlow';
import CTASection from '../../components/common/CTASection';
import { Eye, ShieldCheck, HeartPulse, Building2, User, Stethoscope, Landmark, Layers, Sparkles } from 'lucide-react';

const QUALITATIVE_METRIC_CARDS = [
  {
    tag: 'Community Access',
    title: 'Early Screening',
    desc: 'Brings retinal image evaluation directly into rural health centers and mobile camps before irreversible vision loss occurs.',
    icon: Eye,
    color: '#0E2F76',
  },
  {
    tag: 'Clinical Trust',
    title: 'Explainable AI',
    desc: 'Provides visual Grad-CAM heatmap rationale alongside severity predictions to foster trust among healthcare operators.',
    icon: ShieldCheck,
    color: '#2563EB',
  },
  {
    tag: 'Resource Optimization',
    title: 'District-Level Triage',
    desc: 'Prioritizes high-risk (Grade 3 & 4) cases for urgent ophthalmologist review, streamlining hospital referral queues.',
    icon: Building2,
    color: '#10B981',
  },
  {
    tag: 'Ecosystem Sync',
    title: 'Healthcare Workflow',
    desc: 'Links field ASHA workers, district hospitals, and regional eye institutes into a unified screening framework.',
    icon: HeartPulse,
    color: '#8B5CF6',
  },
];

const HEALTHCARE_ENV_CARDS = [
  {
    title: 'Rural Screening',
    desc: 'Support screening workflows closer to rural communities, reducing travel barriers for elderly diabetic patients.',
    icon: User,
  },
  {
    title: 'Healthcare Workers',
    desc: 'Provide structured, easy-to-interpret screening information for field staff operating low-resource screening camps.',
    icon: Stethoscope,
  },
  {
    title: 'Doctors & Specialists',
    desc: 'Help ophthalmologists quickly review flagged high-risk screening results along with visual feature explanations.',
    icon: ShieldCheck,
  },
  {
    title: 'District-Level Coordination',
    desc: 'Enable structured triage and referral workflows to ensure severe cases receive timely medical intervention.',
    icon: Landmark,
  },
];

const ImpactPage = () => {
  return (
    <div style={{ backgroundColor: '#F5FEFF', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ padding: '4rem 0 3rem 0', textAlign: 'center' }}>
        <div className="drishti-container" style={{ maxWidth: '900px' }}>
          <span className="drishti-badge" style={{ marginBottom: '1rem' }}>
            System Impact & Care Coordination
          </span>
          <h1 className="hero-heading" style={{ marginBottom: '1.25rem' }}>
            Connecting Screening With Healthcare Decisions
          </h1>
          <p className="text-body-large" style={{ maxWidth: '760px', margin: '0 auto' }}>
            Drishti links community screening with district health administration, ensuring timely referral for high-risk diabetic retinopathy patients.
          </p>
        </div>
      </section>

      {/* Ecosystem Flow Section */}
      <section style={{ padding: '2rem 0 4rem 0' }}>
        <div className="drishti-container">
          <HealthcareFlow />
        </div>
      </section>

      {/* Qualitative Metrics Cards Section */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="drishti-container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="drishti-badge" style={{ marginBottom: '0.5rem' }}>
              Strategic Value
            </span>
            <h2 className="section-heading" style={{ fontSize: '2.25rem' }}>
              Four Pillars of System Impact
            </h2>
            <p className="text-body-standard">
              Drishti delivers qualitative value across all levels of the public healthcare hierarchy.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {QUALITATIVE_METRIC_CARDS.map((metric) => {
              const Icon = metric.icon;
              return (
                <div key={metric.title} className="drishti-card">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: metric.color, backgroundColor: metric.color + '15', padding: '0.2rem 0.6rem', borderRadius: '0.5rem' }}>
                      {metric.tag}
                    </span>
                    <Icon style={{ width: '1.25rem', height: '1.25rem', color: metric.color }} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0E2F76', marginBottom: '0.5rem' }}>
                    {metric.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                    {metric.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Designed for Real Healthcare Environments Section */}
      <section style={{ padding: '5rem 0' }}>
        <div className="drishti-container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="drishti-badge" style={{ marginBottom: '0.5rem' }}>
              Field Adaptation
            </span>
            <h2 className="section-heading" style={{ fontSize: '2.25rem' }}>
              Designed for Real Healthcare Environments
            </h2>
            <p className="text-body-standard">
              Built to operate effectively within existing public health structures and district medical networks.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {HEALTHCARE_ENV_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="drishti-card" style={{ backgroundColor: '#FFFFFF' }}>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: '1rem', backgroundColor: '#E0EBF8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    <Icon style={{ width: '1.5rem', height: '1.5rem', color: '#0E2F76' }} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0E2F76', marginBottom: '0.5rem' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Learn About Drishti's Project Vision"
        subtext="Discover how Smart India Hackathon 2026 inspires scalable AI solutions for public health."
        buttonText="About Drishti Vision"
        buttonLink="/about"
      />

      <Footer />
    </div>
  );
};

export default ImpactPage;
