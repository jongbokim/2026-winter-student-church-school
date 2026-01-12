
import React from 'react';
import Header from './Header';
import { OPENING_WORSHIP, SUNDAY_WORSHIP } from '../constants';
import { WorshipInfo } from '../types';

interface WorshipProps {
  onGoHome: () => void;
}

const WorshipCard: React.FC<{ info: WorshipInfo; colorClass: string }> = ({ info, colorClass }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
    <div className={`${colorClass} p-4 text-white`}>
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold">{info.title}</h3>
        {info.time && <span className="text-xs bg-white/20 px-2 py-1 rounded-full font-medium tracking-tight">{info.time}</span>}
      </div>
      <div className="text-sm opacity-90 mt-2">본문: {info.scripture} | 설교: {info.speaker}</div>
    </div>
    <div className="p-6">
      <ul className="space-y-4">
        {info.order.map((item, idx) => (
          <li key={idx} className="flex items-start gap-4">
            <span className="bg-slate-100 text-slate-500 text-[10px] w-5 h-5 flex items-center justify-center rounded-full mt-0.5 font-bold shrink-0">
              {idx + 1}
            </span>
            <span className="text-slate-700 font-medium break-keep">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Worship: React.FC<WorshipProps> = ({ onGoHome }) => {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      <Header title="예배 안내" onGoHome={onGoHome} />
      <div className="flex-1 overflow-auto p-4">
        <WorshipCard info={OPENING_WORSHIP} colorClass="bg-blue-600" />
        <WorshipCard info={SUNDAY_WORSHIP} colorClass="bg-indigo-600" />
      </div>
    </div>
  );
};

export default Worship;
