'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase, Factory, UserCog, Building2, Smartphone, Monitor,
  Users, Workflow, ArrowRight, MousePointerClick
} from 'lucide-react';

export function OrganizationDiagrams() {
  const [activeTab, setActiveTab] = useState<'functional' | 'divisional' | 'matrix'>('functional');

  const tabs = [
    { id: 'functional', label: '機能別組織', icon: Workflow },
    { id: 'divisional', label: '事業部制組織', icon: Building2 },
    { id: 'matrix', label: 'マトリックス組織', icon: Users },
  ] as const;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* イントロダクション */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-black text-slate-800">3つの基本組織</h2>
        <p className="text-slate-600 font-medium">
          企業が効率よく目標を達成するためには、規模や事業内容に合わせて<br />「最適なチーム分け」をする必要があります。
        </p>
      </div>

      {/* タブ切り替え */}
      <div className="flex p-1 bg-slate-100/50 rounded-2xl border border-slate-200 w-full max-w-2xl mx-auto backdrop-blur-sm">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 relative ${
                isActive ? 'text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab"
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

      {/* コンテンツエリア */}
      <div className="relative bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden min-h-[500px]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
        
        <div className="p-8">
          <AnimatePresence mode="wait">
            {activeTab === 'functional' && <FunctionalDiagram key="functional" />}
            {activeTab === 'divisional' && <DivisionalDiagram key="divisional" />}
            {activeTab === 'matrix' && <MatrixDiagram key="matrix" />}
          </AnimatePresence>
        </div>
      </div>

      {/* 比較表 */}
      <ComparisonTable />
    </div>
  );
}

// ─── 1. 機能別組織 (Functional) ───
function FunctionalDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h3 className="text-2xl font-black text-slate-800 mb-2">機能別組織</h3>
        <p className="text-slate-600 text-sm">
          営業・製造・総務など、業務の専門分野ごとに分ける組織。専門性が高まりやすい。
        </p>
      </div>

      {/* 図解 */}
      <div className="relative flex flex-col items-center pt-4">
        {/* 社長 */}
        <div className="glass-card-light w-40 py-4 px-6 rounded-2xl flex flex-col items-center gap-2 border-indigo-200 bg-indigo-50/50 shadow-lg relative z-10">
          <UserCog className="w-8 h-8 text-indigo-600" />
          <span className="font-black text-indigo-900">社長 (CEO)</span>
        </div>

        {/* 縦線 */}
        <div className="w-0.5 h-10 bg-slate-300" />
        
        {/* 横線 */}
        <div className="w-3/4 h-0.5 bg-slate-300 relative">
          <div className="absolute top-0 left-0 w-0.5 h-6 bg-slate-300" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-slate-300" />
          <div className="absolute top-0 right-0 w-0.5 h-6 bg-slate-300" />
        </div>

        {/* 部門 */}
        <div className="flex justify-between w-4/5 mt-6 gap-4">
          <DepartmentCard icon={Briefcase} title="営業部" color="blue" />
          <DepartmentCard icon={Factory} title="製造部" color="amber" />
          <DepartmentCard icon={Users} title="総務部" color="emerald" />
        </div>
      </div>

      <ExampleBox 
        title="カフェの例" 
        text="「キッチン担当」「ホール担当」「経理担当」のように分業するイメージ。"
      />
    </motion.div>
  );
}

