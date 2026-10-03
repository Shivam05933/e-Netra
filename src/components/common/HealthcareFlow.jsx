// src/components/common/HealthcareFlow.jsx
import { User, Cpu, Stethoscope, Building2, Landmark } from 'lucide-react';

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
    <div className="w-full py-4 md:py-8 overflow-hidden">
      {/* Ecosystem Hub Visual */}
      <div
        className="w-full bg-white rounded-3xl p-4 sm:p-6 md:p-10 border border-[#AAC0E1]/40 overflow-hidden"
        style={{
          boxShadow: '0 20px 40px -10px rgba(14, 47, 118, 0.08)',
        }}
      >
        <div className="text-center mb-6 sm:mb-8 md:mb-10 px-2">
          <span className="drishti-badge mb-2 inline-block">
            Connected Care Ecosystem
          </span>
          <h3 className="font-extrabold text-[#0E2F76] m-0 text-xl sm:text-2xl md:text-3xl leading-snug break-words">
            Drishti Healthcare Coordination Architecture
          </h3>
        </div>

        {/* Entities Network Grid - Responsive layout: 1 col on mobile, 2 cols on sm, 3 cols on lg, 6 cols on xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 w-full">
          {ECOSYSTEM_ENTITIES.map((entity) => {
            const Icon = entity.icon;
            return (
              <div
                key={entity.label}
                className="w-full rounded-2xl p-4 text-center border flex flex-col items-center justify-center gap-3 transition-transform duration-200"
                style={{
                  backgroundColor: entity.isCore ? '#0E2F76' : '#F5FEFF',
                  color: entity.isCore ? '#FFFFFF' : '#0E2F76',
                  borderColor: entity.isCore ? '#0E2F76' : 'rgba(170, 192, 225, 0.5)',
                  boxShadow: entity.isCore ? '0 12px 28px rgba(14, 47, 118, 0.25)' : 'none',
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: entity.isCore ? 'rgba(255,255,255,0.15)' : '#E0EBF8',
                  }}
                >
                  <Icon style={{ width: '1.5rem', height: '1.5rem', color: entity.isCore ? '#38BDF8' : entity.color }} />
                </div>
                <div className="w-full">
                  <div className="font-extrabold text-base leading-tight break-words">{entity.label}</div>
                  <div className="text-xs opacity-80 mt-1 leading-snug break-words">{entity.role}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Linear Triage Flow Diagram */}
      <div className="w-full bg-[#F5FEFF] rounded-3xl p-4 sm:p-6 md:p-10 border border-[#AAC0E1]/40 overflow-hidden">
        <div className="text-center mb-6 px-2">
          <h4 className="font-extrabold text-[#0E2F76] m-0 text-lg sm:text-xl md:text-2xl leading-snug break-words">
            Sequential District Triage Workflow
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 w-full">
          {FLOW_STEPS.map((s) => (
            <div
              key={s.step}
              className="w-full bg-white rounded-2xl p-3 text-center border border-[#AAC0E1]/40 shadow-sm flex flex-col items-center justify-start"
            >
              <div
                className="w-6 h-6 rounded-full bg-[#0E2F76] text-white text-xs font-extrabold flex items-center justify-center mb-2 shrink-0"
              >
                {s.step}
              </div>
              <div className="font-extrabold text-sm text-[#0E2F76] leading-tight mb-1 w-full break-words">
                {s.title}
              </div>
              <div className="text-xs text-[#64748B] leading-snug w-full break-words">
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
