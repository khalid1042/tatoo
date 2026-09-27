import React, { useState } from 'react';
import {
  BODY_TEMPLATES,
  TATTOO_FONTS,
  BACKGROUND_SWATCHES,
} from '../data/fonts';
import type { TattooFont } from '../data/fonts';
import { Sparkles, Sliders, RotateCcw } from 'lucide-react';

interface PlacementVisualizerProps {
  inputText: string;
  selectedFont: TattooFont | null;
  onSelectFont: (font: TattooFont) => void;
  fontSize: number;
  letterSpacing: number;
  rotation: number;
  isStencilMode: boolean;
}

export const PlacementVisualizer: React.FC<PlacementVisualizerProps> = ({
  inputText,
  selectedFont,
  onSelectFont,
  fontSize,
  letterSpacing,
  rotation,
  isStencilMode,
}) => {
  const currentFont = selectedFont || TATTOO_FONTS[0];
  const [selectedTemplate, setSelectedTemplate] = useState(BODY_TEMPLATES[0]);
  const [skinColor, setSkinColor] = useState(BACKGROUND_SWATCHES[4].value); // Warm skin default
  const [scale, setScale] = useState(100);
  const [offsetY, setOffsetY] = useState(0);
  const [opacity, setOpacity] = useState(85);
  const [textAngle, setTextAngle] = useState(rotation);

  const displayText = inputText.trim() || 'Khalid';

  return (
    <div className="max-w-6xl mx-auto py-4">
      
      {/* Visualizer Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Real-Time 2D Body Canvas Simulator
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2">
          Tattoo Body Placement Visualizer
        </h2>
        <p className="text-sm text-slate-400 max-w-2xl mx-auto">
          Preview how your exact lettering (<strong className="text-purple-300">"{displayText}"</strong> in{' '}
          <strong className="text-purple-300">{currentFont.name}</strong>) looks mapped onto real skin textures before heading to the tattoo studio.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Controls */}
        <div className="lg:col-span-4 glass-panel rounded-3xl p-6 border border-slate-800/80">
          
          <h3 className="font-bold text-sm text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-purple-400" />
            Simulator Controls
          </h3>

          {/* Select Body Part Template */}
          <div className="mb-5">
            <label className="block text-xs font-semibold text-slate-400 mb-2">
              Select Body Template
            </label>
            <div className="grid grid-cols-2 gap-2">
              {BODY_TEMPLATES.map((tmpl) => (
                <button
                  key={tmpl.id}
                  onClick={() => setSelectedTemplate(tmpl)}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    selectedTemplate.id === tmpl.id
                      ? 'bg-purple-600/20 text-purple-200 border-purple-500 shadow-md'
                      : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <div className="font-bold text-xs">{tmpl.name}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{tmpl.bodyPart}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Skin Tone Selector */}
          <div className="mb-5">
            <label className="block text-xs font-semibold text-slate-400 mb-2">
              Skin Tone Simulation
            </label>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {BACKGROUND_SWATCHES.filter((b) => b.value !== 'transparent' && b.value !== '#090D16').map((swatch) => (
                <button
                  key={swatch.name}
                  onClick={() => setSkinColor(swatch.value)}
                  style={{ backgroundColor: swatch.value }}
                  className={`w-8 h-8 rounded-full border-2 transition-all flex-shrink-0 ${
                    skinColor === swatch.value ? 'scale-110 border-purple-400 ring-2 ring-purple-500/40' : 'border-slate-700 hover:scale-105'
                  }`}
                  title={swatch.name}
                />
              ))}
            </div>
          </div>

          {/* Font Selector Dropdown */}
          <div className="mb-5">
            <label className="block text-xs font-semibold text-slate-400 mb-2">
              Active Tattoo Font
            </label>
            <select
              value={currentFont.id}
              onChange={(e) => {
                const f = TATTOO_FONTS.find((font) => font.id === e.target.value);
                if (f) onSelectFont(f);
              }}
              className="w-full bg-slate-900 text-xs font-semibold text-slate-200 p-3 rounded-xl border border-slate-800 outline-none focus:border-purple-500"
            >
              {TATTOO_FONTS.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name} ({f.category})
                </option>
              ))}
            </select>
          </div>

          {/* Scale Slider */}
          <div className="mb-4">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-slate-400 font-medium">Text Scale</span>
              <span className="font-mono text-purple-400 font-bold">{scale}%</span>
            </div>
            <input
              type="range"
              min="40"
              max="200"
              value={scale}
              onChange={(e) => setScale(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Ink Opacity Slider */}
          <div className="mb-4">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-slate-400 font-medium">Ink Absorption / Opacity</span>
              <span className="font-mono text-purple-400 font-bold">{opacity}%</span>
            </div>
            <input
              type="range"
              min="30"
              max="100"
              value={opacity}
              onChange={(e) => setOpacity(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Vertical Position Offset */}
          <div className="mb-6">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-slate-400 font-medium">Vertical Placement Offset</span>
              <span className="font-mono text-purple-400 font-bold">{offsetY}px</span>
            </div>
            <input
              type="range"
              min="-80"
              max="80"
              value={offsetY}
              onChange={(e) => setOffsetY(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Reset Controls Button */}
          <button
            onClick={() => {
              setScale(100);
              setOffsetY(0);
              setOpacity(85);
              setTextAngle(0);
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 text-xs font-semibold text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Position & Scale</span>
          </button>

        </div>

        {/* Right Column: Realistic Mockup Canvas Display */}
        <div className="lg:col-span-8 flex flex-col items-center">
          
          <div className="w-full glass-panel rounded-3xl p-6 border border-slate-800/80 flex flex-col items-center justify-center relative overflow-hidden">
            
            {/* Mockup Frame */}
            <div
              className="w-full max-w-lg aspect-[3/4] rounded-2xl relative flex items-center justify-center overflow-hidden shadow-2xl transition-all border border-slate-700/50"
              style={{ backgroundColor: skinColor }}
            >
              {/* Simulated Skin Grain Texture */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
                  backgroundSize: '8px 8px',
                }}
              />

              {/* Anatomical Silhouette Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <svg viewBox="0 0 400 500" className="w-full h-full stroke-slate-900 fill-none" strokeWidth="2">
                  <path d="M 100 50 C 150 20, 250 20, 300 50 C 320 150, 330 350, 280 480 C 200 500, 120 500, 120 480 C 70 350, 80 150, 100 50 Z" />
                </svg>
              </div>

              {/* Tattoo Ink Overlay */}
              <div
                className="relative transition-all select-none text-center px-6 max-w-full overflow-hidden"
                style={{
                  transform: `translateY(${offsetY}px) scale(${scale / 100}) rotate(${textAngle}deg)`,
                  opacity: opacity / 100,
                  mixBlendMode: isStencilMode ? 'normal' : 'multiply',
                }}
              >
                <span
                  className="max-w-full block break-words"
                  style={{
                    fontFamily: currentFont.fontFamily,
                    fontSize: `${Math.min(64, fontSize * 1.0)}px`,
                    letterSpacing: `${letterSpacing}px`,
                    color: isStencilMode ? '#FFFFFF' : '#0F172A',
                    WebkitTextStroke: isStencilMode ? '2px #000000' : 'none',
                    lineHeight: 1.2,
                  }}
                >
                  {displayText}
                </span>
              </div>

              {/* Template Label Badge */}
              <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-[11px] font-bold text-slate-300 border border-slate-800">
                Template: {selectedTemplate.name} ({selectedTemplate.bodyPart})
              </div>

            </div>

            {/* Helper Info Footer */}
            <div className="w-full flex items-center justify-between mt-4 px-2 text-xs text-slate-400">
              <span>Using CSS Canvas <strong className="text-purple-300">Multiply Ink Blend Mode</strong></span>
              <span className="font-mono text-slate-500">300 DPI Rendering</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
