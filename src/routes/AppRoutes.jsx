// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import HowItWorksPage from '../pages/HowItWorks/HowItWorksPage';
import TechnologyPage from '../pages/Technology/TechnologyPage';
import ExplainableAIPage from '../pages/ExplainableAI/ExplainableAIPage';
import ImpactPage from '../pages/Impact/ImpactPage';
import AboutPage from '../pages/About/AboutPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/technology" element={<TechnologyPage />} />
      <Route path="/explainable-ai" element={<ExplainableAIPage />} />
      <Route path="/impact" element={<ImpactPage />} />
      <Route path="/about" element={<AboutPage />} />
      
      {/* 404 Catch-All Redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
