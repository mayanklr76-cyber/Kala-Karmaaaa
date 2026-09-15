import React, { useState, useEffect } from 'react';
import { VIVA_PREP_DATA } from '../data/vivaPrep';
import { 
  GraduationCap, 
  Clock, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Bookmark,
  Award,
  BookOpen
} from 'lucide-react';

export const VivaPrepView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedQId, setExpandedQId] = useState<number | null>(1);
  const [expandedProfId, setExpandedProfId] = useState<number | null>(1);
  
  // Rehearsal timer state
  const [timerSeconds, setTimerSeconds] = useState<number>(60);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [activePitchMode, setActivePitchMode] = useState<'1min' | '2min'>('1min');

  useEffect(() => {
    let interval: any = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(s => s - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  const setPitch = (mode: '1min' | '2min') => {
    setActivePitchMode(mode);
    setTimerRunning(false);
    setTimerSeconds(mode === '1min' ? 60 : 120);
  };

  const filteredQuestions = selectedCategory === 'All'
    ? VIVA_PREP_DATA.vivaQuestions
    : VIVA_PREP_DATA.vivaQuestions.filter(q => q.category === selectedCategory);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
        <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold flex items-center gap-1.5">
          <GraduationCap className="w-4 h-4 text-amber-400" />
          Academic Oral Examination Toolkit
        </span>
        <h2 className="text-xl sm:text-2xl font-bold font-display text-stone-100 mt-1">
          Viva Voce Defense & Art History Q&A Preparation
        </h2>
        <p className="text-xs text-stone-400 mt-1">
          Rehearse your introductory oral presentation, review 10 likely examiner questions, and master 5 deep-dive professor historiographical challenges.
        </p>
      </div>

      {/* Oral Presentation Rehearsal Studio with Stopwatch */}
      <div className="bg-stone-900 border border-amber-600/40 rounded-2xl p-6 shadow-2xl space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-800">
          <div>
            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Oral Presentation Rehearsal Studio
            </span>
            <h3 className="text-base sm:text-lg font-bold font-display text-stone-100 mt-0.5">
              {activePitchMode === '1min' ? 'The 1-Minute Project Elevator Pitch' : 'The 2-Minute Curatorial Selection Rationale'}
            </h3>
          </div>

          {/* Stopwatch & Mode Controls */}
          <div className="flex items-center gap-2">
            <div className="inline-flex bg-stone-950 p-1 rounded-xl border border-stone-800 text-xs">
              <button
                onClick={() => setPitch('1min')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activePitchMode === '1min' ? 'bg-amber-600 text-white font-medium' : 'text-stone-400'
                }`}
              >
                1-Min Pitch
              </button>
              <button
                onClick={() => setPitch('2min')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activePitchMode === '2min' ? 'bg-amber-600 text-white font-medium' : 'text-stone-400'
                }`}
              >
                2-Min Rationale
              </button>
            </div>

            {/* Timer Display */}
            <div className="flex items-center gap-1.5 bg-stone-950 px-3 py-1.5 rounded-xl border border-stone-800 font-mono text-xs">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span className={`font-bold ${timerSeconds < 10 ? 'text-red-400 animate-pulse' : 'text-amber-300'}`}>
                {formatTime(timerSeconds)}
              </span>
              <button
                onClick={() => setTimerRunning(!timerRunning)}
                className="p-1 hover:text-amber-300 text-stone-300"
                title={timerRunning ? "Pause" : "Start"}
              >
                {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setPitch(activePitchMode)}
                className="p-1 hover:text-amber-300 text-stone-400"
                title="Reset"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Script Reader */}
        <div className="bg-stone-950/70 p-5 rounded-xl border border-stone-800 text-stone-200 text-sm font-serif-body leading-relaxed whitespace-pre-line shadow-inner">
          {activePitchMode === '1min' ? VIVA_PREP_DATA.elevatorPitch1Min : VIVA_PREP_DATA.artifactRationale2Min}
        </div>

        <div className="flex items-center justify-between text-xs text-stone-400">
          <span>💡 Pro-tip for oral exam: Speak with calm composure, maintain eye contact with examiners, and emphasize material innovations.</span>
        </div>
      </div>

      {/* Section 2: 10 Likely Viva Questions */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold">
              Core Examination Prep
            </span>
            <h3 className="text-lg font-bold font-display text-stone-100">
              10 Likely Viva Voce Questions & Model Answers
            </h3>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 text-xs">
            {['All', 'Methodology', 'Art Theory', 'Chronology', 'Curatorial'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-600/30 text-amber-200 border-amber-500/50 font-medium'
                    : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Questions Accordion */}
        <div className="space-y-3">
          {filteredQuestions.map((q) => {
            const isExpanded = expandedQId === q.id;

            return (
              <div
                key={q.id}
                className="bg-stone-900/90 border border-stone-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedQId(isExpanded ? null : q.id)}
                  className="w-full px-5 py-3.5 text-left flex items-start justify-between gap-3 hover:bg-stone-850 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-600/20 text-amber-300 border border-amber-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {q.id}
                    </span>
                    <div>
                      <span className="text-[11px] font-semibold text-amber-400/90 uppercase tracking-wider block">
                        Category: {q.category}
                      </span>
                      <h4 className="text-sm font-semibold text-stone-100 mt-0.5">
                        {q.question}
                      </h4>
                    </div>
                  </div>

                  <span className="p-1 text-stone-400 mt-1">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 space-y-3 border-t border-stone-800/80 bg-stone-950/40 animate-in fade-in duration-150">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                        Model Answer (Simple, Scholarly, & Direct):
                      </span>
                      <p className="text-stone-300 text-xs sm:text-sm font-serif-body leading-relaxed">
                        {q.answer}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-stone-800/60 flex flex-wrap items-center gap-1.5 text-[11px]">
                      <span className="text-stone-400 font-medium">Key Takeaways to Mention:</span>
                      {q.keyPoints.map((kp, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-stone-800 border border-stone-700 text-amber-300">
                          ✓ {kp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 3: 5 Challenging Questions a Professor Might Ask */}
      <div className="space-y-4 pt-4 border-t border-stone-800">
        <div>
          <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400" />
            Distinction / Full Marks Preparation
          </span>
          <h3 className="text-lg font-bold font-display text-stone-100 mt-0.5">
            5 Deep-Dive Questions a Subject Professor Might Ask
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Historiographical controversies, aesthetic treatises (Shadanga/Citrasutra), and post-colonial art theory.
          </p>
        </div>

        <div className="space-y-3">
          {VIVA_PREP_DATA.professorQuestions.map((pq) => {
            const isExpanded = expandedProfId === pq.id;

            return (
              <div
                key={pq.id}
                className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedProfId(isExpanded ? null : pq.id)}
                  className="w-full px-5 py-4 text-left flex items-start justify-between gap-3 hover:bg-stone-850 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      P{pq.id}
                    </span>
                    <h4 className="text-sm font-bold text-stone-100 font-display">
                      {pq.question}
                    </h4>
                  </div>
                  <span className="p-1 text-stone-400 mt-1">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 space-y-3 border-t border-stone-800/80 bg-stone-950/50 animate-in fade-in duration-150">
                    <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 text-xs text-stone-400">
                      <strong className="text-amber-400 block mb-1">Academic Historiography:</strong>
                      {pq.deepDiveExplanation}
                    </div>

                    <div>
                      <strong className="text-xs text-emerald-400 uppercase tracking-wider block mb-1">
                        High-Scoring Sample Response:
                      </strong>
                      <p className="text-xs sm:text-sm font-serif-body text-stone-200 leading-relaxed bg-amber-950/10 p-3 rounded-lg border border-amber-900/30">
                        "{pq.sampleAnswer}"
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
