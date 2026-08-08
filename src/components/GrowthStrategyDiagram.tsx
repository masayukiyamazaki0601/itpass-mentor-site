import React from 'react';
import { motion } from 'framer-motion';

export const GrowthStrategyDiagram: React.FC = () => {
  const items = [
    {
      name: '多角化',
      en: 'Diversification',
      icon: 'category',
      color: 'bg-blue-50 border-blue-300',
      iconColor: 'text-blue-500',
      desc: '「横に広げる」新しい事業を始める',
      example: 'ラーメン屋がお弁当のデリバリーも始める',
      direction: '→ 横',
      directionColor: 'text-blue-600'
    },
    {
      name: '垂直統合',
      en: 'Vertical Integration',
      icon: 'vertical_align_center',
      color: 'bg-emerald-50 border-emerald-300',
      iconColor: 'text-emerald-500',
      desc: '「縦に伸ばす」材料や販売の段階を取り込む',
      example: 'ラーメン屋が製麺所や畑を持つ',
      direction: '↑ 縦',
      directionColor: 'text-emerald-600'
    },
    {
      name: 'M&A',
      en: 'Mergers & Acquisitions',
      icon: 'merge',
      color: 'bg-amber-50 border-amber-300',
      iconColor: 'text-amber-500',
      desc: '「買って合体」会社同士が合体・買収する',
      example: '人気店のラーメン屋を買い取って技術ごと手に入れる',
      direction: '✕ 合体',
      directionColor: 'text-amber-600'
    },
    {
      name: 'アウトソーシング',
      en: 'Outsourcing',
      icon: 'handyman',
      color: 'bg-blue-50 border-blue-300',
      iconColor: 'text-blue-500',
      desc: '「外に任せる」仕事の一部を専門会社に頼む',
      example: '食器洗いや会計を外の専門会社に任せる',
      direction: '⇄ 外注',
      directionColor: 'text-blue-600'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-sky-50 via-white to-blue-50 p-6 rounded-2xl border border-sky-200 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">会社を「大きくする」4つの方法</h3>
        <p className="text-xs text-[#43474f] mt-1">「横・縦・合体・外注」でイメージを固定しよう</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((it, idx) => (
          <motion.div
            key={it.name}
            className={`rounded-xl border-2 p-4 flex flex-col gap-1 ${it.color}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.12, duration: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <span className={`material-symbols-outlined text-xl ${it.iconColor}`}>{it.icon}</span>
              <span className="font-black text-sm text-slate-800">{it.name}</span>
              <span className={`ml-auto text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/70 ${it.directionColor}`}>
                {it.direction}
              </span>
            </div>
            <span className="text-[9px] text-slate-400 font-medium">{it.en}</span>
            <p className="text-[11px] text-slate-600 mt-1.5">{it.desc}</p>
            <p className="text-[10px] text-slate-500 mt-1 pt-1.5 border-t border-slate-200/70">
              例：{it.example}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-xs text-center text-[#43474f] mt-5 bg-white/70 px-4 py-2 rounded-lg border border-slate-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        覚え方：<span className="font-bold text-blue-600">多角化＝横</span>・<span className="font-bold text-emerald-600">垂直統合＝縦</span>・<span className="font-bold text-amber-600">M&A＝合体</span>・<span className="font-bold text-blue-600">アウトソーシング＝外注</span>
      </motion.p>
    </div>
  );
};