// ─── 2. 事業部制組織 (Divisional) ───
function DivisionalDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h3 className="text-2xl font-black text-slate-800 mb-2">事業部制組織</h3>
        <p className="text-slate-600 text-sm">
          製品や地域ごとに分け、各事業部が損益に責任を持つ組織。スピーディーに意思決定できる。
        </p>
      </div>

      {/* 図解 */}
      <div className="relative flex flex-col items-center pt-4">
        {/* 社長 */}
        <div className="glass-card-light w-40 py-4 px-6 rounded-2xl flex flex-col items-center gap-2 border-slate-200 bg-white shadow-lg relative z-10">
          <UserCog className="w-8 h-8 text-slate-700" />
          <span className="font-black text-slate-800">社長 (CEO)</span>
        </div>

        <div className="w-0.5 h-8 bg-slate-300" />
        <div className="w-2/3 h-0.5 bg-slate-300 relative">
          <div className="absolute top-0 left-0 w-0.5 h-6 bg-slate-300" />
          <div className="absolute top-0 right-0 w-0.5 h-6 bg-slate-300" />
        </div>

        {/* 事業部 */}
        <div className="flex justify-between w-3/4 mt-6 gap-8">
          {/* 事業部A */}
          <div className="flex-1 glass-card-light rounded-2xl p-4 border-indigo-200 bg-indigo-50/30 flex flex-col items-center relative">
            <div className="absolute -top-3 bg-indigo-100 text-indigo-700 text-xs font-black px-3 py-1 rounded-full border border-indigo-200">
              製品A 事業部
            </div>
            <Monitor className="w-8 h-8 text-indigo-500 mt-4 mb-2" />
            
            <div className="flex w-full justify-around mt-4 pt-4 border-t border-indigo-100">
              <div className="text-[10px] font-bold text-slate-600 flex flex-col items-center gap-1">
                <Briefcase className="w-4 h-4 text-indigo-400" /> 営業
              </div>
              <div className="text-[10px] font-bold text-slate-600 flex flex-col items-center gap-1">
                <Factory className="w-4 h-4 text-indigo-400" /> 製造
              </div>
            </div>
          </div>

          {/* 事業部B */}
          <div className="flex-1 glass-card-light rounded-2xl p-4 border-rose-200 bg-rose-50/30 flex flex-col items-center relative">
            <div className="absolute -top-3 bg-rose-100 text-rose-700 text-xs font-black px-3 py-1 rounded-full border border-rose-200">
              製品B 事業部
            </div>
            <Smartphone className="w-8 h-8 text-rose-500 mt-4 mb-2" />
            
            <div className="flex w-full justify-around mt-4 pt-4 border-t border-rose-100">
              <div className="text-[10px] font-bold text-slate-600 flex flex-col items-center gap-1">
                <Briefcase className="w-4 h-4 text-rose-400" /> 営業
              </div>
              <div className="text-[10px] font-bold text-slate-600 flex flex-col items-center gap-1">
                <Factory className="w-4 h-4 text-rose-400" /> 製造
              </div>
            </div>
          </div>
        </div>
      </div>

      <ExampleBox 
        title="カフェの例" 
        text="「喫茶事業部」と「通販事業部」に分かれ、それぞれで売上とコストを管理する。"
      />
    </motion.div>
  );
}

// ─── 3. マトリックス組織 (Matrix) ───
function MatrixDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h3 className="text-2xl font-black text-slate-800 mb-2">マトリックス組織</h3>
        <p className="text-slate-600 text-sm">
          機能別組織と事業部制（プロジェクト）を掛け合わせた組織。<br/>上司が複数になるため複雑だが、柔軟な人材活用が可能。
        </p>
      </div>

      {/* 図解 */}
      <div className="relative pt-6 max-w-lg mx-auto">
        {/* グリッドレイアウト */}
        <div className="grid grid-cols-4 gap-2">
          {/* Header Row */}
          <div className="col-span-1"></div>
          <div className="col-span-1 bg-indigo-50 text-indigo-700 font-black text-xs py-2 text-center rounded-lg border border-indigo-100">営業部</div>
          <div className="col-span-1 bg-indigo-50 text-indigo-700 font-black text-xs py-2 text-center rounded-lg border border-indigo-100">製造部</div>
          <div className="col-span-1 bg-indigo-50 text-indigo-700 font-black text-xs py-2 text-center rounded-lg border border-indigo-100">総務部</div>

          {/* Project A */}
          <div className="col-span-1 bg-rose-50 text-rose-700 font-black text-xs flex items-center justify-center rounded-lg border border-rose-100">
            Pj A
          </div>
          <MatrixCell highlight />
          <MatrixCell />
          <MatrixCell />

          {/* Project B */}
          <div className="col-span-1 bg-rose-50 text-rose-700 font-black text-xs flex items-center justify-center rounded-lg border border-rose-100 py-4">
            Pj B
          </div>
          <MatrixCell />
          <MatrixCell highlight />
          <MatrixCell />
        </div>

        {/* 指示系統のアニメーション */}
        <motion.div 
          className="absolute left-[37.5%] top-16 w-0.5 h-16 bg-indigo-400"
          animate={{ opacity: [0, 1, 0], scaleY: [0, 1, 1], transformOrigin: 'top' }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute left-1/4 top-[4.5rem] w-16 h-0.5 bg-rose-400"
          animate={{ opacity: [0, 1, 0], scaleX: [0, 1, 1], transformOrigin: 'left' }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        <div className="absolute left-[32%] top-[6rem] bg-white text-[10px] font-black text-slate-800 px-2 py-1 rounded shadow-lg border border-slate-200 flex items-center gap-1 z-20">
          <MousePointerClick className="w-3 h-3 text-amber-500" /> 上司が2人！
        </div>

      </div>

      <ExampleBox 
        title="カフェの例" 
        text="通販事業部（プロジェクト軸）に所属しながら、マーケティング部（機能軸）にも所属する状態。"
      />
    </motion.div>
  );
}

