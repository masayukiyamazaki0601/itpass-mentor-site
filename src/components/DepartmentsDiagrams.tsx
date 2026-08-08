import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Factory, Store, Users, Wallet } from 'lucide-react';

export const DepartmentsDiagrams: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] p-6 rounded-2xl border border-blue-100 shadow-sm overflow-hidden mt-6">
      <div className="text-center mb-8">
        <h3 className="text-lg font-bold text-[#111c2c]">企業の部門とモノ・カネの流れ</h3>
        <p className="text-xs text-[#43474f] mt-1">それぞれの部門が協力して企業活動を回します</p>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 relative">
        {/* サポート部門（上部） */}
        <div className="flex gap-4 w-full justify-center">
          <motion.div 
            className="bg-amber-50 rounded-xl p-3 border border-amber-200 w-40 flex items-center gap-3 shadow-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
              <Users size={20} />
            </div>
            <div>
              <h4 className="font-bold text-amber-900 text-sm">人事部門</h4>
              <p className="text-[10px] text-amber-700">ヒトの採用・育成</p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-emerald-50 rounded-xl p-3 border border-emerald-200 w-40 flex items-center gap-3 shadow-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
              <Wallet size={20} />
            </div>
            <div>
              <h4 className="font-bold text-emerald-900 text-sm">経理・財務</h4>
              <p className="text-[10px] text-emerald-700">カネの管理</p>
            </div>
          </motion.div>
        </div>

        {/* コア活動（下部） */}
        <div className="bg-white p-6 rounded-xl border-2 border-blue-100 shadow-sm w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* 生産 */}
          <motion.div 
            className="flex flex-col items-center flex-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-2 border-4 border-white shadow-sm z-10">
              <Factory size={28} />
            </div>
            <h4 className="font-bold text-blue-900">生産部門</h4>
            <p className="text-[10px] bg-blue-50 text-blue-700 px-2 py-1 rounded-full mt-1 font-medium">作る</p>
          </motion.div>

          {/* 矢印 */}
          <motion.div 
            className="flex-1 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex items-center text-slate-400">
              <div className="h-0.5 w-12 sm:w-20 bg-slate-300"></div>
              <ArrowRight size={20} className="text-slate-400 -ml-1" />
            </div>
            <span className="text-[10px] font-bold text-slate-500 mt-1">商品・サービス</span>
          </motion.div>

          {/* 営業 */}
          <motion.div 
            className="flex flex-col items-center flex-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-2 border-4 border-white shadow-sm z-10">
              <Store size={28} />
            </div>
            <h4 className="font-bold text-pink-900">営業部門</h4>
            <p className="text-[10px] bg-pink-50 text-pink-700 px-2 py-1 rounded-full mt-1 font-medium">届ける・売る</p>
          </motion.div>

        </div>
        
        {/* 説明 */}
        <motion.p 
          className="text-xs text-[#43474f] text-center bg-white/60 px-4 py-2 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          人事や経理が土台（ヒト・カネ）を支え、生産部門が作ったモノを営業部門がお客様に届けます。
        </motion.p>
      </div>
    </div>
  );
};
