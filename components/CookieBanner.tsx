"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCookieMessage, setShowCookieMessage] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleCookieSettings = () => {
    setShowCookieMessage(true);
    setTimeout(() => {
      setShowCookieMessage(false);
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary-dark text-white p-4 md:p-6 z-50 shadow-lg">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base">
            This website uses cookies to improve your experience on our website.
            By clicking "Accept All Cookies", you consent to our use of cookies.
            You can read more in our{" "}
            <a
              href="#"
              className="underline hover:text-gray-200 transition-colors"
            >
              Cookie Policy
            </a>
            .
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative">
            <button
              onClick={handleCookieSettings}
              className="px-6 py-2 bg-primary-dark border-2 border-white text-white hover:bg-primary transition-colors rounded-md font-semibold text-sm md:text-base"
            >
              Cookies Settings
            </button>
            {showCookieMessage && (
              <div className="absolute bottom-full right-0 mb-2 bg-white border-2 border-primary rounded-lg shadow-xl p-4 z-50 min-w-[250px] animate-fadeIn">
                <p className="text-primary font-semibold text-lg">
                  그냥 Accept All 🍪 하세요.
                </p>
              </div>
            )}
          </div>
          <button
            onClick={handleAcceptAll}
            className="px-6 py-2 bg-primary hover:bg-primary-light text-white transition-colors rounded-md font-semibold text-sm md:text-base"
          >
            Accept All Cookies
          </button>
        </div>
      </div>
    </div>
  );
}

