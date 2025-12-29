// 이미지 섹션 타입 정의
export type ImageSection = {
  title?: string;
  description: string | string[];
};

// 이미지 타입 정의
export type ImageItem = 
  | string 
  | { 
      url?: string;
      urls?: string[];
      description?: string | string[]; 
      title?: string;
      sections?: ImageSection[];
    }
  | {
      type: 'code';
      language: string;
      code: string;
      sections?: ImageSection[];
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

