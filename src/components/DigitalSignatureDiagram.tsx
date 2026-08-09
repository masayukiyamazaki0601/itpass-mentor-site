import React from 'react';
import {
  PenTool,
  UserCheck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const DigitalSignatureDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-900/60 uppercase">
          Digital Signature
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
          デジタル署名 の仕組みと認証局の役割
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          データの「送信元の本人確認」と「改ざんの検知」を行うため、公開鍵暗号の鍵を逆向きに使う仕組みです。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* 送る側 */}
        <div className="p-5 rounded-2xl border border-blue-900/60 bg-blue-950/15 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-black text-blue-400">1. 送信者 (署名を作成する)</h4>
              <span className="text-[8px] bg-slate-950 text-slate-500 font-bold px-1.5 py-0.2 rounded border border-slate-900">
                秘密鍵で署名
              </span>
            </div>
            <span className="text-[10px] text-slate-350 block font-bold">本人だけが持つ「秘密鍵」でデジタル署名を生成します。</span>
            <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">
              ハッシュ化したデータ（メッセージダイジェスト）に送信者自身の秘密鍵で鍵をかけることで、他人が偽造できない「電子の印鑑」を作成し、本文と一緒に送ります。
            </p>
          </div>

          <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-850 flex items-center gap-2 text-[10px]">
            <PenTool className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <p className="text-slate-300">
              例：店長（送信者）が自分専用の秘密鍵で新レシピにサインを押す。
            </p>
          </div>
        </div>

        {/* 受ける側 */}
        <div className="p-5 rounded-2xl border border-emerald-900/60 bg-emerald-950/15 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-black text-emerald-400">2. 受信者 (署名を検証する)</h4>
              <span className="text-[8px] bg-slate-950 text-slate-500 font-bold px-1.5 py-0.2 rounded border border-slate-900">
                公開鍵で検証
              </span>
            </div>
            <span className="text-[10px] text-slate-355 block font-bold">誰でも取得できる「送信者の公開鍵」で署名を解読します。</span>
            <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">
              送信者の公開鍵で署名が開けば「確かに送信者本人が書いた」ことが証明され、復元されたハッシュ値が一致すれば「途中で改ざんされていない」ことが確認できます。
            </p>
          </div>

          <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-850 flex items-center gap-2 text-[10px]">
            <UserCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <p className="text-slate-300">
              例：本部（受信者）が店長の公開鍵でサインを照合し、正しさを確認する。
            </p>
          </div>
        </div>
      </div>

      {/* CA Section */}
      <div className="mt-8 pt-6 border-t border-slate-800/80">
        <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3">
          認証局 (CA: Certificate Authority) の役割
        </h4>
        <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-850 space-y-2 text-xs leading-relaxed font-medium">
          <p className="text-slate-300">
            デジタル署名で使う「公開鍵」が、本当にその送信者のものであるか（なりすましでないか）を公的に証明する信頼できる第三者機関です。
          </p>
          <ul className="text-[11px] text-slate-400 space-y-1 pl-1">
            <li>・<strong>デジタル証明書</strong>：認証局が発行する「公開鍵の所有者身分証明書」です。</li>
            <li>・<strong>例え</strong>：公開鍵が「実印」なら、認証局（CA）は「役所」、デジタル証明書は「印鑑証明書」にあたります。</li>
          </ul>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-6 flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3 text-xs text-slate-300">
        <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
        <p>
          試験対策：<span className="font-bold text-emerald-300">デジタル署名の3大役割は「本人確認」「改ざん検知」「否認防止」</span>。署名には <span className="font-bold text-blue-300">送信者の秘密鍵</span> を使い、検証には <span className="font-bold text-emerald-300">送信者の公開鍵</span> を使います。
        </p>
      </div>
    </div>
  );
};
