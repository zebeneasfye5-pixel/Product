import React from 'react';
import { 
  Coffee, 
  Activity, 
  LayoutDashboard, 
  Utensils, 
  Home, 
  Sparkles, 
  Check, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { TEMPLATES } from '../data/templates';
import { AppTemplate } from '../types';
import { Language, translations } from '../data/translations';

interface TemplatesGalleryProps {
  language: Language;
  onSelectTemplate: (template: AppTemplate) => void;
}

export const TemplatesGallery: React.FC<TemplatesGalleryProps> = ({
  language,
  onSelectTemplate,
}) => {
  const t = translations[language];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-amber-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-teal-400" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-5 h-5 text-indigo-400" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-orange-400" />;
      case 'Home':
        return <Home className="w-5 h-5 text-blue-400" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="flex-1 bg-slate-950 text-white p-6 sm:p-10 overflow-y-auto">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-1">
            {language === 'am' ? 'የተዘጋጁ ጥራት ያላቸው ናሙናዎች' : 'Production-Ready Master Templates'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {language === 'am'
              ? 'ማንኛውንም አይነትና መጠን ሶፍትዌር ወዲያውኑ ይጀምሩ'
              : 'Launch Any Application Type & Scale Immediately'}
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            {language === 'am'
              ? 'ከስር ካሉት የተሟሉና በከፍተኛ ጥራት ከተዘጋጁት ናሙናዎች አንዱን መርጠው በስቱዲዮው ውስጥ ያስተካክሉ ወይም እዚያው ላይ ዲፕሎይ ያድርጉ።'
              : 'Choose any of these fully featured, responsive applications to inspect, customize, or deploy right now.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEMPLATES.map((tmpl) => (
            <div
              key={tmpl.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                    {getIcon(tmpl.iconName)}
                  </div>
                  <span className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {language === 'am' ? tmpl.badgeAm : tmpl.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black text-white group-hover:text-indigo-300 transition">
                  {language === 'am' ? tmpl.nameAm : tmpl.name}
                </h3>
                <p className="text-xs text-indigo-400 font-semibold mt-0.5">
                  {language === 'am' ? tmpl.taglineAm : tmpl.tagline}
                </p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {language === 'am' ? tmpl.descriptionAm : tmpl.description}
                </p>

                {/* Features list */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-1.5">
                  {(language === 'am' ? tmpl.featuresAm : tmpl.features).slice(0, 4).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 flex items-center gap-3">
                <button
                  onClick={() => onSelectTemplate(tmpl)}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs py-3 rounded-xl transition shadow-md shadow-indigo-600/20 flex items-center justify-center gap-1.5"
                >
                  <span>{t.loadTemplate}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
