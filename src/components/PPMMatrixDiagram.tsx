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
      iconColor: 'text-slate-400',
      delay: 0.3
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-amber-50 via-white to-orange-50 p-6 rounded-2xl border border-amber-200 shadow-sm">
      <div className="text-center mb-5">
        <h3 className="text-lg font-bold text-[#111c2c]">PPMマトリックス（4つのグループ）</h3>
        <p className="text-xs text-[#43474f] mt-1">縦＝市場成長率（伸びている？） ／ 横＝市場占有率（自分は強い？）</p>
      </div>

      {/* Column header */}
      <div className="flex items-stretch mb-1">
        <div className="w-24 sm:w-32 flex items-end justify-center pb-1">
          <span className="text-[10px] font-bold text-slate-500 text-center">
            市場成長率
            <br />（縦軸）
          </span>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-2">
          <span className="text-center text-[10px] font-bold text-slate-500 pb-1">市場占有率：高い（強い）</span>
          <span className="text-center text-[10px] font-bold text-slate-500 pb-1">市場占有率：低い（弱い）</span>
        </div>
      </div>

      <div className="flex items-stretch gap-2">
        {/* Row labels */}
        <div className="w-24 sm:w-32 flex flex-col gap-2">
          <div className="flex-1 flex items-center justify-center">
            <span className="text-[10px] font-bold text-slate-500 text-center">
              成長率：高
              <br />（伸びている）
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <span className="text-[10px] font-bold text-slate-500 text-center">
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
              className={`rounded-xl border-2 p-3 flex flex-col gap-1.5 ${q.color}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: q.delay, duration: 0.4 }}
            >
              <div className="flex items-center gap-1.5">
                <span className={`material-symbols-outlined text-lg ${q.iconColor}`}>{q.icon}</span>
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

      <motion.p
        className="text-xs text-center text-[#43474f] mt-5 bg-white/70 px-4 py-2 rounded-lg border border-slate-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        覚え方：<span className="font-bold text-amber-500">花形＝育てる</span> ／ <span className="font-bold text-emerald-500">金のなる木＝稼がせる</span> ／ <span className="font-bold text-orange-500">問題児＝見極める</span> ／ <span className="font-bold text-slate-400">負け犬＝手放す</span>
      </motion.p>
    </div>
  );
};
