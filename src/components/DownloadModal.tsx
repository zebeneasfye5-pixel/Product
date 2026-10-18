import React from 'react';
import { Download, FileCode, Archive, CheckCircle, Info, X, Laptop, Smartphone } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  appName: string;
  language: Language;
  onDownloadHtml: () => void;
  onDownloadZip: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  appName,
  language,
  onDownloadHtml,
  onDownloadZip,
}) => {
  const t = translations[language];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-lg w-full shadow-2xl text-white my-8 overflow-hidden animate-scale-up">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white">{t.downloadModalTitle}</h2>
              <p className="text-xs text-slate-400 font-medium">{t.downloadModalDesc}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="text-xs text-slate-300">
            <span className="font-bold text-white text-sm block mb-1">{appName}</span>
            <p className="text-slate-400">
              {language === 'am'
                ? 'የሚፈልጉትን የማውረጃ አማራጭ ይምረጡ፤ አውርደው በኮምፒውተርዎ ወይም በስልክዎ በቀጥታ መጠቀም ይችላሉ።'
                : 'Choose your download format. Use it directly on any device without servers or setup.'}
            </p>
          </div>

          {/* Download Options Grid */}
          <div className="grid gap-3">
            {/* Option 1: Standalone HTML */}
            <div 
              onClick={() => {
                onDownloadHtml();
                onClose();
              }}
              className="bg-slate-950 hover:bg-slate-850 border border-slate-800 hover:border-indigo-500/50 p-4 rounded-2xl cursor-pointer transition flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <FileCode className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-xs sm:text-sm group-hover:text-indigo-300 transition">
                    {language === 'am' ? 'ቀጥታ የሚሰራ ነጠላ ፋይል (.html)' : 'Standalone Runnable App (.html)'}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {language === 'am' ? 'ደብል-ክሊክ በማድረግ ወዲያውኑ የሚከፈት' : 'Double click to launch in any browser immediately'}
                  </p>
                </div>
              </div>
              <button className="bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl transition shrink-0 flex items-center gap-1.5 shadow">
                <Download className="w-3.5 h-3.5" />
                <span>{language === 'am' ? 'አውርድ' : 'Download'}</span>
              </button>
            </div>

            {/* Option 2: Full ZIP Package */}
            <div 
              onClick={() => {
                onDownloadZip();
                onClose();
              }}
              className="bg-slate-950 hover:bg-slate-850 border border-slate-800 hover:border-indigo-500/50 p-4 rounded-2xl cursor-pointer transition flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Archive className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-xs sm:text-sm group-hover:text-indigo-300 transition">
                    {language === 'am' ? 'ሙሉ ፕሮጀክት ዚፕ (.zip)' : 'Full Project Archive (.zip)'}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {language === 'am' ? 'ከነ README፣ Vercel፣ Netlify እና የማስኬጃ ስክሪፕቶች' : 'Includes README, deployment config, and runner scripts'}
                  </p>
                </div>
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl transition shrink-0 flex items-center gap-1.5 shadow">
                <Download className="w-3.5 h-3.5" />
                <span>{language === 'am' ? 'አውርድ' : 'Download'}</span>
              </button>
            </div>
          </div>

          {/* Instructions Box */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <CheckCircle className="w-4 h-4" />
              <span>{t.howToUse}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.howToUseText}
            </p>
            <div className="flex items-center gap-4 text-[11px] text-slate-400 pt-1">
              <span className="flex items-center gap-1"><Laptop className="w-3.5 h-3.5 text-indigo-400" /> Windows / Mac / Linux</span>
              <span className="flex items-center gap-1"><Smartphone className="w-3.5 h-3.5 text-teal-400" /> Android / iOS</span>
            </div>
          </div>

          {/* Developer credit */}
          <div className="text-center pt-1 border-t border-slate-800 text-[11px] text-slate-400 font-medium">
            <span>{t.developer}</span> • <span>{t.developerEmail}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
