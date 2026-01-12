
import React from 'react';
import Header from './Header';
import { INTRO_YOUTUBE_ID } from '../constants';

interface IntroProps {
  onGoHome: () => void;
}

const Intro: React.FC<IntroProps> = ({ onGoHome }) => {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      <Header title="소개 영상" onGoHome={onGoHome} />
      <div className="flex-1 flex flex-col p-4">
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-slate-800 mb-4">수련회 오리엔테이션</h3>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-lg">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${INTRO_YOUTUBE_ID}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-8 space-y-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-700 mb-1">참여 안내</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                2026 동계 수련회에 오신 여러분을 환영합니다! 위 영상을 시청하며 이번 수련회의 주제와 방향을 함께 고민해 봅시다.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-1">준비물 체크</h4>
              <ul className="text-sm text-blue-600 list-disc list-inside">
                <li>성경책, 필기도구</li>
                <li>여벌 옷, 세면도구</li>
                <li>열린 마음과 기대하는 기도</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
