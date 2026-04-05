import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FaithQuoteStrip } from "@/components/home/faith-quote-strip"
import { IntroSection } from "@/components/home/intro-section"
import { StatsBar } from "@/components/home/stats-bar"
import { DiptychSection } from "@/components/home/diptych-section"
import { PullQuoteSection } from "@/components/home/pull-quote-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <Navigation />
      <HeroSection />
      <FaithQuoteStrip />
      <IntroSection />
      <StatsBar />
      <DiptychSection />
      <PullQuoteSection />
      <Footer />
    </main>
  )
}
