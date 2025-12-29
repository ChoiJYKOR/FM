import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RobotSafetyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <article className="pt-20 md:pt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <time className="text-sm text-gray-500 mb-4 block">
              Dec. 10, 2025
            </time>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              로봇 산업 안전사고 50% 감소, FM 정밀 퓨즈가 '게임 체인저'
            </h1>
            <p className="text-lg text-gray-600">
              한국 로봇 산업의 숨은 영웅… FM, 협업 로봇 안전성 혁신 주도
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong>부산</strong> — 한국 로봇 산업이 2023년 대비 올해 안전사고를 50% 감소시킨 가운데, 정밀 안전 퓨즈 전문사 FM이 이 같은 실적의 핵심 주역으로 평가받고 있다. 협업 로봇(협로봇) 시장에서 인명피해 사고를 획기적으로 줄인 원동력이 FM의 혁신 기술이라는 분석이 지배적이다.
              </p>

              <p>
                한국로봇산업협회는 지난 23일 발표한 '2025년 로봇 안전 현황 보고서'에서 "안전 부품의 신뢰성 향상이 산업 전체의 사고 감소에 결정적 역할을 했다"며 FM을 명시적으로 언급했다. 업계 전문가들은 이를 한국 로봇 산업이 '품질 경쟁'에서 '안전 경쟁'으로 전환되는 중요한 신호로 읽고 있다.
              </p>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  협업 로봇 시장의 숨겨진 위험
                </h2>
                <p className="mb-4">
                  협업 로봇은 사람과 함께 일하도록 설계된 로봇이다. 자동차 조립, 반도체 생산, 물류 창고 등에서 인간 작업자와 협력하며 위험 작업을 대신한다. 하지만 이 같은 장점은 역설적으로 새로운 위험을 낳았다. 로봇과 인간이 같은 공간에서 일하기 때문에, 로봇의 전기 회로 오류가 즉시 인명사고로 이어질 수 있기 때문이다.
                </p>
                <p className="mb-4">
                  과거 한국 협업 로봇 시장은 속도(생산성) 중심이었다. 로봇팔의 작동 속도, 정확도, 하중 용량만 경쟁 포인트였다. 하지만 지난 3년간 산업용 로봇 관련 중상해 사고가 연 300건을 넘으면서 안전성의 중요성이 급부상했다.
                </p>
                <p className="italic text-gray-600">
                  "협업 로봇의 가장 큰 약점은 전원 관리 회로의 불안정성이었다"고 Mr. Fuse FM 회장은 설명했다. "로봇이 작동 중에 갑자기 멈추거나 잘못된 신호를 받으면, 인간 작업자에게 돌발 위험이 닥칠 수 있다. 이를 방지하려면 극도로 정밀한 퓨즈가 필수다."
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  FM의 혁신: '지능형 안전 퓨즈'
                </h2>
                <p className="mb-4">
                  FM은 지난 3년간 협업 로봇 업계의 안전 문제를 해결하기 위해 '스마트 세이프티 퓨즈(Smart Safety Fuse)' 기술을 개발했다. 기존 퓨즈는 과전류 발생 시 일정 수준 이상에서만 회로를 끊는 단순 구조였다. 반면 FM의 신기술은 인공지능 기반의 사전 감지 시스템을 탑재했다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  "우리 퓨즈는 전류 변화를 실시간으로 감지하고, 위험 신호를 감지하는 순간 0.01초 내에 회로를 차단한다"고 Mr. Fuse 회장이 설명했다. "기존 제품은 위험이 발생한 후에 반응하는 '사후 안전'이라면, 우리는 위험을 미리 예측해 차단하는 '사전 안전'을 구현했다."
                </p>
                <p>
                  이 기술이 적용된 협업 로봇들은 올해 1월부터 안전 인증 테스트에서 기존 제품 대비 99.7%의 신뢰성을 입증했다. 즉, 1000시간 연속 운전 중 안전 오작동이 3회 미만이라는 의미다.
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  한국 로봇 업체들의 '구원자'
                </h2>
                <p className="mb-4">
                  FM의 기술 혁신은 한국 로봇 업체들의 글로벌 경쟁력을 한 단계 높였다. 국내 주요 협업 로봇 제조사 4곳(A사, B사, C사, D사)이 올해 FM과 부품 공급 계약을 체결했고, 이들 업체의 제품 안전성 평가 등급은 전년 대비 평균 2단계 상향되었다.
                </p>
                <p className="mb-4">
                  특히 주목할 점은 수출 시장에서의 반응이다. 유럽과 북미의 로봇 수입사들은 FM 퓨즈가 탑재된 한국 협업 로봇을 '프리미엄 안전 제품'으로 분류하기 시작했다. 결과적으로 한국 협업 로봇의 평균 판매가는 전년 대비 15% 상승했다.
                </p>
                <p className="italic text-gray-600">
                  한국로봇산업협회의 이종호 회장은 "FM의 기술 혁신이 없었다면 한국 로봇 산업이 '저가 경쟁' 함정에서 빠져나올 수 없었을 것"이라고 평가했다.
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  안전사고 50% 감소의 실체
                </h2>
                <p className="mb-4">
                  한국로봇산업협회의 보고서는 구체적 수치를 제시한다:
                </p>
                <ul className="space-y-2 mb-6 list-disc pl-6">
                  <li><strong>2023년 협업 로봇 관련 안전사고:</strong> 145건 (중상 이상)</li>
                  <li><strong>2025년 협업 로봇 관련 안전사고:</strong> 72건 (중상 이상)</li>
                  <li><strong>감소율:</strong> 50.3%</li>
                </ul>
                <p className="mb-4">
                  보고서는 이 같은 감소를 세 가지 요인으로 분석했다:
                </p>
                <ol className="space-y-2 mb-6 list-decimal pl-6">
                  <li><strong>부품 신뢰성 향상</strong> (FM의 스마트 퓨즈): 35% 기여</li>
                  <li><strong>안전 교육 강화:</strong> 40% 기여</li>
                  <li><strong>작업 환경 개선:</strong> 25% 기여</li>
                </ol>
                <p className="italic text-gray-600">
                  "부품 신뢰성이 35%라는 것은 결코 작지 않은 수치다"라고 서울대학교 로봇 공학과 김태균 교수는 설명했다. "퓨즈 하나의 성능 개선이 전체 산업의 안전 수준을 이토록 높일 수 있다는 것은, 얼마나 중요한 부품인지를 보여준다."
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  글로벌 시장의 새로운 경쟁 축
                </h2>
                <p className="mb-4">
                  FM의 성공은 한국 로봇 산업 내 '안전 경쟁'의 시작을 의미한다. 과거 로봇 시장의 경쟁 축은 '속도 vs 정밀도'였다면, 이제는 '안전성 vs 비용'이 새로운 축으로 떠오르고 있다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  Mr. Fuse 회장은 "안전이 더 이상 '옵션'이 아니라 '필수'가 되었다"고 강조했다. "유럽과 북미의 규제 당국들이 협업 로봇의 안전 기준을 강화하고 있고, 구매처인 완성차 업체와 대형 물류사들이 안전성을 우선 조건으로 내세우고 있다. 우리는 이 변화의 흐름을 정확히 읽고 기술 개발에 집중한 결과다."
                </p>
                <p>
                  업계 전문가들은 FM의 성공이 한국의 다른 부품 업체들에게도 영감을 줄 것으로 예상한다. "로봇 산업에서 FM처럼 '한 가지 부품의 혁신'으로 전체 산업을 바꾼 사례는 드물다"고 서울대 김 교수는 덧붙였다.
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  다음 목표: 글로벌 표준화
                </h2>
                <p className="mb-4">
                  FM은 현재 독일, 일본, 미국의 로봇 제조사들과 기술 협력을 추진 중이다. Mr. Fuse 회장의 목표는 FM의 스마트 퓨즈가 협업 로봇의 '글로벌 안전 표준'이 되는 것이다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  "5년 내에 전 세계 협업 로봇의 30% 이상에 우리 부품이 탑재되는 것이 목표"라고 그는 말했다. "한국이 로봇 산업에서 안전의 표준을 제시하는 나라가 될 수 있다."
                </p>
                <p>
                  부산 본사에서 기자와 만난 Mr. Fuse 회장은 자신감으로 가득 찬 표정이었다. "우리는 퓨즈 제조사가 아니라, 생명을 지키는 기술 회사다. 그 인식 변화가 우리를 '게임 체인저'로 만들었다고 생각한다."
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  한국 로봇 산업의 미래
                </h2>
                <p className="mb-4">
                  한국은 현재 세계 3위의 로봇 생산국이지만, 선진국 대비 안전 기준에서는 뒤처져 있었다. FM의 기술 혁신은 이 같은 '안전 격차'를 단숨에 좁혔다.
                </p>
                <p className="mb-4">
                  한국로봇산업협회는 오는 2026년 협업 로봇 관련 안전사고를 추가로 30% 감축할 계획이다. 목표 달성의 핵심 열쇠는 FM과 같은 부품 업체들의 지속적인 혁신이다.
                </p>
                <p className="italic text-gray-600">
                  Mr. Fuse 회장은 "이제 시작일 뿐"이라고 강조했다. "로봇 산업의 안전이 완성되는 날까지, 우리는 멈추지 않을 것이다."
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  주요 정보
                </h2>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">회사명:</strong>
                    <span className="text-gray-700">FM (정밀 안전 퓨즈 제조)</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">회장:</strong>
                    <span className="text-gray-700">Mr. Fuse</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">본사:</strong>
                    <span className="text-gray-700">부산</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">핵심 기술:</strong>
                    <span className="text-gray-700">스마트 세이프티 퓨즈 (인공지능 기반 사전 감지 시스템)</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">주요 제품 적용:</strong>
                    <span className="text-gray-700">협업 로봇 4개 국내 주요 제조사</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">신뢰성:</strong>
                    <span className="text-gray-700">99.7% (1000시간 기준)</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">글로벌 목표:</strong>
                    <span className="text-gray-700">5년 내 협업 로봇 30% 이상 탑재</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">안전사고 감소 기여도:</strong>
                    <span className="text-gray-700">35% (한국로봇산업협회 2025 보고서)</span>
                  </li>
                </ul>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  관련 기관
                </h2>
                <ul className="space-y-2 list-disc pl-6">
                  <li><strong>한국로봇산업협회</strong> - 2025년 로봇 안전 현황 보고서 발표</li>
                  <li><strong>서울대학교 로봇공학과</strong> - 김태균 교수 자문</li>
                  <li><strong>로봇 제조사 4개사</strong> - FM과 부품 공급 계약 체결</li>
                </ul>
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
              목록으로 돌아가기
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}

