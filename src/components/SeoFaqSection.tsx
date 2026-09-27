import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is a tattoo font generator?',
    answer: 'A tattoo font generator is a free online tool that lets you enter your custom text (e.g. name, date, or quote) and instantly preview it across multiple tattoo lettering styles right in your browser.',
  },
  {
    question: 'Can I use my own name or custom text?',
    answer: 'Yes! Enter any name, phrase, date, or word into the text box to generate instant previews in your exact text.',
  },
  {
    question: 'Can I generate tattoo lettering for a quote?',
    answer: 'Yes, multi-line quotes and phrases are fully supported. You can customize line height, alignment, and letter spacing.',
  },
  {
    question: 'Can I use numbers and dates?',
    answer: 'Yes, numbers, punctuation, symbols, and Roman numerals are supported.',
  },
  {
    question: 'Can I change the font size and letter spacing?',
    answer: 'Yes, open the Customize panel to adjust font size, letter spacing, curved text bending, rotation, and colors.',
  },
  {
    question: 'Can I curve tattoo lettering?',
    answer: 'Yes, choose from Straight, Slight, Medium, or Strong curved text options for wrist, chest, or shoulder placement previews.',
  },
  {
    question: 'Can I download my tattoo lettering?',
    answer: 'Yes, you can download high-resolution PNG images or vector SVG files for free.',
  },
  {
    question: 'Are the tattoo fonts free?',
    answer: 'All fonts in our generator are open-source fonts licensed under SIL Open Font License or Google Fonts for personal preview and stencil use.',
  },
  {
    question: 'Can I use the design directly for a tattoo?',
    answer: 'The generator creates digital lettering previews. Final tattoo sizing, readability, placement, and stencil preparation should be discussed with a professional tattoo artist.',
  },
  {
    question: 'What tattoo font is right for me?',
    answer: 'The right choice depends on your desired visual aesthetic and placement area (e.g., Script/Calligraphy for elegant quotes, Gothic/Old English for bold chest tattoos, Minimalist for small wrist dates).',
  },
];

export const SeoFaqSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="w-full pb-8 sm:pb-12">
      
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <div style={{ marginBottom: '120px' }} className="max-w-5xl mx-auto text-left glass-panel p-8 lg:p-12 rounded-3xl border border-slate-800 shadow-2xl">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-7 h-7 text-purple-400" />
          <h2 className="font-extrabold text-2xl lg:text-3xl text-white tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="border border-slate-800 rounded-2xl overflow-hidden bg-[#0B0E14] transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-base lg:text-lg text-slate-100 hover:text-white transition-colors"
              >
                <span>{item.question}</span>
                {openFaqIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-purple-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500" />
                )}
              </button>
              {openFaqIndex === idx && (
                <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
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
