import React from 'react';
import { Globe, Scale, ShieldCheck, Eye, Leaf, Lightbulb, Coffee, Info } from 'lucide-react';

type Term = {
  name: string;
  english: string;
  point: string;
  example: string;
  tip: string;
  icon: React.ElementType;
  chip: string;
  color: string;
};

const terms: Term[] = [
  {
    name: 'CSR',
    english: '企業の社会的責任',
    point: '利益追求だけでなく、環境保護や地域貢献など、社会を良くするために自発的に行う活動',
    example: '環境にやさしいカップを導入、地域の清掃活動に参加',
    tip: '「自発的な社会貢献」',
    icon: Globe,
    chip: 'bg-sky-50 border-sky-200 text-sky-800',
    color: 'bg-sky-100 text-sky-700'
  },
  {
    name: 'コンプライアンス',
    english: '法令遵守',
    point: '法律を守るのはもちろん、社会のルールや企業倫理（モラル）も守って活動すること',
    example: '食品衛生法を守る、お客様のデータを悪用しない',
    tip: '「法律＋倫理を守る」',
    icon: Scale,
    chip: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    color: 'bg-emerald-100 text-emerald-700'
  },
  {
    name: 'コーポレートガバナンス',
    english: '企業統治',
    point: '経営者が不正をしたり会社を私物化したりしないよう、企業を監視・管理する仕組み',
    example: '経営者が店のお金を使い込まないよう監視役を置く',
    tip: '「経営の監視体制」',
    icon: ShieldCheck,
    chip: 'bg-amber-50 border-amber-200 text-amber-800',
    color: 'bg-amber-100 text-amber-700'
  },
  {
    name: 'ディスクロージャー',
    english: '情報開示',
    point: '経営状況や財務状況を、株主・投資家・社会に対して隠さずに正しく公開すること',
    example: '儲けや借金の状況をオーナーに正しく報告',
    tip: '「情報の公開」',
    icon: Eye,
    chip: 'bg-cyan-50 border-cyan-200 text-cyan-800',
    color: 'bg-cyan-100 text-cyan-700'
  },
  {
    name: 'サステナビリティ',
    english: '持続可能性',
    point: '環境・社会・経済のバランスを保ちながら、事業をずっと続けられるようにする考え方',
    example: 'コーヒー豆の農家の環境を守りながら、長く買い続ける',
    tip: '「ずっと続けられること」（SDGsと関連）',
    icon: Leaf,
    chip: 'bg-teal-50 border-teal-200 text-teal-800',
    color: 'bg-teal-100 text-teal-700'
  }
];

export const ResponsibilityTermsDiagram: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] p-6 sm:p-8 rounded-3xl border border-sky-100 shadow-sm my-6">
      <div className="text-center mb-8">
        <span className="inline-block text-[10px] font-extrabold tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 uppercase mb-3">
          Corporate Responsibility
        </span>
        <h3 className="text-xl md:text-2xl font-black text-[#111c2c]">
          企業の責任 5つのキーワード
        </h3>
        <p className="text-xs text-[#43474f] mt-1 font-medium">
          どれも「企業の責任」を表す重要な用語です。意味・例・覚え方をまとめました。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {terms.map((t) => {
          const Icon = t.icon;
          return (
            <div key={t.name} className={`rounded-2xl border p-5 ${t.chip} flex flex-col gap-3`}>
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${t.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-black text-sm text-slate-900 leading-tight">{t.name}</h4>
                  <span className="text-[10px] font-bold text-slate-500">{t.english}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-[10px] font-black text-slate-400 flex-shrink-0">ポイント</span>
                <p className="text-[11px] text-slate-600 leading-relaxed font-medium">{t.point}</p>
              </div>

              <div className="bg-white/80 border border-slate-200 rounded-xl px-3 py-2 flex-1">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold mb-0.5">
                  <Coffee className="w-3 h-3" />
                  <span>カフェでの例</span>
                </div>
                <p className="text-[11px] text-slate-700 leading-relaxed font-medium">{t.example}</p>
              </div>

              <div className="flex items-center gap-2 text-[11px] bg-white/70 border border-slate-200 rounded-lg px-2.5 py-1.5">
                <span className="inline-flex items-center gap-1.5 font-bold text-slate-700 flex-shrink-0">
                  <Lightbulb className={`w-3.5 h-3.5 ${t.color.split(' ')[1]}`} />
                  覚え方
                </span>
                <span className="text-slate-700 leading-snug font-medium">{t.tip}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-start gap-2 bg-sky-50/70 border border-sky-200 rounded-xl px-4 py-3">
        <Info className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-sky-800 font-medium">
          試験では<span className="font-bold">用語と意味の結びつき</span>がよく出題されます。上記の「覚え方」で一気に整理しましょう。
        </p>
      </div>
    </div>
  );
};
