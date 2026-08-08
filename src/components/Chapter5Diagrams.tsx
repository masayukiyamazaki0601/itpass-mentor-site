import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Database, 
  Layers, 
  Cpu, 
  Play, 
  RefreshCw, 
  Cloud, 
  Server, 
  Lock, 
  CheckCircle,
  FileText,
  UserCheck,
  TrendingUp,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

// ==========================================
// 1. EA (Enterprise Architecture) / EALayersDiagram
// ==========================================
export const EALayersDiagram: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [isToBe, setIsToBe] = useState<boolean>(false);

  const layers = [
    {
      title: 'ビジネスアーキテクチャ (BA)',
      desc: 'ビジネスの目標、業務プロセス、組織体制を定義する階層。どのような業務を行っているかを整理します。',
      example: '例：お客様から注文を受け、在庫を確認し、発送するという一連の業務フロー。',
      color: 'bg-rose-500/20 text-rose-400 border-rose-500/30'
    },
    {
      title: 'データアーキテクチャ (DA)',
      desc: '業務に必要なデータの内容、データの関連性、データの管理方法を定義する階層。情報の持ち方を整理します。',
      example: '例：顧客情報、商品マスター情報、注文履歴データなどのデータベース構造。',
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    },
    {
      title: 'アプリケーションアーキテクチャ (AA)',
      desc: '業務を支えるシステムやソフトウェアの構成、データの処理方法を定義する階層。アプリの役割を整理します。',
      example: '例：販売管理システム、在庫管理アプリ、顧客管理（CRM）ツールなどの連携。',
      color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
    },
    {
      title: 'テクノロジアーキテクチャ (TA)',
      desc: 'システムを動かすためのハードウェア、OS、ネットワーク、通信インフラを定義する階層。土台となる技術を整理します。',
      example: '例：クラウドサーバー（AWSなど）、社内のWi-Fiネットワーク、データベースサーバーのOS。',
      color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
            EA & Gap Analysis
          </span>
          <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            EA（全体最適）の4層構造とAs-Is/To-Be
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
            全体最適化のための4つのアーキテクチャと、現状（As-Is）から理想（To-Be）への移行を体験します。
          </p>
        </div>

        {/* As-Is/To-Be切り替え */}
        <button
          onClick={() => setIsToBe(!isToBe)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs md:text-sm transition-all border shadow-md cursor-pointer ${
            isToBe
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 border-emerald-500 text-white hover:from-emerald-500 hover:to-teal-500'
              : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <RefreshCw className="w-4 h-4" />
          {isToBe ? '理想状態 (To-Be)：表示中' : '現状から理想へ移行 (To-Be)'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 左側：EAのレイヤー構造・As-Is vs To-Be */}
        <div className="lg:col-span-6 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-center min-h-[300px] relative overflow-hidden">
          <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-800 pb-2 flex items-center justify-between">
            <span>アーキテクチャ階層</span>
            <span className="text-[10px] text-indigo-400 font-bold">{isToBe ? 'To-Be (統合・全体最適)' : 'As-Is (個別最適・バラバラ)'}</span>
          </h4>

          <div className="space-y-3 relative z-10">
            {layers.map((layer, idx) => {
              const isActive = idx === activeLayer;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveLayer(idx)}
                  className={`w-full p-4 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between ${
                    isActive 
                      ? 'bg-slate-800 border-indigo-500 shadow-md shadow-indigo-500/10' 
                      : 'bg-slate-900/60 border-slate-900 text-slate-400 hover:border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${isActive ? layer.color.split(' ')[0] + ' ' + layer.color.split(' ')[1] : 'bg-slate-950 text-slate-600 border border-slate-900'}`}>
                      {idx + 1}
                    </span>
                    <span className="text-xs md:text-sm font-bold">{layer.title.split(' (')[0]}</span>
                  </div>
                  {isToBe ? (
                    <span className="text-[10px] text-emerald-400 font-extrabold flex items-center gap-0.5"><CheckCircle className="w-3 h-3" /> 連携</span>
                  ) : (
                    <span className="text-[10px] text-rose-400 font-extrabold flex items-center gap-0.5"><AlertTriangle className="w-3 h-3" /> 分断</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 右側：詳細解説パネル */}
        <div className="lg:col-span-6 flex flex-col justify-between min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLayer}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div>
                <h4 className="text-base font-bold text-slate-100">{layers[activeLayer].title}</h4>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-semibold mt-2">
                  {layers[activeLayer].desc}
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-200">
                <span className="text-[9px] text-indigo-400 font-extrabold uppercase tracking-widest block mb-1">
                  この階層の具体例
                </span>
                <p className="text-xs md:text-sm font-semibold leading-relaxed text-slate-200">
                  {layers[activeLayer].example}
                </p>
              </div>

              {isToBe ? (
                <div className="bg-emerald-950/20 border border-emerald-900/60 text-emerald-300 p-3 rounded-xl text-xs font-bold">
                  【To-Beの効果】4つの層がデータ・アプリ・インフラレベルで密接に結びつき、業務プロセスが無駄なくシームレスに流れるよう設計されています。
                </div>
              ) : (
                <div className="bg-rose-950/20 border border-rose-900/60 text-rose-300 p-3 rounded-xl text-xs font-bold">
                  【As-Isの課題】部署ごとに異なるソフトを使用していたり、データのやり取りを手作業で行うなど、全体としての連携が取れていない非効率な状態です。
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 2. DFD (Data Flow Diagram) / DFDFlowDiagram
// ==========================================
export const DFDFlowDiagram: React.FC = () => {
  const [dataState, setDataState] = useState<number>(0); // 0: 待機, 1: 注文フロー, 2: DB格納フロー, 3: 発送指示フロー
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const triggerFlow = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDataState(1);
    
    setTimeout(() => setDataState(2), 1200);
    setTimeout(() => setDataState(3), 2400);
    setTimeout(() => {
      setDataState(0);
      setIsAnimating(false);
    }, 3600);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
            DFD Simulation
          </span>
          <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            DFDによるデータの流れの可視化
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
            「時間の流れ」や「処理の手順」ではなく、純粋に「データの流れ（インプットとアウトプット）」だけを整理する図です。
          </p>
        </div>

        {/* シミュレーション開始 */}
        <button
          onClick={triggerFlow}
          disabled={isAnimating}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-600 disabled:border-slate-900 border border-slate-800 text-white font-bold text-xs md:text-sm py-2.5 px-5 rounded-2xl shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 self-start md:self-auto"
        >
          <Play className="w-4 h-4" /> データを流す
        </button>
      </div>

      {/* DFD記号とデータフローのアニメーション */}
      <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-around gap-6 h-56 relative overflow-hidden">
        
        {/* 1. 外部：顧客 */}
        <div className="text-center relative z-10">
          <div className="w-16 h-12 bg-slate-900 border border-slate-700 flex items-center justify-center font-bold text-xs rounded-lg text-slate-300">
            顧客
          </div>
          <span className="text-[9px] text-slate-500 font-bold mt-1.5 block">□ 外部（源泉・吸収）</span>
        </div>

        {/* 顧客 ➜ 注文処理フローのデータ */}
        {dataState === 1 && (
          <motion.div
            className="absolute bg-blue-500 w-3 h-3 rounded-full flex items-center justify-center text-[7px] text-white font-extrabold z-20"
            initial={{ x: -160, y: 0 }}
            animate={{ x: -50, y: 0 }}
            transition={{ duration: 1, ease: 'linear' }}
          >
            D
          </motion.div>
        )}

        {/* 2. プロセス：注文受付処理 */}
        <div className="text-center relative z-10">
          <div className="w-16 h-16 bg-slate-900 border-2 border-indigo-500 rounded-full flex items-center justify-center font-bold text-xs text-indigo-400">
            注文受付
          </div>
          <span className="text-[9px] text-slate-500 font-bold mt-1.5 block">○ 処理（プロセス）</span>
        </div>

        {/* 注文処理 ➜ 注文データストアのデータ */}
        {dataState === 2 && (
          <motion.div
            className="absolute bg-indigo-500 w-3 h-3 rounded-full flex items-center justify-center text-[7px] text-white font-extrabold z-20"
            initial={{ x: -20, y: -20 }}
            animate={{ x: -20, y: 50 }}
            transition={{ duration: 1, ease: 'linear' }}
          >
            D
          </motion.div>
        )}

        {/* 注文処理 ➜ 発送指示プロセスへのデータ */}
        {dataState === 3 && (
          <motion.div
            className="absolute bg-emerald-500 w-3 h-3 rounded-full flex items-center justify-center text-[7px] text-white font-extrabold z-20"
            initial={{ x: 20, y: 0 }}
            animate={{ x: 120, y: 0 }}
            transition={{ duration: 1, ease: 'linear' }}
          >
            D
          </motion.div>
        )}

        {/* 3. データストア：注文データストア */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center z-10">
          <div className="w-24 h-8 bg-slate-900 border-t border-b border-slate-700 flex items-center justify-center font-bold text-xs text-slate-300">
            注文データ
          </div>
          <span className="text-[9px] text-slate-500 font-bold mt-1.5 block">〓 データストア</span>
        </div>

        {/* 4. プロセス：出荷・発送指示 */}
        <div className="text-center relative z-10">
          <div className="w-16 h-16 bg-slate-900 border-2 border-emerald-500 rounded-full flex items-center justify-center font-bold text-xs text-emerald-400">
            発送指示
          </div>
          <span className="text-[9px] text-slate-500 font-bold mt-1.5 block">○ 処理（プロセス）</span>
        </div>

        {/* 5. 外部：倉庫 */}
        <div className="text-center relative z-10">
          <div className="w-16 h-12 bg-slate-900 border border-slate-700 flex items-center justify-center font-bold text-xs rounded-lg text-slate-300">
            倉庫
          </div>
          <span className="text-[9px] text-slate-500 font-bold mt-1.5 block">□ 外部（源泉・吸収）</span>
        </div>

      </div>

      {/* ステップ別解説文 */}
      <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded-xl">
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-semibold">
          {dataState === 0 && '「データを流す」ボタンを押すと、DFDの中で注文データが流れるアニメーションが開始されます。'}
          {dataState === 1 && '【ステップ1】顧客（外部）から、注文受付（プロセス）に向けて「注文情報（データフロー）」が入力されます。'}
          {dataState === 2 && '【ステップ2】注文受付プロセスがデータを受け取り、「注文データ（データストア）」に保存します。'}
          {dataState === 3 && '【ステップ3】注文データに基づき、発送指示プロセスが稼働し、倉庫（外部）へ「発送指示（データフロー）」が送られます。'}
        </p>
      </div>
    </div>
  );
};


// ==========================================
// 3. SaaS / PaaS / IaaS / CloudServicesDiagram
// ==========================================
export const CloudServicesDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'saas' | 'paas' | 'iaas'>('saas');

  const stackLayers = [
    { name: 'アプリケーション (Gmail, 各種ソフトなど)', provider: { saas: 'cloud', paas: 'user', iaas: 'user' } },
    { name: 'データ・コンテンツ', provider: { saas: 'cloud', paas: 'user', iaas: 'user' } },
    { name: '開発環境・実行環境（ランタイム）', provider: { saas: 'cloud', paas: 'cloud', iaas: 'user' } },
    { name: 'ミドルウェア (DBMS, Webサーバなど)', provider: { saas: 'cloud', paas: 'cloud', iaas: 'user' } },
    { name: 'OS (Linux, WindowsServer など)', provider: { saas: 'cloud', paas: 'cloud', iaas: 'user' } },
    { name: 'インフラ・物理層 (サーバー, ストレージ, 回線)', provider: { saas: 'cloud', paas: 'cloud', iaas: 'cloud' } }
  ];

  const info = {
    saas: {
      title: 'SaaS (Software as a Service)',
      desc: 'インターネット経由で「ソフトウェア」そのものを提供する形態。ユーザーはブラウザだけでそのまま使えます。',
      example: '例：Gmail, Googleドライブ, Zoom, Salesforce, 財務会計クラウド など。'
    },
    paas: {
      title: 'PaaS (Platform as a Service)',
      desc: 'アプリの動作に必要な「OSや開発環境（プラットフォーム）」を提供する形態。ユーザーはプログラムを準備するだけで稼働できます。',
      example: '例：Heroku, Google App Engine, AWS Elastic Beanstalk など。'
    },
    iaas: {
      title: 'IaaS (Infrastructure as a Service)',
      desc: 'サーバーコンピュータや回線などの「インフラ・ハードウェア仮想基盤」を提供する形態。OSの選定やミドルウェアの構築は利用者が行います。',
      example: '例：Amazon EC2, Google Compute Engine, Microsoft Azure Virtual Machines など。'
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Cloud Responsibilities
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          クラウド（SaaS/PaaS/IaaS）責任分界スタック
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          クラウド事業者が提供するレイヤーと、利用者が管理するレイヤーの「責任の境界線」を視覚化します。
        </p>
      </div>

      {/* タブ */}
      <div className="flex gap-2.5 mb-8 justify-center">
        {(['saas', 'paas', 'iaas'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-5 py-3 rounded-2xl font-bold text-xs md:text-sm transition-all border cursor-pointer ${
              activeTab === t
                ? 'bg-slate-800 border-indigo-400 text-indigo-400 scale-105 shadow-md shadow-indigo-500/10'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
            }`}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 左側：スタックレイヤー */}
        <div className="lg:col-span-7 space-y-2">
          <div className="flex justify-between text-[10px] text-slate-500 font-extrabold uppercase tracking-widest px-1 mb-2">
            <span>ソフトウェア構成レイヤー</span>
            <span>管理区分</span>
          </div>
          {stackLayers.map((layer, idx) => {
            const isCloud = layer.provider[activeTab] === 'cloud';
            return (
              <div
                key={idx}
                className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                  isCloud
                    ? 'bg-indigo-950/30 border-indigo-800 text-indigo-300'
                    : 'bg-slate-950/80 border-slate-800 text-slate-500'
                }`}
              >
                <span>{layer.name}</span>
                <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded ${isCloud ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 border border-slate-900'}`}>
                  {isCloud ? '事業者提供・管理' : '利用者で構築・管理'}
                </span>
              </div>
            );
          })}
        </div>

        {/* 右側：解説パネル */}
        <div className="lg:col-span-5 flex flex-col justify-between min-h-[290px]">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-lg bg-indigo-950 text-indigo-400 border border-indigo-900">
                {activeTab.toUpperCase()}
              </span>
              <h4 className="text-sm font-extrabold text-slate-100">{info[activeTab].title}</h4>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-semibold">
              {info[activeTab].desc}
            </p>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-200">
              <span className="text-[9px] text-indigo-400 font-extrabold uppercase tracking-widest block mb-1">
                具体的なサービス例
              </span>
              <p className="text-xs md:text-sm font-semibold leading-relaxed text-slate-200">
                {info[activeTab].example}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 4. TCOの氷山モデル (TCOIcebergDiagram)
// ==========================================
export const TCOIcebergDiagram: React.FC = () => {
  const [activeCost, setActiveCost] = useState<'initial' | 'running' | null>(null);

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Total Cost of Ownership
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          TCO（総保有コスト）の氷山モデル
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          ITシステムの総コスト（TCO）は、見えやすい初期費用だけでなく、見えにくい運用・管理費用が大部分を占めます。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* 左側：氷山ビジュアル */}
        <div className="lg:col-span-6 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-center items-center min-h-[300px] relative overflow-hidden">
          <svg className="w-full h-64 max-w-[280px]" viewBox="0 0 100 100">
            {/* 海面 */}
            <line x1="5" y1="35" x2="95" y2="35" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2" />
            <text x="75" y="32" fontSize="3.5" fill="#38bdf8" fontWeight="bold">海面</text>

            {/* 氷山の本体 (海面上の初期費用) */}
            <path
              d="M 50,5 L 70,35 L 30,35 Z"
              fill={activeCost === 'initial' ? '#3b82f6' : '#64748b'}
              fillOpacity="0.4"
              stroke="#3b82f6"
              strokeWidth="0.8"
              className="cursor-pointer transition-all duration-300"
              onClick={() => setActiveCost('initial')}
            />

            {/* 氷山の本体 (海面下の維持費) */}
            <path
              d="M 30,35 L 70,35 L 80,75 L 20,80 Z"
              fill={activeCost === 'running' ? '#8b5cf6' : '#475569'}
              fillOpacity="0.4"
              stroke="#8b5cf6"
              strokeWidth="0.8"
              className="cursor-pointer transition-all duration-300"
              onClick={() => setActiveCost('running')}
            />

            <text x="38" y="24" fontSize="4.5" fill="#93c5fd" fontWeight="bold" className="pointer-events-none">初期費用 (約20%)</text>
            <text x="35" y="58" fontSize="4.5" fill="#ddd6fe" fontWeight="bold" className="pointer-events-none">運用・管理費用 (約80%)</text>
          </svg>
        </div>

        {/* 右側：解説カード */}
        <div className="lg:col-span-6 flex flex-col justify-between min-h-[300px]">
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-100 flex items-center gap-1.5 border-b border-slate-800 pb-2">
              コストの内訳（氷山をクリックしてください）
            </h4>

            {activeCost === 'initial' && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    海面上
                  </span>
                  <h5 className="text-xs md:text-sm font-extrabold text-slate-100">イニシャルコスト（初期費用）</h5>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                  システムを導入する際、最初にかかる見えやすいコストです。
                </p>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-200">
                  <span className="text-[9px] text-blue-400 font-extrabold uppercase tracking-widest block mb-1">
                    主な内訳
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 font-semibold">
                    <li>PCやサーバー本体の購入費用</li>
                    <li>ソフトウェアライセンスの購入費</li>
                    <li>初期セットアップ・システム開発費</li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeCost === 'running' && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30">
                    海面下 (TCOの大半)
                  </span>
                  <h5 className="text-xs md:text-sm font-extrabold text-slate-100">ランニングコスト（維持・運営費用）</h5>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                  システムを稼働し、使い続けるために毎年継続してかかる、見えにくいコストです。
                </p>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-200">
                  <span className="text-[9px] text-purple-400 font-extrabold uppercase tracking-widest block mb-1">
                    主な内訳
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 font-semibold">
                    <li>定期点検やトラブル対応のための保守料</li>
                    <li>サーバーを置く部屋の家賃や電気代</li>
                    <li>セキュリティ更新や利用者の教育・サポート費</li>
                  </ul>
                </div>
              </motion.div>
            )}

            {!activeCost && (
              <p className="text-xs md:text-sm text-slate-400 font-bold text-center pt-10">
                氷山の「初期費用」または「運用・管理費用」の部分をクリックして、コストの詳細内訳を確かめてください。
              </p>
            )}
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
  const [step, setStep] = useState<number>(0);

  const steps = [
    {
      title: '1. NDA (秘密保持契約) の締結',
      sender: '発注元 ➜ ベンダー',
      desc: 'お互いの業務上の秘密情報を社外へ漏らさないよう、法的に取り決める契約。これ以後の詳しい打ち合わせの前に必ず行われます。',
      visualText: 'NDA契約書類の取り交わし',
      icon: Lock,
      color: 'border-l-blue-500 text-blue-500',
      badge: '契約'
    },
    {
      title: '2. RFI (情報提供依頼書) の発行',
      sender: '発注元 ➜ ベンダー',
      desc: '「こういうシステムを検討中ですが、あなたの会社はどんな技術や実績を持っていますか？」と、情報提供を依頼する資料。',
      visualText: 'RFIを発行：ベンダー各社から情報収集',
      icon: FileText,
      color: 'border-l-indigo-500 text-indigo-500',
      badge: '情報提供依頼'
    },
    {
      title: '3. RFP (提案依頼書) の提示',
      sender: '発注元 ➜ ベンダー',
      desc: '「予算・期間・実現したい機能」などの具体的な要件を提示し、「これに沿った具体的なシステム提案と見積もりをください」と正式に依頼する資料。',
      visualText: 'RFPを提示：要件定義書に近い詳細仕様',
      icon: FileText,
      color: 'border-l-amber-500 text-amber-500',
      badge: '提案依頼'
    },
    {
      title: '4. 提案書・見積書の受け取り',
      sender: 'ベンダー ➜ 発注元',
      desc: 'RFPを受けたITベンダーが、自社の開発プランや価格、必要な人員などをまとめた提案資料と、正式な見積書を提示します。',
      visualText: 'ベンダーより提案書と見積書が提出される',
      icon: UserCheck,
      color: 'border-l-emerald-500 text-emerald-500',
      badge: '提案受け取り'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Procurement Pipeline
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          情報システム調達（NDA・RFI・RFP）の流れ
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          発注側と受注（ベンダー）側で取り交わされる書類の種類と、調達までのステップをシミュレートします。
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

      {/* グラフィックエリア */}
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
              {step === 0 && <Lock className="w-20 h-20 text-blue-400 animate-pulse" />}
              {step === 1 && <FileText className="w-20 h-20 text-indigo-400" />}
              {step === 2 && <FileText className="w-20 h-20 text-amber-400" />}
              {step === 3 && <UserCheck className="w-20 h-20 text-emerald-400 animate-bounce" />}
              
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
              <div className="flex justify-between items-center">
                <h4 className="text-base font-bold text-slate-100">{steps[step].title}</h4>
                <span className="text-[10px] text-indigo-400 font-bold bg-slate-950 border border-slate-800/80 px-2 py-0.5 rounded-lg">
                  {steps[step].sender}
                </span>
              </div>

              <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-semibold">
                {steps[step].desc}
              </p>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-200">
                <span className="text-[9px] text-indigo-400 font-extrabold uppercase tracking-widest block mb-1">
                  このステップのポイント
                </span>
                <p className="text-xs md:text-sm font-semibold leading-relaxed text-slate-200">
                  {steps[step].visualText}
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
