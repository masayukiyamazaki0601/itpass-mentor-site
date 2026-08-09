import React from 'react';
import { motion } from 'framer-motion';

const rights = [
  { name: '特許権', target: '発明（技術）', period: '出願から20年', color: 'border-blue-300 bg-blue-50', badge: 'bg-blue-100 text-blue-700', icon: 'lightbulb' },
  { name: '実用新案権', target: '物品の形・構造', period: '出願から10年', color: 'border-emerald-300 bg-emerald-50', badge: 'bg-emerald-100 text-emerald-700', icon: 'extension' },
  { name: '意匠権', target: 'デザイン（見た目）', period: '登録から25年', color: 'border-purple-300 bg-purple-50', badge: 'bg-purple-100 text-purple-700', icon: 'palette' },
  { name: '商標権', target: '名前・マーク', period: '登録から10年（更新可）', color: 'border-amber-300 bg-amber-50', badge: 'bg-amber-100 text-amber-700', icon: 'sell' },
];

export const IndustrialPropertyDiagram: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] p-6 rounded-2xl border border-sky-100 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">産業財産権の4つの権利と期間</h3>
        <p className="text-xs text-[#43474f] mt-1">すべて特許庁への登録が必要です</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {rights.map((r, i) => (
          <motion.div
            key={r.name}
            className={`rounded-xl border-2 p-4 flex flex-col gap-2 ${r.color} shadow-sm`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${r.badge}`}>
                <span className="material-symbols-outlined text-xl">{r.icon}</span>
              </div>
              <h4 className="font-bold text-sm text-slate-800">{r.name}</h4>
            </div>
            <p className="text-xs text-slate-700 font-medium">守るもの：{r.target}</p>
            <div className={`text-[10px] font-bold px-2 py-1 rounded-lg ${r.badge} text-center`}>
              ⏱ {r.period}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-4 text-xs text-center text-[#43474f] bg-sky-50 border border-sky-100 rounded-xl px-4 py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        💡 商標権だけが更新で<span className="font-bold text-amber-700">半永久的に</span>維持できます
      </motion.div>
    </div>
  );
};
