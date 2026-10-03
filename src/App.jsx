// src/App.jsx
import { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          top: '-100%',
          left: '0',
          backgroundColor: '#0E2F76',
          color: 'white',
          padding: '0.75rem 1.5rem',
          zIndex: 9999,
          fontWeight: 600,
          fontSize: '0.9375rem',
          textDecoration: 'none',
          borderRadius: '0 0 0.5rem 0',
          transition: 'top 0.2s',
        }}
        onFocus={(e) => (e.currentTarget.style.top = '0')}
        onBlur={(e) => (e.currentTarget.style.top = '-100%')}
      >
        Skip to main content
      </a>
      <main id="main-content">
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
