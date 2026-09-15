import React, { useState } from 'react';
import { Artifact, PeriodCategory, MediumCategory, RegionCategory } from '../types';
import { 
  Calendar, 
  MapPin, 
  Layers, 
  ExternalLink, 
  Clock, 
  Sparkles,
  Search,
  Filter,
  ArrowRight,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

interface TimelineViewProps {
  artifacts: Artifact[];
  onSelectArtifact: (artifact: Artifact) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ERAS = [
  { id: 'all', label: 'Complete Chronology', dateRange: '10,000 BCE – 1983 CE' },
  { id: 'prehistoric-indus', label: 'Prehistoric & Indus', dateRange: '10,000 – 1900 BCE' },
  { id: 'classical', label: 'Mauryan & Classical', dateRange: '250 BCE – 500 CE' },
  { id: 'medieval', label: 'Medieval & Chola', dateRange: '750 – 1100 CE' },
  { id: 'courtly', label: 'Mughal & Rajput', dateRange: '1590 – 1750 CE' },
  { id: 'modern', label: 'Modern & Avant-Garde', dateRange: '1905 – 1983 CE' }
];

export const TimelineView: React.FC<TimelineViewProps> = ({
  artifacts,
  onSelectArtifact,
  searchQuery,
  setSearchQuery
}) => {
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [selectedMedium, setSelectedMedium] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [zoomLevel, setZoomLevel] = useState<'normal' | 'compact' | 'expanded'>('normal');

  // Filtering logic
  const filteredArtifacts = artifacts.filter(art => {
    // Search query
    const matchesSearch = searchQuery === '' || 
      art.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.historicalPeriod.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.medium.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.region.toLowerCase().includes(searchQuery.toLowerCase());

    // Era filter
    let matchesEra = true;
    if (selectedEra === 'prehistoric-indus') {
      matchesEra = art.periodCategory === 'prehistoric' || art.periodCategory === 'indus';
    } else if (selectedEra === 'classical') {
      matchesEra = art.periodCategory === 'mauryan-shunga' || art.periodCategory === 'classical-gupta';
    } else if (selectedEra === 'medieval') {
      matchesEra = art.periodCategory === 'early-medieval';
    } else if (selectedEra === 'courtly') {
      matchesEra = art.periodCategory === 'sultanate-mughal' || art.periodCategory === 'rajput-pahari';
    } else if (selectedEra === 'modern') {
      matchesEra = art.periodCategory === 'colonial-modern' || art.periodCategory === 'contemporary';
    }

    // Medium filter
    const matchesMedium = selectedMedium === 'all' || art.mediumCategory === selectedMedium;

    // Region filter
    const matchesRegion = selectedRegion === 'all' || art.region === selectedRegion;

    return matchesSearch && matchesEra && matchesMedium && matchesRegion;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Interactive Era Navigation Ribbon */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-4 sm:p-6 shadow-xl backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-800">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Chronological Epochs
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-stone-100">
              Ten Millennia of Indian Visual Heritage
            </h2>
          </div>

          {/* Zoom controls */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-stone-400 hidden sm:inline">Card Display:</span>
            <div className="inline-flex bg-stone-950 p-1 rounded-lg border border-stone-800">
              <button
                onClick={() => setZoomLevel('compact')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  zoomLevel === 'compact' ? 'bg-amber-600 text-white' : 'text-stone-400 hover:text-stone-200'
                }`}
                title="Compact Density View"
              >
                Compact
              </button>
              <button
                onClick={() => setZoomLevel('normal')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  zoomLevel === 'normal' ? 'bg-amber-600 text-white' : 'text-stone-400 hover:text-stone-200'
                }`}
                title="Standard Curatorial View"
              >
                Standard
              </button>
              <button
                onClick={() => setZoomLevel('expanded')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  zoomLevel === 'expanded' ? 'bg-amber-600 text-white' : 'text-stone-400 hover:text-stone-200'
                }`}
                title="Expanded Deep View"
              >
                Expanded
              </button>
            </div>
          </div>
        </div>

        {/* Era Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-4">
          {ERAS.map((era) => (
            <button
              key={era.id}
              onClick={() => setSelectedEra(era.id)}
              className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                selectedEra === era.id
                  ? 'bg-amber-950/50 border-amber-500/60 shadow-md shadow-amber-950/40 text-amber-200 ring-1 ring-amber-500/50'
                  : 'bg-stone-950/50 border-stone-800/80 text-stone-400 hover:text-stone-200 hover:border-stone-700'
              }`}
            >
              <span className="block text-xs font-semibold">{era.label}</span>
              <span className="block text-[11px] text-stone-400 mt-1">{era.dateRange}</span>
            </button>
          ))}
        </div>

        {/* Filters Bar */}
        <div className="mt-4 pt-4 border-t border-stone-800/70 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-stone-400 font-medium flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-amber-500" />
              Filter by Medium:
            </span>
            <select
              value={selectedMedium}
              onChange={(e) => setSelectedMedium(e.target.value)}
              className="bg-stone-950 border border-stone-700 rounded-lg px-2.5 py-1 text-stone-200 focus:outline-none focus:border-amber-500 text-xs"
            >
              <option value="all">All Mediums</option>
              <option value="stone">Stone & Sandstone</option>
              <option value="bronze">Lost-Wax Bronze</option>
              <option value="mural">Mural & Tempera</option>
              <option value="manuscript">Miniature on Wasli</option>
              <option value="oil">Modern Oil & Acrylic</option>
              <option value="architecture">Monolithic Architecture</option>
            </select>

            <span className="text-stone-400 font-medium ml-2">Region:</span>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-stone-950 border border-stone-700 rounded-lg px-2.5 py-1 text-stone-200 focus:outline-none focus:border-amber-500 text-xs"
            >
              <option value="all">All Regions</option>
              <option value="North">North India</option>
              <option value="South">South India</option>
              <option value="East">East India</option>
              <option value="West">West India</option>
              <option value="Central">Central India</option>
            </select>

            {(selectedEra !== 'all' || selectedMedium !== 'all' || selectedRegion !== 'all' || searchQuery !== '') && (
              <button
                onClick={() => {
                  setSelectedEra('all');
                  setSelectedMedium('all');
                  setSelectedRegion('all');
                  setSearchQuery('');
                }}
                className="text-amber-400 hover:text-amber-300 underline ml-2 cursor-pointer"
              >
                Reset All Filters
              </button>
            )}
          </div>

          <span className="text-stone-400">
            Showing <strong className="text-amber-300">{filteredArtifacts.length}</strong> of {artifacts.length} artifacts
          </span>
        </div>
      </div>

      {/* Main Timeline Spine */}
      <div className="relative">
        {/* Central Vertical Timeline Guide Line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-amber-700/80 via-amber-500/40 to-amber-800/80 -translate-x-1/2 hidden sm:block"></div>

        {/* Timeline Entries List */}
        <div className="space-y-12 sm:space-y-16">
          {filteredArtifacts.map((artifact, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={artifact.id}
                className="relative flex flex-col sm:flex-row items-center group"
              >
                {/* Central Date Marker Badge (Desktop) */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-8 z-10 flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-stone-950 border-2 border-amber-500 flex items-center justify-center text-amber-300 text-xs font-bold shadow-lg shadow-amber-950 group-hover:scale-110 group-hover:border-amber-300 transition-all">
                    {artifact.order}
                  </div>
                  <div className="mt-1 px-2 py-0.5 rounded bg-stone-900/90 border border-stone-700/80 text-[10px] text-amber-400 font-mono whitespace-nowrap shadow">
                    {artifact.numericSortYear < 0 
                      ? `${Math.abs(artifact.numericSortYear)} BCE` 
                      : `${artifact.numericSortYear} CE`}
                  </div>
                </div>

                {/* Left/Right Card Layout Container */}
                <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:ml-auto sm:text-left'}`}>
                  {/* Artifact Card */}
                  <div 
                    onClick={() => onSelectArtifact(artifact)}
                    className="bg-stone-900/95 hover:bg-stone-850 border border-stone-800 hover:border-amber-500/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-950/30 transition-all duration-300 cursor-pointer transform group-hover:-translate-y-1"
                  >
                    {/* Media Thumbnail Container */}
                    <div className={`relative bg-stone-950 overflow-hidden ${
                      zoomLevel === 'compact' ? 'h-48' : zoomLevel === 'expanded' ? 'h-80' : 'h-64'
                    }`}>
                      <img
                        src={artifact.imageUrl}
                        alt={artifact.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>

                      {/* Pill tags overlaid on image */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px]">
                        <span className="px-2.5 py-1 rounded-full bg-stone-950/80 backdrop-blur-md border border-stone-700/80 text-amber-300 font-medium">
                          {artifact.dynastyOrMovement}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-stone-700/80 text-stone-300">
                          {artifact.region} India
                        </span>
                      </div>

                      {/* Date bar on image bottom */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                        <span className="font-semibold text-amber-200 flex items-center gap-1.5 drop-shadow">
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          {artifact.approximateDate}
                        </span>
                        <span className="text-[11px] text-stone-300 bg-stone-950/70 px-2 py-0.5 rounded">
                          {artifact.mediumCategory.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 sm:p-6 space-y-3">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold block">
                          {artifact.historicalPeriod}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold font-display text-stone-100 group-hover:text-amber-300 transition-colors mt-0.5">
                          {artifact.name}
                        </h3>
                        {artifact.hindiName && (
                          <p className="text-xs text-stone-400 mt-0.5">{artifact.hindiName}</p>
                        )}
                      </div>

                      <p className="text-stone-300 text-xs sm:text-sm leading-relaxed line-clamp-3 font-serif-body">
                        {artifact.description}
                      </p>

                      {/* Visual characteristics teaser in expanded mode */}
                      {zoomLevel === 'expanded' && (
                        <div className="pt-2 border-t border-stone-800 text-xs space-y-1">
                          <span className="text-stone-400 font-medium block">Key Formal Traits:</span>
                          <ul className="list-disc list-inside text-stone-300 space-y-0.5">
                            {artifact.visualCharacteristics.slice(0, 2).map((trait, tIdx) => (
                              <li key={tIdx} className="line-clamp-1">{trait}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Quick Meta Footer */}
                      <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
                        <span className="flex items-center gap-1 truncate max-w-[200px]">
                          <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span className="truncate">{artifact.presentLocation}</span>
                        </span>
                        <span className="text-amber-400 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Open Dossier
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {filteredArtifacts.length === 0 && (
        <div className="text-center py-16 bg-stone-900/50 rounded-2xl border border-stone-800">
          <Layers className="w-12 h-12 text-stone-600 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-stone-200">No artifacts match your selected criteria</h3>
          <p className="text-xs text-stone-400 mt-1 max-w-sm mx-auto">
            Try resetting your era, medium, or regional filters to explore the full timeline.
          </p>
          <button
            onClick={() => {
              setSelectedEra('all');
              setSelectedMedium('all');
              setSelectedRegion('all');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-100 text-xs font-medium cursor-pointer transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
