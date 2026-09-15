import React, { useState } from 'react';
import { TECHNICAL_GUIDES } from '../data/technicalGuide';
import { 
  Code2, 
  Copy, 
  Check, 
  Award, 
  FileSpreadsheet, 
  Layers, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const TechnicalGuideView: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<'timelinejs' | 'tikitoki'>('timelinejs');
  const [copiedCsv, setCopiedCsv] = useState(false);

  const handleCopyCsv = () => {
    navigator.clipboard.writeText(TECHNICAL_GUIDES.timelineJS.sampleCsvData);
    setCopiedCsv(true);
    setTimeout(() => setCopiedCsv(false), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
        <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold flex items-center gap-1.5">
          <Code2 className="w-4 h-4 text-amber-400" />
          Technical Implementation Blueprint
        </span>
        <h2 className="text-xl sm:text-2xl font-bold font-display text-stone-100 mt-1">
          Building the Interactive Timeline in TimelineJS & Tiki-Toki
        </h2>
        <p className="text-xs text-stone-400 mt-1">
          Complete step-by-step pedagogical instructions, Google Sheets schema, raw CSV dataset, and authoritative platform evaluation.
        </p>
      </div>

      {/* Authoritative Platform Recommendation Box */}
      <div className="bg-gradient-to-r from-amber-950/40 via-stone-900 to-amber-950/30 border border-amber-500/40 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex items-center gap-2.5">
          <Award className="w-5 h-5 text-amber-400 shrink-0" />
          <h3 className="text-base font-bold text-amber-300 font-display">
            Curatorial & Academic Recommendation: {TECHNICAL_GUIDES.recommendation.recommendedTool}
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-serif-body">
          {TECHNICAL_GUIDES.recommendation.verdict}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {TECHNICAL_GUIDES.recommendation.detailedRationale.map((point, index) => (
            <div key={index} className="p-3 bg-stone-950/60 rounded-xl border border-stone-800 text-xs text-stone-300 space-y-1">
              <span className="text-amber-400 font-semibold block">{point.split(':')[0]}:</span>
              <p className="text-stone-300 leading-relaxed">{point.split(':')[1]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Head-to-Head Comparison Matrix */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-display">
          Comparative Evaluation: TimelineJS vs. Tiki-Toki
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-stone-300 border border-stone-800 rounded-xl overflow-hidden">
            <thead className="bg-stone-950 text-stone-200 uppercase tracking-wider border-b border-stone-800">
              <tr>
                <th className="p-3">Evaluation Parameter</th>
                <th className="p-3 text-amber-400">TimelineJS (Knight Lab)</th>
                <th className="p-3 text-stone-400">Tiki-Toki (Webalon)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/70 bg-stone-950/30">
              <tr>
                <td className="p-3 font-medium text-stone-200">Prehistoric & BCE Date Handling</td>
                <td className="p-3 text-emerald-400">Native negative integer support (e.g., -8000 BCE) without scaling glitches.</td>
                <td className="p-3 text-stone-400">Supports BC dates, but requires manual toggling and can crowd long timelines.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-200">Academic Provenance & Citation Fields</td>
                <td className="p-3 text-emerald-400">Dedicated 'Media Credit' & 'Media Caption' fields permanently displayed on slide.</td>
                <td className="p-3 text-stone-400">Credit hidden inside media popup overlay; easy for students to overlook.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-200">Data Architecture & Grading Workflow</td>
                <td className="p-3 text-emerald-400">Stored in public Google Sheet; teachers can grade raw data directly.</td>
                <td className="p-3 text-stone-400">Stored in proprietary cloud database; difficult to batch-export or version-control.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-200">Cost & Limits</td>
                <td className="p-3 text-emerald-400">100% Free, Ad-free, Open-source (Northwestern Univ).</td>
                <td className="p-3 text-amber-400">Free tier capped at 1 timeline and 200 stories; embeds require paid tier.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-200">Aesthetic Archetype</td>
                <td className="p-3 text-emerald-400">Subdued digital museum typography, responsive on all devices.</td>
                <td className="p-3 text-stone-400">3D gaming-style perspective, visually flashy but harder to read in seminars.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Platform Tabs Switcher */}
      <div className="flex items-center gap-2 border-b border-stone-800 pb-3">
        <button
          onClick={() => setActivePlatform('timelinejs')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            activePlatform === 'timelinejs'
              ? 'bg-amber-600 text-white shadow'
              : 'text-stone-400 hover:text-stone-200 bg-stone-900 border border-stone-800'
          }`}
        >
          <FileSpreadsheet className="w-4 h-4" />
          TimelineJS Step-by-Step & Dataset
        </button>

        <button
          onClick={() => setActivePlatform('tikitoki')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            activePlatform === 'tikitoki'
              ? 'bg-amber-600 text-white shadow'
              : 'text-stone-400 hover:text-stone-200 bg-stone-900 border border-stone-800'
          }`}
        >
          <Layers className="w-4 h-4" />
          Tiki-Toki Step-by-Step & 3D Config
        </button>
      </div>

      {/* Tab 1: TimelineJS Detailed Guide */}
      {activePlatform === 'timelinejs' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          {/* One-Click Copy Dataset Banner */}
          <div className="bg-stone-950 border border-amber-600/40 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                Pre-Formatted 15-Artifact Dataset (Google Sheets / CSV)
              </span>
              <p className="text-xs text-stone-300 mt-1">
                Directly paste into your Google Sheet to generate your TimelineJS project in less than 2 minutes.
              </p>
            </div>
            <button
              onClick={handleCopyCsv}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-stone-100 rounded-xl text-xs font-bold transition-all shadow flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              {copiedCsv ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>CSV Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Full Google Sheets CSV</span>
                </>
              )}
            </button>
          </div>

          {/* Step-by-step instructions */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-display">
              Step-by-Step TimelineJS Walkthrough
            </h3>
            {TECHNICAL_GUIDES.timelineJS.steps.map((step) => (
              <div key={step.stepNumber} className="bg-stone-900/80 border border-stone-800 rounded-xl p-4 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-600/30 text-amber-300 border border-amber-500/40 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {step.stepNumber}
                </span>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-stone-100 font-display">{step.title}</h4>
                  <p className="text-xs text-stone-300 leading-relaxed font-serif-body">{step.instructions}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CSV Code Preview Window */}
          <div className="bg-stone-950 border border-stone-800 rounded-xl overflow-hidden">
            <div className="px-4 py-2.5 bg-stone-900/80 border-b border-stone-800 flex items-center justify-between text-xs">
              <span className="text-stone-300 font-mono">timelinejs_indian_art_dataset.csv</span>
              <span className="text-stone-400">18 Columns • 15 Rows</span>
            </div>
            <pre className="p-4 text-[11px] font-mono text-amber-200/90 overflow-x-auto max-h-64 leading-relaxed whitespace-pre">
              {TECHNICAL_GUIDES.timelineJS.sampleCsvData}
            </pre>
          </div>
        </div>
      )}

      {/* Tab 2: Tiki-Toki Detailed Guide */}
      {activePlatform === 'tikitoki' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-display">
              Step-by-Step Tiki-Toki Setup Walkthrough
            </h3>
            {TECHNICAL_GUIDES.tikiToki.steps.map((step) => (
              <div key={step.stepNumber} className="bg-stone-900/80 border border-stone-800 rounded-xl p-4 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-600/30 text-amber-300 border border-amber-500/40 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {step.stepNumber}
                </span>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-stone-100 font-display">{step.title}</h4>
                  <p className="text-xs text-stone-300 leading-relaxed font-serif-body">{step.instructions}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tiki-Toki Aesthetic Design Advice */}
          <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-5 space-y-3 text-xs text-stone-300">
            <h4 className="font-bold text-amber-300 text-sm font-display">
              How to Achieve an Authentic Museum Aesthetic in Tiki-Toki:
            </h4>
            <ul className="list-disc list-inside space-y-1.5 text-stone-300 font-serif-body">
              <li><strong>Disable Neon Colors:</strong> Replace default high-saturation neon category markers with authentic mineral pigment shades: Terracotta Red (#B91C1C), Sandstone Ochre (#D97706), Lapis Lazuli (#1D4ED8), and Basalt Charcoal (#292524).</li>
              <li><strong>Card Spacing:</strong> Set timeline view to 'Equal Spacing' rather than proportional duration mode to prevent the 5,000-year gap between Bhimbetka and Harappa from compressing all medieval and modern artworks into a dense clump at the far right.</li>
              <li><strong>Font Hierarchy:</strong> Select a classical serif font for the title and card headers to match the gravitas of Indian classical art history.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
