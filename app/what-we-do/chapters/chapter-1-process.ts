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
          title: "공정 흐름",
          description: [
            "1) QR 리더기를 통한 제품 DB 등록",
            "2) 비전 카메라를 통한 제품 검사(퓨즈 색상)",
            "3) 지그 테스트 로봇을 통한 제품 검사(통전)",
            "4) 로봇을 활용한 퓨즈 케이스 뚜껑 결합",
            "5) 비전 카메라를 통한 제품 검사(뚜껑 결합)",
            "6) 로봇을 활용한 제품별 팔레타이징",
          ],
        },
        {
          title: "주요 특징",
          description: [
            "QR을 활용한 제품 이력 추적",
            "3단계 품질 검사",
            "MQTT 통신을 활용한 실시간 모니터링",
            "자동화된 제품 사이즈별 포장",
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

