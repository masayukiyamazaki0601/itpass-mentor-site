import React from 'react';
import {
  Bug,
  Globe,
  Skull,
  UserX,
  ZapOff,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

export const SecurityThreatsDiagram: React.FC = () => {
  const threats = [
    {
      name: 'マルウェア (ウイルス)',
      type: '壊す ➔ 完全性/可用性の侵害',
      desc: 'コンピュータに不具合を起こしたり、データを破壊したりする目的で作られた「悪意のあるプログラム」の総称です。',
      example: 'レジのパソコンを正常に動かなくする感染ソフト',
      color: 'text-blue-400 bg-blue-950/15 border-blue-900/60',
      icon: Bug
    },
    {
      name: 'フィッシング',
      type: '盗む ➔ 機密性の侵害',
      desc: '送信者を偽った本物そっくりのメールや偽のWebサイトを用いて、ID、パスワード、クレジットカード情報をだまし取ります。',
      example: '銀行やECサイトの偽ページでログイン情報を盗まれる',
      color: 'text-emerald-400 bg-emerald-950/15 border-emerald-900/60',
      icon: Globe
    },
    {
      name: 'ランサムウェア',
      type: '壊す・脅す ➔ 可用性/機密性の侵害',
      desc: '感染したコンピュータのデータを勝手に暗号化し、元に戻すための引き換え金（身代金）を要求する凶悪なウイルスです。',
      example: 'カフェの売上データを暗号化され、金銭を要求される',
      color: 'text-amber-400 bg-amber-950/15 border-amber-900/60',
      icon: Skull
    },
    {
      name: '不正アクセス',
      type: '盗む・覗く ➔ 機密性の侵害',
      desc: '他人のIDやパスワードを推測したり、システムのバグ（脆弱性）を突いて、本来権限のないシステムへ侵入する行為です。',
      example: '他人の管理IDでログインされ、売上設定を変更される',
      color: 'text-rose-400 bg-rose-950/15 border-rose-900/60',
      icon: UserX
    },
    {
      name: 'DoS攻撃',
      type: '止める ➔ 可用性の侵害',
      desc: 'ターゲットのサーバやWebサイトに、大量のデータを一斉に送りつけて過負荷をかけ、サービスを停止状態（ダウン）に追い込みます。',
      example: '大量の偽アクセスにより、公式サイトが閲覧不可になる',
      color: 'text-cyan-400 bg-cyan-950/15 border-cyan-900/60',
      icon: ZapOff
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-rose-400 bg-rose-950/80 px-3 py-1 rounded-full border border-rose-900/60 uppercase">
          Security Threats
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-rose-400 via-red-400 to-amber-400 bg-clip-text text-transparent">
          情報セキュリティの5大脅威
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          情報を「盗む・壊す・止める」という3つの悪質な攻撃パターンとそれぞれの代表例です。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {threats.map((t, idx) => {
          const Icon = t.icon;
          return (
            <div 
              key={idx} 
              className={`p-4 rounded-xl border ${t.color} flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Icon className="w-5 h-5" />
                  <span className="text-[8px] bg-slate-950 text-slate-500 font-bold px-1.5 py-0.2 rounded border border-slate-900">
                    THREAT 0{idx + 1}
                  </span>
                </div>
                <h4 className="text-xs font-black text-slate-100">{t.name}</h4>
                <span className="text-[9px] text-slate-355 block font-bold">{t.type}</span>
                <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">
                  {t.desc}
                </p>
              </div>

              <div className="bg-slate-950/70 p-2.5 rounded border border-slate-850 text-[10px]">
                <p className="text-slate-300">
                  例：{t.example}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary tip */}
      <div className="mt-6 flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3 text-xs text-slate-300">
        <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0" />
        <p>
          試験対策の覚え方：<span className="font-bold text-rose-300">盗む＝フィッシング・不正アクセス</span> ／ <span className="font-bold text-blue-300">壊す＝マルウェア（ランサム含む）</span> ／ <span className="font-bold text-cyan-300">止める＝DoS攻撃</span> です。
        </p>
      </div>
    </div>
  );
};
