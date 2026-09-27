import React, { useState } from 'react';
import type { FamousTattoo } from '../data/famousTattoos';
import { Sparkles, X, Compass, ShieldAlert, ArrowRight } from 'lucide-react';

interface AiStyleFinderModalProps {
  tattoo: FamousTattoo | null;
  onClose: () => void;
}

export const AiStyleFinderModal: React.FC<AiStyleFinderModalProps> = ({
  tattoo,
  onClose,
}) => {
  const [userPrompt, setUserPrompt] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    inspiredStyle: string;
    keyElements: string[];
    composition: string;
    recommendedFonts: string[];
    suggestedConcept: string;
  } | null>(null);

  if (!tattoo) return null;

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setResult(null);

    // Dynamic AI style breakdown simulation
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        inspiredStyle: `${tattoo.style} & Micro-Detailing`,
        keyElements: [
          ...tattoo.mainElements,
          'High-Contrast Skin Breaks',
          'Balanced Line Weight',
          'Architectural Lettering Alignments',
        ],
        composition: `Inspired by ${tattoo.title} placement on the ${tattoo.placement}. Uses focal framing with subtle background gradients.`,
        recommendedFonts: ['Gothic Blackletter', 'Chicano Fine Script', 'Old English Calligraphy'],
        suggestedConcept: `An original design inspired by ${tattoo.person || tattoo.title}, pairing custom personalized text with ${tattoo.style} line art.`,
      });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div
        className="relative max-w-2xl w-full bg-[#0B0E14] border border-purple-900/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <Sparkles className="w-5 h-5 text-purple-400 animate-spin-slow" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white">
                Find Similar Tattoo Styles
              </h3>
              <p className="text-xs text-slate-400">
                AI Style Breakdown for <span className="text-purple-300 font-semibold">{tattoo.title}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Ethical Notice */}
        <div className="bg-amber-950/40 border border-amber-800/50 p-3.5 rounded-2xl flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-200/90 leading-relaxed">
            <strong className="text-amber-300">Originality Notice: </strong>
            This AI tool analyzes general aesthetic styles, composition principles, and typography. It provides custom inspiration and recommendations rather than reproducing exact artist artwork.
          </p>
        </div>

        {/* Action Prompt */}
        {!result && (
          <div className="space-y-4">
            <label className="block text-xs font-bold text-slate-300">
              Describe your custom idea or text (optional):
            </label>
            <input
              type="text"
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              placeholder={`e.g., I want my name in ${tattoo.style} style with wings...`}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-all placeholder:text-slate-500"
            />

            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="w-full py-3 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 font-extrabold text-sm text-white shadow-lg transition-all flex items-center justify-center gap-2"
            >
              {isAnalyzing ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin" />
                  Analyzing Style & Aesthetic...
                </>
              ) : (
                <>
                  <Compass className="w-4 h-4" />
                  Generate AI Style Suggestions
                </>
              )}
            </button>
          </div>
        )}

        {/* Analysis Results */}
        {result && (
          <div className="space-y-5 animate-fade-in">
            <div className="bg-purple-950/50 border border-purple-800/50 p-4 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Inspired Style Analysis
                </span>
                <span className="text-xs text-slate-300 font-semibold bg-purple-900/60 px-2.5 py-0.5 rounded-md border border-purple-700">
                  {result.inspiredStyle}
                </span>
              </div>

              <p className="text-xs text-slate-200 leading-relaxed">
                {result.suggestedConcept}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-300 block">
                Key Aesthetic Elements:
              </span>
              <div className="flex flex-wrap gap-2">
                {result.keyElements.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-800"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-300 block">
                Recommended Lettering Categories:
              </span>
              <div className="flex flex-wrap gap-2">
                {result.recommendedFonts.map((font, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-bold text-purple-300 bg-purple-950/60 px-3 py-1 rounded-lg border border-purple-800/60"
                  >
                    {font}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setResult(null)}
                className="py-2.5 px-4 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 text-xs font-bold hover:text-white"
              >
                Reset Analysis
              </button>

              <a
                href={`/?category=all&text=${encodeURIComponent(userPrompt || 'KHALID')}`}
                className="py-2.5 px-5 rounded-xl bg-purple-600 hover:bg-purple-500 font-extrabold text-xs text-white transition-all flex items-center gap-2"
              >
                Open Generator With This Concept
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
