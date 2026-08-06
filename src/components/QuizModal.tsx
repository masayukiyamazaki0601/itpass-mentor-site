import React from 'react';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetArticleId?: string;
  onQuizCompleted?: (scorePercentage: number) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose, targetArticleId }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-[#c3c6d0]/60 relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 pb-3 border-b border-[#c3c6d0]/40">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#006b5c] text-2xl">smartphone</span>
            <h2 className="text-xl font-bold text-[#002b57]">問題演習は専用アプリで</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#737780] hover:bg-[#f0f3ff] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <div className="text-center py-6">
          <div className="w-20 h-20 bg-[#68fadd]/40 text-[#007261] rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-4xl font-bold">apps</span>
          </div>
          <h3 className="text-2xl font-extrabold text-[#111c2c] mb-3">
            このサイトは解説記事専門サイトです
          </h3>
          <p className="text-sm text-[#43474f] leading-relaxed mb-6 max-w-md mx-auto">
            問題演習や模擬テストは専用アプリでご利用いただけます。
            解説記事で基礎を固めたら、アプリで実践力を身につけましょう。
          </p>

          <div className="bg-[#f0f3ff] border border-[#c3c6d0]/40 rounded-xl p-6 mb-6">
            <p className="text-xs font-bold text-[#002b57] mb-3">問題演習アプリをダウンロード</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://apps.apple.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#002b57] hover:bg-[#1a4173] text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">apple</span>
                App Store
              </a>
              <a
                href="https://play.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00BFA5] hover:bg-[#009a85] text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">play_arrow</span>
                Google Play
              </a>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg border border-[#002b57] text-[#002b57] font-bold text-sm hover:bg-[#f0f3ff] transition-colors cursor-pointer"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};