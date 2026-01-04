import type { Chapter } from '../types';


export const chapter2: Chapter = {
  id: 2,
  title: "PLC",
  description: "PLC를 활용한 자동화 공정 제어 시스템.",
  images: [
    {
      urls: [
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767501077/PLC_img_stpy6o.jpg",

      ],
      sections: [
        {
          title: "PLC 분산 제어 아키텍처",
          description: [
            "[공정 구역별 전담 PLC 배치를 통한 독립성 및 안정성 확보]",
            "PLC 10 (입고/검사/통전): 메인 컨베이어 구동 및 1차 비전 검사(색상) 시퀀스 제어, Robot 1과의 정밀 동작 타이밍 구현",
            "PLC 30 (조립/동기화): Robot2를 활용한 케이스 조립 지원",
            "PLC 40 (분류/팔레타이징): Robot3을 활용한 모델별 분류 이송",
            "PLC 50 (집계/모니터링): 공정 마침표 및 8종 품질 데이터(D1~D8) 최종 집계 관리",
          ],
        },
      ],
    },
    {
      urls: [
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767507477/plc_50_data_e7sj9k.png",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767508399/plc_30_4or6_s6msrc.png",
        "https://res.cloudinary.com/dcjij84tc/image/upload/v1767504361/plc_40_sensor_actuator_tz61ae.png"
      ],
      sections: [
        {
          title: "D-Register 기반 '디지털 이력제’",
          description: [
            "[D100: 입고부터 적재까지 제품의 모든 정보를 담는 디지털 여권]",
            "데이터 레지스터 주요 역할 및 기능",
            "모델 식별 (D100): 비전 검사 결과에 따른 모델 번호 저장 (4구=9, 6구=10)",
            "품질 판정 데이터의 실시간 갱신: 통전 검사 후 결과 코드로 데이터 갱신 (예: 4구 불량=4, 6구 불량=7)",
            "데이터 동기화 (PLC10 ↔ PLC50): 로봇 1이 PLC10과 PLC50의 D100에 동시 기록하여 데이터 일관성 유지",
            "최종 결과 통계 (PLC50 D1~D8): 분류 코드 분석을 통해 8가지 품질 카테고리별 수량 카운팅 (D1~D8)",
          ],
        },
      ],
    },
    {
      items: [
        { type: 'image', url: "https://res.cloudinary.com/dcjij84tc/image/upload/v1767508399/plc_30_4or6_s6msrc.png" },
        { type: 'image', url: "https://res.cloudinary.com/dcjij84tc/image/upload/v1767508400/plc_30_emer_lenltq.png" },
        {
          type: 'code',
          language: 'python',
          code: `# 로봇 연결
ROBOT_IP = "192.168.3.4"
ROBOT_NAME = "NRMK-Indy7"
indy = client.IndyDCPClient(ROBOT_IP, ROBOT_NAME)
indy.connect()
print("Indy7 연결 성공")
# PLC 연결
PLC_IP = "192.168.3.40"
PLC_PORT = 1025
PLC_START1 = "M100"   # PLC → Python (4구 퓨즈)
PLC_START2 = "M200"   # PLC → Python (6구 퓨즈)
PLC_DONE1  = "M101"   # Python → PLC (4구 퓨즈)
PLC_DONE2  = "M201"   # Python → PLC (6구 퓨즈)
plc = Type3E()
plc.connect(PLC_IP, PLC_PORT)
print("PLC 연결 성공")`

        },
        {
          type: 'code',
          language: 'python',
          code: `# ==========================================================
# PLC 설정
# ==========================================================
PLC_IP = "192.168.3.10"
PLC_PORT = 1025
CV_RESULT_ADDR = "D100"
NG_SIGNAL = "M102"
OK_SIGNAL = "M103"
WORKING = "M104"
plc = Type3E()
plc.connect(PLC_IP, PLC_PORT)
plc_lock = threading.Lock()

# ==========================================================
# PLC 설정 (결과 전송 PLC)
# ==========================================================
PLC2_IP = "192.168.3.50"
PLC2_PORT = 1025
plc2 = Type3E()
plc2.connect(PLC2_IP, PLC2_PORT)
plc2_lock = threading.Lock()

with plc_lock:
    plc.batchwrite_bitunits(WORKING, [1])`
        }
      ],
      sections: [
        {
          title: "M-Relay 기반 '지능형 핸드쉐이크’",
          description: [
            "[PLC(물리 제어)와 Python(로봇 지능) 간의 실시간 협업 통신]",
            "► Command (PLC → Robot)",
            "M100 / M101: 모델별(6구/4구) 로봇 동작 트리거 신호 발행",
            "M110: 비상 정지 신호를 로봇 파이썬 코드로 즉시 전파하여 장비 보호",
            "► Feedback (Robot → PLC)",
            "M101 / M201: 작업 완료 신호 보고 및 PLC 시퀀스 다음 단계 전환 유도",
            "M104: '로봇 동작 중' 신호로 타 장비 진입 차단 및 안전 인터록 형성",
          ],
        },
      ],
    },
    {
      url: "https://res.cloudinary.com/dcjij84tc/image/upload/v1767501077/PLC_img_stpy6o.jpg",

      sections: [
        {
          title: "PLC 핵심 기술 역량",
          description: [
            "고속 시퀀스 동기화",
            "지능형 핸드쉐이크",
            "실시간 데이터 추적성",
            "비상정지 안전 시스템",
          ],
        },
      ],
    },
  ],
};

