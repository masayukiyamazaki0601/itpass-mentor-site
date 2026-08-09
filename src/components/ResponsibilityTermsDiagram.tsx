import React, { useState } from 'react';
import {
  Globe,
  Scale,
  ShieldCheck,
  Eye,
  Leaf,
  CheckCircle2,
  Lightbulb,
  Coffee
} from 'lucide-react';

type Term = {
  id: string;
  name: string;
  english: string;
  point: string;
  example: string;
  tip: string;
  icon: React.ElementType;
  chip: string;
  accent: string;
  ring: string;
};

const terms: Term[] = [
  {
    id: 'csr',
    name: 'CSR',
    english: '企業の社会的責任',
    point: '利益追求だけでなく、環境保護や地域貢献など、社会を良くするために自発的に行う活動',
    example: '環境にやさしいカップを導入、地域の清掃活動に参加',
    tip: '「自発的な社会貢献」',
    icon: Globe,
    chip: 'text-sky-300 bg-sky-950/40 border-sky-800',
    accent: 'text-sky-400',
    ring: 'border-sky-700/70'
  },
  {
    id: 'compliance',
    name: 'コンプライアンス',
    english: '法令遵守',
    point: '法律を守るのはもちろん、社会のルールや企業倫理（モラル）も守って活動すること',
    example: '食品衛生法を守る、お客様のデータを悪用しない',
    tip: '「法律＋倫理を守る」',
    icon: Scale,
    chip: 'text-emerald-300 bg-emerald-950/40 border-emerald-800',
    accent: 'text-emerald-400',
    ring: 'border-emerald-700/70'
  },
  {
    id: 'governance',
    name: 'コーポレートガバナンス',
    english: '企業統治',
    point: '経営者が不正をしたり会社を私物化したりしないよう、企業を監視・管理する仕組み',
    example: '経営者が店のお金を使い込まないよう監視役を置く',
    tip: '「経営の監視体制」',
    icon: ShieldCheck,
    chip: 'text-amber-300 bg-amber-950/40 border-amber-800',
    accent: 'text-amber-400',
    ring: 'border-amber-700/70'
  },
  {
    id: 'disclosure',
    name: 'ディスクロージャー',
    english: '情報開示',
    point: '経営状況や財務状況を、株主・投資家・社会に対して隠さずに正しく公開すること',
    example: '儲けや借金の状況をオーナーに正しく報告',
    tip: '「情報の公開」',
    icon: Eye,
    chip: 'text-cyan-300 bg-cyan-950/40 border-cyan-800',
    accent: 'text-cyan-400',
    ring: 'border-cyan-700/70'
  },
  {
    id: 'sustainability',
    name: 'サステナビリティ',
    english: '持続可能性',
    point: '環境・社会・経済のバランスを保ちながら、事業をずっと続けられるようにする考え方',
    example: 'コーヒー豆の農家の環境を守りながら、長く買い続ける',
    tip: '「ずっと続けられること」（SDGsと関連）',
    icon: Leaf,
    chip: 'text-teal-300 bg-teal-950/40 border-teal-800',
    accent: 'text-teal-400',
    ring: 'border-teal-700/70'
  }
];

export const ResponsibilityTermsDiagram: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('csr');
  const active = terms.find((t) => t.id === activeId) ?? terms[0];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Corporate Responsibility
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          企業の責任 5つのキーワード
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          用語をクリックすると、意味とカフェでの例を確認できます。
        </p>
      </div>

      <div className="flex flex-wrap gap-2.5 mb-6">
        {terms.map((t) => {
          const isActive = t.id === activeId;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveId(t.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-bold transition-colors cursor-pointer ${
                isActive ? t.chip : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              <t.icon className="w-4 h-4" />
              {t.name}
            </button>
          );
        })}
      </div>

      <div className={`rounded-2xl border ${active.ring} bg-slate-950/70 p-5 md:p-6`}>
        <div className="flex items-start gap-4">
          <div className={`p-2.5 rounded-xl bg-slate-900 border ${active.ring}`}>
            <active.icon className={`w-5 h-5 ${active.accent}`} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 mb-2">
              <h4 className="text-base md:text-lg font-black text-slate-100">{active.name}</h4>
              <span className={`text-xs font-bold ${active.accent}`}>{active.english}</span>
            </div>

            <div className="space-y-3 mt-3">
              <div className="flex items-start gap-2">
                <span className={`mt-0.5 text-[10px] font-black ${active.accent} flex-shrink-0`}>ポイント</span>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">{active.point}</p>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl px-3.5 py-3">
                <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-semibold mb-1">
                  <Coffee className="w-3 h-3" />
                  <span>カフェでの例</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">{active.example}</p>
              </div>

              <div className="flex items-center gap-2 text-[11px]">
                <span className="inline-flex items-center gap-1.5 font-bold text-slate-100 bg-slate-800/70 border border-slate-700 px-2.5 py-1 rounded-lg">
                  <Lightbulb className={`w-3.5 h-3.5 ${active.accent}`} />
                  覚え方
                </span>
                <span className="text-slate-300">{active.tip}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3">
        <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
        <p className="text-xs text-slate-300">
          どれも「企業の責任」を表す言葉。試験では<span className="font-bold text-blue-300">用語と意味の結びつき</span>がよく出題されます。
        </p>
      </div>
    </div>
  );
};
