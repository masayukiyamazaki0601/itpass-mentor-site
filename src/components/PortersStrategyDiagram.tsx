import React from 'react';
import { motion } from 'framer-motion';

export const PortersStrategyDiagram: React.FC = () => {
  const strategies = [
    {
      name: 'コストリーダーシップ戦略',
      en: 'Cost Leadership',
      icon: 'savings',
      color: 'bg-blue-50 border-blue-300',
      iconColor: 'text-blue-500',
      win: 'とにかく安く勝つ',
      example: '500円のラーメンを出して、価格で勝負',
      key: '価格が安い',
      keyColor: 'text-blue-600'
    },
    {
      name: '差別化戦略',
      en: 'Differentiation',
      icon: 'auto_awesome',
      color: 'bg-purple-50 border-purple-300',
      iconColor: 'text-purple-500',
      win: '他と違う価値で勝つ',
      example: '独自のこだわりスープで「ここでしか味わえない」にする',
      key: '他にない価値',
      keyColor: 'text-purple-600'
    },
    {
      name: '集中戦略',
      en: 'Focus',
      icon: 'track_changes',
      color: 'bg-amber-50 border-amber-300',
      iconColor: 'text-amber-500',
      win: '絞って特化して勝つ',
      example: '学生街の店が「学生向け大盛り」に特化する',
      key: '1か所に集中',
      keyColor: 'text-amber-600'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-violet-50 via-white to-purple-50 p-6 rounded-2xl border border-violet-200 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">ポーターの3つの基本戦略</h3>
        <p className="text-xs text-[#43474f] mt-1">ライバルに勝つための「3つの道」のどれかを選ぶ</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {strategies.map((s, idx) => (
          <motion.div
            key={s.name}
            className={`rounded-xl border-2 p-4 flex flex-col gap-1 ${s.color}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <span className={`material-symbols-outlined text-xl ${s.iconColor}`}>{s.icon}</span>
              <span className="font-black text-[13px] text-slate-800 leading-tight">{s.name}</span>
            </div>
            <span className="text-[9px] text-slate-400 font-medium">{s.en}</span>
            <span className={`mt-2 text-[11px] font-bold ${s.keyColor}`}>{s.key}</span>
            <p className="text-[11px] text-slate-600 mt-0.5">{s.win}</p>
            <p className="text-[10px] text-slate-500 mt-1.5 pt-1.5 border-t border-slate-200/70">
              例：{s.example}
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
        覚え方：<span className="font-bold text-blue-600">安さ（コスト）</span>・<span className="font-bold text-purple-600">違い（差別化）</span>・<span className="font-bold text-amber-600">絞り（集中）</span>のどれかで勝つ
      </motion.p>
    </div>
  );
};
