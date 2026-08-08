import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Database, 
  Keyboard, 
  Monitor, 
  HelpCircle, 
  Play, 
  RotateCcw, 
  ChevronRight, 
  Info,
  CheckCircle2,
  HardDrive,
  Usb,
  Wifi,
  Tv,
  ArrowRight,
  Zap,
  Layers
} from 'lucide-react';

// ==========================================
// 1. 5大装置とデータフロー (ComputerArchitectureDiagram)
// ==========================================
export const ComputerArchitectureDiagram: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const stepsInfo = [
    { text: '待機状態：プログラムの指示を待っています。', active: '' },
    { text: '1. 入力 ➜ 記憶：入力装置からデータが入り、主記憶装置に保存されます。', active: 'input-memory' },
    { text: '2. 制御 ➜ 記憶：制御装置が主記憶から命令を取り出します（フェッチ）。', active: 'control-fetch' },
    { text: '3. 演算 ➜ 記憶：演算装置が主記憶からデータを読み出し、計算して結果を書き戻します。', active: 'arithmetic-write' },
    { text: '4. 記憶 ➜ 出力：計算された結果データが出力装置へ送られ、表示されます。', active: 'memory-output' }
  ];

  const handleNextStep = () => {
    setStep(prev => (prev + 1) % stepsInfo.length);
  };

  const handleReset = () => {
    setStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
            5 Elements of Computer
          </span>
          <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            コンピュータの5大装置とデータ・制御フロー
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
            入力、記憶、制御、演算、出力の5つの装置間をデータが流れる手順をトレースします。
          </p>
        </div>

        <div className="flex gap-2 self-start md:self-auto">
          <button
            onClick={handleNextStep}
            className="bg-indigo-600 hover:bg-indigo-505 border border-indigo-950 text-white font-bold text-xs py-2 px-4 rounded-xl cursor-pointer flex items-center gap-1"
          >
            ステップを進める <ChevronRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleReset}
            className="bg-slate-850 hover:bg-slate-800 text-slate-300 font-bold text-xs py-2 px-4 rounded-xl cursor-pointer border border-slate-800"
          >
            リセット
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* 左：装置配置図 */}
        <div className="lg:col-span-8 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center min-h-[250px]">
          <div className="relative grid grid-cols-3 gap-6 items-center">
            {/* 入力装置 */}
            <div className={`p-4 rounded-xl border text-center transition-all ${
              step === 1 ? 'bg-indigo-950/40 border-indigo-500 text-indigo-300 scale-105' : 'bg-slate-900 border-slate-850 text-slate-500'
            }`}>
              <Keyboard className="w-6 h-6 mx-auto mb-1" />
              <span className="text-[10px] font-bold block">入力装置</span>
            </div>

            {/* 記憶装置 (中央) */}
            <div className={`p-4 rounded-xl border text-center transition-all ${
              step === 1 || step === 2 || step === 3 || step === 4
                ? 'bg-indigo-950/40 border-indigo-500 text-indigo-300 scale-105'
                : 'bg-slate-900 border-slate-850 text-slate-500'
            }`}>
              <Database className="w-6 h-6 mx-auto mb-1" />
              <span className="text-[10px] font-bold block">主記憶装置</span>
            </div>

            {/* 出力装置 */}
            <div className={`p-4 rounded-xl border text-center transition-all ${
              step === 4 ? 'bg-indigo-950/40 border-indigo-500 text-indigo-300 scale-105' : 'bg-slate-900 border-slate-850 text-slate-500'
            }`}>
              <Monitor className="w-6 h-6 mx-auto mb-1" />
              <span className="text-[10px] font-bold block">出力装置</span>
            </div>

            {/* 下段：CPU（制御・演算） */}
            <div className="col-span-3 grid grid-cols-2 gap-4 mt-4 border border-dashed border-slate-800 p-4 rounded-xl bg-slate-900/30">
              <span className="col-span-2 text-[8px] text-slate-600 font-extrabold uppercase tracking-widest text-center">CPU (プロセッサ)</span>
              
              {/* 制御装置 */}
              <div className={`p-3 rounded-lg border text-center transition-all ${
                step === 2 ? 'bg-indigo-950/40 border-indigo-500 text-indigo-300 scale-105' : 'bg-slate-900 border-slate-850 text-slate-500'
              }`}>
                <Cpu className="w-5 h-5 mx-auto mb-1" />
                <span className="text-[9px] font-bold block">制御装置</span>
              </div>

              {/* 演算装置 */}
              <div className={`p-3 rounded-lg border text-center transition-all ${
                step === 3 ? 'bg-indigo-950/40 border-indigo-500 text-indigo-300 scale-105' : 'bg-slate-900 border-slate-850 text-slate-500'
              }`}>
                <Cpu className="w-5 h-5 mx-auto mb-1" />
                <span className="text-[9px] font-bold block">演算装置</span>
              </div>
            </div>
          </div>
        </div>

        {/* 右：ステップ説明 */}
        <div className="lg:col-span-4 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[250px]">
          <div>
            <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest border-b border-slate-800 pb-2 mb-3">
              現在のステップ説明
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-semibold">
              {stepsInfo[step].text}
            </p>
          </div>

          <div className="p-3 bg-indigo-950/20 border border-indigo-900/30 rounded-xl mt-4">
            <p className="text-[9px] text-slate-400 leading-relaxed font-semibold">
              【試験対策】CPUは「制御」と「演算」のみ。キーボードやSSDはCPUの外部（入力・補助記憶）です。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 2. CPUの命令実行サイクル (CpuExecutionCycleDiagram)
