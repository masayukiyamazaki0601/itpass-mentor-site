import { Chapter } from '../types';

export const TABLE_OF_CONTENTS: Chapter[] = [
  {
    id: 'ch1',
    number: 1,
    title: '企業活動',
    topics: [
      { id: 'ch1-t1', title: '企業活動' },
      { id: 'ch1-t2', title: '企業の責任' },
      { id: 'ch1-t3', title: '経営資源' },
      { id: 'ch1-t4', title: '経営組織' },
      { id: 'ch1-t5', title: '業務分析と業務計画' },
      { id: 'ch1-t6', title: '経営者の意思決定と問題解決手法' },
      { id: 'ch1-t7', title: '損益分岐点' },
      { id: 'ch1-t8', title: '財務諸表と5つの利益' }
    ]
  },
  {
    id: 'ch2',
    number: 2,
    title: '法務',
    topics: [
      { id: 'ch2-t1', title: '3つの知的財産権' },
      { id: 'ch2-t2', title: '産業財産権とその他の権利' },
      { id: 'ch2-t3', title: 'セキュリティ関連法規' },
      { id: 'ch2-t4', title: '労働関連法規と取引関連法規' },
      { id: 'ch2-t5', title: 'その他の法律' },
      { id: 'ch2-t6', title: '標準化' }
    ]
  },
  {
    id: 'ch3',
    number: 3,
    title: '経営戦略マネジメント',
    topics: [
      { id: 'ch3-t1', title: '経営戦略とSWOT分析' },
      { id: 'ch3-t2', title: 'PPM (Product Portfolio Management)' },
      { id: 'ch3-t3', title: '経営戦略に関する重要用語' },
      { id: 'ch3-t4', title: '事業戦略と経営管理システム' }
    ]
  },
  {
    id: 'ch4',
    number: 4,
    title: '技術戦略マネジメント',
    topics: [
      { id: 'ch4-t1', title: '技術開発戦略の立案・技術開発計画' },
      { id: 'ch4-t2', title: 'ビジネスシステム' },
      { id: 'ch4-t3', title: 'エンジニアリングシステム' },
      { id: 'ch4-t4', title: '生産管理の計算問題' },
      { id: 'ch4-t5', title: 'e-ビジネス' },
      { id: 'ch4-t6', title: 'IoTシステム・組込みシステム' }
    ]
  },
  {
    id: 'ch5',
    number: 5,
    title: 'システム戦略',
    topics: [
      { id: 'ch5-t1', title: '情報システム戦略' },
      { id: 'ch5-t2', title: '業務プロセス' },
      { id: 'ch5-t3', title: '業務プロセスを改善する方法' },
      { id: 'ch5-t4', title: 'ソリューションビジネス' },
      { id: 'ch5-t5', title: 'システムの活用促進と評価' },
      { id: 'ch5-t6', title: 'システム企画' },
      { id: 'ch5-t7', title: '企画プロセスと要件定義プロセス' },
      { id: 'ch5-t8', title: '調達計画・実施' }
    ]
  },
  {
    id: 'ch6',
    number: 6,
    title: '開発技術',
    topics: [
      { id: 'ch6-t1', title: 'システム開発技術' },
      { id: 'ch6-t2', title: 'システム要件定義' },
      { id: 'ch6-t3', title: 'システム設計' },
      { id: 'ch6-t4', title: 'プログラミング' },
      { id: 'ch6-t5', title: 'テストとソフトウェア受入れ' },
      { id: 'ch6-t6', title: '運用プロセスと保守プロセス' },
      { id: 'ch6-t7', title: 'ソフトウェアの開発モデル' }
    ]
  },
  {
    id: 'ch7',
    number: 7,
    title: 'プロジェクトマネジメント',
    topics: [
      { id: 'ch7-t1', title: 'プロジェクトマネジメントと3つの制約' },
      { id: 'ch7-t2', title: 'PMBOKとは' },
      { id: 'ch7-t3', title: 'プロジェクトスケジュールマネジメント' },
      { id: 'ch7-t4', title: 'プロジェクト資源マネジメント' },
      { id: 'ch7-t5', title: 'プロジェクトリスクマネジメント' }
    ]
  },
  {
    id: 'ch8',
    number: 8,
    title: 'サービスマネジメントとシステム監査',
    topics: [
      { id: 'ch8-t1', title: 'サービスマネジメントとITIL' },
      { id: 'ch8-t2', title: 'SLMと可用性管理' },
      { id: 'ch8-t3', title: 'サービスサポート' },
      { id: 'ch8-t4', title: 'ファシリティマネジメント' },
      { id: 'ch8-t5', title: 'システム監査' },
      { id: 'ch8-t6', title: '内部統制' }
    ]
  },
  {
    id: 'ch9',
    number: 9,
    title: '基礎理論とアルゴリズム',
    topics: [
      { id: 'ch9-t1', title: '数値の数え方' },
      { id: 'ch9-t2', title: '集合と論理演算' },
      { id: 'ch9-t3', title: 'データの単位' },
      { id: 'ch9-t4', title: 'データ構造' },
      { id: 'ch9-t5', title: 'アルゴリズムとフローチャート' },
      { id: 'ch9-t6', title: 'コンピュータ言語' },
      { id: 'ch9-t7', title: 'プログラミング① 基礎知識' },
      { id: 'ch9-t8', title: 'プログラミング② 選択処理と繰り返し処理' },
      { id: 'ch9-t9', title: 'プログラミング③ 関数' }
    ]
  },
  {
    id: 'ch10',
    number: 10,
    title: 'コンピュータシステム',
    topics: [
      { id: 'ch10-t1', title: '処理形態によるシステムの分類' },
      { id: 'ch10-t2', title: '利用形態やシステム構成による分類' },
      { id: 'ch10-t3', title: 'ハードディスクの多重化（RAID）' },
      { id: 'ch10-t4', title: 'システムの評価指標' },
      { id: 'ch10-t5', title: 'システムの信頼性' },
      { id: 'ch10-t6', title: '直列システムと並列システム' }
    ]
  },
  {
    id: 'ch11',
    number: 11,
    title: 'ハードウェア',
    topics: [
      { id: 'ch11-t1', title: 'コンピュータの種類' },
      { id: 'ch11-t2', title: 'コンピュータの5つの役割' },
      { id: 'ch11-t3', title: '演算と制御' },
      { id: 'ch11-t4', title: '記憶' },
      { id: 'ch11-t5', title: '入力と出力' },
      { id: 'ch11-t6', title: '入出力インタフェース' }
    ]
  },
  {
    id: 'ch12',
    number: 12,
    title: 'ソフトウェア',
    topics: [
      { id: 'ch12-t1', title: 'OSの機能' },
      { id: 'ch12-t2', title: 'データ管理とファイルシステム' },
      { id: 'ch12-t3', title: 'バックアップ' },
      { id: 'ch12-t4', title: 'アプリケーションソフトウェア' },
      { id: 'ch12-t5', title: '情報デザインとソフトウェアの権利' }
    ]
  },
  {
    id: 'ch13',
    number: 13,
    title: 'データベース',
    topics: [
      { id: 'ch13-t1', title: 'データベースの基本' },
      { id: 'ch13-t2', title: '関係データベース' },
      { id: 'ch13-t3', title: 'データベース設計' },
      { id: 'ch13-t4', title: 'データベース管理システムとSQL' }
    ]
  },
  {
    id: 'ch14',
    number: 14,
    title: 'ネットワーク',
    topics: [
      { id: 'ch14-t1', title: 'LANとWAN' },
      { id: 'ch14-t2', title: 'ネットワーク機器' },
      { id: 'ch14-t3', title: '通信プロトコル' },
      { id: 'ch14-t4', title: 'インターネットの仕組み' },
      { id: 'ch14-t5', title: 'インターネットサービス' }
    ]
  },
  {
    id: 'ch15',
    number: 15,
    title: '情報セキュリティ',
    topics: [
      { id: 'ch15-t1', title: '情報セキュリティの脅威' },
      { id: 'ch15-t2', title: 'リスクマネジメント' },
      { id: 'ch15-t3', title: '情報セキュリティマネジメント' },
      { id: 'ch15-t4', title: '暗号技術の基本' },
      { id: 'ch15-t5', title: 'デジタル署名と認証局' },
      { id: 'ch15-t6', title: '脅威への対策' }
    ]
  }
];
