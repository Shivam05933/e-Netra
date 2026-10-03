// pages/Auth/RegisterPage.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ROLES = [
  {
    id: 'patient',
    title: 'Patient',
    badge: 'Individual Access',
    icon: '👁️',
    description: 'Access personal retinal screening results, view DR severity grade, download reports, and consult specialists.',
    accent: '#0d9488',
  },
  {
    id: 'healthcare',
    title: 'Healthcare / ASHA Worker',
    badge: 'Rural Camp Mode',
    icon: '🩺',
    description: 'Conduct village screening camps, scan fundus images using smartphone cameras, manage offline queues & referrals.',
    accent: '#0284c7',
  },
  {
    id: 'admin',
    title: 'Medical Specialist / Admin',
    badge: 'Diagnostic Oversight',
    icon: '👨‍⚕️',
    description: 'Review AI Heatmaps & Grad-CAM outputs, validate borderline DR cases, issue official tele-consultation approvals.',
    accent: '#8b5cf6',
  },
];

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState('patient');

  // Form Fields
  const [formData, setFormData] = useState({
    // Step 2: Basic Info
    fullName: '',
    phone: '',
    email: '',
    age: '',
    gender: 'Male',
    state: 'Uttar Pradesh',
    district: 'Sitapur',

    // Step 3: Role Specific
    // Patient
    abhaId: '',
    diabetesDuration: '1-5 years',
    diabetesType: 'Type 2',
    // Healthcare Worker
    centerName: '',
    centerCode: '',
    workerId: '',
    assignedVillages: '',
    // Admin / Doctor
    hospitalName: '',
    licenseNo: '',
    specialization: 'Retina Specialist',

    // Step 4: Password / Consent
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  const handleNextStep = (e) => {
    e?.preventDefault();
    if (currentStep === 1 && !selectedRole) {
      setError('Please select a user role to continue.');
      return;
    }
    if (currentStep === 2) {
      if (!formData.fullName || !formData.phone) {
        setError('Full Name and Phone Number are required.');
        return;
      }
    }
    setError('');
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setError('');
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmitRegistration = (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      setError('You must agree to the Medical Consent & Data Terms.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const registeredUser = register({
        role: selectedRole,
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        age: formData.age,
        gender: formData.gender,
        state: formData.state,
        district: formData.district,
        // Role specific properties
        ...(selectedRole === 'patient' && {
          abhaId: formData.abhaId || '91-8842-1928-4491',
          diabetesDuration: formData.diabetesDuration,
          diabetesType: formData.diabetesType,
        }),
        ...(selectedRole === 'healthcare' && {
          centerName: formData.centerName || 'Sitapur Primary Health Centre',
          centerCode: formData.centerCode || 'PHC-UP-STP-04',
          workerId: formData.workerId || 'HW-8842',
        }),
        ...(selectedRole === 'admin' && {
          hospital: formData.hospitalName || 'Regional Eye Institute, Lucknow',
          licenseNo: formData.licenseNo || 'MCI-2015-99812',
          specialization: formData.specialization,
        }),
      });

      // Redirect to appropriate dashboard
      if (registeredUser.role === 'patient') navigate('/patient');
      else if (registeredUser.role === 'healthcare') navigate('/healthcare');
      else if (registeredUser.role === 'admin') navigate('/admin');
      else navigate('/');
    }, 800);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #06101E 0%, #0B192C 60%, #082F49 100%)',
      padding: '2.5rem 1rem',
      position: 'relative',
    }}>
      <div style={{ width: '100%', maxWidth: '640px', zIndex: 1 }}>
        {/* Header Logo */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '2.5rem', height: '2.5rem', borderRadius: '0.625rem',
              background: 'linear-gradient(135deg, #0d9488 0%, #0284c7 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(13, 148, 136, 0.4)',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <span style={{ fontSize: '1.625rem', fontWeight: 800, color: 'white' }}>
              e-<span style={{ color: '#0d9488' }}>Netra</span>
            </span>
          </Link>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginTop: '0.375rem' }}>
            Create an account to access Diabetic Retinopathy AI Screening
          </p>
        </div>

        {/* Stepper Progress Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'rgba(15, 23, 42, 0.7)',
          padding: '0.875rem 1.25rem',
          borderRadius: '1rem',
          border: '1px solid rgba(255,255,255,0.1)',
          marginBottom: '1.5rem',
          backdropFilter: 'blur(10px)',
        }}>
          {[
            { num: 1, label: 'Role' },
            { num: 2, label: 'Profile' },
            { num: 3, label: 'Details' },
            { num: 4, label: 'Verify' },
          ].map((s) => {
            const isActive = currentStep === s.num;
            const isDone = currentStep > s.num;
            return (
              <div key={s.num} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '1.75rem', height: '1.75rem', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.8125rem', fontWeight: 700,
                  backgroundColor: isDone ? '#0d9488' : isActive ? '#0284c7' : 'rgba(255,255,255,0.1)',
                  color: isDone || isActive ? 'white' : '#94a3b8',
                  transition: 'all 0.3s',
                }}>
                  {isDone ? '✓' : s.num}
                </div>
                <span style={{
                  fontSize: '0.8125rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#ffffff' : isDone ? '#cbd5e1' : '#64748b',
                }}>
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Form Container */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '1.25rem',
          padding: '2rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        }}>
          {error && (
            <div style={{
              backgroundColor: '#fef2f2',
              borderLeft: '4px solid #ef4444',
              padding: '0.75rem 1rem',
              borderRadius: '0.375rem',
              color: '#991b1b',
              fontSize: '0.875rem',
              marginBottom: '1.25rem',
            }}>
              {error}
            </div>
          )}

          {/* STEP 1: ROLE SELECTION */}
          {currentStep === 1 && (
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.375rem' }}>
                Select Your Access Role
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                Choose how you will be using e-Netra to customize your dashboard layout.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                {ROLES.map((role) => {
                  const isSelected = selectedRole === role.id;
                  return (
                    <div
                      key={role.id}
                      onClick={() => { setSelectedRole(role.id); setError(''); }}
                      style={{
                        padding: '1.25rem',
                        borderRadius: '0.875rem',
                        border: `2px solid ${isSelected ? role.accent : '#e2e8f0'}`,
                        backgroundColor: isSelected ? 'rgba(13, 148, 136, 0.04)' : '#f8fafc',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        position: 'relative',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <span style={{ fontSize: '1.5rem' }}>{role.icon}</span>
                          <div>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                              {role.title}
                            </h3>
                            <span style={{
                              fontSize: '0.6875rem', fontWeight: 600, color: role.accent,
                              textTransform: 'uppercase', letterSpacing: '0.05em'
                            }}>
                              {role.badge}
                            </span>
                          </div>
                        </div>
                        <input
                          type="radio"
                          name="roleSelection"
                          checked={isSelected}
                          onChange={() => {}}
                          style={{ width: '1.125rem', height: '1.125rem', accentColor: role.accent }}
                        />
                      </div>
                      <p style={{ color: '#64748b', fontSize: '0.8125rem', margin: 0, lineHeight: 1.5 }}>
                        {role.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={handleNextStep}
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  borderRadius: '0.625rem',
                  border: 'none',
                  backgroundColor: '#0d9488',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(13, 148, 136, 0.4)',
                }}
              >
                Continue to Personal Info →
              </button>
            </div>
          )}

          {/* STEP 2: PERSONAL & CONTACT INFO */}
          {currentStep === 2 && (
            <form onSubmit={handleNextStep}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.375rem' }}>
                Personal Details
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                Enter your basic contact information for medical identification.
              </p>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.375rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  style={{
                    width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem',
                    border: '1px solid #cbd5e1', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.375rem' }}>
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    style={{
                      width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem',
                      border: '1px solid #cbd5e1', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.375rem' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="ramesh@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    style={{
                      width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem',
                      border: '1px solid #cbd5e1', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.375rem' }}>
                    Age (Years)
                  </label>
                  <input
                    type="number"
                    placeholder="52"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    style={{
                      width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem',
                      border: '1px solid #cbd5e1', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.375rem' }}>
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    style={{
                      width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem',
                      border: '1px solid #cbd5e1', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box', backgroundColor: 'white'
                    }}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.375rem' }}>
                    State
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    style={{
                      width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem',
                      border: '1px solid #cbd5e1', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.375rem' }}>
                    District
                  </label>
                  <input
                    type="text"
                    value={formData.district}
                    onChange={(e) => handleInputChange('district', e.target.value)}
                    style={{
                      width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem',
                      border: '1px solid #cbd5e1', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={handlePrevStep}
                  style={{
                    flex: 1, padding: '0.875rem', borderRadius: '0.625rem',
                    border: '1px solid #cbd5e1', backgroundColor: '#f8fafc',
                    color: '#475569', fontWeight: 600, fontSize: '0.9375rem', cursor: 'pointer'
                  }}
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  style={{
                    flex: 2, padding: '0.875rem', borderRadius: '0.625rem',
                    border: 'none', backgroundColor: '#0d9488',
                    color: 'white', fontWeight: 700, fontSize: '0.9375rem', cursor: 'pointer'
                  }}
                >
                  Next Step →
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: ROLE-SPECIFIC DETAILS */}
          {currentStep === 3 && (
            <form onSubmit={handleNextStep}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.375rem' }}>
                {selectedRole === 'patient' ? 'Medical Background' : selectedRole === 'healthcare' ? 'Health Centre Info' : 'Specialist Credentials'}
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                Provide specific credentials for your selected role ({ROLES.find(r => r.id === selectedRole)?.title}).
              </p>

              {selectedRole === 'patient' && (
                <>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.375rem' }}>
                      ABHA ID (Ayushman Bharat Health Account)
                    </label>
                    <input
                      type="text"
                      placeholder="91-8842-1928-4491"
                      value={formData.abhaId}
                      onChange={(e) => handleInputChange('abhaId', e.target.value)}
                      style={{
                        width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem',
                        border: '1px solid #cbd5e1', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box'
                      }}
                    />
                    <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>Optional — helps link screening history with ABDM registry.</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.375rem' }}>
                        Diabetes Type
                      </label>
                      <select
                        value={formData.diabetesType}
                        onChange={(e) => handleInputChange('diabetesType', e.target.value)}
                        style={{
                          width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem',
                          border: '1px solid #cbd5e1', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box', backgroundColor: 'white'
                        }}
                      >
                        <option value="Type 2">Type 2 Diabetes</option>
                        <option value="Type 1">Type 1 Diabetes</option>
                        <option value="Pre-diabetic">Pre-diabetic</option>
                        <option value="Not sure">Not sure / Unconfirmed</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.375rem' }}>
                        Duration of Diabetes
                      </label>
                      <select
                        value={formData.diabetesDuration}
                        onChange={(e) => handleInputChange('diabetesDuration', e.target.value)}
                        style={{
                          width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem',
                          border: '1px solid #cbd5e1', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box', backgroundColor: 'white'
                        }}
                      >
                        <option value="< 1 year">Less than 1 year</option>
                        <option value="1-5 years">1 to 5 years</option>
                        <option value="5-10 years">5 to 10 years</option>
                        <option value="10+ years">More than 10 years</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {selectedRole === 'healthcare' && (
                <>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.375rem' }}>
                      Primary Health Centre (PHC) / Sub-Center Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sitapur Primary Health Centre"
                      value={formData.centerName}
                      onChange={(e) => handleInputChange('centerName', e.target.value)}
                      style={{
                        width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem',
                        border: '1px solid #cbd5e1', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.375rem' }}>
                        Govt. Center Code
                      </label>
                      <input
                        type="text"
                        placeholder="PHC-UP-STP-04"
                        value={formData.centerCode}
                        onChange={(e) => handleInputChange('centerCode', e.target.value)}
                        style={{
                          width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem',
                          border: '1px solid #cbd5e1', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.375rem' }}>
                        ASHA / Worker ID
                      </label>
                      <input
                        type="text"
                        placeholder="HW-4092"
                        value={formData.workerId}
                        onChange={(e) => handleInputChange('workerId', e.target.value)}
                        style={{
                          width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem',
                          border: '1px solid #cbd5e1', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>
                </>
              )}

              {selectedRole === 'admin' && (
                <>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.375rem' }}>
                      Affiliated Eye Institute / Hospital Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Regional Eye Care Institute, Lucknow"
                      value={formData.hospitalName}
                      onChange={(e) => handleInputChange('hospitalName', e.target.value)}
                      style={{
                        width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem',
                        border: '1px solid #cbd5e1', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.375rem' }}>
                        Medical Council License No.
                      </label>
                      <input
                        type="text"
                        placeholder="MCI-2015-88412"
                        value={formData.licenseNo}
                        onChange={(e) => handleInputChange('licenseNo', e.target.value)}
                        style={{
                          width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem',
                          border: '1px solid #cbd5e1', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.375rem' }}>
                        Specialization
                      </label>
                      <input
                        type="text"
                        placeholder="Retina Specialist"
                        value={formData.specialization}
                        onChange={(e) => handleInputChange('specialization', e.target.value)}
                        style={{
                          width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem',
                          border: '1px solid #cbd5e1', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>
                </>
              )}

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={handlePrevStep}
                  style={{
                    flex: 1, padding: '0.875rem', borderRadius: '0.625rem',
                    border: '1px solid #cbd5e1', backgroundColor: '#f8fafc',
                    color: '#475569', fontWeight: 600, fontSize: '0.9375rem', cursor: 'pointer'
                  }}
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  style={{
                    flex: 2, padding: '0.875rem', borderRadius: '0.625rem',
                    border: 'none', backgroundColor: '#0d9488',
                    color: 'white', fontWeight: 700, fontSize: '0.9375rem', cursor: 'pointer'
                  }}
                >
                  Next Step →
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: VERIFICATION & CONSENT */}
          {currentStep === 4 && (
            <form onSubmit={handleSubmitRegistration}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.375rem' }}>
                Review & Verification
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                Confirm your account details and medical privacy agreement.
              </p>

              {/* Summary Card */}
              <div style={{
                backgroundColor: '#f8fafc', borderRadius: '0.75rem', padding: '1rem',
                border: '1px solid #e2e8f0', marginBottom: '1.25rem', fontSize: '0.875rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#64748b' }}>Account Role:</span>
                  <span style={{ fontWeight: 700, color: '#0f172a', textTransform: 'capitalize' }}>{selectedRole}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#64748b' }}>Name:</span>
                  <span style={{ fontWeight: 600, color: '#0f172a' }}>{formData.fullName || 'Not specified'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#64748b' }}>Mobile:</span>
                  <span style={{ fontWeight: 600, color: '#0f172a' }}>+91 {formData.phone}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b' }}>Location:</span>
                  <span style={{ fontWeight: 600, color: '#0f172a' }}>{formData.district}, {formData.state}</span>
                </div>
              </div>

              {/* Terms checkbox */}
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                  style={{ width: '1.125rem', height: '1.125rem', marginTop: '0.15rem', accentColor: '#0d9488' }}
                />
                <label htmlFor="agreeTerms" style={{ fontSize: '0.8125rem', color: '#475569', lineHeight: 1.5, cursor: 'pointer' }}>
                  I agree to the e-Netra Terms of Service and consent to encrypted storage of retinal screening data for medical evaluation in compliance with Ayushman Bharat Digital Mission (ABDM) standards.
                </label>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={handlePrevStep}
                  style={{
                    flex: 1, padding: '0.875rem', borderRadius: '0.625rem',
                    border: '1px solid #cbd5e1', backgroundColor: '#f8fafc',
                    color: '#475569', fontWeight: 600, fontSize: '0.9375rem', cursor: 'pointer'
                  }}
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    flex: 2, padding: '0.875rem', borderRadius: '0.625rem',
                    border: 'none', backgroundColor: '#0d9488',
                    color: 'white', fontWeight: 700, fontSize: '0.9375rem',
                    cursor: isSubmitting ? 'wait' : 'pointer',
                    boxShadow: '0 4px 14px rgba(13, 148, 136, 0.4)'
                  }}
                >
                  {isSubmitting ? 'Creating Account...' : 'Complete Registration 🎉'}
                </button>
              </div>
            </form>
          )}

          {/* Already have an account? */}
          <div style={{
            marginTop: '1.5rem', paddingTop: '1.25rem',
            borderTop: '1px solid #e2e8f0', textAlign: 'center',
            fontSize: '0.875rem', color: '#64748b'
          }}>
            Already registered?{' '}
            <Link to="/login" style={{ color: '#0d9488', fontWeight: 700, textDecoration: 'none' }}>
              Sign In Here →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
