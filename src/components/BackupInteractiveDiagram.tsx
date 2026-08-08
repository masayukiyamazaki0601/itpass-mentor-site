import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database,
  Layers,
  PlusCircle,
  FileStack,
  HardDrive,
  CheckCircle2,
  MoveRight
} from 'lucide-react';

export const BackupInteractiveDiagram: React.FC = () => {
  const [mode, setMode] = useState<'full' | 'diff' | 'incr'>('full');

  // 月曜〜金曜の日次データ（イメージ）
  const days = ['月', '火', '水', '木', '金'];

  // 各モードでコピーされる日
  const copies: Record<'full' | 'diff' | 'incr', string[]> = {
    full: ['月', '火', '水', '木', '金'],
    diff: ['月', '火', '水', '木', '金'],
    incr: ['金']
  };

  const labels = {
    full: { name: 'フルバックアップ', scope: '「全部」まとめてコピー', desc: 'すべてのデータをまとめてコピー。復元しやすいが、時間と容量がかかる。', color: 'from-sky-500 to-blue-600', size: '容量：大きい', sizeColor: 'text-rose-400', note: '初回はこれで全部コピー' },
    diff: { name: '差分バックアップ', scope: '「前回のフル以降」の変更分', desc: 'フルバックアップ以降に変わったデータだけをコピー。', color: 'from-amber-500 to-orange-600', size: '容量：中くらい', sizeColor: 'text-amber-400', note: 'フルを基準に毎日コピー' },
    incr: { name: '増分バックアップ', scope: '「前回のバックアップ以降」の変更分', desc: '直前のバックアップ以降に変わったデータだけをコピー。最も容量が少ない。', color: 'from-emerald-500 to-teal-600', size: '容量：小さい', sizeColor: 'text-emerald-400', note: '前日からの変更分だけ' }
  };

  const cur = labels[mode];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      {/* Header */}
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-900/60 uppercase">
          Backup Simulator
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
          バックアップの3種類（クリックして範囲を確認）
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          毎日コピーする場合、フル・差分・増分で「どのデータをコピーするか」が違います。ボタンで切り替えましょう。
        </p>
      </div>

      {/* Mode buttons */}
      <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6">
        {(Object.keys(labels) as ('full' | 'diff' | 'incr')[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
              mode === m
                ? `bg-slate-800 border-transparent shadow-lg ${
                    m === 'full' ? 'shadow-sky-500/20' : m === 'diff' ? 'shadow-amber-500/20' : 'shadow-emerald-500/20'
                  }`
                : 'bg-slate-950 border-slate-900 text-slate-500 hover:border-slate-700 hover:text-slate-300'
            }`}
          >
            <span className="text-[10px] md:text-xs font-bold block">{labels[m].name}</span>
            <span className="text-[9px] text-slate-500 mt-0.5 block">{labels[m].size}</span>
          </button>
        ))}
      </div>

      {/* Timeline visualization */}
      <div className="rounded-2xl border border-slate-700/60 bg-slate-950/50 p-5 mb-5">
        <div className="flex items-center gap-2 mb-4">
          <Database className="w-4 h-4 text-slate-400" />
          <span className="text-[11px] font-bold text-slate-300">1週間のコピー対象データ</span>
          <span className="ml-auto text-[9px] text-slate-500">月曜にフル実施</span>
        </div>

        {/* Day boxes */}
        <div className="grid grid-cols-5 gap-2 mb-4">
          {days.map((d, i) => {
            const isCopied = copies[mode].includes(d);
            const isBase = mode === 'diff' && d === '月';
            return (
              <div
                key={d}
                className={`rounded-lg border p-2 text-center transition-all duration-300 ${
                  isCopied
                    ? `border-transparent bg-gradient-to-br ${cur.color} shadow-lg`
                    : 'bg-slate-900 border-slate-800'
                }`}
              >
                <div className="text-[10px] font-bold text-slate-400">{d}</div>
                {isCopied ? (
                  <CheckCircle2 className="w-4 h-4 mx-auto mt-1 text-white" />
                ) : (
                  <div className="w-4 h-4 mx-auto mt-1 border border-slate-700 rounded-full" />
                )}
              </div>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="rounded-xl bg-slate-900 border border-slate-700/60 p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs font-black bg-gradient-to-r ${cur.color} bg-clip-text text-transparent`}>
                {cur.name}
              </span>
              <span className="text-[10px] text-slate-400">{cur.scope}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{cur.desc}</p>
            <div className="mt-3 flex items-center gap-2 bg-slate-950/60 border border-slate-700/60 rounded-lg px-3 py-2">
              <MoveRight className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <p className="text-[11px] font-bold text-sky-300">{cur.note}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Summary */}
      <div className="flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3">
        <HardDrive className="w-4 h-4 text-sky-400 flex-shrink-0" />
        <p className="text-xs text-slate-300">
          覚え方：<span className="font-bold text-sky-300">フル＝全部</span>・<span className="font-bold text-amber-300">差分＝フル以降</span>・<span className="font-bold text-emerald-300">増分＝直前</span>。増分が一番容量が少ない
        </p>
      </div>
    </div>
  );
};
