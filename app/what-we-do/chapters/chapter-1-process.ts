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
          title: "사양/제원",
          description: [
            "QR 리더기 1대",
            "비전 카메라 2대",
            "협동로봇(indy7) 3대",
            "멜섹Q PLC 4대",
            "서보 3대",
            "HMI 모니터 3대",
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

