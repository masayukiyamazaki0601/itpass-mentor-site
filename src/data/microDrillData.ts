import { ReverseDrillQuestion, MatryoshkaTerm } from '../types';

export const MATRYOSHKA_DATABASE: Record<string, MatryoshkaTerm> = {
  bcp: {
    id: 'bcp',
    term: 'BCP',
    english: 'Business Continuity Plan',
    reading: '事業継続計画',
    shortDesc: '大地震やシステム大障害が起きても、企業の重要業務を中断させず早期復旧するための事前計画。',
    deepDive: 'BCPの目的は単なる「防災」ではなく、「事業を止めないこと」です。被害を最小限に抑えつつ、目標復旧時間（RTO）内に中核事業を再開させる手順をあらかじめ定めます。',
    relatedTermIds: ['rto', 'rpo', 'sla'],
    examPoint: '「防災計画との違い＝事業継続に特化している点」および「RTO（時間）/RPO（データ復旧点）」が頻出ポイント。'
  },
  rto: {
    id: 'rto',
    term: 'RTO',
    english: 'Recovery Time Objective',
    reading: '目標復旧時間',
    shortDesc: '障害発生後、中断した業務を「何時間（日数）以内に再開させるか」の目標時間。',
    deepDive: 'システムがダウンしてから復旧するまでの許容時間限界のこと。決済システムなどはRTO＝数分〜数時間が求められ、コストとトレードオフ関係にあります。',
    relatedTermIds: ['bcp', 'rpo'],
    examPoint: 'RTO＝「時間（Time）」の基準。RPO＝「データ量/過去の時点（Point）」の基準と区別する。'
  },
  rpo: {
    id: 'rpo',
    term: 'RPO',
    english: 'Recovery Point Objective',
    reading: '目標復旧時点',
    shortDesc: '障害発生時、「過去のどの時点までのデータ損失を許容するか」の目標基準。',
    deepDive: 'バックアップの頻度に直結します。例えば「24時間前のバックアップ」の場合、障害直前24時間分のデータは失われるため、RPO＝24時間となります。',
    relatedTermIds: ['bcp', 'rto'],
    examPoint: '「失われても許容できるデータの時間的範囲」として問われる。'
  },
  sla: {
    id: 'sla',
    term: 'SLA',
    english: 'Service Level Agreement',
    reading: 'サービスレベル合意書',
    shortDesc: 'ITサービスの提供者と利用者の間で、サービス品質の保証範囲や基準を明確に合意した契約。',
    deepDive: '「稼働率99.9%以上を保証」「障害一次回答を30分以内にする」など定量的ルールを定め、達成できなかった場合の返金条件等も規定します。',
    relatedTermIds: ['saas', 'bcp'],
    examPoint: 'SaaSやクラウドサービスの導入時に、サービスレベルを事前に明文化する手続き。'
  },
  saas: {
    id: 'saas',
    term: 'SaaS',
    english: 'Software as a Service',
    reading: 'サース',
    shortDesc: 'インターネット経由でソフトウェアの機能をそのまま利用できるクラウド形態。',
    deepDive: 'Google WorkspaceやSlack、Salesforceなどが代表例。自社でサーバーを構築・管理する必要がなく、月額課金で即利用できます。',
    relatedTermIds: ['paas', 'iaas', 'sla'],
    examPoint: 'PaaS（開発環境提供）、IaaS（インフラ提供）とのレイヤーの違いをしっかり整理する。'
  },
  paas: {
    id: 'paas',
    term: 'PaaS',
    english: 'Platform as a Service',
    reading: 'パース',
    shortDesc: 'アプリ開発に必要なデータベースやプログラミング実行環境（プラットフォーム）をクラウドで提供する形態。',
    deepDive: '開発者はOSやミドルウェアの運用コストをかけずに、コードの記述とアプリ構築に集中できます。',
    relatedTermIds: ['saas', 'iaas'],
    examPoint: '「開発環境・OSレベルまで事業者側が提供」がキーワード。'
  },
  iaas: {
    id: 'iaas',
    term: 'IaaS',
    english: 'Infrastructure as a Service',
    reading: 'アイアース',
    shortDesc: '仮想サーバーやネットワーク、ストレージなどの「インフラ」をクラウド上で自由に貸し出す形態。',
    deepDive: 'AWS EC2やGoogle Compute Engineなど。OSの選定やミドルウェア設定まで利用者が自由に行える高い自由度が特徴です。',
    relatedTermIds: ['paas', 'saas'],
    examPoint: '自由度は高いが、OSのセキュリティパッチ適用などは利用者の責任範囲となる。'
  }
};

