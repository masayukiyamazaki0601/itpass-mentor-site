import React from 'react';
import { motion } from 'framer-motion';

export const STPDiagram: React.FC = () => {
  const steps = [
    {
      name: 'S セグメンテーション',
      ja: '分ける',
      en: 'Segmentation',
      icon: 'segmentation',
      desc: 'お客様を、年齢や趣味などの特徴でグループ分け',
      example: '学生・会社員・お年寄り',
      color: 'bg-blue-50 border-blue-300',
      iconColor: 'text-blue-500',
      delay: 0
    },
    {
      name: 'T ターゲティング',
      ja: '選ぶ',
      en: 'Targeting',
      icon: 'ads_click',
      desc: '分けた中から「どのグループを狙うか」を選ぶ',
      example: '健康志向の若い女性に絞る',
      color: 'bg-emerald-50 border-emerald-300',
      iconColor: 'text-emerald-500',
      delay: 0.15
    },
    {
      name: 'P ポジショニング',
      ja: '位置づける',
      en: 'Positioning',
      icon: 'location_on',
      desc: 'ライバルと比べて「うちの強み」を心に刻ませる',
      example: '「この街で一番フレッシュ」',
      color: 'bg-amber-50 border-amber-300',
      iconColor: 'text-amber-500',
      delay: 0.3
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] p-6 rounded-2xl border border-indigo-100 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">STP分析の流れ</h3>
        <p className="text-xs text-[#43474f] mt-1">分ける → 選ぶ → 位置づける。絞り込んで「誰に売るか」を決める</p>
      </div>

      <div className="flex flex-col md:flex-row items-stretch gap-3">
        {steps.map((s, idx) => (
          <React.Fragment key={s.name}>
            <motion.div
              className={`flex-1 rounded-xl border-2 p-4 flex flex-col gap-1 ${s.color}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: s.delay, duration: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <span className={`material-symbols-outlined text-xl ${s.iconColor}`}>{s.icon}</span>
                <span className="font-black text-[13px] text-slate-800">{s.name}</span>
              </div>
              <span className="text-[9px] text-slate-400 font-medium">{s.en}</span>
              <p className="text-[11px] text-slate-600 mt-1.5">{s.desc}</p>
              <p className="text-[10px] text-slate-500 mt-1.5 pt-1.5 border-t border-slate-200/70">
                例：{s.example}
              </p>
            </motion.div>
            {idx < steps.length - 1 && (
              <div className="flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-indigo-300 rotate-90 md:rotate-0">
                  arrow_forward
                </span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <motion.p
        className="text-xs text-center text-[#43474f] mt-5 bg-white/70 px-4 py-2 rounded-lg border border-slate-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        スムージー屋の例：<span className="font-bold text-blue-600">全員</span> → <span className="font-bold text-emerald-600">若い女性</span> → <span className="font-bold text-amber-600">フレッシュさで勝負</span>
      </motion.p>
    </div>
  );
};
