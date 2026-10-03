// components/landing/HeroSection.jsx
import { Link } from 'react-router-dom';

const TRUST_STATS = [
  { value: '5', label: 'Severity Grades', sub: 'Grade 0–4 Classification' },
  { value: 'AI', label: 'Assisted Screening', sub: 'Not a diagnosis tool' },
  { value: 'XAI', label: 'Explainable Results', sub: 'Grad-CAM visualization' },
  { value: 'Rural', label: 'Healthcare Focus', sub: 'Offline-capable design' },
];

// Retinal Eye SVG illustration
const RetinalIllustration = () => (
  <div style={{ position: 'relative', width: '100%', maxWidth: '480px', margin: '0 auto' }}>
    {/* Decorative background circles */}
    <div style={{
      position: 'absolute', top: '-2rem', right: '-2rem',
      width: '16rem', height: '16rem',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(13,148,136,0.12) 0%, transparent 70%)',
      zIndex: 0,
    }} aria-hidden="true"/>
    <div style={{
      position: 'absolute', bottom: '-1rem', left: '-1rem',
      width: '10rem', height: '10rem',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(2,132,199,0.1) 0%, transparent 70%)',
      zIndex: 0,
    }} aria-hidden="true"/>

    {/* Main card */}
    <div
      className="animate-float"
      style={{
        position: 'relative', zIndex: 1,
        backgroundColor: 'white',
        borderRadius: '1.5rem',
        padding: '1.5rem',
        boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
        border: '1px solid var(--color-border)',
      }}
    >
      {/* Mock fundus image area */}
      <div
        style={{
          position: 'relative',
          borderRadius: '1rem',
          overflow: 'hidden',
          aspectRatio: '1',
          maxWidth: '320px',
          margin: '0 auto',
          background: '#0a0a1a',
        }}
        role="img"
        aria-label="Illustrative retinal fundus image with AI heatmap overlay"
      >
        {/* Fundus eye background */}
        <svg width="100%" height="100%" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* Background - fundus dark */}
          <rect width="320" height="320" fill="#0d0820"/>
          {/* Retinal orange glow */}
          <radialGradient id="retinalGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c2440a" stopOpacity="0.9"/>
            <stop offset="40%" stopColor="#8b2500" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#1a0800" stopOpacity="0.3"/>
          </radialGradient>
          <circle cx="160" cy="160" r="145" fill="url(#retinalGlow)"/>

          {/* Optic disc */}
          <radialGradient id="opticDisc" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f5deb3" stopOpacity="1"/>
            <stop offset="60%" stopColor="#d4a962" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#b8822a" stopOpacity="0.6"/>
          </radialGradient>
          <circle cx="210" cy="145" r="28" fill="url(#opticDisc)"/>
          <circle cx="210" cy="145" r="16" fill="#fffde7" fillOpacity="0.8"/>

          {/* Blood vessels */}
          <g stroke="#8b1a00" strokeWidth="1.5" fill="none" strokeOpacity="0.7">
            <path d="M210 145 Q170 155 140 175 Q120 190 100 200"/>
            <path d="M210 145 Q175 130 150 120 Q130 112 110 115"/>
            <path d="M210 145 Q230 165 240 185 Q248 200 245 220"/>
            <path d="M210 145 Q225 125 235 105 Q242 90 240 75"/>
            <path d="M160 175 Q145 185 135 200 Q128 212 130 225"/>
            <path d="M150 120 Q140 110 130 105 Q118 100 110 102"/>
            <path d="M140 175 Q125 178 112 182 Q100 186 92 193"/>
          </g>
          <g stroke="#c0392b" strokeWidth="1" fill="none" strokeOpacity="0.5">
            <path d="M130 200 Q120 205 115 215"/>
            <path d="M110 115 Q105 108 100 105 Q95 102 90 104"/>
            <path d="M100 200 Q90 205 85 215 Q80 225 82 235"/>
          </g>

          {/* Macula (fovea area) */}
          <radialGradient id="macula" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a0500" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#3d1000" stopOpacity="0.4"/>
          </radialGradient>
          <circle cx="145" cy="165" r="22" fill="url(#macula)"/>
          <circle cx="145" cy="165" r="5" fill="#0d0000" fillOpacity="0.8"/>

          {/* AI Heatmap overlay (mock Grad-CAM) */}
          <radialGradient id="heatHigh" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff2200" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#ff2200" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="heatMed" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff8800" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#ff8800" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="heatLow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffee00" stopOpacity="0.25"/>
            <stop offset="100%" stopColor="#ffee00" stopOpacity="0"/>
          </radialGradient>

          <ellipse cx="145" cy="165" rx="35" ry="30" fill="url(#heatHigh)"/>
          <ellipse cx="118" cy="185" rx="25" ry="18" fill="url(#heatMed)"/>
          <ellipse cx="165" cy="150" rx="30" ry="22" fill="url(#heatLow)"/>

          {/* Circular border */}
          <circle cx="160" cy="160" r="145" fill="none" stroke="#2d1200" strokeWidth="3"/>
        </svg>

        {/* XAI Badge overlay */}
        <div style={{
          position: 'absolute', top: '0.75rem', left: '0.75rem',
          backgroundColor: 'rgba(13,148,136,0.9)',
          color: 'white',
          fontSize: '0.6875rem',
          fontWeight: 600,
          padding: '0.25rem 0.625rem',
          borderRadius: '999px',
          backdropFilter: 'blur(4px)',
          letterSpacing: '0.04em',
        }} aria-label="Explainable AI visualization label">
          ✦ XAI Heatmap — Illustrative
        </div>
      </div>

      {/* AI Result Card below image */}
      <div style={{
        marginTop: '1rem',
        backgroundColor: 'var(--color-surface-alt)',
        borderRadius: '0.75rem',
        padding: '0.875rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.75rem',
        border: '1px solid var(--color-border)',
      }}>
        <div>
          <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Screening Result
          </div>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy)', marginTop: '0.125rem' }}>
            Grade 2 — Moderate DR
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.125rem' }}>
            Refer for professional review
          </div>
        </div>
        <div style={{
          width: '2.75rem', height: '2.75rem', borderRadius: '0.625rem',
          backgroundColor: '#fef3c7',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.5">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>
      </div>

      {/* "Illustrative demo" label */}
      <p style={{ textAlign: 'center', fontSize: '0.6875rem', color: '#94a3b8', marginTop: '0.625rem', fontStyle: 'italic' }}>
        * Illustrative screening visualization only
      </p>
    </div>

    {/* Floating badge top-right */}
    <div
      className="animate-pulse-glow"
      style={{
        position: 'absolute', top: '1rem', right: '-1rem', zIndex: 2,
        backgroundColor: 'white',
        borderRadius: '0.75rem',
        padding: '0.625rem 0.875rem',
        boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
        border: '1px solid var(--color-border)',
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        fontSize: '0.75rem', fontWeight: 600,
        color: 'var(--color-navy)',
        whiteSpace: 'nowrap',
      }}
      aria-hidden="true"
    >
      <div style={{ width: '0.625rem', height: '0.625rem', borderRadius: '50%', backgroundColor: '#10b981' }}/>
      AI Screening Ready
    </div>
  </div>
);

const HeroSection = () => {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        padding: '5rem 0 4rem',
        background: 'linear-gradient(160deg, #f0fdfa 0%, #f8fafc 50%, #e0f2fe 100%)',
        overflow: 'hidden',
      }}
      aria-label="Hero section"
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }} className="hero-grid">
          {/* Left: Content */}
          <div className="animate-fade-in-up">
            {/* Trust badge */}
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                backgroundColor: 'white',
                border: '1px solid var(--color-primary-100)',
                borderRadius: '999px',
                padding: '0.375rem 1rem 0.375rem 0.5rem',
                marginBottom: '1.75rem',
                boxShadow: '0 1px 8px rgba(13,148,136,0.1)',
              }}
            >
              <span style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white',
                fontSize: '0.6875rem',
                fontWeight: 700,
                padding: '0.1875rem 0.5rem',
                borderRadius: '999px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}>
                SIH 2026
              </span>
              <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-text-muted)' }}>
                Explainable AI · Rural Eye Screening
              </span>
            </div>

            {/* Headline */}
            <h1 className="heading-display" style={{ marginBottom: '1.25rem' }}>
              Smarter Eye{' '}
              <span className="text-teal">Screening.</span>
              <br />
              Clearer{' '}
              <span className="text-teal">AI.</span>
              <br />
              Better Access.
            </h1>

            {/* Supporting text */}
            <p className="text-body-lg" style={{ marginBottom: '2rem', maxWidth: '480px' }}>
              AI-assisted diabetic retinopathy screening designed to bring
              explainable retinal analysis closer to rural communities —
              with visual explanations, not just predictions.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <Link to="/register" className="btn-primary" style={{ fontSize: '1rem', padding: '0.8125rem 2rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                Start Screening
              </Link>
              <button
                onClick={() => handleScroll('#how-it-works')}
                className="btn-secondary"
                style={{ fontSize: '1rem', padding: '0.8125rem 2rem' }}
              >
                How It Works
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            {/* Medical disclaimer ribbon */}
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
              backgroundColor: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: '0.625rem',
              padding: '0.625rem 0.875rem',
              maxWidth: '480px',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" style={{ flexShrink: 0, marginTop: '0.15rem' }} aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <p style={{ fontSize: '0.75rem', color: '#15803d', margin: 0, lineHeight: 1.5 }}>
                <strong>Screening assistance only.</strong> This system is designed to support clinical review — not replace an ophthalmologist or provide autonomous medical diagnosis.
              </p>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="animate-fade-in-up delay-300" style={{ display: 'flex', justifyContent: 'center' }}>
            <RetinalIllustration />
          </div>
        </div>

        {/* Trust Stats Row */}
        <div style={{
          marginTop: '4rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          borderTop: '1px solid var(--color-border)',
          paddingTop: '2.5rem',
        }} className="stats-grid" role="list" aria-label="Platform highlights">
          {TRUST_STATS.map((stat, i) => (
            <div
              key={i}
              role="listitem"
              className={`animate-fade-in-up delay-${(i + 1) * 100}`}
              style={{
                textAlign: 'center',
                padding: '1.25rem',
                borderRadius: '0.875rem',
                backgroundColor: 'white',
                border: '1px solid var(--color-border)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
              }}
            >
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '-0.02em', lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', marginTop: '0.375rem' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.125rem' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
