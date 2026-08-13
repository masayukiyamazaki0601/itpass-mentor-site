import React, { useState } from 'react';
import { LectureBlock, LectureOption } from '../types';

interface LectureViewProps {
  meta: string;
  aim: string;
  blocks: LectureBlock[];
}

// 正解音（上昇する2音）と不正解音（下降する1音）を Web Audio API で再生
function playSound(correct: boolean) {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();

    if (correct) {
      [523.25, 783.99].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.0001, ctx.currentTime + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + i * 0.12 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.12 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.12);
        osc.stop(ctx.currentTime + i * 0.12 + 0.4);
      });
    } else {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(196, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(130.81, ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.45);
    }
  } catch {
    // 音声が使えない環境では何もしない
  }
}

function QuestionBlock({ num, head, mode = 'choice', scenario, options, answer, explanation }: {
  num: string;
  head: string;
  mode?: 'choice' | 'bool';
  scenario?: string;
  options: LectureOption[];
  answer: string;
  explanation: string;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const correctIndex = options.findIndex((o) => o.correct);
  const isAnswered = selected !== null;
  const isCorrect = selected === correctIndex;

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelected(idx);
    playSound(idx === correctIndex);
  };

  const optionLabel = (idx: number) => {
    if (mode === 'bool') return idx === 0 ? '○' : '×';
    return String.fromCharCode(65 + idx);
  };

  return (
    <div className="my-6">
      <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full inline-block" />
        問題{num}
      </h3>
      <div className="q-box">
        <div className="q-head">
          <span className="q-num">問題{num}</span>
          {mode === 'bool' ? '○か×かでお答えください' : head}
        </div>
        {scenario && (
          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line mb-3">
            {scenario}
          </p>
        )}

        <div className={mode === 'bool' ? 'flex gap-3' : 'flex flex-col'}>
          {options.map((opt, oi) => {
            let className = 'opt cursor-pointer';
            let stateMark: string | null = null;
            if (isAnswered) {
              if (oi === correctIndex) {
                className += ' correct';
                stateMark = '○';
              } else if (oi === selected) {
                className += ' wrong';
                stateMark = '×';
              }
            }
            if (mode === 'bool') {
              className += ' text-center';
            }
            return (
              <button
                key={oi}
                type="button"
                onClick={() => handleSelect(oi)}
                disabled={isAnswered}
                className={className}
              >
                <span className="inline-flex items-center gap-2">
                  {mode === 'bool' ? (
                    <span className={`text-xl font-black ${oi === 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {optionLabel(oi)}
                    </span>
                  ) : (
                    <>
                      {optionLabel(oi)}. {opt.text}
                    </>
                  )}
                  {stateMark && (
                    <span className="text-base font-black">{stateMark}</span>
                  )}
                </span>
                {mode === 'bool' && (
                  <span className="block text-sm font-semibold">{opt.text}</span>
                )}
                <span className="opt-note">
                  {isAnswered ? opt.note : 'クリックして回答'}
                </span>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <>
            <div className={`ans ${isCorrect ? 'correct' : ''}`}>
              {isCorrect ? '🎉 正解です！' : '❌ 不正解です。'}
              <div className="mt-1">
                <strong>正解は {optionLabel(correctIndex)}</strong> ／ {answer}
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mt-3 whitespace-pre-line">
              <strong className="text-slate-800">解説：</strong>
              {explanation}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function TestBlock({ title, items }: { title?: string; items: { statement: string; correct: boolean; explanation?: string }[] }) {
  const [selections, setSelections] = useState<(boolean | null)[]>(() => items.map(() => null));

  const handleSelect = (qIdx: number, chosen: boolean) => {
    if (selections[qIdx] !== null) return;
    const correct = chosen === items[qIdx].correct;
    playSound(correct);
    setSelections((prev) => {
      const next = [...prev];
      next[qIdx] = chosen;
      return next;
    });
  };

  return (
    <div className="my-6">
      <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full inline-block" />
        確認テスト
      </h3>
      <div className="check-list">
        {title && <h4>{title}</h4>}
        <div className="space-y-4">
          {items.map((item, qi) => {
            const sel = selections[qi];
            const isAnswered = sel !== null;
            const isCorrect = isAnswered && sel === item.correct;
            return (
              <div key={qi} className="bg-white/70 rounded-xl border border-slate-200 p-4">
                <div className="text-sm font-semibold text-slate-800 mb-2">
                  Q{qi + 1}. {item.statement}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => handleSelect(qi, true)}
                    disabled={isAnswered}
                    className={`opt cursor-pointer text-center flex-1 ${
                      isAnswered && item.correct === true ? 'correct' : ''
                    } ${isAnswered && sel === true && item.correct !== true ? 'wrong' : ''}`}
                  >
                    <span className="text-xl font-black text-emerald-600">○</span>
                    <span className="block text-sm font-semibold">正しい</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelect(qi, false)}
                    disabled={isAnswered}
                    className={`opt cursor-pointer text-center flex-1 ${
                      isAnswered && item.correct === false ? 'correct' : ''
                    } ${isAnswered && sel === false && item.correct !== false ? 'wrong' : ''}`}
                  >
                    <span className="text-xl font-black text-rose-600">×</span>
                    <span className="block text-sm font-semibold">誤り</span>
                  </button>
                </div>
                {isAnswered && (
                  <div className={`mt-2 text-xs font-bold ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {isCorrect ? '🎉 正解！' : '❌ 不正解'}
                    {item.explanation && (
                      <span className="block font-medium text-slate-600 mt-1">{item.explanation}</span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const LectureView: React.FC<LectureViewProps> = ({ meta, aim, blocks }) => {
  return (
    <div className="my-8">
      {/* メタ情報 */}
      <div className="lecture-meta">
        <span>対象ドメイン：{meta}</span>
      </div>

      {/* ねらい */}
      <div className="lecture-aim">
        🎯 ねらい：{aim}
      </div>

      {/* ブロック描画 */}
      <div className="space-y-1">
        {blocks.map((block, i) => {
          switch (block.kind) {
            case 'question':
              return (
                <QuestionBlock
                  key={i}
                  num={block.num}
                  head={block.head}
                  mode={block.mode}
                  scenario={block.scenario}
                  options={block.options}
                  answer={block.answer}
                  explanation={block.explanation}
                />
              );

            case 'note':
              return (
                <div key={i} className="my-5">
                  {block.title && (
                    <h4 className="font-extrabold text-slate-800 mb-1">{block.title}</h4>
                  )}
                  <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{block.text}</p>
                </div>
              );

            case 'point':
              return (
                <div key={i} className="point">
                  {block.title && <strong>{block.title}</strong>}
                  {block.title && <br />}
                  {block.items.map((item, ii) => (
                    <div key={ii}>📌 {item}</div>
                  ))}
                </div>
              );

            case 'check':
              return (
                <div key={i} className="check-list">
                  {block.title && <h4>{block.title}</h4>}
                  <ul>
                    {block.items.map((item, ii) => (
                      <li key={ii}>{item}</li>
                    ))}
                  </ul>
                </div>
              );

            case 'preview':
              return (
                <div key={i} className="preview">
                  <strong>🔮 次回予告：</strong>
                  {block.title}
                  <div className="mt-1">{block.text}</div>
                </div>
              );

            case 'table':
              return (
                <div key={i} className="my-5 overflow-hidden rounded-2xl border border-slate-200/80 shadow-xs">
                  <p className="text-xs font-extrabold text-sky-700 px-5 py-3 bg-sky-50/80 border-b border-sky-100 uppercase tracking-wider">
                    {block.title}
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-800">
                      <thead className="bg-slate-100">
                        <tr>
                          {block.headers.map((h, hi) => (
                            <th key={hi} className="p-3.5 font-bold text-slate-900 whitespace-nowrap">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200/60">
                        {block.rows.map((row, ri) => (
                          <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className={`p-3.5 ${ci === 0 ? 'font-bold text-sky-600' : 'text-slate-600 font-medium'} ${
                                  ci === 0 ? 'whitespace-nowrap' : ''
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );

            case 'test':
              return <TestBlock key={i} title={block.title} items={block.items} />;

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};
