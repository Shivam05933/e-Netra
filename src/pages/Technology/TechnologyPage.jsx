// src/pages/Technology/TechnologyPage.jsx
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import CTASection from '../../components/common/CTASection';
import { Sliders, ShieldCheck, Crop, Maximize2, Sparkles, Sun, Palette, Activity, Eye, CheckCircle2, ChevronRight, CircleAlert } from 'lucide-react';

const PREPROCESSING_STEPS = [
  { title: 'Image Quality Validation', desc: 'Detects motion blur, out-of-focus captures, and inadequate exposure.', icon: ShieldCheck },
  { title: 'FOV Cropping', desc: 'Isolates the circular retinal field-of-view from dark background padding.', icon: Crop },
  { title: 'Standardized Resizing', desc: 'Rescales fundus scans to uniform dimensions (512x512) for model input.', icon: Maximize2 },
  { title: 'Noise Reduction', desc: 'Applies median filtering to attenuate sensor noise without blurring vessel edges.', icon: Sparkles },
  { title: 'Brightness & Contrast Normalization', desc: 'CLAHE (Contrast Limited Adaptive Histogram Equalization) enhances micro-lesions.', icon: Sliders },
  { title: 'Illumination Correction', desc: 'Corrects non-uniform light falloff across peripheral retinal quadrants.', icon: Sun },
  { title: 'Color Normalization', desc: 'Normalizes RGB channels against standard color reference distributions.', icon: Palette },
];

const FEATURE_CARDS = [
  {
    name: 'Microaneurysms',
    tag: 'Early Sign',
    color: '#EF4444',
    desc: 'Tiny red swellings in retinal capillaries, often the earliest detectable sign of diabetic retinopathy.',
    visual: 'Pinpoint red vascular outpouchings'
  },
  {
    name: 'Haemorrhages',
    tag: 'Vascular Lesion',
    color: '#DC2626',
    desc: 'Dot, blot, or flame-shaped intraretinal bleeding caused by microvascular rupture.',
    visual: 'Deep blot and superficial flame spots'
  },
  {
    name: 'Hard Exudates',
    tag: 'Lipid Deposit',
    color: '#F59E0B',
    desc: 'Yellowish lipid and lipoprotein deposits leaking from abnormally permeable retinal vessels.',
    visual: 'Waxy yellow lesions with sharp margins'
  },
  {
    name: 'Cotton-Wool Spots',
    tag: 'Ischemic Sign',
    color: '#6366F1',
    desc: 'Fluffy white patches in the nerve fiber layer resulting from localized arteriolar occlusion.',
    visual: 'Soft pale lesions with feathery borders'
  }
];

const SEVERITY_STAGES = [
  { grade: 'Grade 0', title: 'No DR', color: '#10B981', bg: '#F0FDF4', desc: 'No microaneurysms or retinal lesions identified.' },
  { grade: 'Grade 1', title: 'Mild NPDR', color: '#84CC16', bg: '#F7FEE7', desc: 'Microaneurysms present only.' },
  { grade: 'Grade 2', title: 'Moderate NPDR', color: '#F59E0B', bg: '#FFFBEB', desc: 'More than microaneurysms, less than severe NPDR.' },
  { grade: 'Grade 3', title: 'Severe NPDR', color: '#F97316', bg: '#FFF7ED', desc: '>20 hemorrhages in 4 quadrants, or venous beading in 2+.' },
  { grade: 'Grade 4', title: 'Proliferative DR (PDR)', color: '#EF4444', bg: '#FEF2F2', desc: 'Neovascularization or vitreous/preretinal hemorrhage.' }
];

