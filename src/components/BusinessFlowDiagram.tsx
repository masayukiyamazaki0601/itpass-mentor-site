import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: 1, label: '現状分析', icon: 'search', color: 'bg-blue-50 border-blue-200 text-blue-700', desc: '今の業務の流れ\n（As-Is）を把握' },
  { num: 2, label: '課題の発見', icon: 'flag', color: 'bg-amber-50 border-amber-200 text-amber-700', desc: '問題点・ムダを\nリストアップ' },
  { num: 3, label: '改善案の検討', icon: 'lightbulb', color: 'bg-purple-50 border-purple-200 text-purple-700', desc: '解決策を\n複数考える' },
  { num: 4, label: '計画の策定', icon: 'assignment', color: 'bg-pink-50 border-pink-200 text-pink-700', desc: 'KGI・KPI・\nCSFを設定' },
  { num: 5, label: '実行・評価', icon: 'sync_alt', color: 'bg-emerald-50 border-emerald-200 text-emerald-700', desc: 'PDCAで\n継続改善' },
];

export const BusinessFlowDiagram: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] p-6 rounded-2xl border border-indigo-100 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">業務改善の流れ（As-Is → To-Be）</h3>
        <p className="text-xs text-[#43474f] mt-1">現状分析から計画・実行まで5ステップ</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 flex-wrap">
        {steps.map((step, i) => (
          <React.Fragment key={step.num}>
            <motion.div
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 ${step.color} w-28 shadow-sm`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
            >
              <div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center font-black text-sm text-slate-700 border">
                {step.num}
              </div>
              <span className="material-symbols-outlined text-2xl">{step.icon}</span>
              <span className="font-bold text-xs text-center leading-tight">{step.label}</span>
              <span className="text-[10px] text-center leading-tight whitespace-pre-line text-slate-600">{step.desc}</span>
            </motion.div>
            {i < steps.length - 1 && (
              <motion.span
                className="material-symbols-outlined text-2xl text-slate-300 hidden sm:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.12 + 0.1 }}
              >arrow_forward</motion.span>
            )}
          </React.Fragment>
        ))}
      </div>

      <motion.div
        className="mt-4 text-center text-xs text-[#43474f] bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        PDCAサイクル：Plan（計画） → Do（実行） → Check（評価） → Act（改善）を繰り返す
      </motion.div>
    </div>
  );
};