export const REVERSE_DRILL_QUESTIONS: ReverseDrillQuestion[] = [
  {
    id: 'rd-1',
    targetTerm: 'BCP（事業継続計画）',
    category: 'strategy',
    questionText: '【逆引き問題】次のIT活用シナリオのうち、「BCP（事業継続計画）」の最も適切な実践例はどれですか？',
    options: [
      {
        id: 'opt-1',
        scenarioText: '大地震で本社データセンターが被災した際、別地域のバックアップ拠点へ即座にシステムを切り替え、3時間以内に受発注業務を再開した。',
        isCorrect: true,
        reason: '正解！非常時にも重要業務を中断させず、目標復旧時間（RTO）内に事業を再開する仕組みこそがBCPの真骨頂です。'
      },
      {
        id: 'opt-2',
        scenarioText: '毎週末に全社員のパソコンのセキュリティウイルススキャンを全自動で実行するルールを定めた。',
        isCorrect: false,
        reason: 'これは日常のセキュリティ運用ルールであり、事業継続（BCP）の計画ではありません。'
      },
      {
        id: 'opt-3',
        scenarioText: '業務効率化のため、紙の伝票作業をすべてRPA（ロボット作業自動化）に置き換えた。',
        isCorrect: false,
        reason: 'これはBPR（業務プロセス再設計）やRPAの事例であり、災害時の事業継続計画ではありません。'
      },
      {
        id: 'opt-4',
        scenarioText: '新規Webサイトのレスポンス速度を上げるため、画像の圧縮とサーバーのスペックアップを実施した。',
        isCorrect: false,
        reason: 'これはシステム性能最適化の取り組みであり、BCPではありません。'
      }
    ],
    explanation: 'BCP（Business Continuity Plan）は単なるデータのバックアップではなく、「予期せぬ大災害やトラブルが起きても会社の中核業務を止めない・即座に復旧させる」ための行動計画・体制のことです。'
  },
  {
    id: 'rd-2',
    targetTerm: 'SaaS（Software as a Service）',
    category: 'technology',
    questionText: '【逆引き問題】次のビジネスシーンのうち、「SaaS」の導入事例として最も当てはまるものはどれですか？',
    options: [
      {
        id: 'opt-1',
        scenarioText: '自社でサーバーやOSを購入・管理せず、ブラウザ経由でWeb版のチャットツールやオンライン表計算ソフトを全社に導入した。',
        isCorrect: true,
        reason: '正解！完成されたソフトウェア機能をクラウド経由で手軽に利用するのがSaaSの最大の特徴です。'
      },
      {
        id: 'opt-2',
        scenarioText: 'データセンター内に物理的なサーバーラックをレンタルし、自社専用のLinux OSをインストールして運用した。',
        isCorrect: false,
        reason: 'これはオンプレミスまたはハウジング（IaaS未満）の利用形態です。'
      },
      {
        id: 'opt-3',
        scenarioText: 'クラウド事業者が用意したプログラミング言語の実行環境を使って、自社独自のWebアプリをゼロから構築した。',
        isCorrect: false,
        reason: '開発環境・プラットフォームを利用しているため、これは「PaaS」の事例です。'
      },
      {
        id: 'opt-4',
        scenarioText: '社内ネットワークのルーター機器の設定変更を外部業者に委託した。',
        isCorrect: false,
        reason: 'これはアウトソーシング（業務委託）であり、クラウドサービス形態ではありません。'
      }
    ],
    explanation: 'SaaSは「ソフトウェアそのものをサービスとして提供」する形態です。Slack、Google Workspace、Salesforceなどが代表的です。'
  },
  {
    id: 'rd-3',
    targetTerm: 'RTO（目標復旧時間）',
    category: 'management',
    questionText: '【逆引き問題】次のシステム運用のうち、「RTO（目標復旧時間）」を設定・管理している事例はどれですか？',
    options: [
      {
        id: 'opt-1',
        scenarioText: 'オンライン銀行システムで事故が起きた場合、「発生から遅くとも4時間以内に取引機能を全復旧させる」という時間ルールを定めた。',
        isCorrect: true,
        reason: '正解！「何時間（いつ）までに復旧させるか」という時間的限界目標がRTOです。'
      },
      {
        id: 'opt-2',
        scenarioText: 'データバックアップを毎日深夜2時に実施し、「最悪でも前日深夜時点のデータ状態までは戻せる」ようにした。',
        isCorrect: false,
        reason: '「どの時点（データ量）まで戻せるか」という基準は「RPO（目標復旧時点）」です。'
      },
      {
        id: 'opt-3',
        scenarioText: '新システム開発の総合テスト工程の完了予定日を来月30日に設定した。',
        isCorrect: false,
        reason: 'これはプロジェクトの納期・スケジューリングであり、トラブル発生時のRTOではありません。'
      },
      {
        id: 'opt-4',
        scenarioText: 'サーバーのCPU使用率が80%を超えたら管理者に警告メールが送信されるようにした。',
        isCorrect: false,
        reason: 'これはシステムアラート・監視設定の事例です。'
      }
    ],
    explanation: 'RTO（Recovery Time Objective）は時間（Time）に焦点を当てた復旧目標時間です。データ量に焦点を当てたRPO（Recovery Point Objective）との違いをしっかり把握しましょう。'
  }
];
