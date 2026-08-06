import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import { ARTICLES_DATA } from '../data/articlesData';

interface StudyGuideViewProps {
  currentArticleId: string;
  onSelectArticle: (articleId: string) => void;
  onStartQuiz: (articleId: string) => void;
}

export const StudyGuideView: React.FC<StudyGuideViewProps> = ({
  currentArticleId,
  onSelectArticle,
  onStartQuiz
}) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSectionId, setActiveSectionId] = useState<string>('section-1');

  const article: Article =
    ARTICLES_DATA.find((a) => a.id === currentArticleId) || ARTICLES_DATA[0];

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        const scrolled = (winScroll / height) * 100;
        setReadingProgress(Math.min(100, Math.max(0, scrolled)));
      }

      // Detect active section based on scroll position
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

  return (
    <div className="flex-1 w-full max-w-full">
      {/* Sticky Reading Progress Bar */}
      <div className="fixed top-[64px] left-0 w-full h-[4px] bg-[#e2e8f0] z-40">
        <div
          className="h-full bg-[#00BFA5] transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Selector bar for articles if user wants to browse other study topics */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 bg-[#f0f3ff] p-3 rounded-xl border border-[#c3c6d0]/40">
        <span className="text-xs font-bold text-[#002b57] flex items-center gap-1.5">
          <span className="material-symbols-outlined text-base">topic</span>
          学習ガイド記事切り替え:
        </span>
        <div className="flex flex-wrap gap-2">
          {ARTICLES_DATA.map((art) => (
            <button
              key={art.id}
              onClick={() => onSelectArticle(art.id)}
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                art.id === article.id
                  ? 'bg-[#002b57] text-white shadow-xs font-semibold'
                  : 'bg-white text-[#43474f] hover:bg-[#dee8ff]'
              }`}
            >
              {art.title}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Article Canvas */}
        <main className="flex-1 w-full max-w-3xl">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#43474f] mb-4">
            <span className="hover:text-[#002b57] cursor-pointer">学習ガイド</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="hover:text-[#002b57] cursor-pointer">{article.breadcrumbPath[1]}</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#002b57] font-semibold">{article.breadcrumbPath[2]}</span>
          </nav>

          <article className="bg-white border border-[#c3c6d0]/60 rounded-xl p-6 md:p-8 shadow-xs">
            <header className="mb-8 border-b border-[#c3c6d0]/30 pb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#002b57]/10 text-[#002b57] px-3 py-1 rounded-full text-xs font-bold inline-block">
                  {article.categoryLabel}
                </span>
                <div className="flex items-center text-[#43474f] text-xs gap-1">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  <span>{article.readTime}</span>
                </div>
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-[#111c2c] mb-4 leading-tight">
                {article.title}
              </h1>
              <p className="text-base text-[#43474f] leading-relaxed">
                {article.summary}
              </p>
            </header>

            <div className="space-y-8 text-[#111c2c]">
              {article.sections.map((sec) => (
                <section key={sec.id} id={sec.id} className="scroll-mt-24">
                  <h2 className="text-xl font-bold text-[#002b57] mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-[#006b5c] rounded-full inline-block" />
                    {sec.title}
                  </h2>

                  <p className="mb-4 text-base leading-relaxed whitespace-pre-line text-[#43474f]">
                    {sec.content}
                  </p>

                  {/* Comparison Table */}
                  {sec.comparisonTable && (
                    <div className="my-6 overflow-x-auto bg-white rounded-lg border border-[#c3c6d0]/50 shadow-xs">
                      <p className="text-xs font-bold text-[#002b57] px-4 py-2.5 bg-[#f0f3ff] border-b border-[#c3c6d0]/40">
                        {sec.comparisonTable.title}
                      </p>
                      <table className="w-full text-left text-xs text-[#111c2c]">
                        <thead className="bg-[#dee8ff]">
                          <tr>
                            {sec.comparisonTable.headers.map((h, hi) => (
                              <th key={hi} className="p-3 font-bold text-[#002b57] whitespace-nowrap">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#c3c6d0]/30">
                          {sec.comparisonTable.rows.map((row, ri) => (
                            <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-[#f9f9ff]'}>
                              {row.map((cell, ci) => (
                                <td
                                  key={ci}
                                  className={`p-3 whitespace-nowrap ${ci === 0 ? 'font-bold text-[#006b5c]' : 'text-[#43474f]'}`}
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

                  {/* Visual Diagram based on type */}
                  {sec.diagram && (
                    <div className="my-6">
                      {sec.diagram === 'bs-pl' && (
                        <div className="bg-[#f9f9ff] border border-[#c3c6d0]/40 rounded-xl p-5">
                          <p className="text-xs font-bold text-[#002b57] mb-4 text-center">
                            財務諸表の全体像（B/S と P/L の関係）
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white rounded-lg border-2 border-[#3182CE] p-4">
                              <p className="text-xs font-extrabold text-[#3182CE] mb-3 text-center">貸借対照表（B/S）</p>
                              <p className="text-[10px] text-[#737780] text-center mb-2">「ある一時点」の状態</p>
                              <div className="space-y-1.5">
                                <div className="bg-[#3182CE]/10 rounded px-3 py-2 text-xs font-bold text-[#3182CE] flex justify-between">
                                  <span>資産（財産）</span><span>= 40</span>
                                </div>
                                <div className="bg-[#38A169]/10 rounded px-3 py-2 text-xs font-bold text-[#38A169] flex justify-between">
                                  <span>負債（借金）</span><span>= 15</span>
                                </div>
                                <div className="bg-[#D69E2E]/10 rounded px-3 py-2 text-xs font-bold text-[#D69E2E] flex justify-between">
                                  <span>純資産（資本）</span><span>= 25</span>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg border-2 border-[#38A169] p-4">
                              <p className="text-xs font-extrabold text-[#38A169] mb-3 text-center">損益計算書（P/L）</p>
                              <p className="text-[10px] text-[#737780] text-center mb-2">「一定期間」の流れ</p>
                              <div className="space-y-1.5">
                                <div className="bg-[#38A169]/10 rounded px-3 py-2 text-xs font-bold text-[#38A169]">収益（売上）= 100</div>
                                <div className="bg-rose-50 rounded px-3 py-2 text-xs font-bold text-rose-600">費用（コスト）= 80</div>
                                <div className="bg-emerald-50 rounded px-3 py-2 text-xs font-bold text-emerald-700">利益 = 20</div>
                              </div>
                            </div>
                          </div>
                          <p className="text-[10px] text-[#737780] mt-3 text-center">
                            ※ 資産 = 負債 + 純資産 というバランス（貸借）を表すのが B/S です
                          </p>
                        </div>
                      )}

                      {sec.diagram === 'five-profits' && (
                        <div className="bg-[#f0f3ff] border border-[#c3c6d0]/40 rounded-xl p-5">
                          <p className="text-xs font-bold text-[#002b57] mb-4 text-center">
                            5つの利益の段階計算フロー
                          </p>
                          <div className="flex flex-col items-center gap-1.5">
                            <div className="bg-white border border-[#3182CE] rounded-lg px-4 py-2.5 text-xs font-bold text-[#3182CE] text-center w-full max-w-xs">
                              売上総利益 = 売上高 − 売上原価
                            </div>
                            <span className="material-symbols-outlined text-[#737780] text-sm">arrow_downward</span>
                            <div className="bg-white border border-[#38A169] rounded-lg px-4 py-2.5 text-xs font-bold text-[#38A169] text-center w-full max-w-xs">
                              営業利益 = 売上総利益 − 販売費・一般管理費
                            </div>
                            <span className="material-symbols-outlined text-[#737780] text-sm">arrow_downward</span>
                            <div className="bg-white border border-[#D69E2E] rounded-lg px-4 py-2.5 text-xs font-bold text-[#D69E2E] text-center w-full max-w-xs">
                              経常利益 = 営業利益 ± 営業外損益
                            </div>
                            <span className="material-symbols-outlined text-[#737780] text-sm">arrow_downward</span>
                            <div className="bg-[#002b57] text-white rounded-lg px-4 py-2.5 text-xs font-extrabold text-center w-full max-w-xs shadow-xs">
                              当期純利益 = 税引前当期純利益 − 法人税等
                            </div>
                          </div>
                        </div>
                      )}

                      {sec.diagram === 'organization-chart' && (
                        <div className="bg-[#f0f3ff] border border-[#c3c6d0]/40 rounded-xl p-5">
                          <p className="text-xs font-bold text-[#002b57] mb-4 text-center">
                            組織形態の比較
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="bg-white border-2 border-[#3182CE] rounded-lg p-3 text-center">
                              <span className="material-symbols-outlined text-[#3182CE] text-lg block mb-1">precision_manufacturing</span>
                              <p className="text-[10px] font-extrabold text-[#3182CE]">機能別組織</p>
                              <p className="text-[9px] text-[#737780] mt-1">専門分野ごとに部門分割</p>
                            </div>
                            <div className="bg-white border-2 border-[#38A169] rounded-lg p-3 text-center">
                              <span className="material-symbols-outlined text-[#38A169] text-lg block mb-1">business</span>
                              <p className="text-[10px] font-extrabold text-[#38A169]">事業部制組織</p>
                              <p className="text-[9px] text-[#737780] mt-1">製品・地域で独立採算</p>
                            </div>
                            <div className="bg-white border-2 border-[#D69E2E] rounded-lg p-3 text-center">
                              <span className="material-symbols-outlined text-[#D69E2E] text-lg block mb-1">grid_view</span>
                              <p className="text-[10px] font-extrabold text-[#D69E2E]">マトリックス組織</p>
                              <p className="text-[9px] text-[#737780] mt-1">機能×事業の複合型</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Bento Grid Presentation if available */}
                  {sec.bentoCards && sec.bentoCards.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      {sec.bentoCards.map((bento, idx) => (
                        <div
                          key={idx}
                          className="bg-[#f0f3ff] p-5 rounded-lg border-l-4"
                          style={{ borderColor: bento.borderColor }}
                        >
                          <h3 className="font-bold text-base text-[#111c2c] mb-2 flex items-center gap-2">
                            <span
                              className="material-symbols-outlined"
                              style={{ color: bento.borderColor }}
                            >
                              {bento.icon}
                            </span>
                            {bento.title}
                          </h3>
                          <p className="text-sm text-[#43474f] leading-relaxed">
                            {bento.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Callout Box if available */}
                  {sec.callout && (
                    <div className="bg-[#dee8ff] rounded-xl p-5 my-6 flex gap-4 items-start shadow-xs border border-[#c3c6d0]/30">
                      <div className="bg-[#1a4173] text-[#8caee7] p-2 rounded-full flex-shrink-0">
                        <span className="material-symbols-outlined">lightbulb</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-[#1a4173] mb-2">
                          {sec.callout.title}
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-[#43474f] marker:text-[#002b57]">
                          {sec.callout.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        {sec.callout.note && (
                          <p className="mt-3 text-xs text-[#43474f] bg-white px-3 py-2 rounded border border-[#c3c6d0]/50">
                            {sec.callout.note}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Callout2 Box if available */}
                  {sec.callout2 && (
                    <div className="bg-[#68fadd]/30 rounded-xl p-5 my-6 flex gap-4 items-start shadow-xs border border-[#00BFA5]/40">
                      <div className="bg-[#007261] text-[#68fadd] p-2 rounded-full flex-shrink-0">
                        <span className="material-symbols-outlined">tips_and_updates</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-[#007261] mb-2">
                          {sec.callout2.title}
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-[#43474f] marker:text-[#007261]">
                          {sec.callout2.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Action Area */}
            <div className="mt-10 pt-6 border-t border-[#c3c6d0]/30 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => onStartQuiz(article.id)}
                className="bg-[#00BFA5] hover:bg-[#009a85] text-white font-label text-sm py-3.5 px-8 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2 active:scale-95 w-full sm:w-auto justify-center cursor-pointer font-bold"
              >
                <span className="material-symbols-outlined">smartphone</span>
                アプリで問題演習に挑戦
              </button>
            </div>
          </article>

          {/* Post Navigation */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            {article.prevArticleTitle ? (
              <button
                onClick={() => {
                  if (article.prevArticleId) onSelectArticle(article.prevArticleId);
                }}
                className="group border border-[#c3c6d0] hover:border-[#002b57] bg-white p-4 rounded-xl flex flex-col justify-center items-start transition-colors cursor-pointer text-left"
              >
                <span className="text-xs text-[#43474f] mb-1 flex items-center gap-1 group-hover:text-[#002b57]">
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span> 前の項目
                </span>
                <span className="font-bold text-sm text-[#111c2c] line-clamp-2">
                  {article.prevArticleTitle}
                </span>
              </button>
            ) : <div />}

            {article.nextArticleTitle ? (
              <button
                onClick={() => {
                  if (article.nextArticleId) onSelectArticle(article.nextArticleId);
                }}
                className="group border border-[#c3c6d0] hover:border-[#002b57] bg-white p-4 rounded-xl flex flex-col justify-center items-end text-right transition-colors cursor-pointer"
              >
                <span className="text-xs text-[#43474f] mb-1 flex items-center gap-1 group-hover:text-[#002b57]">
                  次の項目 <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </span>
                <span className="font-bold text-sm text-[#111c2c] line-clamp-2">
                  {article.nextArticleTitle}
                </span>
              </button>
            ) : <div />}
          </div>
        </main>

        {/* Right Sticky Table of Contents Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-[80px] bg-white border border-[#c3c6d0]/40 rounded-xl p-5 shadow-xs">
            <h3 className="font-bold text-base text-[#111c2c] mb-4 pb-2 border-b border-[#c3c6d0]/50">
              目次
            </h3>
            <ul className="space-y-3 text-xs text-[#43474f]">
              {article.sections.map((sec) => {
                const isActive = activeSectionId === sec.id;
                return (
                  <li key={sec.id}>
                    <button
                      onClick={() => scrollToSection(sec.id)}
                      className={`hover:text-[#002b57] transition-colors flex items-start gap-2 text-left w-full cursor-pointer ${
                        isActive ? 'text-[#002b57] font-bold' : ''
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-[18px] mt-0.5 ${
                          isActive ? 'text-[#006b5c]' : 'text-[#737780]'
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

            <div className="mt-6 pt-6 border-t border-[#c3c6d0]/30">
              <h4 className="font-bold text-sm text-[#111c2c] mb-3">関連学習タグ</h4>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#f0f3ff] px-2.5 py-1 rounded-full text-xs text-[#43474f] hover:bg-[#dee8ff] cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
