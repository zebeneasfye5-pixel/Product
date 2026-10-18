import React, { useState } from 'react';
import { Copy, Check, FileCode, FileText, Settings, Play, Download } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface CodeEditorProps {
  html: string;
  appName: string;
  category: string;
  language: Language;
  onUpdateCode: (newHtml: string) => void;
  onExportZip: () => void;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  html,
  appName,
  category,
  language,
  onUpdateCode,
  onExportZip,
}) => {
  const [activeFile, setActiveFile] = useState<'html' | 'readme' | 'config'>('html');
  const [editableCode, setEditableCode] = useState(html);
  const [copied, setCopied] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  const t = translations[language];

  // Keep in sync when html changes externally
  React.useEffect(() => {
    setEditableCode(html);
    setHasChanges(false);
  }, [html]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditableCode(e.target.value);
    setHasChanges(true);
  };

  const handleApplyChanges = () => {
    onUpdateCode(editableCode);
    setHasChanges(false);
  };

  const handleCopy = () => {
    const textToCopy = 
      activeFile === 'html' ? editableCode :
      activeFile === 'readme' ? getReadme() : getConfig();
    
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getReadme = () => {
    return `# ${appName}

Autonomous web application created with WebCraft Studio.

## Category
${category}

## Stack
- HTML5 / Vanilla JS
- Tailwind CSS (via CDN)
- LocalStorage State Management
- Responsive Design

## Deployment
Packaged and ready for immediate deployment on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

\`\`\`bash
# Run locally with any web server
npx serve .
\`\`\`
`;
  };

  const getConfig = () => {
    return JSON.stringify({
      name: appName,
      version: "1.0.0",
      category: category,
      runtime: "edge-static",
      build: {
        command: "none (pre-compiled single bundle)",
        outputDir: "./",
        entryPoint: "index.html"
      },
      headers: {
        "Content-Security-Policy": "default-src 'self' 'unsafe-inline' https: data:",
        "X-Frame-Options": "SAMEORIGIN"
      }
    }, null, 2);
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-950 text-white overflow-hidden">
      {/* Editor Top Bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex items-center justify-between text-xs">
        {/* File Tabs */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveFile('html')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono font-bold transition ${
              activeFile === 'html'
                ? 'bg-slate-950 text-indigo-400 border border-slate-800'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileCode className="w-3.5 h-3.5 text-amber-400" />
            <span>index.html</span>
          </button>

          <button
            onClick={() => setActiveFile('readme')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono font-bold transition ${
              activeFile === 'readme'
                ? 'bg-slate-950 text-indigo-400 border border-slate-800'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            <span>README.md</span>
          </button>

          <button
            onClick={() => setActiveFile('config')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono font-bold transition ${
              activeFile === 'config'
                ? 'bg-slate-950 text-indigo-400 border border-slate-800'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Settings className="w-3.5 h-3.5 text-emerald-400" />
            <span>deploy.json</span>
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {hasChanges && (
            <button
              onClick={handleApplyChanges}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 transition shadow animate-pulse"
            >
              <Play className="w-3 h-3" />
              <span>{language === 'am' ? 'ለውጡን ተግብር (Run)' : 'Apply to Preview'}</span>
            </button>
          )}

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold px-3 py-1.5 rounded-lg transition"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? t.codeCopied : t.copyCode}</span>
          </button>

          <button
            onClick={onExportZip}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold px-3 py-1.5 rounded-lg transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.exportZip}</span>
          </button>
        </div>
      </div>

      {/* Editor Body */}
      <div className="flex-1 p-4 overflow-hidden flex flex-col">
        {activeFile === 'html' ? (
          <div className="flex-1 flex flex-col relative rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden shadow-2xl">
            <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>{appName} / index.html (Complete Runnable Document)</span>
              <span>{editableCode.length.toLocaleString()} characters</span>
            </div>
            <textarea
              value={editableCode}
              onChange={handleCodeChange}
              spellCheck={false}
              className="flex-1 w-full bg-slate-900/90 text-slate-200 font-mono text-xs p-4 leading-relaxed focus:outline-none resize-none selection:bg-indigo-600/50"
            />
          </div>
        ) : activeFile === 'readme' ? (
          <div className="flex-1 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 overflow-auto font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
            {getReadme()}
          </div>
        ) : (
          <div className="flex-1 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 overflow-auto font-mono text-xs text-emerald-300 whitespace-pre-wrap leading-relaxed">
            {getConfig()}
          </div>
        )}
      </div>
    </div>
  );
};
