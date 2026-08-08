import React from 'react';
import { motion } from 'framer-motion';

export const SecurityCIADiagram: React.FC = () => {
  const elements = [
    {
      name: '機密性',
      en: 'Confidentiality',
      icon: 'lock',
      role: '見られない',
      desc: '「許可された人だけ」が情報を見られるようにする',
      example: 'レシピを鍵付きの箱にしまう',
      color: 'from-blue-600 to-indigo-600',
      soft: 'bg-blue-50 border-blue-300',
      badge: 'bg-blue-100 text-blue-600',
      delay: 0
    },
    {
      name: '完全性',
      en: 'Integrity',
      icon: 'verified',
      role: '書き換えられない',
      desc: '情報が「正しく・書き換えられていない」状態を保つ',
      example: 'レシピを書き換えられない',
      color: 'from-emerald-600 to-teal-600',
      soft: 'bg-emerald-50 border-emerald-300',
      badge: 'bg-emerald-100 text-emerald-600',
      delay: 0.15
    },
    {
      name: '可用性',
      en: 'Availability',
      icon: 'schedule',
      role: 'いつでも使える',
      desc: '「必要なときに」情報やシステムを使える状態に保つ',
      example: 'いつでもレシピを使える',
      color: 'from-amber-500 to-orange-600',
      soft: 'bg-amber-50 border-amber-300',
      badge: 'bg-amber-100 text-amber-600',
      delay: 0.3
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-blue-50/40 p-6 rounded-2xl border border-slate-200 shadow-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-200">
          <span className="material-symbols-outlined text-xl">security</span>
        </div>
        <div>
          <h3 className="text-base font-black text-[#111c2c]">情報セキュリティの3要素</h3>
          <p className="text-[11px] text-[#43474f]">この3つがそろって、はじめて情報は安全</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {elements.map((e) => (
          <motion.div
            key={e.name}
            className={`rounded-xl border-2 p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow ${e.soft}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: e.delay, duration: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${e.color} text-white flex items-center justify-center shadow-sm`}>
                <span className="material-symbols-outlined text-lg">{e.icon}</span>
              </div>
              <div>
                <div className="font-black text-sm text-slate-800">{e.name}</div>
                <div className="text-[9px] text-slate-400 font-medium">{e.en}</div>
              </div>
            </div>
            <span className={`inline-block self-start mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${e.badge}`}>
              {e.role}
            </span>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{e.desc}</p>
            <p className="text-[10px] text-slate-500 mt-auto pt-1.5 border-t border-slate-200/70">
              例：{e.example}
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
        <span className="material-symbols-outlined text-blue-500 text-lg">tips_and_updates</span>
        <p className="text-xs text-[#43474f]">
          覚え方：<span className="font-bold text-blue-600">見られない</span>・<span className="font-bold text-emerald-600">書き換えられない</span>・<span className="font-bold text-amber-600">いつでも使える</span>
        </p>
      </motion.div>
    </div>
  );
};
