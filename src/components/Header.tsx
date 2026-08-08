import React, { useState } from 'react';
import { MainNavTab } from '../types';

interface HeaderProps {
  activeTab: MainNavTab;
  setActiveTab: (tab: MainNavTab) => void;
  onSearch: (query: string) => void;
  toggleMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onSearch,
  toggleMobileMenu
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-xs">
      <div className="flex justify-between items-center px-4 md:px-8 max-w-[1280px] mx-auto h-20">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="md:hidden text-slate-600 hover:text-slate-900 hover:bg-slate-100 p-2.5 rounded-xl transition-all"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="relative p-2 rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-600 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-all">
              <img
                src="https://lh3.googleusercontent.com/aida/AP1WRLtS7dvXPpaP9BeH0BlKgG87EOrJI3T6tgY3piQfc-Pt5HYS-xBzsVp57dNoSTSiHZnTnux1bKR43DOwClQAqMaWDizQRkCw4fWhqPs0RHcNfUImMfHyo3yUswdsanShgHJ5rzzejm1AG-MaEKy7we3XjEDs0U7WRA31yqPTYrnzEdLh1UzDnrs6ueIC-y-Ofutn_F32KsoAXmmlCKwEIrv454Ss1bkfvECU3tHV2E1cVEWE1rT0FcmgcV7Z"
                alt="IT Passport Mentor Logo"
                className="w-7 h-7 rounded-lg object-cover bg-white"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl md:text-2xl text-slate-900 tracking-tight flex items-center gap-1.5">
                ITパスポート <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">LAB</span>
              </span>
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">Master Exam Prep</span>
            </div>
          </button>
        </div>

        {/* Desktop Nav links */}
        <nav className="hidden md:flex gap-1 items-center bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/80 backdrop-blur-md">
          {[
            { id: 'home', label: 'ホーム', icon: 'home' },
            { id: 'table-of-contents', label: '目次', icon: 'auto_stories' },
            { id: 'glossary', label: '用語集', icon: 'menu_book' },
            { id: 'exam-overview', label: '試験概要', icon: 'verified' }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as MainNavTab)}
                className={`flex items-center gap-2 text-sm font-semibold py-2 px-4 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/80 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <span className={`material-symbols-outlined text-lg ${isActive ? 'text-indigo-600' : 'text-slate-400'}`}>
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Global Search */}
        <div className="flex items-center">
          <form onSubmit={handleSearchSubmit} className="relative hidden sm:block w-60 lg:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="キーワード・用語を検索..."
              className="w-full bg-slate-100/90 border border-slate-200 rounded-2xl py-2 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-inner"
            />
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-lg select-none">
              search
            </span>
          </form>
          <button
            onClick={() => {
              if (searchQuery) onSearch(searchQuery);
              else {
                setActiveTab('glossary');
              }
            }}
            aria-label="Search"
            className="sm:hidden text-slate-600 hover:text-slate-900 hover:bg-slate-100 p-2.5 rounded-xl transition-colors"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>
    </header>
  );
};
