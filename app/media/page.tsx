import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Mic, Newspaper, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Media | Dr. Toyin Tofade",
  description: "Media appearances, podcasts, and press coverage featuring Dr. Toyin Tofade.",
}

const mediaAppearances = [
  { 
    outlet: "Albany Business Review", 
    title: "Power 50 Executive", 
    years: "2023, 2024, 2025",
    link: "https://www.bizjournals.com/albany/news/2023/11/06/power-50-toyin-tofade.html"
  },
  { 
    outlet: "Times Union", 
    title: "Albany College of Pharmacy names new president",
    link: "https://www.timesunion.com/news/article/albany-college-of-pharmacy-names-new-president-17022621.php"
  },
  { 
    outlet: "Vanguard News (Nigeria)", 
    title: "Meet Toyin Tofade, first Black female president of a US college",
    link: "https://www.vanguardngr.com/2022/04/meet-toyin-tofade-first-black-female-president-of-a-us-college/"
  },
  { 
    outlet: "Pharma News Online", 
    title: "Toyin Tofade: Highflying Record Breaker in Pharmacy Leadership",
    link: "https://www.pharmanewsonline.com/toyin-tofade-highflying-record-breaker-in-pharmacy-leadership/"
  },
  { 
    outlet: "Premium Times Nigeria", 
    title: "Nigerian woman becomes first Black female president of U.S. college",
    link: "https://www.premiumtimesng.com/news/headlines/522411-nigerian-woman-becomes-first-black-female-president-of-u-s-college.html"
  },
]

const podcasts = [
  { 
    name: "Unscripted (ACPHS Podcast)", 
    episode: "Servant Leadership", 
    platform: "Apple Podcasts",
    link: "https://podcasts.apple.com/us/podcast/unscripted/id1573515282"
  },
  { 
    name: "WHUR: The Journey", 
    episode: "Growing a Pharmacy Program on a Global Stage",
    link: "https://whur.com/"
  },
  { 
    name: "Visionary MD", 
    episode: "Mentorship Across Disciplines",
    link: "#"
  },
  { 
    name: "WAMC Public Radio", 
    episode: "Interviews on pharmacy education and ACPHS leadership",
    link: "https://www.wamc.org/"
  },
]

const sermons = [
  { id: "6aMvNuFESwg", title: "Ministry Message" },
  { id: "mWa5A5U-eH4", title: "Faith & Leadership" },
  { id: "CcoRprZ4UB4", title: "Spiritual Guidance" },
]

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#3D1854] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6993A] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up" className="max-w-3xl">
            <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
              Media
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              In the Spotlight
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Press coverage, podcast appearances, and ministry messages featuring Dr. Tofade&apos;s insights on leadership, healthcare, and faith.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* In The Press */}
      <section className="py-20 bg-[#0C3050]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
              Coverage
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4">
              In the Press
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {mediaAppearances.map((item, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 50}>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#E6F1FB]/10 rounded-xl p-6 backdrop-blur hover:bg-[#E6F1FB]/20 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C6993A]/20 flex items-center justify-center flex-shrink-0">
                      <Newspaper className="w-5 h-5 text-[#FAC775]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#FAC775] font-semibold text-sm mb-2">
                        {item.outlet}
                      </p>
                      <p className="text-white font-serif text-lg">
                        {item.title}
                      </p>
                      {item.years && (
                        <p className="text-[#B5D4F4] text-sm mt-1">{item.years}</p>
                      )}
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#C6993A] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#0C3050] font-semibold text-sm uppercase tracking-wider">
              Audio
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1A0E] mt-4">
              Podcasts & Audio
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {podcasts.map((podcast, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 50}>
                <Link
                  href={podcast.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#EDE5D4] rounded-xl p-6 hover:bg-[#E6DCC8] transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0C3050] flex items-center justify-center flex-shrink-0">
                      <Mic className="w-5 h-5 text-[#FAC775]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#C6993A] font-semibold text-sm mb-2">
                        {podcast.name}
                      </p>
                      <p className="text-[#2C1A0E] font-serif text-lg">
                        {podcast.episode}
                      </p>
                      {podcast.platform && (
                        <p className="text-[#5C4A2A] text-sm mt-1">{podcast.platform}</p>
                      )}
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#C6993A] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sermons */}
      <section className="py-20 bg-[#3D1854]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
              Ministry
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4">
              Messages & Sermons
            </h2>
            <p className="text-white/80 mt-4 max-w-2xl mx-auto">
              In addition to her academic platform, Dr. Tofade is a sought after voice in faith communities. Preaching, teaching, and leading from a place of deep scriptural grounding and lived experience.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {sermons.map((sermon, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
                <Link
                  href={`https://www.youtube.com/watch?v=${sermon.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-black/20">
                    <img
                      src={`https://img.youtube.com/vi/${sermon.id}/maxresdefault.jpg`}
                      alt={sermon.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-[#3D1854] ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-white font-medium mt-3 group-hover:text-[#FAC775] transition-colors">
                    {sermon.title}
                  </p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
