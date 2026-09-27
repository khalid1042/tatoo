import React from 'react';

const IDEAS = [
  { title: 'Name Tattoos', text: 'Preview personal names, kids names, or partner names in script and cursive.' },
  { title: 'Date Tattoos', text: 'Test birth dates and anniversaries in Roman numerals or minimalist serif.' },
  { title: 'Quote Tattoos', text: 'Explore multi-line quotes and meaningful phrases.' },
  { title: 'Couple Tattoos', text: 'Preview matching phrases and connected initial lettering.' },
  { title: 'Family Tattoos', text: 'Preview family names, mottos, and shared initials.' },
  { title: 'Memorial Tattoos', text: 'Preview memorial names, dates, and tribute lettering.' },
];

export const TattooIdeasSection: React.FC = () => {
  return (
    <section id="ideas-section" className="my-24 py-16 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto text-left">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
            Tattoo Font Ideas & Inspiration
          </h2>
          <p className="text-base text-slate-300">
            Common use cases and lettering ideas for your next tattoo project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {IDEAS.map((idea) => (
            <div key={idea.title} className="glass-card p-7 rounded-3xl border border-slate-800">
              <h3 className="font-extrabold text-lg text-white mb-3">{idea.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{idea.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
