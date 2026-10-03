// components/landing/TopBar.jsx
// Subtle utility top bar — Phase 1

const TopBar = () => {
  return (
    <div
      className="topbar"
      style={{
        backgroundColor: 'var(--color-navy)',
        color: '#94a3b8',
        fontSize: '0.8125rem',
        padding: '0.5rem 0',
      }}
      role="banner"
      aria-label="Site utility bar"
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <span style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Eye icon */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          <span style={{ color: 'var(--color-primary-light)' }}>AI-Powered</span>&nbsp;Retinal Screening for Rural India
        </span>

        <nav aria-label="Utility navigation" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <a
            href="#help"
            style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = '#e2e8f0'}
            onMouseLeave={e => e.target.style.color = '#94a3b8'}
          >
            Help
          </a>
          <a
            href="#accessibility"
            style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = '#e2e8f0'}
            onMouseLeave={e => e.target.style.color = '#94a3b8'}
            aria-label="Accessibility options"
          >
            Accessibility
          </a>
          <a
            href="#language"
            style={{
              color: 'var(--color-primary-light)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
            }}
            aria-label="Change language"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            Language / भाषा
          </a>
        </nav>
      </div>
    </div>
  );
};

export default TopBar;
