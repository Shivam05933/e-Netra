// components/landing/FeaturesSection.jsx

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
    title: 'Image Quality & Enhancement Engine',
    description: 'Automated image quality assessment detects blur, low contrast, and improper illumination in fundus images — then applies enhancement for improved AI input quality.',
    badge: 'OpenCV-based',
    points: ['Blur detection', 'Contrast enhancement', 'Quality scoring', 'Low-cost lens support'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: '5-Stage Severity Classifier',
    description: 'The AI model screens for five diabetic retinopathy severity levels — from No DR (Grade 0) to Proliferative DR (Grade 4) — assisting healthcare workers in triage decisions.',
    badge: 'Deep Learning',
    grades: [
      { g: 0, label: 'No DR', color: '#10b981' },
      { g: 1, label: 'Mild', color: '#84cc16' },
      { g: 2, label: 'Moderate', color: '#f59e0b' },
      { g: 3, label: 'Severe', color: '#f97316' },
      { g: 4, label: 'Proliferative', color: '#ef4444' },
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Explainable AI Visualizer',
    description: 'Grad-CAM-style heatmaps visually highlight which regions of the retinal image most influenced the model\'s classification — helping clinicians understand and validate the result.',
    badge: 'Grad-CAM XAI',
    points: ['Visual heatmap overlay', 'Region-level explanation', 'Clinical confidence support', 'Clinician-readable output'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/>
        <path d="M8 2v16M16 6v16"/>
      </svg>
    ),
    title: 'Offline / Edge Screening',
    description: 'Designed for deployment in connectivity-limited rural settings. The system concept includes local model inference and on-device storage for low-connectivity environments.',
    badge: 'ONNX + SQLite',
    points: ['Local model inference', 'On-device result storage', 'No internet required', 'Sync when connected'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Multilingual Screening Reports',
    description: 'Screening summaries and reports can be generated in regional Indian languages — making results accessible to patients and healthcare workers across linguistic contexts.',
    badge: 'Multilingual',
    languages: ['Hindi', 'Marathi', 'Tamil', 'Bengali', 'Telugu', 'English'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: 'Smart Emergency Triage',
    description: 'Higher-severity screening results (Grade 3 and Grade 4) are automatically flagged for priority clinical review and referral — supporting timely access to specialist care.',
    badge: 'Priority Routing',
    points: ['Auto-flagging of Grade 3–4', 'Priority queue for referral', 'Alert for healthcare worker', 'Referral pathway support'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.77 12 19.79 19.79 0 0 1 1.71 3.47 2 2 0 0 1 3.7 1.31h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: 'Doctor Referral Pathway',
    description: 'The platform is designed to connect patients with appropriate ophthalmologists when screening results suggest higher-severity diabetic retinopathy warranting professional evaluation.',
    badge: 'Referral Support',
    points: ['Grade-based referral trigger', 'Referral record generation', 'Healthcare worker coordination', 'Patient notification support'],
  },
];

const FeatureCard = ({ feature }) => (
  <article
    className="card"
    style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}
  >
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
      <div className="icon-circle" aria-hidden="true">
        <span style={{ color: 'var(--color-primary)' }}>{feature.icon}</span>
      </div>
      <span style={{
        fontSize: '0.6875rem',
        fontWeight: 600,
        color: 'var(--color-primary)',
        backgroundColor: 'var(--color-primary-50)',
        border: '1px solid var(--color-primary-100)',
        padding: '0.1875rem 0.5rem',
        borderRadius: '999px',
        letterSpacing: '0.04em',
        whiteSpace: 'nowrap',
        alignSelf: 'flex-start',
      }}>
        {feature.badge}
      </span>
    </div>

    <h3 className="heading-3" style={{ fontSize: '1rem', margin: 0 }}>
      {feature.title}
    </h3>

    <p className="text-body" style={{ fontSize: '0.875rem', lineHeight: 1.65, margin: 0, flex: 1 }}>
      {feature.description}
    </p>

    {/* Grades visual */}
    {feature.grades && (
      <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
        {feature.grades.map((g) => (
          <div
            key={g.g}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.3rem',
              backgroundColor: `${g.color}15`,
              border: `1px solid ${g.color}40`,
              borderRadius: '0.375rem',
              padding: '0.25rem 0.5rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: g.color,
            }}
          >
            <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: g.color, display: 'inline-block' }} aria-hidden="true"/>
            G{g.g} {g.label}
          </div>
        ))}
      </div>
    )}

    {/* Language chips */}
    {feature.languages && (
      <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
        {feature.languages.map((lang) => (
          <span
            key={lang}
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              backgroundColor: 'var(--color-surface-alt)',
              border: '1px solid var(--color-border)',
              borderRadius: '0.375rem',
              padding: '0.125rem 0.5rem',
              color: 'var(--color-text)',
            }}
          >
            {lang}
          </span>
        ))}
      </div>
    )}

    {/* Bullet points */}
    {feature.points && (
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
        {feature.points.map((pt, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {pt}
          </li>
        ))}
      </ul>
    )}
  </article>
);

const FeaturesSection = () => (
  <section id="features" className="section" aria-labelledby="features-heading">
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span className="section-label">Core Capabilities</span>
        <h2 className="heading-2" id="features-heading" style={{ marginBottom: '1rem' }}>
          Built for <span className="text-teal">Real-World Screening</span>
        </h2>
        <p className="text-body-lg" style={{ maxWidth: '560px', margin: '0 auto' }}>
          Every feature is designed to address the specific challenges of rural diabetic retinopathy screening — from image quality to multilingual reporting.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.25rem',
      }} className="features-grid">
        {FEATURES.map((f, i) => (
          <FeatureCard key={i} feature={f} />
        ))}
      </div>
    </div>

    <style>{`
      @media (max-width: 1024px) {
        .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
      }
      @media (max-width: 640px) {
        .features-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default FeaturesSection;
