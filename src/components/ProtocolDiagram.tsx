import React from 'react';
import {
  Globe,
  Radio,
  FileText,
  MapPin,
  CheckCircle2,
  Lock
} from 'lucide-react';

export const ProtocolDiagram: React.FC = () => {
  const protocols = [
    {
      name: 'TCP / IP',
      role: '分割 ＆ 宛先指定のインターネット標準',
      desc: 'TCPが「データを扱いやすいサイズ（パケット）に分割し、確実に届ける」役割を、IPが「データに宛先（IPアドレス）を割り当てて送る」役割を担います。',
      example: '注文データをパケットに分けて確実に送る。',
      color: 'text-blue-400 bg-blue-950/15 border-blue-900/60'
    },
    {
      name: 'HTTP / HTTPS',
      role: 'Webページを送受信するルール',
      desc: 'ブラウザ（クライアント）とWebサーバ間で、Webページ（HTML等）のデータをやり取りするための規則。HTTPSは中身を暗号化して安全にした規格です。',
      example: 'カフェの公式サイトを安全に閲覧する。',
      color: 'text-emerald-400 bg-emerald-950/15 border-emerald-900/60'
    },
    {
      name: 'IPアドレス',
      role: 'ネットワーク上の「数字の住所」',
      desc: 'コンピュータやルータなど、ネットワークに接続されているすべての機器を識別するために割り振られた、重複のない数字の並び（例: 192.168.1.1）です。',
      example: '本社のサーバーコンピュータを特定する。',
      color: 'text-amber-400 bg-amber-950/15 border-amber-900/60'
    },
    {
      name: 'ドメイン名',
      role: '人間が覚えやすい「文字の名前」',
      desc: '数字のIPアドレスは覚えにくいため、人間が理解しやすいアルファベットなどの文字列（例: example.com）に変換した名称。DNSがIPアドレスと紐付けます。',
      example: 'ブラウザに店名のURLを入力する。',
      color: 'text-rose-400 bg-rose-950/15 border-rose-900/60'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-900/60 uppercase">
          Network Protocols
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
          インターネットの通信規則と識別子
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          コンピュータ同士が正しく「会話」するために定められた共通の約束ごと（プロトコル）と、住所の仕組みです。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {protocols.map((p, idx) => (
          <div 
            key={idx} 
            className={`p-4 rounded-xl border ${p.color} flex flex-col justify-between space-y-4`}
          >
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-black text-slate-100">{p.name}</h4>
                <span className="text-[8px] bg-slate-950 text-slate-500 font-bold px-1.5 py-0.2 rounded border border-slate-900">
                  PROTOCOL 0{idx + 1}
                </span>
              </div>
              <span className="text-[10px] text-slate-355 block font-bold">{p.role}</span>
              <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                {p.desc}
              </p>
            </div>

            <div className="bg-slate-950/70 p-2.5 rounded border border-slate-850 text-[10px]">
              <div className="flex items-center gap-1.5 text-[9px] text-cyan-400 font-semibold">
                <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                <span>例：{p.example}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DNS Summary */}
      <div className="mt-6 flex flex-col md:flex-row md:items-center gap-3 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3 text-xs text-slate-300">
        <div className="font-bold text-sky-400 flex items-center gap-1">
          <Lock className="w-4 h-4" />
          DNS (Domain Name System) の役割:
        </div>
        <div>
          人間が入力した <span className="font-bold text-rose-300">ドメイン名 (文字)</span> を、コンピュータが理解できる <span className="font-bold text-amber-300">IPアドレス (数字)</span> へ自動翻訳・変換する重要なシステムです。
        </div>
      </div>
    </div>
  );
};
