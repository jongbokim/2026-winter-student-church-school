
import React from 'react';
import { Calendar, BookOpen, Music, Users, PlayCircle } from 'lucide-react';
import { ViewState } from '../types';
import { BACKGROUND_IMAGE_URL, RETREAT_INFO } from '../constants';

interface HomeProps {
  onNavigate: (view: ViewState) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const menuItems = [
    { id: 'SCHEDULE' as ViewState, label: '일정표', icon: Calendar, color: 'bg-emerald-500' },
    { id: 'WORSHIP' as ViewState, label: '예배', icon: BookOpen, color: 'bg-sky-500' },
    { id: 'HAVRUTA' as ViewState, label: '하브루타', icon: Users, color: 'bg-amber-500' },
    { id: 'PRAISE' as ViewState, label: '찬양', icon: Music, color: 'bg-rose-500' },
    { id: 'INTRO' as ViewState, label: '영상', icon: PlayCircle, color: 'bg-indigo-500' },
  ];

  return (
    <div className="relative h-screen flex flex-col justify-between overflow-hidden bg-slate-100">
      {/* 포스터 배경 이미지 */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url(${BACKGROUND_IMAGE_URL})`,
          backgroundPosition: 'center 20%'
        }}
      >
        {/* 포스터 상단 텍스트를 위한 오버레이는 최소화 (이미지에 이미 텍스트가 있으므로) */}
      </div>

      {/* 상단 제목 영역 - 포스터의 제목과 겹치지 않게 투명하게 처리하거나 보조 정보만 노출 */}
      <div className="relative z-10 pt-16 px-6 flex flex-col items-center">
        <div className="text-center">
           <p className="text-slate-800 text-sm font-bold tracking-widest bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full mb-1">
            2026 학생부 동계 수련회
          </p>
          <h1 className="text-3xl font-black text-slate-900 drop-shadow-sm" style={{ fontFamily: 'serif' }}>
            길 안내를 시작합니다!
          </h1>
        </div>
      </div>

      {/* 하단 메뉴 섹션 - 포스터 하단 정보를 가리지 않도록 깔끔하게 배치 */}
      <div className="relative z-10 pb-8 px-4">
        <div className="mb-4 text-center">
           <p className="text-xs font-bold text-slate-700 bg-white/50 backdrop-blur-md inline-block px-4 py-2 rounded-2xl border border-white/50 shadow-sm">
             {RETREAT_INFO.date} | {RETREAT_INFO.location}
           </p>
        </div>
        
        <div className="grid grid-cols-5 gap-1 bg-white/80 backdrop-blur-2xl p-4 rounded-[2.5rem] shadow-2xl border border-white/40">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center gap-2 group transition-all"
            >
              <div className={`${item.color} p-3 rounded-2xl text-white shadow-md group-active:scale-90 transition-transform`}>
                <item.icon size={22} />
              </div>
              <span className="text-[10px] font-bold text-slate-600">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
