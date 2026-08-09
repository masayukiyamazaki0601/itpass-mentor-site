import React from 'react';
import { motion } from 'framer-motion';

const resources = [
  {
    key: 'ヒト', sub: '人的資源', icon: 'group', color: 'bg-blue-50 border-blue-200', iconColor: 'text-blue-600 bg-blue-100',
    feature: 'すべてを動かす主体', example: '店員・バリスタの技術', badge: null
  },
  {
    key: 'モノ', sub: '物的資源', icon: 'inventory_2', color: 'bg-emerald-50 border-emerald-200', iconColor: 'text-emerald-600 bg-emerald-100',
    feature: '時間が経つと劣化する', example: '店舗・コーヒーマシン', badge: null
  },
  {
    key: 'カネ', sub: '財務資源', icon: 'payments', color: 'bg-amber-50 border-amber-200', iconColor: 'text-amber-600 bg-amber-100',
    feature: 'ヒト・モノを動かす「血液」', example: '開店資金・売上', badge: null
  },
  {
    key: '情報', sub: '情報資源', icon: 'database', color: 'bg-teal-50 border-teal-200', iconColor: 'text-teal-600 bg-teal-100',
    feature: '使っても減らない・増える', example: '顧客データ・レシピ', badge: '使っても減らない！'
  },
];

export const ResourcesDiagram: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] p-6 rounded-2xl border border-sky-100 shadow-sm">
      <div className="grid grid-cols-2 gap-4">
        {resources.map((r, i) => (
          <motion.div
            key={r.key}
            className={`rounded-xl p-4 border-2 ${r.color} shadow-sm flex flex-col gap-2 relative`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
          >
            {r.badge && (
              <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow">
                {r.badge}
              </span>
            )}
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${r.iconColor} self-start`}>
              <span className="material-symbols-outlined text-xl">{r.icon}</span>
            </div>
            <div>
              <span className="text-xl font-black text-slate-800">{r.key}</span>
              <span className="text-xs text-slate-500 ml-1">（{r.sub}）</span>
            </div>
            <p className="text-[11px] font-bold text-slate-700">{r.feature}</p>
            <p className="text-[10px] text-slate-500">例：{r.example}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-4 text-center text-xs text-[#43474f] bg-sky-50 border border-sky-100 rounded-xl px-4 py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <span className="font-bold text-sky-700">最重要は「ヒト」</span>。モノ・カネ・情報は、ヒトがいなければ活用できません。
      </motion.div>
    </div>
  );
};
