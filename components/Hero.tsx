"use client";

import { useState, useEffect } from "react";

const heroSlides = [
  {
    id: 1,
    title: "Safety is Our Foundation",
    subtitle: "세계 최고 수준의 안전 퓨즈로 완성차와 로봇 산업을 지킵니다",
    image: "/img/BG_002.jpg",
  },
  {
    id: 2,
    title: "Precision Engineering",
    subtitle: "스마트 제조 혁신으로 업계 최고의 신뢰성을 확보합니다",
    image: "/img/BG_003.jpg",
  },
  {
    id: 3,
    title: "Fire Prevention at the Frontline",
    subtitle: "시민의 안전이 우리의 책임, 믿을 수 있는 기술로 위기를 예방합니다",
    image: "/img/BG_05.jpg",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = heroSlides[currentSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section className="relative h-[70vh] md:h-screen mt-16 md:mt-0">
      {/* Image Background */}
      <div className="relative h-full w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${slide.image})`,
            opacity: 1,
          }}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 md:px-8 max-w-4xl z-10">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-md">
              {slide.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 md:space-x-4">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="bg-white/80 hover:bg-white text-gray-800 p-1.5 md:p-2 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6"
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
        </button>

        {/* Slide Indicators */}
        <div className="flex space-x-1.5 md:space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 md:h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-primary w-6 md:w-8"
                  : "bg-white/60 hover:bg-white/80 w-2 md:w-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="bg-white/80 hover:bg-white text-gray-800 p-1.5 md:p-2 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6"
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
        </button>
      </div>
    </section>
  );
}

