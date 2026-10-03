// src/components/common/ProcessStep.jsx
import { Camera, ShieldCheck, Cpu, Flame, ArrowRightLeft } from 'lucide-react';

export const STEPS_DATA = [
  {
    num: '01',
    title: 'Capture',
    subtitle: 'Fundus Imaging',
    desc: 'Retinal image captured using a smartphone-adapted or standalone fundus camera.',
    icon: Camera,
    accent: '#0E2F76',
  },
  {
    num: '02',
    title: 'Image Quality Check',
    subtitle: 'Automated Validation',
    desc: 'The system validates focus, illumination, and macula centering before AI analysis.',
    icon: ShieldCheck,
    accent: '#2563EB',
  },
  {
    num: '03',
    title: 'AI Analysis',
    subtitle: 'Feature Extraction',
    desc: 'Deep learning models analyze retinal patterns and detect diabetic retinopathy indicators.',
    icon: Cpu,
    accent: '#1D4ED8',
  },
  {
    num: '04',
    title: 'Explainable Result',
    subtitle: 'Grad-CAM Heatmap',
    desc: 'Produces prediction grade, confidence score, and visual attention map.',
    icon: Flame,
    accent: '#F59E0B',
  },
  {
    num: '05',
    title: 'Clinical Triage',
    subtitle: 'Decision Support',
    desc: 'Supports healthcare workers and doctors in deciding appropriate clinical follow-up.',
    icon: ArrowRightLeft,
    accent: '#10B981',
  },
];

const ProcessStep = () => {
  return (
    <div style={{ padding: '2rem 0' }}>
      {/* Grid of 5 steps */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          position: 'relative',
        }}
      >
        {STEPS_DATA.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="drishti-card"
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem 1.25rem',
              }}
            >
              {/* Step Number Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                }}
              >
                <span
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 900,
                    color: step.accent,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </span>

                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '0.75rem',
                    backgroundColor: 'rgba(170, 192, 225, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon style={{ width: '1.25rem', height: '1.25rem', color: step.accent }} />
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0E2F76', margin: '0 0 0.25rem 0' }}>
                  {step.title}
                </h3>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>
                  {step.subtitle}
                </div>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessStep;
