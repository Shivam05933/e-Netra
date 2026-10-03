// context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const MOCK_DEMO_USERS = {
  patient: {
    id: 'PAT-8849',
    name: 'Ramesh Kumar',
    role: 'patient',
    email: 'ramesh.kumar@example.com',
    phone: '+91 98765 43210',
    abhaId: '91-8842-1928-4491',
    age: 52,
    gender: 'Male',
    location: 'Sitapur, Uttar Pradesh',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    createdDate: '2025-11-12',
  },
  healthcare: {
    id: 'HW-4092',
    name: 'Sunita Devi (ASHA)',
    role: 'healthcare',
    email: 'sunita.asha@phc-sitapur.gov.in',
    phone: '+91 91234 56789',
    centerName: 'Sitapur Primary Health Centre (PHC)',
    centerCode: 'PHC-UP-STP-04',
    assignedDistrict: 'Sitapur District',
    totalScreenings: 142,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
    createdDate: '2024-06-15',
  },
  admin: {
    id: 'ADM-1001',
    name: 'Dr. Ananya Sharma',
    role: 'admin',
    email: 'dr.ananya@enetra-health.org',
    phone: '+91 99887 76655',
    hospital: 'Regional Eye Care Institute, Lucknow',
    specialization: 'Senior Retina Specialist / Ophthalmologist',
    licenseNo: 'MCI-2015-88412',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150',
    createdDate: '2024-01-10',
  },
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load persisted mock user from localStorage
    const savedUser = localStorage.getItem('enetra_mock_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse mock user from localStorage', e);
      }
    }
    setLoading(false);
  }, []);

  const login = (roleOrCredentials) => {
    let userData;
    if (typeof roleOrCredentials === 'string' && MOCK_DEMO_USERS[roleOrCredentials]) {
      userData = MOCK_DEMO_USERS[roleOrCredentials];
    } else {
      // Custom login payload
      userData = {
        id: `USR-${Math.floor(1000 + Math.random() * 9000)}`,
        name: roleOrCredentials.name || roleOrCredentials.email?.split('@')[0] || 'Demo User',
        email: roleOrCredentials.email || 'user@enetra.org',
        role: roleOrCredentials.role || 'patient',
        phone: roleOrCredentials.phone || '+91 98765 00000',
        createdDate: new Date().toISOString().split('T')[0],
      };
    }
    setUser(userData);
    localStorage.setItem('enetra_mock_user', JSON.stringify(userData));
    return userData;
  };

  const register = (registerData) => {
    const newUser = {
      id: `${registerData.role === 'healthcare' ? 'HW' : registerData.role === 'admin' ? 'ADM' : 'PAT'}-${Math.floor(1000 + Math.random() * 9000)}`,
      ...registerData,
      createdDate: new Date().toISOString().split('T')[0],
    };
    setUser(newUser);
    localStorage.setItem('enetra_mock_user', JSON.stringify(newUser));
    return newUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('enetra_mock_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        role: user?.role || null,
        loading,
        login,
        register,
        logout,
        MOCK_DEMO_USERS,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
