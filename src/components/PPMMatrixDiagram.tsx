import React from 'react';
import { motion } from 'framer-motion';

export const PPMMatrixDiagram: React.FC = () => {
  const quads = [
    {
      name: '花形',
      en: 'Star',
      growth: '伸びている',
      share: '自分は強い',
      action: '育てる',
      actionDesc: '今はお金がかかるが、将来の稼ぎ頭',
      example: '子供用自転車',
      color: 'bg-amber-50 border-amber-300',
      icon: 'star',
      iconColor: 'text-amber-500',
      badge: 'bg-amber-600',
      tagColor: 'text-amber-600 bg-amber-100',
      delay: 0
    },
    {
      name: '問題児',
      en: 'Question Mark',
      growth: '伸びている',
      share: '自分は弱い',
      action: '見極める',
      actionDesc: '育てる価値があるか判断',
      example: '電動アシスト',
      color: 'bg-orange-50 border-orange-300',
      icon: 'help',
      iconColor: 'text-orange-500',
      badge: 'bg-orange-600',
      tagColor: 'text-orange-600 bg-orange-100',
      delay: 0.1
    },
    {
      name: '金のなる木',
      en: 'Cash Cow',
      growth: '伸びていない',
      share: '自分は強い',
      action: '稼がせる',
      actionDesc: '安定して利益を出す主役',
      example: 'ママチャリ',
      color: 'bg-emerald-50 border-emerald-300',
      icon: 'park',
      iconColor: 'text-emerald-500',
      badge: 'bg-emerald-600',
      tagColor: 'text-emerald-600 bg-emerald-100',
      delay: 0.2
    },
    {
      name: '負け犬',
      en: 'Dog',
      growth: '伸びていない',
      share: '自分は弱い',
      action: '手放す',
      actionDesc: 'お金にならないので見切りをつける',
      example: '高級ロードバイク',
      color: 'bg-slate-100 border-slate-300',
      icon: 'pets',
      iconColor: 'text-slate-500',
      badge: 'bg-slate-500',
      tagColor: 'text-slate-500 bg-slate-200',
      delay: 0.3
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-amber-50/40 p-6 rounded-2xl border border-slate-200 shadow-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shadow-md shadow-amber-200">
          <span className="material-symbols-outlined text-xl">grid_view</span>
        </div>
        <div>
          <h3 className="text-base font-black text-[#111c2c]">PPMマトリックス（4つのグループ）</h3>
          <p className="text-[11px] text-[#43474f]">縦＝市場成長率（伸びている？） ／ 横＝市場占有率（自分は強い？）</p>
        </div>
      </div>

      {/* Column header */}
      <div className="flex items-stretch mb-1">
        <div className="w-16 sm:w-24 flex items-center justify-center">
          <span className="text-[10px] font-bold text-slate-400 text-center leading-tight">
            市場成長率
            <br />（縦軸）
          </span>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-2">
          <span className="text-center text-[10px] font-bold text-slate-400 bg-white/70 rounded-full py-0.5">占有率：高い（強い）</span>
          <span className="text-center text-[10px] font-bold text-slate-400 bg-white/70 rounded-full py-0.5">占有率：低い（弱い）</span>
        </div>
      </div>

      <div className="flex items-stretch gap-2">
        {/* Row labels */}
        <div className="w-16 sm:w-24 flex flex-col gap-2">
          <div className="flex-1 flex items-center justify-center rounded-lg bg-gradient-to-b from-amber-50 to-orange-50 border border-amber-100">
            <span className="text-[10px] font-bold text-amber-600 text-center leading-tight">
              成長率：高
              <br />（伸びている）
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center rounded-lg bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 text-center leading-tight">
              成長率：低
              <br />（伸びていない）
            </span>
          </div>
        </div>

        {/* 4 quadrants */}
        <div className="flex-1 grid grid-cols-2 gap-2">
          {quads.map((q) => (
            <motion.div
              key={q.name}
              className={`rounded-xl border-2 p-3 flex flex-col gap-1.5 shadow-sm hover:shadow-md transition-shadow ${q.color}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: q.delay, duration: 0.4 }}
            >
              <div className="flex items-center gap-1.5">
                <div className={`w-7 h-7 rounded-lg ${q.badge} text-white flex items-center justify-center shadow-sm`}>
                  <span className={`material-symbols-outlined text-base ${q.iconColor}`}>{q.icon}</span>
                </div>
                <span className="font-black text-sm text-slate-800">{q.name}</span>
              </div>
              <span className="text-[9px] text-slate-400 font-medium">{q.en}</span>
              <div className="space-y-0.5 mt-0.5">
                <p className="text-[10px] text-slate-600">◉ {q.growth}</p>
                <p className="text-[10px] text-slate-600">◉ {q.share}</p>
              </div>
              <div className="mt-auto pt-1.5 border-t border-slate-200/70">
                <p className="text-[10px] font-bold text-slate-700">
                  やるべきこと：{q.action}
                </p>
                <p className="text-[9px] text-slate-500 mt-0.5">{q.actionDesc}</p>
                <p className="text-[9px] text-slate-500 mt-0.5">例：{q.example}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 px-4 py-3 flex items-center gap-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="material-symbols-outlined text-amber-500 text-lg">tips_and_updates</span>
        <p className="text-xs text-[#43474f]">
          覚え方：<span className="font-bold text-amber-600">花形＝育てる</span> ／ <span className="font-bold text-emerald-600">金のなる木＝稼がせる</span> ／ <span className="font-bold text-orange-600">問題児＝見極める</span> ／ <span className="font-bold text-slate-500">負け犬＝手放す</span>
        </p>
      </motion.div>
    </div>
  );
};
