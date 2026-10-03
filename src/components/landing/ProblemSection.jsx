// components/landing/ProblemSection.jsx

const PROBLEMS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Limited Access to Ophthalmologists',
    description: 'Rural India has a critical shortage of ophthalmologists. Large portions of the population have no access to specialist retinal screening services within reachable distance.',
    stat: '~1:100,000',
    statLabel: 'Ophthalmologist-to-rural-patient ratio',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Delayed Detection & Diagnosis',
    description: 'Diabetic retinopathy often progresses without noticeable symptoms until severe vision loss occurs. Late detection significantly reduces the chances of preserving vision.',
    stat: '80%',
    statLabel: 'Vision loss that could be prevented with early screening',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Manual Screening Workload',
    description: 'Traditional retinal screening relies on trained graders manually reviewing fundus images — a time-intensive process that limits throughput and scalability for large rural screening camps.',
    stat: 'Hours',
    statLabel: 'Per manual grading session at scale',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/>
      </svg>
    ),
    title: 'AI Without Explanation',
    description: 'Many AI screening tools provide a classification result without showing why the prediction was made. This limits clinical trust and makes it difficult for healthcare workers to understand or validate the result.',
    stat: '"Black-box"',
    statLabel: 'AI predictions reduce clinical confidence',
  },
];

const ProblemSection = () => (
  <section id="about" className="section" aria-labelledby="problem-heading">
    <div className="container">
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span className="section-label">The Challenge</span>
        <h2 className="heading-2" id="problem-heading" style={{ marginBottom: '1rem' }}>
          Bringing Eye Screening Closer to<br />
          <span className="text-teal">Rural Communities</span>
        </h2>
        <p className="text-body-lg" style={{ maxWidth: '580px', margin: '0 auto' }}>
          Diabetic retinopathy is a leading cause of preventable blindness. The combination of limited specialist access, late detection, and opaque AI tools creates a critical gap in rural healthcare delivery.
        </p>
      </div>

      {/* Problem cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.5rem',
      }} className="problem-grid">
        {PROBLEMS.map((problem, i) => (
          <article
            key={i}
            className="card"
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div className="icon-circle" aria-hidden="true" style={{ backgroundColor: 'var(--color-primary-50)' }}>
                <span style={{ color: 'var(--color-primary)' }}>{problem.icon}</span>
              </div>
              <div>
                <h3 className="heading-3" style={{ marginBottom: '0.375rem', fontSize: '1rem' }}>
                  {problem.title}
                </h3>
                <p className="text-body" style={{ fontSize: '0.875rem', lineHeight: 1.65 }}>
                  {problem.description}
                </p>
              </div>
            </div>

            {/* Stat highlight */}
            <div style={{
              marginTop: 'auto',
              backgroundColor: 'var(--color-primary-50)',
              borderRadius: '0.625rem',
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              borderLeft: '3px solid var(--color-primary)',
            }}>
              <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--color-primary)', whiteSpace: 'nowrap' }}>
                {problem.stat}
              </span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                {problem.statLabel}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>

    <style>{`
      @media (max-width: 768px) {
        .problem-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default ProblemSection;
