#include <Wire.h>
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
}

