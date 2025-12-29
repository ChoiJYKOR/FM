import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ChoiJuyeongInterviewPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <article className="pt-20 md:pt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              "스타벅스 바리스타에서 프로젝트 리더로"
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              FM팀 조장 인터뷰: 11일간의 변신, 그리고 배움
            </h2>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg border-l-4 border-primary">
                <p className="text-lg md:text-xl font-semibold text-gray-900 italic">
                  "처음엔 정말 막막했어요. 팀을 어떻게 이끌어야 할지, 무엇을 지시해야 할지... 하지만 팀원들이 보여준 주도성이 모든 걸 바꿨습니다."
                </p>
              </div>

              <p className="text-base md:text-lg">
                FM팀의 조장은 웃으며 이렇게 말했다. 그의 배경은 독특하다. 스타벅스에서 5년간 바리스타로 일했던 그가, 개발원 교육 과정을 거쳐 지금 AI 기반 안전 퓨즈 프로젝트의 리더가 되었기 때문이다.
              </p>

              <hr className="my-12 border-gray-200" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  "커피만 만들던 손으로, 이제는 코드를 짠다"
                </h2>
                <div className="space-y-4">
                  <p className="text-base md:text-lg">
                    조장이 개발원에 입학했을 때, 그의 손에는 에스프레소 머신을 다루는 능력만 있었다. PLC 프로그래밍? Arduino? MQTT? 모두 생소한 단어였다.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-base md:text-lg italic">
                      "스타벅스에서 5년을 일했을 때도 행복했어요. 하지만 좀 더 뭔가 다른 걸 배우고 싶었어요. 기술이 점점 중요해지는 시대에, 손으로만 만드는 것보다 '머리로 설계하고, 손으로 만드는 것'을 해보고 싶었죠."
                    </p>
                  </div>
                  <p className="text-base md:text-lg">
                    그의 선택은 옳았다. 개발원의 교육과정은 그를 변화시켰다. 한 단계 한 단계, 차근차근 배웠다. 처음엔 PLC의 기본 개념을 이해하는 데만 며칠이 걸렸다. 그 다음은 Python. 그 다음은 IoT. 그 다음은 AI 비전 시스템.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-base md:text-lg italic">
                      "교수님들이 정말 잘 가르쳐주셨어요. 단순히 '이렇게 코드를 쓴다'는 게 아니라, '왜 이렇게 해야 하는가'를 먼저 설명해주셨거든요."
                    </p>
                  </div>
                  <p className="text-base md:text-lg">
                    어느 순간, 그는 깨달았다. 자신이 배우고 있다는 것을. 그리고 그것이 점점 흥미로워지고 있다는 것을.
                  </p>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  "조장이라는 책임감이 밀려왔을 때"
                </h2>
                <div className="space-y-4">
                  <p className="text-base md:text-lg">
                    FM팀의 첫 프로젝트가 정해졌을 때, 조장은 느꼈다. 무거운 책임감을.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-base md:text-lg italic">
                      "아이템이 정해지고 나니까, 갑자기 '내가 이 팀을 이끌어야 한다'는 생각이 들었어요. 근데 기술도 아직 배우는 중이었고, 팀을 어떻게 조직하고 업무를 분배해야 할지 정말 몰랐어요. 스타벅스에서 시프트 리더를 해본 적은 있지만, 이건... 완전히 다른 차원이었죠."
                    </p>
                  </div>
                  <p className="text-base md:text-lg">
                    그는 고민했다. 팀원 한 명 한 명의 능력을 어떻게 파악하고, 누가 어떤 업무를 맡으면 좋을지, 어떻게 일정을 짤지. 처음 몇 일은 자신의 리더십에 대해 의심하기도 했다.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-base md:text-lg italic">
                      "제일 처음에는 막막해서 얼어 붙었어요. 그때 팀원들이 '이렇게 하는건 어떨까요? 저렇게 하는건 어떨까요?'라며 적극적으로 본인의 아이디어를 제시해주며 프로젝트의 방향을 잡을 수 있도록 도와주었어요."
                    </p>
                  </div>
                  <p className="text-base md:text-lg">
                    이렇게 적극적인 팀원을 만난다는건 행운이죠.
                  </p>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  "팀원들이 나를 리더로 만들었다"
                </h2>
                <div className="space-y-4">
                  <p className="text-base md:text-lg font-semibold">
                    조장이 가장 놀란 순간은 언제였을까?
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-base md:text-lg italic">
                      "팀원들이 스스로 업무를 챙겨가기 시작했을 때요. 누가 시키지 않았는데, 누군가 '아, 이 부분 내가 배워야 할 것 같은데?'라고 말하더니, 그 다음 날엔 그걸 다 배워서 와요. 그리고 그걸 또 다른 팀원들에게 설명해줘요."
                    </p>
                  </div>
                  <p className="text-base md:text-lg">
                    그 순간부터 팀의 동력이 바뀌었다. 조장의 지시를 기다리는 팀이 아니라, 각자가 자신의 영역에서 주도적으로 움직이는 팀이 된 것이다.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-base md:text-lg italic">
                      "신기했어요. 정말. 저희 팀원들이 얼마나 적극적이고 열정적인지 몰랐거든요. 11일이라는 짧은 기간 동안 밤을 새우면서 배우고, 서로 부족한 부분을 채워주고... 저는 그냥 옆에서 '응, 좋아', '그 방향이 맞아', '조금 더 이렇게 해봐' 이런 식으로 방향만 제시하면 됐어요."
                    </p>
                  </div>
                  <p className="text-base md:text-lg">
                    조장은 깨달았다. 리더십이란 모든 걸 다 할 줄 아는 것이 아니라는 것을. 팀원들의 능력을 믿고, 그들이 자신의 일을 주도적으로 챙길 수 있도록 환경을 만드는 것이라는 것을.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-base md:text-lg italic">
                      "처음엔 제가 모르는 분야라서 불안했어요. 하지만 이제 생각해보니, 제가 다 알아야 한다는 생각이 리더로서의 제 약점이었던 것 같아요. 좋은 리더는 자신의 팀을 신뢰하는 사람이구나, 라고 배웠어요."
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  "11일 동안 구현하지 못한 것들이 더 많다"
                </h2>
                <div className="space-y-4">
                  <p className="text-base md:text-lg">
                    조장이 프로젝트를 돌아보며 느낀 건, 성취감만이 아니었다.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-base md:text-lg italic">
                      "제한된 기간 때문에 정말 많은 공정과 기술을 구현하지 못했어요. 더 정교하게 할 수 있었던 부분도 많고, 추가할 수 있었던 기능도 많죠. 하지만..."
                    </p>
                  </div>
                  <p className="text-base md:text-lg">
                    그는 잠시 말을 멈추고, 다시 말했다.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-base md:text-lg italic">
                      "...그럼에도 불구하고, 우리가 11일이라는 시간 안에 완성시킨 것도 대단하다고 생각해요. 보통은 이 정도의 프로젝트면 2~3개월이 걸리는데, 우리가 했잖아요. 그게 얼마나 대단한지 이제 알겠어요."
                    </p>
                  </div>
                  <p className="text-base md:text-lg">
                    조장의 눈빛이 바뀌었다. 아쉬움이 섞여있었지만, 그보다는 자부심이 더 크게 느껴졌다.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-base md:text-lg italic">
                      "다음 기회가 있으면, 이번 경험을 발판으로 더 좋은 결과를 만들 수 있을 것 같아요. 이번엔 시간이 부족했지만, 다음엔 더 효율적으로 할 수 있을 테니까요. 이번 프로젝트가 주는 배움들이 정말 많았거든요."
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  "모두가 꿈꾸는 기업에 취업했으면"
                </h2>
                <div className="space-y-4">
                  <p className="text-base md:text-lg font-semibold">
                    FM팀이 만들어진 가장 큰 이유는 무엇인가?
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-base md:text-lg italic">
                      "취업이죠. 우리 모두는 기술을 배우고, 프로젝트를 하면서, 각자가 원하는 기업에 취직하고 싶었어요."
                    </p>
                  </div>
                  <p className="text-base md:text-lg">
                    조장의 목소리에 진심이 담겼다.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-base md:text-lg italic">
                      "이번 프로젝트를 거치면서, 각 팀원들이 얼마나 성장했는지 봤어요. 시작할 때는 '프로그래밍이 뭐지?' 이러던 사람들이, 이제 자기 역량 안에서 정말 질높은 결과물을 만들어냈거든요. 앞으로 본인들이 지원하는 기업들이 우리 팀원들을 채용하면, 그 기업들은 정말 좋은 인재를 얻게 될 거라고 확신해요."
                    </p>
                  </div>
                  <p className="text-base md:text-lg">
                    그는 한숨을 쉬었다. "모든 팀원들이 자신이 원하는 기업에 취업할 수 있는 기회가 있었으면 좋겠어요. 그들은 그럴 자격이 있거든요."
                  </p>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  "교수님들이 없었으면 불가능했다"
                </h2>
                <div className="space-y-4">
                  <p className="text-base md:text-lg">
                    인터뷰의 마지막, 조장은 감사 인사를 전했다.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-base md:text-lg italic">
                      "장용선 교수님과 노진혁 교수님께 정말 감사합니다. 제한적인 환경 속에서도 저희 팀을 전폭적으로 지원해주셨어요. 주말에 로봇실 문을 열어주시고, 밤새서 코드를 봐주시고, 3D프린터를 별도로 마련해주시고... 그런 것들이 없었으면 이 프로젝트는 절대 완성되지 않았어요."
                    </p>
                  </div>
                  <p className="text-base md:text-lg">
                    그의 목소리에는 진정한 감사가 가득했다.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-base md:text-lg italic">
                      "앞으로 저도 누군가를 가르치고 이끌 기회가 생기면, 교수님들처럼 하고 싶어요. 그들이 보여준 그 열정과 헌신, 그리고 '너희는 할 수 있다'는 믿음이, 저희를 여기까지 이끌었거든요."
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  에필로그: 스타벅스 바리스타에서 기술 리더로
                </h2>
                <div className="space-y-4">
                  <p className="text-base md:text-lg">
                    스타벅스에서 에스프레소 머신을 다루던 손이, 이제는 Arduino 보드를 만진다.
                  </p>
                  <p className="text-base md:text-lg">
                    커피의 온도를 맞추던 머리가, 이제는 센서의 신호를 분석한다.
                  </p>
                  <p className="text-base md:text-lg">
                    매장 근무표를 짜던 리더십이, 이제는 프로젝트 팀을 이끈다.
                  </p>
                  <p className="text-base md:text-lg">
                    11일간의 여정 속에서, 조장은 배웠다. 변화는 두렵지 않다는 것을. 그리고 좋은 팀과 좋은 교수님이 함께 있으면, 불가능은 가능이 된다는 것을.
                  </p>
                  <p className="text-base md:text-lg">
                    다음 프로젝트에서, 그의 모습이 어떻게 변할지 기대된다.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-base md:text-lg italic font-semibold">
                      "다음에는 더 나은 모습으로 뵐 겁니다."
                    </p>
                  </div>
                  <p className="text-base md:text-lg">
                    그의 웃음 속에는, 확신이 있었다.
                  </p>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <div className="text-sm text-gray-500 mt-12 pt-6 border-t border-gray-200">
                <p><strong>글</strong> | FM팀 조장과의 인터뷰</p>
                <p className="mt-2"><strong>일시</strong> | 2025년 12월</p>
                <p className="mt-2"><strong>장소</strong> | 개발원 프로젝트실</p>
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

