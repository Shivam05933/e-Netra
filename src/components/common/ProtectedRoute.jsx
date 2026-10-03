// components/common/ProtectedRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-navy)',
        color: 'white',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div className="animate-spin" style={{
            width: '3rem', height: '3rem',
            border: '4px solid rgba(255,255,255,0.1)',
            borderTopColor: 'var(--color-primary)',
            borderRadius: '50%',
            margin: '0 auto 1rem auto',
          }} />
          <p style={{ color: '#94a3b8', fontSize: '0.9375rem' }}>Verifying session...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    // Redirect to their appropriate dashboard if attempting to access another role's path
    if (user?.role === 'patient') return <Navigate to="/patient" replace />;
    if (user?.role === 'healthcare') return <Navigate to="/healthcare" replace />;
    if (user?.role === 'admin') return <Navigate to="/admin" replace />;
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
