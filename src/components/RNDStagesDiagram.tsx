import React from 'react';
import { motion } from 'framer-motion';

export const RNDStagesDiagram: React.FC = () => {
  const stages = [
    {
      name: '基礎研究',
      en: 'Basic Research',
      step: 'STEP 1',
      icon: 'science',
      desc: '「そもそも、この素材にはどんな働きがあるか」を調べる',
      example: 'ある果物に体にいい成分があることを見つける',
      color: 'from-blue-600 to-indigo-600',
      badge: 'bg-blue-100 text-blue-600',
      soft: 'bg-blue-50 border-blue-300',
      delay: 0
    },
    {
      name: '応用研究',
      en: 'Applied Research',
      step: 'STEP 2',
      icon: 'biotech',
      desc: '基礎研究の成果を「商品にどう使うか」を考える',
      example: 'その成分を飲み物に入れる方法を研究する',
      color: 'from-emerald-600 to-teal-600',
      badge: 'bg-emerald-100 text-emerald-600',
      soft: 'bg-emerald-50 border-emerald-300',
      delay: 0.15
    },
    {
      name: '開発研究',
      en: 'Development',
      step: 'STEP 3',
      icon: 'construction',
      desc: '実際に「商品として仕上げる」',
      example: '試作品を作って、大量生産の方法を考える',
      color: 'from-amber-500 to-orange-600',
      badge: 'bg-amber-100 text-amber-600',
      soft: 'bg-amber-50 border-amber-300',
      delay: 0.3
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-indigo-50/40 p-6 rounded-2xl border border-slate-200 shadow-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-200">
          <span className="material-symbols-outlined text-xl">science</span>
        </div>
        <div>
          <h3 className="text-base font-black text-[#111c2c]">研究開発の3つの段階</h3>
          <p className="text-[11px] text-[#43474f]">「調べて → 考えて → 仕上げる」の順に進む</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-stretch gap-3">
        {stages.map((s, idx) => (
          <React.Fragment key={s.name}>
            <motion.div
              className={`flex-1 rounded-xl border-2 p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow ${s.soft}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: s.delay, duration: 0.45 }}
            >
              <div className="flex items-center gap-2">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center shadow-sm`}>
                  <span className="material-symbols-outlined text-lg">{s.icon}</span>
                </div>
                <div>
                  <span className={`inline-block text-[9px] font-bold px-1.5 py-0.5 rounded-md ${s.badge}`}>
                    {s.step}
                  </span>
                  <div className="font-black text-sm text-slate-800 mt-0.5">{s.name}</div>
                </div>
              </div>
              <span className="text-[9px] text-slate-400 font-medium">{s.en}</span>
              <p className="text-[11px] text-slate-600 mt-1.5">{s.desc}</p>
              <p className="text-[10px] text-slate-500 mt-1.5 pt-1.5 border-t border-slate-200/70">
                例：{s.example}
              </p>
            </motion.div>

            {idx < stages.length - 1 && (
              <div className="flex items-center justify-center">
                <motion.span
                  className="material-symbols-outlined text-2xl text-slate-300 rotate-90 md:rotate-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: s.delay + 0.2 }}
                >
                  arrow_forward
                </motion.span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <motion.div
        className="mt-6 rounded-xl bg-gradient-to-r from-blue-50 to-amber-50 border border-blue-100 px-4 py-3 flex items-center gap-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="material-symbols-outlined text-blue-500 text-lg">tips_and_updates</span>
        <p className="text-xs text-[#43474f]">
          覚え方：<span className="font-bold text-blue-600">基礎＝調べる</span> → <span className="font-bold text-emerald-600">応用＝考える</span> → <span className="font-bold text-amber-600">開発＝仕上げる</span>
        </p>
      </motion.div>
    </div>
  );
};
