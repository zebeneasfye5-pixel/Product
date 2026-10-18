import React, { useState } from 'react';
import { Wand2, X, Sparkles, ArrowRight, CornerDownLeft, CheckCircle2 } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface RefineDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onRefine: (instructions: string) => void;
  isRefining: boolean;
  appName: string;
}

export const RefineDrawer: React.FC<RefineDrawerProps> = ({
  isOpen,
  onClose,
  language,
  onRefine,
  isRefining,
  appName,
}) => {
  const [instructions, setInstructions] = useState('');
  const t = translations[language];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!instructions.trim() || isRefining) return;
    onRefine(instructions.trim());
    setInstructions('');
  };

  const handleChipClick = (chip: string) => {
    setInstructions(chip);
  };

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-slate-900 border-l border-slate-800 shadow-2xl z-50 flex flex-col text-white animate-slide-left">
      {/* Top Header */}
      <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Wand2 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm text-white">{t.refineWithAI}</h3>
            <span className="text-[11px] text-slate-400 block truncate max-w-[200px]">{appName}</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Body Content */}
      <div className="flex-1 p-6 overflow-y-auto space-y-6">
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            {language === 'am' ? 'ፈጣን ማሻሻያዎች (Quick Enhancements)' : 'Quick AI Prompts'}
          </label>
          <div className="flex flex-col gap-2">
            {t.quickRefinements.map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleChipClick(chip)}
                className="text-left text-xs bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 p-2.5 rounded-xl text-slate-300 hover:text-white transition flex items-center justify-between"
              >
                <span>{chip}</span>
                <span className="text-indigo-400 text-xs font-bold">+</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            {language === 'am' ? 'የማሻሻያ መመሪያዎን ይጻፉ' : 'Custom Enhancement Instructions'}
          </label>
          <form onSubmit={handleSubmit} className="space-y-3">
            <textarea
              required
              rows={4}
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder={t.refinePlaceholder}
              className="w-full bg-slate-950 border border-slate-700/80 rounded-2xl p-3.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
            />

            <button
              type="submit"
              disabled={isRefining || !instructions.trim()}
              className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-extrabold text-xs py-3 rounded-xl transition shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
            >
              {isRefining ? (
                <>
                  <Wand2 className="w-4 h-4 animate-spin" />
                  <span>{language === 'am' ? 'እያሻሻለ ነው...' : 'Applying AI Refinements...'}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>{t.applyChanges}</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
