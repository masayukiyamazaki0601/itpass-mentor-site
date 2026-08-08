import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Flame,
  Lock,
  KeyRound,
  CheckCircle2,
  Layers
} from 'lucide-react';

export const ThreatCountermeasuresDiagram: React.FC = () => {
  const [active, setActive] = useState<string>('ウイルス対策');

  const measures = [
    {
      name: 'セキュリティソフト',
      guard: 'ウイルス対策',
      icon: ShieldCheck,
      desc: 'ウイルスを検出・駆除するソフト。常に最新に更新しておくことが大切。',
      example: '店の警備員',
      color: 'from-rose-500 to-red-600',
      border: 'border-rose-500',
      glow: 'shadow-rose-500/20',
      delay: 0
    },
    {
      name: 'ファイアウォール',
      guard: '侵入対策',
      icon: Flame,
      desc: '外部からの不正なアクセスを遮断する「防火壁」。出入りするデータをチェック。',
      example: '店の入口で出入りをチェック',
      color: 'from-sky-500 to-blue-600',
      border: 'border-sky-500',
      glow: 'shadow-sky-500/20',
      delay: 0.1
    },
    {
      name: '暗号化',
      guard: '盗難対策',
      icon: Lock,
      desc: 'データを読めない形にして、盗まれても中身を守る。',
      example: 'レシピを鍵付きの箱に',
      color: 'from-amber-500 to-orange-600',
      border: 'border-amber-500',
      glow: 'shadow-amber-500/20',
      delay: 0.2
    },
    {
      name: 'アクセス制御',
      guard: '利用制限',
      icon: KeyRound,
      desc: '「許可された人だけ」が使えるように、IDやパスワード・権限で制限する。',
      example: '鍵を持っている人だけ入れる',
      color: 'from-emerald-500 to-teal-600',
      border: 'border-emerald-500',
      glow: 'shadow-emerald-500/20',
      delay: 0.3
    }
  ];

  const cur = measures.find((m) => m.name === active)!;
  const CurIcon = cur.icon;

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      {/* Header */}
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-900/60 uppercase">
          Security Countermeasure Lab
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
          技術的な対策（クリックして確認）
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          「何を守るか」で対策の種類が違います。ボタンをクリックして確認しましょう。
        </p>
      </div>

      {/* 4 buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-6">
        {measures.map((m) => {
          const Icon = m.icon;
          const isSel = active === m.name;
          return (
            <button
              key={m.name}
              onClick={() => setActive(m.name)}
              className={`p-3.5 rounded-xl border text-center cursor-pointer transition-all ${
                isSel
                  ? `bg-slate-800 border-transparent shadow-lg ${m.glow}`
                  : 'bg-slate-950 border-slate-900 text-slate-500 hover:border-slate-700 hover:text-slate-300'
              }`}
            >
              <Icon className={`w-5 h-5 mx-auto mb-1.5 ${isSel ? 'text-cyan-300' : ''}`} />
              <span className="text-[11px] md:text-xs font-bold block">{m.name}</span>
              <span className="text-[9px] text-slate-500 block mt-0.5">{m.guard}</span>
            </button>
          );
        })}
      </div>

      {/* Detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={cur.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className={`rounded-2xl border bg-gradient-to-br p-5 ${cur.border} from-slate-800/60 to-slate-900/60`}
        >
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cur.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
              <CurIcon className="w-6 h-6 text-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="text-base md:text-lg font-black text-white">{cur.name}</h4>
                <span className="text-[10px] font-bold text-slate-300 bg-slate-700/50 rounded-full px-2 py-0.5">{cur.guard}</span>
              </div>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed">{cur.desc}</p>
              <div className="mt-3 flex items-center gap-2 bg-slate-950/60 border border-slate-700/60 rounded-lg px-3 py-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <p className="text-xs font-bold text-cyan-300">カフェの例：{cur.example}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Summary */}
      <div className="mt-6 flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3">
        <Layers className="w-4 h-4 text-sky-400 flex-shrink-0" />
        <p className="text-xs text-slate-300">
          覚え方：<span className="font-bold text-rose-300">ウイルス＝ソフト</span>・<span className="font-bold text-sky-300">侵入＝ファイアウォール</span>・<span className="font-bold text-amber-300">盗難＝暗号化</span>・<span className="font-bold text-emerald-300">制限＝アクセス制御</span>
        </p>
      </div>
    </div>
  );
};
