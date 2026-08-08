import React, { useState, useEffect } from 'react';
import { REVERSE_DRILL_QUESTIONS } from '../data/microDrillData';

interface ReverseDrillModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReverseDrillModal: React.FC<ReverseDrillModalProps> = ({
  isOpen,
  onClose
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(30);

  const currentQuestion = REVERSE_DRILL_QUESTIONS[currentIndex];

  useEffect(() => {
    if (!isOpen) {
      setCurrentIndex(0);
      setSelectedOptionId(null);
      setIsAnswered(false);
      setTimerSeconds(30);
      return;
    }

    setTimerSeconds(30);
    const interval = setInterval(() => {
      setTimerSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, currentIndex]);

  if (!isOpen || !currentQuestion) return null;

  const handleSelectOption = (optId: string) => {
    if (isAnswered) return;
    setSelectedOptionId(optId);
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentIndex < REVERSE_DRILL_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswered(false);
    } else {
      onClose();
    }
  };

  const selectedOpt = currentQuestion.options.find((o) => o.id === selectedOptionId);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl border border-slate-200 relative animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Badges & Timer */}
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 mb-5">
          <div className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-xs px-3 py-1 rounded-xl shadow-xs uppercase tracking-widest flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">cached</span>
              逆引き思考ドリル
            </span>
            <span className="text-xs font-bold text-slate-500">
              Q{currentIndex + 1} / {REVERSE_DRILL_QUESTIONS.length}
            </span>
          </div>

          {/* 30-Second Micro Timer */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 font-extrabold text-xs text-slate-700">
            <span className="material-symbols-outlined text-sm text-indigo-600 animate-pulse">timer</span>
            <span>00:{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}</span>
          </div>
        </div>

        {/* Question Topic Target */}
        <div className="mb-4">
          <span className="text-[11px] font-extrabold text-indigo-600 uppercase tracking-wider block mb-1">
            Target Term: {currentQuestion.targetTerm}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
            {currentQuestion.questionText}
          </h3>
        </div>

        {/* Options Stack */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((opt) => {
            let optionStyle = 'border-slate-200 bg-white hover:border-indigo-400 hover:bg-indigo-50/40 text-slate-800';

            if (isAnswered) {
              if (opt.isCorrect) {
                optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold shadow-xs';
              } else if (opt.id === selectedOptionId) {
                optionStyle = 'border-rose-500 bg-rose-50 text-rose-950 font-bold';
              } else {
                optionStyle = 'border-slate-200 bg-slate-50 opacity-50 text-slate-400';
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt.id)}
                disabled={isAnswered}
                className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-start gap-3 ${optionStyle}`}
              >
                <span className={`w-6 h-6 rounded-lg border flex items-center justify-center font-extrabold text-xs flex-shrink-0 mt-0.5 ${
                  isAnswered && opt.isCorrect
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-slate-100 text-slate-600 border-slate-300'
                }`}>
                  {isAnswered && opt.isCorrect ? '✓' : opt.id.replace('opt-', '')}
                </span>
                <span className="leading-relaxed flex-1">{opt.scenarioText}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback & Explanation Result Card */}
        {isAnswered && selectedOpt && (
          <div className={`p-4 rounded-2xl mb-6 border animate-fade-in ${
            selectedOpt.isCorrect
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
              : 'bg-rose-50 border-rose-200 text-rose-900'
          }`}>
            <div className="flex items-center gap-2 mb-1.5 font-black text-sm">
              <span className="material-symbols-outlined">
                {selectedOpt.isCorrect ? 'check_circle' : 'cancel'}
              </span>
              <span>{selectedOpt.isCorrect ? '正解！実務で活きる本質理解です' : '不正解（もう一度チェック）'}</span>
            </div>
            <p className="text-xs font-semibold leading-relaxed mb-2">
              {selectedOpt.reason}
            </p>
            <p className="text-xs text-slate-600 pt-2 border-t border-slate-200/80 leading-relaxed font-medium">
              <strong>【解説】</strong> {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex justify-between items-center pt-4 border-t border-slate-200/80">
          <button
            onClick={onClose}
            className="text-xs font-bold text-slate-500 hover:text-slate-900 cursor-pointer"
          >
            演習を終了
          </button>

          {isAnswered && (
            <button
              onClick={handleNext}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md shadow-indigo-500/20 cursor-pointer flex items-center gap-1"
            >
              <span>{currentIndex < REVERSE_DRILL_QUESTIONS.length - 1 ? '次の逆引き問題へ' : '結果を完了'}</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
