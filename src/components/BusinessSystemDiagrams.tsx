import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, 
  Wallet, 
  Landmark, 
  ArrowRight, 
  ShoppingCart, 
  Database, 
  Truck, 
  Sparkles,
  Barcode,
  Calendar,
  DollarSign
} from 'lucide-react';

// ==========================================
// 1. お金の払い方（PaymentFlowDiagram）
// ==========================================
export const PaymentFlowDiagram: React.FC = () => {
  const [method, setMethod] = useState<'pre' | 'now' | 'post'>('pre');

  const methods = {
    pre: {
      title: '電子マネー（前払い / プリペイド）',
      subtitle: 'Suica, PayPay, 楽天Edy など',
      walletState: ['事前にお金をチャージする', 'チャージ残高から支払う', '後日の支払いはなし'],
      summary: '「先に払っておく」仕組み。チャージした金額の範囲内でのみ利用できるため、使いすぎを防げます。',
      timing: [true, false, false], // [チャージ時にお金が減る, 購入時にお金が減る(すでに口座からは移動済み), 後日減る]
      color: 'border-l-amber-500 text-amber-500',
      accentColor: '#f59e0b',
      badge: '前払い'
    },
    now: {
      title: 'デビットカード（その場払い / 即時決済）',
      subtitle: '銀行デビットカード など',
      walletState: ['事前手続きはなし', '購入した瞬間に口座から引き落とされる', '後日の支払いはなし'],
      summary: '「その場で払う」仕組み。クレジットカードと違い、自分の銀行口座の残高から即時にお金が引き落とされます。残高がないと使えません。',
      timing: [false, true, false],
      color: 'border-l-blue-500 text-blue-500',
      accentColor: '#3b82f6',
      badge: 'その場払い'
    },
    post: {
      title: 'クレジットカード（後払い / ポストペイ）',
      subtitle: 'Visa, Mastercard, JCB など',
      walletState: ['事前手続きはなし', '購入時はサインや暗証番号のみで決済', '後日の引き落とし日にまとめて引き落とされる'],
      summary: '「あとで払う」仕組み。カード会社が一時的にお金を立て替え、翌月などの決まった引き落とし日に、登録された口座から一括で引き落とされます。',
      timing: [false, false, true],
      color: 'border-l-purple-500 text-purple-500',
      accentColor: '#8b5cf6',
      badge: '後払い'
    }
  };

  const current = methods[method];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Payment Simulator
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          キャッシュレス決済 お金の動くタイミング
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          「いつ財布・口座からお金が動くか」を、3つの決済方法でシミュレーションしてみましょう。
        </p>
      </div>

      {/* 決済方法選択ボタン */}
      <div className="flex flex-wrap gap-2.5 mb-8 justify-center">
        {(['pre', 'now', 'post'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setMethod(t)}
            className={`px-5 py-3 rounded-2xl font-bold text-xs md:text-sm transition-all border cursor-pointer ${
              method === t
                ? 'bg-slate-800 border-indigo-400 text-indigo-400 scale-105 shadow-md shadow-indigo-500/10'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
            }`}
          >
            {methods[t].title.split('（')[0]}
          </button>
        ))}
      </div>

      {/* タイムラインアニメーション */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative items-stretch">
        {/* 背景ライン (PCサイズ用) */}
        <div className="absolute left-0 right-0 top-[40px] h-0.5 bg-slate-800 z-0 hidden md:block" />

        {/* 1. 購入前 / チャージ */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col items-center text-center relative z-10">
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-3">
            <Wallet className="w-5 h-5 text-slate-400" />
          </div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
            1. 事前（チャージ）
          </h4>
          <p className="text-xs font-semibold text-slate-300 min-h-[40px] flex items-center justify-center">
            {current.walletState[0]}
          </p>
          
          {/* お金の動きのアニメーション */}
          <div className="h-16 flex items-center justify-center mt-4 w-full">
            {current.timing[0] ? (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="flex items-center gap-1.5 bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold"
              >
                <DollarSign className="w-3.5 h-3.5 animate-bounce" /> お金が動く
              </motion.div>
            ) : (
              <span className="text-[10px] text-slate-600 font-bold">お金の移動なし</span>
            )}
          </div>
        </div>

        {/* 2. 購入時 */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col items-center text-center relative z-10">
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-3">
            <ShoppingCart className="w-5 h-5 text-slate-400" />
          </div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
            2. 購入時（レジ）
          </h4>
          <p className="text-xs font-semibold text-slate-300 min-h-[40px] flex items-center justify-center">
            {current.walletState[1]}
          </p>

          {/* お金の動きのアニメーション */}
          <div className="h-16 flex items-center justify-center mt-4 w-full">
            {current.timing[1] ? (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="flex items-center gap-1.5 bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-bold"
              >
                <DollarSign className="w-3.5 h-3.5 animate-bounce" /> 口座から引き落とし
              </motion.div>
            ) : (
              <span className="text-[10px] text-slate-600 font-bold">お金の移動なし</span>
            )}
          </div>
        </div>

        {/* 3. 後日引き落とし */}
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col items-center text-center relative z-10">
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-3">
            <Calendar className="w-5 h-5 text-slate-400" />
          </div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
            3. 後日（引き落とし日）
          </h4>
          <p className="text-xs font-semibold text-slate-300 min-h-[40px] flex items-center justify-center">
            {current.walletState[2]}
          </p>

          {/* お金の動きのアニメーション */}
          <div className="h-16 flex items-center justify-center mt-4 w-full">
            {current.timing[2] ? (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="flex items-center gap-1.5 bg-purple-500/20 text-purple-400 border border-purple-500/30 px-3 py-1 rounded-full text-xs font-bold"
              >
                <DollarSign className="w-3.5 h-3.5 animate-bounce" /> まとめて引き落とし
              </motion.div>
            ) : (
              <span className="text-[10px] text-slate-600 font-bold">お金の移動なし</span>
            )}
          </div>
        </div>
      </div>

      {/* 詳細解説パネル */}
      <div className="p-5 bg-slate-950 border border-slate-800/80 rounded-2xl">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-lg bg-slate-900 border border-slate-800 ${current.color.split(' ')[1]}`}>
            {current.badge}
          </span>
          <h4 className="text-sm font-extrabold text-slate-100">
            {current.title} <span className="text-xs font-medium text-slate-500">{current.subtitle}</span>
          </h4>
        </div>
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-semibold">
          {current.summary}
        </p>
      </div>
    </div>
  );
};


// ==========================================
// 2. POSシステムデータの流れ（POSFlowDiagram）
// ==========================================
export const POSFlowDiagram: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const steps = [
    {
      title: '① スキャン (売上の発生)',
      desc: 'レジで商品のバーコードを読み取ります。この瞬間に「何が・いつ・いくらで・どんな人（年代や性別）に」売れたかの情報が生成されます。',
      visualText: 'レジ：「お茶」スキャン完了',
      details: ['商品：お茶 (150円)', '時間：12時30分', '購入者：20代女性']
    },
    {
      title: '② データ送信 (本部に届く)',
      desc: 'スキャンされた売上データは、インターネット（専用線）を経由して、即時に本部の巨大な「POSサーバ」に送信されます。',
      visualText: 'データを本部に送信中...',
      details: ['売上データパケット送信', '全国数千店舗からデータが集結']
    },
    {
      title: '③ データベース蓄積・分析',
      desc: '集まったデータはデータベースに蓄積され、即座に分析されます。「お茶が急に売れ始めた」「気温が上がったから冷たい飲み物の需要が増えた」などを検知します。',
      visualText: '本部サーバーにて集計・分析',
      details: ['需要のリアルタイム検知', '陳列プランの自動決定']
    },
    {
      title: '④ 仕入れ・配送へのフィードバック',
      desc: '分析データに基づき、自動で仕入れ発注や工場の生産調整が行われます。配送車が翌朝に必要な分の商品を店舗に届けます。',
      visualText: '配送トラック：店舗へ最適な量を配送',
      details: ['無駄のない発注（機会損失の防止）', '廃棄ロスの削減']
    }
  ];

  const handleNextStep = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStep((prev) => (prev + 1) % steps.length);
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
            Data Cycle Simulation
          </span>
          <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            POSシステムのデータ流通サイクル
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
            コンビニで「ピッ」と読み込まれたデータが、どう活用されて棚に戻ってくるかを見てみましょう。
          </p>
        </div>

        {/* 次へ進むボタン */}
        <button
          onClick={handleNextStep}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs md:text-sm py-2.5 px-5 rounded-2xl shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 self-start md:self-auto"
        >
          <Sparkles className="w-4 h-4" /> サイクルを進める
        </button>
      </div>

      {/* ステップ進行インジケーター */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        {steps.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === step 
                ? 'bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' 
                : idx < step 
                  ? 'bg-indigo-800' 
                  : 'bg-slate-800'
            }`}
          />
        ))}
      </div>

      {/* ビジュアル表現エリア */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* 左側：グラフィック */}
        <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 flex flex-col justify-center items-center relative overflow-hidden min-h-[220px] border border-slate-800/80">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center w-full"
            >
              {step === 0 && (
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Barcode className="w-20 h-20 text-indigo-400" />
                  </motion.div>
                  <p className="text-[10px] bg-indigo-950 text-indigo-300 px-2.5 py-1 rounded-md font-bold mt-4 border border-indigo-900/50">
                    {steps[0].visualText}
                  </p>
                </div>
              )}

              {step === 1 && (
                <div className="flex flex-col items-center relative w-full justify-center">
                  <div className="flex items-center justify-around w-full max-w-[200px] relative">
                    <ShoppingCart className="w-10 h-10 text-slate-500" />
                    
                    {/* データパケット移動のアニメーション */}
                    <div className="flex-1 relative mx-3 h-1 border-t-2 border-dashed border-slate-800">
                      <motion.div
                        className="absolute w-3.5 h-3.5 bg-blue-500 rounded-full flex items-center justify-center -top-2"
                        animate={{ x: [0, 80] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                      >
                        <span className="text-[7px] text-white font-extrabold">D</span>
                      </motion.div>
                    </div>
                    
                    <Database className="w-10 h-10 text-blue-400" />
                  </div>
                  <p className="text-[10px] bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md font-bold mt-6 border border-slate-800">
                    {steps[1].visualText}
                  </p>
                </div>
              )}

              {step === 2 && (
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                  >
                    <Database className="w-16 h-16 text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]" />
                  </motion.div>
                  <p className="text-[10px] bg-emerald-950 text-emerald-300 px-2.5 py-1 rounded-md font-bold mt-4 border border-emerald-900/50">
                    {steps[2].visualText}
                  </p>
                </div>
              )}

              {step === 3 && (
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{ x: [-15, 15, -15] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  >
                    <Truck className="w-20 h-20 text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]" />
                  </motion.div>
                  <p className="text-[10px] bg-amber-950 text-amber-300 px-2.5 py-1 rounded-md font-bold mt-4 border border-amber-900/50">
                    {steps[3].visualText}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 右側：解説テキスト */}
        <div className="lg:col-span-7 flex flex-col justify-between p-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div>
                <h4 className="text-base font-bold text-slate-100">
                  {steps[step].title}
                </h4>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-semibold mt-2">
                  {steps[step].desc}
                </p>
              </div>

              {/* データの中身/メリット */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-200">
                <span className="text-[9px] text-indigo-400 font-extrabold uppercase tracking-widest block mb-2">
                  流通データ / メリット
                </span>
                <ul className="space-y-1.5">
                  {steps[step].details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
