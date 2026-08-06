import React, { useState } from 'react';
import { MainNavTab, CategoryKey, UserProgress } from '../types';
import { DAILY_QUESTION } from '../data/quizData';

interface HomeViewProps {
  setActiveTab: (tab: MainNavTab) => void;
  onSearch: (query: string) => void;
  onStartQuiz: (quizId?: string) => void;
  onSelectCategoryArticle: (category: CategoryKey) => void;
  userProgress: UserProgress;
  onOpenStatsModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActiveTab,
  onSearch,
  onStartQuiz,
  onSelectCategoryArticle,
  userProgress,
  onOpenStatsModal
}) => {
  const [heroSearchInput, setHeroSearchInput] = useState('');

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
          alt="Student studying IT"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 px-6 sm:px-12 py-10 text-white max-w-3xl">
          <span className="font-label text-xs text-[#68fadd] uppercase tracking-widest bg-black/40 px-3.5 py-1 rounded-full backdrop-blur-xs border border-white/20 inline-block mb-4">
            WELCOME TO YOUR IT JOURNEY
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-tight drop-shadow-md">
            Master the IT Passport Exam<br className="hidden sm:inline" /> with Confidence.
          </h1>
          <p className="text-sm sm:text-base mb-6 text-[#f0f3ff] max-w-xl leading-relaxed drop-shadow-xs">
            Structured learning, practice questions, and expert guidance to help you navigate the foundational concepts of IT smoothly.
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
              placeholder="Search topics, keywords, or questions..."
              className="bg-transparent border-none outline-none flex-1 text-[#002b57] placeholder-[#002b57]/60 text-sm font-medium focus:ring-0"
            />
            <button
              type="submit"
              className="bg-[#002b57] hover:bg-[#1a4173] text-white font-label text-xs sm:text-sm px-5 py-2.5 rounded-full transition-colors active:scale-95 cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Dashboard Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Today's Question Card */}
        <div className="md:col-span-2 bg-white rounded-xl border border-[#c3c6d0]/60 p-6 shadow-xs flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#006b5c]" />
          <div>
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="inline-block px-2.5 py-1 bg-[#d8e3fa] text-[#002b57] font-bold text-[11px] uppercase tracking-wider rounded-md mb-2">
                  DAILY CHALLENGE
                </span>
                <h2 className="text-xl font-bold text-[#111c2c]">Question of the Day</h2>
              </div>
              <span className="material-symbols-outlined text-[#006b5c] text-3xl opacity-30 group-hover:opacity-100 transition-opacity">
                lightbulb
              </span>
            </div>

            <p className="text-base text-[#43474f] bg-[#f9f9ff] p-4 rounded-lg border border-[#c3c6d0]/40 leading-relaxed my-2">
              {DAILY_QUESTION.question}
            </p>
          </div>

          <div className="pt-4 mt-2 flex flex-wrap justify-between items-center border-t border-[#c3c6d0]/30 gap-2">
            <span className="text-xs text-[#43474f] flex items-center gap-1">
              <span className="material-symbols-outlined text-base">schedule</span>
              Estimated time: 2 mins
            </span>
            <button
              onClick={() => onStartQuiz('daily-q1')}
              className="bg-[#006b5c] hover:bg-[#005145] text-white font-label text-sm px-5 py-2.5 rounded-lg transition-colors active:scale-95 cursor-pointer shadow-xs"
            >
              Answer Now
            </button>
          </div>
        </div>

        {/* Learning Progress Widget */}
        <div className="bg-white rounded-xl border border-[#c3c6d0]/60 p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-bold text-[#111c2c]">My Progress</h2>
              <button
                onClick={onOpenStatsModal}
                className="text-[#002b57] hover:bg-[#f0f3ff] p-1.5 rounded-full transition-colors cursor-pointer"
                title="詳細統計"
              >
                <span className="material-symbols-outlined text-xl">more_vert</span>
              </button>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <div>
                <div className="flex justify-between text-xs text-[#43474f] mb-1.5">
                  <span className="font-semibold">Strategy (ストラテジ系)</span>
                  <span className="font-bold text-[#002b57]">
                    {userProgress.categoryProgress.strategy}%
                  </span>
                </div>
                <div className="w-full bg-[#d8e3fa] rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#002b57] h-2 rounded-full transition-all duration-500"
                    style={{ width: `${userProgress.categoryProgress.strategy}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-[#43474f] mb-1.5">
                  <span className="font-semibold">Management (マネジメント系)</span>
                  <span className="font-bold text-[#006b5c]">
                    {userProgress.categoryProgress.management}%
                  </span>
                </div>
                <div className="w-full bg-[#d8e3fa] rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#006b5c] h-2 rounded-full transition-all duration-500"
                    style={{ width: `${userProgress.categoryProgress.management}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-[#43474f] mb-1.5">
                  <span className="font-semibold">Technology (テクノロジ系)</span>
                  <span className="font-bold text-blue-600">
                    {userProgress.categoryProgress.technology}%
                  </span>
                </div>
                <div className="w-full bg-[#d8e3fa] rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${userProgress.categoryProgress.technology}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#c3c6d0]/30 text-center mt-4">
            <button
              onClick={onOpenStatsModal}
              className="text-[#002b57] font-label text-sm hover:underline inline-flex items-center gap-1 font-semibold cursor-pointer"
            >
              View Detailed Stats
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Study by Category Section */}
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-end border-b border-[#c3c6d0] pb-2">
          <h2 className="text-2xl font-bold text-[#111c2c]">Study by Category</h2>
          <button
            onClick={() => setActiveTab('study-guide')}
            className="text-xs text-[#43474f] hover:text-[#002b57] transition-colors flex items-center gap-0.5 cursor-pointer"
          >
            See all <span className="material-symbols-outlined text-sm">chevron_right</span>
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
            <h3 className="text-lg font-bold text-[#111c2c] mb-2 relative z-10">Strategy</h3>
            <p className="text-xs text-[#43474f] leading-relaxed relative z-10">
              Corporate activities, legal affairs, business strategy, and system strategy.
            </p>
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
            <h3 className="text-lg font-bold text-[#111c2c] mb-2 relative z-10">Management</h3>
            <p className="text-xs text-[#43474f] leading-relaxed relative z-10">
              Development methods, project management, and service management.
            </p>
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
            <h3 className="text-lg font-bold text-[#111c2c] mb-2 relative z-10">Technology</h3>
            <p className="text-xs text-[#43474f] leading-relaxed relative z-10">
              Basic theory, computer systems, network, and security.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
