'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server, Monitor, Network, Share2, Router, Activity, 
  ArrowRightLeft, Cable
} from 'lucide-react';

export function NetworkDiagrams() {
  const [activeTab, setActiveTab] = useState<'clientServer' | 'p2p' | 'topology'>('clientServer');

  const tabs = [
    { id: 'clientServer', label: 'クライアント・サーバ', icon: Server },
    { id: 'p2p', label: 'ピアツーピア (P2P)', icon: Share2 },
    { id: 'topology', label: 'ネットワーク形態', icon: Network },
  ] as const;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-black text-slate-800">ネットワークの仕組み</h2>
        <p className="text-slate-600 font-medium">
          目に見えないコンピュータ同士の繋がり方を可視化します。
        </p>
      </div>

      <div className="flex p-1 bg-slate-100/50 rounded-2xl border border-slate-200 w-full max-w-2xl mx-auto backdrop-blur-sm">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 relative ${
                isActive ? 'text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="network-active-tab"
                  className="absolute inset-0 bg-white rounded-xl shadow-sm border border-slate-200/50"
                  initial={false}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon className="w-4 h-4 relative z-10" />
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="relative bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden min-h-[500px]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
        
        <div className="p-8">
          <AnimatePresence mode="wait">
            {activeTab === 'clientServer' && <ClientServerDiagram key="clientServer" />}
            {activeTab === 'p2p' && <P2PDiagram key="p2p" />}
            {activeTab === 'topology' && <TopologyDiagram key="topology" />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function ClientServerDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <div className="text-center">
        <h3 className="text-2xl font-black text-slate-800 mb-2">クライアント・サーバシステム</h3>
        <p className="text-slate-600 text-sm">
          サービスを提供する「サーバ」と、要求する「クライアント」に役割が分かれたシステム。
        </p>
      </div>

      <div className="relative flex flex-col items-center py-8">
        {/* Server */}
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="glass-card-light w-48 py-6 px-6 rounded-2xl flex flex-col items-center gap-3 border-blue-200 bg-blue-50/50 shadow-lg relative z-20"
        >
          <Server className="w-12 h-12 text-blue-600" />
          <span className="font-black text-blue-900 text-lg">サーバ</span>
          <span className="text-xs font-bold text-blue-600/70 bg-blue-100 px-2 py-1 rounded-full">サービス提供者</span>
        </motion.div>

        {/* Lines and Data Packets */}
        <div className="absolute top-32 w-full h-40 flex justify-center items-center z-10">
            {[-1, 0, 1].map((pos, i) => (
                <div key={i} className="absolute h-full" style={{ left: `calc(50% + ${pos * 180}px)` }}>
                    <svg className="absolute w-full h-full overflow-visible" style={{ left: pos === -1 ? 60 : pos === 1 ? -60 : 0 }}>
                        <path
                            d={pos === 0 ? "M0,0 L0,120" : pos === -1 ? "M60,0 L0,120" : "M-60,0 L0,120"}
                            stroke="#cbd5e1"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            fill="none"
                        />
                    </svg>
                    <motion.div
                        className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                        initial={{ top: "0%", left: pos === 0 ? 0 : pos === -1 ? 60 : -60, opacity: 0 }}
                        animate={{ 
                            top: ["100%", "0%"], 
                            left: pos === 0 ? 0 : pos === -1 ? [0, 60] : [0, -60],
                            opacity: [0, 1, 0] 
                        }}
                        transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: i * 0.6,
                            ease: "linear"
                        }}
                    />
                     <motion.div
                        className="absolute w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"
                        initial={{ top: "100%", left: 0, opacity: 0 }}
                        animate={{ 
                            top: ["0%", "100%"], 
                            left: pos === 0 ? 0 : pos === -1 ? [60, 0] : [-60, 0],
                            opacity: [0, 1, 0] 
                        }}
                        transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: i * 0.6 + 1,
                            ease: "linear"
                        }}
                    />
                </div>
            ))}
        </div>

        {/* Clients */}
        <div className="flex justify-center gap-12 mt-20 relative z-20">
          {[1, 2, 3].map((num) => (
            <div key={num} className="glass-card-light w-32 py-4 px-4 rounded-2xl flex flex-col items-center gap-2 border-slate-200 bg-white shadow-md">
              <Monitor className="w-8 h-8 text-slate-700" />
              <span className="font-bold text-slate-800 text-sm">PC {num}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function P2PDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <div className="text-center">
        <h3 className="text-2xl font-black text-slate-800 mb-2">ピアツーピア (P2P)</h3>
        <p className="text-slate-600 text-sm">
          専用のサーバを持たず、端末（ピア）同士が対等な関係で直接通信するシステム。
        </p>
      </div>

      <div className="relative h-80 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full z-0">
          <motion.path d="M 300 80 L 450 180" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
          <motion.path d="M 450 180 L 300 280" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
          <motion.path d="M 300 280 L 150 180" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
          <motion.path d="M 150 180 L 300 80" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
          <motion.path d="M 150 180 L 450 180" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
        </svg>

        {/* Animated Data */}
        <svg className="absolute inset-0 w-full h-full z-10 overflow-visible">
          <motion.circle r="4" fill="#10b981" filter="drop-shadow(0 0 4px #10b981)">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 300 80 L 450 180" />
          </motion.circle>
          <motion.circle r="4" fill="#8b5cf6" filter="drop-shadow(0 0 4px #8b5cf6)">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 150 180 L 450 180" />
          </motion.circle>
          <motion.circle r="4" fill="#3b82f6" filter="drop-shadow(0 0 4px #3b82f6)">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 300 280 L 150 180" />
          </motion.circle>
        </svg>

        {/* Nodes */}
        <Node x="300px" y="80px" delay={0} />
        <Node x="450px" y="180px" delay={0.2} />
        <Node x="300px" y="280px" delay={0.4} />
        <Node x="150px" y="180px" delay={0.6} />
      </div>
    </motion.div>
  );
}

function Node({ x, y, delay }: { x: string, y: string, delay: number }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", delay }}
      className="absolute glass-card-light w-24 h-24 rounded-full flex flex-col items-center justify-center gap-1 border-purple-200 bg-purple-50/80 shadow-lg z-20"
      style={{ left: `calc(50% - 3rem + (${x} - 300px))`, top: `calc(50% - 3rem + (${y} - 180px))` }}
    >
      <Monitor className="w-8 h-8 text-purple-600" />
      <span className="text-xs font-bold text-purple-900">ピア</span>
    </motion.div>
  );
}

