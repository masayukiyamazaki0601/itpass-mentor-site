import React from 'react';
import { motion } from 'framer-motion';

export const InvestmentEvaluationDiagram: React.FC = () => {
  const metrics = [
    {
      name: 'ROI',
      en: 'Return on Investment',
      ja: '得した割合',
      icon: 'trending_up',
      color: 'bg-blue-50 border-blue-300',
      iconColor: 'text-blue-500',
      formula: 'ROI ＝ 利益 ÷ 投資額',
      example: '1,000万円の投資で200万円儲けたら ROI は20%',
      ask: '「どれだけ儲かった？」を見る',
      askColor: 'text-blue-600'
    },
    {
      name: '回収期間',
      en: 'Payback Period',
      ja: '元が取れる年数',
      icon: 'hourglass',
      color: 'bg-emerald-50 border-emerald-300',
      iconColor: 'text-emerald-500',
      formula: '回収期間 ＝ 投資額 ÷ 年間の利益',
      example: '1,000万円 ÷ 年200万円 ＝ 5年で元が取れる',
      ask: '「何年で元が取れる？」を見る',
      askColor: 'text-emerald-600'
    },
    {
      name: 'NPV',
      en: 'Net Present Value',
      ja: '今の価値に換算',
      icon: 'account_balance_wallet',
      color: 'bg-amber-50 border-amber-300',
      iconColor: 'text-amber-500',
      formula: '将来の利益を「今のお金の価値」に割り引く',
      example: '5年後の200万円は、今の価値では少し低く見積もる',
      ask: '「将来のお金」を今の価値で比べる',
      askColor: 'text-amber-600'
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] p-6 rounded-2xl border border-indigo-100 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">投資が「得」かを見る3つの指標</h3>
        <p className="text-xs text-[#43474f] mt-1">ラーメン屋の2号店に当てはめて考える</p>
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
            <p className={`text-[11px] font-bold ${m.askColor} mt-1.5`}>{m.ask}</p>
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
        引っかけ注意：<span className="font-bold text-blue-600">ROI＝利益÷投資額</span> と <span className="font-bold text-emerald-600">回収期間＝投資額÷利益</span> は「割る数」がちょうど逆！
      </motion.p>
    </div>
  );
};
