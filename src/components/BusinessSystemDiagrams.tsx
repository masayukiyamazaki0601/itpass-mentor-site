import React from 'react';
import { 
  CreditCard, 
  Wallet, 
  Landmark, 
  ArrowRight, 
  ShoppingCart, 
  Database, 
  Truck, 
  Barcode,
  Calendar,
  DollarSign
} from 'lucide-react';

// ==========================================
// 1. お金の払い方（PaymentFlowDiagram）
// ==========================================
export const PaymentFlowDiagram: React.FC = () => {
  const paymentMethods = [
    {
      title: '電子マネー（前払い / プリペイド）',
      subtitle: 'Suica, PayPay, 楽天Edy など',
      timing: { pre: 'お金が減る ★', now: 'チャージ残高から引く', post: '引き落としなし' },
      summary: '「先に払っておく」仕組み。チャージした金額の範囲内でのみ利用できるため、使いすぎを防げます。',
      textColor: 'text-amber-400',
      bgColor: 'bg-amber-950/15',
      borderColor: 'border-amber-900/60'
    },
    {
      title: 'デビットカード（その場払い / 即時決済）',
      subtitle: '銀行デビットカード など',
      timing: { pre: '手続きなし', now: '口座から即時引き落とし ★', post: '引き落としなし' },
      summary: '「その場で払う」仕組み。クレジットカードと違い、自分の銀行口座の残高から即時にお金が引き落とされます。残高がないと使えません。',
      textColor: 'text-blue-400',
      bgColor: 'bg-blue-950/15',
      borderColor: 'border-blue-900/60'
    },
    {
      title: 'クレジットカード（後払い / ポストペイ）',
      subtitle: 'Visa, Mastercard, JCB など',
      timing: { pre: '手続きなし', now: 'サインや暗証番号のみ', post: 'まとめて口座引き落とし ★' },
      summary: '「あとで払う」仕組み。カード会社が一時的にお金を立て替え、翌月などの決まった引き落とし日に、登録された口座から一括で引き落とされます。',
      textColor: 'text-purple-400',
      bgColor: 'bg-purple-950/15',
      borderColor: 'border-purple-900/60'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Comparison
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          キャッシュレス決済 お金の動くタイミング
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          前払い・その場払い・後払いの3つで、それぞれお金が手元（口座）から動くタイミングを整理した比較図です。
        </p>
      </div>

      <div className="space-y-6">
        {paymentMethods.map((method, idx) => (
          <div 
            key={idx} 
            className={`p-5 rounded-2xl border ${method.borderColor} ${method.bgColor} grid grid-cols-1 lg:grid-cols-12 gap-5 items-center`}
          >
            {/* 左側：特徴解説 */}
            <div className="lg:col-span-5 space-y-2">
              <h4 className={`text-base font-black ${method.textColor}`}>
                {method.title}
              </h4>
              <p className="text-[10px] text-slate-500 font-bold">{method.subtitle}</p>
              <p className="text-xs text-slate-350 leading-relaxed font-semibold">
                {method.summary}
              </p>
            </div>

            {/* 右側：タイミングフロー */}
            <div className="lg:col-span-7 grid grid-cols-3 gap-3 text-center">
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-850">
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-1">1. 事前（チャージ時）</div>
                <div className="text-xs font-bold text-slate-200">{method.timing.pre}</div>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-850">
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-1">2. 購入時（レジ）</div>
                <div className="text-xs font-bold text-slate-200">{method.timing.now}</div>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-850">
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-1">3. 後日（引き落とし日）</div>
                <div className="text-xs font-bold text-slate-200">{method.timing.post}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// ==========================================
// 2. POSシステムデータの流れ（POSFlowDiagram）
// ==========================================
export const POSFlowDiagram: React.FC = () => {
  const steps = [
    {
      title: '① スキャン（売上発生）',
      desc: 'レジで商品のバーコードを読み取ります。「何が・いつ・いくらで・どんな顧客層に」売れたかの情報が生成されます。',
      icon: Barcode,
      details: '商品：お茶 / 購入者：20代女性',
      borderColor: 'border-blue-900/60',
      textColor: 'text-blue-400'
    },
    {
      title: '② データ送信（ネットワーク）',
      desc: '売上データは、インターネット（専用線）を経由して、即座に本部の「POSサーバ」へ自動送信されます。',
      icon: ArrowRight,
      details: '全国数千店舗からリアルタイム送信',
      borderColor: 'border-indigo-900/60',
      textColor: 'text-indigo-400'
    },
    {
      title: '③ データベース蓄積・分析',
      desc: '収集されたデータは本部のデータベースで集計・分析され、売れ筋商品の把握や需要予測に利用されます。',
      icon: Database,
      details: '需要検知 / 天候連動データ分析',
      borderColor: 'border-emerald-900/60',
      textColor: 'text-emerald-400'
    },
    {
      title: '④ 仕入れ・配送への適用',
      desc: '分析データをもとに、自動でメーカーへの発注や工場の生産調整が行われ、必要最小限の在庫が店舗へ配送されます。',
      icon: Truck,
      details: '無駄のない発注 / 廃棄ロスの削減',
      borderColor: 'border-amber-900/60',
      textColor: 'text-amber-400'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Data Cycle
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          POSシステムのデータ流通サイクル
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          店頭での売り上げがどのように本部に送られ、次の仕入れに役立てられるかの情報サイクル図です。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div 
              key={idx} 
              className={`p-4 bg-slate-950/80 border ${step.borderColor} rounded-2xl flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase tracking-wider ${step.textColor}`}>
                    STEP 0{idx + 1}
                  </span>
                  <div className={`p-1.5 bg-slate-900 border ${step.borderColor} ${step.textColor} rounded-lg`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-xs font-extrabold text-slate-100">{step.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">
                  {step.desc}
                </p>
              </div>

              <div className="bg-slate-900/80 p-2.5 rounded-lg text-center border border-slate-850">
                <span className="text-[9px] text-slate-500 font-bold block mb-0.5">主なデータ / 結果</span>
                <span className="text-[10px] font-bold text-slate-350">{step.details}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
