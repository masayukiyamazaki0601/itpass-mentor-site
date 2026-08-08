import React from 'react';
import { motion } from 'framer-motion';

export const TechDevToolsDiagram: React.FC = () => {
  const tools = [
    {
      name: '技術ロードマップ',
      en: 'Technology Roadmap',
      icon: 'map',
      role: '計画を立てる',
      desc: '技術開発を「いつ・どこまで」進めるかの予定表',
      example: '1年目は研究、2年目は試作、3年目に発売',
      color: 'from-blue-600 to-blue-600',
      soft: 'bg-blue-50 border-blue-300',
      badge: 'bg-blue-100 text-blue-600',
      delay: 0
    },
    {
      name: '特許',
      en: 'Patent',
      icon: 'verified',
      role: '技術を守る',
      desc: '開発した技術を「うちのもの」と国に登録して守る',
      example: '「この作り方はうちの特許」と保護する',
      color: 'from-emerald-600 to-teal-600',
      soft: 'bg-emerald-50 border-emerald-300',
      badge: 'bg-emerald-100 text-emerald-600',
      delay: 0.15
    },
    {
      name: 'オープンイノベーション',
      en: 'Open Innovation',
      icon: 'hub',
      role: '外部の知恵を取り入れる',
      desc: '自社だけでなく、他社や大学の技術・アイデアも活用',
      example: '大学の研究や他社の技術を組み合わせる',
      color: 'from-amber-500 to-orange-600',
      soft: 'bg-amber-50 border-amber-300',
      badge: 'bg-amber-100 text-amber-600',
      delay: 0.3
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-amber-50/40 p-6 rounded-2xl border border-slate-200 shadow-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-200">
          <span className="material-symbols-outlined text-xl">construction</span>
        </div>
        <div>
          <h3 className="text-base font-black text-[#111c2c]">技術開発のための3つの道具</h3>
          <p className="text-[11px] text-[#43474f]">計画する・守る・取り入れる、の3役を分担</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tools.map((t) => (
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
              <span className="font-black text-[13px] text-slate-800 leading-tight">{t.name}</span>
            </div>
            <span className="text-[9px] text-slate-400 font-medium mt-0.5">{t.en}</span>
            <span className={`inline-block self-start mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${t.badge}`}>
              {t.role}
            </span>
            <p className="text-[11px] text-slate-600 mt-1.5">{t.desc}</p>
            <p className="text-[10px] text-slate-500 mt-1.5 pt-1.5 border-t border-slate-200/70">
              例：{t.example}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-5 rounded-xl bg-gradient-to-r from-blue-50 to-amber-50 border border-blue-100 px-4 py-3 flex items-center gap-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="material-symbols-outlined text-emerald-500 text-lg">tips_and_updates</span>
        <p className="text-xs text-[#43474f]">
          1行で覚える：<span className="font-bold text-blue-600">ロードマップ＝計画</span>・<span className="font-bold text-emerald-600">特許＝守る</span>・<span className="font-bold text-amber-600">オープンイノベーション＝取り入れる</span>
        </p>
      </motion.div>
    </div>
  );
};
