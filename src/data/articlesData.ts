import { Article } from '../types';

export const ARTICLES_DATA: Article[] = [
  {
    id: 'copyright-law-basics',
    title: '著作権法と関連法規の基礎知識',
    category: 'strategy',
    categoryLabel: '法務',
    readTime: '読了目安: 15分',
    summary: 'ITパスポート試験で頻出の「知的財産権」の中でも、特に重要な著作権法とその関連法規について、実務的な視点からわかりやすく解説します。',
    breadcrumbPath: ['Study Guide', 'ストラテジ系', '企業活動と法務'],
    tags: ['#ストラテジ系', '#企業と法務', '#知財'],
    prevArticleId: 'corporate-activities',
    prevArticleTitle: '企業活動と組織形態',
    nextArticleId: 'personal-data-security',
    nextArticleTitle: '個人情報保護法とセキュリティ関連法規',
    sections: [
      {
        id: 'section-1',
        title: '1. 知的財産権の体系',
        content: '知的財産権は大きく「産業財産権」と「著作権」に分かれます。ITパスポートでは、この分類を正確に理解しておくことが得点源になります。',
        bentoCards: [
          {
            title: '産業財産権',
            icon: 'factory',
            borderColor: '#F6AD55',
            description: '特許権、実用新案権、意匠権、商標権の4つ。特許庁への出願・登録が必要です。'
          },
          {
            title: '著作権',
            icon: 'copyright',
            borderColor: '#4FD1C5',
            description: '文芸、学術、美術、音楽などの著作物を保護。創作した時点で自動的に権利が発生します（無方式主義）。'
          }
        ]
      },
      {
        id: 'section-2',
        title: '2. 著作権法における「プログラム」の扱い',
        content: 'ソフトウェア開発において、ソースコードは著作物として保護されますが、保護されないものもあります。ここが試験での引っかけポイントです。',
        callout: {
          title: '重要キーワード: プログラムの著作物で「保護されない」もの',
          items: [
            'プログラム言語（C言語、Java、Pythonなど）',
            '規約（プロトコル、インターフェース規約など）',
            '解法（アルゴリズムなど）'
          ],
          note: '※これらはアイデアやルールに過ぎず、表現そのものではないため著作権法では保護されません。（特許権で保護される可能性はあります）'
        }
      },
      {
        id: 'section-3',
        title: '3. 著作者人格権と財産権',
        content: '著作権は「著作者人格権」と「著作権（財産権）」の2つに大別されます。\n\n・著作者人格権：公表権、氏名表示権、同一性保持権など。著作者本人の人格的利益を保護する権利で、他人に譲渡・相続することはできません（一身専属権）。\n・著作権（財産権）：複製権、公衆送信権、翻案権など。経済的利益を保護する権利で、全部または一部を他人に譲渡・ライセンス許可することができます。'
      },
      {
        id: 'section-4',
        title: '4. 職務著作（法人著作）',
        content: '会社や組織の従業員が業務として作成したプログラムなどの著作権は、一定の要件を満たす場合、作成者本人ではなく「法人（会社）」に属します。\n\n【職務著作が成立する要件】\n1. 法人等の発意（指示）に基づいていること\n2. 業務に従事する者が職務上作成したこと\n3. 法人等の名義で公表されること（プログラムは非公表でも可）\n4. 契約や就業規則に別段の定めがないこと'
      }
    ]
  },
  {
    id: 'agile-waterfall-dev',
    title: 'アジャイル開発とウォーターフォール開発',
    category: 'management',
    categoryLabel: '開発手法',
    readTime: '読了目安: 10分',
    summary: '現代のソフトウェア開発で欠かせない2大手法「ウォーターフォールモデル」と「アジャイル開発」の特徴、メリット・デメリット、ITパスポートでの頻出論点を解説します。',
    breadcrumbPath: ['Study Guide', 'マネジメント系', '開発手法'],
    tags: ['#マネジメント系', '#システム開発', '#アジャイル'],
    prevArticleId: 'system-requirements',
    prevArticleTitle: '要件定義とシステム設計',
    nextArticleId: 'project-management',
    nextArticleTitle: 'プロジェクトマネジメントとPMBOK',
    sections: [
      {
        id: 'section-1',
        title: '1. ウォーターフォールモデルの特徴',
        content: '水が上から下へ流れ落ちるように、企画・要件定義・設計・プログラミング・テスト・運用と、工程を順番に一つずつ完了させながら進める従来型の開発手法です。前工程への逆戻り（手戻り）を防ぐため、各工程で詳細なドキュメントを作成します。'
      },
      {
        id: 'section-2',
        title: '2. アジャイル開発（DevOps・スクラム）',
        content: '短期間（1〜4週間程度のイテレーション／スプリント）で設計・開発・テストのサイクルを繰り返し、迅速に動作するソフトウェアをリリースしていく開発手法です。要求変更に柔軟に対応できるのが最大のメリットです。'
      }
    ]
  },
  {
    id: 'dns-network-basics',
    title: 'DNSとネットワーク通信の基本メカニズム',
    category: 'technology',
    categoryLabel: 'ネットワーク',
    readTime: '読了目安: 12分',
    summary: 'WebブラウザでURLを入力したときに裏側で何が起きているか？ドメイン名とIPアドレスを結びつけるDNS（Domain Name System）とTCP/IP通信の仕組みをマスターしましょう。',
    breadcrumbPath: ['Study Guide', 'テクノロジ系', 'ネットワークとセキュリティ'],
    tags: ['#テクノロジ系', '#ネットワーク', '#DNS'],
    prevArticleId: 'os-hardware',
    prevArticleTitle: 'OSとハードウェアの仕組み',
    nextArticleId: 'pki-encryption',
    nextArticleTitle: '暗号化技術と公開鍵基盤（PKI）',
    sections: [
      {
        id: 'section-1',
        title: '1. 名前解決とDNSサーバーの役割',
        content: '人間にとって覚えやすい「www.example.com」というドメイン名を、コンピューターが通信に必要な数字の「192.0.2.1」というIPアドレスに相互変換する仕組みを「名前解決」と呼びます。この名前解決を行うサーバーがDNSサーバーです。'
      },
      {
        id: 'section-2',
        title: '2. IPアドレス（IPv4 vs IPv6）とポート番号',
        content: 'IPアドレスはインターネット上の「住所」です。IPv4は32ビット（約43億個）で枯渇問題が発生したため、128ビットで事実上無限の数を識別できるIPv6の普及が進んでいます。ポート番号は「部屋番号」に相当し、Web(HTTP:80, HTTPS:443)やメール(SMTP:25)などのサービスを識別します。'
      }
    ]
  }
];
