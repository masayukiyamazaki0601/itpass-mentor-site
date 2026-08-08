import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Truck, Coins, RefreshCcw, HandCoins, Building2, TrendingUp, Users } from 'lucide-react';

export const CorporateActivitiesDiagrams = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'make',
      title: '商品やサービスを作る',
      desc: '価値を生み出す源泉です',
      icon: Coffee,
      color: 'from-pink-500 to-rose-500',
      shadow: 'shadow-pink-500/20'
    },
    {
      id: 'deliver',
      title: 'お客さんに届ける',
      desc: '販売やサービス提供の活動です',
      icon: Truck,
      color: 'from-blue-500 to-cyan-500',
      shadow: 'shadow-blue-500/20'
    },
    {
      id: 'earn',
      title: 'お金をもらう',
      desc: '対価として利益を得ます',
      icon: HandCoins,
      color: 'from-emerald-500 to-teal-500',
      shadow: 'shadow-emerald-500/20'
    },
    {
      id: 'prepare',
      title: '次の準備をする',
      desc: '仕入れや新商品の開発など',
      icon: RefreshCcw,
      color: 'from-amber-500 to-orange-500',
      shadow: 'shadow-amber-500/20'
    }
  ];

  // Auto cycle through steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="w-full bg-slate-900/5 rounded-3xl p-6 sm:p-10 border border-slate-200/50 shadow-inner relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-2 mb-2">
            <RefreshCcw className="w-6 h-6 text-indigo-600" />
            企業活動のサイクル
          </h3>
          <p className="text-sm font-semibold text-slate-500">
            社会貢献と利益追求の循環
          </p>
        </div>

        {/* Circular Layout Container */}
        <div className="relative w-full max-w-lg aspect-square sm:aspect-[4/3] flex items-center justify-center mb-8">
          
          {/* Central Enterprise Node */}
          <motion.div 
            className="absolute z-20 flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-full shadow-2xl border-4 border-indigo-100"
            animate={{ 
              boxShadow: ['0px 10px 25px -5px rgba(99, 102, 241, 0.2)', '0px 15px 35px -5px rgba(99, 102, 241, 0.4)', '0px 10px 25px -5px rgba(99, 102, 241, 0.2)']
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 mb-1" />
            <span className="text-xs sm:text-sm font-black text-slate-800">企業</span>
          </motion.div>

          {/* Connective Paths */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="50%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 50 15 A 35 35 0 1 1 49.9 15"
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="opacity-30"
            />
            <motion.path
              d="M 50 15 A 35 35 0 1 1 49.9 15"
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            />
          </svg>

          {/* Cycle Nodes */}
          {steps.map((step, index) => {
            // Positions on a circle (top, right, bottom, left)
            const angles = [270, 0, 90, 180];
            const angle = (angles[index] * Math.PI) / 180;
            const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 110 : 140; // responsive radius
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isActive = activeStep === index;

            return (
              <motion.div
                key={step.id}
                className="absolute flex flex-col items-center cursor-pointer"
                style={{ x, y }}
                onClick={() => setActiveStep(index)}
                animate={{
                  scale: isActive ? 1.15 : 1,
                  opacity: isActive ? 1 : 0.6,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg ${step.shadow} text-white mb-3 transition-all relative`}>
                  <step.icon className="w-6 h-6 sm:w-8 sm:h-8" />
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
                  {step.title}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Details Panel */}
        <div className="w-full max-w-md mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className={`p-5 rounded-2xl bg-gradient-to-br ${steps[activeStep].color} text-white shadow-xl ${steps[activeStep].shadow}`}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                  {React.createElement(steps[activeStep].icon, { className: "w-6 h-6 text-white" })}
                </div>
                <h4 className="text-lg font-black">{steps[activeStep].title}</h4>
              </div>
              <p className="text-white/90 font-medium text-sm leading-relaxed pl-2">
                {steps[activeStep].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
