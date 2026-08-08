import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MonitorSmartphone,
  Folder,
  MemoryStick,
  Printer,
  MousePointerClick,
  Lock,
  CheckCircle2
} from 'lucide-react';

export const OSInteractiveDiagram: React.FC = () => {
  const [activeJob, setActiveJob] = useState<string>('app');

  const jobs = [
    {
      id: 'app',
      title: 'アプリの起動・管理',
      icon: MonitorSmartphone,
      desc: 'アプリ（ソフトウェア）を起動したり、複数のアプリを同時に動かしたりする。',
      example: '各店舗の営業を管理する（売上管理・在庫管理アプリを同時起動）',
      tip: '「複数のアプリを同時に動かす」＝OSの仕事',
      color: 'from-blue-500 to-indigo-600',
      border: 'border-blue-500',
      glow: 'shadow-blue-500/20'
    },
    {
      id: 'file',
      title: 'ファイルの管理',
      icon: Folder,
      desc: '写真や動画などのファイルを、フォルダに整理して保存・検索できるようにする。',
      example: '書類を整理する（レシピ・注文書をフォルダ分け）',
      tip: '「フォルダで整理・検索」＝OSの仕事',
      color: 'from-emerald-500 to-teal-600',
      border: 'border-emerald-500',
      glow: 'shadow-emerald-500/20'
    },
    {
      id: 'memory',
      title: 'メモリの管理',
      icon: MemoryStick,
      desc: '限られたメモリを、どのアプリにどれだけ使わせるかを調整する。',
      example: 'スペースの割り当てを調整（混み合ったら別の作業を待たせる）',
      tip: '「限られたメモリを配分する」＝OSの仕事',
      color: 'from-amber-500 to-orange-600',
      border: 'border-amber-500',
      glow: 'shadow-amber-500/20'
    },
    {
      id: 'hw',
      title: 'ハードウェアの管理',
      icon: Printer,
      desc: 'プリンタやキーボードなどの周辺機器を、アプリが使えるように橋渡しする。',
      example: 'プリンタの使用を仲介（どのアプリからも印刷できるようにする）',
      tip: '「周辺機器の橋渡し」＝OSの仕事',
      color: 'from-rose-500 to-pink-600',
      border: 'border-rose-500',
      glow: 'shadow-rose-500/20'
    },
    {
      id: 'ui',
      title: 'ユーザーインタフェース',
      icon: MousePointerClick,
      desc: '私たちがコンピュータを操作するための画面（デスクトップなど）を提供する。',
      example: '操作するための画面（ボタンやウィンドウを表示）',
      tip: '「操作する画面を提供」＝OSの仕事',
      color: 'from-cyan-500 to-sky-600',
      border: 'border-cyan-500',
      glow: 'shadow-cyan-500/20'
    }
  ];

  const active = jobs.find((j) => j.id === activeJob)!;
  const ActiveIcon = active.icon;

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      {/* Header */}
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-900/60 uppercase">
          OS Interactive Manager
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          OSの5つの仕事（クリックして確認）
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          OSはコンピュータ全体を「管理」する土台のプログラム。仕事のボタンをクリックして、役割を確かめましょう。
        </p>
      </div>

      {/* 5つの仕事のボタン */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 md:gap-3 mb-6">
        {jobs.map((j) => {
          const Icon = j.icon;
          const isSel = activeJob === j.id;
          return (
            <button
              key={j.id}
              onClick={() => setActiveJob(j.id)}
              className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                isSel
                  ? `bg-slate-800 border-transparent shadow-lg ${j.glow}`
                  : 'bg-slate-950 border-slate-900 text-slate-500 hover:border-slate-700 hover:text-slate-300'
              }`}
            >
              <Icon className={`w-5 h-5 mx-auto mb-1.5 ${isSel ? 'text-cyan-300' : ''}`} />
              <span className="text-[10px] md:text-[11px] font-bold leading-tight block">
                {j.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* 詳細表示 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className={`rounded-2xl border bg-gradient-to-br p-5 ${active.border} from-slate-800/60 to-slate-900/60`}
        >
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${active.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
              <ActiveIcon className="w-6 h-6 text-white" />
            </div>
            <div className="min-w-0">
              <h4 className="text-base md:text-lg font-black text-white">{active.title}</h4>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed">{active.desc}</p>
              <p className="text-xs text-slate-400 mt-2.5">
                <span className="font-bold text-cyan-300">カフェの例：</span>
                {active.example}
              </p>
              <div className="mt-3 flex items-center gap-2 bg-slate-950/60 border border-slate-700/60 rounded-lg px-3 py-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <p className="text-xs font-bold text-emerald-300">{active.tip}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* まとめ */}
      <div className="mt-6 flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3">
        <Lock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
        <p className="text-xs text-slate-300">
          覚え方：<span className="font-bold text-cyan-300">アプリ・ファイル・メモリ・ハード・画面</span> の5つがOSの仕事
        </p>
      </div>
    </div>
  );
};
