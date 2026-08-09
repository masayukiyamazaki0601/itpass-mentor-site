import React from 'react';
import { 
  Layers, 
  Cpu, 
  Cloud, 
  Server, 
  Lock, 
  CheckCircle,
  FileText,
  UserCheck,
  AlertTriangle,
  ArrowRight,
  HelpCircle
} from 'lucide-react';

// ==========================================
// 1. EA (Enterprise Architecture) / EALayersDiagram
// ==========================================
export const EALayersDiagram: React.FC = () => {
  const layers = [
    {
      title: '1. ビジネスアーキテクチャ (BA)',
      desc: 'ビジネスの目標、業務プロセス、組織体制を定義する階層。業務の「流れ」を整理します。',
      example: '例：注文受付 ➔ 在庫引き当て ➔ 出荷指示 ➔ 配送という業務プロセス。',
      textColor: 'text-rose-455',
      bgColor: 'bg-rose-950/15',
      borderColor: 'border-rose-900/60'
    },
    {
      title: '2. データアーキテクチャ (DA)',
      desc: '業務に必要なデータの内容、データの関連性、データの管理方法を定義する階層。情報の「持ち方」を整理します。',
      example: '例：顧客ID、商品コード、注文履歴などのデータベース設計（ER図など）。',
      textColor: 'text-blue-400',
      bgColor: 'bg-blue-950/15',
      borderColor: 'border-blue-900/60'
    },
    {
      title: '3. アプリケーションアーキテクチャ (AA)',
      desc: '業務を支えるシステムやソフトウェアの構成、データの処理方法を定義する階層。アプリの「役割」を整理します。',
      example: '例：販売管理システム、在庫管理アプリ、顧客管理（CRM）システム間の連携。',
      textColor: 'text-indigo-400',
      bgColor: 'bg-indigo-950/15',
      borderColor: 'border-indigo-900/60'
    },
    {
      title: '4. テクノロジアーキテクチャ (TA)',
      desc: 'システムを動かすためのハードウェア、OS、ネットワーク、通信インフラを定義する階層。インフラの「土台」を整理します。',
      example: '例：クラウドサーバー（AWSなど）、社内のWi-Fi、データベースサーバーのOS。',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-950/15',
      borderColor: 'border-emerald-900/60'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Framework
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          EA（全体最適）の4層構造とAs-Is/To-Be
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          企業全体を最適化するための4つの設計階層と、移行管理（現状から理想へ）のコンセプト図です。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* 左：4つの設計階層 */}
        <div className="space-y-4">
          {layers.map((layer, idx) => (
            <div 
              key={idx} 
              className={`p-4 rounded-xl border ${layer.borderColor} ${layer.bgColor} space-y-1.5`}
            >
              <h4 className={`text-xs font-black ${layer.textColor}`}>{layer.title}</h4>
              <p className="text-[11px] text-slate-350 leading-relaxed font-semibold">
                {layer.desc}
              </p>
              <div className="bg-slate-950/60 p-2 rounded text-[10px] text-slate-300 font-bold border border-slate-900">
                {layer.example}
              </div>
            </div>
          ))}
        </div>

        {/* 右：現状と理想（As-Is / To-Be）の対比 */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-5">
          <div>
            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2 mb-3">
              EAにおける移行管理コンセプト
            </h4>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold">
              EAでは、現状の業務やシステムを分析した図を「As-Is（アズイズ）モデル」、将来のあるべき理想の姿を描いた図を「To-Be（トゥービー）モデル」と呼びます。この2つのギャップを埋める計画を立てて改革を進めます。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-905 p-3.5 rounded-xl border border-rose-950/60 text-center space-y-2">
              <span className="text-[10px] bg-rose-500/20 text-rose-400 border border-rose-900/60 font-black px-2 py-0.5 rounded-md">
                As-Is (現状)
              </span>
              <p className="text-[10px] text-slate-400 font-bold leading-normal">
                部署ごとに異なるシステムを使用し、手作業でデータを繋ぐ非効率な状態。
              </p>
            </div>
            <div className="bg-slate-905 p-3.5 rounded-xl border border-emerald-950/60 text-center space-y-2">
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-900/60 font-black px-2 py-0.5 rounded-md">
                To-Be (あるべき姿)
              </span>
              <p className="text-[10px] text-slate-400 font-bold leading-normal">
                4層のデータや機能が美しく統合され、業務がシームレスに自動連携する状態。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 2. DFD (Data Flow Diagram) / DFDFlowDiagram
// ==========================================
export const DFDFlowDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Flow
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          DFDによるデータの流れの可視化
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          処理手順や処理時間ではなく、データが「どこから入り」「どう処理され」「どこに蓄積・出力されるか」の構造のみを示した図です。
        </p>
      </div>

      {/* DFD図本体 */}
      <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-5">
        <div className="flex flex-col md:flex-row items-center justify-around gap-4 p-4 bg-slate-900/40 rounded-xl border border-slate-850">
          {/* 顧客 */}
          <div className="text-center">
            <div className="w-18 h-10 bg-slate-950 border border-slate-800 rounded flex items-center justify-center font-bold text-xs">
              顧客
            </div>
            <span className="text-[9px] text-slate-500 font-bold mt-1 block">外部 (源泉・吸収)</span>
          </div>

          <div className="text-xs text-slate-500 font-bold font-mono">注文データ ➔</div>

          {/* 注文受付処理 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-950 border-2 border-indigo-500 rounded-full flex flex-col items-center justify-center font-bold text-xs text-indigo-300">
              <span>注文受付</span>
              <span className="text-[8px] text-slate-500">処理</span>
            </div>
          </div>

          <div className="text-xs text-slate-500 font-bold font-mono">
            <div>格納 ➔ 〓 注文データ 〓</div>
            <div>発送データ ➔</div>
          </div>

          {/* 発送指示処理 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-950 border-2 border-emerald-500 rounded-full flex flex-col items-center justify-center font-bold text-xs text-emerald-300">
              <span>発送指示</span>
              <span className="text-[8px] text-slate-500">処理</span>
            </div>
          </div>

          <div className="text-xs text-slate-500 font-bold font-mono">発送命令 ➔</div>

          {/* 倉庫 */}
          <div className="text-center">
            <div className="w-18 h-10 bg-slate-950 border border-slate-800 rounded flex items-center justify-center font-bold text-xs">
              倉庫
            </div>
            <span className="text-[9px] text-slate-500 font-bold mt-1 block">外部 (源泉・吸収)</span>
          </div>
        </div>

        {/* 記号凡例と説明 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs pt-2 border-t border-slate-850">
          <div>
            <span className="font-bold text-slate-350 block mb-0.5">① 外部 (□)</span>
            <span className="text-[10px] text-slate-450 leading-relaxed">データの発生源（源泉）や最終的な出力先（吸収）。例：顧客、倉庫。</span>
          </div>
          <div>
            <span className="font-bold text-indigo-400 block mb-0.5">② 処理 (○)</span>
            <span className="text-[10px] text-slate-450 leading-relaxed">入力データを受け取って加工・変換し出力するプロセス。例：注文受付。</span>
          </div>
          <div>
            <span className="font-bold text-slate-350 block mb-0.5">③ データストア (〓)</span>
            <span className="text-[10px] text-slate-450 leading-relaxed">データが一時的、あるいは恒久的に保存されるファイルやDB。</span>
          </div>
          <div>
            <span className="font-bold text-slate-350 block mb-0.5">④ データフロー (➔)</span>
            <span className="text-[10px] text-slate-450 leading-relaxed">データが移動する方向を示した矢印。矢印の上にはデータ名を記載。</span>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 3. SaaS / PaaS / IaaS / CloudServicesDiagram
// ==========================================
export const CloudServicesDiagram: React.FC = () => {
  const categories = [
    {
      name: 'SaaS',
      fullName: 'Software as a Service',
      desc: 'インターネット経由で「アプリケーションソフトウェア」そのものを提供する形態。',
      example: '例：Gmail, Googleドライブ, Zoom, Salesforce',
      cloudPercent: 'アプリケーション ➔ 物理インフラまですべて事業者提供 ★',
      borderColor: 'border-indigo-900/60',
      textColor: 'text-indigo-400',
      bgColor: 'bg-indigo-950/15'
    },
    {
      name: 'PaaS',
      fullName: 'Platform as a Service',
      desc: 'アプリケーションが動作するための「OS、ミドルウェア、開発・実行環境」を提供する形態。',
      example: '例：Heroku, Google App Engine',
      cloudPercent: 'OS ➔ 物理インフラは事業者提供。アプリ・データは利用者が管理 ★',
      borderColor: 'border-blue-900/60',
      textColor: 'text-blue-400',
      bgColor: 'bg-blue-950/15'
    },
    {
      name: 'IaaS',
      fullName: 'Infrastructure as a Service',
      desc: 'ハードウェア仮想化やネットワーク回線などの「サーバーインフラ物理基盤」のみを提供する形態。',
      example: '例：Amazon EC2, Google Compute Engine',
      cloudPercent: '物理サーバー・インフラのみ事業者提供。OS・ミドルウェア・アプリは利用者が管理 ★',
      borderColor: 'border-emerald-900/60',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-950/15'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Stack
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          クラウド（SaaS/PaaS/IaaS）の管理責任範囲
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          クラウド事業者が提供するレイヤー（範囲）と、利用者が自身で管理・構築するレイヤーの境界線対比です。
        </p>
      </div>

      <div className="space-y-4">
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            className={`p-4.5 rounded-xl border ${cat.borderColor} ${cat.bgColor} grid grid-cols-1 lg:grid-cols-12 gap-4 items-center`}
          >
            <div className="lg:col-span-3">
              <span className={`text-base font-black ${cat.textColor}`}>{cat.name}</span>
              <span className="text-[9px] text-slate-500 font-bold block leading-none">{cat.fullName}</span>
            </div>
            <div className="lg:col-span-5 text-xs text-slate-350 leading-relaxed font-semibold">
              {cat.desc}
              <div className="text-[10px] text-slate-500 font-bold mt-1">{cat.example}</div>
            </div>
            <div className="lg:col-span-4 bg-slate-950/80 p-3 rounded-lg border border-slate-900 text-[10px] font-bold text-center text-slate-200">
              <span className="text-[8px] text-slate-500 font-bold block mb-1">事業者と利用者の境界線</span>
              {cat.cloudPercent}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// ==========================================
// 4. TCOの氷山モデル (TCOIcebergDiagram)
// ==========================================
export const TCOIcebergDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Analysis
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          TCO（総保有コスト）の氷山モデル
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          ITシステムの総コスト（TCO）は、見えやすい初期費用だけでなく、見えにくい運用・管理費用が大部分を占めます。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* 左：氷山イラスト */}
        <div className="lg:col-span-6 bg-slate-950/80 p-4 rounded-2xl border border-slate-800 flex justify-center">
          <svg className="w-full h-56 max-w-[250px]" viewBox="0 0 100 100">
            {/* 海面 */}
            <line x1="5" y1="35" x2="95" y2="35" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="2" />
            <text x="80" y="32" fontSize="3" fill="#38bdf8" fontWeight="bold">海面</text>

            {/* 氷山の上部 (初期費用) */}
            <path d="M 50,8 L 70,35 L 30,35 Z" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="0.8" />
            {/* 氷山の下部 (維持管理) */}
            <path d="M 30,35 L 70,35 L 80,75 L 20,80 Z" fill="#8b5cf6" fillOpacity="0.25" stroke="#8b5cf6" strokeWidth="0.8" />

            <text x="35" y="24" fontSize="4.2" fill="#93c5fd" fontWeight="bold">初期費用 (約20%)</text>
            <text x="28" y="60" fontSize="4.2" fill="#ddd6fe" fontWeight="bold">運用・保守費用 (約80%)</text>
          </svg>
        </div>

        {/* 右：コスト内訳 */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1.5">
            <span className="text-[10px] bg-blue-500/20 text-blue-400 border border-blue-900/60 font-black px-2 py-0.5 rounded">
              初期費用（イニシャルコスト）: 約20%
            </span>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold">
              ハードウェア（PC、サーバー）の購入費、パッケージソフトのライセンス購入費、初期導入テストやカスタマイズ開発費など。
            </p>
          </div>

          <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1.5">
            <span className="text-[10px] bg-purple-500/20 text-purple-400 border border-purple-900/60 font-black px-2 py-0.5 rounded">
              運用・維持管理（ランニングコスト）: 約80%
            </span>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold">
              トラブル対応やメンテナンス保守費、電気代・回線使用料、バージョンアップ費、ヘルプデスク運営やユーザー向け操作研修費など。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 5. 調達プロセス (RFIRFPFlowDiagram)
// ==========================================
export const RFIRFPFlowDiagram: React.FC = () => {
  const steps = [
    {
      title: '① NDA (秘密保持契約) の締結',
      sender: '発注側 ➜ ベンダー',
      desc: 'お互いの業務上の秘密情報を社外へ漏らさないよう、法的に取り決める契約。以降の具体的な要件相談前に必ず締結します。',
      icon: Lock,
      borderColor: 'border-blue-900/60',
      textColor: 'text-blue-400',
      bgColor: 'bg-blue-950/15'
    },
    {
      title: '② RFI (情報提供依頼書) の提示',
      sender: '発注側 ➜ ベンダー',
      desc: '「検討中のシステムについて、あなたの会社の製品仕様や過去の実績を教えてください」と、カタログ的な情報を求める資料。',
      icon: FileText,
      borderColor: 'border-indigo-900/60',
      textColor: 'text-indigo-400',
      bgColor: 'bg-indigo-950/15'
    },
    {
      title: '③ RFP (提案依頼書) の発行',
      sender: '発注側 ➜ ベンダー',
      desc: '「予算・期間・必要な機能仕様」を具体的に提示し、「これに沿ったシステムの開発提案と、正式な見積書をください」と依頼する資料。',
      icon: FileText,
      borderColor: 'border-amber-900/60',
      textColor: 'text-amber-400',
      bgColor: 'bg-amber-950/15'
    },
    {
      title: '④ 提案書・見積書の回収',
      sender: 'ベンダー ➜ 発注側',
      desc: 'RFPを受けたベンダーが、自社の開発体制・スケジュール・具体的な構成案と、正式な見積額を記載して提案します。',
      icon: UserCheck,
      borderColor: 'border-emerald-900/60',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-950/15'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Process
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          情報システム調達（NDA・RFI・RFP）の流れ
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          発注企業がシステム調達（ベンダー決定）を行う際に、順番に取り交わす各種文書と役割のフローです。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div 
              key={idx} 
              className={`p-4 rounded-2xl border ${step.borderColor} ${step.bgColor} flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`text-[9px] font-black uppercase tracking-wider ${step.textColor}`}>
                    STEP 0{idx + 1}
                  </span>
                  <div className={`p-1.5 bg-slate-900 border ${step.borderColor} ${step.textColor} rounded-lg`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-xs font-extrabold text-slate-100">{step.title}</h4>
                <p className="text-[11px] text-slate-355 leading-relaxed font-semibold">
                  {step.desc}
                </p>
              </div>

              <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-850 text-center">
                <span className="text-[8px] text-slate-500 font-bold block mb-0.5">ドキュメントの方向</span>
                <span className="text-[10px] font-bold text-slate-300">{step.sender}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