function TopologyDiagram() {
  const [topology, setTopology] = useState<'star' | 'bus' | 'ring'>('star');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h3 className="text-2xl font-black text-slate-800 mb-2">ネットワークの接続形態</h3>
        <p className="text-slate-600 text-sm">
          ハブやケーブルの配線方法（トポロジ）による分類です。
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        {(['star', 'bus', 'ring'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTopology(t)}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
              topology === t ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t === 'star' ? 'スター型' : t === 'bus' ? 'バス型' : 'リング型'}
          </button>
        ))}
      </div>

      <div className="relative h-64 flex items-center justify-center bg-slate-50/50 rounded-2xl border border-slate-100">
        <AnimatePresence mode="wait">
          {topology === 'star' && (
            <motion.div key="star" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative w-full h-full">
              {/* Star Lines */}
              <svg className="absolute inset-0 w-full h-full">
                <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#94a3b8" strokeWidth="3" />
                <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#94a3b8" strokeWidth="3" />
                <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#94a3b8" strokeWidth="3" />
              </svg>
              {/* Center Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-card-light p-4 rounded-xl border-indigo-200 bg-white z-10 shadow-lg">
                <Router className="w-8 h-8 text-indigo-600" />
                <div className="text-[10px] font-bold text-center mt-1 text-indigo-900">集線装置<br/>(ハブ)</div>
              </div>
              {/* Nodes */}
              <div className="absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg border border-slate-200 shadow-sm"><Monitor className="w-6 h-6 text-slate-600"/></div>
              <div className="absolute top-[75%] left-[25%] -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg border border-slate-200 shadow-sm"><Monitor className="w-6 h-6 text-slate-600"/></div>
              <div className="absolute top-[75%] left-[75%] -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg border border-slate-200 shadow-sm"><Monitor className="w-6 h-6 text-slate-600"/></div>
            </motion.div>
          )}

          {topology === 'bus' && (
            <motion.div key="bus" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative w-full h-full">
              {/* Bus Line */}
              <div className="absolute top-1/2 left-[10%] right-[10%] h-2 bg-slate-300 rounded-full -translate-y-1/2" />
              {/* Node Lines */}
              <svg className="absolute inset-0 w-full h-full">
                <line x1="25%" y1="50%" x2="25%" y2="25%" stroke="#94a3b8" strokeWidth="3" />
                <line x1="50%" y1="50%" x2="50%" y2="75%" stroke="#94a3b8" strokeWidth="3" />
                <line x1="75%" y1="50%" x2="75%" y2="25%" stroke="#94a3b8" strokeWidth="3" />
              </svg>
              {/* Nodes */}
              <div className="absolute top-[25%] left-[25%] -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg border border-slate-200 shadow-sm"><Monitor className="w-6 h-6 text-slate-600"/></div>
              <div className="absolute top-[75%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg border border-slate-200 shadow-sm"><Monitor className="w-6 h-6 text-slate-600"/></div>
              <div className="absolute top-[25%] left-[75%] -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg border border-slate-200 shadow-sm"><Monitor className="w-6 h-6 text-slate-600"/></div>
              <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 text-xs font-black text-slate-400 bg-slate-50 px-2">基幹ケーブル（バス）</div>
            </motion.div>
          )}

          {topology === 'ring' && (
            <motion.div key="ring" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative w-full h-full">
              {/* Ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-[3px] border-slate-300" />
              {/* Token Animation */}
              <svg className="absolute inset-0 w-full h-full z-10 overflow-visible">
                <motion.circle r="6" fill="#f43f5e" filter="drop-shadow(0 0 4px #f43f5e)">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M 50% 50% m -96,0 a 96,96 0 1,1 192,0 a 96,96 0 1,1 -192,0" />
                </motion.circle>
              </svg>
              {/* Nodes */}
              <div className="absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg border border-slate-200 shadow-sm z-20"><Monitor className="w-6 h-6 text-slate-600"/></div>
              <div className="absolute top-[85%] left-[25%] -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg border border-slate-200 shadow-sm z-20"><Monitor className="w-6 h-6 text-slate-600"/></div>
              <div className="absolute top-[85%] left-[75%] -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg border border-slate-200 shadow-sm z-20"><Monitor className="w-6 h-6 text-slate-600"/></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
