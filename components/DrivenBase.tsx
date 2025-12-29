"use client";

import { useState } from "react";
import Card from "./Card";

const drivenBaseItems = [
  {
    id: 1,
    title: "Quality is not an act, it is a habit.",
    description: "— Aristotle",
    imageUrl: "/images/Aristotle.webp",
  },
  {
    id: 2,
    title: "Alone we can do so little; together we can do so much.",
    description: "— Helen Keller",
    imageUrl: "/images/Helen-Keller.jpg",
  },
  {
    id: 3,
    title: "The only way to do great work is to love what you do.",
    description: "— Steve Jobs",
    imageUrl: "/images/Steve.webp",
  },
  {
    id: 4,
    title: "Success is not final, failure is not fatal.",
    description: "— Winston Churchill",
    imageUrl: "/images/churchill.webp",
  },
  {
    id: 5,
    title: "If you’re not adding some nonsense to the design, you’re probably not innovating enough.",
    description: "- Elon Musk",
    imageUrl: "/images/Elon.webp",
  },
];

export default function DrivenBase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;

  const totalSlides = Math.ceil(drivenBaseItems.length / itemsPerSlide);
  const currentItems = drivenBaseItems.slice(
    currentIndex * itemsPerSlide,
    (currentIndex + 1) * itemsPerSlide
  );

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Passion Driven
        </h2>

        <div className="relative">
          {/* Slides */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {drivenBaseItems
                      .slice(
                        slideIndex * itemsPerSlide,
                        (slideIndex + 1) * itemsPerSlide
                      )
                      .map((item) => (
                        <Card
                          key={item.id}
                          title={item.title}
                          description={item.description}
                          imageUrl={item.imageUrl}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-colors z-10"
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6"
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
              <button
                onClick={goToNext}
                className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-colors z-10"
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6"
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
            </>
          )}

          {/* Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-gray-300 hover:bg-gray-400 w-3"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

