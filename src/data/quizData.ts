import { QuizQuestion } from '../types';

export const DAILY_QUESTION: QuizQuestion = {
  id: 'daily-q1',
  question: 'DNS（Domain Name System）サーバーのネットワークにおける主な機能として、最も適切なものはどれですか？',
  category: 'technology',
  options: [
    { id: 'opt-a', text: 'ドメイン名（例: example.com）とIPアドレス（例: 192.0.2.1）を相互に変換（名前解決）する' },
    { id: 'opt-b', text: '通信データを暗号化して盗聴を防ぐ' },
    { id: 'opt-c', text: 'プライベートIPアドレスをグローバルIPアドレスに自動的に変換する' },
    { id: 'opt-d', text: 'Webサイトのファイルをクライアントブラウザに送信・表示する' }
  ],
  correctOptionId: 'opt-a',
  explanation: 'DNSサーバーの主な機能は、人間が認識しやすい「ドメイン名」とコンピューターが通信で使用する「IPアドレス」を相互に変換する「名前解決」です。'
};

export const ARTICLE_QUIZZES: { [articleId: string]: QuizQuestion[] } = {
  'copyright-law-basics': [
    {
      id: 'q-copy-1',
      articleId: 'copyright-law-basics',
      question: '日本の著作権法において、著作物として保護されない（対象外）とされるものはどれですか？',
      category: 'strategy',
      options: [
        { id: 'opt-1', text: '自社開発した業務システムのソースコード' },
        { id: 'opt-2', text: 'プログラムを作成する際に使用したプログラミング言語（例: Java, C言語）' },
        { id: 'opt-3', text: 'Webサイトに掲載されている取扱説明書テキスト' },
        { id: 'opt-4', text: '社内研修用テキストおよびプレゼンテーションスライド' }
      ],
      correctOptionId: 'opt-2',
      explanation: '著作権法第10条第3項において「プログラム言語」「規約（プロトコルなど）」「解法（アルゴリズム）」は著作権法による保護の対象外と定められています。'
    },
    {
      id: 'q-copy-2',
      articleId: 'copyright-law-basics',
      question: '著作権と産業財産権（特許権・商標権など）の違いに関する記述として、適切なものはどれですか？',
      category: 'strategy',
      options: [
        { id: 'opt-1', text: '著作権は特許庁へ出願・登録して初めて発生する（方式主義）。' },
        { id: 'opt-2', text: '著作権は作品を創造した時点で自動的に発生し、登録等の手続きは不要である（無方式主義）。' },
        { id: 'opt-3', text: '産業財産権は出願を行わなくても自動的に権利が発生する。' },
        { id: 'opt-4', text: 'プログラムのアルゴリズムは著作権法によって独占的に保護される。' }
      ],
      correctOptionId: 'opt-2',
      explanation: '著作権は創作と同時に自動発生する「無方式主義」を採っています。一方、特許権などの産業財産権は特許庁への出願・登録が必要な「方式主義」です。'
    },
    {
      id: 'q-copy-3',
      articleId: 'copyright-law-basics',
      question: '会社の従業員が業務としてプログラムを作成した際、職務著作（法人著作）として会社が著作者となるための条件として不適切なものはどれですか？',
      category: 'strategy',
      options: [
        { id: 'opt-1', text: '法人等の発意（指示・企画）に基づき作成されていること' },
        { id: 'opt-2', text: '業務に従事する者が職務上作成したこと' },
        { id: 'opt-3', text: '作成した従業員個人の氏名で特許庁に登録を行うこと' },
        { id: 'opt-4', text: '契約や就業規則等に「著作者は従業員個人とする」などの別段の定めがないこと' }
      ],
      correctOptionId: 'opt-3',
      explanation: '職務著作において特許庁への登録は不要です。法人等の発意、職務上の作成、法人名義での公表（プログラムは非公表も可）、別段の定めがないこと等の要件を満たせば法人に権利が帰属します。'
    }
  ],
  'agile-waterfall-dev': [
    {
      id: 'q-agile-1',
      articleId: 'agile-waterfall-dev',
      question: 'アジャイル開発の特徴として、最も適切なものはどれですか？',
      category: 'management',
      options: [
        { id: 'opt-1', text: '開発初期に全ての要件を正確に確定させ、工程ごとの厳格な承認を行う' },
        { id: 'opt-2', text: '短期間の反復単位（スプリント）で開発・テストを繰り返し、変化に柔軟に対応する' },
        { id: 'opt-3', text: '最終工程までソフトウェアの動くバージョンを作成しない' },
        { id: 'opt-4', text: 'ドキュメント作成を最優先とし、完成後の修正は原則認めない' }
      ],
      correctOptionId: 'opt-2',
      explanation: 'アジャイル開発は短期間のイテレーションを繰り返すことで、優先度の高い機能から動くソフトウェアを提供し、仕様変更に迅速に対応する開発手法です。'
    }
  ],
  'dns-network-basics': [
    {
      id: 'q-dns-1',
      articleId: 'dns-network-basics',
      question: 'Web閲覧等で用いられる「IPv4」と「IPv6」の説明として適切なものはどれですか？',
      category: 'technology',
      options: [
        { id: 'opt-1', text: 'IPv4のアドレス長は32ビット、IPv6のアドレス長は128ビットである' },
        { id: 'opt-2', text: 'IPv4のアドレス長は64ビット、IPv6のアドレス長は32ビットである' },
        { id: 'opt-3', text: 'IPv6はIPv4よりも識別可能なアドレス数が少なく限定的である' },
        { id: 'opt-4', text: 'IPv4はMACアドレスと全く同じ長さを表す' }
      ],
      correctOptionId: 'opt-1',
      explanation: 'IPv4は32ビット（約43億個）、IPv6は128ビット（約3.4×10^38個）の長さで表現され、アドレス枯渇問題を解決します。'
    }
  ]
};
