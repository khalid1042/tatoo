import React from 'react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="my-16 sm:my-20 py-12 sm:py-16 border-t border-slate-800/80 text-center">
      
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
          How the Generator Works
        </h2>
        <p className="text-base text-slate-300 leading-relaxed">
          Create custom tattoo lettering previews in three simple steps.
        </p>
      </div>

      {/* 3 Steps Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Step 1 */}
        <div className="glass-card p-8 rounded-3xl text-left border border-slate-800">
          <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-300 border border-purple-500/40 flex items-center justify-center font-black text-lg mb-6 shadow-md">
            01
          </div>
          <h3 className="font-extrabold text-xl text-white mb-3">1. Enter Your Text</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Type the word, name, quote, date, or phrase you want to explore into the text box above.
          </p>
        </div>

        {/* Step 2 */}
        <div className="glass-card p-8 rounded-3xl text-left border border-slate-800">
          <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-300 border border-purple-500/40 flex items-center justify-center font-black text-lg mb-6 shadow-md">
            02
          </div>
          <h3 className="font-extrabold text-xl text-white mb-3">2. Choose a Tattoo Font</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Browse Script, Gothic, Cursive, Calligraphy, Old English, and other tattoo font categories.
          </p>
        </div>

        {/* Step 3 */}
        <div className="glass-card p-8 rounded-3xl text-left border border-slate-800">
          <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-300 border border-purple-500/40 flex items-center justify-center font-black text-lg mb-6 shadow-md">
            03
          </div>
          <h3 className="font-extrabold text-xl text-white mb-3">3. Customize & Download</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Adjust font size, letter spacing, curvature, and colors, then copy or download your PNG/SVG preview.
          </p>
        </div>

      </div>
    </section>
  );
};
