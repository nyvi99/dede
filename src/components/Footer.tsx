import React from 'react';
import { TabType } from './Header.tsx';

interface FooterProps {
  onGoToAdmin: () => void;
  currentTab: TabType;
}

export const Footer: React.FC<FooterProps> = ({ onGoToAdmin, currentTab }) => {
  return (
    <footer className="w-full max-w-4xl mx-auto px-4 py-10 mt-auto text-center">
      <p className="text-xs sm:text-sm text-[#736a5f]">
        <span>© Dedé Cabeleireiro</span>
        <span className="mx-2">·</span>
        <button
          onClick={onGoToAdmin}
          className={`hover:text-[#e8af38] transition-colors underline-offset-4 ${
            currentTab === 'admin' ? 'text-[#e8af38] font-medium' : 'text-[#8c8274]'
          }`}
        >
          Área do administrador
        </button>
      </p>
    </footer>
  );
};
