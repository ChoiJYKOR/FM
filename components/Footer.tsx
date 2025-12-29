"use client";

import { useState } from "react";

export default function Footer() {
  const [tooltipMessage, setTooltipMessage] = useState<string | null>(null);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, message: string, tooltipId: string) => {
    e.preventDefault();
    setActiveTooltip(tooltipId);
    setTooltipMessage(message);
    setTimeout(() => {
      setTooltipMessage(null);
      setActiveTooltip(null);
    }, 3000);
  };

  return (
    <footer className="bg-gray-900 text-white pb-24 md:pb-12">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">FM</h3>
            <p className="text-gray-400 text-sm mb-4">
              Crafting Safety, Securing Tomorrow
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li className="relative">
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "당신의 정보는 안전합니다. 쿠팡과는 달라요. 그렇지만 FM사 정보를 믿고 투자하진 마세요.", "privacy")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                {activeTooltip === "privacy" && tooltipMessage && (
                  <div className="absolute bottom-full left-0 mb-2 bg-white border-2 border-primary rounded-lg shadow-xl p-4 z-50 min-w-[250px] max-w-[400px] animate-fadeIn">
                    <p className="text-primary font-semibold text-sm leading-relaxed whitespace-normal">
                      {tooltipMessage}
                    </p>
                  </div>
                )}
              </li>
              <li className="relative">
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "우리의 목적은 당신이 우리의 프레젠테이션을 들을 때 졸지 않게 만드는 거에요.", "terms")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
                {activeTooltip === "terms" && tooltipMessage && (
                  <div className="absolute bottom-full left-0 mb-2 bg-white border-2 border-primary rounded-lg shadow-xl p-4 z-50 min-w-[250px] max-w-[400px] animate-fadeIn">
                    <p className="text-primary font-semibold text-sm leading-relaxed whitespace-normal">
                      {tooltipMessage}
                    </p>
                  </div>
                )}
              </li>
              <li className="relative">
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "쿠키에 왜 정책이 필요한지 모르겠어요.", "cookie")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
                {activeTooltip === "cookie" && tooltipMessage && (
                  <div className="absolute bottom-full left-0 mb-2 bg-white border-2 border-primary rounded-lg shadow-xl p-4 z-50 min-w-[250px] max-w-[400px] animate-fadeIn">
                    <p className="text-primary font-semibold text-sm leading-relaxed whitespace-normal">
                      {tooltipMessage}
                    </p>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: juyeong_choi@naver.com</li>
              <li>Phone: +821036245822</li>
              <li>Address: Busan, S.Korea</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} FM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

