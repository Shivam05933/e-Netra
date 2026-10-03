// pages/Dashboard/HealthcareDashboard.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/navbar/Navbar';

const MOCK_CAMP_PATIENTS = [
  {
    id: 'PAT-9012',
    name: 'Savitri Devi',
    age: 61,
    gender: 'Female',
    village: 'Rampur Sub-center',
    scanTime: '10:42 AM Today',
    grade: 3,
    gradeLabel: 'Grade 3: Severe NPDR',
    severityColor: '#f97316',
    status: 'High Priority Referral',
    offlineSynced: true,
  },
  {
    id: 'PAT-9013',
    name: 'Harish Chandra',
    age: 58,
    gender: 'Male',
    village: 'Sitapur Central',
    scanTime: '11:15 AM Today',
    grade: 4,
    gradeLabel: 'Grade 4: PDR (Critical)',
    severityColor: '#ef4444',
    status: 'Urgent Ophthalmologist Consult',
    offlineSynced: true,
  },
  {
    id: 'PAT-9014',
    name: 'Meena Kumari',
    age: 49,
    gender: 'Female',
    village: 'Rampur Sub-center',
    scanTime: '11:50 AM Today',
    grade: 0,
    gradeLabel: 'Grade 0: Normal',
    severityColor: '#10b981',
    status: 'Screening Complete',
    offlineSynced: true,
  },
  {
    id: 'PAT-9015',
    name: 'Ram Lakhan',
    age: 65,
    gender: 'Male',
    village: 'Kalyanpur Camp',
    scanTime: '12:05 PM Today',
    grade: 2,
    gradeLabel: 'Grade 2: Moderate NPDR',
    severityColor: '#eab308',
    status: 'Pending Local Review',
    offlineSynced: false,
  },
];

const HealthcareDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [filter, setFilter] = useState('all');
  const [offlineQueueCount, setOfflineQueueCount] = useState(1);

  const filteredPatients = MOCK_CAMP_PATIENTS.filter((p) => {
    if (filter === 'high-risk') return p.grade >= 3;
    if (filter === 'pending') return p.status.includes('Pending');
    return true;
  });

  const handleSyncOfflineQueue = () => {
    if (offlineQueueCount === 0) return;
    setOfflineQueueCount(0);
    alert('✅ Syncing offline scan queue... 1 record synced with e-Netra central server!');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a' }}>
      <Navbar />

      {/* Top Banner Header */}
      <div style={{
        background: 'linear-gradient(135deg, #022c22 0%, #064e3b 60%, #0d9488 100%)',
        color: 'white', padding: '2.5rem 1.5rem 3.5rem 1.5rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{
                  backgroundColor: '#10b981', color: 'white', fontSize: '0.75rem', fontWeight: 700,
                  padding: '0.2rem 0.6rem', borderRadius: '1rem', textTransform: 'uppercase'
                }}>
                  Rural Health Worker Portal
                </span>
                <span style={{ color: '#a7f3d0', fontSize: '0.875rem' }}>
                  ⚡ Offline-First Mode Active
                </span>
              </div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0.5rem 0 0 0' }}>
                {user?.name || 'Sunita Devi (ASHA Worker)'}
              </h1>
              <p style={{ color: '#cbd5e1', fontSize: '0.9375rem', marginTop: '0.25rem' }}>
                {user?.centerName || 'Sitapur Primary Health Centre (PHC)'} • Code: {user?.centerCode || 'PHC-UP-STP-04'}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate('/screen')}
                style={{
                  backgroundColor: '#ffffff', color: '#047857', border: 'none',
                  padding: '0.75rem 1.25rem', borderRadius: '0.5rem', fontWeight: 800,
                  fontSize: '0.9375rem', cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
                }}
              >
                📸 New Village Camp Scan
              </button>
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
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '-1.75rem auto 3rem auto', padding: '0 1.5rem' }}>
        {/* Offline Sync Banner */}
        <div style={{
          backgroundColor: offlineQueueCount > 0 ? '#fffbebf0' : '#f0fdf4',
          border: `1px solid ${offlineQueueCount > 0 ? '#fde68a' : '#bbf7d0'}`,
          borderRadius: '0.75rem', padding: '1rem 1.25rem', marginBottom: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.25rem' }}>{offlineQueueCount > 0 ? '📡' : '✅'}</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: offlineQueueCount > 0 ? '#92400e' : '#166534' }}>
                {offlineQueueCount > 0
                  ? `${offlineQueueCount} Patient Scan Saved in Local Phone Storage (Pending Sync)`
                  : 'All Village Camp Scans Synced with District Database'}
              </div>
              <div style={{ fontSize: '0.8125rem', color: offlineQueueCount > 0 ? '#b45309' : '#15803d' }}>
                e-Netra AI screening operates fully offline without active internet.
              </div>
            </div>
          </div>

          {offlineQueueCount > 0 && (
            <button
              onClick={handleSyncOfflineQueue}
              style={{
                backgroundColor: '#d97706', color: 'white', border: 'none',
                padding: '0.5rem 1rem', borderRadius: '0.375rem', fontWeight: 700, fontSize: '0.8125rem', cursor: 'pointer'
              }}
            >
              Sync Now to Server
            </button>
          )}
        </div>

        {/* Camp Metrics Summary */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem'
        }}>
          <div style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '0.875rem', border: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 600 }}>CAMP PATIENTS SCANNED</span>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginTop: '0.375rem' }}>4 Patients</div>
            <span style={{ fontSize: '0.75rem', color: '#10b981' }}>+100% completed today</span>
          </div>

          <div style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '0.875rem', border: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 600 }}>CRITICAL REFERRALS</span>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ef4444', marginTop: '0.375rem' }}>2 Patients</div>
            <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>Grade 3 & 4 (Immediate action)</span>
          </div>

          <div style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '0.875rem', border: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 600 }}>HEALTHY / MILD CASES</span>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#10b981', marginTop: '0.375rem' }}>2 Patients</div>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>6-month follow-up</span>
          </div>
        </div>

        {/* Patient Queue */}
        <div style={{
          backgroundColor: 'white', borderRadius: '1rem', padding: '1.5rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Today's Camp Screening Roster
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.875rem', margin: '0.25rem 0 0 0' }}>
                Manage local screening records and track doctor referral approvals.
              </p>
            </div>

            {/* Filter Buttons */}
            <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: '#f1f5f9', padding: '0.25rem', borderRadius: '0.5rem' }}>
              <button
                onClick={() => setFilter('all')}
                style={{
                  border: 'none', padding: '0.375rem 0.75rem', borderRadius: '0.375rem', fontSize: '0.8125rem',
                  fontWeight: 600, cursor: 'pointer',
                  backgroundColor: filter === 'all' ? 'white' : 'transparent',
                  color: filter === 'all' ? '#0f172a' : '#64748b'
                }}
              >
                All Scans ({MOCK_CAMP_PATIENTS.length})
              </button>
              <button
                onClick={() => setFilter('high-risk')}
                style={{
                  border: 'none', padding: '0.375rem 0.75rem', borderRadius: '0.375rem', fontSize: '0.8125rem',
                  fontWeight: 600, cursor: 'pointer',
                  backgroundColor: filter === 'high-risk' ? '#fef2f2' : 'transparent',
                  color: filter === 'high-risk' ? '#991b1b' : '#64748b'
                }}
              >
                High Risk (2)
              </button>
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b' }}>
                  <th style={{ padding: '0.75rem 1rem', fontWeight: 700 }}>Patient ID & Name</th>
                  <th style={{ padding: '0.75rem 1rem', fontWeight: 700 }}>Age / Gender</th>
                  <th style={{ padding: '0.75rem 1rem', fontWeight: 700 }}>Village Sub-center</th>
                  <th style={{ padding: '0.75rem 1rem', fontWeight: 700 }}>AI DR Severity Grade</th>
                  <th style={{ padding: '0.75rem 1rem', fontWeight: 700 }}>Action Protocol</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((p) => (
                  <tr key={p.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ fontWeight: 700, color: '#0f172a' }}>{p.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{p.id} • {p.scanTime}</div>
                    </td>
                    <td style={{ padding: '1rem', color: '#334155' }}>
                      {p.age} Yrs / {p.gender}
                    </td>
                    <td style={{ padding: '1rem', color: '#334155' }}>
                      {p.village}
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{
                        fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.625rem', borderRadius: '1rem',
                        backgroundColor: p.severityColor + '20', color: p.severityColor, border: `1px solid ${p.severityColor}`
                      }}>
                        {p.gradeLabel}
                      </span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <button
                        onClick={() => navigate('/screen')}
                        style={{
                          backgroundColor: '#f1f5f9', color: '#0f172a', border: '1px solid #cbd5e1',
                          padding: '0.375rem 0.75rem', borderRadius: '0.375rem', fontSize: '0.8125rem',
                          fontWeight: 600, cursor: 'pointer'
                        }}
                      >
                        Rescan / Details 🔍
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareDashboard;
