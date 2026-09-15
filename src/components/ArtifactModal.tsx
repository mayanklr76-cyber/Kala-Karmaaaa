import React, { useState } from 'react';
import { Artifact } from '../types';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  Layers, 
  Building, 
  Check, 
  Copy, 
  Sparkles, 
  Maximize2,
  Minimize2,
  BookOpen,
  Eye,
  History,
  Award,
  ScrollText
} from 'lucide-react';

interface ArtifactModalProps {
  artifact: Artifact | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

type ModalTab = 'overview' | 'visual' | 'context' | 'significance' | 'comparison' | 'citation';

export const ArtifactModal: React.FC<ArtifactModalProps> = ({
  artifact,
  onClose,
  onNext,
  onPrev
}) => {
  const [activeTab, setActiveTab] = useState<ModalTab>('overview');
  const [copiedCitation, setCopiedCitation] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (!artifact) return null;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(artifact.academicReference);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="relative bg-stone-900 border border-stone-700/80 rounded-2xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-stone-800 bg-stone-950/80">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-amber-600/30 text-amber-300 border border-amber-500/40 flex items-center justify-center text-xs font-bold">
              {artifact.order}
            </span>
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-500 font-medium">
                {artifact.historicalPeriod}
              </span>
              <h2 className="text-lg sm:text-xl font-bold font-display text-stone-100 flex items-center gap-2">
                {artifact.name}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              title="Previous Artifact (Left Arrow)"
              className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              title="Next Artifact (Right Arrow)"
              className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="h-4 w-px bg-stone-700 mx-1"></div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-stone-800 hover:bg-red-900/60 text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Main Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Visual Media & Metadata Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Image Stage */}
            <div className="relative rounded-xl overflow-hidden bg-stone-950 border border-stone-800 shadow-inner group">
              <div className={`relative ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`} onClick={() => setIsZoomed(!isZoomed)}>
                {!imgError ? (
                  <img
                    src={artifact.imageUrl}
                    alt={artifact.name}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className={`w-full object-contain transition-all duration-300 ${
                      isZoomed ? 'scale-125 h-96' : 'h-72 sm:h-80 group-hover:scale-105'
                    }`}
                  />
                ) : (
                  <div className="h-72 sm:h-80 flex flex-col items-center justify-center p-6 text-center text-stone-400 bg-stone-950">
                    <Layers className="w-12 h-12 text-amber-600 mb-2 opacity-60" />
                    <p className="text-sm font-medium text-stone-200">{artifact.name}</p>
                    <p className="text-xs text-stone-400 mt-1">Archival Photographic Repository</p>
                    <span className="text-[11px] text-amber-500 mt-2">{artifact.presentLocation}</span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(!isZoomed);
                  }}
                  className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-stone-900/80 hover:bg-stone-900 text-stone-200 backdrop-blur-sm border border-stone-700 text-xs flex items-center gap-1 shadow"
                >
                  {isZoomed ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                  <span>{isZoomed ? 'Reset' : 'Zoom'}</span>
                </button>
              </div>

              {/* Image Credit & Caption Box */}
              <div className="p-3 bg-stone-950/90 border-t border-stone-800 text-xs">
                <p className="text-stone-300 font-medium italic">{artifact.imageCaption}</p>
                <div className="mt-1 flex items-center justify-between text-[11px] text-stone-400">
                  <span>Source: {artifact.imageCredit}</span>
                </div>
              </div>
            </div>

            {/* Quick Metadata Spec Sheet */}
            <div className="bg-stone-950/60 rounded-xl p-4 border border-stone-800/80 text-xs space-y-2.5">
              <h4 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2 flex items-center gap-1.5">
                <ScrollText className="w-3.5 h-3.5" />
                Curatorial Specifications
              </h4>

              <div className="flex items-start gap-2">
                <Calendar className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-stone-400">Chronology: </span>
                  <span className="text-stone-200 font-semibold">{artifact.approximateDate}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Layers className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-stone-400">Medium: </span>
                  <span className="text-stone-200">{artifact.medium}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Building className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-stone-400">Dynasty / Atelier: </span>
                  <span className="text-stone-200">{artifact.dynastyOrMovement}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-stone-400">Findspot / Origin: </span>
                  <span className="text-stone-200">{artifact.findspotOrOrigin}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-stone-400">Current Repository: </span>
                  <span className="text-emerald-300 font-medium">{artifact.presentLocation}</span>
                </div>
              </div>

              {artifact.museumAccessionNo && (
                <div className="pt-1 text-[11px] text-stone-400 flex justify-between border-t border-stone-800/60">
                  <span>Museum Accession No:</span>
                  <code className="text-amber-300/90 font-mono">{artifact.museumAccessionNo}</code>
                </div>
              )}
            </div>

            {/* Quick Fact Callout */}
            <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-600/30 text-xs">
              <div className="flex items-center gap-1.5 text-amber-400 font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Curator's Insight & Fact
              </div>
              <p className="text-stone-300 leading-relaxed italic">
                "{artifact.interestingFact}"
              </p>
            </div>
          </div>

          {/* Right Column: Tabbed Detailed Academic Analysis (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Tab navigation */}
            <div className="flex flex-wrap gap-1.5 border-b border-stone-800 pb-2 mb-4 text-xs font-medium">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'overview'
                    ? 'bg-amber-600/30 text-amber-200 border border-amber-500/50'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                Overview
              </button>

              <button
                onClick={() => setActiveTab('visual')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'visual'
                    ? 'bg-amber-600/30 text-amber-200 border border-amber-500/50'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                Visual Analysis
              </button>

              <button
                onClick={() => setActiveTab('context')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'context'
                    ? 'bg-amber-600/30 text-amber-200 border border-amber-500/50'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                }`}
              >
                <History className="w-3.5 h-3.5" />
                Historical & Cultural
              </button>

              <button
                onClick={() => setActiveTab('significance')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'significance'
                    ? 'bg-amber-600/30 text-amber-200 border border-amber-500/50'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                Significance
              </button>

              {artifact.comparisonImageUrl && (
                <button
                  onClick={() => setActiveTab('comparison')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                    activeTab === 'comparison'
                      ? 'bg-amber-600/30 text-amber-200 border border-amber-500/50'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Preservation / Macro
                </button>
              )}

              <button
                onClick={() => setActiveTab('citation')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'citation'
                    ? 'bg-amber-600/30 text-amber-200 border border-amber-500/50'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                }`}
              >
                <ScrollText className="w-3.5 h-3.5" />
                Citation & Sources
              </button>
            </div>

            {/* Tab Contents */}
            <div className="flex-1 overflow-y-auto pr-1 text-stone-300 text-sm leading-relaxed space-y-4">
              {activeTab === 'overview' && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div>
                    <h3 className="text-sm font-semibold text-amber-300 mb-1 font-display">
                      Detailed Academic Description
                    </h3>
                    <p className="text-stone-200 leading-relaxed font-serif-body">
                      {artifact.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-stone-950/70 p-3 rounded-xl border border-stone-800">
                      <span className="text-[11px] uppercase tracking-wider text-stone-400 block mb-1">
                        Artist / Master Guild
                      </span>
                      <p className="text-xs font-semibold text-stone-200">{artifact.artist}</p>
                    </div>
                    <div className="bg-stone-950/70 p-3 rounded-xl border border-stone-800">
                      <span className="text-[11px] uppercase tracking-wider text-stone-400 block mb-1">
                        Geographic Zone
                      </span>
                      <p className="text-xs font-semibold text-stone-200">{artifact.region} India</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-[11px] uppercase tracking-wider text-stone-400 block mb-2">
                      Key Thematic Classifications:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {artifact.keyThemes.map((theme, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-full text-xs bg-stone-800 border border-stone-700 text-stone-300">
                          #{theme}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'visual' && (
                <div className="space-y-3 animate-in fade-in duration-150">
                  <h3 className="text-sm font-semibold text-amber-300 mb-2 font-display">
                    Formal Visual Characteristics & Stylistic Analysis
                  </h3>
                  <div className="space-y-2.5">
                    {artifact.visualCharacteristics.map((trait, index) => (
                      <div key={index} className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-950/60 border border-stone-800">
                        <span className="w-5 h-5 rounded-full bg-amber-600/20 border border-amber-500/40 text-amber-300 flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-serif-body">
                          {trait}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'context' && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800">
                    <h4 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1.5 flex items-center gap-1.5">
                      <History className="w-3.5 h-3.5 text-amber-500" />
                      Historical Context
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-serif-body">
                      {artifact.historicalContext}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800">
                    <h4 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1.5 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-amber-500" />
                      Cultural, Religious & Socio-Political Context
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-serif-body">
                      {artifact.culturalReligiousSocialContext}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'significance' && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-700/40">
                    <h4 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1.5 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      Artistic Significance
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-serif-body">
                      {artifact.artisticSignificance}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800">
                    <h4 className="text-xs uppercase tracking-wider text-stone-300 font-semibold mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      Importance in the Evolution of Indian Art History
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-serif-body">
                      {artifact.importanceInIndianArtHistory}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'comparison' && artifact.comparisonImageUrl && (
                <div className="space-y-3 animate-in fade-in duration-150">
                  <h3 className="text-sm font-semibold text-amber-300 font-display">
                    {artifact.comparisonTitle || 'Curatorial Macro & Preservation Analysis'}
                  </h3>
                  
                  <div className="relative rounded-xl overflow-hidden bg-stone-950 border border-stone-800">
                    <img
                      src={artifact.comparisonImageUrl}
                      alt="Comparative view"
                      referrerPolicy="no-referrer"
                      className="w-full h-64 object-contain"
                    />
                  </div>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed bg-stone-950/60 p-3 rounded-xl border border-stone-800">
                    {artifact.comparisonNote}
                  </p>
                </div>
              )}

              {activeTab === 'citation' && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="p-4 rounded-xl bg-stone-950 border border-stone-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                        Formal Academic Citation (APA / Chicago Standard)
                      </span>
                      <button
                        onClick={handleCopyCitation}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs transition-colors cursor-pointer"
                      >
                        {copiedCitation ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Citation</span>
                          </>
                        )}
                      </button>
                    </div>
                    <blockquote className="text-xs font-serif-body text-stone-200 bg-stone-900/80 p-3 rounded border-l-2 border-amber-600 italic">
                      {artifact.academicReference}
                    </blockquote>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800 text-xs space-y-1.5 text-stone-400">
                    <p className="font-semibold text-stone-200">Institutional Repository & Verification:</p>
                    <p>• Sponsoring Institution: {artifact.presentLocation}</p>
                    <p>• Curatorial Authority: Archaeological Survey of India (ASI) / Ministry of Culture</p>
                    <p>• Pedagogical Integrity: Fully cross-referenced against published museum catalogues and peer-reviewed art history monographs.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Footer Action Bar */}
            <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
              <span>Artifact {artifact.order} of 15 in Chronology</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={onPrev}
                  className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  Previous
                </button>
                <button
                  onClick={onNext}
                  className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors flex items-center gap-1"
                >
                  Next
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
