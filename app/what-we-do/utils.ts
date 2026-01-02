import type { ImageItem, ImageSection } from './types';

/**
 * Cloudinary URL을 자동으로 최적화합니다.
 * Cloudinary URL이면 자동으로 최적화 파라미터를 추가하고,
 * 그렇지 않으면 원본 URL을 그대로 반환합니다.
 * 
 * @param url - 이미지 URL
 * @param options - 최적화 옵션 (선택사항)
 * @returns 최적화된 URL 또는 원본 URL
 */
export function optimizeImageUrl(
  url: string,
  options?: {
    width?: number;
    quality?: 'auto' | number;
    format?: 'auto' | 'webp' | 'jpg' | 'png';
  }
): string {
  if (!url || typeof url !== 'string') {
    return url;
  }

  // Cloudinary URL인지 확인
  const isCloudinary = url.includes('res.cloudinary.com');
  
  if (!isCloudinary) {
    return url;
  }

  // Cloudinary URL 구조: .../upload/[변환]/[버전]/[파일명]
  // 또는: .../upload/[버전]/[파일명] (변환 없음)
  
  const uploadIndex = url.indexOf('/upload/');
  if (uploadIndex === -1) {
    return url;
  }

  const beforeUpload = url.substring(0, uploadIndex + '/upload/'.length);
  const afterUpload = url.substring(uploadIndex + '/upload/'.length);

  // 이미 변환 파라미터가 있는지 확인 (w_, h_, q_, f_ 등으로 시작하는 경우)
  // 변환 파라미터는 보통 w_, h_, c_, q_, f_ 등으로 시작하고, 버전은 /v 로 시작
  if (afterUpload.match(/^(w_|h_|c_|q_|f_|ar_|dpr_)/)) {
    // 이미 변환 파라미터가 있으면 그대로 반환 (중복 방지)
    return url;
  }

  // 기본 최적화 파라미터 설정
  const width = options?.width || 1920; // 기본 최대 너비
  const quality = options?.quality || 'auto';
  const format = options?.format || 'auto';

  // 변환 파라미터 생성
  const transformations: string[] = [];
  if (width) transformations.push(`w_${width}`);
  if (quality) transformations.push(`q_${quality}`);
  if (format) transformations.push(`f_${format}`);

  const transformationString = transformations.length > 0 
    ? `${transformations.join(',')}/` 
    : '';

  return `${beforeUpload}${transformationString}${afterUpload}`;
}

// 타입 가드 함수: 문자열인지 객체인지 확인
export function isImageObject(image: ImageItem): image is { url?: string; urls?: string[]; description?: string | string[]; title?: string; sections?: ImageSection[] } {
  return typeof image === "object" && image !== null && ("url" in image || "urls" in image);
}

// 타입 가드 함수: 코드 블록인지 확인
export function isCodeBlock(image: ImageItem): image is { type: 'code'; language: string; code: string; sections?: ImageSection[] } {
  return typeof image === "object" && image !== null && "type" in image && image.type === "code";
}

// 이미지 URL 추출 헬퍼 함수 (코드 블록 제외) - 단일 URL 반환 (하위 호환성)
// Cloudinary URL은 자동으로 최적화됩니다.
export function getImageUrl(image: Exclude<ImageItem, { type: 'code'; language: string; code: string; sections?: ImageSection[] }>): string {
  let url = '';
  
  if (isImageObject(image)) {
    if (image.urls && image.urls.length > 0) {
      url = image.urls[0];
    } else {
      url = image.url || '';
    }
  } else if (typeof image === 'string') {
    url = image;
  }
  
  // Cloudinary URL이면 자동으로 최적화
  return optimizeImageUrl(url);
}

// 이미지 URL 배열 추출 헬퍼 함수 (코드 블록 제외)
// Cloudinary URL은 자동으로 최적화됩니다.
export function getImageUrls(image: Exclude<ImageItem, { type: 'code'; language: string; code: string; sections?: ImageSection[] }>): string[] {
  let urls: string[] = [];
  
  if (isImageObject(image)) {
    if (image.urls && image.urls.length > 0) {
      urls = image.urls;
    } else if (image.url) {
      urls = [image.url];
    }
  } else {
    urls = [image];
  }
  
  // 모든 Cloudinary URL을 자동으로 최적화
  return urls.map(url => optimizeImageUrl(url));
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

