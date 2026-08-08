import React from 'react';
import { motion } from 'framer-motion';

export const Marketing4PDiagram: React.FC = () => {
  const items = [
    {
      name: 'Product',
      ja: '製品',
      en: 'どんな商品にするか',
      example: 'マンゴーの割合を増やした、こだわりの1杯',
      icon: 'local_cafe',
      color: 'bg-blue-50 border-blue-300',
      iconColor: 'text-blue-500',
      delay: 0
    },
    {
      name: 'Price',
      ja: '価格',
      en: 'いくらで売るか',
      example: '500円にする。学生は割引',
      icon: 'sell',
      color: 'bg-emerald-50 border-emerald-300',
      iconColor: 'text-emerald-500',
      delay: 0.1
    },
    {
      name: 'Place',
      ja: '流通',
      en: 'どこで売るか',
      example: '店頭＋配達アプリ、駅前の店舗',
      icon: 'storefront',
      color: 'bg-amber-50 border-amber-300',
      iconColor: 'text-amber-500',
      delay: 0.2
    },
    {
      name: 'Promotion',
      ja: '販促',
      en: 'どう知らせるか',
      example: 'SNSで投稿、新商品の看板を出す',
      icon: 'campaign',
      color: 'bg-blue-50 border-blue-300',
      iconColor: 'text-blue-500',
      delay: 0.3
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-rose-50 via-white to-pink-50 p-6 rounded-2xl border border-rose-200 shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[#111c2c]">4P（マーケティングミックス）</h3>
        <p className="text-xs text-[#43474f] mt-1">「どう売るか」を4つの項目で考える</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((it) => (
          <motion.div
            key={it.name}
            className={`rounded-xl border-2 p-4 flex items-start gap-3 ${it.color}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: it.delay, duration: 0.4 }}
          >
            <div className="flex flex-col items-center gap-1 flex-shrink-0">
              <span className={`material-symbols-outlined text-2xl ${it.iconColor}`}>{it.icon}</span>
              <span className="text-[10px] font-bold text-slate-700">{it.name}</span>
              <span className="text-[9px] text-slate-400">{it.ja}</span>
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-slate-700 mt-0.5">{it.en}</p>
              <p className="text-[10px] text-slate-500 mt-1.5 pt-1.5 border-t border-slate-200/70">
                例：{it.example}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-xs text-center text-[#43474f] mt-5 bg-white/70 px-4 py-2 rounded-lg border border-slate-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        覚え方：<span className="font-bold text-blue-600">Product</span>・<span className="font-bold text-emerald-600">Price</span>・<span className="font-bold text-amber-600">Place</span>・<span className="font-bold text-blue-600">Promotion</span> の頭文字「4P」
      </motion.p>
    </div>
  );
};
