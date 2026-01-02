"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    id: 1,
    name: "최주영",
    role: "IoT팀/PM",
    description: "3D 모델링\nMQTT를 활용한 실시간 데이터 전송\nHMI1 제작\n대시보드 제작\n홈페이지 제작",
    image: "/images/team-member-1.png",
  },
  {
    id: 2,
    name: "김재열",
    role: "IoT팀",
    description: "3D 모델링\n통전 테스트 시스템 설계 및 제작\n비전 테스트 조명 시스템 설계 및 제작",
    image: "https://res.cloudinary.com/dcjij84tc/image/upload/v1767278058/1767275916518_po3asi.jpg",
  },
  {
    id: 3,
    name: "김태연",
    role: "PLC/로봇팀",
    description: "PLC 로직 작성\n서보 제어\nHMI3 제작\n파이썬 통합 코드 설계",
    image: "/images/team-member-3.jpg",
  },
  {
    id: 4,
    name: "정종철",
    role: "PLC/로봇팀",
    description: "PLC프로그램 제작\n팔레타이징 로봇 구현",
    image: "/images/team-member-4.jpg",
  },
  {
    id: 5,
    name: "지동원",
    role: "PLC/로봇팀",
    description: "PLC프로그램 제작\nHMI2 제작\n케이스 결착 로봇 구현",
    image: "https://res.cloudinary.com/dcjij84tc/image/upload/v1767126524/grok_1767091040948_fmvmih.jpg",
  },
  {
    id: 6,
    name: "정재영",
    role: "AI팀",
    description: "YOLO+ResNet18을 활용한 퓨즈 케이스 검수 알고리즘 개발",
    image: "/images/team-member-6.jpg",
  },
  {
    id: 7,
    name: "이연화",
    role: "AI팀",
    description: "YOLO를 활용한 퓨즈 색상 판별 알고리즘 개발",
    image: "/images/team-member-7.jpg",
  },
  {
    id: 8,
    name: "김준수",
    role: "홍보팀",
    description: "시연 영상 제작",
    image: "/images/team-member-8.jpg",
  },
  {
    id: 9,
    name: "이동원",
    role: "PLC/로봇팀",
    description: "PLC프로그램 제작\n지그 테스트 로봇 구현",
    image: "/images/team-member-9.jpg",
  },
];

// Fisher-Yates 알고리즘을 사용하여 배열을 랜덤하게 섞는 함수
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function WhoWeArePage() {
  const [shuffledMembers, setShuffledMembers] = useState(teamMembers);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  // 컴포넌트 마운트 시 한 번만 팀원 배열을 랜덤하게 섞기
  useEffect(() => {
    setShuffledMembers(shuffleArray(teamMembers));
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 md:pt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          {/* Page Header */}
          <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Who we are
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              FM을 이끌어가는 팀을 소개합니다
            </p>
          </header>

          {/* Team Members */}
          <div className="space-y-16 md:space-y-20">
            {shuffledMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
              >
                {/* Left: Image */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="aspect-square w-full max-w-xs mx-auto md:mx-0 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                    {failedImages.has(member.image) ? (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                        이미지 준비중
                      </div>
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={() => {
                          setFailedImages((prev) => new Set(prev).add(member.image));
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Right: Description */}
                <div className="w-full md:w-2/3 flex-shrink-0">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h2>
                  <p className="text-lg md:text-xl text-primary font-semibold mb-4">
                    {member.role}
                  </p>
                  <div className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                    {member.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

