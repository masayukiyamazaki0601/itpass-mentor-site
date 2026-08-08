import React from 'react';
import { Chapter } from '../types';
import { TABLE_OF_CONTENTS } from '../data/tableOfContentsData';

interface TableOfContentsViewProps {
  setActiveTab: (tab: 'home' | 'table-of-contents' | 'glossary' | 'exam-overview') => void;
  onSelectArticle: (articleId: string) => void;
  completedArticles?: string[];
  onToggleComplete?: (articleId: string) => void;
}

export const TableOfContentsView: React.FC<TableOfContentsViewProps> = ({
  setActiveTab,
  onSelectArticle,
  completedArticles = [],
  onToggleComplete
}) => {
  return (
    <div className="flex-1 w-full max-w-full">
      <div className="mb-10">
        <span className="text-xs font-extrabold tracking-widest text-indigo-600 uppercase">Syllabus Overview</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 tracking-tight">
          学習コンテンツ目次
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed font-medium">
          ITパスポート試験のシラバス全範囲を全15章に体系化。各章のトピックを選択して、わかりやすい図解と要点解説記事で学習を進めましょう。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TABLE_OF_CONTENTS.map((chapter: Chapter) => {
          const mainArticleId = chapter.topics.find((t) => t.articleId)?.articleId;
          const isCompleted = mainArticleId ? completedArticles.includes(mainArticleId) : false;

          return (
            <div
              key={chapter.id}
              className={`glass-card-light rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden group border transition-all shadow-xs ${
                isCompleted
                  ? 'border-emerald-300 bg-emerald-50/20'
                  : 'border-slate-200/80 hover:border-indigo-400/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/80">
                  <div className="flex items-center gap-3.5">
                    <span className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-lg shadow-md flex-shrink-0 ${
                      isCompleted
                        ? 'bg-emerald-500 text-white shadow-emerald-500/25'
                        : 'bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-indigo-500/25'
                    }`}>
                      {isCompleted ? <span className="material-symbols-outlined font-bold">check</span> : chapter.number}
                    </span>
                    <div>
                      <h2 className="text-xl font-black text-slate-900 tracking-tight">{chapter.title}</h2>
                      {isCompleted && (
                        <span className="text-[10px] font-extrabold text-emerald-600 flex items-center gap-0.5 mt-0.5">
                          <span className="material-symbols-outlined text-xs">verified</span> 学習完了
                        </span>
                      )}
                    </div>
                  </div>

                  {mainArticleId && onToggleComplete && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleComplete(mainArticleId);
                      }}
                      className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                        isCompleted
                          ? 'bg-emerald-100 text-emerald-700 border-emerald-300 hover:bg-emerald-200'
                          : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                      }`}
                    >
                      {isCompleted ? '完了済み' : '完了にする'}
                    </button>
                  )}
                </div>

                <ul className="space-y-2">
                  {chapter.topics.map((topic) => {
                    const hasArticle = !!topic.articleId;
                    return (
                      <li key={topic.id}>
                        <button
                          onClick={() => {
                            if (hasArticle && topic.articleId) {
                              onSelectArticle(topic.articleId);
                            }
                          }}
                          disabled={!hasArticle}
                          className={`text-sm px-3.5 py-2.5 rounded-2xl w-full text-left flex items-center gap-3 transition-all ${
                            hasArticle
                              ? 'text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/80 cursor-pointer font-semibold'
                              : 'text-slate-400 cursor-not-allowed'
                          }`}
                        >
                          <span
                            className={`material-symbols-outlined text-lg flex-shrink-0 ${
                              hasArticle ? (isCompleted ? 'text-emerald-500' : 'text-indigo-500') : 'text-slate-300'
                            }`}
                          >
                            {hasArticle ? (isCompleted ? 'task_alt' : 'arrow_right') : 'lock'}
                          </span>
                          <span className="flex-1">{topic.title}</span>
                          {hasArticle && (
                            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-lg flex items-center gap-0.5 ${
                              isCompleted
                                ? 'text-emerald-700 bg-emerald-100/80'
                                : 'text-indigo-600 bg-indigo-100/70'
                            }`}>
                              {isCompleted ? '復習する' : '記事を読む'}
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => setActiveTab('home')}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm py-3.5 px-8 rounded-2xl shadow-lg shadow-indigo-500/25 transition-all inline-flex items-center gap-2 active:scale-95 cursor-pointer"
        >
          <span className="material-symbols-outlined">home</span>
          ホームに戻る
        </button>
      </div>
    </div>
  );
};
