// src/components/common/Navbar.jsx
import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Eye, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Technology', path: '/technology' },
  { label: 'Explainable AI', path: '/explainable-ai' },
  { label: 'Impact', path: '/impact' },
  { label: 'About', path: '/about' },
];

export const DrishtiLogo = ({ compact = false }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
    <div
      style={{
        width: compact ? '2.25rem' : '2.625rem',
        height: compact ? '2.25rem' : '2.625rem',
        borderRadius: '0.75rem',
        background: 'linear-gradient(135deg, #0E2F76 0%, #1D4ED8 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 14px rgba(14, 47, 118, 0.3)',
        flexShrink: 0,
        position: 'relative',
      }}
    >
      <Eye style={{ width: compact ? '1.25rem' : '1.5rem', height: compact ? '1.25rem' : '1.5rem', color: '#FFFFFF' }} />
      {/* Subtle AI neural dot accent */}
      <span
        style={{
          position: 'absolute',
          top: '4px',
          right: '4px',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#38BDF8',
          boxShadow: '0 0 6px #38BDF8',
        }}
      />
    </div>
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
        <span style={{ fontWeight: 800, fontSize: compact ? '1.25rem' : '1.375rem', color: '#0E2F76', letterSpacing: '-0.02em', lineHeight: 1 }}>
          Drishti
        </span>
        <span
          style={{
            fontSize: '0.625rem',
            fontWeight: 700,
            backgroundColor: 'rgba(170, 192, 225, 0.3)',
            color: '#0E2F76',
            padding: '0.1rem 0.4rem',
            borderRadius: '0.375rem',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          AI
        </span>
      </div>
      <span style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 600, color: '#64748B', letterSpacing: '0.02em', marginTop: '0.15rem' }}>
        AI-Powered Retinal Screening
      </span>
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(245, 254, 255, 0.95)' : '#F5FEFF',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: `1px solid ${isScrolled ? 'rgba(170, 192, 225, 0.4)' : 'transparent'}`,
        boxShadow: isScrolled ? '0 4px 20px rgba(14, 47, 118, 0.05)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        className="drishti-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: isScrolled ? '4.5rem' : '5.25rem',
          transition: 'height 0.3s ease',
        }}
      >
        {/* Left: Brand Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <DrishtiLogo compact={isScrolled} />
        </Link>

        {/* Center: Desktop Links */}
        <nav
          aria-label="Main Navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            padding: '0.375rem 0.625rem',
            borderRadius: '9999px',
            border: '1px solid rgba(170, 192, 225, 0.3)',
          }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              style={({ isActive }) => ({
                fontSize: '0.9375rem',
                fontWeight: isActive ? 700 : 600,
                color: isActive ? '#0E2F76' : '#475569',
                backgroundColor: isActive ? '#E0EBF8' : 'transparent',
                padding: '0.5rem 1.125rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="hidden-mobile">
          <Link to="/explainable-ai" className="drishti-btn-primary" style={{ padding: '0.625rem 1.375rem', fontSize: '0.9375rem' }}>
            <span>Explore Drishti</span>
            <ArrowRight style={{ width: '1rem', height: '1rem' }} />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          style={{
            background: 'none',
            border: '1px solid rgba(170, 192, 225, 0.5)',
            borderRadius: '0.625rem',
            padding: '0.5rem',
            color: '#0E2F76',
            cursor: 'pointer',
            display: 'none',
          }}
          className="show-mobile-btn"
        >
          {mobileMenuOpen ? <X style={{ width: '1.5rem', height: '1.5rem' }} /> : <Menu style={{ width: '1.5rem', height: '1.5rem' }} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid rgba(170, 192, 225, 0.4)',
            padding: '1.25rem 1.5rem',
            boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                style={({ isActive }) => ({
                  fontSize: '1rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? '#0E2F76' : '#334155',
                  backgroundColor: isActive ? '#F5FEFF' : 'transparent',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  textDecoration: 'none',
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <Link
            to="/explainable-ai"
            className="drishti-btn-primary"
            style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
          >
            Explore Drishti Platform →
          </Link>
        </div>
      )}

      {/* Responsive Breakpoint CSS inline */}
      <style>{`
        @media (max-width: 991px) {
          .hidden-mobile { display: none !important; }
          .show-mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
