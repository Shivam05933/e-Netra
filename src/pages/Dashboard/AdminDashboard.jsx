// pages/Dashboard/AdminDashboard.jsx
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/navbar/Navbar';

const MOCK_PENDING_APPROVALS = [
  {
    id: 'CASE-8801',
    patientName: 'Harish Chandra',
    age: 58,
    gender: 'Male',
    submittedBy: 'Sunita Devi (ASHA - Sitapur PHC)',
    date: '2026-10-03',
    aiGrade: 4,
    aiGradeLabel: 'Grade 4: PDR',
    aiConfidence: '96.8%',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400',
    notes: 'Neovascularization and vitreous hemorrhage detected in superior nasal quadrant.',
    status: 'Pending Medical Review',
  },
  {
    id: 'CASE-8802',
    patientName: 'Savitri Devi',
    age: 61,
    gender: 'Female',
    submittedBy: 'Sunita Devi (ASHA - Sitapur PHC)',
    date: '2026-10-03',
    aiGrade: 3,
    aiGradeLabel: 'Grade 3: Severe NPDR',
    aiConfidence: '91.4%',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400',
    notes: 'Venous beading in 2+ quadrants, prominent intraretinal microvascular abnormalities (IRMA).',
    status: 'Pending Medical Review',
  },
];

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [approvals, setApprovals] = useState(MOCK_PENDING_APPROVALS);
  const [activeCase, setActiveCase] = useState(null);
  const [doctorNotes, setDoctorNotes] = useState('');
  const [showGradCAM, setShowGradCAM] = useState(true);

  const handleApproveCase = (caseId) => {
    setApprovals((prev) => prev.filter((c) => c.id !== caseId));
    setActiveCase(null);
    alert(`✅ Case #${caseId} officially approved by ${user?.name || 'Dr. Ananya Sharma'}! Tele-referral generated.`);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a' }}>
      <Navbar />

      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #4338ca 100%)',
        color: 'white', padding: '2.5rem 1.5rem 3.5rem 1.5rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{
                  backgroundColor: '#8b5cf6', color: 'white', fontSize: '0.75rem', fontWeight: 700,
                  padding: '0.2rem 0.6rem', borderRadius: '1rem', textTransform: 'uppercase'
                }}>
                  Specialist & Admin Console
                </span>
                <span style={{ color: '#c7d2fe', fontSize: '0.875rem' }}>
                  Regional Eye Institute, Lucknow
                </span>
              </div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0.5rem 0 0 0' }}>
                {user?.name || 'Dr. Ananya Sharma'}
              </h1>
              <p style={{ color: '#cbd5e1', fontSize: '0.9375rem', marginTop: '0.25rem' }}>
                {user?.specialization || 'Senior Retina Specialist'} • License: {user?.licenseNo || 'MCI-2015-88412'}
              </p>
            </div>

            <button
              onClick={logout}
              style={{
                backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)',
                padding: '0.75rem 1rem', borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer'
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div style={{ maxWidth: '1200px', margin: '-1.75rem auto 3rem auto', padding: '0 1.5rem' }}>
        {/* District Metrics Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem'
        }}>
          <div style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '0.875rem', border: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 600 }}>PENDING DOCTOR REVIEWS</span>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#8b5cf6', marginTop: '0.375rem' }}>
              {approvals.length} Cases
            </div>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Requires specialist validation</span>
          </div>

          <div style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '0.875rem', border: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 600 }}>TOTAL DISTRICT SCANS</span>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginTop: '0.375rem' }}>
              1,420 Scans
            </div>
            <span style={{ fontSize: '0.75rem', color: '#10b981' }}>Sitapur & Unnao Districts</span>
          </div>

          <div style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '0.875rem', border: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 600 }}>AI MODEL ACCURACY</span>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#10b981', marginTop: '0.375rem' }}>
              96.4%
            </div>
            <span style={{ fontSize: '0.75rem', color: '#10b981' }}>Validated against 500+ expert labels</span>
          </div>
        </div>

        {/* Doctor Verification Table */}
        <div style={{
          backgroundColor: 'white', borderRadius: '1rem', padding: '1.5rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.25rem 0' }}>
            Tele-ophthalmology Approval Queue
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.875rem', margin: '0 0 1.25rem 0' }}>
            Review high-severity AI detections, verify Grad-CAM heatmaps, and issue formal medical tele-referrals.
          </p>

          {approvals.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#64748b' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎉</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a' }}>All Cases Reviewed!</h3>
              <p style={{ fontSize: '0.875rem' }}>No pending high-risk referrals in your queue.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {approvals.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0',
                    backgroundColor: '#f8fafc', flexWrap: 'wrap', gap: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '3.5rem', height: '3.5rem', borderRadius: '0.5rem',
                      overflow: 'hidden', backgroundColor: '#0f172a'
                    }}>
                      <img src={item.image} alt="Fundus" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontWeight: 700, color: '#0f172a', fontSize: '1rem' }}>{item.patientName}</span>
                        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>({item.age} Yrs / {item.gender})</span>
                        <span style={{
                          fontSize: '0.75rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '1rem',
                          backgroundColor: item.aiGrade === 4 ? '#fef2f2' : '#fff7ed',
                          color: item.aiGrade === 4 ? '#ef4444' : '#f97316',
                          border: `1px solid ${item.aiGrade === 4 ? '#ef4444' : '#f97316'}`
                        }}>
                          {item.aiGradeLabel} ({item.aiConfidence})
                        </span>
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: '#64748b', marginTop: '0.25rem' }}>
                        Submitted by: {item.submittedBy} • Date: {item.date}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveCase(item)}
                    style={{
                      backgroundColor: '#4338ca', color: 'white', border: 'none',
                      padding: '0.625rem 1.25rem', borderRadius: '0.5rem', fontWeight: 700,
                      fontSize: '0.875rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(67, 56, 202, 0.3)'
                    }}
                  >
                    Inspect & Approve 🔬
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Case Review Modal */}
      {activeCase && (
        <div style={{
          position: 'fixed', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.75)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1.5rem', zIndex: 1000, backdropFilter: 'blur(8px)'
        }}>
          <div style={{
            backgroundColor: 'white', borderRadius: '1.25rem', width: '100%', maxWidth: '750px',
            maxHeight: '90vh', overflowY: 'auto', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4338ca', textTransform: 'uppercase' }}>
                  Specialist Consultation Panel #{activeCase.id}
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0.25rem 0 0 0' }}>
                  {activeCase.patientName} — {activeCase.aiGradeLabel}
                </h3>
              </div>
              <button
                onClick={() => setActiveCase(null)}
                style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '2rem', height: '2rem', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            {/* Image Preview with Grad-CAM */}
            <div style={{
              backgroundColor: '#0f172a', borderRadius: '0.875rem', padding: '1rem',
              textAlign: 'center', marginBottom: '1.25rem', position: 'relative'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ color: 'white', fontSize: '0.875rem', fontWeight: 600 }}>
                  High-Resolution Retinal Fundus & Heatmap
                </span>
                <button
                  onClick={() => setShowGradCAM(!showGradCAM)}
                  style={{
                    backgroundColor: showGradCAM ? '#4338ca' : 'rgba(255,255,255,0.1)',
                    color: 'white', border: 'none', padding: '0.25rem 0.75rem', borderRadius: '0.375rem',
                    fontSize: '0.8125rem', fontWeight: 600, cursor: 'pointer'
                  }}
                >
                  {showGradCAM ? '🔥 Grad-CAM Heatmap On' : '👁️ Raw Fundus Image'}
                </button>
              </div>

              <div style={{
                height: '240px', borderRadius: '0.5rem', overflow: 'hidden', position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <img src={activeCase.image} alt="Fundus" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {showGradCAM && (
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'radial-gradient(circle at 50% 45%, rgba(239, 68, 68, 0.75) 0%, rgba(245, 158, 11, 0.5) 35%, rgba(0,0,0,0) 70%)',
                    mixBlendMode: 'screen', pointerEvents: 'none'
                  }} />
                )}
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#334155', marginBottom: '0.375rem' }}>
                Ophthalmologist Clinical Notes & Tele-referral Instructions
              </label>
              <textarea
                rows="3"
                placeholder="Enter expert clinical remarks for local health worker and patient..."
                value={doctorNotes}
                onChange={(e) => setDoctorNotes(e.target.value)}
                style={{
                  width: '100%', padding: '0.75rem', borderRadius: '0.5rem',
                  border: '1px solid #cbd5e1', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button
                onClick={() => handleApproveCase(activeCase.id)}
                style={{
                  backgroundColor: '#10b981', color: 'white', border: 'none',
                  padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700,
                  fontSize: '0.9375rem', cursor: 'pointer', boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)'
                }}
              >
                Approve & Validate Diagnosis ✓
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
