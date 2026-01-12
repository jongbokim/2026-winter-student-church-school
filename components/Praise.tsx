
import React from 'react';
import Header from './Header';
import { PRAISE_LIST } from '../constants';
import { Play } from 'lucide-react';

interface PraiseProps {
  onGoHome: () => void;
}

const Praise: React.FC<PraiseProps> = ({ onGoHome }) => {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      <Header title="수련회 찬양곡" onGoHome={onGoHome} />
      <div className="flex-1 overflow-auto p-4">
        <div className="mb-4 p-4 bg-rose-50 rounded-2xl border border-rose-100">
          <p className="text-rose-700 text-xs font-bold text-center">
            "미리 들어보고 오세요! ^^"
          </p>
        </div>
        <div className="space-y-4">
          {PRAISE_LIST.map((item, idx) => (
            <a
              key={idx}
              href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm flex overflow-hidden hover:border-rose-200 transition-all active:scale-98"
            >
              <div className="relative w-32 bg-slate-200 shrink-0">
                <img 
                  src={`https://img.youtube.com/vi/${item.youtubeId}/mqdefault.jpg`} 
                  alt={`${item.title} 썸네일`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-black/30 backdrop-blur-sm p-1.5 rounded-full text-white">
                      <Play size={16} fill="currentColor" />
                   </div>
                </div>
              </div>
              <div className="p-4 flex flex-col justify-center flex-1 min-w-0">
                <span className="text-[10px] font-bold text-rose-500 mb-1">Track {idx + 1}</span>
                <h3 className="text-slate-800 font-bold text-sm leading-tight line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Praise;
