import React from 'react';
import {
  Database,
  Layers,
  HardDrive,
  CheckCircle2,
  MoveRight
} from 'lucide-react';

export const BackupInteractiveDiagram: React.FC = () => {
  const backups = [
    {
      name: '① フルバックアップ',
      scope: '「全部」まとめてコピー',
      desc: '基準日において、すべてのデータをまとめてコピーします。復元（リカバリ）は1回で済みますが、バックアップ時間と容量が最も多くかかります。',
      copyDays: '月曜〜金曜すべてのデータ',
      note: '※すべてのバックアップの基本となります。',
      color: 'text-blue-400 bg-blue-950/15 border-blue-900/60'
    },
    {
      name: '② 差分バックアップ',
      scope: '「前回のフル以降」の変更分',
      desc: '前回のフルバックアップ以降に新しく追加・変更されたデータのみを毎日コピーします。復元時は「フル ＋ 最新の差分」の計2つのデータで完了します。',
      copyDays: '前回のフル以降の累積データ',
      note: '※日が進むにつれてバックアップ時間が増えます。',
      color: 'text-amber-400 bg-amber-950/15 border-amber-900/60'
    },
    {
      name: '③ 増分バックアップ',
      scope: '「直前のバックアップ以降」の変更分',
      desc: '前日のバックアップ（フル・差分・増分問わず）以降に新しく変わったデータだけをコピーします。毎日のバックアップ時間は最小ですが、復元時は「フル ＋ 毎日の増分すべて」を順に重ねる必要があり複雑です。',
      copyDays: '前日からの変更分のみ',
      note: '※日々のバックアップ容量は最も少なくなります。',
      color: 'text-emerald-400 bg-emerald-950/15 border-emerald-900/60'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-900/60 uppercase">
          Backup Strategy
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
          バックアップの3種類と特徴比較
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          データの破損や紛失に備えてコピーを保存する際、処理時間や容量を最適化するための3つの代表的な方式です。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {backups.map((b, idx) => (
          <div 
            key={idx} 
            className={`p-5 rounded-2xl border ${b.color} flex flex-col justify-between space-y-4`}
          >
            <div className="space-y-2">
              <h4 className="text-xs font-black text-slate-100">{b.name}</h4>
              <span className="text-[10px] text-slate-400 block font-bold">{b.scope}</span>
              <p className="text-[11px] text-slate-350 leading-relaxed font-semibold">
                {b.desc}
              </p>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-850 space-y-1.5">
              <span className="text-[8px] text-slate-500 font-bold block">対象範囲と運用ノート</span>
              <p className="text-[10px] text-slate-300 font-semibold">{b.copyDays}</p>
              <div className="flex items-center gap-1.5 text-[9px] text-sky-400 font-semibold pt-1 border-t border-slate-900">
                <MoveRight className="w-3 h-3 flex-shrink-0" />
                <span>{b.note}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3">
        <HardDrive className="w-4 h-4 text-sky-400 flex-shrink-0" />
        <p className="text-xs text-slate-300">
          試験対策の覚え方：<span className="font-bold text-sky-300">フル＝全部</span>・<span className="font-bold text-amber-300">差分＝フル以降</span>・<span className="font-bold text-emerald-300">増分＝直前以降</span>。復元時に最も手軽なのはフル、バックアップ時最速なのは増分です。
        </p>
      </div>
    </div>
  );
};
