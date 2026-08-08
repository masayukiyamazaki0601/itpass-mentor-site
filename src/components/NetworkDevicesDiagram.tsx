import React from 'react';
import { motion } from 'framer-motion';

export const NetworkDevicesDiagram: React.FC = () => {
  const devices = [
    {
      name: 'ルータ',
      en: 'Router',
      icon: 'router',
      role: '外と中をつなぐ玄関番',
      desc: 'LANと外のネットワーク（WAN）を接続し、データを届け先まで送り届ける',
      example: '店とインターネットをつなぐ',
      color: 'from-blue-600 to-indigo-600',
      soft: 'bg-blue-50 border-blue-300',
      badge: 'bg-blue-100 text-blue-600',
      delay: 0
    },
    {
      name: 'ハブ',
      en: 'Hub',
      icon: 'hub',
      role: '放送するラジオ',
      desc: '複数のコンピュータをまとめてつなぎ、データを全員に流す',
      example: '店内のパソコンをまとめてつなぐ',
      color: 'from-emerald-600 to-teal-600',
      soft: 'bg-emerald-50 border-emerald-300',
      badge: 'bg-emerald-100 text-emerald-600',
      delay: 0.1
    },
    {
      name: 'スイッチ',
      en: 'Switch',
      icon: 'swap_calls',
      role: '宛先を選ぶ郵便屋さん',
      desc: '届いたデータを、宛先のコンピュータだけに送る（賢いハブ）',
      example: '宛先だけにデータを届ける',
      color: 'from-amber-500 to-orange-600',
      soft: 'bg-amber-50 border-amber-300',
      badge: 'bg-amber-100 text-amber-600',
      delay: 0.2
    },
    {
      name: 'モデム',
      en: 'Modem',
      icon: 'cable',
      role: '言葉の通訳',
      desc: 'デジタル信号とアナログ信号を変換して、回線でデータを送受信する',
      example: '回線の信号を変換する',
      color: 'from-rose-500 to-pink-600',
      soft: 'bg-rose-50 border-rose-300',
      badge: 'bg-rose-100 text-rose-600',
      delay: 0.3
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-blue-50/40 p-6 rounded-2xl border border-slate-200 shadow-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-200">
          <span className="material-symbols-outlined text-xl">router</span>
        </div>
        <div>
          <h3 className="text-base font-black text-[#111c2c]">ネットワークを支える4つの機器</h3>
          <p className="text-[11px] text-[#43474f]">玄関番・放送・配達・通訳で覚える</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {devices.map((d) => (
          <motion.div
            key={d.name}
            className={`rounded-xl border-2 p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow ${d.soft}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: d.delay, duration: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${d.color} text-white flex items-center justify-center shadow-sm`}>
                <span className="material-symbols-outlined text-lg">{d.icon}</span>
              </div>
              <div>
                <div className="font-black text-sm text-slate-800">{d.name}</div>
                <div className="text-[9px] text-slate-400 font-medium">{d.en}</div>
              </div>
            </div>
            <span className={`inline-block self-start mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${d.badge}`}>
              {d.role}
            </span>
            <p className="text-[10px] text-slate-600 mt-1 leading-relaxed">{d.desc}</p>
            <p className="text-[9px] text-slate-500 mt-auto pt-1.5 border-t border-slate-200/70">
              例：{d.example}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-5 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 px-4 py-3 flex items-center gap-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="material-symbols-outlined text-blue-500 text-lg">tips_and_updates</span>
        <p className="text-xs text-[#43474f]">
          つながり順：<span className="font-bold text-rose-600">モデム</span> → <span className="font-bold text-blue-600">ルータ</span> → <span className="font-bold text-emerald-600">ハブ</span>・<span className="font-bold text-amber-600">スイッチ</span> → パソコン
        </p>
      </motion.div>
    </div>
  );
};
