import React from 'react';
import { 
  FolderGit2, 
  Calendar, 
  DollarSign, 
  Activity, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp, 
  Users, 
  FileCheck,
  Layers,
  ChevronDown,
  ChevronRight,
  TrendingDown
} from 'lucide-react';

// ==========================================
// 1. プロジェクトの5つのプロセス群 (PMProcessCycleDiagram)
// ==========================================
export const PMProcessCycleDiagram: React.FC = () => {
  const steps = [
    {
      title: '① 立ち上げ',
      desc: 'プロジェクトの認可を得て、目的や範囲を公式に定義する段階。',
      deliverable: '・プロジェクト憲章の作成\n・主要関係者（ステークホルダー）特定',
      focus: '開始宣言 🚀'
    },
    {
      title: '② 計画',
      desc: '目標を達成するための行動計画を策定し、スケジュールや予算を見積もる段階。',
      deliverable: '・WBS作成 / 予算割り当て\n・ガントチャート/アロー図作成',
      focus: '計画策定 📝'
    },
    {
      title: '③ 実行',
      desc: '計画した作業を実行し、成果物を作り上げるためにチームを動かす段階。',
      deliverable: '・設計 / プログラミング\n・単体テスト実施 / 製品開発',
      focus: '成果物作成 💻'
    },
    {
      title: '④ 監視・管理',
      desc: '計画通りに進んでいるか常に監視し、ズレを調整する段階。',
      deliverable: '・進捗状況測定 / EVM評価\n・課題管理 / 変更管理手続き',
      focus: 'ギャップ修正 📈'
    },
    {
      title: '⑤ 終結',
      desc: '成果物を利用者に引き渡し、公式にプロジェクトを完了・解散させる段階。',
      deliverable: '・顧客による受入テスト完了\n・振り返り / 教訓の整理',
      focus: '公式完了 🏁'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Flow
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          プロジェクトの5つのプロセス群
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          立ち上げから終結まで、PMBOKにおける5つのプロセス群の役割分担と全体の流れです。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map((step, idx) => (
          <div 
            key={idx} 
            className="p-4 bg-slate-950/80 border border-slate-800/80 rounded-2xl flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-indigo-400 font-extrabold">{step.focus}</span>
                <span className="text-[8px] bg-slate-900 border border-slate-850 text-slate-500 font-bold px-1.5 py-0.2 rounded">
                  STEP 0{idx + 1}
                </span>
              </div>
              <h4 className="text-xs font-black text-slate-100">{step.title}</h4>
              <p className="text-[11px] text-slate-350 leading-relaxed font-semibold">
                {step.desc}
              </p>
            </div>

            <div className="bg-slate-900/85 p-2.5 rounded-lg border border-slate-850">
              <span className="text-[8px] text-slate-500 font-bold block mb-0.5">主な活動・成果物</span>
              <p className="text-[10px] font-bold text-slate-300 whitespace-pre-line leading-tight">
                {step.deliverable}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// ==========================================
// 2. WBSツリー (WBSStructureDiagram)
// ==========================================
export const WBSStructureDiagram: React.FC = () => {
  const wbsTasks = [
    { code: '1.0', name: 'Webサイト制作プロジェクト', type: 'プロジェクト', owner: 'PM', duration: '30日', depth: 0 },
    { code: '1.1', name: '要件定義', type: 'ワークパッケージ', owner: 'SE', duration: '5日', depth: 1 },
    { code: '1.2', name: '画面・デザイン設計', type: 'タスクグループ', owner: 'デザイナー', duration: '10日', depth: 1 },
    { code: '1.2.1', name: 'ワイヤーフレーム作成', type: 'ワークパッケージ', owner: 'デザイナー', duration: '4日', depth: 2 },
    { code: '1.2.2', name: 'デザインカンプ作成', type: 'ワークパッケージ', owner: 'デザイナー', duration: '6日', depth: 2 },
    { code: '1.3', name: 'システム開発・実装', type: 'タスクグループ', owner: 'エンジニア', duration: '15日', depth: 1 },
    { code: '1.3.1', name: 'コーディング実装', type: 'ワークパッケージ', owner: 'コーダー', duration: '10日', depth: 2 },
    { code: '1.3.2', name: '結合テストの実施', type: 'ワークパッケージ', owner: 'テスター', duration: '5日', depth: 2 }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          WBS Structure Map
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          WBS（作業分解構成図）の構造一覧
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          プロジェクトの全作業範囲を構造的に細分化し、担当者と期間をマッピングしたWBSモデルです。
        </p>
      </div>

      <div className="overflow-x-auto bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
        <table className="w-full text-left border-collapse text-xs font-semibold">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950 text-slate-500 uppercase text-[9px] tracking-wider">
              <th className="p-3">WBSコード</th>
              <th className="p-3">作業名称</th>
              <th className="p-3">区分</th>
              <th className="p-3">予定期間</th>
              <th className="p-3">担当</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-850">
            {wbsTasks.map((task, idx) => (
              <tr key={idx} className={task.depth === 0 ? 'bg-slate-900/50' : ''}>
                <td className="p-3 font-mono text-slate-400">{task.code}</td>
                <td className="p-3 font-bold text-slate-200">
                  <span style={{ paddingLeft: `${task.depth * 16}px` }}>
                    {task.depth > 0 ? '↳ ' : ''}{task.name}
                  </span>
                </td>
                <td className="p-3">
                  <span className={`text-[9px] px-1.5 py-0.5 rounded ${task.type === 'ワークパッケージ' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-950/65' : 'bg-blue-500/20 text-blue-400 border border-blue-950/65'}`}>
                    {task.type}
                  </span>
                </td>
                <td className="p-3 font-bold text-slate-350">{task.duration}</td>
                <td className="p-3 text-slate-400">{task.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-3 bg-slate-950/50 border border-slate-850 rounded-xl">
        <p className="text-[10px] text-slate-450 leading-relaxed">
          ※ <strong>ワークパッケージ (Work Package)</strong>：WBSにおいて、これ以上細分化できない「最下層の作業単位」のこと。この単位で予定日数や予算見積もり、担当責任者を割り当てて管理します。
        </p>
      </div>
    </div>
  );
};


// ==========================================
// 3. スケジュール管理 (ScheduleGanttCpmDiagram)
// ==========================================
export const ScheduleGanttCpmDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Roadmap
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          ガントチャートとアローダイアグラム
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          進捗を一目で把握する「ガントチャート」と、作業順序と最短完了工期を特定する「アローダイアグラム（PERT）」の違いです。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* ガントチャート */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-slate-450 uppercase tracking-widest border-b border-slate-800 pb-2">
              ガントチャート（進捗管理・スケジュール視覚化）
            </h4>
            
            <div className="space-y-2 text-[10px] font-bold text-slate-350">
              <div className="flex justify-between items-center">
                <span>① 要件定義</span>
                <span className="text-indigo-400">██████████ 100%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>② 画面設計</span>
                <span className="text-indigo-400">░░████████ 80%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>③ 開発実装</span>
                <span className="text-indigo-400">░░░░░░██░░ 20%</span>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-slate-450 leading-relaxed mt-4">
            ※各作業のスケジュール（期間）を横棒グラフで表現し、予定と実績の進捗（％）をリアルタイムに比較・管理するために使います。
          </p>
        </div>

        {/* アローダイアグラム */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-slate-455 uppercase tracking-widest border-b border-slate-800 pb-2">
              アローダイアグラム（作業順序とクリティカルパス）
            </h4>

            {/* 静的ネットワーク図 */}
            <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-850 text-center space-y-1.5">
              <div className="text-[11px] font-bold text-slate-200">
                ルートA：作業① ➔ 作業③（計7日間）
              </div>
              <div className="text-[11px] font-bold text-rose-400">
                ルートB：作業② ➔ 作業④（計9日間） ★ クリティカルパス
              </div>
            </div>
          </div>
          <p className="text-[10px] text-slate-450 leading-relaxed mt-4">
            ※作業同士の順序関係を矢印で結び、全体を完了させるために最も日数がかかる「最長ルート（クリティカルパス）」を特定します。このルート上の作業が遅れるとプロジェクト全体が遅延します。
          </p>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 4. EVM (Earned Value Management) / EarnedValueManagementDiagram
// ==========================================
export const EarnedValueManagementDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Analysis
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          EVM（アーンドバリューマネジメント）の3大指標
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          プロジェクトの進捗度合い（スケジュール）とコスト消費量を「金額」という統一単位で測定・評価する手法です。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* 左：EVM概念図 */}
        <div className="lg:col-span-6 bg-slate-950/80 p-4 rounded-2xl border border-slate-800 flex justify-center">
          <svg className="w-full h-48 max-w-[260px]" viewBox="0 0 100 60">
            <line x1="10" y1="50" x2="95" y2="50" stroke="#475569" strokeWidth="0.8" />
            <line x1="10" y1="5" x2="10" y2="50" stroke="#475569" strokeWidth="0.8" />
            <text x="92" y="55" fontSize="2.5" fill="#475569" fontWeight="bold">時間</text>
            <text x="3" y="8" fontSize="2.5" fill="#475569" fontWeight="bold">コスト</text>

            {/* PV */}
            <polyline fill="none" stroke="#64748b" strokeWidth="0.8" strokeDasharray="2" points="10,50 30,40 50,30 70,20 90,10" />
            <text x="91" y="10" fontSize="2.5" fill="#64748b" fontWeight="bold">PV (計画)</text>

            {/* EV */}
            <polyline fill="none" stroke="#3b82f6" strokeWidth="1.2" points="10,50 30,45 50,38 70,30 90,24" />
            <text x="91" y="24" fontSize="2.5" fill="#3b82f6" fontWeight="bold">EV (実績価値)</text>

            {/* AC */}
            <polyline fill="none" stroke="#8b5cf6" strokeWidth="1.2" points="10,50 30,35 50,25 70,18 90,8" />
            <text x="91" y="8" fontSize="2.5" fill="#8b5cf6" fontWeight="bold">AC (実費用)</text>
          </svg>
        </div>

        {/* 右：3指標の解説 */}
        <div className="lg:col-span-6 space-y-3">
          <div className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl">
            <span className="text-xs font-extrabold text-slate-400 block">① PV (Planned Value): 計画価値</span>
            <p className="text-[10px] text-slate-350 leading-relaxed font-semibold mt-0.5">
              計画時点で、その基準日までに完了するはずだった作業に割り当てられた予算（予定コスト）。
            </p>
          </div>
          <div className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl">
            <span className="text-xs font-extrabold text-blue-400 block">② EV (Earned Value): 実績価値</span>
            <p className="text-[10px] text-slate-350 leading-relaxed font-semibold mt-0.5">
              現時点で「実際に完了した作業」に対して割り当てられていた予算（出来高）。
            </p>
          </div>
          <div className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl">
            <span className="text-xs font-extrabold text-purple-400 block">③ AC (Actual Cost): 実コスト</span>
            <p className="text-[10px] text-slate-350 leading-relaxed font-semibold mt-0.5">
              現時点で完了した作業に対して、「実際に支払った・消費した」費用の総額。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
