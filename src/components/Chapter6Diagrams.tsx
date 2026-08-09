import React from 'react';
import { 
  Laptop, 
  Settings, 
  Cpu, 
  ClipboardCheck, 
  RefreshCw, 
  ChevronRight, 
  Eye, 
  EyeOff, 
  CheckCircle,
  Truck,
  RotateCw,
  FolderSync,
  ArrowRight
} from 'lucide-react';

// ==========================================
// 1. V字モデル (DevProcessFlowDiagram)
// ==========================================
export const DevProcessFlowDiagram: React.FC = () => {
  const mapping = [
    { num: '①', dev: '要件定義 (目標決定)', test: '受入テスト (業務要件の確認)', desc: '利用者が求めるシステム要件（何を作りたいか）を定義し、最終的に「受入テスト」でそれを検証します。', color: 'border-rose-900/60 bg-rose-950/15 text-rose-400' },
    { num: '②', dev: '外部設計 (画面や仕様)', test: 'システムテスト (全体の機能検証)', desc: 'ユーザー視点での画面や帳票などの設計を行い、最終的に「システム全体の動作テスト」でそれを検証します。', color: 'border-blue-900/60 bg-blue-950/15 text-blue-400' },
    { num: '③', dev: '内部設計 (プログラム構造)', test: '結合テスト (部品同士の連携検証)', desc: 'プログラマ視点でのモジュール構成などを設計し、最終的に「部品同士を繋いだテスト」で検証します。', color: 'border-indigo-900/60 bg-indigo-950/15 text-indigo-400' },
    { num: '④', dev: 'プログラミング (コード実装)', test: '単体テスト (部品単体の動作検証)', desc: '実際のソースコードを作成し、まずは「モジュール（部品）単体で正しく動くか」をテスト（検証）します。', color: 'border-emerald-900/60 bg-emerald-950/15 text-emerald-400' }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Framework
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          システム開発のV字モデル（設計とテストの対応）
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          開発における各「設計フェーズ」と、それに対応する「テストフェーズ」の密接な関連性を示すV字モデル図です。
        </p>
      </div>

      <div className="space-y-4">
        {mapping.map((item, idx) => (
          <div 
            key={idx} 
            className={`p-4 rounded-xl border ${item.color} grid grid-cols-1 lg:grid-cols-12 gap-4 items-center`}
          >
            <div className="lg:col-span-1 text-center font-bold text-lg">{item.num}</div>
            <div className="lg:col-span-4 font-bold text-xs md:text-sm flex items-center justify-between">
              <span>{item.dev}</span>
              <span className="text-slate-500 font-mono">⮂</span>
            </div>
            <div className="lg:col-span-4 font-bold text-xs md:text-sm text-slate-200">
              {item.test}
            </div>
            <div className="lg:col-span-3 text-[10px] text-slate-400 leading-normal font-semibold">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// ==========================================
// 2. コンパイラ vs インタプリタ (CompilerVsInterpreterDiagram)
// ==========================================
export const CompilerVsInterpreterDiagram: React.FC = () => {
  const comparators = [
    {
      title: 'コンパイラ方式 (一括翻訳)',
      subtitle: 'C言語, Java, C++ など',
      process: 'ソースコード全体を一括で機械語に翻訳し、実行ファイル（.exe等）を作成して実行する。',
      speed: '実行速度：非常に高速（すでに翻訳済みのため）',
      debug: '開発効率：低い（修正のたびに再コンパイルが必要）',
      icon: Cpu,
      borderColor: 'border-blue-900/60',
      bgColor: 'bg-blue-950/15',
      textColor: 'text-blue-400'
    },
    {
      title: 'インタプリタ方式 (逐次翻訳)',
      subtitle: 'Python, JavaScript, Ruby など',
      process: 'プログラムを1行ずつ機械語に翻訳しながら、その場で即時実行する。',
      speed: '実行速度：遅い（実行と同時に翻訳を行うため）',
      debug: '開発効率：高い（コードを書き換えてすぐに実行テストが可能）',
      icon: RefreshCw,
      borderColor: 'border-emerald-900/60',
      bgColor: 'bg-emerald-950/15',
      textColor: 'text-emerald-400'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Comparison
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          コンパイラ方式 vs インタプリタ方式の対比
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          プログラミング言語がコンピュータ（CPU）で処理される際の翻訳プロセスの違いです。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {comparators.map((comp, idx) => {
          const Icon = comp.icon;
          return (
            <div 
              key={idx} 
              className={`p-5 rounded-2xl border ${comp.borderColor} ${comp.bgColor} flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className={`text-base font-black ${comp.textColor}`}>{comp.title}</h4>
                  <div className={`p-1.5 bg-slate-900 border ${comp.borderColor} ${comp.textColor} rounded-lg`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 font-bold">{comp.subtitle}</p>
                <p className="text-xs text-slate-350 leading-relaxed font-semibold">
                  {comp.process}
                </p>
              </div>

              <div className="space-y-1.5 pt-3 border-t border-slate-800/80 text-[11px] font-bold text-slate-300">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  {comp.speed}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  {comp.debug}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


// ==========================================
// 3. ブラックボックス vs ホワイトボックス (TestingMethodsDiagram)
// ==========================================
export const TestingMethodsDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Analysis
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          ブラックボックス vs ホワイトボックステスト
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          プログラムの中身（ソースコード）を見るか・見ないかによるテスト手法の分類図です。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ブラックボックステスト */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-extrabold text-blue-400">ブラックボックステスト</h4>
              <div className="p-1.5 bg-slate-900 border border-blue-900 rounded-lg text-blue-400">
                <EyeOff className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold">
              プログラムの内部構造やコードは無視し、外部仕様（仕様書）通りに「入力に対して正しい出力が返るか」だけを検証するテストです。
            </p>
          </div>

          <div className="bg-slate-900 p-3 rounded-xl border border-slate-850 text-[10px] font-bold text-slate-400 space-y-1">
            <div>・テスト対象：システム全体の機能、画面やインターフェース</div>
            <div>・実施フェーズ：システムテスト、受入テストなど</div>
          </div>
        </div>

        {/* ホワイトボックステスト */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-extrabold text-emerald-400">ホワイトボックステスト</h4>
              <div className="p-1.5 bg-slate-900 border border-emerald-900 rounded-lg text-emerald-400">
                <Eye className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold">
              プログラムの内部ロジック、if分岐やループ構造などのソースコードを直接確認し、すべての命令経路が正しく通るかを網羅的に検証するテストです。
            </p>
          </div>

          <div className="bg-slate-900 p-3 rounded-xl border border-slate-850 text-[10px] font-bold text-slate-400 space-y-1">
            <div>・テスト対象：モジュールのロジック、命令・分岐網羅</div>
            <div>・実施フェーズ：単体テストなど（開発者自身が実施）</div>
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
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Definition
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          システム運用と保守の定義比較
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          開発・カットオーバー後のシステムに対する「運用」と「保守」の役割分担マップです。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 運用 */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-indigo-950/60 rounded-xl border border-indigo-900 text-indigo-400">
              <RotateCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-100">① システム運用 (Operations)</h4>
              <span className="text-[9px] text-slate-500 font-extrabold block">システムを安定して動かし続ける業務</span>
            </div>
          </div>
          <p className="text-xs text-slate-350 leading-relaxed font-semibold">
            日々正常にサービスを稼働させるための監視やルーティン業務です。基本的にはプログラムの改修は伴いません。
          </p>
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-850 text-[10px] font-bold text-slate-400 space-y-1.5">
            <div>・稼働監視：サーバーがダウンしていないか24時間監視</div>
            <div>・バックアップ：万が一に備え定期的にコピーを保存</div>
            <div>・サポート：ユーザーのログインエラー等への対処</div>
          </div>
        </div>

        {/* 保守 */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-950/60 rounded-xl border border-emerald-900 text-emerald-400">
              <FolderSync className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-100">② システム保守 (Maintenance)</h4>
              <span className="text-[9px] text-slate-500 font-extrabold block">システムに変更・修正・改修を加える業務</span>
            </div>
          </div>
          <p className="text-xs text-slate-350 leading-relaxed font-semibold">
            不具合対応や環境変化、要望に応じてプログラムの変更・アップデートを施す業務です。
          </p>
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-850 text-[10px] font-bold text-slate-400 space-y-1.5">
            <div>・バグ（不具合）修正：プログラムのエラー箇所を修正</div>
            <div>・環境適応：法改正（増税等）やOS更新に合わせ修正</div>
            <div>・機能追加：新しい決済手段の導入など追加開発</div>
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
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Process
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          ウォーターフォール vs アジャイル開発モデル
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          計画重視で一方向に進むウォーターフォールと、小さな反復サイクルを繰り返すアジャイルのプロセスの比較です。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ウォーターフォール */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="space-y-1.5">
            <h4 className="text-sm font-extrabold text-blue-400">ウォーターフォールモデル</h4>
            <span className="text-[9px] text-slate-550 font-bold block">計画重視 ➔ 一方向型</span>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold pt-1">
              要件定義からテストまでの工程を滝（Waterfall）のように、上から下へと後戻りせずに一方向で進める開発モデル。
            </p>
          </div>

          <div className="bg-slate-900 p-3 rounded-lg border border-slate-850 text-[10px] font-bold text-slate-400 space-y-1">
            <div>・長所：進捗管理が容易、大人数での開発に適する</div>
            <div>・短所：後半の仕様変更が極めて困難、手戻りが大きい</div>
            <div>・用途：大規模システム、金融基幹システムなど</div>
          </div>
        </div>

        {/* アジャイル */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="space-y-1.5">
            <h4 className="text-sm font-extrabold text-emerald-400">アジャイルモデル</h4>
            <span className="text-[9px] text-slate-550 font-bold block">反復・スピード重視 ➔ 柔軟変化型</span>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold pt-1">
              「計画 ➔ 設計 ➔ 開発 ➔ テスト」という小さな開発単位（イテレーション）を繰り返し、徐々に全体を完成させる開発モデル。
            </p>
          </div>

          <div className="bg-slate-900 p-3 rounded-lg border border-slate-850 text-[10px] font-bold text-slate-400 space-y-1">
            <div>・長所：仕様変更や追加要件に柔軟に対応できる</div>
            <div>・短所：全体のスケジュールや見積もりの管理が難しい</div>
            <div>・用途：Webサービス、スマートフォンアプリなど</div>
          </div>
        </div>
      </div>
    </div>
  );
};