// ==========================================
export const CpuExecutionCycleDiagram: React.FC = () => {
  const [cycleStep, setCycleStep] = useState<number>(0);

  const cycleSteps = [
    { title: '① 命令フェッチ (Fetch)', desc: '主記憶から「命令」を取り出して命令レジスタに格納します。', component: '命令レジスタ' },
    { title: '② 命令デコード (Decode)', desc: '命令デコーダが、命令の意味を解読します。', component: '命令デコーダ' },
    { title: '③ データ読み出し (Load)', desc: '演算に必要なデータを主記憶から汎用レジスタに読み出します。', component: '汎用レジスタ' },
    { title: '④ 命令実行 (Execute)', desc: 'ALU（演算器）が命令を実行し、結果をレジスタや主記憶に書き戻します。', component: '演算器' }
  ];

  const handleNext = () => {
    setCycleStep(prev => (prev + 1) % 4);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
            CPU Instruction Cycle
          </span>
          <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            CPUの命令実行サイクル（4段階）
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
            CPUがメモリから命令を読み出し、計算処理を実行するまでのステップを追います。
          </p>
        </div>

        <button
          onClick={handleNext}
          className="bg-indigo-600 hover:bg-indigo-505 border border-indigo-955 text-white font-bold text-xs py-2 px-4 rounded-xl cursor-pointer"
        >
          次のステップを実行
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* 左：CPU内部のコンポーネント点灯 */}
        <div className="lg:col-span-8 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center min-h-[220px]">
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: '命令レジスタ', stepActive: 0, detail: '命令を一時保管' },
              { name: '命令デコーダ', stepActive: 1, detail: '命令の意味を解読' },
              { name: '汎用レジスタ', stepActive: 2, detail: 'データを一時保管' },
              { name: '演算器 (ALU)', stepActive: 3, detail: '実際の計算処理' }
            ].map((comp, idx) => {
              const isActive = cycleStep === comp.stepActive;
              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border text-center transition-all ${
                    isActive 
                      ? 'bg-indigo-950/40 border-indigo-500 text-indigo-300 scale-102 font-bold' 
                      : 'bg-slate-900 border-slate-850 text-slate-500'
                  }`}
                >
                  <span className="text-[10px] font-bold block">{comp.name}</span>
                  <span className="text-[8px] block mt-1 text-slate-500">{comp.detail}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 右：ステップ説明 */}
        <div className="lg:col-span-4 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
          <div>
            <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest border-b border-slate-800 pb-2 mb-3">
              {cycleSteps[cycleStep].title}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-semibold">
              {cycleSteps[cycleStep].desc}
            </p>
          </div>

          <div className="p-3 bg-slate-900/50 border border-slate-850 rounded-xl mt-4">
            <p className="text-[9px] text-slate-400 leading-relaxed font-semibold">
              ※レジスタはCPU内部にある、非常に高速な一時記憶場所のことです。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 3. 記憶階層・キャッシュ (MemoryHierarchyDiagram)
// ==========================================
export const MemoryHierarchyDiagram: React.FC = () => {
  const [hitRate, setHitRate] = useState<number>(0.85); // キャッシュヒット率
  const [status, setStatus] = useState<string>('スライダーでヒット率を設定し、読み込みを実行します。');
  const [isAccessing, setIsAccessing] = useState<boolean>(false);
  const [accessTime, setAccessTime] = useState<number | null>(null);

  const startReadTest = () => {
    if (isAccessing) return;
    setIsAccessing(true);
    setStatus('データ読み込み要求発生。キャッシュメモリを参照中...');

    setTimeout(() => {
      // 確率判定 (ヒット)
      const isHit = Math.random() <= hitRate;
      if (isHit) {
        setAccessTime(2); // キャッシュアクセス時間: 2ns
        setStatus('キャッシュヒット！データを瞬時にCPUへ返しました。');
      } else {
        setAccessTime(60); // キャッシュミス ➜ 主記憶アクセス時間: 60ns
        setStatus('キャッシュミス！主記憶（RAM）までデータを取りに行きました。');
      }
      setIsAccessing(false);
    }, 1500);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
            Memory Hierarchy & Cache
          </span>
          <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            記憶階層とキャッシュメモリ
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
            CPUと主記憶の速度ギャップを埋めるキャッシュメモリ。ヒット率を変えてアクセス時間をシミュレートします。
          </p>
        </div>

        <button
          onClick={startReadTest}
          disabled={isAccessing}
          className="bg-indigo-650 hover:bg-indigo-505 disabled:bg-slate-800 disabled:text-slate-650 border border-slate-805 text-white font-bold text-xs py-2 px-4 rounded-xl cursor-pointer self-start md:self-auto"
        >
          データ読み込みを実行
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* 左：ヒット率スライダーと階層 */}
        <div className="lg:col-span-7 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-350 font-bold">キャッシュヒット率 (確率)</span>
              <span className="text-indigo-400 font-mono font-extrabold text-base">{(hitRate * 100).toFixed(0)} %</span>
            </div>
            <input
              type="range"
              min="0.10"
              max="0.99"
              step="0.05"
              value={hitRate}
              onChange={(e) => setHitRate(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          {/* 階層ピラミッド風リスト */}
          <div className="space-y-1.5">
            {[
              { name: '① レジスタ / キャッシュ', speed: '超高速 (〜数ナノ秒)', cap: '極小容量' },
              { name: '② 主記憶装置 (RAM)', speed: '高速 (数十ナノ秒)', cap: '中容量' },
              { name: '③ 補助記憶 (SSD/HDD)', speed: '低速 (数十ミリ秒)', cap: '超大容量' }
            ].map((layer, idx) => (
              <div key={idx} className="flex justify-between items-center p-2.5 bg-slate-900 border border-slate-850 rounded-lg text-[10px]">
                <span className="font-bold text-slate-300">{layer.name}</span>
                <span className="text-indigo-400 font-mono">{layer.speed} ({layer.cap})</span>
              </div>
            ))}
          </div>
        </div>

        {/* 右：結果表示 */}
        <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
          <div>
            <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest border-b border-slate-800 pb-2">
              アクセス検証結果
            </h4>
            
            <p className="text-xs text-slate-300 leading-relaxed font-semibold mt-4">
              {status}
            </p>

            {accessTime !== null && (
              <div className="mt-4 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-bold">今回の実効アクセス時間</span>
                <span className="font-mono font-bold text-indigo-400 text-base">{accessTime} ns (ナノ秒)</span>
              </div>
            )}
          </div>

          <div className="p-3 bg-slate-900/50 border border-slate-850 rounded-xl mt-4">
            <p className="text-[9px] text-slate-405 leading-relaxed font-semibold text-slate-400">
              【ポイント】ヒット率が高いほど、主記憶へのアクセス頻度が減るため、システム全体の平均処理速度は向上します。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 4. 入出力インタフェース (IoInterfacesPortsDiagram)
// ==========================================
export const IoInterfacesPortsDiagram: React.FC = () => {
  const [selectedPort, setSelectedPort] = useState<'USB' | 'HDMI' | 'Bluetooth' | 'WiFi'>('USB');

  const portDetails = {
    USB: {
      title: 'USB (Type-C / 3.2 など)',
      speed: '最大 40 Gbps',
      type: '有線シリアル接続',
      description: 'キーボード、マウス、外付けHDD、スマートフォンの充電やディスプレイ出力など、極めて多目的に利用される標準的なインタフェース。',
      hotplug: '◎ ホットプラグ対応（電源を入れたまま抜き差し可能）'
    },
    HDMI: {
      title: 'HDMI',
      speed: '最大 48 Gbps',
      type: '有線映像・音声接続',
      description: 'テレビ、モニター、プロジェクターに映像と音声のデジタルデータを同時に送るためのインタフェース。',
      hotplug: '◯ 対応'
    },
    Bluetooth: {
      title: 'Bluetooth',
      speed: '最大 24 Mbps',
      type: '近距離無線通信',
      description: '約10m以内の近距離で、ワイヤレスイヤホン、マウス、キーボードなどを接続する規格。障害物に強く省電力。',
      hotplug: 'N/A'
    },
    WiFi: {
      title: 'Wi-Fi (無線LAN)',
      speed: '最大 9.6 Gbps',
      type: '高速無線ネットワーク',
      description: 'パソコンやスマホをインターネット回線（ルーター）に無線でつなぐための規格。複数の機器を同時に大容量通信可能。',
      hotplug: 'N/A'
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          I/O Interfaces & Connectors
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          入出力インタフェースの規格と特徴
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          各インタフェースのカードを選択すると、最大速度や接続機器などの仕様詳細が表示されます。
        </p>
      </div>

      {/* ポート切り替えボタン */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {(['USB', 'HDMI', 'Bluetooth', 'WiFi'] as const).map(port => (
          <button
            key={port}
            onClick={() => setSelectedPort(port)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
              selectedPort === port
                ? 'bg-slate-800 border-indigo-500 text-indigo-400 shadow-sm'
                : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
            }`}
          >
            {port === 'USB' && 'USB (Type-C)'}
            {port === 'HDMI' && 'HDMI'}
            {port === 'Bluetooth' && 'Bluetooth'}
            {port === 'WiFi' && 'Wi-Fi'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* 左：アイコンと主要スペック */}
        <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-center space-y-4">
          <div className="flex justify-center py-4 bg-slate-900 rounded-xl border border-slate-850">
            {selectedPort === 'USB' && <Usb className="w-12 h-12 text-indigo-400" />}
            {selectedPort === 'HDMI' && <Tv className="w-12 h-12 text-indigo-400" />}
            {selectedPort === 'Bluetooth' && <Zap className="w-12 h-12 text-indigo-400 animate-pulse" />}
            {selectedPort === 'WiFi' && <Wifi className="w-12 h-12 text-indigo-400" />}
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between border-b border-slate-850 pb-1">
              <span className="text-slate-500">最大転送速度</span>
              <span className="text-slate-200 font-mono font-bold">{portDetails[selectedPort].speed}</span>
            </div>
            <div className="flex justify-between border-b border-slate-850 pb-1">
              <span className="text-slate-500">伝送方式</span>
              <span className="text-slate-200 font-bold">{portDetails[selectedPort].type}</span>
            </div>
          </div>
        </div>

        {/* 右：詳細解説 */}
        <div className="lg:col-span-7 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
          <div>
            <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest border-b border-slate-800 pb-2 mb-3">
              規格の概要
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-semibold mb-4">
              {portDetails[selectedPort].description}
            </p>

            {portDetails[selectedPort].hotplug !== 'N/A' && (
              <div className="text-[10px] font-bold text-indigo-400">
                ホットプラグ機能：{portDetails[selectedPort].hotplug}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
