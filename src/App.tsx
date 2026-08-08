import React, { useState } from 'react';
import { MainNavTab, CategoryKey } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ArticleReader } from './components/ArticleReader';
import { GlossaryView } from './components/GlossaryView';
import { ExamOverviewView } from './components/ExamOverviewView';
import { QuizModal } from './components/QuizModal';
import { TableOfContentsView } from './components/TableOfContentsView';
import { MatryoshkaPopup } from './components/MatryoshkaPopup';
import { ReverseDrillModal } from './components/ReverseDrillModal';
import { ARTICLES_DATA } from './data/articlesData';

export default function App() {
  const [activeTab, setActiveTab] = useState<MainNavTab>('home');
  const [selectedCategories, setSelectedCategories] = useState<CategoryKey[]>([
    'strategy',
    'management',
    'technology'
  ]);
  const [currentArticleId, setCurrentArticleId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // App Promotion Modal State
  const [isAppModalOpen, setIsAppModalOpen] = useState<boolean>(false);
  const [isReverseDrillOpen, setIsReverseDrillOpen] = useState<boolean>(false);
  const [matryoshkaTermId, setMatryoshkaTermId] = useState<string | null>(null);

  // LocalStorage User Progress State
  const [completedArticles, setCompletedArticles] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('itp_completed_articles');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('itp_bookmarked_ids');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persist completed articles
  const handleToggleArticleComplete = (articleId: string) => {
    setCompletedArticles((prev) => {
      const next = prev.includes(articleId)
        ? prev.filter((id) => id !== articleId)
        : [...prev, articleId];
      try {
        localStorage.setItem('itp_completed_articles', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  // Persist bookmarks
  const handleToggleBookmark = (termId: string) => {
    setBookmarkedIds((prev) => {
      const next = prev.includes(termId)
        ? prev.filter((id) => id !== termId)
        : [...prev, termId];
      try {
        localStorage.setItem('itp_bookmarked_ids', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  // Toggle Category Checkboxes
  const handleToggleCategory = (category: CategoryKey) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        if (prev.length === 1) return prev; // keep at least 1
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  // Global Search Handler
  const handleGlobalSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentArticleId(null);
    setActiveTab('glossary');
  };

  // Navigate to a main tab (closes article reader)
  const handleNavigate = (tab: MainNavTab) => {
    setCurrentArticleId(null);
    setActiveTab(tab);
  };

  // Select category article from Home
  const handleSelectCategoryArticle = (category: CategoryKey) => {
    const art = ARTICLES_DATA.find((a) => a.category === category) || ARTICLES_DATA[0];
    if (art) {
      setCurrentArticleId(art.id);
    }
  };

  // Open App Promotion Modal
  const handleOpenAppModal = () => {
    setIsAppModalOpen(true);
  };

  const handleOpenReverseDrill = () => {
    setIsReverseDrillOpen(true);
  };

  const handleOpenMatryoshka = (termId: string = 'bcp') => {
    setMatryoshkaTermId(termId);
  };

  const isReadingArticle = currentArticleId !== null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white relative overflow-hidden font-sans">
      {/* Light Ambient Gradient Accents */}
      <div className="fixed top-[-10%] left-[-5%] w-[550px] h-[550px] rounded-full bg-sky-200/40 blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[550px] h-[550px] rounded-full bg-cyan-200/40 blur-[130px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="fixed top-[40%] right-[15%] w-[350px] h-[350px] rounded-full bg-blue-200/30 blur-[110px] pointer-events-none" />

      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onSearch={handleGlobalSearch}
        toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* Main Body Container */}
      <div className="flex-1 w-full max-w-[1280px] mx-auto px-4 md:px-8 py-8 flex gap-8 z-10 relative">
        {/* Navigation Drawer / Sidebar */}
        {!isReadingArticle && (
          <Sidebar
            activeTab={activeTab}
            setActiveTab={handleNavigate}
            selectedCategories={selectedCategories}
            onToggleCategory={handleToggleCategory}
            isMobileOpen={isMobileMenuOpen}
            onCloseMobile={() => setIsMobileMenuOpen(false)}
            onOpenAppModal={handleOpenAppModal}
          />
        )}

        {/* Dynamic View Canvas */}
        <main className="flex-1 min-w-0">
          {isReadingArticle ? (
            <ArticleReader
              currentArticleId={currentArticleId}
              onSelectArticle={(id) => setCurrentArticleId(id)}
              onStartQuiz={handleOpenAppModal}
              onBackToToc={() => handleNavigate('table-of-contents')}
              completedArticles={completedArticles}
              onToggleComplete={handleToggleArticleComplete}
            />
          ) : (
            <>
              {activeTab === 'home' && (
                <HomeView
                  setActiveTab={handleNavigate}
                  onSearch={handleGlobalSearch}
                  onStartQuiz={handleOpenAppModal}
                  onSelectCategoryArticle={handleSelectCategoryArticle}
                  completedArticles={completedArticles}
                />
              )}

              {activeTab === 'table-of-contents' && (
                <TableOfContentsView
                  setActiveTab={handleNavigate}
                  onSelectArticle={(id) => setCurrentArticleId(id)}
                  completedArticles={completedArticles}
                  onToggleComplete={handleToggleArticleComplete}
                />
              )}

              {activeTab === 'glossary' && (
                <GlossaryView
                  selectedCategories={selectedCategories}
                  searchQuery={searchQuery}
                  bookmarkedIds={bookmarkedIds}
                  onToggleBookmark={handleToggleBookmark}
                />
              )}

              {activeTab === 'exam-overview' && (
                <ExamOverviewView
                  setActiveTab={handleNavigate}
                  onStartQuiz={handleOpenAppModal}
                />
              )}
            </>
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer setActiveTab={handleNavigate} />

      {/* App Promotion Modal */}
      <QuizModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        targetArticleId={undefined}
      />
    </div>
  );
}
