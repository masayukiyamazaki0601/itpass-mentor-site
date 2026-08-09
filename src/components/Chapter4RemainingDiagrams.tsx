import React from 'react';
import { 
  Laptop, 
  Cpu, 
  Settings, 
  ClipboardCheck, 
  ArrowRight, 
  RefreshCw, 
  Building, 
  Calculator,
  Wifi,
  Cloud,
  Thermometer,
  Wind
} from 'lucide-react';

// ==========================================
// 1. CAD/CAM/FA/CAT (CADCAMFlowDiagram)
// ==========================================
export const CADCAMFlowDiagram: React.FC = () => {
  const steps = [
    {
      title: '1. CAD (コンピュータ支援設計)',
      desc: 'コンピュータを使って製品の設計図を作成するシステム。3Dモデルを作成し、強度計算や体積の測定なども画面上で行えます。',
      example: '例：3Dグラフィックソフトで、新製品のスマホケースの厚みや形状を設計する。',
      icon: Laptop,
      borderColor: 'border-blue-900/60',
      textColor: 'text-blue-400',
      bgColor: 'bg-blue-950/15',
      badge: '設計'
    },
    {
      title: '2. CAM (コンピュータ支援製造)',
      desc: 'CADで作成した設計データを、工作機械が理解できる「加工用のプログラム（NCデータ）」に自動変換するシステム。',
      example: '例：スマホケースの3Dデータを、削り出しロボットの刃物の動きに変換する。',
      icon: Settings,
      borderColor: 'border-indigo-900/60',
      textColor: 'text-indigo-400',
      bgColor: 'bg-indigo-950/15',
      badge: '加工データ化'
    },
    {
      title: '3. FA (工場自動化 / 工作機械)',
      desc: 'CAMで作られたプログラムに基づき、実際の産業用ロボットや工作機械（マシニングセンタなど）を制御して自動で製造するシステム。',
      example: '例：金属削り出し機や3Dプリンタが、プログラム通りにケースを削り出す。',
      icon: Cpu,
      borderColor: 'border-amber-900/60',
      textColor: 'text-amber-400',
      bgColor: 'bg-amber-950/15',
      badge: '自動生産'
    },
    {
      title: '4. CAT (コンピュータ支援検査)',
      desc: '製造された製品が、設計図（CADデータ）通りに作られているかを、センサーやカメラで自動測定・検査するシステム。',
      example: '例：できあがったスマホケースの厚みをレーザーで計測し、不良品がないか確認する。',
      icon: ClipboardCheck,
      borderColor: 'border-emerald-900/60',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-950/15',
      badge: '検査'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Flow
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          設計から検査までのデジタル製造連携
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          CAD・CAM・FA・CATがデータで繋がることにより、効率的な大量生産と高品質な製品作りが実現します。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div 
              key={idx} 
              className={`p-4.5 rounded-2xl border ${step.borderColor} ${step.bgColor} flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border ${step.borderColor} ${step.textColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded bg-slate-900 ${step.textColor}`}>
                    {step.badge}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-100">{step.title}</h4>
                </div>
                <p className="text-[11px] text-slate-350 leading-relaxed font-semibold">
                  {step.desc}
                </p>
              </div>

              <div className="bg-slate-950/90 p-3 rounded-lg border border-slate-850">
                <p className="text-[8px] text-indigo-400 font-extrabold uppercase tracking-wider mb-0.5">具体例</p>
                <p className="text-[10px] font-bold text-slate-300 leading-tight">{step.example}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


// ==========================================
// 2. 生産管理の計算問題（ProductionCalcDiagram）
// ==========================================
export const ProductionCalcDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Dashboard
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          生産性の計算とかんばん方式
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          生産効率を測る「生産性の計算」と、在庫を最小限に抑える「かんばん方式」の2つの仕組みを整理した図です。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* 左側：生産性の計算 */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-800 pb-2">
              <Calculator className="w-4 h-4 text-blue-400" /> 生産性の求め方
            </h4>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold">
              生産性とは、「投入した資源（労働時間、人数など）に対して、どれだけの成果物（生産量、売上など）が得られたか」を表す指標です。
            </p>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl border border-slate-850 text-center my-4 space-y-2">
            <span className="text-[9px] text-indigo-400 font-extrabold tracking-wider block">計算公式</span>
            <div className="text-sm md:text-base font-extrabold text-slate-200">
              生産性 ＝ 生産量（アウトプット） ÷ 投入資源（インプット）
            </div>
            <div className="text-xs text-slate-400 font-medium">
              例：5人日（インプット）で50個（アウトプット）を生産した場合<br/>
              <span className="font-bold text-indigo-400 text-sm">50個 ÷ 5人日 ＝ 10 個/人日</span>
            </div>
          </div>

          <p className="text-[10px] text-slate-450 leading-relaxed">
            ※少ない資源で多くの成果を上げる（＝数値が大きくなる）ほど、「生産性が高い」と評価されます。
          </p>
        </div>

        {/* 右側：かんばん方式 */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-800 pb-2">
              <RefreshCw className="w-4 h-4 text-emerald-400" /> かんばん方式（JIT: ジャストインタイム）
            </h4>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold">
              「必要なものを、必要な時に、必要なだけ」生産・配送することで、余分な在庫を削減する生産管理方式です。
            </p>
          </div>

          <div className="grid grid-cols-5 items-center gap-2 bg-slate-900 p-3.5 rounded-xl border border-slate-850 my-4 text-center">
            <div className="col-span-2 bg-slate-950 p-2.5 rounded border border-slate-800 text-[11px] font-bold text-slate-300">
              前工程<br/>
              <span className="text-[8px] text-slate-500 font-medium">部品を作る</span>
            </div>
            <div className="col-span-1 text-[9px] font-bold text-amber-400 flex flex-col items-center">
              <span>部品 ➔</span>
              <span className="text-slate-500">⮂</span>
              <span>⮀ かんばん</span>
            </div>
            <div className="col-span-2 bg-slate-950 p-2.5 rounded border border-slate-800 text-[11px] font-bold text-slate-300">
              後工程<br/>
              <span className="text-[8px] text-slate-500 font-medium">組み立てる</span>
            </div>
          </div>

          <p className="text-[10px] text-slate-450 leading-relaxed">
            後工程で部品を使い切ると、前工程に「かんばん（指示カード）」が戻され、前工程はその分の部品だけを新しく生産します。これにより不要な仕掛品在庫が溜まりません。
          </p>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 3. e-ビジネス（EBusinessTypesDiagram）
// ==========================================
export const EBusinessTypesDiagram: React.FC = () => {
  const categories = [
    {
      title: 'BtoB (Business to Business)',
      actor: '企業 ➜ 企業',
      desc: '部品メーカーが完成品メーカーに部品を納品するような、企業同士の取引。オンライン調達システムなどが代表例。',
      example: '例：卸売業者向けのB2B専用仕入れECサイト。',
      textColor: 'text-blue-400',
      bgColor: 'bg-blue-950/15',
      borderColor: 'border-blue-900/60'
    },
    {
      title: 'BtoC (Business to Consumer)',
      actor: '企業 ➜ 一般消費者',
      desc: '一般的なネット通販や動画配信サービスなど、企業が一般消費者を相手に直接販売する仕組み。',
      example: '例：Amazonや楽天市場などの通販サイト。',
      textColor: 'text-indigo-400',
      bgColor: 'bg-indigo-950/15',
      borderColor: 'border-indigo-900/60'
    },
    {
      title: 'CtoC (Consumer to Consumer)',
      actor: '一般消費者 ➜ 一般消費者',
      desc: '個人同士で不要な持ち物を売買する取引。フリーマーケットアプリなどが代表例。',
      example: '例：メルカリやヤフオクなどの個人売買サービス。',
      textColor: 'text-purple-400',
      bgColor: 'bg-purple-950/15',
      borderColor: 'border-purple-900/60'
    },
    {
      title: 'GtoC (Government to Consumer)',
      actor: '行政 ➜ 一般消費者',
      desc: '住民票の申請や確定申告のオンライン申請など、行政（政府）と市民との間で行われる手続き。',
      example: '例：マイナポータルからの各種行政手続き。',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-950/15',
      borderColor: 'border-emerald-900/60'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Concept
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          電子商取引の分類とロングテール現象
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          ビジネスのアクター（取引主体）による分類と、ネット通販の特徴であるロングテール現象を解説します。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* 左：アクター分類グリッド */}
        <div className="lg:col-span-7 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-4">
          <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">
            取引主体（アクター）による分類
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                className={`p-3.5 rounded-xl border ${cat.borderColor} ${cat.bgColor} space-y-1.5`}
              >
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] font-black ${cat.textColor}`}>{cat.title}</span>
                  <span className="text-[8px] bg-slate-900 text-slate-400 font-bold px-1.5 py-0.2 rounded border border-slate-850">
                    {cat.actor}
                  </span>
                </div>
                <p className="text-[10px] text-slate-350 leading-relaxed font-semibold">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 右：ロングテール現象 */}
        <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2 mb-4">
              ロングテール（売れ筋とニッチ）の法則
            </h4>
            
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-850 flex flex-col items-center">
              <svg className="w-full h-24 max-w-[280px]" viewBox="0 0 100 40">
                <line x1="5" y1="5" x2="5" y2="35" stroke="#475569" strokeWidth="0.8" />
                <line x1="5" y1="35" x2="95" y2="35" stroke="#475569" strokeWidth="0.8" />
                
                {/* ヘッド (売れ筋) */}
                <path d="M 5,8 L 15,10 L 15,35 L 5,35 Z" fill="#3b82f6" fillOpacity="0.4" />
                {/* テール (ニッチ) */}
                <path d="M 15,10 C 30,22 50,30 95,32 L 95,35 L 15,35 Z" fill="#8b5cf6" fillOpacity="0.3" />

                <path d="M 5,8 Q 20,20 95,32" fill="transparent" stroke="#38bdf8" strokeWidth="1.2" />
                
                <text x="7" y="22" fontSize="2.8" fill="#93c5fd" fontWeight="bold">ヘッド (売れ筋)</text>
                <text x="35" y="32" fontSize="2.8" fill="#c084fc" fontWeight="bold">テール (ニッチ商品群)</text>
              </svg>
            </div>
          </div>

          <p className="text-[10px] text-slate-350 leading-relaxed font-semibold mt-4">
            実店舗では陳列スペースに限界があり「売れ筋」しか置けませんが、ネット通販では無限の品揃え（テール部分）が可能です。この広大なニッチ製品の売上合計が、主力製品の売上を上回る現象を「ロングテール」と呼びます。
          </p>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 4. IoTサイクル（IoTCycleDiagram）
// ==========================================
export const IoTCycleDiagram: React.FC = () => {
  const loop = [
    {
      title: '① センサー (情報の感知)',
      desc: '周辺環境の温度・湿度・映像などの物理的な状態を検知してデジタルデータに変換します。',
      example: '例：部屋の温度センサーが「室温28℃」を計測。',
      icon: Thermometer,
      borderColor: 'border-red-900/60',
      textColor: 'text-red-400',
      bgColor: 'bg-red-950/15'
    },
    {
      title: '② ネットワーク (送信)',
      desc: '変換されたデータをインターネット経由でクラウド（サーバー）へ送信します。',
      example: '例：Wi-Fiを経由してクラウドサーバへデータが送信される。',
      icon: Wifi,
      borderColor: 'border-blue-900/60',
      textColor: 'text-blue-400',
      bgColor: 'bg-blue-950/15'
    },
    {
      title: '③ クラウド・サーバー (分析)',
      desc: '集まった膨大なデータをAIなどで分析し、エアコンなどの機器に対する最適な制御命令を決定します。',
      example: '例：クラウドが「冷房をONにして室温を下げる」と決定。',
      icon: Cloud,
      borderColor: 'border-indigo-900/60',
      textColor: 'text-indigo-400',
      bgColor: 'bg-indigo-950/15'
    },
    {
      title: '④ アクチュエータ (実動作)',
      desc: '送信された制御命令を受けて、モーターやスイッチ等の物理的な制御機構を駆動させます。',
      example: '例：エアコンのファンとコンプレッサーが動き、冷風が出る。',
      icon: Wind,
      borderColor: 'border-emerald-900/60',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-950/15'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Concept
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          IoTと組込みシステムの4つの制御サイクル
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          現実空間（アナログ）から情報を吸い上げてデジタル処理し、再び現実空間へフィードバックする循環モデルです。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loop.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`p-4 rounded-2xl border ${item.borderColor} ${item.bgColor} flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`text-[9px] font-black uppercase tracking-wider ${item.textColor}`}>
                    STAGE 0{idx + 1}
                  </span>
                  <div className={`p-1.5 bg-slate-900 border ${item.borderColor} ${item.textColor} rounded-lg`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h5 className="text-xs font-extrabold text-slate-100">{item.title}</h5>
                <p className="text-[11px] text-slate-350 leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </div>

              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-850">
                <span className="text-[8px] text-slate-500 font-bold block mb-0.5">具体例</span>
                <span className="text-[10px] font-bold text-slate-300 leading-tight">{item.example}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
