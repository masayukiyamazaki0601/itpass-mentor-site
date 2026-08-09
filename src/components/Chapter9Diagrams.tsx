import React from 'react';
import { 
  Binary, 
  Database, 
  Hash, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';

// ==========================================
// 1. 10進数 ➜ 2進数 変換 (NumberConversionDiagram)
// ==========================================
export const NumberConversionDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Math
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          10進数から2進数への変換方法
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          10進数を2で割り算し、その「余り」を下から順に並べて2進数を求める計算プロセスです。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* 左：割り算（すだれ算）プロセス */}
        <div className="lg:col-span-7 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3 font-mono">
          <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">
            10進数「13」を2進数に変換する計算
          </h4>
          <div className="space-y-1.5 text-xs text-slate-350">
            <div className="flex justify-between items-center py-1 border-b border-slate-900">
              <span>13 ÷ 2 ＝ 6</span>
              <span className="text-indigo-400 font-bold bg-indigo-950/30 px-2 py-0.5 rounded border border-indigo-900/40">余り：1 (最下位桁)</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-slate-900">
              <span>6 ÷ 2 ＝ 3</span>
              <span className="text-indigo-400 font-bold bg-indigo-950/30 px-2 py-0.5 rounded border border-indigo-900/40">余り：0</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-slate-900">
              <span>3 ÷ 2 ＝ 1</span>
              <span className="text-indigo-400 font-bold bg-indigo-950/30 px-2 py-0.5 rounded border border-indigo-900/40">余り：1</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-slate-900">
              <span>1 ÷ 2 ＝ 0</span>
              <span className="text-indigo-400 font-bold bg-indigo-950/30 px-2 py-0.5 rounded border border-indigo-900/40">余り：1 (最上位桁)</span>
            </div>
          </div>
        </div>

        {/* 右：結果と対応関係 */}
        <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest border-b border-slate-800 pb-2 mb-3">
              変換結果
            </h4>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-850 text-center space-y-2.5">
              <span className="text-[9px] text-slate-500 font-bold block">余りを下から順に並べると...</span>
              <div className="text-lg font-black text-indigo-400 font-mono">
                1101 (2進数)
              </div>
              <span className="text-[10px] text-slate-400 font-semibold block">
                8ビット表記：0000 1101
              </span>
            </div>
          </div>
          <p className="text-[10px] text-slate-450 leading-relaxed mt-4">
            ※ 16進数への変換：2進数を下から4桁ずつ区切ることで容易に変換できます (0000 1101 ➔ 0D)。
          </p>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 2. ベン図と論理演算 (SetsLogicVennDiagram)
