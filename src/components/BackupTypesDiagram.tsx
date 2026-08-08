import React from 'react';
import { motion } from 'framer-motion';

export const BackupTypesDiagram: React.FC = () => {
  const types = [
    {
      name: 'フルバックアップ',
      en: 'Full Backup',
      icon: 'inventory_2',
      scope: '「全部」まとめてコピー',
      desc: 'すべてのデータをまとめてコピーする。復元しやすいが、時間と容量がかかる。',
      example: 'レシピ帳を全部コピーする',
      color: 'from-sky-500 to-blue-600',
      soft: 'bg-sky-50 border-sky-300',
      badge: 'bg-sky-100 text-sky-700',
      size: '容量：大きい',
      sizeColor: 'text-rose-600',
      delay: 0
    },
    {
      name: '差分バックアップ',
      en: 'Differential Backup',
      icon: 'difference',
      scope: '「前回のフル以降」の変更分',
      desc: 'フルバックアップ以降に変わったデータだけをコピーする。',
      example: 'フルを取ってから書き足した分だけ',
      color: 'from-amber-500 to-orange-600',
      soft: 'bg-amber-50 border-amber-300',
      badge: 'bg-amber-100 text-amber-700',
      size: '容量：中くらい',
      sizeColor: 'text-amber-600',
      delay: 0.15
    },
    {
      name: '増分バックアップ',
      en: 'Incremental Backup',
      icon: 'add',
      scope: '「前回のバックアップ以降」の変更分',
      desc: '直前のバックアップ以降に変わったデータだけをコピーする。最も容量が少ない。',
      example: '前回のコピー以降の変更分だけ',
      color: 'from-emerald-500 to-teal-600',
      soft: 'bg-emerald-50 border-emerald-300',
      badge: 'bg-emerald-100 text-emerald-700',
      size: '容量：小さい',
      sizeColor: 'text-emerald-600',
      delay: 0.3
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-sky-50/40 p-6 rounded-2xl border border-slate-200 shadow-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-sky-200">
          <span className="material-symbols-outlined text-xl">database</span>
        </div>
        <div>
          <h3 className="text-base font-black text-[#111c2c]">バックアップの3つの種類</h3>
          <p className="text-[11px] text-[#43474f]">「いつ・どれだけ」コピーするかが違う</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {types.map((t) => (
          <motion.div
            key={t.name}
            className={`rounded-xl border-2 p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow ${t.soft}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: t.delay, duration: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${t.color} text-white flex items-center justify-center shadow-sm`}>
                <span className="material-symbols-outlined text-lg">{t.icon}</span>
              </div>
              <div>
                <div className="font-black text-sm text-slate-800">{t.name}</div>
                <div className="text-[9px] text-slate-400 font-medium">{t.en}</div>
              </div>
            </div>
            <span className={`inline-block self-start mt-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full ${t.badge}`}>
              {t.scope}
            </span>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{t.desc}</p>
            <p className={`text-[10px] font-bold mt-1.5 ${t.sizeColor}`}>{t.size}</p>
            <p className="text-[9px] text-slate-500 mt-auto pt-1.5 border-t border-slate-200/70">
              例：{t.example}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-5 rounded-xl bg-gradient-to-r from-sky-50 to-emerald-50 border border-sky-100 px-4 py-3 flex items-center gap-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="material-symbols-outlined text-sky-500 text-lg">tips_and_updates</span>
        <p className="text-xs text-[#43474f]">
          覚え方：<span className="font-bold text-sky-700">フル＝全部</span>・<span className="font-bold text-amber-600">差分＝フル以降</span>・<span className="font-bold text-emerald-600">増分＝直前</span>。増分が一番容量が少ない
        </p>
      </motion.div>
    </div>
  );
};
