export const sources = {
  planZh: {
    id: 'plan-zh',
    title: '15th Five-Year Plan — official Chinese original',
    language: 'zh',
    url: 'https://www.ndrc.gov.cn/fggz/fzzlgh/gjfzgh/202603/U020260317369114704096.pdf',
    publisher: 'National Development and Reform Commission',
  },
  planEn: {
    id: 'plan-en',
    title: 'Outline of the 15th Five-Year Plan (2026–2030) — English translation',
    language: 'en',
    url: 'https://www.wko.at/vlbg/aussenwirtschaft/euclera-translation-15th-five-year-plan-2026-2030-.pdf',
    publisher: 'WKO / EUCLERA',
  },
} as const;

export const sourceIds = ['planZh', 'planEn'] as const;
export type SourceId = (typeof sourceIds)[number];

export type SourceRef = {
  sourceId: SourceId;
  locator: string;
  page?: string;
  note?: string;
};
