// pages/Dashboard/PatientDashboard.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/navbar/Navbar';

const MOCK_PATIENT_HISTORY = [
  {
    id: 'SCR-2026-081',
    date: '2026-02-14',
    location: 'Sitapur PHC Camp',
    grade: 1,
    gradeLabel: 'Grade 1: Mild NPDR',
    severityColor: '#eab308',
    confidence: '94.2%',
    status: 'Verified by Ophthalmologist',
    verifiedBy: 'Dr. Ananya Sharma',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400',
    findings: 'Microaneurysms detected in peripheral macular region. Regular 6-month screening recommended.',
  },
  {
    id: 'SCR-2025-412',
    date: '2025-08-10',
    location: 'District Hospital Sitapur',
    grade: 0,
    gradeLabel: 'Grade 0: No DR',
    severityColor: '#10b981',
    confidence: '98.5%',
    status: 'Automated AI Clearance',
    verifiedBy: 'AI System',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400',
    findings: 'Clear retinal vasculature. No microaneurysms or hemorrhages identified.',
  },
];

const PatientDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showGradCAM, setShowGradCAM] = useState(false);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a' }}>
      <Navbar />

      {/* Top Welcome Header */}
      <div style={{
        background: 'linear-gradient(135deg, #06101E 0%, #0B192C 60%, #082F49 100%)',
        color: 'white',
        padding: '3rem 1.5rem 4rem 1.5rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <img
                src={user?.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'}
                alt={user?.name}
                style={{
                  width: '4rem', height: '4rem', borderRadius: '50%',
                  border: '3px solid #0d9488', objectFit: 'cover'
                }}
              />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0 }}>
                    Welcome back, {user?.name || 'Ramesh Kumar'}
                  </h1>
                  <span style={{
                    backgroundColor: 'rgba(13, 148, 136, 0.2)', border: '1px solid #0d9488',
                    color: '#2dd4bf', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.625rem', borderRadius: '1rem'
                  }}>
                    Patient Account
                  </span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.9375rem', marginTop: '0.375rem', margin: 0 }}>
                  ABHA ID: <span style={{ color: '#38bdf8', fontWeight: 600 }}>{user?.abhaId || '91-8842-1928-4491'}</span> • {user?.location || 'Sitapur, UP'}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => navigate('/screen')}
                style={{
                  backgroundColor: '#0d9488', color: 'white', border: 'none',
                  padding: '0.75rem 1.25rem', borderRadius: '0.5rem', fontWeight: 700,
                  fontSize: '0.9375rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
                  boxShadow: '0 4px 14px rgba(13, 148, 136, 0.4)'
                }}
              >
                <span>📷</span> Start AI Eye Screening
              </button>
              <button
                onClick={logout}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)', color: '#e2e8f0', border: '1px solid rgba(255,255,255,0.2)',
                  padding: '0.75rem 1rem', borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer'
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1200px', margin: '-2rem auto 3rem auto', padding: '0 1.5rem' }}>
        {/* Quick Stat Cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem', marginBottom: '2rem'
        }}>
          <div style={{
            backgroundColor: 'white', borderRadius: '1rem', padding: '1.25rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0'
          }}>
            <div style={{ color: '#64748b', fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase' }}>
              Latest DR Grade
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#eab308', marginTop: '0.5rem' }}>
              Grade 1: Mild NPDR
            </div>
            <div style={{ fontSize: '0.8125rem', color: '#64748b', marginTop: '0.25rem' }}>
              Last scan: Feb 14, 2026 (94.2% AI confidence)
            </div>
          </div>

          <div style={{
            backgroundColor: 'white', borderRadius: '1rem', padding: '1.25rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0'
          }}>
            <div style={{ color: '#64748b', fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase' }}>
              Next Screening Due
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0284c7', marginTop: '0.5rem' }}>
              August 2026
            </div>
            <div style={{ fontSize: '0.8125rem', color: '#64748b', marginTop: '0.25rem' }}>
              Recommended 6-month regular checkup
            </div>
          </div>

          <div style={{
            backgroundColor: 'white', borderRadius: '1rem', padding: '1.25rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0'
          }}>
            <div style={{ color: '#64748b', fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase' }}>
              Total Screenings
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginTop: '0.5rem' }}>
              2 Complete Scans
            </div>
            <div style={{ fontSize: '0.8125rem', color: '#10b981', marginTop: '0.25rem' }}>
              ✓ All records synced with ABDM health vault
            </div>
          </div>
        </div>

        {/* Screening History Section */}
        <div style={{
          backgroundColor: 'white', borderRadius: '1rem', padding: '1.75rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Retinal Screening History & AI Reports
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.875rem', margin: '0.25rem 0 0 0' }}>
                View your detailed fundus images, Grad-CAM visual explanations, and doctor approvals.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {MOCK_PATIENT_HISTORY.map((record) => (
              <div
                key={record.id}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0',
                  backgroundColor: '#f8fafc', flexWrap: 'wrap', gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '3.5rem', height: '3.5rem', borderRadius: '0.5rem',
                    backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem', overflow: 'hidden', position: 'relative'
                  }}>
                    <img src={record.image} alt="Retinal Fundus" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontWeight: 700, color: '#0f172a', fontSize: '1rem' }}>
                        {record.id}
                      </span>
                      <span style={{
                        fontSize: '0.75rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '1rem',
                        backgroundColor: record.severityColor + '20', color: record.severityColor, border: `1px solid ${record.severityColor}`
                      }}>
                        {record.gradeLabel}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.8125rem', color: '#64748b', marginTop: '0.25rem' }}>
                      📅 {record.date} • 📍 {record.location} • AI Confidence: <strong>{record.confidence}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <button
                    onClick={() => setSelectedRecord(record)}
                    style={{
                      backgroundColor: '#0d9488', color: 'white', border: 'none',
                      padding: '0.5rem 1rem', borderRadius: '0.375rem', fontWeight: 600,
                      fontSize: '0.875rem', cursor: 'pointer'
                    }}
                  >
                    View Explainable AI Report 🔍
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Report Modal */}
      {selectedRecord && (
        <div style={{
          position: 'fixed', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.75)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1.5rem', zIndex: 1000, backdropFilter: 'blur(8px)'
        }}>
          <div style={{
            backgroundColor: 'white', borderRadius: '1.25rem', width: '100%', maxWidth: '720px',
            maxHeight: '90vh', overflowY: 'auto', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <span style={{
                  fontSize: '0.75rem', fontWeight: 700, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '0.05em'
                }}>
                  Official Screening Report #{selectedRecord.id}
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0.25rem 0 0 0' }}>
                  Diabetic Retinopathy Explainable AI Diagnosis
                </h3>
              </div>
              <button
                onClick={() => setSelectedRecord(null)}
                style={{
                  background: '#f1f5f9', border: 'none', borderRadius: '50%',
                  width: '2rem', height: '2rem', cursor: 'pointer', fontWeight: 700
                }}
              >
                ✕
              </button>
            </div>

            {/* Fundus Image with Grad-CAM Overlay Toggle */}
            <div style={{
              backgroundColor: '#0f172a', borderRadius: '0.875rem', padding: '1rem',
              textAlign: 'center', marginBottom: '1.5rem', position: 'relative'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ color: 'white', fontSize: '0.875rem', fontWeight: 600 }}>
                  Retinal Fundus Image Scan
                </span>
                <button
                  onClick={() => setShowGradCAM(!showGradCAM)}
                  style={{
                    backgroundColor: showGradCAM ? '#0d9488' : 'rgba(255,255,255,0.1)',
                    color: 'white', border: '1px solid rgba(255,255,255,0.2)',
                    padding: '0.375rem 0.75rem', borderRadius: '0.375rem', fontSize: '0.8125rem',
                    fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s'
                  }}
                >
                  {showGradCAM ? '🔥 Heatmap Active (Grad-CAM)' : '👁️ Toggle Heatmap Overlay'}
                </button>
              </div>

              <div style={{
                height: '240px', borderRadius: '0.5rem', overflow: 'hidden',
                position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <img
                  src={selectedRecord.image}
                  alt="Fundus Scan"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {showGradCAM && (
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'radial-gradient(circle at 45% 40%, rgba(239, 68, 68, 0.65) 0%, rgba(245, 158, 11, 0.4) 30%, rgba(0,0,0,0) 65%)',
                    mixBlendMode: 'screen', pointerEvents: 'none'
                  }} />
                )}
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '0.5rem', margin: 0 }}>
                {showGradCAM
                  ? 'Red/yellow highlighted regions indicate AI attention areas for microaneurysms.'
                  : 'Original high-resolution retinal fundus image.'}
              </p>
            </div>

            {/* Findings & Severity */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Severity Grade</span>
                <div style={{ fontSize: '1.125rem', fontWeight: 800, color: selectedRecord.severityColor, marginTop: '0.25rem' }}>
                  {selectedRecord.gradeLabel}
                </div>
              </div>
              <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>AI Confidence Score</span>
                <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0d9488', marginTop: '0.25rem' }}>
                  {selectedRecord.confidence}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.5rem 0' }}>
                AI Findings Rationale
              </h4>
              <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.6, margin: 0, backgroundColor: '#f1f5f9', padding: '0.875rem', borderRadius: '0.5rem' }}>
                {selectedRecord.findings}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button
                onClick={() => alert('PDF Report download started!')}
                style={{
                  backgroundColor: '#0284c7', color: 'white', border: 'none',
                  padding: '0.625rem 1.25rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer'
                }}
              >
                📥 Download Official PDF
              </button>
              <button
                onClick={() => setSelectedRecord(null)}
                style={{
                  backgroundColor: '#cbd5e1', color: '#0f172a', border: 'none',
                  padding: '0.625rem 1.25rem', borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer'
                }}
              >
                Close Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientDashboard;
