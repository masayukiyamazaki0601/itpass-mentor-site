import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, FileSearch, ArrowDown } from 'lucide-react';

export const CompanyStructureDiagrams: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] p-6 rounded-2xl border border-indigo-100 shadow-sm overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="text-lg font-bold text-[#111c2c]">株式会社の3つの機関</h3>
        <p className="text-xs text-[#43474f] mt-1">「所有」と「経営」の分離が基本です</p>
      </div>

      <div className="relative max-w-lg mx-auto">
        {/* 株主総会 (最高意思決定機関) */}
        <motion.div 
          className="bg-white rounded-xl p-4 border-2 border-indigo-200 shadow-sm relative z-10 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-indigo-50 w-12 h-12 rounded-full flex items-center justify-center text-indigo-600 mb-2">
            <Users size={24} />
          </div>
          <h4 className="font-bold text-indigo-900 mb-1">株主総会</h4>
          <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full mb-2 font-bold tracking-wider">最高意思決定機関</span>
          <p className="text-xs text-center text-[#43474f]">
            会社の出資者（所有者）の集まり。<br/>重要な方針や、取締役・監査役を選びます。
          </p>
        </motion.div>

        {/* 矢印群 */}
        <div className="flex justify-between px-20 py-2 relative z-0">
          <motion.div 
            className="flex flex-col items-center relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="h-12 border-l-2 border-dashed border-indigo-300"></div>
            <ArrowDown className="text-indigo-400 -mt-2" size={16} />
            <span className="text-[10px] text-indigo-500 font-bold bg-[#f8fafc] px-1 absolute top-1/2 -translate-y-1/2 left-4 whitespace-nowrap">選任・監督</span>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="h-12 border-l-2 border-dashed border-emerald-300"></div>
            <ArrowDown className="text-emerald-400 -mt-2" size={16} />
            <span className="text-[10px] text-emerald-500 font-bold bg-[#f8fafc] px-1 absolute top-1/2 -translate-y-1/2 right-4 whitespace-nowrap">選任</span>
          </motion.div>
        </div>

        {/* 取締役と監査役 */}
        <div className="grid grid-cols-2 gap-4 relative z-10">
          <motion.div 
            className="bg-white rounded-xl p-4 border-2 border-blue-200 shadow-sm flex flex-col items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center text-blue-600 mb-2">
              <Briefcase size={20} />
            </div>
            <h4 className="font-bold text-blue-900 mb-1">取締役（会）</h4>
            <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full mb-2 font-bold tracking-wider">業務執行機関</span>
            <p className="text-[11px] text-center text-[#43474f]">
              実際に会社の経営（業務）を行います。
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl p-4 border-2 border-emerald-200 shadow-sm flex flex-col items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="bg-emerald-50 w-10 h-10 rounded-full flex items-center justify-center text-emerald-600 mb-2">
              <FileSearch size={20} />
            </div>
            <h4 className="font-bold text-emerald-900 mb-1">監査役</h4>
            <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full mb-2 font-bold tracking-wider">監査機関</span>
            <p className="text-[11px] text-center text-[#43474f]">
              取締役の経営が正しく行われているかチェックします。
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
