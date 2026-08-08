import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  HelpCircle, 
  BatteryCharging, 
  Zap, 
  FileText, 
  Users, 
  ArrowRight, 
  RefreshCw, 
  Sliders, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  Database,
  Building,
  Lock
} from 'lucide-react';

// ==========================================
// 1. ITILライフサイクル (ITILLifecycleDiagram)
// ==========================================
export const ITILLifecycleDiagram: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(0);

  const phases = [
    {
      title: '1. サービス戦略 (Service Strategy)',
      desc: '顧客にどのようなITサービスを提供するか、ビジネス視点で戦略を立てるフェーズ。',
      process: '主要プロセス：財務管理、サービスポートフォリオ管理',
      keyConcept: '「そもそも何をサービスとして提供すべきか」を決定する。'
    },
    {
      title: '2. サービス設計 (Service Design)',
      desc: '戦略に基づき、サービスの機能、セキュリティ、可用性などを具体的に設計するフェーズ。',
      process: '主要プロセス：サービスレベル管理(SLM)、可用性管理、キャパシティ管理',
      keyConcept: '可用性（MTBF/MTTRなど）やSLAの基準値をここで設計する。'
    },
    {
      title: '3. サービス移行 (Service Transition)',
      desc: '新しく設計したサービスを、本番環境へ安全にリリースする準備・構築フェーズ。',
      process: '主要プロセス：変更管理、リリース管理・展開管理、構成管理',
      keyConcept: '本番環境へ安全に変更を適用し、トラブルを起こさないように管理する。'
    },
    {
      title: '4. サービス運用 (Service Operation)',
      desc: 'リリースされたITサービスを、日々の業務で安定して動かし続け、利用者をサポートするフェーズ。',
      process: '主要プロセス：インシデント管理、問題管理、サービスデスク',
      keyConcept: 'ユーザーからの問い合わせ窓口となり、障害を迅速に復旧する。'
    },
    {
      title: '5. 継続的サービス改善 (CSI)',
      desc: '提供しているサービスの品質を測定し、PDCAサイクルで常に改善し続けるフェーズ。',
      process: '主要プロセス：7ステップの改善プロセス',
      keyConcept: 'ライフサイクル全体を包み込み、常により良いサービスへと進化させる。'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          ITIL Service Lifecycle
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          ITILのサービスライフサイクル
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          ITサービスマネジメントの世界的標準であるITILの5つのライフサイクルフェーズ。
        </p>
      </div>

      {/* ナビゲーションボタン */}
      <div className="flex flex-col md:flex-row gap-2 mb-6">
        {phases.map((p, idx) => {
          const isActive = idx === activePhase;
          return (
            <button
              key={idx}
              onClick={() => setActivePhase(idx)}
              className={`flex-1 p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                isActive 
                  ? 'bg-slate-800 border-indigo-500 shadow-md shadow-indigo-500/10 text-indigo-300' 
                  : 'bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-800'
              }`}
            >
              <div className="text-[10px] text-slate-500 font-extrabold mb-1">PHASE {idx + 1}</div>
              <div className="text-xs font-bold leading-tight">{p.title.split(' ')[1]}</div>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* 左：サイクル表現 */}
        <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 flex flex-col justify-center items-center relative overflow-hidden min-h-[220px] border border-slate-800">
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="text-4xl">
              {activePhase === 0 && '🎯'}
              {activePhase === 1 && '✏️'}
              {activePhase === 2 && '🚚'}
              {activePhase === 3 && '⚙️'}
              {activePhase === 4 && '🔄'}
            </span>
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400">
              {phases[activePhase].title}
            </span>
          </div>
        </div>

        {/* 右：詳細説明 */}
        <div className="lg:col-span-7 flex flex-col justify-between p-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div>
                <h4 className="text-base font-bold text-slate-100">{phases[activePhase].title}</h4>
                <p className="text-xs md:text-sm text-slate-350 leading-relaxed font-semibold mt-2">
                  {phases[activePhase].desc}
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-200">
                <span className="text-[9px] text-indigo-400 font-extrabold uppercase tracking-widest block mb-1">
                  対象プロセス
                </span>
                <p className="text-xs md:text-sm font-semibold leading-relaxed text-slate-200">
                  {phases[activePhase].process}
                </p>
              </div>

              <div className="bg-slate-900/50 p-3.5 rounded-xl border border-slate-850">
                <p className="text-xs text-slate-400 font-semibold">
                  {phases[activePhase].keyConcept}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 2. SLA可用性計算 (SLAAvailabilityDiagram)
// ==========================================
export const SLAAvailabilityDiagram: React.FC = () => {
  const [mtbf, setMtbf] = useState<number>(500); // 500時間
  const [mttr, setMttr] = useState<number>(5);   // 5時間

  // 可用性（稼働率）計算
  // 稼働率 = MTBF / (MTBF + MTTR) * 100
  const availability = (mtbf / (mtbf + mttr)) * 100;
  const targetAvailability = 99.0; // SLAの目標値を99.0%に設定
  const isPassed = availability >= targetAvailability;

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          SLM & Availability Calculator
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          可用性（稼働率）計算シミュレーター
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          MTBF（平均故障間隔）とMTTR（平均修復時間）を調整し、SLA目標（稼働率99.0%以上）に達するか検証します。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* 左：スライダーコントローラー */}
        <div className="lg:col-span-7 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-6 flex flex-col justify-center">
          {/* MTBF */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-300 font-bold">MTBF (平均故障間隔)</span>
              <span className="text-indigo-400 font-mono font-extrabold">{mtbf} 時間</span>
            </div>
            <input
              type="range"
              min="100"
              max="1000"
              step="10"
              value={mtbf}
              onChange={(e) => setMtbf(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <span className="text-[9px] text-slate-500 font-bold block">
              ※システムが故障してから「次に故障するまで」の平均正常運転時間。長いほど良い（壊れにくい）。
            </span>
          </div>

          {/* MTTR */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-300 font-bold">MTTR (平均修復時間)</span>
              <span className="text-indigo-400 font-mono font-extrabold">{mttr} 時間</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={mttr}
              onChange={(e) => setMttr(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <span className="text-[9px] text-slate-500 font-bold block">
              ※故障してから「修理が完了するまで」の平均修復時間。短いほど良い（すぐ直せる）。
            </span>
          </div>
        </div>

        {/* 右：計算結果とSLA合否 */}
        <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
          <div>
            <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">
              可用性（稼働率）算出結果
            </h4>
            
            <div className="space-y-2 mt-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-bold">稼働率計算式</span>
                <span className="text-slate-300 font-mono">MTBF / (MTBF + MTTR)</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-bold">SLA目標値</span>
                <span className="text-slate-300 font-mono">{targetAvailability.toFixed(1)} % 以上</span>
              </div>
              
              <div className="mt-4 pt-3 border-t border-slate-850 flex justify-between items-center">
                <span className="text-xs font-extrabold text-slate-100">現在稼働率</span>
                <span className={`text-xl font-black font-mono ${isPassed ? 'text-emerald-400' : 'text-rose-500'}`}>
                  {availability.toFixed(3)} %
                </span>
              </div>
            </div>
          </div>

          <div className={`p-3 rounded-xl border flex items-center gap-2 mt-4 ${isPassed ? 'bg-emerald-950/20 border-emerald-900 text-emerald-400' : 'bg-rose-950/20 border-rose-900 text-rose-500'}`}>
            {isPassed ? (
              <>
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-bold">SLAの目標値を達成しています！</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-bold">可用性が目標値を下回っています！</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 3. インシデント vs 問題管理 (ServiceSupportFlowDiagram)
// ==========================================
export const ServiceSupportFlowDiagram: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const runFlow = () => {
    if (isRunning) return;
    setIsRunning(true);
    setStep(0);

    const stepsTimers = [1000, 2500, 4000, 5500];
    stepsTimers.forEach((time, index) => {
      setTimeout(() => {
        setStep(index + 1);
        if (index === stepsTimers.length - 1) {
          setIsRunning(false);
        }
      }, time);
    });
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
            Service Support Flow
          </span>
          <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            インシデント管理 ＆ 問題管理の連携フロー
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
            障害発生時における、サービス復旧優先の「インシデント管理」と、原因究明の「問題管理」の流れを動的にシミュレートします。
          </p>
        </div>

        <button
          onClick={runFlow}
          disabled={isRunning}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-650 border border-indigo-950 text-white font-bold text-xs py-2 px-4 rounded-xl cursor-pointer self-start md:self-auto"
        >
          障害シミュレーション開始
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* 左：時系列可視化 */}
        <div className="lg:col-span-7 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-center min-h-[220px]">
          <div className="space-y-3.5">
            {[
              { id: 1, label: '① 障害発生（ユーザーからの問い合わせ）', desc: '「システムにログインできません！」' },
              { id: 2, label: '② インシデント管理（ワークアラウンド適用）', desc: '代替サーバーへ切り替え、利用者の操作をすぐ復旧。' },
              { id: 3, label: '③ サービス一時復旧完了', desc: 'ユーザーは業務を再開。しかし根本原因は未解決。' },
              { id: 4, label: '④ 問題管理（根本原因の調査と恒久対策）', desc: 'プログラムのバグを特定し、不具合修正パッチを適用して恒久解決。' }
            ].map((s, idx) => {
              const isCurrent = step === idx + 1;
              const isPassed = step > idx + 1;
              return (
                <div
                  key={s.id}
                  className={`p-3 rounded-xl border transition-all ${
                    isCurrent 
                      ? 'bg-yellow-950/30 border-yellow-500 text-yellow-300' 
                      : isPassed
                        ? 'bg-slate-900 border-slate-850 text-slate-400'
                        : 'bg-slate-950 border-slate-950 text-slate-600'
                  }`}
                >
                  <div className="text-xs font-bold">{s.label}</div>
                  <div className="text-[10px] mt-0.5 font-semibold text-slate-400">{s.desc}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 右：役割比較カード */}
        <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
          <div className="space-y-4">
            <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest border-b border-slate-800 pb-2">
              管理プロセスの違い
            </h4>
            
            <div className="space-y-3.5">
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-850">
                <span className="text-[9px] text-indigo-400 font-extrabold uppercase tracking-widest block mb-0.5">インシデント管理</span>
                <p className="text-xs text-slate-350 leading-relaxed font-semibold">
                  目的：**「サービスの一時復旧」が最優先**。原因が分からなくても、再起動や代替手段（ワークアラウンド）でビジネス停止時間を最小化する。
                </p>
              </div>

              <div className="bg-slate-900 p-3 rounded-xl border border-slate-850">
                <span className="text-[9px] text-emerald-400 font-extrabold uppercase tracking-widest block mb-0.5">問題管理</span>
                <p className="text-xs text-slate-350 leading-relaxed font-semibold">
                  目的：**「根本原因の特定と再発防止」**。インシデントの裏に隠れたプログラムバグなどを徹底究明し、恒久解決を図る。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 4. 電源設備管理 (FacilityManagementDiagram)
// ==========================================
export const FacilityManagementDiagram: React.FC = () => {
  const [powerState, setPowerState] = useState<'normal' | 'ups' | 'apg'>('normal');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const triggerOutage = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setPowerState('ups'); // まずUPSに切り替え
    
    // 3秒後に自家発電起動
    setTimeout(() => {
      setPowerState('apg');
      setIsSimulating(false);
    }, 3000);
  };

  const handleReset = () => {
    setPowerState('normal');
    setIsSimulating(false);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
            Facility Infrastructure
          </span>
          <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            データセンターの電源バックアップ（UPS & 自家発電）
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
            停電時に、無停電電源装置（UPS）と自家発電装置が連携してシステムへの電力供給を死守する仕組み。
          </p>
        </div>

        <div className="flex gap-2 self-start md:self-auto">
          <button
            onClick={triggerOutage}
            disabled={isSimulating || powerState !== 'normal'}
            className="bg-rose-600 hover:bg-rose-505 disabled:bg-slate-800 disabled:text-slate-600 disabled:border-slate-900 border border-slate-800 text-white font-bold text-xs py-2 px-4 rounded-xl cursor-pointer"
          >
            落雷停電の発生
          </button>
          <button
            onClick={handleReset}
            className="bg-slate-850 hover:bg-slate-800 text-slate-300 font-bold text-xs py-2 px-4 rounded-xl cursor-pointer border border-slate-800"
          >
            復電リセット
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* 左：インフラ電源ステータス */}
        <div className="lg:col-span-7 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center min-h-[220px]">
          <div className="grid grid-cols-3 gap-4 text-center">
            {/* 商用電源 */}
            <div className={`p-4 rounded-xl border ${powerState === 'normal' ? 'bg-emerald-950/30 border-emerald-500 text-emerald-400' : 'bg-slate-900 border-slate-950 text-slate-600'}`}>
              <Zap className="w-8 h-8 mx-auto mb-2" />
              <span className="text-xs font-bold block">1. 商用電源</span>
              <span className="text-[9px] mt-0.5 block">{powerState === 'normal' ? '◎ 送電中' : '✕ 停電中'}</span>
            </div>

            {/* UPS */}
            <div className={`p-4 rounded-xl border ${powerState === 'ups' ? 'bg-yellow-950/30 border-yellow-500 text-yellow-400 animate-pulse' : 'bg-slate-900 border-slate-950 text-slate-650'}`}>
              <BatteryCharging className="w-8 h-8 mx-auto mb-2" />
              <span className="text-xs font-bold block">2. UPSバッテリー</span>
              <span className="text-[9px] mt-0.5 block">{powerState === 'ups' ? '⚡ 給電中（一時維持）' : '待機中'}</span>
            </div>

            {/* 自家発電 */}
            <div className={`p-4 rounded-xl border ${powerState === 'apg' ? 'bg-indigo-950/30 border-indigo-500 text-indigo-400' : 'bg-slate-900 border-slate-950 text-slate-650'}`}>
              <RefreshCw className={`w-8 h-8 mx-auto mb-2 ${powerState === 'apg' ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
              <span className="text-xs font-bold block">3. 自家発電機</span>
              <span className="text-[9px] mt-0.5 block">{powerState === 'apg' ? '⚙️ 自動起動・連続給電' : '待機中'}</span>
            </div>
          </div>
        </div>

        {/* 右：ステータス解説 */}
        <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
          <div>
            <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest border-b border-slate-800 pb-2 mb-3">
              電源切り替えステータス解説
            </h4>
            
            {powerState === 'normal' && (
              <p className="text-xs text-slate-350 leading-relaxed font-semibold">
                通常時は電力会社からの「商用電源」を使用しています。UPSおよび自家発電機は非常時に備えてフル充電・待機しています。
              </p>
            )}
            {powerState === 'ups' && (
              <p className="text-xs text-slate-350 leading-relaxed font-semibold">
                落雷等で停電が発生！商用電源が即座に落ちました。**UPS（無停電電源装置）**が1ミリ秒の遅れもなくバッテリー給電へ切り替わり、サーバーが瞬断してデータが消えるのを防いでいます。
              </p>
            )}
            {powerState === 'apg' && (
              <p className="text-xs text-slate-350 leading-relaxed font-semibold">
                停電発生から数秒後、**自家発電装置**のエンジンが自動起動。電力を安定供給し始めました。これで数日間に及ぶ長期停電でも、燃料がある限りシステムを連続稼働させることが可能です。
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 5. システム監査 (SystemAuditControlDiagram)
// ==========================================
export const SystemAuditControlDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: '① 監査計画の策定',
      desc: '監査の目的、対象範囲、具体的な実施手順や日程を定めた計画書を作る段階。',
      deliverable: '作成物：システム監査計画書'
    },
    {
      title: '② 予備監査（情報収集）',
      desc: '本監査の前に、被監査部門からドキュメントや運用ログ、事前アンケートを回収し、概要を把握する段階。',
      deliverable: 'アクション：マニュアルや構成図の提出要請'
    },
    {
      title: '③ 本監査（監査証拠の収集）',
      desc: '現地調査、インタビュー、ログの突合を行い、ルール通りにシステムが管理されている「客観的事実（監査証拠）」を集める段階。',
      deliverable: 'アクション：操作立ち合い、ログ確認、関係者インタビュー'
    },
    {
      title: '④ 監査報告書の作成',
      desc: '監査で判明した問題点や評価結果をまとめ、依頼者（経営陣など）に報告する文書を作る段階。',
      deliverable: '作成物：システム監査報告書'
    },
    {
      title: '⑤ 改善勧告（フォローアップ）',
      desc: '監査報告に基づき、被監査部門に対してセキュリティホール等の是正・改善命令を出し、改善計画と実施を追跡する段階。',
      deliverable: 'アクション：改善指示書の送付、後日是正状況を再確認'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          System Audit Process
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          システム監査の流れと「独立性」
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          第三者の監査人が、システムが安全かつ適切に管理されているかを「客観的」に検証・是正指示を出すプロセス。
        </p>
      </div>

      {/* 監査プロセスステップ */}
      <div className="flex flex-col md:flex-row gap-2 mb-6">
        {steps.map((s, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`flex-1 p-3 rounded-xl border text-left cursor-pointer transition-all ${
                isActive 
                  ? 'bg-slate-800 border-indigo-500 shadow-md shadow-indigo-500/10 text-indigo-300' 
                  : 'bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-800'
              }`}
            >
              <div className="text-[9px] text-slate-500 font-extrabold mb-1">STEP {idx + 1}</div>
              <div className="text-[11px] font-bold leading-tight">{s.title.split(' ')[1]}</div>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* 左：監査人と開発チームの独立性ビジュアル */}
        <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-5 border border-slate-800 flex flex-col justify-center min-h-[220px]">
          <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest border-b border-slate-800 pb-2 mb-3">
            監査人の「独立性」 (客観性の維持)
          </h4>
          <div className="flex justify-between items-center px-4 relative mt-2">
            {/* 被監査部門 */}
            <div className="p-3 bg-slate-900 border border-slate-800 text-center rounded-xl z-10 w-24">
              <span className="text-lg">💻</span>
              <span className="text-[9px] font-bold block mt-1 text-slate-350">被監査部門</span>
              <span className="text-[8px] text-slate-550 block">（開発・運用）</span>
            </div>

            {/* 独立性の境界線 */}
            <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-rose-500/50 flex items-center justify-center -translate-x-1/2">
              <span className="text-[8px] bg-slate-950 px-1 py-0.5 rounded text-rose-400 font-bold border border-rose-900/40">独立性の壁</span>
            </div>

            {/* 監査人 */}
            <div className="p-3 bg-slate-900 border border-indigo-500/30 text-center rounded-xl z-10 w-24">
              <span className="text-lg">🕵️‍♂️</span>
              <span className="text-[9px] font-bold block mt-1 text-slate-350">システム監査人</span>
              <span className="text-[8px] text-indigo-400 block">（第三者の視点）</span>
            </div>
          </div>
          <span className="text-[8px] text-slate-500 font-bold text-center mt-4">
            ※監査人は、システムの設計や運用に関わっていない「独立した立場」でなければならない。
          </span>
        </div>

        {/* 右：詳細説明 */}
        <div className="lg:col-span-7 flex flex-col justify-between p-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div>
                <h4 className="text-base font-bold text-slate-100">{steps[activeStep].title}</h4>
                <p className="text-xs md:text-sm text-slate-350 leading-relaxed font-semibold mt-2">
                  {steps[activeStep].desc}
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-200">
                <span className="text-[9px] text-indigo-400 font-extrabold uppercase tracking-widest block mb-1">
                  主なアクション・成果物
                </span>
                <p className="text-xs md:text-sm font-semibold leading-relaxed text-slate-200">
                  {steps[activeStep].deliverable}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
