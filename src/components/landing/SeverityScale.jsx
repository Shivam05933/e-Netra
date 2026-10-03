// components/landing/SeverityScale.jsx

const GRADES = [
  {
    grade: 0,
    name: 'No DR',
    fullName: 'No Diabetic Retinopathy',
    color: '#10b981',
    bgColor: '#ecfdf5',
    borderColor: '#a7f3d0',
    description: 'No signs of diabetic retinopathy detected in the retinal image. Regular annual screening is still recommended for patients with diabetes.',
    action: 'Continue regular monitoring',
    icon: '✓',
    priority: 'Routine',
  },
  {
    grade: 1,
    name: 'Mild',
    fullName: 'Mild NPDR',
    color: '#84cc16',
    bgColor: '#f7fee7',
    borderColor: '#bef264',
    description: 'Mild non-proliferative diabetic retinopathy. Small microaneurysms may be present. Increased monitoring frequency recommended.',
    action: 'Schedule follow-up screening',
    icon: '↑',
    priority: 'Routine+',
  },
  {
    grade: 2,
    name: 'Moderate',
    fullName: 'Moderate NPDR',
    color: '#f59e0b',
    bgColor: '#fffbeb',
    borderColor: '#fde68a',
    description: 'Moderate non-proliferative diabetic retinopathy. Multiple retinal changes visible. Referral for ophthalmologist review recommended.',
    action: 'Refer for specialist review',
    icon: '!',
    priority: 'Refer',
  },
  {
    grade: 3,
    name: 'Severe',
    fullName: 'Severe NPDR',
    color: '#f97316',
    bgColor: '#fff7ed',
    borderColor: '#fed7aa',
    description: 'Severe non-proliferative diabetic retinopathy. Significant retinal changes. Priority referral to ophthalmologist strongly recommended.',
    action: 'Priority referral required',
    icon: '!!',
    priority: 'Priority',
  },
  {
    grade: 4,
    name: 'Proliferative',
    fullName: 'Proliferative DR',
    color: '#ef4444',
    bgColor: '#fef2f2',
    borderColor: '#fecaca',
    description: 'Proliferative diabetic retinopathy. New blood vessel growth (neovascularisation) detected. Urgent ophthalmologist referral required.',
    action: 'Urgent specialist referral',
    icon: '!!!',
    priority: 'Urgent',
  },
];

const SeverityScale = () => (
  <section className="section" aria-labelledby="severity-heading">
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span className="section-label">Classification Scale</span>
        <h2 className="heading-2" id="severity-heading" style={{ marginBottom: '1rem' }}>
          Grade 0–4 Severity <span className="text-teal">Classification Scale</span>
        </h2>
        <p className="text-body-lg" style={{ maxWidth: '580px', margin: '0 auto' }}>
          The AI system screens for five severity levels of diabetic retinopathy. These grades assist healthcare workers in understanding screening results and determining appropriate next steps.
        </p>
      </div>

      {/* Visual severity bar */}
      <div style={{
        display: 'flex',
        borderRadius: '0.75rem',
        overflow: 'hidden',
        marginBottom: '2.5rem',
        height: '1rem',
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
      }} aria-hidden="true">
        {GRADES.map((g) => (
          <div
            key={g.grade}
            style={{
              flex: 1,
              backgroundColor: g.color,
              transition: 'transform 0.2s',
            }}
          />
        ))}
      </div>

      {/* Grade labels under bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '3rem',
        paddingBottom: '0.5rem',
      }} aria-hidden="true">
        {GRADES.map((g) => (
          <div key={g.grade} style={{ flex: 1, textAlign: 'center', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
            Grade {g.grade}
          </div>
        ))}
      </div>

      {/* Grade cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '1rem',
      }} className="severity-grid" role="list" aria-label="Diabetic retinopathy severity grades">
        {GRADES.map((g) => (
          <article
            key={g.grade}
            role="listitem"
            style={{
              backgroundColor: g.bgColor,
              border: `2px solid ${g.borderColor}`,
              borderRadius: '1rem',
              padding: '1.25rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.625rem',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 8px 24px ${g.color}30`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            {/* Grade number + indicator */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{
                width: '2.5rem', height: '2.5rem',
                borderRadius: '50%',
                backgroundColor: g.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white',
                fontWeight: 800,
                fontSize: '1.125rem',
              }} aria-hidden="true">
                {g.grade}
              </div>
              <span style={{
                fontSize: '0.5625rem',
                fontWeight: 700,
                backgroundColor: g.color,
                color: 'white',
                padding: '0.125rem 0.5rem',
                borderRadius: '999px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}>
                {g.priority}
              </span>
            </div>

            {/* Name */}
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: g.color }}>
                {g.name}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                {g.fullName}
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text)', lineHeight: 1.6, margin: 0 }}>
              {g.description}
            </p>

            {/* Recommended action */}
            <div style={{
              marginTop: 'auto',
              backgroundColor: 'white',
              border: `1px solid ${g.borderColor}`,
              borderRadius: '0.5rem',
              padding: '0.5rem 0.625rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: g.color,
              display: 'flex', alignItems: 'center', gap: '0.375rem',
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              {g.action}
            </div>
          </article>
        ))}
      </div>

      {/* Disclaimer */}
      <div style={{
        marginTop: '2.5rem',
        backgroundColor: '#f8fafc',
        border: '1px solid var(--color-border)',
        borderRadius: '0.875rem',
        padding: '1.25rem 1.5rem',
        display: 'flex', alignItems: 'flex-start', gap: '0.875rem',
      }} role="note">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" style={{ flexShrink: 0, marginTop: '0.1rem' }} aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
          <strong style={{ color: 'var(--color-navy)' }}>Important:</strong> These grades represent AI-assisted screening classifications, not a medical diagnosis. Grades 2, 3, and 4 indicate the need for review by a qualified ophthalmologist. This system is designed to <em>assist</em> screening and clinical review — it does not replace professional ophthalmological assessment.
        </p>
      </div>
    </div>

    <style>{`
      @media (max-width: 1024px) {
        .severity-grid { grid-template-columns: repeat(3, 1fr) !important; }
      }
      @media (max-width: 640px) {
        .severity-grid { grid-template-columns: repeat(2, 1fr) !important; }
      }
      @media (max-width: 400px) {
        .severity-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default SeverityScale;
