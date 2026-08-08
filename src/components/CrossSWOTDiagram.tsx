import React from 'react';
import { motion } from 'framer-motion';

export const CrossSWOTDiagram: React.FC = () => {
  const combos = [
    {
      name: '強み × 機会',
      en: 'S × O',
      action: '攻める',
      color: 'bg-emerald-50 border-emerald-300',
      icon: 'bolt',
      iconColor: 'text-emerald-500',
      badge: 'bg-emerald-600',
      example: '修理が得意 × 自転車ブーム → 修理キャンペーンを打つ',
      tag: '一番良い組み合わせ',
      tagColor: 'text-emerald-600 bg-emerald-100',
      desc: '強みを活かして機会に乗る。最も効果的',
      delay: 0
    },
    {
      name: '弱み × 機会',
      en: 'W × O',
      action: '工夫して取り組む',
      color: 'bg-amber-50 border-amber-300',
      icon: 'tips_and_updates',
      iconColor: 'text-amber-500',
      badge: 'bg-amber-600',
      example: '資金が少ない × 電動自転車ブーム → 扱う商品を絞って集中',
      tag: '弱点を補って挑戦',
      tagColor: 'text-amber-600 bg-amber-100',
      desc: '弱みを補いながら機会に挑む',
      delay: 0.1
    },
    {
      name: '強み × 脅威',
      en: 'S × T',
      action: '強みで守る',
      color: 'bg-blue-50 border-blue-300',
      icon: 'shield',
      iconColor: 'text-blue-500',
      badge: 'bg-blue-600',
      example: '修理が得意 × ネット販売 → 「ネットで買ってうちで調整」を売りに',
      tag: '強みで危機に対抗',
      tagColor: 'text-blue-600 bg-blue-100',
      desc: '強みを盾にして脅威に立ち向かう',
      delay: 0.2
    },
    {
      name: '弱み × 脅威',
      en: 'W × T',
      action: '無理をしない（守り）',
      color: 'bg-slate-100 border-slate-300',
      icon: 'pause_circle',
      iconColor: 'text-slate-500',
      badge: 'bg-slate-500',
      example: '資金が少ない × 大型店の進出 → 無理して攻めすぎない',
      tag: '守りに徹する',
      tagColor: 'text-slate-500 bg-slate-200',
      desc: '無理せず守りを固める',
      delay: 0.3
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-emerald-50/40 p-6 rounded-2xl border border-slate-200 shadow-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-200">
          <span className="material-symbols-outlined text-xl">swords</span>
        </div>
        <div>
          <h3 className="text-base font-black text-[#111c2c]">クロスSWOT（組み合わせて作戦を考える）</h3>
          <p className="text-[11px] text-[#43474f]">「自分の中」×「外の世界」を掛け合わせると、具体的な作戦が生まれる</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {combos.map((c) => (
          <motion.div
            key={c.name}
            className={`rounded-xl border-2 p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow ${c.color}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: c.delay, duration: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-lg ${c.badge} text-white flex items-center justify-center shadow-sm`}>
                <span className="material-symbols-outlined text-lg">{c.icon}</span>
              </div>
              <span className="font-black text-sm text-slate-800">{c.name}</span>
              <span className="text-[10px] font-bold text-slate-400 ml-auto">{c.en}</span>
            </div>
            <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
              <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${c.tagColor}`}>
                {c.tag}
              </span>
              <span className="text-[10px] font-bold text-slate-600 bg-white/70 rounded-full px-2 py-0.5">
                → {c.action}
              </span>
            </div>
            <p className="text-[10px] text-slate-500 mt-0.5">{c.desc}</p>
            <p className="text-[10px] text-slate-500 mt-1.5 pt-1.5 border-t border-slate-200/70">
              例：{c.example}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-5 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 px-4 py-3 flex items-center gap-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="material-symbols-outlined text-emerald-500 text-lg">campaign</span>
        <p className="text-xs text-[#43474f]">
          試験で一番出るのは <span className="font-bold text-emerald-600">強み × 機会（攻める）</span>！まずここを覚えよう
        </p>
      </motion.div>
    </div>
  );
};
