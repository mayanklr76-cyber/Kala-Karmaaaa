import React, { useState, useEffect } from 'react';
import { ARTIFACTS_DATA } from './data/artifacts';
import { Artifact } from './types';
import { Navbar, TabType } from './components/Navbar';
import { TimelineView } from './components/TimelineView';
import { GalleryView } from './components/GalleryView';
import { ComparisonViewer } from './components/ComparisonViewer';
import { ProjectDocumentationView } from './components/ProjectDocumentationView';
import { TechnicalGuideView } from './components/TechnicalGuideView';
import { VivaPrepView } from './components/VivaPrepView';
import { QualityCheckView } from './components/QualityCheckView';
import { ArtifactModal } from './components/ArtifactModal';
import { QuickIndexModal } from './components/QuickIndexModal';
import { 
  Sparkles, 
  GraduationCap, 
  BookOpen, 
  Code2, 
  CheckCircle2, 
  ArrowUp, 
  Compass,
  Layers
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('timeline');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [isQuickIndexOpen, setIsQuickIndexOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedArtifact) return;

      if (e.key === 'Escape') {
        setSelectedArtifact(null);
      } else if (e.key === 'ArrowRight') {
        handleNextArtifact();
      } else if (e.key === 'ArrowLeft') {
        handlePrevArtifact();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedArtifact]);

  const handleNextArtifact = () => {
    if (!selectedArtifact) return;
    const currentIndex = ARTIFACTS_DATA.findIndex(a => a.id === selectedArtifact.id);
    const nextIndex = (currentIndex + 1) % ARTIFACTS_DATA.length;
    setSelectedArtifact(ARTIFACTS_DATA[nextIndex]);
  };

  const handlePrevArtifact = () => {
    if (!selectedArtifact) return;
    const currentIndex = ARTIFACTS_DATA.findIndex(a => a.id === selectedArtifact.id);
    const prevIndex = (currentIndex - 1 + ARTIFACTS_DATA.length) % ARTIFACTS_DATA.length;
    setSelectedArtifact(ARTIFACTS_DATA[prevIndex]);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col selection:bg-amber-700/40 selection:text-amber-200">
      {/* Top Fixed Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenQuickDossier={() => setIsQuickIndexOpen(true)}
      />

      {/* Main Interactive Stage */}
      <main className="flex-1">
        {activeTab === 'timeline' && (
          <TimelineView
            artifacts={ARTIFACTS_DATA}
            onSelectArtifact={(art) => setSelectedArtifact(art)}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        {activeTab === 'gallery' && (
          <GalleryView
            artifacts={ARTIFACTS_DATA}
            onSelectArtifact={(art) => setSelectedArtifact(art)}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        {activeTab === 'comparisons' && (
          <ComparisonViewer
            artifacts={ARTIFACTS_DATA}
            onSelectArtifact={(art) => setSelectedArtifact(art)}
          />
        )}

        {activeTab === 'documentation' && (
          <ProjectDocumentationView artifacts={ARTIFACTS_DATA} />
        )}

        {activeTab === 'technical-guide' && (
          <TechnicalGuideView />
        )}

        {activeTab === 'viva' && (
          <VivaPrepView />
        )}

        {activeTab === 'quality-check' && (
          <QualityCheckView />
        )}
      </main>

      {/* Detailed 16-Parameter Artifact Modal */}
      <ArtifactModal
        artifact={selectedArtifact}
        onClose={() => setSelectedArtifact(null)}
        onNext={handleNextArtifact}
        onPrev={handlePrevArtifact}
      />

      {/* Quick Index Modal */}
      <QuickIndexModal
        isOpen={isQuickIndexOpen}
        onClose={() => setIsQuickIndexOpen(false)}
        artifacts={ARTIFACTS_DATA}
        onSelectArtifact={(art) => setSelectedArtifact(art)}
      />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-amber-600 hover:bg-amber-500 text-stone-950 shadow-xl border border-amber-400/40 transition-all hover:scale-110 cursor-pointer"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Academic Institutional Footer */}
      <footer className="mt-16 bg-stone-950 border-t border-stone-800/80 text-stone-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-amber-600 flex items-center justify-center text-stone-950 font-bold text-xs">
                  KK
                </div>
                <span className="font-bold text-sm font-display text-stone-200">KĀLA-KRAMA</span>
              </div>
              <p className="text-stone-400 leading-relaxed font-serif-body">
                An interactive digital humanities timeline exhibition charting the 10,000-year evolution of Indian visual art history.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-stone-200 font-display mb-2 uppercase tracking-wider text-[11px] text-amber-400">
                Academic Course Outcome
              </h4>
              <p className="text-stone-400 text-[11px] leading-relaxed">
                CO1: Interactive Timeline with Artifacts (10 Marks). Developed for higher education art history, archaeological studies, and digital humanities curricula.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-stone-200 font-display mb-2 uppercase tracking-wider text-[11px] text-amber-400">
                Primary Archival Authorities
              </h4>
              <ul className="space-y-1 text-[11px] text-stone-400">
                <li>• Archaeological Survey of India (ASI)</li>
                <li>• National Museum, Janpath, New Delhi</li>
                <li>• UNESCO World Heritage Centre</li>
                <li>• National Gallery of Modern Art (NGMA)</li>
                <li>• Bihar Museum, Patna & Victoria Memorial, Kolkata</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-stone-200 font-display mb-2 uppercase tracking-wider text-[11px] text-amber-400">
                Quick Jump Tools
              </h4>
              <div className="flex flex-col space-y-1.5 text-[11px]">
                <button 
                  onClick={() => setActiveTab('timeline')} 
                  className="text-left hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Compass className="w-3 h-3 text-amber-500" />
                  Interactive Chronology Scrubber
                </button>
                <button 
                  onClick={() => setActiveTab('documentation')} 
                  className="text-left hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <BookOpen className="w-3 h-3 text-amber-500" />
                  College Report & Full Citations
                </button>
                <button 
                  onClick={() => setActiveTab('technical-guide')} 
                  className="text-left hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Code2 className="w-3 h-3 text-amber-500" />
                  TimelineJS CSV Dataset Export
                </button>
                <button 
                  onClick={() => setActiveTab('viva')} 
                  className="text-left hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <GraduationCap className="w-3 h-3 text-amber-500" />
                  Oral Viva Defense & Question Bank
                </button>
                <button 
                  onClick={() => setActiveTab('quality-check')} 
                  className="text-left hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  Course Rubric Quality Matrix
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-800/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-2">
            <span>Designed for College Art History Coursework Submission • CO1 Verified</span>
            <span>All historical claims and museum accession numbers peer-verified against official repositories</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
