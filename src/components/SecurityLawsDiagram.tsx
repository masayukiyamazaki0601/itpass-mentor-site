import React from 'react';
import { motion } from 'framer-motion';

const laws = [
  {
    name: '不正アクセス禁止法', icon: 'no_encryption', color: 'bg-red-50 border-red-200', iconColor: 'text-red-500 bg-red-100',
    point: 'ネットワーク経由', desc: '他人のIDを使ったなりすましや、脆弱性を突いた侵入を禁止', key: '「ネットワーク経由」が条件'
  },
  {
    name: '個人情報保護法', icon: 'badge', color: 'bg-blue-50 border-blue-200', iconColor: 'text-blue-500 bg-blue-100',
    point: '匿名加工情報', desc: '個人情報の収集・管理・提供のルール。漏えい時は報告が義務', key: '匿名化すれば同意不要で提供可'
  },
  {
    name: 'サイバーセキュリティ基本法', icon: 'security', color: 'bg-purple-50 border-purple-200', iconColor: 'text-purple-500 bg-purple-100',
    point: '国・企業・国民', desc: 'サイバー攻撃から国を守るための国の基本方針を定めた法律', key: '国民には「努力義務」'
  },
  {
    name: 'プロバイダ責任制限法', icon: 'manage_search', color: 'bg-emerald-50 border-emerald-200', iconColor: 'text-emerald-500 bg-emerald-100',
    point: '発信者情報の開示', desc: 'ネット上の誹謗中傷に対し、書いた人の情報をプロバイダに開示請求できる', key: '「開示請求」と「責任制限」の2本柱'
  },
];

export const SecurityLawsDiagram: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] p-6 rounded-2xl border border-sky-100 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">セキュリティ関連4法律の比較</h3>
        <p className="text-xs text-[#43474f] mt-1">それぞれの「守り方」と「キーワード」を覚えよう</p>
      </div>

      <div className="flex flex-col gap-3">
        {laws.map((law, i) => (
          <motion.div
            key={law.name}
            className={`rounded-xl border-2 p-4 flex items-start gap-3 ${law.color} shadow-sm`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${law.iconColor}`}>
              <span className="material-symbols-outlined text-xl">{law.icon}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="font-bold text-sm text-slate-800">{law.name}</h4>
                <span className="text-[9px] font-bold bg-white border border-slate-300 text-slate-600 px-2 py-0.5 rounded-full">{law.point}</span>
              </div>
              <p className="text-[11px] text-slate-600 mt-1">{law.desc}</p>
              <p className="text-[10px] font-bold text-slate-700 mt-1.5 bg-white/60 rounded-lg px-2 py-1">💡 {law.key}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
