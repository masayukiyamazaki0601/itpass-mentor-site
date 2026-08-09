import React from 'react';
import { 
  FlaskConical, 
  Lightbulb, 
  Cpu, 
  ArrowRight, 
  Map, 
  Share2, 
  Users, 
  TrendingUp, 
  Building,
  Factory,
  PackageCheck
} from 'lucide-react';

// ==========================================
// 1. 研究の3段階（RndStepsDiagram）
// ==========================================
export const RndStepsDiagram: React.FC = () => {
  const steps = [
    {
      title: '基礎研究',
      subtitle: '① 原理や成分を調べる',
      desc: '「そもそも、この素材にはどんな働きがあるか」を調べる段階。世の中にない新しい発見や、科学的根拠を明らかにします。',
      example: '例：ある果物に、体脂肪を燃焼しやすくする未知の成分（ポリフェノールの一種）があることを見つける。',
      icon: FlaskConical,
      textColor: 'text-blue-400',
      borderColor: 'border-blue-900/60',
      bgColor: 'bg-blue-950/20',
      badge: '原理の発見'
    },
    {
      title: '応用研究',
      subtitle: '② 商品にどう使うか考える',
      desc: '基礎研究の成果を「具体的な商品にどう応用するか」を研究する段階。実用化の可能性や、効果的な配合方法を実験します。',
      example: '例：その成分の効能を損なわずに、熱や光に強い「清涼飲料水」の配合レシピや抽出方法を開発する。',
      icon: Lightbulb,
      textColor: 'text-emerald-400',
      borderColor: 'border-emerald-900/60',
      bgColor: 'bg-emerald-950/20',
      badge: '実用化の模索'
    },
    {
      title: '開発研究',
      subtitle: '③ 商品として仕上げる',
      desc: '実際に「商品として仕上げ、大量生産する」段階。試作を重ね、製造ラインでの品質管理やコスト削減の技術を確立します。',
      example: '例：試作品で味や栄養の検査を行い、工場で1分間に何千本も製造できるオートメーションラインを設計する。',
      icon: Cpu,
      textColor: 'text-amber-400',
      borderColor: 'border-amber-900/60',
      bgColor: 'bg-amber-950/20',
      badge: '製品化・量産化'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Infographic
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          研究開発（R&D）の3つの段階
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          基礎研究から応用、開発へと段階を経て商品になっていくR&Dプロセスです。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div 
              key={idx} 
              className={`p-5 rounded-2xl border ${step.borderColor} ${step.bgColor} flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border ${step.borderColor} ${step.textColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-slate-900/60 border ${step.borderColor} ${step.textColor}`}>
                    {step.badge}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-100">{step.title}</h4>
                  <p className={`text-[10px] font-extrabold ${step.textColor} mt-0.5`}>{step.subtitle}</p>
                </div>
                <p className="text-xs text-slate-350 leading-relaxed font-semibold">
                  {step.desc}
                </p>
              </div>

              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-850">
                <p className="text-[9px] text-indigo-400 font-extrabold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5" /> 飲料メーカーでの具体例
                </p>
                <p className="text-[10px] font-bold text-slate-300 leading-relaxed">
                  {step.example}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


// ==========================================
// 2. 技術ロードマップ（TechRoadmapDiagram）
// ==========================================
export const TechRoadmapDiagram: React.FC = () => {
  const roadmapData = {
    timeline: ['1年目（短期）', '2年目（中期）', '3年目（長期）'],
    layers: [
      {
        title: '① 市場ニーズ (Market)',
        color: 'border-l-pink-500 text-pink-400 bg-pink-950/10',
        badge: '市場',
        items: [
          '健康・オーガニック飲料の需要増加（生活習慣病予防など）',
          '疲労回復とパフォーマンス維持の需要（テレワーク対応）',
          'パーソナライズ栄養機能食品の普及（個別体質向け市場）'
        ]
      },
      {
        title: '② 製品 (Product)',
        color: 'border-l-emerald-500 text-emerald-400 bg-emerald-950/10',
        badge: '製品',
        items: [
          '天然ポリフェノール配合ハーブ水（先行発売）',
          '高浸透・速攻疲労回復アシスト飲料（特許技術ベース）',
          'オーダーメイド型サプリメントゼリー（外部連携開発）'
        ]
      },
      {
        title: '③ 技術 (Technology)',
        color: 'border-l-blue-500 text-blue-400 bg-blue-950/10',
        badge: '技術',
        items: [
          '新規有用ポリフェノール抽出技術（有用成分を安定抽出）',
          'ナノ乳化カプセル配合技術（特許取得・吸収率の向上）',
          'DNA・バイオ分析連動自動調合システム（リアルタイム調合）'
        ]
      }
    ]
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Static Roadmap
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          技術ロードマップの全体構造
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          市場・製品・技術の3つの要素を時間軸（短期・中期・長期）に沿って並べ、どのような結びつきで製品化するかを示した将来計画書です。
        </p>
      </div>

      <div className="space-y-4 overflow-x-auto pb-2">
        <div className="grid grid-cols-12 gap-4 min-w-[700px] border-b border-slate-800 pb-2.5 font-bold text-xs text-slate-400 text-center">
          <div className="col-span-3 text-left">レイヤー</div>
          {roadmapData.timeline.map((time, idx) => (
            <div key={idx} className="col-span-3 text-center flex items-center justify-center gap-1.5">
              <Map className="w-3.5 h-3.5 text-indigo-400" /> {time}
            </div>
          ))}
        </div>

        {roadmapData.layers.map((layer, idx) => (
          <div key={idx} className="grid grid-cols-12 gap-4 min-w-[700px] items-stretch">
            <div className={`col-span-3 flex items-center p-3 rounded-xl border border-slate-800/80 border-l-4 font-black text-xs ${layer.color}`}>
              {layer.title}
            </div>
            {layer.items.map((item, itemIdx) => (
              <div 
                key={itemIdx} 
                className="col-span-3 p-3.5 bg-slate-950/60 rounded-xl border border-slate-850 flex flex-col justify-center"
              >
                <div className="text-[10px] text-slate-500 font-bold mb-1">
                  {roadmapData.timeline[itemIdx]}
                </div>
                <p className="text-xs font-bold text-slate-200 leading-tight">
                  {item}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* イノベーションコラム */}
      <div className="mt-6 p-4.5 bg-purple-950/20 border border-purple-900/65 rounded-2xl flex flex-col md:flex-row gap-4 items-start">
        <div className="bg-purple-900/40 p-2.5 rounded-xl border border-purple-800 text-purple-300">
          <Users className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-xs md:text-sm font-extrabold text-purple-300 flex items-center gap-1.5">
            <Share2 className="w-4 h-4" /> 外部技術の取り入れ：オープンイノベーション
          </h4>
          <p className="text-xs text-slate-350 leading-relaxed font-semibold mt-1">
            自社内だけで研究開発を行うのではなく、大学などの研究機関や他社と協力して新技術を生み出す手法です。ロードマップの3年目（長期）における「DNA・バイオ分析」や「オーダーメイド調合システム」のように、高度な先端技術をスピーディに取り入れるために広く使われています。
          </p>
        </div>
      </div>
    </div>
  );
};
