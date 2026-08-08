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
    { key: 'strategy', label: 'ストラテジ系', color: 'text-orange-600' },
    { key: 'management', label: 'マネジメント系', color: 'text-emerald-600' },
    { key: 'technology', label: 'テクノロジ系', color: 'text-blue-600' }
  ];

  const content = (
    <div className="bg-[#f0f3ff] h-full w-full rounded-xl shadow-xs p-3 flex flex-col gap-2 border border-[#c3c6d0]/40">
      <div className="px-3 py-3 border-b border-[#c3c6d0]/50 mb-1">
        <h2 className="font-bold text-lg text-[#002b57]">試験対策</h2>
      </div>

      <nav className="flex flex-col gap-1">
        <button
          onClick={() => {
            setActiveTab('table-of-contents');
            onCloseMobile?.();
          }}
          className={`flex items-center gap-3 px-4 py-3 font-label text-sm rounded-full transition-all text-left ${
            activeTab === 'table-of-contents'
              ? 'bg-[#68fadd] text-[#007261] font-bold shadow-xs'
              : 'text-[#43474f] hover:bg-[#d8e3fa] hover:text-[#002b57]'
          }`}
        >
          <span className="material-symbols-outlined text-xl">list</span>
          目次
        </button>

        <button
          onClick={() => {
            setActiveTab('glossary');
            onCloseMobile?.();
          }}
          className={`flex items-center gap-3 px-4 py-3 font-label text-sm rounded-full transition-all text-left ${
            activeTab === 'glossary'
              ? 'bg-[#68fadd] text-[#007261] font-bold shadow-xs'
              : 'text-[#43474f] hover:bg-[#d8e3fa] hover:text-[#002b57]'
          }`}
        >
          <span className="material-symbols-outlined text-xl">book</span>
          用語集
        </button>

        <button
          onClick={() => {
            setActiveTab('exam-overview');
            onCloseMobile?.();
          }}
          className={`flex items-center gap-3 px-4 py-3 font-label text-sm rounded-full transition-all text-left ${
            activeTab === 'exam-overview'
              ? 'bg-[#68fadd] text-[#007261] font-bold shadow-xs'
              : 'text-[#43474f] hover:bg-[#d8e3fa] hover:text-[#002b57]'
          }`}
        >
          <span className="material-symbols-outlined text-xl">assignment</span>
          試験概要
        </button>

        <button
          onClick={() => {
            onOpenAppModal?.();
            onCloseMobile?.();
          }}
          className="flex items-center gap-3 px-4 py-3 text-[#43474f] hover:bg-[#d8e3fa] hover:text-[#002b57] transition-all rounded-full font-label text-sm text-left group"
        >
          <span className="material-symbols-outlined text-xl text-[#737780] group-hover:text-[#002b57]">
            smartphone
          </span>
          問題演習アプリ
        </button>
      </nav>

      {/* Category Filter Checkboxes */}
      <div className="mt-4 pt-4 border-t border-[#c3c6d0]/50 px-2">
        <h3 className="font-label text-xs font-bold text-[#43474f] uppercase tracking-wider mb-3">
          カテゴリ
        </h3>
        <div className="space-y-2.5">
          {categoriesList.map((cat) => {
            const isChecked = selectedCategories.includes(cat.key);
            return (
              <label
                key={cat.key}
                className="flex items-center gap-2.5 text-sm text-[#111c2c] cursor-pointer hover:opacity-80 select-none"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onToggleCategory(cat.key)}
                  className="rounded border-[#737780] text-[#006b5c] focus:ring-[#006b5c] w-4 h-4 cursor-pointer"
                />
                <span className={`font-medium ${isChecked ? 'text-[#111c2c]' : 'text-[#737780]'}`}>
                  {cat.label}
                </span>
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
      <aside className="hidden md:block w-64 flex-shrink-0">
        <div className="sticky top-[80px] h-[calc(100vh-100px)] w-full">
          {content}
        </div>
      </aside>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            onClick={onCloseMobile}
          />
          <div className="relative w-72 max-w-[80vw] bg-[#f0f3ff] h-full p-2 shadow-xl z-10 overflow-y-auto">
            <div className="flex justify-between items-center px-3 py-2 border-b border-[#c3c6d0]/40 mb-2">
              <span className="font-bold text-sm text-[#002b57]">ITパスポート・アカデミア</span>
              <button
                onClick={onCloseMobile}
                className="p-1 rounded-full text-[#737780] hover:bg-[#dee8ff]"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
            {content}
          </div>
        </div>
      )}
    </>
  );
};
