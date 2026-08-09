import React from 'react';
import {
  ShieldAlert,
  CircleX,
  TrendingDown,
  Send,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';

export const RiskManagementDiagram: React.FC = () => {
  const responses = [
    {
      name: '回避 (Avoidance)',
      role: 'リスクそのものを「なくす」',
      desc: 'リスクの原因となる行為やシステム利用そのものを止め、危険性をゼロにする対応です。',
      example: '情報漏洩リスクのある「会員のクレジットカード情報」を店内で一切持たない運用にする。',
      color: 'text-rose-400 bg-rose-950/15 border-rose-900/60',
      icon: CircleX
    },
    {
      name: '軽減 (Mitigation)',
      role: '影響や確率を「小さくする」',
      desc: 'リスクが発生したときの損失を小さく抑えるか、発生確率を下げるための対策を行います。',
      example: 'ウイルス対策ソフトを導入し、売上データの定期バックアップを毎日取得する。',
      color: 'text-blue-400 bg-blue-950/15 border-blue-900/60',
      icon: TrendingDown
    },
    {
      name: '移転 (Transfer)',
      role: 'リスクを他者へ「分け・移す」',
      desc: '保険に加入したり、専門の業者へ業務をアウトソーシング（委託）することで損失を分担・転嫁します。',
      example: 'サイバー保険に加入する。または会員管理サーバーの運用を信頼できる外部企業に委託する。',
      color: 'text-amber-400 bg-amber-950/15 border-amber-900/60',
      icon: Send
    },
    {
      name: '受容 (Acceptance)',
      role: 'リスクを「そのまま受け入れる」',
      desc: '発生確率が極めて低く、または被害が小さいため、対策コストをかけずにそのリスクを許容します。',
      example: '店舗掲示用の紙メニューが汚れるリスクは、再印刷が安価なため特別な対策をとらない。',
      color: 'text-emerald-400 bg-emerald-950/15 border-emerald-900/60',
      icon: CheckCircle2
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-900/60 uppercase">
          Risk Management
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
          リスクへの4つの対応アプローチ
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          リスクが特定・評価された後、費用対効果などを踏まえて選択する4つの対策方式です。
        </p>
      </div>

      {/* 4 elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {responses.map((r, idx) => {
          const Icon = r.icon;
          return (
            <div 
              key={idx} 
              className={`p-4 rounded-xl border ${r.color} flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-black text-slate-100">{r.name}</h4>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] text-slate-355 block font-bold">{r.role}</span>
                <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">
                  {r.desc}
                </p>
              </div>

              <div className="bg-slate-950/70 p-2.5 rounded border border-slate-850 text-[10px]">
                <p className="text-slate-300">
                  <span className="text-cyan-400 font-bold">例：</span>{r.example}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Process flow */}
      <div className="mt-8 pt-6 border-t border-slate-800/80">
        <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3">
          リスクマネジメントの4つのプロセス
        </h4>
        <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-bold">
          <div className="bg-slate-950 p-2 rounded border border-slate-850">
            ① 特定<br/><span className="text-[9px] text-slate-500">リスクを洗い出す</span>
          </div>
          <div className="bg-slate-950 p-2 rounded border border-slate-850">
            ② 評価<br/><span className="text-[9px] text-slate-500">影響と確率を分析</span>
          </div>
          <div className="bg-slate-950 p-2 rounded border border-slate-850">
            ③ 対策<br/><span className="text-[9px] text-slate-500">上の4つから選ぶ</span>
          </div>
          <div className="bg-slate-950 p-2 rounded border border-slate-850">
            ④ 見直し<br/><span className="text-[9px] text-slate-500">運用状況を再チェック</span>
          </div>
        </div>
      </div>

      {/* Summary tip */}
      <div className="mt-6 flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3 text-xs text-slate-300">
        <Lock className="w-4 h-4 text-sky-400 flex-shrink-0" />
        <p>
          試験対策：<span className="font-bold text-rose-300">「バックアップを取る」は軽減</span>、<span className="font-bold text-amber-300">「保険をかける」は移転</span>に分類されます。この2つが非常によく出題されます。
        </p>
      </div>
    </div>
  );
};
