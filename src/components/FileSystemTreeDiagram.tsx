import React from 'react';
import { motion } from 'framer-motion';

export const FileSystemTreeDiagram: React.FC = () => {
  const root = { name: 'レシピ（ルート）', icon: 'folder', children: [
    { name: 'コーヒー', icon: 'local_cafe', children: ['レシピA.txt', 'レシピB.txt'] },
    { name: 'スイーツ', icon: 'cake', children: ['レシピC.txt', 'レシピD.txt'] },
    { name: '領収書', icon: 'receipt', children: ['2024.pdf', '2025.pdf'] }
  ]};

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-sky-50/40 p-6 rounded-2xl border border-slate-200 shadow-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-sky-200">
          <span className="material-symbols-outlined text-xl">folder</span>
        </div>
        <div>
          <h3 className="text-base font-black text-[#111c2c]">フォルダの階層構造（ツリー構造）</h3>
          <p className="text-[11px] text-[#43474f]">フォルダの中にフォルダを作って整理する</p>
        </div>
      </div>

      {/* Root */}
      <div className="flex justify-center mb-4">
        <motion.div
          className="bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl px-5 py-2.5 shadow-md flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="material-symbols-outlined text-lg">folder_open</span>
          <span className="font-black text-sm">{root.name}</span>
          <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded-full font-bold">ルート</span>
        </motion.div>
      </div>

      {/* Connector */}
      <div className="flex justify-center mb-2">
        <span className="material-symbols-outlined text-slate-300">keyboard_arrow_down</span>
      </div>

      {/* Children */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {root.children.map((child, ci) => (
          <motion.div
            key={child.name}
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + ci * 0.12 }}
          >
            <div className="w-full bg-white rounded-xl border-2 border-sky-200 p-3 shadow-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-sky-500">{child.icon}</span>
              <span className="font-bold text-xs text-slate-800">{child.name}</span>
              <span className="ml-auto text-[9px] text-slate-400">フォルダ</span>
            </div>
            <span className="material-symbols-outlined text-slate-300 text-sm rotate-90">keyboard_arrow_down</span>
            <div className="w-full space-y-1.5">
              {child.children.map((file) => (
                <div key={file} className="bg-white rounded-lg border border-slate-200 px-3 py-1.5 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-slate-400">description</span>
                  <span className="text-[10px] text-slate-600 font-medium">{file}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-6 rounded-xl bg-gradient-to-r from-sky-50 to-emerald-50 border border-sky-100 px-4 py-3 flex items-center gap-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="material-symbols-outlined text-sky-500 text-lg">tips_and_updates</span>
        <p className="text-xs text-[#43474f]">
          覚え方：<span className="font-bold text-sky-700">フォルダの中にフォルダ</span>＝階層（ツリー）構造。一番上を<span className="font-bold text-sky-700">ルート</span>と呼ぶ
        </p>
      </motion.div>
    </div>
  );
};
