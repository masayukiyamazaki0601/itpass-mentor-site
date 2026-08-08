import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Laptop, 
  Cpu, 
  Settings, 
  ClipboardCheck, 
  ArrowRight, 
  RefreshCw, 
  User, 
  Building, 
  HelpCircle,
  Play,
  Calculator,
  Sliders,
  Maximize2,
  Minimize2,
  Wifi,
  Cloud,
  Thermometer,
  Wind
} from 'lucide-react';

// ==========================================
// 1. CAD/CAM/FA/CAT (CADCAMFlowDiagram)
// ==========================================
export const CADCAMFlowDiagram: React.FC = () => {
  const [step, setStep] = useState<number>(0);

  const steps = [
    {
      title: '1. CAD (コンピュータ支援設計)',
      desc: 'コンピュータを使って製品の設計図を作成するシステム。3Dモデルを作成し、強度計算や体積の測定なども画面上で行えます。',
      example: '例：3Dグラフィックソフトで、新製品のスマホケースの厚みや形状を設計する。',
      icon: Laptop,
      color: 'border-l-blue-500 text-blue-500',
      badge: '設計'
    },
    {
      title: '2. CAM (コンピュータ支援製造)',
      desc: 'CADで作成した設計データを、工作機械が理解できる「加工用のプログラム（NCデータ）」に自動変換するシステム。',
      example: '例：スマホケースの3Dデータを、削り出しロボットの刃物の動きに変換する。',
      icon: Settings,
      color: 'border-l-indigo-500 text-indigo-500',
      badge: '加工データ化'
    },
    {
      title: '3. FA (工場自動化 / 工作機械)',
      desc: 'CAMで作られたプログラムに基づき、実際の産業用ロボットや工作機械（マシニングセンタなど）を制御して自動で製造するシステム。',
      example: '例：金属削り出し機や3Dプリンタが、プログラム通りにケースを削り出す。',
      icon: Cpu,
      color: 'border-l-amber-500 text-amber-500',
      badge: '自動生産'
    },
    {
      title: '4. CAT (コンピュータ支援検査)',
      desc: '製造された製品が、設計図（CADデータ）通りに作られているかを、センサーやカメラで自動測定・検査するシステム。',
      example: '例：できあがったスマホケースの厚みをレーザーで計測し、不良品がないか確認する。',
      icon: ClipboardCheck,
      color: 'border-l-emerald-500 text-emerald-500',
      badge: '検査'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Engineering Flow
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          設計から検査までのデジタル製造連携
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          CAD・CAM・FA・CATがデータで繋がることにより、効率的な大量生産と高品質な製品作りが実現します。
        </p>
      </div>

      {/* ステップ切り替え */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          const isActive = idx === step;
          return (
            <button
              key={idx}
              onClick={() => setStep(idx)}
              className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                isActive 
                  ? 'bg-slate-800 border-indigo-500 shadow-md shadow-indigo-500/10' 
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs font-bold">{s.title.split(' ')[1]}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* アニメーションエリア */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 flex flex-col justify-center items-center relative overflow-hidden min-h-[220px] border border-slate-800/80">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              {step === 0 && <Laptop className="w-20 h-20 text-blue-400 animate-pulse" />}
              {step === 1 && <Settings className="w-20 h-20 text-indigo-400" />}
              {step === 2 && <Cpu className="w-20 h-20 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />}
              {step === 3 && <ClipboardCheck className="w-20 h-20 text-emerald-400 animate-bounce" />}
              
              <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-lg bg-slate-900 border border-slate-800 mt-5 ${steps[step].color.split(' ')[1]}`}>
                {steps[step].badge}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between p-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div>
                <h4 className="text-base font-bold text-slate-100">{steps[step].title}</h4>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-semibold mt-2">
                  {steps[step].desc}
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-200">
                <span className="text-[9px] text-indigo-400 font-extrabold uppercase tracking-widest block mb-1">
                  現場での具体例
                </span>
                <p className="text-xs md:text-sm font-semibold leading-relaxed text-slate-200">
                  {steps[step].example}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* コントロール */}
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-800/80">
            <button
              onClick={() => setStep((prev) => Math.max(0, prev - 1))}
              disabled={step === 0}
              className={`text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${
                step === 0 ? 'text-slate-600 border border-slate-800 cursor-not-allowed' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              戻る
            </button>
            <button
              onClick={() => setStep((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={step === steps.length - 1}
              className={`text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1 ${
                step === steps.length - 1 ? 'text-slate-600 border border-slate-800 cursor-not-allowed' : 'text-white bg-indigo-600 hover:bg-indigo-500'
              }`}
            >
              進む <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 2. 生産管理の計算問題（ProductionCalcDiagram）
// ==========================================
export const ProductionCalcDiagram: React.FC = () => {
  const [inputResources, setInputResources] = useState<number>(5); // 投入資源 (人日)
  const [outputItems, setOutputItems] = useState<number>(50); // 生産量 (個)
  const [kanbanStage, setKanbanStage] = useState<number>(0);

  // 生産性の計算：アウトプット ÷ インプット
  const productivity = (outputItems / inputResources).toFixed(1);

  const handleKanbanTrigger = () => {
    setKanbanStage(1);
    setTimeout(() => setKanbanStage(2), 1000);
    setTimeout(() => setKanbanStage(3), 2000);
    setTimeout(() => setKanbanStage(0), 3000);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Productivity Calculator
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          生産性の計算とかんばん方式
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          生産効率を測る「生産性の計算」と、在庫を最小限に抑える「かんばん方式」の2つの仕組みを理解しましょう。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* 左側：生産性計算機 */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-5">
          <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-800 pb-2">
            <Calculator className="w-4 h-4" /> 生産性シミュレータ
          </h4>

          {/* インプット調節 */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-300">
              <span className="flex items-center gap-1"><Sliders className="w-3.5 h-3.5 text-blue-400" /> 投入資源（インプット）</span>
              <span className="text-blue-400">{inputResources} 人日</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="10" 
              value={inputResources}
              onChange={(e) => setInputResources(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          {/* アウトプット調節 */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-300">
              <span className="flex items-center gap-1"><Sliders className="w-3.5 h-3.5 text-emerald-400" /> 生産量（アウトプット）</span>
              <span className="text-emerald-400">{outputItems} 個</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="100" 
              step="5"
              value={outputItems}
              onChange={(e) => setOutputItems(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          {/* 計算結果表示 */}
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800/80 text-center">
            <span className="text-[10px] text-indigo-400 font-extrabold uppercase tracking-widest block mb-1">
              生産性の計算（公式：生産量 ÷ 投入資源）
            </span>
            <div className="text-2xl font-black text-slate-50 flex items-center justify-center gap-2 mt-1">
              <span className="text-slate-400">{outputItems}個</span>
              <span className="text-slate-500">÷</span>
              <span className="text-slate-400">{inputResources}人</span>
              <span className="text-slate-500">=</span>
              <span className="text-indigo-400 font-extrabold">{productivity}</span>
              <span className="text-xs text-slate-400 font-semibold">(個/人日)</span>
            </div>
            <p className="text-[10px] text-slate-400 font-bold mt-2">
              ※生産性が高いほど、少ない人数や時間で多くの製品を効率よく作ったことを意味します。
            </p>
          </div>
        </div>

        {/* 右側：かんばん方式循環 */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[290px]">
          <div>
            <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-4">
              <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <RefreshCw className="w-4 h-4" /> かんばん方式（JIT）サイクル
              </h4>
              <button
                onClick={handleKanbanTrigger}
                disabled={kanbanStage !== 0}
                className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-600 disabled:border-slate-900 border border-slate-800 text-white font-bold text-[10px] py-1 px-3 rounded-lg transition-all cursor-pointer flex items-center gap-1"
              >
                <Play className="w-3 h-3" /> シミュレート
              </button>
            </div>
            
            {/* かんばんイラスト */}
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-900 relative flex items-center justify-around h-28 overflow-hidden">
              <div className="text-center relative">
                <div className="w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center font-bold text-xs text-slate-300">
                  前工程
                </div>
                <span className="text-[9px] text-slate-500 font-bold mt-1.5 block">部品を作る</span>
              </div>

              {/* 移動ライン */}
              <div className="flex-1 relative mx-2 h-1 border-t border-dashed border-slate-800">
                {/* かんばんの移動 (右から左) */}
                {kanbanStage === 1 && (
                  <motion.div
                    className="absolute bg-amber-500 text-slate-950 text-[7px] font-extrabold px-1.5 py-0.5 rounded-sm -top-3.5 shadow-md"
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    かんばん
                  </motion.div>
                )}
                {/* 部品の移動 (左から右) */}
                {kanbanStage === 2 && (
                  <motion.div
                    className="absolute bg-blue-500 text-white text-[7px] font-extrabold px-1.5 py-0.5 rounded-sm -top-3.5 shadow-md"
                    initial={{ x: 0 }}
                    animate={{ x: 100 }}
                    transition={{ duration: 1 }}
                  >
                    部品
                  </motion.div>
                )}
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center font-bold text-xs text-slate-300">
                  後工程
                </div>
                <span className="text-[9px] text-slate-500 font-bold mt-1.5 block">組み立てる</span>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-slate-900/60 border border-slate-900 rounded-xl">
            <p className="text-[10px] md:text-xs text-slate-300 leading-relaxed font-semibold">
              {kanbanStage === 0 && '「シミュレート」ボタンを押すと、後工程が部品を引き取りに行く様子を体験できます。'}
              {kanbanStage === 1 && '【ステップ1】後工程が部品を使い切ると、前工程へ「かんばん（発注指示カード）」を戻します。'}
              {kanbanStage === 2 && '【ステップ2】前工程は、戻ってきた「かんばん」に書かれた数だけ部品を生産・搬送します。'}
              {kanbanStage === 3 && '【完了】必要な時に必要な分だけが作られ、余分な在庫が一切たまらないサイクルが完成します。'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 3. e-ビジネス（EBusinessTypesDiagram）
// ==========================================
export const EBusinessTypesDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'b2b' | 'b2c' | 'c2c'>('b2c');
  const [hoveredTail, setHoveredTail] = useState<boolean>(false);

  const data = {
    b2b: {
      title: 'BtoB (Business to Business)',
      actor: '企業 ➜ 企業',
      desc: '部品メーカーが組み立て会社に材料を売ったり、卸問屋が小売店に売るような、企業同士の電子取引取引。',
      example: '例：自動車部品メーカーが、オンラインの電子調達システムを通じて完成車メーカーへ金属部品を納入する。'
    },
    b2c: {
      title: 'BtoC (Business to Consumer)',
      actor: '企業 ➜ 一般消費者',
      desc: 'ECサイトやオンラインショップなど、企業が一般消費者を相手に直接商品を販売する取引。',
      example: '例：一般の利用者が、通販サイト（Amazonなど）で日用品を購入する。'
    },
    c2c: {
      title: 'CtoC (Consumer to Consumer)',
      actor: '一般消費者 ➜ 一般消費者',
      desc: 'フリーマーケットアプリやオークションサイトのように、消費者同士で直接物品やサービスを取引する関係。',
      example: '例：使わなくなった子供服を、個人売買アプリ（メルカリなど）に出品し、別の個人へ販売する。'
    }
  };

  const current = data[activeTab];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          E-Business Matrix & Long Tail
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          電子商取引の分類とロングテール現象
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          ビジネスモデルの「アクター（主体の組み合わせ）」と、ネット通販の特徴である「ロングテール」を可視化します。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* 左側：EC分類マトリクス */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-4">
          <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">
            アクターによる取引関係の分類
          </h4>
          
          <div className="flex gap-2">
            {(['b2b', 'b2c', 'c2c'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 p-2 rounded-xl border text-center font-bold text-[10px] md:text-xs transition-all cursor-pointer ${
                  activeTab === key
                    ? 'bg-slate-800 border-indigo-500 text-indigo-400 shadow-sm'
                    : 'bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800'
                }`}
              >
                {key.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-900 space-y-2.5">
            <div className="flex items-center justify-between">
              <h5 className="text-xs md:text-sm font-extrabold text-slate-100">{current.title}</h5>
              <span className="text-[10px] text-indigo-400 font-bold bg-slate-950 border border-slate-800/80 px-2 py-0.5 rounded-lg">
                {current.actor}
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-semibold">{current.desc}</p>
            <p className="text-xs text-indigo-300 bg-indigo-950/20 p-2.5 rounded-lg border border-indigo-950 font-bold">
              {current.example}
            </p>
          </div>
        </div>

        {/* 右側：ロングテールグラフ */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[295px]">
          <div>
            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2 mb-4">
              ロングテール（恐竜のしっぽ）の可視化
            </h4>

            {/* SVG グラフ */}
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-900 flex flex-col items-center justify-center relative">
              <svg className="w-full h-24 max-w-[280px]" viewBox="0 0 100 40">
                {/* 軸 */}
                <line x1="5" y1="5" x2="5" y2="35" stroke="#475569" strokeWidth="0.8" />
                <line x1="5" y1="35" x2="95" y2="35" stroke="#475569" strokeWidth="0.8" />
                
                {/* ヘッド (売れ筋) の塗りつぶし */}
                <path d="M 5,8 L 15,10 L 15,35 L 5,35 Z" fill="#3b82f6" fillOpacity="0.4" />
                
                {/* テール (ニッチ) の塗りつぶし */}
                <path d="M 15,10 C 30,22 50,30 95,32 L 95,35 L 15,35 Z" 
                  fill={hoveredTail ? '#8b5cf6' : '#64748b'} 
                  fillOpacity="0.4" 
                  className="transition-colors duration-300"
                />

                {/* 曲線 */}
                <path d="M 5,8 Q 20,20 95,32" fill="transparent" stroke="#38bdf8" strokeWidth="1.2" />
                
                {/* ラベル */}
                <text x="7" y="25" fontSize="3" fill="#93c5fd" fontWeight="bold">売れ筋 (ヘッド)</text>
                <text x="35" y="32" fontSize="3" fill="#cbd5e1" fontWeight="bold">
                  {hoveredTail ? 'ニッチ商品 (テール)' : 'ニッチ商品 (ホバーで詳細)'}
                </text>
              </svg>

              {/* 擬似ホバーセンシティブエリア */}
              <div 
                className="absolute right-4 bottom-4 w-[60%] h-[60%] z-20 cursor-pointer"
                onMouseEnter={() => setHoveredTail(true)}
                onMouseLeave={() => setHoveredTail(false)}
              />
            </div>
          </div>

          <div className="mt-4 p-3 bg-slate-900/60 border border-slate-900 rounded-xl">
            <p className="text-xs text-slate-300 leading-relaxed font-semibold">
              {hoveredTail 
                ? '【テール（しっぽ部分）】オンライン店舗では無限の棚スペースが利用可能なため、年間で数個しか売れない極めてニッチな商品群の売上合計が、売れ筋商品の売上を上回ることを示します。' 
                : 'グラフの右側の「しっぽ（テール）」の部分にマウスをホバー、または指で触れると、ロングテール現象の仕組みを詳しく解説します。'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 4. IoTサイクル（IoTCycleDiagram）
// ==========================================
export const IoTCycleDiagram: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const loop = [
    {
      title: '① センサー (情報の感知)',
      desc: '周辺環境の状態を検知し、デジタルデータに変換します。',
      example: '例：部屋に設置された温度センサーが「室温が28度を超えた」ことを検知。',
      icon: Thermometer,
      color: 'bg-red-500/20 text-red-400 border-red-500/30'
    },
    {
      title: '② ネットワーク (データの送信)',
      desc: 'ゲートウェイ（中継機）やWi-Fi回線を通り、データを送信します。',
      example: '例：室温「28度」の測定データが、Wi-Fi回線を通じてインターネット経由で送信される。',
      icon: Wifi,
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    },
    {
      title: '③ クラウド・サーバー (分析・判断)',
      desc: '蓄積された設定やAIがデータを分析し、動作命令を決定します。',
      example: '例：クラウドサーバーが「設定温度より高いため、冷房をONにする」という制御命令を出す。',
      icon: Cloud,
      color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
    },
    {
      title: '④ アクチュエータ (実際の動作)',
      desc: '受信した制御命令を受けて、モーターや機器などの物理機構を動かします。',
      example: '例：エアコンのファンモーターが駆動（アクチュエート）し、冷風が吹き出し室温を下げる。',
      icon: Wind,
      color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
    }
  ];

  const handleStartLoop = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setStep(0);
    
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev === 3) {
          clearInterval(interval);
          setIsPlaying(false);
          return 3;
        }
        return prev + 1;
      });
    }, 2000);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
            IoT Feedback Loop
          </span>
          <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            IoTと組込みシステムの4つの制御サイクル
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
            センサーでの計測から、ネットワークを経由したクラウドの判断、アクチュエータによる実動作までのループ。
          </p>
        </div>

        {/* スタートボタン */}
        <button
          onClick={handleStartLoop}
          disabled={isPlaying}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-600 disabled:border-slate-900 border border-slate-800 text-white font-bold text-xs md:text-sm py-2.5 px-5 rounded-2xl shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 self-start md:self-auto"
        >
          <Play className="w-4 h-4" /> Loopを動かす
        </button>
      </div>

      {/* 4つの制御ブロック (円状、または並びで表現) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 items-stretch">
        {loop.map((item, idx) => {
          const Icon = item.icon;
          const isActive = idx === step;
          return (
            <div
              key={idx}
              className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                isActive 
                  ? 'bg-slate-800 border-indigo-500 shadow-md shadow-indigo-500/15 scale-102 ring-1 ring-indigo-500/30' 
                  : isPlaying 
                    ? 'bg-slate-950/40 border-slate-900 text-slate-600'
                    : 'bg-slate-950 border-slate-800/80 text-slate-300'
              }`}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`text-[8px] font-extrabold px-1.5 py-0.5 rounded-md ${
                    isActive ? item.color.split(' ')[0] + ' ' + item.color.split(' ')[1] : 'bg-slate-900 text-slate-500'
                  }`}>
                    {item.title.split(' ')[1]}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? item.color.split(' ')[1] : 'text-slate-500'}`} />
                </div>
                <h5 className="text-[11px] font-extrabold">{item.title}</h5>
              </div>
            </div>
          );
        })}
      </div>

      {/* 実動作詳細解説 */}
      <div className="p-5 bg-slate-950 border border-slate-800/90 rounded-2xl min-h-[110px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="space-y-2 w-full text-left"
          >
            <div className="flex items-center gap-1.5 text-xs text-indigo-400 font-extrabold uppercase tracking-widest">
              <Play className="w-3.5 h-3.5" /> 室温管理スマートエアコンの挙動
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-semibold">
              {loop[step].example}
            </p>
            <p className="text-[10px] text-slate-400 font-bold">
              技術解説：{loop[step].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
