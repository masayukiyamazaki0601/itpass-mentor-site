import React from 'react';
import {
  Eye,
  Brain,
  Hand,
  CheckCircle2,
  Tag,
  Timer
} from 'lucide-react';

export const InfoDesignDiagram: React.FC = () => {
  const views = [
    {
      name: '見やすさ (Readability)',
      icon: Eye,
      desc: '文字の大きさ、フォントの種類、配色、コントラストなどを工夫し、視覚的に捉えやすくする視点です。',
      example: 'メニュー表の重要部分を太字にして目立たせる',
      color: 'text-blue-400 bg-blue-950/15 border-blue-900/60'
    },
    {
      name: '分かりやすさ (Clarity)',
      icon: Brain,
      desc: '情報を整理整頓し、グループ分けやレイアウト配置を工夫して、どこに何があるか直感的に理解しやすくする視点です。',
      example: 'ドリンクやスイーツのメニューをカテゴリごとに整理する',
      color: 'text-emerald-400 bg-emerald-950/15 border-emerald-900/60'
    },
    {
      name: '使いやすさ (Usability)',
      icon: Hand,
      desc: '操作ボタンの配置や画面遷移を工夫し、ストレスなく誰でもスムーズに操作を完了できる設計を目指す視点です。',
      example: '直感的に注文ができるタッチパネルの画面配置にする',
      color: 'text-amber-400 bg-amber-950/15 border-amber-900/60'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-900/60 uppercase">
          Information Design
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
          情報デザインの3つの視点
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          情報をわかりやすく整理し、ユーザーが快適に使えるようにする「見やすさ・分かりやすさ・使いやすさ」の定義です。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {views.map((v, idx) => {
          const Icon = v.icon;
          return (
            <div 
              key={idx} 
              className={`p-4 rounded-xl border ${v.color} flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-black text-slate-100">{v.name}</h4>
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-[11px] text-slate-350 leading-relaxed font-semibold">
                  {v.desc}
                </p>
              </div>

              <div className="bg-slate-950/70 p-2.5 rounded border border-slate-850 text-[10px]">
                <div className="flex items-center gap-1.5 text-[9px] text-cyan-400 font-semibold">
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  <span>例：{v.example}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3">
          <Tag className="w-4 h-4 text-sky-400 flex-shrink-0" />
          <p className="text-xs text-slate-300">
            ソフトウェアの権利：<span className="font-bold text-sky-300">著作権</span>＝創作物を作った時点で発生し保護される。
          </p>
        </div>
        <div className="flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3">
          <Timer className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <p className="text-xs text-slate-300">
            ソフトウェアの権利：<span className="font-bold text-emerald-300">特許権</span>＝アイディア・新技術を発明した際に、国へ申請して得られる独占権。
          </p>
        </div>
      </div>
    </div>
  );
};
