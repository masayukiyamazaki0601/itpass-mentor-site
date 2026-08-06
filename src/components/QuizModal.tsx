import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { DAILY_QUESTION, ARTICLE_QUIZZES } from '../data/quizData';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetArticleId?: string;
  onQuizCompleted: (scorePercentage: number) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  isOpen,
  onClose,
  targetArticleId,
  onQuizCompleted
}) => {
  if (!isOpen) return null;

  // Determine questions list
  let questions: QuizQuestion[] = [];
  if (targetArticleId === 'daily-q1') {
    questions = [DAILY_QUESTION];
  } else if (targetArticleId && ARTICLE_QUIZZES[targetArticleId]) {
    questions = ARTICLE_QUIZZES[targetArticleId];
  } else {
    // Collect all questions or fallback
    questions = Object.values(ARTICLE_QUIZZES).flat();
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: { selected: string; correct: boolean } }>({});
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (optId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionId(optId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId || isAnswerSubmitted) return;

    const isCorrect = selectedOptionId === currentQ.correctOptionId;
    setIsAnswerSubmitted(true);
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: { selected: selectedOptionId, correct: isCorrect }
    }));
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
    } else {
      // Finished all
      setIsFinished(true);

      const correctCount = Object.values(userAnswers).filter((a) => a.correct).length;
      const total = questions.length;
      const pct = Math.round((correctCount / total) * 100);
      onQuizCompleted(pct);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setUserAnswers({});
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-[#c3c6d0]/60 relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 pb-3 border-b border-[#c3c6d0]/40">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#006b5c] text-2xl">quiz</span>
            <h2 className="text-xl font-bold text-[#002b57]">理解度確認テスト</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#737780] hover:bg-[#f0f3ff] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Finished summary screen */}
        {isFinished ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-[#68fadd]/40 text-[#007261] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-3xl font-bold">workspace_premium</span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#111c2c] mb-2">テスト完了！</h3>
            <p className="text-sm text-[#43474f] mb-6">
              正解数: <span className="font-extrabold text-[#002b57] text-lg">
                {Object.values(userAnswers).filter((a) => a.correct).length}
              </span> / {questions.length} 問
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-lg border border-[#002b57] text-[#002b57] font-bold text-sm hover:bg-[#f0f3ff] transition-colors cursor-pointer"
              >
                もう一度挑戦
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg bg-[#002b57] text-white font-bold text-sm hover:bg-[#1a4173] transition-colors cursor-pointer"
              >
                完了
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Progress bar inside test */}
            <div className="flex justify-between items-center text-xs text-[#737780] mb-2 font-bold">
              <span>問題 {currentIndex + 1} / {questions.length}</span>
              <span>{currentQ.category === 'strategy' ? 'ストラテジ系' : currentQ.category === 'management' ? 'マネジメント系' : 'テクノロジ系'}</span>
            </div>
            <div className="w-full bg-[#f0f3ff] h-2 rounded-full mb-6 overflow-hidden">
              <div
                className="bg-[#00BFA5] h-2 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <h3 className="text-base sm:text-lg font-bold text-[#111c2c] mb-6 leading-relaxed bg-[#f9f9ff] p-4 rounded-xl border border-[#c3c6d0]/40">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                const isCorrect = opt.id === currentQ.correctOptionId;

                let optionStyle = 'border-[#c3c6d0] bg-white text-[#111c2c] hover:border-[#002b57]';

                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'border-rose-500 bg-rose-50 text-rose-900 line-through';
                  } else {
                    optionStyle = 'border-[#c3c6d0]/40 opacity-60 bg-white';
                  }
                } else if (isSelected) {
                  optionStyle = 'border-[#002b57] bg-[#f0f3ff] text-[#002b57] font-bold shadow-xs';
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    disabled={isAnswerSubmitted}
                    className={`w-full text-left p-4 rounded-xl border transition-all text-sm flex items-start gap-3 cursor-pointer ${optionStyle}`}
                  >
                    <span className="w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                      {opt.id.replace('opt-', '').toUpperCase()}
                    </span>
                    <span className="flex-1 leading-relaxed">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation when submitted */}
            {isAnswerSubmitted && (
              <div className="mb-6 p-4 rounded-xl bg-[#f0f3ff] border border-[#c3c6d0]/50 animate-fade-in">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`material-symbols-outlined font-bold text-lg ${
                    selectedOptionId === currentQ.correctOptionId ? 'text-emerald-600' : 'text-rose-600'
                  }`}>
                    {selectedOptionId === currentQ.correctOptionId ? 'check_circle' : 'cancel'}
                  </span>
                  <span className={`font-bold text-sm ${
                    selectedOptionId === currentQ.correctOptionId ? 'text-emerald-700' : 'text-rose-700'
                  }`}>
                    {selectedOptionId === currentQ.correctOptionId ? '正解！' : '不正解'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
                  <strong>解説:</strong> {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Controls */}
            <div className="flex justify-end gap-3 pt-4 border-t border-[#c3c6d0]/30">
              {!isAnswerSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedOptionId}
                  className={`px-6 py-2.5 rounded-lg text-white font-bold text-sm transition-all ${
                    selectedOptionId
                      ? 'bg-[#002b57] hover:bg-[#1a4173] cursor-pointer shadow-xs'
                      : 'bg-[#c3c6d0] cursor-not-allowed'
                  }`}
                >
                  回答を決定
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 rounded-lg bg-[#00BFA5] hover:bg-[#009a85] text-white font-bold text-sm transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
                >
                  <span>{currentIndex < questions.length - 1 ? '次の問題へ' : '結果を見る'}</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
