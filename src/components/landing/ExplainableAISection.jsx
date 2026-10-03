// components/landing/ExplainableAISection.jsx

// Mock retinal + heatmap SVG visualization
const MockHeatmapVisualization = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="xai-visual-grid">
    {/* Traditional AI */}
    <div style={{
      backgroundColor: 'white',
      border: '1px solid var(--color-border)',
      borderRadius: '1rem',
      padding: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.875rem',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: '0.25rem',
      }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Traditional AI
        </span>
        <span style={{
          fontSize: '0.6875rem', fontWeight: 600, backgroundColor: '#fef2f2',
          color: '#dc2626', border: '1px solid #fecaca',
          padding: '0.125rem 0.5rem', borderRadius: '999px',
        }}>
          Black-box
        </span>
      </div>

      {/* Retinal image - no heatmap */}
      <div style={{
        borderRadius: '0.75rem', overflow: 'hidden',
        aspectRatio: '1', background: '#0d0820', maxWidth: '200px', margin: '0 auto',
      }} role="img" aria-label="Standard retinal image without AI explanation">
        <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="200" height="200" fill="#0d0820"/>
          <radialGradient id="rg1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c2440a" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#1a0800" stopOpacity="0.3"/>
          </radialGradient>
          <circle cx="100" cy="100" r="90" fill="url(#rg1)"/>
          <radialGradient id="od1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f5deb3"/>
            <stop offset="100%" stopColor="#b8822a" stopOpacity="0.6"/>
          </radialGradient>
          <circle cx="130" cy="88" r="18" fill="url(#od1)"/>
          <g stroke="#8b1a00" strokeWidth="1.5" fill="none" strokeOpacity="0.6">
            <path d="M130 88 Q105 97 88 110"/>
            <path d="M130 88 Q110 80 90 75"/>
            <path d="M130 88 Q142 103 148 118"/>
          </g>
          <circle cx="88" cy="102" r="14" fill="#1a0500" fillOpacity="0.7"/>
        </svg>
      </div>

      <div style={{
        backgroundColor: '#f8fafc',
        borderRadius: '0.625rem',
        padding: '0.75rem',
        border: '1px solid var(--color-border)',
      }}>
        <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem' }}>Output</div>
        <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-navy)' }}>Grade 2 — Moderate DR</div>
        <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem', fontStyle: 'italic' }}>
          No explanation provided.
        </div>
      </div>

      <div style={{
        backgroundColor: '#fef2f2',
        borderRadius: '0.5rem',
        padding: '0.625rem 0.75rem',
        display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" style={{ flexShrink: 0, marginTop: '0.1rem' }} aria-hidden="true">
          <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
        <p style={{ fontSize: '0.75rem', color: '#b91c1c', margin: 0, lineHeight: 1.5 }}>
          Clinician cannot see what the AI is analysing. Difficult to trust or validate.
        </p>
      </div>
    </div>

    {/* e-Netra XAI */}
    <div style={{
      backgroundColor: 'white',
      border: '2px solid var(--color-primary)',
      borderRadius: '1rem',
      padding: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.875rem',
      boxShadow: '0 4px 20px rgba(13,148,136,0.12)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: '0.25rem',
      }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          e-Netra XAI
        </span>
        <span style={{
          fontSize: '0.6875rem', fontWeight: 600, backgroundColor: 'var(--color-primary-50)',
          color: 'var(--color-primary)', border: '1px solid var(--color-primary-100)',
          padding: '0.125rem 0.5rem', borderRadius: '999px',
        }}>
          Explainable
        </span>
      </div>

      {/* Retinal image WITH heatmap */}
      <div style={{
        borderRadius: '0.75rem', overflow: 'hidden',
        aspectRatio: '1', background: '#0d0820', maxWidth: '200px', margin: '0 auto',
        position: 'relative',
      }} role="img" aria-label="Retinal image with Grad-CAM heatmap highlighting important regions">
        <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="200" height="200" fill="#0d0820"/>
          <radialGradient id="rg2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c2440a" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#1a0800" stopOpacity="0.3"/>
          </radialGradient>
          <circle cx="100" cy="100" r="90" fill="url(#rg2)"/>
          <radialGradient id="od2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f5deb3"/>
            <stop offset="100%" stopColor="#b8822a" stopOpacity="0.6"/>
          </radialGradient>
          <circle cx="130" cy="88" r="18" fill="url(#od2)"/>
          <g stroke="#8b1a00" strokeWidth="1.5" fill="none" strokeOpacity="0.6">
            <path d="M130 88 Q105 97 88 110"/>
            <path d="M130 88 Q110 80 90 75"/>
            <path d="M130 88 Q142 103 148 118"/>
          </g>
          <circle cx="88" cy="102" r="14" fill="#1a0500" fillOpacity="0.7"/>

          {/* Grad-CAM heatmap overlays */}
          <radialGradient id="heat1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff0000" stopOpacity="0.65"/>
            <stop offset="100%" stopColor="#ff0000" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="heat2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff8800" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="#ff8800" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="heat3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffee00" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#ffee00" stopOpacity="0"/>
          </radialGradient>
          <ellipse cx="88" cy="102" rx="22" ry="18" fill="url(#heat1)"/>
          <ellipse cx="70" cy="115" rx="16" ry="12" fill="url(#heat2)"/>
          <ellipse cx="105" cy="95" rx="20" ry="15" fill="url(#heat3)"/>

          {/* Annotation ring */}
          <ellipse cx="88" cy="102" rx="22" ry="18" fill="none" stroke="#ff4444" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.8"/>
        </svg>

        {/* Heatmap legend */}
        <div style={{
          position: 'absolute', bottom: '0.5rem', right: '0.5rem',
          backgroundColor: 'rgba(0,0,0,0.7)',
          borderRadius: '0.375rem',
          padding: '0.25rem 0.5rem',
          display: 'flex', gap: '0.25rem', alignItems: 'center',
        }} aria-hidden="true">
          {[['#ff0000','High'],['#ff8800','Med'],['#ffee00','Low']].map(([c,l]) => (
            <span key={l} style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.5625rem', color: '#e2e8f0', fontWeight: 500 }}>
              <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: c }}/>
              {l}
            </span>
          ))}
        </div>
      </div>

      <div style={{
        backgroundColor: 'var(--color-primary-50)',
        borderRadius: '0.625rem',
        padding: '0.75rem',
        border: '1px solid var(--color-primary-100)',
      }}>
        <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>Output</div>
        <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-navy)' }}>Grade 2 — Moderate DR</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
          + Heatmap: Macula region highlighted as high-attention area.
        </div>
      </div>

      <div style={{
        backgroundColor: '#f0fdf4',
        borderRadius: '0.5rem',
        padding: '0.625rem 0.75rem',
        display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" style={{ flexShrink: 0, marginTop: '0.1rem' }} aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <p style={{ fontSize: '0.75rem', color: '#15803d', margin: 0, lineHeight: 1.5 }}>
          Clinician can see exactly which retinal regions influenced the AI result — supporting informed review.
        </p>
      </div>

      <p style={{ fontSize: '0.625rem', color: '#94a3b8', textAlign: 'center', fontStyle: 'italic', margin: 0 }}>
        * Illustrative screening visualization only. Not an actual AI output.
      </p>
    </div>
  </div>
);

const ExplainableAISection = () => (
  <section className="section-alt" aria-labelledby="xai-heading">
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', alignItems: 'center' }} className="xai-layout">
        {/* Left: explanation text */}
        <div>
          <span className="section-label">Why XAI Matters</span>
          <h2 className="heading-2" id="xai-heading" style={{ marginBottom: '1.25rem' }}>
            AI That Shows You<br />
            <span className="text-teal">Where It Is Looking</span>
          </h2>
          <p className="text-body-lg" style={{ marginBottom: '1.5rem' }}>
            Most AI systems provide a classification result — but not a reason. e-Netra is designed around the principle that AI should explain its prediction, not just provide it.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
            {[
              {
                title: 'Clinical Transparency',
                desc: 'Healthcare workers can see which retinal regions drove the AI\'s classification — supporting informed clinical review.',
                icon: '🔍',
              },
              {
                title: 'Trust Through Explanation',
                desc: 'Visual explanations help build appropriate confidence in AI-assisted results rather than blind reliance on a prediction.',
                icon: '🤝',
              },
              {
                title: 'Patient Communication',
                desc: 'Explanations help healthcare workers communicate screening findings more clearly to patients.',
                icon: '💬',
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '2.5rem', height: '2.5rem', borderRadius: '0.625rem',
                  backgroundColor: 'var(--color-primary-50)',
                  border: '1px solid var(--color-primary-100)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.125rem', flexShrink: 0,
                }} aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-navy)', marginBottom: '0.25rem' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: 'var(--color-primary-50)',
            border: '1px solid var(--color-primary-100)',
            borderRadius: '0.75rem',
            padding: '1rem',
          }}>
            <blockquote style={{ margin: 0, fontStyle: 'italic', fontSize: '0.9375rem', color: 'var(--color-navy)', fontWeight: 500, lineHeight: 1.6 }}>
              "AI should explain its prediction, not just provide it."
            </blockquote>
            <cite style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-primary)', fontWeight: 600, fontStyle: 'normal' }}>
              — e-Netra Core Design Principle
            </cite>
          </div>
        </div>

        {/* Right: visual comparison */}
        <div>
          <MockHeatmapVisualization />
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 900px) {
        .xai-layout { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        .xai-visual-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default ExplainableAISection;
