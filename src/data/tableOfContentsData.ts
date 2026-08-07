import { Chapter } from '../types';

export const TABLE_OF_CONTENTS: Chapter[] = [
  {
    id: 'ch1',
    number: 1,
    title: '企業活動',
    topics: [
      { id: 'ch1-t1', title: '企業活動', articleId: 'corporate-activities' },
      { id: 'ch1-t2', title: '企業の責任', articleId: 'corporate-responsibility' },
      { id: 'ch1-t3', title: '経営資源', articleId: 'management-resources' },
      { id: 'ch1-t4', title: '経営組織', articleId: 'organizational-structure' },
      { id: 'ch1-t5', title: '業務分析と業務計画', articleId: 'business-analysis-planning' },
      { id: 'ch1-t6', title: '経営者の意思決定と問題解決手法', articleId: 'decision-making-problem-solving' },
      { id: 'ch1-t7', title: '損益分岐点', articleId: 'break-even-point' },
      { id: 'ch1-t8', title: '財務諸表と5つの利益', articleId: 'financial-statements-five-profits' }
    ]
  },
  {
    id: 'ch2',
    number: 2,
    title: '法務',
    topics: [
      { id: 'ch2-t1', title: '3つの知的財産権', articleId: 'intellectual-property-basics' },
      { id: 'ch2-t2', title: '産業財産権とその他の権利', articleId: 'industrial-property-rights' },
      { id: 'ch2-t3', title: 'セキュリティ関連法規', articleId: 'security-related-laws' },
      { id: 'ch2-t4', title: '労働関連法規と取引関連法規', articleId: 'labor-employment-laws' },
      { id: 'ch2-t5', title: 'その他の法律', articleId: 'other-laws' },
      { id: 'ch2-t6', title: '標準化', articleId: 'standardization' }
    ]
  },
  {
    id: 'ch3',
    number: 3,
    title: '経営戦略マネジメント',
    topics: [
      { id: 'ch3-t1', title: '経営戦略とSWOT分析', articleId: 'management-strategy-swot' },
      { id: 'ch3-t2', title: 'PPM (Product Portfolio Management)', articleId: 'ppm-portfolio' },
      { id: 'ch3-t3', title: '経営戦略に関する重要用語', articleId: 'strategy-key-terms' },
      { id: 'ch3-t4', title: '事業戦略と経営管理システム', articleId: 'business-strategy-systems' },
      { id: 'ch3-t5', title: 'IT投資評価と財務指標', articleId: 'investment-evaluation-financial-metrics' }
    ]
  },
  {
    id: 'ch4',
    number: 4,
    title: '技術戦略マネジメント',
    topics: [
      { id: 'ch4-t1', title: '技術開発戦略の立案・技術開発計画', articleId: 'technology-development-strategy' },
      { id: 'ch4-t2', title: 'ビジネスシステム', articleId: 'business-systems' },
      { id: 'ch4-t3', title: 'エンジニアリングシステム', articleId: 'engineering-systems' },
      { id: 'ch4-t4', title: '生産管理の計算問題', articleId: 'production-management-calculations' },
      { id: 'ch4-t5', title: 'e-ビジネス', articleId: 'e-business' },
      { id: 'ch4-t6', title: 'IoTシステム・組込みシステム', articleId: 'iot-embedded-systems' }
    ]
  },
  {
    id: 'ch5',
    number: 5,
    title: 'システム戦略',
    topics: [
      { id: 'ch5-t1', title: '情報システム戦略', articleId: 'information-systems-strategy' },
      { id: 'ch5-t2', title: '業務プロセス', articleId: 'business-process' },
      { id: 'ch5-t3', title: '業務プロセスを改善する方法', articleId: 'business-process-improvement' },
      { id: 'ch5-t4', title: 'ソリューションビジネス', articleId: 'solution-business' },
      { id: 'ch5-t5', title: 'システムの活用促進と評価', articleId: 'system-promotion-evaluation' },
      { id: 'ch5-t6', title: 'システム企画', articleId: 'system-planning' },
      { id: 'ch5-t7', title: '企画プロセスと要件定義プロセス', articleId: 'planning-requirements' },
      { id: 'ch5-t8', title: '調達計画・実施', articleId: 'procurement-planning' }
    ]
  },
  {
    id: 'ch6',
    number: 6,
    title: '開発技術',
    topics: [
      { id: 'ch6-t1', title: 'システム開発技術', articleId: 'system-development-technology' },
      { id: 'ch6-t2', title: 'システム要件定義', articleId: 'system-requirements-definition' },
      { id: 'ch6-t3', title: 'システム設計', articleId: 'system-design' },
      { id: 'ch6-t4', title: 'プログラミング', articleId: 'programming' },
      { id: 'ch6-t5', title: 'テストとソフトウェア受入れ', articleId: 'testing-acceptance' },
      { id: 'ch6-t6', title: '運用プロセスと保守プロセス', articleId: 'operation-maintenance' },
      { id: 'ch6-t7', title: 'ソフトウェアの開発モデル', articleId: 'development-models' }
    ]
  },
  {
    id: 'ch7',
    number: 7,
    title: 'プロジェクトマネジメント',
    topics: [
      { id: 'ch7-t1', title: 'プロジェクトマネジメントと3つの制約', articleId: 'pm-three-constraints' },
      { id: 'ch7-t2', title: 'PMBOKとは', articleId: 'pmbok' },
      { id: 'ch7-t3', title: 'プロジェクトスケジュールマネジメント', articleId: 'schedule-management' },
      { id: 'ch7-t4', title: 'プロジェクト資源マネジメント', articleId: 'resource-management' },
      { id: 'ch7-t5', title: 'プロジェクトリスクマネジメント', articleId: 'risk-management' }
    ]
  },
  {
    id: 'ch8',
    number: 8,
    title: 'サービスマネジメントとシステム監査',
    topics: [
      { id: 'ch8-t1', title: 'サービスマネジメントとITIL', articleId: 'service-management-itil' },
      { id: 'ch8-t2', title: 'SLMと可用性管理', articleId: 'slm-availability' },
      { id: 'ch8-t3', title: 'サービスサポート', articleId: 'service-support' },
      { id: 'ch8-t4', title: 'ファシリティマネジメント', articleId: 'facility-management' },
      { id: 'ch8-t5', title: 'システム監査', articleId: 'system-audit' },
      { id: 'ch8-t6', title: '内部統制', articleId: 'internal-control' }
    ]
  },
  {
    id: 'ch9',
    number: 9,
    title: '基礎理論とアルゴリズム',
    topics: [
      { id: 'ch9-t1', title: '数値の数え方', articleId: 'number-systems' },
      { id: 'ch9-t2', title: '集合と論理演算', articleId: 'sets-logic' },
      { id: 'ch9-t3', title: 'データの単位', articleId: 'data-units' },
      { id: 'ch9-t4', title: 'データ構造', articleId: 'data-structures' },
      { id: 'ch9-t5', title: 'アルゴリズムとフローチャート', articleId: 'algorithms-flowcharts' },
      { id: 'ch9-t6', title: 'コンピュータ言語', articleId: 'computer-languages' },
      { id: 'ch9-t7', title: 'プログラミング① 基礎知識', articleId: 'programming-basics' },
      { id: 'ch9-t8', title: 'プログラミング② 選択処理と繰り返し処理', articleId: 'programming-conditionals-loops' },
      { id: 'ch9-t9', title: 'プログラミング③ 関数', articleId: 'programming-functions' }
    ]
  },
  {
    id: 'ch10',
    number: 10,
    title: 'コンピュータシステム',
    topics: [
      { id: 'ch10-t1', title: '処理形態によるシステムの分類', articleId: 'processing-types' },
      { id: 'ch10-t2', title: '利用形態やシステム構成による分類', articleId: 'usage-system-types' },
      { id: 'ch10-t3', title: 'ハードディスクの多重化（RAID）', articleId: 'raid' },
      { id: 'ch10-t4', title: 'システムの評価指標', articleId: 'evaluation-metrics' },
      { id: 'ch10-t5', title: 'システムの信頼性', articleId: 'reliability' },
      { id: 'ch10-t6', title: '直列システムと並列システム', articleId: 'series-parallel-systems' }
    ]
  },
  {
    id: 'ch11',
    number: 11,
    title: 'ハードウェア',
    topics: [
      { id: 'ch11-t1', title: 'コンピュータの種類', articleId: 'computer-types' },
      { id: 'ch11-t2', title: 'コンピュータの5つの役割', articleId: 'computer-five-roles' },
      { id: 'ch11-t3', title: '演算と制御', articleId: 'arithmetic-control' },
      { id: 'ch11-t4', title: '記憶', articleId: 'memory' },
      { id: 'ch11-t5', title: '入力と出力', articleId: 'input-output' },
      { id: 'ch11-t6', title: '入出力インタフェース', articleId: 'io-interface' }
    ]
  },
  {
    id: 'ch12',
    number: 12,
    title: 'ソフトウェア',
    topics: [
      { id: 'ch12-t1', title: 'OSの機能', articleId: 'os-functions' },
      { id: 'ch12-t2', title: 'データ管理とファイルシステム', articleId: 'file-system' },
      { id: 'ch12-t3', title: 'バックアップ', articleId: 'backup' },
      { id: 'ch12-t4', title: 'アプリケーションソフトウェア', articleId: 'application-software' },
      { id: 'ch12-t5', title: '情報デザインとソフトウェアの権利', articleId: 'information-design-software-rights' }
    ]
  },
  {
    id: 'ch13',
    number: 13,
    title: 'データベース',
    topics: [
      { id: 'ch13-t1', title: 'データベースの基本', articleId: 'database-basics' },
      { id: 'ch13-t2', title: '関係データベース', articleId: 'relational-database' },
      { id: 'ch13-t3', title: 'データベース設計', articleId: 'database-design' },
      { id: 'ch13-t4', title: 'データベース管理システムとSQL', articleId: 'dbms-sql' }
    ]
  },
  {
    id: 'ch14',
    number: 14,
    title: 'ネットワーク',
    topics: [
      { id: 'ch14-t1', title: 'LANとWAN', articleId: 'lan-wan' },
      { id: 'ch14-t2', title: 'ネットワーク機器', articleId: 'network-devices' },
      { id: 'ch14-t3', title: '通信プロトコル', articleId: 'communication-protocols' },
      { id: 'ch14-t4', title: 'インターネットの仕組み', articleId: 'internet-mechanism' },
      { id: 'ch14-t5', title: 'インターネットサービス', articleId: 'internet-services' }
    ]
  },
  {
    id: 'ch15',
    number: 15,
    title: '情報セキュリティ',
    topics: [
      { id: 'ch15-t1', title: '情報セキュリティの脅威', articleId: 'security-threats' },
      { id: 'ch15-t2', title: 'リスクマネジメント', articleId: 'security-risk-management' },
      { id: 'ch15-t3', title: '情報セキュリティマネジメント', articleId: 'security-management' },
      { id: 'ch15-t4', title: '暗号技術の基本', articleId: 'cryptography-basics' },
      { id: 'ch15-t5', title: 'デジタル署名と認証局', articleId: 'digital-signature-ca' },
      { id: 'ch15-t6', title: '脅威への対策', articleId: 'threat-countermeasures' }
    ]
  }
];
