import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, 
  Database, 
  Cpu, 
  HelpCircle, 
  Play, 
  RotateCcw, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  Activity,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sliders
} from 'lucide-react';

// ==========================================
// 1. デュアル vs デュプレックス (ClientServerVisualDiagram)
// ==========================================
export const ClientServerVisualDiagram: React.FC = () => {
  const [config, setConfig] = useState<'duplex' | 'dual'>('duplex');
  const [serverAState, setServerAState] = useState<'active' | 'failed'>('active');
  const [serverBState, setServerBState] = useState<'standby' | 'active' | 'failed'>('standby');
  const [statusMsg, setStatusMsg] = useState<string>('システムは正常に稼働しています。');
  const [isSwitching, setIsSwitching] = useState<boolean>(false);

  useEffect(() => {
    // コンフィグ切り替え時に状態をリセット
    setServerAState('active');
    if (config === 'duplex') {
      setServerBState('standby');
      setStatusMsg('主系（サーバA）が処理を行い、従系（サーバB）は待機しています。');
    } else {
      setServerBState('active');
      setStatusMsg('2台のサーバが常に同時に同じ処理を行い、結果をクロスチェックしています。');
    }
    setIsSwitching(false);
  }, [config]);

  // サーバAの故障イベント
  const triggerAError = () => {
    if (serverAState === 'failed') return;
    setServerAState('failed');

    if (config === 'duplex') {
      setIsSwitching(true);
      setStatusMsg('主系（サーバA）が故障しました。待機系（サーバB）への切り替え（ホットスタンバイ）を開始します...');
      
      // 2.5秒後に切り替え完了
      setTimeout(() => {
        setServerBState('active');
        setIsSwitching(false);
        setStatusMsg('サーバBへの切り替えが完了し、処理を再開しました（サービス継続成功）。');
      }, 2500);
    } else {
      setStatusMsg('サーバAが故障しました。しかしデュアルシステムのため、残るサーバBがそのまま単独で処理を続行します（瞬断なし）。');
    }
  };

  const handleReset = () => {
    setServerAState('active');
    if (config === 'duplex') {
      setServerBState('standby');
      setStatusMsg('主系（サーバA）が処理を行い、従系（サーバB）は待機しています。');
    } else {
      setServerBState('active');
      setStatusMsg('2台のサーバが常に同時に同じ処理を行い、結果をクロスチェックしています。');
    }
    setIsSwitching(false);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
            System Reliability Architectures
          </span>
          <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            デュプレックスシステム vs デュアルシステム
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
            耐障害性を高めるための2台構成モデル。サーバ障害発生ボタンを押して動作の違いを確認します。
          </p>
        </div>

        <div className="flex gap-2 self-start md:self-auto">
          <button
            onClick={triggerAError}
            disabled={serverAState === 'failed' || isSwitching}
            className="bg-rose-600 hover:bg-rose-505 disabled:bg-slate-850 disabled:text-slate-650 border border-slate-800 text-white font-bold text-xs py-2 px-4 rounded-xl cursor-pointer"
          >
            サーバAの故障発生
          </button>
          <button
            onClick={handleReset}
            className="bg-slate-850 hover:bg-slate-800 text-slate-300 font-bold text-xs py-2 px-4 rounded-xl cursor-pointer border border-slate-800"
          >
            リセット
          </button>
        </div>
      </div>

      {/* システム構成選択 */}
      <div className="flex gap-2 mb-6 justify-center">
        {(['duplex', 'dual'] as const).map(c => (
          <button
            key={c}
            onClick={() => setConfig(c)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
              config === c
                ? 'bg-slate-800 border-indigo-500 text-indigo-400 shadow-sm'
                : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
            }`}
          >
            {c === 'duplex' ? 'デュプレックスシステム (現用・待機)' : 'デュアルシステム (同時並行)'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* 左：稼働状況のアニメーション */}
        <div className="lg:col-span-7 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center min-h-[220px]">
          <div className="flex justify-around items-center h-32 relative">
            {/* サーバA */}
            <div className={`p-4 rounded-xl border text-center transition-all ${
              serverAState === 'active' 
                ? 'bg-indigo-950/30 border-indigo-500 text-indigo-300' 
                : 'bg-rose-950/30 border-rose-500 text-rose-500 animate-pulse'
            }`}>
              <Server className="w-8 h-8 mx-auto mb-1" />
              <span className="text-xs font-bold block">サーバ A (主系)</span>
              <span className="text-[9px] block mt-0.5">{serverAState === 'active' ? '◎ 稼働中' : '✕ 故障'}</span>
            </div>

            {/* 同期・照合ライン（デュアルシステムのみ） */}
            {config === 'dual' && (
              <div className="text-slate-600 font-bold text-xs flex flex-col items-center">
                <ArrowRight className="w-4 h-4" />
                <span className="text-[8px] text-slate-500">照合中</span>
              </div>
            )}

            {/* サーバB */}
            <div className={`p-4 rounded-xl border text-center transition-all ${
              serverBState === 'active' 
                ? 'bg-indigo-950/30 border-indigo-500 text-indigo-300' 
                : serverBState === 'standby'
                  ? 'bg-slate-900 border-slate-850 text-slate-500'
                  : 'bg-rose-950/30 border-rose-500 text-rose-500'
            }`}>
              <Server className="w-8 h-8 mx-auto mb-1" />
              <span className="text-xs font-bold block">サーバ B (従系)</span>
              <span className="text-[9px] block mt-0.5">
                {serverBState === 'active' && '◎ 稼働中'}
                {serverBState === 'standby' && '▲ 待機中 (スタンバイ)'}
                {serverBState === 'failed' && '✕ 故障'}
              </span>
            </div>
          </div>
        </div>

        {/* 右：詳細解説と現在の状況メッセージ */}
        <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
          <div>
            <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest border-b border-slate-800 pb-2 mb-3">
              システム稼働ステータス
            </h4>
            <p className="text-xs text-slate-350 leading-relaxed font-semibold">
              {statusMsg}
            </p>
          </div>

          <div className="p-3 bg-slate-900/50 border border-slate-850 rounded-xl mt-4">
            <p className="text-[10px] text-slate-405 leading-relaxed font-semibold text-slate-400">
              【試験対策】**デュアル**は2台が常に同時稼働（高コストだが瞬断なし）。**デュプレックス**は1台稼働＋1台待機（切り替え時に一時停止・瞬断の可能性あり）。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 2. RAID (RaidVisualizationDiagram)
// ==========================================
export const RaidVisualizationDiagram: React.FC = () => {
  const [raidMode, setRaidMode] = useState<'RAID0' | 'RAID1' | 'RAID5'>('RAID0');
  const [disk1Failed, setDisk1Failed] = useState<boolean>(false);
  const [disk2Failed, setDisk2Failed] = useState<boolean>(false);
  const [disk3Failed, setDisk3Failed] = useState<boolean>(false);

  // ディスク障害状態リセット
  useEffect(() => {
    setDisk1Failed(false);
    setDisk2Failed(false);
    setDisk3Failed(false);
  }, [raidMode]);

  // 耐障害性ステータス計算
  const getSystemStatus = () => {
    const failedCount = (disk1Failed ? 1 : 0) + (disk2Failed ? 1 : 0) + (disk3Failed ? 1 : 0);
    
    if (raidMode === 'RAID0') {
      if (failedCount > 0) {
        return { ok: false, msg: 'システム停止：データが消失しました。RAID 0には耐障害性がありません。' };
      }
      return { ok: true, msg: '正常稼働中：ストライピングにより高速読み書き可能です。' };
    }
    
    if (raidMode === 'RAID1') {
      // Disk 1 & Disk 2 を使用
      if (disk1Failed && disk2Failed) {
        return { ok: false, msg: 'システム停止：すべてのミラーディスクが破損し、データが消失しました。' };
      }
      if (disk1Failed || disk2Failed) {
        return { ok: true, msg: '警告：片方のディスクが故障中。ミラーリングによりデータは維持されています。' };
      }
      return { ok: true, msg: '正常稼働中：ミラーリング（同一データの二重書き込み）により信頼性があります。' };
    }

    // RAID 5 (Disk 1, 2, 3)
    if (failedCount >= 2) {
      return { ok: false, msg: 'システム停止：2台以上のディスクが同時に故障したため、パリティからの復元が不可能です。' };
    }
    if (failedCount === 1) {
      return { ok: true, msg: '警告：1台のディスクが故障中。残るデータとパリティからリアルタイムに復元して稼働しています。' };
    }
    return { ok: true, msg: '正常稼働中：データとパリティを分散配置。1台のディスク故障まで無停止で耐えられます。' };
  };

  const status = getSystemStatus();

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
            RAID Architectures
          </span>
          <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            RAID 0 / RAID 1 / RAID 5 の仕組み
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
            ディスクをクリックして「故障」状態にし、データが維持されるか（耐障害性）シミュレートします。
          </p>
        </div>

        <button
          onClick={() => { setDisk1Failed(false); setDisk2Failed(false); setDisk3Failed(false); }}
          className="bg-slate-850 hover:bg-slate-800 text-slate-300 font-bold text-xs py-2 px-4 rounded-xl cursor-pointer border border-slate-800 self-start md:self-auto"
        >
          ディスク全復旧
        </button>
      </div>

      {/* RAIDモード選択 */}
      <div className="flex gap-2 mb-6 justify-center">
        {(['RAID0', 'RAID1', 'RAID5'] as const).map(mode => (
          <button
            key={mode}
            onClick={() => setRaidMode(mode)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
              raidMode === mode
                ? 'bg-slate-800 border-indigo-500 text-indigo-400 shadow-sm'
                : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
            }`}
          >
            {mode === 'RAID0' && 'RAID 0 (ストライピング)'}
            {mode === 'RAID1' && 'RAID 1 (ミラーリング)'}
            {mode === 'RAID5' && 'RAID 5 (パリティ分散)'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* 左：ディスク配列表現 */}
        <div className="lg:col-span-7 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center min-h-[220px]">
          <div className="grid grid-cols-3 gap-4">
            {/* Disk 1 */}
            <div
              onClick={() => setDisk1Failed(!disk1Failed)}
              className={`p-4 rounded-xl border text-center cursor-pointer transition-all ${
                disk1Failed 
                  ? 'bg-rose-950/30 border-rose-500 text-rose-550' 
                  : 'bg-indigo-950/20 border-indigo-900 hover:border-indigo-500 text-indigo-300'
              }`}
            >
              <Database className="w-8 h-8 mx-auto mb-1.5" />
              <span className="text-xs font-bold block">Disk 1</span>
              <span className="text-[8px] font-mono mt-2 block">
                {raidMode === 'RAID0' && 'データ: A, C'}
                {raidMode === 'RAID1' && 'データ: A, B, C'}
                {raidMode === 'RAID5' && 'データ: A, B (P_CD)'}
              </span>
            </div>

            {/* Disk 2 */}
            <div
              onClick={() => setDisk2Failed(!disk2Failed)}
              className={`p-4 rounded-xl border text-center cursor-pointer transition-all ${
                disk2Failed 
                  ? 'bg-rose-950/30 border-rose-500 text-rose-550' 
                  : 'bg-indigo-950/20 border-indigo-900 hover:border-indigo-500 text-indigo-300'
              }`}
            >
              <Database className="w-8 h-8 mx-auto mb-1.5" />
              <span className="text-xs font-bold block">Disk 2</span>
              <span className="text-[8px] font-mono mt-2 block">
                {raidMode === 'RAID0' && 'データ: B, D'}
                {raidMode === 'RAID1' && 'データ: A, B, C'}
                {raidMode === 'RAID5' && 'データ: C, (P_AB), D'}
              </span>
            </div>

            {/* Disk 3 */}
            {raidMode === 'RAID5' ? (
              <div
                onClick={() => setDisk3Failed(!disk3Failed)}
                className={`p-4 rounded-xl border text-center cursor-pointer transition-all ${
                  disk3Failed 
                    ? 'bg-rose-950/30 border-rose-500 text-rose-550' 
                    : 'bg-indigo-950/20 border-indigo-900 hover:border-indigo-500 text-indigo-300'
                }`}
              >
                <Database className="w-8 h-8 mx-auto mb-1.5" />
                <span className="text-xs font-bold block">Disk 3</span>
                <span className="text-[8px] font-mono mt-2 block">
                  データ: (P_EF), E, F
                </span>
              </div>
            ) : (
              <div className="p-4 rounded-xl border border-dashed border-slate-900 text-center flex flex-col justify-center items-center text-slate-700">
                <span className="text-xs font-bold">未使用</span>
              </div>
            )}
          </div>
          <span className="text-[8px] text-slate-500 text-center mt-3 block">
            ※ディスクをクリックして故障（赤）／稼働（青）を切り替えられます。
          </span>
        </div>

        {/* 右：ステータス評価 */}
        <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
          <div>
            <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest border-b border-slate-800 pb-2 mb-3">
              RAID信頼性ステータス
            </h4>
            
            <div className={`p-4 rounded-xl border flex items-start gap-2.5 ${status.ok ? 'bg-indigo-950/20 border-indigo-900 text-indigo-400' : 'bg-rose-950/20 border-rose-900 text-rose-500'}`}>
              {status.ok ? (
                <>
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-bold leading-relaxed">{status.msg}</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-bold leading-relaxed">{status.msg}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 3. 性能評価指標 (ThroughputResponseTimeDiagram)
// ==========================================
export const ThroughputResponseTimeDiagram: React.FC = () => {
  const [load, setLoad] = useState<number>(30); // 負荷 (リクエスト数/秒)

  // 性能評価値算出
  // スループット：負荷が60までは比例して上がるが、60を超えると60で頭打ち（処理限界）
  const throughput = Math.min(load, 60);
  // 応答時間：負荷が60までは0.2秒固定。60を超えると負荷に伴って急激に遅延する
  const responseTime = load <= 60 ? 0.2 : 0.2 + (load - 60) * 0.05;

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          System Performance Metrics
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          スループットとレスポンスタイムのボトルネック
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          アクセス負荷をスライダーで変更し、システム処理が飽和した時の応答速度の遅延をシミュレートします。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* 左：負荷調整スライダー */}
        <div className="lg:col-span-6 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-6 flex flex-col justify-center">
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-300 font-bold">サーバーアクセス負荷 (リクエスト数/秒)</span>
              <span className="text-indigo-400 font-mono font-extrabold text-lg">{load} req/sec</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={load}
              onChange={(e) => setLoad(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <span className="text-[9px] text-slate-500 font-bold block">
              ※限界値（60 req/sec）を超えると、サーバーの処理能力を超えボトルネックが発生します。
            </span>
          </div>
        </div>

        {/* 右：結果数値とボトルネック警告 */}
        <div className="lg:col-span-6 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
          <div>
            <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest border-b border-slate-800 pb-2">
              処理性能評価値
            </h4>
            
            <div className="space-y-3.5 mt-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-bold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-indigo-400" />
                  スループット (単位時間の処理量)
                </span>
                <span className="text-slate-205 font-mono font-bold text-slate-200">{throughput} 件/秒</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-bold flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  レスポンスタイム (応答時間)
                </span>
                <span className={`font-mono font-bold ${load > 60 ? 'text-rose-400' : 'text-slate-200'}`}>
                  {responseTime.toFixed(2)} 秒
                </span>
              </div>
            </div>
          </div>

          <div className={`p-3 rounded-xl border flex items-center gap-2 mt-4 ${load <= 60 ? 'bg-indigo-950/20 border-indigo-900 text-indigo-400' : 'bg-rose-950/20 border-rose-900 text-rose-500'}`}>
            {load <= 60 ? (
              <>
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-bold">サーバーは処理能力範囲内でスムーズに応答しています。</span>
              </>
            ) : (
              <>
                <AlertTriangle className="w-5 h-5 flex-shrink-0 animate-bounce" />
                <span className="text-xs font-bold">ボトルネック発生！応答遅延が起きています。</span>
              </>
            )}
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
  const [sysType, setSysType] = useState<'series' | 'parallel'>('series');
  const [rateA, setRateA] = useState<number>(0.9); // サーバA稼働率: 0.90
  const [rateB, setRateB] = useState<number>(0.9); // サーバB稼働率: 0.90
  const [signalActive, setSignalActive] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<'success' | 'failed' | null>(null);

  // 全体稼働率の計算
  // 直列: A * B
  // 並列: 1 - (1 - A) * (1 - B)
  const totalRate = sysType === 'series' 
    ? rateA * rateB 
    : 1 - (1 - rateA) * (1 - rateB);

  // テスト信号送信（稼働確率に基づくシミュレーション）
  const sendTestSignal = () => {
    if (signalActive) return;
    setSignalActive(true);
    setTestResult(null);

    setTimeout(() => {
      // 確率判定
      const isASurvived = Math.random() <= rateA;
      const isBSurvived = Math.random() <= rateB;
      
      let isSystemSurvived = false;
      if (sysType === 'series') {
        isSystemSurvived = isASurvived && isBSurvived;
      } else {
        isSystemSurvived = isASurvived || isBSurvived;
      }

      setTestResult(isSystemSurvived ? 'success' : 'failed');
      setSignalActive(false);
    }, 1500);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
            System Reliability Calculator
          </span>
          <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            直列・並列システムの稼働率計算シミュレーター
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
            装置A・Bの個別稼働率を調整し、テスト信号を流した際の接続率（信頼性）を確認します。
          </p>
        </div>

        <button
          onClick={sendTestSignal}
          disabled={signalActive}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-655 border border-indigo-955 text-white font-bold text-xs py-2 px-4 rounded-xl cursor-pointer self-start md:self-auto"
        >
          テスト信号を送信
        </button>
      </div>

      {/* システム構成選択 */}
      <div className="flex gap-2 mb-6 justify-center">
        {(['series', 'parallel'] as const).map(type => (
          <button
            key={type}
            onClick={() => setSysType(type)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
              sysType === type
                ? 'bg-slate-800 border-indigo-500 text-indigo-400 shadow-sm'
                : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
            }`}
          >
            {type === 'series' ? '直列システム' : '並列システム'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* 左：個別稼働率コントローラー */}
        <div className="lg:col-span-7 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-5 flex flex-col justify-center">
          {/* サーバA */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-300 font-bold">装置 A の稼働率</span>
              <span className="text-indigo-400 font-mono font-extrabold">{(rateA * 100).toFixed(0)} %</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="0.99"
              step="0.01"
              value={rateA}
              onChange={(e) => setRateA(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          {/* サーバB */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-300 font-bold">装置 B の稼働率</span>
              <span className="text-indigo-400 font-mono font-extrabold">{(rateB * 100).toFixed(0)} %</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="0.99"
              step="0.01"
              value={rateB}
              onChange={(e) => setRateB(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>
        </div>

        {/* 右：計算結果とテスト信号ステータス */}
        <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[220px]">
          <div>
            <h4 className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest border-b border-slate-800 pb-2">
              システム全体稼働率
            </h4>

            <div className="space-y-3.5 mt-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-bold">稼働率計算式</span>
                <span className="text-slate-300 font-mono font-bold">
                  {sysType === 'series' ? 'R_A × R_B' : '1 - (1 - R_A) × (1 - R_B)'}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-bold">全体稼働率</span>
                <span className="text-base font-black text-indigo-400 font-mono">
                  {(totalRate * 100).toFixed(2)} %
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-850">
            {/* テスト結果表示 */}
            {signalActive && (
              <div className="text-xs text-center text-slate-450 font-bold animate-pulse py-2">
                ⚡ 信号を送信中...
              </div>
            )}
            {!signalActive && testResult === 'success' && (
              <div className="p-3 bg-emerald-950/20 border border-emerald-900 text-emerald-400 rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-bold">通信成功：信号が最後まで届きました！</span>
              </div>
            )}
            {!signalActive && testResult === 'failed' && (
              <div className="p-3 bg-rose-950/20 border border-rose-900 text-rose-500 rounded-xl flex items-center gap-2">
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-bold">通信切断：装置が故障し、信号が遮断されました。</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
