// components/footer/Footer.jsx
import { Link } from 'react-router-dom';

const FOOTER_NAV = [
  {
    heading: 'Platform',
    links: [
      { label: 'Home', href: '#home', internal: false },
      { label: 'How It Works', href: '#how-it-works', internal: false },
      { label: 'Features', href: '#features', internal: false },
      { label: 'Severity Scale', href: '#severity', internal: false },
    ],
  },
  {
    heading: 'Users',
    links: [
      { label: 'For Patients', to: '/register', internal: true },
      { label: 'For Healthcare Workers', to: '/register', internal: true },
      { label: 'Login', to: '/login', internal: true },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Screening Information', href: '#how-it-works', internal: false },
      { label: 'Help', href: '#help', internal: false },
      { label: 'Accessibility', href: '#accessibility', internal: false },
      { label: 'Contact', href: '#contact', internal: false },
    ],
  },
];

const Footer = () => {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-navy)',
        color: '#94a3b8',
        paddingTop: '4rem',
      }}
      role="contentinfo"
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.8fr 1fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '3rem',
        }} className="footer-grid">
          {/* Brand column */}
          <div>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '2.25rem', height: '2.25rem',
                borderRadius: '0.5rem',
                background: 'linear-gradient(135deg, var(--color-primary) 0%, #0284c7 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" stroke="white" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="3" fill="white"/>
                  <circle cx="12" cy="12" r="1.5" fill="#0d9488"/>
                </svg>
              </div>
              <div>
                <span style={{ fontWeight: 800, fontSize: '1.125rem', color: 'white', letterSpacing: '-0.02em', display: 'block' }}>
                  e-Netra
                </span>
                <span style={{ fontSize: '0.625rem', fontWeight: 500, color: 'var(--color-primary-light)', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1 }}>
                  Retinal Screening
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#64748b', marginBottom: '1.5rem', maxWidth: '280px' }}>
              AI-assisted explainable diabetic retinopathy screening, designed for rural India. Built for Smart India Hackathon 2026.
            </p>

            {/* Disclaimer box */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '0.75rem',
              padding: '1rem',
              fontSize: '0.75rem',
              lineHeight: 1.6,
              color: '#64748b',
              maxWidth: '300px',
            }} role="note" aria-label="Medical disclaimer">
              <strong style={{ color: '#94a3b8', display: 'block', marginBottom: '0.375rem' }}>
                ⚕ Medical Disclaimer
              </strong>
              This platform is designed to assist screening and clinical review. It does not replace an ophthalmologist or provide an autonomous medical diagnosis.
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_NAV.map((col) => (
            <div key={col.heading}>
              <h3 style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
              }}>
                {col.heading}
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.internal ? (
                      <Link
                        to={link.to}
                        style={{
                          fontSize: '0.875rem',
                          color: '#64748b',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary-light)'}
                        onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); handleScroll(link.href); }}
                        style={{
                          fontSize: '0.875rem',
                          color: '#64748b',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary-light)'}
                        onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          paddingBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
        }}>
          <p style={{ fontSize: '0.8125rem', color: '#475569', margin: 0 }}>
            © 2026 e-Netra · Explainable AI for Diabetic Retinopathy Screening · SIH 2026
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#privacy" style={{ fontSize: '0.8125rem', color: '#475569', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = '#94a3b8'}
              onMouseLeave={e => e.currentTarget.style.color = '#475569'}
            >
              Privacy
            </a>
            <a href="#terms" style={{ fontSize: '0.8125rem', color: '#475569', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = '#94a3b8'}
              onMouseLeave={e => e.currentTarget.style.color = '#475569'}
            >
              Terms
            </a>
            <a href="#accessibility" style={{ fontSize: '0.8125rem', color: '#475569', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = '#94a3b8'}
              onMouseLeave={e => e.currentTarget.style.color = '#475569'}
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
