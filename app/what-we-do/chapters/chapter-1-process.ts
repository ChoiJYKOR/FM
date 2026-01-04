import type { Chapter } from '../types';

export const chapter1: Chapter = {
  id: 1,
  title: "전체 공정",
  description: "퓨즈 검수 전체 공정을 소개합니다.",
  images: [
    {
      url: "/images/project0LayoutFinal.png",
      sections: [
        {
          title: "전체 공정 흐름 (Process Flow)",
          description: [
            "[6단계 모듈형 자동화 라인]",
            "1. 데이터 등록: QR 리더기 기반 개별 제품 이력 관리(DB) 시작",
            "2. 외관 검사 (Vision 1): 퓨즈 색상 판별 및 모델 일치 여부 확인",
            "3. 통전 테스트: 로봇 1 & 아두이노 기반 전기 특성 정밀 측정",
            "4. 정밀 조립: 로봇 2를 활용한 퓨즈 케이스 뚜껑 결합",
            "5. 최종 검증 (Vision 2): 조립 상태 확인 및 불량 제품 배출 판정",
            "6. 지능형 적재: 로봇 3 기반 규격별 최종 팔레타이징 공정",
          ],
        },
        {
          title: "핵심 기술 역량 (Core Competencies)",
          description: [
            "[시스템 최적화 및 신뢰성 확보 전략]",
            "분산 처리 시스템: 개별 공정 독립성 확보 및 처리 속도 최적화 설계",
            "고성능 동기화 기술: 컨베이어 / 실린더 / 로봇 간 정밀 동작 타이밍 구현",
            "다단계 품질 교차 검증: 듀얼 비전 카메라 배치를 통한 불량률 0% 지향",
          ],
        },
      ],
    },
    {
      url: "/images/팔레타이징.png",
      sections: [
        {
          title: "기대 효과",
          description: [
            "퓨즈 검수 시간 50% 감소",
            "퓨즈 검수 인력 감소",
            "퓨즈 검수 정확도 향상",
          ],
        },
      ],
    },
  ],
};

