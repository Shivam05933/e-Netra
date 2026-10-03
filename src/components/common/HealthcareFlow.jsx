// src/components/common/HealthcareFlow.jsx
import { User, Camera, Cpu, Flame, Stethoscope, Building2, Landmark, ArrowRight, CheckCircle2 } from 'lucide-react';

const ECOSYSTEM_ENTITIES = [
  { label: 'Patient', role: 'Rural Screening Access', icon: User, color: '#0E2F76' },
  { label: 'Healthcare Worker', role: 'ASHA / Field Operator', icon: Stethoscope, color: '#2563EB' },
  { label: 'Drishti Engine', role: 'Explainable AI Center', icon: Cpu, color: '#1D4ED8', isCore: true },
  { label: 'Doctor / Specialist', role: 'Ophthalmologist Approval', icon: Stethoscope, color: '#0E2F76' },
  { label: 'District Hospital', role: 'Tertiary Referral Center', icon: Building2, color: '#10B981' },
  { label: 'Government Health Program', role: 'ABDM & State Health Audit', icon: Landmark, color: '#8B5CF6' },
];

const FLOW_STEPS = [
  { step: '1', title: 'Patient', desc: 'Attends community screening camp' },
  { step: '2', title: 'Retinal Screening', desc: 'Fundus image captured on mobile device' },
  { step: '3', title: 'AI Analysis', desc: 'Drishti evaluates DR indicators' },
  { step: '4', title: 'Explainable Result', desc: 'Grad-CAM heatmap generated' },
  { step: '5', title: 'Healthcare Worker', desc: 'Reviews result & initiates triage' },
  { step: '6', title: 'Doctor / Referral', desc: 'Ophthalmologist validates case' },
  { step: '7', title: 'District Triage', desc: 'Priority treatment & follow-up' },
];

const HealthcareFlow = () => {
  return (
    <div style={{ padding: '2rem 0' }}>
      {/* Ecosystem Hub Visual */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '2rem',
          padding: '2.5rem 1.5rem',
          border: '1px solid rgba(170, 192, 225, 0.4)',
          boxShadow: '0 20px 40px -10px rgba(14, 47, 118, 0.08)',
          marginBottom: '3rem',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="drishti-badge" style={{ marginBottom: '0.5rem' }}>
            Connected Care Ecosystem
          </span>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0E2F76', margin: 0 }}>
            Drishti Healthcare Coordination Architecture
          </h3>
        </div>

        {/* Entities Network Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.25rem',
            position: 'relative',
          }}
        >
          {ECOSYSTEM_ENTITIES.map((entity) => {
            const Icon = entity.icon;
            return (
              <div
                key={entity.label}
                style={{
                  backgroundColor: entity.isCore ? '#0E2F76' : '#F5FEFF',
                  color: entity.isCore ? '#FFFFFF' : '#0E2F76',
                  borderRadius: '1.25rem',
                  padding: '1.5rem 1rem',
                  textAlign: 'center',
                  border: `1.5px solid ${entity.isCore ? '#0E2F76' : 'rgba(170, 192, 225, 0.5)'}`,
                  boxShadow: entity.isCore ? '0 12px 28px rgba(14, 47, 118, 0.25)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  transition: 'transform 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    backgroundColor: entity.isCore ? 'rgba(255,255,255,0.15)' : '#E0EBF8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon style={{ width: '1.5rem', height: '1.5rem', color: entity.isCore ? '#38BDF8' : entity.color }} />
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 800 }}>{entity.label}</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '0.15rem' }}>{entity.role}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Linear Triage Flow Diagram */}
      <div
        style={{
          backgroundColor: '#F5FEFF',
          borderRadius: '2rem',
          padding: '2.5rem 1.5rem',
          border: '1px solid rgba(170, 192, 225, 0.4)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0E2F76', margin: 0 }}>
            Sequential District Triage Workflow
          </h4>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem', alignItems: 'center' }}>
          {FLOW_STEPS.map((s, i) => (
            <div
              key={s.step}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '1rem',
                padding: '1rem 0.75rem',
                textAlign: 'center',
                border: '1px solid rgba(170, 192, 225, 0.4)',
                boxShadow: '0 4px 12px rgba(14, 47, 118, 0.04)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  borderRadius: '50%',
                  backgroundColor: '#0E2F76',
                  color: '#FFFFFF',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.5rem auto',
                }}
              >
                {s.step}
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#0E2F76', lineHeight: 1.2 }}>
                {s.title}
              </div>
              <div style={{ fontSize: '0.7rem', color: '#64748B', marginTop: '0.25rem', lineHeight: 1.3 }}>
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthcareFlow;
