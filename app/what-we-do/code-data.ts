// 코드 파일들을 TypeScript 상수로 export
// 이 파일은 code/ 디렉토리의 원본 파일들을 참조합니다.

export const codeFiles = {
  'led-control': `#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_TSL2591.h>
#include <Adafruit_NeoPixel.h>

int brightness = 128;

// 조도 센서 TSL2591 객체 생성
Adafruit_TSL2591 tsl = Adafruit_TSL2591(2591);

// LED 조명 WS2812 설정
#define LEDPin    3       // WS2812 데이터 핀
#define LEDCount  8       // LED 개수 (필요에 맞게 변경)
Adafruit_NeoPixel strip(LEDCount, LEDPin, NEO_GRB + NEO_KHZ800);

// 목표 밝기 (lux)
const uint32_t targetLux = 120;

void setup() {
  Serial.begin(9600);

  // 센서 초기화
  if (tsl.begin()) {
    Serial.println("TSL2591 센서 초기화 성공!");
  } else {
    Serial.println("TSL2591 센서를 찾을 수 없습니다.");
    while (1);
  }

  tsl.setGain(TSL2591_GAIN_MED);
  tsl.setTiming(TSL2591_INTEGRATIONTIME_100MS);

  // LED 초기화
  strip.begin();
  strip.show(); // 모든 LED 끄기
}
void loop() {
  // 채널별 데이터 읽기
  uint32_t full = tsl.getFullLuminosity();   // 전체 채널 (IR + Visible)
  uint16_t ir   = full >> 16;                // 상위 16비트 = IR
  uint16_t vis  = full & 0xFFFF;             // 하위 16비트 = Visible

  // lux 계산
  float lux = tsl.calculateLux(vis, ir);

  // 목표 밝기와 비교해서 LED 밝기 보정
  
  if (lux < targetLux) 
  {
    brightness = brightness + 1;
    if (brightness > 255) brightness = 255;
  } 
  else 
  {
    brightness = brightness - 1;
    if (brightness < 0) brightness = 0;
  }

  // LED 적용
  strip.setBrightness(brightness);
  for (int i = 0; i < LEDCount; i++)
  {
    strip.setPixelColor(i, strip.Color(255, 255, 255));
  }
  strip.show();

  // 디버깅 출력
  Serial.print("현재 Lux: ");
  Serial.print(lux);
  Serial.print(" | LED 밝기: ");
  Serial.println(brightness);
}`,
  'plc-settings': `# ==========================================================
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
plc2_lock = threading.Lock()`,
  'plc-robot-logic': `with plc_lock:
    plc.batchwrite_bitunits(WORKING, [1])

# 9 -> 4구, 10 -> 6구
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

indy.task_move_to(target)
while not indy.get_robot_status()['movedone']:
    time.sleep(0.05)

time.sleep(2)`,
  'plc-quality-control': `if d100_value == 9:
    with plc_lock:
        if di7 == 1:  # 4구 통전 불량
            plc.batchwrite_bitunits(NG_SIGNAL, [1])
            plc.batchwrite_wordunits(CV_RESULT_ADDR, [4])
            time.sleep(2)
            plc.batchwrite_bitunits(NG_SIGNAL, [0])
        elif di8 == 1:  # 4구 양품 유지
            plc.batchwrite_bitunits(OK_SIGNAL, [1])
            time.sleep(3)
            plc.batchwrite_bitunits(OK_SIGNAL, [0])
    
    # PLC2에도 최종 결과 동기화
    with plc2_lock:
        if di7 == 1:
            plc2.batchwrite_wordunits("D100", [4])

elif d100_value == 10:
    with plc_lock:
        if di7 == 1:  # 6구 통전 불량
            plc.batchwrite_bitunits(NG_SIGNAL, [1])
            plc.batchwrite_wordunits(CV_RESULT_ADDR, [7])
            time.sleep(2)
            plc.batchwrite_bitunits(NG_SIGNAL, [0])
        elif di8 == 1:  # 6구 양품 유지
            plc.batchwrite_bitunits(OK_SIGNAL, [1])
            time.sleep(3)
            plc.batchwrite_bitunits(OK_SIGNAL, [0])
    
    with plc2_lock:
        if di7 == 1:
            plc2.batchwrite_wordunits("D100", [7])`,
};

