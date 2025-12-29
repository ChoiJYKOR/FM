import type { ImageItem, ImageSection } from './types';

// 타입 가드 함수: 문자열인지 객체인지 확인
export function isImageObject(image: ImageItem): image is { url?: string; urls?: string[]; description?: string | string[]; title?: string; sections?: ImageSection[] } {
  return typeof image === "object" && image !== null && ("url" in image || "urls" in image);
}

// 타입 가드 함수: 코드 블록인지 확인
export function isCodeBlock(image: ImageItem): image is { type: 'code'; language: string; code: string; sections?: ImageSection[] } {
  return typeof image === "object" && image !== null && "type" in image && image.type === "code";
}

// 이미지 URL 추출 헬퍼 함수 (코드 블록 제외) - 단일 URL 반환 (하위 호환성)
export function getImageUrl(image: Exclude<ImageItem, { type: 'code'; language: string; code: string; sections?: ImageSection[] }>): string {
  if (isImageObject(image)) {
    if (image.urls && image.urls.length > 0) {
      return image.urls[0];
    }
    return image.url || '';
  }
  // 문자열인 경우 그대로 반환
  if (typeof image === 'string') {
    return image;
  }
  // 객체인데 url이나 urls가 없는 경우 빈 문자열 반환
  return '';
}

// 이미지 URL 배열 추출 헬퍼 함수 (코드 블록 제외)
export function getImageUrls(image: Exclude<ImageItem, { type: 'code'; language: string; code: string; sections?: ImageSection[] }>): string[] {
  if (isImageObject(image)) {
    if (image.urls && image.urls.length > 0) {
      return image.urls;
    }
    if (image.url) {
      return [image.url];
    }
    return [];
  }
  return [image];
}

// 이미지 섹션들 추출 헬퍼 함수
export function getImageSections(image: ImageItem): ImageSection[] | undefined {
  // 코드 블록인 경우
  if (isCodeBlock(image)) {
    return image.sections;
  }
  
  // 이미지 객체인 경우 (url이 있든 없든 sections만 있어도 처리)
  if (typeof image === "object" && image !== null && !isCodeBlock(image)) {
    const imageObj = image as { url?: string; urls?: string[]; description?: string | string[]; title?: string; sections?: ImageSection[] };
    
    // sections가 있으면 그것을 사용
    if (imageObj.sections) return imageObj.sections;
    
    // sections가 없고 title이나 description이 있으면 단일 섹션으로 변환
    if (imageObj.title || imageObj.description) {
      return [{
        title: imageObj.title,
        description: imageObj.description || [],
      }];
    }
  }
  
  return undefined;
}

