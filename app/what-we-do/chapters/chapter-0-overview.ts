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
          title: "프로젝트 개요",
          description: [
            "핵심 목표: 스마트 퓨즈 검수 및 자동 패키징 시스템 구축",
            "지능형 자동화: Indy7 협동 로봇 & 비전 AI 융합 솔루션",
            "품질 신뢰성: 전 공정 자동화(외관, 통전, 조립, 적재) 및 모듈형 설계",
            "데이터 기반: 개별 공정 정밀 제어를 통한 시스템 신뢰도 확보",
          ],
        },
        {
          title: "프로젝트 배경",
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
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767491011/image_zjpzpy.png",
      ],
      sections: [
        {
          title: "활용 장비",
          description: [
            "QR 리더기 1대",
            "비전 카메라 2대",
            "협동로봇(indy7) 3대",
            "멜섹Q PLC 4대",
            "QD77 + 서보 3대",
            "HMI 모니터 3대",
            "인버터",
            "CC-link",
          ],
        },
      ],
    },
    {
      urls: [
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767499969/type4_good_kpvmra.jpg",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767499976/type6_good_jf4cci.jpg"
      ],
      sections: [
        {
          title: "검수 대상",
          description: [
            "4구 퓨즈 케이스",
            "6구 퓨즈 케이스",

          ],
        },
      ],
    },
  ],
};

