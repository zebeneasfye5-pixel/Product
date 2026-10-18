import React from 'react';
import { 
  Sparkles, 
  Rocket, 
  Download, 
  FolderGit2, 
  Code2, 
  Eye, 
  PlusCircle,
  LayoutGrid,
  UserCheck
} from 'lucide-react';
import { Language, translations } from '../data/translations';
import { ActiveTab } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onOpenNewModal: () => void;
  onOpenDeployModal: () => void;
  onOpenDownloadModal: () => void;
  isDeploying: boolean;
  deploymentsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  activeTab,
  onTabChange,
  onOpenNewModal,
  onOpenDeployModal,
  onOpenDownloadModal,
  isDeploying,
  deploymentsCount,
}) => {
  const t = translations[language];

  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-40 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo and Brand with Name: ዘበነ, Developer: ዘበነ አስፍዬ */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-indigo-400 text-base">
              ዘ
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-xl tracking-tight text-white">{t.appName}</span>
              <span className="bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-[10px] px-2 py-0.5 rounded-full font-bold">
                {t.appSubname}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 -mt-0.5 font-medium">
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <UserCheck className="w-3 h-3" />
                {t.developer}
              </span>
            </div>
          </div>
        </div>

        {/* Center Navigation Tabs */}
        <div className="hidden md:flex items-center bg-slate-950/80 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => onTabChange('preview')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'preview'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{t.preview}</span>
          </button>

          <button
            onClick={() => onTabChange('code')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'code'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>{t.code}</span>
          </button>

          <button
            onClick={() => onTabChange('templates')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'templates'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>{t.templates}</span>
          </button>

          <button
            onClick={() => onTabChange('deployments')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'deployments'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{t.deployments}</span>
            {deploymentsCount > 0 && (
              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-1.5 py-0.2 rounded-full font-bold">
                {deploymentsCount}
              </span>
            )}
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-0.5">
            <button
              onClick={() => onLanguageChange('am')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                language === 'am'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              አማርኛ
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                language === 'en'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* New App Modal Opener */}
          <button
            onClick={onOpenNewModal}
            className="hidden lg:flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs px-3.5 py-2 rounded-xl transition shadow"
          >
            <PlusCircle className="w-4 h-4 text-indigo-400" />
            <span>{t.newApp}</span>
          </button>

          {/* Download App Directly (Requirement #2: ድህረገፁ አብሊኬሽኑን አውርጀ የምጠቀመው ይደረግ) */}
          <button
            onClick={onOpenDownloadModal}
            className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl transition shadow-lg shadow-indigo-600/25 active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>{t.downloadApp}</span>
          </button>

          {/* Instant Live Deploy Button (Requirement: እዚያው ላይ ዲፕሎይ አድርጎ የሚሰጥ) */}
          <button
            onClick={onOpenDeployModal}
            disabled={isDeploying}
            className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl transition shadow-lg shadow-emerald-600/25 active:scale-95"
          >
            <Rocket className="w-4 h-4" />
            <span>{t.deployBtn}</span>
          </button>
        </div>
      </div>

      {/* Mobile Sub-tabs */}
      <div className="flex md:hidden border-t border-slate-800 bg-slate-950/90 px-4 py-2 gap-2 overflow-x-auto text-xs">
        <button
          onClick={() => onTabChange('preview')}
          className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'preview' ? 'bg-indigo-600 text-white' : 'text-slate-400'
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{t.preview}</span>
        </button>
        <button
          onClick={() => onTabChange('code')}
          className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'code' ? 'bg-indigo-600 text-white' : 'text-slate-400'
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>{t.code}</span>
        </button>
        <button
          onClick={() => onTabChange('templates')}
          className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'templates' ? 'bg-indigo-600 text-white' : 'text-slate-400'
          }`}
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span>{t.templates}</span>
        </button>
        <button
          onClick={() => onTabChange('deployments')}
          className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'deployments' ? 'bg-indigo-600 text-white' : 'text-slate-400'
          }`}
        >
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>{t.deployments} ({deploymentsCount})</span>
        </button>
      </div>
    </header>
  );
};
