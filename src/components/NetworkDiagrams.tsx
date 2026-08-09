import React from 'react';
import {
  Network,
  Globe,
  Home,
  Server,
  Monitor,
  Share2,
  GitFork,
  Workflow,
  Radio,
  CheckCircle2,
  Lock
} from 'lucide-react';

export function NetworkDiagrams() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      {/* Header */}
      <div>
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Network Architecture
        </span>
        <h2 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          ネットワークの基本形態と仕組み
        </h2>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          コンピュータ同士を繋ぐ範囲（LAN/WAN）、配線の形（トポロジー）、接続モデルを整理します。
        </p>
      </div>

      {/* 1. LAN vs WAN */}
      <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800 space-y-4">
        <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2 flex items-center gap-2">
          <Globe className="w-4 h-4 text-indigo-400" />
          ① ネットワークの範囲（LAN と WAN）
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900 p-4 rounded-xl border border-blue-900/40 space-y-2">
            <span className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
              <Home className="w-4 h-4" />
              LAN (Local Area Network)
            </span>
            <p className="text-[11px] text-slate-300 leading-relaxed font-semibold">
              「おうち・店舗の中」など、同じ建物内や限られた狭いエリアを結ぶ高速ネットワークです。
            </p>
            <ul className="text-[10px] text-slate-400 space-y-1 pt-1 border-t border-slate-850">
              <li>・主な特徴：通信速度が速く、自分たちで管理・設置する</li>
              <li>・カフェの例：1つの店舗内のレジやPC、客用Wi-Fiの接続</li>
            </ul>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl border border-emerald-900/40 space-y-2">
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <Globe className="w-4 h-4" />
              WAN (Wide Area Network)
            </span>
            <p className="text-[11px] text-slate-300 leading-relaxed font-semibold">
              「おうちと外」や、遠く離れた都市・国などの広い範囲を繋ぐネットワークです。
            </p>
            <ul className="text-[10px] text-slate-400 space-y-1 pt-1 border-t border-slate-850">
              <li>・主な特徴：通信事業者の回線（光回線等）を借りて利用する</li>
              <li>・カフェの例：本社と遠く離れた各店舗間を結ぶ回線</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Topologies */}
      <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800 space-y-4">
        <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2 flex items-center gap-2">
          <GitFork className="w-4 h-4 text-indigo-400" />
          ② 接続形態（トポロジー）の3大タイプ
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-850 flex flex-col justify-between space-y-3">
            <div>
              <span className="text-xs font-bold text-slate-200 block">スター型</span>
              <p className="text-[10px] text-slate-400 leading-relaxed mt-1 font-semibold">
                ハブ（集線装置）を中心に、各コンピュータを放射状に接続します。1台が故障しても他へ影響しません。
              </p>
            </div>
            <div className="bg-slate-950 p-2.5 rounded border border-slate-800 text-center text-[9px] text-indigo-400 font-bold">
              現在最も普及している形態
            </div>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl border border-slate-850 flex flex-col justify-between space-y-3">
            <div>
              <span className="text-xs font-bold text-slate-200 block">バス型</span>
              <p className="text-[10px] text-slate-400 leading-relaxed mt-1 font-semibold">
                1本の基幹ケーブル（バス）に、各端末を数珠つなぎにします。両端に「終端抵抗（ターミネータ）」が必要です。
              </p>
            </div>
            <div className="bg-slate-950 p-2.5 rounded border border-slate-800 text-center text-[9px] text-amber-400 font-bold">
              基幹ケーブル断線で全停止する
            </div>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl border border-slate-850 flex flex-col justify-between space-y-3">
            <div>
              <span className="text-xs font-bold text-slate-200 block">リング型</span>
              <p className="text-[10px] text-slate-400 leading-relaxed mt-1 font-semibold">
                各端末を円状（リング状）に接続します。データを送信するための権利である「トークン」を順に周回させます。
              </p>
            </div>
            <div className="bg-slate-950 p-2.5 rounded border border-slate-800 text-center text-[9px] text-emerald-400 font-bold">
              トークンパッシング方式で制御
            </div>
          </div>
        </div>
      </div>

      {/* 3. Client-Server vs P2P */}
      <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800 space-y-4">
        <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2 flex items-center gap-2">
          <Workflow className="w-4 h-4 text-indigo-400" />
          ③ 接続モデルの違い（クライアントサーバ と P2P）
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-850 space-y-2">
            <span className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
              <Server className="w-4 h-4" />
              クライアントサーバシステム
            </span>
            <p className="text-[10px] text-slate-350 leading-relaxed font-semibold">
              サービスを提供する「サーバ」と、要求する「クライアント」で役割分担をする仕組みです。
            </p>
            <div className="bg-slate-950/80 p-2 rounded text-[9px] text-slate-400">
              例：スマホやPC（クライアント）からWebページを要求し、Webサーバが応答する。
            </div>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl border border-slate-850 space-y-2">
            <span className="text-xs font-bold text-purple-400 flex items-center gap-1.5">
              <Share2 className="w-4 h-4" />
              ピアツーピア (P2P)
            </span>
            <p className="text-[10px] text-slate-350 leading-relaxed font-semibold">
              専用のサーバを持たず、接続されたすべての端末（ピア）が「対等」な立場で直接通信する仕組みです。
            </p>
            <div className="bg-slate-950/80 p-2 rounded text-[9px] text-slate-400">
              例：ファイル共有ソフトや、音声通話アプリでの直接のデータやり取り。
            </div>
          </div>
        </div>
      </div>

      {/* Summary tips */}
      <div className="flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3">
        <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
        <p className="text-xs text-slate-300">
          試験対策：<span className="font-bold text-blue-300">LAN＝狭い</span>・<span className="font-bold text-emerald-300">WAN＝広い</span>。接続形態は<span className="font-bold text-indigo-300">スター型（ハブ中心）</span>が現在主流。
        </p>
      </div>
    </div>
  );
}
