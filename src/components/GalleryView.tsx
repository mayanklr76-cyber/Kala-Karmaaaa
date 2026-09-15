import React, { useState } from 'react';
import { Artifact } from '../types';
import { 
  Layers, 
  MapPin, 
  Calendar, 
  ArrowUpDown, 
  Sparkles, 
  Building,
  ArrowRight,
  Filter
} from 'lucide-react';

interface GalleryViewProps {
  artifacts: Artifact[];
  onSelectArtifact: (artifact: Artifact) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({
  artifacts,
  onSelectArtifact,
  searchQuery,
  setSearchQuery
}) => {
  const [selectedMedium, setSelectedMedium] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'chronological' | 'reverse'>('chronological');

  const filtered = artifacts
    .filter(art => {
      const matchesSearch = searchQuery === '' ||
        art.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.historicalPeriod.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.medium.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.presentLocation.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesMedium = selectedMedium === 'all' || art.mediumCategory === selectedMedium;
      const matchesRegion = selectedRegion === 'all' || art.region === selectedRegion;

      return matchesSearch && matchesMedium && matchesRegion;
    })
    .sort((a, b) => {
      if (sortOrder === 'chronological') {
        return a.numericSortYear - b.numericSortYear;
      }
      return b.numericSortYear - a.numericSortYear;
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header Banner */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            Museum Collection Catalog
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-stone-100 mt-1">
            Curatorial Gallery of Virtual Artifacts
          </h2>
          <p className="text-xs text-stone-400 mt-1">
            Click any artifact to open its complete 16-parameter academic dossier, visual analysis, and primary citations.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 bg-stone-950 px-3 py-1.5 rounded-xl border border-stone-800">
            <Filter className="w-3.5 h-3.5 text-amber-500" />
            <select
              value={selectedMedium}
              onChange={(e) => setSelectedMedium(e.target.value)}
              className="bg-transparent text-stone-200 focus:outline-none cursor-pointer"
            >
              <option value="all">All Mediums</option>
              <option value="stone">Stone / Sandstone</option>
              <option value="bronze">Lost-Wax Bronze</option>
              <option value="mural">Mural & Tempera</option>
              <option value="manuscript">Miniature on Wasli</option>
              <option value="oil">Modern Oil & Canvas</option>
              <option value="architecture">Monolithic Basalt</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 bg-stone-950 px-3 py-1.5 rounded-xl border border-stone-800">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-transparent text-stone-200 focus:outline-none cursor-pointer"
            >
              <option value="all">All Regions</option>
              <option value="North">North India</option>
              <option value="South">South India</option>
              <option value="East">East India</option>
              <option value="West">West India</option>
              <option value="Central">Central India</option>
            </select>
          </div>

          <button
            onClick={() => setSortOrder(sortOrder === 'chronological' ? 'reverse' : 'chronological')}
            className="flex items-center gap-1.5 bg-stone-950 px-3 py-1.5 rounded-xl border border-stone-800 text-stone-200 hover:text-amber-300 transition-colors cursor-pointer"
          >
            <ArrowUpDown className="w-3.5 h-3.5 text-amber-500" />
            <span>{sortOrder === 'chronological' ? 'Ancient to Modern' : 'Modern to Ancient'}</span>
          </button>
        </div>
      </div>

      {/* Grid of Artifacts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((artifact) => (
          <div
            key={artifact.id}
            onClick={() => onSelectArtifact(artifact)}
            className="group bg-stone-900/90 border border-stone-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-950/20 transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
          >
            {/* Image Box */}
            <div className="relative h-64 bg-stone-950 overflow-hidden">
              <img
                src={artifact.imageUrl}
                alt={artifact.name}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent"></div>

              {/* Order and Period Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-stone-950/90 border border-amber-500/60 text-amber-300 flex items-center justify-center text-xs font-bold shadow">
                  {artifact.order}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-stone-950/80 backdrop-blur-md border border-stone-700/80 text-[11px] text-stone-200">
                  {artifact.region}
                </span>
              </div>

              {/* Date Footer on Image */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                <span className="font-semibold text-amber-200 drop-shadow flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  {artifact.approximateDate}
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-stone-950/80 text-amber-400 border border-stone-800">
                  {artifact.mediumCategory}
                </span>
              </div>
            </div>

            {/* Content Box */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-amber-500 font-semibold block">
                  {artifact.historicalPeriod}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-display text-stone-100 group-hover:text-amber-300 transition-colors mt-0.5">
                  {artifact.name}
                </h3>
                <p className="text-xs text-stone-400 mt-1 font-serif-body line-clamp-2">
                  {artifact.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-800/80 text-xs space-y-1.5 text-stone-400">
                <div className="flex items-center justify-between">
                  <span className="text-stone-400">Medium:</span>
                  <span className="text-stone-300 font-medium truncate max-w-[180px]">{artifact.medium}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-400">Repository:</span>
                  <span className="text-emerald-300 truncate max-w-[180px]">{artifact.presentLocation}</span>
                </div>

                <div className="pt-2 flex items-center justify-end text-amber-400 font-medium group-hover:translate-x-1 transition-transform">
                  <span className="text-xs flex items-center gap-1">
                    Examine Dossier
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 bg-stone-900/40 rounded-2xl border border-stone-800">
          <Layers className="w-12 h-12 text-stone-600 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-stone-200">No items match your gallery filters</h3>
          <p className="text-xs text-stone-400 mt-1">
            Reset search query or dropdown filters to view all 15 masterworks.
          </p>
        </div>
      )}
    </div>
  );
};