// ==========================================
export const SetsLogicVennDiagram: React.FC = () => {
  const operations = [
    { name: 'AND (論理積)', desc: 'AとBの「両方に含まれる」部分。', path: <path d="M 50,13.2 A 18,18 0 0,1 62,30 A 18,18 0 0,1 50,46.8 A 18,18 0 0,1 38,30 A 18,18 0 0,1 50,13.2" fill="#3b82f670" /> },
    { name: 'OR (論理和)', desc: 'AまたはBの「少なくとも一方に含まれる」部分全体。', path: <path d="M 38,12 A 18,18 0 1,0 38,48 A 18,18 0 0,0 62,48 A 18,18 0 1,0 62,12 Z" fill="#3b82f650" /> },
    { name: 'XOR (排他論理和)', desc: 'AかBの「どちらか一方のみ」に含まれる（重なりを除く）部分。', path: <g><circle cx="38" cy="30" r="18" fill="#3b82f640" /><circle cx="62" cy="30" r="18" fill="#3b82f640" /><path d="M 50,13.2 A 18,18 0 0,1 62,30 A 18,18 0 0,1 50,46.8 A 18,18 0 0,1 38,30 A 18,18 0 0,1 50,13.2" fill="#0f172a" /></g> }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Grid
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          論理演算とベン図の対応関係
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          ITパスポートでよく出題される代表的な論理演算のベン図（対象領域）の一覧比較です。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {operations.map((op, idx) => (
          <div 
            key={idx} 
            className="p-4 bg-slate-950/85 border border-slate-800/80 rounded-2xl flex flex-col justify-between space-y-4"
          >
            <div className="space-y-1.5">
              <h4 className="text-xs font-black text-slate-100">{op.name}</h4>
              <p className="text-[11px] text-slate-400 font-semibold leading-relaxed">
                {op.desc}
              </p>
            </div>

            {/* ベン図描画 */}
            <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-850 flex justify-center">
              <svg className="w-full h-28 max-w-[150px]" viewBox="0 0 100 60">
                <rect x="2" y="2" width="96" height="56" fill="none" stroke="#475569" strokeWidth="0.8" rx="3" />
                <circle cx="38" cy="30" r="18" fill="none" stroke="#3b82f6" strokeWidth="0.8" />
                <circle cx="62" cy="30" r="18" fill="none" stroke="#3b82f6" strokeWidth="0.8" />
                {op.path}
                <text x="25" y="32" fontSize="3" fill="#94a3b8" fontWeight="bold">A</text>
                <text x="71" y="32" fontSize="3" fill="#94a3b8" fontWeight="bold">B</text>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// ==========================================
// 3. データ単位 (DataUnitsScaleDiagram)
// ==========================================
export const DataUnitsScaleDiagram: React.FC = () => {
  const dataScales = [
    { unit: 'B (バイト)', value: '1 Byte', scale: '基本単位 (半角英数1文字 ＝ 1B)' },
    { unit: 'KB (キロバイト)', value: '10の3乗 (1,024 Byte)', scale: 'テキストメール1通 ➔ 約5KB' },
    { unit: 'MB (メガバイト)', value: '10の6乗 (1,024 KB)', scale: 'デジタル写真1枚 ➔ 約3MB / 音楽1曲 ➔ 約5MB' },
    { unit: 'GB (ギガバイト)', value: '10の9乗 (1,024 MB)', scale: '高画質映画1本 ➔ 約2GB / スマホ容量 ➔ 128GB' },
    { unit: 'TB (テラバイト)', value: '10の12乗 (1,024 GB)', scale: '外付けHDD ➔ 2TB / バックアップサーバー等' }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Scaler
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          データ単位と補助接頭語スケール
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          コンピュータが扱う情報量の単位と、1024倍（\(2^{10}\)倍）ごとに繰り上がる関係の一覧表です。
        </p>
      </div>

      <div className="overflow-x-auto bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
        <table className="w-full text-left border-collapse text-xs font-semibold">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950 text-slate-500 uppercase text-[9px] tracking-wider">
              <th className="p-3">単位</th>
              <th className="p-3">バイト換算（理論値）</th>
              <th className="p-3">具体的なサイズの目安</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-850">
            {dataScales.map((scale, idx) => (
              <tr key={idx}>
                <td className="p-3 font-bold text-indigo-400">{scale.unit}</td>
                <td className="p-3 font-mono text-slate-300">{scale.value}</td>
                <td className="p-3 text-slate-350">{scale.scale}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


// ==========================================
// 4. スタック＆キュー (QueueStackVisualDiagram)
// ==========================================
export const QueueStackVisualDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Concepts
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          キュー (FIFO) ＆ スタック (LIFO)
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          データの「出し入れ」に関する、代表的な2つのデータ構造（アルゴリズム）の挙動比較です。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* キュー */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="space-y-1.5">
            <h4 className="text-sm font-extrabold text-blue-400">① キュー (Queue) - 先入れ先出し</h4>
            <span className="text-[9px] text-slate-500 font-bold block">FIFO: First-In First-Out</span>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold pt-1">
              入口と出口が別々になっており、**「最初に入れたデータが、最初に出ていく」**データ構造です（レジの並び列と同じ）。
            </p>
          </div>
          <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-850 text-[10px] font-bold text-slate-450">
            ・具体例：プリンターの印刷待ちデータ（スプール）、メッセージキュー
          </div>
        </div>

        {/* スタック */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="space-y-1.5">
            <h4 className="text-sm font-extrabold text-purple-400">② スタック (Stack) - 後入れ先出し</h4>
            <span className="text-[9px] text-slate-500 font-bold block">LIFO: Last-In First-Out</span>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold pt-1">
              入口と出口が同じ（底が閉じたバケツ状）であり、**「最後に入れたデータが、最初に出ていく」**データ構造です。
            </p>
          </div>
          <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-850 text-[10px] font-bold text-slate-450">
            ・具体例：ブラウザの「戻る」ボタンの履歴、皿の積み重ね
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 5. 探索アルゴリズム (SearchAlgorithmsDiagram)
// ==========================================
export const SearchAlgorithmsDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Analysis
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          線形探索（リニア） vs 二分探索（バイナリ）の効率比較
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          並び順が整列している配列から、目的の数値を探し出す際の手順と計算量の対比です。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 線形探索 */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="space-y-1.5">
            <h4 className="text-sm font-extrabold text-blue-400">① 線形探索 (リニアサーチ)</h4>
            <span className="text-[9px] text-slate-500 font-bold block">対象：整列していないデータでも可能</span>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold pt-1">
              データの先頭から順番に、目的のデータが見つかるまで1つずつ比較していく探索方法。
            </p>
          </div>
          <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-850 text-[10px] font-bold text-slate-450 space-y-1">
            <div>・平均比較回数：\(N / 2\) 回</div>
            <div>・特徴：データ数が多くなるほど、比例して処理時間がかかる。</div>
          </div>
        </div>

        {/* 二分探索 */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="space-y-1.5">
            <h4 className="text-sm font-extrabold text-emerald-400">② 二分探索 (バイナリサーチ)</h4>
            <span className="text-[9px] text-slate-500 font-bold block">対象：【前提】事前にデータが昇順/降順に整列していること</span>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold pt-1">
              データの中央値と比較し、目的のデータが「真ん中より大きいか小さいか」で探索範囲を毎回半分に絞り込んでいく方法。
            </p>
          </div>
          <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-850 text-[10px] font-bold text-slate-450 space-y-1">
            <div>・平均比較回数：\(\log_{2} N\) 回</div>
            <div>・特徴：データ数が多くなっても、探索回数が非常に少なくて済む（極めて高速）。</div>
          </div>
        </div>
      </div>
    </div>
  );
};
