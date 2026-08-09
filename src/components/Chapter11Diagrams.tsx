import React from 'react';
import { 
  Cpu, 
  Database, 
  Keyboard, 
  Monitor, 
  HardDrive, 
  Usb, 
  Wifi, 
  Tv, 
  Zap, 
  ArrowRight
} from 'lucide-react';

// ==========================================
// 1. 5大装置とデータフロー (ComputerArchitectureDiagram)
// ==========================================
export const ComputerArchitectureDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Block Diagram
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          コンピュータの5大装置とデータ・制御フロー
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          入力、記憶、制御、演算、出力の5つの装置が、どのように連携してデータ処理を行うかを示した関係図です。
        </p>
      </div>

      <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6">
        <div className="grid grid-cols-3 gap-6 items-center text-center">
          {/* 入力装置 */}
          <div className="p-4 rounded-xl border border-slate-850 bg-slate-900 text-slate-300">
            <Keyboard className="w-6 h-6 mx-auto mb-1.5 text-blue-400" />
            <span className="text-xs font-bold block">① 入力装置</span>
            <p className="text-[9px] text-slate-500 mt-1 font-medium">例：キーボード、マウス</p>
          </div>

          {/* 記憶装置 (中央) */}
          <div className="p-4 rounded-xl border border-slate-850 bg-slate-900 text-slate-300">
            <Database className="w-6 h-6 mx-auto mb-1.5 text-indigo-400" />
            <span className="text-xs font-bold block">② 主記憶装置</span>
            <p className="text-[9px] text-slate-500 mt-1 font-medium">例：メモリ (RAM)</p>
          </div>

          {/* 出力装置 */}
          <div className="p-4 rounded-xl border border-slate-850 bg-slate-900 text-slate-300">
            <Monitor className="w-6 h-6 mx-auto mb-1.5 text-emerald-400" />
            <span className="text-xs font-bold block">⑤ 出力装置</span>
            <p className="text-[9px] text-slate-500 mt-1 font-medium">例：ディスプレイ、プリンタ</p>
          </div>
        </div>

        {/* CPU（制御・演算） */}
        <div className="border border-dashed border-slate-800 p-5 rounded-xl bg-slate-900/30 grid grid-cols-2 gap-4">
          <div className="col-span-2 text-[8px] text-slate-550 font-extrabold uppercase tracking-widest text-center">CPU (プロセッサ)</div>
          
          {/* 制御装置 */}
          <div className="p-3.5 rounded-lg border border-slate-850 bg-slate-900 text-center">
            <Cpu className="w-5 h-5 mx-auto mb-1 text-amber-400" />
            <span className="text-xs font-bold block">③ 制御装置</span>
            <p className="text-[9px] text-slate-500 mt-0.5 leading-normal">プログラムの命令を解読し、各装置に動作を指示する</p>
          </div>

          {/* 演算装置 */}
          <div className="p-3.5 rounded-lg border border-slate-850 bg-slate-900 text-center">
            <Cpu className="w-5 h-5 mx-auto mb-1 text-rose-400" />
            <span className="text-xs font-bold block">④ 演算装置</span>
            <p className="text-[9px] text-slate-500 mt-0.5 leading-normal">四則演算や論理演算などの計算処理を行う</p>
          </div>
        </div>

        <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-850 text-[10px] font-bold text-slate-400 leading-relaxed">
          【データの流れ】入力装置 ➔ 主記憶装置 ➔ 演算装置（計算処理）➔ 主記憶装置 ➔ 出力装置 の順でデータ（実線）が流れます。また、制御装置からすべての装置に向けて指示（制御信号・破線）が送られます。
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 2. CPUの命令実行サイクル (CpuExecutionCycleDiagram)
// ==========================================
export const CpuExecutionCycleDiagram: React.FC = () => {
  const steps = [
    { title: '① 命令フェッチ (Fetch)', desc: '主記憶から「命令」を取り出して命令レジスタに格納します。', component: '命令レジスタ', color: 'border-blue-900/60 text-blue-400 bg-blue-950/15' },
    { title: '② 命令デコード (Decode)', desc: '命令デコーダが、取り出した命令の意味を解読します。', component: '命令デコーダ', color: 'border-indigo-900/60 text-indigo-400 bg-indigo-950/15' },
    { title: '③ データ読み出し (Load)', desc: '演算に必要なデータを主記憶から汎用レジスタに読み出します。', component: '汎用レジスタ', color: 'border-amber-900/60 text-amber-400 bg-amber-950/15' },
    { title: '④ 命令実行 (Execute)', desc: 'ALU（演算器）が命令を実行し、結果をレジスタや主記憶に書き戻します。', component: '演算器 (ALU)', color: 'border-emerald-900/60 text-emerald-400 bg-emerald-950/15' }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Flow
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          CPUの命令実行サイクル（4段階）
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          CPUが主記憶装置から命令を取り出してから、演算を実行し書き戻すまでの基本処理サイクルです。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {steps.map((step, idx) => (
          <div 
            key={idx} 
            className={`p-4 rounded-xl border ${step.color} flex flex-col justify-between space-y-3.5`}
          >
            <div className="space-y-1.5">
              <span className="text-[8px] bg-slate-900 text-slate-500 font-bold px-1.5 py-0.2 rounded border border-slate-850">
                STEP 0{idx + 1}
              </span>
              <h4 className="text-xs font-black text-slate-100">{step.title}</h4>
              <p className="text-[11px] text-slate-350 leading-normal font-semibold">
                {step.desc}
              </p>
            </div>
            <div className="bg-slate-900/80 p-2 rounded border border-slate-850 text-[9px] font-bold text-center text-slate-300">
              使用回路：{step.component}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// ==========================================
// 3. 記憶階層・キャッシュ (MemoryHierarchyDiagram)
// ==========================================
export const MemoryHierarchyDiagram: React.FC = () => {
  const memoryLayers = [
    { name: '① レジスタ', speed: '超高速 (〜数ナノ秒)', cap: '極小容量 (数KB)', desc: 'CPU内部にある、直接計算用の極小記憶域。', cost: '非常に高価' },
    { name: '② キャッシュメモリ', speed: '高速 (数ナノ秒)', cap: '小容量 (数MB)', desc: 'CPUと主記憶の速度差を埋めるためのSRAMメモリ。', cost: '高価' },
    { name: '③ 主記憶装置 (RAM)', speed: '中速 (数十ナノ秒)', cap: '中容量 (8GB〜32GB)', desc: 'プログラム実行時にデータを一時展開するDRAMメモリ。', cost: '安価' },
    { name: '④ 補助記憶 (SSD / HDD)', speed: '低速 (数十ミリ秒)', cap: '超大容量 (512GB〜2TB)', desc: '電源を切ってもデータが消えない大容量記憶装置。', cost: '非常に安価' }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Memory Pyramids
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          記憶階層とアクセス速度・容量のトレードオフ
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          アクセス速度が速いものほど容量が小さく高価になり、遅いものほど大容量で安価になるピラミッド構造です。
        </p>
      </div>

      <div className="space-y-3.5">
        {memoryLayers.map((layer, idx) => (
          <div 
            key={idx} 
            className="p-4.5 bg-slate-950/80 border border-slate-800/80 rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
          >
            <div className="lg:col-span-3 font-bold text-xs md:text-sm text-indigo-400">
              {layer.name}
            </div>
            <div className="lg:col-span-5 text-xs text-slate-350 leading-relaxed font-semibold">
              {layer.desc}
            </div>
            <div className="lg:col-span-4 bg-slate-900/80 p-2.5 rounded-lg border border-slate-850 grid grid-cols-2 gap-2 text-[9px] font-bold text-center text-slate-200">
              <div>
                <span className="text-slate-500 block mb-0.5">速度</span>
                {layer.speed}
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5">容量 / 単価</span>
                {layer.cap} ({layer.cost})
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// ==========================================
// 4. 入出力インタフェース (IoInterfacesPortsDiagram)
// ==========================================
export const IoInterfacesPortsDiagram: React.FC = () => {
  const interfaces = [
    {
      name: 'USB (Universal Serial Bus)',
      speed: '最大 40 Gbps (USB4)',
      type: '有線シリアル接続',
      desc: 'キーボード、マウス、プリンタ、外付けストレージなど、周辺機器を接続する最も一般的な規格。電源を入れたまま抜き差しできる「ホットプラグ」や、機器に電力を供給する「バスパワー」に対応。',
      icon: Usb,
      textColor: 'text-blue-400',
      borderColor: 'border-blue-900/60',
      bgColor: 'bg-blue-950/15'
    },
    {
      name: 'HDMI',
      speed: '最大 48 Gbps (HDMI 2.1)',
      type: '有線デジタル映像・音声接続',
      desc: '映像と音声のデジタル信号を1本のケーブルでまとめて高品質伝送するための規格。テレビ、PCモニター、ゲーム機などの接続に標準採用されています。',
      icon: Tv,
      textColor: 'text-indigo-400',
      borderColor: 'border-indigo-900/60',
      bgColor: 'bg-indigo-950/15'
    },
    {
      name: 'Bluetooth',
      speed: '最大 24 Mbps (Bluetooth 5.0)',
      type: '近距離無線通信',
      desc: '半径10m程度の狭い範囲で、スマホ、ワイヤレスイヤホン、キーボードなどの周辺機器を無線接続する規格。低消費電力が特徴で、障害物があっても接続可能です。',
      icon: Zap,
      textColor: 'text-amber-400',
      borderColor: 'border-amber-900/60',
      bgColor: 'bg-amber-950/15'
    },
    {
      name: 'Wi-Fi (無線LAN)',
      speed: '最大 9.6 Gbps (Wi-Fi 6)',
      type: '高速無線ネットワーク',
      desc: 'PCやスマホをインターネット回線（無線LANルーター）へつなぐための規格。Bluetoothに比べて高速で大容量のデータ通信が可能ですが、消費電力が大きくなります。',
      icon: Wifi,
      textColor: 'text-emerald-400',
      borderColor: 'border-emerald-900/60',
      bgColor: 'bg-emerald-950/15'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Overview
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          入出力インタフェース規格の分類と特徴
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          周辺機器とコンピュータを接続する、主要な有線・無線インタフェース規格の仕様比較です。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {interfaces.map((intf, idx) => {
          const Icon = intf.icon;
          return (
            <div 
              key={idx} 
              className={`p-5 rounded-2xl border ${intf.borderColor} ${intf.bgColor} flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-2.5">
                <div className="flex justify-between items-center">
                  <h4 className={`text-sm font-black ${intf.textColor}`}>{intf.name}</h4>
                  <div className={`p-1.5 bg-slate-900 border ${intf.borderColor} ${intf.textColor} rounded-lg`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-slate-350 leading-relaxed font-semibold">
                  {intf.desc}
                </p>
              </div>

              <div className="bg-slate-900 p-3 rounded-lg border border-slate-850 grid grid-cols-2 gap-2 text-[9px] font-bold text-slate-205 text-slate-300 text-center">
                <div>
                  <span className="text-slate-500 block mb-0.5">最大速度</span>
                  {intf.speed}
                </div>
                <div>
                  <span className="text-slate-500 block mb-0.5">伝送方式</span>
                  {intf.type}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
