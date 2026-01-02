import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function AIInspectionPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <article className="pt-20 md:pt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <time className="text-sm text-gray-500 mb-4 block">
              Dec. 23, 2025
            </time>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI를 활용한 퓨즈 검수공정 고도화 시연
            </h1>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                FM은 AI 기반 퓨즈 검수공정 고도화 기술을 개발하여 제조 품질 및 효율성을 크게 향상시켰습니다.
              </p>

              {/* YouTube Video */}
              <YouTubeEmbed
                videoId="Y0hIOCabe1k"
                title="AI를 활용한 퓨즈 검수공정 고도화 시연"
              />

              <section className="mt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  주요 내용
                </h2>
                <ul className="space-y-4 list-disc list-inside">
                  <li>AI 기반 자동 검수 시스템 도입으로 검수 정확도 99.9% 달성</li>
                  <li>기존 검수 시간 대비 70% 단축</li>
                  <li>불량률 50% 이상 감소</li>
                  <li>실시간 품질 모니터링 및 데이터 분석 체계 구축</li>
                </ul>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  기술적 특징
                </h2>
                <div className="space-y-4">
                  <p>
                    본 시스템은 딥러닝 기반 이미지 분석 기술과 물리적인 통전 검사를 활용하여 퓨즈의 결착 여부와, 케이스 결합의 오류 등을 자동으로 감지합니다. 
                    고해상도 카메라와 AI 알고리즘이 결합되어 인력 검수에서 놓칠 수 있는 부분까지 정밀하게 검사할 수 있습니다.
                  </p>
                  <p>
                    또한 실시간 데이터 수집 및 분석을 통해 생산 공정의 품질 트렌드를 모니터링하고, 
                    예측 분석을 통한 불량 예방 시스템을 구축하였습니다.
                  </p>
                </div>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  향후 계획
                </h2>
                <p>
                  FM은 이번 성과를 바탕으로 전 생산 라인에 AI 검수 시스템을 확대 적용할 예정이며, 
                  지속적인 알고리즘 개선을 통해 더욱 정밀한 품질 관리 체계를 구축해 나가겠습니다.
                </p>
              </section>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12 pt-8 border-t">
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
              목록으로 돌아가기
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}

