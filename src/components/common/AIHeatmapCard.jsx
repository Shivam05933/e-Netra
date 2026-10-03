// src/components/common/AIHeatmapCard.jsx
import { useState } from 'react';
import { Eye, Flame, CheckCircle2, Layers, Sparkles, HelpCircle } from 'lucide-react';

const AIHeatmapCard = () => {
  const [activeMode, setActiveMode] = useState('split'); // 'split' | 'heatmap-only' | 'raw-only'

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Background radial aura */}
      <div
        style={{
          position: 'absolute',
          inset: '-10px',
          borderRadius: '2.5rem',
          background: 'radial-gradient(circle at center, rgba(239, 68, 68, 0.12) 0%, rgba(37, 99, 235, 0.08) 40%, transparent 70%)',
          filter: 'blur(25px)',
          zIndex: 0,
        }}
      />

      {/* Main Container Card */}
      <div
        className="drishti-product-container"
        style={{ position: 'relative', zIndex: 1, padding: '2rem', backgroundColor: '#FFFFFF' }}
      >
        {/* Header Bar with Mode Toggles */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="drishti-badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                Grad-CAM Visual Explanation Engine
              </span>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0E2F76', margin: '0.25rem 0 0 0' }}>
              Interpretability Comparison View
            </h3>
          </div>

          <div
            style={{
              display: 'flex',
              backgroundColor: '#F5FEFF',
              padding: '0.25rem',
              borderRadius: '0.75rem',
              border: '1px solid rgba(170, 192, 225, 0.4)',
            }}
          >
            <button
              onClick={() => setActiveMode('split')}
              style={{
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontSize: '0.8125rem',
                fontWeight: 700,
                cursor: 'pointer',
                backgroundColor: activeMode === 'split' ? '#0E2F76' : 'transparent',
                color: activeMode === 'split' ? '#FFFFFF' : '#475569',
                transition: 'all 0.2s ease',
              }}
            >
              Side-by-Side Comparison
            </button>
            <button
              onClick={() => setActiveMode('heatmap-only')}
              style={{
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontSize: '0.8125rem',
                fontWeight: 700,
                cursor: 'pointer',
                backgroundColor: activeMode === 'heatmap-only' ? '#0E2F76' : 'transparent',
                color: activeMode === 'heatmap-only' ? '#FFFFFF' : '#475569',
                transition: 'all 0.2s ease',
              }}
            >
              Heatmap Focus Only
            </button>
          </div>
        </div>

        {/* Split Screen Image Visual */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: activeMode === 'split' ? '1fr 1fr' : '1fr',
            gap: '1.5rem',
            marginBottom: '1.5rem',
          }}
        >
          {/* LEFT: Raw High-Quality Fundus Scan */}
          {(activeMode === 'split' || activeMode === 'raw-only') && (
            <div
              style={{
                backgroundColor: '#0A192F',
                borderRadius: '1.25rem',
                padding: '1.25rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <Eye style={{ width: '1rem', height: '1rem', color: '#38BDF8' }} />
                  Original Retinal Fundus Scan
                </span>
                <span style={{ fontSize: '0.7rem', color: '#AAC0E1', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.15rem 0.5rem', borderRadius: '0.375rem' }}>
                  Raw Input Image
                </span>
              </div>

              <div
                style={{
                  width: '100%',
                  height: '280px',
                  borderRadius: '0.875rem',
                  overflow: 'hidden',
                  position: 'relative',
                  background: 'radial-gradient(circle at 50% 50%, #7F1D1D 0%, #450A0A 60%, #0F172A 100%)',
                }}
              >
                <svg width="100%" height="100%" viewBox="0 0 400 280" fill="none">
                  <circle cx="200" cy="140" r="110" fill="#991B1B" opacity="0.9" />
                  <circle cx="270" cy="140" r="26" fill="#FEF08A" opacity="0.9" />
                  <circle cx="270" cy="140" r="16" fill="#FEF9C3" opacity="0.95" />
                  <circle cx="150" cy="140" r="20" fill="#450A0A" opacity="0.9" />
                  <path d="M270 140 C245 105, 200 80, 130 70" stroke="#450A0A" strokeWidth="4" fill="none" />
                  <path d="M270 140 C245 175, 200 200, 120 210" stroke="#450A0A" strokeWidth="4" fill="none" />
                  <circle cx="180" cy="110" r="4" fill="#EF4444" />
                  <circle cx="190" cy="165" r="3.5" fill="#EF4444" />
                  <circle cx="135" cy="120" r="4" fill="#EF4444" />
                </svg>
              </div>
            </div>
          )}

          {/* RIGHT: Grad-CAM Style Heatmap Overlay Visual */}
          {(activeMode === 'split' || activeMode === 'heatmap-only') && (
            <div
              style={{
                backgroundColor: '#0A192F',
                borderRadius: '1.25rem',
                padding: '1.25rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <Flame style={{ width: '1rem', height: '1rem', color: '#F59E0B' }} />
                  Grad-CAM Attention Heatmap
                </span>
                <span style={{ fontSize: '0.7rem', color: '#FCD34D', backgroundColor: 'rgba(245, 158, 11, 0.2)', border: '1px solid #F59E0B', padding: '0.15rem 0.5rem', borderRadius: '0.375rem', fontWeight: 700 }}>
                  XAI Highlight Active
                </span>
              </div>

              <div
                style={{
                  width: '100%',
                  height: '280px',
                  borderRadius: '0.875rem',
                  overflow: 'hidden',
                  position: 'relative',
                  background: 'radial-gradient(circle at 50% 50%, #7F1D1D 0%, #450A0A 60%, #0F172A 100%)',
                }}
              >
                {/* Base Fundus SVG */}
                <svg width="100%" height="100%" viewBox="0 0 400 280" fill="none">
                  <circle cx="200" cy="140" r="110" fill="#991B1B" opacity="0.9" />
                  <circle cx="270" cy="140" r="26" fill="#FEF08A" opacity="0.9" />
                  <circle cx="150" cy="140" r="20" fill="#450A0A" opacity="0.9" />
                  <path d="M270 140 C245 105, 200 80, 130 70" stroke="#450A0A" strokeWidth="4" fill="none" />
                  <path d="M270 140 C245 175, 200 200, 120 210" stroke="#450A0A" strokeWidth="4" fill="none" />
                </svg>

                {/* Red/Orange Glowing Heatmap Overlay Layer */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 44% 40%, rgba(239, 68, 68, 0.85) 0%, rgba(245, 158, 11, 0.6) 30%, rgba(250, 204, 21, 0.35) 50%, rgba(37, 99, 235, 0.1) 75%, transparent 90%)',
                    mixBlendMode: 'screen',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Floating Explanation Cards Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <div style={{ backgroundColor: '#F5FEFF', borderRadius: '1rem', padding: '1rem', border: '1px solid rgba(170, 192, 225, 0.4)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>
              Model Focus
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0E2F76', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              High Attention Region
            </div>
            <div style={{ fontSize: '0.75rem', color: '#475569', marginTop: '0.25rem' }}>
              Red zone indicates primary feature weight
            </div>
          </div>

          <div style={{ backgroundColor: '#FFFBEB', borderRadius: '1rem', padding: '1rem', border: '1px solid #FCD34D' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#92400E', textTransform: 'uppercase' }}>
              Prediction
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#B45309', marginTop: '0.25rem' }}>
              Moderate DR (Grade 2)
            </div>
            <div style={{ fontSize: '0.75rem', color: '#92400E', marginTop: '0.25rem' }}>
              Classified by ResNet/EfficientNet ensemble
            </div>
          </div>

          <div style={{ backgroundColor: '#F0FDF4', borderRadius: '1rem', padding: '1rem', border: '1px solid #86EFAC' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#166534', textTransform: 'uppercase' }}>
              Confidence
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#15803D', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              94.2% Score
              <CheckCircle2 style={{ width: '1rem', height: '1rem', color: '#10B981' }} />
            </div>
            <div style={{ fontSize: '0.75rem', color: '#166534', marginTop: '0.25rem' }}>
              High statistical certainty
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIHeatmapCard;
