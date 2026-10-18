import React, { useState } from 'react';
import { Sparkles, Wand2, ArrowRight, SlidersHorizontal } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface PromptBarProps {
  language: Language;
  onGenerate: (prompt: string, category?: string, scale?: string) => void;
  isGenerating: boolean;
  onOpenDetailedModal: () => void;
}

export const PromptBar: React.FC<PromptBarProps> = ({
  language,
  onGenerate,
  isGenerating,
  onOpenDetailedModal,
}) => {
  const [prompt, setPrompt] = useState('');
  const t = translations[language];

  const quickPrompts = language === 'am' ? [
    { label: '🛍️ የቡና እና ቅመማቅመም ሱቅ ከነ ቴሌብር', prompt: 'የኢትዮጵያ ስፔሻሊቲ ቡና እና ቅመማቅመም መሸጫ የኢ-ኮሜርስ ድረገፅ ከነ የዕቃ ቅርጫት፣ የቴሌብር እና ሲቢኢ ብር ክፍያ ማስያዣ' },
    { label: '🏥 የክሊኒክ ቀጠሮ እና ቴሌሄልዝ', prompt: 'ዘመናዊ የጤና ክሊኒክ ድረገፅ ከነ ሀኪም ቀጠሮ መያዣ፣ የበሽታ ምልክቶች መለያ እና የላብራቶሪ ውጤት መከታተያ' },
    { label: '🏢 የቤት ኪራይና ሽያጭ በአዲስ አበባ', prompt: 'በአዲስ አበባ የሚከራዩና የሚሸጡ ቤቶች መፈለጊያ ከነ ዋጋ፣ አካባቢ እና የመኝታ ክፍል ማጣሪያ' },
    { label: '📊 የንግድ ድርጅት ERP ዳሽቦርድ', prompt: 'የቢዝነስ ገቢና ወጪ መቆጣጠሪያ፣ የሰራተኞች እና የሽያጭ መዝገብ ዳሽቦርድ ከነ ግራፍ እና ሰንጠረዥ' },
  ] : [
    { label: '☕ Ethiopian Coffee Store + Cart', prompt: 'Specialty Ethiopian coffee e-commerce store with bag size options, live shopping cart and Telebirr checkout' },
    { label: '🏥 Telehealth Clinic & Doctor Portal', prompt: 'Comprehensive healthcare clinic patient portal with doctor booking by department, triage symptom checker' },
    { label: '🏢 Real Estate & Property Finder', prompt: 'Modern real estate marketplace for apartments and villas in Addis Ababa with neighborhood filters' },
    { label: '📊 SaaS Analytics & ERP Dashboard', prompt: 'High performance enterprise SaaS dashboard with revenue charts, transaction table and audit logs' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isGenerating) return;
    onGenerate(prompt.trim());
  };

  return (
    <div className="bg-slate-950 border-b border-slate-800/80 px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <div className="absolute left-4 pointer-events-none text-indigo-400">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>

          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={isGenerating}
            placeholder={t.promptPlaceholder}
            className="w-full bg-slate-900 border border-slate-700/80 hover:border-indigo-500/50 focus:border-indigo-500 rounded-2xl pl-12 pr-44 py-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition shadow-inner"
          />

          <div className="absolute right-2 flex items-center gap-1.5">
            <button
              type="button"
              onClick={onOpenDetailedModal}
              title={language === 'am' ? 'የተሟላ አማራጮች (Scale & Theme)' : 'Advanced Options'}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition text-xs font-semibold flex items-center gap-1"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline text-[11px]">{language === 'am' ? 'አማራጮች' : 'Options'}</span>
            </button>

            <button
              type="submit"
              disabled={isGenerating || !prompt.trim()}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 shadow-md shadow-indigo-600/30"
            >
              {isGenerating ? (
                <>
                  <Wand2 className="w-3.5 h-3.5 animate-spin" />
                  <span>{t.generating}</span>
                </>
              ) : (
                <>
                  <span>{t.generateBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Quick prompt suggestions */}
        <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 font-bold whitespace-nowrap text-[11px]">
            {language === 'am' ? 'ፈጣን ሀሳቦች:' : 'Try instantly:'}
          </span>
          {quickPrompts.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setPrompt(item.prompt);
                onGenerate(item.prompt);
              }}
              disabled={isGenerating}
              className="bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 px-2.5 py-1 rounded-lg whitespace-nowrap transition text-[11px] font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
