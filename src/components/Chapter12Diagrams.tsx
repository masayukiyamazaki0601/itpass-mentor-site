import React from 'react';
import { 
  Laptop, 
  Cpu, 
  Settings, 
  Terminal, 
  Folder, 
  FileText, 
  ArrowDownRight, 
  Database,
  Calendar,
  Layers,
  Copyright,
  Lock,
  Globe,
  DollarSign
} from 'lucide-react';

// ==========================================
// 1. ソフトウェアの階層構造 (OsLayerStaticDiagram)
// ==========================================
export const OsLayerStaticDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Software Architecture
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          OSとアプリケーションの階層関係
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          ハードウェア（土台）からアプリケーション（最上層）までの構造を示したインフォグラフィックです。
        </p>
      </div>

      <div className="space-y-4">
        {/* アプリケーション層 */}
        <div className="bg-slate-950/90 border-2 border-indigo-500 rounded-2xl p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-indigo-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
              最上層 (Layer 3)
            </span>
            <h4 className="text-sm font-bold text-indigo-300">アプリケーションソフトウェア（応用ソフト）</h4>
          </div>
          <p className="text-xs text-slate-350 leading-relaxed font-semibold">
            ユーザーが特定の「目的」を果たすために使うソフトウェア。OSが提供する共通機能を介して動きます。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3 text-[10px] font-bold text-center">
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">Webブラウザ (Chrome)</div>
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">表計算 (Excel)</div>
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">チャット (LINE)</div>
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">ワープロ (Word)</div>
          </div>
        </div>

        {/* OS（オペレーティングシステム）層 */}
        <div className="bg-slate-950/90 border-2 border-emerald-500 rounded-2xl p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
              中間層 (Layer 2)
            </span>
            <h4 className="text-sm font-bold text-emerald-300">基本ソフトウェア（OS）</h4>
          </div>
          <p className="text-xs text-slate-350 leading-relaxed font-semibold mb-3">
            ハードウェアの管理やアプリへの共通環境提供を行う、システムの土台。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-850">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200 mb-1">
                <Terminal className="w-4 h-4 text-emerald-400" />
                シェル (User Interface)
              </div>
              <p className="text-[10px] text-slate-450 leading-relaxed">
                ユーザーからのキー操作や命令を受け取り、カーネルに伝える窓口プログラム。
              </p>
            </div>
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-850">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200 mb-1">
                <Settings className="w-4 h-4 text-emerald-400" />
                カーネル (Kernel)
              </div>
              <p className="text-[10px] text-slate-450 leading-relaxed">
                メモリやCPU資源の割り当て、ハードウェアの直接制御を担当するOSの中核。
              </p>
            </div>
          </div>
        </div>

        {/* ハードウェア層 */}
        <div className="bg-slate-950/90 border-2 border-amber-500 rounded-2xl p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-amber-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
              最下層 (Layer 1)
            </span>
            <h4 className="text-sm font-bold text-amber-300">ハードウェア（物理的な機械）</h4>
          </div>
          <p className="text-xs text-slate-350 leading-relaxed font-semibold">
            実際に電気で動作する物理部品。OSが仲介することで、複数のアプリが競合せずに利用可能になります。
          </p>
          <div className="grid grid-cols-3 gap-2 mt-3 text-[10px] font-bold text-center">
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 flex items-center justify-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-amber-400" /> CPU
            </div>
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 flex items-center justify-center gap-1">
              <Laptop className="w-3.5 h-3.5 text-amber-400" /> 主記憶 (RAM)
            </div>
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 flex items-center justify-center gap-1">
              <Database className="w-3.5 h-3.5 text-amber-400" /> 補助記憶 (SSD/HDD)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. ファイルシステムとパス (FileSystemTreeStaticDiagram)
