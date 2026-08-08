import React from 'react';
import { MainNavTab, CategoryKey } from '../types';

interface HomeViewProps {
  setActiveTab: (tab: MainNavTab) => void;
  onSearch: (query: string) => void;
  onStartQuiz: (quizId?: string) => void;
  onSelectCategoryArticle: (category: CategoryKey) => void;
  completedArticles?: string[];
  onOpenReverseDrill?: () => void;
  onOpenMatryoshka?: (termId?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActiveTab,
  onSearch,
  onStartQuiz,
  onSelectCategoryArticle,
  completedArticles = [],
  onOpenReverseDrill,
  onOpenMatryoshka
}) => {
  const [heroSearchInput, setHeroSearchInput] = React.useState('');

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearchInput.trim()) {
      onSearch(heroSearchInput.trim());
    }
  };

  const totalChapters = 15;
  const completedCount = completedArticles.length;
  const progressPercent = Math.round((completedCount / totalChapters) * 100);

  return (
    <div className="flex-1 flex flex-col gap-10 min-w-0">
      {/* Learning Progress Dashboard Card */}
      <div className="glass-card-light rounded-3xl p-6 border border-sky-200/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-white via-sky-50/40 to-blue-50/40">
        <div className="flex items-center gap-5 w-full sm:w-auto">
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/25 flex-shrink-0">
            <span className="material-symbols-outlined text-3xl">trophy</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-black text-slate-900">あなたの学習進捗</h3>
              <span className="text-xs font-bold text-sky-600 bg-sky-100 px-2.5 py-0.5 rounded-full">
                {completedCount} / {totalChapters} 章 完了
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              完了した章は自動的に進行状況として記録されます。
            </p>
          </div>
        </div>

        <div className="w-full sm:w-64 flex flex-col gap-2">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-slate-500">全体達成率</span>
            <span className="text-sky-600 text-sm font-extrabold">{progressPercent}%</span>
          </div>
          <div className="w-full h-3 bg-slate-200/80 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 rounded-full transition-all duration-500 shadow-xs"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full min-h-[440px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 flex items-center group">
        {/* Ambient Glows & Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-sky-950/40 z-10" />
        <img
          src="hero_cyber.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        <div className="relative z-20 px-8 sm:px-14 py-12 text-white max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-cyan-300 uppercase tracking-widest mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            ITパスポート試験 体系的解説ポータル
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-5 leading-tight tracking-tight drop-shadow-md">
            ITパスポート試験の基礎を<br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-300 bg-clip-text text-transparent">徹底的かつ直感的にマスター。</span>
          </h1>
          <p className="text-base sm:text-lg mb-8 text-slate-200 max-w-xl leading-relaxed font-normal">
            全15章の解説で最新シラバス範囲を網羅。クリアな図解と要点整理で、短期間での合格力を養います。
          </p>

          {/* Quick Search Box */}
          <form
            onSubmit={handleHeroSearchSubmit}
            className="bg-white/95 backdrop-blur-xl p-2 rounded-2xl flex items-center max-w-xl shadow-2xl border border-white/60 focus-within:ring-4 focus-within:ring-sky-500/30 transition-all"
          >
            <span className="material-symbols-outlined text-sky-600 ml-3 mr-2 text-2xl select-none">
              search
            </span>
            <input
              type="text"
              value={heroSearchInput}
              onChange={(e) => setHeroSearchInput(e.target.value)}
              placeholder="キーワードやトピックで検索..."
              className="bg-transparent border-none outline-none flex-1 text-slate-900 placeholder-slate-400 text-sm sm:text-base font-semibold focus:ring-0"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md shadow-sky-500/25 active:scale-95 cursor-pointer"
            >
              検索する
            </button>
          </form>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Table of Contents Card */}
        <div
          onClick={() => setActiveTab('table-of-contents')}
          className="glass-card-light rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-sky-400/60 transition-all cursor-pointer"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-sky-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 text-sky-700 font-bold text-xs uppercase tracking-wider rounded-xl border border-sky-100">
                <span className="material-symbols-outlined text-sm">menu_book</span> 全15章
              </span>
              <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-lg shadow-sky-500/25 group-hover:rotate-6 transition-transform">
                <span className="material-symbols-outlined text-2xl">list_alt</span>
              </div>
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
              学習コンテンツ目次を見る
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              ストラテジ・マネジメント・テクノロジの3分野を体系化。シラバスに完全準拠したオリジナル解説記事。
            </p>
          </div>
          <div className="pt-6 mt-6 flex justify-between items-center border-t border-slate-200/80">
            <span className="text-xs font-bold text-slate-400">学習進捗に合わせて順次解説</span>
            <span className="text-sky-600 font-bold text-sm flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
              目次一覧へ <span className="material-symbols-outlined text-base">arrow_forward</span>
            </span>
          </div>
        </div>

        {/* App Promotion Card */}
        <div
          onClick={() => onStartQuiz()}
          className="glass-card-light rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-blue-400/60 transition-all cursor-pointer"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider rounded-xl border border-blue-100">
                <span className="material-symbols-outlined text-sm">quiz</span> 実践演習
              </span>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:rotate-6 transition-transform">
                <span className="material-symbols-outlined text-2xl">smartphone</span>
              </div>
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
              アプリで問題演習に挑戦
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              記事で概念を理解したら、専用アプリで即時アウトプット。過去問形式の演習と詳細解説で定着させます。
            </p>
          </div>
          <div className="pt-6 mt-6 flex justify-between items-center border-t border-slate-200/80">
            <span className="text-xs font-bold text-slate-400">アプリで知識を定着</span>
            <span className="text-blue-600 font-bold text-sm flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
              演習アプリを開く <span className="material-symbols-outlined text-base">arrow_forward</span>
            </span>
          </div>
        </div>
      </section>

      {/* Study by Category Section */}
      <section className="flex flex-col gap-6">
        <div className="flex justify-between items-end border-b border-slate-200/80 pb-4">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-sky-600 uppercase">Categories</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">分野別解説</h2>
          </div>
          <button
            onClick={() => setActiveTab('table-of-contents')}
            className="text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors flex items-center gap-1 cursor-pointer"
          >
            すべての分野を表示 <span className="material-symbols-outlined text-base">chevron_right</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Category 1: Strategy */}
          <div
            onClick={() => onSelectCategoryArticle('strategy')}
            className="glass-card-light rounded-3xl p-7 hover:border-amber-400/60 transition-all relative overflow-hidden group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-sm">
              <span className="material-symbols-outlined text-3xl">account_tree</span>
            </div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-600">Strategy</span>
            <h3 className="text-xl font-bold text-slate-900 mb-2 mt-1 group-hover:text-amber-600 transition-colors">ストラテジ系</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              企業活動、法務、経営戦略、システム戦略など経営とITの関わりを徹底網羅。
            </p>
            <div className="mt-5 text-xs font-extrabold text-amber-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              解説記事を読む <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>

          {/* Category 2: Management */}
          <div
            onClick={() => onSelectCategoryArticle('management')}
            className="glass-card-light rounded-3xl p-7 hover:border-emerald-400/60 transition-all relative overflow-hidden group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm">
              <span className="material-symbols-outlined text-3xl">manage_accounts</span>
            </div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-600">Management</span>
            <h3 className="text-xl font-bold text-slate-900 mb-2 mt-1 group-hover:text-emerald-600 transition-colors">マネジメント系</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              開発手法、プロジェクトマネジメント、ITサービス管理を体系的に学びます。
            </p>
            <div className="mt-5 text-xs font-extrabold text-emerald-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              解説記事を読む <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>

          {/* Category 3: Technology */}
          <div
            onClick={() => onSelectCategoryArticle('technology')}
            className="glass-card-light rounded-3xl p-7 hover:border-blue-400/60 transition-all relative overflow-hidden group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
              <span className="material-symbols-outlined text-3xl">memory</span>
            </div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-600">Technology</span>
            <h3 className="text-xl font-bold text-slate-900 mb-2 mt-1 group-hover:text-blue-600 transition-colors">テクノロジ系</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              基礎理論、コンピュータシステム、ネットワーク、セキュリティ技術を理解。
            </p>
            <div className="mt-5 text-xs font-extrabold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              解説記事を読む <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};