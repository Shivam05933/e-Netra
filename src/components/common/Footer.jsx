// src/components/common/Footer.jsx
import { Link } from 'react-router-dom';
import { DrishtiLogo } from './Navbar';
import { Eye, Shield, Award, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#0E2F76',
        color: '#FFFFFF',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid rgba(170, 192, 225, 0.2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background radial subtle glow */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="drishti-container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '0.75rem',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Eye style={{ width: '1.5rem', height: '1.5rem', color: '#0E2F76' }} />
                </div>
                <span style={{ fontSize: '1.625rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                  Drishti
                </span>
              </div>
            </div>

            <p style={{ color: '#AAC0E1', fontSize: '0.9375rem', lineHeight: 1.7, maxWidth: '420px', marginBottom: '1.5rem' }}>
              Explainable AI for Diabetic Retinopathy Screening & District-Level Triage. Designed to empower healthcare workers and ophthalmologists with transparent, interpretable visual insights.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  padding: '0.375rem 0.875rem',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                }}
              >
                <Award style={{ width: '0.9375rem', height: '0.9375rem', color: '#38BDF8' }} />
                Smart India Hackathon 2026 Project
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#AAC0E1',
                  padding: '0.375rem 0.875rem',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                }}
              >
                <Shield style={{ width: '0.9375rem', height: '0.9375rem', color: '#34D399' }} />
                Explainable AI Framework
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1.25rem', letterSpacing: '0.02em' }}>
              Platform Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'How It Works', path: '/how-it-works' },
                { label: 'Technology', path: '/technology' },
                { label: 'Explainable AI', path: '/explainable-ai' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{
                      color: '#AAC0E1',
                      textDecoration: 'none',
                      fontSize: '0.9375rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#AAC0E1')}
                  >
                    <ChevronRight style={{ width: '0.875rem', height: '0.875rem' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact & Vision Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1.25rem', letterSpacing: '0.02em' }}>
              Ecosystem & Vision
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Impact & Triage', path: '/impact' },
                { label: 'About Drishti', path: '/about' },
                { label: 'Feature Progression', path: '/technology#features' },
                { label: 'Grad-CAM Heatmaps', path: '/explainable-ai' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    style={{
                      color: '#AAC0E1',
                      textDecoration: 'none',
                      fontSize: '0.9375rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#AAC0E1')}
                  >
                    <ChevronRight style={{ width: '0.875rem', height: '0.875rem' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer Box */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(170, 192, 225, 0.15)',
            borderRadius: '1rem',
            padding: '1.25rem 1.5rem',
            marginBottom: '2.5rem',
            fontSize: '0.8125rem',
            color: '#AAC0E1',
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: '#FFFFFF' }}>Medical Decision-Support Notice:</strong> Drishti is an AI decision-support concept designed to assist healthcare professionals in screening diabetic retinopathy and organizing district-level triage. It is intended to support, not replace, clinical judgment by qualified medical practitioners.
        </div>

        {/* Bottom copyright bar */}
        <div
          style={{
            borderTop: '1px solid rgba(170, 192, 225, 0.15)',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.875rem',
            color: '#AAC0E1',
          }}
        >
          <div>
            © {new Date().getFullYear()} Drishti Platform • Smart India Hackathon 2026 Project
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ fontSize: '0.8125rem' }}>Explainable Retinal AI</span>
            <span style={{ fontSize: '0.8125rem' }}>District Triage Framework</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
