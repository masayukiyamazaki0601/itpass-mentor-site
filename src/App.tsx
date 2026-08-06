import React, { useState, useEffect } from 'react';
import { MainNavTab, CategoryKey, UserProgress } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { StudyGuideView } from './components/StudyGuideView';
import { GlossaryView } from './components/GlossaryView';
import { ExamOverviewView } from './components/ExamOverviewView';
import { QuizModal } from './components/QuizModal';
import { StatsModal } from './components/StatsModal';
import { ARTICLES_DATA } from './data/articlesData';

const INITIAL_PROGRESS: UserProgress = {
  completedArticles: [],
  bookmarkedTermIds: ['api', 'dns', 'copyright'],
  quizScores: {},
  totalQuestionsAnswered: 8,
  correctQuestionsAnswered: 6,
  categoryProgress: {
    strategy: 65,
    management: 42,
    technology: 80
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState<MainNavTab>('home');
  const [selectedCategories, setSelectedCategories] = useState<CategoryKey[]>([
    'strategy',
    'management',
    'technology'
  ]);
  const [currentArticleId, setCurrentArticleId] = useState<string>('copyright-law-basics');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Quiz Modal State
  const [isQuizModalOpen, setIsQuizModalOpen] = useState<boolean>(false);
  const [targetQuizArticleId, setTargetQuizArticleId] = useState<string | undefined>();

  // Stats Modal State
  const [isStatsModalOpen, setIsStatsModalOpen] = useState<boolean>(false);

  // User Progress & Bookmarks with localStorage persistence
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem('it_passport_progress');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_PROGRESS;
  });

  useEffect(() => {
    try {
      localStorage.setItem('it_passport_progress', JSON.stringify(userProgress));
    } catch {
      // ignore
    }
  }, [userProgress]);

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

  // Toggle Term Bookmark
  const handleToggleBookmark = (termId: string) => {
    setUserProgress((prev) => {
      const exists = prev.bookmarkedTermIds.includes(termId);
      const updated = exists
        ? prev.bookmarkedTermIds.filter((id) => id !== termId)
        : [...prev.bookmarkedTermIds, termId];
      return { ...prev, bookmarkedTermIds: updated };
    });
  };

  // Global Search Handler
  const handleGlobalSearch = (query: string) => {
    setSearchQuery(query);
    setActiveTab('glossary');
  };

  // Select category article from Home
  const handleSelectCategoryArticle = (category: CategoryKey) => {
    const art = ARTICLES_DATA.find((a) => a.category === category) || ARTICLES_DATA[0];
    setCurrentArticleId(art.id);
    setActiveTab('study-guide');
  };

  // Start Quiz Handler
  const handleStartQuiz = (articleId?: string) => {
    setTargetQuizArticleId(articleId || currentArticleId);
    setIsQuizModalOpen(true);
  };

  // Quiz Finished Handler
  const handleQuizCompleted = (scorePercentage: number) => {
    setUserProgress((prev) => {
      const currentCatProgress = { ...prev.categoryProgress };
      if (scorePercentage >= 60) {
        currentCatProgress.strategy = Math.min(100, currentCatProgress.strategy + 5);
        currentCatProgress.management = Math.min(100, currentCatProgress.management + 5);
        currentCatProgress.technology = Math.min(100, currentCatProgress.technology + 5);
      }
      return {
        ...prev,
        totalQuestionsAnswered: prev.totalQuestionsAnswered + 3,
        correctQuestionsAnswered:
          prev.correctQuestionsAnswered + Math.round((scorePercentage / 100) * 3),
        categoryProgress: currentCatProgress
      };
    });
  };

  const handleResetProgress = () => {
    setUserProgress(INITIAL_PROGRESS);
    localStorage.removeItem('it_passport_progress');
    setIsStatsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9ff] text-[#111c2c] font-sans antialiased">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSearch={handleGlobalSearch}
        toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* Main Body Container */}
      <div className="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-6 py-6 flex gap-6">
        {/* Navigation Drawer / Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedCategories={selectedCategories}
          onToggleCategory={handleToggleCategory}
          isMobileOpen={isMobileMenuOpen}
          onCloseMobile={() => setIsMobileMenuOpen(false)}
          onOpenStatsModal={() => setIsStatsModalOpen(true)}
        />

        {/* Dynamic View Canvas */}
        <main className="flex-1 min-w-0">
          {activeTab === 'home' && (
            <HomeView
              setActiveTab={setActiveTab}
              onSearch={handleGlobalSearch}
              onStartQuiz={handleStartQuiz}
              onSelectCategoryArticle={handleSelectCategoryArticle}
              userProgress={userProgress}
              onOpenStatsModal={() => setIsStatsModalOpen(true)}
            />
          )}

          {activeTab === 'study-guide' && (
            <StudyGuideView
              currentArticleId={currentArticleId}
              onSelectArticle={(id) => setCurrentArticleId(id)}
              onStartQuiz={handleStartQuiz}
            />
          )}

          {activeTab === 'glossary' && (
            <GlossaryView
              selectedCategories={selectedCategories}
              searchQuery={searchQuery}
              bookmarkedIds={userProgress.bookmarkedTermIds}
              onToggleBookmark={handleToggleBookmark}
            />
          )}

          {activeTab === 'exam-overview' && (
            <ExamOverviewView
              setActiveTab={setActiveTab}
              onStartQuiz={() => handleStartQuiz()}
            />
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Interactive Quiz Modal */}
      <QuizModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
        targetArticleId={targetQuizArticleId}
        onQuizCompleted={handleQuizCompleted}
      />

      {/* Detailed Progress Stats Modal */}
      <StatsModal
        isOpen={isStatsModalOpen}
        onClose={() => setIsStatsModalOpen(false)}
        userProgress={userProgress}
        onResetProgress={handleResetProgress}
      />
    </div>
  );
}
