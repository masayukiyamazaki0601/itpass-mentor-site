import React from 'react';
import { Coffee, Truck, HandCoins, RefreshCcw, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react';

type Step = {
  number: string;
  title: string;
  point: string;
  example: string;
  icon: React.ElementType;
  color: string;
  chip: string;
};

const steps: Step[] = [
  {
    number: 'STEP 1',
    title: '商品やサービスを作る',
    point: '価値を生み出す源泉です。原材料からお客様に喜ばれる商品を用意します。',
    example: 'おいしいコーヒーを用意する',
    icon: Coffee,
    color: 'bg-sky-100 text-sky-700',
    chip: 'bg-sky-50 border-sky-200 text-sky-800'
  },
  {
    number: 'STEP 2',
    title: 'お客さんに届ける',
    point: '作った商品を販売・提供し、お客様の手に届ける活動です。',
    example: 'お客様にコーヒーを販売する',
    icon: Truck,
    color: 'bg-blue-100 text-blue-700',
    chip: 'bg-blue-50 border-blue-200 text-blue-800'
  },
  {
    number: 'STEP 3',
    title: 'お金をもらう',
    point: '販売の対価として売上金を受け取り、費用を差し引いた残りが利益です。',
    example: '売上金を受け取り、費用を引いて利益を確認する',
    icon: HandCoins,
    color: 'bg-emerald-100 text-emerald-700',
    chip: 'bg-emerald-50 border-emerald-200 text-emerald-800'
  },
  {
    number: 'STEP 4',
    title: '次の準備をする',
    point: '得た利益を仕入れや新商品の開発に回し、次のサイクルを準備します。',
    example: '新しいメニューを開発する',
    icon: RefreshCcw,
    color: 'bg-amber-100 text-amber-700',
    chip: 'bg-amber-50 border-amber-200 text-amber-800'
  }
];

export const CorporateActivitiesDiagrams: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] p-6 sm:p-8 rounded-3xl border border-sky-100 shadow-sm my-6">
      <div className="text-center mb-8">
        <span className="inline-block text-[10px] font-extrabold tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 uppercase mb-3">
          Business Activities
        </span>
        <h3 className="text-xl md:text-2xl font-black text-[#111c2c]">
          企業活動のサイクル
        </h3>
        <p className="text-xs text-[#43474f] mt-1 font-medium">
          この4つのステップをぐるぐる回し続けるのが企業活動です
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-3 lg:gap-0">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <React.Fragment key={step.title}>
              <div className={`flex-1 rounded-2xl border p-5 ${step.chip} flex flex-col gap-3`}>
                <div className="flex items-center justify-between">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${step.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[9px] font-black text-slate-400 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h4 className="font-black text-sm text-slate-900">{step.title}</h4>
                </div>

                <p className="text-[11px] text-slate-600 leading-relaxed font-medium flex-1">
                  {step.point}
                </p>

                <div className="bg-white/80 border border-slate-200 rounded-xl px-3 py-2">
                  <p className="text-[10px] text-slate-400 font-bold mb-0.5">カフェでの例</p>
                  <p className="text-[11px] text-slate-700 leading-relaxed font-medium">
                    {step.example}
                  </p>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="flex items-center justify-center lg:flex-col px-1 py-2 lg:py-0">
                  <ArrowRight className="w-5 h-5 text-slate-300 rotate-90 lg:rotate-0" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex items-start gap-2 bg-amber-50/70 border border-amber-200 rounded-xl px-4 py-3">
          <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800 font-medium">
            このサイクルが止まってしまうと、企業は倒産してしまいます。
          </p>
        </div>
        <div className="flex items-start gap-2 bg-sky-50/70 border border-sky-200 rounded-xl px-4 py-3">
          <Lightbulb className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-sky-800 font-medium">
            覚え方：<span className="font-bold">「作る → 届ける → お金 → 次の準備」＝企業活動の流れ</span>
          </p>
        </div>
      </div>
    </div>
  );
};
