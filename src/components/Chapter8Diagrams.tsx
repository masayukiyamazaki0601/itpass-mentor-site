import React from 'react';
import { 
  ShieldCheck, 
  BatteryCharging, 
  Zap, 
  FileText, 
  Users, 
  ArrowRight, 
  RefreshCw, 
  CheckCircle2, 
  Database,
  Building,
  Lock
} from 'lucide-react';

// ==========================================
// 1. ITILライフサイクル (ITILLifecycleDiagram)
// ==========================================
export const ITILLifecycleDiagram: React.FC = () => {
  const phases = [
    {
      title: '① サービス戦略 (Service Strategy)',
      desc: '顧客にどのようなITサービスを提供するか、ビジネス視点で戦略を立てるフェーズ。',
      process: '主要プロセス：サービスポートフォリオ管理、財務管理'
    },
    {
      title: '② サービス設計 (Service Design)',
      desc: '戦略に基づき、サービスの機能、セキュリティ、可用性などを具体的に設計するフェーズ。',
      process: '主要プロセス：サービスレベル管理(SLM)、可用性管理'
    },
    {
      title: '③ サービス移行 (Service Transition)',
      desc: '新しく設計・変更したサービスを、本番環境へ安全に構築・移行する準備フェーズ。',
      process: '主要プロセス：変更管理、リリース管理・展開管理、構成管理'
    },
    {
      title: '④ サービス運用 (Service Operation)',
      desc: 'リリースされたサービスを日々の業務で安定して動かし続け、利用者をサポートするフェーズ。',
      process: '主要プロセス：インシデント管理、問題管理、サービスデスク'
    },
    {
      title: '⑤ 継続的サービス改善 (CSI)',
      desc: 'ライフサイクル全体の品質を測定し、PDCAサイクルで改善し続けるフェーズ。',
      process: '主要プロセス：7ステップの改善プロセス'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Framework
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          ITILのサービスライフサイクル
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          ITサービスマネジメントのベストプラクティスであるITILの5つのフェーズです。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {phases.map((phase, idx) => (
          <div 
            key={idx} 
            className="p-4 bg-slate-950/80 border border-slate-800/85 rounded-2xl flex flex-col justify-between space-y-4"
          >
            <div className="space-y-1.5">
              <span className="text-[9px] bg-slate-900 text-slate-500 font-bold px-1.5 py-0.2 rounded border border-slate-850">
                PHASE 0{idx + 1}
              </span>
              <h4 className="text-xs font-black text-slate-100">{phase.title}</h4>
              <p className="text-[11px] text-slate-350 leading-relaxed font-semibold">
                {phase.desc}
              </p>
            </div>
            <div className="bg-slate-900/70 p-2.5 rounded border border-slate-850 text-[10px] font-bold text-slate-450 leading-tight">
              {phase.process}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// ==========================================
// 2. SLA可用性計算 (SLAAvailabilityDiagram)
// ==========================================
export const SLAAvailabilityDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Definition
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          可用性（稼働率）の計算式と定義
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          ITサービスが「正常に動き続けていた時間の割合」を示す可用性の計算モデルです。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* 左：SLAと時間のタイムライン図 */}
        <div className="lg:col-span-7 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-4">
          <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">
            可用性管理の時間概念
          </h4>
          <div className="space-y-3">
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-850">
              <span className="text-xs font-bold text-indigo-300">① MTBF (Mean Time Between Failures)</span>
              <p className="text-[10px] text-slate-400 leading-relaxed font-semibold mt-0.5">
                **平均故障間隔**：システムが回復してから「次に故障するまで」の平均正常稼働時間。長いほど「壊れにくい信頼性の高いシステム」と言えます。
              </p>
            </div>
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-850">
              <span className="text-xs font-bold text-emerald-300">② MTTR (Mean Time To Repair)</span>
              <p className="text-[10px] text-slate-400 leading-relaxed font-semibold mt-0.5">
                **平均修復時間**：システムが故障してから「修理が完了し、再開するまで」の平均時間。短いほど「保守性の高いシステム」と言えます。
              </p>
            </div>
          </div>
        </div>

        {/* 右：稼働率の計算 */}
        <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">
              可用性（稼働率）の計算公式
            </h4>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-850 text-center space-y-3">
              <div className="text-xs font-black text-indigo-300">
                稼働率 ＝ MTBF ÷ (MTBF ＋ MTTR)
              </div>
              <div className="text-[10px] text-slate-400 font-semibold leading-relaxed">
                【具体例】<br/>
                MTBFが99時間、MTTRが1時間の場合<br/>
                <span className="font-extrabold text-indigo-400">99時間 ÷ (99 ＋ 1)時間 ＝ 0.99 (99.0%)</span>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-slate-450 leading-relaxed mt-4">
            ※SLA（サービス品質合意書）などにおいて、この稼働率（例：99.9%など）の最低基準を定め、契約に明記します。
          </p>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 3. インシデント vs 問題管理 (ServiceSupportFlowDiagram)
// ==========================================
export const ServiceSupportFlowDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Flow
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          インシデント管理 ＆ 問題管理の連携フロー
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          障害発生時における、サービス復旧優先の「インシデント管理」と、原因究明の「問題管理」の流れの対比図です。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* インシデント管理 */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="space-y-1.5">
            <h4 className="text-sm font-extrabold text-blue-400">インシデント管理</h4>
            <span className="text-[9px] text-slate-500 font-bold block">目標：サービスの一時復旧が最優先</span>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold pt-1">
              不具合の原因究明よりも、まずはユーザーがシステムを「使える状態に戻すこと」を目指します。
            </p>
          </div>
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-850 text-[10px] font-bold text-slate-400 space-y-1">
            <div>・アクション：予備機への切り替え、再起動</div>
            <div>・対策名称：ワークアラウンド（暫定対策）の実施</div>
          </div>
        </div>

        {/* 問題管理 */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="space-y-1.5">
            <h4 className="text-sm font-extrabold text-emerald-400">問題管理</h4>
            <span className="text-[9px] text-slate-500 font-bold block">目標：根本原因の追究と再発防止</span>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold pt-1">
              なぜそのインシデントが発生したのかを究明し、プログラムコードの修正などの恒久対策を行います。
            </p>
          </div>
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-850 text-[10px] font-bold text-slate-400 space-y-1">
            <div>・アクション：ソースコード解析、プログラム改修</div>
            <div>・対策名称：恒久対策・パッチ適用</div>
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
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Infrastructure
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          データセンターの電源バックアップ（UPS & 自家発電）
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          突然の停電に対しても、サーバーの連続稼働を保証するための電源二重化リレー体制です。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* 商用電源 */}
        <div className="p-4 bg-slate-950/85 border border-slate-800 rounded-xl space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-extrabold text-slate-400">1. 通常時</span>
            <Zap className="w-5 h-5 text-emerald-400" />
          </div>
          <h4 className="text-xs font-black text-slate-100">商用電源 (電力会社)</h4>
          <p className="text-[11px] text-slate-350 leading-relaxed font-semibold">
            通常時は外線から供給される電力でシステムを稼働させます。
          </p>
        </div>

        {/* UPS */}
        <div className="p-4 bg-slate-950/85 border border-slate-800 rounded-xl space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-extrabold text-slate-400">2. 停電直後（瞬断防止）</span>
            <BatteryCharging className="w-5 h-5 text-amber-400" />
          </div>
          <h4 className="text-xs font-black text-slate-100">UPS (無停電電源装置)</h4>
          <p className="text-[11px] text-slate-350 leading-relaxed font-semibold">
            停電と同時に即座に稼働し、自家発電が立ち上がるまでの数分間、電力を一時的に供給し、瞬断を防ぎます。
          </p>
        </div>

        {/* 自家発電 */}
        <div className="p-4 bg-slate-950/85 border border-slate-800 rounded-xl space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-extrabold text-slate-400">3. 数分後〜長期（連続稼働）</span>
            <RefreshCw className="w-5 h-5 text-indigo-400 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          <h4 className="text-xs font-black text-slate-100">自家発電装置</h4>
          <p className="text-[11px] text-slate-350 leading-relaxed font-semibold">
            自動起動したガスタービンなどで発電を開始。燃料が続く限り、長期の停電でもサーバへの給電を継続します。
          </p>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 5. システム監査 (SystemAuditControlDiagram)
// ==========================================
export const SystemAuditControlDiagram: React.FC = () => {
  const steps = [
    { num: '①', name: '監査計画の策定', desc: '監査範囲やスケジュールを記載した計画書を作る段階。' },
    { num: '②', name: '予備監査 (調査)', desc: '被監査部門から事前にログやマニュアルを取り寄せて分析する段階。' },
    { num: '③', name: '本監査 (証拠収集)', desc: '現地に立ち入り、ルール通りに運用されている「監査証拠」を集める段階。' },
    { num: '④', name: '監査報告書の作成', desc: '客観的な事実をもとに監査報告書をまとめ、経営陣等へ提出する段階。' },
    { num: '⑤', name: '改善勧告 (フォロー)', desc: '不備があった箇所に対して「改善勧告」を出し、是正状況を確認する段階。' }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Board
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          システム監査のステップと監査人の独立性
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          第三者が客観的にシステム運用を検証する流れと、最も重要視される「独立性」の概念図です。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* 左：監査の流れ */}
        <div className="lg:col-span-7 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
          <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">
            システム監査の5ステップ
          </h4>
          <div className="space-y-2">
            {steps.map((s, idx) => (
              <div key={idx} className="flex gap-3 text-xs leading-normal">
                <span className="text-indigo-400 font-bold">{s.num}</span>
                <div>
                  <span className="font-bold text-slate-200">{s.name}</span>
                  <p className="text-[10px] text-slate-500 font-semibold">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 右：独立性の説明 */}
        <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-slate-455 uppercase tracking-widest border-b border-slate-800 pb-2">
              監査人の「独立性」
            </h4>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold">
              システム監査人は、監査を客観的かつ公平に行うため、監査対象となるシステムの「開発」「運用」「設計」などに関わっていない人物（独立した部署や外部の専門家）でなければなりません。
            </p>
          </div>

          <div className="bg-slate-900 p-3 rounded-lg border border-slate-850 text-center font-bold text-[10px] text-rose-400 mt-4">
            開発チーム（当事者） ✕ 🕵️‍♂️ 監査人（第三者） ➔ 独立している
          </div>
        </div>
      </div>
    </div>
  );
};
