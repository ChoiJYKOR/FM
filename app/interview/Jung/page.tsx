import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function JungInterviewPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <article className="pt-20 md:pt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              FM Safety 정재영 연구원 인터뷰
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-2">
              "결함 감지 시스템 구축의 분투기"
            </h2>
            <h3 className="text-lg md:text-xl text-gray-500 mb-6">
              산업용 퓨즈의 100% 신뢰성을 위한 다층 검증 아키텍처 개발 사례
            </h3>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              {/* 들어가며 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  들어가며
                </h2>
                <p className="text-base md:text-lg">
                  FM Safety는 자동차 및 로보틱스 업계에 공급되는 고안전 퓨즈 제조업체다. 고객들이 요구하는 것은 단순 명확하다: <strong>절대 고장나지 않는 퓨즈</strong>. 이 불가능해 보이는 미션을 실현하기 위해 팀을 이끌어온 정재영 연구원을 만났다. CNN부터 YOLO, 그리고 엣지 컴퓨팅까지—기술과 현장의 간극을 메워낸 그의 3년간의 도전기를 들어본다.
                </p>
              </section>

              <hr className="my-12 border-gray-200" />

              {/* Part 1 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Part 1: 문제의 발견
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                  "눈으로 하는 검사는 한계가 있었습니다"
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-base md:text-lg font-semibold mb-3">
                      Q: 이 프로젝트를 시작하게 된 계기는 무엇이었나요?
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-base md:text-lg italic">
                        정재영 연구원: "초기에는 전형적인 산업용 제조 회사였어요. 매뉴얼 검사원 15명이 하루종일 컨베이어 벨트 위를 지나가는 퓨즈를 육안으로 검사했죠. 그런데 문제가 있었어요. 첫째, 생산량 대비 검사 용량 부족. 월 72만 개 생산인데 검사원들의 시간이 부족했거든요. 둘째, 정합성(consistency) 문제. 같은 퓨즈를 아침에 검사할 때와 오후에 검사할 때 판정이 달랐어요. 피로도에 따라 합격/불합격 기준이 달라졌다는 뜻인데, 이건 고객 신뢰도에 직결되는 심각한 문제였습니다."
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-semibold mb-3">
                      Q: 그래서 AI 기반 시스템을 도입하기로 결정한 건가요?
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-base md:text-lg italic">
                        "직관적인 결정이 아니었어요. 처음엔 고급 카메라를 여러 개 구입해서 더 나은 광학 검사(optical inspection) 시스템을 만들려고 했죠. 그런데 R&D 팀 내에서 젊은 엔지니어가 제안했어요. '우리가 수집한 이미지 데이터를 머신러닝 모델에 학습시킬 수 있지 않을까?'라고요. 처음엔 회의적이었어요. 제조 산업에서 딥러닝 도입은 꽤 진취적인 결정이거든요. 하지만 계산해보니 비용-효과 분석이 명확했어요."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              {/* Part 2 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Part 2: 기술 스택의 진화
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                  CNN에서 YOLO, 그리고 다중 카메라 아키텍처까지
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-base md:text-lg font-semibold mb-3">
                      Q: 기술 선택 과정을 구체적으로 설명해 주실 수 있을까요?
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-base md:text-lg italic mb-4">
                        "2022년 초, 우리는 Convolutional Neural Networks(CNN) 기반 이미지 분류 모델부터 시작했어요. 간단했죠—정상/불량 이진 분류 문제로 정의하고, ResNet50을 베이스로 한 모델을 만들었습니다. 사전학습된 ImageNet 가중치를 이용한 전이학습(transfer learning)으로 2주 안에 프로토타입을 완성했죠."
                      </p>
                      <p className="text-base md:text-lg italic">
                        "근데 생산 라인에 올렸을 때 문제가 드러났어요. <strong>지연시간(latency)</strong> 문제였어요. 초당 3~5개 퓨즈가 컨베이어 위를 지나가는데, CNN 모델은 이미지당 평균 200ms가 걸렸거든요. 수학적으로 따지면 초당 4~5개 정도의 처리량인데, 공정 속도와 맞지 않았어요. 그리고 더 중요한 문제가 있었어요: 모델이 '불량'이라고 판정해도 '어디가' 불량인지 알 수 없었어요."
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-semibold mb-3">
                      Q: YOLO로 전환한 이유가 그것이었나요?
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-base md:text-lg italic mb-4">
                        "정확해요. 2022년 중반, YOLOv8을 적용해보기로 결정했어요. YOLO의 장점은 두 가지였어요. 첫째, <strong>Real-time Object Detection</strong>. 초당 30프레임을 처리할 수 있었어요. 라텐시가 200ms에서 30ms로 떨어졌어요. 거의 6.7배 성능 향상이었죠. 둘째, <strong>Bounding Box 출력</strong>. 모델이 단순히 '불량'이라고만 말하는 게 아니라, 이미지의 어느 위치(x, y 좌표)에서 어떤 크기의 영역(width, height)이 문제인지 구체적으로 알려줬어요."
                      </p>
                      <p className="text-base md:text-lg italic">
                        "아, 그리고 하드웨어 제약도 있었어요. CNN은 GPU 메모리를 많이 써서 고사양 장비가 필요했는데, YOLO는 가벼워서 Jetson Nano 같은 엣지 디바이스에도 올릴 수 있었어요."
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-semibold mb-3">
                      Q: 현재 다중 카메라 시스템으로 운영한다고 들었는데, 그 구조를 설명해 주실 수 있나요?
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-base md:text-lg italic mb-4">
                        "네. 우리 검사 라인에는 총 3개의 산업용 카메라(GigE Vision 기반, 5MP)가 배치돼 있어요:"
                      </p>
                      <div className="space-y-4 text-base md:text-lg">
                        <div>
                          <p className="font-semibold mb-2">카메라 1 (정면/Top View)</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>역할: 퓨즈의 외형 결함 감지 (와이어 손상, 캡 변형)</li>
                            <li>YOLO 모델: YOLOv11n (Nano 버전)</li>
                            <li>처리 시간: ~28ms</li>
                            <li>감지 클래스: wire_damage, cap_deformation, solder_bridge</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">카메라 2 (측면/Side View)</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>역할: 와이어 정렬성, 캡 높이, 접합부 검사</li>
                            <li>처리 시간: ~30ms</li>
                            <li>감지 클래스: wire_misalignment, cap_height_out_of_spec</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">카메라 3 (색상/Color Fidelity)</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>역할: RGB 스펙트럼 분석, 마킹 선명도</li>
                            <li>처리: 기본 CNN 분류 모델 (ResNet18)</li>
                            <li>처리 시간: ~25ms</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-base md:text-lg italic mt-4">
                        "3개 모두를 순차적으로 실행해도 총 지연시간은 ~85ms에 불과해요. 공정 속도(프레임당 200ms 이상)를 충분히 감당할 수 있죠. 그리고 <strong>병렬 처리 최적화</strong>를 했어요. 각 카메라의 이미지를 동시에 받아서 GPU의 다른 스트림에 할당하면 실제로는 더 빠르게 처리돼요."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              {/* Part 3 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Part 3: 데이터 수집과 라벨링의 고통
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                  "이론과 현실의 간극을 메우다"
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-base md:text-lg font-semibold mb-3">
                      Q: 다음 단계로 넘어가기 전에, 데이터 수집 과정이 어떻게 진행됐는지 궁금합니다.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-base md:text-lg italic mb-4">
                        "이거 정말 대화할 게 많아요. 이론적으로는 딥러닝 모델을 학습하려면 양질의 데이터셋이 필요하다고 배웠어요. 하지만 현실은? 우리는 처음에 정상 퓨즈 데이터만 넉넉했어요. 불량품 샘플을 모으는 게 얼마나 어렵고 비용이 많이 드는지 몰랐거든요."
                      </p>
                      <p className="text-base md:text-lg italic mb-4">
                        "전략을 바꿨어요. <strong>Synthetic Data Augmentation</strong>을 적극 활용했어요. 원본 정상 이미지 5,000장을 기반으로:"
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-base md:text-lg">
                        <li>회전: ±5도</li>
                        <li>밝기 조정: -10% ~ +10%</li>
                        <li>가우시안 노이즈 추가: σ=0.02</li>
                        <li>좌우 반전, 작은 이동(±3픽셀)</li>
                        <li>동적 범위 압축: gamma correction</li>
                      </ul>
                      <p className="text-base md:text-lg italic mt-4">
                        "이렇게 하면 1장의 이미지가 약 50개의 변형된 버전으로 늘어나요. 결과적으로 5,000 × 50 = 250,000장의 훈련 데이터를 만들 수 있었어요. 물론 불량품도 마찬가지로 처리했구요."
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-semibold mb-3">
                      Q: 라벨링은 어떻게 했나요? 전문적인 라벨링 회사를 썼나요?
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-base md:text-lg italic">
                        "아니요, 우리가 했어요. 처음엔 모두 수기(manual annotation)로 했거든요. 불량 이미지를 보고, 각 이미지마다 객체(object)의 위치를 정의해야 했어요. 좌상단(top-left) 좌표와 우하단(bottom-right) 좌표를 bounding box 형식으로 기록했죠. 한 이미지당 평균 3~5분이 걸렸어요. 결국 1,200명의 손으로 라벨링한 시간이... (웃음)"
                      </p>
                      <p className="text-base md:text-lg italic mt-4">
                        "나중에는 CVAT(Computer Vision Annotation Tool) 같은 오픈소스 도구를 도입해서 프로세스를 자동화했어요. 그런 다음 'Active Learning' 기법을 썼어요. 모델이 학습하면서 '이건 정말 애매한데?'라고 판단하는 이미지들을 자동으로 flagging해서, 우리가 그런 것들만 다시 라벨링하는 식으로요. 이렇게 하면 라벨링 비용을 60% 줄일 수 있었어요."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              {/* Part 4 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Part 4: 다층 검증 아키텍처 설계
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                  "AI만으로는 부족했다"
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-base md:text-lg font-semibold mb-3">
                      Q: YOLO 모델 자체의 정확도는 어느 정도 수준이었나요?
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-base md:text-lg italic">
                        "초기 YOLO 모델(YOLOv8 기준)의 mAP50(Mean Average Precision @ IoU=0.5)은 약 96.5%였어요. 나쁘지 않지만 산업용 응용에는 충분하지 않았죠. 왜냐? 우리 고객인 자동차 회사들이 요구하는 불량 감지율(recall)은 99.5% 이상이거든요. 5,000개 중에 2개 정도만 불량품이 빠져나갈 수 있다는 뜻인데, YOLO만으로는 거기 도달할 수 없었어요."
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-semibold mb-3">
                      Q: 그래서 다층 검증 아키텍처를 설계한 건가요?
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-base md:text-lg italic mb-4">
                        "정확해요. 3단계 검증 시스템을 설계했어요:"
                      </p>
                      <div className="space-y-4 text-base md:text-lg">
                        <div>
                          <p className="font-semibold mb-2">1단계: YOLO Detection (초기 필터링)</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>입력: 원본 이미지 (640×640 픽셀)</li>
                            <li>처리: YOLOv11n 모델 실행</li>
                            <li>출력: Bounding Box + Confidence Score</li>
                            <li>임계값(Threshold): 0.70 (70%)</li>
                            <li>역할: 빠른 1차 필터링. 정상/불량 판정과 함께 정확한 위치 정보 제공</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">2단계: 분류 모델 (세분화된 결함 분석)</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>입력: YOLO가 추출한 ROI(Region of Interest) 영역 (224×224로 정규화)</li>
                            <li>모델: ResNet50 기반 분류기 (ImageNet으로 사전학습, FM 데이터로 미세조정)</li>
                            <li>출력: 불량 타입 분류</li>
                            <li className="ml-6">- wire_damage (와이어 손상)</li>
                            <li className="ml-6">- cap_damage (캡 손상)</li>
                            <li className="ml-6">- surface_scratch (표면 스크래치)</li>
                            <li className="ml-6">- marking_error (마킹 오류)</li>
                            <li className="ml-6">- color_abnormal (색상 이상)</li>
                            <li>정확도: 96.8%</li>
                            <li>역할: YOLO가 '불량'이라고 판정한 것을 더 정확하게 분류</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">3단계: Confidence Fusion & Human Verification</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>신뢰도 계산: P(최종) = P(YOLO) × P(분류기) × Correction_factor</li>
                            <li>불합격 판정: P(최종) ≥ 0.95 → 자동 처리</li>
                            <li>재검사 대기: 0.85 &lt; P(최종) &lt; 0.95 → 휴먼 검증팀</li>
                            <li>합격 판정: P(최종) ≤ 0.85 → 휴먼 재확인</li>
                            <li>결과: 최종 신뢰도 99.5%+ 달성</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-base md:text-lg italic mt-4">
                        "이 시스템의 핵심은 <strong>AI와 휴먼의 협업</strong>이에요. AI는 빠르고 일관되고, 휴먼은 '그래도 이건 좀 이상한데?' 하는 엣지 케이스를 잡아내죠."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              {/* Part 5 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Part 5: 엣지 컴퓨팅과 실시간 처리
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                  "클라우드는 선택지가 아니었다"
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-base md:text-lg font-semibold mb-3">
                      Q: 시스템의 전체 아키텍처를 설명해 주실 수 있나요?
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-base md:text-lg italic mb-4">
                        "현장의 제약이 있었어요. 우리 공장이 인터넷이 불안정한 지역에 있거든요. 그래서 처음부터 <strong>엣지 컴퓨팅</strong>(edge computing) 기반으로 설계했어요. 주요 구성 요소는:"
                      </p>
                      <div className="space-y-4 text-base md:text-lg">
                        <div>
                          <p className="font-semibold mb-2">카메라 (3개)</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>GigE Vision 표준 산업용 카메라</li>
                            <li>각 500 USD 정도</li>
                            <li>고정 IP 주소 설정</li>
                            <li>Lighting 제어: LED 링라이트 + 백라이트</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">에지 컴퓨터 (메인 처리 노드)</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>NVIDIA Jetson AGX Orin (선택) 또는 Jetson Xavier (비용 절감)</li>
                            <li>GPU: 12GB GDDR6 메모리</li>
                            <li>CPU: ARM 기반 8-core @ 2.0GHz</li>
                            <li>역할: YOLO + ResNet 모델 실행, 실시간 이미지 처리</li>
                            <li>전력: 25W (팬리스 쿨링)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">산업용 PLC (Siemens S7-1200)</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>역할: 컨베이어 모터, 로봇 암 제어</li>
                            <li>MQTT를 통해 에지 컴퓨터와 통신</li>
                            <li>결함 감지 신호에 따라 불량품을 분류 또는 폐기</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">데이터베이스 (에지 로컬)</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>SQLite (처음) → PostgreSQL (확장 후)</li>
                            <li>검사 결과 기록, 통계 계산</li>
                            <li>클라우드 동기화 (배치 모드, 야간 실행)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">UI 대시보드 (HMI - Human-Machine Interface)</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>React 기반 웹 애플리케이션</li>
                            <li>WebSocket을 통한 실시간 데이터 스트림</li>
                            <li>MQTT.js 라이브러리로 메시지 브로커(mosquitto) 구독</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-base md:text-lg italic mt-4">
                        "통신 프로토콜은 <strong>MQTT (Message Queuing Telemetry Transport)</strong>를 택했어요. IoT 기기들 사이의 가벼운 메시징 프로토콜이거든요. 대역폭도 적게 쓰고, 지연시간도 예측 가능해요."
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-semibold mb-3">
                      Q: 실시간 성능은 어떤가요? 처리 지연 없이 컨베이어 속도를 따라갈 수 있나요?
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-base md:text-lg italic mb-4">
                        "네, 여유 있게 따라가요. 벤치마크 결과를 보여드릴게요:"
                      </p>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 text-base">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="border border-gray-300 px-4 py-2 text-left">항목</th>
                              <th className="border border-gray-300 px-4 py-2 text-left">시간</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">카메라 프레임 캡처</td>
                              <td className="border border-gray-300 px-4 py-2">33ms (30fps)</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">이미지 전송 (GigE)</td>
                              <td className="border border-gray-300 px-4 py-2">~5ms</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">YOLO 추론 (3개 모델 병렬)</td>
                              <td className="border border-gray-300 px-4 py-2">~28-30ms</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">ResNet50 추론 (ROI 분류)</td>
                              <td className="border border-gray-300 px-4 py-2">~22ms</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">데이터베이스 쓰기</td>
                              <td className="border border-gray-300 px-4 py-2">~8ms</td>
                            </tr>
                            <tr className="bg-gray-50 font-semibold">
                              <td className="border border-gray-300 px-4 py-2">총 레이턴시</td>
                              <td className="border border-gray-300 px-4 py-2">~96ms</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-base md:text-lg italic mt-4">
                        "컨베이어 속도를 계산하면: 한 퓨즈가 카메라 앞을 지나갈 때 (약 150mm 길이, 200mm/s 속도) 약 750ms 정도가 소요돼요. 우리는 96ms 안에 모든 처리를 끝낼 수 있으니까, <strong>여유가 충분해요</strong>. 심지어 나중에 카메라를 추가하거나 모델을 더 복잡하게 만들어도 시스템이 버틸 수 있어요."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              {/* Part 6 - 간략화 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Part 6: 데이터 파이프라인과 모니터링
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                  "데이터는 새로운 석유"
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-base md:text-lg font-semibold mb-3">
                      Q: 검사 데이터를 어떻게 관리하고 활용하나요?
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-base md:text-lg italic mb-4">
                        "처음엔 간단했어요. 검사 결과만 기록했죠. 하지만 1년 정도 운영하다 보니 문제가 보이기 시작했어요. '지난달보다 이번달에 와이어 손상이 왜 2배가 됐지?' 이런 질문에 대답할 수 없었거든요."
                      </p>
                      <p className="text-base md:text-lg italic mb-4">
                        "그래서 <strong>데이터 수집 전략</strong>을 재설계했어요. 데이터는 3개 계층으로 저장돼요: 핫 스토리지(에지 컴퓨터 로컬 SSD, 최근 7일), 웜 스토리지(NAS, 최근 6개월), 콜드 스토리지(AWS S3, 장기 보관)."
                      </p>
                      <p className="text-base md:text-lg italic">
                        "가장 유용한 분석으로는 결함 타입 분포, 시간대별 불량률 변화, 모델 신뢰도 보정 등이 있어요. 이런 데이터를 보고 생산 공정을 개선했고, 결과적으로 <strong>불량률 12% 감소</strong>를 달성했어요."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              {/* Part 7 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Part 7: 예상치 못한 문제들과 해결책
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                  "이론에 없던 문제들"
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-base md:text-lg font-semibold mb-3">
                      Q: 개발 과정에서 가장 어려웠던 순간이 언제였나요?
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-base md:text-lg italic mb-4">
                        "몇 가지가 있는데... 가장 심각했던 건 <strong>조명 문제</strong>였어요."
                      </p>
                      <p className="text-base md:text-lg italic mb-4">
                        "초기엔 카메라 위에 표준 LED 조명을 달았는데, 시간이 지나면서 색온도(color temperature)가 변했어요. LED가 열화되면서 청색(blue) 스펙트럼이 줄어들었거든요. 결과적으로 모델이 배운 이미지와 실제 생산 라인의 이미지 분포가 달라지는 <strong>Distribution Shift</strong> 문제가 발생했어요."
                      </p>
                      <p className="text-base md:text-lg italic mb-4">
                        "증상은 색상 관련 불량(color_abnormal)을 감지하는 정확도가 92%에서 71%로 뚝 떨어진 거였어요. 처음엔 모델 자체가 망가진 줄 알았어요. 근데 알고 보니 조명이 문제였어요."
                      </p>
                      <p className="text-base md:text-lg font-semibold mb-2">해결책:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-base md:text-lg">
                        <li>조명 교체 주기를 정했어요 (매 6개월)</li>
                        <li>매주 'White Balance Calibration' 이미지를 찍어서 모델 입력을 정규화했어요</li>
                        <li>색상 관련 모델을 <strong>온라인 학습(online learning)</strong>으로 전환했어요. 작은 배치 데이터로 주 1회 모델을 업데이트하는 식으로요</li>
                      </ul>
                      <p className="text-base md:text-lg italic mt-4">
                        "또 다른 문제는 <strong>계절성(seasonality)</strong>이었어요. 겨울(건조)과 여름(습도)에 금속 부품의 반사도(reflectance)가 달라져요. 적응형 모델을 만들기로 결정했죠."
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-semibold mb-3">
                      Q: 팀 운영은 어떻게 하셨나요?
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-base md:text-lg italic mb-4">
                        "초기엔 저 혼자였어요. 그다음에 소프트웨어 엔지니어 1명, 데이터 과학자 1명을 고용했죠. 역할 분담은:"
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-base md:text-lg">
                        <li><strong>나 (정재영)</strong>: 아키텍처 설계, 컴퓨터 비전 알고리즘, 현장 문제 해결</li>
                        <li><strong>소프트웨어 엔지니어</strong>: MQTT 브로커 설정, 데이터베이스 설계, API 개발</li>
                        <li><strong>데이터 과학자</strong>: 모델 튜닝, 통계 분석, 새로운 알고리즘 실험</li>
                      </ul>
                      <p className="text-base md:text-lg italic mt-4">
                        "가장 배운 점은 <strong>커뮤니케이션의 중요성</strong>이었어요. 엔지니어가 '지연시간이 문제'라고 하면, 과학자가 '모델 크기를 줄여야 한다'고 말하고, 나는 '현장에서는 이게 더 중요'이라고 얘기해야 했거든요. 이 대화 없이는 프로젝트가 진행될 수 없었어요."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              {/* Part 8 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Part 8: 비용-편익 분석과 ROI
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                  "숫자로 말하다"
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-base md:text-lg font-semibold mb-3">
                      Q: 전체 시스템 구축에 드는 비용은 어느 정도인가요?
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-base md:text-lg italic mb-4">
                        "솔직하게 말씀드릴게요. 초기 투자:"
                      </p>
                      <div className="space-y-3 text-base md:text-lg mb-4">
                        <div>
                          <p className="font-semibold mb-2">하드웨어</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Jetson AGX Orin: $1,500</li>
                            <li>산업용 카메라 3개: $1,500</li>
                            <li>조명 시스템: $300</li>
                            <li>PLC + 케이블링: $1,000</li>
                            <li>소계: $4,300</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">소프트웨어 & 개발</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>YOLO 모델 개발/훈련: 250시간 × $50/hr = $12,500</li>
                            <li>ResNet50 분류기: 150시간 × $50/hr = $7,500</li>
                            <li>데이터 수집 & 라벨링: 1,000시간 × $25/hr = $25,000</li>
                            <li>시스템 통합 & 테스트: 300시간 × $50/hr = $15,000</li>
                            <li>소계: $60,000</li>
                          </ul>
                        </div>
                        <p className="font-semibold">총 초기 투자: 약 $64,300</p>
                      </div>
                      <p className="text-base md:text-lg italic mb-4">
                        "근데 이제 <strong>ROI를 계산</strong>해보면:"
                      </p>
                      <div className="space-y-3 text-base md:text-lg mb-4">
                        <div>
                          <p className="font-semibold mb-2">전 시스템 도입 전 (휴먼 검사)</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>검사원 15명 × $2,500/월 = $37,500/월</li>
                            <li>연간 급여비: $450,000</li>
                            <li>불량률: 4.5% (피로도로 인한 누락)</li>
                            <li>고객 반품 비용: 약 $150,000/년</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">AI 시스템 도입 후</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>검사원 2명(재검사용) × $2,500/월 = $5,000/월</li>
                            <li>연간 인건비: $60,000</li>
                            <li>유지보수 비용: $12,000/년</li>
                            <li>모델 재훈련: $5,000/년</li>
                            <li>연간 총 비용: $77,000</li>
                            <li>불량률: 0.5%</li>
                            <li>고객 반품 비용: 약 $15,000/년</li>
                          </ul>
                        </div>
                        <p className="font-semibold">년간 절감액: $450,000 + $150,000 - $77,000 - $15,000 = $508,000</p>
                        <p className="font-semibold text-primary">ROI: 508,000 ÷ 64,300 = 790% (첫해)</p>
                      </div>
                      <p className="text-base md:text-lg italic">
                        "그래서 <strong>첫 해에 초기 투자를 회수하고도 남았어요</strong>. 두 번째 해부터는 순수익만 남죠."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              {/* Part 9 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Part 9: 미래 로드맵
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                  "다음은 뭐냐"
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-base md:text-lg font-semibold mb-3">
                      Q: 앞으로의 계획이 있다면?
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-base md:text-lg italic mb-4">
                        "크게 3가지가 있어요:"
                      </p>
                      <div className="space-y-4 text-base md:text-lg">
                        <div>
                          <p className="font-semibold mb-2">1. 3D 비전 도입</p>
                          <p className="ml-4">
                            현재는 2D 이미지 기반인데, 3D 깊이(depth) 정보를 추가하면 더 정확해질 거 같아요. 특히 캡의 높이나 와이어의 곡률(curvature)을 더 정확하게 측정할 수 있죠.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">2. 온디바이스 모델 최적화 (Quantization & Pruning)</p>
                          <p className="ml-4">
                            지금 YOLO 모델은 약 50MB인데, 이를 절반 이하로 압축하는 게 목표예요. 정수 양자화(integer quantization)나 가지치기(pruning)를 쓰면 처리 속도도 2-3배 빨라질 거고요.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">3. Transfer Learning 자동화</p>
                          <p className="ml-4">
                            새로운 제품 라인(예: 6핀 퓨즈)을 추가할 때마다 처음부터 모델을 훈련하는 건 비효율적이에요. Meta-Learning이나 Few-Shot Learning 기법을 도입해서 적은 데이터로도 빠르게 새 제품에 적응하도록 하고 싶어요.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-semibold mb-3">
                      Q: 업계 내에서의 역할을 어떻게 보시나요?
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-base md:text-lg italic">
                        "제조 산업의 AI 도입은 아직 초기 단계예요. 대부분의 회사들은 '딥러닝이 좋다던데...'라는 정도 수준이죠. 우리가 실제로 구현한 경험과 사례를 공유하는 게 중요하다고 생각해요. 그래서 저희 경험담을 논문으로 정리하거나, 컨퍼런스에서 발표하려고 해요."
                      </p>
                      <p className="text-base md:text-lg italic mt-4">
                        "특히 '왜 일반적인 CV 모델을 그냥 가져다 쓰면 안 되는지' '도메인-특화(domain-specific) 조정이 왜 필요한지' 같은 실무 인사이트를 공유하고 싶어요. 이론과 현실의 간극을 메우는 게 다음 세대 엔지니어들을 위해 할 수 있는 일이라고 생각합니다."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              {/* 마치며 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  마치며
                </h2>
                <div className="space-y-4">
                  <p className="text-base md:text-lg">
                    정재영 연구원의 분투기는 단순한 기술 이야기가 아니었다. 이것은 <strong>이론과 현실의 간극을 메우기 위한 3년간의 기록</strong>이었다.
                  </p>
                  <p className="text-base md:text-lg">
                    CNN에서 시작해 YOLO로 진화하고, 다층 검증 아키텍처를 설계하고, 예상치 못한 조명 문제를 해결하고, 데이터 파이프라인을 최적화하고... 각 단계에서 그는 하나의 교훈을 얻었다.
                  </p>
                  <div className="bg-gray-50 p-6 md:p-8 rounded-lg border-l-4 border-primary">
                    <p className="text-lg md:text-xl font-semibold text-gray-900 italic">
                      "AI는 마법이 아니다. 제대로 된 아키텍처, 깨끗한 데이터, 그리고 끊임없는 개선 루프가 있을 때만 동작한다."
                    </p>
                  </div>
                  <p className="text-base md:text-lg">
                    FM Safety의 99.5% 신뢰도는 그의 이 철학의 산물이다.
                  </p>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              {/* Footer Info */}
              <div className="text-sm text-gray-500 mt-12 pt-6 border-t border-gray-200 space-y-2">
                <p><strong>인터뷰어</strong>: 정재영 연구원</p>
                <p><strong>회사</strong>: FM Safety (고안전 퓨즈 전문 제조업체)</p>
                <p><strong>직책</strong>: AI 비전 시스템 개발 리드</p>
                <p><strong>경력</strong>: 산업 자동화 8년, 컴퓨터 비전 AI 3년</p>
                <div className="mt-4">
                  <p className="font-semibold mb-2">기술 스택</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>프로그래밍: Python (FastAPI, OpenCV), C++ (performance-critical sections)</li>
                    <li>머신러닝: PyTorch, TensorRT (inference optimization)</li>
                    <li>데이터 관리: SQLite/PostgreSQL, pandas, Apache Spark</li>
                    <li>배포: Docker, Kubernetes (scale-out phase)</li>
                    <li>통신: MQTT, REST APIs, WebSockets</li>
                    <li>하드웨어: NVIDIA Jetson, GigE Vision, Siemens S7 PLC</li>
                  </ul>
                </div>
              </div>

              <div className="text-xs text-gray-400 mt-6 pt-4 border-t border-gray-200 italic">
                <p>이 인터뷰 기사는 FM Safety의 "AI 투명성 프로젝트"의 일부로, 산업 현장에서의 AI 도입 사례와 실제 도전 과제를 기록하기 위해 작성되었습니다.</p>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12">
            <a
              href="/"
              className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              홈으로 돌아가기
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}

