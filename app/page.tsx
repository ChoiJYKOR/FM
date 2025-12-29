import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedCards from "@/components/FeaturedCards";
import NewsSection from "@/components/NewsSection";
import DrivenBase from "@/components/DrivenBase";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedCards />
      <NewsSection />
      <DrivenBase />
      <Footer />
      <CookieBanner />
    </main>
  );
}

