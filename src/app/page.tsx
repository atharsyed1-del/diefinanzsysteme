import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats-section";
import { VideoSection } from "@/components/sections/video-section";
import { TopicsSection } from "@/components/sections/topics-section";
import { ArticlesSection } from "@/components/sections/articles-section";
import { CountriesSection } from "@/components/sections/countries-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <VideoSection />
        <TopicsSection />
        <ArticlesSection />
        <CountriesSection />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </div>
  );
}
