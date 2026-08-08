import React from 'react';
import { motion } from 'framer-motion';

export const SWOTDiagram: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] p-6 rounded-2xl border border-indigo-100 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">SWOT分析の4つの視点</h3>
        <p className="text-xs text-[#43474f] mt-1">内部環境と外部環境を掛け合わせて考える</p>
      </div>

      <div className="max-w-md mx-auto">
        {/* Axis labels */}
        <div className="flex items-center mb-1">
          <div className="w-20"></div>
          <div className="flex-1 grid grid-cols-2 text-center">
            <span className="text-xs font-bold text-blue-600">プラス（強み/機会）</span>
            <span className="text-xs font-bold text-red-500">マイナス（弱み/脅威）</span>
          </div>
        </div>

        <div className="flex gap-1">
          {/* Row labels */}
          <div className="flex flex-col gap-1 justify-center w-20 flex-shrink-0">
            <div className="flex-1 flex items-center justify-center">
              <span className="text-[10px] font-bold text-slate-600 text-center">内部環境（自社）</span>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <span className="text-[10px] font-bold text-slate-600 text-center">外部環境（市場・競合）</span>
            </div>
          </div>

          {/* 4 quadrants */}
          <div className="flex-1 grid grid-cols-2 gap-1">
            {[
              { label: 'S（強み）', en: 'Strengths', color: 'bg-blue-50 border-blue-200', icon: 'trending_up', iconColor: 'text-blue-500', example: '人気のスイーツ', delay: 0 },
              { label: 'W（弱み）', en: 'Weaknesses', color: 'bg-orange-50 border-orange-200', icon: 'trending_down', iconColor: 'text-orange-500', example: '立地が悪い', delay: 0.1 },
              { label: 'O（機会）', en: 'Opportunities', color: 'bg-emerald-50 border-emerald-200', icon: 'star', iconColor: 'text-emerald-500', example: 'テレワーク増加', delay: 0.2 },
              { label: 'T（脅威）', en: 'Threats', color: 'bg-red-50 border-red-200', icon: 'warning', iconColor: 'text-red-500', example: '新競合店の出店', delay: 0.3 },
            ].map((q) => (
              <motion.div
                key={q.label}
                className={`rounded-xl border-2 p-3 flex flex-col gap-1 ${q.color}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: q.delay, duration: 0.4 }}
              >
                <span className={`material-symbols-outlined text-xl ${q.iconColor}`}>{q.icon}</span>
                <span className="font-black text-sm text-slate-800">{q.label}</span>
                <span className="text-[9px] text-slate-500">{q.en}</span>
                <span className="text-[10px] text-slate-600 mt-1 border-t pt-1">例：{q.example}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.p
        className="text-xs text-center text-[#43474f] mt-4 bg-white/60 px-4 py-2 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        「4・3・2」で覚える：SWOT＝4視点、3C＝3視点、PPM＝2軸
      </motion.p>
    </div>
  );
};
