import React from 'react';
import {
  Database,
  TableProperties,
  Link as LinkIcon,
  SplitSquareHorizontal,
  Save,
  Search,
  RefreshCw,
  Trash2,
  FileSpreadsheet,
  CheckCircle2,
  GitFork,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Layers
} from 'lucide-react';

// ==========================================
// 1. データベースの基本 (DatabaseBasicsStaticDiagram)
// ==========================================
export const DatabaseBasicsStaticDiagram: React.FC = () => {
  const operations = [
    {
      title: '① 保存 (登録)',
      icon: Save,
      desc: '新しいデータをデータベースに登録します。',
      example: 'カフェの例：新規の会員情報（ID・氏名・住所）を追加する。',
      color: 'text-blue-400 bg-blue-950/15 border-blue-900/60'
    },
    {
      title: '② 検索',
      icon: Search,
      desc: '保存された大量のデータから、必要な情報だけを瞬時に見つけ出します。',
      example: 'カフェの例：来店したお客様の名前や電話番号で会員情報を探す。',
      color: 'text-emerald-400 bg-emerald-950/15 border-emerald-900/60'
    },
    {
      title: '③ 更新・削除',
      icon: RefreshCw,
      desc: '登録済みのデータを修正（更新）したり、不要なデータを消去（削除）します。',
      example: 'カフェの例：引っ越しに伴う住所変更（更新）や、退会処理（削除）。',
      color: 'text-amber-400 bg-amber-950/15 border-amber-900/60'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Database Basics
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          データベースの3大基本操作
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          データベース（データの倉庫）を扱う際に行う、基本的な3つの操作イメージです。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {operations.map((op, idx) => {
          const Icon = op.icon;
          return (
            <div 
              key={idx} 
              className={`p-4 rounded-xl border ${op.color} flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-black text-slate-100">{op.title}</h4>
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-[11px] text-slate-350 leading-relaxed font-semibold">
                  {op.desc}
                </p>
              </div>

              <div className="bg-slate-950/70 p-2.5 rounded border border-slate-850 text-[10px]">
                <p className="text-slate-300 font-medium">
                  {op.example}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 対比セクション */}
      <div className="mt-8 pt-6 border-t border-slate-800/80">
        <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3">
          表計算ソフト (Excel) とデータベースの違い
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-850">
            <span className="text-xs font-bold text-rose-400 flex items-center gap-1.5 mb-1.5">
              <FileSpreadsheet className="w-4 h-4" />
              表計算ソフト (Excelなど)
            </span>
            <ul className="text-[11px] text-slate-350 space-y-1 font-semibold leading-relaxed">
              <li>・目的：個人のデータ入力、集計、グラフ作成</li>
              <li>・同時利用：基本的に1人（複数人で同時に上書きすると競合する）</li>
              <li>・データ量：数万件を超えると動作が急激に遅くなる</li>
            </ul>
          </div>
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-850">
            <span className="text-xs font-bold text-indigo-400 flex items-center gap-1.5 mb-1.5">
              <Database className="w-4 h-4" />
              データベース (DBMS管理)
            </span>
            <ul className="text-[11px] text-slate-350 space-y-1 font-semibold leading-relaxed">
              <li>・目的：社内全体でのデータ一元管理・共有</li>
              <li>・同時利用：何十人、何百人が同時にアクセス・更新しても安全</li>
              <li>・データ量：百万件以上の大量データも超高速で検索可能</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. 関係データベース (RelationalDbStaticDiagram)
// ==========================================
export const RelationalDbStaticDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Relational Database
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          関係データベース(RDB)の構造とキー連携
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          データを「表（テーブル）」の形で整理し、テーブル同士を「キー」で結びつけて管理する仕組みです。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 左：会員テーブル */}
        <div className="lg:col-span-6 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="bg-slate-900 px-4 py-2 rounded-xl border border-slate-850 flex items-center gap-2">
              <TableProperties className="w-4 h-4 text-indigo-400" />
              <span className="font-bold text-xs">会員テーブル (主表)</span>
            </div>
            
            <table className="w-full text-[10px] text-left border-collapse font-semibold">
              <thead className="text-slate-500 bg-slate-900/40 border-b border-slate-800">
                <tr>
                  <th className="p-2 text-indigo-400">会員ID (主キー) ★</th>
                  <th className="p-2">氏名</th>
                  <th className="p-2">住所</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850">
                <tr>
                  <td className="p-2 font-mono text-indigo-400 font-bold">C-101</td>
                  <td className="p-2">山田 太郎</td>
                  <td className="p-2">東京都...</td>
                </tr>
                <tr>
                  <td className="p-2 font-mono text-indigo-400 font-bold">C-102</td>
                  <td className="p-2">鈴木 花子</td>
                  <td className="p-2">大阪府...</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[9px] text-slate-500 leading-relaxed mt-4">
            ※ <strong>主キー (Primary Key)</strong>：表の中の1行を「これ1つで特定できる」項目。重複する値や空（NULL）は登録できません。
          </p>
        </div>

        {/* 右：注文テーブル */}
        <div className="lg:col-span-6 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="bg-slate-900 px-4 py-2 rounded-xl border border-slate-850 flex items-center gap-2">
              <TableProperties className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-xs">注文テーブル (従表)</span>
            </div>
            
            <table className="w-full text-[10px] text-left border-collapse font-semibold">
              <thead className="text-slate-500 bg-slate-900/40 border-b border-slate-800">
                <tr>
                  <th className="p-2">注文ID (主キー)</th>
                  <th className="p-2 text-emerald-400">会員ID (外部キー) 🔗</th>
                  <th className="p-2">注文商品</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850">
                <tr>
                  <td className="p-2">O-001</td>
                  <td className="p-2 font-mono text-emerald-400 font-bold">C-101</td>
                  <td className="p-2">コーヒー</td>
                </tr>
                <tr>
                  <td className="p-2">O-002</td>
                  <td className="p-2 font-mono text-emerald-400 font-bold">C-102</td>
                  <td className="p-2">ケーキ</td>
                </tr>
                <tr>
                  <td className="p-2">O-003</td>
                  <td className="p-2 font-mono text-emerald-400 font-bold">C-101</td>
                  <td className="p-2">サンドイッチ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[9px] text-slate-500 leading-relaxed mt-4">
            ※ <strong>外部キー (Foreign Key)</strong>：他の表の「主キー」を参照し、関連付ける項目。これを用いて表同士の関連性（リレーションシップ）を作ります。
          </p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. データベース設計 (DatabaseDesignStaticDiagram)
// ==========================================
export const DatabaseDesignStaticDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Database Design
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          DB設計のプロセスと正規化・E-R図
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          データベースを作る前に行う「設計」の3フェーズ、およびデータの重複を排除する「正規化」の概要です。
        </p>
      </div>

      <div className="space-y-6">
        {/* 設計の3ステップ */}
        <div className="bg-slate-950/85 p-5 rounded-2xl border border-slate-800 space-y-4">
          <h4 className="text-xs font-extrabold text-slate-455 uppercase tracking-widest border-b border-slate-800 pb-2">
            データベース設計の3ステップ
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-850">
              <span className="text-xs font-extrabold text-blue-400 block">1. 概念設計</span>
              <p className="text-[10px] text-slate-350 leading-relaxed font-semibold mt-1">
                業務に必要なデータ項目を洗い出し、<strong>E-R図</strong>を使ってデータ同士の関連性を整理します（特定の製品には依存しません）。
              </p>
            </div>
            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-850">
              <span className="text-xs font-extrabold text-indigo-400 block">2. 論理設計</span>
              <p className="text-[10px] text-slate-350 leading-relaxed font-semibold mt-1">
                概念設計をベースに、関係データベースの<strong>テーブル（表）の形にマッピングし、正規化</strong>を行って重複を排除します。
              </p>
            </div>
            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-850">
              <span className="text-xs font-extrabold text-emerald-400 block">3. 物理設計</span>
              <p className="text-[10px] text-slate-350 leading-relaxed font-semibold mt-1">
                使用するデータベース管理システム(DBMS)に合わせて、<strong>データ型、格納場所、インデックス</strong>などの物理的な仕様を決めます。
              </p>
            </div>
          </div>
        </div>

        {/* 正規化プロセスとE-R図関係 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">
                データの「正規化」の目的
              </h4>
              <p className="text-xs text-slate-350 leading-relaxed font-semibold">
                正規化は、1つの表に情報が混ざって重複するのを防ぐため、**「表を適切な単位に分割する」**プロセスです。これにより、データの矛盾や、更新時の不整合（不都合な挙動）を防ぎます。
              </p>
            </div>
            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-850 text-center font-bold text-[10px] text-indigo-300 mt-4">
              非正規形 ➔ 第1正規形 ➔ 第2正規形 ➔ 第3正規形 と段階を踏んで整理
            </div>
          </div>

          <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">
                E-R図と「1対多」の関係
              </h4>
              <p className="text-xs text-slate-350 leading-relaxed font-semibold">
                エンティティ（実体：テーブル）同士の関連（リレーションシップ）を表します。最も頻出するのは**「1対多（1対N）」**の関係です。
              </p>
            </div>
            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-850 text-center font-bold text-[10px] text-emerald-400 mt-4 leading-normal">
              【1】顧客（1人） ➔ 【多】注文（複数）<br/>
              ※1人の顧客が何回でも注文をできる関係。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. データベース管理システムとSQL (DbmsSqlStaticDiagram)
// ==========================================
export const DbmsSqlStaticDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          DBMS & SQL
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          DBMS（管理システム）の役割とSQL命令
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          データベースを安全に管理する「管理人(DBMS)」の役割と、指示を与える共通語「SQL」の4大基本命令です。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* 左：DBMSの4大機能 */}
        <div className="lg:col-span-6 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-4">
          <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">
            DBMSの4つの主な機能
          </h4>
          <div className="grid grid-cols-2 gap-3 text-[10px] font-semibold leading-relaxed">
            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-850">
              <span className="font-bold text-indigo-400 block mb-0.5">① データの操作・整合性</span>
              データの保存・検索・更新を矛盾なく正確に処理する。
            </div>
            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-850">
              <span className="font-bold text-indigo-400 block mb-0.5">② 同時実行制御 (トランザクション)</span>
              複数の人が同時に同じデータを書き換えても不整合が起きないように調整する（ロック処理など）。
            </div>
            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-850">
              <span className="font-bold text-indigo-400 block mb-0.5">③ 機密保護 (セキュリティ)</span>
              アクセス権限を設定し、未承認の閲覧・改ざんを防ぐ。
            </div>
            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-850">
              <span className="font-bold text-indigo-400 block mb-0.5">④ 障害回復</span>
              システム障害や停電時、バックアップやジャーナルログから正常な状態へ復元する。
            </div>
          </div>
        </div>

        {/* 右：SQL命令 */}
        <div className="lg:col-span-6 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2 mb-3">
              SQL 4大基本命令
            </h4>
            <div className="space-y-2.5">
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-850">
                <span className="text-[10px] font-bold text-blue-400 block">SELECT (検索・取り出し) ★超頻出</span>
                <p className="text-[10px] text-slate-350 leading-relaxed font-semibold mt-0.5">
                  表から条件に合う行や項目を取り出します。<br/>
                  <span className="font-mono text-indigo-300">SELECT 氏名 FROM 会員表 WHERE 会員ID = 'C-101';</span>
                </p>
              </div>
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-850 grid grid-cols-3 gap-2 text-[9px] font-semibold">
                <div className="border border-slate-800 p-1.5 rounded">
                  <span className="text-emerald-400 block font-bold">INSERT (追加)</span>
                  新規行を追加する
                </div>
                <div className="border border-slate-800 p-1.5 rounded">
                  <span className="text-amber-400 block font-bold">UPDATE (更新)</span>
                  既存値を書き換える
                </div>
                <div className="border border-slate-800 p-1.5 rounded">
                  <span className="text-rose-400 block font-bold">DELETE (削除)</span>
                  不要行を消去する
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export function DatabaseDiagrams() {
  return <DatabaseBasicsStaticDiagram />;
}
