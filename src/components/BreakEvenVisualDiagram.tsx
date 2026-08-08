import React from 'react';
import { motion } from 'framer-motion';

export const BreakEvenVisualDiagram: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] p-6 rounded-2xl border border-sky-100 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">損益分岐点のイメージ</h3>
        <p className="text-xs text-[#43474f] mt-1">売上が増えるにつれて赤字から黒字へ</p>
      </div>

      <div className="max-w-xl mx-auto flex flex-col gap-4">
        {/* Zone bar */}
        <div className="flex items-center gap-2">
          <motion.div
            className="flex-1 bg-red-100 border-2 border-red-200 rounded-xl p-4 flex flex-col items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <span className="material-symbols-outlined text-3xl text-red-400 mb-1">trending_down</span>
            <span className="font-black text-red-700 text-sm">赤字ゾーン</span>
            <span className="text-[10px] text-red-600 text-center mt-1">売上 ＜ 総費用</span>
            <span className="text-[10px] text-red-500 mt-1">（損失が出る）</span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center px-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <div className="w-1 h-16 bg-slate-400 rounded-full"></div>
            <div className="bg-slate-700 text-white text-[9px] font-bold px-2 py-1 rounded-lg mt-1 text-center whitespace-nowrap">損益分岐点<br/>利益＝0</div>
            <div className="w-1 h-4 bg-slate-400 rounded-full mt-1"></div>
          </motion.div>

          <motion.div
            className="flex-1 bg-emerald-100 border-2 border-emerald-200 rounded-xl p-4 flex flex-col items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <span className="material-symbols-outlined text-3xl text-emerald-500 mb-1">trending_up</span>
            <span className="font-black text-emerald-700 text-sm">黒字ゾーン</span>
            <span className="text-[10px] text-emerald-600 text-center mt-1">売上 ＞ 総費用</span>
            <span className="text-[10px] text-emerald-500 mt-1">（利益が出る）</span>
          </motion.div>
        </div>

        {/* Cost breakdown */}
        <motion.div
          className="bg-white rounded-xl border border-slate-200 p-4 grid grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <div className="flex items-center gap-2 bg-blue-50 rounded-lg p-3">
            <span className="material-symbols-outlined text-blue-500">home</span>
            <div>
              <span className="text-xs font-bold text-blue-800">固定費</span>
              <p className="text-[10px] text-blue-600">売上ゼロでも発生<br/>例：家賃・給料</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-amber-50 rounded-lg p-3">
            <span className="material-symbols-outlined text-amber-500">coffee</span>
            <div>
              <span className="text-xs font-bold text-amber-800">変動費</span>
              <p className="text-[10px] text-amber-600">売れた分だけ増加<br/>例：材料費</p>
            </div>
          </div>
          <div className="col-span-2 bg-sky-50 rounded-lg p-3 text-center">
            <span className="text-xs font-bold text-sky-800">損益分岐点売上高 ＝ 固定費 ÷ 限界利益率</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
