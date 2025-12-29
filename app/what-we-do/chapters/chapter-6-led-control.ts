import type { Chapter } from '../types';
import { codeFiles } from '../code-data';

export const chapter6: Chapter = {
  id: 6,
  title: "조도 센서를 활용한 LED 조절",
  description: "비전 검사 공정에서, 외부 환경에 관계 없이, 일정한 밝기를 제공하기 위해 조도 센서를 활용하여 LED 강도 조절.",
  images: [
    {
      urls: [
        "/images/조명케이스.png",
        "/images/lightingroom/lightdorm1.png",
        "/images/lightingroom/lightdorm2.png",
        "/images/lightingroom/lightdorm3.png",
      ],
      sections: [
        {
          title: "목적",
          description: [
            "외부 환경에 관계 없이 균일하게 통제된 비전 검사 환경 구축",
          ],
        },
        {
          title: "설계 요구 조건",
          description: [
            "비전 검사 이미지 획득 과정에서 생산 라인 주변 환경의 영향을 받지 않도록 하고 조도 및 조명의 조사각 조절이 용이할 것",
          ],
        },
        {
          title: "최종 설계안",
          description: [
            "퓨즈 박스 측면이 중심인 반지름이 18cm인 구에 외접하는 깎은 정이십면체(Truncated Icosahedron) 형태의 암실",
          ],
        },
      ],
    },
    {
      urls: [
        "/images/lightingroom/lightdorm0.png",
        "/images/lightingroom/3D_model.png",
      ],
      sections: [
        {
          title: "3D 프린팅 파츠",
          description: [
            "암실",
            "조명 PCB홀더",
            "아두이노 홀더",
            "퓨즈박스 파레트",
            "뚜껑 공급대",
            "도통 검사 툴",
          ],
        },
      ],
    },
    {
      urls: [
        "/images/DSC00731.jpg",
        "/images/lightingroom/LED.png",
        "/images/lightingroom/UnoR3.png",
        "/images/lightingroom/Arduino.png",
        "/images/lightingroom/FreeCAD.webp",
        "/images/lightingroom/BambuA1mini.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80",
      ],
      sections: [
        {
          title: "사양/제원",
          description: [
            "TSL2591 (조도 센서)",
            "WS2812 (LED 링)",
            "Arduino Uno R3 (MCU: ATmega 328)",
            "Arduino IDE 2.3.7 (MCU 프로그램 개발 툴)",
            "Freecad 1.0.2 (모델링 툴)",
            "Bambu Lab A1 mini, PLA (3D 프린터)",
          ],
        },
      ],
    },
    {
      urls: ["/images/20251223_170017.jpg",
        "/images/lightingroom/20251223_170034.jpg",
      ],
      sections: [
        {
          title: "결과/성과",
          description: [
            "비전 검사 이미지 획득 과정에서 라인 주변 환경의 영향을 받지 않아 4구 퓨즈 박스의 뚜껑 결합 측면 검사에서 결정적 역할",
          ],
        },
        {
          title: "향후 개선 사항",
          description: [
            "바 형태의 조명이 보다 적합했을 것으로 생각되나 설계안 확정 이전에 급히 자재 구매를 했기 때문에 주어진 링 조명을 그대로 사용함(향후에 바 형태의 조명 활용)",
          ],
        },
      ],
    },
    {
      type: 'code' as const,
      language: 'cpp',
      code: codeFiles['led-control'],
      sections: [
        {
          title: "주요 기능",
          description: [
            "TSL2591 조도 센서를 사용하여 환경 밝기를 실시간으로 측정",
            "목표 밝기(120 lux)와 현재 밝기를 비교하여 LED 밝기를 자동으로 조절",
            "WS2812 LED 스트립을 사용하여 조명을 제어",
            "외부 환경 변화에 관계없이 일정한 밝기를 유지하여 비전 검사의 정확도를 향상",
          ],
        },
        {
          title: "동작 원리",
          description: [
            "센서가 현재 환경의 밝기(lux)를 측정",
            "측정된 밝기가 목표 밝기(targetLux)보다 낮으면 LED 밝기를 1씩 증가",
            "측정된 밝기가 목표 밝기보다 높으면 LED 밝기를 1씩 감소",
            "밝기값은 0~255 범위 내에서만 조절되도록 제한함",
            "이 과정을 loop() 함수에서 지속적으로 반복하여 일정한 밝기를 유지",
          ],
        },
      ],
    },
  ],
  reference: "https://visionsystem.kr/technical-info?tpf=board/view&board_code=1&code=889",
};

