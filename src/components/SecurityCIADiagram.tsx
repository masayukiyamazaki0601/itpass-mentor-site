import React from 'react';
import {
  Lock,
  CheckCircle2,
  CalendarRange,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export const SecurityCIADiagram: React.FC = () => {
  const elements = [
    {
      name: '機密性 (Confidentiality)',
      role: '許可された人だけが「見られる」',
      desc: 'アクセス権限のない第三者に情報が漏れないように管理する性質です。',
      example: 'レシピを鍵付きの金庫に厳重に保管する',
      color: 'text-blue-400 bg-blue-950/15 border-blue-900/60'
    },
    {
      name: '完全性 (Integrity)',
      role: '正しいデータで「書き換えられない」',
      desc: '情報が改ざんされたり、誤って書き換えられたりせず、正確な状態を維持する性質です。',
      example: 'レシピに勝手な追記や改変ができないように保護する',
      color: 'text-emerald-400 bg-emerald-950/15 border-emerald-900/60'
    },
    {
      name: '可用性 (Availability)',
      role: '必要な時に「いつでも使える」',
      desc: '地震やシステムダウンなどのトラブルを防ぎ、利用者が使いたい時にいつでもサービスにアクセスできる性質です。',
      example: '停電対策を施し、店員がいつでもレシピを閲覧・調理できるようにする',
      color: 'text-amber-400 bg-amber-950/15 border-amber-900/60'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Security Essentials
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          情報セキュリティの3大要素 (C.I.A.)
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          情報を安全に保つための基本理念です。この3要素が揃ってはじめて強固なセキュリティが成り立ちます。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {elements.map((e, idx) => {
          return (
            <div 
              key={idx} 
              className={`p-5 rounded-2xl border ${e.color} flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-black text-slate-100">{e.name}</h4>
                  <span className="text-[8px] bg-slate-950 text-slate-500 font-bold px-1.5 py-0.2 rounded border border-slate-900">
                    C.I.A. 0{idx + 1}
                  </span>
                </div>
                <span className="text-[10px] text-slate-350 block font-bold">{e.role}</span>
                <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                  {e.desc}
                </p>
              </div>

              <div className="bg-slate-950/70 p-2.5 rounded border border-slate-850 text-[10px]">
                <div className="flex items-center gap-1.5 text-[9px] text-cyan-400 font-semibold">
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  <span>例：{e.example}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="mt-6 flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3">
        <ShieldAlert className="w-4 h-4 text-indigo-400 flex-shrink-0" />
        <p className="text-xs text-slate-300">
          覚え方のコツ：<span className="font-bold text-blue-300">機密性＝見られない（漏洩防止）</span>・<span className="font-bold text-emerald-300">完全性＝書き換えられない（改ざん防止）</span>・<span className="font-bold text-amber-300">可用性＝いつでも使える（システム稼働）</span>。
        </p>
      </div>
    </div>
  );
};
