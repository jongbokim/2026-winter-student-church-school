
import React from 'react';
import Header from './Header';
import { Clock, MapPin } from 'lucide-react';

interface ScheduleProps {
  onGoHome: () => void;
}

const ScheduleRow: React.FC<{ 
  time: string; 
  content: string; 
  location?: string;
  isCenter?: boolean; 
  isHighlight?: boolean;
}> = ({ time, content, location, isCenter = false, isHighlight = false }) => (
  <div className={`flex border-b border-emerald-100/60 min-h-[60px] ${isHighlight ? 'bg-emerald-50/50' : 'bg-white'}`}>
    <div className="w-[90px] p-3 flex flex-col justify-center items-center text-xs font-bold text-emerald-600 bg-emerald-50/30 border-r border-emerald-100/60 shrink-0">
      <Clock size={12} className="mb-1 opacity-70" />
      <span className="text-center break-keep">{time}</span>
    </div>
    <div className={`flex-1 p-3 flex flex-col justify-center ${isCenter ? 'items-center text-center' : 'items-start'}`}>
      <span className={`text-slate-800 text-sm ${isCenter ? 'font-bold text-lg text-emerald-800' : 'font-medium'}`}>
        {content}
      </span>
      {location && (
        <span className="text-[10px] text-slate-500 mt-1 flex items-center gap-1 bg-slate-100 px-1.5 py-0.5 rounded">
          <MapPin size={10} /> {location}
        </span>
      )}
    </div>
  </div>
);

const Schedule: React.FC<ScheduleProps> = ({ onGoHome }) => {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      <Header title="일정표" onGoHome={onGoHome} />
      
      <div className="flex-1 overflow-y-auto pb-safe">
        {/* 상단 타이틀 영역 */}
        <div className="bg-white p-6 pb-8 text-center rounded-b-[2rem] shadow-sm mb-4">
          <h2 className="text-xl font-black text-slate-800 mb-2">2026 동계 수련회</h2>
          <div className="inline-block bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100 mb-3">
             <p className="text-emerald-700 font-bold text-sm">주제 : 길 안내를 시작합니다! (잠16:9)</p>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed break-keep px-4">
            길 (진로, 신앙, 학업 등의 고민에 대한 진솔한 대화와 그 고민에 함께 하시는 하나님의 인도하심을 나눔)
          </p>
        </div>

        {/* 1일차 */}
        <div className="mx-4 mb-6 rounded-2xl overflow-hidden shadow-sm border border-emerald-100">
          <div className="bg-emerald-500 text-white p-3 text-center font-bold text-sm flex items-center justify-center gap-2">
            <span className="bg-white/20 px-2 py-0.5 rounded text-xs">Day 1</span>
            1.17 (토) 첫째 날
          </div>
          <div className="bg-white">
            <ScheduleRow time="~ 12:00" content="입 소" isCenter={true} isHighlight={true} />
            <ScheduleRow time="12:00 ~ 13:00" content="점심" location="식당" />
            <ScheduleRow time="13:00 ~ 14:00" content="예배 및 O.T." location="대성전" isHighlight={true} />
            <ScheduleRow time="14:00 ~ 15:00" content="조별모임" location="자기소개 및 고민나눔" />
            <ScheduleRow time="15:00 ~ 17:00" content="레크레이션" location="대성전" isHighlight={true} />
            <ScheduleRow time="17:00 ~ 18:00" content="조별 하브루타" location="영성관 각 방" />
            <ScheduleRow time="18:00 ~ 19:00" content="저녁식사" location="식당" />
            <ScheduleRow time="19:00 ~ 20:00" content="토크쇼" location="영상실 (학생들 고민 나눔)" isHighlight={true} />
            <ScheduleRow time="20:00 ~ 21:00" content="찬양기도회" location="대성전" />
            <ScheduleRow time="21:00 ~ 22:00" content="간식" location="식당" />
            <div className="p-4 text-center bg-slate-50 text-slate-500 text-sm font-medium border-t border-slate-100">
              🌙 자유시간 및 취침
            </div>
          </div>
        </div>

        {/* 2일차 */}
        <div className="mx-4 mb-8 rounded-2xl overflow-hidden shadow-sm border border-emerald-100">
          <div className="bg-emerald-600 text-white p-3 text-center font-bold text-sm flex items-center justify-center gap-2">
            <span className="bg-white/20 px-2 py-0.5 rounded text-xs">Day 2</span>
            1.18 (일) 둘째 날
          </div>
          <div className="bg-emerald-50 p-2 text-center text-emerald-600 text-xs font-bold border-b border-emerald-100">
             ☀️ 아침해가 밝았습니다 ^^
          </div>
          <div className="bg-white">
            <ScheduleRow time="08:00 ~ 09:00" content="아침 식사" location="식당" />
            <ScheduleRow time="09:00 ~ 10:00" content="정리 및 예배 준비" />
            <ScheduleRow time="09:30 ~ 10:00" content="주일 예배" location="영상실" isHighlight={true} />
            <ScheduleRow time="11:00 ~ 11:30" content="방, 짐 정리" />
            <ScheduleRow time="11:30 ~ 13:00" content="달란트 시장" location="식당" isHighlight={true} />
          </div>
        </div>

        {/* 하단 메시지 */}
        <div className="text-center pb-8 opacity-80">
          <p className="text-lg font-black text-emerald-800">다음에 만나요 ^^</p>
          <div className="w-12 h-1 bg-emerald-300 mx-auto rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
