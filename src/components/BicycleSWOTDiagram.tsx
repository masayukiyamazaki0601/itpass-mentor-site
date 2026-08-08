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
      items: ['ネット販売の台頭', '大型店の進出'],
      pos: '外の世界',
      delay: 0.3
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 via-white to-cyan-50 p-6 rounded-2xl border border-blue-200 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">SWOT分析（自転車屋さん編）</h3>
        <p className="text-xs text-[#43474f] mt-1">上段＝自分の内側（S・W）／ 下段＝外の世界（O・T）</p>
      </div>

      {/* Column header */}
      <div className="flex items-stretch mb-1">
        <div className="w-20 flex items-center justify-center">
          <span className="text-[10px] font-bold text-slate-500">内側？外側？</span>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-2">
          <span className="text-center text-[10px] font-bold text-slate-500">プラス（有利）</span>
          <span className="text-center text-[10px] font-bold text-slate-500">マイナス（不利）</span>
        </div>
      </div>

      <div className="flex gap-2">
        {/* Row labels */}
        <div className="w-20 flex flex-col gap-2">
          <div className="flex-1 flex items-center justify-center rounded-lg bg-white/60 border border-dashed border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 text-center leading-tight">
              自分の中
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center rounded-lg bg-white/60 border border-dashed border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 text-center leading-tight">
              外の世界
            </span>
          </div>
        </div>

        {/* 4 quadrants */}
        <div className="flex-1 grid grid-cols-2 gap-2">
          {quads.map((q) => (
            <motion.div
              key={q.label}
              className={`rounded-xl border-2 p-3 flex flex-col gap-1 ${q.color}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: q.delay, duration: 0.4 }}
            >
              <div className="flex items-center gap-1.5">
                <span className={`material-symbols-outlined text-lg ${q.iconColor}`}>{q.icon}</span>
                <span className="font-black text-sm text-slate-800">{q.label}</span>
              </div>
              <span className="text-[9px] text-slate-400 font-medium">{q.en} ／ {q.pos}</span>
              <ul className="space-y-0.5 mt-1">
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

      <motion.p
        className="text-xs text-center text-[#43474f] mt-5 bg-white/70 px-4 py-2 rounded-lg border border-slate-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="font-bold text-slate-700">S・W＝自分の中</span> ／ <span className="font-bold text-slate-700">O・T＝外の世界</span>。この区別が試験の一番のポイント！
      </motion.p>
    </div>
  );
};
