import React from 'react';
import { UserProgress } from '../types';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  userProgress: UserProgress;
  onResetProgress: () => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({
  isOpen,
  onClose,
  userProgress,
  onResetProgress
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#c3c6d0]/60 relative">
        <div className="flex justify-between items-center mb-6 pb-3 border-b border-[#c3c6d0]/40">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#002b57] text-2xl">trending_up</span>
            <h2 className="text-xl font-bold text-[#002b57]">学習進捗の詳細</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#737780] hover:bg-[#f0f3ff] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <div className="space-y-6">
          {/* Stats Badges */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#f0f3ff] p-4 rounded-xl border border-[#c3c6d0]/40">
              <span className="text-xs text-[#737780] block font-bold mb-1">総回答問題数</span>
              <span className="text-2xl font-extrabold text-[#002b57]">
                {userProgress.totalQuestionsAnswered} <span className="text-xs text-[#43474f] font-normal">問</span>
              </span>
            </div>

            <div className="bg-[#f0f3ff] p-4 rounded-xl border border-[#c3c6d0]/40">
              <span className="text-xs text-[#737780] block font-bold mb-1">正解率</span>
              <span className="text-2xl font-extrabold text-[#006b5c]">
                {userProgress.totalQuestionsAnswered > 0
                  ? Math.round((userProgress.correctQuestionsAnswered / userProgress.totalQuestionsAnswered) * 100)
                  : 0} %
              </span>
            </div>
          </div>

          {/* Category Progress Breakdown */}
          <div className="space-y-4 bg-white p-4 rounded-xl border border-[#c3c6d0]/40">
            <h3 className="font-bold text-sm text-[#111c2c] mb-2">分野別達成度</h3>

            <div>
              <div className="flex justify-between text-xs text-[#43474f] mb-1">
                <span>ストラテジ系（法務・経営戦略）</span>
                <span className="font-bold text-[#002b57]">{userProgress.categoryProgress.strategy}%</span>
              </div>
              <div className="w-full bg-[#dee8ff] rounded-full h-2">
                <div
                  className="bg-[#002b57] h-2 rounded-full transition-all"
                  style={{ width: `${userProgress.categoryProgress.strategy}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-[#43474f] mb-1">
                <span>マネジメント系（開発・プロジェクト）</span>
                <span className="font-bold text-[#006b5c]">{userProgress.categoryProgress.management}%</span>
              </div>
              <div className="w-full bg-[#dee8ff] rounded-full h-2">
                <div
                  className="bg-[#006b5c] h-2 rounded-full transition-all"
                  style={{ width: `${userProgress.categoryProgress.management}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-[#43474f] mb-1">
                <span>テクノロジ系（ネット・セキュリティ）</span>
                <span className="font-bold text-blue-600">{userProgress.categoryProgress.technology}%</span>
              </div>
              <div className="w-full bg-[#dee8ff] rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${userProgress.categoryProgress.technology}%` }}
                />
              </div>
            </div>
          </div>

          <div className="pt-2 flex justify-between items-center text-xs">
            <button
              onClick={() => {
                if (window.confirm('学習進捗ログをリセットしますか？')) {
                  onResetProgress();
                }
              }}
              className="text-rose-600 hover:underline cursor-pointer font-medium"
            >
              進捗データをリセット
            </button>
            <button
              onClick={onClose}
              className="bg-[#002b57] text-white px-5 py-2 rounded-lg font-bold hover:bg-[#1a4173] transition-colors cursor-pointer"
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
