"use client";

import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Who we are", href: "/who-we-are" },
    { name: "What we do", href: "/what-we-do" },
    { name: "About FM", href: "/about-company" },
    { name: "News", href: "#new" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Desktop Header */}
      <nav className="hidden md:flex items-center justify-between px-6 lg:px-12 h-20">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-primary">
            FM
          </a>
          <span className="ml-2 text-sm text-gray-600 hidden lg:block">
            Crafting Safety, Securing Tomorrow
          </span>
        </div>

        <ul className="flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-gray-800 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <button
            className="p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label="Search"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div className="relative">
            <span className="text-sm font-medium text-gray-700">KR</span>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <nav className="md:hidden flex items-center justify-between px-4 h-16">
        <a href="/" className="text-xl font-bold text-primary">
          FM
        </a>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-700"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block text-gray-800 hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Language</span>
                <span className="text-gray-700 font-medium text-sm">KR</span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

