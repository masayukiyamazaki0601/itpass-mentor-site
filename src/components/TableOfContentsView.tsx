import React from 'react';
import { Chapter } from '../types';
import { TABLE_OF_CONTENTS } from '../data/tableOfContentsData';

interface TableOfContentsViewProps {
  setActiveTab: (tab: 'home' | 'table-of-contents' | 'glossary' | 'study-guide' | 'exam-overview') => void;
}

export const TableOfContentsView: React.FC<TableOfContentsViewProps> = ({ setActiveTab }) => {
  return (
    <div className="flex-1 w-full max-w-full">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111c2c] mb-3">
          学習コンテンツ目次
        </h1>
        <p className="text-sm text-[#43474f] max-w-3xl leading-relaxed">
          ITパスポート試験の全範囲を15章に体系的に整理しました。各章のトピックをクリックして学習を進めましょう。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TABLE_OF_CONTENTS.map((chapter: Chapter) => (
          <div
            key={chapter.id}
            className="bg-white rounded-xl border border-[#c3c6d0]/60 p-6 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#006b5c]" />
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#002b57] text-white w-10 h-10 rounded-lg flex items-center justify-center font-extrabold text-lg flex-shrink-0">
                {chapter.number}
              </span>
              <h2 className="text-lg font-bold text-[#111c2c]">{chapter.title}</h2>
            </div>
            <ul className="space-y-1.5">
              {chapter.topics.map((topic) => (
                <li key={topic.id}>
                  <button
                    onClick={() => setActiveTab('study-guide')}
                    className="text-sm text-[#43474f] hover:text-[#002b57] hover:bg-[#f0f3ff] transition-colors px-2 py-1 rounded-lg w-full text-left flex items-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base text-[#737780] flex-shrink-0">
                      chevron_right
                    </span>
                    {topic.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => setActiveTab('study-guide')}
          className="bg-[#00BFA5] hover:bg-[#009a85] text-white font-label text-sm py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2 active:scale-95 cursor-pointer font-bold"
        >
          <span className="material-symbols-outlined">menu_book</span>
          学習ガイドを始める
        </button>
      </div>
    </div>
  );
};