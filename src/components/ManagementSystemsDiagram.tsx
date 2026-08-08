import React from 'react';
import { motion } from 'framer-motion';

export const ManagementSystemsDiagram: React.FC = () => {
  const systems = [
    {
      name: 'SCM',
      ja: 'モノの流れ',
      en: 'Supply Chain Management',
      icon: 'local_shipping',
      color: 'bg-blue-50 border-blue-300',
      iconColor: 'text-blue-500',
      desc: '材料の仕入れから在庫・配送まで、モノの流れ全体を管理',
      example: 'フルーツの仕入れ量を自動で調整',
      key: 'モノ・在庫・配送',
      keyColor: 'text-blue-600'
    },
    {
      name: 'CRM',
      ja: 'お客様の管理',
      en: 'Customer Relationship Management',
      icon: 'support_agent',
      color: 'bg-emerald-50 border-emerald-300',
      iconColor: 'text-emerald-500',
      desc: 'お客様の情報を管理し、関係を深める',
      example: '誕生日にクーポンを送る',
      key: 'お客様・関係',
      keyColor: 'text-emerald-600'
    },
    {
      name: 'ERP',
      ja: '会社全体の一元管理',
      en: 'Enterprise Resource Planning',
      icon: 'dashboard_customize',
      color: 'bg-amber-50 border-amber-300',
      iconColor: 'text-amber-500',
      desc: '会計・人事・売上などを、1つのシステムでまとめて管理',
      example: '全店舗の会計と在庫を1画面で管理',
      key: '全部まとめて',
      keyColor: 'text-amber-600'
    },
    {
      name: 'BI',
      ja: 'データ分析',
      en: 'Business Intelligence',
      icon: 'insights',
      color: 'bg-purple-50 border-purple-300',
      iconColor: 'text-purple-500',
      desc: 'データを分析して、経営の判断に役立てる',
      example: '「どの味が一番売れているか」を調べる',
      key: '分析・判断',
      keyColor: 'text-purple-600'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-emerald-50 via-white to-lime-50 p-6 rounded-2xl border border-emerald-200 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">お店の裏方を支える4つのシステム</h3>
        <p className="text-xs text-[#43474f] mt-1">お客様からは見えないけれど、お店が回るために欠かせない</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {systems.map((s, idx) => (
          <motion.div
            key={s.name}
            className={`rounded-xl border-2 p-4 flex flex-col gap-1 ${s.color}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <span className={`material-symbols-outlined text-xl ${s.iconColor}`}>{s.icon}</span>
              <span className="font-black text-sm text-slate-800">{s.name}</span>
              <span className="text-[9px] text-slate-400 font-medium">{s.ja}</span>
            </div>
            <span className="text-[9px] text-slate-400 font-medium">{s.en}</span>
            <p className="text-[11px] text-slate-600 mt-1.5">{s.desc}</p>
            <p className="text-[10px] text-slate-500 mt-1.5 pt-1.5 border-t border-slate-200/70">
              例：{s.example}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-xs text-center text-[#43474f] mt-5 bg-white/70 px-4 py-2 rounded-lg border border-slate-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        1行で覚える：<span className="font-bold text-blue-600">SCM＝モノ</span>・<span className="font-bold text-emerald-600">CRM＝お客様</span>・<span className="font-bold text-amber-600">ERP＝全部まとめ</span>・<span className="font-bold text-purple-600">BI＝分析</span>
      </motion.p>
    </div>
  );
};
