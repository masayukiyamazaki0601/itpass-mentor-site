export type MainNavTab = 'home' | 'table-of-contents' | 'glossary' | 'exam-overview';

export interface ChapterTopic {
  id: string;
  title: string;
  articleId?: string;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  topics: ChapterTopic[];
}

export type CategoryKey = 'strategy' | 'management' | 'technology';

export interface GlossaryTerm {
  id: string;
  term: string;
  english?: string;
  reading?: string;
  category: CategoryKey;
  categoryLabel: string;
  indexGroup: string; // 'A', 'B', 'C', 'あ行', 'か行', etc.
  description: string;
  examTip?: string;
  bookmarked?: boolean;
}

export interface ArticleSection {
  id: string;
  title: string;
  content: string;
  bentoCards?: {
    title: string;
    icon: string;
    borderColor: string;
    description: string;
  }[];
  callout?: {
    title: string;
    items: string[];
    note?: string;
  };
  callout2?: {
    title: string;
    items: string[];
    note?: string;
  };
  comparisonTable?: {
    title: string;
    headers: string[];
    rows: string[][];
  };
  diagram?: 'bs-pl' | 'five-profits' | 'break-even' | 'organization-chart' | 'process-visualization';
}

export interface Article {
  id: string;
  title: string;
  category: CategoryKey;
  categoryLabel: string;
  readTime: string;
  summary: string;
  breadcrumbPath: string[];
  sections: ArticleSection[];
  tags: string[];
  prevArticleId?: string;
  prevArticleTitle?: string;
  nextArticleId?: string;
  nextArticleTitle?: string;
}

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  articleId?: string;
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
  category: CategoryKey;
}

export interface UserProgress {
  completedArticles: string[];
  bookmarkedTermIds: string[];
  quizScores: { [quizId: string]: number }; // quizId -> percentage score
  totalQuestionsAnswered: number;
  correctQuestionsAnswered: number;
  categoryProgress: {
    strategy: number; // 0 - 100
    management: number; // 0 - 100
    technology: number; // 0 - 100
  };
}
