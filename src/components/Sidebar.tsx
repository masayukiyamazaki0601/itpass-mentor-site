import React from 'react';
import { MainNavTab, CategoryKey } from '../types';

interface SidebarProps {
  activeTab: MainNavTab;
  setActiveTab: (tab: MainNavTab) => void;
  selectedCategories: CategoryKey[];
  onToggleCategory: (category: CategoryKey) => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
  onOpenAppModal?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  selectedCategories,
  onToggleCategory,
  isMobileOpen = false,
  onCloseMobile,
  onOpenAppModal
}) => {
  const categoriesList: { key: CategoryKey; label: string; color: string }[] = [
    { key: 'strategy', label: 'ストラテジ系', color: 'bg-amber-500' },
    { key: 'management', label: 'マネジメント系', color: 'bg-emerald-500' },
    { key: 'technology', label: 'テクノロジ系', color: 'bg-blue-500' }
  ];

  const content = (
    <div className="glass-panel-light h-full w-full rounded-3xl p-5 flex flex-col gap-6 shadow-sm">
      <div className="px-2 pt-1 pb-3 border-b border-slate-200/80 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-extrabold tracking-widest text-indigo-600 uppercase">Navigation</span>
          <h2 className="font-black text-xl text-slate-900 tracking-tight">学習メニュー</h2>
        </div>
        <span className="material-symbols-outlined text-slate-400">explore</span>
      </div>

      <nav className="flex flex-col gap-2">
        {[
          { id: 'table-of-contents', label: '学習目次', icon: 'auto_stories', badge: '全15章' },
          { id: 'glossary', label: '用語集', icon: 'menu_book', badge: '検索' },
          { id: 'exam-overview', label: '試験概要', icon: 'verified', badge: 'ガイド' }
        ].map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id as MainNavTab);
                onCloseMobile?.();
              }}
              className={`flex items-center justify-between px-4 py-3 text-sm font-bold rounded-2xl transition-all text-left cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`material-symbols-outlined text-xl ${isActive ? 'text-cyan-300' : 'text-slate-400'}`}>
                  {item.icon}
                </span>
                {item.label}
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-md font-semibold ${
                isActive ? 'bg-white/20 text-white' : 'bg-slate-200/60 text-slate-500'
              }`}>
                {item.badge}
              </span>
            </button>
          );
        })}

        <button
          onClick={() => {
            onOpenAppModal?.();
            onCloseMobile?.();
          }}
          className="flex items-center justify-between px-4 py-3 mt-1 text-sm font-bold text-slate-700 hover:bg-purple-50 hover:text-purple-700 rounded-2xl transition-all cursor-pointer border border-dashed border-purple-200 group"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-xl text-purple-500 group-hover:scale-110 transition-transform">
              smartphone
            </span>
            演習アプリ
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-purple-100 text-purple-700">
            App
          </span>
        </button>
      </nav>

      {/* Category Filter Checkboxes */}
      <div className="pt-5 border-t border-slate-200/80 px-2 mt-auto">
        <h3 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">
          表示カテゴリ
        </h3>
        <div className="space-y-3">
          {categoriesList.map((cat) => {
            const isChecked = selectedCategories.includes(cat.key);
            return (
              <label
                key={cat.key}
                className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer hover:text-slate-900 select-none font-semibold group"
              >
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onToggleCategory(cat.key)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all ${
                    isChecked
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs'
                      : 'border-slate-300 bg-white group-hover:border-slate-400'
                  }`}>
                    {isChecked && <span className="material-symbols-outlined text-sm font-bold">check</span>}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${cat.color}`} />
                  <span className={isChecked ? 'text-slate-900' : 'text-slate-400'}>
                    {cat.label}
                  </span>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <aside className="hidden md:block w-72 flex-shrink-0">
        <div className="sticky top-[100px] h-[calc(100vh-120px)] w-full">
          {content}
        </div>
      </aside>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={onCloseMobile}
          />
          <div className="relative w-80 max-w-[85vw] bg-slate-50 h-full p-4 shadow-2xl z-10 overflow-y-auto">
            <div className="flex justify-between items-center px-2 py-3 border-b border-slate-200 mb-4">
              <span className="font-black text-lg text-slate-900">ITパスポート LAB</span>
              <button
                onClick={onCloseMobile}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-200/60"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>
            {content}
          </div>
        </div>
      )}
    </>
  );
};
