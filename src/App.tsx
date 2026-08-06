import React, { useState } from 'react';
import { MainNavTab, CategoryKey } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { StudyGuideView } from './components/StudyGuideView';
import { GlossaryView } from './components/GlossaryView';
import { ExamOverviewView } from './components/ExamOverviewView';
import { QuizModal } from './components/QuizModal';
import { TableOfContentsView } from './components/TableOfContentsView';
import { ARTICLES_DATA } from './data/articlesData';

export default function App() {
  const [activeTab, setActiveTab] = useState<MainNavTab>('home');
  const [selectedCategories, setSelectedCategories] = useState<CategoryKey[]>([
    'strategy',
    'management',
    'technology'
  ]);
  const [currentArticleId, setCurrentArticleId] = useState<string>('corporate-activities-basics');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // App Promotion Modal State
  const [isAppModalOpen, setIsAppModalOpen] = useState<boolean>(false);

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
    setActiveTab('glossary');
  };

  // Select category article from Home
  const handleSelectCategoryArticle = (category: CategoryKey) => {
    const art = ARTICLES_DATA.find((a) => a.category === category) || ARTICLES_DATA[0];
    setCurrentArticleId(art.id);
    setActiveTab('study-guide');
  };

  // Open App Promotion Modal
  const handleOpenAppModal = () => {
    setIsAppModalOpen(true);
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
          onOpenAppModal={handleOpenAppModal}
        />

        {/* Dynamic View Canvas */}
        <main className="flex-1 min-w-0">
          {activeTab === 'home' && (
            <HomeView
              setActiveTab={setActiveTab}
              onSearch={handleGlobalSearch}
              onStartQuiz={handleOpenAppModal}
              onSelectCategoryArticle={handleSelectCategoryArticle}
            />
          )}

          {activeTab === 'table-of-contents' && (
            <TableOfContentsView setActiveTab={setActiveTab} />
          )}

          {activeTab === 'study-guide' && (
            <StudyGuideView
              currentArticleId={currentArticleId}
              onSelectArticle={(id) => setCurrentArticleId(id)}
              onStartQuiz={handleOpenAppModal}
            />
          )}

          {activeTab === 'glossary' && (
            <GlossaryView
              selectedCategories={selectedCategories}
              searchQuery={searchQuery}
              bookmarkedIds={[]}
              onToggleBookmark={() => {}}
            />
          )}

          {activeTab === 'exam-overview' && (
            <ExamOverviewView
              setActiveTab={setActiveTab}
              onStartQuiz={handleOpenAppModal}
            />
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* App Promotion Modal */}
      <QuizModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        targetArticleId={undefined}
      />
    </div>
  );
}