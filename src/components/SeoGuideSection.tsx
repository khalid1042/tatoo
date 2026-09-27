import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How does the Tattoo Font Generator work?',
    answer: 'Type your exact text (e.g. your name, favorite quote, or date) into the top input box. Our real-time rendering engine instantly generates live previews across 100+ tattoo font styles simultaneously in your browser. You can customize font size, letter spacing, curvature, and stencil outlines, then download high-resolution PNG or vector SVG files for free.',
  },
  {
    question: 'What is Thermal Stencil Printer Mode?',
    answer: 'Thermal Stencil Mode is a specialized one-click toggle designed for tattoo artists and clients. It converts filled lettering into crisp, high-contrast black line outlines with a white fill, making it directly compatible with thermal transfer stencil printers (such as Phomemo or Brother stencil printers).',
  },
  {
    question: 'Can I export vector SVG files for tattoo stencil printing?',
    answer: 'Yes! Every font preview offers a 100% free vector SVG download option. Vector SVG files maintain infinite sharpness when resized in graphic software like Photoshop, Illustrator, or Procreate.',
  },
  {
    question: 'How do I test lettering on my body before getting tattooed?',
    answer: 'Click the "Body Placement" tab at the top. You can choose from realistic 2D body templates (inner forearm, wrist, bicep, collarbone, upper back, ribcage) and simulate how your exact text looks against your skin tone using multiply ink blend modes.',
  },
  {
    question: 'Are these tattoo fonts free for commercial tattoo stencil use?',
    answer: 'Yes, all fonts in our library are sourced under SIL Open Font License, Creative Commons, or open Google Fonts licenses, making them free for personal tattoo visualization and stencil creation.',
  },
];

export const SeoGuideSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="w-full text-left">
      
      {/* JSON-LD Structured Data Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Tattoo Font Generator',
            applicationCategory: 'DesignApplication',
            operatingSystem: 'All',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            description:
              'Free online Tattoo Font Generator to preview exact text in Script, Gothic, Cursive, Old English & Stencil tattoo lettering.',
          }),
        }}
      />

      {/* Frequently Asked Questions Standalone Card */}
      <div
        style={{ marginBottom: '120px' }}
        className="max-w-4xl mx-auto bg-[#131722] p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-800/90 shadow-2xl space-y-6 sm:space-y-8"
      >
        <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
          <div className="p-2.5 rounded-xl bg-purple-950/70 text-purple-400 border border-purple-800/60">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-2xl text-white tracking-tight">Frequently Asked Questions</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Everything you need to know about tattoo font generation & stencils</p>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {FAQ_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="border border-slate-800 rounded-2xl overflow-hidden transition-all bg-[#0B0E14] shadow-md hover:border-purple-500/50"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-slate-200 hover:text-white transition-colors"
              >
                <span>{item.question}</span>
                {openFaqIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-purple-400 shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500 shrink-0 ml-2" />
                )}
              </button>
              {openFaqIndex === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
