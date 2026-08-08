import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Calendar, 
  DollarSign, 
  Activity, 
  Play, 
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
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: '1. 立ち上げプロセス群',
      desc: 'プロジェクトの認可を得て、目的や範囲を公式に定義する段階。',
      deliverable: '成果物：プロジェクト憲章の作成、ステークホルダー（関係者）の特定',
      focus: 'キーポイント：プロジェクトの「開始」を公式に宣言する。'
    },
    {
      title: '2. 計画プロセス群',
      desc: '目標を達成するための行動計画を策定し、スケジュールや予算を見積もる段階。',
      deliverable: '成果物：WBSの作成、スケジュール（マイルストーン）策定、予算計画',
      focus: 'キーポイント：10の知識エリア（コスト、時間、リスクなど）の計画を練る。'
    },
    {
      title: '3. 実行プロセス群',
      desc: '計画した作業を実行し、成果物を作り上げるためにチームを動かす段階。',
      deliverable: '成果物：設計書の作成、プログラミング、テストの実施',
      focus: 'キーポイント：資源の配分、メンバー間のコミュニケーション管理。'
    },
    {
      title: '4. 監視コントロールプロセス群',
      desc: 'プロジェクトが計画通りに進んでいるか常に監視し、ズレを調整する段階。',
      deliverable: '成果物：進捗レポート、課題管理表、EVMによるコスト評価',
      focus: 'キーポイント：計画と実績のギャップを早期に発見して修正する。'
    },
    {
      title: '5. 終結プロセス群',
      desc: '成果物を利用者に引き渡し、公式にプロジェクトを完了・解散させる段階。',
      deliverable: '成果物：最終製品の受入れ、プロジェクト振り返りレポートの作成',
      focus: 'キーポイント：学んだ教訓（ナレッジ）を組織に蓄積する。'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          PMBOK Process Groups
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          プロジェクトの5つのプロセス群
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          プロジェクトマネジメントは、立ち上げから終結まで5つのプロセスを循環・移動しながら管理します。
        </p>
      </div>

      {/* プロセスナビゲーション */}
      <div className="flex flex-col md:flex-row gap-2 mb-6">
        {steps.map((s, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`flex-1 p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                isActive 
                  ? 'bg-slate-800 border-indigo-500 shadow-md shadow-indigo-500/10 text-indigo-300' 
                  : 'bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-800'
              }`}
            >
              <div className="text-[10px] text-slate-500 font-extrabold mb-1">STEP {idx + 1}</div>
              <div className="text-xs font-bold">{s.title.split(' ')[1]}</div>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* 左側：シミュレーション表現（フロー遷移図） */}
        <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 flex flex-col justify-center items-center relative overflow-hidden min-h-[220px] border border-slate-800">
          <div className="flex flex-col items-center gap-4">
            <span className="text-4xl">
              {activeStep === 0 && '🚀'}
              {activeStep === 1 && '📝'}
              {activeStep === 2 && '💻'}
              {activeStep === 3 && '📈'}
              {activeStep === 4 && '🏁'}
            </span>
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400">
              {steps[activeStep].title}
            </span>

            {/* 監視ループ表現 */}
            {activeStep === 3 && (
              <motion.div
                className="w-12 h-12 rounded-full border-2 border-dashed border-indigo-500/50 absolute"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              />
            )}
          </div>
        </div>

        {/* 右側：詳細説明パネル */}
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
                <p className="text-xs md:text-sm text-slate-405 leading-relaxed font-semibold mt-2 text-slate-350">
                  {steps[activeStep].desc}
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-200">
                <span className="text-[9px] text-indigo-400 font-extrabold uppercase tracking-widest block mb-1">
                  主な成果物・アクション
                </span>
                <p className="text-xs md:text-sm font-semibold leading-relaxed text-slate-200">
                  {steps[activeStep].deliverable}
                </p>
              </div>

              <div className="bg-slate-900/50 p-3.5 rounded-xl border border-slate-850">
                <p className="text-xs text-slate-400 font-semibold">
                  {steps[activeStep].focus}
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
// 2. WBSツリー (WBSStructureDiagram)
// ==========================================
export const WBSStructureDiagram: React.FC = () => {
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    root: true,
    design: true,
    dev: true
  });
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  const toggleNode = (id: string) => {
    setExpandedNodes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const taskData: Record<string, { desc: string, duration: string, owner: string, isWP: boolean }> = {
    root: { desc: 'Webサイト制作全体のプロジェクト。スコープ内全ての作業を統括。', duration: '30日間', owner: 'PM', isWP: false },
    req: { desc: '利用者の求める条件を整理し、要件定義書にまとめる作業。', duration: '5日間', owner: 'SE', isWP: true },
    design: { desc: 'Webサイトのデザイン、画面レイアウトを設計する工程。', duration: '10日間', owner: 'デザイナー', isWP: false },
    design_wire: { desc: '画面の骨組み（ワイヤーフレーム）を設計する最小タスク（ワークパッケージ）。', duration: '4日間', owner: 'デザイナー', isWP: true },
    design_mock: { desc: '具体的なカラーリングとビジュアルを作成する最小タスク。', duration: '6日間', owner: 'デザイナー', isWP: true },
    dev: { desc: 'HTMLコーディングおよびプログラム実装を行う工程。', duration: '15日間', owner: 'エンジニア', isWP: false },
    dev_code: { desc: '実際にコーディング作業を行う最小タスク（ワークパッケージ）。', duration: '10日間', owner: 'コーダー', isWP: true },
    dev_test: { desc: '実装した機能が仕様通りに動くか検証する最小タスク。', duration: '5日間', owner: 'テスター', isWP: true }
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          WBS (Work Breakdown Structure)
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          WBSによる作業分解ツリー
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          プロジェクトのスコープ（範囲）を細かく分解し、最も小さな管理単位である「ワークパッケージ」まで細分化します。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 左側：ツリービュー */}
        <div className="lg:col-span-6 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 min-h-[300px]">
          <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest mb-4 border-b border-slate-800 pb-2">
            WBS階層構造
          </h4>
          
          <div className="space-y-2.5 text-xs">
            {/* ルート */}
            <div className="flex items-center gap-2">
              <button onClick={() => toggleNode('root')} className="p-0.5 hover:bg-slate-800 rounded text-slate-450 cursor-pointer">
                {expandedNodes.root ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
              </button>
              <span
                onClick={() => setSelectedTask('root')}
                className={`font-bold cursor-pointer hover:text-indigo-400 ${selectedTask === 'root' ? 'text-indigo-400 underline font-extrabold' : ''}`}
              >
                📁 プロジェクト：Webサイト制作
              </span>
            </div>

            {expandedNodes.root && (
              <div className="pl-6 space-y-2.5 border-l border-slate-800">
                {/* 1. 要件定義 */}
                <div className="flex items-center gap-2">
                  <span className="w-3.5" />
                  <span
                    onClick={() => setSelectedTask('req')}
                    className={`cursor-pointer hover:text-indigo-400 ${selectedTask === 'req' ? 'text-indigo-400 underline font-extrabold' : 'text-slate-350'}`}
                  >
                    📄 [WP] 1.1 要件定義書作成
                  </span>
                </div>

                {/* 2. 設計 */}
                <div className="flex items-center gap-2">
                  <button onClick={() => toggleNode('design')} className="p-0.5 hover:bg-slate-800 rounded text-slate-450 cursor-pointer">
                    {expandedNodes.design ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                  </button>
                  <span
                    onClick={() => setSelectedTask('design')}
                    className={`font-bold cursor-pointer hover:text-indigo-400 ${selectedTask === 'design' ? 'text-indigo-400 underline font-extrabold' : 'text-slate-300'}`}
                  >
                    📁 1.2 デザイン設計
                  </span>
                </div>

                {expandedNodes.design && (
                  <div className="pl-6 space-y-2 border-l border-slate-800">
                    <div onClick={() => setSelectedTask('design_wire')} className={`cursor-pointer hover:text-indigo-400 ${selectedTask === 'design_wire' ? 'text-indigo-400 underline font-extrabold' : 'text-slate-400'}`}>
                      📄 [WP] 1.2.1 ワイヤーフレーム作成
                    </div>
                    <div onClick={() => setSelectedTask('design_mock')} className={`cursor-pointer hover:text-indigo-400 ${selectedTask === 'design_mock' ? 'text-indigo-400 underline font-extrabold' : 'text-slate-400'}`}>
                      📄 [WP] 1.2.2 デザインカンプ作成
                    </div>
                  </div>
                )}

                {/* 3. 開発・実装 */}
                <div className="flex items-center gap-2">
                  <button onClick={() => toggleNode('dev')} className="p-0.5 hover:bg-slate-800 rounded text-slate-450 cursor-pointer">
                    {expandedNodes.dev ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                  </button>
                  <span
                    onClick={() => setSelectedTask('dev')}
                    className={`font-bold cursor-pointer hover:text-indigo-400 ${selectedTask === 'dev' ? 'text-indigo-400 underline font-extrabold' : 'text-slate-300'}`}
                  >
                    📁 1.3 開発・実装
                  </span>
                </div>

                {expandedNodes.dev && (
                  <div className="pl-6 space-y-2 border-l border-slate-800">
                    <div onClick={() => setSelectedTask('dev_code')} className={`cursor-pointer hover:text-indigo-400 ${selectedTask === 'dev_code' ? 'text-indigo-400 underline font-extrabold' : 'text-slate-400'}`}>
                      📄 [WP] 1.3.1 コーディング実装
                    </div>
                    <div onClick={() => setSelectedTask('dev_test')} className={`cursor-pointer hover:text-indigo-400 ${selectedTask === 'dev_test' ? 'text-indigo-400 underline font-extrabold' : 'text-slate-400'}`}>
                      📄 [WP] 1.3.2 結合テスト
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* 右側：タスク詳細カード */}
        <div className="lg:col-span-6 flex flex-col justify-between min-h-[300px]">
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-100 border-b border-slate-850 pb-2 flex items-center gap-2">
              選択されたタスクの詳細情報
            </h4>

            {selectedTask ? (
              <motion.div
                key={selectedTask}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded ${taskData[selectedTask].isWP ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'}`}>
                      {taskData[selectedTask].isWP ? 'ワークパッケージ (最小作業単位)' : 'タスクグループ（サマリ）'}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-350 leading-relaxed font-semibold mt-3">
                    {taskData[selectedTask].desc}
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-widest block mb-0.5">予定期間</span>
                    <span className="text-xs font-bold text-slate-200">{taskData[selectedTask].duration}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-widest block mb-0.5">主な担当・責任者</span>
                    <span className="text-xs font-bold text-slate-200">{taskData[selectedTask].owner}</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <p className="text-xs md:text-sm text-slate-400 font-bold text-center pt-10">
                左側のWBSツリーからタスク（📁または📄で始まる項目）をクリックして、詳細情報を表示してください。
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 3. スケジュール管理 (ScheduleGanttCpmDiagram)
// ==========================================
export const ScheduleGanttCpmDiagram: React.FC = () => {
  const [mode, setMode] = useState<'gantt' | 'arrow'>('gantt');

  // アローダイアグラムのノード状態（日数の変更シミュレータ）
  const [durationA, setDurationA] = useState<number>(3); // A: 3日
  const [durationB, setDurationB] = useState<number>(5); // B: 5日
  const [durationC, setDurationC] = useState<number>(4); // C: 4日
  const [durationD, setDurationD] = useState<number>(3); // D: 3日

  // クリティカルパス計算
  // パス1: A + C = durationA + durationC
  // パス2: B + D = durationB + durationD
  const path1 = durationA + durationC;
  const path2 = durationB + durationD;
  const totalDuration = Math.max(path1, path2);
  const isPath1Critical = path1 >= path2;
  const isPath2Critical = path2 >= path1;

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Schedule Control
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          ガントチャートとアローダイアグラム（PERT）
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          スケジュール管理の2大ツール。日数を動かしてクリティカルパスの変化をシミュレートします。
        </p>
      </div>

      {/* モード選択 */}
      <div className="flex gap-2 mb-6 justify-center">
        {(['gantt', 'arrow'] as const).map(m => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
              mode === m
                ? 'bg-slate-800 border-indigo-500 text-indigo-400 shadow-sm'
                : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
            }`}
          >
            {m === 'gantt' ? 'ガントチャート (進捗管理)' : 'アローダイアグラム (クリティカルパス)'}
          </button>
        ))}
      </div>

      {mode === 'gantt' ? (
        // 3.1 ガントチャートシミュレータ
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-4">
          <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest border-b border-slate-800 pb-2 mb-2">
            進捗管理ガントチャート
          </h4>
          <div className="space-y-3">
            {[
              { name: '要件定義', start: 0, length: 20, progress: 100 },
              { name: '画面設計', start: 20, length: 30, progress: 80 },
              { name: '開発・実装', start: 50, length: 40, progress: 20 },
              { name: 'テスト', start: 90, length: 10, progress: 0 }
            ].map((task, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-2 items-center text-xs">
                <span className="col-span-3 font-bold text-slate-350">{task.name}</span>
                <div className="col-span-9 bg-slate-900 h-6 rounded-lg relative overflow-hidden border border-slate-800">
                  {/* スケジュール幅 */}
                  <div
                    className="absolute bg-indigo-950/40 h-full border-l border-r border-indigo-500/30 flex items-center justify-between px-2 text-[9px] text-indigo-400"
                    style={{ left: `${task.start}%`, width: `${task.length}%` }}
                  >
                    <span>{task.progress}%</span>
                  </div>
                  {/* 実績進捗 */}
                  <div
                    className="absolute bg-indigo-600 h-full"
                    style={{ left: `${task.start}%`, width: `${(task.length * task.progress) / 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-slate-500 font-bold leading-relaxed pt-2">
            横棒で全体のスケジュール、各作業の期間、および完了済みの進捗率を視覚化します。
          </p>
        </div>
      ) : (
        // 3.2 アローダイアグラム CPM計算シミュレータ
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* 左：アローダイアグラムのグラフィック */}
          <div className="lg:col-span-7 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-center min-h-[220px] relative overflow-hidden">
            {/* アロー表示 */}
            <div className="flex items-center justify-around h-40 relative">
              {/* ノード1 */}
              <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center font-bold text-xs">①</div>

              {/* 上パスと下パス */}
              <div className="flex flex-col gap-12 relative z-10">
                {/* 上ルート (A) */}
                <div className={`p-2 rounded border text-[10px] font-bold ${isPath1Critical ? 'bg-rose-950/30 border-rose-500 text-rose-400 animate-pulse' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>
                  作業A: {durationA}日 ➜ C: {durationC}日
                </div>
                {/* 下ルート (B) */}
                <div className={`p-2 rounded border text-[10px] font-bold ${isPath2Critical ? 'bg-rose-950/30 border-rose-500 text-rose-400 animate-pulse' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>
                  作業B: {durationB}日 ➜ D: {durationD}日
                </div>
              </div>

              {/* ノード4 */}
              <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center font-bold text-xs">④</div>
            </div>
            
            {/* 日数調整ボタン */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2 border-t border-slate-850">
              {[
                { name: '作業A', val: durationA, set: setDurationA },
                { name: '作業B', val: durationB, set: setDurationB },
                { name: '作業C', val: durationC, set: setDurationC },
                { name: '作業D', val: durationD, set: setDurationD }
              ].map((work, idx) => (
                <div key={idx} className="bg-slate-900 p-2 rounded-xl text-center border border-slate-850">
                  <span className="text-[9px] text-slate-500 font-bold block mb-1">{work.name}</span>
                  <div className="flex justify-center items-center gap-1.5">
                    <button onClick={() => work.set(Math.max(1, work.val - 1))} className="w-5 h-5 rounded bg-slate-850 border border-slate-800 text-xs font-bold cursor-pointer">-</button>
                    <span className="text-xs font-bold text-slate-200">{work.val}日</span>
                    <button onClick={() => work.set(work.val + 1)} className="w-5 h-5 rounded bg-slate-850 border border-slate-800 text-xs font-bold cursor-pointer">+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右：計算結果とクリティカルパス解説 */}
          <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
            <div>
              <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">
                クリティカルパス（最短完了工期）計算
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-bold">上ルート (作業A + C)</span>
                  <span className={`font-mono font-bold ${isPath1Critical ? 'text-rose-400' : 'text-slate-500'}`}>{durationA} + {durationC} = {path1}日</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-bold">下ルート (作業B + D)</span>
                  <span className={`font-mono font-bold ${isPath2Critical ? 'text-rose-400' : 'text-slate-500'}`}>{durationB} + {durationD} = {path2}日</span>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-850 flex justify-between items-center">
                  <span className="text-xs font-extrabold text-slate-100">最短完了工期</span>
                  <span className="text-base font-black text-rose-500 font-mono">{totalDuration}日間</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-900/50 border border-slate-850 rounded-xl mt-4">
              <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed font-semibold">
                【クリティカルパス】プロジェクトの開始から終了までのルートで、「最も時間がかかるルート」です。このルート上の作業が1日遅れると、プロジェクト全体の完了も1日遅れます。
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


// ==========================================
// 4. EVMシミュレーター (EarnedValueManagementDiagram)
// ==========================================
export const EarnedValueManagementDiagram: React.FC = () => {
  const [scenario, setScenario] = useState<'on-track' | 'delay' | 'ahead'>('on-track');

  const scenarioData = {
    'on-track': {
      title: '① 順調 (オンスケジュール＆予算内)',
      pv: [0, 25, 50, 75, 100],
      ev: [0, 25, 50, 75, 100],
      ac: [0, 25, 50, 75, 100],
      cv: 'CV = 0 (予算通り)',
      sv: 'SV = 0 (予定通り)',
      desc: 'プロジェクトは計画通り正確に推移しています。差異がなく順調な状態です。'
    },
    'delay': {
      title: '② 進捗遅れ ＆ コスト超過（危険状態）',
      pv: [0, 25, 50, 75, 100],
      ev: [0, 15, 30, 45, 60], // 実績が計画より低い
      ac: [0, 30, 60, 90, 110], // 実コストが実績価値より高い
      cv: 'CV = EV - AC = 60 - 110 = -50万円 (コスト赤字)',
      sv: 'SV = EV - PV = 60 - 100 = -40万円 (進捗遅延)',
      desc: '進捗率が計画（PV）より遅れており、さらに実コスト（AC）がかかりすぎています（予算赤字）。要改善です。'
    },
    'ahead': {
      title: '③ 進捗順調 ＆ コスト削減（優良状態）',
      pv: [0, 25, 50, 75, 100],
      ev: [0, 30, 60, 85, 105], // 実績が計画より高い
      ac: [0, 20, 40, 65, 80], // 実コストが実績価値より低い
      cv: 'CV = EV - AC = 105 - 80 = +25万円 (コスト削減)',
      sv: 'SV = EV - PV = 105 - 100 = +5万円 (進捗順調)',
      desc: '予定より早くタスクが完了しており、さらに開発費用の支出を予算より低く抑えることができています。'
    }
  };

  const current = scenarioData[scenario];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Earned Value Management
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          EVM（アーンドバリューマネジメント）
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          PV（計画値）、EV（実績価値）、AC（実コスト）の3つの指標で、進捗と予算のズレを金額で評価します。
        </p>
      </div>

      {/* シナリオ選択 */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6 justify-center">
        {(['on-track', 'delay', 'ahead'] as const).map(s => (
          <button
            key={s}
            onClick={() => setScenario(s)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
              scenario === s
                ? 'bg-slate-800 border-indigo-500 text-indigo-400 shadow-sm'
                : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
            }`}
          >
            {s === 'on-track' && '① 計画通り順調'}
            {s === 'delay' && '② 遅延＆コスト超過'}
            {s === 'ahead' && '③ 順調＆コスト節約'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* 左側：EVM推移表現 (SVG) */}
        <div className="lg:col-span-6 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-center items-center min-h-[250px] relative overflow-hidden">
          <svg className="w-full h-48 max-w-[280px]" viewBox="0 0 100 60">
            {/* 軸 */}
            <line x1="10" y1="50" x2="95" y2="50" stroke="#475569" strokeWidth="0.8" />
            <line x1="10" y1="5" x2="10" y2="50" stroke="#475569" strokeWidth="0.8" />
            <text x="92" y="55" fontSize="2.5" fill="#475569" fontWeight="bold">時間</text>
            <text x="3" y="8" fontSize="2.5" fill="#475569" fontWeight="bold">金額</text>

            {/* PV (計画ライン) - 点線 */}
            <polyline
              fill="none"
              stroke="#64748b"
              strokeWidth="0.8"
              strokeDasharray="2"
              points={`10,50 30,${50 - current.pv[1] * 0.4} 50,${50 - current.pv[2] * 0.4} 70,${50 - current.pv[3] * 0.4} 90,${50 - current.pv[4] * 0.4}`}
            />
            <text x="91" y={50 - current.pv[4] * 0.4} fontSize="2.5" fill="#64748b" fontWeight="bold">PV</text>

            {/* EV (獲得価値) - 青線 */}
            <polyline
              fill="none"
              stroke="#3b82f6"
              strokeWidth="1.2"
              points={`10,50 30,${50 - current.ev[1] * 0.4} 50,${50 - current.ev[2] * 0.4} 70,${50 - current.ev[3] * 0.4} 90,${50 - current.ev[4] * 0.4}`}
            />
            <text x="91" y={50 - current.ev[4] * 0.4} fontSize="2.5" fill="#3b82f6" fontWeight="bold">EV</text>

            {/* AC (実コスト) - 紫線 */}
            <polyline
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="1.2"
              points={`10,50 30,${50 - current.ac[1] * 0.4} 50,${50 - current.ac[2] * 0.4} 70,${50 - current.ac[3] * 0.4} 90,${50 - current.ac[4] * 0.4}`}
            />
            <text x="91" y={50 - current.ac[4] * 0.4} fontSize="2.5" fill="#8b5cf6" fontWeight="bold">AC</text>
          </svg>
        </div>

        {/* 右側：計算結果と解説 */}
        <div className="lg:col-span-6 flex flex-col justify-between min-h-[250px]">
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-100 border-b border-slate-850 pb-2">
              分析シナリオ評価
            </h4>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold">
              {current.desc}
            </p>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="text-[9px] text-indigo-400 font-extrabold uppercase tracking-widest block mb-1">
                EVM差異分析指標
              </span>
              <div className="space-y-1 text-xs font-mono font-semibold text-slate-200">
                <p className={scenario === 'delay' ? 'text-rose-400' : 'text-slate-200'}>{current.cv}</p>
                <p className={scenario === 'delay' ? 'text-rose-400' : 'text-slate-200'}>{current.sv}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
