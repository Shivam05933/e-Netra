// components/landing/UserTypesSection.jsx
import { Link } from 'react-router-dom';

const PATIENT_FEATURES = [
  'Personal retinal screening access',
  'Upload or capture fundus image',
  'View AI screening result (Grade 0–4)',
  'Explainable AI heatmap visualization',
  'Screening history and records',
  'Multilingual report access',
  'Referral pathway support',
];

const WORKER_FEATURES = [
  'Rural healthcare camp screening workflow',
  'Patient registration and management',
  'Guided image capture and upload',
  'Review AI screening results',
  'Emergency triage and referral support',
  'Screening history for patients',
  'Admin-reviewed and approved access',
];

const UserTypesSection = () => (
  <section id="patients" className="section" aria-labelledby="users-heading">
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span className="section-label">Who Uses e-Netra</span>
        <h2 className="heading-2" id="users-heading" style={{ marginBottom: '1rem' }}>
          Designed for <span className="text-teal">Two Core User Groups</span>
        </h2>
        <p className="text-body-lg" style={{ maxWidth: '560px', margin: '0 auto' }}>
          Whether you are a patient seeking retinal screening or a healthcare worker operating a rural screening camp, e-Netra is built for your workflow.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="users-grid">
        {/* Patients Card */}
        <div
          id="patients"
          style={{
            backgroundColor: 'white',
            border: '1px solid var(--color-border)',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          }}
          aria-label="For Patients"
        >
          {/* Header */}
          <div style={{
            padding: '2rem 2rem 1.5rem',
            background: 'linear-gradient(135deg, #f0fdfa 0%, #e0f2fe 100%)',
            borderBottom: '1px solid var(--color-border)',
          }}>
            <div style={{
              width: '3.5rem', height: '3.5rem',
              borderRadius: '1rem',
              backgroundColor: 'var(--color-primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1rem',
            }} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h3 className="heading-3" style={{ margin: '0 0 0.5rem' }}>For Patients</h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.6 }}>
              Access AI-assisted retinal screening and understand your results — with visual explanations designed to be understandable, not just algorithmic output.
            </p>
          </div>

          {/* Features */}
          <div style={{ padding: '1.5rem 2rem' }}>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {PATIENT_FEATURES.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', color: 'var(--color-text)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '0.1rem' }} aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div style={{ padding: '0 2rem 2rem' }}>
            <Link
              to="/register"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              aria-label="Register as a patient"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              Start as Patient
            </Link>
          </div>
        </div>

        {/* Healthcare Workers Card */}
        <div
          id="healthcare-workers"
          style={{
            backgroundColor: 'white',
            border: '2px solid var(--color-primary)',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(13,148,136,0.12)',
          }}
          aria-label="For Healthcare Workers"
        >
          {/* Header */}
          <div style={{
            padding: '2rem 2rem 1.5rem',
            background: 'linear-gradient(135deg, var(--color-primary) 0%, #0284c7 100%)',
          }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
              backgroundColor: 'rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '999px',
              padding: '0.25rem 0.75rem',
              marginBottom: '1rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'white',
              letterSpacing: '0.04em',
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Admin-Approved Access
            </div>
            <div style={{
              width: '3.5rem', height: '3.5rem',
              borderRadius: '1rem',
              backgroundColor: 'rgba(255,255,255,0.2)',
              border: '2px solid rgba(255,255,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1rem',
            }} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 style={{ color: 'white', margin: '0 0 0.5rem', fontSize: '1.25rem', fontWeight: 700 }}>
              For Healthcare Workers
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.6 }}>
              Operate rural screening camps, register patients, and review AI screening results — with admin-approved access and a purpose-built rural workflow.
            </p>
          </div>

          {/* Features */}
          <div style={{ padding: '1.5rem 2rem' }}>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {WORKER_FEATURES.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', color: 'var(--color-text)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '0.1rem' }} aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div style={{ padding: '0 2rem 2rem' }}>
            <Link
              to="/register"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              aria-label="Register as a healthcare worker"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              Register as Healthcare Worker
            </Link>
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.625rem', marginBottom: 0 }}>
              Account requires admin approval before access is granted.
            </p>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 768px) {
        .users-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default UserTypesSection;
