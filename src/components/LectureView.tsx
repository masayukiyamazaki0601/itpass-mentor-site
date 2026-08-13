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

function QuestionBlock({ num, head, scenario, options, answer, explanation }: {
  num: string;
  head: string;
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

  return (
    <div className="my-6">
      <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full inline-block" />
        問題{num}
      </h3>
      <div className="q-box">
        <div className="q-head">
          <span className="q-num">問題{num}</span>
          {head}
        </div>
        {scenario && (
          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line mb-3">
            {scenario}
          </p>
        )}

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
          return (
            <button
              key={oi}
              type="button"
              onClick={() => handleSelect(oi)}
              disabled={isAnswered}
              className={className}
            >
              <span className="inline-flex items-center gap-2">
                {String.fromCharCode(65 + oi)}. {opt.text}
                {stateMark && (
                  <span className="text-base font-black">{stateMark}</span>
                )}
              </span>
              <span className="opt-note">
                {isAnswered ? opt.note : 'クリックして回答'}
              </span>
            </button>
          );
        })}

        {isAnswered && (
          <>
            <div className={`ans ${isCorrect ? 'correct' : ''}`}>
              {isCorrect ? '🎉 正解です！' : '❌ 不正解です。'}
              <div className="mt-1">
                <strong>正解は {String.fromCharCode(65 + correctIndex)}</strong> ／ {answer}
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

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};
