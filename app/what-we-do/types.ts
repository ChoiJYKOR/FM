// 이미지 섹션 타입 정의
export type ImageSection = {
  title?: string;
  description: string | string[];
};

// 시각적 아이템 (이미지 또는 코드) 타입 정의
export type VisualItem =
  | { type: 'image'; url: string; caption?: string }
  | { type: 'code'; language: string; code: string; caption?: string };

// 이미지 타입 정의
export type ImageItem =
  | string
  | {
    url?: string;
    urls?: string[];
    items?: VisualItem[]; // 혼합 콘텐츠 지원을 위한 속성 추가
    description?: string | string[];
    title?: string;
    sections?: ImageSection[];
    // 하위 호환성을 위한 속성들 (단일 코드 블록인 경우)
    type?: 'code';
    language?: string;
    code?: string;
  };

// 챕터 타입 정의
export type Chapter = {
  id: number;
  title: string;
  description: string;
  images?: ImageItem[];
  reference?: string;
  specifications?: string | string[];
  technicalDetails?: string | string[];
  results?: string | string[];
  features?: string[];
  expectedEffects?: string[];
};

