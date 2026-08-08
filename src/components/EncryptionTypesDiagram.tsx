import React from 'react';
import { motion } from 'framer-motion';

export const EncryptionTypesDiagram: React.FC = () => {
  const methods = [
    {
      name: '共通鍵暗号方式',
      en: 'Symmetric Encryption',
      icon: 'key',
      point: '暗号化も復号も「同じ鍵」',
      desc: '送る側と受け取る側が同じ鍵を共有して使う。処理が速い。',
      feature: '速い',
      featureColor: 'text-emerald-600',
      issue: '課題：鍵をどう安全に渡すか',
      example: '同じ鍵を2つ用意して持つ',
      color: 'from-sky-500 to-blue-600',
      soft: 'bg-sky-50 border-sky-300',
      badge: 'bg-sky-100 text-sky-700',
      keyIcon: 'vpn_key',
      delay: 0
    },
    {
      name: '公開鍵暗号方式',
      en: 'Public Key Encryption',
      icon: 'lock_open',
      point: '「公開鍵」と「秘密鍵」の2つ',
      desc: '公開鍵で暗号化したものは、対応する秘密鍵でしか復号できない。',
      feature: '鍵の受け渡し問題を解決',
      featureColor: 'text-blue-600',
      issue: '課題：処理が遅い',
      example: '公開鍵で鍵をかけ、秘密鍵で開ける',
      color: 'from-amber-500 to-orange-600',
      soft: 'bg-amber-50 border-amber-300',
      badge: 'bg-amber-100 text-amber-700',
      keyIcon: 'key_off',
      delay: 0.2
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-sky-50/40 p-6 rounded-2xl border border-slate-200 shadow-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-sky-200">
          <span className="material-symbols-outlined text-xl">lock</span>
        </div>
        <div>
          <h3 className="text-base font-black text-[#111c2c]">2つの暗号方式</h3>
          <p className="text-[11px] text-[#43474f]">共通鍵（1つの鍵）と公開鍵（2つの鍵）</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {methods.map((m) => (
          <motion.div
            key={m.name}
            className={`rounded-xl border-2 p-5 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow ${m.soft}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: m.delay, duration: 0.4 }}
          >
            <div className="flex items-center gap-2.5">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} text-white flex items-center justify-center shadow-sm`}>
                <span className="material-symbols-outlined text-lg">{m.icon}</span>
              </div>
              <div>
                <div className="font-black text-sm text-slate-800">{m.name}</div>
                <div className="text-[9px] text-slate-400 font-medium">{m.en}</div>
              </div>
            </div>

            {/* 鍵の表示 */}
            <div className="flex items-center gap-2 mt-3 bg-white/70 rounded-xl px-3 py-2.5 border border-slate-200/60">
              <span className={`material-symbols-outlined text-xl ${m.keyIcon === 'vpn_key' ? 'text-sky-500' : 'text-amber-500'}`}>
                {m.keyIcon}
              </span>
              <span className="text-[11px] font-bold text-slate-700">{m.point}</span>
            </div>

            <span className={`inline-block self-start mt-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full ${m.badge}`}>
              {m.feature}
            </span>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{m.desc}</p>
            <p className="text-[10px] font-bold text-rose-600 mt-1">{m.issue}</p>
            <p className="text-[9px] text-slate-500 mt-auto pt-1.5 border-t border-slate-200/70">
              例：{m.example}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-5 rounded-xl bg-gradient-to-r from-sky-50 to-amber-50 border border-sky-100 px-4 py-3 flex items-center gap-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="material-symbols-outlined text-sky-500 text-lg">tips_and_updates</span>
        <p className="text-xs text-[#43474f]">
          覚え方：<span className="font-bold text-sky-700">共通鍵＝同じ鍵（速い）</span>／<span className="font-bold text-amber-700">公開鍵＝2つの鍵（受け渡しOK）</span>
        </p>
      </motion.div>
    </div>
  );
};
