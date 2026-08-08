import React from 'react';
import { motion } from 'framer-motion';

export const StrategyHierarchyDiagram: React.FC = () => {
  const layers = [
    {
      level: '全社戦略',
      en: 'Corporate Strategy',
      desc: '会社全体の方向性を決める',
      example: '自転車屋を続けるか、電動自転車に特化するか',
      color: 'from-sky-600 to-blue-600',
      soft: 'bg-sky-50 border-sky-300',
      badge: 'bg-sky-600',
      ring: 'ring-sky-600',
      icon: 'account_balance',
      label: '上（大きく・抽象的）',
      labelColor: 'text-sky-600',
      delay: 0
    },
    {
      level: '事業戦略',
      en: 'Business Strategy',
      desc: '事業ごとに「どう勝つか」を決める',
      example: '修理で勝負するか、新車販売で勝負するか',
      color: 'from-blue-600 to-cyan-600',
      soft: 'bg-blue-50 border-blue-300',
      badge: 'bg-blue-600',
      ring: 'ring-blue-100',
      icon: 'business_center',
      label: '中（事業単位）',
      labelColor: 'text-blue-600',
      delay: 0.15
    },
    {
      level: '機能戦略',
      en: 'Functional Strategy',
      desc: '部門ごとの具体的な作戦',
      example: '修理部の「当日修理」、営業部の「学生割引」',
      color: 'from-cyan-600 to-teal-600',
      soft: 'bg-cyan-50 border-cyan-300',
      badge: 'bg-cyan-600',
      ring: 'ring-cyan-100',
      icon: 'handyman',
      label: '下（細かく・具体的）',
      labelColor: 'text-cyan-600',
      delay: 0.3
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-blue-50/40 p-6 rounded-2xl border border-slate-200 shadow-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-600 to-blue-600 text-white flex items-center justify-center shadow-md shadow-sky-600">
          <span className="material-symbols-outlined text-xl">account_tree</span>
        </div>
        <div>
          <h3 className="text-base font-black text-[#111c2c]">戦略には「大きさ」が3つある</h3>
          <p className="text-[11px] text-[#43474f]">上から下へ、だんだん細かくなっていく階層</p>
        </div>
      </div>

      <div className="space-y-2">
        {layers.map((l, idx) => (
          <React.Fragment key={l.level}>
            <motion.div
              className="flex items-stretch gap-3"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: l.delay, duration: 0.45 }}
            >
              {/* Icon badge */}
              <div className="flex flex-col items-center">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${l.color} text-white flex items-center justify-center shadow-md flex-shrink-0`}>
                  <span className="material-symbols-outlined text-xl">{l.icon}</span>
                </div>
                {idx < layers.length - 1 && (
                  <div className="flex-1 w-px bg-gradient-to-b from-slate-300 to-transparent my-1" />
                )}
              </div>

              {/* Card */}
              <div className={`flex-1 rounded-xl border-2 p-4 shadow-sm transition-shadow hover:shadow-md ${l.soft}`}>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-black text-base text-slate-800">{l.level}</span>
                  <span className="text-[10px] text-slate-400 font-medium">{l.en}</span>
                  <span className={`ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/80 ${l.labelColor}`}>
                    {l.label}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1.5">{l.desc}</p>
                <p className={`text-[11px] ${l.labelColor} mt-1.5 pt-1.5 border-t border-slate-200/60`}>
                  例：{l.example}
                </p>
              </div>
            </motion.div>

            {idx < layers.length - 1 && (
              <div className="flex justify-center">
                <motion.span
                  className="material-symbols-outlined text-slate-300 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: l.delay + 0.2 }}
                >
                  keyboard_arrow_down
                </motion.span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <motion.div
        className="mt-6 rounded-xl bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-100 px-4 py-3 flex items-center gap-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="material-symbols-outlined text-sky-400 text-lg">tips_and_updates</span>
        <p className="text-xs text-[#43474f]">
          覚え方：<span className="font-bold text-sky-600">全社（大きく）</span> → <span className="font-bold text-blue-600">事業（中）</span> → <span className="font-bold text-cyan-600">機能（細かく）</span>
        </p>
      </motion.div>
    </div>
  );
};
