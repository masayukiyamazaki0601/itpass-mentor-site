import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  KeyRound,
  Lock,
  LockOpen,
  ShieldCheck,
  Zap,
  RefreshCw,
  ArrowRight
} from 'lucide-react';

export const EncryptionInteractiveDiagram: React.FC = () => {
  const [mode, setMode] = useState<'shared' | 'public'>('shared');

  const shared = {
    title: '共通鍵暗号方式',
    point: '同じ鍵を暗号化・復号に使う',
    steps: [
      { label: '暗号化', desc: '共通鍵で「閉める」', icon: Lock },
      { label: '復号', desc: '同じ共通鍵で「開ける」', icon: LockOpen }
    ],
    feature: '処理が速い',
    issue: '課題：鍵をどう安全に渡すか',
    example: '同じ鍵を2つ用意して持つ',
    color: 'from-sky-500 to-blue-600',
    border: 'border-sky-500'
  };

  const pub = {
    title: '公開鍵暗号方式',
    point: '公開鍵と秘密鍵の2つを使う',
    steps: [
      { label: '暗号化', desc: '相手の公開鍵で「閉める」', icon: Lock },
      { label: '復号', desc: '自分の秘密鍵で「開ける」', icon: LockOpen }
    ],
    feature: '鍵の受け渡し問題を解決',
    issue: '課題：処理が遅い',
    example: '公開鍵で鍵をかけ、秘密鍵で開ける',
    color: 'from-amber-500 to-orange-600',
    border: 'border-amber-500'
  };

  const cur = mode === 'shared' ? shared : pub;

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      {/* Header */}
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-900/60 uppercase">
          Encryption Lab
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-sky-400 via-blue-400 to-amber-400 bg-clip-text text-transparent">
          2つの暗号方式（クリックで切り替え）
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          共通鍵（1つの鍵）と公開鍵（2つの鍵）。どちらの方式か選んで、仕組みを確かめましょう。
        </p>
      </div>

      {/* Mode buttons */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button
          onClick={() => setMode('shared')}
          className={`p-4 rounded-xl border text-center cursor-pointer transition-all ${
            mode === 'shared'
              ? 'bg-slate-800 border-transparent shadow-lg shadow-sky-500/20'
              : 'bg-slate-950 border-slate-900 text-slate-500 hover:border-slate-700'
          }`}
        >
          <KeyRound className="w-5 h-5 mx-auto mb-1.5 text-sky-400" />
          <span className="text-xs font-bold block">共通鍵暗号方式</span>
          <span className="text-[9px] text-slate-500 block mt-0.5">1つの鍵</span>
        </button>
        <button
          onClick={() => setMode('public')}
          className={`p-4 rounded-xl border text-center cursor-pointer transition-all ${
            mode === 'public'
              ? 'bg-slate-800 border-transparent shadow-lg shadow-amber-500/20'
              : 'bg-slate-950 border-slate-900 text-slate-500 hover:border-slate-700'
          }`}
        >
          <KeyRound className="w-5 h-5 mx-auto mb-1.5 text-amber-400" />
          <span className="text-xs font-bold block">公開鍵暗号方式</span>
          <span className="text-[9px] text-slate-500 block mt-0.5">2つの鍵</span>
        </button>
      </div>

      {/* Visualization */}
      <div className={`rounded-2xl border bg-slate-950/50 p-5 mb-5 ${cur.border}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-sm font-black bg-gradient-to-r ${cur.color} bg-clip-text text-transparent`}>
                {cur.title}
              </span>
              <span className="text-[10px] text-slate-400">{cur.point}</span>
            </div>

            {/* 鍵の表示 */}
            <div className="flex items-center gap-2 mb-4">
              {mode === 'shared' ? (
                <div className="flex items-center gap-1.5 bg-sky-950/40 border border-sky-800/60 rounded-lg px-3 py-2">
                  <KeyRound className="w-4 h-4 text-sky-400" />
                  <span className="text-[11px] font-bold text-sky-300">共通鍵（同じ鍵）×2</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5 bg-amber-950/40 border border-amber-800/60 rounded-lg px-3 py-2">
                    <LockOpen className="w-4 h-4 text-amber-400" />
                    <span className="text-[11px] font-bold text-amber-300">公開鍵（みんなに公開）</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-orange-950/40 border border-orange-800/60 rounded-lg px-3 py-2">
                    <KeyRound className="w-4 h-4 text-orange-400" />
                    <span className="text-[11px] font-bold text-orange-300">秘密鍵（本人だけ）</span>
                  </div>
                </div>
              )}
            </div>

            {/* 暗号化→復号の流れ */}
            <div className="grid grid-cols-2 gap-3">
              {cur.steps.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div key={idx} className="rounded-xl bg-slate-900 border border-slate-700/60 p-4 flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${mode === 'shared' ? 'text-sky-400' : 'text-amber-400'} flex-shrink-0`} />
                    <div>
                      <div className="text-xs font-bold text-slate-200">{s.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{s.desc}</div>
                    </div>
                    {idx === 0 && <ArrowRight className="w-4 h-4 text-slate-600 ml-auto" />}
                  </div>
                );
              })}
            </div>

            {/* feature / issue */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-700/60 rounded-lg px-3 py-2">
                <Zap className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <p className="text-[11px] font-bold text-emerald-300">{cur.feature}</p>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-700/60 rounded-lg px-3 py-2">
                <RefreshCw className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <p className="text-[11px] font-bold text-rose-300">{cur.issue}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Summary */}
      <div className="flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3">
        <ShieldCheck className="w-4 h-4 text-sky-400 flex-shrink-0" />
        <p className="text-xs text-slate-300">
          覚え方：<span className="font-bold text-sky-300">共通鍵＝同じ鍵（速い）</span>／<span className="font-bold text-amber-300">公開鍵＝2つの鍵（受け渡しOK）</span>
        </p>
      </div>
    </div>
  );
};
