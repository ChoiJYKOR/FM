import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SmartFusePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <article className="pt-20 md:pt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <time className="text-sm text-gray-500 mb-4 block">
              Dec. 20, 2025
            </time>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              FM, 업계 최초 스마트 퓨즈 기술 개발 성공… 제조 혁신의 새 기준 제시
            </h1>
            <p className="text-lg text-gray-600">
              AI 기반 실시간 감지 시스템 탑재… 불량률 50% 감소, 업계 표준 전환
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong>부산</strong> — FM이 인공지능(AI) 기반의 '스마트 세이프티 퓨즈(Smart Safety Fuse)' 기술 개발에 성공했다고 27일 공식 발표했다. 이는 업계 최초의 지능형 안전 부품으로, 전통적인 수동식 퓨즈 개념을 근본적으로 바꾼다.
              </p>

              <p>
                FM이 공개한 기술 사양에 따르면, 새로운 스마트 퓨즈는 전류 변화를 실시간으로 감지하고 위험 신호 발생 시 0.01초 내에 회로를 차단한다. 전통 퓨즈의 반응 시간(수십 밀리초)과 비교하면 수십 배 빠르다.
              </p>

              <p className="italic text-gray-600">
                Mr. Fuse FM 회장은 "스마트 퓨즈는 단순 부품이 아니라 전자 회로의 '인공지능 보안관'"이라고 설명했다. "위험을 감지한 후 반응하는 '사후 안전'에서, 위험을 미리 예측해 차단하는 '사전 안전'으로의 패러다임 전환을 의미한다."
              </p>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  4년간의 R&D, '기술의 결정체'
                </h2>
                <p className="mb-4">
                  FM의 스마트 퓨즈 개발은 2021년부터 시작되었다. 회사는 부산 본사에 AI 연구팀을 구성하고, 정밀 금속공학, 전자공학, 소프트웨어 개발 분야의 전문가 30명이 투입되었다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  "기존 퓨즈는 기계적으로 과전류를 감지하는 금속 재료였다"고 FM 기술 이사 김준섭은 설명했다. "반면 우리 스마트 퓨즈는 센서, 마이크로칩, 소프트웨어가 통합된 지능형 부품이다. 마치 퓨즈에 '뇌'를 장착한 것과 같다."
                </p>
                <p>
                  개발 과정에서 FM은 총 150억 원의 R&D 자금을 투입했다. 또한 국내 대학과 산업 기술원과의 협력을 통해 AI 알고리즘을 지속적으로 고도화했다.
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  기술의 혁신성: 5가지 핵심 기능
                </h2>
                <p className="mb-6">
                  FM의 스마트 퓨즈는 다섯 가지 핵심 기능을 갖추고 있다:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      1. 실시간 전류 모니터링
                    </h3>
                    <p>
                      마이크로초(백만분의 1초) 단위로 전류 변화를 감지한다. 정상 전류와 이상 전류의 차이를 즉시 판단한다.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      2. 예측적 위험 감지 (Predictive Safety)
                    </h3>
                    <p>
                      단순한 과전류 감지가 아니라, 이상 신호의 패턴을 분석해 위험이 임박했음을 미리 감지한다. 마치 의료용 AI가 질병의 초기 신호를 포착하듯이.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      3. 초고속 차단 (Ultra-Fast Isolation)
                    </h3>
                    <p>
                      위험 신호 감지 시 0.01초 내 회로를 차단한다. 이는 전기 아크가 발생할 시간도 주지 않는다.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      4. 자가 진단 및 보고 (Self-Diagnostic)
                    </h3>
                    <p>
                      부품 자체의 건강 상태를 모니터링하고, 주기적으로 통신 네트워크를 통해 상태 정보를 전송한다.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      5. 온도 적응 제어
                    </h3>
                    <p>
                      -40℃부터 +125℃의 극한 환경에서도 성능을 유지한다. 온도 변화에 따라 감지 기준을 자동으로 조정한다.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  제조 공정의 혁신: AI 품질 검사
                </h2>
                <p className="mb-4">
                  스마트 퓨즈 개발만큼 중요한 것은 이를 생산하는 공정의 혁신이다. FM은 제조 단계에서도 AI 기술을 도입했다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  "전통적 퓨즈 제조는 최종 검사 단계에서 불량품을 판별했다"고 김준섭 이사는 설명했다. "반면 우리는 제조의 모든 단계에 AI 카메라와 센서를 배치했다. 마이크로 단위의 결함도 실시간으로 감지하고 자동으로 제거한다."
                </p>
                <p className="mb-4">
                  결과는 극적이었다. FM의 스마트 퓨즈 제조 공정의 불량률은 기존 제품 대비 50% 이상 감소했다. 즉:
                </p>
                <ul className="space-y-2 mb-6 list-disc pl-6">
                  <li><strong>기존 퓨즈 불량률:</strong> 0.8% (1,000개 중 8개)</li>
                  <li><strong>스마트 퓨즈 불량률:</strong> 0.3% (1,000개 중 3개)</li>
                </ul>
                <p>
                  이는 업계 평균 불량률(1% 이상)과 비교해도 획기적으로 낮다.
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  테스트 결과: 업계 최고 수준의 신뢰성
                </h2>
                <p className="mb-6">
                  FM은 지난 6개월간 스마트 퓨즈의 신뢰성을 검증했다. 독립적인 제3 기관인 한국기계전기전자시험원(KTC)에 의뢰해 엄격한 테스트를 진행했다.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">테스트 항목</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">결과</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">업계 기준</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">1,000시간 연속 동작 신뢰성</td>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">99.7%</td>
                        <td className="border border-gray-300 px-4 py-3">95% 이상</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">극한 온도 (-40℃~+125℃) 동작률</td>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">99.9%</td>
                        <td className="border border-gray-300 px-4 py-3">95% 이상</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">과전류 반응 시간</td>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">0.01초</td>
                        <td className="border border-gray-300 px-4 py-3">0.1초 이상</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">자가 진단 정확도</td>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">99.8%</td>
                        <td className="border border-gray-300 px-4 py-3">90% 이상</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">5년 내구성 테스트 통과율</td>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">99.5%</td>
                        <td className="border border-gray-300 px-4 py-3">85% 이상</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="italic text-gray-600">
                  KTC의 검증 보고서는 "FM의 스마트 퓨즈는 현존하는 모든 기계식 퓨즈 대비 월등히 높은 신뢰성을 보유하고 있다"고 평가했다.
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  산업 영향: 전자 기기의 안전성 혁명
                </h2>
                <p className="mb-4">
                  스마트 퓨즈 기술의 파급 효과는 자동차와 로봇 산업을 넘어 모든 전자 기기로 확대될 것으로 예상된다.
                </p>
                <p className="mb-4 font-semibold">
                  적용 가능 분야:
                </p>
                <ol className="space-y-2 mb-6 list-decimal pl-6">
                  <li><strong>전기자동차 & 자율주행차</strong> — 배터리 팩의 화재 방지</li>
                  <li><strong>협업 로봇</strong> — 인간-로봇 상호 작용 시 안전성 보장</li>
                  <li><strong>재생에너지 시스템</strong> — 태양광·풍력 발전 설비의 안전성</li>
                  <li><strong>데이터센터</strong> — 고전압 전원 공급 장치의 안전</li>
                  <li><strong>의료 기기</strong> — 생명 유지 장치의 신뢰성 강화</li>
                  <li><strong>항공우주</strong> — 극저온 환경에서의 안전성</li>
                </ol>
                <p className="italic text-gray-600">
                  서울과학기술대학교 전자공학과 박준영 교수는 "FM의 스마트 퓨즈는 기술적 진전일 뿐만 아니라, 제조 산업 전체의 안전 패러다임을 바꿀 수 있는 혁신"이라고 평가했다.
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  경제적 파급 효과
                </h2>
                <p className="mb-4">
                  스마트 퓨즈의 경제적 가치는 직접 매출을 넘어선다.
                </p>
                <p className="mb-4 font-semibold">
                  직접 효과:
                </p>
                <ul className="space-y-2 mb-6 list-disc pl-6">
                  <li>FM의 스마트 퓨즈 단가: 기존 퓨즈의 3배 수준</li>
                  <li>예상 시장 규모: 연 1조 원대 (5년 후)</li>
                </ul>
                <p className="mb-4 font-semibold">
                  간접 효과:
                </p>
                <ul className="space-y-2 mb-6 list-disc pl-6">
                  <li>자동차 업계의 화재 사고 감소로 인한 보험료 절감</li>
                  <li>로봇 산업의 안전 기준 상향으로 글로벌 경쟁력 강화</li>
                  <li>반도체·전자 부품 생산 공정의 안전성 개선</li>
                </ul>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  특허 포트폴리오: 경쟁 우위의 기반
                </h2>
                <p className="mb-4">
                  FM은 스마트 퓨즈 관련 특허 21건을 한국을 포함해 미국, 유럽, 일본에 등록했다. 추가로 10건의 특허 출원이 진행 중이다.
                </p>
                <p className="italic text-gray-600">
                  "특허 전략은 우리의 기술 우위를 보호하는 핵심"이라고 Mr. Fuse 회장은 강조했다. "앞으로 경쟁사들이 비슷한 기술을 개발하려 할 때, 우리의 특허 포트폴리오가 업계 표준화의 길을 열 것이다."
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  다음 단계: 업계 표준화 추진
                </h2>
                <p className="italic text-gray-600">
                  "3년 내에 ISO(국제표준화기구)에 스마트 퓨즈 기술 표준을 제안할 것"이라고 Mr. Fuse 회장은 밝혔다. "한국 회사의 기술이 전 세계 산업의 표준이 되면, 이는 한국 산업의 글로벌 리더십을 보여주는 신호가 될 것이다."
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  전문가 평가: "제조 혁신의 새 기준"
                </h2>
                <p className="mb-4">
                  업계와 학계의 평가는 긍정적이다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  "FM의 스마트 퓨즈 개발은 단순 제품 개선을 넘어서, '제조 4.0(Manufacturing 4.0)' 시대의 구체적 사례"라고 포항공과대학교 기계공학과 이강호 교수는 말했다.
                </p>
                <p className="italic text-gray-600">
                  서울대 자동차공학과 이준호 교수도 "안전 부품에 AI를 통합한 FM의 시도는 향후 자동차 산업 전체의 방향을 제시할 것"이라고 평가했다.
                </p>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  생산 준비 및 확충 계획
                </h2>
                <p className="mb-4">
                  FM은 스마트 퓨즈의 상용화를 위해 생산 시설을 정비 중이다.
                </p>
                <p className="mb-4 italic text-gray-600">
                  "현재 부산 본사에서 월 50만 개 규모의 스마트 퓨즈를 생산할 수 있는 라인을 준비 중"이라고 Mr. Fuse 회장은 설명했다. "올해 4분기부터 완성차와 로봇 업체들에 공급할 계획이다."
                </p>
                <p className="mb-4">
                  추가 생산 확충도 준비 중이다:
                </p>
                <ol className="space-y-2 mb-6 list-decimal pl-6">
                  <li><strong>부산 본사 신규 라인:</strong> 월 500만 개 규모</li>
                  <li><strong>위탁 생산사 확대:</strong> 2곳의 계약 생산사와 협력</li>
                  <li><strong>자동화 시설 고도화:</strong> 로봇 암과 AI 검사 시스템 도입</li>
                </ol>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  FM의 다음 목표
                </h2>
                <p className="italic text-gray-600">
                  Mr. Fuse 회장은 "스마트 퓨즈는 FM의 시작일 뿐"이라고 강조했다.
                </p>
                <p>
                  "향후 5년간 스마트 퓨즈뿐 아니라, AI 기반의 스마트 릴레이, 스마트 스위치 등 다양한 지능형 부품 개발을 추진할 것이다. FM은 '부품 제조사'에서 '지능형 전자 솔루션 회사'로 도약하는 중이다."
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
                    <strong className="text-gray-900 mr-2 min-w-[120px]">기술명:</strong>
                    <span className="text-gray-700">스마트 세이프티 퓨즈 (Smart Safety Fuse)</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">R&D 투자:</strong>
                    <span className="text-gray-700">150억 원 (4년간)</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">개발팀:</strong>
                    <span className="text-gray-700">30명 (AI, 금속공학, 전자공학 전문가)</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">불량률 개선:</strong>
                    <span className="text-gray-700">0.8% → 0.3% (50% 감소)</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">신뢰성:</strong>
                    <span className="text-gray-700">99.7% (1,000시간 연속 동작)</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">반응 시간:</strong>
                    <span className="text-gray-700">0.01초</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">극한 온도:</strong>
                    <span className="text-gray-700">-40℃~+125℃에서 99.9% 동작</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">특허 등록:</strong>
                    <span className="text-gray-700">21건 (국내·미국·유럽·일본)</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">특허 출원:</strong>
                    <span className="text-gray-700">10건 진행 중</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">상용화 시기:</strong>
                    <span className="text-gray-700">2025년 4분기</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="text-gray-900 mr-2 min-w-[120px]">월 생산 목표:</strong>
                    <span className="text-gray-700">500만 개 (확충 예정)</span>
                  </li>
                </ul>
              </section>

              <hr className="my-12 border-gray-300" />

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  관련 기관 및 전문가
                </h2>
                <ul className="space-y-2 list-disc pl-6">
                  <li><strong>한국기계전기전자시험원(KTC)</strong> — 독립적 신뢰성 검증</li>
                  <li><strong>서울과학기술대학교</strong> — 박준영 교수, 기술 평가</li>
                  <li><strong>서울대학교</strong> — 이준호 교수, 산업 영향 분석</li>
                  <li><strong>포항공과대학교</strong> — 이강호 교수, 제조 혁신 평가</li>
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

