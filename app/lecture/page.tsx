import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLectureContent } from "./utils";
import LectureContent from "./LectureContent";

export default function LecturePage() {
  const lecture1 = getLectureContent(1);
  const lecture2 = getLectureContent(2);
  const lecture3 = getLectureContent(3);

  return (
    <main className="min-h-screen">
      <Header />
      <article className="pt-20 md:pt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              FM 퓨즈 검수 AI 강의 시리즈
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              컴퓨터 눈으로 보는 완벽한 품질 검사
            </p>
          </header>

          {/* Content */}
          <LectureContent
            lecture1={lecture1}
            lecture2={lecture2}
            lecture3={lecture3}
          />

          {/* Back Button */}
          <div className="mt-12">
            <a
              href="/"
              className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
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
              홈으로 돌아가기
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}

