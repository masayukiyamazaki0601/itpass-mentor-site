import React from 'react';
import {
  MonitorSmartphone,
  Folder,
  MemoryStick,
  Printer,
  MousePointerClick,
  Lock,
  CheckCircle2
} from 'lucide-react';

export const OSInteractiveDiagram: React.FC = () => {
  const jobs = [
    {
      title: 'アプリの起動・管理',
      icon: MonitorSmartphone,
      desc: 'アプリ（応用ソフト）を起動したり、複数のアプリを同時に競合させずに動かしたりする。',
      example: '売上管理と在庫管理のアプリを同時に起動する',
      tip: '「マルチタスクの並行処理」を調整',
      color: 'text-blue-400 bg-blue-950/15 border-blue-900/60'
    },
    {
      title: 'ファイルの管理',
      icon: Folder,
      desc: '写真や動画などのデータを、フォルダに整理して保存・検索できるようにする。',
      example: 'レシピや注文書をフォルダに分類して保管する',
      tip: '「階層（ツリー）構造」で情報を整理',
      color: 'text-emerald-400 bg-emerald-950/15 border-emerald-900/60'
    },
    {
      title: 'メモリの管理',
      icon: MemoryStick,
      desc: '限られた主記憶装置（メモリ）のスペースを、どのアプリにどれだけ使わせるかを調整する。',
      example: 'メモリが混み合ったら優先順位を決め順番に割り当てる',
      tip: '「メモリ空間」の割り当てと最適化',
      color: 'text-amber-400 bg-amber-950/15 border-amber-900/60'
    },
    {
      title: 'ハードウェアの管理',
      icon: Printer,
      desc: 'プリンタやキーボードなどの周辺機器（ハードウェア）を、アプリが共通で使えるように仲介する。',
      example: 'どのアプリからでも同じプリンタで印刷できるようにする',
      tip: '「デバイスドライバ」による橋渡し',
      color: 'text-rose-400 bg-rose-950/15 border-rose-900/60'
    },
    {
      title: 'ユーザーインタフェース',
      icon: MousePointerClick,
      desc: '人間がコンピュータを操作するための画面（ボタンやデスクトップなど）を提供する。',
      example: 'マウスでクリックできるアイコンやメニューを表示する',
      tip: '「GUI（グラフィカルUI）」の提供',
      color: 'text-cyan-400 bg-cyan-950/15 border-cyan-900/60'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-900/60 uppercase">
          OS Function Map
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          OS（基本ソフトウェア）の5つの仕事
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          OSはコンピュータ全体を「一元管理」する管理人です。主要な5つの制御役割を網羅します。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {jobs.map((j, idx) => {
          const Icon = j.icon;
          return (
            <div 
              key={idx} 
              className={`p-4 rounded-xl border ${j.color} flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Icon className="w-5 h-5" />
                  <span className="text-[8px] bg-slate-950 text-slate-500 font-bold px-1.5 py-0.2 rounded border border-slate-905">
                    JOB 0{idx + 1}
                  </span>
                </div>
                <h4 className="text-xs font-black text-slate-100">{j.title}</h4>
                <p className="text-[11px] text-slate-350 leading-relaxed font-semibold">
                  {j.desc}
                </p>
              </div>

              <div className="bg-slate-950/70 p-2.5 rounded border border-slate-850 space-y-1.5">
                <span className="text-[8px] text-slate-500 font-bold block">具体例と試験対策</span>
                <p className="text-[10px] text-slate-300 leading-snug">
                  <span className="text-cyan-400">例：</span>{j.example}
                </p>
                <div className="flex items-center gap-1.5 text-[9px] text-emerald-400 font-semibold border-t border-slate-900 pt-1.5">
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  <span>{j.tip}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3">
        <Lock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
        <p className="text-xs text-slate-300">
          覚え方のコツ：<span className="font-bold text-cyan-300">アプリ起動・ファイル・メモリ・ハード・画面（UI）</span>の5つをセットで押さえましょう。
        </p>
      </div>
    </div>
  );
};
