import React from 'react';
import { MainNavTab } from '../types';

interface ExamOverviewViewProps {
  setActiveTab: (tab: MainNavTab) => void;
  onStartQuiz: () => void;
}

export const ExamOverviewView: React.FC<ExamOverviewViewProps> = ({
  setActiveTab,
  onStartQuiz
}) => {
  return (
    <div className="flex-1 w-full max-w-full">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111c2c] mb-3">
          試験概要 (Exam Overview)
        </h1>
        <p className="text-sm text-[#43474f] max-w-3xl leading-relaxed">
          ITパスポート試験（IP）の実施形式、出題範囲、合格基準、効率的な学習ロードマップをまとめて解説します。
        </p>
      </div>

      {/* Grid overview cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl border border-[#c3c6d0]/60 shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-[#737780] font-bold">試験方式</span>
            <span className="material-symbols-outlined text-[#002b57]">computer</span>
          </div>
          <p className="text-xl font-extrabold text-[#002b57]">CBT方式</p>
          <p className="text-xs text-[#43474f] mt-1">パソコンで問題・回答画面を操作</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#c3c6d0]/60 shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-[#737780] font-bold">試験時間 / 出題数</span>
            <span className="material-symbols-outlined text-[#006b5c]">timer</span>
          </div>
          <p className="text-xl font-extrabold text-[#006b5c]">120分 / 100問</p>
          <p className="text-xs text-[#43474f] mt-1">四肢択一式（1問題につき約1分）</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#c3c6d0]/60 shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-[#737780] font-bold">合格基準</span>
            <span className="material-symbols-outlined text-amber-600">verified</span>
          </div>
          <p className="text-xl font-extrabold text-[#111c2c]">600点 / 1,000点</p>
          <p className="text-xs text-[#43474f] mt-1">かつ各分野で300点以上必須</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#c3c6d0]/60 shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-[#737780] font-bold">受験料</span>
            <span className="material-symbols-outlined text-blue-600">payments</span>
          </div>
          <p className="text-xl font-extrabold text-blue-700">7,500円 (税込)</p>
          <p className="text-xs text-[#43474f] mt-1">通年で随時開催中</p>
        </div>
      </div>

      {/* Field Breakdown Table */}
      <div className="bg-white rounded-xl border border-[#c3c6d0]/60 p-6 shadow-xs mb-8">
        <h2 className="text-xl font-bold text-[#002b57] mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-[#006b5c] rounded-full inline-block" />
          出題分野と問題割合
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#111c2c]">
            <thead className="bg-[#f0f3ff] text-xs font-bold text-[#002b57] uppercase">
              <tr>
                <th className="p-3.5 rounded-l-lg">分野名</th>
                <th className="p-3.5">出題数目安</th>
                <th className="p-3.5">合格基準</th>
                <th className="p-3.5 rounded-r-lg">主な学習テーマ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#c3c6d0]/30">
              <tr>
                <td className="p-3.5 font-bold text-[#002b57]">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#002b57] mr-2" />
                  ストラテジ系（経営全般）
                </td>
                <td className="p-3.5 font-semibold">約35問</td>
                <td className="p-3.5 text-[#006b5c] font-bold">300点以上 / 1000点</td>
                <td className="p-3.5 text-xs text-[#43474f]">企業活動、法務、経営戦略、システム戦略、ビジネスインダストリ</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-[#006b5c]">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#006b5c] mr-2" />
                  マネジメント系（IT管理）
                </td>
                <td className="p-3.5 font-semibold">約15問</td>
                <td className="p-3.5 text-[#006b5c] font-bold">300点以上 / 1000点</td>
                <td className="p-3.5 text-xs text-[#43474f]">システム開発技術（アジャイル・ウォーターフォール）、プロジェクトマネジメント、サービスマネジメント</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-blue-700">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-600 mr-2" />
                  テクノロジ系（IT技術）
                </td>
                <td className="p-3.5 font-semibold">約45問</td>
                <td className="p-3.5 text-[#006b5c] font-bold">300点以上 / 1000点</td>
                <td className="p-3.5 text-xs text-[#43474f]">基礎理論、アルゴリズム、ハードウェア・OS、ネットワーク（DNS/IP）、セキュリティ（暗号化・PKI）</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Learning Strategy / Roadmap */}
      <div className="bg-[#dee8ff] rounded-xl p-6 border border-[#c3c6d0]/40 shadow-xs mb-8">
        <h2 className="text-xl font-bold text-[#002b57] mb-3 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#002b57]">auto_graph</span>
          効率的な標準学習ロードマップ（約50〜80時間）
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-xs">
            <span className="text-xs font-bold text-[#006b5c] bg-[#68fadd]/40 px-2.5 py-1 rounded-full mb-2 inline-block">
              STEP 1: 基礎単語の暗記
            </span>
            <h3 className="font-bold text-sm text-[#111c2c] mb-1">用語集（Glossary）のマスター</h3>
            <p className="text-xs text-[#43474f]">
              ITパスポートは用語の意味を正しく理解していれば得点できる問題が多数。A-Zと各分野の専門用語をチェック。
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-xs">
            <span className="text-xs font-bold text-[#002b57] bg-[#dee8ff] px-2.5 py-1 rounded-full mb-2 inline-block">
              STEP 2: 体系的な理解
            </span>
            <h3 className="font-bold text-sm text-[#111c2c] mb-1">学習ガイド（Study Guide）を熟読</h3>
            <p className="text-xs text-[#43474f]">
              著作権法や開発手法、ネットワーク、セキュリティなどの頻出分野の構造や図解をしっかり確認。
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-xs">
            <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full mb-2 inline-block">
              STEP 3: 問題演習と反復
            </span>
            <h3 className="font-bold text-sm text-[#111c2c] mb-1">確認テストとDaily Challenge</h3>
            <p className="text-xs text-[#43474f]">
              章末テストや本日の確認問題に挑戦して、解説で解法を復習。苦手を My Progress で可視化。
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setActiveTab('study-guide')}
            className="bg-[#002b57] hover:bg-[#1a4173] text-white font-label text-sm py-3 px-6 rounded-lg font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span className="material-symbols-outlined text-base">menu_book</span>
            学習ガイドを始める
          </button>
          <button
            onClick={onStartQuiz}
            className="bg-[#00BFA5] hover:bg-[#009a85] text-white font-label text-sm py-3 px-6 rounded-lg font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span className="material-symbols-outlined text-base">quiz</span>
            確認テストに挑戦する
          </button>
        </div>
      </div>
    </div>
  );
};
