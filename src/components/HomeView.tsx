import React from 'react';
import { MainNavTab, CategoryKey } from '../types';
import { ARTICLES_DATA } from '../data/articlesData';
import { GLOSSARY_TERMS } from '../data/glossaryData';
import { ARTICLE_QUIZZES } from '../data/quizData';

interface HomeViewProps {
  setActiveTab: (tab: MainNavTab) => void;
  onSearch: (query: string) => void;
  onStartQuiz: (quizId?: string) => void;
  onSelectCategoryArticle: (category: CategoryKey) => void;
}

const CATEGORY_META: {
  key: CategoryKey;
  label: string;
  description: string;
  icon: string;
  accent: string;
  soft: string;
}[] = [
  {
    key: 'strategy',
    label: 'ストラテジ系',
    description: '企業活動・法務・経営戦略・システム戦略。試験の土台となる「経営の視点」を学びます。',
    icon: 'account_tree',
    accent: '#002b57',
    soft: 'bg-[#002b57]/10 text-[#002b57]'
  },
  {
    key: 'management',
    label: 'マネジメント系',
    description: '開発手法・プロジェクト管理・サービス運用。仕事を計画して回す「管理の視点」を学びます。',
    icon: 'manage_accounts',
    accent: '#006b5c',
    soft: 'bg-[#006b5c]/10 text-[#006b5c]'
  },
  {
    key: 'technology',
    label: 'テクノロジ系',
    description: '基礎理論・コンピュータ・ネットワーク・セキュリティ。試験の約半分を占める「技術の視点」を学びます。',
    icon: 'memory',
    accent: '#2563eb',
    soft: 'bg-blue-500/10 text-blue-600'
  }
];

