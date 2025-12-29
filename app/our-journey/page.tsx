"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OurJourneyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <article className="pt-20 md:pt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              11일의 기적, 포기하지 않은 팀의 이야기
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              FM 팀의 '불가능을 가능하게' 만든 도전기 — 프로젝트실 문 밖에서의 싸움
            </p>
          </header>

          {/* Main Image */}
          <div className="mb-12">
            <div className="rounded-lg overflow-hidden bg-gray-200 shadow-lg">
              <img
                src="/images/screenshot-2025-12-27.png"
                alt="우리의 험난한 여정"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector(".placeholder")) {
                    const placeholder = document.createElement("div");
                    placeholder.className =
                      "placeholder w-full h-full flex items-center justify-center text-gray-400 text-sm py-8";
                    placeholder.textContent = "이미지 준비중";
                    parent.appendChild(placeholder);
                  }
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p className="text-lg">
                부산의 한 프로젝트실. 아이템 선정부터 시연 영상 촬영까지 단 11일이라는 미션 불가능 같은 일정 앞에서, FM 팀은 고민했다. 일반적인 프로젝트라면 최소 2~3개월이 필요한 작업이었다. 하지만 이들은 다르게 생각했다. "안 되는 이유를 찾기보다, 되게 하는 방법을 찾자."
              </p>

              <p>
                이 한 문장의 다짐으로 시작된 11일간의 여정은, 단순한 프로젝트 완성을 넘어 '팀워크가 뭔지'를 다시 정의하는 경험이 되었다.
              </p>

              <p className="text-lg font-semibold text-gray-900">
                그리고 그 중심에는 두 분의 교수님이 있었다.
              </p>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  0일차: 위기 앞에서의 결정 — 교수님들의 첫 약속
                </h2>
                <p className="mb-4">
                  프로젝트 시작 전날 밤, FM 팀 리더는 팀원들을 모았다. 미션은 명확했다. 11일 내에:
                </p>
                <ol className="space-y-2 mb-6 list-decimal pl-6">
                  <li><strong>아이템 선정</strong> (결정 못 한 상태)</li>
                  <li><strong>기술 학습</strong> (처음 접하는 기술)</li>
                  <li><strong>시스템 설계</strong> (아무 기초도 없음)</li>
                  <li><strong>소프트웨어 개발</strong> (처음부터)</li>
                  <li><strong>하드웨어 제작</strong> (재료부터 수급)</li>
                  <li><strong>통합 테스트</strong> (모두 한 번에)</li>
                  <li><strong>시연 영상 촬영</strong> (최종 산출물)</li>
                </ol>
                <p className="mb-4">
                  일반적이라면, 누군가는 손을 들었을 것이다. "이건 불가능합니다."
                </p>
                <p className="mb-4">
                  하지만 FM 팀 사람들의 눈빛은 달랐다. 그리고 더 중요한 건, <strong>장용선 교수님과 노진혁 교수님의 말 한 마디였다.</strong>
                </p>
                <p className="mb-4 italic text-gray-600">
                  장용선 교수님은 이렇게 말씀했다: "내가 있잖아. 주말에 너희 로봇실 문을 열어줄 테니까, 그 시간에 맘껏 해. 프로젝트가 끝날 때까지 내가 챙겨줄 거다."
                </p>
                <p className="mb-4 italic text-gray-600">
                  노진혁 교수님은 덧붙였다: "3D 프린터 대기자가 너무 많잖아. 인텔 4기 팀 너희만을 위해 별도의 3D프린터를 마련해줄게. 필요할 때 바로 써."
                </p>
                <p className="text-lg font-semibold">
                  그 약속이 있었기에, 팀은 결심했다. <strong>"완성하자."</strong>
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  프로젝트실의 현실: 8시 30분 ~ 20시 30분
                </h2>
                <p className="mb-4">
                  FM 팀의 전투는 제약 속에서 시작되었다.
                </p>
                <p className="mb-4">
                  프로젝트실은 아침 8시 30분에 문을 열고, 밤 8시 30분이면 어김없이 문을 닫았다. 그게 규칙이었다.
                </p>
                <p className="mb-4">
                  그 안에서 할 수 있는 것들은 제한적이었다. 12시간이 전부였다.
                </p>
                <p className="text-lg font-semibold">
                  하지만 FM 팀은 다르게 생각했다. "그럼 프로젝트실 밖에서 계속하면 되지 않나?"
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  1~3일차: 학습이 곧 프로젝트 — 낮과 밤의 이중 전투
                </h2>
                <p className="mb-4">
                  첫 3일은 '미친 듯이 공부하는' 시간이었다.
                </p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    낮 (08:30 ~ 20:30):
                  </h3>
                  <p className="mb-4">
                    프로젝트실에서는 PLC 프로그래밍을 배우고, Arduino 펌웨어 구조를 이해하고, MQTT 통신 프로토콜을 정리했다. HMI 대시보드 설계도 시작했다. 그리고 아이템도 정해야 했다.
                  </p>
                  <p>
                    팀원들은 칠판을 활용했다. 유튜브 튜토리얼을 3배속으로 재생하며 필기했다. 부품업체에 전화를 걸어 최단시간 납품 방법을 알아봤다.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    밤 (20:30 ~ 새벽):
                  </h3>
                  <p className="mb-4">
                    프로젝트실 문이 닫혔다. 그 순간부터는 각자의 집에서 이어지는 '2차 전투'가 시작되었다.
                  </p>
                  <p className="mb-4">
                    누군가는 집에서 깃허브의 오픈소스 코드를 뜯어보며 밤을 샜다. 누군가는 새벽까지 센서 연결 원리를 그려가며 이해했다. 누군가는 설계 파일을 다시 만들고, 다음 날 교수님께 여쭤볼 질문을 정리했다.
                  </p>
                </div>
                <p className="mb-4">
                  그런데 새벽 2시, 한 팀원이 막혔다. Arduino 센서 연결 부분이 어떻게 돌아가는지 이해가 안 가는 것이었다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  그 팀원은 용감하게 <strong>장용선 교수님께 문자를 보냈다.</strong>
                </p>
                <p className="mb-4 italic text-gray-600">
                  놀랍게도, 교수님은 곧바로 답을 주셨다. "내일 아침 8시 30분이 아니라 좀 더 일찍 올래? 내가 먼저 설명해줄게."
                </p>
                <p className="mb-4">
                  다음 날 아침 8시, 프로젝트실 문이 열렸고, 교수님은 이미 계신 상태였다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  "자, 이 부분 봐봐. 이 신호가 여기서 이렇게 와서, 이렇게 처리되는 거야."
                </p>
                <p className="mb-4">
                  교수님은 직접 손으로 회로를 그려가며 설명해주셨다. 그 설명 하나가 팀원의 눈을 뜨게 했다.
                </p>
                <p className="mb-4">
                  한편, <strong>노진혁 교수님은</strong> 팀의 3D 설계 파일을 받자마자 움직였다. "하드웨어 케이스 설계, 내가 수정해줄게. 이렇게 하면 더 정밀할 거야."
                </p>
                <p className="mb-4">
                  교수님은 실시간으로 CAD 수정 과정을 보여줬다. 그리고 그 날 오후, 인쇄된 케이스가 팀의 손에 들어왔다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  "이 정도면 되나? 안 맞으면 말해, 다시 프린팅할 수 있어."
                </p>
                <p className="mb-4">
                  평소라면 2~3일 걸릴 일을 몇 시간 안에 해치웠다.
                </p>
                <p className="italic text-gray-600">
                  한 팀원은 이렇게 말했다: "낮엔 배우고, 밤엔 소화하고, 그 다음 아침엔 질문을 풀고... 이게 진짜 공부 같아요."
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  4~7일차: 밤샘 개발의 진가 — 주말, 그리고 열린 문
                </h2>
                <p className="mb-4">
                  4일차부터는 '상황 긴급'이 일상이 되었다.
                </p>
                <p className="mb-4">
                  새벽 2시, 코드 빌드가 실패했다. 새벽 3시, 하드웨어 결선 문제가 터졌다. 새벽 4시, 포고핀 연결이 자꾸 헐거워져서 다시 납땜했다.
                </p>
                <p className="mb-4">
                  밤이 깊어질수록, 각자의 집에서의 싸움은 더 커졌다.
                </p>
                <p className="mb-4">
                  하지만 팀원들은 알고 있었다. <strong>장용선 교수님이 주말에 로봇실 문을 열어주신다는 것.</strong>
                </p>
                <p className="mb-4">
                  그래서 금요일 밤, 토요일 새벽까지 집에서 고민하던 문제들을 들고, 토요일 아침 로봇실로 갔다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  <strong>토요일 아침 08:30,</strong> 프로젝트실 문이 열렸다. 그리고 교수님은 이미 계셨다. 쉬어야 할 주말 아침, 학생들을 위해 와 주신 것이었다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  "어제 밤에 뭐 또 막혔어?"
                </p>
                <p className="mb-4">
                  교수님은 각자의 문제를 들으며, 차근차근 풀어줬다. 몇 시간은 교수님과 함께 있었다. 점심 먹고 돌아갔다. 토요일 오후에도 다시 돌아왔다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  "주말인데 와줘서 고마워요, 교수님."
                </p>
                <p className="mb-4 italic text-gray-600">
                  "괜찮아. 너희 프로젝트가 중요한 거니까."
                </p>
                <p className="mb-4 font-semibold">
                  이게 <strong>진정한 멘토링</strong>이었다.
                </p>
                <p className="mb-4">
                  노진혁 교수님도 가만히 있지 않으셨다. 주말 동안 계속 3D 프린팅 작업을 해주셨다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  "설계 파일 다시 보냈어? 프린팅 중이니까 내일 아침쯤엔 완성될 거야."
                </p>
                <p className="mb-4">
                  기존에 3D 프린터 대기자가 많았지만, 인텔 4기 팀을 위해 별도로 마련해주신 프린터로 우리 팀만 계속 출력할 수 있었다. 시간을 낭비할 필요가 없었다.
                </p>
                <p className="italic text-gray-600">
                  한 팀원은 이렇게 적었다: "주말이 없다는 게 이런 거구나. 교수님들이 보여주신 거."
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  8~10일차: 통합의 악몽에서 기적으로 — 새벽 3시 20분의 기적
                </h2>
                <p className="mb-4">
                  8일차. 모든 부품이 모였다. 코드도 거의 완성되었다. 이제 하면 된다...는 생각은 순진했다.
                </p>
                <p className="mb-4 font-semibold">
                  <strong>통합 테스트에서 지옥이 시작되었다.</strong>
                </p>
                <p className="mb-4">
                  아두이노가 신호를 제대로 못 보냈다. 블루투스 연결이 끊겼다. MQTT 메시지가 서버에 안 도착했다. HMI 대시보드의 UI가 깨졌다. 그 다음엔 통전 테스트 결과가 틀렸다.
                </p>
                <p className="mb-4">
                  프로젝트실은 밤 8시 30분에 문을 닫았다. 팀원들은 흩어졌다. 각자의 집으로.
                </p>
                <p className="mb-4">
                  그리고 각자의 집에서 다시 시작했다.
                </p>
                <p className="mb-4">
                  밤 11시부터 새벽까지, 팀원들은 각자의 노트북을 켜고 로그를 분석했다. 온라인 채팅으로 서로 의견을 나눴다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  "이 신호 봤어?"<br />
                  "아, 저 핀이 문제네!"<br />
                  "아두이노 펌웨어 다시 컴파일 해봐."<br />
                  "기다려, 시리얼 포트 충돌일 수도..."
                </p>
                <p className="mb-4">
                  새벽 2시, 팀원 중 한 명이 막혔다. 통전 테스트 결과가 계속 틀렸다. 하드웨어는 정상인 것 같은데, 아두이노가 받는 신호가 뭔가 이상했다.
                </p>
                <p className="mb-4">
                  그 팀원이 <strong>새벽 3시에 장용선 교수님에게 문자를 보냈다.</strong>
                </p>
                <p className="mb-4">
                  일반적으로라면, 이 시간에 답장이 올까?
                </p>
                <p className="mb-4 font-semibold text-primary">
                  놀랍게도, <strong>새벽 3시 20분, 교수님이 답장을 주셨다.</strong>
                </p>
                <p className="mb-4">
                  다음날 아침, 교수님은 직접 학생 앞에 앉았다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  "뭐 이따위로 막혀? 좀 봐봐. 아, 이건 INPUT_PULLUP 문제네. 너희 핀 설정을 봐봐. 여기가..."
                </p>
                <p className="mb-4">
                  교수님은 한 줄의 코드를 손가락으로 짚으며, 전기 기초부터 다시 설명해주셨다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  "너희가 풀다운이 아니라 풀업을 쓴 이유가 뭘까? 이걸 이해하려면, 전압이 뭐고, 저항이 뭔지부터 생각해봐야 해."
                </p>
                <p className="mb-4">
                  전기 기초 특강 강의였다. 하지만 그것이 가장 필요한 순간의, 가장 정확한 설명이었다.
                </p>
                <p className="mb-4">
                  설명이 끝났을 때, 팀원의 눈이 떠졌다.
                </p>
                <p className="mb-4 font-semibold text-primary">
                  "아! 그렇구나!"
                </p>
                <p className="mb-4">
                  코드를 수정했다. 다시 빌드했다. 테스트했다.
                </p>
                <p className="mb-4 font-semibold text-green-600 text-xl">
                  <strong>초록색 체크마크.</strong>
                </p>
                <p className="mb-4 font-semibold">
                  모든 시스템이 정상 작동했다.
                </p>
                <p className="mb-4">
                  침묵.
                </p>
                <p className="mb-4 font-semibold">
                  그다음 폭발. 환호성이 나왔다.
                </p>
                <p className="mb-4">
                  그리고 그 환호 속에서, <strong>장용선 교수님은 조용히 팀을 보고 있었다.</strong> 오후 8시, 로봇실에서, 학생들의 성공을 지켜보는 교수님의 표정은 말로 설명할 수 없을 정도로 밝았다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  "수고했어. 이제 정말 끝이 보이는 거야."
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  11일차: 완성, 그리고 감사
                </h2>
                <p className="mb-4">
                  마지막 날, FM 팀은 시연 영상을 촬영했다.
                </p>
                <p className="mb-4 font-semibold">
                  <strong>장용선 교수님의 로봇실에서.</strong>
                </p>
                <p className="mb-4">
                  카메라 앞에 선 팀원의 손이 떨렸다. 하지만 목소리는 확신으로 가득했다. "이 프로젝트는..."
                </p>
                <p className="mb-4">
                  조명, 음향, 연기까지 생각해가며 촬영했다. 그리고 촬영이 끝났을 때, 팀원들은 <strong>두 교수님께 인사를 했다.</strong>
                </p>
                <p className="mb-4 italic text-gray-600">
                  "교수님들, 진짜 감사합니다."
                </p>
                <p className="mb-4 italic text-gray-600">
                  <strong>장용선 교수님은</strong> 미소로 답했다. "너희가 잘했어. 이게 교육이야. 그리고 다음에도 필요하면 언제든 와."
                </p>
                <p className="mb-4 italic text-gray-600">
                  <strong>노진혁 교수님은</strong> 웃으면서 말씀했다. "3D 프린터는 계속 쓸 수 있어. 다음 프로젝트 할 때도 봐."
                </p>
                <p className="mb-4">
                  그것이 마지막이 아니었다. 프로젝트가 완성된 후, <strong>두 교수님은 이후의 프로젝트 팀들에게도 우리의 프로젝트를 소개해주었다.</strong>
                </p>
                <p className="mb-4 italic text-gray-600">
                  "이 학생들이 11일 만에 이걸 했어. 기술도 좋지만, 여기서 배워야 할 건 포기하지 않는 것의 가치야. 그리고 팀이 뭔지. 그리고 교수도 함께한다는 뜻이야."
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  배운 것들
                </h2>
                <p className="mb-6">
                  FM 팀이 얻은 것은 완성된 프로젝트만이 아니었다.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      1. 제약은 창의를 낳는다
                    </h3>
                    <p>
                      프로젝트실이 밤 8시 30분에 닫혔기에, 팀은 시간을 효율적으로 쓸 수밖에 없었다. 낮 12시간은 최대한 실시간 협력에, 밤의 개인 시간은 깊이 있는 학습에 써야 했다. 그 결과는 간결하고 강력한 시스템이었다.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      2. 팀은 개인의 능력을 곱한다
                    </h3>
                    <p>
                      한 명은 하드웨어에 강했고, 한 명은 소프트웨어에 강했고, 한 명은 빠른 학습자였고, 한 명은 세세한 부분까지 챙기는 성격이었다. 그들이 따로 일했으면 절대 불가능했을 일이, 함께 일하니 가능해졌다.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      3. 교수님의 역할은 정보 제공이 아니라 '함께함'이다
                    </h3>
                    <p>
                      장용선 교수님이 준 건 "정답"이 아니었다. 줄 수 있는 건 "함께 풀어보자"는 태도였다. 노진혁 교수님이 해주신 건 "빠른 기술 지원"을 넘어, "너희가 시간을 낭비할 필요 없도록"이라는 배려였다.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      4. 포기하지 않음이 유일한 조건이다
                    </h3>
                    <p>
                      누군가 "이건 안 될 것 같은데?"라고 말했을 때, 팀의 대답은 항상 같았다. "그럼 어떻게 될 수 있을까?" 그리고 교수님들도 같은 마음으로 그 답을 찾아주셨다.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  프로젝트실 밖의 싸움
                </h2>
                <p className="mb-4 font-semibold">
                  이 이야기의 진짜 교훈은 여기에 있다.
                </p>
                <p className="mb-4">
                  FM 팀의 성공은 <strong>프로젝트실 안의 12시간만이 아니었다.</strong>
                </p>
                <p className="mb-4">
                  밤 8시 30분 문이 닫힌 후, 각자의 집에서 밤을 새우며 코드를 고치고, 설계를 다듬고, 다음 날 교수님께 여쭤볼 질문을 정리한 시간들.
                </p>
                <p className="mb-4">
                  토요일 새벽, 쉬는 날 교수님들이 문을 열어주신 시간들.
                </p>
                <p className="mb-4">
                  주말까지 3D 프린터를 돌려주신 노진혁 교수님의 시간들.
                </p>
                <p className="mb-4">
                  새벽 4시에 와주신 장용선 교수님의 헌신.
                </p>
                <p className="mb-4 font-semibold">
                  그것들이 합쳐져서 11일이 완성되었다.
                </p>
                <p className="mb-4 italic text-gray-600 text-lg">
                  이것이 <strong>진정한 교육의 모습</strong>이 아닐까?
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  마음속 기억
                </h2>
                <p className="mb-4">
                  밤 8시 30분, 프로젝트실 불이 꺼지고, 각자의 집에서 다시 켜지는 노트북 불빛.
                </p>
                <p className="mb-4">
                  새벽 2시, 각자의 방에서 창밖을 보며 고민하는 팀원들의 얼굴.
                </p>
                <p className="mb-4">
                  새벽 4시, 장용선 교수님의 로봇실 불.
                </p>
                <p className="mb-4 italic text-gray-600">
                  "이 신호가 여기서 이렇게..."라고 설명하시는 교수님의 목소리.
                </p>
                <p className="mb-4 italic text-gray-600">
                  "프린팅 중이니까 내일 아침쯤엔 완성될 거야."라고 웃으며 말씀하시는 노진혁 교수님.
                </p>
                <p className="mb-4">
                  마지막 버그가 사라졌을 때, 누가 말한 것도 아닌데 저절로 나온 박수와 환호.
                </p>
                <p className="mb-4 font-semibold">
                  "우리 했다!"는 목소리.
                </p>
                <p className="mb-4">
                  그리고 그 모든 순간 뒤에 있던, <strong>두 교수님의 침묵 속의 응원.</strong>
                </p>
                <p className="mb-4 font-semibold text-lg">
                  그것이 FM 팀의 11일이었다.
                </p>
                <p className="mb-4 italic text-gray-600 text-lg">
                  그것이 진짜 팀워크고, 진짜 교육이고, 진짜 멘토링이다.
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  에필로그
                </h2>
                <p className="mb-4">
                  프로젝트가 끝난 지 며칠 후, FM 팀은 달라져 있었다.
                </p>
                <p className="mb-4">
                  기술력은 말할 것도 없고, <strong>팀으로서의 신뢰도가 달라졌다.</strong> 이제 이들이 "11일 안에 이것을 해야 한다"는 미션을 받아도, 아마 웃으면서 시작할 것이다. 왜냐하면, 이미 증명했으니까.
                </p>
                <p className="mb-4">
                  그리고 더 중요한 것은, 이들이 <strong>"교수님들처럼 누군가를 도와줄 차례가 올 때"</strong>, 분명히 같은 마음으로 문을 열 것이라는 점이다. 이게 교육이 세대를 이어가는 방식이다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  <strong>장용선 교수님은</strong> 현재도 계속해서 다른 팀들의 프로젝트를 지켜보고 있다. 주말에도 로봇실 문을 열어주며.
                </p>
                <p className="mb-4 italic text-gray-600">
                  <strong>노진혁 교수님은</strong> 다음 프로젝트를 기다리고 있다. "3D 프린터는 계속 쓸 수 있어"라는 약속과 함께.
                </p>
                <p className="mb-4 font-semibold text-lg">
                  그리고 FM 팀은 알고 있다.
                </p>
                <p className="mb-4 font-semibold text-lg italic text-gray-700">
                  <strong>"프로젝트실 문이 닫혀도, 교수님들의 문은 항상 열려있다는 것을."</strong>
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  마지막 말
                </h2>
                <div className="space-y-4 italic text-gray-600 text-lg">
                  <p>"시간이 부족하지 않았어요. 우리가 시간을 만들었어요."</p>
                  <p>"교수님들 없었으면, 우린 3일차에 포기했을 거 같아요."</p>
                  <p>"기술도 중요하지만, 함께한다는 그 마음이 제일 큰 배움이었어요."</p>
                  <p className="font-semibold">"교수님들, 정말 감사합니다."</p>
                </div>
                <p className="mt-6 text-right text-gray-600">
                  —— FM 팀 일동
                </p>
              </section>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12 pt-8 border-t">
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
