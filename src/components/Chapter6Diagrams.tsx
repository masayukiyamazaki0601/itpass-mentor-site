import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Laptop, 
  Settings, 
  Cpu, 
  ClipboardCheck, 
  Play, 
  RefreshCw, 
  ChevronRight, 
  Layers, 
  Eye, 
  EyeOff, 
  ShieldAlert, 
  CheckCircle,
  Truck,
  RotateCw,
  FolderSync
} from 'lucide-react';

// ==========================================
// 1. V字モデル (DevProcessFlowDiagram)
// ==========================================
export const DevProcessFlowDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    // 開発側
    { id: 'req', type: 'dev', title: '① 要件定義', partner: 'acc', desc: '利用者が求める機能や性能を決定する工程。', deliverable: '成果物：要件定義書' },
    { id: 'ext', type: 'dev', title: '② 外部設計', partner: 'sys', desc: 'システムを「使う人（画面や帳票など）」の視点から設計する工程。', deliverable: '成果物：外部設計書' },
    { id: 'int', type: 'dev', title: '③ 内部設計', partner: 'int-test', desc: 'システムを「作る人（プログラム構造やデータ構造）」の視点から設計する工程。', deliverable: '成果物：内部設計書' },
    { id: 'prog', type: 'dev', title: '④ プログラミング', partner: 'unit', desc: '設計書に従って、実際にプログラムコード（ソースコード）を書く工程。', deliverable: '成果物：プログラム（ソースコード）' },
    // テスト側
    { id: 'unit', type: 'test', title: '⑤ 単体テスト', partner: 'prog', desc: 'プログラムの「部品ごと（モジュール単位）」に正しく動くかテストする工程。', deliverable: 'テスト基準：内部設計書' },
    { id: 'int-test', type: 'test', title: '⑥ 結合テスト', partner: 'int', desc: '部品同士を「組み合わせて」、モジュール間の連携が正しいかテストする工程。', deliverable: 'テスト基準：内部設計書' },
    { id: 'sys', type: 'test', title: '⑦ システムテスト', partner: 'ext', desc: 'システム「全体」として、必要な機能や速度（非機能）が満たされているかテストする工程。', deliverable: 'テスト基準：外部設計書' },
    { id: 'acc', type: 'test', title: '⑧ 受入テスト', partner: 'req', desc: '発注元のユーザー自身が、システムが「業務の要件」を満たしているか確認する最終テスト。', deliverable: 'テスト基準：要件定義書' }
  ];

  const getHighlight = (id: string) => {
    if (!activeNode) return false;
    const current = nodes.find(n => n.id === activeNode);
    return activeNode === id || (current && current.partner === id);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          V-Model Simulation
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          システム開発のV字モデル（設計とテストの対応）
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          開発における各「設計フェーズ」と、それに対応する「テストフェーズ」は密接に結びついています。ノードをクリックして対応関係を確かめましょう。
        </p>
      </div>

      {/* V字構成 */}
      <div className="grid grid-cols-2 gap-4 md:gap-8 items-start mb-6">
        {/* 左側：開発・設計プロセス */}
        <div className="space-y-3">
          <h4 className="text-xs font-extrabold text-blue-400 uppercase tracking-widest border-b border-slate-800 pb-2">
            ◀ 開発（設計・実装）
          </h4>
          {nodes.filter(n => n.type === 'dev').map(node => {
            const isSel = activeNode === node.id;
            const isHil = getHighlight(node.id);
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(isSel ? null : node.id)}
                className={`w-full p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                  isSel 
                    ? 'bg-blue-950/50 border-blue-500 shadow-md shadow-blue-500/10' 
                    : isHil 
                      ? 'bg-slate-800 border-indigo-500 text-slate-100 shadow-sm'
                      : 'bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800'
                }`}
              >
                <span className="text-xs font-bold">{node.title}</span>
              </button>
            );
          })}
        </div>

        {/* 右側：テストプロセス */}
        <div className="space-y-3">
          <h4 className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest border-b border-slate-800 pb-2">
            テスト（検証） ▶
          </h4>
          {nodes.filter(n => n.type === 'test').reverse().map(node => {
            const isSel = activeNode === node.id;
            const isHil = getHighlight(node.id);
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(isSel ? null : node.id)}
                className={`w-full p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                  isSel 
                    ? 'bg-emerald-950/50 border-emerald-500 shadow-md shadow-emerald-500/10' 
                    : isHil 
                      ? 'bg-slate-800 border-indigo-500 text-slate-100 shadow-sm'
                      : 'bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800'
                }`}
              >
                <span className="text-xs font-bold">{node.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 詳細解説 */}
      <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl min-h-[90px] flex items-center justify-center">
        {activeNode ? (
          <div className="w-full text-left">
            {(() => {
              const current = nodes.find(n => n.id === activeNode);
              const partner = nodes.find(n => n.id === current?.partner);
              if (!current || !partner) return null;
              return (
                <div className="space-y-1.5">
                  <h4 className="text-xs md:text-sm font-extrabold text-slate-100 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    {current.title} ➜ 対応テスト：{partner.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-semibold">
                    {current.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {current.deliverable}
                    </span>
                    <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {partner.deliverable}
                    </span>
                  </div>
                </div>
              );
            })()}
          </div>
        ) : (
          <p className="text-xs md:text-sm text-slate-400 font-bold text-center">
            設計またはテストのノードをクリックすると、対応するV字モデルの関連性と詳細情報が表示されます。
          </p>
        )}
      </div>
    </div>
  );
};


// ==========================================
// 2. コンパイラ vs インタプリタ (CompilerVsInterpreterDiagram)
// ==========================================
export const CompilerVsInterpreterDiagram: React.FC = () => {
  const [method, setMethod] = useState<'compiler' | 'interpreter'>('compiler');
  const [step, setStep] = useState<number>(0);
  const [isCompiling, setIsCompiling] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);

  const codeLines = [
    'Line 1: print("Hello")',
    'Line 2: x = 5',
    'Line 3: y = 10',
    'Line 4: print(x + y)'
  ];

  const triggerSimulation = () => {
    if (isCompiling || isDone) return;
    setIsCompiling(true);
    setStep(0);

    if (method === 'compiler') {
      // コンパイラは一括で翻訳
      setTimeout(() => {
        setStep(4);
        setIsCompiling(false);
        setIsDone(true);
      }, 1500);
    } else {
      // インタプリタは1行ずつ実行
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setStep(current);
        if (current === 4) {
          clearInterval(interval);
          setIsCompiling(false);
          setIsDone(true);
        }
      }, 800);
    }
  };

  const resetSim = () => {
    setStep(0);
    setIsDone(false);
    setIsCompiling(false);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
            Language Translators
          </span>
          <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            コンパイラ方式 vs インタプリタ方式
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
            プログラミングコードがどのように機械語に翻訳されて実行されるか、違いを可視化します。
          </p>
        </div>

        <div className="flex gap-2 self-start md:self-auto">
          <button
            onClick={triggerSimulation}
            disabled={isCompiling || isDone}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-600 disabled:border-slate-900 border border-slate-800 text-white font-bold text-xs py-2 px-4 rounded-xl cursor-pointer"
          >
            翻訳実行
          </button>
          <button
            onClick={resetSim}
            className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs py-2 px-4 rounded-xl cursor-pointer border border-slate-700"
          >
            リセット
          </button>
        </div>
      </div>

      {/* 方式選択 */}
      <div className="flex gap-2 mb-6 justify-center">
        {(['compiler', 'interpreter'] as const).map(t => (
          <button
            key={t}
            onClick={() => {
              setMethod(t);
              resetSim();
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
              method === t
                ? 'bg-slate-800 border-indigo-500 text-indigo-400 shadow-sm'
                : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
            }`}
          >
            {t === 'compiler' ? 'コンパイラ（一括翻訳）' : 'インタプリタ（1行ずつ逐次翻訳）'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* 左側：ソースコードの翻訳表現 */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-center min-h-[220px]">
          <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">
            ソースコード (人間が書くコード)
          </h4>
          <div className="space-y-2 font-mono text-xs">
            {codeLines.map((line, idx) => {
              const isProcessing = method === 'interpreter' ? idx === step : isCompiling;
              const isCompleted = method === 'interpreter' ? idx < step : isDone;
              return (
                <div
                  key={idx}
                  className={`p-2 rounded-lg transition-all border ${
                    isProcessing 
                      ? 'bg-yellow-950/30 border-yellow-500 text-yellow-400' 
                      : isCompleted
                        ? 'bg-emerald-950/20 border-emerald-900 text-emerald-400'
                        : 'bg-slate-900/60 border-slate-900 text-slate-500'
                  }`}
                >
                  {line}
                </div>
              );
            })}
          </div>
        </div>

        {/* 右側：機械語・実行結果 */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
          <div>
            <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest mb-3 border-b border-slate-800 pb-2">
              機械語の生成 ➜ 実行結果
            </h4>
            
            {method === 'compiler' ? (
              <div className="space-y-3">
                {isCompiling && (
                  <p className="text-xs text-yellow-400 font-bold animate-pulse">全行を一瞬で機械語に一括翻訳中...</p>
                )}
                {isDone && (
                  <div className="space-y-2">
                    <p className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-900/50 inline-block font-extrabold">
                      実行ファイル (.exe) 生成完了
                    </p>
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-xs font-mono text-slate-300">
                      Hello<br />15
                    </div>
                  </div>
                )}
                {!isCompiling && !isDone && (
                  <p className="text-xs text-slate-500 font-semibold">「翻訳実行」を押すと、全コードが一括翻訳されます。</p>
                )}
              </div>
            ) : (
              <div className="space-y-2">
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 min-h-[80px]">
                  {step >= 1 && <p>Hello</p>}
                  {step >= 4 && <p>15</p>}
                </div>
                {isCompiling && (
                  <p className="text-[9px] text-yellow-400 font-bold">Line {step + 1} を読み込んで実行中...</p>
                )}
              </div>
            )}
          </div>

          <div className="p-3 bg-slate-900/50 border border-slate-800/80 rounded-xl mt-4">
            <p className="text-xs text-slate-300 leading-relaxed font-semibold">
              {method === 'compiler'
                ? '【コンパイラ（C言語, Java等）】最初にプログラム全体を一括で翻訳するため、実行時の速度が非常に高速ですが、翻訳に時間がかかります。'
                : '【インタプリタ（Python, JavaScript等）】1行ずつ解釈しながら実行するため、開発中にすぐテストできますが、実行時の速度はコンパイラより遅くなります。'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 3. ブラックボックス vs ホワイトボックス (TestingMethodsDiagram)
// ==========================================
export const TestingMethodsDiagram: React.FC = () => {
  const [method, setMethod] = useState<'black' | 'white'>('black');
  const [testInput, setTestInput] = useState<string | null>(null);
  const [isTesting, setIsTesting] = useState<boolean>(false);

  const runTest = (val: string) => {
    if (isTesting) return;
    setIsTesting(true);
    setTestInput(val);
    setTimeout(() => {
      setIsTesting(false);
    }, 1500);
  };

  const getOutput = () => {
    if (testInput === 'A') return '出力：お茶を出します';
    if (testInput === 'B') return '出力：お水を出します';
    return 'エラー：金額不足';
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Software Testing
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          ブラックボックス vs ホワイトボックステスト
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          中身を見ずに仕様を確認する「ブラックボックス」と、内部ロジックを網羅する「ホワイトボックス」の違いを確かめましょう。
        </p>
      </div>

      {/* テスト方法切り替え */}
      <div className="flex gap-2 mb-6 justify-center">
        {(['black', 'white'] as const).map(t => (
          <button
            key={t}
            onClick={() => {
              setMethod(t);
              setTestInput(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
              method === t
                ? 'bg-slate-800 border-indigo-500 text-indigo-400 shadow-sm'
                : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
            }`}
          >
            {t === 'black' ? 'ブラックボックステスト（中身非公開）' : 'ホワイトボックステスト（中身公開）'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* 左側：テストシミュレーションボックス */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[300px] relative overflow-hidden">
          <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest border-b border-slate-800 pb-2">
            システム内部 (テスト実行)
          </h4>

          {/* テストインプット選択 */}
          <div className="flex justify-center gap-2 my-4 relative z-20">
            {['A', 'B', 'C'].map(val => (
              <button
                key={val}
                onClick={() => runTest(val)}
                disabled={isTesting}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-300 hover:border-slate-500 cursor-pointer disabled:opacity-40"
              >
                値{val}
              </button>
            ))}
          </div>

          {/* テスト用ボックスグラフィック */}
          <div className="flex-1 flex items-center justify-center py-4">
            {method === 'black' ? (
              // ブラックボックス
              <div className="w-28 h-28 bg-slate-900 border-2 border-slate-700 rounded-2xl flex items-center justify-center relative">
                <EyeOff className="w-8 h-8 text-slate-500" />
                <span className="text-[8px] text-slate-600 font-extrabold absolute bottom-2">BLACK BOX</span>
              </div>
            ) : (
              // ホワイトボックス (透明で分岐が見える)
              <div className="w-40 h-28 bg-slate-900/40 border border-indigo-500/50 rounded-2xl flex flex-col items-center justify-center p-3 relative">
                <Eye className="w-5 h-5 text-indigo-400 absolute top-2 right-2" />
                <div className="space-y-1 font-mono text-[9px] text-slate-300 w-full">
                  <div className={`p-1 rounded ${testInput ? 'bg-indigo-950/20 border border-indigo-900 text-indigo-300' : ''}`}>
                    if (値 == "A") お茶
                  </div>
                  <div className={`p-1 rounded ${testInput === 'B' ? 'bg-indigo-950/20 border border-indigo-900 text-indigo-300' : ''}`}>
                    else if (値 == "B") お水
                  </div>
                  <div className={`p-1 rounded ${testInput === 'C' ? 'bg-indigo-950/20 border border-indigo-900 text-indigo-300' : ''}`}>
                    else エラー
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* テスト出力結果 */}
          <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center min-h-[50px] flex items-center justify-center">
            {isTesting ? (
              <p className="text-xs text-yellow-400 font-bold animate-pulse">テストデータ処理中...</p>
            ) : testInput ? (
              <p className="text-xs text-slate-200 font-bold">{getOutput()}</p>
            ) : (
              <p className="text-[10px] text-slate-500 font-bold">上のボタンを押して、入力値（テストデータ）を流してください。</p>
            )}
          </div>
        </div>

        {/* 右側：解説カード */}
        <div className="lg:col-span-2 md:col-span-1 flex flex-col justify-between p-1">
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-100">
              {method === 'black' ? 'ブラックボックステスト' : 'ホワイトボックステスト'}
            </h4>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-semibold">
              {method === 'black'
                ? 'システムの内部構造（コード）は一切見ず、仕様書通りに「正しい入力に対して正しい出力が返るか」を確認するテスト。システムテストや受入テストなど、主に後半のテスト工程で使われます。'
                : 'プログラムの内部構造やコードのロジックが正しいかを検証するテスト。if分岐などの全てのルートを通過するか（網羅性）を確認します。主に単体テストなどの初期の工程で開発者自身が行います。'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 4. 運用と保守 (OpMaintFlowDiagram)
// ==========================================
export const OpMaintFlowDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'op' | 'maint'>('op');

  const content = {
    op: {
      title: 'システム運用 (Operations)',
      desc: 'システムを「日々、正常に動かし続ける」ための業務。ルーティンワークや監視が中心です。',
      items: [
        { title: '稼働監視', desc: 'サーバーがダウンしていないか、アクセス過多になっていないかを24時間監視します。' },
        { title: '自動バックアップ', desc: '万が一の障害に備え、毎夜データを自動でバックアップ保存します。' },
        { title: 'ユーザーサポート', desc: 'パスワード再発行や利用者の使い方の問い合わせに対応します。' }
      ]
    },
    maint: {
      title: 'システム保守 (Maintenance)',
      desc: 'システムに「変更や改修を加える」ための業務。トラブルが起きた時や、要望に応じて手を加えます。',
      items: [
        { title: 'バグ（不具合）修正', desc: 'プログラムの不具合が発見された際、原因を特定してコードを書き換えます。' },
        { title: '法改正・環境対応', desc: '消費税増税やOSのアップデートに合わせて、プログラムをアップデートします。' },
        { title: '機能の追加', desc: '「新しい決済手段を追加したい」などの要望を受けて、機能を追加開発します。' }
      ]
    }
  };

  const current = content[activeTab];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Operation & Maintenance
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          システムの運用と保守の違い
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          リリース後のシステムを「動かす（運用）」ことと、「手入れする（保守）」ことの違いを比較します。
        </p>
      </div>

      {/* タブ */}
      <div className="flex gap-2.5 mb-6 justify-center">
        {(['op', 'maint'] as const).map(t => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-5 py-3 rounded-2xl font-bold text-xs md:text-sm transition-all border cursor-pointer ${
              activeTab === t
                ? 'bg-slate-800 border-indigo-400 text-indigo-400 scale-105 shadow-sm'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
            }`}
          >
            {t === 'op' ? '運用 (動かす)' : '保守 (直す・改修する)'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 左側：業務イメージ */}
        <div className="lg:col-span-5 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center items-center min-h-[240px]">
          {activeTab === 'op' ? (
            <div className="flex flex-col items-center">
              <RotateCw className="w-16 h-16 text-indigo-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="text-[10px] text-indigo-400 bg-indigo-950 px-2.5 py-1 rounded-md border border-indigo-900/50 font-bold mt-4">
                日々の安定稼働ループ
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <FolderSync className="w-16 h-16 text-emerald-400 animate-pulse" />
              <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-md border border-emerald-900/50 font-bold mt-4">
                アップデート・コード改修
              </span>
            </div>
          )}
        </div>

        {/* 右側：解説カード */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <h4 className="text-base font-bold text-slate-100">{current.title}</h4>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-semibold mt-2">
              {current.desc}
            </p>
          </div>

          <div className="space-y-2">
            {current.items.map((item, idx) => (
              <div key={idx} className="bg-slate-950 p-3.5 rounded-xl border border-slate-850">
                <h5 className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  {item.title}
                </h5>
                <p className="text-[10px] md:text-xs text-slate-400 mt-1 leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 5. ウォーターフォール vs アジャイル (DevModelsComparisonDiagram)
// ==========================================
export const DevModelsComparisonDiagram: React.FC = () => {
  const [model, setModel] = useState<'waterfall' | 'agile'>('waterfall');
  const [step, setStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleStartSim = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setStep(0);

    if (model === 'waterfall') {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setStep(current);
        if (current === 4) {
          clearInterval(interval);
          setIsPlaying(false);
        }
      }, 1000);
    } else {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setStep(current);
        if (current === 6) {
          clearInterval(interval);
          setIsPlaying(false);
        }
      }, 600);
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
            Development Models
          </span>
          <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            ウォーターフォール vs アジャイル開発モデル
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
            計画重視で一気に進む「ウォーターフォール」と、反復を繰り返す「アジャイル」のプロセスの違いを比較します。
          </p>
        </div>

        <button
          onClick={handleStartSim}
          disabled={isPlaying}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-600 disabled:border-slate-900 border border-slate-800 text-white font-bold text-xs md:text-sm py-2.5 px-5 rounded-2xl shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 self-start md:self-auto"
        >
          <Play className="w-4 h-4" /> 開発開始
        </button>
      </div>

      {/* モデル選択 */}
      <div className="flex gap-2 mb-6 justify-center">
        {(['waterfall', 'agile'] as const).map(t => (
          <button
            key={t}
            onClick={() => {
              setModel(t);
              setStep(0);
              setIsPlaying(false);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
              model === t
                ? 'bg-slate-800 border-indigo-500 text-indigo-400 shadow-sm'
                : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
            }`}
          >
            {t === 'waterfall' ? 'ウォーターフォールモデル' : 'アジャイルモデル'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* 左側：シミュレーション表現 */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-center min-h-[260px] relative overflow-hidden">
          <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest border-b border-slate-800 pb-2 mb-4">
            進行プロセス
          </h4>

          {model === 'waterfall' ? (
            // ウォーターフォールモデル (滝)
            <div className="space-y-2 text-xs w-full max-w-[200px] mx-auto">
              {['① 要件定義', '② 設計', '③ プログラミング', '④ テスト'].map((name, idx) => {
                const isActive = idx === step;
                const isPassed = idx < step;
                return (
                  <div
                    key={idx}
                    className={`p-2 rounded-xl border text-center transition-all ${
                      isActive 
                        ? 'bg-blue-950/30 border-blue-500 text-blue-400 shadow-md font-bold' 
                        : isPassed
                          ? 'bg-slate-800/80 border-slate-850 text-slate-400'
                          : 'bg-slate-900/60 border-slate-900 text-slate-650'
                    }`}
                  >
                    {name}
                  </div>
                );
              })}
            </div>
          ) : (
            // アジャイルモデル (反復サイクル)
            <div className="flex flex-col items-center justify-center">
              <div className="w-24 h-24 rounded-full border-4 border-dashed border-indigo-500/50 flex items-center justify-center relative">
                <RotateCw className={`w-8 h-8 text-indigo-400 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
                <span className="text-[8px] text-slate-500 font-extrabold absolute -bottom-6">イテレーション (反復)</span>
              </div>
              <div className="mt-8 text-center text-xs font-bold text-slate-300">
                ループ回数：<span className="text-indigo-400 font-extrabold text-sm">{Math.min(3, Math.ceil(step / 2))}</span> 周目
              </div>
            </div>
          )}
        </div>

        {/* 右側：解説カード */}
        <div className="lg:col-span-2 md:col-span-1 flex flex-col justify-between p-1">
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-100">
              {model === 'waterfall' ? 'ウォーターフォールモデルの特徴' : 'アジャイルモデルの特徴'}
            </h4>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-semibold">
              {model === 'waterfall'
                ? '【ウォーターフォール】水が上から下に流れ落ちるように、要件定義からテストまでの工程を順番に一発で進める開発手法。大規模システムなど要件が固まっている開発に向いていますが、後半で仕様ミスが発覚した際の手戻りコストが非常に大きくなります。'
                : '【アジャイル】「計画 ➜ 設計 ➜ 開発 ➜ テスト」という小さなサイクル（イテレーション）を何回も繰り返しながら、徐々に機能を追加・完成させていく手法。仕様変更に柔軟に対応できるため、Webサービスやスマホアプリの開発に最適です。'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
