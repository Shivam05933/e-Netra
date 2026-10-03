// src/components/common/PipelineDiagram.jsx
import { ArrowDown, CheckCircle2, Eye, ShieldCheck, Sliders, Cpu, BarChart3, Flame, FileCheck } from 'lucide-react';

const PIPELINE_NODES = [
  { label: 'Fundus Image', desc: 'Retinal Input Scan', icon: Eye, color: '#0E2F76' },
  { label: 'Image Validation', desc: 'Quality & Blur Filter', icon: ShieldCheck, color: '#2563EB' },
  { label: 'Preprocessing', desc: 'Contrast & Normalization', icon: Sliders, color: '#1D4ED8' },
  { label: 'AI Model', desc: 'ResNet / EfficientNet Backbone', icon: Cpu, color: '#0E2F76' },
  { label: 'Severity Classification', desc: 'Grade 0 to Grade 4', icon: BarChart3, color: '#F59E0B' },
  { label: 'Explainability', desc: 'Grad-CAM Heatmap Generation', icon: Flame, color: '#EF4444' },
  { label: 'Screening Result', desc: 'Report & District Referral', icon: FileCheck, color: '#10B981' },
];

const PipelineDiagram = () => {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '1.75rem',
        padding: '2.5rem 1.5rem',
        border: '1px solid rgba(170, 192, 225, 0.4)',
        boxShadow: '0 20px 40px -10px rgba(14, 47, 118, 0.08)',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="drishti-badge" style={{ marginBottom: '0.5rem' }}>
          End-to-End Technical Pipeline
        </span>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0E2F76', margin: 0 }}>
          Drishti Architecture Flow
        </h3>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
          maxWidth: '560px',
          margin: '0 auto',
        }}
      >
        {PIPELINE_NODES.map((node, index) => {
          const Icon = node.icon;
          const isLast = index === PIPELINE_NODES.length - 1;
          return (
            <div key={node.label} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  width: '100%',
                  padding: '1.125rem 1.5rem',
                  borderRadius: '1.25rem',
                  backgroundColor: isLast ? 'rgba(16, 185, 129, 0.06)' : '#F5FEFF',
                  border: `1.5px solid ${isLast ? '#10B981' : 'rgba(170, 192, 225, 0.5)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 12px rgba(14, 47, 118, 0.03)',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '0.75rem',
                      backgroundColor: node.color + '15',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon style={{ width: '1.25rem', height: '1.25rem', color: node.color }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0E2F76' }}>
                      {node.label}
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                      {node.desc}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: node.color,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    padding: '0.25rem 0.625rem',
                    borderRadius: '0.5rem',
                    border: `1px solid ${node.color}30`,
                  }}
                >
                  Step 0{index + 1}
                </div>
              </div>

              {!isLast && (
                <div style={{ padding: '0.375rem 0', color: '#AAC0E1' }}>
                  <ArrowDown style={{ width: '1.25rem', height: '1.25rem', color: '#2563EB' }} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PipelineDiagram;
