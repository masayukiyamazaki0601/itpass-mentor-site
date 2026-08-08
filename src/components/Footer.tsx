import React from 'react';
import { MainNavTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: MainNavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-slate-100/80 border-t border-slate-200/80 mt-16 py-12 relative z-10 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="font-extrabold text-xl text-slate-900 mb-2 flex items-center gap-2.5">
            <div className="p-1.5 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/aida/AP1WRLtS7dvXPpaP9BeH0BlKgG87EOrJI3T6tgY3piQfc-Pt5HYS-xBzsVp57dNoSTSiHZnTnux1bKR43DOwClQAqMaWDizQRkCw4fWhqPs0RHcNfUImMfHyo3yUswdsanShgHJ5rzzejm1AG-MaEKy7we3XjEDs0U7WRA31yqPTYrnzEdLh1UzDnrs6ueIC-y-Ofutn_F32KsoAXmmlCKwEIrv454Ss1bkfvECU3tHV2E1cVEWE1rT0FcmgcV7Z"
                alt="IT Passport Mentor Logo"
                className="w-5 h-5 rounded-md object-cover bg-white"
              />
            </div>
            <span>ITパスポート <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">LAB</span></span>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            © 2026 ITパスポート LAB. ITパスポート全範囲の効率的学習をサポートします。
          </p>
        </div>

        <div className="flex flex-wrap gap-6 items-center text-xs font-bold text-slate-600">
          <button
            onClick={() => setActiveTab('table-of-contents')}
            className="hover:text-sky-600 transition-colors"
          >
            目次
          </button>
          <button
            onClick={() => setActiveTab('glossary')}
            className="hover:text-sky-600 transition-colors"
          >
            用語集
          </button>
          <button
            onClick={() => setActiveTab('exam-overview')}
            className="hover:text-sky-600 transition-colors"
          >
            試験概要
          </button>
          <span className="hover:text-sky-600 cursor-pointer transition-colors">
            プライバシーポリシー
          </span>
        </div>
      </div>
    </footer>
  );
};
