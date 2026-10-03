// services/api.js
// Phase 1: Architecture placeholder only.
// Backend API integration will be implemented in Phase 11.
// Do NOT add actual API calls, fetch requests, or backend URLs in Phase 1.

/**
 * API service layer stub.
 *
 * Phase 11 will implement:
 * - Authentication endpoints (login, register, logout)
 * - Patient endpoints (profile, screening history)
 * - Healthcare worker endpoints (patients, screening workflow)
 * - Admin endpoints (approval management, statistics)
 * - Screening endpoints (upload, results, heatmap)
 * - Report endpoints (generation, multilingual)
 */

// Base URL will be configured from environment variables in Phase 11
// const API_BASE_URL = import.meta.env.VITE_API_URL;

const api = {
  // Phase 11: auth
  // login: (credentials) => fetch(`${API_BASE_URL}/auth/login`, { method: 'POST', body: JSON.stringify(credentials) }),
  // register: (data) => fetch(`${API_BASE_URL}/auth/register`, { method: 'POST', body: JSON.stringify(data) }),

  // Phase 7–8: screening
  // uploadImage: (formData) => fetch(`${API_BASE_URL}/screening/upload`, { method: 'POST', body: formData }),
  // getResult: (id) => fetch(`${API_BASE_URL}/screening/result/${id}`),

  // Phase 9: reports
  // getReport: (id, lang) => fetch(`${API_BASE_URL}/reports/${id}?lang=${lang}`),
};

export default api;
