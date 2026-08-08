import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FlaskConical, 
  Lightbulb, 
  Cpu, 
  ArrowRight, 
  Map, 
  Share2, 
  Users, 
  TrendingUp, 
  Sparkles,
  Building,
  Factory,
  PackageCheck
} from 'lucide-react';

// ==========================================
// 1. 研究の3段階（RndStepsDiagram）
// ==========================================
export const RndStepsDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: '基礎研究',
      subtitle: 'いちばん最初：原理や成分を調べる',
      desc: '「そもそも、この素材にはどんな働きがあるか」を調べる段階。世の中にない新しい発見や、科学的根拠を明らかにします。',
      example: '例：ある果物に、体脂肪を燃焼しやすくする未知の成分（ポリフェノールの一種）があることを見つける。',
      icon: FlaskConical,
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      accentColor: '#3b82f6',
      badge: '原理の発見'
    },
    {
      title: '応用研究',
      subtitle: '2番目：商品にどう使うか考える',
      desc: '基礎研究 of 成果を「具体的な商品にどう応用するか」を研究する段階。実用化の可能性や、効果的な配合方法を実験します。',
      example: '例：その成分の効能を損なわずに、熱や光に強い「清涼飲料水」の配合レシピや抽出方法を開発する。',
      icon: Lightbulb,
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      accentColor: '#10b981',
      badge: '実用化の模索'
    },
    {
      title: '開発研究',
      subtitle: '3番目：商品として仕上げる',
      desc: '実際に「商品として仕上げ、大量生産する」段階。試作を重ね、製造ラインでの品質管理やコスト削減の技術を確立します。',
      example: '例：試作品で味や栄養の検査を行い、工場で1分間に何千本も製造できるオートメーションラインを設計する。',
      icon: Cpu,
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-600',
      bgColor: 'bg-amber-50',
      accentColor: '#f59e0b',
      badge: '製品化・量産化'
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="mb-6">
        <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
          Interactive Diagram
        </span>
        <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          研究開発（R&D）の3つの段階
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
          基礎から開発へ、段階的にカタチになっていく流れをステップごとに体験しましょう。
        </p>
      </div>

      {/* ステップ進行インジケーター */}
      <div className="relative flex justify-between items-center mb-8 max-w-lg mx-auto">
        <div className="absolute left-0 right-0 top-1/2 h-1 bg-slate-800 -translate-y-1/2 z-0" />
        <motion.div 
          className="absolute left-0 top-1/2 h-1 bg-gradient-to-r from-blue-500 to-amber-500 -translate-y-1/2 z-0"
          initial={{ width: '0%' }}
          animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
        
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = idx === activeStep;
          const isCompleted = idx < activeStep;
          
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className="relative z-10 flex flex-col items-center focus:outline-none cursor-pointer"
            >
              <motion.div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all ${
                  isActive 
                    ? 'bg-slate-800 border-indigo-400 shadow-lg shadow-indigo-500/20 text-indigo-400 scale-110' 
                    : isCompleted
                      ? 'bg-indigo-600 border-indigo-500 text-white'
                      : 'bg-slate-900 border-slate-700 text-slate-500 hover:border-slate-500'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6" />
              </motion.div>
              <span className={`text-[10px] md:text-xs font-bold mt-2 ${isActive ? 'text-indigo-400 font-extrabold' : 'text-slate-500'}`}>
                {step.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* アニメーション＆解説エリア */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* 左側：アニメーションビジュアル */}
        <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 flex flex-col justify-center items-center relative overflow-hidden min-h-[260px] border border-slate-800/80">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              {activeStep === 0 && (
                <div className="relative">
                  {/* 基礎研究のアニメーション：試験管から泡が湧き出る */}
                  <motion.div 
                    className="absolute -top-4 left-4 w-4 h-4 bg-blue-400/40 rounded-full animate-bounce"
                    animate={{ y: [-20, -100], opacity: [0, 1, 0], scale: [0.8, 1.5, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
                  />
                  <motion.div 
                    className="absolute -top-6 -left-2 w-3 h-3 bg-indigo-400/50 rounded-full animate-bounce"
                    animate={{ y: [-10, -80], opacity: [0, 1, 0], scale: [0.5, 1.2, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1.8, delay: 0.6 }}
                  />
                  <motion.div 
                    className="absolute -top-8 left-8 w-2 h-2 bg-cyan-300/60 rounded-full animate-bounce"
                    animate={{ y: [-5, -60], opacity: [0, 1, 0], scale: [0.5, 1, 0.2] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}
                  />
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  >
                    <FlaskConical className="w-24 h-24 text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                  </motion.div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-blue-500/20 blur-xl w-16 h-4 rounded-full" />
                </div>
              )}

              {activeStep === 1 && (
                <div className="relative">
                  {/* 応用研究のアニメーション：アイデアが光り、ひらめく */}
                  <motion.div 
                    className="absolute -top-12 left-1/2 -translate-x-1/2 text-emerald-400"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Sparkles className="w-8 h-8" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  >
                    <Lightbulb className="w-24 h-24 text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                  </motion.div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-emerald-500/20 blur-xl w-16 h-4 rounded-full" />
                </div>
              )}

              {activeStep === 2 && (
                <div className="relative flex flex-col items-center">
                  {/* 開発研究のアニメーション：工場や製品のパッケージ */}
                  <div className="flex gap-4">
                    <motion.div
                      animate={{ scale: [0.9, 1.05, 0.9] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                    >
                      <Factory className="w-16 h-16 text-amber-500" />
                    </motion.div>
                    <motion.div
                      animate={{ x: [-20, 20, -20] }}
                      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                    >
                      <PackageCheck className="w-16 h-16 text-orange-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.4)]" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-amber-500/20 blur-xl w-24 h-4 rounded-full" />
                </div>
              )}
              
              <div className="mt-6 text-center">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${steps[activeStep].bgColor} ${steps[activeStep].textColor} border border-slate-700/60`}>
                  {steps[activeStep].badge}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 右側：解説カード */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div>
                <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${steps[activeStep].color}`} />
                  {steps[activeStep].title}
                </h4>
                <p className="text-xs text-indigo-400 font-bold tracking-wide mt-0.5">
                  {steps[activeStep].subtitle}
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                {steps[activeStep].desc}
              </p>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-slate-200">
                <p className="text-xs text-indigo-400 font-extrabold uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  <Building className="w-4 h-4" /> 飲料メーカーでのイメージ
                </p>
                <p className="text-xs md:text-sm font-semibold leading-relaxed text-slate-200">
                  {steps[activeStep].example}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 前へ・次へボタン */}
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-800/80">
            <button
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className={`text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeStep === 0 
                  ? 'text-slate-600 bg-slate-900 border border-slate-800 cursor-not-allowed' 
                  : 'text-slate-300 bg-slate-800 border border-slate-700 hover:bg-slate-700'
              }`}
            >
              前へ
            </button>
            <button
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStep === steps.length - 1}
              className={`text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1 ${
                activeStep === steps.length - 1 
                  ? 'text-slate-600 bg-slate-900 border border-slate-800 cursor-not-allowed' 
                  : 'text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/10'
              }`}
            >
              次へ <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 2. 技術ロードマップ（TechRoadmapDiagram）
// ==========================================
export const TechRoadmapDiagram: React.FC = () => {
  const [openInnovation, setOpenInnovation] = useState<boolean>(false);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  // ロードマップデータ
  const roadmapData = {
    timeline: ['1年目（短期）', '2年目（中期）', '3年目（長期）'],
    layers: [
      {
        id: 'market',
        title: '市場ニーズ (Market)',
        color: 'border-l-pink-500 text-pink-400 bg-pink-950/20',
        badge: '市場',
        items: [
          { id: 'm1', timeIdx: 0, label: '健康・オーガニック飲料の需要増加', detail: '生活習慣病予防や糖質制限といった健康志向が一般消費者に定着。' },
          { id: 'm2', timeIdx: 1, label: '疲労回復とパフォーマンス維持', detail: 'テレワークやデスクワークでの疲労を手軽にケアする飲料の需要。' },
          { id: 'm3', timeIdx: 2, label: 'パーソナライズ栄養機能食品の普及', detail: '個人の体質や目標に合わせた成分を提供する次世代市場。' }
        ]
      },
      {
        id: 'product',
        title: '製品 (Product)',
        color: 'border-l-emerald-500 text-emerald-400 bg-emerald-950/20',
        badge: '製品',
        items: [
          { id: 'p1', timeIdx: 0, label: '天然ポリフェノール配合ハーブ水', detail: '低コストで開発可能なオーガニック系ドリンクを先行発売。' },
          { id: 'p2', timeIdx: 1, label: '高浸透・速攻疲労回復アシスト飲料', detail: '発見した新成分の強みを生かした、特許技術ベースの主力商品。' },
          { id: 'p3', timeIdx: 2, label: 'オーダーメイド型サプリメントゼリー', detail: '大学や他社アライアンスとの提携（オープンイノベーション）で実現。' }
        ]
      },
      {
        id: 'technology',
        title: '技術 (Technology)',
        color: 'border-l-blue-500 text-blue-400 bg-blue-950/20',
        badge: '技術',
        items: [
          { id: 't1', timeIdx: 0, label: '新規果物からの有用ポリフェノール抽出技術', detail: '基礎研究で発見した抗酸化成分を安定して取り出す基礎プロセス。' },
          { id: 't2', timeIdx: 1, label: 'ナノ乳化カプセル配合技術（特許取得）', detail: '成分の吸収率を高め、熱変化に耐えうる応用配合技術。' },
          { id: 't3', timeIdx: 2, label: 'DNA・バイオ分析連動パーソナル自動調合システム', detail: '個人のデータを読み取ってリアルタイムで栄養素を決定する技術。' }
        ]
      }
    ]
  };

  // 連動ルール
  const relations: { [key: string]: string[] } = {
    'm1': ['p1', 't1'],
    'p1': ['m1', 't1'],
    't1': ['m1', 'p1'],
    'm2': ['p2', 't2'],
    'p2': ['m2', 't2'],
    't2': ['m2', 'p2'],
    'm3': ['p3', 't3'],
    'p3': ['m3', 't3'],
    't3': ['m3', 'p3']
  };

  const isHighlighted = (id: string) => {
    if (!selectedNode) return false;
    return selectedNode === id || (relations[selectedNode] && relations[selectedNode].includes(id));
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-extrabold tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-900/60 uppercase">
            Simulation Dashboard
          </span>
          <h3 className="text-xl md:text-2xl font-black mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            技術ロードマップ & イノベーション
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
            時間（短期・中期・長期）と、市場・製品・技術の連携マップ。カードをクリックして連動性を確かめてください。
          </p>
        </div>

        {/* オープンイノベーショントグル */}
        <button
          onClick={() => {
            setOpenInnovation(!openInnovation);
            setSelectedNode(null);
          }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs md:text-sm transition-all border shadow-md cursor-pointer ${
            openInnovation
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 border-indigo-500 text-white hover:from-purple-500 hover:to-indigo-500'
              : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
          }`}
        >
          {openInnovation ? <Share2 className="w-4 h-4 animate-pulse text-indigo-200" /> : <Users className="w-4 h-4" />}
          {openInnovation ? 'オープンイノベーション：ON' : 'オープンイノベーションを導入'}
        </button>
      </div>

      {/* イノベーションインフォメーション */}
      <AnimatePresence>
        {openInnovation && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 bg-purple-950/30 border border-purple-800/60 rounded-2xl flex items-start gap-3"
          >
            <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs md:text-sm font-bold text-purple-300">
                オープンイノベーション（外部連携）が発動中！
              </p>
              <p className="text-xs text-slate-300 mt-0.5 leading-relaxed font-semibold">
                大学からDNA分析技術を導入し、他社のバイオテックと共同開発。3年目の「オーダーメイド型サプリメントゼリー」の開発速度と技術信頼性が飛躍的に向上しました。
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ロードマップグリッド */}
      <div className="space-y-4 overflow-x-auto pb-4">
        {/* グリッドヘッダー */}
        <div className="grid grid-cols-12 gap-4 min-w-[650px] font-bold text-center border-b border-slate-800 pb-2 text-xs md:text-sm text-slate-400">
          <div className="col-span-3 text-left">レイヤー</div>
          {roadmapData.timeline.map((time, idx) => (
            <div key={idx} className="col-span-3 text-center flex items-center justify-center gap-1">
              <Map className="w-3.5 h-3.5" /> {time}
            </div>
          ))}
        </div>

        {/* 各レイヤー */}
        {roadmapData.layers.map((layer) => (
          <div 
            key={layer.id} 
            className="grid grid-cols-12 gap-4 min-w-[650px] items-stretch"
          >
            {/* レイヤー見出し */}
            <div className={`col-span-3 flex flex-col justify-center p-3 rounded-2xl border-l-4 font-bold text-xs md:text-sm ${layer.color}`}>
              <span>{layer.title}</span>
            </div>

            {/* 時系列カード */}
            {roadmapData.timeline.map((_, timeIdx) => {
              const item = layer.items.find(i => i.timeIdx === timeIdx);
              if (!item) return <div key={timeIdx} className="col-span-3" />;
              
              const isSelected = selectedNode === item.id;
              const isRelated = isHighlighted(item.id);
              const isOtherSelected = selectedNode !== null && !isSelected && !isRelated;

              const isThirdYearSpecial = timeIdx === 2 && openInnovation;

              return (
                <motion.div
                  key={timeIdx}
                  onClick={() => setSelectedNode(isSelected ? null : item.id)}
                  className={`col-span-3 p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-indigo-950/80 border-indigo-500 shadow-lg shadow-indigo-500/25 ring-2 ring-indigo-500/40 text-slate-50'
                      : isRelated
                        ? 'bg-slate-800 border-indigo-600/70 text-slate-50 shadow-md shadow-indigo-950/40'
                        : isOtherSelected
                          ? 'bg-slate-900/40 border-slate-800/50 text-slate-600'
                          : isThirdYearSpecial
                            ? 'bg-purple-950/20 border-purple-500/80 text-purple-200 shadow-md shadow-purple-950/45'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/80'
                  }`}
                  whileHover={{ scale: isOtherSelected ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-md ${
                        isSelected 
                          ? 'bg-indigo-600 text-white' 
                          : isThirdYearSpecial
                            ? 'bg-purple-600 text-white'
                            : 'bg-slate-800 text-slate-400'
                      }`}>
                        {layer.badge}
                      </span>
                      {isThirdYearSpecial && (
                        <span className="text-[9px] text-purple-400 font-extrabold flex items-center gap-0.5">
                          <TrendingUp className="w-2.5 h-2.5" /> 外部連携
                        </span>
                      )}
                    </div>
                    <h5 className="text-[11px] md:text-xs font-bold leading-tight">
                      {isThirdYearSpecial && item.id === 'p3' 
                        ? '【イノベーション】スピード共同開発ゼリー' 
                        : isThirdYearSpecial && item.id === 't3'
                          ? 'DNA分析自動調合（共同研究成果）'
                          : item.label
                      }
                    </h5>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      {/* パネル */}
      <div className="mt-6 p-4 bg-slate-950/80 border border-slate-800/90 rounded-2xl min-h-[90px] flex items-center justify-center text-center">
        {selectedNode ? (
          <div className="text-left w-full">
            {(() => {
              let foundItem: any = null;
              let foundLayer: any = null;
              roadmapData.layers.forEach(l => {
                const item = l.items.find(i => i.id === selectedNode);
                if (item) {
                  foundItem = item;
                  foundLayer = l;
                }
              });
              
              if (!foundItem) return null;
              const isOI = openInnovation && foundItem.timeIdx === 2;

              return (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-lg bg-slate-800 ${foundLayer.color.split(' ')[1]}`}>
                      {foundLayer.badge}
                    </span>
                    <h4 className="text-sm font-extrabold text-slate-100">
                      {isOI && foundItem.id === 'p3' 
                        ? '【イノベーション】スピード共同開発ゼリー' 
                        : isOI && foundItem.id === 't3'
                          ? 'DNA分析自動調合（共同研究成果）'
                          : foundItem.label
                      }
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-semibold">
                    {isOI && foundItem.id === 'p3'
                      ? '産学連携により開発を1年前倒し。DNA分析による遺伝的体質と、個々のリアルタイム運動負荷に合わせたカスタマイズ栄養ドリンクを実現。'
                      : isOI && foundItem.id === 't3'
                        ? '大学の特許技術（バイオセンサー）と他社スタートアップの高速データマイニング技術を自社R&Dに統合した、先端研究成果の適用。'
                        : foundItem.detail
                    }
                  </p>
                </div>
              );
            })()}
          </div>
        ) : (
          <p className="text-xs md:text-sm text-slate-400 font-bold">
            ロードマップ上のカードをクリックすると、詳細情報と「市場・製品・技術」の連携関係がハイライトされます。
          </p>
        )}
      </div>
    </div>
  );
};
