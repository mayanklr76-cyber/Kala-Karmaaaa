import React from 'react';
import { 
  Compass, 
  Layers, 
  BookOpen, 
  Code2, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles,
  GitCompare
} from 'lucide-react';

export type TabType = 
  | 'timeline' 
  | 'gallery' 
  | 'comparisons' 
  | 'documentation' 
  | 'technical-guide' 
  | 'viva' 
  | 'quality-check';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenQuickDossier: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onOpenQuickDossier
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-950/95 backdrop-blur-md border-b border-stone-800 shadow-xl">
      {/* Top Academic Banner */}
      <div className="bg-gradient-to-r from-amber-950/80 via-stone-900 to-amber-950/80 border-b border-amber-900/30 px-4 py-1.5 text-xs text-amber-200/90 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="font-medium text-stone-300">
            Interactive Digital Humanities Timeline with Virtual Artifact Replicas
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-stone-400">
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            15 Curated Masterpieces (10,000 BCE – 1983 CE)
          </span>
          <button 
            onClick={onOpenQuickDossier}
            className="hover:text-amber-300 text-stone-300 underline underline-offset-2 transition-colors cursor-pointer"
          >
            Quick Curatorial Index
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Title */}
          <div 
            onClick={() => setActiveTab('timeline')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-amber-900 flex items-center justify-center shadow-md shadow-amber-950 border border-amber-500/30 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-amber-100" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-wider font-display text-stone-100 group-hover:text-amber-300 transition-colors">
                KĀLA-KRAMA
              </h1>
              <p className="text-[11px] text-amber-500/90 tracking-widest uppercase font-medium">
                The Living Canvas • Indian Art History
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-stone-900/80 p-1 rounded-xl border border-stone-800">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'timeline'
                  ? 'bg-amber-600/30 text-amber-200 border border-amber-500/40 shadow-sm'
                  : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800/60'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              Interactive Timeline
            </button>

            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'gallery'
                  ? 'bg-amber-600/30 text-amber-200 border border-amber-500/40 shadow-sm'
                  : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800/60'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              Exhibition Gallery
            </button>

            <button
              onClick={() => setActiveTab('comparisons')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'comparisons'
                  ? 'bg-amber-600/30 text-amber-200 border border-amber-500/40 shadow-sm'
                  : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800/60'
              }`}
            >
              <GitCompare className="w-3.5 h-3.5 text-amber-400" />
              Comparative Analysis
            </button>

            <button
              onClick={() => setActiveTab('documentation')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'documentation'
                  ? 'bg-amber-600/30 text-amber-200 border border-amber-500/40 shadow-sm'
                  : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800/60'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              Academic Report
            </button>

            <button
              onClick={() => setActiveTab('technical-guide')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'technical-guide'
                  ? 'bg-amber-600/30 text-amber-200 border border-amber-500/40 shadow-sm'
                  : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800/60'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              TimelineJS Guide
            </button>

            <button
              onClick={() => setActiveTab('viva')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'viva'
                  ? 'bg-amber-600/30 text-amber-200 border border-amber-500/40 shadow-sm'
                  : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800/60'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              Viva Kit
            </button>

            <button
              onClick={() => setActiveTab('quality-check')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'quality-check'
                  ? 'bg-amber-600/30 text-amber-200 border border-amber-500/40 shadow-sm'
                  : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800/60'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Audit Matrix
            </button>
          </nav>

          {/* Quick Search */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search artifacts, media, dynasties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-44 sm:w-56 bg-stone-900 border border-stone-700/80 rounded-lg px-3 py-1.5 text-xs text-stone-200 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-200 text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Sub-Navigation */}
        <div className="flex lg:hidden overflow-x-auto py-2 gap-1 border-t border-stone-800/70 scrollbar-none text-xs">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-3 py-1 whitespace-nowrap rounded-md ${
              activeTab === 'timeline' ? 'bg-amber-600 text-white' : 'text-stone-300'
            }`}
          >
            Timeline
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-3 py-1 whitespace-nowrap rounded-md ${
              activeTab === 'gallery' ? 'bg-amber-600 text-white' : 'text-stone-300'
            }`}
          >
            Gallery
          </button>
          <button
            onClick={() => setActiveTab('comparisons')}
            className={`px-3 py-1 whitespace-nowrap rounded-md ${
              activeTab === 'comparisons' ? 'bg-amber-600 text-white' : 'text-stone-300'
            }`}
          >
            Comparisons
          </button>
          <button
            onClick={() => setActiveTab('documentation')}
            className={`px-3 py-1 whitespace-nowrap rounded-md ${
              activeTab === 'documentation' ? 'bg-amber-600 text-white' : 'text-stone-300'
            }`}
          >
            Report (Submission)
          </button>
          <button
            onClick={() => setActiveTab('technical-guide')}
            className={`px-3 py-1 whitespace-nowrap rounded-md ${
              activeTab === 'technical-guide' ? 'bg-amber-600 text-white' : 'text-stone-300'
            }`}
          >
            TimelineJS Guide
          </button>
          <button
            onClick={() => setActiveTab('viva')}
            className={`px-3 py-1 whitespace-nowrap rounded-md ${
              activeTab === 'viva' ? 'bg-amber-600 text-white' : 'text-stone-300'
            }`}
          >
            Viva Prep
          </button>
          <button
            onClick={() => setActiveTab('quality-check')}
            className={`px-3 py-1 whitespace-nowrap rounded-md ${
              activeTab === 'quality-check' ? 'bg-amber-600 text-white' : 'text-stone-300'
            }`}
          >
            Audit Matrix
          </button>
        </div>
      </div>
    </header>
  );
};
