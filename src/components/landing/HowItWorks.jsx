// components/landing/HowItWorks.jsx

const STEPS = [
  {
    number: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
    title: 'Capture / Upload Retinal Image',
    description: 'A fundus image is captured using a retinal camera or smartphone lens attachment, or uploaded directly from an existing scan.',
    tag: 'Input',
  },
  {
    number: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Image Quality & Enhancement',
    description: 'The system assesses image quality — blur, contrast, illumination — and applies preprocessing to optimise the image for AI analysis.',
    tag: 'Preprocessing',
  },
  {
    number: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'AI Screening & Grade Classification',
    description: 'A trained deep learning model screens the processed image and classifies diabetic retinopathy from Grade 0 (No DR) to Grade 4 (Proliferative DR).',
    tag: 'AI Model',
  },
  {
    number: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'Explainable AI Heatmap',
    description: 'A Grad-CAM style visualisation highlights the retinal regions that most influenced the model\'s classification — enabling clinicians to see where the AI is "looking".',
    tag: 'XAI',
  },
  {
    number: '05',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: 'Result + Healthcare Professional Review',
    description: 'The screening result and heatmap are presented to the healthcare worker and patient. Higher-grade results are flagged for priority referral to an ophthalmologist.',
    tag: 'Clinical Review',
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="section-alt" aria-labelledby="how-heading">
    <div className="container">
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span className="section-label">The Process</span>
        <h2 className="heading-2" id="how-heading" style={{ marginBottom: '1rem' }}>
          How Our <span className="text-teal">Screening System</span> Works
        </h2>
        <p className="text-body-lg" style={{ maxWidth: '560px', margin: '0 auto' }}>
          A streamlined 5-step workflow from image capture to clinical review — designed for speed, clarity, and explainability.
        </p>
      </div>

      {/* Steps: desktop horizontal flow */}
      <div style={{ position: 'relative' }}>
        {/* Desktop connector line */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '3.5rem',
            left: '10%',
            right: '10%',
            height: '2px',
            background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
            opacity: 0.2,
            borderRadius: '1px',
          }}
          className="hiw-connector"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1rem',
          }}
          className="hiw-grid"
          role="list"
          aria-label="Screening process steps"
        >
          {STEPS.map((step, i) => (
            <div
              key={i}
              role="listitem"
              className={`animate-fade-in-up delay-${i * 100}`}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.75rem' }}
            >
              {/* Icon circle */}
              <div style={{
                position: 'relative',
                width: '4.5rem', height: '4.5rem',
                borderRadius: '50%',
                backgroundColor: 'white',
                border: '2px solid var(--color-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(13,148,136,0.15)',
                zIndex: 1,
                flexShrink: 0,
                color: 'var(--color-primary)',
              }}>
                {step.icon}
                {/* Step number badge */}
                <span style={{
                  position: 'absolute', top: '-0.5rem', right: '-0.5rem',
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  width: '1.375rem', height: '1.375rem',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  lineHeight: 1,
                }} aria-hidden="true">
                  {i + 1}
                </span>
              </div>

              {/* Tag */}
              <span style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                color: 'var(--color-primary)',
                backgroundColor: 'var(--color-primary-50)',
                border: '1px solid var(--color-primary-100)',
                padding: '0.125rem 0.5rem',
                borderRadius: '999px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}>
                {step.tag}
              </span>

              {/* Title */}
              <h3 style={{
                fontWeight: 700,
                fontSize: '0.875rem',
                color: 'var(--color-navy)',
                lineHeight: 1.3,
                margin: 0,
              }}>
                {step.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '0.8125rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                margin: 0,
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Flow summary bar */}
      <div style={{
        marginTop: '3.5rem',
        backgroundColor: 'white',
        border: '1px solid var(--color-border)',
        borderRadius: '1rem',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        flexWrap: 'wrap',
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      }} aria-label="Process flow summary">
        {['Fundus Image', 'Preprocessing', 'AI Model', 'XAI Explanation', 'Clinical Review'].map((label, i, arr) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--color-navy)',
              backgroundColor: 'var(--color-primary-50)',
              padding: '0.375rem 0.75rem',
              borderRadius: '0.375rem',
              border: '1px solid var(--color-primary-100)',
            }}>
              {label}
            </span>
            {i < arr.length - 1 && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            )}
          </span>
        ))}
      </div>
    </div>

    <style>{`
      @media (max-width: 900px) {
        .hiw-grid { grid-template-columns: 1fr 1fr !important; }
        .hiw-connector { display: none !important; }
      }
      @media (max-width: 540px) {
        .hiw-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default HowItWorks;
