
export type ViewState = 'HOME' | 'SCHEDULE' | 'WORSHIP' | 'HAVRUTA' | 'PRAISE' | 'INTRO';

export interface WorshipInfo {
  title: string;
  time?: string;
  scripture: string;
  speaker: string;
  order: string[];
}

export interface PraiseItem {
  title: string;
  youtubeId: string;
}
