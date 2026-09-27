import React, { useState } from 'react';

interface TattooImageDisplayProps {
  src: string;
  alt: string;
  className?: string;
  styleName: string;
  tryPresetText?: string;
}

export const TattooImageDisplay: React.FC<TattooImageDisplayProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  styleName,
  tryPresetText = 'KHALID',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    // Dynamic Fallback Tattoo Art Box
    return (
      <div className="w-full h-full bg-[#0B0E14] border border-purple-800/40 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-transparent to-slate-900 pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 bg-purple-950/80 px-2.5 py-1 rounded-md border border-purple-800/60 inline-block">
            {styleName} Flash
          </span>
          <div className="font-extrabold text-2xl sm:text-3xl text-white tracking-wider py-1 font-serif">
            "{tryPresetText}"
          </div>
          <span className="text-xs text-slate-400 block font-mono">Tattoo Font Art Preview</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
