import React, { useState } from 'react';
import { PROJECT_DOCUMENTATION } from '../data/documentation';
import { Artifact } from '../types';
import { 
  BookOpen, 
  Copy, 
  Check, 
  Printer, 
  FileText, 
  GraduationCap, 
  Award, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

interface ProjectDocumentationViewProps {
  artifacts: Artifact[];
}

export const ProjectDocumentationView: React.FC<ProjectDocumentationViewProps> = ({ artifacts }) => {
  const [copied, setCopied] = useState(false);

  const generateFullMarkdown = () => {
    let md = `# ${PROJECT_DOCUMENTATION.title}\n\n`;
    md += `**Course Assessment:** ${PROJECT_DOCUMENTATION.courseOutcome}\n`;
    md += `**Academic Level:** ${PROJECT_DOCUMENTATION.academicLevel}\n\n`;
    md += `---\n\n`;

    md += `## 1. Project Title\n${PROJECT_DOCUMENTATION.title}\n\n`;
    md += `## 2. Introduction\n${PROJECT_DOCUMENTATION.introduction}\n\n`;
    md += `## 3. Aim\n${PROJECT_DOCUMENTATION.aim}\n\n`;

    md += `## 4. Objectives\n`;
    PROJECT_DOCUMENTATION.objectives.forEach(obj => {
      md += `- ${obj}\n`;
    });
    md += `\n`;

    md += `## 5. Methodology\n`;
    PROJECT_DOCUMENTATION.methodology.forEach(m => {
      md += `${m}\n\n`;
    });

    md += `## 6. Curated Timeline Content Catalog (15 Key Masterpieces)\n\n`;
    artifacts.forEach((art, idx) => {
      md += `### Entry ${art.order}: ${art.name}\n`;
      md += `- **Date/Chronology:** ${art.approximateDate}\n`;
      md += `- **Historical Period/Dynasty:** ${art.historicalPeriod} (${art.dynastyOrMovement})\n`;
      md += `- **Artist/Guild:** ${art.artist}\n`;
      md += `- **Region & Findspot:** ${art.region} India; ${art.findspotOrOrigin}\n`;
      md += `- **Present Location / Museum:** ${art.presentLocation} (Acc: ${art.museumAccessionNo || 'N/A'})\n`;
      md += `- **Medium / Material:** ${art.medium}\n`;
      md += `- **Detailed Description:** ${art.description}\n`;
      md += `- **Key Visual Characteristics:**\n`;
      art.visualCharacteristics.forEach(v => md += `  * ${v}\n`);
      md += `- **Historical Context:** ${art.historicalContext}\n`;
      md += `- **Cultural/Religious/Social Context:** ${art.culturalReligiousSocialContext}\n`;
      md += `- **Artistic Significance:** ${art.artisticSignificance}\n`;
      md += `- **Importance in Indian Art History:** ${art.importanceInIndianArtHistory}\n`;
      md += `- **Curator's Insight:** ${art.interestingFact}\n`;
      md += `- **Image Credit:** ${art.imageCredit}\n`;
      md += `- **Academic Reference:** ${art.academicReference}\n\n`;
    });

    md += `## 7. Interactive Design Concept & Visual Language\n${PROJECT_DOCUMENTATION.interactiveDesignConcept}\n\n`;
    md += `## 8. Educational Value\n${PROJECT_DOCUMENTATION.educationalValue}\n\n`;
    md += `## 9. Conclusion\n${PROJECT_DOCUMENTATION.conclusion}\n\n`;

    md += `## 10. Academic Bibliography\n`;
    PROJECT_DOCUMENTATION.bibliography.forEach(b => {
      md += `- ${b.author} (${b.year}). *${b.title}*. ${b.publication}\n`;
    });
    md += `\n`;

    md += `## 11. Image Credits & Copyright Declarations\n`;
    PROJECT_DOCUMENTATION.imageCredits.forEach(c => {
      md += `- **${c.artifact}**: ${c.institution} (${c.license})\n`;
    });

    return md;
  };

  const handleCopyReport = () => {
    const md = generateFullMarkdown();
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Action Card */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            Formal College Project Submission Dossier
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-stone-100 mt-1">
            Complete Academic Project Documentation
          </h2>
          <p className="text-xs text-stone-400 mt-1">
            Standardized academic paper containing Introduction, Aim, Objectives, Methodology, Catalog, Visual Concept, Conclusion & Bibliography.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyReport}
            className="flex items-center gap-1.5 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-stone-100 rounded-xl text-xs font-semibold shadow transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Full Report (Markdown)</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-semibold border border-stone-700 transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print / PDF</span>
          </button>
        </div>
      </div>

      {/* College Submission Paper Document Layout */}
      <article className="bg-stone-900/95 border border-stone-800 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8 text-stone-200 text-sm leading-relaxed font-serif-body">
        {/* Title Header */}
        <div className="border-b border-stone-800 pb-6 text-center space-y-2">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
            {PROJECT_DOCUMENTATION.courseOutcome}
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-stone-100 tracking-wide">
            {PROJECT_DOCUMENTATION.title}
          </h1>
          <p className="text-xs text-stone-400">
            {PROJECT_DOCUMENTATION.academicLevel} • 10 Marks Assessment
          </p>
        </div>

        {/* Section 1: Project Title */}
        <section className="space-y-2">
          <h2 className="text-base font-bold font-display text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <span className="text-amber-500 font-mono text-xs">1.0</span> Project Title
          </h2>
          <p className="text-stone-200 font-medium pl-4 border-l-2 border-amber-600/50">
            {PROJECT_DOCUMENTATION.title}
          </p>
        </section>

        {/* Section 2: Introduction */}
        <section className="space-y-2">
          <h2 className="text-base font-bold font-display text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <span className="text-amber-500 font-mono text-xs">2.0</span> Introduction (150–200 Words)
          </h2>
          <div className="pl-4 border-l-2 border-amber-600/50 text-stone-300 leading-relaxed text-justify whitespace-pre-line">
            {PROJECT_DOCUMENTATION.introduction}
          </div>
        </section>

        {/* Section 3: Aim */}
        <section className="space-y-2">
          <h2 className="text-base font-bold font-display text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <span className="text-amber-500 font-mono text-xs">3.0</span> Aim of the Project
          </h2>
          <p className="pl-4 border-l-2 border-amber-600/50 text-stone-300">
            {PROJECT_DOCUMENTATION.aim}
          </p>
        </section>

        {/* Section 4: Objectives */}
        <section className="space-y-3">
          <h2 className="text-base font-bold font-display text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <span className="text-amber-500 font-mono text-xs">4.0</span> Specific Learning & Pedagogical Objectives
          </h2>
          <ul className="pl-4 border-l-2 border-amber-600/50 space-y-2 text-stone-300">
            {PROJECT_DOCUMENTATION.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-amber-600/20 text-amber-300 border border-amber-500/30 flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-sans">
                  {i + 1}
                </span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 5: Methodology */}
        <section className="space-y-3">
          <h2 className="text-base font-bold font-display text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <span className="text-amber-500 font-mono text-xs">5.0</span> Academic Research & Digital Humanities Methodology
          </h2>
          <div className="pl-4 border-l-2 border-amber-600/50 space-y-2.5 text-stone-300">
            {PROJECT_DOCUMENTATION.methodology.map((meth, i) => (
              <p key={i} className="text-xs sm:text-sm">
                {meth}
              </p>
            ))}
          </div>
        </section>

        {/* Section 6: Timeline Content Synopsis */}
        <section className="space-y-3">
          <h2 className="text-base font-bold font-display text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <span className="text-amber-500 font-mono text-xs">6.0</span> Curated Timeline Content & Evolutionary Trajectory
          </h2>
          <p className="text-xs text-stone-400">
            The timeline comprises 15 landmark artifacts forming an unbroken trajectory across ten millennia. Each entry was scrutinized across 16 formal academic parameters.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {PROJECT_DOCUMENTATION.timelineSynopsis.map((syn, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 text-xs space-y-1">
                <span className="font-bold text-amber-300 font-display block">{syn.period}</span>
                <p className="text-stone-300">{syn.focus}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Interactive Design Concept */}
        <section className="space-y-2">
          <h2 className="text-base font-bold font-display text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <span className="text-amber-500 font-mono text-xs">7.0</span> Interactive Digital Design Concept & Visual Language
          </h2>
          <div className="pl-4 border-l-2 border-amber-600/50 text-stone-300 text-xs sm:text-sm whitespace-pre-line leading-relaxed">
            {PROJECT_DOCUMENTATION.interactiveDesignConcept}
          </div>
        </section>

        {/* Section 8: Educational Value */}
        <section className="space-y-2">
          <h2 className="text-base font-bold font-display text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <span className="text-amber-500 font-mono text-xs">8.0</span> Educational & Pedagogical Value
          </h2>
          <div className="pl-4 border-l-2 border-amber-600/50 text-stone-300 text-xs sm:text-sm whitespace-pre-line leading-relaxed">
            {PROJECT_DOCUMENTATION.educationalValue}
          </div>
        </section>

        {/* Section 9: Conclusion */}
        <section className="space-y-2">
          <h2 className="text-base font-bold font-display text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <span className="text-amber-500 font-mono text-xs">9.0</span> Conclusion (100–150 Words)
          </h2>
          <div className="pl-4 border-l-2 border-amber-600/50 text-stone-300 leading-relaxed text-justify whitespace-pre-line">
            {PROJECT_DOCUMENTATION.conclusion}
          </div>
        </section>

        {/* Section 10: Bibliography */}
        <section className="space-y-3">
          <h2 className="text-base font-bold font-display text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <span className="text-amber-500 font-mono text-xs">10.0</span> Primary & Academic Bibliography (Peer-Reviewed References)
          </h2>
          <div className="pl-4 border-l-2 border-amber-600/50 space-y-2 text-xs text-stone-300">
            {PROJECT_DOCUMENTATION.bibliography.map((b, i) => (
              <p key={i} className="pl-4 -indent-4 font-serif-body">
                <strong>{b.author}</strong> ({b.year}). <em>{b.title}</em>. {b.publication}
              </p>
            ))}
          </div>
        </section>

        {/* Section 11: Image Credits */}
        <section className="space-y-3">
          <h2 className="text-base font-bold font-display text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <span className="text-amber-500 font-mono text-xs">11.0</span> Archival Repositories & Image Copyright Declarations
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-stone-300 border border-stone-800 rounded-lg overflow-hidden">
              <thead className="bg-stone-950 text-amber-300 uppercase tracking-wider border-b border-stone-800">
                <tr>
                  <th className="p-2.5">Artifact / Entry</th>
                  <th className="p-2.5">Holding Institution / Repository</th>
                  <th className="p-2.5">License / Rights Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/80 bg-stone-950/40">
                {PROJECT_DOCUMENTATION.imageCredits.map((c, i) => (
                  <tr key={i} className="hover:bg-stone-900/50">
                    <td className="p-2.5 font-medium text-stone-200">{c.artifact}</td>
                    <td className="p-2.5 text-stone-400">{c.institution}</td>
                    <td className="p-2.5 text-emerald-400 font-mono text-[11px]">{c.license}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </article>
    </div>
  );
};
