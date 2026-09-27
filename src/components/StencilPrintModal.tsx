import React, { useRef, useEffect, useState } from 'react';
import { X, Printer, Download, FlipHorizontal, Palette, Ruler, Check, FileCode, Sparkles } from 'lucide-react';
import type { TattooFont } from '../data/fonts';
import { drawTattooTextToCanvas, downloadCanvasAsPng, exportAsSvg } from '../utils/canvasExport';
import type { TextRenderOptions } from '../utils/canvasExport';

interface StencilPrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  font: TattooFont | null;
  inputText: string;
  fontSize: number;
  letterSpacing: number;
  lineHeight: number;
  textAlignment: 'left' | 'center' | 'right';
  textTransform: 'none' | 'uppercase' | 'lowercase';
  curvedOption: 'none' | 'slight' | 'medium' | 'strong';
  rotation: number;
}

export const StencilPrintModal: React.FC<StencilPrintModalProps> = ({
  isOpen,
  onClose,
  font,
  inputText,
  fontSize,
  letterSpacing,
  lineHeight,
  textAlignment,
  textTransform,
  curvedOption,
  rotation,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isMirrored, setIsMirrored] = useState(false);
  const [thermalColor, setThermalColor] = useState<'purple' | 'red' | 'black'>('purple');
  const [targetWidthInches, setTargetWidthInches] = useState<number>(5);

  const getTextColorHex = () => {
    if (thermalColor === 'purple') return '#8B5CF6';
    if (thermalColor === 'red') return '#EF4444';
    return '#000000';
  };

  const renderOptions: TextRenderOptions = {
    text: inputText || 'Tattoo Stencil',
    fontFamily: font?.fontFamily || 'sans-serif',
    fontSize: fontSize * (targetWidthInches / 5),
    letterSpacing,
    lineHeight,
    textAlignment,
    textTransform,
    curvedOption,
    rotation,
    textColor: getTextColorHex(),
    backgroundColor: '#FFFFFF',
    strokeWidth: 2,
    isStencilMode: true,
  };

  useEffect(() => {
    if (isOpen && canvasRef.current && font) {
      drawTattooTextToCanvas(canvasRef.current, renderOptions);
    }
  }, [
    isOpen,
    font,
    inputText,
    fontSize,
    letterSpacing,
    lineHeight,
    textAlignment,
    textTransform,
    curvedOption,
    rotation,
    thermalColor,
    targetWidthInches,
  ]);

  if (!isOpen || !font) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPng = () => {
    if (canvasRef.current) {
      const sanitizedFont = font.name.toLowerCase().replace(/\s+/g, '-');
      downloadCanvasAsPng(canvasRef.current, `thermal-stencil-${inputText || 'tattoo'}-${sanitizedFont}.png`);
    }
  };

  const handleDownloadSvg = () => {
    const sanitizedFont = font.name.toLowerCase().replace(/\s+/g, '-');
    exportAsSvg(renderOptions, `thermal-stencil-${inputText || 'tattoo'}-${sanitizedFont}.svg`);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0F131C] border border-slate-800 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-[#131722]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                Thermal Transfer Stencil Studio
              </h2>
              <p className="text-xs text-slate-400">
                Format {font.name} for physical stencil paper transfer
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Customization Control Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Control 1: Mirror / Flip Horizontal */}
            <div className="bg-[#131722] p-3.5 rounded-2xl border border-slate-800 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <FlipHorizontal className="w-3.5 h-3.5 text-purple-400" />
                  Mirror Stencil
                </span>
                <span className="text-[10px] text-purple-300 font-medium">Transfer Ready</span>
              </div>
              <button
                onClick={() => setIsMirrored((prev) => !prev)}
                className={`w-full py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all ${
                  isMirrored
                    ? 'bg-purple-600 text-white border-purple-500 shadow-md'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {isMirrored ? <Check className="w-4 h-4" /> : <FlipHorizontal className="w-4 h-4" />}
                <span>{isMirrored ? 'Mirrored (Flipped)' : 'Normal Orientation'}</span>
              </button>
            </div>

            {/* Control 2: Thermal Ink Color */}
            <div className="bg-[#131722] p-3.5 rounded-2xl border border-slate-800">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5 mb-2">
                <Palette className="w-3.5 h-3.5 text-purple-400" />
                Thermal Ink Color
              </span>
              <div className="grid grid-cols-3 gap-1.5">
                <button
                  onClick={() => setThermalColor('purple')}
                  className={`py-1.5 rounded-lg text-[11px] font-bold border transition-all ${
                    thermalColor === 'purple'
                      ? 'bg-purple-950 text-purple-300 border-purple-600'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  Spirit Purple
                </button>
                <button
                  onClick={() => setThermalColor('red')}
                  className={`py-1.5 rounded-lg text-[11px] font-bold border transition-all ${
                    thermalColor === 'red'
                      ? 'bg-red-950 text-red-300 border-red-600'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  Red Outline
                </button>
                <button
                  onClick={() => setThermalColor('black')}
                  className={`py-1.5 rounded-lg text-[11px] font-bold border transition-all ${
                    thermalColor === 'black'
                      ? 'bg-slate-800 text-white border-slate-600'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  Pure Black
                </button>
              </div>
            </div>

            {/* Control 3: Physical Scale Width */}
            <div className="bg-[#131722] p-3.5 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 text-purple-400" />
                  Stencil Width
                </span>
                <span className="text-[11px] font-bold text-purple-400">{targetWidthInches} Inches ({Math.round(targetWidthInches * 2.54)} cm)</span>
              </div>
              <input
                type="range"
                min={2}
                max={10}
                step={0.5}
                value={targetWidthInches}
                onChange={(e) => setTargetWidthInches(parseFloat(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />
            </div>

          </div>

          {/* Thermal Paper Preview Area */}
          <div className="relative bg-white rounded-2xl p-6 border-2 border-purple-500/30 flex flex-col items-center justify-center min-h-[260px] shadow-inner overflow-hidden">
            
            {/* Visual Ruler Overlay */}
            <div className="absolute top-2 left-4 right-4 flex items-center justify-between border-b border-slate-300 pb-1 text-[10px] font-mono text-slate-500">
              <span>0" (0cm)</span>
              <span className="hidden sm:inline">← Real-Scale Physical Ruler ({targetWidthInches}" / {Math.round(targetWidthInches * 2.54)}cm) →</span>
              <span>{targetWidthInches}" ({Math.round(targetWidthInches * 2.54)}cm)</span>
            </div>

            {/* Canvas Preview Container with Mirror Transform */}
            <div className={`mt-4 transition-transform duration-300 ${isMirrored ? 'scale-x-[-1]' : ''}`}>
              <canvas ref={canvasRef} className="max-w-full h-auto object-contain" />
            </div>

            {/* Helper Tag */}
            <div className="absolute bottom-2 right-4 text-[10px] text-slate-400 font-semibold bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              {isMirrored ? 'Mirrored for Stencil Paper' : 'Direct View'}
            </div>
          </div>

          <div className="bg-purple-950/40 border border-purple-800/50 p-4 rounded-2xl flex items-start gap-3 text-xs text-purple-200">
            <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <p>
              <strong>Pro Tattoo Tip:</strong> Enable <strong>Mirror Stencil</strong> before thermal printing so your carbon paper stencil transfers upright onto the skin. Use <strong>Spirit Purple</strong> or <strong>Red Outline</strong> for thermal transfer machines.
            </p>
          </div>

        </div>

        {/* Footer Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-slate-800 bg-[#131722]">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadSvg}
              className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <FileCode className="w-4 h-4 text-indigo-400" />
              <span>SVG Vector</span>
            </button>
            <button
              onClick={handleDownloadPng}
              className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <Download className="w-4 h-4 text-purple-400" />
              <span>PNG Stencil</span>
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-purple-950/50 flex items-center gap-2 transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>Print Thermal Stencil</span>
          </button>
        </div>

      </div>
    </div>
  );
};
