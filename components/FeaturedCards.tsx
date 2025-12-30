import Card from "./Card";

const featuredItems = [
  {
    id: 1,
    title: "우리의 험난한 여정",
    description: "FM 프로젝트를 완성시키기 위한 우리의 노력",
    imageUrl: "/images/screenshot-2025-12-27.png",
    link: "/our-journey",
  },
  {
    id: 2,
    title: "스타벅스 바리스타에서 프로젝트 리더로",
    description: "FM팀 조장 인터뷰: 11일간의 변신, 그리고 배움",
    imageUrl: "/images/team-member-1.png",
    link: "/interview/choi-juyeong",
  },
  {
    id: 3,
    title: "FM 퓨즈 검수 AI 강의 시리즈",
    description: "컴퓨터 눈으로 보는 완벽한 품질 검사",
    imageUrl: "/images/Vision2/LeCover2.jpeg",
    link: "/lecture",
  },
  {
    id: 4,
    title: "결함 감지 시스템 구축의 분투기",
    description: "FM Safety 정재영 연구원 인터뷰 - 산업용 퓨즈의 100% 신뢰성을 위한 다층 검증 아키텍처 개발 사례",
    imageUrl: "/images/Vision2/LeCover.jpeg",
    link: "/interview/Jung",
  },
];

export default function FeaturedCards() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredItems.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

