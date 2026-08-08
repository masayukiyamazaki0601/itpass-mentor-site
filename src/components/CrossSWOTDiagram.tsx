import React from 'react';
import { motion } from 'framer-motion';

export const CrossSWOTDiagram: React.FC = () => {
  const combos = [
    {
      name: '強み × 機会',
      en: 'S × O',
      action: '攻める',
      color: 'bg-emerald-50 border-emerald-300',
      icon: 'attack',
      iconColor: 'text-emerald-500',
      example: '修理が得意 × 自転車ブーム → 修理キャンペーンを打つ',
      tag: '一番良い組み合わせ',
      tagColor: 'text-emerald-600 bg-emerald-100'
    },
    {
      name: '弱み × 機会',
      en: 'W × O',
      action: '工夫して取り組む',
      color: 'bg-amber-50 border-amber-300',
      icon: 'tips_and_updates',
      iconColor: 'text-amber-500',
      example: '資金が少ない × 電動自転車ブーム → 扱う商品を絞って集中',
      tag: '弱点を補って挑戦',
      tagColor: 'text-amber-600 bg-amber-100'
    },
    {
      name: '強み × 脅威',
      en: 'S × T',
      action: '強みで守る',
      color: 'bg-blue-50 border-blue-300',
      icon: 'shield',
      iconColor: 'text-blue-500',
      example: '修理が得意 × ネット販売 → 「ネットで買ってうちで調整」を売りに',
      tag: '強みで危機に対抗',
      tagColor: 'text-blue-600 bg-blue-100'
    },
    {
      name: '弱み × 脅威',
      en: 'W × T',
      action: '無理をしない（守り）',
      color: 'bg-slate-100 border-slate-300',
      icon: 'pause_circle',
      iconColor: 'text-slate-400',
      example: '資金が少ない × 大型店の進出 → 無理して攻めすぎない',
      tag: '守りに徹する',
      tagColor: 'text-slate-500 bg-slate-200'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-teal-50 via-white to-emerald-50 p-6 rounded-2xl border border-teal-200 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">クロスSWOT（組み合わせて作戦を考える）</h3>
        <p className="text-xs text-[#43474f] mt-1">「自分の中」×「外の世界」を掛け合わせると、具体的な作戦が生まれる</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {combos.map((c, idx) => (
          <motion.div
            key={c.name}
            className={`rounded-xl border-2 p-4 flex flex-col gap-1 ${c.color}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.12, duration: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <span className={`material-symbols-outlined text-xl ${c.iconColor}`}>{c.icon}</span>
              <span className="font-black text-sm text-slate-800">{c.name}</span>
              <span className="text-[9px] text-slate-400 font-medium ml-auto">{c.en}</span>
            </div>
            <span className={`inline-block self-start mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${c.tagColor}`}>
              {c.tag}
            </span>
            <p className="text-[11px] font-bold text-slate-700 mt-1">
              作戦：<span className="font-normal">{c.action}</span>
            </p>
            <p className="text-[10px] text-slate-500 mt-1 pt-1.5 border-t border-slate-200/70">
              例：{c.example}
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
        試験で一番出るのは <span className="font-bold text-emerald-600">強み × 機会（攻める）</span>！まずここを覚えよう
      </motion.p>
    </div>
  );
};
