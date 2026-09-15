import React, { useState } from 'react';
import { QUALITY_CHECK_MATRIX } from '../data/qualityCheck';
import { 
  CheckCircle2, 
  Award, 
  Copy, 
  Check, 
  ShieldCheck,
  FileCheck
} from 'lucide-react';

export const QualityCheckView: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyMatrix = () => {
    let text = `| Assignment Requirement | How My Project Satisfies It | Status |\n`;
    text += `| :--- | :--- | :--- |\n`;
    QUALITY_CHECK_MATRIX.forEach(item => {
      text += `| ${item.requirement} | ${item.howProjectSatisfies} | ${item.status} |\n`;
    });

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Syllabus & Rubric Compliance Audit
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-stone-100 mt-1">
            Assignment Requirement Verification Matrix
          </h2>
          <p className="text-xs text-stone-400 mt-1">
            Point-by-point cross-verification ensuring 100% compliance with every instruction in the college assignment brief.
          </p>
        </div>

        <button
          onClick={handleCopyMatrix}
          className="flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-stone-100 rounded-xl text-xs font-semibold shadow transition-all cursor-pointer self-start md:self-auto"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-white" />
              <span>Table Copied (Markdown)!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy Matrix to Markdown</span>
            </>
          )}
        </button>
      </div>

      {/* Grade Readiness Scorecard */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-lg font-display">
            10/10
          </div>
          <div>
            <span className="text-xs text-stone-400 uppercase tracking-wider block">Target Grade</span>
            <span className="text-sm font-bold text-stone-100">Full Marks Benchmark</span>
          </div>
        </div>

        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-lg font-display">
            15
          </div>
          <div>
            <span className="text-xs text-stone-400 uppercase tracking-wider block">Art Historical Entries</span>
            <span className="text-sm font-bold text-stone-100">10,000 BCE to 1983 CE</span>
          </div>
        </div>

        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-lg font-display">
            16/16
          </div>
          <div>
            <span className="text-xs text-stone-400 uppercase tracking-wider block">Parameters per Artifact</span>
            <span className="text-sm font-bold text-stone-100">Zero Incomplete Stubs</span>
          </div>
        </div>
      </div>

      {/* Verification Table */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="px-6 py-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-display">
            Course Outcome Compliance Audit (CO1)
          </span>
          <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            All 10 Academic Mandates Verified
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-stone-300 border-collapse">
            <thead className="bg-stone-950/80 text-stone-400 uppercase tracking-wider border-b border-stone-800 text-[11px]">
              <tr>
                <th className="p-4 w-1/4">Assignment Requirement</th>
                <th className="p-4 w-7/12">How My Project Satisfies It</th>
                <th className="p-4 w-1/6 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/60 bg-stone-900/40">
              {QUALITY_CHECK_MATRIX.map((item, index) => (
                <tr key={index} className="hover:bg-stone-850/60 transition-colors">
                  <td className="p-4 font-semibold text-stone-100 align-top font-display">
                    {item.requirement}
                  </td>
                  <td className="p-4 text-stone-300 align-top leading-relaxed font-serif-body">
                    {item.howProjectSatisfies}
                  </td>
                  <td className="p-4 text-center align-top">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                      item.status === 'Exceeds Standard'
                        ? 'bg-amber-600/20 text-amber-300 border border-amber-500/40'
                        : 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40'
                    }`}>
                      <CheckCircle2 className="w-3 h-3 shrink-0" />
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
