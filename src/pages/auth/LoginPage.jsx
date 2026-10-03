// pages/Auth/LoginPage.jsx
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, MOCK_DEMO_USERS } = useAuth();

  const [authMethod, setAuthMethod] = useState('phone'); // 'phone' | 'email' | 'abha'
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    password: '',
    abhaId: '',
    otp: ['', '', '', '', '', ''],
  });
  const [step, setStep] = useState('input'); // 'input' | 'otp'
  const [otpTimer, setOtpTimer] = useState(30);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const from = location.state?.from || '/';

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...formData.otp];
    newOtp[index] = value;
    setFormData((prev) => ({ ...prev, otp: newOtp }));

    // Auto-focus next input field
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (authMethod === 'phone' && !formData.phone) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (authMethod === 'abha' && !formData.abhaId) {
      setError('Please enter a valid 14-digit ABHA ID.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('otp');
      // Set default demo OTP for instant visual test
      setFormData((prev) => ({ ...prev, otp: ['5', '8', '2', '4', '1', '9'] }));
    }, 600);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const user = login('patient'); // Default logged in as patient when using standard form
      redirectByRole(user.role);
    }, 600);
  };

  const handleDemoLogin = (roleKey) => {
    const user = login(roleKey);
    redirectByRole(user.role);
  };

  const redirectByRole = (role) => {
    if (role === 'patient') navigate('/patient');
    else if (role === 'healthcare') navigate('/healthcare');
    else if (role === 'admin') navigate('/admin');
    else navigate(from);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #06101E 0%, #0B192C 60%, #082F49 100%)',
      padding: '2rem 1rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(13, 148, 136, 0.15) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-10%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(2, 132, 199, 0.15) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        width: '100%',
        maxWidth: '520px',
        zIndex: 1,
      }}>
        {/* Header Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem',
              background: 'linear-gradient(135deg, #0d9488 0%, #0284c7 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(13, 148, 136, 0.4)',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>
              e-<span style={{ color: '#0d9488' }}>Netra</span>
            </span>
          </Link>
          <p style={{ color: '#94a3b8', fontSize: '0.9375rem', marginTop: '0.5rem' }}>
            Sign in to access your screening platform & reports
          </p>
        </div>

        {/* Demo One-Click Login Card (Hackathon Quick Access) */}
        <div style={{
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          border: '1px solid rgba(13, 148, 136, 0.3)',
          borderRadius: '1rem',
          padding: '1.25rem',
          marginBottom: '1.5rem',
          backdropFilter: 'blur(12px)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span style={{
              backgroundColor: '#0d9488', color: 'white', fontSize: '0.7rem',
              fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '1rem', textTransform: 'uppercase'
            }}>
              Demo Preset
            </span>
            <span style={{ color: '#cbd5e1', fontSize: '0.8125rem', fontWeight: 600 }}>
              Quick One-Click Persona Login
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.625rem' }}>
            <button
              onClick={() => handleDemoLogin('patient')}
              type="button"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '0.625rem',
                padding: '0.625rem 0.5rem',
                color: 'white',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#0d9488';
                e.currentTarget.style.backgroundColor = 'rgba(13, 148, 136, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              }}
            >
              <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>👁️</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f8fafc' }}>Patient</div>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Ramesh K.</div>
            </button>

            <button
              onClick={() => handleDemoLogin('healthcare')}
              type="button"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '0.625rem',
                padding: '0.625rem 0.5rem',
                color: 'white',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#0284c7';
                e.currentTarget.style.backgroundColor = 'rgba(2, 132, 199, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              }}
            >
              <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>🩺</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f8fafc' }}>ASHA Worker</div>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Sunita Devi</div>
            </button>

            <button
              onClick={() => handleDemoLogin('admin')}
              type="button"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '0.625rem',
                padding: '0.625rem 0.5rem',
                color: 'white',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#8b5cf6';
                e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              }}
            >
              <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>👨‍⚕️</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f8fafc' }}>Doctor / Admin</div>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Dr. Ananya</div>
            </button>
          </div>
        </div>

        {/* Main Auth Form Container */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '1.25rem',
          padding: '2rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        }}>
          {/* Method Selection Tabs */}
          <div style={{
            display: 'flex',
            backgroundColor: '#f1f5f9',
            borderRadius: '0.75rem',
            padding: '0.25rem',
            marginBottom: '1.5rem',
          }}>
            <button
              type="button"
              onClick={() => { setAuthMethod('phone'); setStep('input'); setError(''); }}
              style={{
                flex: 1,
                padding: '0.625rem 0.5rem',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                backgroundColor: authMethod === 'phone' ? '#ffffff' : 'transparent',
                color: authMethod === 'phone' ? '#0f172a' : '#64748b',
                boxShadow: authMethod === 'phone' ? '0 2px 4px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.2s',
              }}
            >
              Mobile OTP
            </button>
            <button
              type="button"
              onClick={() => { setAuthMethod('email'); setStep('input'); setError(''); }}
              style={{
                flex: 1,
                padding: '0.625rem 0.5rem',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                backgroundColor: authMethod === 'email' ? '#ffffff' : 'transparent',
                color: authMethod === 'email' ? '#0f172a' : '#64748b',
                boxShadow: authMethod === 'email' ? '0 2px 4px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.2s',
              }}
            >
              Email / Password
            </button>
            <button
              type="button"
              onClick={() => { setAuthMethod('abha'); setStep('input'); setError(''); }}
              style={{
                flex: 1,
                padding: '0.625rem 0.5rem',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                backgroundColor: authMethod === 'abha' ? '#ffffff' : 'transparent',
                color: authMethod === 'abha' ? '#0f172a' : '#64748b',
                boxShadow: authMethod === 'abha' ? '0 2px 4px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.2s',
              }}
            >
              ABHA ID 🆔
            </button>
          </div>

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

          {step === 'input' ? (
            <form onSubmit={authMethod === 'email' ? handleLoginSubmit : handleSendOtp}>
              {authMethod === 'phone' && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>
                    Mobile Phone Number
                  </label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span style={{
                      backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '0.5rem',
                      padding: '0.75rem 0.875rem', fontSize: '0.9375rem', color: '#475569', fontWeight: 600,
                      display: 'flex', alignItems: 'center'
                    }}>
                      🇮🇳 +91
                    </span>
                    <input
                      type="tel"
                      placeholder="98765 43210"
                      maxLength="10"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      style={{
                        flex: 1,
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9375rem',
                        outline: 'none',
                        transition: 'border 0.2s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                      onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                    />
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.375rem' }}>
                    We'll send an OTP verification code to this mobile number.
                  </p>
                </div>
              )}

              {authMethod === 'email' && (
                <>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="sunita.asha@phc-sitapur.gov.in"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9375rem',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                      onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                    />
                  </div>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <label style={{ fontSize: '0.875rem', fontWeight: 600, color: '#334155' }}>
                        Password
                      </label>
                      <a href="#forgot" style={{ fontSize: '0.8125rem', color: '#0d9488', textDecoration: 'none', fontWeight: 500 }}>
                        Forgot password?
                      </a>
                    </div>
                    <input
                      type="password"
                      placeholder="••••••••••••"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9375rem',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                      onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                    />
                  </div>
                </>
              )}

              {authMethod === 'abha' && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>
                    Ayushman Bharat Health Account (ABHA ID)
                  </label>
                  <input
                    type="text"
                    placeholder="91-8842-1928-4491"
                    value={formData.abhaId}
                    onChange={(e) => handleInputChange('abhaId', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                    onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                  />
                  <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.375rem' }}>
                    Enter your 14-digit ABHA ID issued under Ayushman Bharat Digital Mission (ABDM).
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  borderRadius: '0.625rem',
                  border: 'none',
                  backgroundColor: '#0d9488',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: isSubmitting ? 'wait' : 'pointer',
                  boxShadow: '0 4px 14px rgba(13, 148, 136, 0.4)',
                  transition: 'all 0.2s',
                  marginTop: '0.5rem',
                }}
                onMouseOver={(e) => !isSubmitting && (e.target.style.backgroundColor = '#0f766e')}
                onMouseOut={(e) => !isSubmitting && (e.target.style.backgroundColor = '#0d9488')}
              >
                {isSubmitting
                  ? 'Processing...'
                  : authMethod === 'email'
                  ? 'Sign In to Account'
                  : 'Send OTP Code →'}
              </button>
            </form>
          ) : (
            /* OTP Verification Screen */
            <form onSubmit={handleLoginSubmit}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.25rem 0' }}>
                  Enter Verification Code
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>
                  We sent a 6-digit OTP to{' '}
                  <strong style={{ color: '#0f172a' }}>
                    {authMethod === 'phone' ? `+91 ${formData.phone || '98765 43210'}` : formData.abhaId}
                  </strong>
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {formData.otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-input-${idx}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                    style={{
                      width: '2.75rem',
                      height: '3.25rem',
                      textAlign: 'center',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      borderRadius: '0.5rem',
                      border: '2px solid #cbd5e1',
                      outline: 'none',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                    onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  borderRadius: '0.625rem',
                  border: 'none',
                  backgroundColor: '#0d9488',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: isSubmitting ? 'wait' : 'pointer',
                  boxShadow: '0 4px 14px rgba(13, 148, 136, 0.4)',
                }}
              >
                {isSubmitting ? 'Verifying...' : 'Verify OTP & Log In'}
              </button>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <button
                  type="button"
                  onClick={() => setStep('input')}
                  style={{ background: 'none', border: 'none', color: '#64748b', fontSize: '0.8125rem', cursor: 'pointer' }}
                >
                  ← Change number
                </button>

                <button
                  type="button"
                  style={{ background: 'none', border: 'none', color: '#0d9488', fontWeight: 600, fontSize: '0.8125rem', cursor: 'pointer' }}
                >
                  Resend OTP ({otpTimer}s)
                </button>
              </div>
            </form>
          )}

          {/* Registration link */}
          <div style={{
            marginTop: '1.75rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid #e2e8f0',
            textAlign: 'center',
            fontSize: '0.875rem',
            color: '#64748b',
          }}>
            Don't have an account yet?{' '}
            <Link to="/register" style={{ color: '#0d9488', fontWeight: 700, textDecoration: 'none' }}>
              Register Now →
            </Link>
          </div>
        </div>

        {/* Back to Home Link */}
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link to="/" style={{ color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none', fontWeight: 500 }}>
            ← Back to Landing Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
