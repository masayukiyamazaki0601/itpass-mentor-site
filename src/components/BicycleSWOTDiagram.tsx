import React from 'react';
import { motion } from 'framer-motion';

export const BicycleSWOTDiagram: React.FC = () => {
  const quads = [
    {
      label: 'S（強み）',
      en: 'Strengths',
      color: 'bg-blue-50 border-blue-300',
      icon: 'trending_up',
      iconColor: 'text-blue-500',
      badge: 'bg-blue-100 text-blue-600',
      items: ['修理技術が高い', '常連客が多い'],
      pos: '自分の内側',
      delay: 0
    },
    {
      label: 'W（弱み）',
      en: 'Weaknesses',
      color: 'bg-orange-50 border-orange-300',
      icon: 'trending_down',
      iconColor: 'text-orange-500',
      badge: 'bg-orange-100 text-orange-600',
      items: ['資金が少ない', '店が狭い'],
      pos: '自分の内側',
      delay: 0.1
    },
    {
      label: 'O（機会）',
      en: 'Opportunities',
      color: 'bg-emerald-50 border-emerald-300',
      icon: 'star',
      iconColor: 'text-emerald-500',
      badge: 'bg-emerald-100 text-emerald-600',
      items: ['自転車ブーム', '電動自転車の普及'],
      pos: '外の世界',
      delay: 0.2
    },
    {
      label: 'T（脅威）',
      en: 'Threats',
      color: 'bg-red-50 border-red-300',
      icon: 'warning',
      iconColor: 'text-red-500',
      badge: 'bg-red-100 text-red-600',
      items: ['ネット販売の台頭', '大型店の進出'],
      pos: '外の世界',
      delay: 0.3
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-blue-50/40 p-6 rounded-2xl border border-slate-200 shadow-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white flex items-center justify-center shadow-md shadow-blue-200">
          <span className="material-symbols-outlined text-xl">swords</span>
        </div>
        <div>
          <h3 className="text-base font-black text-[#111c2c]">SWOT分析（自転車屋さん編）</h3>
          <p className="text-[11px] text-[#43474f]">上段＝自分の内側（S・W）／ 下段＝外の世界（O・T）</p>
        </div>
      </div>

      {/* Column header */}
      <div className="flex items-stretch mb-1">
        <div className="w-16 flex items-center justify-center">
          <span className="text-[10px] font-bold text-slate-400">内側？外側？</span>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-2">
          <span className="text-center text-[10px] font-bold text-slate-400 bg-white/70 rounded-full py-0.5">プラス（有利）</span>
          <span className="text-center text-[10px] font-bold text-slate-400 bg-white/70 rounded-full py-0.5">マイナス（不利）</span>
        </div>
      </div>

      <div className="flex gap-2">
        {/* Row labels */}
        <div className="w-16 flex flex-col gap-2">
          <div className="flex-1 flex items-center justify-center rounded-lg bg-gradient-to-b from-sky-50 to-blue-50 border border-sky-100">
            <span className="text-[10px] font-bold text-sky-600 text-center leading-tight">
              自分の中
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center rounded-lg bg-gradient-to-b from-teal-50 to-emerald-50 border border-teal-100">
            <span className="text-[10px] font-bold text-teal-600 text-center leading-tight">
              外の世界
            </span>
          </div>
        </div>

        {/* 4 quadrants */}
        <div className="flex-1 grid grid-cols-2 gap-2">
          {quads.map((q) => (
            <motion.div
              key={q.label}
              className={`rounded-xl border-2 p-3 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow ${q.color}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: q.delay, duration: 0.4 }}
            >
              <div className="flex items-center gap-1.5">
                <div className={`w-7 h-7 rounded-lg ${q.badge} flex items-center justify-center`}>
                  <span className={`material-symbols-outlined text-base ${q.iconColor}`}>{q.icon}</span>
                </div>
                <span className="font-black text-sm text-slate-800">{q.label}</span>
              </div>
              <span className="text-[9px] text-slate-400 font-medium">{q.en}</span>
              <span className="text-[9px] font-bold text-slate-500 bg-white/70 rounded-full px-2 py-0.5 self-start">
                {q.pos}
              </span>
              <ul className="space-y-1 mt-1">
                {q.items.map((it) => (
                  <li key={it} className="text-[10px] text-slate-600 flex items-start gap-1">
                    <span className="text-slate-300 mt-px">・</span>
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-5 rounded-xl bg-gradient-to-r from-sky-50 to-teal-50 border border-sky-100 px-4 py-3 flex items-center gap-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="material-symbols-outlined text-sky-400 text-lg">tips_and_updates</span>
        <p className="text-xs text-[#43474f]">
          <span className="font-bold text-sky-600">S・W＝自分の中</span> ／ <span className="font-bold text-teal-600">O・T＝外の世界</span>。この区別が試験の一番のポイント！
        </p>
      </motion.div>
    </div>
  );
};
