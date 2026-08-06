import React from 'react';
import { MainNavTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: MainNavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-[#d8e3fa] border-t border-[#c3c6d0] mt-12 py-8">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <div className="font-bold text-lg text-[#002b57] mb-2 flex items-center gap-2">
            <img
              src="https://lh3.googleusercontent.com/aida/AP1WRLtS7dvXPpaP9BeH0BlKgG87EOrJI3T6tgY3piQfc-Pt5HYS-xBzsVp57dNoSTSiHZnTnux1bKR43DOwClQAqMaWDizQRkCw4fWhqPs0RHcNfUImMfHyo3yUswdsanShgHJ5rzzejm1AG-MaEKy7we3XjEDs0U7WRA31yqPTYrnzEdLh1UzDnrs6ueIC-y-Ofutn_F32KsoAXmmlCKwEIrv454Ss1bkfvECU3tHV2E1cVEWE1rT0FcmgcV7Z"
              alt="IT Passport Mentor Logo"
              className="w-6 h-6 rounded-md opacity-80"
            />
            <span>IT Passport Mentor</span>
          </div>
          <p className="text-sm text-[#43474f]">
            © 2024 IT Passport Mentor. Empowering IT Professionals.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 md:justify-end items-center text-sm text-[#43474f]">
          <button
            onClick={() => setActiveTab('glossary')}
            className="hover:text-[#002b57] underline transition-colors"
          >
            Glossary
          </button>
          <button
            onClick={() => setActiveTab('study-guide')}
            className="hover:text-[#002b57] underline transition-colors"
          >
            Study Guide
          </button>
          <button
            onClick={() => setActiveTab('exam-overview')}
            className="hover:text-[#002b57] underline transition-colors"
          >
            Exam Overview
          </button>
          <span className="hover:text-[#002b57] cursor-pointer underline transition-colors">
            Privacy Policy
          </span>
        </div>
      </div>
    </footer>
  );
};
