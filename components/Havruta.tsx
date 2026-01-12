
import React from 'react';
import Header from './Header';
import { HAVRUTA_QUESTIONS } from '../constants';
import { MessageSquare } from 'lucide-react';

interface HavrutaProps {
  onGoHome: () => void;
}

const Havruta: React.FC<HavrutaProps> = ({ onGoHome }) => {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      <Header title="하브루타" onGoHome={onGoHome} />
      <div className="flex-1 overflow-auto p-4">
        <div className="bg-teal-50 border border-teal-100 p-4 rounded-2xl mb-6 flex items-center gap-3">
          <MessageSquare className="text-teal-500" />
          <p className="text-teal-800 text-sm font-medium">
            친구와 함께 짝을 지어 아래 질문에 대해 깊이 대화해 보세요.
          </p>
        </div>
        <div className="space-y-3">
          {HAVRUTA_QUESTIONS.map((question, idx) => (
            <div 
              key={idx} 
              className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-start"
            >
              <span className="text-teal-500 font-bold text-lg leading-none pt-0.5">Q{idx + 1}.</span>
              <p className="text-slate-700 leading-relaxed font-medium">{question}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Havruta;
