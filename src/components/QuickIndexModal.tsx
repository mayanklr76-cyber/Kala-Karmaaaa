import React from 'react';
import { Artifact } from '../types';
import { X, Calendar, MapPin, Layers, ArrowRight } from 'lucide-react';

interface QuickIndexModalProps {
  isOpen: boolean;
  onClose: () => void;
  artifacts: Artifact[];
  onSelectArtifact: (art: Artifact) => void;
}

export const QuickIndexModal: React.FC<QuickIndexModalProps> = ({
  isOpen,
  onClose,
  artifacts,
  onSelectArtifact
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div 
        className="bg-stone-900 border border-stone-800 rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-800 bg-stone-950">
          <div>
            <h3 className="text-base font-bold font-display text-amber-300">
              Curatorial Index & Jump Table
            </h3>
            <p className="text-xs text-stone-400">
              Chronological master list of 15 artifacts across ten millennia
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {artifacts.map((art) => (
            <div
              key={art.id}
              onClick={() => {
                onSelectArtifact(art);
                onClose();
              }}
              className="flex items-center justify-between p-3 rounded-xl bg-stone-950/60 hover:bg-stone-800/80 border border-stone-800 hover:border-amber-500/40 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-amber-600/20 text-amber-300 border border-amber-500/30 flex items-center justify-center text-xs font-bold shrink-0">
                  {art.order}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-stone-200 group-hover:text-amber-300 transition-colors">
                    {art.name}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-stone-400 mt-0.5">
                    <span className="text-amber-400 font-mono">{art.approximateDate}</span>
                    <span>•</span>
                    <span>{art.dynastyOrMovement}</span>
                    <span>•</span>
                    <span className="text-stone-300">{art.mediumCategory}</span>
                  </div>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-amber-300 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
