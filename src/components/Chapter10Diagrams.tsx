import React from 'react';
import { 
  Server, 
  Database, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  AlertTriangle
} from 'lucide-react';

// ==========================================
// 1. デュアル vs デュプレックス (ClientServerVisualDiagram)
// ==========================================
export const ClientServerVisualDiagram: React.FC = () => {
  const configs = [
    {
      title: '① デュプレックスシステム (現用・待機系)',
      desc: '1台を「現用（本番用）」として動かし、もう1台を「待機（バックアップ用）」として用意しておく構成。',
      subtypes: '・ホットスタンバイ：待機系も電源を入れ準備しておく（即時切替）\n・コールドスタンバイ：停電時は起動から行う（切替に時間要）',
      cost: 'コスト：中',
      reliability: '信頼性：中（切り替え時に一時停止の可能性あり）',
      textColor: 'text-indigo-400',
      bgColor: 'bg-indigo-950/15',
      borderColor: 'border-indigo-900/60'
    },
    {
      title: '② デュアルシステム (同時稼働系)',
      desc: '2台のシステムが「常に同時に同じ処理」を行い、お互いの結果を照合（クロスチェック）しながら動く構成。',
      subtypes: '片方が故障した場合は、照合処理を切り離し、正常なもう1台だけで処理を無停止（瞬断なし）で継続します。',
      cost: 'コスト：高 (常に2台を全力稼働するため)',
      reliability: '信頼性：極めて高',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-950/15',
      borderColor: 'border-emerald-900/60'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Architecture
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          デュプレックスシステム vs デュアルシステム
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          システムの耐障害性を高めるため、サーバーを2重化する際の代表的な2つの設計方式です。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {configs.map((cfg, idx) => (
          <div 
            key={idx} 
            className={`p-5 rounded-2xl border ${cfg.borderColor} ${cfg.bgColor} flex flex-col justify-between space-y-4`}
          >
            <div className="space-y-2">
              <h4 className={`text-sm font-black ${cfg.textColor}`}>{cfg.title}</h4>
              <p className="text-xs text-slate-350 leading-relaxed font-semibold">
                {cfg.desc}
              </p>
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-850 text-[10px] text-slate-400 whitespace-pre-line leading-relaxed font-bold">
                {cfg.subtypes}
              </div>
            </div>

            <div className="space-y-1 pt-3 border-t border-slate-800/80 text-[10px] font-bold text-slate-300">
              <div>・{cfg.cost}</div>
              <div>・{cfg.reliability}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// ==========================================
// 2. RAID (RaidVisualizationDiagram)
// ==========================================
export const RaidVisualizationDiagram: React.FC = () => {
  const raids = [
    {
      name: 'RAID 0 (ストライピング)',
      desc: '複数のディスクにデータを細切れにして「分散して書き込む」方式。',
      diskLabel: ['データ A, C', 'データ B, D', '未使用'],
      features: '速度：最速 / 容量：100%利用可 / 耐障害性：なし (1台故障で全体破損)',
      textColor: 'text-blue-400',
      bgColor: 'bg-blue-950/15',
      borderColor: 'border-blue-900/60'
    },
    {
      name: 'RAID 1 (ミラーリング)',
      desc: '2台以上のディスクに「全く同じデータ」を二重に書き込む方式。',
      diskLabel: ['データ A, B, C', 'データ A, B, C', '未使用'],
      features: '速度：普通 / 容量：50%のみ利用可 / 耐障害性：高 (1台故障しても継続可)',
      textColor: 'text-indigo-400',
      bgColor: 'bg-indigo-950/15',
      borderColor: 'border-indigo-900/60'
    },
    {
      name: 'RAID 5 (パリティ分散)',
      desc: 'データと「パリティ（誤り訂正用符号）」を全ディスクに分散して書き込む方式。',
      diskLabel: ['データ A, B, (P_CD)', 'データ C, (P_AB), D', 'データ (P_EF), E, F'],
      features: '速度：高速 / 容量：N-1台分 / 耐障害性：中 (1台故障まで復元・継続可)',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-950/15',
      borderColor: 'border-emerald-900/60'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Grid
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          RAID 0 / RAID 1 / RAID 5 の仕組みと特徴
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          ハードディスクなどの補助記憶装置を複数並べて、速度や信頼性を向上させるRAID技術の比較表です。
        </p>
      </div>

      <div className="space-y-4">
        {raids.map((raid, idx) => (
          <div 
            key={idx} 
            className={`p-4.5 rounded-xl border ${raid.borderColor} ${raid.bgColor} grid grid-cols-1 lg:grid-cols-12 gap-4 items-center`}
          >
            {/* 左：RAID名と解説 */}
            <div className="lg:col-span-4">
              <h4 className={`text-sm font-black ${raid.textColor}`}>{raid.name}</h4>
              <p className="text-[11px] text-slate-350 leading-relaxed font-semibold mt-1">
                {raid.desc}
              </p>
            </div>

            {/* 中：ディスク内データ配置 */}
            <div className="lg:col-span-4 grid grid-cols-3 gap-2 text-center text-[9px] font-mono font-bold">
              <div className="bg-slate-950 p-2 rounded border border-slate-900">
                <span className="text-slate-500 block mb-0.5">Disk 1</span>
                <span className="text-slate-300">{raid.diskLabel[0]}</span>
              </div>
              <div className="bg-slate-950 p-2 rounded border border-slate-900">
                <span className="text-slate-500 block mb-0.5">Disk 2</span>
                <span className="text-slate-300">{raid.diskLabel[1]}</span>
              </div>
              <div className="bg-slate-950 p-2 rounded border border-slate-900">
                <span className="text-slate-500 block mb-0.5">Disk 3</span>
                <span className="text-slate-300">{raid.diskLabel[2]}</span>
              </div>
            </div>

            {/* 右：特徴 */}
            <div className="lg:col-span-4 bg-slate-950/80 p-3 rounded-lg border border-slate-900 text-[10px] font-bold text-slate-200">
              <span className="text-[8px] text-slate-500 block mb-1">性能・特性評価</span>
              {raid.features}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// ==========================================
// 3. 性能評価指標 (ThroughputResponseTimeDiagram)
// ==========================================
export const ThroughputResponseTimeDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Definition
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          スループットとレスポンスタイム
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          システムの処理能力を測定する代表的な2つの性能評価指標の定義と違いです。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* スループット */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="space-y-1.5">
            <h4 className="text-sm font-extrabold text-blue-400 flex items-center gap-1.5">
              <Activity className="w-4 h-4" />
              スループット (Throughput)
            </h4>
            <span className="text-[9px] text-slate-500 font-bold block">「単位時間あたり」に処理できる量</span>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold pt-1">
              サーバーが1秒間、あるいは1時間あたりに「何件の処理（リクエスト）をさばけるか」を表すシステム全体の処理能力の指標です。
            </p>
          </div>
          <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-850 text-[10px] font-bold text-slate-450">
            ・目安：スループットが高いほど、アクセス集中に強いシステムです。
          </div>
        </div>

        {/* 応答時間 */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="space-y-1.5">
            <h4 className="text-sm font-extrabold text-purple-400 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              レスポンスタイム (応答時間)
            </h4>
            <span className="text-[9px] text-slate-500 font-bold block">「命令を出してから応答が返るまで」の時間</span>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold pt-1">
              ユーザーが送信ボタンを押してから、画面上に結果が出力完了するまでの「待ち時間」そのものを示します。
            </p>
          </div>
          <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-850 text-[10px] font-bold text-slate-450">
            ・目安：レスポンスタイムが短いほど、サクサク動きユーザー快適性が高いです。
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 4. 稼働率計算 (SystemReliabilityCalcDiagram)
// ==========================================
export const SystemReliabilityCalcDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Calculation
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          直列システム・並列システムの稼働率計算
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          複数の装置を組み合わせたときのシステム全体としての稼働率（信頼性）の求め方です。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 直列システム */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-blue-400">① 直列システム (両方動く必要がある)</h4>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold">
              装置Aと装置Bが一直線に並び、**どちらか片方でも故障するとシステム全体が停止**する構成。
            </p>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl border border-slate-850 text-center space-y-2">
            <span className="text-[9px] text-slate-500 font-bold block">計算公式</span>
            <div className="text-xs font-black text-indigo-300">
              全体稼働率 ＝ R_A × R_B
            </div>
            <span className="text-[10px] text-slate-400 font-semibold block">
              例：稼働率0.90の装置2台 ➔ 0.90 × 0.90 ＝ 0.81 (81.0%)
            </span>
          </div>
          <p className="text-[9px] text-slate-500 leading-normal">
            ※特徴：装置を増やせば増やすほど、システム全体の稼働率は個々の装置より低くなります。
          </p>
        </div>

        {/* 並列システム */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-emerald-400">② 並列システム (片方動けばよい)</h4>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold">
              装置Aと装置Bが並行に並び、**両方が同時に故障したときのみ全体が停止**する構成。
            </p>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl border border-slate-850 text-center space-y-2">
            <span className="text-[9px] text-slate-500 font-bold block">計算公式</span>
            <div className="text-xs font-black text-indigo-300">
              全体稼働率 ＝ 1 － (1 － R_A) × (1 － R_B)
            </div>
            <span className="text-[10px] text-slate-400 font-semibold block">
              例：稼働率0.90の装置2台 ➔ 1 － (0.10 × 0.10) ＝ 0.99 (99.0%)
            </span>
          </div>
          <p className="text-[9px] text-slate-500 leading-normal">
            ※特徴：バックアップがあるため、システム全体の稼働率は個々の装置より高くなります。
          </p>
        </div>
      </div>
    </div>
  );
};
