import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AutoContractPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <article className="pt-20 md:pt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <time className="text-sm text-gray-500 mb-4 block">
              Dec. 15, 2025
            </time>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              완성차 3사 신규 납입 계약체결… 'FM 퓨즈'의 신뢰도 인정
            </h1>
            <p className="text-lg text-gray-600">
              현대·기아·한국GM, FM과 장기 부품 공급 계약 체결… 글로벌 전기차 전략의 신뢰 기반 마련
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong>부산</strong> — FM이 현대자동차, 기아자동차, 한국GM과 차례로 장기 부품 공급 계약을 체결했다고 27일 공식 발표했다. 3개 완성차 업체와의 동시 계약은 FM의 정밀 안전 퓨즈가 한국 완성차 산업의 글로벌 전기차 전략에서 핵심 부품으로 인정받았음을 의미한다.
              </p>

              <p>
                계약 규모는 공식 발표되지 않았으나, 업계 추정에 따르면 향후 5년간 누적 공급액이 최소 500억 원대에 이를 것으로 예상된다. 더 중요한 것은 이 계약들이 한국 완성차 업체들의 글로벌 전기차 플랫폼에 FM 퓨즈가 기본 사양으로 채택되었다는 점이다.
              </p>

              <p className="italic text-gray-600">
                Mr. Fuse FM 회장은 "이번 계약은 단순 부품 공급이 아니라, 한국 자동차 산업의 글로벌 안전 기준에 FM이 인정받았다는 뜻"이라고 강조했다.
              </p>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  전기차 시대의 '필수 안전 부품'
                </h2>
                <p className="mb-4">
                  완성차 업체들이 FM과 계약을 체결한 배경에는 전기차 시장의 급속한 성장과 안전성에 대한 규제 강화가 있다. 전기자동차는 기존 내연기관차보다 고전압 배터리 시스템을 갖춰야 하는데, 이는 회로 오류 시 화재로 이어질 확률이 높다.
                </p>
                <p className="mb-4">
                  유럽연합(EU)은 올해부터 신규 판매 차량의 전기 안전성 기준을 대폭 강화했다. 미국의 국도교통안전국(NHTSA)도 전기차의 고전압 회로 관련 규제를 강화하고 있다. 이 같은 글로벌 규제 강화 속에서 신뢰할 수 있는 안전 퓨즈 공급사의 중요성이 급상승했다.
                </p>
                <p className="italic text-gray-600 mb-4">
                  "전기차의 배터리 팩과 모터 간 고전압 회로는 차량의 생명선이다. 이 회로에서 안전 실패가 발생하면 운전자와 탑승자의 생명이 위협받는다"고 현대자동차 전동화 기술팀의 관계자는 설명했다.
                </p>
                <p>
                  FM의 정밀 퓨즈는 이 같은 고전압 환경에서도 극도의 신뢰성을 유지한다. 회사가 제공한 테스트 데이터에 따르면, FM 퓨즈는 -40℃부터 +125℃의 극한 온도에서도 99.9% 이상의 동작 신뢰성을 보장한다.
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  한국 완성차의 글로벌 경쟁력 강화
                </h2>
                <p className="mb-4">
                  이번 계약은 한국 완성차 업체들의 글로벌 시장 진출 전략에서 중요한 위치를 차지한다. 현대·기아는 올해부터 유럽, 북미, 중국 시장에 고급 전기차 모델들을 대량 출시할 예정이다. 한국GM은 글로벌 모기업인 GM의 전동화 전략에 맞춰 차세대 전기차 플랫폼을 공동 개발 중이다.
                </p>
                <p className="mb-4">
                  이런 상황에서 국산 부품인 FM 퓨즈의 채택은 두 가지 의미가 있다. 첫째, 국내 부품사의 기술력으로 글로벌 안전 기준을 만족할 수 있다는 신호를 시장에 전송한다. 둘째, 원가 절감과 공급망 안정성 면에서 완성차 업체들의 경쟁력을 높인다.
                </p>
                <p className="italic text-gray-600">
                  업계 분석가들은 이를 '한국 부품사의 글로벌 도약'으로 평가하고 있다. "FM의 성공은 단순히 한 회사의 성과가 아니라, 한국 자동차 부품 산업 전체의 기술력 상향을 상징한다"고 서울대 자동차공학과 이준호 교수는 말했다.
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  3개 완성차와의 계약, 무엇이 다른가
                </h2>
                <p className="mb-4">
                  현대자동차와의 계약은 FM 퓨즈가 현대의 차세대 고급 전기차 플랫폼 'E-GMP(Electric Global Modular Platform)' 기반의 모든 모델에 탑재된다는 의미다. 여기에는 아이오닉 6, 제네시스 브랜드의 전기 럭셔리 세단 등이 포함된다.
                </p>
                <p className="mb-4">
                  기아자동차는 EV9 등 대형 전기차 라인업에 FM 퓨즈를 표준 부품으로 지정했다. 한국GM은 미국 시장 진출을 목표로 한 전기차 모델 중 고안전성이 요구되는 차종부터 FM 부품을 채용한다.
                </p>
                <p className="mb-4">
                  3개 완성차와의 계약이 의미 있는 이유는 다음과 같다:
                </p>
                <ul className="space-y-3 mb-6 list-disc pl-6">
                  <li>
                    <strong>동시성</strong> — 거의 같은 시기에 3개 완성차와 계약을 체결했다는 것은 FM의 기술이 한국 자동차 산업 전체에서 표준으로 인정받았음을 뜻한다.
                  </li>
                  <li>
                    <strong>라인업 확대</strong> — 단순 특정 차종이 아니라, 각 사의 주력 전기차 라인업 다수에 채택되었다.
                  </li>
                  <li>
                    <strong>글로벌 시장</strong> — 한국 국내 판매뿐 아니라 유럽, 북미, 중국 등 글로벌 시장에 판매되는 모델들에 탑재된다.
                  </li>
                </ul>
                <p className="italic text-gray-600">
                  Mr. Fuse 회장은 "이번 계약으로 FM의 퓨즈가 연 수천만 대의 전 세계 전기자동차에 탑재될 것으로 예상된다"고 밝혔다.
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  공급망 안정성의 교훈
                </h2>
                <p className="mb-4">
                  이번 계약은 팬데믹 이후 강화된 공급망 다원화 전략의 결과이기도 하다. 국제 자동차 부품 공급망에서 한 지역에 대한 의존도를 낮추려는 시도가 가속화되고 있기 때문이다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  "팬데믹 당시 완성차 업체들이 한 공급사에 과도하게 의존했을 때의 고통을 경험했다"고 삼성경제연구소의 자동차 산업 분석가 정준호는 설명했다. "이제 완성차들은 같은 부품이라도 여러 공급사를 확보하려고 한다. FM이 한국의 신뢰할 수 있는 공급사로 인정받은 것도 이런 맥락이다."
                </p>
                <p>
                  FM은 이미 ISO 26262 및 UL 인증을 획득했으므로, 유럽과 북미 규제 기준을 모두 충족한다. 이는 한국 본사에서 공급하더라도 글로벌 기준을 만족한다는 뜻이다.
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  생산 확충 계획
                </h2>
                <p className="mb-4">
                  FM은 이번 계약 이행을 위해 생산 시설을 대폭 확충할 계획이다. Mr. Fuse 회장은 "부산 본사의 생산 능력을 현 수준 대비 3배까지 확대할 것"이라고 밝혔다.
                </p>
                <p className="mb-4">
                  "현재 월 생산량이 500만 개 수준이지만, 계약 이행을 위해서는 월 1,500만 개 이상의 생산이 필요할 수 있다"고 그는 설명했다. 이를 위해 FM은:
                </p>
                <ol className="space-y-2 mb-6 list-decimal pl-6">
                  <li><strong>첨단 자동화 설비</strong> — 인공지능 기반 품질 검사 시스템 도입</li>
                  <li><strong>인력 확충</strong> — 부산 본사 및 위탁 생산사 인원 확대</li>
                  <li><strong>공급망 강화</strong> — 원자재 공급사와의 장기 계약 체결</li>
                </ol>
                <p>등을 계획 중이다.</p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  협력사와 지역 경제의 동반 성장
                </h2>
                <p className="mb-4">
                  FM의 성공은 부산 지역 경제에도 긍정적 영향을 미칠 것으로 예상된다. 회사의 생산 확충에 따라 부산의 연관 부품사, 자재사, 물류업체들도 수혜를 받을 전망이다.
                </p>
                <p className="italic text-gray-600">
                  부산경제연구소는 "FM의 생산 확충으로 인한 경제 파급 효과가 최소 수천억 원대에 이를 것"이라고 분석했다.
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  차기 목표: 유럽·북미 진출
                </h2>
                <p className="mb-4">
                  이번 계약을 발판으로 FM의 다음 목표는 유럽과 북미 완성차의 직접 계약이다. Mr. Fuse 회장은 "현재 독일, 프랑스의 주요 완성차와 협상을 진행 중"이라고 밝혔다.
                </p>
                <p className="italic text-gray-600">
                  "한국 완성차를 통한 간접 공급도 중요하지만, 글로벌 완성차와의 직접 계약이 FM의 진정한 국제화"라고 그는 강조했다.
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  한국 자동차 부품 산업의 신 대표주자
                </h2>
                <p className="mb-4">
                  이번 FM의 성공은 한국 자동차 부품 산업이 단순 '하청 제조'에서 '기술 리더십'으로 전환되고 있음을 보여준다. 과거 한국 부품사들은 완성차의 요청을 따라가는 수동적 입장이었다. 하지만 FM은 자체 기술 개발로 완성차에게 '필수 부품'이 되었다.
                </p>
                <p className="italic text-gray-600">
                  서울대 이 교수는 "FM의 성공 모델은 한국 부품 산업의 미래를 보여준다"며 "안전성, 신뢰성 같은 고부가가치 영역에서 기술 우위를 확보하는 것이 한국 부품사의 생존 전략"이라고 평가했다.
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
                    <strong className="text-gray-900 mr-2 min-w-[120px]">계약처:</strong>
                    <span className="text-gray-700">현대자동차, 기아자동차, 한국GM</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">예상 공급액:</strong>
                    <span className="text-gray-700">5년 누적 500억 원대</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">현 월 생산량:</strong>
                    <span className="text-gray-700">500만 개</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">목표 월 생산량:</strong>
                    <span className="text-gray-700">1,500만 개 이상</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">생산 확충:</strong>
                    <span className="text-gray-700">부산 본사 3배 확대</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">관련 기술:</strong>
                    <span className="text-gray-700">ISO 26262, UL 인증 보유</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">극한 온도 신뢰성:</strong>
                    <span className="text-gray-700">-40℃~+125℃에서 99.9% 이상</span>
                  </li>
                </ul>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  관련 기관
                </h2>
                <ul className="space-y-2 list-disc pl-6">
                  <li><strong>현대자동차</strong> — E-GMP 플랫폼 기반 전기차에 탑재</li>
                  <li><strong>기아자동차</strong> — EV9 등 대형 전기차 라인업 표준 부품</li>
                  <li><strong>한국GM</strong> — 미국 시장 진출 전기차 중 채택</li>
                  <li><strong>서울대 자동차공학과</strong> — 이준호 교수 자문</li>
                  <li><strong>부산경제연구소</strong> — 지역 경제 파급 효과 분석</li>
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

