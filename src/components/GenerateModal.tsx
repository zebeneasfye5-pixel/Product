import React, { useState } from 'react';
import { Sparkles, X, Layers, Palette, CheckCircle2, Wand2, Terminal } from 'lucide-react';
import { Language, translations } from '../data/translations';
import { AppCategory, AppScale } from '../types';

interface GenerateModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onGenerate: (data: {
    prompt: string;
    category: AppCategory;
    scale: AppScale;
    theme: string;
    features: string[];
    language: Language;
  }) => void;
  isGenerating: boolean;
  generationStep?: string;
}

export const GenerateModal: React.FC<GenerateModalProps> = ({
  isOpen,
  onClose,
  language,
  onGenerate,
  isGenerating,
  generationStep,
}) => {
  const [prompt, setPrompt] = useState('');
  const [category, setCategory] = useState<AppCategory>('E-Commerce');
  const [scale, setScale] = useState<AppScale>('standard');
  const [theme, setTheme] = useState('modern');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'responsive',
    'cart_or_table',
    'telebirr_cbe',
    'local_storage',
  ]);

  const t = translations[language];

  if (!isOpen) return null;

  const categories: { key: AppCategory; label: string; icon: string }[] = [
    { key: 'E-Commerce', label: language === 'am' ? 'ኢ-ኮሜርስ / ሱቅ' : 'E-Commerce & Store', icon: '🛍️' },
    { key: 'SaaS & Dashboard', label: language === 'am' ? 'የንግድ ERP ዳሽቦርድ' : 'SaaS & Dashboard', icon: '📊' },
    { key: 'Health & Clinic', label: language === 'am' ? 'ጤናና ክሊኒክ ፖርታል' : 'Health & Clinic', icon: '🏥' },
    { key: 'Restaurant & Food', label: language === 'am' ? 'ምግብ ቤትና ዴሊቨሪ' : 'Restaurant & Delivery', icon: '🍲' },
    { key: 'Real Estate', label: language === 'am' ? 'ቤት ኪራይና ሽያጭ' : 'Real Estate Hub', icon: '🏢' },
    { key: 'Booking & Hospitality', label: language === 'am' ? 'ሆቴልና ቀጠሮ ማስያዣ' : 'Booking & Hotel', icon: '🛎️' },
    { key: 'Portfolio & Agency', label: language === 'am' ? 'ፖርትፎሊዮና ማስተዋወቂያ' : 'Portfolio & Agency', icon: '✨' },
    { key: 'Custom', label: language === 'am' ? 'ሌላ ልዩ አፕሊኬሽን' : 'Custom Web App', icon: '⚡' },
  ];

  const scales: { key: AppScale; title: string; desc: string }[] = [
    {
      key: 'micro',
      title: language === 'am' ? 'ቀላል ድረገፅ (Landing Page)' : 'Landing Page',
      desc: language === 'am' ? 'ፈጣን፣ ማራኪና ለቀላል ማስተዋወቂያ' : 'Fast, single-page, conversion focused',
    },
    {
      key: 'standard',
      title: language === 'am' ? 'መደበኛ ድረገፅና አፕሊኬሽን (Full App)' : 'Full Web Application',
      desc: language === 'am' ? 'ሙሉ በይነገፅ፣ የዕቃ ወይም ዳታ ዝርዝርና ፎርሞች' : 'Interactive state, modals, local storage, rich data',
    },
    {
      key: 'enterprise',
      title: language === 'am' ? 'ትልቅ ተቋማዊ ሲስተም (Enterprise Suite)' : 'Enterprise System',
      desc: language === 'am' ? 'በርካታ ሞጁሎች፣ ሰንጠረዦች፣ ሪፖርቶችና አናሊቲክስ' : 'Multi-module, complex tables, charts, permission logs',
    },
  ];

  const featureOptions = [
    { id: 'responsive', label: language === 'am' ? 'ሁሉንም ስልኮችና ኮምፒውተሮች የሚደግፍ' : 'Fully Responsive (Mobile & Desktop)' },
    { id: 'cart_or_table', label: language === 'am' ? 'የዕቃ ቅርጫት ወይም የዳታ ሰንጠረዥ' : 'Shopping Cart or Data Grid' },
    { id: 'telebirr_cbe', label: language === 'am' ? 'የቴሌብር እና ሲቢኢ ብር ክፍያ ማስያዣ' : 'Telebirr & CBE Payment Modal' },
    { id: 'search_filter', label: language === 'am' ? 'ፈጣን የፍለጋ እና የማጣሪያ ሳጥን' : 'Real-time Search & Filter' },
    { id: 'local_storage', label: language === 'am' ? 'መረጃዎችን በስልኩ/ኮምፒውተሩ ማስቀመጫ' : 'LocalStorage Persistence' },
    { id: 'dark_mode', label: language === 'am' ? 'የጨለማና የብርሃን ገጽታ መቀየሪያ' : 'Dark/Light Theme Toggle' },
  ];

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isGenerating) return;

    onGenerate({
      prompt: prompt.trim(),
      category,
      scale,
      theme,
      features: selectedFeatures,
      language,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-2xl w-full shadow-2xl text-white my-8 overflow-hidden animate-scale-up">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white">
                {language === 'am' ? 'አዲስ ድረገፅ እና አፕሊኬሽን በAI ገንባ' : 'Architect New Web Application with AI'}
              </h2>
              <p className="text-xs text-slate-400 font-medium">
                {language === 'am' ? 'በማንኛውም አይነትና መጠን የሚሰራ ጥራት ያለው ሶፍትዌር' : 'Custom high-quality software of any size & category'}
              </p>
            </div>
          </div>
          {!isGenerating && (
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {isGenerating ? (
          /* Animated AI Generation State */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="relative w-20 h-20 mx-auto">
              <div className="w-20 h-20 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Wand2 className="w-8 h-8 text-indigo-400 animate-pulse" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">
                {language === 'am' ? 'አፕሊኬሽኑ በAI እየተገነባ ነው...' : 'Generating Full-Stack Application...'}
              </h3>
              <p className="text-sm text-indigo-300 font-medium animate-pulse">
                {generationStep || (language === 'am' ? 'የኮድ አርክቴክቸርና በይነገፅ እየተቀናጀ ነው' : 'Synthesizing UI components and reactive logic')}
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left max-w-md mx-auto space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Architecture schema verified</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Tailwind CSS design system injected</span>
              </div>
              <div className="flex items-center gap-2 text-indigo-400 animate-pulse">
                <Terminal className="w-3.5 h-3.5" />
                <span>Compiling responsive interactive scripts...</span>
              </div>
            </div>
          </div>
        ) : (
          /* Input Form */
          <form onSubmit={handleCreate} className="p-6 space-y-6">
            {/* User Prompt */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                {language === 'am' ? 'የሶፍትዌሩ ዝርዝር መግለጫ (Prompt)' : 'Application Requirements (Prompt)'}
              </label>
              <textarea
                required
                rows={3}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={
                  language === 'am'
                    ? 'የሚፈልጉትን ድረገፅ ወይም አፕሊኬሽን በዝርዝር ይግለጹ (ለምሳሌ፡ የልብስ እና ጫማ መሸጫ ሱቅ ከነ ካርት፣ የዋጋ ፊልተር፣ የቴሌብር እና ሲቢኢ ብር ክፍያ...)'
                    : 'Describe the application you want built (features, colors, workflows, currency, data types)...'
                }
                className="w-full bg-slate-950 border border-slate-700/80 rounded-2xl p-4 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            {/* Category Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                {language === 'am' ? 'የስራ ዘርፍ / አይነት' : 'Application Category'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {categories.map((c) => (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => setCategory(c.key)}
                    className={`p-3 rounded-xl border text-xs font-bold text-left transition flex items-center gap-2 ${
                      category === c.key
                        ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-sm'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <span>{c.icon}</span>
                    <span className="truncate">{c.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Scale & Complexity */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                {language === 'am' ? 'መጠንና ስኬል (Size & Complexity)' : 'Scale & Architecture'}
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {scales.map((s) => (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setScale(s.key)}
                    className={`p-3.5 rounded-xl border text-left transition ${
                      scale === s.key
                        ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-sm'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-xs text-white">{s.title}</div>
                    <div className="text-[11px] text-slate-400 mt-1">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Features Checkbox */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                {language === 'am' ? 'ተጨማሪ ባህሪያት (Features)' : 'Key Features to Include'}
              </label>
              <div className="grid sm:grid-cols-2 gap-2">
                {featureOptions.map((f) => {
                  const isChecked = selectedFeatures.includes(f.id);
                  return (
                    <div
                      key={f.id}
                      onClick={() => toggleFeature(f.id)}
                      className={`p-2.5 rounded-xl border flex items-center gap-2.5 cursor-pointer text-xs transition ${
                        isChecked
                          ? 'bg-indigo-600/15 border-indigo-500/50 text-white font-semibold'
                          : 'bg-slate-950/40 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                          isChecked ? 'bg-indigo-600 text-white' : 'border border-slate-600'
                        }`}
                      >
                        {isChecked && '✓'}
                      </div>
                      <span>{f.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition"
              >
                {language === 'am' ? 'ተው (Cancel)' : 'Cancel'}
              </button>
              <button
                type="submit"
                disabled={!prompt.trim()}
                className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-extrabold text-xs px-6 py-3 rounded-xl transition shadow-lg shadow-indigo-600/30 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{language === 'am' ? 'አሁን አፕሊኬሽኑን ገንባ' : 'Build Application'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
