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
    <header className="bg-[#f9f9ff] sticky top-0 w-full z-40 border-b border-[#c3c6d0]">
      <div className="flex justify-between items-center px-4 md:px-6 max-w-[1200px] mx-auto h-16">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="md:hidden text-[#002b57] hover:bg-[#e7eeff] p-2 rounded-full transition-colors active:opacity-80"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2 text-left group cursor-pointer"
          >
            <img
              src="https://lh3.googleusercontent.com/aida/AP1WRLtS7dvXPpaP9BeH0BlKgG87EOrJI3T6tgY3piQfc-Pt5HYS-xBzsVp57dNoSTSiHZnTnux1bKR43DOwClQAqMaWDizQRkCw4fWhqPs0RHcNfUImMfHyo3yUswdsanShgHJ5rzzejm1AG-MaEKy7we3XjEDs0U7WRA31yqPTYrnzEdLh1UzDnrs6ueIC-y-Ofutn_F32KsoAXmmlCKwEIrv454Ss1bkfvECU3tHV2E1cVEWE1rT0FcmgcV7Z"
              alt="IT Passport Mentor Logo"
              className="w-8 h-8 rounded-md object-contain"
            />
            <span className="font-extrabold text-xl md:text-2xl text-[#002b57] tracking-tight group-hover:opacity-90 transition-opacity">
              ITパスポート メンター
            </span>
          </button>
        </div>

        {/* Desktop Nav links */}
        <nav className="hidden md:flex gap-1 lg:gap-2 items-center">
          <button
            onClick={() => setActiveTab('home')}
            className={`font-label text-sm py-2 px-4 rounded-full transition-all ${
              activeTab === 'home'
                ? 'bg-[#f0f3ff] text-[#006b5c] font-bold shadow-xs'
                : 'text-[#43474f] hover:text-[#002b57] hover:bg-[#e7eeff]'
            }`}
          >
            ホーム
          </button>
          <button
            onClick={() => setActiveTab('table-of-contents')}
            className={`font-label text-sm py-2 px-4 rounded-full transition-all ${
              activeTab === 'table-of-contents'
                ? 'bg-[#68fadd] text-[#007261] font-bold shadow-xs'
                : 'text-[#43474f] hover:text-[#002b57] hover:bg-[#e7eeff]'
            }`}
          >
            目次
          </button>
          <button
            onClick={() => setActiveTab('glossary')}
            className={`font-label text-sm py-2 px-4 rounded-full transition-all ${
              activeTab === 'glossary'
                ? 'bg-[#68fadd] text-[#007261] font-bold shadow-xs'
                : 'text-[#43474f] hover:text-[#002b57] hover:bg-[#e7eeff]'
            }`}
          >
            用語集
          </button>
          <button
            onClick={() => setActiveTab('exam-overview')}
            className={`font-label text-sm py-2 px-4 rounded-full transition-all ${
              activeTab === 'exam-overview'
                ? 'bg-[#f0f3ff] text-[#006b5c] font-bold shadow-xs'
                : 'text-[#43474f] hover:text-[#002b57] hover:bg-[#e7eeff]'
            }`}
          >
            試験概要
          </button>
        </nav>

        {/* Global Search */}
        <div className="flex items-center">
          <form onSubmit={handleSearchSubmit} className="relative hidden sm:block w-56 lg:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="用語や記事を検索..."
              className="w-full bg-[#f0f3ff] border border-[#c3c6d0] rounded-full py-1.5 pl-9 pr-4 text-sm text-[#111c2c] placeholder-[#737780] focus:outline-none focus:border-[#002b57] focus:ring-2 focus:ring-[#68fadd]/50 transition-all"
            />
            <span className="material-symbols-outlined absolute left-2.5 top-2 text-[#737780] text-lg select-none">
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
            className="sm:hidden text-[#002b57] hover:bg-[#e7eeff] p-2 rounded-full transition-colors active:opacity-80"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>
    </header>
  );
};
