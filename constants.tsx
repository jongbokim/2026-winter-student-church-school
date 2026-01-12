
import { WorshipInfo, PraiseItem } from './types';

export const HAVRUTA_QUESTIONS = [
  "최근에 내가 계획했거나 기대했는데, 완전히 빗나가서 당황했던(혹은 웃겼던) 사소한 경험이 있나요? (예: 라면 물 조절 실패, 머리 망친 것, 놀러 가려는데 비 온 것 등)",
  "요즘 여러분의 머릿속을 가장 꽉 채우고 있는 '고민'이나 '목표'는 무엇인가요? (성적, 외모, 친구, 용돈, 게임 레벨 등)",
  "만약 내가 요셉이라면, 나를 노예로 팔아버린 형들을 총리가 되어 다시 만났을 때, 솔직히 첫마디로 뭐라고 했을까요? (성경의 정답 말고, 솔직한 내 심정)",
  "요셉에게 '감옥 2년'이나 '노예 생활'은 삭제하고 싶은 흑역사였을 겁니다. 여러분 인생에서 지우고 싶은 '실패'나 '상처'의 순간이 있나요? 설교를 듣고 난 지금, 그 사건을 다르게 해석해 볼 수 있을까요?",
  "배상민 교수님은 화려하지만 쓸모없는 것을 '아름다운 쓰레기'라고 했어요. 내 방에 있는 물건 중 '비싸지만 별 쓸모 없는 것'과 '볼품없지만 진짜 소중한 것'은 무엇인가요?",
  "교수님은 자신을 '하나님의 도구'이라고 했습니다. 하나님이 나라는 도구(재능, 성격)를 통해서 세상에 어떤 것을 만드시길 원하실까요?",
  "지금 당장 하나님께 \"제발 이건 하나님이 운전해주세요! 전 못해요!\"라고 맡기고 싶은 가장 큰 걱정거리 딱 하나는 무엇인가요?",
  "잠언 16장 9절은 \"사람이 계획할지라도, 인도는 하나님이 하신다.\"고 합니다. 그렇다면 우리는 '열심히 계획'해야 할까요, 아니면 '어차피 하나님 뜻대로 되니 대충' 살아야 할까요? 나의 노력과 하나님의 인도는 어떤 관계일까요?"
];

export const OPENING_WORSHIP: WorshipInfo = {
  title: "개회 예배",
  time: "1.17(토) 13:00",
  scripture: "잠언 16:9",
  speaker: "목사",
  order: [
    "묵도",
    "찬양 - 563장 '예수 사랑하심은'",
    "대표 기도",
    "성경 봉독 - 잠언 16:9",
    "설교 - '운전을 내가? 아니 하나님이!'",
    "찬양 - 570장 '주는 나를 기르시는 목자'",
    "광고",
    "축도"
  ]
};

export const SUNDAY_WORSHIP: WorshipInfo = {
  title: "주일 예배",
  time: "1.18(일) 09:30",
  scripture: "창세기 49:28",
  speaker: "목사",
  order: [
    "묵도",
    "찬양 - 384장",
    "대표 기도",
    "성경 봉독 - 창세기 49:28",
    "설교 - '나의 축복을 찾아서'",
    "찬양 - 620장",
    "광고",
    "축도"
  ]
};

export const PRAISE_LIST: PraiseItem[] = [
  { title: "위러브 - 친구여 함께 노래해", youtubeId: "hvlWFoK56dg" },
  { title: "제이어스 - 시편 139편", youtubeId: "wpBQVkjpqtw" },
  { title: "위러브 - 우리가 주를 더욱 사랑하고", youtubeId: "aZKVBRA_hAg" },
  { title: "제이어스 - 내 모습 이대로", youtubeId: "FV5nMb93UwY" },
  { title: "위클레시아 - 우리는 주의 움직이는 교회", youtubeId: "OWb3XQH5aS4" },
  { title: "위러브 - 당신의 날에", youtubeId: "J5Mh2nEC5C0" },
  { title: "호산나 싱어즈 - 천년이 두 번 지나도", youtubeId: "1pP-unWkxy4" },
  { title: "마커스 워십 - 꽃들도", youtubeId: "ikDAbK4uZzg" }
];

export const INTRO_YOUTUBE_ID = "T7wJDj-lc18"; 
// 포스터 이미지 배경
export const BACKGROUND_IMAGE_URL = "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=2070&auto=format&fit=crop";

export const RETREAT_INFO = {
  date: "2026.01.17 ~ 18",
  location: "금산 수양관",
  theme: "길 안내를 시작합니다!"
};
