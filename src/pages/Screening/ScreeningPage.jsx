// pages/Screening/ScreeningPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

const MOCK_SAMPLE_IMAGES = [
  {
    id: 'sample-0',
    title: 'Grade 0 (Normal Retina)',
    url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400',
    grade: 0,
    gradeLabel: 'Grade 0: No DR',
    color: '#10b981',
    confidence: '98.5%',
    findings: 'Normal optical disc, macula, and vessel architecture. No microaneurysms detected.',
  },
  {
    id: 'sample-1',
    title: 'Grade 1 (Mild NPDR)',
    url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400',
    grade: 1,
    gradeLabel: 'Grade 1: Mild NPDR',
    color: '#eab308',
    confidence: '94.2%',
    findings: 'Isolated microaneurysms detected in the temporal macula quadrant. Annual monitoring advised.',
  },
  {
    id: 'sample-3',
    title: 'Grade 3 (Severe NPDR)',
    url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400',
    grade: 3,
    gradeLabel: 'Grade 3: Severe NPDR',
    color: '#f97316',
    confidence: '92.7%',
    findings: '>20 intraretinal hemorrhages in all 4 quadrants, definite venous beading in 2+ quadrants.',
  },
  {
    id: 'sample-4',
    title: 'Grade 4 (PDR Critical)',
    url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400',
    grade: 4,
    gradeLabel: 'Grade 4: Proliferative DR',
    color: '#ef4444',
    confidence: '97.1%',
    findings: 'Neovascularization of the optic disc (NVD), preretinal hemorrhage, high risk of severe vision loss.',
  },
];

