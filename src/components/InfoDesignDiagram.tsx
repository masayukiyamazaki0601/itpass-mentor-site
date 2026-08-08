import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  Brain,
  Hand,
  CheckCircle2,
  Tag,
  Code2,
  Timer
} from 'lucide-react';

export const InfoDesignDiagram: React.FC = () => {
  const [active, setActive] = useState<string>('見やすさ');

  const views = [
    {
      name: '見やすさ',
      en: 'Readability',
      icon: Eye,
      desc: '文字の大きさや色、コントラストを工夫して読みやすくする',
      example: 'メニュー表の文字を大きく読みやすく',
      color: 'from-sky-500 to-blue-600',
      border: 'border-sky-500',
      glow: 'shadow-sky-500/20',
      delay: 0
    },
    {
      name: '分かりやすさ',
      en: 'Clarity',
      icon: Brain,
      desc: '情報を整理し、どこに何があるか一目で分かるようにする',
      example: 'メニューをカテゴリごとに整理',
      color: 'from-emerald-500 to-teal-600',
      border: 'border-emerald-500',
      glow: 'shadow-emerald-500/20',
      delay: 0.1
    },
    {
      name: '使いやすさ',
      en: 'Usability',
      icon: Hand,
      desc: '操作しやすい配置にし、誰でも迷わず使えるようにする',
      example: '注文しやすいタッチパネルの配置',
      color: 'from-amber-500 to-orange-600',
      border: 'border-amber-500',
      glow: 'shadow-amber-500/20',
      delay: 0.2
    }
  ];

  const cur = views.find((v) => v.name === active)!;
  const CurIcon = cur.icon;

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      {/* Header */}
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-900/60 uppercase">
          Information Design Lab
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
          情報デザインの3つの視点（クリックして確認）
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          見やすく・分かりやすく・使いやすく。「誰でも使いやすい」デザインを目指す
        </p>
      </div>

      {/* 3 buttons */}
      <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6">
        {views.map((v) => {
          const Icon = v.icon;
          const isSel = active === v.name;
          return (
            <button
              key={v.name}
              onClick={() => setActive(v.name)}
              className={`p-3.5 rounded-xl border text-center cursor-pointer transition-all ${
                isSel
                  ? `bg-slate-800 border-transparent shadow-lg ${v.glow}`
                  : 'bg-slate-950 border-slate-900 text-slate-500 hover:border-slate-700 hover:text-slate-300'
              }`}
            >
              <Icon className={`w-5 h-5 mx-auto mb-1.5 ${isSel ? 'text-cyan-300' : ''}`} />
              <span className="text-sm font-bold block">{v.name}</span>
              <span className="text-[9px] text-slate-500 block mt-0.5">{v.en}</span>
            </button>
          );
        })}
      </div>

      {/* Detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={cur.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className={`rounded-2xl border bg-gradient-to-br p-5 ${cur.border} from-slate-800/60 to-slate-900/60`}
        >
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cur.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
              <CurIcon className="w-6 h-6 text-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="text-base md:text-lg font-black text-white">{cur.name}</h4>
                <span className="text-[10px] font-bold text-slate-300 bg-slate-700/50 rounded-full px-2 py-0.5">{cur.en}</span>
              </div>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed">{cur.desc}</p>
              <div className="mt-3 flex items-center gap-2 bg-slate-950/60 border border-slate-700/60 rounded-lg px-3 py-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <p className="text-xs font-bold text-cyan-300">カフェの例：{cur.example}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* License summary */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3">
          <Tag className="w-4 h-4 text-sky-400 flex-shrink-0" />
          <p className="text-xs text-slate-300">
            権利：<span className="font-bold text-sky-300">著作権</span>＝作った瞬間に発生。無断コピーは侵害
          </p>
        </div>
        <div className="flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3">
          <Timer className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <p className="text-xs text-slate-300">
            ライセンス：<span className="font-bold text-emerald-300">商用・無料・公開・試用</span>の4種類
          </p>
        </div>
      </div>
    </div>
  );
};
