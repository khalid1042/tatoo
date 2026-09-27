import React, { useEffect, useRef, useState } from 'react';
import {
  Download,
  Copy,
  Heart,
  FileCode,
  Check,
  Eye,
  Printer,
} from 'lucide-react';
import type { TattooFont } from '../data/fonts';
import {
  drawTattooTextToCanvas,
  downloadCanvasAsPng,
  exportAsSvg,
  copyCanvasToClipboard,
} from '../utils/canvasExport';
import type { TextRenderOptions } from '../utils/canvasExport';

interface FontCardProps {
  font: TattooFont;
  inputText: string;
  fontSize: number;
  letterSpacing: number;
  lineHeight: number;
  textAlignment: 'left' | 'center' | 'right';
  textTransform: 'none' | 'uppercase' | 'lowercase';
  curvedOption: 'none' | 'slight' | 'medium' | 'strong';
  rotation: number;
  strokeWidth: number;
  textColor: string;
  backgroundColor: string;
  isStencilMode: boolean;
  isSaved: boolean;
  onToggleSave: (font: TattooFont) => void;
  onOpenPlacementModal: (font: TattooFont) => void;
  onOpenPrintModal?: (font: TattooFont) => void;
}

export const FontCard: React.FC<FontCardProps> = ({
  font,
  inputText,
  fontSize,
  letterSpacing,
  lineHeight,
  textAlignment,
  textTransform,
  curvedOption,
  rotation,
  strokeWidth,
  textColor,
  backgroundColor,
  isStencilMode,
  isSaved,
  onToggleSave,
  onOpenPlacementModal,
  onOpenPrintModal,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [copied, setCopied] = useState(false);

  // Render options object
  const renderOptions: TextRenderOptions = {
    text: inputText,
    fontFamily: font.fontFamily,
    fontSize,
    letterSpacing,
    lineHeight,
    textAlignment,
    textTransform,
    curvedOption,
    rotation,
    textColor: isStencilMode ? '#FFFFFF' : textColor === '#0F172A' && (backgroundColor === 'transparent' || backgroundColor === '#0B0E14') ? '#F8FAFC' : textColor,
    backgroundColor: backgroundColor === 'transparent' ? '#0F172A' : backgroundColor,
    strokeWidth,
    isStencilMode,
  };

  // Re-draw canvas whenever properties change
  useEffect(() => {
    if (canvasRef.current) {
      drawTattooTextToCanvas(canvasRef.current, renderOptions);
    }
  }, [
    inputText,
    font.fontFamily,
    fontSize,
    letterSpacing,
    lineHeight,
    textAlignment,
    textTransform,
    curvedOption,
    rotation,
    strokeWidth,
    textColor,
    backgroundColor,
    isStencilMode,
  ]);

  // Handle Copy to Clipboard
  const handleCopy = async () => {
    if (canvasRef.current) {
      const success = await copyCanvasToClipboard(canvasRef.current);
      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  // Handle Download PNG
  const handleDownloadPng = () => {
    if (canvasRef.current) {
      const sanitizedFont = font.name.toLowerCase().replace(/\s+/g, '-');
      downloadCanvasAsPng(canvasRef.current, `${inputText || 'tattoo'}-${sanitizedFont}-stencil.png`);
    }
  };

  // Handle Download SVG
  const handleDownloadSvg = () => {
    const sanitizedFont = font.name.toLowerCase().replace(/\s+/g, '-');
    exportAsSvg(renderOptions, `${inputText || 'tattoo'}-${sanitizedFont}-vector.svg`);
  };

  return (
    <div className="bg-[#131722] rounded-2xl p-5 flex flex-col justify-between border border-slate-800/80 hover:border-purple-500/40 transition-all">
      
      {/* Font Header */}
      <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-800/80">
        <div>
          <h3 className="font-bold text-base text-white tracking-tight">
            {font.name}
          </h3>
          <span className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider">
            {font.category}
          </span>
        </div>

        {/* Favorite Heart Button (PRD Section 46) */}
        <button
          onClick={() => onToggleSave(font)}
          className={`p-2 rounded-xl border transition-all ${
            isSaved
              ? 'bg-rose-500/20 text-rose-400 border-rose-500/50'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
          }`}
          title={isSaved ? 'Remove from Favorites' : 'Favorite Font'}
        >
          <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-400' : ''}`} />
        </button>
      </div>

      {/* Main Preview Area */}
      <div className="canvas-wrapper my-2 py-6 px-3 rounded-xl bg-[#0B0E14] border border-slate-800/80 flex items-center justify-center min-h-[150px]">
        <canvas
          ref={canvasRef}
          className="max-w-full h-auto object-contain"
        />
      </div>

      {/* Card Actions Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-800/80 mt-2">
        {/* Left: Body Preview & Print Stencil */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => onOpenPlacementModal(font)}
            className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white transition-all shrink-0"
          >
            <Eye className="w-3.5 h-3.5 text-purple-400" />
            <span className="hidden sm:inline">Body Preview</span>
          </button>

          {onOpenPrintModal && (
            <button
              onClick={() => onOpenPrintModal(font)}
              className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-purple-950/80 text-purple-300 border border-purple-800/60 hover:bg-purple-900 hover:text-white transition-all shrink-0"
              title="Print Thermal Transfer Stencil"
            >
              <Printer className="w-3.5 h-3.5 text-purple-400" />
              <span>Print Stencil</span>
            </button>
          )}
        </div>

        {/* Right: Copy, SVG, PNG */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 hover:text-white transition-all"
            title="Copy image to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={handleDownloadSvg}
            className="text-[11px] sm:text-xs font-bold px-2 py-1.5 rounded-lg bg-slate-900 text-indigo-300 border border-slate-800 hover:border-indigo-500/50 transition-all flex items-center gap-1"
            title="Download Vector SVG"
          >
            <FileCode className="w-3.5 h-3.5 text-indigo-400" />
            <span>SVG</span>
          </button>

          <button
            onClick={handleDownloadPng}
            className="flex items-center gap-1 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1.5 rounded-lg bg-purple-600 text-white shadow hover:bg-purple-500 transition-all"
            title="Download PNG Stencil"
          >
            <Download className="w-3.5 h-3.5" />
            <span>PNG</span>
          </button>
        </div>
      </div>

    </div>
  );
};
