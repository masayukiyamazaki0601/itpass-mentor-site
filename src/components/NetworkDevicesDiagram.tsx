import React from 'react';
import {
  Router,
  Radio,
  Cable,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

export const NetworkDevicesDiagram: React.FC = () => {
  const devices = [
    {
      name: 'ルータ',
      en: 'Router',
      role: '外と中をつなぐ「玄関番」',
      desc: '異なるネットワーク（LANとWANなど）を接続し、データを宛先までルーティング（経路制御）します。',
      example: '店内のLANとインターネットを結ぶ。',
      color: 'text-blue-400 bg-blue-950/15 border-blue-900/60'
    },
    {
      name: 'ハブ (リピータハブ)',
      en: 'Hub',
      role: '全員へデータを流す「放送局」',
      desc: '送られてきたデータを、接続されているすべてのコンピュータへ一斉に送信（ブロードキャスト）します。',
      example: '初期の安価な有線LAN接続など。',
      color: 'text-emerald-400 bg-emerald-950/15 border-emerald-900/60'
    },
    {
      name: 'スイッチ (スイッチングハブ)',
      en: 'Switching Hub',
      role: '宛先だけに届ける「郵便屋」',
      desc: 'MACアドレスを学習し、データに記された宛先のコンピュータだけに通信を届ける賢いハブです。',
      example: '現在の一般的なオフィスや家庭のLAN。',
      color: 'text-amber-400 bg-amber-950/15 border-amber-900/60'
    },
    {
      name: 'モデム (回線終端装置 / ONU)',
      en: 'Modem / ONU',
      role: '通信信号の「通訳」',
      desc: 'アナログ回線や光回線から来る信号と、コンピュータが処理するデジタル信号を相互に変換します。',
      example: '光回線（ONU）でインターネット回線を開通。',
      color: 'text-rose-400 bg-rose-950/15 border-rose-900/60'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-900/60 uppercase">
          Network Hardware
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
          ネットワークを構成する4つの基本機器
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          インターネットと家庭・オフィスの機器を安全かつ効率的に結ぶための中継機器の役割です。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {devices.map((d, idx) => (
          <div 
            key={idx} 
            className={`p-4 rounded-xl border ${d.color} flex flex-col justify-between space-y-4`}
          >
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-black text-slate-100">{d.name}</h4>
                <span className="text-[8px] bg-slate-950 text-slate-500 font-bold px-1.5 py-0.2 rounded border border-slate-900">
                  {d.en}
                </span>
              </div>
              <span className="text-[10px] text-slate-350 block font-bold">{d.role}</span>
              <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                {d.desc}
              </p>
            </div>

            <div className="bg-slate-950/70 p-2.5 rounded border border-slate-850 text-[10px]">
              <div className="flex items-center gap-1.5 text-[9px] text-cyan-400 font-semibold">
                <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                <span>例：{d.example}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Connection Order */}
      <div className="mt-6 flex flex-col md:flex-row md:items-center gap-3 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3 text-xs text-slate-300">
        <div className="font-bold text-sky-400 flex items-center gap-1">
          <HelpCircle className="w-4 h-4" />
          標準的な接続順序:
        </div>
        <div>
          インターネット ➔ <span className="font-bold text-rose-300">モデム/ONU (通訳)</span> ➔ <span className="font-bold text-blue-300">ルータ (玄関番)</span> ➔ <span className="font-bold text-amber-300">スイッチングハブ (中継)</span> ➔ 各種端末 (PC/レジ)
        </div>
      </div>
    </div>
  );
};
