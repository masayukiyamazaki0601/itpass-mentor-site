import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  CircleX,
  TrendingDown,
  Send,
  CheckCircle2,
  Umbrella,
  Workflow
} from 'lucide-react';

export const RiskManagementDiagram: React.FC = () => {
  const [active, setActive] = useState<string>('回避');

  const responses = [
    {
      name: '回避',
      icon: CircleX,
      desc: 'リスクそのものを避ける。危険なことはやらない',
      example: '危険な機能を使わない',
      level: 'リスクを「なくす」',
      color: 'from-rose-500 to-red-600',
      border: 'border-rose-500',
      glow: 'shadow-rose-500/20',
      delay: 0
    },
    {
      name: '軽減',
      icon: TrendingDown,
      desc: 'リスクの影響を小さくする。発生しにくくする',
      example: 'バックアップ・セキュリティソフト導入',
      level: 'リスクを「小さくする」',
      color: 'from-sky-500 to-blue-600',
      border: 'border-sky-500',
      glow: 'shadow-sky-500/20',
      delay: 0.1
    },
    {
      name: '移転',
      icon: Send,
      desc: 'リスクを他に移す。他人に負担を分担してもらう',
      example: '保険に加入・外注する',
      level: 'リスクを「他に移す」',
      color: 'from-amber-500 to-orange-600',
      border: 'border-amber-500',
      glow: 'shadow-amber-500/20',
      delay: 0.2
    },
    {
      name: '受容',
      icon: CheckCircle2,
      desc: 'リスクを受け入れる。影響が小さいので対策しない',
      example: '影響が小さいので対策しない',
      level: 'リスクを「受け入れる」',
      color: 'from-emerald-500 to-teal-600',
      border: 'border-emerald-500',
      glow: 'shadow-emerald-500/20',
      delay: 0.3
    }
  ];

  const cur = responses.find((r) => r.name === active)!;
  const CurIcon = cur.icon;

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      {/* Header */}
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-900/60 uppercase">
          Risk Response Lab
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
          リスクへの4つの対応策（クリックして確認）
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          回避・軽減・移転・受容。リスクにどう向き合うか、それぞれの考え方を確かめましょう。
        </p>
      </div>

      {/* 4 buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-6">
        {responses.map((r) => {
          const Icon = r.icon;
          const isSel = active === r.name;
          return (
            <button
              key={r.name}
              onClick={() => setActive(r.name)}
              className={`p-3.5 rounded-xl border text-center cursor-pointer transition-all ${
                isSel
                  ? `bg-slate-800 border-transparent shadow-lg ${r.glow}`
                  : 'bg-slate-950 border-slate-900 text-slate-500 hover:border-slate-700 hover:text-slate-300'
              }`}
            >
              <Icon className={`w-5 h-5 mx-auto mb-1.5 ${isSel ? 'text-cyan-300' : ''}`} />
              <span className="text-sm font-bold block">{r.name}</span>
              <span className="text-[9px] text-slate-500 block mt-0.5">{r.level}</span>
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
                <span className="text-[10px] font-bold text-slate-300 bg-slate-700/50 rounded-full px-2 py-0.5">{cur.level}</span>
              </div>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed">{cur.desc}</p>
              <div className="mt-3 flex items-center gap-2 bg-slate-950/60 border border-slate-700/60 rounded-lg px-3 py-2">
                <Umbrella className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <p className="text-xs font-bold text-cyan-300">カフェの例：{cur.example}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Summary */}
      <div className="mt-6 flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3">
        <Workflow className="w-4 h-4 text-sky-400 flex-shrink-0" />
        <p className="text-xs text-slate-300">
          流れ：<span className="font-bold text-sky-300">特定 → 評価 → 対策 → 見直し</span>
        </p>
      </div>
    </div>
  );
};
