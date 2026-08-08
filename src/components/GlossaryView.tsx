import React, { useState, useMemo } from 'react';
import { GlossaryTerm, CategoryKey } from '../types';
import { GLOSSARY_TERMS } from '../data/glossaryData';

interface GlossaryViewProps {
  selectedCategories: CategoryKey[];
  searchQuery?: string;
  bookmarkedIds: string[];
  onToggleBookmark: (termId: string) => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({
  selectedCategories,
  searchQuery = '',
  bookmarkedIds,
  onToggleBookmark
}) => {
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [selectedIndexGroup, setSelectedIndexGroup] = useState<string>('ALL');
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);

  const indexGroups = ['ALL', 'A', 'B', 'C', 'D', 'I', 'M', 'N', 'P', 'R', 'S', 'T', 'あ行', 'か行', 'さ行', 'た行', 'な行', 'は行', 'ま行', 'ら行'];

  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((term) => {
      // Category filter
      if (!selectedCategories.includes(term.category)) {
        return false;
      }
      // Bookmark filter
      if (onlyBookmarks && !bookmarkedIds.includes(term.id)) {
        return false;
      }
      // Index group filter
      if (selectedIndexGroup !== 'ALL' && term.indexGroup !== selectedIndexGroup) {
        return false;
      }
      // Search term filter
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase().trim();
        const matchesTerm = term.term.toLowerCase().includes(q);
        const matchesEnglish = term.english?.toLowerCase().includes(q) || false;
        const matchesReading = term.reading?.toLowerCase().includes(q) || false;
        const matchesDesc = term.description.toLowerCase().includes(q);
        if (!matchesTerm && !matchesEnglish && !matchesReading && !matchesDesc) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategories, selectedIndexGroup, searchTerm, onlyBookmarks, bookmarkedIds]);

  const getCategoryBadge = (category: CategoryKey) => {
    switch (category) {
      case 'technology':
        return { label: 'テクノロジ系', bg: 'bg-blue-50 text-blue-700 border-blue-200', bar: 'bg-blue-500' };
      case 'management':
        return { label: 'マネジメント系', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200', bar: 'bg-emerald-500' };
      case 'strategy':
        return { label: 'ストラテジ系', bg: 'bg-amber-50 text-amber-700 border-amber-200', bar: 'bg-amber-500' };
    }
  };

  return (
    <div className="flex-1 w-full max-w-full">
      <div className="mb-10">
        <span className="text-xs font-extrabold tracking-widest text-indigo-600 uppercase">IT Dictionary</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 tracking-tight">
          IT用語集
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed font-medium">
          ITパスポート試験で超頻出の重要キーワードを完全網羅。試験前の直前チェックや重要語句の理解に役立てましょう。
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="glass-card-light rounded-3xl p-5 mb-8 shadow-xs border border-slate-200/80 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="用語・アルファベット・解説を検索..."
            className="w-full bg-slate-100/80 border border-slate-200 rounded-2xl py-2.5 pl-11 pr-10 text-sm text-slate-800 focus:outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-semibold"
          />
          <span className="material-symbols-outlined absolute left-3.5 top-3 text-indigo-500 text-xl select-none">
            search
          </span>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-3 text-slate-400 hover:text-slate-700"
            >
              <span className="material-symbols-outlined text-lg">cancel</span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-end">
          <button
            onClick={() => setOnlyBookmarks(!onlyBookmarks)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
              onlyBookmarks
                ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
            }`}
          >
            <span className={`material-symbols-outlined text-lg ${onlyBookmarks ? 'filled text-amber-100' : 'text-amber-500'}`}>
              bookmark
            </span>
            ブックマーク ({bookmarkedIds.length})
          </button>

          <div className="text-xs text-slate-500 font-bold px-3 py-1 bg-slate-100 rounded-xl">
            検索結果: <span className="font-extrabold text-indigo-600 text-sm">{filteredTerms.length}</span> 件
          </div>
        </div>
      </div>

      {/* A-Z Index Navigation */}
      <div className="glass-card-light rounded-3xl p-6 mb-8 border border-slate-200/80">
        <h2 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">
          アルファベット・五十音インデックス
        </h2>
        <div className="flex flex-wrap gap-2">
          {indexGroups.map((group) => {
            const isActive = selectedIndexGroup === group;
            return (
              <button
                key={group}
                onClick={() => setSelectedIndexGroup(group)}
                className={`min-w-10 h-10 px-3.5 flex items-center justify-center rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20 scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                }`}
              >
                {group}
              </button>
            );
          })}
        </div>
      </div>

      {/* Term List Section */}
      {filteredTerms.length === 0 ? (
        <div className="glass-card-light rounded-3xl p-16 text-center text-slate-500 border border-slate-200/80">
          <span className="material-symbols-outlined text-5xl text-slate-300 mb-3">search_off</span>
          <p className="text-lg font-bold text-slate-800">一致する用語が見つかりません</p>
          <p className="text-xs text-slate-500 mt-1">検索キーワードを変更するか、フィルター条件をリセットしてください。</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedIndexGroup('ALL');
              setOnlyBookmarks(false);
            }}
            className="mt-6 text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-2xl shadow-md shadow-indigo-500/20 transition-all cursor-pointer"
          >
            条件をリセット
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTerms.map((term) => {
            const badge = getCategoryBadge(term.category);
            const isBookmarked = bookmarkedIds.includes(term.id);

            return (
              <div
                key={term.id}
                className="glass-card-light rounded-3xl p-7 hover:border-indigo-300 transition-all relative overflow-hidden group flex flex-col justify-between border border-slate-200/80 shadow-xs"
              >
                <div>
                  <div className="flex justify-between items-start mb-3 gap-3">
                    <div>
                      <h3 className="text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {term.term}
                        {term.english && (
                          <span className="text-xs font-semibold text-slate-400 block sm:inline sm:ml-2">
                            ({term.english})
                          </span>
                        )}
                      </h3>
                      {term.reading && (
                        <span className="text-xs text-slate-400 font-medium block mt-0.5">
                          {term.reading}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] px-3 py-1 rounded-xl font-extrabold border ${badge.bg}`}>
                        {badge.label}
                      </span>
                      <button
                        onClick={() => onToggleBookmark(term.id)}
                        className={`p-2 rounded-xl transition-all cursor-pointer ${
                          isBookmarked
                            ? 'text-amber-500 bg-amber-50'
                            : 'text-slate-300 hover:text-slate-600 hover:bg-slate-100'
                        }`}
                        title={isBookmarked ? 'ブックマーク解除' : 'ブックマークに追加'}
                      >
                        <span className={`material-symbols-outlined text-xl ${isBookmarked ? 'filled' : ''}`}>
                          bookmark
                        </span>
                      </button>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-medium my-4">
                    {term.description}
                  </p>
                </div>

                {term.examTip && (
                  <div className="mt-4 pt-4 border-t border-slate-200/80 text-xs text-slate-800 bg-indigo-50/60 p-3.5 rounded-2xl flex items-start gap-2 border border-indigo-100">
                    <span className="material-symbols-outlined text-lg text-indigo-600 flex-shrink-0">
                      tips_and_updates
                    </span>
                    <span className="leading-relaxed"><strong>試験ポイント:</strong> {term.examTip}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
