import type { Chapter } from '../types';

export const chapter3: Chapter = {
  id: 3,
  title: "로봇",
  description: "퓨즈 검사와 포장, 그리고 분류까지.",
  images: [
    {
      items: [
        {
          type: 'code',
          language: 'python',
          code: `from pymcprotocol import Type3E
import threading
import time
import paho.mqtt.client as mqtt

# ==========================================================
# MQTT 설정 (아두이노 통전 결과 수신)
# ==========================================================
MQTT_BROKER = "192.168.0.43"
MQTT_PORT = 1884
MQTT_TOPIC_CONDUCTION = "arduino/conduction"

latest_mqtt_result = None
latest_mqtt_payload = ""

def on_message(client, userdata, msg):
    global latest_mqtt_result, latest_mqtt_payload
    try:
        topic = msg.topic
        payload = msg.payload.decode().strip()
        latest_mqtt_payload = payload
        
        # 페이로드: CSV 형식 (예: "1,1,1,0")
        if ',' in payload:
            status_values = [int(val) for val in payload.split(',') if val.strip()]
            # 0이 하나라도 있으면 통전 안됨(NG)
            if 0 in status_values:
                latest_mqtt_result = "NG"
            else:
                latest_mqtt_result = "OK"
            print(f"✓ [MQTT 수신] {topic}: {payload} (결과: {latest_mqtt_result})")
        else:
            latest_mqtt_result = payload
            print(f"[MQTT] Received: {payload}")
            
    except Exception as e:
        print(f"✗ MQTT 메시지 처리 오류: {e}, 메시지: {msg.payload}")

mqtt_client = mqtt.Client()
mqtt_client.on_message = on_message

try:
    mqtt_client.connect(MQTT_BROKER, MQTT_PORT, 60)
    # 4구/6구 공용 수신을 위해 와일드카드 사용
    mqtt_client.subscribe(f"{MQTT_TOPIC_CONDUCTION}/#")
    mqtt_client.loop_start()
    print(f"✓ [MQTT 연결 성공] {MQTT_BROKER}:{MQTT_PORT}")
except Exception as e:
    print(f"✗ [MQTT 연결 실패] {e}")

# ==========================================================
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

# ... (중략) ...

# ==========================================================
# 검사 결과 PLC 전송 및 MQTT 보고 (4구/6구 퓨즈)
# ==========================================================
fuse_type = "4구" if d100_value == 9 else "6구" if d100_value == 10 else "알수없음"

if fuse_type != "알수없음":
    # 1. PLC 전송
    with plc_lock:
        if latest_mqtt_result == "NG":
            print(f"Result: NG ({fuse_type})")
            plc.batchwrite_bitunits(NG_SIGNAL, [1])
            # 4구면 4번, 6구면 7번 에러코드 전송
            error_code = 4 if fuse_type == "4구" else 7
            plc.batchwrite_wordunits(CV_RESULT_ADDR, [error_code])
            time.sleep(2)
            plc.batchwrite_bitunits(NG_SIGNAL, [0])
        elif latest_mqtt_result == "OK":
            print(f"Result: OK ({fuse_type})")
            plc.batchwrite_bitunits(OK_SIGNAL, [1])
            time.sleep(3)
            plc.batchwrite_bitunits(OK_SIGNAL, [0])

    # 3. MQTT로 통전 테스트 상태 최종 전송 (서버 보고용)
    if mqtt_client and mqtt_client.is_connected():
        topic = f"{MQTT_TOPIC_CONDUCTION}/{fuse_type}"
        payload = latest_mqtt_payload if latest_mqtt_payload else "0,0,0,0"
        mqtt_client.publish(topic, payload, qos=0)`
        },
      ],
      sections: [
        {
          title: "[Robot 1] IoT 기반 통전 검사",
          description: [
            "주요 임무: 퓨즈 모델별(4구/6구) 검사 포인트 정밀 이동 및 실시간 통전 상태 전수 분석",
            "MQTT 데이터 처리",
            "PLC 10과 PLC 50에 모델별 에러 코드(4구: 4, 6구: 7) 실시간 기록",
          ],
        },
      ],
    },
    { // Card 2
      items: [
        {
          type: 'code',
          language: 'python',
          code: `from indy_utils import indydcp_client as client
from pymcprotocol import Type3E
import threading
from time import sleep

# [통신 설정]
ROBOT_IP = "192.168.3.3"
PLC_IP = "192.168.3.30"
PLC_PORT = 1025

# [PLC 주소]
ADDR_START_6 = "M100"  # 6구 시작
ADDR_START_4 = "M101"  # 4구 시작
ADDR_DONE    = "M102"  # 공통 완료
ADDR_ESTOP   = "M110"  # 비상 정지

# [공정 로직]
def run_packaging_cycle(model_type):
    # 1. 뚜껑 픽업 (Z축 스택 계산)
    pick_z = stack_pos[2] - (curr_idx * thickness)
    move_safe(target_pick, speed=VEL_SLOW) 
    gripper_control('close') 
    
    # 2. 퓨즈박스 조립 (정밀 하강)
    precise_assembly(fuse_pos)
    gripper_control('open')

    # 3. 완료 및 카운트 리셋/재공급 알림
    if cnt_lid >= MAX_LID_COUNT:
        print(">> [Stop] 뚜껑 모두 소진. 재공급 필요.")

# [PLC 감시]
def plc_monitor():
    while True:
        data = plc.batchread_bitunits(ADDR_START_6, 2)
        if data[0] == 1: # 6구 수신
            run_packaging_cycle(6)
            plc.batchwrite_bitunits(ADDR_DONE, [1])
        elif data[1] == 1: # 4구 수신
            run_packaging_cycle(4)
            plc.batchwrite_bitunits(ADDR_DONE, [1])`
        },
      ],
      sections: [
        {
          title: "[Robot 2] 다품종 패키징 로봇",
          description: [
            "주요 임무: 4구/6구 모델별 뚜껑(Lid) 자동 공급 및 정밀 압입 조립",
            "Z축 자동 보정: 적재된 뚜껑 높이를 계산하여 매 싸이클마다 픽업 높이 자동 보정(Offset)",
            "공압 그리퍼 제어: Indy7 디지털 IO를 통한 진공 그리퍼 정밀 제어",
            "PLC 인터록: 제품 도착 신호 수신 및 조립 완료 피드백 (M100~M112)",
          ],
        },
      ],
    },
    { // Card 3
      items: [
        {
          type: 'code',
          language: 'python',
          code: `from indy_utils import indydcp_client as client
from pymcprotocol import Type3E
import threading
import time

# 로봇 및 PLC 연결
indy = client.IndyDCPClient("192.168.3.4", "NRMK-Indy7")
plc = Type3E()
plc.connect("192.168.3.40", 1025)

# 팔렛타이징 그리드 설정 (2x2x2)
GRID_X, GRID_Y, NUM_LAYERS = 2, 2, 2
LAYER_HEIGHT = 0.06 # 6cm

def get_place_position(NUM):
    layer = NUM // (GRID_X * GRID_Y)
    index = NUM % (GRID_X * GRID_Y)
    row, col = index // GRID_X, index % GRID_X
    # 좌표 계산 로직...
    return [x, y, z]

def plc_monitor():
    while True:
        # PLC 신호 감지 (M100: 4구, M200: 6구)
        if plc.batchread_bitunits("M100", 1)[0] == 1:
            pick()
            place1(NUM1)
            plc.batchwrite_bitunits("M101", [1]) # 완료 보고
        # ...`
        },
      ],
      sections: [
        {
          title: "[Robot 3] 양품 적재 및 팔렛타이징",
          description: [
            "주요 임무: 최종 검사 완료된 양품을 2x2x2 레이어링으로 팔렛타이징 적재",
            "그리드 알고리즘: 적재 개수(NUM)에 따라 X, Y, Z 좌표를 자동 계산하여 3단 적재",
            "멀티 모델 대응: 4구(M100)와 6구(M200) 개별 적재 구역 관리",
            "동기화 제어: PLC와의 핸드쉐이크를 통한 실시간 공정 동기화",
          ],
        },
      ],
    },
  ],
};