export const HomeView: React.FC<HomeViewProps> = ({
  setActiveTab,
  onSearch,
  onStartQuiz,
  onSelectCategoryArticle
}) => {
  const [heroSearchInput, setHeroSearchInput] = React.useState('');

  const totalArticles = ARTICLES_DATA.length;
  const totalTerms = GLOSSARY_TERMS.length;
  const totalQuiz = Object.values(ARTICLE_QUIZZES).reduce(
    (acc, qs) => acc + qs.length,
    0
  );

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearchInput.trim()) {
      onSearch(heroSearchInput.trim());
    }
  };

  const stats = [
    { value: totalArticles, label: '解説記事', icon: 'article', accent: '#002b57' },
    { value: totalTerms, label: '用語集', icon: 'dictionary', accent: '#006b5c' },
    { value: totalQuiz + 1, label: '確認問題', icon: 'quiz', accent: '#2563eb' },
    { value: 3, label: '学習カテゴリ', icon: 'category', accent: '#b45309' }
  ];

  return (
    <div className="flex-1 flex flex-col gap-10 min-w-0">
      {/* ============ HERO ============ */}
      <section className="relative w-full overflow-hidden rounded-3xl border border-[#c3c6d0]/20 shadow-xl flex items-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001f3f] via-[#002b57]/90 to-[#004d8f]/70 z-10" />
        <img
          src="https://lh3.googleusercontent.com/aida/AP1WRLurkUA3ZenbUEo2iXgaWTF2iRWh1-yTxPAsMvPPTzNOF2vpXK3jPTBlhyhfimuJx05IwhUCnI6Rl83RsOux6BzHUbPQsF-nSTolFtIoxBomsHH62HPtTMrv3z6C9bPBiZjFARt8M9XirwJPNY-Tgl5jDKMx2OKX59ZkUFhxXVws0rUu_3QaHhLQPbfDMkMFBlJzNeX_DfK8dtfIOkzLeqFZB3_CwFDf8ooIzgvERBPFMwAF9G82N1qCmaYe"
          alt="ITパスポート試験の勉強イメージ"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Decorative blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#68fadd]/20 rounded-full blur-3xl z-10" />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 bg-[#4da3ff]/20 rounded-full blur-3xl z-10" />

        <div className="relative z-20 px-6 sm:px-12 py-12 sm:py-16 text-white max-w-3xl">
          <span className="inline-flex items-center gap-1.5 font-label text-xs text-[#eafff9] uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/25 mb-5">
            <span className="material-symbols-outlined text-sm">bolt</span>
            ITパスポート 解説記事サイト
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-5 leading-[1.15] drop-shadow-lg">
            最短ルートで
            <br className="hidden sm:inline" />
            <span className="text-[#68fadd]">ITパスポート</span>
            合格へ。
          </h1>
          <p className="text-sm sm:text-base mb-8 text-[#eef4ff] max-w-xl leading-relaxed drop-shadow">
            専門用語を「カフェの例え」でやさしく解説。92記事×確認問題×用語集で、試験範囲を効率よく固められます。
          </p>

          {/* Quick Search Box */}
          <form
            onSubmit={handleHeroSearchSubmit}
            className="bg-white/95 backdrop-blur-md rounded-2xl p-2 flex items-center max-w-xl shadow-2xl border border-white/40"
          >
            <span className="material-symbols-outlined text-[#002b57] ml-3 mr-2 text-xl select-none">
              search
            </span>
            <input
              type="text"
              value={heroSearchInput}
              onChange={(e) => setHeroSearchInput(e.target.value)}
              placeholder="トピック、キーワードで検索..."
              className="bg-transparent border-none outline-none flex-1 text-[#002b57] placeholder-[#002b57]/60 text-sm font-medium focus:ring-0"
            />
            <button
              type="submit"
              className="bg-[#002b57] hover:bg-[#1a4173] text-white font-label text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors active:scale-95 cursor-pointer whitespace-nowrap"
            >
              検索する
            </button>
          </form>

          {/* Quick stat chips */}
          <div className="flex flex-wrap gap-2.5 mt-7">
            {['カフェの例えで学べる', '全3カテゴリ対応', 'スマホでも快適'].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 text-xs text-white/90 bg-black/25 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full"
              >
                <span className="material-symbols-outlined text-[13px] text-[#68fadd]">check_circle</span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS STRIP ============ */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-2xl border border-[#c3c6d0]/50 p-5 flex items-center gap-4 shadow-xs hover:shadow-md transition-shadow"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: s.accent + '14', color: s.accent }}
            >
              <span className="material-symbols-outlined text-2xl">{s.icon}</span>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#111c2c] leading-none mb-1">
                {s.value.toLocaleString()}
              </div>
              <div className="text-xs text-[#43474f] font-medium">{s.label}</div>
            </div>
          </div>
        ))}
      </section>

      {/* ============ LEARNING STEPS ============ */}
      <section className="flex flex-col gap-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#111c2c]">3ステップで合格を目指す</h2>
            <p className="text-sm text-[#43474f] mt-1">無理なく続けられる学習サイクルです。</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: 'STEP 1',
              title: '記事で学ぶ',
              desc: 'カフェ「ひまわりコーヒー」のストーリーで、複雑な専門用語もイメージで理解。',
              icon: 'menu_book',
              color: '#002b57',
              action: () => setActiveTab('table-of-contents')
            },
            {
              step: 'STEP 2',
              title: '用語で覚える',
              desc: '頻出キーワードを索引つきの用語集で反復。試験当日の「あれ何だっけ」をなくします。',
              icon: 'dictionary',
              color: '#006b5c',
              action: () => setActiveTab('glossary')
            },
            {
              step: 'STEP 3',
              title: '問題で試す',
              desc: '各記事の確認問題で理解度チェック。弱点をその場で解消してから次へ進みます。',
              icon: 'quiz',
              color: '#2563eb',
              action: () => onStartQuiz()
            }
          ].map((s) => (
            <div
              key={s.step}
              onClick={s.action}
              className="group relative bg-white rounded-2xl border border-[#c3c6d0]/50 p-6 shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: s.color }}
              />
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-[11px] font-bold tracking-widest px-2.5 py-1 rounded-md"
                  style={{ backgroundColor: s.color + '14', color: s.color }}
                >
                  {s.step}
                </span>
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: s.color + '14', color: s.color }}
                >
                  <span className="material-symbols-outlined">{s.icon}</span>
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#111c2c] mb-2">{s.title}</h3>
              <p className="text-sm text-[#43474f] leading-relaxed">{s.desc}</p>
              <span
                className="mt-4 inline-block text-xs font-bold flex items-center gap-1"
                style={{ color: s.color }}
              >
                はじめる <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CATEGORY ============ */}
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-bold text-[#111c2c]">カテゴリから学ぶ</h2>
            <p className="text-sm text-[#43474f] mt-1">
              全 {totalArticles} 記事を3つのカテゴリで整理しました。
            </p>
          </div>
          <button
            onClick={() => setActiveTab('table-of-contents')}
            className="text-xs text-[#43474f] hover:text-[#002b57] transition-colors flex items-center gap-0.5 cursor-pointer"
          >
            すべて見る <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {CATEGORY_META.map((c) => {
            const count = ARTICLES_DATA.filter((a) => a.category === c.key).length;
            return (
              <div
                key={c.key}
                onClick={() => onSelectCategoryArticle(c.key)}
                className="group block bg-white rounded-2xl border border-[#c3c6d0]/50 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all relative overflow-hidden cursor-pointer"
              >
                <div
                  className="absolute top-0 right-0 w-36 h-36 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-125"
                  style={{ backgroundColor: c.accent + '08' }}
                />
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:bg-[${c.accent}]`}
                    style={{ backgroundColor: c.accent + '14', color: c.accent }}
                  >
                    <span className="material-symbols-outlined text-2xl">{c.icon}</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#43474f] bg-[#f0f3ff] px-2.5 py-1 rounded-full">
                    {count}記事
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#111c2c] mb-2 relative z-10">{c.label}</h3>
                <p className="text-xs text-[#43474f] leading-relaxed relative z-10">{c.description}</p>
                <span
                  className="mt-4 inline-block text-xs font-bold relative z-10"
                  style={{ color: c.accent }}
                >
                  解説記事へ →
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#006b5c] to-[#00BFA5] p-8 sm:p-12 text-white shadow-xl">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-black/10 rounded-full blur-2xl" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <span className="inline-flex items-center gap-1.5 font-label text-xs uppercase tracking-widest bg-white/15 border border-white/25 px-3.5 py-1.5 rounded-full mb-4">
              <span className="material-symbols-outlined text-sm">smartphone</span>
              問題演習アプリ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight">
              解説で学んだら、<br className="hidden sm:inline" />実践問題で仕上げよう
            </h2>
            <p className="text-sm text-white/90 max-w-lg leading-relaxed">
              EXP・Coin・復習モンスターで遊びながら学べる、ITパスポート対策ゲームアプリをチェック。
            </p>
          </div>
          <button
            onClick={() => onStartQuiz()}
            className="shrink-0 bg-white text-[#006b5c] font-label font-bold px-8 py-4 rounded-2xl shadow-lg hover:bg-[#f0f3ff] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
          >
            アプリを見る
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
      </section>
    </div>
  );
};
