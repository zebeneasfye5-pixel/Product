import React, { useRef, useState } from 'react';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  RotateCw, 
  ExternalLink, 
  Maximize2, 
  Minimize2, 
  Wand2, 
  ShieldCheck, 
  Zap,
  Download,
  UserCheck
} from 'lucide-react';
import { DeviceType } from '../types';
import { Language, translations } from '../data/translations';

interface PreviewCanvasProps {
  html: string;
  appName: string;
  language: Language;
  onOpenRefine: () => void;
  onDeploy: () => void;
  onOpenDownload?: () => void;
  lastDeployedSlug?: string;
}

export const PreviewCanvas: React.FC<PreviewCanvasProps> = ({
  html,
  appName,
  language,
  onOpenRefine,
  onDeploy,
  onOpenDownload,
  lastDeployedSlug,
}) => {
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [key, setKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const t = translations[language];

  const handleReload = () => {
    setKey((prev) => prev + 1);
  };

  const handleOpenNewTab = () => {
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  // Device dimension styling
  const getDeviceDimensions = () => {
    switch (device) {
      case 'mobile':
        return 'w-[375px] h-[780px] rounded-[42px] border-[10px] border-slate-800 shadow-2xl';
      case 'tablet':
        return 'w-[768px] h-[920px] rounded-[32px] border-[10px] border-slate-800 shadow-2xl';
      case 'desktop':
      default:
        return 'w-full h-full rounded-none border-0 shadow-none';
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`flex-1 flex flex-col bg-slate-950 text-white overflow-hidden relative ${
        isFullscreen ? 'p-0 h-screen w-screen z-50' : ''
      }`}
    >
      {/* Studio Control Toolbar */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
        {/* Device Mode Switcher */}
        <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1 gap-1">
          <button
            onClick={() => setDevice('desktop')}
            title={t.desktopView}
            className={`p-1.5 rounded-lg transition flex items-center gap-1 font-semibold ${
              device === 'desktop' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.desktopView}</span>
          </button>

          <button
            onClick={() => setDevice('tablet')}
            title={t.tabletView}
            className={`p-1.5 rounded-lg transition flex items-center gap-1 font-semibold ${
              device === 'tablet' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.tabletView}</span>
          </button>

          <button
            onClick={() => setDevice('mobile')}
            title={t.mobileView}
            className={`p-1.5 rounded-lg transition flex items-center gap-1 font-semibold ${
              device === 'mobile' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.mobileView}</span>
          </button>
        </div>

        {/* Simulated Browser URL bar */}
        <div className="flex-1 max-w-xl mx-2 hidden sm:flex items-center bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-[11px] text-slate-400 font-mono gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="truncate">
            https://{lastDeployedSlug ? `${lastDeployedSlug}.zebene.app` : 'preview.zebene.studio'}
          </span>
          <span className="ml-auto text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 rounded">
            200 OK
          </span>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleReload}
            title={t.reload}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleOpenNewTab}
            title={language === 'am' ? 'በአዲስ ታብ ክፈት' : 'Open in New Window'}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={toggleFullscreen}
            title={t.fullscreen}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          {onOpenDownload && (
            <button
              onClick={onOpenDownload}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-white font-bold px-3 py-1.5 rounded-xl transition shadow"
            >
              <Download className="w-3.5 h-3.5 text-indigo-400" />
              <span className="font-semibold">{t.downloadApp}</span>
            </button>
          )}

          <button
            onClick={onOpenRefine}
            className="flex items-center gap-1.5 bg-indigo-600/30 hover:bg-indigo-600 border border-indigo-500/40 text-indigo-300 hover:text-white font-bold px-3 py-1.5 rounded-xl transition shadow"
          >
            <Wand2 className="w-3.5 h-3.5" />
            <span className="font-semibold">{t.refineWithAI}</span>
          </button>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="flex-1 bg-slate-950 p-2 sm:p-4 flex items-center justify-center overflow-auto">
        <div className={`transition-all duration-300 relative bg-white overflow-hidden ${getDeviceDimensions()}`}>
          {/* Mobile phone camera notch simulation if mobile */}
          {device === 'mobile' && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-800 rounded-full z-20 flex items-center justify-center pointer-events-none">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700"></div>
            </div>
          )}

          {/* Sandboxed Live Application IFrame */}
          <iframe
            key={key}
            srcDoc={html}
            title={appName}
            sandbox="allow-scripts allow-forms allow-modals allow-same-origin allow-popups"
            className="w-full h-full border-0 bg-white"
          />
        </div>
      </div>

      {/* Floating Quick Action Footer */}
      <div className="bg-slate-900/90 border-t border-slate-800 px-4 py-2 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-semibold text-slate-300">{appName}</span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="hidden sm:inline text-emerald-400 font-semibold flex items-center gap-1">
            <UserCheck className="w-3 h-3" />
            {t.developer}
          </span>
          <span className="hidden md:inline text-slate-500">•</span>
          <span className="hidden md:inline text-slate-400">
            {device === 'desktop' ? '100% Responsive Full View' : device === 'tablet' ? '768 × 1024 (iPad)' : '375 × 812 (iPhone)'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {onOpenDownload && (
            <button
              onClick={onOpenDownload}
              className="text-slate-300 hover:text-white font-bold flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded-lg border border-slate-700 transition"
            >
              <Download className="w-3 h-3 text-indigo-400" />
              <span>{t.downloadApp}</span>
            </button>
          )}

          <button
            onClick={onDeploy}
            className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-1 rounded-lg border border-emerald-500/30 transition"
          >
            <span>🚀 {t.deployBtn}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
