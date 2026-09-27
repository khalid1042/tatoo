import React from 'react';
import type { TattooFont } from '../data/fonts';
import { X, Trash2, Printer, Bookmark } from 'lucide-react';

interface SavedStencilsModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedFonts: TattooFont[];
  onRemoveFont: (font: TattooFont) => void;
  onClearAll: () => void;
  inputText: string;
}

export const SavedStencilsModal: React.FC<SavedStencilsModalProps> = ({
  isOpen,
  onClose,
  savedFonts,
  onRemoveFont,
  onClearAll,
  inputText,
}) => {
  if (!isOpen) return null;

  const displayText = inputText.trim() || 'Khalid';

  const handlePrintSheet = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="glass-panel w-full max-w-3xl rounded-3xl p-6 border border-slate-800/80 shadow-2xl flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white">Saved Stencil Collection</h3>
              <p className="text-xs text-slate-400">
                {savedFonts.length} design{savedFonts.length === 1 ? '' : 's'} bookmarked for printable stencil transfer sheet
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto py-6 space-y-4 pr-1">
          {savedFonts.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <Bookmark className="w-12 h-12 mx-auto mb-3 text-slate-600 stroke-[1.5]" />
              <p className="font-semibold text-slate-400">No saved stencils yet</p>
              <p className="text-xs mt-1">Click the heart icon on any font preview card to save it here!</p>
            </div>
          ) : (
            savedFonts.map((font) => (
              <div
                key={font.id}
                className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 flex items-center justify-between gap-4"
              >
                <div>
                  <div className="font-bold text-xs text-slate-300">{font.name} ({font.category})</div>
                  <div
                    className="text-2xl mt-1 text-purple-300"
                    style={{ fontFamily: font.fontFamily }}
                  >
                    {displayText}
                  </div>
                </div>

                <button
                  onClick={() => onRemoveFont(font)}
                  className="p-2 rounded-xl text-rose-400 hover:bg-rose-500/20 border border-rose-500/30 transition-all"
                  title="Remove from saved"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {savedFonts.length > 0 && (
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={onClearAll}
              className="text-xs font-semibold text-rose-400 hover:underline"
            >
              Clear All Saved
            </button>

            <button
              onClick={handlePrintSheet}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs hover:bg-purple-500 shadow-lg transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print A4 Stencil Sheet</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
