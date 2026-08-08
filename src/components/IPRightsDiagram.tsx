import React from 'react';
import { motion } from 'framer-motion';

const rights = [
  {
    label: '産業財産権', icon: 'factory', color: 'bg-blue-50 border-blue-300 text-blue-800', iconBg: 'bg-blue-100 text-blue-600',
    sub: '特許庁への登録が必要', examples: ['特許権', '実用新案権', '意匠権', '商標権'], badge: '登録必要'
  },
  {
    label: '著作権', icon: 'menu_book', color: 'bg-emerald-50 border-emerald-300 text-emerald-800', iconBg: 'bg-emerald-100 text-emerald-600',
    sub: '作った瞬間に自動発生', examples: ['文章・音楽・絵画', 'ソースコード', '写真・映像'], badge: '登録不要'
  },
  {
    label: 'その他の権利', icon: 'lock', color: 'bg-amber-50 border-amber-300 text-amber-800', iconBg: 'bg-amber-100 text-amber-600',
    sub: '不正競争防止法などで保護', examples: ['営業秘密（レシピ）', 'ドメイン名', 'パブリシティ権'], badge: '秘密管理'
  },
];

export const IPRightsDiagram: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] p-6 rounded-2xl border border-indigo-100 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">知的財産権の3つのグループ</h3>
        <p className="text-xs text-[#43474f] mt-1">「登録が要るか要らないか」でまず区別しよう</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {rights.map((r, i) => (
          <motion.div
            key={r.label}
            className={`rounded-xl border-2 p-4 flex flex-col gap-3 ${r.color} shadow-sm relative`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
          >
            <span className={`absolute top-2 right-2 text-[9px] font-bold px-2 py-0.5 rounded-full ${r.iconBg}`}>{r.badge}</span>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${r.iconBg}`}>
              <span className="material-symbols-outlined text-xl">{r.icon}</span>
            </div>
            <div>
              <h4 className="font-black text-base">{r.label}</h4>
              <p className="text-[10px] mt-0.5 opacity-80">{r.sub}</p>
            </div>
            <ul className="flex flex-col gap-1">
              {r.examples.map(e => (
                <li key={e} className="flex items-center gap-1.5 text-[11px]">
                  <span className="material-symbols-outlined text-xs">check_circle</span>
                  {e}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-4 text-xs text-center text-[#43474f] bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        カフェで守りたいもの：店名（商標権）・レシピ（営業秘密）・メニュー写真（著作権）
      </motion.div>
    </div>
  );
};
