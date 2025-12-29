"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tabs = [
  {
    id: 1,
    title: "Company",
  },
  {
    id: 2,
    title: "Technology",
  },
  {
    id: 3,
    title: "Product",
  },
  {
    id: 4,
    title: "Media Center",
  },
];

export default function AboutCompanyPage() {
  const [activeTab, setActiveTab] = useState(3); // Media Center가 기본 탭

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 md:pt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          {/* Page Header */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              About FM
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              FM 기업 정보를 소개합니다
            </p>
          </header>

          {/* Tabs */}
          <div className="mb-8 md:mb-12">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-2 md:space-x-4 border-b border-gray-200 min-w-max md:min-w-0 pb-1">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-200 border-b-2 ${
                      activeTab === index
                        ? "text-primary border-primary"
                        : "text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mt-8 min-h-[400px]">
            {/* Company Tab */}
            {activeTab === 0 && (
              <div className="transition-all duration-500 ease-in-out opacity-100 block animate-fadeIn">
                <div className="prose prose-lg max-w-none">
                  {/* 히어로 섹션 */}
                  <section className="mb-16 py-12 bg-gradient-to-br from-white to-gray-50 rounded-lg">
                    <div className="text-center mb-12">
                      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        FM: Crafting Safety, Securing Tomorrow
                      </h2>
                      <p className="text-xl md:text-2xl text-gray-600 mb-12">
                        산업용 퓨즈 솔루션의 글로벌 리더
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                          <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
                          <p className="text-gray-600">Years of Excellence</p>
                        </div>
                        <div className="text-center">
                          <h3 className="text-4xl font-bold text-primary mb-2">3</h3>
                          <p className="text-gray-600">Major Partners (현대·기아·제네시스)</p>
                        </div>
                        <div className="text-center">
                          <h3 className="text-4xl font-bold text-primary mb-2">99.5%</h3>
                          <p className="text-gray-600">Quality Accuracy</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* 미션과 비전 */}
                  <section className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                      Our Mission & Vision
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-primary hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-semibold text-primary mb-4">Mission</h3>
                        <p className="text-lg font-semibold text-gray-800 mb-6">
                          &quot;안전과 신뢰성을 통해 미래를 설계한다&quot;
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start text-gray-700">
                            <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>최고 품질의 퓨즈 솔루션 제공</span>
                          </li>
                          <li className="flex items-start text-gray-700">
                            <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>산업 안전 기준 초과 달성</span>
                          </li>
                          <li className="flex items-start text-gray-700">
                            <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>글로벌 자동차 제조사와 협력</span>
                          </li>
                          <li className="flex items-start text-gray-700">
                            <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>지속 가능한 생산 프로세스 운영</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-primary hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-semibold text-primary mb-4">Vision</h3>
                        <p className="text-lg font-semibold text-gray-800 mb-6">
                          &quot;AI 기반 검사 기술로 제조업을 혁신하다&quot;
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start text-gray-700">
                            <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>2030년 글로벌 톱 5 기업 진입</span>
                          </li>
                          <li className="flex items-start text-gray-700">
                            <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>EV 시장 성장에 따른 수익 3배 증가</span>
                          </li>
                          <li className="flex items-start text-gray-700">
                            <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>AI 비전 검사 기술 업계 표준화</span>
                          </li>
                          <li className="flex items-start text-gray-700">
                            <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>아시아 태평양 지역 최강 기업 지위 확보</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* 핵심 가치 */}
                  <section className="mb-16 py-12 bg-gradient-to-b from-gray-50 to-white rounded-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
                      Our Core Values
                    </h2>
                    <p className="text-center text-gray-600 mb-12">FM을 이끄는 5가지 핵심 가치</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                      {[
                        { num: 1, title: "Safety First", desc: "제품의 안전성을 최우선으로 합니다. 모든 설계, 제조, 검사 단계에서 최고 수준의 안전 기준을 준수합니다." },
                        { num: 2, title: "Innovation", desc: "YOLO + ROI + CNN 기반 AI 비전 검사 기술로 산업을 혁신합니다. R&D 투자 8~10%를 지속적으로 확대하고 있습니다." },
                        { num: 3, title: "Reliability", desc: "99.5% 이상의 검사 정확도로 고객의 신뢰를 얻습니다. 글로벌 자동차 제조사 3사와의 장기 계약이 증명합니다." },
                        { num: 4, title: "Sustainability", desc: "친환경 제조 프로세스와 SF6-Free 정책으로 미래 세대를 위한 책임감 있는 기업 활동을 합니다." },
                        { num: 5, title: "Partnership", desc: "고객, 파트너, 직원과의 신뢰 기반 협력을 통해 함께 성장합니다. 배터리 안전 Task Force 주도적 참여." },
                      ].map((value) => (
                        <div key={value.num} className="bg-white p-6 rounded-lg text-center border-t-4 border-primary hover:shadow-lg transition-shadow">
                          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                            {value.num}
                          </div>
                          <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 회사 역사 타임라인 */}
                  <section className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                      Our Journey
                    </h2>
                    <div className="max-w-3xl mx-auto relative">
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden md:block"></div>
                      {[
                        { year: "2015", title: "FM 설립", desc: "산업용 퓨즈 솔루션 개발 시작" },
                        { year: "2018", title: "현대·기아 계약 체결", desc: "글로벌 완성차 제조사와 첫 계약" },
                        { year: "2021", title: "Genesis 공급 시작", desc: "프리미엄 브랜드 안전 퓨즈 공급" },
                        { year: "2023", title: "배터리 안전 Task Force 참여", desc: "EV 안전 부품 시장 리더 포지셔닝" },
                        { year: "2024", title: "AI 비전 검사 기술 완성", desc: "YOLO + ROI + CNN 기반 검사 시스템 상용화" },
                        { year: "2025~", title: "글로벌 톱 5 진입 목표", desc: "Multi-Modal AI, Edge AI 기술 개발" },
                      ].map((item, index) => (
                        <div key={index} className={`mb-10 flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                          <div className="w-20 text-center font-bold text-primary pt-2 hidden md:block">
                            {item.year}
                          </div>
                          <div className="flex-1 bg-gray-50 p-5 rounded-lg border-l-4 border-primary ml-0 md:ml-0">
                            <div className="md:hidden text-primary font-bold mb-2">{item.year}</div>
                            <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 조직 구조 */}
                  <section className="mb-16 py-12 bg-gradient-to-b from-white to-gray-50 rounded-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
                      Our Team
                    </h2>
                    <p className="text-center text-gray-600 mb-12">FM을 이끄는 전문가들</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
                      {[
                        { title: "경영 & 사업개발", desc: "글로벌 OEM 계약 및 전략적 파트너십 관리" },
                        { title: "R&D & 기술개발", desc: "AI 비전 검사 기술, 스마트 퓨즈 혁신" },
                        { title: "생산 & 품질관리", desc: "99.5% 정확도 검사 시스템 운영, 공정 최적화" },
                        { title: "마케팅 & 브랜드", desc: "글로벌 브랜드 정체성 구축, 시장 커뮤니케이션" },
                      ].map((team, index) => (
                        <div key={index} className="text-center">
                          <div className={`w-20 h-20 rounded-full mx-auto mb-4 ${index === 0 ? 'bg-primary' : index === 1 ? 'bg-gray-800' : index === 2 ? 'bg-gray-500' : 'bg-gray-700'}`}></div>
                          <h3 className="text-base font-semibold text-gray-900 mb-2">{team.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{team.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-10 max-w-2xl mx-auto text-center border-t border-gray-200 pt-10">
                      <div>
                        <h3 className="text-3xl font-bold text-primary mb-2">100+</h3>
                        <p className="text-sm text-gray-600">Employees</p>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-primary mb-2">5</h3>
                        <p className="text-sm text-gray-600">Technical Teams</p>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-primary mb-2">3</h3>
                        <p className="text-sm text-gray-600">R&D Centers</p>
                      </div>
                    </div>
                  </section>

                  {/* 글로벌 입지 */}
                  <section className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                      Global Presence
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                      <div>
                        <h3 className="text-2xl font-semibold text-primary mb-5">아시아 태평양 지역 최강</h3>
                        <ul className="space-y-3 mb-8">
                          <li className="text-gray-700">
                            <strong>한국:</strong> 본사 (부산), R&D 센터
                          </li>
                          <li className="text-gray-700">
                            <strong>주요 거래선:</strong> 현대 자동차, 기아 자동차, Genesis
                          </li>
                          <li className="text-gray-700">
                            <strong>시장 점유율:</strong> 아시아 태평양 EV 퓨즈 시장 3.2% (2030년 목표: 4.5%)
                          </li>
                          <li className="text-gray-700">
                            <strong>글로벌 전개:</strong> 유럽, 북미 OEM 신규 진입 준비 중
                          </li>
                        </ul>
                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                          <h4 className="text-base font-semibold text-gray-900 mb-4">2030년 글로벌 톱 5 진입 전략</h4>
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <p className="text-xs text-gray-600 mb-2">시장점유율</p>
                              <p className="text-xl font-bold text-primary">4.5%</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-600 mb-2">수익 목표</p>
                              <p className="text-xl font-bold text-primary">USD 225M</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-600 mb-2">검사 정확도</p>
                              <p className="text-xl font-bold text-primary">99.8%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-10 flex flex-col justify-center items-center min-h-[400px]">
                        <div className="text-center mb-6">
                          <p className="text-gray-600 mb-4">지도 이미지 또는 시각화</p>
                        </div>
                        <div className="space-y-2 text-left">
                          <div className="text-sm text-gray-600">주요 거래선 (현대·기아·Genesis)</div>
                          <div className="text-sm text-gray-600">확대 목표 시장</div>
                          <div className="text-sm text-gray-600">미래 진출 지역</div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* 파트너십 및 성과 */}
                  <section className="mb-16 py-12 bg-gradient-to-b from-gray-50 to-white rounded-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                      Partnerships & Achievements
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                      {[
                        { name: "Hyundai Motor", logo: "현대자동차", desc: "글로벌 완성차 제조 1위", status: "계약 체결 (2018년~)" },
                        { name: "Kia Motors", logo: "기아자동차", desc: "글로벌 EV 시장 성장 주도", status: "계약 체결 (2018년~)" },
                        { name: "Genesis", logo: "제네시스", desc: "프리미엄 브랜드 안전 표준", status: "공급 진행 (2021년~)" },
                      ].map((partner, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow">
                          <div className={`w-20 h-20 rounded-lg mx-auto mb-4 flex items-center justify-center text-white text-xs font-bold ${index === 0 ? 'bg-primary' : index === 1 ? 'bg-gray-800' : 'bg-gray-500'}`}>
                            <p>{partner.logo}</p>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{partner.desc}</p>
                          <p className="text-sm font-bold text-primary">{partner.status}</p>
                        </div>
                      ))}
                    </div>
                    <div className="max-w-5xl mx-auto bg-white p-10 rounded-lg border-l-4 border-primary">
                      <h3 className="text-2xl font-semibold text-primary mb-8">2024년 주요 성과</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          { title: "AI 비전 검사 시스템 상용화", desc: "YOLO + ROI + CNN 기술로 99.5% 검사 정확도 달성" },
                          { title: "생산량 증가", desc: "월 처리량 300배 증가 (시간당 120개 → 36,000개)" },
                          { title: "EV 시장 리더십", desc: "배터리 안전 Task Force 주도적 참여" },
                          { title: "기술 혁신", desc: "AI 기반 스마트 퓨즈 3건 이상 특허 출원" },
                        ].map((achievement, index) => (
                          <div key={index}>
                            <h4 className="text-base font-semibold text-gray-900 mb-1">{achievement.title}</h4>
                            <p className="text-sm text-gray-600">{achievement.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            )}

            {/* Technology Tab */}
            {activeTab === 1 && (
              <div className="transition-all duration-500 ease-in-out opacity-100 block animate-fadeIn">
                <div className="prose prose-lg max-w-none">
                  {/* 제품 개요 */}
                  <section className="mb-16 py-12 bg-gradient-to-br from-white to-gray-50 rounded-lg">
                    <div className="text-center mb-12">
                      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        FM Fuses: Built on Trust
                      </h2>
                      <p className="text-xl md:text-2xl text-gray-600 mb-12">
                        신뢰도와 안전성으로 검증된 산업용 퓨즈
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                          <h3 className="text-2xl font-bold text-primary mb-2">99.5%</h3>
                          <p className="text-gray-600">신뢰도</p>
                          <p className="text-sm text-gray-500">10년 무고장 운영</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                          <h3 className="text-2xl font-bold text-primary mb-2">&lt; 1ms</h3>
                          <p className="text-gray-600">즉각적인 응답</p>
                          <p className="text-sm text-gray-500">과전류 검출</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                          <h3 className="text-2xl font-bold text-primary mb-2">글로벌</h3>
                          <p className="text-gray-600">표준</p>
                          <p className="text-sm text-gray-500">IEC, ISO 완벽 준수</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                          <h3 className="text-2xl font-bold text-primary mb-2">100%</h3>
                          <p className="text-gray-600">친환경 설계</p>
                          <p className="text-sm text-gray-500">SF6-Free</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* FM 퓨즈의 신뢰도 철학 */}
                  <section className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
                      The Foundation of Reliability
                    </h2>
                    <p className="text-center text-gray-600 mb-12">신뢰도는 설계, 생산, 검사의 완벽한 조화</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all">
                        <h3 className="text-xl font-semibold text-primary mb-4">1. 최적화된 설계</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-base font-semibold text-gray-900 mb-2">재료 과학</h4>
                            <p className="text-sm text-gray-600">고순도 금속 합금 (99.99% 순도)으로 산화와 부식을 원천 차단합니다.</p>
                          </div>
                          <div>
                            <h4 className="text-base font-semibold text-gray-900 mb-2">열 관리 설계</h4>
                            <p className="text-sm text-gray-600">정밀한 기하학적 설계로 열 분산을 최적화하여 과열을 방지합니다.</p>
                          </div>
                          <div>
                            <h4 className="text-base font-semibold text-gray-900 mb-2">접촉 저항</h4>
                            <p className="text-sm text-gray-600">접촉점 저항을 1mΩ 이하로 제어하여 전압 강하를 최소화합니다.</p>
                          </div>
                          <div>
                            <h4 className="text-base font-semibold text-gray-900 mb-2">응답 시간</h4>
                            <p className="text-sm text-gray-600">퓨즈 와이어의 융점 설계로 과전류 검출을 &lt; 1ms 내에 달성합니다.</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all">
                        <h3 className="text-xl font-semibold text-primary mb-4">2. 엄격한 생산 공정</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-base font-semibold text-gray-900 mb-2">원재료 선별</h4>
                            <p className="text-sm text-gray-600">모든 원재료는 공급업체 인증서와 독립적 검증을 거칩니다.</p>
                          </div>
                          <div>
                            <h4 className="text-base font-semibold text-gray-900 mb-2">공정 제어</h4>
                            <p className="text-sm text-gray-600">온도, 습도, 압력을 ±2% 내로 유지하여 일관된 품질을 보장합니다.</p>
                          </div>
                          <div>
                            <h4 className="text-base font-semibold text-gray-900 mb-2">조립 정밀도</h4>
                            <p className="text-sm text-gray-600">자동화 장비로 ±0.05mm 오차율 내에서 부품을 조립합니다.</p>
                          </div>
                          <div>
                            <h4 className="text-base font-semibold text-gray-900 mb-2">트레이서빌리티</h4>
                            <p className="text-sm text-gray-600">모든 제품에 고유 ID 부여 및 생산 이력을 완벽히 기록합니다.</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all">
                        <h3 className="text-xl font-semibold text-primary mb-4">3. 다층 검사 시스템</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-base font-semibold text-gray-900 mb-2">외관 검사</h4>
                            <p className="text-sm text-gray-600">자동 비전 시스템으로 외형, 색상, 표면 결함을 100% 검사합니다.</p>
                          </div>
                          <div>
                            <h4 className="text-base font-semibold text-gray-900 mb-2">전기적 검사</h4>
                            <p className="text-sm text-gray-600">저항값, 응답 시간, 절연 내력을 샘플 기준으로 검증합니다.</p>
                          </div>
                          <div>
                            <h4 className="text-base font-semibold text-gray-900 mb-2">환경 테스트</h4>
                            <p className="text-sm text-gray-600">고온(-40°C ~ 125°C), 진동, 습도 조건에서 안정성을 검증합니다.</p>
                          </div>
                          <div>
                            <h4 className="text-base font-semibold text-gray-900 mb-2">AI 보조 검사</h4>
                            <p className="text-sm text-gray-600">이전 단계의 결함 패턴을 학습하여 신뢰도를 추가로 향상시킵니다.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* 생산 공정 */}
                  <section className="mb-16 py-12 bg-gradient-to-b from-gray-50 to-white rounded-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
                      Production Process
                    </h2>
                    <p className="text-center text-gray-600 mb-12">신뢰도를 보장하는 6단계 생산 공정</p>
                    <div className="max-w-4xl mx-auto space-y-6">
                      {[
                        {
                          num: 1,
                          title: "재료 선별",
                          subtitle: "Material Selection",
                          items: [
                            "화학 성분 분석 (99.99% 순도 확인)",
                            "기계적 성질 측정 (강도, 연성)",
                            "불순물 검사 (ICP-MS 분석)",
                            "공급업체 인증서 검증",
                          ],
                          target: "합격률: 99.8% 이상 (0.2% 폐기)",
                        },
                        {
                          num: 2,
                          title: "와이어 제조",
                          subtitle: "Wire Drawing & Heat Treatment",
                          items: [
                            "금속 합금 녹임 (±5°C 온도 제어)",
                            "연신 공정 (±0.1mm 직경 정밀도)",
                            "열처리 (항복 강도 정확한 조정)",
                            "표면 코팅 (부식 방지 층)",
                          ],
                          target: "융점 정밀도: ±2°C 이내, 직경 오차: ±0.02mm 이내",
                        },
                        {
                          num: 3,
                          title: "구조 조립",
                          subtitle: "Assembly",
                          items: [
                            "와이어 중심 설치 (±0.05mm)",
                            "글래스 재킷 적용",
                            "금속 캡 압착",
                            "밀봉 처리 (100% 가스 차단)",
                          ],
                          target: "조립 오류율: 0.1% 이하, 밀봉 누설: 0 ppm",
                        },
                        {
                          num: 4,
                          title: "성능 테스트",
                          subtitle: "Performance Validation",
                          items: [
                            "정상 전류 통과 (손상 없음)",
                            "저항값 측정 (≤ 1mΩ)",
                            "과전류 응답 시간 (&lt; 1ms)",
                            "절연 내력 (≥ 1500V)",
                          ],
                          target: "통과율: 99.7% 이상",
                        },
                        {
                          num: 5,
                          title: "환경 시뮬레이션",
                          subtitle: "Environmental Testing",
                          items: [
                            "온도 순환 (-40°C ~ 125°C)",
                            "습도 테스트 (95% RH, 1000시간)",
                            "진동 테스트 (20~2000Hz)",
                            "염무료(Salt-fog) 테스트 (1000시간)",
                          ],
                          target: "10년 무고장 운영 검증",
                        },
                        {
                          num: 6,
                          title: "최종 검사 & 포장",
                          subtitle: "Final Inspection & Packaging",
                          items: [
                            "외관 검사 (자동 비전 시스템)",
                            "트레이서빌리티 마킹",
                            "포장 및 라벨 확인",
                            "무작위 샘플 재검증",
                          ],
                          target: "손상률: 0.01% 이하, 추적 가능: 개별 제품별 생산 기록",
                        },
                      ].map((stage) => (
                        <div key={stage.num} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                              {stage.num}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-primary mb-1">{stage.title}</h3>
                              <p className="text-sm text-gray-500 mb-4">{stage.subtitle}</p>
                              <div className="space-y-3">
                                <div>
                                  <h4 className="text-sm font-semibold text-gray-900 mb-2">공정 내용</h4>
                                  <ul className="space-y-2">
                                    {stage.items.map((item, idx) => (
                                      <li key={idx} className="flex items-start text-sm text-gray-600">
                                        <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="bg-gray-50 p-3 rounded border-l-4 border-primary">
                                  <p className="text-sm font-semibold text-gray-900">목표: {stage.target}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 검사 & 품질관리 */}
                  <section className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
                      Quality Control System
                    </h2>
                    <p className="text-center text-gray-600 mb-12">6개 독립적 검사 단계로 99.5% 신뢰도 달성</p>
                    <div className="max-w-4xl mx-auto mb-12 bg-gray-50 p-8 rounded-lg border-l-4 border-primary">
                      <h3 className="text-xl font-semibold text-primary mb-4">다층 검사 구조 (Multi-Layer Inspection)</h3>
                      <p className="text-gray-700">
                        각 검사 단계는 독립적으로 작동하며, 한 단계의 검사가 이전 단계의 모든 제품을 재검증하지 않아도 불량을 탐지할 수 있습니다.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                      {[
                        {
                          title: "외관 검사",
                          subtitle: "Visual Inspection",
                          items: ["표면 결함 (스크래치, 오염)", "색상 일관성", "마킹 선명도", "조립 정렬 확인"],
                          method: "자동 비전 시스템 (카메라 + 조명)",
                          result: "검사 정확도: 99.2%, 처리량: 시간당 36,000개",
                        },
                        {
                          title: "저항값 측정",
                          subtitle: "Electrical Resistance",
                          items: ["접촉 저항 (≤ 1mΩ)", "와이어 저항 (온도 계수 확인)", "연결부 무결성", "조립 정밀도 간접 확인"],
                          method: "정밀 저항계 (4-점 측정)",
                          result: "합격 기준: ≤ 1.0mΩ (10% 샘플)",
                        },
                        {
                          title: "응답 시간 검사",
                          subtitle: "Response Time",
                          items: ["과전류 검출 속도", "와이어 융점 정확도", "응답 곡선 일관성", "회로 안정성"],
                          method: "고주파 신호 발생기 + 오실로스코프",
                          result: "목표: &lt; 1ms (100% 샘플의 1%)",
                        },
                        {
                          title: "환경 시뮬레이션",
                          subtitle: "Environmental Testing",
                          items: ["온도 순환 (-40°C ~ 125°C, 500회)", "습도 테스트 (95% RH, 1000시간)", "염무료 테스트 (부식 저항성)", "진동 테스트 (IEC 표준)"],
                          method: "월 1회, 배치당 50개 샘플 (5%)",
                          result: "합격 기준: 100% (0 불량)",
                        },
                        {
                          title: "AI 보조 검사",
                          subtitle: "AI-Supported Quality Check",
                          items: ["이전 불량 패턴 학습", "외관 검사의 신뢰도 상향", "숨겨진 결함 추가 탐지", "불량 원인 분석"],
                          method: "보조 역할: 메인이 아닌 추가 검증",
                          result: "신뢰도 향상: 99.2% → 99.5%",
                        },
                        {
                          title: "최종 검증",
                          subtitle: "Final Verification",
                          items: ["무작위 샘플 재검증", "트레이서빌리티 확인", "포장 무결성", "출고 전 최종 체크"],
                          method: "통계적 샘플링 (배치당 30개 이상)",
                          result: "합격 기준: 30개 중 0건 불량",
                        },
                      ].map((layer, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-primary hover:shadow-lg transition-all">
                          <div className="bg-gray-50 p-4 border-b-2 border-gray-200">
                            <h3 className="text-lg font-semibold text-primary mb-1">{layer.title}</h3>
                            <p className="text-xs text-gray-500">{layer.subtitle}</p>
                          </div>
                          <div className="p-4">
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">검사 항목</h4>
                            <ul className="space-y-1 mb-4">
                              {layer.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="text-xs text-gray-600 flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                            <h4 className="text-sm font-semibold text-gray-900 mb-1">방법</h4>
                            <p className="text-xs text-gray-600 mb-3">{layer.method}</p>
                            <h4 className="text-sm font-semibold text-gray-900 mb-1">결과</h4>
                            <p className="text-xs text-gray-600">{layer.result}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="max-w-5xl mx-auto bg-gray-50 p-10 rounded-lg border-l-4 border-primary">
                      <h3 className="text-2xl font-semibold text-primary mb-8 text-center">검사 통계 (연간 기준)</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-lg text-center border-t-4 border-primary">
                          <p className="text-xs text-gray-600 mb-2">총 생산량</p>
                          <p className="text-2xl font-bold text-primary mb-1">864만개</p>
                          <p className="text-xs text-gray-500">월 72만개 평균</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg text-center border-t-4 border-primary">
                          <p className="text-xs text-gray-600 mb-2">총 검사건수</p>
                          <p className="text-2xl font-bold text-primary mb-1">1,800만회</p>
                          <p className="text-xs text-gray-500">제품당 2~3회</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg text-center border-t-4 border-primary">
                          <p className="text-xs text-gray-600 mb-2">불량 검출</p>
                          <p className="text-2xl font-bold text-primary mb-1">43만2천개</p>
                          <p className="text-xs text-gray-500">연간 5% 폐기</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg text-center border-t-4 border-primary">
                          <p className="text-xs text-gray-600 mb-2">최종 신뢰도</p>
                          <p className="text-2xl font-bold text-primary mb-1">99.5%</p>
                          <p className="text-xs text-gray-500">고객 인수 제품</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* 안전성 인증 & 기준 */}
                  <section className="mb-16 py-12 bg-gradient-to-b from-white to-gray-50 rounded-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
                      Safety Certifications & Standards
                    </h2>
                    <p className="text-center text-gray-600 mb-12">국제 안전 표준 완벽 준수</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all">
                        <h3 className="text-lg font-semibold text-primary mb-4">국제 표준</h3>
                        <div className="space-y-4">
                          {[
                            { name: "IEC 60127-2", desc: "소형 퓨즈 기본 표준", status: "완벽 준수" },
                            { name: "ISO 9001:2015", desc: "품질 관리 시스템", status: "인증 획득" },
                            { name: "AEC-Q200", desc: "자동차 부품 신뢰성", status: "레벨 2 (최고 등급)" },
                            { name: "RoHS 2.0", desc: "유해 물질 제한", status: "완벽 준수" },
                          ].map((cert, idx) => (
                            <div key={idx} className="bg-gray-50 p-3 rounded border-l-3 border-primary">
                              <p className="text-sm font-semibold text-gray-900 mb-1">{cert.name}</p>
                              <p className="text-xs text-gray-600 mb-1">{cert.desc}</p>
                              <p className="text-xs font-bold text-primary">{cert.status}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all">
                        <h3 className="text-lg font-semibold text-primary mb-4">안전성 기준</h3>
                        <div className="space-y-4">
                          {[
                            { name: "절연 내력", desc: "≥ 1500V (AC)", status: "초과 달성" },
                            { name: "과전류 응답", desc: "&lt; 1ms", status: "0.8ms 평균" },
                            { name: "온도 범위", desc: "-40°C ~ 125°C", status: "검증 완료" },
                            { name: "부식 저항", desc: "1000시간 염무료", status: "합격" },
                          ].map((cert, idx) => (
                            <div key={idx} className="bg-gray-50 p-3 rounded border-l-3 border-primary">
                              <p className="text-sm font-semibold text-gray-900 mb-1">{cert.name}</p>
                              <p className="text-xs text-gray-600 mb-1">{cert.desc}</p>
                              <p className="text-xs font-bold text-primary">{cert.status}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all">
                        <h3 className="text-lg font-semibold text-primary mb-4">환경 기준</h3>
                        <div className="space-y-4">
                          {[
                            { name: "SF6-Free", desc: "친환경 설계", status: "100% 준수" },
                            { name: "RE-Power", desc: "에너지 효율", status: "등급 A" },
                            { name: "리사이클", desc: "재활용 가능 설계", status: "95% 이상" },
                            { name: "탄소 발자국", desc: "저탄소 생산", status: "업계 평균 대비 40% 감소" },
                          ].map((cert, idx) => (
                            <div key={idx} className="bg-gray-50 p-3 rounded border-l-3 border-primary">
                              <p className="text-sm font-semibold text-gray-900 mb-1">{cert.name}</p>
                              <p className="text-xs text-gray-600 mb-1">{cert.desc}</p>
                              <p className="text-xs font-bold text-primary">{cert.status}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="max-w-5xl mx-auto bg-white p-10 rounded-lg border-l-4 border-primary">
                      <h3 className="text-2xl font-semibold text-primary mb-8 text-center">상세 준수 사항</h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">기준</th>
                              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">요구사항</th>
                              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">FM 성과</th>
                              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">검증</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { standard: "정격 전압", requirement: "32V DC 이하", result: "32V DC", verified: "✅" },
                              { standard: "정격 전류", requirement: "1A ~ 20A", result: "0.5A ~ 30A", verified: "✅" },
                              { standard: "응답 시간", requirement: "I²t &lt; 100", result: "I²t ≈ 75", verified: "✅" },
                              { standard: "접촉 저항", requirement: "≤ 1.5mΩ", result: "≤ 1.0mΩ", verified: "✅" },
                              { standard: "진동 내성", requirement: "IEC 60068-2-6", result: "15분 100Hz", verified: "✅" },
                              { standard: "습도 내성", requirement: "95% RH, 1000h", result: "합격", verified: "✅" },
                              { standard: "온도 순환", requirement: "-40°C ~ 125°C", result: "500회 합격", verified: "✅" },
                              { standard: "절연 내력", requirement: "1500V, 1분", result: "2000V, 1분", verified: "✅" },
                            ].map((row, idx) => (
                              <tr key={idx}>
                                <td className="border border-gray-300 px-4 py-2 text-sm">{row.standard}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm">{row.requirement}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm">{row.result}</td>
                                <td className="border border-gray-300 px-4 py-2 text-sm">{row.verified}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            )}

            {/* Product Tab */}
            {activeTab === 2 && (
              <div className="transition-all duration-500 ease-in-out opacity-100 block animate-fadeIn">
                <div className="prose prose-lg max-w-none">
                  {/* Product Lineup */}
                  <section className="mb-16 py-12 bg-gradient-to-b from-gray-50 to-white rounded-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
                      제품 라인업
                    </h2>
                    <p className="text-center text-gray-600 mb-12">신뢰도 기반 FM 퓨즈 포트폴리오</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-primary hover:shadow-lg transition-all">
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-primary mb-4">4-Pin Fuse Box</h3>
                          <div className="space-y-3 mb-4 text-sm">
                            <div className="flex justify-between pb-2 border-b border-gray-200">
                              <span className="text-gray-600">전압:</span>
                              <span className="font-semibold text-gray-900">32V DC</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-gray-200">
                              <span className="text-gray-600">전류:</span>
                              <span className="font-semibold text-gray-900">0.5~30A</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-gray-200">
                              <span className="text-gray-600">응답:</span>
                              <span className="font-semibold text-gray-900">&lt; 1ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">신뢰도:</span>
                              <span className="font-semibold text-gray-900">99.5%</span>
                            </div>
                          </div>
                          <div className="border-t border-gray-200 pt-4">
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">주요 특징</h4>
                            <ul className="space-y-1 text-xs text-gray-600">
                              <li className="flex items-start">
                                <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>콤팩트 설계</span>
                              </li>
                              <li className="flex items-start">
                                <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>저온도 상승</span>
                              </li>
                              <li className="flex items-start">
                                <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>높은 정확도</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-primary hover:shadow-lg transition-all">
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-primary mb-4">6-Pin Fuse Box</h3>
                          <div className="space-y-3 mb-4 text-sm">
                            <div className="flex justify-between pb-2 border-b border-gray-200">
                              <span className="text-gray-600">전압:</span>
                              <span className="font-semibold text-gray-900">48V DC</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-gray-200">
                              <span className="text-gray-600">전류:</span>
                              <span className="font-semibold text-gray-900">1~50A</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-gray-200">
                              <span className="text-gray-600">응답:</span>
                              <span className="font-semibold text-gray-900">&lt; 0.8ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">신뢰도:</span>
                              <span className="font-semibold text-gray-900">99.8%</span>
                            </div>
                          </div>
                          <div className="border-t border-gray-200 pt-4">
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">주요 특징</h4>
                            <ul className="space-y-1 text-xs text-gray-600">
                              <li className="flex items-start">
                                <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>고압 대응</span>
                              </li>
                              <li className="flex items-start">
                                <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>대전류 처리</span>
                              </li>
                              <li className="flex items-start">
                                <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>최고 정확도</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-primary hover:shadow-lg transition-all">
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-primary mb-4">Smart Fuse</h3>
                          <div className="space-y-3 mb-4 text-sm">
                            <div className="flex justify-between pb-2 border-b border-gray-200">
                              <span className="text-gray-600">전압:</span>
                              <span className="font-semibold text-gray-900">12~48V</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-gray-200">
                              <span className="text-gray-600">통신:</span>
                              <span className="font-semibold text-gray-900">CAN/LIN</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-gray-200">
                              <span className="text-gray-600">기능:</span>
                              <span className="font-semibold text-gray-900">모니터링</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">신뢰도:</span>
                              <span className="font-semibold text-gray-900">99.7%</span>
                            </div>
                          </div>
                          <div className="border-t border-gray-200 pt-4">
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">주요 특징</h4>
                            <ul className="space-y-1 text-xs text-gray-600">
                              <li className="flex items-start">
                                <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>실시간 데이터</span>
                              </li>
                              <li className="flex items-start">
                                <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>원격 진단</span>
                              </li>
                              <li className="flex items-start">
                                <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>예측 기능</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-primary hover:shadow-lg transition-all">
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-primary mb-4">Ultra-Reliable</h3>
                          <div className="space-y-3 mb-4 text-sm">
                            <div className="flex justify-between pb-2 border-b border-gray-200">
                              <span className="text-gray-600">전압:</span>
                              <span className="font-semibold text-gray-900">32~48V</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-gray-200">
                              <span className="text-gray-600">전류:</span>
                              <span className="font-semibold text-gray-900">0.5~100A</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-gray-200">
                              <span className="text-gray-600">무고장:</span>
                              <span className="font-semibold text-gray-900">10년</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">인증:</span>
                              <span className="font-semibold text-gray-900">AEC-Q200</span>
                            </div>
                          </div>
                          <div className="border-t border-gray-200 pt-4">
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">주요 특징</h4>
                            <ul className="space-y-1 text-xs text-gray-600">
                              <li className="flex items-start">
                                <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>극저 오류율</span>
                              </li>
                              <li className="flex items-start">
                                <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>최고 성능</span>
                              </li>
                              <li className="flex items-start">
                                <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>최장 수명</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Certifications */}
                  <section className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
                      안전성 인증
                    </h2>
                    <p className="text-center text-gray-600 mb-12">국제 안전 표준 완벽 준수</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all">
                        <h3 className="text-lg font-semibold text-primary mb-4">국제 표준</h3>
                        <div className="space-y-4">
                          <div className="bg-gray-50 p-3 rounded border-l-3 border-primary">
                            <p className="text-sm font-semibold text-gray-900 mb-1">IEC 60127-2</p>
                            <p className="text-xs text-gray-600 mb-1">소형 퓨즈 표준</p>
                            <p className="text-xs font-bold text-primary">완벽 준수</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded border-l-3 border-primary">
                            <p className="text-sm font-semibold text-gray-900 mb-1">ISO 9001:2015</p>
                            <p className="text-xs text-gray-600 mb-1">품질 관리</p>
                            <p className="text-xs font-bold text-primary">인증 획득</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded border-l-3 border-primary">
                            <p className="text-sm font-semibold text-gray-900 mb-1">AEC-Q200</p>
                            <p className="text-xs text-gray-600 mb-1">자동차 신뢰성</p>
                            <p className="text-xs font-bold text-primary">레벨 2</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded border-l-3 border-primary">
                            <p className="text-sm font-semibold text-gray-900 mb-1">RoHS 2.0</p>
                            <p className="text-xs text-gray-600 mb-1">유해 물질 제한</p>
                            <p className="text-xs font-bold text-primary">완벽 준수</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all">
                        <h3 className="text-lg font-semibold text-primary mb-4">안전성 기준</h3>
                        <div className="space-y-4">
                          <div className="bg-gray-50 p-3 rounded border-l-3 border-primary">
                            <p className="text-sm font-semibold text-gray-900 mb-1">절연 내력</p>
                            <p className="text-xs text-gray-600 mb-1">≥ 1500V (AC)</p>
                            <p className="text-xs font-bold text-primary">초과 달성</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded border-l-3 border-primary">
                            <p className="text-sm font-semibold text-gray-900 mb-1">과전류 응답</p>
                            <p className="text-xs text-gray-600 mb-1">&lt; 1ms</p>
                            <p className="text-xs font-bold text-primary">0.8ms 평균</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded border-l-3 border-primary">
                            <p className="text-sm font-semibold text-gray-900 mb-1">온도 범위</p>
                            <p className="text-xs text-gray-600 mb-1">-40°C ~ 125°C</p>
                            <p className="text-xs font-bold text-primary">검증 완료</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded border-l-3 border-primary">
                            <p className="text-sm font-semibold text-gray-900 mb-1">부식 저항</p>
                            <p className="text-xs text-gray-600 mb-1">1000시간 염무료</p>
                            <p className="text-xs font-bold text-primary">합격</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all">
                        <h3 className="text-lg font-semibold text-primary mb-4">환경 기준</h3>
                        <div className="space-y-4">
                          <div className="bg-gray-50 p-3 rounded border-l-3 border-primary">
                            <p className="text-sm font-semibold text-gray-900 mb-1">SF6-Free</p>
                            <p className="text-xs text-gray-600 mb-1">친환경 설계</p>
                            <p className="text-xs font-bold text-primary">100% 준수</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded border-l-3 border-primary">
                            <p className="text-sm font-semibold text-gray-900 mb-1">RE-Power</p>
                            <p className="text-xs text-gray-600 mb-1">에너지 효율</p>
                            <p className="text-xs font-bold text-primary">등급 A</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded border-l-3 border-primary">
                            <p className="text-sm font-semibold text-gray-900 mb-1">리사이클</p>
                            <p className="text-xs text-gray-600 mb-1">재활용 설계</p>
                            <p className="text-xs font-bold text-primary">95% 이상</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded border-l-3 border-primary">
                            <p className="text-sm font-semibold text-gray-900 mb-1">탄소 발자국</p>
                            <p className="text-xs text-gray-600 mb-1">저탄소 생산</p>
                            <p className="text-xs font-bold text-primary">40% 감소</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Testimonials */}
                  <section className="mb-16 py-12 bg-gradient-to-b from-gray-50 to-white rounded-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
                      고객 피드백
                    </h2>
                    <p className="text-center text-gray-600 mb-12">FM의 신뢰도를 증명하는 고객 목소리</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                      <div className="bg-white p-8 rounded-lg border-l-4 border-primary">
                        <p className="text-gray-700 italic leading-relaxed mb-4">
                          &quot;FM 퓨즈는 10년간 제로 결함으로 운영되고 있습니다. 
                          신뢰도가 정말 뛰어납니다.&quot;
                        </p>
                        <p className="text-sm text-gray-500">— 글로벌 자동차 제조사 엔지니어</p>
                      </div>

                      <div className="bg-white p-8 rounded-lg border-l-4 border-primary">
                        <p className="text-gray-700 italic leading-relaxed mb-4">
                          &quot;AI 검사로 품질이 또다시 향상되었다는 점이 인상적입니다. 
                          기술 개선에 계속 투자하는 회사다.&quot;
                        </p>
                        <p className="text-sm text-gray-500">— EV 배터리 시스템 개발자</p>
                      </div>

                      <div className="bg-white p-8 rounded-lg border-l-4 border-primary">
                        <p className="text-gray-700 italic leading-relaxed mb-4">
                          &quot;FM 제품은 단가 대비 신뢰도가 최고입니다. 
                          경쟁사 대비 확실히 낫습니다.&quot;
                        </p>
                        <p className="text-sm text-gray-500">— 자동차 부품 공급 담당자</p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            )}

            {/* Media Center Tab */}
            {activeTab === 3 && (
              <div className="transition-all duration-500 ease-in-out opacity-100 block animate-fadeIn">
                <div className="prose prose-lg max-w-none">
                  {/* CI 이미지 */}
                  <div className="mb-8">
                    <img
                      src="/images/FM_CI_img.png"
                      alt="FM Corporate Identity"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>

                  {/* 문서 헤더 */}
                  <div className="mb-8 border-b border-gray-200 pb-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      FM CORPORATE IDENTITY GUIDELINE
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                      기업 정체성 가이드
                    </h2>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><strong>문서명</strong>: FM Corporate Identity Guideline</p>
                      <p><strong>버전</strong>: REV A</p>
                      <p><strong>작성일</strong>: 2025년 12월 28일</p>
                      <p><strong>관리자</strong>: FM 브랜드팀</p>
                      <p><strong>용도</strong>: 모든 마케팅, 인쇄, 디지털 자료</p>
                    </div>
                  </div>

                  {/* 개요 */}
                  <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                      개요
                    </h2>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                      CI 정의
                    </h3>
                    <p className="text-lg font-semibold text-primary mb-6">
                      &quot;FM: Crafting Safety, Securing Tomorrow&quot;
                    </p>
                    <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                      FM은 산업용 퓨즈 솔루션의 글로벌 리더로서, 안전과 신뢰성을 상징하는 기업 정체성을 갖추고 있습니다.
                    </p>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                      핵심 가치
                    </h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start text-gray-700">
                        <svg
                          className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-base md:text-lg">
                          <strong>안전성(Safety)</strong>: 제품 신뢰도 최우선
                        </span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <svg
                          className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-base md:text-lg">
                          <strong>혁신(Innovation)</strong>: AI 기반 검사 기술
                        </span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <svg
                          className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-base md:text-lg">
                          <strong>책임감(Responsibility)</strong>: 미래 세대를 위한 지속가능성
                        </span>
                      </li>
                    </ul>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                      브랜드 색상 시스템
                    </h3>
                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">요소</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">색상명</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">CMYK</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">RGB</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">HEX</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">주색</td>
                            <td className="border border-gray-300 px-4 py-2">RED (PANTONE 186 C)</td>
                            <td className="border border-gray-300 px-4 py-2">C:0 M:100 Y:81 K:4</td>
                            <td className="border border-gray-300 px-4 py-2">RGB(211,33,47)</td>
                            <td className="border border-gray-300 px-4 py-2">#D3212F</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">보조색</td>
                            <td className="border border-gray-300 px-4 py-2">WHITE (PANTONE White C)</td>
                            <td className="border border-gray-300 px-4 py-2">C:0 M:0 Y:0 K:0</td>
                            <td className="border border-gray-300 px-4 py-2">RGB(255,255,255)</td>
                            <td className="border border-gray-300 px-4 py-2">#FFFFFF</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">강조색</td>
                            <td className="border border-gray-300 px-4 py-2">BLACK (PANTONE Black 6 C)</td>
                            <td className="border border-gray-300 px-4 py-2">C:100 M:61 Y:52 K:96</td>
                            <td className="border border-gray-300 px-4 py-2">RGB(0,0,0)</td>
                            <td className="border border-gray-300 px-4 py-2">#000000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* 로고 및 심볼 */}
                  <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                      로고 및 심볼
                    </h2>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                      1. 주요 로고 (Main Logo)
                    </h3>
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <p className="font-semibold mb-2">레이아웃:</p>
                      <pre className="text-sm font-mono text-gray-700 whitespace-pre-wrap">
{`┌─────────────────────────────────────┐
│  FM "Crafting Safety,               │
│     Securing Tomorrow"              │
│  ▲ 30mm (HIGH)                      │
│  ◀─ 125mm (WIDTH) ─►                │
└─────────────────────────────────────┘`}
                      </pre>
                    </div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                      구성 요소
                    </h4>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>&quot;FM&quot; 텍스트</strong>: PANTONE 186 C (빨강), 굵은 산세리프체</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>타이라인</strong>: &quot;Crafting Safety, Securing Tomorrow&quot; (회색, 별도 폰트)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>비율</strong>: 4:1 (가로:세로)</span>
                      </li>
                    </ul>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                      2. 축약형 로고 (Symbol Mark)
                    </h3>
                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">용도</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">사용 장소</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">최소 크기</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">파비콘</td>
                            <td className="border border-gray-300 px-4 py-2">웹사이트, 탭 아이콘</td>
                            <td className="border border-gray-300 px-4 py-2">16x16 px</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">애플리케이션</td>
                            <td className="border border-gray-300 px-4 py-2">모바일 앱, 소프트웨어</td>
                            <td className="border border-gray-300 px-4 py-2">512x512 px</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">인장</td>
                            <td className="border border-gray-300 px-4 py-2">공식 문서</td>
                            <td className="border border-gray-300 px-4 py-2">20x20 mm</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* 색상 시스템 */}
                  <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                      색상 시스템
                    </h2>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                      1. 주요 색상 (Primary Colors)
                    </h3>
                    <div className="space-y-6 mb-6">
                      <div className="border border-gray-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                          FM Red (PANTONE 186 C)
                        </h4>
                        <div className="space-y-2 text-sm text-gray-700 mb-4">
                          <p>CMYK: C:0 M:100 Y:81 K:4</p>
                          <p>RGB: R:211 G:33 B:47</p>
                          <p>HEX: #D3212F</p>
                          <p>Pantone: 186 C</p>
                        </div>
                        <p className="font-semibold mb-2">용도:</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• 로고 주색</li>
                          <li>• 제목, 강조 텍스트</li>
                          <li>• 버튼, 콜투액션</li>
                          <li>• 배경 액센트</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                          White (PANTONE White C)
                        </h4>
                        <div className="space-y-2 text-sm text-gray-700 mb-4">
                          <p>CMYK: C:0 M:0 Y:0 K:0</p>
                          <p>RGB: R:255 G:255 B:255</p>
                          <p>HEX: #FFFFFF</p>
                          <p>Pantone: White C</p>
                        </div>
                        <p className="font-semibold mb-2">용도:</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• 배경색 (기본)</li>
                          <li>• 텍스트 (다크 배경에)</li>
                          <li>• 여백 (공간감)</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                          Black (PANTONE Black 6 C)
                        </h4>
                        <div className="space-y-2 text-sm text-gray-700 mb-4">
                          <p>CMYK: C:100 M:61 Y:52 K:96</p>
                          <p>RGB: R:0 G:0 B:0</p>
                          <p>HEX: #000000</p>
                          <p>Pantone: Black 6 C</p>
                        </div>
                        <p className="font-semibold mb-2">용도:</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• 본문 텍스트</li>
                          <li>• 기본 선(line)</li>
                          <li>• 진중한 분위기 표현</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* 타이포그래피 */}
                  <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                      타이포그래피
                    </h2>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                      1. 로고 및 제목용 (Headline)
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 mb-4">
                      <strong>추천 폰트</strong>:
                    </p>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li>• <strong>1순위</strong>: Helvetica Neue Bold / Arial Bold (로고, 제목)</li>
                      <li>• <strong>2순위</strong>: Montserrat Bold / Roboto Bold (대안)</li>
                      <li>• <strong>특징</strong>: 기하학적, 산세리프(Sans-serif)</li>
                    </ul>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                      3. 한글 타이포그래피 (한국 시장용)
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 mb-4">
                      <strong>추천 폰트</strong>:
                    </p>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li>• <strong>1순위</strong>: 나눔 고딕 Bold / 나눔 고딕</li>
                      <li>• <strong>2순위</strong>: 맑은 고딕 Bold / 맑은 고딕</li>
                      <li>• <strong>특징</strong>: 한글 가독성 최적화</li>
                    </ul>
                  </section>

                  {/* 금지사항 */}
                  <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                      금지사항
                    </h2>
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-4">
                      ❌ 절대 하면 안 되는 것
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                          1. 로고 변형
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• 로고의 비율 변경 ❌</li>
                          <li>• 로고 회전 (0도만 허용) ❌</li>
                          <li>• 로고 색상 변경 (Red만 허용) ❌</li>
                          <li>• 로고 요소 추가/삭제 ❌</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                          2. 색상 변경
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Red를 다른 색상으로 변경 ❌</li>
                          <li>• CMYK 값과 다른 색상 사용 ❌</li>
                          <li>• 저품질 인쇄로 색상 왜곡 ❌</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* 문의 및 피드백 */}
                  <section className="mb-12 border-t border-gray-200 pt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                      문의 및 피드백
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 mb-4">
                      <strong>이 가이드에 대한 질문이 있으신가요?</strong>
                    </p>
                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">주제</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">담당자</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">연락처</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">로고/색상</td>
                            <td className="border border-gray-300 px-4 py-2">디자인팀</td>
                            <td className="border border-gray-300 px-4 py-2">design@fm.com</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">타이포그래피</td>
                            <td className="border border-gray-300 px-4 py-2">마케팅팀</td>
                            <td className="border border-gray-300 px-4 py-2">marketing@fm.com</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">파일 요청</td>
                            <td className="border border-gray-300 px-4 py-2">브랜드팀</td>
                            <td className="border border-gray-300 px-4 py-2">brand@fm.com</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Footer */}
                  <div className="border-t border-gray-200 pt-8 mt-12 text-center">
                    <p className="text-sm text-gray-600 mb-2">
                      © 2025 FM Corporation. All Rights Reserved.
                    </p>
                    <p className="text-base font-semibold text-primary">
                      &quot;Crafting Safety, Securing Tomorrow&quot;
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

