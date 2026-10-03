// src/components/home/ProductMockup.jsx
import { useState } from 'react';
import { ShieldCheck, Eye, Sparkles, CheckCircle2, Flame, Layers, Activity, FileText } from 'lucide-react';

const ProductMockup = () => {
  const [showHeatmap, setShowHeatmap] = useState(true);

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Background glow beneath mockup */}
      <div
        style={{
          position: 'absolute',
          inset: '-20px',
          borderRadius: '2.5rem',
          background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.18) 0%, rgba(14, 47, 118, 0.05) 50%, transparent 70%)',
          filter: 'blur(30px)',
          zIndex: 0,
        }}
      />

      {/* Floating Card 1: AI Analysis */}
      <div
        className="glass-panel animate-float-slow"
        style={{
          position: 'absolute',
          top: '-1.5rem',
          left: '-1rem',
          zIndex: 10,
          padding: '0.875rem 1.25rem',
          borderRadius: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          boxShadow: '0 12px 30px rgba(14, 47, 118, 0.12)',
        }}
      >
        <div
          style={{
            width: '2.25rem',
            height: '2.25rem',
            borderRadius: '0.625rem',
            backgroundColor: '#E0EBF8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Sparkles style={{ width: '1.25rem', height: '1.25rem', color: '#0E2F76' }} />
        </div>
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            System Status
          </div>
          <div style={{ fontSize: '0.9375rem', fontWeight: 800, color: '#0E2F76', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
            AI Analysis Active
          </div>
        </div>
      </div>

      {/* Floating Card 2: Severity */}
      <div
        className="glass-panel animate-float-reverse"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '-2rem',
          zIndex: 10,
          padding: '0.875rem 1.25rem',
          borderRadius: '1.25rem',
          boxShadow: '0 12px 30px rgba(14, 47, 118, 0.12)',
        }}
      >
        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
          Retinal Classification
        </div>
        <div style={{ fontSize: '0.9375rem', fontWeight: 800, color: '#F59E0B', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ padding: '0.2rem 0.5rem', borderRadius: '0.5rem', backgroundColor: 'rgba(245, 158, 11, 0.15)', border: '1px solid #F59E0B' }}>
            Grade 2: Moderate NPDR
          </span>
        </div>
      </div>

      {/* Floating Card 3: Confidence */}
      <div
        className="glass-panel animate-float-slow"
        style={{
          position: 'absolute',
          top: '3rem',
          right: '-1.5rem',
          zIndex: 10,
          padding: '0.875rem 1.25rem',
          borderRadius: '1.25rem',
          boxShadow: '0 12px 30px rgba(14, 47, 118, 0.12)',
        }}
      >
        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Model Certainty
        </div>
        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0E2F76', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          Confidence 94.2%
          <CheckCircle2 style={{ width: '1rem', height: '1rem', color: '#10B981' }} />
        </div>
      </div>

      {/* Floating Card 4: Explainable Result */}
      <div
        className="glass-panel animate-float-reverse"
        style={{
          position: 'absolute',
          bottom: '-1rem',
          right: '1rem',
          zIndex: 10,
          padding: '0.875rem 1.25rem',
          borderRadius: '1.25rem',
          boxShadow: '0 12px 30px rgba(14, 47, 118, 0.12)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}
      >
        <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'rgba(239, 68, 68, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Flame style={{ width: '1.125rem', height: '1.125rem', color: '#EF4444' }} />
        </div>
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B' }}>Explainable Result</div>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0E2F76' }}>Grad-CAM Heatmap Ready</div>
        </div>
      </div>

      {/* Main Browser Mockup Window */}
      <div
        className="drishti-product-container"
        style={{ position: 'relative', zIndex: 1, backgroundColor: '#FFFFFF' }}
      >
        {/* Browser Top Bar */}
        <div
          style={{
            backgroundColor: '#0E2F76',
            padding: '0.75rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(170, 192, 225, 0.2)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
          </div>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '0.5rem',
              padding: '0.25rem 1rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#AAC0E1',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <ShieldCheck style={{ width: '0.875rem', height: '0.875rem', color: '#38BDF8' }} />
            https://drishti.health.gov.in/screening/preview-8849
          </div>

          <div style={{ fontSize: '0.75rem', color: '#AAC0E1', fontWeight: 600 }}>
            Drishti v2.4 • XAI Engine
          </div>
        </div>

        {/* Dashboard Interface Preview Body */}
        <div style={{ padding: '1.5rem', backgroundColor: '#F5FEFF' }}>
          {/* Header Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.25rem',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0E2F76', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Retinal Screening Case #PAT-8849
                </span>
                <span style={{ backgroundColor: '#E0EBF8', color: '#0E2F76', fontSize: '0.7rem', fontWeight: 700, padding: '0.1rem 0.5rem', borderRadius: '0.375rem' }}>
                  Validated Scan
                </span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0A192F', margin: '0.2rem 0 0 0' }}>
                Diabetic Retinopathy Explainable AI Evaluation
              </h3>
            </div>

            {/* Heatmap Toggle Button */}
            <button
              onClick={() => setShowHeatmap(!showHeatmap)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: showHeatmap ? '#0E2F76' : '#FFFFFF',
                color: showHeatmap ? '#FFFFFF' : '#0E2F76',
                border: '1.5px solid #0E2F76',
                padding: '0.5rem 1rem',
                borderRadius: '0.625rem',
                fontSize: '0.8125rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Flame style={{ width: '1rem', height: '1rem', color: showHeatmap ? '#F59E0B' : '#0E2F76' }} />
              {showHeatmap ? 'Grad-CAM Heatmap Overlay On' : 'Show Original Fundus Scan'}
            </button>
          </div>

          {/* Main Visual Content Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {/* Fundus Image Viewer Box */}
            <div
              style={{
                backgroundColor: '#0A192F',
                borderRadius: '1.25rem',
                padding: '1rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '260px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '240px',
                  borderRadius: '0.875rem',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'radial-gradient(circle at 50% 50%, #1e3a8a 0%, #0f172a 100%)',
                }}
              >
                {/* Simulated Retinal Fundus SVG Visual */}
                <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" style={{ position: 'absolute', inset: 0 }}>
                  {/* Outer eye sphere */}
                  <circle cx="200" cy="120" r="100" fill="#991B1B" opacity="0.85" />
                  <circle cx="200" cy="120" r="92" fill="#7F1D1D" opacity="0.9" />
                  
                  {/* Optic Disc (bright circle) */}
                  <circle cx="260" cy="120" r="22" fill="#FEF08A" opacity="0.9" />
                  <circle cx="260" cy="120" r="14" fill="#FEF9C3" opacity="0.95" />

                  {/* Macula (dark central spot) */}
                  <circle cx="160" cy="120" r="18" fill="#450A0A" opacity="0.9" />

                  {/* Blood Vessel Branches */}
                  <path d="M260 120 C240 90, 200 70, 140 60" stroke="#450A0A" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <path d="M260 120 C240 150, 200 170, 130 180" stroke="#450A0A" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <path d="M260 120 C280 80, 310 65, 340 60" stroke="#450A0A" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M260 120 C280 160, 310 175, 335 185" stroke="#450A0A" strokeWidth="3" fill="none" strokeLinecap="round" />

                  {/* Microaneurysm Dots */}
                  <circle cx="185" cy="95" r="3.5" fill="#EF4444" />
                  <circle cx="195" cy="145" r="3" fill="#EF4444" />
                  <circle cx="140" cy="105" r="4" fill="#EF4444" />
                  <circle cx="220" cy="80" r="3" fill="#EF4444" />
                </svg>

                {/* Simulated Grad-CAM Heatmap Layer */}
                {showHeatmap && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(circle at 45% 42%, rgba(239, 68, 68, 0.75) 0%, rgba(245, 158, 11, 0.5) 35%, rgba(37, 99, 235, 0.1) 65%, transparent 80%)',
                      mixBlendMode: 'screen',
                      pointerEvents: 'none',
                    }}
                  />
                )}
              </div>

              <div style={{ marginTop: '0.625rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', fontSize: '0.75rem', color: '#AAC0E1' }}>
                <span>Scan Resolution: 2048x1536</span>
                <span style={{ color: showHeatmap ? '#F59E0B' : '#AAC0E1', fontWeight: 600 }}>
                  {showHeatmap ? '🔥 Grad-CAM Heatmap Active' : 'Original Retina Image'}
                </span>
              </div>
            </div>

            {/* Analysis Metrics & Explainability Summary */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Patient Info Card */}
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '1rem', padding: '1rem', border: '1px solid rgba(170, 192, 225, 0.4)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Patient Summary
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.8125rem' }}>
                  <div><strong style={{ color: '#0E2F76' }}>Name:</strong> Ramesh Kumar</div>
                  <div><strong style={{ color: '#0E2F76' }}>Age/Gender:</strong> 54 Yrs / Male</div>
                  <div><strong style={{ color: '#0E2F76' }}>Center:</strong> Sitapur District PHC</div>
                  <div><strong style={{ color: '#0E2F76' }}>Triage:</strong> Priority Review</div>
                </div>
              </div>

              {/* Diagnosis & Confidence Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div style={{ backgroundColor: '#FFFBEB', borderRadius: '0.875rem', padding: '0.875rem', border: '1px solid #FCD34D' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#92400E', textTransform: 'uppercase' }}>
                    Predicted Grade
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#B45309', marginTop: '0.2rem' }}>
                    Grade 2 (Moderate)
                  </div>
                </div>

                <div style={{ backgroundColor: '#F0FDF4', borderRadius: '0.875rem', padding: '0.875rem', border: '1px solid #86EFAC' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#166534', textTransform: 'uppercase' }}>
                    AI Confidence
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#15803D', marginTop: '0.2rem' }}>
                    94.2% Certainty
                  </div>
                </div>
              </div>

              {/* Explainability Feature Rationale */}
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '1rem', padding: '1rem', border: '1px solid rgba(170, 192, 225, 0.4)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0E2F76', textTransform: 'uppercase', marginBottom: '0.375rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <Layers style={{ width: '0.875rem', height: '0.875rem', color: '#2563EB' }} />
                  Detected Retinal Features
                </div>
                <p style={{ fontSize: '0.8125rem', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                  Model attention is focused on microaneurysms near the temporal macula quadrant and localized hard exudates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMockup;
