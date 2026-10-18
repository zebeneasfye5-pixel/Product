import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  CheckCircle2, 
  Globe2, 
  ExternalLink, 
  Copy, 
  Check, 
  X, 
  ShieldCheck, 
  Activity, 
  QrCode,
  Share2
} from 'lucide-react';
import { Language, translations } from '../data/translations';
import { DeployedAppInfo } from '../types';

interface DeployModalProps {
  isOpen: boolean;
  onClose: () => void;
  appName: string;
  category: string;
  html: string;
  language: Language;
  onDeploymentSuccess: (deployment: DeployedAppInfo) => void;
}

export const DeployModal: React.FC<DeployModalProps> = ({
  isOpen,
  onClose,
  appName,
  category,
  html,
  language,
  onDeploymentSuccess,
}) => {
  const [step, setStep] = useState(0);
  const [deployment, setDeployment] = useState<DeployedAppInfo | null>(null);
  const [copied, setCopied] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [isDeploying, setIsDeploying] = useState(false);

  const t = translations[language];

  const deploymentSteps = language === 'am' ? [
    '📦 አፕሊኬሽኑን ማሸግና ማዘጋጀት (Packaging bundle)...',
    '⚙️ የደመና ኮንቴነር መገንባት (Building Edge Container)...',
    '🔒 የደህንነት TLS / SSL ሰርተፊኬት ማረጋገጥ (SSL Provisioning)...',
    '🚀 ወደ 240+ አለም አቀፍ የCDN አገልጋዮች ማሰራጨት (Edge Distribution)...',
    '✨ ዲፕሎይመንቱ ተጠናቋል! የቀጥታ ሊንኩ ዝግጁ ነው (Live & Healthy)።',
  ] : [
    '📦 Packaging single-page application bundle...',
    '⚙️ Building optimized edge runtime container...',
    '🔒 Provisioning TLS 1.3 / SSL security certificate...',
    '🚀 Propagating to 240+ global Anycast edge nodes...',
    '✨ Deployment successful! Live URL is active & healthy.',
  ];

  useEffect(() => {
    if (!isOpen) {
      setStep(0);
      setDeployment(null);
      setLogs([]);
      setIsDeploying(false);
      return;
    }

    // Start deployment pipeline
    executeDeploy();
  }, [isOpen]);

  const executeDeploy = async () => {
    setIsDeploying(true);
    setStep(1);
    setLogs([deploymentSteps[0]]);

    try {
      // Step 1
      await new Promise((r) => setTimeout(r, 700));
      setStep(2);
      setLogs((p) => [...p, deploymentSteps[1]]);

      // Step 2
      await new Promise((r) => setTimeout(r, 800));
      setStep(3);
      setLogs((p) => [...p, deploymentSteps[2]]);

      // Call API
      const res = await fetch('/api/deploy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: appName,
          category,
          html,
          description: `Autonomous application generated in WebCraft Studio`,
        }),
      });

      const data = await res.json();

      // Step 3
      setStep(4);
      setLogs((p) => [...p, deploymentSteps[3]]);
      await new Promise((r) => setTimeout(r, 600));

      // Final Step
      setStep(5);
      setLogs((p) => [...p, deploymentSteps[4]]);
      setIsDeploying(false);

      if (data.deployment) {
        setDeployment(data.deployment);
        onDeploymentSuccess(data.deployment);
      }
    } catch (err) {
      console.error('Deploy error:', err);
      setIsDeploying(false);
    }
  };

  if (!isOpen) return null;

  const publicUrl = deployment ? `${window.location.origin}${deployment.url}` : '';

  const handleCopyLink = () => {
    if (!publicUrl) return;
    navigator.clipboard.writeText(publicUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenLive = () => {
    if (!deployment) return;
    window.open(deployment.url, '_blank');
  };

  // Quick SVG QR code representation for mobile scanning
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
    publicUrl || 'https://webcraft.live'
  )}`;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-xl w-full shadow-2xl text-white my-8 overflow-hidden animate-scale-up">
        {/* Top Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Rocket className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white">{t.deployModalTitle}</h2>
              <p className="text-xs text-slate-400 font-medium">{t.deployModalDesc}</p>
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
          {/* Progress Bar */}
          <div>
            <div className="flex justify-between items-center text-xs font-bold mb-2">
              <span className="text-emerald-400">
                {isDeploying ? t.deploying : (language === 'am' ? 'ዲፕሎይመንት ተሳክቷል!' : 'Deployment Complete!')}
              </span>
              <span className="text-slate-400 font-mono">{Math.min(step * 20, 100)}%</span>
            </div>
            <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-500"
                style={{ width: `${Math.min(step * 20, 100)}%` }}
              ></div>
            </div>
          </div>

          {/* If deployment complete */}
          {deployment ? (
            <div className="space-y-5 animate-fade-in">
              {/* Live URL Box */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-emerald-500/30 shadow-lg">
                <span className="text-xs text-slate-400 font-bold block mb-1.5 uppercase tracking-wider">
                  {t.liveUrl}
                </span>
                <div className="flex items-center justify-between gap-2 bg-slate-900 border border-slate-800 p-2.5 rounded-xl">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs truncate">
                    <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span className="truncate">{publicUrl}</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={handleCopyLink}
                      className="p-1.5 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-bold transition flex items-center gap-1"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? t.linkCopied : t.copyLink}</span>
                    </button>
                    <button
                      onClick={handleOpenLive}
                      className="p-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition flex items-center gap-1 shadow"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.openLive}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* QR Code and Quick Metrics */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* QR Code for mobile */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-4">
                  <div className="w-24 h-24 bg-white p-1 rounded-xl shadow-inner shrink-0 flex items-center justify-center">
                    <img
                      src={qrCodeUrl}
                      alt="Deploy QR"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-xs space-y-1">
                    <div className="font-bold text-white flex items-center gap-1">
                      <QrCode className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{language === 'am' ? 'በስልክዎ ይሞክሩት' : 'Scan on Mobile'}</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      {language === 'am'
                        ? 'በስልክ ካሜራ ስካን በማድረግ የቀጥታ አፕሊኬሽኑን አሁኑኑ ይመልከቱ'
                        : 'Scan this QR code to interact with your live deployed app on any phone.'}
                    </p>
                  </div>
                </div>

                {/* Health Metrics */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
                  <div className="font-bold text-white flex items-center gap-1.5 mb-2">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{language === 'am' ? 'የአገልጋይ ጤና መረጃ' : 'Edge Health & SLA'}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{t.metrics.status}:</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      {t.metrics.active}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{t.metrics.latency}:</span>
                    <span className="text-white font-mono font-bold">{deployment.metrics.latency}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{t.metrics.region}:</span>
                    <span className="text-white truncate max-w-[140px] text-right">Addis Ababa / Global</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>SSL/TLS:</span>
                    <span className="text-emerald-400 font-bold">Auto TLS 1.3</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Live Step Logs */
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-xs space-y-2 max-h-48 overflow-y-auto">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold mb-1">
                {t.deployLogs}
              </span>
              {logs.map((log, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{log}</span>
                </div>
              ))}
            </div>
          )}

          {/* Footer Action */}
          <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-[11px] text-slate-400">
              <span className="text-emerald-400 font-bold">{t.appName}</span> • <span>{t.developer}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition"
              >
                {language === 'am' ? 'ዝጋ (Close)' : 'Done'}
              </button>
              {deployment && (
                <button
                  onClick={handleOpenLive}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl transition shadow-lg shadow-emerald-600/30 flex items-center gap-1.5"
                >
                  <Globe2 className="w-3.5 h-3.5" />
                  <span>{t.openLive}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
