import React from 'react';
import { motion } from 'framer-motion';

export const OSFunctionsDiagram: React.FC = () => {
  const jobs = [
    {
      title: '① アプリの起動・管理',
      icon: 'apps',
      desc: 'アプリを起動したり、複数のアプリを同時に動かしたりする',
      example: '各店舗の営業を管理する',
      color: 'from-blue-600 to-indigo-600',
      soft: 'bg-blue-50 border-blue-300',
      badge: 'bg-blue-100 text-blue-600',
      delay: 0
    },
    {
      title: '② ファイルの管理',
      icon: 'folder',
      desc: 'ファイルをフォルダに整理して保存・検索できるようにする',
      example: '書類を整理する',
      color: 'from-emerald-600 to-teal-600',
      soft: 'bg-emerald-50 border-emerald-300',
      badge: 'bg-emerald-100 text-emerald-600',
      delay: 0.1
    },
    {
      title: '③ メモリの管理',
      icon: 'memory',
      desc: '限られたメモリを、どのアプリにどれだけ使わせるか調整する',
      example: 'スペースの割り当てを調整',
      color: 'from-amber-500 to-orange-600',
      soft: 'bg-amber-50 border-amber-300',
      badge: 'bg-amber-100 text-amber-600',
      delay: 0.2
    },
    {
      title: '④ ハードウェアの管理',
      icon: 'settings',
      desc: 'プリンタやキーボードなどの周辺機器を、アプリが使えるように橋渡しする',
      example: 'プリンタの使用を仲介',
      color: 'from-rose-500 to-pink-600',
      soft: 'bg-rose-50 border-rose-300',
      badge: 'bg-rose-100 text-rose-600',
      delay: 0.3
    },
    {
      title: '⑤ ユーザーインタフェース',
      icon: 'touch_app',
      desc: '私たちがコンピュータを操作するための画面を提供する',
      example: '操作するための画面',
      color: 'from-cyan-600 to-sky-600',
      soft: 'bg-cyan-50 border-cyan-300',
      badge: 'bg-cyan-100 text-cyan-600',
      delay: 0.4
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-blue-50/40 p-6 rounded-2xl border border-slate-200 shadow-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-200">
          <span className="material-symbols-outlined text-xl">computer</span>
        </div>
        <div>
          <h3 className="text-base font-black text-[#111c2c]">OSの5つの仕事</h3>
          <p className="text-[11px] text-[#43474f]">OSはコンピュータ全体を「管理」する土台のプログラム</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {jobs.map((j) => (
          <motion.div
            key={j.title}
            className={`rounded-xl border-2 p-3 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow ${j.soft}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: j.delay, duration: 0.4 }}
          >
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${j.color} text-white flex items-center justify-center shadow-sm mb-1`}>
              <span className="material-symbols-outlined text-lg">{j.icon}</span>
            </div>
            <span className="font-black text-[12px] text-slate-800 leading-tight">{j.title}</span>
            <p className="text-[10px] text-slate-600 mt-1 leading-relaxed">{j.desc}</p>
            <p className="text-[9px] text-slate-500 mt-auto pt-1.5 border-t border-slate-200/70">
              例：{j.example}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-5 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 px-4 py-3 flex items-center gap-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="material-symbols-outlined text-blue-500 text-lg">tips_and_updates</span>
        <p className="text-xs text-[#43474f]">
          覚え方：<span className="font-bold text-blue-600">アプリ管理</span>・<span className="font-bold text-emerald-600">ファイル</span>・<span className="font-bold text-amber-600">メモリ</span>・<span className="font-bold text-rose-600">ハード</span>・<span className="font-bold text-cyan-600">画面</span> の5つ
        </p>
      </motion.div>
    </div>
  );
};
