"use client";

import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

export default function Card({ title, description, imageUrl, link }: CardProps) {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {imageUrl && (
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        {link && link !== "#" && (
          <Link
            href={link}
            className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors"
          >
            View more
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
          </Link>
        )}
      </div>
    </div>
  );
}

