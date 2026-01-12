
import React from 'react';
import { Home } from 'lucide-react';

interface HeaderProps {
  title: string;
  onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onGoHome }) => {
  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-slate-800">{title}</h1>
      <button 
        onClick={onGoHome}
        className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
      >
        <Home size={20} className="text-slate-600" />
      </button>
    </div>
  );
};

export default Header;
