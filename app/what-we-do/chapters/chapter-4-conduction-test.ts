import type { Chapter } from '../types';

export const chapter4: Chapter = {
  id: 4,
  title: "통전 테스트",
  description: "각 퓨즈의 전기적 특성을 정확하게 측정하고 검증합니다.",
  images: [
    {
      urls: [

        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767510490/Arduino_cir_evovkw.png",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767512616/20251223_180646_r8qntt_ttkgex.jpg",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767126203/ArduinoMega_drs9vh.jpg",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767510741/photo_2026-01-04_16-11-36_rbtndo.jpg",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767510739/photo_2026-01-04_16-11-38_x9d1et.jpg"
      ],
      sections: [
        {
          title: "INPUT_PULLUP 기반 회로 설계",
          description: [
            "회로 효율성: 아두이노 내부 풀업 저항을 활용한 회로 간소화 및 부품 비용 절감",
            "노이즈 억제: 상시 5V 인가를 통해 외부 전자기적 노이즈에 의한 오작동 방지",
            "회로도: Digital input 핀(INPUT_PULLUP) → 저항 → 퓨즈 → GND",
            "전기적 동작: 퓨즈 정상 LOW, 퓨즈 불량 HIGH"
          ],
        },
        {
          title: "데이터 반전 알고리즘",
          description: [
            "부논리 제어: 전기 신호(LOW)를 품질 데이터(1)로, 전기신호(HIGH)를 품질 데이터(0)로 매핑하는 소프트웨어 반전 로직 구현",
          ],
        },

      ],
    },
    {
      url: "https://res.cloudinary.com/dcjij84tc/image/upload/v1767099148/HMI_02_gquhhh.png",
      sections: [
        {
          title: "MQTT 송출",
          description: [

            "직관적 데이터화: 상위 시스템(HMI/DB)에서 추가 연산 없이 즉시 사용 가능한 데이터 구조 확립",
            "실시간 통신: 반전된 정수형 데이터를 MQTT 토픽을 통해 초고속 발행"
          ],
        },
      ],
    },
    {
      urls: [

        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767099148/HMI_01_cibe5a.png",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767099148/HMI_02_gquhhh.png",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767099149/HMI_03_yq85gt.png",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767099149/HMI_04_uumqfk.png",

      ],
      sections: [
        {
          title: "통합 품질 이력 관리 (Main Server & DB)",
          description: [
            "입고 시 스캔된 QR 정보와 통전 결과를 메인 서버 DB에서 1:1 매칭",
            "개별 제품별 품질 검사 이력을 아카이빙하여 사후 추적성 확보",
            "PLC50과 연동된 최종 불량 집계로 공정 수율 실시간 파악 가능"
          ],
        },
      ],
    },
    {
      urls: [
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767099155/2025-12-27_15-36-02_j5cr3p.jpg",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767099154/2025-12-27_15-36-16_uhhotk.jpg",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767099156/2025-12-27_15-36-25_psgufv.jpg",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767099155/2025-12-27_15-36-35_trcr0o.jpg",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767099153/2025-12-27_15-36-50_ozp7dj.jpg",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767099154/2025-12-27_15-36-57_rhha6o.jpg",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767099153/2025-12-27_15-37-10_krexar.jpg",
      ],
      sections: [
        {
          title: "대시보드",
          description: [
            "입고 시 스캔된 QR 정보와 통전 결과를 메인 서버 DB에서 1:1 매칭",
            "개별 제품별 품질 검사 이력을 아카이빙하여 사후 추적성 확보",
            "PLC50과 연동된 최종 불량 집계로 공정 수율 실시간 파악 가능"
          ],
        },
      ],
    },
  ],
};

