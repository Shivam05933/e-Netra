// components/landing/CTASection.jsx
import { Link } from 'react-router-dom';

const CTASection = () => {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="section"
      style={{
        background: 'linear-gradient(135deg, var(--color-navy) 0%, #1e3a5f 50%, #0f4c4c 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-labelledby="cta-heading"
    >
      {/* Background decorative shapes */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-4rem', right: '-4rem',
        width: '24rem', height: '24rem',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(13,148,136,0.2) 0%, transparent 70%)',
      }}/>
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '-3rem', left: '-3rem',
        width: '18rem', height: '18rem',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(2,132,199,0.15) 0%, transparent 70%)',
      }}/>

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          backgroundColor: 'rgba(13,148,136,0.2)',
          border: '1px solid rgba(13,148,136,0.4)',
          borderRadius: '999px',
          padding: '0.375rem 1rem',
          marginBottom: '2rem',
          color: 'var(--color-primary-light)',
          fontSize: '0.8125rem',
          fontWeight: 600,
        }}>
          <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: '#10b981', flexShrink: 0 }} aria-hidden="true"/>
          SIH 2026 · Explainable AI · Rural Healthcare
        </div>

        {/* Heading */}
        <h2 id="cta-heading" style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          color: 'white',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          marginBottom: '1.25rem',
        }}>
          Start Smarter{' '}
          <span style={{ color: 'var(--color-primary-light)' }}>Eye Screening</span>
        </h2>

        {/* Subtext */}
        <p style={{
          fontSize: '1.125rem',
          color: 'rgba(255,255,255,0.75)',
          lineHeight: 1.7,
          maxWidth: '560px',
          margin: '0 auto 2.5rem',
        }}>
          Bring AI-assisted, explainable retinal screening closer to the communities that need it most — with healthcare worker support and clinical professional review.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          <Link
            to="/register"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '0.9375rem 2.25rem',
              borderRadius: '0.625rem',
              textDecoration: 'none',
              transition: 'background-color 0.2s, transform 0.15s, box-shadow 0.2s',
              boxShadow: '0 4px 16px rgba(13,148,136,0.4)',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--color-primary)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Get Started
          </Link>
          <button
            onClick={() => handleScroll('#how-it-works')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              backgroundColor: 'transparent',
              color: 'white',
              fontWeight: 600,
              fontSize: '1rem',
              padding: '0.9375rem 2.25rem',
              borderRadius: '0.625rem',
              border: '2px solid rgba(255,255,255,0.35)',
              cursor: 'pointer',
              transition: 'background-color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; }}
          >
            Learn How It Works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Trust row */}
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: '2rem', flexWrap: 'wrap',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2.5rem',
        }}>
          {[
            { icon: '🔬', text: 'AI-Assisted Screening' },
            { icon: '👁️', text: 'Grad-CAM Explainability' },
            { icon: '🏥', text: 'Clinical Professional Review' },
            { icon: '🌐', text: 'Rural Healthcare Focus' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.875rem',
              fontWeight: 500,
            }}>
              <span aria-hidden="true">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