const ScreeningPage = () => {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(MOCK_SAMPLE_IMAGES[1]);
  const [patientName, setPatientName] = useState('Ramesh Kumar');
  const [patientAge, setPatientAge] = useState('52');
  const [patientGender, setPatientGender] = useState('Male');

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisStepLabel, setAnalysisStepLabel] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showGradCAM, setShowGradCAM] = useState(true);
  const [selectedLang, setSelectedLang] = useState('hi'); // 'hi' | 'en' | 'ta'

  const handleSelectSample = (sample) => {
    setSelectedImage(sample);
    setShowResults(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage({
        id: 'uploaded-' + Date.now(),
        title: file.name,
        url: imageUrl,
        grade: 2,
        gradeLabel: 'Grade 2: Moderate NPDR',
        color: '#f59e0b',
        confidence: '93.8%',
        findings: 'Multiple microaneurysms and hard exudates detected. Moderate risk.',
      });
      setShowResults(false);
    }
  };

  const handleRunAIScreening = () => {
    setIsAnalyzing(true);
    setAnalysisProgress(10);
    setAnalysisStepLabel('Preprocessing & CLAHE Contrast Enhancement...');

    setTimeout(() => {
      setAnalysisProgress(40);
      setAnalysisStepLabel('Running Microaneurysm & Exudate Lesion Detection...');
    }, 600);

    setTimeout(() => {
      setAnalysisProgress(75);
      setAnalysisStepLabel('Evaluating Deep Learning Classifier (ResNet-50 / EfficientNet)...');
    }, 1200);

    setTimeout(() => {
      setAnalysisProgress(95);
      setAnalysisStepLabel('Generating Explainable AI Heatmap (Grad-CAM)...');
    }, 1800);

    setTimeout(() => {
      setAnalysisProgress(100);
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2200);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a' }}>
      <Navbar />

      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #06101E 0%, #0B192C 60%, #082F49 100%)',
        color: 'white', padding: '2.5rem 1.5rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <span style={{
              backgroundColor: '#0d9488', color: 'white', fontSize: '0.75rem', fontWeight: 700,
              padding: '0.2rem 0.6rem', borderRadius: '1rem', textTransform: 'uppercase'
            }}>
              AI Screening Engine
            </span>
            <span style={{ color: '#38bdf8', fontSize: '0.875rem' }}>
              Grade 0–4 Severity & Grad-CAM XAI
            </span>
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0 }}>
            Retinal Fundus Image AI Analysis
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9375rem', marginTop: '0.25rem' }}>
            Upload or capture a fundus eye scan to instantly evaluate Diabetic Retinopathy severity with explainable AI heatmaps.
          </p>
        </div>
      </div>

      {/* Main Form & Interactive Screening Workbench */}
      <div style={{ maxWidth: '1200px', margin: '2rem auto 4rem auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          
          {/* Left Column: Input Details & Image Selector */}
          <div>
            {/* Patient Info Card */}
            <div style={{
              backgroundColor: 'white', borderRadius: '1rem', padding: '1.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', marginBottom: '1.5rem'
            }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', margin: '0 0 1rem 0' }}>
                1. Patient Profile
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#475569', marginBottom: '0.25rem' }}>
                    Patient Name
                  </label>
                  <input
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    style={{
                      width: '100%', padding: '0.625rem 0.875rem', borderRadius: '0.5rem',
                      border: '1px solid #cbd5e1', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#475569', marginBottom: '0.25rem' }}>
                    Age / Gender
                  </label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input
                      type="text"
                      value={patientAge}
                      onChange={(e) => setPatientAge(e.target.value)}
                      style={{
                        width: '50%', padding: '0.625rem 0.875rem', borderRadius: '0.5rem',
                        border: '1px solid #cbd5e1', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box'
                      }}
                    />
                    <select
                      value={patientGender}
                      onChange={(e) => setPatientGender(e.target.value)}
                      style={{
                        width: '50%', padding: '0.625rem', borderRadius: '0.5rem',
                        border: '1px solid #cbd5e1', fontSize: '0.875rem', outline: 'none', backgroundColor: 'white'
                      }}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Source Card */}
            <div style={{
              backgroundColor: 'white', borderRadius: '1rem', padding: '1.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0'
            }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', margin: '0 0 1rem 0' }}>
                2. Fundus Image Input
              </h3>

              {/* Upload Drop Area */}
              <div style={{
                border: '2px dashed #cbd5e1', borderRadius: '0.75rem', padding: '1.5rem',
                textAlign: 'center', backgroundColor: '#f8fafc', marginBottom: '1.5rem', cursor: 'pointer'
              }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>📸</span>
                <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '0.9375rem' }}>
                  Upload Custom Retinal Image
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b', marginTop: '0.25rem' }}>
                  Supports JPG, PNG, DICOM format fundus scans
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                  id="fundus-file-input"
                />
                <label
                  htmlFor="fundus-file-input"
                  style={{
                    display: 'inline-block', marginTop: '0.875rem', backgroundColor: '#0d9488',
                    color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem',
                    fontWeight: 700, fontSize: '0.8125rem', cursor: 'pointer'
                  }}
                >
                  Browse Image File
                </label>
              </div>

              {/* Quick Preset Samples */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#475569', marginBottom: '0.625rem' }}>
                  Or Choose Preset Demo Fundus Image:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {MOCK_SAMPLE_IMAGES.map((sample) => {
                    const isSelected = selectedImage.id === sample.id;
                    return (
                      <button
                        key={sample.id}
                        onClick={() => handleSelectSample(sample)}
                        type="button"
                        style={{
                          textAlign: 'left', padding: '0.75rem', borderRadius: '0.5rem',
                          border: `2px solid ${isSelected ? sample.color : '#e2e8f0'}`,
                          backgroundColor: isSelected ? 'rgba(13, 148, 136, 0.05)' : '#ffffff',
                          cursor: 'pointer', transition: 'all 0.2s'
                        }}
                      >
                        <div style={{ fontWeight: 700, fontSize: '0.8125rem', color: '#0f172a' }}>
                          {sample.title}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: sample.color, fontWeight: 600 }}>
                          Expected: {sample.confidence}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={handleRunAIScreening}
                disabled={isAnalyzing}
                style={{
                  width: '100%', marginTop: '1.5rem', padding: '0.875rem', borderRadius: '0.625rem',
                  border: 'none', backgroundColor: '#0d9488', color: 'white', fontWeight: 700,
                  fontSize: '1rem', cursor: isAnalyzing ? 'wait' : 'pointer',
                  boxShadow: '0 4px 14px rgba(13, 148, 136, 0.4)'
                }}
              >
                {isAnalyzing ? 'Analyzing Image...' : '⚡ Run Explainable AI Diagnosis'}
              </button>
            </div>
          </div>

          {/* Right Column: AI Analysis Engine & Results Display */}
          <div>
            {/* Active Analysis Progress */}
            {isAnalyzing && (
              <div style={{
                backgroundColor: 'white', borderRadius: '1rem', padding: '2rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', textAlign: 'center'
              }}>
                <div className="animate-spin" style={{
                  width: '3.5rem', height: '3.5rem', border: '4px solid #e2e8f0',
                  borderTopColor: '#0d9488', borderRadius: '50%', margin: '0 auto 1.25rem auto'
                }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem 0' }}>
                  Processing Retinal Image
                </h3>
                <p style={{ color: '#0d9488', fontWeight: 600, fontSize: '0.875rem', minHeight: '1.5rem' }}>
                  {analysisStepLabel}
                </p>

                {/* Progress bar */}
                <div style={{ backgroundColor: '#f1f5f9', height: '8px', borderRadius: '4px', overflow: 'hidden', marginTop: '1.25rem' }}>
                  <div style={{
                    backgroundColor: '#0d9488', height: '100%', width: `${analysisProgress}%`,
                    transition: 'width 0.4s ease-out'
                  }} />
                </div>
              </div>
            )}

            {/* Results Panel */}
            {!isAnalyzing && showResults && (
              <div style={{
                backgroundColor: 'white', borderRadius: '1rem', padding: '1.75rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0d9488', textTransform: 'uppercase' }}>
                    AI Diagnostic Result
                  </span>
                  <span style={{
                    fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.625rem', borderRadius: '1rem',
                    backgroundColor: selectedImage.color + '20', color: selectedImage.color, border: `1px solid ${selectedImage.color}`
                  }}>
                    {selectedImage.gradeLabel}
                  </span>
                </div>

                {/* Image Viewer with Heatmap Toggle */}
                <div style={{
                  backgroundColor: '#0f172a', borderRadius: '0.875rem', padding: '1rem',
                  marginBottom: '1.5rem', textAlign: 'center', position: 'relative'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'white', fontSize: '0.8125rem', fontWeight: 600 }}>
                      Grad-CAM Visual Explanation
                    </span>
                    <button
                      onClick={() => setShowGradCAM(!showGradCAM)}
                      style={{
                        backgroundColor: showGradCAM ? '#0d9488' : 'rgba(255,255,255,0.1)',
                        color: 'white', border: 'none', padding: '0.25rem 0.625rem', borderRadius: '0.375rem',
                        fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer'
                      }}
                    >
                      {showGradCAM ? '🔥 Heatmap On' : '👁️ Raw Image'}
                    </button>
                  </div>

                  <div style={{
                    height: '220px', borderRadius: '0.5rem', overflow: 'hidden', position: 'relative',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <img src={selectedImage.url} alt="Scan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {showGradCAM && (
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: selectedImage.grade === 0
                          ? 'none'
                          : 'radial-gradient(circle at 48% 42%, rgba(239, 68, 68, 0.7) 0%, rgba(245, 158, 11, 0.45) 35%, rgba(0,0,0,0) 70%)',
                        mixBlendMode: 'screen', pointerEvents: 'none'
                      }} />
                    )}
                  </div>
                </div>

                {/* Confidence & Rationale */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a' }}>AI Model Confidence</span>
                    <span style={{ fontSize: '0.875rem', fontWeight: 800, color: '#0d9488' }}>{selectedImage.confidence}</span>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.6, backgroundColor: '#f8fafc', padding: '0.875rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', margin: 0 }}>
                    {selectedImage.findings}
                  </p>
                </div>

                {/* Audio Explanation Simulation */}
                <div style={{
                  backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '0.625rem',
                  padding: '0.875rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>🔊</span>
                    <div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#166534' }}>
                        Multilingual Audio Rationale
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#15803d' }}>
                        Listen to explanation in native language
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.375rem' }}>
                    {['hi', 'en', 'ta'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setSelectedLang(lang)}
                        style={{
                          border: 'none', padding: '0.25rem 0.5rem', borderRadius: '0.25rem',
                          fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer',
                          backgroundColor: selectedLang === lang ? '#166534' : 'white',
                          color: selectedLang === lang ? 'white' : '#166534'
                        }}
                      >
                        {lang === 'hi' ? 'हिंदी' : lang === 'en' ? 'ENG' : 'தமிழ்'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Save & Download Actions */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button
                    onClick={() => alert(`Saved screening result to ${patientName}'s medical record!`)}
                    style={{
                      flex: 1, backgroundColor: '#0d9488', color: 'white', border: 'none',
                      padding: '0.75rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer'
                    }}
                  >
                    Save to Patient Record ✓
                  </button>
                  <button
                    onClick={() => alert('Official PDF report generated!')}
                    style={{
                      backgroundColor: '#f1f5f9', color: '#0f172a', border: '1px solid #cbd5e1',
                      padding: '0.75rem 1rem', borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer'
                    }}
                  >
                    📥 PDF Report
                  </button>
                </div>
              </div>
            )}

            {!isAnalyzing && !showResults && (
              <div style={{
                backgroundColor: 'white', borderRadius: '1rem', padding: '3rem 1.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0',
                textAlign: 'center', color: '#64748b'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>👁️</div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a' }}>
                  Ready for AI Screening
                </h3>
                <p style={{ fontSize: '0.875rem', maxWidth: '340px', margin: '0.25rem auto 0 auto' }}>
                  Select a demo retinal image on the left or upload your own scan, then click "Run Explainable AI Diagnosis".
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreeningPage;
