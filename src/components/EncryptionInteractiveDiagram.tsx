import React from 'react';
import {
  KeyRound,
  Lock,
  LockOpen,
  Zap,
  RefreshCw,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const EncryptionInteractiveDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-900/60 uppercase">
          Cryptography Basics
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-sky-400 via-blue-400 to-amber-400 bg-clip-text text-transparent">
          共通鍵暗号方式 と 公開鍵暗号方式 の比較
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          データを第三者に読めない形にする「暗号化」と、元に戻す「復号」で用いる鍵の仕組みです。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 共通鍵 */}
        <div className="p-5 rounded-2xl border border-blue-900/60 bg-blue-950/15 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-black text-blue-400">共通鍵暗号方式 (対称鍵)</h4>
              <span className="text-[8px] bg-slate-950 text-slate-500 font-bold px-1.5 py-0.2 rounded border border-slate-900">
                鍵は 1種類
              </span>
            </div>
            <span className="text-[10px] text-slate-350 block font-bold">暗号化と復号に「同じ鍵」を共有して使用する</span>
            <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">
              送る側と受け取る側があらかじめ同じ鍵を持っておく必要があります。鍵の数が1つなので、処理が高速です。
            </p>

            <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-850 space-y-1.5">
              <span className="text-[8px] text-slate-500 font-bold block">通信プロセス</span>
              <div className="flex items-center gap-2 text-[10px]">
                <div className="bg-slate-950 px-2 py-1 rounded border border-slate-800">平文</div>
                <ArrowRight className="w-3 h-3 text-slate-500" />
                <div className="bg-slate-950 px-2 py-1 rounded border border-slate-800 flex items-center gap-1">
                  <Lock className="w-3 h-3 text-blue-400" /> 共通鍵で暗号化
                </div>
                <ArrowRight className="w-3 h-3 text-slate-500" />
                <div className="bg-slate-950 px-2 py-1 rounded border border-slate-800 flex items-center gap-1">
                  <LockOpen className="w-3 h-3 text-blue-400" /> 共通鍵で復号
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px] pt-2 border-t border-slate-850">
            <div className="bg-slate-950 p-2 rounded flex items-center gap-1.5 font-bold">
              <Zap className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span className="text-emerald-400">長所：処理が速い</span>
            </div>
            <div className="bg-slate-950 p-2 rounded flex items-center gap-1.5 font-bold">
              <RefreshCw className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
              <span className="text-rose-455 text-rose-400">短所：鍵の配送問題</span>
            </div>
          </div>
        </div>

        {/* 公開鍵 */}
        <div className="p-5 rounded-2xl border border-amber-900/60 bg-amber-950/15 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-black text-amber-400">公開鍵暗号方式 (非対称鍵)</h4>
              <span className="text-[8px] bg-slate-950 text-slate-500 font-bold px-1.5 py-0.2 rounded border border-slate-900">
                鍵は 2種類
              </span>
            </div>
            <span className="text-[10px] text-slate-355 block font-bold">「公開鍵」とペアの「秘密鍵」を別々に使う</span>
            <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">
              暗号化には受信者の「公開鍵」を、復号には受信者本人だけが持つ「秘密鍵」を用います。鍵を安全に送る手間が省けます。
            </p>

            <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-850 space-y-1.5">
              <span className="text-[8px] text-slate-500 font-bold block">通信プロセス</span>
              <div className="flex items-center gap-2 text-[10px]">
                <div className="bg-slate-950 px-2 py-1 rounded border border-slate-800">平文</div>
                <ArrowRight className="w-3 h-3 text-slate-500" />
                <div className="bg-slate-950 px-2 py-1 rounded border border-slate-800 flex items-center gap-1">
                  <Lock className="w-3 h-3 text-amber-400" /> 相手の公開鍵で暗号化
                </div>
                <ArrowRight className="w-3 h-3 text-slate-500" />
                <div className="bg-slate-950 px-2 py-1 rounded border border-slate-800 flex items-center gap-1">
                  <LockOpen className="w-3 h-3 text-orange-400" /> 自分の秘密鍵で復号
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px] pt-2 border-t border-slate-850">
            <div className="bg-slate-950 p-2 rounded flex items-center gap-1.5 font-bold">
              <Zap className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span className="text-emerald-400">長所：鍵の管理が容易</span>
            </div>
            <div className="bg-slate-950 p-2 rounded flex items-center gap-1.5 font-bold">
              <RefreshCw className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
              <span className="text-rose-400">短所：処理が遅い</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-6 flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3 text-xs text-slate-300">
        <ShieldCheck className="w-4 h-4 text-sky-400 flex-shrink-0" />
        <p>
          覚え方：<span className="font-bold text-sky-300">「公開鍵で暗号化したものは、対応する秘密鍵でのみ復号できる」</span> という関係性を確実に覚えましょう。共通鍵方式には AES、公開鍵方式には RSA などがあります。
        </p>
      </div>
    </div>
  );
};
