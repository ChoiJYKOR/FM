import type { Chapter } from '../types';
import { codeFiles } from '../code-data';

export const chapter2: Chapter = {
  id: 2,
  title: "PLC",
  description: "PLC 통한 자동화 공정 제어 시스템입니다.",
  images: [
    {
      type: 'code' as const,
      language: 'python',
      code: codeFiles['plc-settings'],
      sections: [
        {
          title: "PLC10: 설정",
          description: [
            "두 개의 PLC와 통신하는 설정 코드",
            "PLC 1 (192.168.3.10): 메인 제어 PLC",
            "PLC 2 (192.168.3.50): 결과 전송 PLC",
            "각 PLC에 대한 IP 주소와 포트 설정",
            "스레드 안전성을 위한 락(lock) 설정",
          ],
        },
      ],
    },
    {
      type: 'code' as const,
      language: 'python',
      code: codeFiles['plc-robot-logic'],
      sections: [
        {
          title: "PLC10: 로봇 제어 로직",
          description: [
            "PLC 락을 사용한 안전한 작업 신호 전송",
            "검출된 값에 따라 로봇 위치 결정 (9: 4구, 10: 6구)",
            "로봇 이동 순서: 접근 위치 → 목표 위치 → 대기",
            "로봇 이동 완료 상태를 확인하며 순차 실행",
          ],
        },
      ],
    },
    {
      type: 'code' as const,
      language: 'python',
      code: codeFiles['plc-quality-control'],
      sections: [
        {
          title: "PLC10: 품질 검사 결과 처리",
          description: [
            "D100 값에 따라 4구(9) 또는 6구(10) 퓨즈 처리",
            "통전 검사 결과에 따른 NG/OK 신호 전송",
            "4구 불량: 결과값 4, 6구 불량: 결과값 7",
            "PLC1과 PLC2에 결과 동기화",
            "신호 전송 후 적절한 대기 시간 설정",
          ],
        },
      ],
    },
  ],
};

