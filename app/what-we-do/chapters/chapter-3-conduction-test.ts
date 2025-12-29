import type { Chapter } from '../types';

export const chapter3: Chapter = {
  id: 3,
  title: "통전 테스트",
  description: "각 퓨즈의 전기적 특성을 정확하게 측정하고 검증합니다.",
  images: [
    {
      url: "/images/20251223_180646.jpg",
      sections: [
        {
          title: "주요 특징",
          description: [
            "PogoPin에 5V 전류를 흘려 전압이 0V인지 5V가 측정되는지 확인"
          ],
        },
      ],
    },
    {
      url: "/images/20251223_180632.jpg",
      sections: [
        {
          title: "작동방식",
          description: [
            "테스트 지그에 작착되 아두이노 MEGA"
          ],
        },
      ],
    },
    {
      url: "/images/스크린샷 2025-12-29 오전 7.13.27.png",
      sections: [
        {
          title: "작동방식",
          description: [
            "정상이면 0V가 출력됨"
          ],
        },
      ],
    },
    {
      url: "/images/스크린샷 2025-12-29 오전 7.13.45.png",
      sections: [
        {
          title: "작동방식",
          description: [
            "비정상이면 5V가 출력됨"
          ],
        },
      ],
    },
  ],
};

