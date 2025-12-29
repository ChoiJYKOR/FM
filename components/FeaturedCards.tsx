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
    title: "Hydrogen energy as the key to achieving zero carbon emission",
    description: "Hydrogen in the near future",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "Automotive semiconductor will transform society",
    description: "A new type of digital transformation",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    link: "#",
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

