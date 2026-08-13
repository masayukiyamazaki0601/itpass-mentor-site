import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import { ARTICLES_DATA } from '../data/articlesData';
import { OrganizationDiagrams } from './OrganizationDiagrams';
import { NetworkDiagrams } from './NetworkDiagrams';
import { 
  DatabaseBasicsStaticDiagram, 
  RelationalDbStaticDiagram, 
  DatabaseDesignStaticDiagram, 
  DbmsSqlStaticDiagram 
} from './DatabaseDiagrams';
import { CorporateActivitiesDiagrams } from './CorporateActivitiesDiagrams';
import { CompanyStructureDiagrams } from './CompanyStructureDiagrams';
import { DepartmentsDiagrams } from './DepartmentsDiagrams';
import { StakeholderDiagram } from './StakeholderDiagram';
import { ResponsibilityTermsDiagram } from './ResponsibilityTermsDiagram';
import { LectureView } from './LectureView';
import { ResourcesDiagram } from './ResourcesDiagram';
import { BusinessFlowDiagram } from './BusinessFlowDiagram';
import { SWOTDiagram } from './SWOTDiagram';
import { BreakEvenVisualDiagram } from './BreakEvenVisualDiagram';
import { FiveProfitsDiagram } from './FiveProfitsDiagram';
import { IPRightsDiagram } from './IPRightsDiagram';
import { IndustrialPropertyDiagram } from './IndustrialPropertyDiagram';
import { SecurityLawsDiagram } from './SecurityLawsDiagram';
import { ContractTypesDiagram } from './ContractTypesDiagram';
import { StandardizationDiagram } from './StandardizationDiagram';
import { StrategyHierarchyDiagram } from './StrategyHierarchyDiagram';
import { PPMMatrixDiagram } from './PPMMatrixDiagram';
import { GrowthStrategyDiagram } from './GrowthStrategyDiagram';
import { PortersStrategyDiagram } from './PortersStrategyDiagram';
import { STPDiagram } from './STPDiagram';
import { Marketing4PDiagram } from './Marketing4PDiagram';
import { ManagementSystemsDiagram } from './ManagementSystemsDiagram';
import { FinancialMetricsDiagram } from './FinancialMetricsDiagram';
import { InvestmentEvaluationDiagram } from './InvestmentEvaluationDiagram';
import { BicycleSWOTDiagram } from './BicycleSWOTDiagram';
import { CrossSWOTDiagram } from './CrossSWOTDiagram';
import { RNDStagesDiagram } from './RNDStagesDiagram';
import { TechDevToolsDiagram } from './TechDevToolsDiagram';
import { OSFunctionsDiagram } from './OSFunctionsDiagram';
import { OSInteractiveDiagram } from './OSInteractiveDiagram';
import { NetworkDevicesDiagram } from './NetworkDevicesDiagram';
import { SecurityCIADiagram } from './SecurityCIADiagram';
import { SecurityThreatsDiagram } from './SecurityThreatsDiagram';
import { BackupTypesDiagram } from './BackupTypesDiagram';
import { BackupInteractiveDiagram } from './BackupInteractiveDiagram';
import { FileSystemTreeDiagram } from './FileSystemTreeDiagram';
import { ProtocolDiagram } from './ProtocolDiagram';
import { EncryptionTypesDiagram } from './EncryptionTypesDiagram';
import { EncryptionInteractiveDiagram } from './EncryptionInteractiveDiagram';
import { DigitalSignatureDiagram } from './DigitalSignatureDiagram';
import { RiskManagementDiagram } from './RiskManagementDiagram';
import { ThreatCountermeasuresDiagram } from './ThreatCountermeasuresDiagram';
import { AppSoftwareDiagram } from './AppSoftwareDiagram';
import { InfoDesignDiagram } from './InfoDesignDiagram';
import { RndStepsDiagram, TechRoadmapDiagram } from './TechnologyDiagrams';
import { PaymentFlowDiagram, POSFlowDiagram } from './BusinessSystemDiagrams';
import { CADCAMFlowDiagram, ProductionCalcDiagram, EBusinessTypesDiagram, IoTCycleDiagram } from './Chapter4RemainingDiagrams';
import { EALayersDiagram, DFDFlowDiagram, CloudServicesDiagram, TCOIcebergDiagram, RFIRFPFlowDiagram } from './Chapter5Diagrams';
import { DevProcessFlowDiagram, CompilerVsInterpreterDiagram, TestingMethodsDiagram, OpMaintFlowDiagram, DevModelsComparisonDiagram } from './Chapter6Diagrams';
import { PMProcessCycleDiagram, WBSStructureDiagram, ScheduleGanttCpmDiagram, EarnedValueManagementDiagram } from './Chapter7Diagrams';
import { ITILLifecycleDiagram, SLAAvailabilityDiagram, ServiceSupportFlowDiagram, FacilityManagementDiagram, SystemAuditControlDiagram } from './Chapter8Diagrams';
import { NumberConversionDiagram, SetsLogicVennDiagram, DataUnitsScaleDiagram, QueueStackVisualDiagram, SearchAlgorithmsDiagram } from './Chapter9Diagrams';
import { ClientServerVisualDiagram, RaidVisualizationDiagram, ThroughputResponseTimeDiagram, SystemReliabilityCalcDiagram } from './Chapter10Diagrams';
import { ComputerArchitectureDiagram, CpuExecutionCycleDiagram, MemoryHierarchyDiagram, IoInterfacesPortsDiagram } from './Chapter11Diagrams';
import { OsLayerStaticDiagram, FileSystemTreeStaticDiagram, BackupTypesStaticDiagram, SoftwareLicenseStaticDiagram } from './Chapter12Diagrams';

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
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [article?.id]);

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
      if (article.title.includes(term)) {
        return;
      }
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
                className="inline-flex items-center gap-0.5 px-2 py-0.5 mx-1 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200/80 font-bold text-xs transition-all cursor-pointer shadow-xs"
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
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-sky-600 px-4 py-2 rounded-2xl hover:bg-sky-700 transition-colors"
          >
            目次に戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full max-w-full">
      <div className="flex flex-col gap-8">
        {/* Main Article Canvas */}
        <main className="flex-1 w-full max-w-3xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-4 font-semibold">
            <span onClick={onBackToToc} className="hover:text-sky-600 cursor-pointer">目次</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span>{article.breadcrumbPath[1]}</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-slate-900 font-bold">{article.breadcrumbPath[2]}</span>
          </nav>

          <article className="glass-card-light border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
            <header className="mb-8 border-b border-slate-200/80 pb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-sky-100 text-sky-700 px-3.5 py-1 rounded-xl text-xs font-extrabold inline-block border border-sky-200/60">
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
                    <span className="w-2 h-7 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full inline-block" />
                    {sec.title}
                  </h2>

                  {sec.lecture ? (
                    <LectureView meta={sec.lecture.meta} aim={sec.lecture.aim} blocks={sec.lecture.blocks} />
                  ) : (
                    <p className="mb-6 text-base leading-relaxed whitespace-pre-line text-slate-700 font-medium">
                      {renderTextWithTermPills(sec.content)}
                    </p>
                  )}

                  {/* Comparison Table */}
                  {sec.comparisonTable && (
                    <div className="my-8 overflow-hidden rounded-2xl border border-slate-200/80 shadow-xs">
                      <p className="text-xs font-extrabold text-sky-700 px-5 py-3 bg-sky-50/80 border-b border-sky-100 uppercase tracking-wider">
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
                                  className={`p-3.5 whitespace-nowrap ${ci === 0 ? 'font-bold text-sky-600' : 'text-slate-600 font-medium'}`}
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

                  {/* Callout / Callout2 Box (問Nの番号順で表示) SORT_TEST_MARKER */}
                  {(() => {
                    const boxes: { data: { title: string; items: string[]; note?: string }; kind: number }[] = [];
                    if (sec.callout) boxes.push({ data: sec.callout, kind: 0 });
                    if (sec.callout2) boxes.push({ data: sec.callout2, kind: 1 });
                    const qn = (title: string) => {
                      const m = title.match(/問(\d+)/);
                      return m ? parseInt(m[1], 10) : null;
                    };
                    boxes.sort((a, b) => {
                      const an = qn(a.data.title);
                      const bn = qn(b.data.title);
                      if (an != null && bn != null) return an - bn;
                      if (an != null) return -1;
                      if (bn != null) return 1;
                      return a.kind - b.kind;
                    });
                    return boxes.map((box, bi) => {
                      const isCallout2 = box.kind === 1;
                      return (
                        <div
                          key={bi}
                          className={
                            isCallout2
                              ? 'bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-2xl p-6 my-8 flex gap-4 items-start border border-emerald-200/80 shadow-xs'
                              : 'bg-gradient-to-r from-sky-50 via-blue-50 to-blue-100/60 rounded-2xl p-6 my-8 flex gap-4 items-start border border-sky-200/80 shadow-xs'
                          }
                        >
                          <div
                            className={
                              isCallout2
                                ? 'bg-emerald-600 text-white p-2.5 rounded-2xl shadow-md flex-shrink-0'
                                : 'bg-blue-600 text-white p-2.5 rounded-2xl shadow-md flex-shrink-0'
                            }
                          >
                            <span className="material-symbols-outlined">{isCallout2 ? 'quiz' : 'lightbulb'}</span>
                          </div>
                          <div>
                            <h3 className="font-extrabold text-base text-slate-900 mb-2">
                              {box.data.title}
                            </h3>
                            <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-700 font-medium marker:text-slate-500">
                              {box.data.items.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                            {box.data.note && (
                              <p className="text-xs text-slate-500 font-bold mt-3 pt-2 border-t border-slate-200/60">
                                {box.data.note}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    });
                  })()}

                  {/* Diagrams */}
                  {sec.diagram === 'organization-chart' && <div className="my-8"><OrganizationDiagrams /></div>}
                  {sec.diagram === 'network' && <div className="my-8"><NetworkDiagrams /></div>}
                  {sec.diagram === 'database-basics-static' && <div className="my-8"><DatabaseBasicsStaticDiagram /></div>}
                  {sec.diagram === 'relational-db-static' && <div className="my-8"><RelationalDbStaticDiagram /></div>}
                  {sec.diagram === 'database-design-static' && <div className="my-8"><DatabaseDesignStaticDiagram /></div>}
                  {sec.diagram === 'dbms-sql-static' && <div className="my-8"><DbmsSqlStaticDiagram /></div>}
                  {sec.diagram === 'corporate-activities' && <div className="my-8"><CorporateActivitiesDiagrams /></div>}
                  {sec.diagram === 'company-structure' && <div className="my-8"><CompanyStructureDiagrams /></div>}
                  {sec.diagram === 'departments' && <div className="my-8"><DepartmentsDiagrams /></div>}
                  {sec.diagram === 'stakeholder' && <div className="my-8"><StakeholderDiagram /></div>}
                  {sec.diagram === 'responsibility-terms' && <div className="my-8"><ResponsibilityTermsDiagram /></div>}
                  {sec.diagram === 'resources' && <div className="my-8"><ResourcesDiagram /></div>}
                  {sec.diagram === 'business-flow' && <div className="my-8"><BusinessFlowDiagram /></div>}
                  {sec.diagram === 'swot' && <div className="my-8"><SWOTDiagram /></div>}
                  {sec.diagram === 'break-even-visual' && <div className="my-8"><BreakEvenVisualDiagram /></div>}
                  {sec.diagram === 'five-profits-cascade' && <div className="my-8"><FiveProfitsDiagram /></div>}
                  {sec.diagram === 'ip-rights' && <div className="my-8"><IPRightsDiagram /></div>}
                  {sec.diagram === 'industrial-property' && <div className="my-8"><IndustrialPropertyDiagram /></div>}
                  {sec.diagram === 'security-laws' && <div className="my-8"><SecurityLawsDiagram /></div>}
                  {sec.diagram === 'contract-types' && <div className="my-8"><ContractTypesDiagram /></div>}
                  {sec.diagram === 'standardization-types' && <div className="my-8"><StandardizationDiagram /></div>}
                  {sec.diagram === 'strategy-hierarchy' && <div className="my-8"><StrategyHierarchyDiagram /></div>}
                  {sec.diagram === 'ppm-matrix' && <div className="my-8"><PPMMatrixDiagram /></div>}
                  {sec.diagram === 'growth-strategy' && <div className="my-8"><GrowthStrategyDiagram /></div>}
                  {sec.diagram === 'porters-strategy' && <div className="my-8"><PortersStrategyDiagram /></div>}
                  {sec.diagram === 'stp' && <div className="my-8"><STPDiagram /></div>}
                  {sec.diagram === 'marketing-4p' && <div className="my-8"><Marketing4PDiagram /></div>}
                  {sec.diagram === 'management-systems' && <div className="my-8"><ManagementSystemsDiagram /></div>}
                  {sec.diagram === 'financial-metrics' && <div className="my-8"><FinancialMetricsDiagram /></div>}
                  {sec.diagram === 'investment-evaluation' && <div className="my-8"><InvestmentEvaluationDiagram /></div>}
                  {sec.diagram === 'bicycle-swot' && <div className="my-8"><BicycleSWOTDiagram /></div>}
                  {sec.diagram === 'cross-swot' && <div className="my-8"><CrossSWOTDiagram /></div>}
                  {sec.diagram === 'rnd-stages' && <div className="my-8"><RNDStagesDiagram /></div>}
                  {sec.diagram === 'tech-dev-tools' && <div className="my-8"><TechDevToolsDiagram /></div>}
                  {sec.diagram === 'os-functions' && <div className="my-8"><OSFunctionsDiagram /></div>}
                  {sec.diagram === 'os-interactive' && <div className="my-8"><OSInteractiveDiagram /></div>}
                  {sec.diagram === 'network-devices' && <div className="my-8"><NetworkDevicesDiagram /></div>}
                  {sec.diagram === 'security-cia' && <div className="my-8"><SecurityCIADiagram /></div>}
                  {sec.diagram === 'security-threats' && <div className="my-8"><SecurityThreatsDiagram /></div>}
                  {sec.diagram === 'backup-types' && <div className="my-8"><BackupTypesDiagram /></div>}
                  {sec.diagram === 'backup-interactive' && <div className="my-8"><BackupInteractiveDiagram /></div>}
                  {sec.diagram === 'file-system-tree' && <div className="my-8"><FileSystemTreeDiagram /></div>}
                  {sec.diagram === 'protocol' && <div className="my-8"><ProtocolDiagram /></div>}
                  {sec.diagram === 'encryption-types' && <div className="my-8"><EncryptionTypesDiagram /></div>}
                  {sec.diagram === 'encryption-interactive' && <div className="my-8"><EncryptionInteractiveDiagram /></div>}
                  {sec.diagram === 'digital-signature' && <div className="my-8"><DigitalSignatureDiagram /></div>}
                  {sec.diagram === 'risk-management' && <div className="my-8"><RiskManagementDiagram /></div>}
                  {sec.diagram === 'threat-countermeasures' && <div className="my-8"><ThreatCountermeasuresDiagram /></div>}
                  {sec.diagram === 'app-software' && <div className="my-8"><AppSoftwareDiagram /></div>}
                  {sec.diagram === 'info-design' && <div className="my-8"><InfoDesignDiagram /></div>}
                  {sec.diagram === 'rnd-steps' && <div className="my-8"><RndStepsDiagram /></div>}
                  {sec.diagram === 'tech-roadmap' && <div className="my-8"><TechRoadmapDiagram /></div>}
                  {sec.diagram === 'payment-flow' && <div className="my-8"><PaymentFlowDiagram /></div>}
                  {sec.diagram === 'pos-flow' && <div className="my-8"><POSFlowDiagram /></div>}
                  {sec.diagram === 'cad-cam-flow' && <div className="my-8"><CADCAMFlowDiagram /></div>}
                  {sec.diagram === 'production-calc' && <div className="my-8"><ProductionCalcDiagram /></div>}
                  {sec.diagram === 'ebusiness-types' && <div className="my-8"><EBusinessTypesDiagram /></div>}
                  {sec.diagram === 'iot-cycle' && <div className="my-8"><IoTCycleDiagram /></div>}
                  {sec.diagram === 'ea-layers' && <div className="my-8"><EALayersDiagram /></div>}
                  {sec.diagram === 'dfd-flow' && <div className="my-8"><DFDFlowDiagram /></div>}
                  {sec.diagram === 'cloud-services' && <div className="my-8"><CloudServicesDiagram /></div>}
                  {sec.diagram === 'tco-iceberg' && <div className="my-8"><TCOIcebergDiagram /></div>}
                  {sec.diagram === 'rfi-rfp-flow' && <div className="my-8"><RFIRFPFlowDiagram /></div>}
                  {sec.diagram === 'dev-process-flow' && <div className="my-8"><DevProcessFlowDiagram /></div>}
                  {sec.diagram === 'compiler-vs-interpreter' && <div className="my-8"><CompilerVsInterpreterDiagram /></div>}
                  {sec.diagram === 'testing-methods' && <div className="my-8"><TestingMethodsDiagram /></div>}
                  {sec.diagram === 'op-maint-flow' && <div className="my-8"><OpMaintFlowDiagram /></div>}
                  {sec.diagram === 'dev-models-comparison' && <div className="my-8"><DevModelsComparisonDiagram /></div>}
                  {sec.diagram === 'pm-process-cycle' && <div className="my-8"><PMProcessCycleDiagram /></div>}
                  {sec.diagram === 'wbs-structure' && <div className="my-8"><WBSStructureDiagram /></div>}
                  {sec.diagram === 'schedule-gantt-cpm' && <div className="my-8"><ScheduleGanttCpmDiagram /></div>}
                  {sec.diagram === 'earned-value-management' && <div className="my-8"><EarnedValueManagementDiagram /></div>}
                  {sec.diagram === 'itil-lifecycle' && <div className="my-8"><ITILLifecycleDiagram /></div>}
                  {sec.diagram === 'sla-availability' && <div className="my-8"><SLAAvailabilityDiagram /></div>}
                  {sec.diagram === 'service-support-flow' && <div className="my-8"><ServiceSupportFlowDiagram /></div>}
                  {sec.diagram === 'facility-management' && <div className="my-8"><FacilityManagementDiagram /></div>}
                  {sec.diagram === 'system-audit-control' && <div className="my-8"><SystemAuditControlDiagram /></div>}
                  {sec.diagram === 'number-conversion' && <div className="my-8"><NumberConversionDiagram /></div>}
                  {sec.diagram === 'sets-logic-venn' && <div className="my-8"><SetsLogicVennDiagram /></div>}
                  {sec.diagram === 'data-units-scale' && <div className="my-8"><DataUnitsScaleDiagram /></div>}
                  {sec.diagram === 'queue-stack-visual' && <div className="my-8"><QueueStackVisualDiagram /></div>}
                  {sec.diagram === 'search-algorithms' && <div className="my-8"><SearchAlgorithmsDiagram /></div>}
                  {sec.diagram === 'client-server-visual' && <div className="my-8"><ClientServerVisualDiagram /></div>}
                  {sec.diagram === 'raid-visualization' && <div className="my-8"><RaidVisualizationDiagram /></div>}
                  {sec.diagram === 'throughput-response-time' && <div className="my-8"><ThroughputResponseTimeDiagram /></div>}
                  {sec.diagram === 'system-reliability-calc' && <div className="my-8"><SystemReliabilityCalcDiagram /></div>}
                  {sec.diagram === 'computer-architecture' && <div className="my-8"><ComputerArchitectureDiagram /></div>}
                  {sec.diagram === 'cpu-execution-cycle' && <div className="my-8"><CpuExecutionCycleDiagram /></div>}
                  {sec.diagram === 'memory-hierarchy' && <div className="my-8"><MemoryHierarchyDiagram /></div>}
                  {sec.diagram === 'io-interfaces-ports' && <div className="my-8"><IoInterfacesPortsDiagram /></div>}
                  {sec.diagram === 'os-layer-static' && <div className="my-8"><OsLayerStaticDiagram /></div>}
                  {sec.diagram === 'file-system-tree-static' && <div className="my-8"><FileSystemTreeStaticDiagram /></div>}
                  {sec.diagram === 'backup-types-static' && <div className="my-8"><BackupTypesStaticDiagram /></div>}
                  {sec.diagram === 'software-license-static' && <div className="my-8"><SoftwareLicenseStaticDiagram /></div>}
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
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-sm py-3.5 px-8 rounded-2xl shadow-lg shadow-sky-500/25 transition-all flex items-center gap-2 active:scale-95 w-full sm:w-auto justify-center cursor-pointer"
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
                className="group border border-slate-200/80 hover:border-sky-400 bg-white p-5 rounded-2xl flex flex-col justify-center items-start transition-all cursor-pointer shadow-xs"
              >
                <span className="text-xs font-bold text-slate-400 mb-1 flex items-center gap-1 group-hover:text-sky-600">
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
                className="group border border-slate-200/80 hover:border-sky-400 bg-white p-5 rounded-2xl flex flex-col justify-center items-end text-right transition-all cursor-pointer shadow-xs"
              >
                <span className="text-xs font-bold text-slate-400 mb-1 flex items-center gap-1 group-hover:text-sky-600">
                  次の項目 <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </span>
                <span className="font-extrabold text-sm text-slate-900 line-clamp-2">
                  {article.nextArticleTitle}
                </span>
              </button>
            ) : <div />}
          </div>
        </main>
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
              <span className="text-[10px] font-extrabold text-sky-600 bg-sky-50 border border-sky-100 px-2.5 py-0.5 rounded-lg uppercase tracking-wider">
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
              <div className="text-xs text-sky-900 bg-sky-50/80 border border-sky-100 p-4 rounded-2xl flex items-start gap-2.5">
                <span className="material-symbols-outlined text-lg text-sky-600 flex-shrink-0">
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