const TechnologyPage = () => {
  return (
    <div style={{ backgroundColor: '#F5FEFF', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ padding: '4rem 0 3rem 0', textAlign: 'center' }}>
        <div className="drishti-container" style={{ maxWidth: '900px' }}>
          <span className="drishti-badge" style={{ marginBottom: '1rem' }}>
            AI & Computer Vision
          </span>
          <h1 className="hero-heading" style={{ marginBottom: '1.25rem' }}>
            Inside the Intelligence Behind Drishti
          </h1>
          <p className="text-body-large" style={{ maxWidth: '760px', margin: '0 auto' }}>
            Explore the multi-stage image processing pipeline, deep lesion detection features, and standard severity classification framework.
          </p>
        </div>
      </section>

      {/* Section 1: Image Processing */}
      <section style={{ padding: '4rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="drishti-container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <span className="drishti-badge" style={{ marginBottom: '0.5rem' }}>
              Phase 1: Preprocessing
            </span>
            <h2 className="section-heading" style={{ fontSize: '2.25rem' }}>
              Image Processing & Quality Normalization
            </h2>
            <p className="text-body-standard">
              Raw fundus images vary widely in illumination and contrast. Drishti standardizes scans before feeding them to deep learning classifiers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {PREPROCESSING_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="drishti-card">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', backgroundColor: '#E0EBF8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon style={{ width: '1.25rem', height: '1.25rem', color: '#0E2F76' }} />
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#2563EB', backgroundColor: '#F5FEFF', padding: '0.2rem 0.6rem', borderRadius: '0.375rem', border: '1px solid rgba(170,192,225,0.4)' }}>
                      Step 0{idx + 1}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0E2F76', marginBottom: '0.375rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', margin: 0, lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: AI Detection - Feature Cards */}
      <section style={{ padding: '5rem 0' }}>
        <div className="drishti-container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="drishti-badge" style={{ marginBottom: '0.5rem' }}>
              Phase 2: Lesion Detection
            </span>
            <h2 className="section-heading" style={{ fontSize: '2.25rem' }}>
              Targeted Retinal Feature Indicators
            </h2>
            <p className="text-body-standard">
              Drishti's feature extraction modules analyze key pathological markers associated with Diabetic Retinopathy progression.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {FEATURE_CARDS.map((card) => (
              <div key={card.name} className="drishti-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: card.color, backgroundColor: card.color + '15', padding: '0.2rem 0.6rem', borderRadius: '0.5rem', border: `1px solid ${card.color}40` }}>
                      {card.tag}
                    </span>
                    <Activity style={{ width: '1.25rem', height: '1.25rem', color: card.color }} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0E2F76', marginBottom: '0.5rem' }}>
                    {card.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {card.desc}
                  </p>
                </div>

                <div style={{ backgroundColor: '#F5FEFF', padding: '0.75rem', borderRadius: '0.75rem', border: '1px solid rgba(170,192,225,0.4)', fontSize: '0.75rem', color: '#0E2F76', fontWeight: 600 }}>
                  🔍 Visual Indicator: {card.visual}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Severity Assessment Progression */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="drishti-container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <span className="drishti-badge" style={{ marginBottom: '0.5rem' }}>
              Phase 3: Classification Scale
            </span>
            <h2 className="section-heading" style={{ fontSize: '2.25rem' }}>
              Standard Severity Progression (Grades 0–4)
            </h2>
            <p className="text-body-standard">
              Screening outputs align with international Diabetic Retinopathy severity scales for clear clinical communication.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {SEVERITY_STAGES.map((stage) => (
              <div
                key={stage.grade}
                style={{
                  backgroundColor: stage.bg,
                  borderRadius: '1.25rem',
                  padding: '1.5rem 1.25rem',
                  border: `1.5px solid ${stage.color}`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: stage.color, textTransform: 'uppercase' }}>
                    {stage.grade}
                  </span>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0E2F76', margin: '0.25rem 0 0.5rem 0' }}>
                    {stage.title}
                  </h4>
                  <p style={{ fontSize: '0.8125rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="See Explainable AI in Action"
        subtext="Explore how Grad-CAM heatmaps highlight retinal regions for transparent decision support."
        buttonText="Explore Explainable AI"
        buttonLink="/explainable-ai"
      />

      <Footer />
    </div>
  );
};

export default TechnologyPage;
