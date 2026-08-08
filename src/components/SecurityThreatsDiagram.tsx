import React from 'react';
import { motion } from 'framer-motion';

export const SecurityThreatsDiagram: React.FC = () => {
  const threats = [
    {
      name: 'マルウェア（ウイルス）',
      en: 'Malware',
      icon: 'bug_report',
      type: '壊す',
      desc: 'コンピュータに悪影響を与える悪意のあるプログラムの総称',
      example: 'レジのパソコンを壊すプログラム',
      color: 'from-blue-600 to-blue-600',
      soft: 'bg-blue-50 border-blue-300',
      badge: 'bg-blue-100 text-blue-600',
      delay: 0
    },
    {
      name: 'フィッシング',
      en: 'Phishing',
      icon: 'fishing',
      type: '盗む',
      desc: '本物そっくりの偽サイトやメールで情報をだまし取る手口',
      example: '偽サイトで情報をだまし取る',
      color: 'from-emerald-600 to-teal-600',
      soft: 'bg-emerald-50 border-emerald-300',
      badge: 'bg-emerald-100 text-emerald-600',
      delay: 0.1
    },
    {
      name: 'ランサムウェア',
      en: 'Ransomware',
      icon: 'enhanced_encryption',
      type: '壊す',
      desc: 'データを勝手に暗号化し、「身代金を払え」と脅すウイルス',
      example: '売上データを暗号化して脅す',
      color: 'from-amber-500 to-orange-600',
      soft: 'bg-amber-50 border-amber-300',
      badge: 'bg-amber-100 text-amber-600',
      delay: 0.2
    },
    {
      name: '不正アクセス',
      en: 'Unauthorized Access',
      icon: 'no_encryption',
      type: '盗む',
      desc: '他人のIDやパスワードを使って、許可なくシステムに侵入する',
      example: '他人のIDでレジに侵入',
      color: 'from-rose-500 to-pink-600',
      soft: 'bg-rose-50 border-rose-300',
      badge: 'bg-rose-100 text-rose-600',
      delay: 0.3
    },
    {
      name: 'DoS攻撃',
      en: 'Denial of Service',
      icon: 'block',
      type: '止める',
      desc: '大量のデータを送りつけてサーバをダウンさせ、サービスを止める',
      example: '大量アクセスでWebサイトを止める',
      color: 'from-cyan-600 to-sky-600',
      soft: 'bg-cyan-50 border-cyan-300',
      badge: 'bg-cyan-100 text-cyan-600',
      delay: 0.4
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-rose-50/40 p-6 rounded-2xl border border-slate-200 shadow-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 text-white flex items-center justify-center shadow-md shadow-rose-200">
          <span className="material-symbols-outlined text-xl">warning</span>
        </div>
        <div>
          <h3 className="text-base font-black text-[#111c2c]">代表的な脅威</h3>
          <p className="text-[11px] text-[#43474f]">情報を「盗む・壊す・止める」3つのパターン</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {threats.map((t) => (
          <motion.div
            key={t.name}
            className={`rounded-xl border-2 p-4 flex flex-col gap-1.5 shadow-sm hover:shadow-md transition-shadow ${t.soft}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: t.delay, duration: 0.4 }}
          >
            <div className="flex items-center gap-2.5">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} text-white flex items-center justify-center shadow-sm flex-shrink-0`}>
                <span className="material-symbols-outlined text-lg">{t.icon}</span>
              </div>
              <div className="min-w-0">
                <span className="font-black text-[13px] text-slate-800 leading-tight block">{t.name}</span>
                <span className="text-[9px] text-slate-400 font-medium block">{t.en}</span>
              </div>
            </div>
            <span className={`inline-block self-start mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${t.badge}`}>
              {t.type}
            </span>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{t.desc}</p>
            <p className="text-[10px] text-slate-500 mt-auto pt-2 border-t border-slate-200/70">
              例：{t.example}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-5 rounded-xl bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-100 px-4 py-3 flex items-center gap-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="material-symbols-outlined text-rose-500 text-lg">tips_and_updates</span>
        <p className="text-xs text-[#43474f]">
          まとめ：<span className="font-bold text-blue-600">盗む＝フィッシング・不正アクセス</span>／<span className="font-bold text-emerald-600">壊す＝マルウェア・ランサム</span>／<span className="font-bold text-cyan-600">止める＝DoS</span>
        </p>
      </motion.div>
    </div>
  );
};
