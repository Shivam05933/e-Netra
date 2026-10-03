// components/landing/RuralHealthcareSection.jsx

const RURAL_FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Healthcare Worker Assisted Screening',
    description: 'Trained healthcare workers can operate the screening workflow — no ophthalmologist required on-site for the initial screening step.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/>
        <path d="M8 2v16M16 6v16"/>
      </svg>
    ),
    title: 'Offline / Edge Screening Capability',
    description: 'The system is designed to function without continuous internet connectivity — critical for rural and remote healthcare settings.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Multilingual Interface & Reports',
    description: 'Patients and healthcare workers can interact with the system and receive screening information in their preferred regional language.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Low-Cost Retinal Imaging Support',
    description: 'Compatible with smartphone-based lens attachments and low-cost fundus cameras — reducing the hardware barrier for rural screening camps.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.77 12 19.79 19.79 0 0 1 1.71 3.47 2 2 0 0 1 3.7 1.31h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: 'Doctor Referral Pathway',
    description: 'Higher-grade screening results automatically trigger a referral pathway — connecting patients with specialist care when most needed.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Rural Camp Screening Workflow',
    description: 'Designed to support high-throughput screening camp settings where multiple patients are screened in sequence by a healthcare worker.',
  },
];

// Simple SVG rural healthcare illustration
const RuralIllustration = () => (
  <div style={{
    backgroundColor: 'white',
    border: '1px solid var(--color-border)',
    borderRadius: '1.5rem',
    padding: '2rem',
    boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
  }}>
    <svg viewBox="0 0 400 280" width="100%" xmlns="http://www.w3.org/2000/svg" aria-label="Rural healthcare screening workflow illustration" role="img">
      {/* Sky background */}
      <rect width="400" height="280" fill="#f0fdf4" rx="12"/>

      {/* Mountains / rural landscape */}
      <polygon points="0,200 80,120 160,180 0,180" fill="#d1fae5" opacity="0.7"/>
      <polygon points="100,200 200,100 300,160 100,180" fill="#a7f3d0" opacity="0.8"/>
      <polygon points="220,200 320,90 400,150 400,200" fill="#6ee7b7" opacity="0.6"/>

      {/* Ground */}
      <rect x="0" y="190" width="400" height="90" fill="#ecfdf5" rx="0"/>

      {/* Healthcare hut */}
      <rect x="30" y="145" width="90" height="60" fill="white" stroke="#0d9488" strokeWidth="2" rx="4"/>
      <polygon points="25,148 75,108 125,148" fill="#0d9488"/>
      {/* Cross */}
      <rect x="67" y="125" width="8" height="20" fill="white" rx="2"/>
      <rect x="61" y="131" width="20" height="8" fill="white" rx="2"/>
      {/* Door */}
      <rect x="64" y="165" width="18" height="25" fill="#0d9488" rx="2"/>
      {/* Window */}
      <rect x="42" y="155" width="16" height="14" fill="#bfdbfe" stroke="#0d9488" strokeWidth="1" rx="1"/>

      {/* Healthcare worker figure */}
      <circle cx="165" cy="155" r="12" fill="#fde68a" stroke="#d97706" strokeWidth="1.5"/>
      {/* Body */}
      <rect x="157" y="167" width="16" height="24" fill="#0d9488" rx="3"/>
      {/* Legs */}
      <rect x="158" y="189" width="6" height="14" fill="#1e293b" rx="2"/>
      <rect x="168" y="189" width="6" height="14" fill="#1e293b" rx="2"/>
      {/* Tablet/device */}
      <rect x="174" y="172" width="14" height="10" fill="white" stroke="#64748b" strokeWidth="1" rx="1"/>
      <rect x="176" y="174" width="10" height="6" fill="#bfdbfe" rx="0.5"/>
      {/* Healthcare cross on shirt */}
      <rect x="163" y="171" width="4" height="10" fill="white" rx="1"/>
      <rect x="160" y="174" width="10" height="4" fill="white" rx="1"/>

      {/* Patient figure */}
      <circle cx="205" cy="160" r="10" fill="#fde68a" stroke="#d97706" strokeWidth="1.5"/>
      <rect x="198" y="170" width="14" height="22" fill="#7c3aed" rx="3"/>
      <rect x="199" y="190" width="5" height="12" fill="#1e293b" rx="2"/>
      <rect x="208" y="190" width="5" height="12" fill="#1e293b" rx="2"/>

      {/* Eye scanning beam */}
      <line x1="205" y1="160" x2="185" y2="152" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6"/>
      <ellipse cx="180" cy="152" rx="6" ry="4" fill="none" stroke="#0d9488" strokeWidth="1.5" opacity="0.7"/>
      <circle cx="180" cy="152" r="2" fill="#0d9488" opacity="0.5"/>

      {/* Data/signal lines to cloud */}
      <path d="M180 145 Q230 80 320 90" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="5 3" fill="none" opacity="0.5"/>

      {/* Cloud / AI server */}
      <ellipse cx="320" cy="80" rx="35" ry="20" fill="white" stroke="#0d9488" strokeWidth="1.5"/>
      <ellipse cx="298" cy="88" rx="20" ry="14" fill="white" stroke="#0d9488" strokeWidth="1.5"/>
      <ellipse cx="342" cy="88" rx="20" ry="14" fill="white" stroke="#0d9488" strokeWidth="1.5"/>
      {/* AI text */}
      <text x="310" y="85" fontSize="10" fill="#0d9488" fontWeight="bold" fontFamily="sans-serif">AI</text>

      {/* Result arrow back */}
      <path d="M310 100 Q260 130 220 145" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrow)"/>
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#10b981"/>
        </marker>
      </defs>

      {/* Result card */}
      <rect x="225" y="145" width="90" height="40" fill="white" stroke="#10b981" strokeWidth="1.5" rx="6"/>
      <text x="235" y="160" fontSize="7" fill="#10b981" fontWeight="bold" fontFamily="sans-serif">AI Screening Result</text>
      <text x="235" y="172" fontSize="7" fill="#1e293b" fontFamily="sans-serif">Grade 1 — Mild DR</text>
      <text x="235" y="182" fontSize="6" fill="#64748b" fontFamily="sans-serif">Schedule follow-up</text>

      {/* Sun */}
      <circle cx="360" cy="40" r="18" fill="#fef9c3" stroke="#fde68a" strokeWidth="1.5"/>
      {[0,45,90,135,180,225,270,315].map((angle, i) => (
        <line
          key={i}
          x1={360 + Math.cos(angle * Math.PI / 180) * 22}
          y1={40 + Math.sin(angle * Math.PI / 180) * 22}
          x2={360 + Math.cos(angle * Math.PI / 180) * 26}
          y2={40 + Math.sin(angle * Math.PI / 180) * 26}
          stroke="#fde68a"
          strokeWidth="2"
        />
      ))}

      {/* Trees */}
      <polygon points="350,180 365,145 380,180" fill="#10b981" opacity="0.7"/>
      <rect x="361" y="180" width="8" height="12" fill="#78350f" rx="1"/>
      <polygon points="330,185 342,158 354,185" fill="#22c55e" opacity="0.8"/>
      <rect x="338" y="185" width="7" height="10" fill="#78350f" rx="1"/>
    </svg>

    <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.75rem', fontStyle: 'italic', margin: '0.75rem 0 0' }}>
      Illustrative rural screening workflow
    </p>
  </div>
);

