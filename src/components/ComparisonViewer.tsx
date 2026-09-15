import React, { useState } from 'react';
import { Artifact } from '../types';
import { 
  GitCompare, 
  Sparkles, 
  Layers, 
  Calendar, 
  MapPin, 
  ArrowRight,
  ZoomIn,
  CheckCircle2,
  Info
} from 'lucide-react';

interface ComparisonViewerProps {
  artifacts: Artifact[];
  onSelectArtifact: (artifact: Artifact) => void;
}

export const ComparisonViewer: React.FC<ComparisonViewerProps> = ({
  artifacts,
  onSelectArtifact
}) => {
  const [selectedArtifactId, setSelectedArtifactId] = useState<string>('ajanta-padmapani');
  const [dualArtifactAId, setDualArtifactAId] = useState<string>('dancing-girl-mohenjodaro');
  const [dualArtifactBId, setDualArtifactBId] = useState<string>('chola-nataraja-bronze');
  const [mode, setMode] = useState<'preservation' | 'cross-era'>('preservation');

  const currentArtifact = artifacts.find(a => a.id === selectedArtifactId) || artifacts[0];
  const artA = artifacts.find(a => a.id === dualArtifactAId) || artifacts[0];
  const artB = artifacts.find(a => a.id === dualArtifactBId) || artifacts[1];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold flex items-center gap-1.5">
              <GitCompare className="w-3.5 h-3.5 text-amber-400" />
              Curatorial Visual Analysis Suite
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-stone-100 mt-1">
              Preservation Studies & Cross-Era Comparative Analysis
            </h2>
            <p className="text-xs text-stone-400 mt-1">
              Perform deep visual comparative inquiry: examine preservation layers, pigment condition, or compare two epoch-defining artifacts side-by-side.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="inline-flex bg-stone-950 p-1.5 rounded-xl border border-stone-800 self-start md:self-auto text-xs">
            <button
              onClick={() => setMode('preservation')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                mode === 'preservation'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              1. Preservation & Macro Detail
            </button>
            <button
              onClick={() => setMode('cross-era')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                mode === 'cross-era'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              2. Cross-Epoch Comparative Dual View
            </button>
          </div>
        </div>
      </div>

      {mode === 'preservation' ? (
        /* Preservation & Macro Analysis Mode */
        <div className="space-y-6">
          {/* Artifact Selector Ribbon */}
          <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800 flex items-center gap-3 overflow-x-auto scrollbar-none">
            <span className="text-xs font-semibold text-amber-400 shrink-0 uppercase tracking-wider">
              Select Artifact for Study:
            </span>
            <div className="flex gap-2">
              {artifacts.map((art) => (
                <button
                  key={art.id}
                  onClick={() => setSelectedArtifactId(art.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all border cursor-pointer ${
                    selectedArtifactId === art.id
                      ? 'bg-amber-600/30 text-amber-200 border-amber-500/60 font-medium'
                      : 'bg-stone-950/80 text-stone-400 border-stone-800 hover:text-stone-200'
                  }`}
                >
                  {art.order}. {art.name.split('(')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Dual Side-by-Side Canvas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* View A: Primary Artifact State */}
            <div className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-xl flex flex-col">
              <div className="px-4 py-3 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  View A: Current Museum State / In Situ Form
                </span>
                <span className="text-[11px] text-stone-400">{currentArtifact.presentLocation}</span>
              </div>
              <div className="p-4 bg-stone-950 flex-1 flex items-center justify-center min-h-[360px]">
                <img
                  src={currentArtifact.imageUrl}
                  alt={currentArtifact.name}
                  referrerPolicy="no-referrer"
                  className="max-h-80 w-auto object-contain rounded-lg shadow"
                />
              </div>
              <div className="p-4 bg-stone-900/80 border-t border-stone-800 text-xs text-stone-300">
                <h4 className="font-bold text-stone-100 font-display mb-1">{currentArtifact.name}</h4>
                <p className="font-serif-body text-stone-300">{currentArtifact.description}</p>
              </div>
            </div>

            {/* View B: Macro Inspection / Digital Preservation Detail */}
            <div className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-xl flex flex-col">
              <div className="px-4 py-3 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  View B: {currentArtifact.comparisonTitle || 'Macro & Preserved Detail'}
                </span>
                <span className="text-[11px] text-emerald-400">Curatorial Field Study</span>
              </div>
              <div className="p-4 bg-stone-950 flex-1 flex items-center justify-center min-h-[360px]">
                <img
                  src={currentArtifact.comparisonImageUrl || currentArtifact.imageUrl}
                  alt={currentArtifact.comparisonTitle || currentArtifact.name}
                  referrerPolicy="no-referrer"
                  className="max-h-80 w-auto object-contain rounded-lg shadow"
                />
              </div>
              <div className="p-4 bg-stone-900/80 border-t border-stone-800 text-xs text-stone-300">
                <h4 className="font-bold text-amber-300 font-display mb-1">
                  {currentArtifact.comparisonTitle || 'Preservation Findings'}
                </h4>
                <p className="font-serif-body text-stone-300">
                  {currentArtifact.comparisonNote || 'High-definition inspection reveals precise surface patina, lapidary striations, and mineral pigment bonding characteristic of the era.'}
                </p>
              </div>
            </div>
          </div>

          {/* Curatorial Takeaway Callout */}
          <div className="bg-amber-950/20 border border-amber-600/30 rounded-2xl p-5 text-xs text-stone-200 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-amber-300 text-sm font-display">
                Pedagogical Value of Preservation & Macro Analysis:
              </h4>
              <p className="leading-relaxed">
                By comparing weathering sequences (e.g., mineral oxidation on Bhimbetka sandstone, candle-smoke deposits on Ajanta tempera, and bronze alloy crystallization on Chola sculptures), students learn that ancient artworks are living physical materials that have undergone complex environmental transformations across centuries.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Cross-Era Dual Comparison Mode */
        <div className="space-y-6">
          {/* Dual Selection Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-stone-900/60 p-4 rounded-xl border border-stone-800 text-xs">
            <div>
              <label className="block text-amber-400 font-semibold mb-1 uppercase tracking-wider">
                Select Primary Artifact (A):
              </label>
              <select
                value={dualArtifactAId}
                onChange={(e) => setDualArtifactAId(e.target.value)}
                className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2 text-stone-200 focus:outline-none focus:border-amber-500"
              >
                {artifacts.map(a => (
                  <option key={a.id} value={a.id}>
                    {a.order}. {a.name} ({a.approximateDate})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-amber-400 font-semibold mb-1 uppercase tracking-wider">
                Select Comparative Artifact (B):
              </label>
              <select
                value={dualArtifactBId}
                onChange={(e) => setDualArtifactBId(e.target.value)}
                className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2 text-stone-200 focus:outline-none focus:border-amber-500"
              >
                {artifacts.map(a => (
                  <option key={a.id} value={a.id}>
                    {a.order}. {a.name} ({a.approximateDate})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Side-by-Side Deep Evolutionary Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Artifact A Card */}
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 flex flex-col justify-between space-y-4">
              <div className="h-64 bg-stone-950 rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src={artA.imageUrl}
                  alt={artA.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-amber-500 font-semibold block">
                  {artA.historicalPeriod} • {artA.approximateDate}
                </span>
                <h3 className="text-lg font-bold font-display text-stone-100 mt-0.5">{artA.name}</h3>
                <p className="text-xs text-stone-300 font-serif-body mt-2 leading-relaxed">
                  {artA.description}
                </p>
              </div>

              <div className="bg-stone-950/70 p-3 rounded-xl border border-stone-800 text-xs space-y-1">
                <p><strong className="text-stone-400">Medium:</strong> <span className="text-stone-200">{artA.medium}</span></p>
                <p><strong className="text-stone-400">Significance:</strong> <span className="text-stone-300">{artA.artisticSignificance}</span></p>
              </div>

              <button
                onClick={() => onSelectArtifact(artA)}
                className="w-full py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-medium transition-colors"
              >
                View Full Dossier for {artA.name.split('(')[0]}
              </button>
            </div>

            {/* Artifact B Card */}
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 flex flex-col justify-between space-y-4">
              <div className="h-64 bg-stone-950 rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src={artB.imageUrl}
                  alt={artB.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-amber-500 font-semibold block">
                  {artB.historicalPeriod} • {artB.approximateDate}
                </span>
                <h3 className="text-lg font-bold font-display text-stone-100 mt-0.5">{artB.name}</h3>
                <p className="text-xs text-stone-300 font-serif-body mt-2 leading-relaxed">
                  {artB.description}
                </p>
              </div>

              <div className="bg-stone-950/70 p-3 rounded-xl border border-stone-800 text-xs space-y-1">
                <p><strong className="text-stone-400">Medium:</strong> <span className="text-stone-200">{artB.medium}</span></p>
                <p><strong className="text-stone-400">Significance:</strong> <span className="text-stone-300">{artB.artisticSignificance}</span></p>
              </div>

              <button
                onClick={() => onSelectArtifact(artB)}
                className="w-full py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-medium transition-colors"
              >
                View Full Dossier for {artB.name.split('(')[0]}
              </button>
            </div>
          </div>

          {/* Temporal Leap Analysis */}
          <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800 text-xs text-stone-300 space-y-2">
            <h4 className="text-amber-400 font-bold text-sm font-display flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Chronological & Aesthetic Delta:
            </h4>
            <p className="leading-relaxed">
              Temporal span between these two masterworks: <strong className="text-amber-300">{Math.abs(artA.numericSortYear - artB.numericSortYear)} years</strong>. 
              Notice how the philosophical intention shifted from {artA.historicalPeriod} ({artA.dynastyOrMovement}) to {artB.historicalPeriod} ({artB.dynastyOrMovement}), reflecting deep transformations in theological doctrine, imperial state patronage, and metallurgical or painterly technology.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
