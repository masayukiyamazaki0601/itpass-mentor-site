import React from 'react';
import { motion } from 'framer-motion';

export const DigitalSignatureDiagram: React.FC = () => {
  const steps = [
    {
      name: '送る側',
      en: 'Sender',
      icon: 'draw',
      role: '秘密鍵で署名',
      desc: '本人だけが持つ秘密鍵でデータに「サイン」を付ける',
      example: '店長だけが持つ印鑑でサイン',
      color: 'from-sky-500 to-blue-600',
      soft: 'bg-sky-50 border-sky-300',
      badge: 'bg-sky-100 text-sky-700',
      delay: 0
    },
    {
      name: '受け取る側',
      en: 'Receiver',
      icon: 'verified_user',
      role: '公開鍵で確認',
      desc: '公開鍵で署名を確かめ、「本人のもの」「改ざんされていない」ことを確認',
      example: '印鑑の照合で確かめる',
      color: 'from-emerald-500 to-teal-600',
      soft: 'bg-emerald-50 border-emerald-300',
      badge: 'bg-emerald-100 text-emerald-700',
      delay: 0.2
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-sky-50/40 p-6 rounded-2xl border border-slate-200 shadow-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-sky-200">
          <span className="material-symbols-outlined text-xl">draw</span>
        </div>
        <div>
          <h3 className="text-base font-black text-[#111c2c]">デジタル署名の仕組み</h3>
          <p className="text-[11px] text-[#43474f]">秘密鍵で署名し、公開鍵で確認する（公開鍵暗号の逆向き）</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-stretch gap-3">
        {steps.map((s, idx) => (
          <React.Fragment key={s.name}>
            <motion.div
              className={`flex-1 rounded-xl border-2 p-4 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow ${s.soft}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: s.delay, duration: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center shadow-sm`}>
                  <span className="material-symbols-outlined text-lg">{s.icon}</span>
                </div>
                <div>
                  <div className="font-black text-sm text-slate-800">{s.name}</div>
                  <div className="text-[9px] text-slate-400 font-medium">{s.en}</div>
                </div>
              </div>
              <span className={`inline-block self-start mt-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full ${s.badge}`}>
                {s.role}
              </span>
              <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{s.desc}</p>
              <p className="text-[9px] text-slate-500 mt-auto pt-1.5 border-t border-slate-200/70">
                例：{s.example}
              </p>
            </motion.div>

            {idx < steps.length - 1 && (
              <div className="flex items-center justify-center">
                <motion.span
                  className="material-symbols-outlined text-2xl text-slate-300 rotate-90 md:rotate-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: s.delay + 0.2 }}
                >
                  arrow_forward
                </motion.span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* 認証局の帯 */}
      <motion.div
        className="mt-5 rounded-xl bg-gradient-to-r from-sky-50 to-emerald-50 border border-sky-100 px-4 py-3 flex items-center gap-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="material-symbols-outlined text-sky-500 text-lg">badge</span>
        <p className="text-xs text-[#43474f]">
          <span className="font-bold text-sky-700">認証局（CA）</span>＝「この公開鍵は本当にこの人のもの」と証明する第三者機関（身分証を発行する役所のような存在）
        </p>
      </motion.div>
    </div>
  );
};
