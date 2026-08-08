import React from 'react';
import { motion } from 'framer-motion';

export const ProtocolDiagram: React.FC = () => {
  const protocols = [
    {
      name: 'TCP/IP',
      icon: 'swap_vert',
      role: 'データを分割して届ける',
      desc: 'TCPが「データを分割して確実に届ける」、IPが「宛先を指定する」。インターネットの標準ルール。',
      example: '注文データを分割して届ける',
      color: 'from-sky-500 to-blue-600',
      soft: 'bg-sky-50 border-sky-300',
      badge: 'bg-sky-100 text-sky-700',
      delay: 0
    },
    {
      name: 'HTTP・HTTPS',
      icon: 'language',
      role: 'Webページを表示する',
      desc: 'Webページを表示するためのルール。HTTPSは暗号化されていて安全。',
      example: 'Webサイトを見る',
      color: 'from-emerald-500 to-teal-600',
      soft: 'bg-emerald-50 border-emerald-300',
      badge: 'bg-emerald-100 text-emerald-700',
      delay: 0.1
    },
    {
      name: 'IPアドレス',
      icon: 'pin',
      role: 'コンピュータの住所',
      desc: 'コンピュータに割り当てられた「住所」。この住所宛にデータを届ける。',
      example: '本社のコンピュータの住所',
      color: 'from-amber-500 to-orange-600',
      soft: 'bg-amber-50 border-amber-300',
      badge: 'bg-amber-100 text-amber-700',
      delay: 0.2
    },
    {
      name: 'ドメイン名',
      icon: 'public',
      role: '人間用の名前',
      desc: 'IPアドレスを人間が覚えやすいようにした名前。DNSがIPアドレスに変換する。',
      example: 'example.com（店名）',
      color: 'from-rose-500 to-pink-600',
      soft: 'bg-rose-50 border-rose-300',
      badge: 'bg-rose-100 text-rose-700',
      delay: 0.3
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-sky-50/40 p-6 rounded-2xl border border-slate-200 shadow-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-sky-200">
          <span className="material-symbols-outlined text-xl">swap_vert</span>
        </div>
        <div>
          <h3 className="text-base font-black text-[#111c2c]">代表的なプロトコル</h3>
          <p className="text-[11px] text-[#43474f]">「分割・表示・住所・名前」で覚える</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {protocols.map((p) => (
          <motion.div
            key={p.name}
            className={`rounded-xl border-2 p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow ${p.soft}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: p.delay, duration: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center shadow-sm`}>
                <span className="material-symbols-outlined text-lg">{p.icon}</span>
              </div>
              <span className="font-black text-sm text-slate-800">{p.name}</span>
            </div>
            <span className={`inline-block self-start mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${p.badge}`}>
              {p.role}
            </span>
            <p className="text-[10px] text-slate-600 mt-1 leading-relaxed">{p.desc}</p>
            <p className="text-[9px] text-slate-500 mt-auto pt-1.5 border-t border-slate-200/70">
              例：{p.example}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-5 rounded-xl bg-gradient-to-r from-sky-50 to-emerald-50 border border-sky-100 px-4 py-3 flex items-center gap-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="material-symbols-outlined text-sky-500 text-lg">tips_and_updates</span>
        <p className="text-xs text-[#43474f]">
          <span className="font-bold text-sky-700">TCP/IP＝分割</span>・<span className="font-bold text-emerald-700">HTTP＝表示</span>・<span className="font-bold text-amber-700">IPアドレス＝住所</span>・<span className="font-bold text-rose-700">ドメイン＝名前</span>
        </p>
      </motion.div>
    </div>
  );
};
