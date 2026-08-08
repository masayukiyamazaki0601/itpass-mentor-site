import React from 'react';
import { motion } from 'framer-motion';

const contracts = [
  {
    name: '労働者派遣', icon: 'person_add', color: 'bg-blue-50 border-blue-300', iconColor: 'text-blue-600 bg-blue-100',
    purpose: '労働力を提供', boss: '派遣先（カフェ）が指示', example: '開発者をカフェに派遣。店長が指示', ok: true
  },
  {
    name: '請負契約', icon: 'inventory', color: 'bg-emerald-50 border-emerald-300', iconColor: 'text-emerald-600 bg-emerald-100',
    purpose: '成果物を完成・納品', boss: '請負元（システム会社）が指示', example: '会員システムを完成させて納品', ok: true
  },
  {
    name: '準委任契約', icon: 'psychology', color: 'bg-purple-50 border-purple-300', iconColor: 'text-purple-600 bg-purple-100',
    purpose: '専門業務を遂行', boss: '受託元（システム会社）が指示', example: 'データ分析など専門業務を依頼', ok: true
  },
];

export const ContractTypesDiagram: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] p-6 rounded-2xl border border-indigo-100 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">3つの契約形態の違い</h3>
        <p className="text-xs text-[#43474f] mt-1">「指示を出す人」がどこか、がポイント</p>
      </div>

      <div className="flex flex-col gap-3">
        {contracts.map((c, i) => (
          <motion.div
            key={c.name}
            className={`rounded-xl border-2 p-4 flex items-start gap-3 ${c.color} shadow-sm`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${c.iconColor}`}>
              <span className="material-symbols-outlined text-xl">{c.icon}</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm text-slate-800 mb-1">{c.name}</h4>
              <div className="grid grid-cols-2 gap-1 text-[10px]">
                <div className="bg-white/60 rounded-lg px-2 py-1"><span className="font-bold">目的：</span>{c.purpose}</div>
                <div className="bg-white/60 rounded-lg px-2 py-1"><span className="font-bold">指示：</span>{c.boss}</div>
              </div>
              <p className="text-[10px] text-slate-600 mt-1.5 italic">例：{c.example}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-4 flex items-start gap-2 bg-red-50 border-2 border-red-200 rounded-xl p-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="material-symbols-outlined text-red-500 text-xl flex-shrink-0">error</span>
        <div>
          <p className="text-xs font-bold text-red-700">⚠️ 偽装請負に注意！</p>
          <p className="text-[10px] text-red-600 mt-0.5">請負契約なのに発注元が直接指示を出すと「偽装請負」という違法行為になります。</p>
        </div>
      </motion.div>
    </div>
  );
};
