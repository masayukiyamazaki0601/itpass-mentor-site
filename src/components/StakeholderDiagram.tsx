import React from 'react';
import { motion } from 'framer-motion';

const stakeholders = [
  { label: 'お客様', icon: 'shopping_bag', color: 'bg-pink-50 border-pink-200 text-pink-700', dot: 'bg-pink-400', duty: '安全な商品を提供' },
  { label: '従業員', icon: 'badge', color: 'bg-blue-50 border-blue-200 text-blue-700', dot: 'bg-blue-400', duty: '働きやすい環境' },
  { label: '株主', icon: 'payments', color: 'bg-amber-50 border-amber-200 text-amber-700', dot: 'bg-amber-400', duty: '利益を報告・配当' },
  { label: '取引先', icon: 'handshake', color: 'bg-emerald-50 border-emerald-200 text-emerald-700', dot: 'bg-emerald-400', duty: '代金をきちんと払う' },
  { label: '地域社会', icon: 'location_city', color: 'bg-purple-50 border-purple-200 text-purple-700', dot: 'bg-purple-400', duty: '地域に貢献する' },
];

export const StakeholderDiagram: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] p-6 rounded-2xl border border-indigo-100 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">ステークホルダの関係図</h3>
        <p className="text-xs text-[#43474f] mt-1">企業は多くの相手に責任を持っています</p>
      </div>

      {/* Center + spokes layout */}
      <div className="flex flex-col items-center gap-3">
        {/* Top row */}
        <div className="flex gap-4 justify-center">
          {stakeholders.slice(0, 2).map((s, i) => (
            <motion.div
              key={s.label}
              className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border ${s.color} w-32 shadow-sm`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
            >
              <span className="material-symbols-outlined text-2xl">{s.icon}</span>
              <span className="font-bold text-sm">{s.label}</span>
              <span className="text-[10px] text-center leading-tight">{s.duty}</span>
            </motion.div>
          ))}
        </div>

        {/* Middle row: stakeholder + center + stakeholder */}
        <div className="flex items-center gap-4">
          <motion.div
            className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border ${stakeholders[2].color} w-32 shadow-sm`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <span className="material-symbols-outlined text-2xl">{stakeholders[2].icon}</span>
            <span className="font-bold text-sm">{stakeholders[2].label}</span>
            <span className="text-[10px] text-center leading-tight">{stakeholders[2].duty}</span>
          </motion.div>

          {/* Center: company */}
          <motion.div
            className="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5, type: 'spring' }}
          >
            <span className="material-symbols-outlined text-3xl">store</span>
            <span className="text-xs font-bold mt-1">カフェ</span>
            <span className="text-[9px] opacity-80">（企業）</span>
          </motion.div>

          <motion.div
            className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border ${stakeholders[3].color} w-32 shadow-sm`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <span className="material-symbols-outlined text-2xl">{stakeholders[3].icon}</span>
            <span className="font-bold text-sm">{stakeholders[3].label}</span>
            <span className="text-[10px] text-center leading-tight">{stakeholders[3].duty}</span>
          </motion.div>
        </div>

        {/* Bottom row */}
        <div className="flex gap-4 justify-center">
          {stakeholders.slice(4).map((s, i) => (
            <motion.div
              key={s.label}
              className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border ${s.color} w-32 shadow-sm`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
            >
              <span className="material-symbols-outlined text-2xl">{s.icon}</span>
              <span className="font-bold text-sm">{s.label}</span>
              <span className="text-[10px] text-center leading-tight">{s.duty}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.p
        className="text-xs text-center text-[#43474f] mt-4 bg-white/60 px-4 py-2 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        ステークホルダ＝企業と関わりを持つすべての人・組織
      </motion.p>
    </div>
  );
};
