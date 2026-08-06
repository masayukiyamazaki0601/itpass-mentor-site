import React from 'react';
import { MainNavTab, CategoryKey } from '../types';

interface HomeViewProps {
  setActiveTab: (tab: MainNavTab) => void;
  onSearch: (query: string) => void;
  onStartQuiz: (quizId?: string) => void;
  onSelectCategoryArticle: (category: CategoryKey) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActiveTab,
  onSearch,
  onStartQuiz,
  onSelectCategoryArticle
}) => {
  const [heroSearchInput, setHeroSearchInput] = React.useState('');

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearchInput.trim()) {
      onSearch(heroSearchInput.trim());
    }
  };

  return (
    <div className="flex-1 flex flex-col gap-8 min-w-0">
      {/* Hero Section */}
      <section className="relative w-full min-h-[380px] rounded-xl overflow-hidden shadow-xs border border-[#c3c6d0]/20 flex items-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002b57]/80 via-[#002b57]/60 to-black/30 z-10" />
        <img
          src="https://lh3.googleusercontent.com/aida/AP1WRLurkUA3ZenbUEo2iXgaWTF2iRWh1-yTxPAsMvPPTzNOF2vpXK3jPTBlhyhfimuJx05IwhUCnI6Rl83RsOux6BzHUbPQsF-nSTolFtIoxBomsHH62HPtTMrv3z6C9bPBiZjFARt8M9XirwJPNY-Tgl5jDKMx2OKX59ZkUFhxXVws0rUu_3QaHhLQPbfDMkMFBlJzNeX_DfK8dtfIOkzLeqFZB3_CwFDf8ooIzgvERBPFMwAF9G82N1qCmaYe"
          alt="ITを勉強する学生"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 px-6 sm:px-12 py-10 text-white max-w-3xl">
          <span className="font-label text-xs text-[#68fadd] uppercase tracking-widest bg-black/40 px-3.5 py-1 rounded-full backdrop-blur-xs border border-white/20 inline-block mb-4">
            ITパスポート解説記事サイト
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-tight drop-shadow-md">
            ITパスポート試験の<br className="hidden sm:inline" />基礎を徹底解説。
          </h1>
          <p className="text-sm sm:text-base mb-6 text-[#f0f3ff] max-w-xl leading-relaxed drop-shadow-xs">
            15章の体系的な解説記事で試験範囲を網羅。基礎知識を固めて、問題演習は専用アプリで。
          </p>

          {/* Quick Search Box */}
          <form
            onSubmit={handleHeroSearchSubmit}
            className="bg-white/90 backdrop-blur-md rounded-full p-1.5 flex items-center max-w-xl shadow-lg border border-white/40"
          >
            <span className="material-symbols-outlined text-[#002b57] ml-3 mr-2 text-xl select-none">
              search
            </span>
            <input
              type="text"
              value={heroSearchInput}
              onChange={(e) => setHeroSearchInput(e.target.value)}
              placeholder="トピック、キーワードで検索..."
              className="bg-transparent border-none outline-none flex-1 text-[#002b57] placeholder-[#002b57]/60 text-sm font-medium focus:ring-0"
            />
            <button
              type="submit"
              className="bg-[#002b57] hover:bg-[#1a4173] text-white font-label text-xs sm:text-sm px-5 py-2.5 rounded-full transition-colors active:scale-95 cursor-pointer"
            >
              検索
            </button>
          </form>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Table of Contents Card */}
        <div
          onClick={() => setActiveTab('table-of-contents')}
          className="bg-white rounded-xl border border-[#c3c6d0]/60 p-6 shadow-xs flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all cursor-pointer"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#006b5c]" />
          <div>
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="inline-block px-2.5 py-1 bg-[#d8e3fa] text-[#002b57] font-bold text-[11px] uppercase tracking-wider rounded-md mb-2">
                  15章の全体像
                </span>
                <h2 className="text-xl font-bold text-[#111c2c]">学習コンテンツ目次を見る</h2>
              </div>
              <span className="material-symbols-outlined text-[#006b5c] text-3xl opacity-30 group-hover:opacity-100 transition-opacity">
                list
              </span>
            </div>
            <p className="text-sm text-[#43474f] leading-relaxed">
              企業活動から情報セキュリティまで、ITパスポート試験の全範囲を体系的に整理した解説記事一覧。
            </p>
          </div>
          <div className="pt-4 mt-2 flex justify-end border-t border-[#c3c6d0]/30">
            <span className="text-[#002b57] font-label text-sm font-semibold flex items-center gap-1">
              記事一覧へ <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </div>
        </div>

        {/* App Promotion Card */}
        <div
          onClick={() => onStartQuiz()}
          className="bg-white rounded-xl border border-[#c3c6d0]/60 p-6 shadow-xs flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all cursor-pointer"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00BFA5]" />
          <div>
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="inline-block px-2.5 py-1 bg-[#68fadd]/40 text-[#007261] font-bold text-[11px] uppercase tracking-wider rounded-md mb-2">
                  問題演習アプリ
                </span>
                <h2 className="text-xl font-bold text-[#111c2c]">アプリで問題演習に挑戦</h2>
              </div>
              <span className="material-symbols-outlined text-[#00BFA5] text-3xl opacity-30 group-hover:opacity-100 transition-opacity">
                smartphone
              </span>
            </div>
            <p className="text-sm text-[#43474f] leading-relaxed">
              解説記事で基礎を固めたら、専用アプリで実践的な問題演習と模擬テストに挑戦しましょう。
            </p>
          </div>
          <div className="pt-4 mt-2 flex justify-end border-t border-[#c3c6d0]/30">
            <span className="text-[#00BFA5] font-label text-sm font-semibold flex items-center gap-1">
              アプリを見る <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </div>
        </div>
      </section>

      {/* Study by Category Section */}
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-end border-b border-[#c3c6d0] pb-2">
          <h2 className="text-2xl font-bold text-[#111c2c]">カテゴリ別解説記事</h2>
          <button
            onClick={() => setActiveTab('table-of-contents')}
            className="text-xs text-[#43474f] hover:text-[#002b57] transition-colors flex items-center gap-0.5 cursor-pointer"
          >
            すべて見る <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Category 1: Strategy */}
          <div
            onClick={() => onSelectCategoryArticle('strategy')}
            className="group block bg-white rounded-xl border border-[#c3c6d0]/60 p-6 hover:border-[#002b57]/50 hover:shadow-md transition-all relative overflow-hidden cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#002b57]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            <div className="bg-[#002b57]/10 text-[#002b57] w-12 h-12 rounded-lg flex items-center justify-center mb-4 relative z-10 group-hover:bg-[#002b57] group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">account_tree</span>
            </div>
            <h3 className="text-lg font-bold text-[#111c2c] mb-2 relative z-10">ストラテジ系</h3>
            <p className="text-xs text-[#43474f] leading-relaxed relative z-10">
              企業活動、法務、経営戦略、システム戦略について学びます。
            </p>
            <span className="mt-3 inline-block text-xs font-bold text-[#002b57] relative z-10">
              解説記事へ →
            </span>
          </div>

          {/* Category 2: Management */}
          <div
            onClick={() => onSelectCategoryArticle('management')}
            className="group block bg-white rounded-xl border border-[#c3c6d0]/60 p-6 hover:border-[#006b5c]/50 hover:shadow-md transition-all relative overflow-hidden cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#006b5c]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            <div className="bg-[#006b5c]/10 text-[#006b5c] w-12 h-12 rounded-lg flex items-center justify-center mb-4 relative z-10 group-hover:bg-[#006b5c] group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">manage_accounts</span>
            </div>
            <h3 className="text-lg font-bold text-[#111c2c] mb-2 relative z-10">マネジメント系</h3>
            <p className="text-xs text-[#43474f] leading-relaxed relative z-10">
              開発手法、プロジェクトマネジメント、サービスマネジメントについて学びます。
            </p>
            <span className="mt-3 inline-block text-xs font-bold text-[#006b5c] relative z-10">
              解説記事へ →
            </span>
          </div>

          {/* Category 3: Technology */}
          <div
            onClick={() => onSelectCategoryArticle('technology')}
            className="group block bg-white rounded-xl border border-[#c3c6d0]/60 p-6 hover:border-blue-500/50 hover:shadow-md transition-all relative overflow-hidden cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            <div className="bg-blue-500/10 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 relative z-10 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">memory</span>
            </div>
            <h3 className="text-lg font-bold text-[#111c2c] mb-2 relative z-10">テクノロジ系</h3>
            <p className="text-xs text-[#43474f] leading-relaxed relative z-10">
              基礎理論、コンピュータシステム、ネットワーク、セキュリティについて学びます。
            </p>
            <span className="mt-3 inline-block text-xs font-bold text-blue-600 relative z-10">
              解説記事へ →
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};