import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import { ARTICLES_DATA } from '../data/articlesData';
import { OrganizationDiagrams } from './OrganizationDiagrams';
import { NetworkDiagrams } from './NetworkDiagrams';
import { DatabaseDiagrams } from './DatabaseDiagrams';
import { CorporateActivitiesDiagrams } from './CorporateActivitiesDiagrams';

interface ArticleReaderProps {
  currentArticleId: string;
  onSelectArticle: (articleId: string) => void;
  onStartQuiz: (articleId: string) => void;
  onBackToToc: () => void;
  completedArticles?: string[];
  onToggleComplete?: (articleId: string) => void;
}

export const ArticleReader: React.FC<ArticleReaderProps> = ({
  currentArticleId,
  onSelectArticle,
  onStartQuiz,
  onBackToToc,
  completedArticles = [],
  onToggleComplete
}) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSectionId, setActiveSectionId] = useState<string>('section-1');

  // Term Modal State
  const [activeTermModal, setActiveTermModal] = useState<{
    term: string;
    english?: string;
    reading?: string;
    description: string;
    examTip?: string;
  } | null>(null);

  const article: Article | undefined =
    ARTICLES_DATA.find((a) => a.id === currentArticleId) || ARTICLES_DATA[0];

  const isCompleted = completedArticles.includes(currentArticleId);

  useEffect(() => {
    setReadingProgress(0);
    setActiveSectionId('section-1');
  }, [article?.id]);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        const scrolled = (winScroll / height) * 100;
        setReadingProgress(Math.min(100, Math.max(0, scrolled)));
      }

      if (!article) return;
      article.sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 100) {
            setActiveSectionId(sec.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  const scrollToSection = (sectionId: string) => {
    setActiveSectionId(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderTextWithTermPills = (text: string) => {
    const keyTerms: { term: string; english?: string; reading?: string; description: string; examTip?: string }[] = [
      { term: 'BCP', english: 'Business Continuity Plan', reading: '事業継続計画', description: '自然災害や大事故が起きても企業が業務を中断せず、早期復旧するための事前計画。', examTip: '「災害発生時に事業を継続させる手段」として出題されます。' },
      { term: 'BPR', english: 'Business Process Reengineering', reading: '業務プロセス再設計', description: '既存の業務の流れを抜本的に再設計・見直す経営戦略。', examTip: '単なる改善ではなく「ゼロからの抜本的再構築」がキーポイント。' },
      { term: 'SaaS', english: 'Software as a Service', reading: 'サース', description: 'クラウド上でソフトウェア機能を提供するサービス形態（例: Google Workspace, Slack）。', examTip: 'PaaS/IaaSとの違いを整理しておきましょう。' },
      { term: 'RPA', english: 'Robotic Process Automation', reading: 'アールピーエー', description: '定型的な事務作業をソフトウェアロボットで自動化する技術。', examTip: '「バックオフィスの定型データ入力作業の自動化」が出題パターン。' },
      { term: 'DX', english: 'Digital Transformation', reading: 'デジタルトランスフォーメーション', description: 'ITやデータを活用してビジネスモデルや社会の仕組みを変革すること。', examTip: '単なるIT化ではなく「ビジネス変革・価値創造」を含みます。' },
      { term: 'CSR', english: 'Corporate Social Responsibility', reading: '企業の社会的責任', description: '企業が利益だけでなく環境・社会貢献・ガバナンスへの配慮を行うこと。', examTip: 'コンプライアンスや持続可能性（SDGs）とセットで出題。' },
      { term: 'KPI', english: 'Key Performance Indicator', reading: '重要業績評価指標', description: '目標達成に向けた中間的な達成度を測る指標。', examTip: '最終目標のKGI（Key Goal Indicator）との対比に注意。' },
      { term: 'PPM', english: 'Product Portfolio Management', reading: 'プロダクトポートフォリオマネジメント', description: '自社事業を「花形」「金のなる木」「問題児」「負け犬」の4分類で管理する手法。', examTip: '市場成長率と相対的市場シェアの2軸で分析。' }
    ];

    let parts: (string | React.ReactNode)[] = [text];

    keyTerms.forEach(({ term, english, reading, description, examTip }) => {
      const nextParts: (string | React.ReactNode)[] = [];
      parts.forEach((part) => {
        if (typeof part !== 'string') {
          nextParts.push(part);
          return;
        }

        const split = part.split(term);
        split.forEach((subStr, i) => {
          nextParts.push(subStr);
          if (i < split.length - 1) {
            nextParts.push(
              <button
                key={`${term}-${i}`}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveTermModal({ term, english, reading, description, examTip });
                }}
                className="inline-flex items-center gap-0.5 px-2 py-0.5 mx-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200/80 font-bold text-xs transition-all cursor-pointer shadow-xs"
              >
                <span className="material-symbols-outlined text-xs">info</span>
                {term}
              </button>
            );
          }
        });
      });
      parts = nextParts;
    });

    return <>{parts}</>;
  };

  if (!article) {
    return (
      <div className="flex-1 w-full max-w-full">
        <div className="bg-white border border-slate-200 rounded-3xl p-10 text-center">
          <span className="material-symbols-outlined text-5xl text-slate-400 mb-4 block">
            menu_book
          </span>
          <p className="text-base text-slate-700 font-medium">該当する記事が見つかりませんでした。</p>
          <button
            onClick={onBackToToc}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-indigo-600 px-4 py-2 rounded-2xl hover:bg-indigo-700 transition-colors"
          >
            目次に戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full max-w-full">
      {/* Reading Progress Indicator */}
      <div className="fixed top-20 left-0 w-full h-1 bg-slate-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-150 shadow-sm"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Article Canvas */}
        <main className="flex-1 w-full max-w-3xl">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-4 font-semibold">
            <span onClick={onBackToToc} className="hover:text-indigo-600 cursor-pointer">目次</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span>{article.breadcrumbPath[1]}</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-slate-900 font-bold">{article.breadcrumbPath[2]}</span>
          </nav>

          <article className="glass-card-light border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
            <header className="mb-8 border-b border-slate-200/80 pb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-indigo-100 text-indigo-700 px-3.5 py-1 rounded-xl text-xs font-extrabold inline-block border border-indigo-200/60">
                  {article.categoryLabel}
                </span>
                <div className="flex items-center text-slate-400 text-xs font-semibold gap-1">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  <span>{article.readTime}</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
                {article.title}
              </h1>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                {article.summary}
              </p>
            </header>

            <div className="space-y-10 text-slate-800">
              {article.sections.map((sec) => (
                <section key={sec.id} id={sec.id} className="scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-5 flex items-center gap-3 tracking-tight">
                    <span className="w-2 h-7 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full inline-block" />
                    {sec.title}
                  </h2>

                  <p className="mb-6 text-base leading-relaxed whitespace-pre-line text-slate-700 font-medium">
                    {renderTextWithTermPills(sec.content)}
                  </p>

                  {/* Comparison Table */}
                  {sec.comparisonTable && (
                    <div className="my-8 overflow-hidden rounded-2xl border border-slate-200/80 shadow-xs">
                      <p className="text-xs font-extrabold text-indigo-700 px-5 py-3 bg-indigo-50/80 border-b border-indigo-100 uppercase tracking-wider">
                        {sec.comparisonTable.title}
                      </p>
                      <table className="w-full text-left text-xs text-slate-800">
                        <thead className="bg-slate-100">
                          <tr>
                            {sec.comparisonTable.headers.map((h, hi) => (
                              <th key={hi} className="p-3.5 font-bold text-slate-900 whitespace-nowrap">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200/60">
                          {sec.comparisonTable.rows.map((row, ri) => (
                            <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                              {row.map((cell, ci) => (
                                <td
                                  key={ci}
                                  className={`p-3.5 whitespace-nowrap ${ci === 0 ? 'font-bold text-indigo-600' : 'text-slate-600 font-medium'}`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Bento Grid Presentation */}
                  {sec.bentoCards && sec.bentoCards.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                      {sec.bentoCards.map((bento, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-50 p-6 rounded-2xl border-l-4 shadow-xs"
                          style={{ borderColor: bento.borderColor }}
                        >
                          <h3 className="font-bold text-base text-slate-900 mb-2 flex items-center gap-2">
                            <span
                              className="material-symbols-outlined"
                              style={{ color: bento.borderColor }}
                            >
                              {bento.icon}
                            </span>
                            {bento.title}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed font-medium">
                            {bento.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Callout Box */}
                  {sec.callout && (
                    <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-6 my-8 flex gap-4 items-start border border-indigo-200/80 shadow-xs">
                      <div className="bg-indigo-600 text-white p-2.5 rounded-2xl shadow-md flex-shrink-0">
                        <span className="material-symbols-outlined">lightbulb</span>
                      </div>
                      <div>
                        <h3 className="font-extrabold text-base text-slate-900 mb-2">
                          {sec.callout.title}
                        </h3>
                        <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-700 font-medium marker:text-indigo-600">
                          {sec.callout.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        {sec.callout.note && (
                          <p className="text-xs text-indigo-700 font-bold mt-3 pt-2 border-t border-indigo-200/60">
                            {sec.callout.note}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Diagrams */}
                  {sec.diagram === 'organization-chart' && <div className="my-8"><OrganizationDiagrams /></div>}
                  {sec.diagram === 'network' && <div className="my-8"><NetworkDiagrams /></div>}
                  {sec.diagram === 'database' && <div className="my-8"><DatabaseDiagrams /></div>}
                  {sec.diagram === 'corporate-activities' && <div className="my-8"><CorporateActivitiesDiagrams /></div>}
                </section>
              ))}
            </div>

            {/* Action Area */}
            <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row gap-4 justify-between items-center">
              {onToggleComplete && (
                <button
                  onClick={() => onToggleComplete(article.id)}
                  className={`font-bold text-sm py-3 px-6 rounded-2xl transition-all flex items-center gap-2 cursor-pointer ${
                    isCompleted
                      ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  <span className="material-symbols-outlined">{isCompleted ? 'check_circle' : 'radio_button_unchecked'}</span>
                  {isCompleted ? '学習完了済み' : 'この章を完了にする'}
                </button>
              )}

              <button
                onClick={() => onStartQuiz(article.id)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm py-3.5 px-8 rounded-2xl shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2 active:scale-95 w-full sm:w-auto justify-center cursor-pointer"
              >
                <span className="material-symbols-outlined">smartphone</span>
                アプリで問題演習に挑戦
              </button>
            </div>
          </article>

          {/* Post Navigation */}
          <div className="mt-8 grid grid-cols-2 gap-6">
            {article.prevArticleTitle ? (
              <button
                onClick={() => {
                  if (article.prevArticleId) onSelectArticle(article.prevArticleId);
                }}
                className="group border border-slate-200/80 hover:border-indigo-400 bg-white p-5 rounded-2xl flex flex-col justify-center items-start transition-all cursor-pointer shadow-xs"
              >
                <span className="text-xs font-bold text-slate-400 mb-1 flex items-center gap-1 group-hover:text-indigo-600">
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span> 前の項目
                </span>
                <span className="font-extrabold text-sm text-slate-900 line-clamp-2">
                  {article.prevArticleTitle}
                </span>
              </button>
            ) : <div />}

            {article.nextArticleTitle ? (
              <button
                onClick={() => {
                  if (article.nextArticleId) onSelectArticle(article.nextArticleId);
                }}
                className="group border border-slate-200/80 hover:border-indigo-400 bg-white p-5 rounded-2xl flex flex-col justify-center items-end text-right transition-all cursor-pointer shadow-xs"
              >
                <span className="text-xs font-bold text-slate-400 mb-1 flex items-center gap-1 group-hover:text-indigo-600">
                  次の項目 <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </span>
                <span className="font-extrabold text-sm text-slate-900 line-clamp-2">
                  {article.nextArticleTitle}
                </span>
              </button>
            ) : <div />}
          </div>
        </main>

        {/* Right Sticky Table of Contents Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-[100px] glass-panel-light rounded-3xl p-6 shadow-xs border border-slate-200/80">
            <h3 className="font-black text-base text-slate-900 mb-4 pb-3 border-b border-slate-200/80 tracking-tight">
              章の目次
            </h3>
            <ul className="space-y-3 text-xs font-medium text-slate-600">
              {article.sections.map((sec) => {
                const isActive = activeSectionId === sec.id;
                return (
                  <li key={sec.id}>
                    <button
                      onClick={() => scrollToSection(sec.id)}
                      className={`hover:text-indigo-600 transition-colors flex items-start gap-2 text-left w-full cursor-pointer ${
                        isActive ? 'text-indigo-600 font-extrabold' : ''
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-[18px] mt-0.5 ${
                          isActive ? 'text-indigo-600' : 'text-slate-300'
                        }`}
                      >
                        {isActive ? 'adjust' : 'radio_button_unchecked'}
                      </span>
                      <span>{sec.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 pt-6 border-t border-slate-200/80">
              <h4 className="font-bold text-xs text-slate-400 uppercase tracking-widest mb-3">関連タグ</h4>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 px-3 py-1 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Term Modal Popup */}
      {activeTermModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setActiveTermModal(null)}
        >
          <div
            className="bg-white rounded-3xl p-7 max-w-md w-full shadow-2xl border border-slate-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveTermModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-extrabold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-lg uppercase tracking-wider">
                IT Term Card
              </span>
            </div>

            <h3 className="text-2xl font-black text-slate-900 mb-1">
              {activeTermModal.term}
            </h3>
            {activeTermModal.english && (
              <p className="text-xs text-slate-400 font-semibold mb-3">
                {activeTermModal.english} ({activeTermModal.reading})
              </p>
            )}

            <p className="text-sm text-slate-700 leading-relaxed font-medium mb-5 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              {activeTermModal.description}
            </p>

            {activeTermModal.examTip && (
              <div className="text-xs text-indigo-900 bg-indigo-50/80 border border-indigo-100 p-4 rounded-2xl flex items-start gap-2.5">
                <span className="material-symbols-outlined text-lg text-indigo-600 flex-shrink-0">
                  tips_and_updates
                </span>
                <span className="leading-relaxed"><strong>試験ポイント:</strong> {activeTermModal.examTip}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
