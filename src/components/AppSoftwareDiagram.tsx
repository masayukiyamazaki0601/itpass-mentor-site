import React from 'react';
import {
  FileText,
  Table2,
  Presentation,
  Globe,
  CheckCircle2,
  Layers
} from 'lucide-react';

export const AppSoftwareDiagram: React.FC = () => {
  const apps = [
    {
      name: 'ワープロソフト',
      app: 'Word / Googleドキュメント',
      icon: FileText,
      do: '文章の作成・レイアウト編集',
      desc: 'テキスト文章の作成やレイアウト調整を行います。報告書や契約書の作成などに使われます。',
      example: 'カフェ新メニューの文章と利用規約を作る',
      color: 'text-blue-400 bg-blue-950/15 border-blue-900/60'
    },
    {
      name: '表計算ソフト',
      app: 'Excel / Googleスプレッドシート',
      icon: Table2,
      do: '表・計算・集計・グラフ化',
      desc: '数値データの計算や集計、グラフ作成を行います。売上管理や顧客一覧の作成に必須です。',
      example: '毎日の売上集計と利益率をグラフ化する',
      color: 'text-emerald-400 bg-emerald-950/15 border-emerald-900/60'
    },
    {
      name: 'プレゼンソフト',
      app: 'PowerPoint / Keynote',
      icon: Presentation,
      do: 'スライドの作成・発表資料化',
      desc: '会議や講義用のスライドを作成します。図解やアニメーションを用いてわかりやすく伝えます。',
      example: '新規出店計画や新メニュー発表のスライドを作る',
      color: 'text-amber-400 bg-amber-950/15 border-amber-900/60'
    },
    {
      name: 'Webブラウザ',
      app: 'Chrome / Safari / Edge',
      icon: Globe,
      do: 'Webサイトの閲覧・表示',
      desc: 'インターネット上のWebサイトを表示します。Webベースのシステム利用や情報収集に必要です。',
      example: '競合店のリサーチやオンライン発注ページを開く',
      color: 'text-rose-400 bg-rose-950/15 border-rose-900/60'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-900/60 uppercase">
          App Architecture
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
          アプリケーションソフトウェアの分類
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          OSの上で動作し、ユーザーが「特定の目的を果たすために使う」各種ソフトウェアの機能と用途です。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {apps.map((a, idx) => {
          const Icon = a.icon;
          return (
            <div 
              key={idx} 
              className={`p-4 rounded-xl border ${a.color} flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-black text-slate-100">{a.name}</h4>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[9px] text-slate-500 font-bold block">{a.app}</span>
                <p className="text-[11px] text-slate-350 leading-relaxed font-semibold">
                  {a.desc}
                </p>
              </div>

              <div className="bg-slate-950/70 p-2.5 rounded border border-slate-850 space-y-1.5 text-[10px]">
                <span className="text-[8px] text-slate-500 font-bold block">役割 ＆ 業務での例</span>
                <div className="text-slate-355 font-bold text-slate-300">{a.do}</div>
                <div className="flex items-center gap-1 text-[9px] text-cyan-400 font-semibold border-t border-slate-900 pt-1.5">
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  <span>例：{a.example}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3">
        <Layers className="w-4 h-4 text-sky-400 flex-shrink-0" />
        <p className="text-xs text-slate-300">
          覚え方の基本：<span className="font-bold text-sky-300">文章作成＝Word</span>・<span className="font-bold text-emerald-300">表計算・グラフ＝Excel</span>・<span className="font-bold text-amber-300">発表資料＝PowerPoint</span>。これらは全て、OSという管理人（基本ソフト）の上で動く店員（アプリ）にあたります。
        </p>
      </div>
    </div>
  );
};