// ==========================================
export const FileSystemTreeStaticDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Directory & File Path
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          ディレクトリ階層とパスの仕組み
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          階層構造（ツリー構造）内における、絶対パスと相対パスの指定方法の違いを可視化した図です。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 左：ツリー構造 */}
        <div className="lg:col-span-6 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-center">
          <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest border-b border-slate-800 pb-2 mb-3">
            ファイルツリー構造
          </h4>
          
          <div className="space-y-2 font-mono text-xs leading-none">
            <div className="flex items-center gap-1.5 text-indigo-400 font-bold">
              <Folder className="w-4 h-4" /> / (ルートディレクトリ)
            </div>
            
            <div className="pl-6 flex items-center gap-1.5 text-emerald-400 font-bold border-l border-slate-800">
              <ArrowDownRight className="w-3.5 h-3.5 text-slate-600" />
              <Folder className="w-4 h-4" /> recipe (カテゴリフォルダ)
            </div>
            
            <div className="pl-12 flex items-center gap-1.5 text-amber-400 font-bold border-l border-slate-800">
              <ArrowDownRight className="w-3.5 h-3.5 text-slate-600" />
              <Folder className="w-4 h-4" /> coffee (カレント位置 ★)
            </div>
            
            <div className="pl-18 flex items-center gap-1.5 text-slate-300 border-l border-slate-800">
              <ArrowDownRight className="w-3.5 h-3.5 text-slate-600" />
              <FileText className="w-4 h-4 text-slate-400" /> latte.txt (ターゲットファイル)
            </div>
          </div>
        </div>

        {/* 右：パスの指定方法 */}
        <div className="lg:col-span-6 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-4">
          <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest border-b border-slate-800 pb-2">
            パスの指定方法の対比
          </h4>

          <div className="space-y-3">
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-850">
              <div className="text-xs font-bold text-indigo-300 mb-1">絶対パス</div>
              <p className="text-[10px] text-slate-400 leading-relaxed mb-2 font-semibold">
                最上層のルート（/）を起点として、ファイルまでの経路をすべて記述します。
              </p>
              <div className="bg-slate-950 px-2.5 py-1.5 rounded text-[10px] font-mono text-indigo-400 font-bold">
                /recipe/coffee/latte.txt
              </div>
            </div>

            <div className="bg-slate-900 p-3 rounded-xl border border-slate-850">
              <div className="text-xs font-bold text-amber-300 mb-1">相対パス (カレントが coffee の場合)</div>
              <p className="text-[10px] text-slate-400 leading-relaxed mb-2 font-semibold">
                現在作業中の位置（カレントディレクトリ）を起点として、目的ファイルまでの経路を記述します。
              </p>
              <div className="bg-slate-950 px-2.5 py-1.5 rounded text-[10px] font-mono text-amber-400 font-bold">
                latte.txt
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. バックアップ方式 (BackupTypesStaticDiagram)
// ==========================================
export const BackupTypesStaticDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Backup Strategy
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          バックアップ方式の対象範囲と比較
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          フル、差分、増分の3つの方式におけるバックアップデータの対象範囲と、復旧時の特性を整理した図です。
        </p>
      </div>

      <div className="space-y-4">
        {/* フルバックアップ */}
        <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between gap-4 mb-2">
            <h4 className="text-xs font-bold text-indigo-300">① フルバックアップ (常に全コピー)</h4>
            <span className="text-[9px] bg-indigo-955 text-indigo-400 border border-indigo-900 font-bold px-2 py-0.5 rounded">
              復旧時間：最速
            </span>
          </div>
          <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">
            毎週や毎日、すべてのデータを毎回丸ごとコピーします。容量は大きくなりますが、復旧時は1つのバックアップファイルを戻すだけで完了します。
          </p>
        </div>

        {/* 差分バックアップ */}
        <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between gap-4 mb-2">
            <h4 className="text-xs font-bold text-emerald-300">② 差分バックアップ (フル以降の変更分)</h4>
            <span className="text-[9px] bg-emerald-955 text-emerald-400 border border-emerald-900 font-bold px-2 py-0.5 rounded">
              復旧時間：中速 (フル + 該当日の2回)
            </span>
          </div>
          <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">
            「前回のフルバックアップ」から増減したデータのみを毎回コピーします。復旧には「フル」と「最新の差分」の計2つが必要です。
          </p>
        </div>

        {/* 増分バックアップ */}
        <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between gap-4 mb-2">
            <h4 className="text-xs font-bold text-amber-300">③ 増分バックアップ (直前からの変更分)</h4>
            <span className="text-[9px] bg-amber-955 text-amber-400 border border-amber-900 font-bold px-2 py-0.5 rounded">
              復旧時間：低速 (フル + 全日分の適用)
            </span>
          </div>
          <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">
            「直前のバックアップ（フルまたは増分）」から増減したデータのみを毎回コピーします。バックアップデータ量は最小で済みますが、復旧時はフル以降のすべてのデータを順番に重ねる必要があります。
          </p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. ライセンスの分類 (SoftwareLicenseStaticDiagram)
// ==========================================
export const SoftwareLicenseStaticDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Software License Map
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          ソフトウェアライセンスの分類と特徴
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          ライセンス契約ごとに定められた、ソースコードの公開や費用の要件を整理した比較表です。
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs font-semibold">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950 text-slate-400 uppercase text-[9px] tracking-wider">
              <th className="p-3">区分</th>
              <th className="p-3">ソースコードの公開</th>
              <th className="p-3">利用料金</th>
              <th className="p-3">改変・再配布</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-850">
            <tr>
              <td className="p-3 font-bold text-indigo-400">OSS (オープンソース)</td>
              <td className="p-3">◯ 公開されている</td>
              <td className="p-3">原則無料</td>
              <td className="p-3">◯ 自由に可能 (ライセンス規定に従う)</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-emerald-400">フリーウェア</td>
              <td className="p-3">✕ 非公開</td>
              <td className="p-3">無料</td>
              <td className="p-3">✕ 原則不可</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-amber-400">シェアウェア</td>
              <td className="p-3">✕ 非公開</td>
              <td className="p-3">試用後は有料</td>
              <td className="p-3">✕ 不可</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-rose-400">商用ソフトウェア</td>
              <td className="p-3">✕ 非公開</td>
              <td className="p-3">有料</td>
              <td className="p-3">✕ 不可</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-3 bg-slate-950/80 border border-slate-800 rounded-xl">
        <p className="text-[10px] text-slate-450 leading-relaxed">
          ※ OSSの代表例としては、OSのLinux、WebサーバのApache、データベースのMySQLやPostgreSQLなどがあります。
        </p>
      </div>
    </div>
  );
};
