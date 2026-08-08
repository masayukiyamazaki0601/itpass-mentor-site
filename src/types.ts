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
  diagram?: 'bs-pl' | 'five-profits' | 'break-even' | 'organization-chart' | 'process-visualization' | 'ppm-matrix' | 'strategy-hierarchy' | 'rnd-steps' | 'tech-roadmap' | 'payment-flow' | 'pos-flow' | 'cad-cam-flow' | 'production-calc' | 'ebusiness-types' | 'iot-cycle' | 'ea-layers' | 'dfd-flow' | 'cloud-services' | 'tco-iceberg' | 'rfi-rfp-flow' | 'dev-process-flow' | 'compiler-vs-interpreter' | 'testing-methods' | 'op-maint-flow' | 'dev-models-comparison' | 'pm-process-cycle' | 'wbs-structure' | 'schedule-gantt-cpm' | 'earned-value-management' | 'itil-lifecycle' | 'sla-availability' | 'service-support-flow' | 'facility-management' | 'system-audit-control' | 'number-conversion' | 'sets-logic-venn' | 'data-units-scale' | 'queue-stack-visual' | 'search-algorithms' | 'client-server-visual' | 'raid-visualization' | 'throughput-response-time' | 'system-reliability-calc' | 'computer-architecture' | 'cpu-execution-cycle' | 'memory-hierarchy' | 'io-interfaces-ports' | 'os-layer-visual' | 'file-system-tree' | 'backup-types-visual' | 'software-license-types' | 'network' | 'database' | 'corporate-activities' | 'company-structure' | 'departments' | 'stakeholder' | 'resources' | 'business-flow' | 'swot' | 'break-even-visual' | 'five-profits-cascade' | 'ip-rights' | 'industrial-property' | 'security-laws' | 'contract-types' | 'standardization-types' | 'growth-strategy' | 'porters-strategy' | 'stp' | 'marketing-4p' | 'management-systems' | 'financial-metrics' | 'investment-evaluation' | 'bicycle-swot' | 'cross-swot' | 'rnd-stages' | 'tech-dev-tools' | 'os-functions' | 'network-devices' | 'security-cia' | 'security-threats';
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

export interface ReverseDrillQuestion {
  id: string;
  targetTerm: string;
  category: CategoryKey;
  questionText: string;
  options: {
    id: string;
    scenarioText: string;
    isCorrect: boolean;
    reason: string;
  }[];
  explanation: string;
}

export interface MatryoshkaTerm {
  id: string;
  term: string;
  english?: string;
  reading?: string;
  shortDesc: string;
  deepDive: string;
  relatedTermIds?: string[];
  examPoint: string;
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
