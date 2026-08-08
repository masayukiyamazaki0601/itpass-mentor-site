import React from 'react';
import { motion } from 'framer-motion';

export const FinancialMetricsDiagram: React.FC = () => {
  const metrics = [
    {
      name: 'ROE',
      en: 'Return on Equity',
      ja: '株主の目線',
      icon: 'percent',
      color: 'bg-blue-50 border-blue-300',
      iconColor: 'text-blue-500',
      formula: 'ROE ＝ 利益 ÷ 株主のお金（自己資本）',
      desc: '「株主が預けたお金で、どれだけ儲けたか」',
      example: '預けた100万円で15万円儲けたら ROE は15%',
      key: '何で割る？＝自己資本',
      keyColor: 'text-blue-600'
    },
    {
      name: 'ROA',
      en: 'Return on Assets',
      ja: '資産全体の目線',
      icon: 'pie_chart',
      color: 'bg-emerald-50 border-emerald-300',
      iconColor: 'text-emerald-500',
      formula: 'ROA ＝ 利益 ÷ 資産全体',
      desc: '「お店の資産全体を、どれだけ効率よく使って儲けたか」',
      example: '設備・お金すべてを「資産」として見る',
      key: '何で割る？＝資産全体',
      keyColor: 'text-emerald-600'
    },
    {
      name: '売上高利益率',
      en: 'Profit Margin',
      ja: '売上の目線',
      icon: 'trending_up',
      color: 'bg-amber-50 border-amber-300',
      iconColor: 'text-amber-500',
      formula: '売上高利益率 ＝ 利益 ÷ 売上',
      desc: '「売れた金額のうち、どれだけが利益として残ったか」',
      example: '100円売って、15円残ったら15%',
      key: '何で割る？＝売上',
      keyColor: 'text-amber-600'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-indigo-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">会社の「儲かり具合」を見る3つの指標</h3>
        <p className="text-xs text-[#43474f] mt-1">違いは「何で割るか」だけ！</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((m, idx) => (
          <motion.div
            key={m.name}
            className={`rounded-xl border-2 p-4 flex flex-col gap-1 ${m.color}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <span className={`material-symbols-outlined text-xl ${m.iconColor}`}>{m.icon}</span>
              <span className="font-black text-sm text-slate-800">{m.name}</span>
            </div>
            <span className="text-[9px] text-slate-400 font-medium">{m.en} ／ {m.ja}</span>
            <p className="text-[11px] font-bold text-slate-700 mt-1.5 bg-white/70 rounded-lg px-2 py-1.5">
              {m.formula}
            </p>
            <p className="text-[11px] text-slate-600 mt-1.5">{m.desc}</p>
            <p className="text-[10px] text-slate-500 mt-1.5 pt-1.5 border-t border-slate-200/70">
              例：{m.example}
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
        覚え方：<span className="font-bold text-blue-600">ROE＝自己資本</span>・<span className="font-bold text-emerald-600">ROA＝資産全体</span>・<span className="font-bold text-amber-600">利益率＝売上</span> で割る
      </motion.p>
    </div>
  );
};
