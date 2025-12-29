"use client";

import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { chapters } from "./chapters";
import { isImageObject, isCodeBlock, getImageUrl, getImageUrls, getImageSections } from "./utils";
import { laserPointerCursor } from "./constants";

export default function WhatWeDoPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  // 뷰 모드 상태 관리 (각 탭별로 독립적으로 관리)
  const [viewModes, setViewModes] = useState<Record<number, 'scroll' | 'slide'>>({});
  // 슬라이드 모드에서 현재 보이는 블록 인덱스 (각 탭별로 독립적으로 관리)
  const [activeBlockIndex, setActiveBlockIndex] = useState<Record<number, number>>({});
  // 각 블록별 이미지 인덱스 관리 (키: `tabIndex-blockIndex`)
  const [activeImageIndex, setActiveImageIndex] = useState<Record<string, number>>({});

  // 현재 탭의 뷰 모드 가져오기 (기본값: 'scroll')
  const getViewMode = (tabIndex: number): 'scroll' | 'slide' => {
    return viewModes[tabIndex] || 'scroll';
  };

  // 현재 탭의 블록 인덱스 가져오기 (기본값: 0)
  const getCurrentBlockIndex = (tabIndex: number): number => {
    return activeBlockIndex[tabIndex] || 0;
  };

  // 현재 이미지 인덱스 가져오기 (기본값: 0)
  const getCurrentImageIndex = (tabIndex: number, blockIndex: number): number => {
    const key = `${tabIndex}-${blockIndex}`;
    return activeImageIndex[key] || 0;
  };

  // 이미지 인덱스 설정
  const setCurrentImageIndex = (tabIndex: number, blockIndex: number, imageIndex: number) => {
    const key = `${tabIndex}-${blockIndex}`;
    setActiveImageIndex((prev) => ({
      ...prev,
      [key]: imageIndex,
    }));
  };

  // 뷰 모드 토글 함수
  const handleToggleViewMode = (tabIndex: number) => {
    const currentMode = getViewMode(tabIndex);
    const newMode = currentMode === 'scroll' ? 'slide' : 'scroll';
    
    setViewModes((prev) => ({
      ...prev,
      [tabIndex]: newMode,
    }));

    // 슬라이드 모드로 전환 시 블록 인덱스와 이미지 인덱스를 0으로 초기화
    if (newMode === 'slide') {
      setActiveBlockIndex((prev) => ({
        ...prev,
        [tabIndex]: 0,
      }));
      setCurrentImageIndex(tabIndex, 0, 0);
    }
  };

  // 다음 블록으로 이동
  const handleNextBlock = (tabIndex: number, totalBlocks: number) => {
    const currentIndex = getCurrentBlockIndex(tabIndex);
    if (currentIndex < totalBlocks - 1) {
      const newBlockIndex = currentIndex + 1;
      setActiveBlockIndex((prev) => ({
        ...prev,
        [tabIndex]: newBlockIndex,
      }));
      
      // 새 블록으로 이동할 때 이미지 인덱스 초기화
      setCurrentImageIndex(tabIndex, newBlockIndex, 0);
      
      // 슬라이드 블록 컨테이너로 스크롤 (내용 상단이 보이도록)
      setTimeout(() => {
        const slideContainer = document.getElementById(`slide-container-${tabIndex}`);
        if (slideContainer) {
          const headerOffset = 320; // 헤더 + 탭 높이 + 추가 여백 (320px)
          const elementPosition = slideContainer.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 0);
    }
  };

  // 이전 블록으로 이동
  const handlePrevBlock = (tabIndex: number) => {
    const currentIndex = getCurrentBlockIndex(tabIndex);
    if (currentIndex > 0) {
      const newBlockIndex = currentIndex - 1;
      setActiveBlockIndex((prev) => ({
        ...prev,
        [tabIndex]: newBlockIndex,
      }));
      
      // 새 블록으로 이동할 때 이미지 인덱스 초기화
      setCurrentImageIndex(tabIndex, newBlockIndex, 0);
      
      // 슬라이드 블록 컨테이너로 스크롤 (내용 상단이 보이도록)
      setTimeout(() => {
        const slideContainer = document.getElementById(`slide-container-${tabIndex}`);
        if (slideContainer) {
          const headerOffset = 320; // 헤더 + 탭 높이 + 추가 여백 (320px)
          const elementPosition = slideContainer.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 0);
    }
  };

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, []);

  // 슬라이드 모드에서 키보드 화살표 키 지원
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentViewMode = getViewMode(activeTab);
      if (currentViewMode !== 'slide') return;

      const currentChapter = chapters[activeTab];
      if (!currentChapter || !currentChapter.images || currentChapter.images.length === 0) return;

      const totalBlocks = currentChapter.images.length;
      const currentBlockIdx = getCurrentBlockIndex(activeTab);

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentBlockIdx > 0) {
          handlePrevBlock(activeTab);
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentBlockIdx < totalBlocks - 1) {
          handleNextBlock(activeTab, totalBlocks);
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [activeTab, viewModes, activeBlockIndex]);

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 md:pt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          {/* Page Header */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              What we do
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              FM의 프로젝트 공정을 소개합니다
            </p>
          </header>

          {/* Tabs */}
          <div className="mb-8 md:mb-12">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-2 md:space-x-4 border-b border-gray-200 min-w-max md:min-w-0 pb-1">
                {chapters.map((chapter, index) => (
                  <button
                    key={chapter.id}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-200 border-b-2 ${
                      activeTab === index
                        ? "text-primary border-primary"
                        : "text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300"
                    }`}
                  >
                    {chapter.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mt-8 min-h-[400px]">
            {chapters.map((chapter, index) => {
              const viewMode = getViewMode(index);
              const currentBlockIndex = getCurrentBlockIndex(index);
              const totalBlocks = chapter.images?.length || 0;
              
              return (
                <div
                  key={chapter.id}
                  className={`transition-all duration-500 ease-in-out ${
                    activeTab === index
                      ? "opacity-100 block animate-fadeIn"
                      : "opacity-0 hidden"
                  }`}
                >
                  <div className="space-y-12">
                    {/* Title and Description */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                          {chapter.title}
                        </h2>
                        {/* 뷰 모드 토글 버튼 */}
                        {totalBlocks > 0 && (
                          <button
                            onClick={() => handleToggleViewMode(index)}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                            title={viewMode === 'scroll' ? '슬라이드 모드로 전환' : '스크롤 모드로 전환'}
                          >
                            {viewMode === 'scroll' ? (
                              <>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                                <span>슬라이드</span>
                              </>
                            ) : (
                              <>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                </svg>
                                <span>스크롤</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>
                      <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                        {chapter.description}
                      </p>
                    </div>

                    {/* Image-Description Pairs */}
                    {chapter.images && chapter.images.length > 0 && (
                      <div>
                        {viewMode === 'scroll' ? (
                          /* 스크롤 모드: 모든 블록 표시 */
                          <div className="space-y-8">
                            {chapter.images.map((image, imgIndex) => {
                              if (!image) return null;
                              const imageSections = getImageSections(image);
                              const isCode = isCodeBlock(image);
                              return (
                                <div
                                  key={imgIndex}
                                  className={`flex flex-col ${imageSections ? "lg:flex-row" : ""} gap-8 lg:gap-12`}
                                >
                            {/* Image or Code - Left Side */}
                            <div className={`w-full ${imageSections ? "lg:w-1/2" : ""} flex-shrink-0`}>
                              {isCode ? (
                                // Code Block
                                <div className="rounded-lg overflow-hidden">
                                  <SyntaxHighlighter
                                    language={image.language}
                                    style={vscDarkPlus}
                                    customStyle={{
                                      margin: 0,
                                      borderRadius: '0.5rem',
                                      fontSize: '0.75rem',
                                      lineHeight: '1.5',
                                      padding: '1rem',
                                      maxHeight: '900px',
                                      overflowY: 'auto',
                                    }}
                                    showLineNumbers={true}
                                    wrapLines={true}
                                    wrapLongLines={true}
                                    codeTagProps={{
                                      style: {
                                        fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                                      }
                                    }}
                                  >
                                    {image.code}
                                  </SyntaxHighlighter>
                                </div>
                              ) : (
                                // Image
                                <div className="rounded-lg overflow-hidden bg-gray-200 cursor-pointer hover:opacity-90 transition-opacity">
                                  {(() => {
                                    const imageUrl = getImageUrl(image);
                                    return failedImages.has(imageUrl) ? (
                                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm py-8">
                                        이미지 준비중
                                      </div>
                                    ) : (
                                      <img
                                        src={imageUrl}
                                        alt={`${chapter.title} - 이미지 ${imgIndex + 1}`}
                                        className="w-full h-auto object-contain"
                                        onClick={() => setSelectedImage(imageUrl)}
                                        onError={() => {
                                          setFailedImages((prev) => new Set(prev).add(imageUrl));
                                        }}
                                      />
                                    );
                                  })()}
                                </div>
                              )}
                            </div>

                            {/* Sections - Right Side */}
                            {imageSections && imageSections.length > 0 && (
                              <div className="w-full lg:w-1/2 flex-shrink-0 space-y-8">
                                {imageSections.map((section, sectionIdx) => (
                                  <div key={sectionIdx}>
                                    {section.title && (
                                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                        {section.title}
                                      </h3>
                                    )}
                                    <ul className="space-y-3">
                                      {(Array.isArray(section.description)
                                        ? section.description
                                        : section.description.split("\n")
                                      ).map((line, lineIdx) => (
                                        <li
                                          key={lineIdx}
                                          className="flex items-start text-gray-700"
                                        >
                                          <svg
                                            className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={2}
                                              d="M5 13l4 4L19 7"
                                            />
                                          </svg>
                                          <span className="text-base md:text-lg">
                                            {line}
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                          </div>
                        ) : (
                          /* 슬라이드 모드: 하나의 블록만 표시 */
                          <div 
                            id={`slide-container-${index}`} 
                            className="relative"
                            style={{
                              cursor: laserPointerCursor
                            }}
                          >
                            {/* 현재 블록 표시 */}
                            {(() => {
                              const currentImage = chapter.images[currentBlockIndex];
                              if (!currentImage) return null;
                              
                              const imageSections = getImageSections(currentImage);
                              const isCode = isCodeBlock(currentImage);
                              
                              return (
                                <div className={`flex flex-col ${imageSections ? "lg:flex-row" : ""} gap-8 lg:gap-12`}>
                                  {/* Image or Code - Left Side */}
                                  <div className={`w-full ${imageSections ? "lg:w-1/2" : ""} flex-shrink-0`}>
                                    {isCode ? (
                                      // Code Block
                                      <div className="rounded-lg overflow-hidden">
                                        <SyntaxHighlighter
                                          language={currentImage.language}
                                          style={vscDarkPlus}
                                          customStyle={{
                                            margin: 0,
                                            borderRadius: '0.5rem',
                                            fontSize: '0.75rem',
                                            lineHeight: '1.5',
                                            padding: '1rem',
                                            maxHeight: '500px',
                                            overflowY: 'auto',
                                          }}
                                          showLineNumbers={true}
                                          wrapLines={true}
                                          wrapLongLines={true}
                                          codeTagProps={{
                                            style: {
                                              fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                                            }
                                          }}
                                        >
                                          {currentImage.code}
                                        </SyntaxHighlighter>
                                      </div>
                                    ) : (
                                      // Image
                                      (() => {
                                        const imageUrls = getImageUrls(currentImage);
                                        const currentImgIndex = getCurrentImageIndex(index, currentBlockIndex);
                                        const hasMultipleImages = imageUrls.length > 1;
                                        const currentImageUrl = imageUrls[currentImgIndex] || imageUrls[0] || '';
                                        
                                        return (
                                          <div 
                                            className="rounded-lg overflow-hidden bg-gray-200 relative"
                                            style={{ cursor: laserPointerCursor }}
                                          >
                                            {failedImages.has(currentImageUrl) ? (
                                              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm py-8">
                                                이미지 준비중
                                              </div>
                                            ) : (
                                              <>
                                                <img
                                                  src={currentImageUrl}
                                                  alt={`${chapter.title} - 이미지 ${currentBlockIndex + 1}-${currentImgIndex + 1}`}
                                                  className="w-full h-auto object-contain transition-opacity duration-300"
                                                  onClick={() => setSelectedImage(currentImageUrl)}
                                                  onError={() => {
                                                    setFailedImages((prev) => new Set(prev).add(currentImageUrl));
                                                  }}
                                                  style={{ cursor: laserPointerCursor }}
                                                />
                                                
                                                {/* 다중 이미지인 경우 좌우 버튼 및 인덱스 표시 */}
                                                {hasMultipleImages && (
                                                  <>
                                                    {/* 좌측 버튼 */}
                                                    {currentImgIndex > 0 && (
                                                      <button
                                                        onClick={(e) => {
                                                          e.stopPropagation();
                                                          setCurrentImageIndex(index, currentBlockIndex, currentImgIndex - 1);
                                                        }}
                                                        className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-16 md:w-20 flex items-center justify-center transition-opacity duration-200 z-10 hover:opacity-80"
                                                        aria-label="이전 이미지"
                                                      >
                                                        <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                      </button>
                                                    )}
                                                    
                                                    {/* 우측 버튼 */}
                                                    {currentImgIndex < imageUrls.length - 1 && (
                                                      <button
                                                        onClick={(e) => {
                                                          e.stopPropagation();
                                                          setCurrentImageIndex(index, currentBlockIndex, currentImgIndex + 1);
                                                        }}
                                                        className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-16 md:w-20 flex items-center justify-center transition-opacity duration-200 z-10 hover:opacity-80"
                                                        aria-label="다음 이미지"
                                                      >
                                                        <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                        </svg>
                                                      </button>
                                                    )}
                                                    
                                                    {/* 이미지 인덱스 표시 */}
                                                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1.5 rounded-md text-sm font-medium z-10">
                                                      {currentImgIndex + 1} / {imageUrls.length}
                                                    </div>
                                                  </>
                                                )}
                                              </>
                                            )}
                                          </div>
                                        );
                                      })()
                                    )}
                                  </div>

                                  {/* Sections - Right Side */}
                                  {imageSections && imageSections.length > 0 && (
                                    <div className="w-full lg:w-1/2 flex-shrink-0 space-y-8">
                                      {imageSections.map((section, sectionIdx) => (
                                        <div key={sectionIdx}>
                                          {section.title && (
                                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                              {section.title}
                                            </h3>
                                          )}
                                          <ul className="space-y-3">
                                            {(Array.isArray(section.description)
                                              ? section.description
                                              : section.description.split("\n")
                                            ).map((line, lineIdx) => (
                                              <li
                                                key={lineIdx}
                                                className="flex items-start text-gray-700"
                                              >
                                                <svg
                                                  className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  viewBox="0 0 24 24"
                                                >
                                                  <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                  />
                                                </svg>
                                                <span className="text-base md:text-lg">
                                                  {line}
                                                </span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            })()}

                            {/* 네비게이션 컨트롤 */}
                            <div className="flex items-center justify-between mt-8">
                              {/* 이전 버튼 */}
                              <button
                                onClick={() => handlePrevBlock(index)}
                                disabled={currentBlockIndex === 0}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                                  currentBlockIndex === 0
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : "bg-primary text-white hover:bg-primary-dark"
                                }`}
                                aria-label="이전 블록"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                <span className="hidden sm:inline">이전</span>
                              </button>

                              {/* 블록 인덱스 표시 */}
                              <div className="text-sm md:text-base text-gray-600 font-medium">
                                {currentBlockIndex + 1} / {totalBlocks}
                              </div>

                              {/* 다음 버튼 */}
                              <button
                                onClick={() => handleNextBlock(index, totalBlocks)}
                                disabled={currentBlockIndex >= totalBlocks - 1}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                                  currentBlockIndex >= totalBlocks - 1
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : "bg-primary text-white hover:bg-primary-dark"
                                }`}
                                aria-label="다음 블록"
                              >
                                <span className="hidden sm:inline">다음</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                  {/* General Content */}
                  <div>

                    {/* Specifications */}
                    {'specifications' in chapter && (chapter as any).specifications && (
                      <div className="mb-6">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                          사양/제원
                        </h3>
                        {Array.isArray((chapter as any).specifications) ? (
                          <ul className="space-y-3">
                            {(chapter as any).specifications.map((spec: string, idx: number) => (
                              <li
                                key={idx}
                                className="flex items-start text-gray-700"
                              >
                                <svg
                                  className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span className="text-base md:text-lg">
                                  {spec}
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="flex items-start text-gray-700">
                            <svg
                              className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <p className="text-base md:text-lg">
                              {(chapter as any).specifications}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Technical Details */}
                    {'technicalDetails' in chapter && (chapter as any).technicalDetails && (
                      <div className="mb-6">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                          기술 상세 설명
                        </h3>
                        {Array.isArray((chapter as any).technicalDetails) ? (
                          <ul className="space-y-3">
                            {(chapter as any).technicalDetails.map((detail: string, idx: number) => (
                              <li
                                key={idx}
                                className="flex items-start text-gray-700"
                              >
                                <svg
                                  className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span className="text-base md:text-lg">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                            {String((chapter as any).technicalDetails).split('\n').map((line: string, idx: number) => (
                              <div key={idx} className="flex items-start mb-2">
                                <svg
                                  className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span>{line}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Results */}
                    {'results' in chapter && (chapter as any).results && (
                      <div className="mb-6">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                          결과/성과
                        </h3>
                        {Array.isArray((chapter as any).results) ? (
                          <ul className="space-y-3">
                            {(chapter as any).results.map((result: string, idx: number) => (
                              <li
                                key={idx}
                                className="flex items-start text-gray-700"
                              >
                                <svg
                                  className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span className="text-base md:text-lg">
                                  {result}
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="flex items-start text-gray-700">
                            <svg
                              className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <p className="text-base md:text-lg leading-relaxed">
                              {(chapter as any).results}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Features */}
                    {'features' in chapter && (chapter as any).features && (chapter as any).features.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                          주요 특징
                        </h3>
                        <ul className="space-y-3">
                          {(chapter as any).features.map((feature: string, idx: number) => (
                            <li
                              key={idx}
                              className="flex items-start text-gray-700"
                            >
                              <svg
                                className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-base md:text-lg">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Reference */}
                    {chapter.reference && (
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                          참고
                        </h3>
                        <a
                          href={chapter.reference}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-dark inline-flex items-center font-medium transition-colors break-all"
                        >
                          <span className="mr-2">{chapter.reference}</span>
                          <svg
                            className="w-4 h-4 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />

      {/* Image Modal */}
      {selectedImage && (() => {
        const isSlideMode = getViewMode(activeTab) === 'slide';
        return (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            style={isSlideMode ? { cursor: laserPointerCursor } : {}}
          >
            <div className="relative max-w-7xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
                aria-label="닫기"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedImage}
                alt="확대된 이미지"
                className="max-w-full max-h-[90vh] object-contain"
                onClick={() => setSelectedImage(null)}
                style={isSlideMode ? { cursor: laserPointerCursor } : { cursor: 'pointer' }}
              />
            </div>
          </div>
        );
      })()}
    </main>
  );
}

