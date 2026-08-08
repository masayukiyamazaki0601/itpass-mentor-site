import React from 'react';
import { motion } from 'framer-motion';

export const StrategyHierarchyDiagram: React.FC = () => {
  const layers = [
    {
      level: '全社戦略',
      en: 'Corporate Strategy',
      desc: '会社全体の方向性を決める',
      example: '自転車屋を続けるか、電動自転車に特化するか',
      color: 'bg-indigo-600',
      soft: 'bg-indigo-50 border-indigo-200',
      icon: 'account_balance',
      span: 'col-span-3'
    },
    {
      level: '事業戦略',
      en: 'Business Strategy',
      desc: '事業ごとに「どう勝つか」を決める',
      example: '修理で勝負するか、新車販売で勝負するか',
      color: 'bg-purple-600',
      soft: 'bg-purple-50 border-purple-200',
      icon: 'business_center',
      span: 'col-span-1'
    },
    {
      level: '機能戦略',
      en: 'Functional Strategy',
      desc: '部門ごとの具体的な作戦',
      example: '修理部の「当日修理」、営業部の「学生割引」',
      color: 'bg-cyan-600',
      soft: 'bg-cyan-50 border-cyan-200',
      icon: 'handyman',
      span: 'col-span-1'
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] p-6 rounded-2xl border border-indigo-100 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">戦略には「大きさ」が3つある</h3>
        <p className="text-xs text-[#43474f] mt-1">上から下へ、だんだん細かくなっていく</p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-xl">account_balance</span>
          </span>
          <motion.div
            className="flex-1 rounded-xl border-2 border-indigo-200 bg-indigo-50 p-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0 }}
          >
            <div className="flex items-baseline gap-2">
              <span className="font-black text-sm text-indigo-800">全社戦略</span>
              <span className="text-[10px] text-indigo-400 font-medium">Corporate Strategy</span>
              <span className="ml-auto text-[10px] text-indigo-600 font-bold">上（大きく・抽象的）</span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1">会社全体の方向性を決める</p>
            <p className="text-[10px] text-indigo-600 mt-0.5">例：自転車屋を続けるか、電動自転車に特化するか</p>
          </motion.div>
        </div>

        {/* connector */}
        <div className="flex justify-center">
          <span className="material-symbols-outlined text-indigo-300 text-lg">keyboard_arrow_down</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-xl">business_center</span>
          </span>
          <motion.div
            className="flex-1 rounded-xl border-2 border-purple-200 bg-purple-50 p-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className="flex items-baseline gap-2">
              <span className="font-black text-sm text-purple-800">事業戦略</span>
              <span className="text-[10px] text-purple-400 font-medium">Business Strategy</span>
              <span className="ml-auto text-[10px] text-purple-600 font-bold">中（事業単位）</span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1">事業ごとに「どう勝つか」を決める</p>
            <p className="text-[10px] text-purple-600 mt-0.5">例：修理で勝負するか、新車販売で勝負するか</p>
          </motion.div>
        </div>

        {/* connector */}
        <div className="flex justify-center">
          <span className="material-symbols-outlined text-purple-300 text-lg">keyboard_arrow_down</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-xl">handyman</span>
          </span>
          <motion.div
            className="flex-1 rounded-xl border-2 border-cyan-200 bg-cyan-50 p-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-baseline gap-2">
              <span className="font-black text-sm text-cyan-800">機能戦略</span>
              <span className="text-[10px] text-cyan-400 font-medium">Functional Strategy</span>
              <span className="ml-auto text-[10px] text-cyan-600 font-bold">下（細かく・具体的）</span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1">部門ごとの具体的な作戦</p>
            <p className="text-[10px] text-cyan-600 mt-0.5">例：修理部の「当日修理」、営業部の「学生割引」</p>
          </motion.div>
        </div>
      </div>

      <motion.p
        className="text-xs text-center text-[#43474f] mt-5 bg-white/70 px-4 py-2 rounded-lg border border-slate-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        覚え方：<span className="font-bold text-indigo-600">全社（大きく）</span> → <span className="font-bold text-purple-600">事業（中）</span> → <span className="font-bold text-cyan-600">機能（細かく）</span>
      </motion.p>
    </div>
  );
};
