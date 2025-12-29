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
  return image;
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
  
  // 이미지 객체인 경우
  if (isImageObject(image)) {
    // sections가 있으면 그것을 사용
    if (image.sections) return image.sections;
    
    // sections가 없고 title이나 description이 있으면 단일 섹션으로 변환
    if (image.title || image.description) {
      return [{
        title: image.title,
        description: image.description || [],
      }];
    }
  }
  
  return undefined;
}

