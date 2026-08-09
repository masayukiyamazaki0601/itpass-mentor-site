import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Scale, ShieldCheck, Eye, Leaf, Building2, HeartHandshake, Lightbulb, Coffee } from 'lucide-react';

export const ResponsibilityTermsDiagram = () => {
  const [activeTerm, setActiveTerm] = useState(0);

  const terms = [
    {
      id: 'csr',
      title: 'CSR',
      name: '企業の社会的責任',
      point: '利益追求だけでなく、環境保護や地域貢献など、社会を良くするために自発的に行う活動',
      example: '環境にやさしいカップを導入、地域の清掃活動に参加',
      tip: '「自発的な社会貢献」',
      icon: Globe,
      color: 'from-sky-500 to-cyan-500',
      shadow: 'shadow-sky-500/20'
    },
    {
      id: 'compliance',
      title: 'コンプライアンス',
      name: '法令遵守',
      point: '法律を守るのはもちろん、社会のルールや企業倫理（モラル）も守って活動すること',
      example: '食品衛生法を守る、お客様のデータを悪用しない',
      tip: '「法律＋倫理を守る」',
      icon: Scale,
      color: 'from-emerald-500 to-teal-500',
      shadow: 'shadow-emerald-500/20'
    },
    {
      id: 'governance',
      title: 'コーポレートガバナンス',
      name: '企業統治',
      point: '経営者が不正をしたり会社を私物化したりしないよう、企業を監視・管理する仕組み',
      example: '経営者が店のお金を使い込まないよう監視役を置く',
      tip: '「経営の監視体制」',
      icon: ShieldCheck,
      color: 'from-amber-500 to-orange-500',
      shadow: 'shadow-amber-500/20'
    },
    {
      id: 'disclosure',
      title: 'ディスクロージャー',
      name: '情報開示',
      point: '経営状況や財務状況を、株主・投資家・社会に対して隠さずに正しく公開すること',
      example: '儲けや借金の状況をオーナーに正しく報告',
      tip: '「情報の公開」',
      icon: Eye,
      color: 'from-blue-500 to-indigo-500',
      shadow: 'shadow-blue-500/20'
    },
    {
      id: 'sustainability',
      title: 'サステナビリティ',
      name: '持続可能性',
      point: '環境・社会・経済のバランスを保ちながら、事業をずっと続けられるようにする考え方',
      example: 'コーヒー豆の農家の環境を守りながら、長く買い続ける',
      tip: '「ずっと続けられること」（SDGsと関連）',
      icon: Leaf,
      color: 'from-teal-500 to-green-500',
      shadow: 'shadow-teal-500/20'
    }
  ];

  // Auto cycle through terms
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTerm((prev) => (prev + 1) % terms.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [terms.length]);

  return (
    <div className="w-full bg-slate-900/5 rounded-3xl p-6 sm:p-10 border border-slate-200/50 shadow-inner relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-2 mb-2">
            <HeartHandshake className="w-6 h-6 text-sky-600" />
            企業の責任のキーワード
          </h3>
          <p className="text-sm font-semibold text-slate-500">
            企業は多くの相手に対して責任を持っています
          </p>
        </div>

        {/* Circular Layout Container */}
        <div className="relative w-full max-w-lg aspect-square sm:aspect-[4/3] flex items-center justify-center mb-8">

          {/* Central Responsibility Node */}
          <motion.div
            className="absolute z-20 flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-full shadow-2xl border-4 border-sky-100"
            animate={{
              boxShadow: ['0px 10px 25px -5px rgba(99, 102, 241, 0.2)', '0px 15px 35px -5px rgba(99, 102, 241, 0.4)', '0px 10px 25px -5px rgba(99, 102, 241, 0.2)']
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-sky-600 mb-1" />
            <span className="text-xs sm:text-sm font-black text-slate-800">企業の責任</span>
          </motion.div>

          {/* Connective Paths */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="resp-path-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="50%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 50 15 A 35 35 0 1 1 49.9 15"
              fill="none"
              stroke="url(#resp-path-gradient)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="opacity-30"
            />
            <motion.path
              d="M 50 15 A 35 35 0 1 1 49.9 15"
              fill="none"
              stroke="url(#resp-path-gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            />
          </svg>

          {/* Term Nodes */}
          {terms.map((term, index) => {
            // Positions on a circle (5 nodes, starting from top)
            const angle = (index / terms.length) * 2 * Math.PI - Math.PI / 2;
            const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 115 : 150; // responsive radius
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isActive = activeTerm === index;

            return (
              <motion.div
                key={term.id}
                className="absolute flex flex-col items-center cursor-pointer"
                style={{ x, y }}
                onClick={() => setActiveTerm(index)}
                animate={{
                  scale: isActive ? 1.15 : 1,
                  opacity: isActive ? 1 : 0.6,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${term.color} shadow-lg ${term.shadow} text-white mb-3 transition-all relative`}>
                  <term.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 border-4 border-white/50 rounded-2xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: [0, 1, 0], scale: 1.2 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Node Label (always visible but highlighted when active) */}
                <div className={`px-3 py-1.5 rounded-xl border font-bold text-[10px] sm:text-xs whitespace-nowrap transition-all ${isActive ? 'bg-white border-slate-200 text-slate-800 shadow-sm' : 'bg-white/50 border-transparent text-slate-500'}`}>
                  {term.title}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Details Panel */}
        <div className="w-full max-w-md mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTerm}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className={`p-5 rounded-2xl bg-gradient-to-br ${terms[activeTerm].color} text-white shadow-xl ${terms[activeTerm].shadow}`}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                  {React.createElement(terms[activeTerm].icon, { className: "w-6 h-6 text-white" })}
                </div>
                <div>
                  <h4 className="text-lg font-black leading-tight">{terms[activeTerm].title}</h4>
                  <p className="text-xs text-white/80 font-bold">{terms[activeTerm].name}</p>
                </div>
              </div>
              <p className="text-white/90 font-medium text-sm leading-relaxed pl-2">
                {terms[activeTerm].point}
              </p>
              <div className="mt-3 bg-white/15 backdrop-blur-sm rounded-xl px-3 py-2">
                <div className="flex items-center gap-1.5 text-[11px] text-white/80 font-bold mb-0.5">
                  <Coffee className="w-3.5 h-3.5" />
                  カフェでの例
                </div>
                <p className="text-xs text-white font-medium leading-relaxed">
                  {terms[activeTerm].example}
                </p>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-white/90">
                <span className="inline-flex items-center gap-1.5 font-bold bg-white/20 px-2.5 py-1 rounded-lg flex-shrink-0">
                  <Lightbulb className="w-3.5 h-3.5" />
                  覚え方
                </span>
                <span>{terms[activeTerm].tip}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
