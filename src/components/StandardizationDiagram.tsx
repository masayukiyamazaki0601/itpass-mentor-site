import React from 'react';
import { motion } from 'framer-motion';

const standards = [
  {
    name: 'デジュール標準', icon: 'account_balance', color: 'bg-blue-50 border-blue-300', iconColor: 'text-blue-600 bg-blue-100',
    method: '公的機関が正式に制定', examples: ['ISO 9001（品質管理）', 'ISO 27001（情報セキュリティ）', 'JIS（日本工業規格）'],
  },
  {
    name: 'デファクト標準', icon: 'workspace_premium', color: 'bg-emerald-50 border-emerald-300', iconColor: 'text-emerald-600 bg-emerald-100',
    method: '市場で普及して事実上の標準に', examples: ['Windows', 'USB', 'Excel'],
  },
  {
    name: 'フォーラム標準', icon: 'groups', color: 'bg-amber-50 border-amber-300', iconColor: 'text-amber-600 bg-amber-100',
    method: '企業・団体が集まって決める', examples: ['IEEE（LAN/Wi-Fi）', 'W3C（Web標準）'],
  },
];

export const StandardizationDiagram: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] p-6 rounded-2xl border border-indigo-100 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">3つの標準の種類</h3>
        <p className="text-xs text-[#43474f] mt-1">「誰が・どうやって決めたか」で区別しよう</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {standards.map((s, i) => (
          <motion.div
            key={s.name}
            className={`rounded-xl border-2 p-4 flex flex-col gap-3 ${s.color} shadow-sm`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.iconColor}`}>
              <span className="material-symbols-outlined text-xl">{s.icon}</span>
            </div>
            <h4 className="font-black text-sm text-slate-800">{s.name}</h4>
            <p className="text-[10px] text-slate-600 bg-white/70 rounded-lg px-2 py-1">{s.method}</p>
            <ul className="flex flex-col gap-1">
              {s.examples.map(e => (
                <li key={e} className="flex items-center gap-1 text-[10px] text-slate-700">
                  <span className="material-symbols-outlined text-[12px] text-slate-400">arrow_right</span>
                  {e}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-4 bg-white border border-slate-200 rounded-xl p-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xs font-bold text-slate-700 mb-2">主な標準化団体</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: 'ISO', desc: '品質・セキュリティ管理', color: 'bg-blue-50 text-blue-700' },
            { name: 'IEEE', desc: 'LAN・Wi-Fiの規格', color: 'bg-purple-50 text-purple-700' },
            { name: 'JIS', desc: '日本の産業規格・文字コード', color: 'bg-emerald-50 text-emerald-700' },
            { name: 'IEC', desc: '電気・電子技術', color: 'bg-amber-50 text-amber-700' },
          ].map(org => (
            <div key={org.name} className={`flex items-center gap-2 rounded-lg px-3 py-1.5 ${org.color}`}>
              <span className="font-black text-sm">{org.name}</span>
              <span className="text-[10px]">{org.desc}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
