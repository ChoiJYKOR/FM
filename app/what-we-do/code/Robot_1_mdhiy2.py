from pymcprotocol import Type3E
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

# ==========================================================
# PLC 설정 (결과 전송 PLC)
# ==========================================================
PLC2_IP = "192.168.3.50"
PLC2_PORT = 1025
plc2 = Type3E()
plc2.connect(PLC2_IP, PLC2_PORT)
plc2_lock = threading.Lock()

with plc_lock:
    plc.batchwrite_bitunits(WORKING, [1])

# ==========================================================
# 검사 위치 설정 및 로봇 이동 (9 -> 4구, 10 -> 6구)
# ==========================================================
if detected_value == 9:
    approach, target, back = POS_A_APPROACH, POS_A_TARGET, POS_A_BACK
elif detected_value == 10:
    approach, target, back = POS_B_APPROACH, POS_B_TARGET, POS_B_BACK
else:
    robot_state = STATE_IDLE
    task_queue.task_done()
    continue

indy.task_move_to(approach)
while not indy.get_robot_status()['movedone']:
    time.sleep(0.05)

# 결과 초기화 (이전 결과 영향을 받지 않도록)
latest_mqtt_result = None

indy.task_move_to(target)
while not indy.get_robot_status()['movedone']:
    time.sleep(0.05)

# 통전 테스트 대기 (로봇이 타겟에 도착 후 일정 시간 대기하며 MQTT 수신 확인)
# 실제 환경에 맞춰 대기 시간 조정 필요
print("Waiting for conductivity result...")
time.sleep(2) 

def log_communication(direction, cmd_type, topic, payload, protocol, success):
    status = "성공" if success else "실패"
    print(f"[{protocol} {direction}] {cmd_type} {status} - 토픽: {topic}, 페이로드: {payload}")

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
        else:
            print(f"⚠️ [통전 테스트] {fuse_type} 결과 수신 대기 초과 또는 데이터 오류 (현재: {latest_mqtt_result})")

    # 2. PLC2 동기화 (불량인 경우만 전송하는 기존 로직 유지)
    if latest_mqtt_result == "NG":
        with plc2_lock:
            error_code = 4 if fuse_type == "4구" else 7
            plc2.batchwrite_wordunits("D100", [error_code])

    # 3. MQTT로 통전 테스트 상태 최종 전송 (서버 보고용)
    if mqtt_client and mqtt_client.is_connected():
        # 토픽: arduino/conduction/4구 또는 arduino/conduction/6구
        topic = f"{MQTT_TOPIC_CONDUCTION}/{fuse_type}"
        # 받은 페이로드(CSV)를 그대로 서버로 전달하거나 가공하여 전송
        payload = latest_mqtt_payload if latest_mqtt_payload else "0,0,0,0"
        
        result = mqtt_client.publish(topic, payload, qos=0)
        if result.rc == mqtt.MQTT_ERR_SUCCESS:
            print(f"✓ [MQTT 전송] 통전 테스트 {fuse_type}: {payload} (토픽: {topic})")
            log_communication("OUT", "CONDUCTION", topic, payload, "MQTT", True)
        else:
            print(f"✗ [MQTT 전송 실패] 통전 테스트 {fuse_type}, 에러 코드: {result.rc}")
            log_communication("OUT", "CONDUCTION", topic, payload, "MQTT", False)
else:
    print(f"⚠️ [통전 테스트] 알 수 없는 퓨즈 타입: {d100_value}")

