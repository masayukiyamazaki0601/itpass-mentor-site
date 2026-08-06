import { GlossaryTerm } from '../types';

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'api',
    term: 'API',
    english: 'Application Programming Interface',
    reading: 'エーピーアイ',
    category: 'technology',
    categoryLabel: 'テクノロジ系',
    indexGroup: 'A',
    description: 'ソフトウェアやプログラム、Webサービスの間を繋ぐインターフェースのこと。自分のソフトウェアに他のソフトウェアの機能を埋め込むことができるようになる。',
    examTip: '外部サービスとの連携やマイナンバー連携など、現代のWebサービス構築に欠かせない技術として頻出。'
  },
  {
    id: 'agile',
    term: 'Agile',
    english: 'Agile Development',
    reading: 'アジャイル',
    category: 'management',
    categoryLabel: 'マネジメント系',
    indexGroup: 'A',
    description: 'ソフトウェア開発手法の一つ。短い開発期間（スプリント）を反復し、要件変更に柔軟に対応しながら少しずつシステムを作り上げていく手法。',
    examTip: '対比される「ウォーターフォールモデル」との特徴の違い（ドキュメント重視 vs 動くソフトウェア重視）を押さえましょう。'
  },
  {
    id: 'bandwidth',
    term: 'Bandwidth',
    english: 'Bandwidth',
    reading: '帯域幅（たいいきはば）',
    category: 'technology',
    categoryLabel: 'テクノロジ系',
    indexGroup: 'B',
    description: '通信回線のデータ伝送容量を示す指標。一定時間内にどれだけのデータを送受信できるかを表し、一般に「回線の太さ」と表現される。',
    examTip: 'bps（bits per second）という単位とともに、スループットやレイテンシとの用語整理が重要です。'
  },
  {
    id: 'bcp',
    term: 'BCP',
    english: 'Business Continuity Plan',
    reading: '事業継続計画（じぎょうけいぞくけいかく）',
    category: 'strategy',
    categoryLabel: 'ストラテジ系',
    indexGroup: 'B',
    description: '自然災害やシステム障害などの緊急事態が発生した際、事業を中断させない、または早期復旧させるための計画。',
    examTip: 'BCM（事業継続マネジメント）やRTO（目標復旧時間）などの関連指標と合わせて出題されます。'
  },
  {
    id: 'crm',
    term: 'CRM',
    english: 'Customer Relationship Management',
    reading: '顧客関係管理（こきゃくかんけいかんり）',
    category: 'strategy',
    categoryLabel: 'ストラテジ系',
    indexGroup: 'C',
    description: '顧客との関係性を構築・管理し、顧客満足度やLTV（顧客生涯価値）を向上させる手法またはITシステム。',
    examTip: 'SFA（営業支援システム）やERP（企業資源計画）との違いを明確にしておきましょう。'
  },
  {
    id: 'cookie',
    term: 'Cookie',
    english: 'HTTP Cookie',
    reading: 'クッキー',
    category: 'technology',
    categoryLabel: 'テクノロジ系',
    indexGroup: 'C',
    description: 'WebブラウザとWebサーバー間で状態情報（ログイン状態やカート情報など）を保持するための小さなデータファイル。',
    examTip: 'プライバシー保護の観点（サードパーティCookieの規制）やセッション管理でよく問われます。'
  },
  {
    id: 'dns',
    term: 'DNS',
    english: 'Domain Name System',
    reading: 'ディーエヌエス',
    category: 'technology',
    categoryLabel: 'テクノロジ系',
    indexGroup: 'D',
    description: '「example.com」のようなドメイン名と、ネットワーク上の「192.0.2.1」のようなIPアドレスを相互に変換（名前解決）するシステム。',
    examTip: '電話帳に例えられるシステムで、DNSキャッシュポイズニングなどの攻撃手法も併せて出題されます。'
  },
  {
    id: 'ip-address',
    term: 'IP Address',
    english: 'Internet Protocol Address',
    reading: 'アイピーアドレス',
    category: 'technology',
    categoryLabel: 'テクノロジ系',
    indexGroup: 'I',
    description: 'ネットワークに接続されたコンピューターや機器を識別するために割り振られる重複しない番号（インターネット上の住所）。',
    examTip: 'IPv4（32ビット）とIPv6（128ビット）の違いや、プライベートIPとグローバルIPの変換（NAT/NAPT）がポイント。'
  },
  {
    id: 'phishing',
    term: 'Phishing',
    english: 'Phishing Fraud',
    reading: 'フィッシング',
    category: 'technology',
    categoryLabel: 'テクノロジ系',
    indexGroup: 'P',
    description: '実在する銀行やWebサービスを装った偽メールや偽Webサイトに誘導し、パスワードやクレジットカード情報を盗み取る詐欺手法。',
    examTip: 'ソーシャルエンジニアリングの一種であり、多要素認証（MFA）やワンタイムパスワードが対策として有効。'
  },
  {
    id: 'pki',
    term: 'PKI',
    english: 'Public Key Infrastructure',
    reading: '公開鍵暗号基盤',
    category: 'technology',
    categoryLabel: 'テクノロジ系',
    indexGroup: 'P',
    description: '公開鍵暗号技術とデジタル証明書（CA）を用いて、インターネット上でのなりすましや改ざんを防ぐセキュリティ基盤。',
    examTip: '秘密鍵と公開鍵のペア、認証局（CA）の役割を正しく理解することが合格の鍵です。'
  },
  {
    id: 'roi',
    term: 'ROI',
    english: 'Return on Investment',
    reading: '投資対効果（とうしたいこうか）',
    category: 'strategy',
    categoryLabel: 'ストラテジ系',
    indexGroup: 'R',
    description: '投資額に対してどれだけの利益（効果）が得られたかを示す指標。（利益 ÷ 投資額 × 100）で算出される。',
    examTip: '計算問題として出題されることがあるため、公式をしっかり暗記しておきましょう。'
  },
  {
    id: 'sla',
    term: 'SLA',
    english: 'Service Level Agreement',
    reading: 'サービスレベル合意書',
    category: 'management',
    categoryLabel: 'マネジメント系',
    indexGroup: 'S',
    description: 'ITサービスの提供事業者と利用者の間で、提供されるサービスの品質や範囲（稼働率など）に関して合意した契約文書。',
    examTip: 'SLM（サービスレベル管理）プロセスで維持・改善活動が行われます。'
  },
  {
    id: 'swot',
    term: 'SWOT Analysis',
    english: 'Strengths, Weaknesses, Opportunities, Threats',
    reading: 'スウォット分析',
    category: 'strategy',
    categoryLabel: 'ストラテジ系',
    indexGroup: 'S',
    description: '自社の強み（Strengths）、弱み（Weaknesses）、機会（Opportunities）、脅威（Threats）の4項目で現状を分析するフレームワーク。',
    examTip: '内部要因（強み・弱み）と外部要因（機会・脅威）を正確に分類できるかが問われます。'
  },
  {
    id: 'copyright',
    term: '著作権法',
    english: 'Copyright Act',
    reading: 'ちょさくけんほう',
    category: 'strategy',
    categoryLabel: 'ストラテジ系',
    indexGroup: 'あ行',
    description: '文芸、学術、美術、音楽などの著作物を保護する法律。創作した時点で手続きなしに権利が発生する（無方式主義）。',
    examTip: 'プログラムのソースコードは保護されるが、プログラム言語、規約、アルゴリズムは保護されない点が出題率最高レベルです。'
  },
  {
    id: 'industrial-property',
    term: '産業財産権',
    english: 'Industrial Property Rights',
    reading: 'さんぎょうざいさんけん',
    category: 'strategy',
    categoryLabel: 'ストラテジ系',
    indexGroup: 'か行',
    description: '特許権、実用新案権、意匠権、商標権の4つの総称。特許庁への出願・登録が必要（方式主義）。',
    examTip: '著作権（無方式主義）との対比で「登録が必要かどうか」が問われます。'
  },
  {
    id: 'job-creation',
    term: '職務著作',
    english: 'Work Made for Hire',
    reading: 'しょくむちょさく',
    category: 'strategy',
    categoryLabel: 'ストラテジ系',
    indexGroup: 'さ行',
    description: '会社の従業員が業務として作成した著作物について、原則として会社（法人等）が著作者となる制度。',
    examTip: '法人等の発意、業務に従事する者が作成、職務上作成、法人名義で公表、別段の定めがないこと等の要件を満たす必要があります。'
  }
];
