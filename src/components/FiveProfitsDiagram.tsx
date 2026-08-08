import React from 'react';
import { motion } from 'framer-motion';

const profits = [
  { label: '売上高', sub: '商品・サービスの販売収入', color: 'bg-sky-100 border-sky-300 text-sky-800', width: '100%', minus: null },
  { label: '① 売上総利益', sub: '売上高 − 売上原価', color: 'bg-blue-100 border-blue-300 text-blue-800', width: '85%', minus: '− 売上原価' },
  { label: '② 営業利益', sub: '売上総利益 − 販管費', color: 'bg-blue-100 border-blue-300 text-blue-800', width: '70%', minus: '− 販売費・一般管理費' },
  { label: '③ 経常利益', sub: '営業利益 ± 営業外損益', color: 'bg-blue-100 border-blue-300 text-blue-800', width: '58%', minus: '± 営業外損益（利息等）' },
  { label: '④ 税引前当期純利益', sub: '経常利益 ± 特別損益', color: 'bg-pink-100 border-pink-300 text-pink-800', width: '48%', minus: '± 特別損益（土地売却等）' },
  { label: '⑤ 当期純利益', sub: '税引前 − 法人税等', color: 'bg-emerald-100 border-emerald-300 text-emerald-800', width: '40%', minus: '− 法人税等' },
];

export const FiveProfitsDiagram: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] p-6 rounded-2xl border border-sky-100 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">5つの利益の段階的な計算</h3>
        <p className="text-xs text-[#43474f] mt-1">売上高から費用を引くたびに、利益の種類が変わります</p>
      </div>

      <div className="max-w-lg mx-auto flex flex-col gap-1.5">
        {profits.map((p, i) => (
          <div key={p.label}>
            {p.minus && (
              <motion.div
                className="flex items-center gap-2 py-0.5 pl-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 - 0.05, duration: 0.3 }}
              >
                <span className="text-[10px] text-slate-500 font-bold">{p.minus}</span>
                <div className="flex-1 border-b border-dashed border-slate-300"></div>
              </motion.div>
            )}
            <motion.div
              className={`rounded-xl border-2 px-4 py-2.5 flex items-center gap-3 ${p.color} shadow-sm`}
              style={{ width: p.width }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="flex-1">
                <span className="font-bold text-sm">{p.label}</span>
                <p className="text-[10px] mt-0.5 opacity-80">{p.sub}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <motion.p
        className="text-xs text-center text-[#43474f] mt-4 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        ⑤当期純利益が「最終的な手取り」。配当金の原資になります。
      </motion.p>
    </div>
  );
};
