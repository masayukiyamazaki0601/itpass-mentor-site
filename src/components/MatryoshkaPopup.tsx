import React, { useState } from 'react';
import { MatryoshkaTerm } from '../types';
import { MATRYOSHKA_DATABASE } from '../data/microDrillData';

interface MatryoshkaPopupProps {
  initialTermId: string;
  onClose: () => void;
}

export const MatryoshkaPopup: React.FC<MatryoshkaPopupProps> = ({
  initialTermId,
  onClose
}) => {
  // Stack of term IDs being viewed [rootTerm, nestedTerm1, nestedTerm2...]
  const [termStack, setTermStack] = useState<string[]>([initialTermId]);

  const currentTermId = termStack[termStack.length - 1];
  const currentTerm: MatryoshkaTerm | undefined = MATRYOSHKA_DATABASE[currentTermId] || {
    id: currentTermId,
    term: currentTermId.toUpperCase(),
    shortDesc: 'ITパスポート試験で出題される重要専門概念。',
    deepDive: 'この用語は試験の概念理解においてキーとなる重要なキーフレーズです。',
    examPoint: '関連用語とあわせて整理しておきましょう。'
  };

  const pushTerm = (termId: string) => {
    setTermStack((prev) => [...prev, termId]);
  };

  const popTerm = () => {
    if (termStack.length > 1) {
      setTermStack((prev) => prev.slice(0, -1));
    } else {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 relative animate-scale-up overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Layer Depth Indicator Badge */}
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 mb-5">
          <div className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-extrabold text-[10px] px-3 py-1 rounded-xl shadow-xs uppercase tracking-widest flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">layers</span>
              マトリョーシカ解説 (Layer {termStack.length})
            </span>
            {termStack.length > 1 && (
              <button
                onClick={popTerm}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded-lg flex items-center gap-0.5"
              >
                <span className="material-symbols-outlined text-xs">arrow_back</span>
                前の用語へ戻る
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Stack Breadcrumbs */}
        {termStack.length > 1 && (
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-4 overflow-x-auto pb-1">
            {termStack.map((tId, idx) => {
              const termObj = MATRYOSHKA_DATABASE[tId];
              const isLast = idx === termStack.length - 1;
              return (
                <React.Fragment key={idx}>
                  {idx > 0 && <span className="material-symbols-outlined text-xs">chevron_right</span>}
                  <span
                    onClick={() => setTermStack(termStack.slice(0, idx + 1))}
                    className={`cursor-pointer hover:underline ${isLast ? 'text-indigo-600 font-bold' : ''}`}
                  >
                    {termObj ? termObj.term : tId.toUpperCase()}
                  </span>
                </React.Fragment>
              );
            })}
          </div>
        )}

        {/* Main Term Header */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {currentTerm.term}
            </h3>
            {currentTerm.english && (
              <span className="text-xs font-bold text-slate-400">
                ({currentTerm.english})
              </span>
            )}
          </div>
          {currentTerm.reading && (
            <span className="text-xs font-medium text-slate-400 block mt-0.5">
              {currentTerm.reading}
            </span>
          )}
        </div>

        {/* Quick Summary Box */}
        <div className="bg-indigo-50/70 border border-indigo-100 p-4 rounded-2xl mb-5">
          <p className="text-sm font-bold text-indigo-950 leading-relaxed">
            {currentTerm.shortDesc}
          </p>
        </div>

        {/* Deep Dive Description */}
        <div className="mb-6">
          <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">
            概念の深掘り理解
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed font-medium">
            {currentTerm.deepDive}
          </p>
        </div>

        {/* Nested Related Terms - Tap to open deeper layer! */}
        {currentTerm.relatedTermIds && currentTerm.relatedTermIds.length > 0 && (
          <div className="mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            <h4 className="text-xs font-bold text-slate-500 mb-2.5 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-indigo-600">touch_app</span>
              関連用語をタップしてさらに深掘り（マトリョーシカ展開）:
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentTerm.relatedTermIds.map((rId) => {
                const rObj = MATRYOSHKA_DATABASE[rId];
                const rName = rObj ? rObj.term : rId.toUpperCase();
                return (
                  <button
                    key={rId}
                    onClick={() => pushTerm(rId)}
                    className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl bg-white border border-indigo-200 text-indigo-700 hover:bg-indigo-600 hover:text-white shadow-2xs transition-all cursor-pointer group"
                  >
                    <span>{rName}</span>
                    <span className="material-symbols-outlined text-xs group-hover:translate-x-0.5 transition-transform">
                      unfold_more
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Exam Tip Card */}
        <div className="text-xs text-slate-800 bg-amber-50/80 border border-amber-200/80 p-4 rounded-2xl flex items-start gap-2.5">
          <span className="material-symbols-outlined text-lg text-amber-600 flex-shrink-0">
            verified
          </span>
          <span className="leading-relaxed font-medium">
            <strong>試験の着眼点:</strong> {currentTerm.examPoint}
          </span>
        </div>

        {/* Back / Close button footer */}
        <div className="mt-6 pt-4 border-t border-slate-200/80 flex justify-between items-center">
          {termStack.length > 1 ? (
            <button
              onClick={popTerm}
              className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              上の階層に戻る
            </button>
          ) : (
            <span className="text-[11px] text-slate-400 font-semibold">1回30秒の直感理解</span>
          )}

          <button
            onClick={onClose}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-sm cursor-pointer"
          >
            理解した（閉じる）
          </button>
        </div>
      </div>
    </div>
  );
};
