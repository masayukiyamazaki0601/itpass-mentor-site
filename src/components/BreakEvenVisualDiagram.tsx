import React from 'react';

export const BreakEvenVisualDiagram: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] p-6 rounded-2xl border border-sky-100 shadow-sm">
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-[#111c2c]">損益分岐点グラフ</h3>
        <p className="text-xs text-[#43474f] mt-1">
          「売上高の線」と「総費用の線」が交わるところが損益分岐点です
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <svg viewBox="0 0 600 390" className="w-full h-auto">
          {/* 軸 */}
          <line x1="70" y1="320" x2="585" y2="320" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="70" y1="20" x2="70" y2="320" stroke="#94a3b8" strokeWidth="1.5" />

          {/* 軸ラベル */}
          <text x="340" y="372" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#64748b">
            販売数量（コーヒーの売上杯数） →
          </text>
          <text x="22" y="185" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#64748b"
            transform="rotate(-90 22 185)">
            金額（売上高・費用）
          </text>

          {/* 赤字ゾーン（売上線と総費用線の間・分岐点の左） */}
          <polygon points="70,320 70,200 410,120" fill="#fecaca" opacity="0.5" />
          <text x="195" y="285" textAnchor="middle" fontSize="13" fontWeight="black" fill="#dc2626">
            赤字ゾーン
          </text>
          <text x="195" y="303" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b91c1c">
            費用 ＞ 売上
          </text>

          {/* 黒字ゾーン（分岐点の右） */}
          <polygon points="410,120 585,20 585,80" fill="#a7f3d0" opacity="0.5" />
          <text x="530" y="150" textAnchor="middle" fontSize="13" fontWeight="black" fill="#059669">
            黒字ゾーン
          </text>
          <text x="530" y="168" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#047857">
            売上 ＞ 費用
          </text>

          {/* 固定費線 */}
          <line x1="70" y1="200" x2="585" y2="200" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="7 5" />
          <text x="555" y="192" fontSize="12" fontWeight="black" fill="#2563eb">固定費</text>

          {/* 総費用線 */}
          <line x1="70" y1="200" x2="585" y2="80" stroke="#f59e0b" strokeWidth="3" />
          <text x="555" y="75" fontSize="12" fontWeight="black" fill="#d97706">総費用</text>

          {/* 売上高線 */}
          <line x1="70" y1="320" x2="585" y2="20" stroke="#10b981" strokeWidth="3" />
          <text x="570" y="22" fontSize="12" fontWeight="black" fill="#059669">売上高</text>

          {/* 損益分岐点 */}
          <circle cx="410" cy="120" r="6" fill="#ef4444" stroke="#fff" strokeWidth="2" />
          <line x1="410" y1="320" x2="410" y2="120" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="410" y="115" textAnchor="middle" fontSize="12" fontWeight="black" fill="#dc2626">
            損益分岐点
          </text>
          <text x="410" y="340" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#dc2626">
            （ここで利益＝0）
          </text>
        </svg>
      </div>

      {/* 補足 */}
      <div className="max-w-2xl mx-auto mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-red-50 border border-red-200 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-red-500 text-lg">trending_down</span>
            <span className="text-xs font-black text-red-700">分岐点より左 ＝ 赤字</span>
          </div>
          <p className="text-[10px] text-red-600 leading-relaxed">
            売上高の線が総費用の線より下。費用のほうが多く、損失が出る。
          </p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-emerald-500 text-lg">trending_up</span>
            <span className="text-xs font-black text-emerald-700">分岐点より右 ＝ 黒字</span>
          </div>
          <p className="text-[10px] text-emerald-600 leading-relaxed">
            売上高の線が総費用の線より上。売上が費用を上回り、利益が出る。
          </p>
        </div>
      </div>
    </div>
  );
};
