import React from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Copy, 
  Check, 
  Activity, 
  ShieldCheck, 
  Globe2, 
  Clock,
  Sparkles
} from 'lucide-react';
import { DeployedAppInfo } from '../types';
import { Language, translations } from '../data/translations';

interface DeploymentsListModalProps {
  deployments: DeployedAppInfo[];
  language: Language;
  onOpenAppInStudio: (dep: DeployedAppInfo) => void;
  onDeployCurrent: () => void;
}

export const DeploymentsListModal: React.FC<DeploymentsListModalProps> = ({
  deployments,
  language,
  onOpenAppInStudio,
  onDeployCurrent,
}) => {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const t = translations[language];

  const handleCopy = (url: string, id: string) => {
    const fullUrl = `${window.location.origin}${url}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex-1 bg-slate-950 text-white p-6 sm:p-10 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
              {language === 'am' ? 'የቀጥታ ክላውድ አስተዳደር' : 'Global Edge Infrastructure'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {language === 'am' ? 'ዲፕሎይ የተደረጉ ድረገፆችና አፕሊኬሽኖች' : 'Active Live Deployments'}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              {language === 'am'
                ? 'በማንኛውም ሰዓት የቀጥታ ሊንካቸውን መክፈት፣ በስልክ መሞከርና ማስተዳደር ይችላሉ።'
                : 'Manage and test your live deployed applications hosted on our edge cloud.'}
            </p>
          </div>

          <button
            onClick={onDeployCurrent}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs px-5 py-3 rounded-xl transition shadow-lg shadow-emerald-600/30 flex items-center gap-2 self-start"
          >
            <span>🚀 {t.deployBtn}</span>
          </button>
        </div>

        {deployments.length === 0 ? (
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-12 text-center max-w-lg mx-auto space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto text-2xl">
              🌐
            </div>
            <h3 className="text-lg font-bold text-white">
              {language === 'am' ? 'እስካሁን ምንም ዲፕሎይ የተደረገ አፕ የለም' : 'No Deployments Yet'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.noDeployments}
            </p>
            <button
              onClick={onDeployCurrent}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition shadow"
            >
              {language === 'am' ? 'ያለውን አፕሊኬሽን አሁን ዲፕሎይ አድርግ' : 'Deploy Current Project Now'}
            </button>
          </div>
        ) : (
          <div className="grid gap-4">
            {deployments.map((dep) => {
              const fullUrl = `${window.location.origin}${dep.url}`;
              const isCopied = copiedId === dep.id;

              return (
                <div
                  key={dep.id}
                  className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <h4 className="font-extrabold text-white text-base">{dep.name}</h4>
                      <span className="bg-slate-800 text-indigo-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-slate-700">
                        {dep.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <a
                        href={dep.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline truncate max-w-sm"
                      >
                        {fullUrl}
                      </a>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400 pt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" />
                        {new Date(dep.deployedAt).toLocaleTimeString()}
                      </span>
                      <span>•</span>
                      <span className="text-slate-300">Latency: <b>{dep.metrics.latency}</b></span>
                      <span>•</span>
                      <span className="text-slate-300">Memory: <b>{dep.metrics.ram}</b></span>
                      <span>•</span>
                      <span className="text-slate-300">Hits: <b>{dep.metrics.requests}</b></span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <button
                      onClick={() => handleCopy(dep.url, dep.id)}
                      className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span className="hidden sm:inline">{isCopied ? t.linkCopied : t.copyLink}</span>
                    </button>

                    <a
                      href={dep.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.openLive}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
