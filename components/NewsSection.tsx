"use client";

import { useState } from "react";

const newsItems = [
  {
    id: 1,
    date: "Dec. 23, 2025",
    title: "AI를 활용한 퓨즈 검수공정 고도화 시연",
    link: "/news/ai-inspection",
  },
  {
    id: 2,
    date: "Dec. 20, 2025",
    title: "FM, 업계 최초 스마트 퓨즈 기술 개발 성공… 제조 혁신의 새 기준을 제시",
    link: "/news/smart-fuse",
  },
  {
    id: 3,
    date: "Dec. 15, 2025",
    title: "완성차 3사 신규 납입 계약체결… 'FM 퓨즈'의 신뢰도 인정",
    link: "/news/auto-contract",
  },
  {
    id: 4,
    date: "Dec. 10, 2025",
    title: "로봇 산업 안전사고 50% 감소, FM 정밀 퓨즈가 '게임 체인저'",
    link: "/news/robot-safety",
  },
  {
    id: 5,
    date: "Dec. 5, 2025",
    title: "FM, 유럽 안전 인증 획득… 글로벌 시장 진출 본격화",
    link: "/news/europe-certification",
  },
];

export default function NewsSection() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleGlobalNewsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 3000);
  };

  return (
    <section id="new" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-0">
            News
          </h2>
          <div className="relative">
            <a
              href="#"
              onClick={handleGlobalNewsClick}
              className="text-primary hover:text-primary-dark font-semibold flex items-center"
            >
              Global News
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            {showTooltip && (
              <div className="absolute top-full right-0 mt-2 bg-white border-2 border-primary rounded-lg shadow-xl p-4 z-50 min-w-[200px] animate-fadeIn">
                <p className="text-primary font-semibold text-lg">
                  글로벌하고 싶습니다!!!
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {newsItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="block border-b border-gray-200 pb-6 hover:border-primary transition-colors group"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <time className="text-sm text-gray-500 mb-2 block md:mb-0">
                    {item.date}
                  </time>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors mt-4 md:mt-0 md:ml-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

