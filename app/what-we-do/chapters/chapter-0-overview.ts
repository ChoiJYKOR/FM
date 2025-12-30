import type { Chapter } from '../types';

export const chapter0: Chapter = {
  id: 0,
  title: "개요",
  description: "AI를 활용한 퓨즈검수 고도화 프로젝트에 대한 개요를 소개합니다.",
  images: [
    {
      urls: ["/images/PP/PP_1.webp",
      ],
      sections: [
        {
          title: "배경",
          description: [
            "부산인력개발원 팀프로젝트",
            "프로젝트 기간: 11일",
            "참여인원: 9명",
            "상황 설정: 가정용 로봇과 전기차의 대량 보급을 대비하기 위해 FM(퓨즈는 못말려)사는 퓨즈 검수공정 고도화 프로젝트팀을 조직함.",
          ],
        },
      ],
    },
    {
      urls: ["/images/PP/PP_01.webp",
        "/images/PP/PP_02.webp",
        "/images/PP/PP_03.webp",
        "/images/PP/PP_04.webp",
        "/images/PP/PP_05.webp",
        "/images/PP/PP_06.webp",
      ],
      sections: [
        {
          title: "사양/제원",
          description: [
            "QR 리더기 1대",
            "비전 카메라 2대",
            "협동로봇(indy7) 3대",
            "멜섹Q PLC 4대",
            "QD77 서보 3대",
            "HMI 모니터 3대",
          ],
        },
      ],
    },
  ],
};

