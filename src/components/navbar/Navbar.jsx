// components/navbar/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'For Patients', href: '#patients' },
  { label: 'For Healthcare Workers', href: '#healthcare-workers' },
  { label: 'About', href: '#about' },
];

// Brand Logo SVG
const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}>
    <div
      style={{
        width: '2.25rem',
        height: '2.25rem',
        borderRadius: '0.5rem',
        background: 'linear-gradient(135deg, var(--color-primary) 0%, #0284c7 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="12" cy="12" r="3" fill="white"/>
        <circle cx="12" cy="12" r="1.5" fill="#0d9488"/>
      </svg>
    </div>
    <div>
      <span style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--color-navy)', letterSpacing: '-0.02em' }}>
        e-Netra
      </span>
      <span style={{ display: 'block', fontSize: '0.625rem', fontWeight: 500, color: 'var(--color-primary)', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1 }}>
        Retinal Screening
      </span>
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    if (window.location.pathname !== '/') {
      navigate('/' + href);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const dashboardPath = user?.role === 'patient' ? '/patient' : user?.role === 'healthcare' ? '/healthcare' : '/admin';

  const navbarStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: isScrolled ? 'rgba(255,255,255,0.97)' : 'white',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    borderBottom: `1px solid ${isScrolled ? 'var(--color-border)' : 'transparent'}`,
    boxShadow: isScrolled ? '0 2px 16px rgba(0,0,0,0.08)' : 'none',
    transition: 'all 0.3s ease',
  };

  return (
    <header style={navbarStyle} role="banner">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem', gap: '1rem' }}>
        {/* Brand */}
        <Link to="/" aria-label="e-Netra - Home" style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--color-text)',
                textDecoration: 'none',
                padding: '0.5rem 0.75rem',
                borderRadius: '0.375rem',
                transition: 'color 0.2s, background-color 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-primary)'; e.currentTarget.style.backgroundColor = 'var(--color-primary-50)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA / Auth Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="desktop-cta">
          {isAuthenticated ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Link
                to={dashboardPath}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  backgroundColor: 'var(--color-primary-50)', color: 'var(--color-primary)',
                  fontWeight: 700, padding: '0.5rem 0.875rem', borderRadius: '0.5rem',
                  textDecoration: 'none', fontSize: '0.875rem', border: '1px solid rgba(13, 148, 136, 0.2)'
                }}
              >
                <span>📊</span> {user?.role === 'patient' ? 'Patient Portal' : user?.role === 'healthcare' ? 'ASHA Camp Portal' : 'Admin Console'}
              </Link>
              <button
                onClick={logout}
                style={{
                  fontSize: '0.8125rem', fontWeight: 600, color: '#64748b', background: 'none', border: 'none', cursor: 'pointer'
                }}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                  padding: '0.5rem 0.875rem',
                  borderRadius: '0.5rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text)'}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn-primary"
                style={{ fontSize: '0.875rem', padding: '0.5625rem 1.25rem' }}
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="mobile-menu-btn"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: '1px solid var(--color-border)',
            borderRadius: '0.5rem',
            padding: '0.5rem',
            cursor: 'pointer',
            color: 'var(--color-text)',
          }}
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          role="navigation"
          aria-label="Mobile navigation"
          style={{
            borderTop: '1px solid var(--color-border)',
            backgroundColor: 'white',
            padding: '1rem',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  transition: 'color 0.2s, background-color 0.2s',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', padding: '0 0.25rem' }}>
            {isAuthenticated ? (
              <Link
                to={dashboardPath}
                onClick={() => setMobileOpen(false)}
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.875rem' }}
              >
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="btn-secondary"
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.875rem' }}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.875rem' }}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
