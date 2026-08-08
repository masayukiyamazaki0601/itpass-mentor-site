import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Binary, 
  HelpCircle, 
  Database, 
  Play, 
  RotateCcw, 
  ChevronRight, 
  Maximize2, 
  Hash, 
  Info,
  CheckCircle,
  HelpCircle as QuestionIcon
} from 'lucide-react';

// ==========================================
// 1. 10進数 ➜ 2進数 変換 (NumberConversionDiagram)
// ==========================================
export const NumberConversionDiagram: React.FC = () => {
  const [decimalVal, setDecimalVal] = useState<number>(13);

  // 10進数を2進数に変換する計算過程を算出
  const getConversionSteps = (num: number) => {
    const steps = [];
    let temp = num;
    if (temp === 0) {
      steps.push({ quotient: 0, remainder: 0, division: '0 ÷ 2' });
    }
    while (temp > 0) {
      const quotient = Math.floor(temp / 2);
      const remainder = temp % 2;
      steps.push({
        quotient,
        remainder,
        original: temp,
        division: `${temp} ÷ 2 = ${quotient} 余り ${remainder}`
      });
      temp = quotient;
    }
    return steps;
  };

  const steps = getConversionSteps(decimalVal);
  const binaryVal = decimalVal.toString(2).padStart(8, '0');

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Decimal to Binary
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          10進数から2進数への変換シミュレーター
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          数値を動かして、2で割り算を繰り返す筆算の変換プロセスを視覚的に理解します。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* 左：スライダーコントローラー */}
        <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-center space-y-4">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-350 font-bold">10進数入力 (0〜255)</span>
            <span className="text-indigo-400 font-mono font-extrabold text-lg">{decimalVal}</span>
          </div>
          <input
            type="range"
            min="0"
            max="255"
            step="1"
            value={decimalVal}
            onChange={(e) => setDecimalVal(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />

          <div className="bg-slate-900 p-4 rounded-xl border border-slate-850 space-y-2 mt-2">
            <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-widest block">変換後の2進数表現 (8ビット)</span>
            <div className="flex justify-center gap-1.5 font-mono text-base font-black">
              {binaryVal.split('').map((b, idx) => (
                <span key={idx} className="w-7 h-8 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-300">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 右：割り算の筆算トレース */}
        <div className="lg:col-span-7 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
          <div>
            <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">
              2で割り算を繰り返すプロセス
            </h4>
            <div className="space-y-1.5 font-mono text-xs text-slate-300 max-h-[160px] overflow-y-auto pr-2">
              {steps.map((s, idx) => (
                <div key={idx} className="flex justify-between items-center py-1 border-b border-slate-900">
                  <span>{s.division}</span>
                  <span className="text-indigo-400 font-bold bg-indigo-950/30 px-2 py-0.5 rounded border border-indigo-900/30">
                    余り: {s.remainder}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 bg-indigo-950/20 border border-indigo-900/30 rounded-xl mt-4">
            <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">
              【ポイント】商が0になるまで2で割り続け、出てきた**「余り」を下から順に並べる**と、2進数になります。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 2. ベン図と論理演算 (SetsLogicVennDiagram)
// ==========================================
export const SetsLogicVennDiagram: React.FC = () => {
  const [logicOp, setLogicOp] = useState<'AND' | 'OR' | 'XOR' | 'NOT_A'>('AND');

  // 各種演算の判定ロジック
  const isSelected = (inA: boolean, inB: boolean) => {
    switch (logicOp) {
      case 'AND': return inA && inB;
      case 'OR': return inA || inB;
      case 'XOR': return inA !== inB;
      case 'NOT_A': return !inA;
      default: return false;
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Sets & Logic Gates
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          論理演算とベン図の可視化
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          AND（論理積）、OR（論理和）、XOR（排他的論理和）などの演算結果とベン図の対応を確認します。
        </p>
      </div>

      {/* 演算子ボタン */}
      <div className="flex gap-2 mb-6 justify-center">
        {(['AND', 'OR', 'XOR', 'NOT_A'] as const).map(op => (
          <button
            key={op}
            onClick={() => setLogicOp(op)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
              logicOp === op
                ? 'bg-slate-800 border-indigo-500 text-indigo-400 shadow-sm'
                : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
            }`}
          >
            {op === 'AND' && 'AND (論理積)'}
            {op === 'OR' && 'OR (論理和)'}
            {op === 'XOR' && 'XOR (排他論理和)'}
            {op === 'NOT_A' && 'NOT A (否定)'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* 左：ベン図の可視化 (SVG) */}
        <div className="lg:col-span-6 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-center items-center min-h-[220px]">
          <svg className="w-full h-44 max-w-[280px]" viewBox="0 0 100 60">
            {/* 背景枠（NOT用） */}
            <rect x="2" y="2" width="96" height="56" fill={isSelected(false, false) ? '#3b82f630' : 'none'} stroke="#475569" strokeWidth="0.8" rx="4" />
            <text x="5" y="8" fontSize="3" fill="#475569" fontWeight="bold">全体集合 U</text>

            {/* 円A (左) - 選択時ブルー塗り */}
            <circle cx="38" cy="30" r="18" fill={isSelected(true, false) && !isSelected(true, true) ? '#3b82f640' : isSelected(true, true) ? '#3b82f640' : 'none'} stroke="#3b82f6" strokeWidth="1" />
            {/* 円B (右) - 選択時ブルー塗り */}
            <circle cx="62" cy="30" r="18" fill={isSelected(false, true) && !isSelected(true, true) ? '#3b82f640' : isSelected(true, true) ? '#3b82f640' : 'none'} stroke="#3b82f6" strokeWidth="1" />

            {/* 重なり部分のクリップと塗りつぶし (ANDまたはOR/XORの処理用) */}
            {isSelected(true, true) && (
              <path d="M 50,13.2 A 18,18 0 0,1 62,30 A 18,18 0 0,1 50,46.8 A 18,18 0 0,1 38,30 A 18,18 0 0,1 50,13.2" fill="#3b82f680" />
            )}

            <text x="25" y="32" fontSize="4" fill="#94a3b8" fontWeight="bold">A</text>
            <text x="71" y="32" fontSize="4" fill="#94a3b8" fontWeight="bold">B</text>
          </svg>
        </div>

        {/* 右：真理値表 */}
        <div className="lg:col-span-6 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
          <div>
            <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest border-b border-slate-800 pb-2 mb-3">
              真理値表 (Truth Table)
            </h4>
            <div className="space-y-1.5 font-mono text-xs">
              <div className="grid grid-cols-4 font-bold border-b border-slate-850 pb-1 text-slate-500">
                <span>入力 A</span>
                <span>入力 B</span>
                <span className="col-span-2">出力 (結果)</span>
              </div>
              {[
                { a: 0, b: 0 },
                { a: 0, b: 1 },
                { a: 1, b: 0 },
                { a: 1, b: 1 }
              ].map((row, idx) => {
                const res = isSelected(row.a === 1, row.b === 1) ? 1 : 0;
                return (
                  <div key={idx} className={`grid grid-cols-4 py-1 border-b border-slate-900/40 ${res === 1 ? 'text-indigo-400 font-bold bg-indigo-950/10' : 'text-slate-400'}`}>
                    <span>{row.a}</span>
                    <span>{row.b}</span>
                    <span className="col-span-2">{res} ({res === 1 ? '真 / TRUE' : '偽 / FALSE'})</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 3. データ単位 (DataUnitsScaleDiagram)
// ==========================================
export const DataUnitsScaleDiagram: React.FC = () => {
  const [scaleIdx, setScaleIdx] = useState<number>(1); // デフォルト: MB

  const dataScales = [
    { name: 'KB (キロバイト)', multiplier: '10の3乗 (1,000 Byte)', example: 'テキストメール1通：約 5KB', fileCount: '電子書籍テキスト数冊分' },
    { name: 'MB (メガバイト)', multiplier: '10の6乗 (100万 Byte)', example: 'スマホの一般的な写真1枚：約 3MB', fileCount: '音楽ファイル（MP3）約1曲分' },
    { name: 'GB (ギガバイト)', multiplier: '10の9乗 (10億 Byte)', example: '映画（高画質）1本の動画：約 2GB', fileCount: 'スマホ写真約300枚分' },
    { name: 'TB (テラバイト)', multiplier: '10の12乗 (1兆 Byte)', example: '一般的なパソコンのハードディスク：約 1TB', fileCount: '高画質動画約500時間分' }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Data Storage Units
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          データ単位と補助接頭語スケール
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          KB、MB、GB、TBと大きくなるデータの補助単位と、それぞれの目安サイズを確認します。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* 左：スライダーで単位切り替え */}
        <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-center space-y-5">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-350 font-bold">選択単位</span>
            <span className="text-indigo-400 font-extrabold text-base">{dataScales[scaleIdx].name.split(' ')[0]}</span>
          </div>
          <input
            type="range"
            min="0"
            max="3"
            step="1"
            value={scaleIdx}
            onChange={(e) => setScaleIdx(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />

          <div className="bg-slate-900 p-4 rounded-xl border border-slate-850">
            <div className="flex justify-between items-center text-[10px] text-slate-500 font-extrabold mb-1">バイト換算</div>
            <div className="text-xs font-mono font-bold text-slate-200">
              {dataScales[scaleIdx].multiplier}
            </div>
          </div>
        </div>

        {/* 右：目安比較カード */}
        <div className="lg:col-span-7 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
          <div>
            <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest border-b border-slate-800 pb-2 mb-3">
              データ量の目安
            </h4>
            <div className="space-y-3">
              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-850">
                <span className="text-[9px] text-indigo-400 font-extrabold uppercase tracking-widest block mb-0.5">具体的な例</span>
                <p className="text-xs font-semibold text-slate-200">{dataScales[scaleIdx].example}</p>
              </div>

              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-850">
                <span className="text-[9px] text-emerald-400 font-extrabold uppercase tracking-widest block mb-0.5">ファイル換算での目安</span>
                <p className="text-xs font-semibold text-slate-205 text-slate-200">{dataScales[scaleIdx].fileCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 4. スタック＆キュー (QueueStackVisualDiagram)
// ==========================================
export const QueueStackVisualDiagram: React.FC = () => {
  const [dataQueue, setDataQueue] = useState<string[]>(['A', 'B', 'C']);
  const [dataStack, setDataStack] = useState<string[]>(['A', 'B', 'C']);

  // 追加 (PUSH) - 最大5要素まで
  const handlePush = () => {
    if (dataQueue.length >= 5) return;
    const nextChar = String.fromCharCode(65 + Math.max(dataQueue.length, dataStack.length)); // 'D', 'E'など
    setDataQueue(prev => [...prev, nextChar]);
    setDataStack(prev => [...prev, nextChar]);
  };

  // キューから取り出す (FIFO: 先頭からPOP)
  const handlePopQueue = () => {
    if (dataQueue.length === 0) return;
    setDataQueue(prev => prev.slice(1));
  };

  // スタックから取り出す (LIFO: 末尾からPOP)
  const handlePopStack = () => {
    if (dataStack.length === 0) return;
    setDataStack(prev => prev.slice(0, -1));
  };

  const handleReset = () => {
    setDataQueue(['A', 'B', 'C']);
    setDataStack(['A', 'B', 'C']);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
            Data Structures
          </span>
          <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            キュー (FIFO) ＆ スタック (LIFO)
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
            先入れ先出し（キュー）と後入れ先出し（スタック）のデータ出し入れ動作の対比。
          </p>
        </div>

        <div className="flex gap-2 self-start md:self-auto">
          <button
            onClick={handlePush}
            disabled={dataQueue.length >= 5}
            className="bg-indigo-650 hover:bg-indigo-505 disabled:bg-slate-800 disabled:text-slate-600 border border-slate-800 text-white font-bold text-xs py-2 px-4 rounded-xl cursor-pointer"
          >
            データ追加 (PUSH)
          </button>
          <button
            onClick={handleReset}
            className="bg-slate-850 hover:bg-slate-800 text-slate-300 font-bold text-xs py-2 px-4 rounded-xl cursor-pointer border border-slate-800"
          >
            リセット
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 左：キュー (FIFO) */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-4">
              <span className="text-xs font-bold text-slate-200">① キュー (Queue) - 先入れ先出し</span>
              <button
                onClick={handlePopQueue}
                disabled={dataQueue.length === 0}
                className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-900 disabled:text-slate-700 text-white text-[10px] font-bold py-1 px-2.5 rounded-lg cursor-pointer border border-slate-800"
              >
                POP (先頭取得)
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-2 h-16 border-t border-b border-dashed border-indigo-500/30 px-4 bg-slate-900/30 rounded-xl">
              <span className="text-[10px] text-slate-500 font-bold">出口</span>
              <div className="flex-1 flex justify-center gap-2 font-mono">
                <AnimatePresence>
                  {dataQueue.map((item) => (
                    <motion.div
                      key={item}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="w-10 h-10 rounded-lg bg-indigo-900/50 border border-indigo-500/40 text-indigo-300 font-bold flex items-center justify-center text-xs"
                    >
                      {item}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              <span className="text-[10px] text-slate-500 font-bold">入口</span>
            </div>
          </div>
          <p className="text-[9px] text-slate-500 font-bold leading-relaxed pt-3">
            ※先に入れたデータが、最初に出ていきます（ところてんのような構造）。プリンターの印刷待ち行列などに使用されます。
          </p>
        </div>

        {/* 右：スタック (LIFO) */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-4">
              <span className="text-xs font-bold text-slate-200">② スタック (Stack) - 後入れ先出し</span>
              <button
                onClick={handlePopStack}
                disabled={dataStack.length === 0}
                className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-900 disabled:text-slate-700 text-white text-[10px] font-bold py-1 px-2.5 rounded-lg cursor-pointer border border-slate-800"
              >
                POP (末尾取得)
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-end gap-1.5 h-20 border-l border-r border-b border-indigo-500/30 px-4 bg-slate-900/30 rounded-b-xl pb-2">
              <div className="flex flex-col-reverse gap-1.5 font-mono">
                <AnimatePresence>
                  {dataStack.map((item) => (
                    <motion.div
                      key={item}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="w-24 h-6 rounded bg-purple-900/50 border border-purple-500/40 text-purple-300 font-bold flex items-center justify-center text-xs"
                    >
                      {item}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <p className="text-[9px] text-slate-500 font-bold leading-relaxed pt-3">
            ※最後に入れたデータが、最初に出ていきます（本を積み重ねたバケツ構造）。ブラウザの「戻る」機能などに使用されます。
          </p>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 5. 探索アルゴリズム (SearchAlgorithmsDiagram)
// ==========================================
export const SearchAlgorithmsDiagram: React.FC = () => {
  const dataset = [10, 15, 23, 31, 35, 42, 55, 61, 72, 80, 85, 90, 93, 97, 99];
  const target = 35; // 探索対象

  const [activeStepLinear, setActiveStepLinear] = useState<number | null>(null);
  const [activeStepBinary, setActiveStepBinary] = useState<number | null>(null);
  const [linearSteps, setLinearSteps] = useState<number>(0);
  const [binarySteps, setBinarySteps] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const runLinearSearch = async () => {
    for (let i = 0; i < dataset.length; i++) {
      setActiveStepLinear(i);
      setLinearSteps(i + 1);
      if (dataset[i] === target) {
        break;
      }
      await new Promise(resolve => setTimeout(resolve, 350));
    }
  };

  const runBinarySearch = async () => {
    let low = 0;
    let high = dataset.length - 1;
    let stepCount = 0;

    while (low <= high) {
      stepCount++;
      setBinarySteps(stepCount);
      const mid = Math.floor((low + high) / 2);
      setActiveStepBinary(mid);

      if (dataset[mid] === target) {
        break;
      } else if (dataset[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
      await new Promise(resolve => setTimeout(resolve, 1000)); // 線形より少し遅めにトレース
    }
  };

  const handleStartSearch = () => {
    if (isRunning) return;
    setIsRunning(true);
    setLinearSteps(0);
    setBinarySteps(0);
    setActiveStepLinear(null);
    setActiveStepBinary(null);

    Promise.all([runLinearSearch(), runBinarySearch()]).then(() => {
      setIsRunning(false);
    });
  };

  const handleReset = () => {
    setLinearSteps(0);
    setBinarySteps(0);
    setActiveStepLinear(null);
    setActiveStepBinary(null);
    setIsRunning(false);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
            Search Algorithms
          </span>
          <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            線形探索 vs 二分探索の処理効率
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
            配列から数値「{target}」を見つけ出すまでの探索ステップ数を比較します。二分探索の速さを目で確認できます。
          </p>
        </div>

        <div className="flex gap-2 self-start md:self-auto">
          <button
            onClick={handleStartSearch}
            disabled={isRunning}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-650 border border-indigo-950 text-white font-bold text-xs py-2 px-4 rounded-xl cursor-pointer"
          >
            探索シミュレーション開始
          </button>
          <button
            onClick={handleReset}
            className="bg-slate-850 hover:bg-slate-800 text-slate-300 font-bold text-xs py-2 px-4 rounded-xl cursor-pointer border border-slate-800"
          >
            リセット
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* 1. 線形探索トレース */}
        <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex justify-between items-center text-xs border-b border-slate-900 pb-1.5">
            <span className="font-bold text-slate-300">① 線形探索 (リニアサーチ) - 端から順番に確認</span>
            <span className="text-indigo-400 font-mono font-bold">探索ステップ数: {linearSteps} 回</span>
          </div>

          <div className="flex flex-wrap gap-1.5 justify-center font-mono">
            {dataset.map((val, idx) => {
              const isActive = idx === activeStepLinear;
              const isFound = isActive && val === target;
              return (
                <div
                  key={idx}
                  className={`w-8 h-8 rounded text-[10px] font-bold flex items-center justify-center border transition-all ${
                    isFound 
                      ? 'bg-emerald-600 border-emerald-500 text-white scale-110 font-black animate-pulse' 
                      : isActive 
                        ? 'bg-rose-950/30 border-rose-500 text-rose-400' 
                        : 'bg-slate-900 border-slate-800 text-slate-500'
                  }`}
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. 二分探索トレース */}
        <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex justify-between items-center text-xs border-b border-slate-900 pb-1.5">
            <span className="font-bold text-slate-300">② 二分探索 (バイナリサーチ) - 真ん中で半分に絞り込む</span>
            <span className="text-indigo-400 font-mono font-bold">探索ステップ数: {binarySteps} 回</span>
          </div>

          <div className="flex flex-wrap gap-1.5 justify-center font-mono">
            {dataset.map((val, idx) => {
              const isActive = idx === activeStepBinary;
              const isFound = isActive && val === target;
              return (
                <div
                  key={idx}
                  className={`w-8 h-8 rounded text-[10px] font-bold flex items-center justify-center border transition-all ${
                    isFound 
                      ? 'bg-emerald-600 border-emerald-500 text-white scale-110 font-black animate-pulse' 
                      : isActive 
                        ? 'bg-rose-950/30 border-rose-500 text-rose-400' 
                        : 'bg-slate-900 border-slate-800 text-slate-500'
                  }`}
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
