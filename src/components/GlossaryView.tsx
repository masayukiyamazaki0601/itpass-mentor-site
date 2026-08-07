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
        return { label: 'テクノロジ系', bg: 'bg-blue-50 text-blue-700', bar: 'bg-blue-500' };
      case 'management':
        return { label: 'マネジメント系', bg: 'bg-emerald-50 text-emerald-700', bar: 'bg-emerald-500' };
      case 'strategy':
        return { label: 'ストラテジ系', bg: 'bg-amber-50 text-amber-700', bar: 'bg-amber-500' };
    }
  };

  return (
    <div className="flex-1 w-full max-w-full">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111c2c] mb-3">
          用語集
        </h1>
        <p className="text-sm text-[#43474f] max-w-3xl leading-relaxed">
          ITパスポート試験の頻出用語をA-Z順に整理しています。試験前の最終確認や、わからない用語の検索に活用してください。
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white rounded-xl border border-[#c3c6d0]/60 p-5 mb-8 shadow-xs flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-80">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="用語、読み方、意味で検索..."
            className="w-full bg-[#f0f3ff] border border-[#c3c6d0] rounded-full py-2 pl-10 pr-4 text-sm text-[#111c2c] focus:outline-none focus:border-[#002b57] focus:ring-2 focus:ring-[#68fadd]/50"
          />
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#737780] text-lg select-none">
            search
          </span>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-2.5 text-[#737780] hover:text-[#111c2c]"
            >
              <span className="material-symbols-outlined text-base">cancel</span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
          <button
            onClick={() => setOnlyBookmarks(!onlyBookmarks)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              onlyBookmarks
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-[#f0f3ff] text-[#43474f] hover:bg-[#dee8ff]'
            }`}
          >
            <span className={`material-symbols-outlined text-base ${onlyBookmarks ? 'filled' : ''}`}>
              bookmark
            </span>
            ブックマークのみ ({bookmarkedIds.length})
          </button>

          <span className="text-xs text-[#43474f] font-medium">
            該当: <span className="font-bold text-[#002b57] text-sm">{filteredTerms.length}</span> 件
          </span>
        </div>
      </div>

      {/* A-Z Index Navigation (Bento style) */}
      <div className="bg-white rounded-xl border border-[#c3c6d0]/60 p-5 mb-8 shadow-xs">
        <h2 className="font-label text-xs font-bold text-[#43474f] uppercase tracking-wider mb-3">
          INDEX
        </h2>
        <div className="flex flex-wrap gap-2">
          {indexGroups.map((group) => {
            const isActive = selectedIndexGroup === group;
            return (
              <button
                key={group}
                onClick={() => setSelectedIndexGroup(group)}
                className={`min-w-10 h-10 px-3 flex items-center justify-center rounded-lg font-label text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#68fadd] text-[#007261] shadow-xs scale-105'
                    : 'bg-[#dee8ff] text-[#111c2c] hover:bg-[#68fadd]/40'
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
        <div className="bg-white rounded-xl border border-[#c3c6d0]/60 p-12 text-center text-[#43474f]">
          <span className="material-symbols-outlined text-4xl text-[#737780] mb-2">search_off</span>
          <p className="text-base font-medium">条件に一致する用語が見つかりませんでした。</p>
          <p className="text-xs text-[#737780] mt-1">検索ワードを変えるか、フィルターを解除してください。</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedIndexGroup('ALL');
              setOnlyBookmarks(false);
            }}
            className="mt-4 text-xs bg-[#002b57] text-white px-4 py-2 rounded-full font-bold hover:bg-[#1a4173] transition-colors"
          >
            フィルターをリセット
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
                className="bg-white rounded-xl border border-[#c3c6d0]/60 p-6 hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Category Color Bar */}
                <div className={`absolute top-0 left-0 w-1.5 h-full ${badge.bar}`} />

                <div>
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-[#111c2c] group-hover:text-[#002b57] transition-colors">
                        {term.term}
                        {term.english && (
                          <span className="text-xs font-normal text-[#43474f] block sm:inline sm:ml-2">
                            ({term.english})
                          </span>
                        )}
                      </h3>
                      {term.reading && (
                        <span className="text-[11px] text-[#737780] block mt-0.5">
                          {term.reading}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] px-2.5 py-1 rounded font-label font-bold ${badge.bg}`}>
                        {badge.label}
                      </span>
                      <button
                        onClick={() => onToggleBookmark(term.id)}
                        className={`p-1 rounded-full transition-colors cursor-pointer ${
                          isBookmarked
                            ? 'text-amber-500 hover:bg-amber-50'
                            : 'text-[#c3c6d0] hover:text-[#737780] hover:bg-[#f0f3ff]'
                        }`}
                        title={isBookmarked ? 'ブックマーク解除' : 'ブックマークに追加'}
                      >
                        <span className={`material-symbols-outlined text-xl ${isBookmarked ? 'filled' : ''}`}>
                          bookmark
                        </span>
                      </button>
                    </div>
                  </div>

                  <p className="text-sm text-[#43474f] leading-relaxed my-3">
                    {term.description}
                  </p>
                </div>

                {term.examTip && (
                  <div className="mt-3 pt-3 border-t border-[#c3c6d0]/30 text-xs text-[#002b57] bg-[#f0f3ff] p-2.5 rounded-lg flex items-start gap-1.5">
                    <span className="material-symbols-outlined text-base text-[#006b5c] flex-shrink-0">
                      tips_and_updates
                    </span>
                    <span><strong>試験のポイント:</strong> {term.examTip}</span>
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
