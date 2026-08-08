'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database, TableProperties, Link as LinkIcon, SplitSquareHorizontal, DatabaseZap, ListTree
} from 'lucide-react';

export function DatabaseDiagrams() {
  const [activeTab, setActiveTab] = useState<'relational' | 'normalization'>('relational');

  const tabs = [
    { id: 'relational', label: 'リレーショナルDB', icon: Database },
    { id: 'normalization', label: '正規化プロセス', icon: SplitSquareHorizontal },
  ] as const;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-black text-slate-800">データベースの基礎</h2>
        <p className="text-slate-600 font-medium">
          表計算ソフトとの違いや、データを効率よく管理する仕組みを直感的に学びます。
        </p>
      </div>

      <div className="flex p-1 bg-slate-100/50 rounded-2xl border border-slate-200 w-full max-w-xl mx-auto backdrop-blur-sm">
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
                  layoutId="db-active-tab"
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
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
        
        <div className="p-8">
          <AnimatePresence mode="wait">
            {activeTab === 'relational' && <RelationalDiagram key="relational" />}
            {activeTab === 'normalization' && <NormalizationDiagram key="normalization" />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function RelationalDiagram() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <div className="text-center">
        <h3 className="text-2xl font-black text-slate-800 mb-2">主キーと外部キーによる連携</h3>
        <p className="text-slate-600 text-sm">
          複数の表を「キー」を使って結びつけるのがリレーショナルデータベース(RDB)の強みです。
        </p>
      </div>

      <div className="flex justify-center mb-4">
        <button
          onClick={() => setIsConnected(!isConnected)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md ${
            isConnected ? 'bg-rose-500 text-white' : 'bg-emerald-500 text-white hover:bg-emerald-600'
          }`}
        >
          <LinkIcon className="w-4 h-4" />
          {isConnected ? '連携を解除' : 'テーブルを連携する'}
        </button>
      </div>

      <div className="relative flex flex-col md:flex-row justify-center items-start gap-8 md:gap-24 pt-4">
        
        {/* Connection Line */}
        {isConnected && (
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            className="hidden md:block absolute top-[110px] left-1/2 -translate-x-1/2 w-48 h-0.5 bg-emerald-500 z-0 origin-left"
          >
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-transparent via-white to-transparent"
            />
          </motion.div>
        )}

        {/* 注文テーブル */}
        <div className="glass-card-light w-full md:w-64 rounded-xl overflow-hidden border border-slate-200 shadow-lg relative z-10 bg-white">
          <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center gap-2">
            <TableProperties className="w-4 h-4 text-slate-600" />
            <span className="font-bold text-slate-800">注文テーブル</span>
          </div>
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-4 py-2 font-semibold">注文ID<br/>(主キー)</th>
                <th className={`px-4 py-2 font-semibold transition-colors ${isConnected ? 'bg-emerald-50 text-emerald-700' : ''}`}>顧客ID<br/>(外部キー)</th>
                <th className="px-4 py-2 font-semibold">商品</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-2">O-001</td>
                <td className={`px-4 py-2 font-mono ${isConnected ? 'text-emerald-600 font-bold' : ''}`}>C-101</td>
                <td className="px-4 py-2">PC</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-2">O-002</td>
                <td className="px-4 py-2 font-mono">C-102</td>
                <td className="px-4 py-2">マウス</td>
              </tr>
              <tr>
                <td className="px-4 py-2">O-003</td>
                <td className={`px-4 py-2 font-mono ${isConnected ? 'text-emerald-600 font-bold' : ''}`}>C-101</td>
                <td className="px-4 py-2">キーボード</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 顧客テーブル */}
        <div className="glass-card-light w-full md:w-56 rounded-xl overflow-hidden border border-slate-200 shadow-lg relative z-10 bg-white">
          <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center gap-2">
            <TableProperties className="w-4 h-4 text-slate-600" />
            <span className="font-bold text-slate-800">顧客テーブル</span>
          </div>
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className={`px-4 py-2 font-semibold transition-colors ${isConnected ? 'bg-emerald-50 text-emerald-700' : ''}`}>顧客ID<br/>(主キー)</th>
                <th className="px-4 py-2 font-semibold">氏名</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`border-b border-slate-100 transition-colors ${isConnected ? 'bg-emerald-50/30' : ''}`}>
                <td className={`px-4 py-2 font-mono ${isConnected ? 'text-emerald-600 font-bold' : ''}`}>C-101</td>
                <td className="px-4 py-2 font-bold">山田 太郎</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono">C-102</td>
                <td className="px-4 py-2">鈴木 花子</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </motion.div>
  );
}

function NormalizationDiagram() {
  const [step, setStep] = useState(0);

  const steps = [
    { title: "非正規形", desc: "1つのセルに複数の値が入っていたり、重複がある状態。" },
    { title: "第1正規形", desc: "1つのセルに1つの値（スカラ値）だけが入るように分割。" },
    { title: "第2正規形", desc: "主キーの一部にのみ依存する項目を別の表に分割。" },
    { title: "第3正規形", desc: "主キー以外の項目に依存する項目を別の表に分割。" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h3 className="text-2xl font-black text-slate-800 mb-2">正規化 (Normalization)</h3>
        <p className="text-slate-600 text-sm">
          データの重複や矛盾を防ぐため、表を適切な単位に分割していくプロセスです。
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-6">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`px-4 py-2 rounded-lg font-bold text-xs transition-all ${
              step === i ? 'bg-cyan-600 text-white shadow-md' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
            }`}
          >
            {i === 0 ? '非正規' : `第${i}正規`}
          </button>
        ))}
      </div>

      <div className="text-center mb-6 h-12">
        <h4 className="font-bold text-cyan-800">{steps[step].title}</h4>
        <p className="text-xs text-slate-500">{steps[step].desc}</p>
      </div>

      <div className="relative min-h-[250px] flex justify-center items-center">
        <AnimatePresence mode="wait">
          
          {step === 0 && (
            <motion.div key="step0" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
              <div className="glass-card-light bg-white p-1 rounded-lg border border-slate-200 shadow-md">
                <table className="text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100"><th className="border p-2">注文番号</th><th className="border p-2">顧客名</th><th className="border p-2">商品 (複数)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="border p-2">1</td><td className="border p-2">山田</td><td className="border p-2 text-rose-500 font-bold">りんご, みかん</td></tr>
                    <tr><td className="border p-2">2</td><td className="border p-2">鈴木</td><td className="border p-2">バナナ</td></tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
               <div className="glass-card-light bg-white p-1 rounded-lg border border-cyan-300 shadow-lg shadow-cyan-100">
                <table className="text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-cyan-50"><th className="border p-2">注文番号</th><th className="border p-2">顧客名</th><th className="border p-2 text-cyan-700">商品</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="border p-2">1</td><td className="border p-2">山田</td><td className="border p-2 bg-cyan-100/50 font-bold">りんご</td></tr>
                    <tr><td className="border p-2">1</td><td className="border p-2">山田</td><td className="border p-2 bg-cyan-100/50 font-bold">みかん</td></tr>
                    <tr><td className="border p-2">2</td><td className="border p-2">鈴木</td><td className="border p-2">バナナ</td></tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {step >= 2 && (
            <motion.div key="step2" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="flex gap-8">
               <div className="glass-card-light bg-white p-1 rounded-lg border border-teal-300 shadow-md">
                <div className="text-[10px] font-bold text-center text-teal-600 mb-1">注文表</div>
                <table className="text-xs text-left border-collapse">
                  <thead><tr className="bg-teal-50"><th className="border p-2">注文番号</th><th className="border p-2">顧客名</th></tr></thead>
                  <tbody>
                    <tr><td className="border p-2">1</td><td className="border p-2">山田</td></tr>
                    <tr><td className="border p-2">2</td><td className="border p-2">鈴木</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="glass-card-light bg-white p-1 rounded-lg border border-teal-300 shadow-md">
                <div className="text-[10px] font-bold text-center text-teal-600 mb-1">注文明細表</div>
                <table className="text-xs text-left border-collapse">
                  <thead><tr className="bg-teal-50"><th className="border p-2">注文番号</th><th className="border p-2">商品</th></tr></thead>
                  <tbody>
                    <tr><td className="border p-2">1</td><td className="border p-2">りんご</td></tr>
                    <tr><td className="border p-2">1</td><td className="border p-2">みかん</td></tr>
                    <tr><td className="border p-2">2</td><td className="border p-2">バナナ</td></tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </motion.div>
  );
}