function MatrixCell({ highlight = false }: { highlight?: boolean }) {
  return (
    <div className={`col-span-1 aspect-square rounded-lg flex items-center justify-center border-2 transition-colors ${
      highlight ? 'bg-amber-50 border-amber-400 shadow-inner' : 'bg-slate-50 border-slate-200'
    }`}>
      <UserCog className={`w-5 h-5 ${highlight ? 'text-amber-500' : 'text-slate-300'}`} />
    </div>
  );
}

// ─── Utils ───
function DepartmentCard({ icon: Icon, title, color }: { icon: any, title: string, color: 'blue' | 'amber' | 'emerald' }) {
  const colorMap = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    amber: 'bg-amber-50 text-amber-600 border-amber-200',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  };

  return (
    <div className={`flex-1 glass-card-light py-4 px-2 rounded-xl flex flex-col items-center gap-2 border shadow-sm ${colorMap[color]}`}>
      <Icon className="w-6 h-6" />
      <span className="font-black text-xs">{title}</span>
    </div>
  );
}

function ExampleBox({ title, text }: { title: string, text: string }) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-4 items-start shadow-inner">
      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
        <span className="text-amber-600 font-black">💡</span>
      </div>
      <div>
        <h4 className="font-black text-amber-800 text-sm mb-1">{title}</h4>
        <p className="text-amber-700 text-sm font-medium leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="p-4 font-black text-slate-500 w-1/4"></th>
            <th className="p-4 font-black text-slate-800">機能別組織</th>
            <th className="p-4 font-black text-slate-800">事業部制組織</th>
            <th className="p-4 font-black text-slate-800">マトリックス組織</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
          <tr>
            <td className="p-4 font-bold bg-slate-50/50">分け方</td>
            <td className="p-4">業務の専門分野ごと</td>
            <td className="p-4">製品・地域ごと</td>
            <td className="p-4">機能 × 事業の複合</td>
          </tr>
          <tr>
            <td className="p-4 font-bold bg-slate-50/50">向いている企業</td>
            <td className="p-4">中小企業・単一事業</td>
            <td className="p-4">大企業・多角化企業</td>
            <td className="p-4">人材を柔軟に活用したい企業</td>
          </tr>
          <tr>
            <td className="p-4 font-bold bg-slate-50/50 text-emerald-600">メリット</td>
            <td className="p-4 text-emerald-700 bg-emerald-50/30">専門性が高まりやすい</td>
            <td className="p-4 text-emerald-700 bg-emerald-50/30">スピーディーに意思決定できる</td>
            <td className="p-4 text-emerald-700 bg-emerald-50/30">部門の壁を越えて情報共有しやすい</td>
          </tr>
          <tr>
            <td className="p-4 font-bold bg-slate-50/50 text-rose-600">デメリット</td>
            <td className="p-4 text-rose-700 bg-rose-50/30">部門間の壁ができやすい</td>
            <td className="p-4 text-rose-700 bg-rose-50/30">重複が生じやすい</td>
            <td className="p-4 text-rose-700 bg-rose-50/30">上司が複数になり命令系統が複雑</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
