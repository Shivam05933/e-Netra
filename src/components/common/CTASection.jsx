// src/components/common/CTASection.jsx
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const CTASection = ({
  headline = "Making AI-Assisted Screening More Understandable.",
  subtext = "Explore how Drishti brings retinal imaging, AI analysis, explainability, and healthcare workflows together.",
  buttonText = "Explore the Technology",
  buttonLink = "/technology"
}) => {
  return (
    <section style={{ padding: '4rem 0' }}>
      <div className="drishti-container">
        <div
          style={{
            background: 'linear-gradient(135deg, #0E2F76 0%, #0A192F 60%, #1D4ED8 100%)',
            borderRadius: '2.25rem',
            padding: '4rem 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 25px 60px -15px rgba(14, 47, 118, 0.25)',
          }}
        >
          {/* Subtle radial light glow */}
          <div
            style={{
              position: 'absolute',
              top: '-30%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '600px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.18) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#38BDF8',
                padding: '0.375rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.8125rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.5rem',
              }}
            >
              <Sparkles style={{ width: '0.875rem', height: '0.875rem' }} />
              Smart India Hackathon 2026 Initiative
            </span>

            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
              }}
            >
              {headline}
            </h2>

            <p
              style={{
                fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
                color: '#AAC0E1',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '660px',
                margin: '0 auto 2.5rem auto',
              }}
            >
              {subtext}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                to={buttonLink}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  backgroundColor: '#FFFFFF',
                  color: '#0E2F76',
                  fontWeight: 800,
                  fontSize: '1.0625rem',
                  padding: '1rem 2.25rem',
                  borderRadius: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.backgroundColor = '#E0EBF8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                }}
              >
                <span>{buttonText}</span>
                <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
