import React from 'react';
import {
  ShieldAlert,
  Flame,
  Lock,
  KeyRound,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

export const ThreatCountermeasuresDiagram: React.FC = () => {
  const measures = [
    {
      name: 'セキュリティソフト',
      guard: 'ウイルス対策',
      icon: ShieldCheck,
      desc: 'ウイルスやマルウェアの侵入を検知・駆除します。定義ファイルを「常に最新」に更新することが必須です。',
      example: '不審な侵入者を退治する「警備員」',
      color: 'text-rose-400 bg-rose-950/15 border-rose-900/60'
    },
    {
      name: 'ファイアウォール',
      guard: '不正アクセス侵入対策',
      icon: Flame,
      desc: '外部ネットワークからの不審なアクセスを遮断し、許可された正しいデータだけを通す「防火壁」です。',
      example: '怪しい人の入店を防ぐ「入口の門番」',
      color: 'text-blue-400 bg-blue-950/15 border-blue-900/60'
    },
    {
      name: 'データの暗号化',
      guard: '情報盗難対策',
      icon: Lock,
      desc: '保存データや通信経路のデータを他人に読めない形にし、万が一盗まれても解読・漏洩を防ぎます。',
      example: '本文を隠し鍵で閉める「鍵付きの金庫」',
      color: 'text-amber-400 bg-amber-950/15 border-amber-900/60'
    },
    {
      name: 'アクセス制御 (認可制限)',
      guard: '不正利用対策',
      icon: KeyRound,
      desc: 'IDやパスワード、指紋認証等を用いて、特定の権限を持つ「許可された人だけ」が情報を扱えるように制御します。',
      example: '関係者以外立ち入り禁止の「鍵つき扉」',
      color: 'text-emerald-400 bg-emerald-950/15 border-emerald-900/60'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-900/60 uppercase">
          Security Countermeasures
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
          技術的セキュリティ対策の分類
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          脅威の侵入経路や目的（ウイルス、侵入、盗聴、なりすまし）に応じた技術的な防御手段です。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {measures.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div 
              key={idx} 
              className={`p-4 rounded-xl border ${m.color} flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-black text-slate-100">{m.name}</h4>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] text-slate-355 block font-bold">{m.guard}</span>
                <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">
                  {m.desc}
                </p>
              </div>

              <div className="bg-slate-950/70 p-2.5 rounded border border-slate-850 text-[10px]">
                <div className="flex items-center gap-1.5 text-[9px] text-cyan-400 font-semibold">
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  <span>例え：{m.example}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Security Tip */}
      <div className="mt-6 flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3 text-xs text-slate-300">
        <ShieldAlert className="w-4 h-4 text-indigo-400 flex-shrink-0" />
        <p>
          セキュリティの基本：システムやルールを複数組み合わせて守ることを<strong>「多層防御」</strong>と呼びます。単一の対策に依存せず、技術的・人的対策をバランスよく組み合わせることが極めて重要です。
        </p>
      </div>
    </div>
  );
};