const RuralHealthcareSection = () => (
  <section className="section-alt" aria-labelledby="rural-heading">
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span className="section-label">Rural India Focus</span>
        <h2 className="heading-2" id="rural-heading" style={{ marginBottom: '1rem' }}>
          Built for <span className="text-teal">Rural Healthcare</span> Realities
        </h2>
        <p className="text-body-lg" style={{ maxWidth: '580px', margin: '0 auto' }}>
          e-Netra is specifically designed around the constraints and needs of rural Indian healthcare — where connectivity, specialist availability, and hardware access are limited.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="rural-layout">
        {/* Left: feature list */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="rural-features-grid">
          {RURAL_FEATURES.map((f, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'white',
                border: '1px solid var(--color-border)',
                borderRadius: '0.875rem',
                padding: '1.125rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.625rem',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(13,148,136,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{
                width: '2.25rem', height: '2.25rem',
                borderRadius: '0.5rem',
                backgroundColor: 'var(--color-primary-50)',
                border: '1px solid var(--color-primary-100)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--color-primary)',
                flexShrink: 0,
              }} aria-hidden="true">
                {f.icon}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-navy)', margin: 0, lineHeight: 1.3 }}>
                {f.title}
              </h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.6 }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right: illustration */}
        <div>
          <RuralIllustration />
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 900px) {
        .rural-layout { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
      }
      @media (max-width: 640px) {
        .rural-features-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default RuralHealthcareSection;
